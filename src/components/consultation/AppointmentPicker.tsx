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
  // Today's midnight reference
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Parse currently selected date or default to today/future date
  const parsedDate = selectedDate ? new Date(selectedDate) : today;
  const initialDate = isNaN(parsedDate.getTime()) ? today : parsedDate;

  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());

  // Prevent navigating to months completely in the past
  const isCurrentOrPastMonth =
    currentYear < today.getFullYear() ||
    (currentYear === today.getFullYear() && currentMonth <= today.getMonth());

  // Calendar calculations
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sun
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  const handlePrevMonth = () => {
    if (isCurrentOrPastMonth) return; // Disallow going into past months

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
    const target = new Date(currentYear, currentMonth, day);
    target.setHours(0, 0, 0, 0);

    // Guard: Prevent selecting past days or closed Sundays
    if (target.getTime() < today.getTime() || target.getDay() === 0) {
      return;
    }

    const monthPadded = String(currentMonth + 1).padStart(2, "0");
    const dayPadded = String(day).padStart(2, "0");
    const isoString = `${currentYear}-${monthPadded}-${dayPadded}`;
    const formatted = `${day} ${MONTH_NAMES[currentMonth]} ${currentYear}`;
    onDateChange(isoString, formatted);
  };

  // Build grid days
  const calendarCells = [];

  // Trailing days from previous month (disabled)
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    calendarCells.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      isPast: true,
      isSunday: false,
      isToday: false,
      isAvailable: false,
    });
  }

  // Days of current month
  for (let d = 1; d <= daysInMonth; d++) {
    const cellDate = new Date(currentYear, currentMonth, d);
    cellDate.setHours(0, 0, 0, 0);

    const isPast = cellDate.getTime() < today.getTime();
    const isSunday = cellDate.getDay() === 0;
    const isToday = cellDate.getTime() === today.getTime();
    const isAvailable = !isPast && !isSunday;

    calendarCells.push({
      day: d,
      isCurrentMonth: true,
      isPast,
      isSunday,
      isToday,
      isAvailable,
    });
  }

  // Trailing days into next month to complete rows (disabled)
  const remainingCells = (7 - (calendarCells.length % 7)) % 7;
  for (let n = 1; n <= remainingCells; n++) {
    calendarCells.push({
      day: n,
      isCurrentMonth: false,
      isPast: true,
      isSunday: false,
      isToday: false,
      isAvailable: false,
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
          Choose a date and time that works for you. Bookings are available for today and upcoming dates.
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
                disabled={isCurrentOrPastMonth}
                aria-label="Previous month"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isCurrentOrPastMonth
                    ? "text-[#D4CEBF] cursor-not-allowed opacity-35"
                    : "text-[#15150F] hover:bg-[#F4EFE6] cursor-pointer"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                aria-label="Next month"
                className="w-8 h-8 rounded-full hover:bg-[#F4EFE6] flex items-center justify-center transition-colors text-[#15150F] cursor-pointer"
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
              // Days from adjacent months
              if (!cell.isCurrentMonth) {
                return (
                  <div
                    key={`muted-${idx}`}
                    className="h-8 sm:h-9 flex items-center justify-center text-xs text-[#D4CEBF]/50 font-sans select-none"
                  >
                    {cell.day}
                  </div>
                );
              }

              const monthPadded = String(currentMonth + 1).padStart(2, "0");
              const dayPadded = String(cell.day).padStart(2, "0");
              const thisIsoDate = `${currentYear}-${monthPadded}-${dayPadded}`;
              const isSelected = selectedDate === thisIsoDate;

              // Past Days or Closed Sundays (DISABLED & UNCLICKABLE)
              if (!cell.isAvailable) {
                return (
                  <div
                    key={`day-${cell.day}`}
                    className="h-8 sm:h-9 flex items-center justify-center"
                    title={cell.isSunday ? "Atelier closed on Sundays" : "Past date cannot be booked"}
                  >
                    <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs font-sans text-[#D4CEBF] cursor-not-allowed select-none opacity-60">
                      {cell.day}
                    </span>
                  </div>
                );
              }

              // Available Days (Today and Days Ahead)
              return (
                <div
                  key={`day-${cell.day}`}
                  className="h-8 sm:h-9 flex items-center justify-center"
                >
                  <button
                    type="button"
                    onClick={() => handleSelectDay(cell.day)}
                    title={cell.isToday ? "Today (Available for booking)" : `Available on ${cell.day} ${MONTH_NAMES[currentMonth]}`}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-sans transition-all flex items-center justify-center cursor-pointer relative ${
                      isSelected
                        ? "bg-[#9E7B3B] text-white font-semibold shadow-sm"
                        : cell.isToday
                        ? "border border-[#9E7B3B] text-[#15150F] font-semibold hover:bg-[#F4EFE6]"
                        : "text-[#15150F] hover:bg-[#F4EFE6] hover:text-[#9E7B3B]"
                    }`}
                  >
                    {cell.day}
                    {cell.isToday && !isSelected && (
                      <span className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-[#9E7B3B]" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Studio Hours & Booking Rules Legend */}
          <div className="mt-4 pt-3 border-t border-[#15150F]/5 text-[11px] text-[#736B5E] font-sans flex flex-wrap items-center justify-between gap-2">
            <span>Mon &ndash; Sat: 10:00 AM &ndash; 6:00 PM</span>
            <div className="flex items-center gap-2.5">
              <span className="text-[#8E8678]">&bull; Past dates unavailable</span>
              <span className="text-[#9E7B3B]">&bull; Sun: Closed</span>
            </div>
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
                    className={`py-2 px-2 text-xs font-sans rounded-sm transition-all duration-200 border text-center cursor-pointer ${
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
