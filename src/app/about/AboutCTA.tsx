"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      id="about-cta"
      className="relative z-10 bg-[#FAF7F2] text-[#15150F] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-12 overflow-hidden border-t border-[#B98A2E]/20"
      aria-label="Begin your bespoke journey"
    >
      {/* ── AMBIENT WARM LUXURY GLOW ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(185,138,46,0.08),transparent_70%)] pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl relative z-10 text-center">
        {/* Eyebrow flanked by delicate gold hairlines */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5"
        >
          <span className="h-[1px] w-8 sm:w-12 bg-[#B98A2E]/60" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-[#B98A2E] font-medium">
            BEGIN YOUR BESPOKE STORY
          </span>
          <span className="h-[1px] w-8 sm:w-12 bg-[#B98A2E]/60" />
        </motion.div>

        {/* Display Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-fraunces text-3xl sm:text-5xl lg:text-[52px] font-normal tracking-tight leading-[1.12] text-[#15150F]"
        >
          Let&apos;s Create Something{" "}
          <span className="italic text-[#9B7038] font-light block sm:inline">
            Uniquely Yours.
          </span>
        </motion.h2>

        {/* Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 max-w-xl mx-auto text-[#554E45] font-light text-[14px] sm:text-[15.5px] leading-relaxed"
        >
          Whether designing an heirloom bridal gown, an evening reception silhouette, or a custom celebratory piece, our Accra atelier is ready to bring your vision to life.
        </motion.p>

        {/* 2 Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Btn 1: Book Consultation */}
          <Link
            href="/book"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 bg-[#0E3B2E] text-[#FBF9F4] text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase rounded-[2px] shadow-[0_4px_18px_rgba(14,59,46,0.22)] hover:bg-[#15150F] hover:shadow-[0_6px_24px_rgba(21,21,15,0.3)] transition-all duration-300 active:scale-[0.99]"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#C5A265] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Btn 2: Contact Page */}
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 border border-[#15150F]/30 hover:border-[#B98A2E] text-[#15150F] hover:text-[#B98A2E] bg-transparent text-[11px] sm:text-xs font-medium tracking-[0.22em] uppercase rounded-[2px] transition-all duration-300 active:scale-[0.99]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#B98A2E] transition-colors" />
            <span>Contact Our Atelier</span>
          </Link>
        </motion.div>

        {/* Subtle Bottom Assurance / Detail Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-[#B98A2E]/15 flex items-center justify-center gap-6 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#7A7265] font-mono"
        >
          <span>Accra, Ghana</span>
          <span className="w-1 h-1 rounded-full bg-[#B98A2E]/60" />
          <span>Worldwide Courier</span>
          <span className="w-1 h-1 rounded-full bg-[#B98A2E]/60" />
          <span>Bespoke Fittings</span>
        </motion.div>
      </div>
    </section>
  );
}
