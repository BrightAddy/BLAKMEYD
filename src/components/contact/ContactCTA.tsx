"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.65,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : custom * 0.08,
      },
    }),
  };

  return (
    <section
      id="consultation-garment-order"
      className="relative w-full bg-[#0E3B2E] text-[#FBF9F4] py-16 sm:py-20 lg:py-24 border-t border-[#B98A2E]/25 overflow-hidden"
      aria-label="Consultation and Garment Order Options"
    >
      {/* ── SUBTLE AMBIENT LUXURY GLOW ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(ellipse_75%_50%_at_50%_40%,rgba(185,138,46,0.06),transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* ── SECTION HEADER LOCKUP (COMPACT & REFINED) ── */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={0}
            className="flex items-center justify-center gap-3 mb-3.5"
          >
            <span
              className="w-8 sm:w-12 h-[1px] bg-[#B98A2E]/70"
              aria-hidden="true"
            />
            <span className="font-sans text-[10px] sm:text-[10.5px] tracking-[0.28em] text-[#B98A2E] font-medium uppercase">
              YOUR NEXT STEP
            </span>
            <span
              className="w-8 sm:w-12 h-[1px] bg-[#B98A2E]/70"
              aria-hidden="true"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={1}
            className="font-heading font-normal text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-[#FBF9F4] tracking-tight"
          >
            How Can We{" "}
            <span className="italic text-[#B98A2E] font-normal">Assist</span>{" "}
            You?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={2}
            className="font-sans text-xs sm:text-[13px] text-[#FBF9F4]/75 font-normal leading-relaxed mt-2.5 max-w-md mx-auto"
          >
            Choose a consultation to explore your vision, or proceed directly to
            order your bespoke piece.
          </motion.p>
        </div>

        {/* ── TWO BALANCED INDEPENDENT OPTIONS ── */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={3}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-stretch"
        >
          {/* Subtle Vertical Divider between options on desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-1 bottom-1 w-[1px] bg-[#B98A2E]/20 -translate-x-1/2"
            aria-hidden="true"
          />

          {/* ══════════════════════════════════════════════════════════════
              OPTION 01: BOOK A CONSULTATION
          ══════════════════════════════════════════════════════════════ */}
          <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left md:pr-6 lg:pr-8">
            <div>
              {/* Category Eyebrow */}
              <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2.5">
                <span className="font-sans text-[10px] sm:text-[10.5px] tracking-[0.24em] text-[#B98A2E] font-medium">
                  01 · CONSULTATION
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-normal text-2xl sm:text-[26px] lg:text-[28px] leading-tight text-[#FBF9F4] mb-2.5">
                Book a{" "}
                <span className="italic text-[#B98A2E] font-normal">
                  Consultation
                </span>
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-[13px] text-[#FBF9F4]/75 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xs">
                Begin with a private conversation to discuss ideas, silhouette
                preferences, and creative direction.
              </p>
            </div>

            {/* Outlined Action Button */}
            <Link
              href="/book"
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-[240px] h-11 px-5 rounded-[1px] border border-[#B98A2E] text-[10px] sm:text-[10.5px] tracking-[0.2em] uppercase font-medium text-[#FBF9F4] transition-all duration-300 hover:bg-[#B98A2E] hover:text-[#0E3B2E] active:scale-[0.99]"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B98A2E] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0E3B2E]" />
            </Link>
          </div>

          {/* Horizontal Divider on Mobile */}
          <div
            className="block md:hidden w-full h-[1px] bg-[#B98A2E]/20 my-2"
            aria-hidden="true"
          />

          {/* ══════════════════════════════════════════════════════════════
              OPTION 02: ORDER A GARMENT
          ══════════════════════════════════════════════════════════════ */}
          <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left md:pl-6 lg:pl-8">
            <div>
              {/* Category Eyebrow */}
              <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2.5">
                <span className="font-sans text-[10px] sm:text-[10.5px] tracking-[0.24em] text-[#B98A2E] font-medium">
                  02 · BESPOKE ORDER
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-normal text-2xl sm:text-[26px] lg:text-[28px] leading-tight text-[#FBF9F4] mb-2.5">
                Order a{" "}
                <span className="italic text-[#B98A2E] font-normal">
                  Garment
                </span>
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-[13px] text-[#FBF9F4]/75 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xs">
                Ready to proceed? Submit your measurements, garment details, and
                order information directly.
              </p>
            </div>

            {/* Outlined Action Button */}
            <Link
              href="/order"
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-[240px] h-11 px-5 rounded-[1px] border border-[#B98A2E] text-[10px] sm:text-[10.5px] tracking-[0.2em] uppercase font-medium text-[#FBF9F4] transition-all duration-300 hover:bg-[#B98A2E] hover:text-[#0E3B2E] active:scale-[0.99]"
            >
              <span>ORDER A GARMENT</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B98A2E] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0E3B2E]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
