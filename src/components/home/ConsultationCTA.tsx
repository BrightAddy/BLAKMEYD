"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Check } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section
      id="consultation-cta"
      className="relative z-10 bg-[#0E3B2E] text-[#FBF9F4] py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-[#B98A2E]/30"
    >
      {/* ── BACKGROUND GOLD & EMERALD GRADIENT ── */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(185,138,46,0.12),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] uppercase text-[#B98A2E] mb-3">
          <span className="h-[1px] w-6 bg-[#B98A2E]" />
          <span>Section 11 &bull; Initiate Your Commission</span>
          <span className="h-[1px] w-6 bg-[#B98A2E]" />
        </div>

        {/* Monumental Headline */}
        <h2 className="font-fraunces text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#FBF9F4] leading-[1.08] mb-4">
          Wear Your Story. <br />
          <span className="italic font-normal text-[#B98A2E]">Begin with a Consultation.</span>
        </h2>

        <p className="text-xs sm:text-sm text-[#E4ECE7]/85 font-light max-w-2xl mx-auto leading-relaxed mb-8">
          Your bespoke journey commences with a dedicated dialogue. We discuss your event vision, explore fabric swatches, and chart your custom silhouette. Garment order specifications are finalized after your consultation.
        </p>

        {/* Transparent Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-8 text-left">
          {/* Standard */}
          <div className="p-6 bg-[#0A261D]/80 border border-[#B98A2E]/30 rounded-[2px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#B98A2E]">
                Standard Commission
              </span>
              <span className="font-fraunces text-xl text-[#FBF9F4]">GHS 200</span>
            </div>
            <h4 className="font-fraunces text-lg text-white mb-2">Creative Consultation</h4>
            <p className="text-xs text-[#E4ECE7]/75 font-light leading-relaxed">
              Ideal for gala evenings, graduation gowns, milestone prom dresses, and guest attire. 60-minute in-person or virtual session.
            </p>
          </div>

          {/* Bridal */}
          <div className="p-6 bg-[#0A261D]/80 border border-[#B98A2E]/60 rounded-[2px] relative">
            <div className="absolute -top-3 right-4 px-2 py-0.5 bg-[#B98A2E] text-[#15150F] text-[9px] font-mono tracking-wider uppercase font-semibold">
              Deductible
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#B98A2E]">
                Bridal &amp; Ceremony
              </span>
              <span className="font-fraunces text-xl text-[#FBF9F4]">GHS 800</span>
            </div>
            <h4 className="font-fraunces text-lg text-white mb-2">Bridal Consultation</h4>
            <p className="text-xs text-[#E4ECE7]/75 font-light leading-relaxed">
              For traditional Kente engagement and white reception gowns. Full GHS 800 fee is credited toward your completed gown order.
            </p>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#B98A2E] text-[#15150F] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-white transition-all rounded-[2px] shadow-xl hover:shadow-[0_4px_30px_rgba(185,138,46,0.4)]"
          >
            <Calendar size={15} />
            <span>Book Private Consultation</span>
          </Link>

          <a
            href="https://wa.me/233559883589"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 border border-[#FBF9F4]/30 text-[#FBF9F4] text-xs uppercase tracking-[0.22em] font-medium hover:border-[#B98A2E] hover:text-[#B98A2E] transition-all rounded-[2px]"
          >
            <MessageSquare size={15} />
            <span>WhatsApp Atelier Direct (+233 55 988 3589)</span>
          </a>
        </div>

        {/* Reassurance notes */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] font-mono text-[#E4ECE7]/70 uppercase tracking-wider">
          <span className="flex items-center gap-2">
            <Check size={13} className="text-[#B98A2E]" />
            <span>Accra Atelier or Worldwide Video</span>
          </span>
          <span className="flex items-center gap-2">
            <Check size={13} className="text-[#B98A2E]" />
            <span>Private Client Portal Access</span>
          </span>
          <span className="flex items-center gap-2">
            <Check size={13} className="text-[#B98A2E]" />
            <span>Strict Single-Client Patterns</span>
          </span>
        </div>
      </div>
    </section>
  );
}
