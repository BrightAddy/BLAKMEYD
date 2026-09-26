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

const DISCOVERY_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understanding your expectations, preferences and the direction of the garment.",
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
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Custom Design",
    description:
      "Developing and refining the design, including fabric, colour, dress style and accessories.",
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
        <path d="M9 3h6" />
        <path d="M12 3v2" />
        <path d="M8.5 5.5h7l-1 5.5c-.2 1.1-1.1 1.8-2.2 2h-.6c-1.1-.2-2-.9-2.2-2L8.5 5.5z" />
        <path d="M12 13v8" />
        <path d="M9.5 21h5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Design Changes",
    description:
      "Refining the design through feedback and necessary adjustments.",
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
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Creative Brief",
    description:
      "Defining the additional items and information needed for making the garment.",
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
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
];

export default function DiscoverySection() {
  const shouldReduceMotion = useReducedMotion();

  // Subtle restrained editorial animations
  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : custom * 0.1,
      },
    }),
  };

  const lineVariant = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      originX: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : 0.25,
      },
    },
  };

  const verticalLineVariant = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      originY: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  return (
    <section
      id="chapter-discovery"
      className="relative w-full bg-[#FBF9F4] text-[#15150F] overflow-hidden"
      aria-label="Process Chapter 01: Discovery"
    >
      {/* ── UPPER CONTAINER: SPLIT INTRO + ATELIER VISUAL ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-8 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: EDITORIAL INTRO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center"
          >
            {/* 1. Small Eyebrow: 01 / DISCOVERY */}
            <motion.div
              variants={fadeUpVariant}
              custom={0}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-[#B98A2E]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#15150F]/70 font-medium uppercase">
                01 / DISCOVERY
              </span>
            </motion.div>

            {/* 2. Small Gold Label: THE BEGINNING */}
            <motion.p
              variants={fadeUpVariant}
              custom={1}
              className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B98A2E] font-semibold uppercase mt-6 mb-3"
            >
              THE BEGINNING
            </motion.p>

            {/* 3. Large Heading: Where the idea begins. */}
            <div className="overflow-hidden">
              <motion.h2
                variants={fadeUpVariant}
                custom={2}
                className="font-heading font-normal text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.15rem] leading-[1.08] tracking-tight text-[#15150F] mb-6"
              >
                Where the <br />
                idea{" "}
                <span className="text-[#B98A2E] italic font-normal">
                  begins.
                </span>
              </motion.h2>
            </div>

            {/* 4. Concise Documented Copy */}
            <motion.p
              variants={fadeUpVariant}
              custom={3}
              className="text-sm sm:text-[15px] lg:text-base leading-relaxed text-[#15150F]/80 max-w-xl mb-7 font-normal"
            >
              Every exceptional garment starts with a conversation. We take the
              time to understand your vision, style preferences, occasion and
              the direction you want your garment to take. From there, ideas are
              developed and refined toward a final design.
            </motion.p>

            {/* 5. Editorial Subline: YOUR VISION. OUR EXPERTISE. */}
            <motion.div
              variants={fadeUpVariant}
              custom={4}
              className="flex items-center gap-3 pt-1"
            >
              <span className="w-6 h-[1px] bg-[#B98A2E]" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#B98A2E] font-semibold uppercase">
                YOUR VISION. OUR EXPERTISE.
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT: ONE LARGE COUTURE ATELIER VISUAL (NO SHADOW) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: shouldReduceMotion ? 0.1 : 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="lg:col-span-6 xl:col-span-7 relative"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] overflow-hidden rounded-xs border border-[#E6E1D6]/70 bg-[#EFECE5]">
              <Image
                src="/images/atelier-swatches.jpg"
                alt="Blak Meyd couture consultation, fabric swatches and bespoke drafting tools in the atelier"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />

              {/* Seamless left edge ivory bleed on desktop */}
              <div
                className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FBF9F4] via-[#FBF9F4]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Delicate bottom vignette */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#15150F]/15 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MIDDLE CONTAINER: FOUR CONNECTED PROCESS STEPS ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-20 sm:pb-24 lg:pb-28">
        {/* DESKTOP SEQUENCE: Horizontal connected journey */}
        <div className="hidden lg:block relative">
          {/* Interconnecting line passing behind icon circles */}
          <div className="absolute top-7 left-[36px] right-[calc(25%-36px)] h-[1px] bg-[#E0D9CB] z-0">
            <motion.div
              variants={lineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full h-full bg-[#B98A2E]/60 origin-left"
            />
          </div>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {DISCOVERY_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUpVariant}
                custom={idx * 0.9 + 1}
                className="flex flex-col"
              >
                {/* Step Circle Badge */}
                <div className="w-14 h-14 rounded-full bg-[#EDE8DE] border border-[#DDD5C5] flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-105">
                  {step.icon()}
                </div>

                {/* Number */}
                <span className="text-xs tracking-[0.2em] font-semibold text-[#B98A2E] mb-1">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="font-heading text-xl xl:text-2xl text-[#15150F] font-normal mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs xl:text-[13px] leading-relaxed text-[#15150F]/75 pr-2 font-normal">
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
            {DISCOVERY_STEPS.map((step, idx) => (
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
                  <span className="text-[11px] sm:text-xs tracking-[0.2em] font-semibold text-[#B98A2E] block mb-0.5">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl text-[#15150F] font-normal mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#15150F]/75 max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA: BOOK A CONSULTATION (GREEN BACKGROUND) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariant}
          custom={5}
          className="mt-14 sm:mt-16 lg:mt-20 flex justify-start"
        >
          <Link
            href="/book"
            className="group inline-flex items-center gap-3.5 px-8 sm:px-10 py-4 sm:py-4.5 bg-[#0E3B2E] hover:bg-[#134e3d] text-[#FBF9F4] border border-[#0E3B2E] hover:border-[#B98A2E]/50 text-xs sm:text-[13px] font-medium tracking-[0.22em] uppercase transition-all duration-300 rounded-[2px]"
          >
            <span>Book a Consultation</span>
            <span
              className="text-[#B98A2E] transition-transform duration-300 group-hover:translate-x-1"
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
