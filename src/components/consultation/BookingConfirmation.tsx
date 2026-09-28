"use client";

import Link from "next/link";
import { Check, Calendar, MapPin, Mail, ArrowRight, Download, Share2 } from "lucide-react";
import { BookingRecord, CONSULTATION_PRICING } from "./types";

interface BookingConfirmationProps {
  booking: BookingRecord;
  onReset: () => void;
}

export default function BookingConfirmation({ booking, onReset }: BookingConfirmationProps) {
  const pricing = CONSULTATION_PRICING[booking.type];

  // Helper to create Google Calendar Event Link
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Blak Meyd Bespoke Consultation (${pricing.title})`);
    const details = encodeURIComponent(
      `Blak Meyd Private Consultation\nReference: ${booking.reference}\nClient: ${booking.firstName} ${booking.lastName}\nFormat: ${booking.format === "in-person" ? "In-Person Fitting Salon (Accra)" : "Virtual Video Link"}\n\nNote: Consultation fees are 100% credited toward your couture garment order.`
    );
    const location = encodeURIComponent(
      booking.format === "in-person"
        ? "Blak Meyd Atelier, Airport Residential Area, Accra, Ghana"
        : "Blak Meyd Virtual Salon (Link provided in email)"
    );

    // approximate 1 hour duration
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section aria-labelledby="confirmation-heading" className="space-y-6">
      {/* Editorial Header */}
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E4ECE7] text-[#0E3B2E] rounded-full text-xs font-sans font-medium mb-3">
          <Check className="w-3.5 h-3.5" />
          <span>Payment Authorized &amp; Slot Confirmed</span>
        </div>
        <h2
          id="confirmation-heading"
          className="font-fraunces text-3xl sm:text-4xl lg:text-[2.5rem] font-normal text-[#15150F] tracking-tight leading-tight"
        >
          CONSULTATION CONFIRMED
        </h2>
        <p className="mt-2 text-xs sm:text-[13.5px] font-sans text-[#736B5E] max-w-xl">
          Your private couture consultation is reserved. We look forward to meeting with you and exploring the creation of your bespoke garment.
        </p>
      </div>

      {/* Main Confirmation Card */}
      <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#15150F]/10 shadow-sm space-y-6">
        {/* Reference Code Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#FAF7F0] border border-[#B98A2E]/30 rounded-sm">
          <div>
            <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#736B5E] block">
              BOOKING REFERENCE
            </span>
            <span className="font-mono text-base sm:text-lg font-bold text-[#15150F] tracking-wider">
              {booking.reference}
            </span>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#736B5E] block">
              STATUS
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E3B2E] font-sans">
              <span className="w-2 h-2 rounded-full bg-[#0E3B2E] animate-pulse" />
              Confirmed &bull; GHS {booking.fee} Paid
            </span>
          </div>
        </div>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
          {/* Item 1: Consultation Type */}
          <div className="space-y-1">
            <span className="text-[11px] text-[#8E8678] font-sans font-medium uppercase tracking-wider block">
              CONSULTATION TYPE
            </span>
            <div className="font-fraunces text-lg text-[#15150F]">
              {pricing.title}
            </div>
            <p className="text-xs text-[#736B5E] font-sans">
              {booking.format === "in-person"
                ? "In-Person Salon at Airport Residential, Accra"
                : "Virtual High-Definition Video Salon"}
            </p>
          </div>

          {/* Item 2: Date & Time */}
          <div className="space-y-1">
            <span className="text-[11px] text-[#8E8678] font-sans font-medium uppercase tracking-wider block">
              DATE &amp; TIME
            </span>
            <div className="font-fraunces text-lg text-[#15150F] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#9E7B3B]" />
              <span>{booking.dateFormatted}</span>
            </div>
            <p className="text-xs text-[#736B5E] font-sans">
              {booking.time} GMT (60 minutes private session)
            </p>
          </div>

          {/* Item 3: Client Details */}
          <div className="space-y-1">
            <span className="text-[11px] text-[#8E8678] font-sans font-medium uppercase tracking-wider block">
              CLIENT
            </span>
            <div className="text-xs sm:text-[13px] font-medium text-[#15150F] font-sans">
              {booking.firstName} {booking.lastName}
            </div>
            <div className="text-xs text-[#736B5E] font-sans">
              {booking.email} &bull; {booking.phone}
            </div>
          </div>

          {/* Item 4: Consultation Fee */}
          <div className="space-y-1">
            <span className="text-[11px] text-[#8E8678] font-sans font-medium uppercase tracking-wider block">
              CONSULTATION FEE
            </span>
            <div className="font-fraunces text-xl text-[#9E7B3B] font-light">
              GHS {booking.fee}
            </div>
            <p className="text-[11px] text-[#0E3B2E] font-sans font-medium">
              100% deductible from your couture garment commission
            </p>
          </div>
        </div>

        {/* Notice of Notifications */}
        <div className="p-4 bg-[#FBF9F4] rounded-sm border border-[#15150F]/10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#15150F] font-sans">
            <Mail className="w-4 h-4 text-[#9E7B3B]" />
            <span>Confirmation &amp; Preparation Email Sent</span>
          </div>
          <p className="text-xs text-[#736B5E] font-sans leading-relaxed">
            A confirmation email containing your calendar invitation, salon entry guidelines, and styling prep sheet has been dispatched to{" "}
            <span className="font-medium text-[#15150F]">{booking.email}</span>. The Blak Meyd creative director and concierge team have also received notification of your appointment.
          </p>
        </div>

        {/* Location & What's Next */}
        <div className="p-4 bg-[#E4ECE7]/30 border border-[#0E3B2E]/15 rounded-sm flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#0E3B2E] shrink-0 mt-0.5" />
          <div className="text-xs font-sans text-[#15150F] leading-relaxed">
            <span className="font-semibold block text-[#0E3B2E]">Atelier Location &amp; Hospitality:</span>
            {booking.format === "in-person"
              ? "Blak Meyd Couture Atelier, Airport Residential Area, Accra, Ghana. Complimentary bespoke tea, champagne, and couture refreshments are served upon arrival."
              : "Virtual Appointment via encrypted high-definition video link. A private link will be activated in your client dashboard 15 minutes before your time slot."}
          </div>
        </div>

        {/* Primary and Dashboard Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link
            href="/dashboard"
            className="flex-1 py-3.5 px-4 bg-[#0E3B2E] text-white hover:bg-[#092920] active:scale-[0.99] transition-all rounded-sm font-sans text-xs sm:text-[13px] font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm text-center"
          >
            <span>VIEW MY CONSULTATION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/dashboard"
            className="flex-1 py-3.5 px-4 bg-white border border-[#15150F]/20 text-[#15150F] hover:bg-[#FAF7F0] hover:border-[#B98A2E] active:scale-[0.99] transition-all rounded-sm font-sans text-xs sm:text-[13px] font-medium tracking-wide flex items-center justify-center gap-2 text-center"
          >
            <span>GO TO CLIENT DASHBOARD</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Calendar & Reset Links */}
        <div className="pt-2 border-t border-[#15150F]/10 flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
          <div className="flex items-center gap-3">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#736B5E] hover:text-[#9E7B3B] flex items-center gap-1.5 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Add to Google Calendar</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onReset}
            className="text-[#736B5E] hover:text-[#15150F] underline underline-offset-2 transition-colors cursor-pointer"
          >
            Book Another Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
