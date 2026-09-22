"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Globe, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

export default function BookingAvailability() {
  return (
    <section
      id="availability"
      className="relative z-10 bg-[#120E0B] text-[#FBF9F4] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-16 border-t border-[#B98A2E]/25"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b border-[#B98A2E]/25 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B98A2E] mb-2">
              <span className="h-[1px] w-6 bg-[#B98A2E]" />
              <span>Section 10 &bull; Atelier Availability System</span>
            </div>

            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#FBF9F4] leading-[1.08]">
              Current Commission &amp; <br />
              <span className="italic font-normal text-[#B98A2E]">Booking Situation.</span>
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 flex items-center gap-3 px-4 py-2 bg-[#0E3B2E]/60 border border-[#B98A2E]/40 rounded-[2px]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono tracking-widest text-[#FBF9F4] uppercase">
              Calendar Live &bull; Q3 &amp; Q4 Intake Open
            </span>
          </div>
        </div>

        {/* ── 3-PANEL AVAILABILITY STATUS MATRIX ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Panel 1: Studio Consultations */}
          <div className="p-7 bg-[#181411] border border-[#B98A2E]/20 rounded-[2px] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-[#B98A2E] mb-4">
                <span className="text-[10px] font-mono tracking-widest uppercase">In-Person</span>
                <MapPin size={16} />
              </div>
              <h3 className="font-fraunces text-2xl font-light text-[#FBF9F4] mb-2">
                Accra Fitting Salon
              </h3>
              <p className="text-xs text-[#E4ECE7]/70 font-light leading-relaxed">
                Private appointments in our serene Accra studio. Includes fabric tactile tour and 24-point anatomical measurement.
              </p>

              <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs font-mono">
                <div className="flex items-center justify-between text-[#E4ECE7]/80">
                  <span className="text-white/50">Next Opening:</span>
                  <span className="text-[#B98A2E]">Tuesday 10:00 AM</span>
                </div>
                <div className="flex items-center justify-between text-[#E4ECE7]/80">
                  <span className="text-white/50">Fee:</span>
                  <span>GHS 200 (Standard)</span>
                </div>
              </div>
            </div>

            <Link
              href="/book?type=in-person"
              className="inline-flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#B98A2E] hover:text-white transition-colors pt-4 border-t border-white/10"
            >
              <span>Select In-Person Slot</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Panel 2: Worldwide Virtual */}
          <div className="p-7 bg-[#181411] border border-[#B98A2E]/20 rounded-[2px] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-[#B98A2E] mb-4">
                <span className="text-[10px] font-mono tracking-widest uppercase">Global Diaspora</span>
                <Globe size={16} />
              </div>
              <h3 className="font-fraunces text-2xl font-light text-[#FBF9F4] mb-2">
                Virtual Video Salon
              </h3>
              <p className="text-xs text-[#E4ECE7]/70 font-light leading-relaxed">
                High-definition 1-on-1 consultation for international clients in the UK, USA, Canada, and Europe.
              </p>

              <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs font-mono">
                <div className="flex items-center justify-between text-[#E4ECE7]/80">
                  <span className="text-white/50">Next Opening:</span>
                  <span className="text-[#B98A2E]">Thursday 2:00 PM GMT</span>
                </div>
                <div className="flex items-center justify-between text-[#E4ECE7]/80">
                  <span className="text-white/50">Fee:</span>
                  <span>GHS 200 (Standard)</span>
                </div>
              </div>
            </div>

            <Link
              href="/book?type=virtual"
              className="inline-flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#B98A2E] hover:text-white transition-colors pt-4 border-t border-white/10"
            >
              <span>Select Virtual Slot</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Panel 3: Bridal Capacity Meter */}
          <div className="p-7 bg-[#181411] border border-[#B98A2E]/40 rounded-[2px] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-[#B98A2E] mb-4">
                <span className="text-[10px] font-mono tracking-widest uppercase">Quarterly Intake</span>
                <Clock size={16} />
              </div>
              <h3 className="font-fraunces text-2xl font-light text-[#FBF9F4] mb-2">
                Bridal Commission Capacity
              </h3>
              <p className="text-xs text-[#E4ECE7]/70 font-light leading-relaxed">
                We strictly limit bridal orders to guarantee 140+ hours per gown. Once capacity is met, appointments join the waitlist.
              </p>

              {/* Progress bar */}
              <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white/60">Current Quarter:</span>
                  <span className="text-[#B98A2E] font-semibold">5 of 8 Booked</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#B98A2E] w-[62.5%]" />
                </div>
                <p className="text-[10px] font-mono text-white/50 pt-1">
                  3 bridal commission slots remaining for this season.
                </p>
              </div>
            </div>

            <Link
              href="/book?type=bridal"
              className="inline-flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#B98A2E] hover:text-white transition-colors pt-4 border-t border-white/10"
            >
              <span>Reserve Bridal Consultation</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* ── ATELIER STUDIO HOURS FOOTNOTE ── */}
        <div className="mt-8 p-4 sm:p-5 bg-[#16120E] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/60">
          <div>
            <span className="text-white">Studio Hours:</span> Mon – Fri: 9:00 AM – 6:00 PM GMT &bull; Sat: By VIP Appointment &bull; Sun: Closed
          </div>
          <div className="text-[#B98A2E]">
            All appointments booked in advance &bull; Zero walk-ins
          </div>
        </div>
      </div>
    </section>
  );
}
