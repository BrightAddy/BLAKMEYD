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

const CREATE_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Production",
    description: "The garment moves into production.",
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
        <path d="M2 19h20" />
        <path d="M5 19V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10" />
        <path d="M8 7V4h4v3" />
        <circle cx="16" cy="11.5" r="2" />
        <path d="M7 11.5v4" />
        <path d="M6 15.5h2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Fittings",
    description: "The garment is fitted and necessary adjustments are made.",
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
        <path d="M10 2.5h4" />
        <path d="M12 2.5v1.5" />
        <path d="M9 5c-.5 2 .5 5-1 7.5 0 2 1.5 3.5 4 3.5s4-1.5 4-3.5c-1.5-2.5-.5-5.5-1-7.5H9z" />
        <path d="M12 16v5.5" />
        <path d="M8.5 21.5L12 19.5l3.5 2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Final Finishing",
    description: "The completed garment is prepared for release.",
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
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.5 15.5L16 4" />
        <path d="M15.5 15.5L8 4" />
        <circle cx="12" cy="10" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Collection / Delivery",
    description: "The finished garment is ready for collection or delivery.",
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
        <path d="M12 8c0-1.8 1-3 2.5-3s2 1 2 2-1.5 2-2.5 2" />
        <path d="M12 9L3 16a1 1 0 0 0 .5 1.5h17a1 1 0 0 0 .5-1.5L12 9z" />
        <path d="M6 17.5h12" />
      </svg>
    ),
  },
];

export default function CreateSection() {
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
      id="chapter-create"
      className="relative w-full bg-[#FBF9F4] text-[#15150F] overflow-hidden border-t border-[#DDD5C5]/70"
      aria-label="Process Chapter 03: Create"
    >
      {/* ── UPPER CONTAINER: SPLIT CINEMATIC VIDEO (LEFT) + EDITORIAL CONTENT (RIGHT) ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-14">
        {/* DESKTOP & TABLET TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: CINEMATIC EMERALD GARMENT VISUAL (~55% width on desktop) */}
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
            {/* Clean rectangular editorial presentation */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10.2] overflow-hidden rounded-xs border border-[#E6E1D6]/80 bg-[#EFECE5]">
              <Image
                src="/images/process/create-emerald-gown.jpg"
                alt="Blak Meyd bespoke emerald couture garment on atelier mannequin with mirror, velvet ottoman, and atelier sketches"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover object-center"
              />

              {/* Seamless right edge ivory blend on desktop */}
              <div
                className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FBF9F4] via-[#FBF9F4]/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* RIGHT: EDITORIAL INTRO CONTENT (~45% width on desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-center relative"
          >
            {/* 1. Small Chapter Label: 03 / CREATE */}
            <motion.div
              variants={fadeUpVariant}
              custom={0}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-[#B98A2E]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#15150F]/70 font-medium uppercase font-sans">
                03 / CREATE
              </span>
            </motion.div>

            {/* 2. Muted Gold Eyebrow: FROM CRAFT TO COMPLETION */}
            <motion.p
              variants={fadeUpVariant}
              custom={1}
              className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B98A2E] font-semibold uppercase mt-6 mb-3 font-sans"
            >
              FROM CRAFT TO COMPLETION
            </motion.p>

            {/* 3. Main Heading: Bringing the garment to life. */}
            <div className="overflow-hidden">
              <motion.h2
                variants={fadeUpVariant}
                custom={2}
                className="font-heading font-normal text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.08] tracking-tight text-[#15150F] mb-6"
              >
                Bringing the <br />
                garment to{" "}
                <span className="text-[#B98A2E] italic font-normal">
                  life.
                </span>
              </motion.h2>
            </div>

            {/* 4. Concise Documented Copy */}
            <motion.p
              variants={fadeUpVariant}
              custom={3}
              className="text-sm sm:text-[15px] lg:text-base leading-relaxed text-[#15150F]/80 max-w-xl mb-7 font-normal font-sans"
            >
              Once the order is confirmed, the garment moves into production,
              fittings and final finishing before it is ready for collection or
              delivery.
            </motion.p>

            {/* 5. Editorial Subline: CRAFTED TODAY. A MORE BEAUTIFUL TOMORROW. */}
            <motion.div
              variants={fadeUpVariant}
              custom={4}
              className="flex items-center gap-3 pt-1"
            >
              <span className="w-8 h-[1px] bg-[#B98A2E]" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#15150F]/75 font-semibold uppercase font-sans">
                CRAFTED TODAY. A MORE BEAUTIFUL TOMORROW.
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
            {CREATE_STEPS.map((step, idx) => (
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
            {CREATE_STEPS.map((step, idx) => (
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

      {/* ── 04: TRANSITION STRIP INTO PRODUCTION TIMELINES ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={fadeUpVariant}
        custom={5}
        className="relative w-full bg-[#FBF9F4] text-[#15150F] overflow-hidden border-t border-[#DDD5C5]/70"
      >
        {/* Subtle ivory & hint of emerald silk fabric background */}
        <div className="absolute inset-0 opacity-45 pointer-events-none mix-blend-multiply">
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
          className="absolute inset-0 bg-gradient-to-r from-[#FBF9F4]/95 via-[#FBF9F4]/80 to-[#FBF9F4]/95 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-8">
            {/* Left: NEXT TIMELINES → */}
            <div className="flex items-center gap-4">
              <span className="w-[2px] h-10 bg-[#B98A2E]" aria-hidden="true" />
              <div>
                <span className="text-[10px] sm:text-[11px] tracking-[0.28em] text-[#15150F]/60 font-medium uppercase block mb-0.5 font-sans">
                  NEXT
                </span>
                <Link
                  href="#timelines"
                  className="group inline-flex items-center text-base sm:text-lg tracking-[0.2em] text-[#15150F] hover:text-[#B98A2E] font-heading font-normal uppercase transition-colors"
                >
                  <span>TIMELINES</span>
                  <span
                    className="ml-2 text-[#B98A2E] transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: SAME ATTENTION IN EVERY DETAIL. */}
            <div className="sm:text-right">
              <p className="text-[11px] sm:text-xs tracking-[0.24em] text-[#15150F]/80 font-medium uppercase leading-relaxed font-sans">
                SAME ATTENTION
                <br className="hidden sm:inline" /> IN EVERY DETAIL.
              </p>
              <span
                className="hidden sm:inline-block w-8 h-[1px] bg-[#B98A2E] mt-1.5"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
