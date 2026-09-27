"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function ProcessCTA() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : custom * 0.12,
      },
    }),
  };

  const lineFadeVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 1.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  return (
    <section
      id="process-cta"
      className="relative w-full min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center justify-center bg-[#0E3B2E] text-[#FBF9F4] overflow-hidden py-24 sm:py-28 lg:py-32"
      aria-label="Process Closing: Book a Consultation"
    >
      {/* ── 01: SUBTLE RESTRAINED CURVED GOLD LINES (LEFT & RIGHT) ── */}
      <motion.svg
        variants={lineFadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Left flowing decorative gold line */}
        <path
          d="M0 140 C 180 260, 260 350, 480 330"
          stroke="#B98A2E"
          strokeWidth="1.25"
          strokeOpacity="0.38"
          strokeLinecap="round"
        />

        {/* Right flowing decorative gold line */}
        <path
          d="M960 500 C 1140 430, 1260 360, 1440 270"
          stroke="#B98A2E"
          strokeWidth="1.25"
          strokeOpacity="0.38"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* ── 02: CENTERED EDITORIAL CTA COMPOSITION ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        {/* Top Eyebrow Label: — THE NEXT CHAPTER — */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={0}
          className="flex items-center justify-center gap-4 mb-8 sm:mb-10"
        >
          <span className="w-10 sm:w-14 h-[1px] bg-[#B98A2E]/70" aria-hidden="true" />
          <span className="font-sans text-[11px] sm:text-xs tracking-[0.28em] text-[#FBF9F4]/75 uppercase font-medium">
            THE NEXT CHAPTER
          </span>
          <span className="w-10 sm:w-14 h-[1px] bg-[#B98A2E]/70" aria-hidden="true" />
        </motion.div>

        {/* Display Heading: Your vision. / Our craft. */}
        <div className="overflow-hidden mb-6 sm:mb-8">
          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={1}
            className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[92px] leading-[1.05] tracking-tight text-center"
          >
            <span className="block text-[#FBF9F4]">Your vision.</span>
            <span className="block italic text-[#B98A2E] font-normal mt-1 sm:mt-2">
              Our craft.
            </span>
          </motion.h2>
        </div>

        {/* Single Supporting Sentence */}
        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={2}
          className="font-sans text-sm sm:text-base lg:text-[17px] text-[#FBF9F4]/80 font-light leading-relaxed max-w-xl mx-auto mb-10 sm:mb-12"
        >
          Begin with a consultation and take the first step toward your custom
          piece.
        </motion.p>

        {/* Clean Outlined CTA Button */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={3}
        >
          <Link
            href="/book"
            className="group relative inline-flex items-center justify-center gap-3.5 px-8 sm:px-12 py-4 sm:py-4.5 rounded-[1px] border border-[#B98A2E] text-[#FBF9F4] text-xs sm:text-[13px] font-medium tracking-[0.24em] uppercase font-sans transition-all duration-300 hover:bg-[#B98A2E] hover:text-[#0E3B2E] shadow-sm hover:shadow-[0_8px_30px_rgba(185,138,46,0.25)] active:scale-[0.99]"
          >
            <span>BOOK A CONSULTATION</span>
            <span
              className="text-[#B98A2E] transition-all duration-300 group-hover:text-[#0E3B2E] group-hover:translate-x-1.5"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
