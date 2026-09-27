"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: "01",
    title: "Order Confirmation",
    description: "The garment order is confirmed before production begins.",
  },
  {
    number: "02",
    title: "Production",
    description: "The garment moves into the production stage.",
  },
  {
    number: "03",
    title: "Fittings",
    description: "Fittings allow the garment to be checked and adjusted as required.",
  },
  {
    number: "04",
    title: "Final Finishing",
    description: "The completed garment is prepared before collection or delivery.",
  },
];

const EXPRESS_BENEFITS = [
  "Priority scheduling",
  "Tailored to your timeline",
  "Same attention to detail and quality",
];

export default function TimelinesSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.65,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : custom * 0.1,
      },
    }),
  };

  const lineDrawVariant = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.9,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : 0.25,
      },
    },
  };

  return (
    <section
      id="timelines"
      className="relative w-full bg-[#FBF9F4] text-[#15150F] overflow-hidden border-t border-[#DDD5C5]/70"
      aria-label="Process: Production Timelines and Express Orders"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 lg:pb-20">
        {/* ── 01: TOP EDITORIAL HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-12">
          {/* Left: — PRODUCTION TIMELINES — */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={0}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-[#B98A2E]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#15150F]/70 font-medium uppercase font-sans">
              PRODUCTION TIMELINES
            </span>
            <span className="w-8 h-[1px] bg-[#B98A2E]" aria-hidden="true" />
          </motion.div>

          {/* Right: SAME ATTENTION. IN EVERY DETAIL. */}
          <motion.span
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={1}
            className="text-[10px] sm:text-[11px] tracking-[0.26em] text-[#15150F]/55 uppercase font-medium font-sans sm:text-right"
          >
            SAME ATTENTION. IN EVERY DETAIL.
          </motion.span>
        </div>

        {/* ── 02: MAIN TWO-COLUMN CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* ════════════════════════════════════════════════════════════════
              LEFT COLUMN: TIMELINE (~58% WIDTH ON DESKTOP)
          ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Main Heading */}
            <div className="overflow-hidden mb-3">
              <motion.h2
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={1}
                className="font-heading font-normal text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight text-[#15150F]"
              >
                Production{" "}
                <span className="italic text-[#B98A2E] font-normal">
                  Timelines
                </span>
              </motion.h2>
            </div>

            {/* Eyebrow Label */}
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={2}
              className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#B98A2E] uppercase font-sans mb-4"
            >
              EVERY GARMENT FOLLOWS A CONSIDERED TIMELINE.
            </motion.p>

            {/* Introductory copy */}
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={3}
              className="text-sm sm:text-[15px] leading-relaxed text-[#15150F]/75 max-w-xl mb-10 sm:mb-12 font-normal font-sans"
            >
              Each piece is carefully planned and executed, with attention to
              detail at every stage. Timelines vary based on the garment type and
              level of detail required.
            </motion.p>

            {/* ── VERTICAL EDITORIAL TIMELINE ── */}
            <div className="relative">
              {/* Thin vertical connecting line behind solid marker dots */}
              <div
                className="absolute top-6 bottom-10 left-[62px] sm:left-[66px] w-[1px] bg-[#E0D9CB] z-0"
                aria-hidden="true"
              >
                <motion.div
                  variants={lineDrawVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full h-full bg-[#B98A2E]/60 origin-top"
                />
              </div>

              {/* Timeline Steps */}
              <div className="space-y-6 sm:space-y-8 relative z-10">
                {TIMELINE_STEPS.map((step, idx) => (
                  <motion.div
                    key={step.number}
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    custom={idx * 0.8 + 2}
                    className="flex flex-col pb-6 sm:pb-8 border-b border-[#E6E1D6]/70 last:border-b-0"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* 1. Step number circle badge */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full border border-[#DDD5C5] bg-[#FBF9F4] flex items-center justify-center text-xs tracking-wider font-semibold text-[#B98A2E] font-sans">
                        {step.number}
                      </div>

                      {/* 2. Solid gold node dot sitting on the vertical guide */}
                      <div className="pt-3.5 sm:pt-4 shrink-0 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#B98A2E] ring-4 ring-[#FBF9F4]" />
                      </div>

                      {/* 3. Text content */}
                      <div className="pt-1.5 pl-2 sm:pl-3">
                        <h3 className="font-heading text-xl sm:text-2xl text-[#15150F] font-normal mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] leading-relaxed text-[#15150F]/75 max-w-lg font-normal font-sans">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              RIGHT COLUMN: EXPRESS ORDERS PANEL (~42% WIDTH ON DESKTOP)
          ════════════════════════════════════════════════════════════════ */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={3}
            className="lg:col-span-5 bg-[#F4F0E8] border border-[#E4DEC9]/70 rounded-xs p-7 sm:p-9 lg:p-10 flex flex-col justify-between"
          >
            <div>
              {/* Small Top Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#B98A2E]" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#15150F]/75 font-semibold uppercase font-sans">
                  EXPRESS ORDERS
                </span>
              </div>

              {/* Large Fraunces Heading */}
              <h3 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#15150F] mb-6">
                For moments <br />
                that{" "}
                <span className="italic text-[#B98A2E] font-normal">
                  can&apos;t wait.
                </span>
              </h3>

              {/* Explanation Copy */}
              <p className="text-xs sm:text-sm leading-relaxed text-[#15150F]/80 font-normal font-sans mb-8">
                Accelerated orders are handled separately from the standard
                production timeline. If you require an accelerated timeline,
                express service is available based on the garment type and
                complexity. Please get in touch with us to discuss your
                requirements.
              </p>

              {/* Subtle Line Separator */}
              <div
                className="w-full h-[1px] bg-[#DDD5C5]/80 mb-8"
                aria-hidden="true"
              />

              {/* Confirmed Express Benefits / Key Points */}
              <div className="space-y-4 mb-10">
                {EXPRESS_BENEFITS.map((item) => (
                  <div key={item} className="flex items-center gap-3.5">
                    <span className="w-5 h-5 rounded-full border border-[#B98A2E] flex items-center justify-center shrink-0 text-[#B98A2E]">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M2.5 6.5l2.5 2.5 4.5-5.5" />
                      </svg>
                    </span>
                    <span className="text-xs sm:text-[13px] text-[#15150F]/85 font-medium font-sans">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Panel Subline */}
            <div className="pt-4 border-t border-[#DDD5C5]/60">
              <span className="text-[10px] sm:text-[11px] tracking-[0.24em] text-[#15150F]/65 uppercase font-medium font-sans block">
                EXCEPTIONAL CRAFTSMANSHIP. ON YOUR TIMELINE.
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── 03: BOTTOM CONSULTATION TRANSITION STRIP ── */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        custom={4}
        className="w-full border-t border-[#DDD5C5]/80 bg-[#FBF9F4]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-9">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* LEFT: NEXT LET'S CREATE YOUR PIECE */}
            <div className="md:col-span-4 flex items-center gap-4">
              <span className="w-[2px] h-10 bg-[#B98A2E]" aria-hidden="true" />
              <div>
                <span className="text-[10px] sm:text-[11px] tracking-[0.28em] text-[#15150F]/60 font-medium uppercase block mb-0.5 font-sans">
                  NEXT
                </span>
                <span className="font-heading text-lg sm:text-xl text-[#15150F] font-normal leading-tight block">
                  Let&apos;s Create Your Piece
                </span>
              </div>
            </div>

            {/* CENTER: READY TO BEGIN? BOOK A CONSULTATION → */}
            <div className="md:col-span-4 flex flex-col items-start md:items-center md:border-x md:border-[#DDD5C5]/80 md:px-6">
              <span className="text-[10px] tracking-[0.26em] text-[#15150F]/60 font-medium uppercase block mb-1 font-sans">
                READY TO BEGIN?
              </span>
              <Link
                href="/book"
                className="group inline-flex items-center text-xs sm:text-[13px] font-semibold tracking-[0.22em] text-[#15150F] hover:text-[#B98A2E] uppercase transition-colors font-sans"
              >
                <span>BOOK A CONSULTATION</span>
                <span
                  className="ml-2 text-[#B98A2E] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>

            {/* RIGHT: YOUR VISION. OUR CRAFT. */}
            <div className="md:col-span-4 md:text-right">
              <p className="text-[10px] sm:text-[11px] tracking-[0.24em] text-[#15150F]/70 font-medium uppercase leading-relaxed font-sans">
                YOUR VISION.
                <br className="hidden md:inline" /> OUR CRAFT.
              </p>
              <span
                className="hidden md:inline-block w-8 h-[1px] bg-[#B98A2E] mt-1.5"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
