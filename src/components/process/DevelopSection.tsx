"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: (className?: string) => React.ReactNode;
}

const DEVELOP_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Fabric & Design Details",
    description:
      "Fabric, colour and design details are confirmed, together with the specifications required for the garment.",
    icon: (className = "w-5 h-5 text-[#15150F]") => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
        <path d="M8 8h4" />
        <path d="M8 12h4" />
        <path d="M16 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-2" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Measurements",
    description:
      "Client measurements are taken and recorded as part of the garment order arrangement.",
    icon: (className = "w-5 h-5 text-[#15150F]") => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        <path d="M12 4v2" />
        <path d="M16 5.5l-1 1.7" />
        <path d="M19 8.5l-1.7 1" />
        <path d="M20 12h-2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Payment",
    description:
      "The agreed payment arrangement is completed as part of confirming the garment order.",
    icon: (className = "w-5 h-5 text-[#15150F]") => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="15" x2="10" y2="15" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Order Confirmation",
    description:
      "The garment order details are confirmed and documented before moving into production.",
    icon: (className = "w-5 h-5 text-[#15150F]") => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
];

export default function DevelopSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.65,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : custom * 0.12,
      },
    }),
  };

  const connectingLineVariant = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.9,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const verticalLineVariant = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  return (
    <section
      id="chapter-develop"
      className="relative w-full bg-[#F5F2EB] text-[#15150F] overflow-hidden border-t border-[#E8E2D5]"
      aria-label="Process Chapter 02: Develop"
    >
      {/* ── UPPER CONTAINER: SPLIT IMAGE (LEFT) + INTRO TEXT (RIGHT) ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-14">
        {/* DESKTOP & TABLET TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: LARGE ATELIER STILL LIFE (~54% on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: shouldReduceMotion ? 0.1 : 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
            className="order-2 lg:order-1 lg:col-span-7 relative"
          >
            {/* Clean rectangular editorial presentation: no heavy shadows, no floating card */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10.2] overflow-hidden rounded-xs border border-[#E6E1D6]/80 bg-[#EFECE5]">
              <Image
                src="/images/process/develop-atelier-light.jpg"
                alt="Blak Meyd atelier preparation: bespoke pattern drafting, fabric swatches, gold tailoring shears and measuring tape"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 56vw"
                priority
              />

              {/* Seamless right edge bone white blend into editorial text on desktop */}
              <div
                className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F5F2EB] via-[#F5F2EB]/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* RIGHT: EDITORIAL INTRO CONTENT (~46% on desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-center relative"
          >
            {/* Optional subtle desktop editorial corner tagline */}
            <div className="hidden xl:flex absolute -top-12 right-0 flex-col items-end text-right text-[10px] tracking-[0.28em] uppercase text-[#15150F]/55 font-medium space-y-1 pointer-events-none">
              <span>FABRICS.</span>
              <span>MEASUREMENTS.</span>
              <span>DETAILS.</span>
              <span>CONFIDENCE.</span>
              <span className="w-8 h-[1px] bg-[#B98A2E] mt-1.5" aria-hidden="true" />
            </div>

            {/* 1. Small Chapter Label: 02 / DEVELOP */}
            <motion.div
              variants={fadeUpVariant}
              custom={0}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-[#B98A2E]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#15150F]/70 font-medium uppercase font-sans">
                02 / DEVELOP
              </span>
            </motion.div>

            {/* 2. Muted Gold Eyebrow: FROM CONCEPT TO GARMENT */}
            <motion.p
              variants={fadeUpVariant}
              custom={1}
              className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B98A2E] font-semibold uppercase mt-6 mb-3 font-sans"
            >
              FROM CONCEPT TO GARMENT
            </motion.p>

            {/* 3. Main Heading: Turning ideas into a plan. */}
            <div className="overflow-hidden">
              <motion.h2
                variants={fadeUpVariant}
                custom={2}
                className="font-heading font-normal text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.08] tracking-tight text-[#15150F] mb-6"
              >
                Turning ideas <br />
                into a{" "}
                <span className="text-[#B98A2E] italic font-normal">
                  plan.
                </span>
              </motion.h2>
            </div>

            {/* 4. Concise Documented Copy */}
            <motion.p
              variants={fadeUpVariant}
              custom={3}
              className="text-sm sm:text-[15px] lg:text-base leading-relaxed text-[#15150F]/80 max-w-xl mb-7 font-normal font-sans"
            >
              Once the design direction is agreed, the process moves into the
              details. Fabric and design specifications are confirmed,
              measurements are taken, and the information required for the
              garment is documented before payment and order confirmation.
            </motion.p>

            {/* 5. Editorial Subline: PRECISION TODAY. A BEAUTIFUL TOMORROW. */}
            <motion.div
              variants={fadeUpVariant}
              custom={4}
              className="flex items-center gap-3 pt-1"
            >
              <span className="w-6 h-[1px] bg-[#B98A2E]" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#B98A2E] font-semibold uppercase font-sans">
                PRECISION TODAY. A BEAUTIFUL TOMORROW.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── LOWER CONTAINER: FOUR CONNECTED PROCESS STAGES ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-16 sm:pb-20 lg:pb-24">
        {/* DESKTOP SEQUENCE: Horizontal connected layout on clean ivory */}
        <div className="hidden lg:block relative">
          {/* Horizontal Connecting Line */}
          <div className="absolute top-7 left-[7%] right-[7%] h-[1px] bg-[#E0D9CB] z-0">
            <motion.div
              variants={connectingLineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full h-full bg-[#B98A2E]/60 origin-left"
            />
          </div>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {DEVELOP_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUpVariant}
                custom={idx * 0.9 + 1}
                className="flex flex-col"
              >
                {/* Step Circle Badge: light subtle ivory/beige container without heavy shadows */}
                <div className="w-14 h-14 rounded-full bg-[#EDE8DE] border border-[#DDD5C5] flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-105">
                  {step.icon()}
                </div>

                {/* Number */}
                <span className="text-xs tracking-[0.2em] font-semibold text-[#B98A2E] mb-1 font-sans">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="font-heading text-xl xl:text-2xl text-[#15150F] font-normal mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs xl:text-[13px] leading-relaxed text-[#15150F]/75 pr-2 font-normal font-sans">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE & TABLET SEQUENCE: Compact vertical timeline */}
        <div className="block lg:hidden relative pl-4 sm:pl-6">
          {/* Vertical connecting line */}
          <div className="absolute top-6 bottom-6 left-[27px] sm:left-[35px] w-[1px] bg-[#E0D9CB] z-0">
            <motion.div
              variants={verticalLineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full h-full bg-[#B98A2E]/60 origin-top"
            />
          </div>

          <div className="space-y-8 sm:space-y-10 relative z-10">
            {DEVELOP_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={idx * 0.8}
                className="flex items-start gap-4 sm:gap-6"
              >
                {/* Circle Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-[#EDE8DE] border border-[#DDD5C5] flex items-center justify-center">
                  {step.icon("w-4 h-4 sm:w-5 sm:h-5 text-[#15150F]")}
                </div>

                {/* Step Details */}
                <div className="pt-0.5">
                  <span className="text-[11px] sm:text-xs tracking-[0.2em] font-semibold text-[#B98A2E] block mb-0.5 font-sans">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl text-[#15150F] font-normal mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#15150F]/75 max-w-md font-sans">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 03: LIGHT TRANSITION STRIP INTO CREATE ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={fadeUpVariant}
        custom={5}
        className="relative w-full bg-[#F5F2EB] text-[#15150F] overflow-hidden border-t border-[#DDD5C5]/70"
      >
        {/* Subtle ivory & hint of emerald silk fabric background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply">
          <Image
            src="/images/process/develop-transition-light.jpg"
            alt="Ivory couture silk texture with subtle emerald folds"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Soft gradient wash ensuring maximum text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F5F2EB]/95 via-[#F5F2EB]/80 to-[#F5F2EB]/95 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-8">
            {/* Left: ORDER GARMENT CTA BUTTON */}
            <div className="flex items-center">
              <Link
                href="/book"
                className="group inline-flex items-center gap-3.5 px-8 sm:px-10 py-4 sm:py-4.5 bg-[#0E3B2E] hover:bg-[#134e3d] text-[#FBF9F4] border border-[#0E3B2E] hover:border-[#B98A2E]/50 text-xs sm:text-[13px] font-medium tracking-[0.22em] uppercase transition-all duration-300 rounded-[2px] shadow-sm hover:shadow-[0_4px_20px_rgba(14,59,46,0.25)] active:scale-[0.99]"
              >
                <span>Order Garment</span>
                <span
                  className="text-[#B98A2E] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>

            {/* Right: SKILLED HANDS. EXTRAORDINARY RESULTS. */}
            <div className="sm:text-right">
              <p className="text-[11px] sm:text-xs tracking-[0.24em] text-[#15150F]/80 font-medium uppercase leading-relaxed font-sans">
                SKILLED HANDS.
                <br className="hidden sm:inline" />{" "}
                EXTRAORDINARY RESULTS.
              </p>
              <span className="hidden sm:inline-block w-8 h-[1px] bg-[#B98A2E] mt-1.5" aria-hidden="true" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
