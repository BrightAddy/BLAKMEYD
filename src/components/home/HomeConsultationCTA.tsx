"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

export default function HomeConsultationCTA() {
  return (
    <section
      id="consultation-cta"
      className="relative z-10 bg-[#0E3B2E] text-[#FBF9F4] py-20 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-[#B98A2E]/30"
    >
      {/* ── CINEMATIC BACKGROUND COUTURE IMAGE WITH LUXURY GRADIENT OVERLAY ── */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none">
        <Image
          src="/images/hero/ivory-couture.jpg"
          alt="Blak Meyd Haute Couture Silhouette"
          fill
          sizes="100vw"
          className="object-cover object-[center_35%]"
          priority
        />
      </div>

      {/* Radial Gold & Emerald Ambient Lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(185,138,46,0.14),transparent_70%)] pointer-events-none z-1"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0E3B2E]/90 via-[#0A261D]/95 to-[#0E3B2E] z-1 pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.3em] uppercase text-[#B98A2E] mb-4">
          <span className="h-[1px] w-6 bg-[#B98A2E]" />
          <span>Begin Your Journey</span>
          <span className="h-[1px] w-6 bg-[#B98A2E]" />
        </div>

        {/* Monumental Headline */}
        <h2 className="font-fraunces text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#FBF9F4] leading-[1.04] mb-6">
          Your Moment <br />
          <span className="italic font-normal text-[#B98A2E]">
            Starts Here.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="font-fraunces text-xl sm:text-2xl italic text-[#FBF9F4]/90 font-light mb-4">
          Create something that feels entirely yours.
        </p>
        <p className="text-xs sm:text-sm text-[#E4ECE7]/80 font-light max-w-xl mx-auto leading-relaxed mb-10">
          Reserve a private 1-on-1 bespoke consultation with our master atelier in Accra or schedule a guided virtual session from anywhere in the world.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#B98A2E] text-[#15150F] text-xs font-mono uppercase tracking-[0.22em] font-semibold hover:bg-white transition-all rounded-[2px] shadow-xl hover:shadow-[0_4px_30px_rgba(185,138,46,0.4)] group"
          >
            <span>Book a Consultation</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="https://wa.me/233559883589"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 border border-[#FBF9F4]/30 text-[#FBF9F4] text-xs font-mono uppercase tracking-[0.22em] font-medium hover:border-[#B98A2E] hover:text-[#B98A2E] transition-all rounded-[2px]"
          >
            <MessageSquare size={14} />
            <span>WhatsApp Direct (+233 55 988 3589)</span>
          </a>
        </div>

        {/* Restrained Architectural Reassurance Markers */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] font-mono text-[#E4ECE7]/60 uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Sparkles size={12} className="text-[#B98A2E]" />
            <span>Accra Atelier Salon</span>
          </span>
          <span className="flex items-center gap-2">
            <Sparkles size={12} className="text-[#B98A2E]" />
            <span>Worldwide Virtual Appointments</span>
          </span>
          <span className="flex items-center gap-2">
            <Sparkles size={12} className="text-[#B98A2E]" />
            <span>Strict Single-Client Patterns</span>
          </span>
        </div>
      </div>
    </section>
  );
}
