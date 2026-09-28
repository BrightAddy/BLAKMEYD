"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TIME_SLOTS } from "./types";

interface AppointmentPickerProps {
  selectedDate: string; // ISO format e.g. "2026-10-14"
  selectedDateFormatted: string; // e.g. "14 October 2026"
  selectedTime: string; // e.g. "2:00 PM"
  onDateChange: (isoDate: string, formattedDate: string) => void;
  onTimeChange: (time: string) => void;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AppointmentPicker({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: AppointmentPickerProps) {
  // Parse currently selected date or default to October 2026 as in the reference
  const initialDate = selectedDate ? new Date(selectedDate) : new Date(2026, 9, 14);
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear() || 2026);
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth() || 9); // 0-indexed: 9 = October

  // Calendar calculations
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sun, 1 = Mon...
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const monthPadded = String(currentMonth + 1).padStart(2, "0");
    const dayPadded = String(day).padStart(2, "0");
    const isoString = `${currentYear}-${monthPadded}-${dayPadded}`;
    const formatted = `${day} ${MONTH_NAMES[currentMonth]} ${currentYear}`;
    onDateChange(isoString, formatted);
  };

  // Build grid days
  const calendarCells = [];

  // Trailing days from previous month
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    calendarCells.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      isPast: true,
      dayOfWeek: (firstDayOfWeek - 1 - i) % 7,
    });
  }

  // Days of current month
  for (let d = 1; d <= daysInMonth; d++) {
    const dayOfWeek = (firstDayOfWeek + d - 1) % 7;
    const isSunday = dayOfWeek === 0; // Atelier closed on Sunday
    calendarCells.push({
      day: d,
      isCurrentMonth: true,
      isPast: isSunday, // closed Sundays
      dayOfWeek,
    });
  }

  // Trailing days into next month to complete rows
  const remainingCells = (7 - (calendarCells.length % 7)) % 7;
  for (let n = 1; n <= remainingCells; n++) {
    calendarCells.push({
      day: n,
      isCurrentMonth: false,
      isPast: true,
      dayOfWeek: (calendarCells.length + n - 1) % 7,
    });
  }

  return (
    <section aria-labelledby="appointment-heading" className="space-y-4 pt-2">
      {/* Heading & Subtitle */}
      <div>
        <h2
          id="appointment-heading"
          className="font-fraunces text-2xl sm:text-[1.65rem] font-normal text-[#15150F] tracking-tight"
        >
          2. Select an Appointment
        </h2>
        <p className="mt-1 text-xs sm:text-[13px] font-sans text-[#736B5E]">
          Choose a date and time that works for you.
        </p>
      </div>

      {/* Calendar & Available Times Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-5 sm:p-6 rounded-sm border border-[#15150F]/10 shadow-sm">
        {/* ── SUB-COLUMN 1: REFINED CALENDAR (7 cols) ── */}
        <div className="md:col-span-7 pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-[#15150F]/10 pb-6 md:pb-0">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-fraunces text-base sm:text-lg font-normal text-[#15150F]">
              {MONTH_NAMES[currentMonth]} {currentYear}
            </span>
            <div className="flex items-center gap-1 text-[#736B5E]">
              <button
                type="button"
                onClick={handlePrevMonth}
                aria-label="Previous month"
                className="w-8 h-8 rounded-full hover:bg-[#F4EFE6] flex items-center justify-center transition-colors text-[#15150F]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                aria-label="Next month"
                className="w-8 h-8 rounded-full hover:bg-[#F4EFE6] flex items-center justify-center transition-colors text-[#15150F]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Weekday Labels */}
          <div className="grid grid-cols-7 text-center mb-2">
            {DAY_NAMES.map((name) => (
              <span
                key={name}
                className="text-[10.5px] font-sans font-medium text-[#8E8678] tracking-wider uppercase py-1"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Day Cells Grid */}
          <div className="grid grid-cols-7 text-center gap-y-1">
            {calendarCells.map((cell, idx) => {
              if (!cell.isCurrentMonth) {
                return (
                  <div
                    key={`muted-${idx}`}
                    className="h-8 sm:h-9 flex items-center justify-center text-xs text-[#D4CEBF] font-sans"
                  >
                    {cell.day}
                  </div>
                );
              }

              const monthPadded = String(currentMonth + 1).padStart(2, "0");
              const dayPadded = String(cell.day).padStart(2, "0");
              const thisIsoDate = `${currentYear}-${monthPadded}-${dayPadded}`;
              const isSelected = selectedDate === thisIsoDate;
              const isSunday = cell.dayOfWeek === 0;

              if (isSunday) {
                return (
                  <div
                    key={`sun-${cell.day}`}
                    className="h-8 sm:h-9 flex items-center justify-center text-xs text-[#D4CEBF] font-sans cursor-not-allowed"
                    title="Atelier closed on Sundays"
                  >
                    {cell.day}
                  </div>
                );
              }

              return (
                <div
                  key={`day-${cell.day}`}
                  className="h-8 sm:h-9 flex items-center justify-center"
                >
                  <button
                    type="button"
                    onClick={() => handleSelectDay(cell.day)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-sans transition-all flex items-center justify-center ${
                      isSelected
                        ? "bg-[#9E7B3B] text-white font-semibold shadow-sm"
                        : "text-[#15150F] hover:bg-[#F4EFE6] hover:text-[#9E7B3B]"
                    }`}
                  >
                    {cell.day}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Studio note */}
          <div className="mt-4 pt-3 border-t border-[#15150F]/5 text-[11px] text-[#736B5E] font-sans flex items-center justify-between">
            <span>Mon &ndash; Sat: 10:00 AM &ndash; 6:00 PM</span>
            <span className="text-[#9E7B3B]">Sun: Closed</span>
          </div>
        </div>

        {/* ── SUB-COLUMN 2: AVAILABLE TIMES (5 cols) ── */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-sans font-semibold tracking-wider uppercase text-[#736B5E] mb-3">
              Available Times
            </h3>

            {/* Time Slot Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {TIME_SLOTS.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => onTimeChange(time)}
                    className={`py-2 px-2 text-xs font-sans rounded-sm transition-all duration-200 border text-center ${
                      isSelected
                        ? "bg-[#0E3B2E] border-[#0E3B2E] text-white font-medium shadow-sm"
                        : "bg-white border-[#D4CEBF] text-[#15150F] hover:border-[#9E7B3B] hover:bg-[#FDFBF7]"
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-4 text-[11px] font-sans text-[#736B5E] leading-relaxed italic">
            Each consultation includes 60 minutes of dedicated private design dialogue in our Accra fitting salon or via high-definition video link.
          </p>
        </div>
      </div>
    </section>
  );
}
