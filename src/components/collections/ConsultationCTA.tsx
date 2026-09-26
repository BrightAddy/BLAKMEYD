"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface Step {
  title: string;
  description: string;
  icon: (className?: string) => React.ReactNode;
}

const STEPS: Step[] = [
  {
    title: "DISCUSS",
    description: "Share your ideas and preferences.",
    icon: (className = "w-6 h-6 text-[#B98A2E]") => (
      // Calendar / Consultation Icon
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="8" cy="14" r="1" fill="currentColor" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
        <circle cx="16" cy="14" r="1" fill="currentColor" />
        <circle cx="8" cy="18" r="1" fill="currentColor" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "PLAN",
    description: "Explore fabrics, designs and details.",
    icon: (className = "w-6 h-6 text-[#B98A2E]") => (
      // Tailor's Tape Measure Icon
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="7" rx="8" ry="3.5" />
        <path d="M4 7v6c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5V7" />
        <path d="M4 10.5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5" />
        <path d="M12 10.5v6" />
        <path d="M8 9v6" />
        <path d="M16 9v6" />
        <path d="M20 13c1.5.5 2.5 1.2 2.5 2 0 1.66-3.8 3-8.5 3s-8.5-1.34-8.5-3c0-.8 1-1.5 2.5-2" />
      </svg>
    ),
  },
  {
    title: "CREATE",
    description: "Bring your vision to life.",
    icon: (className = "w-6 h-6 text-[#B98A2E]") => (
      // Tailor Dress Form / Mannequin Icon
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 3h6v3a3 3 0 0 1-3 3 3 3 0 0 1-3-3V3z" />
        <path d="M8 9c-2 3-2 6-1 10h10c1-4 1-7-1-10" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="9" y1="22" x2="15" y2="22" />
      </svg>
    ),
  },
];

const CTA_IMAGE = {
  src: "/images/cta/consultation-couture.jpg",
  alt: "Blak Meyd Bespoke Couture Consultation — Emerald Gown in Accra Atelier",
};

export default function ConsultationCTA() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="consultation-cta"
      className="relative w-full overflow-hidden border-t border-[#15150F]/10"
    >
      {/* ═════════════════════════════════════════════════════════════════
          01: MAIN SPLIT BLOCK (DEEP EMERALD #0E3B2E + COUTURE ATELIER IMAGE)
      ═════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#0E3B2E] text-[#FBF9F4] relative">
        <div className="max-w-[1540px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px]">
            {/* ── LEFT COLUMN: CTA CONTENT (COL-SPAN 7) ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-7 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14 xl:px-20 flex flex-col justify-between"
            >
              <div>
                {/* Eyebrow */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-3 mb-6"
                >
                  <span
                    className="w-8 h-[1px] bg-[#B98A2E]"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#FBF9F4]/80 font-medium font-sans">
                    YOUR VISION &bull; OUR CRAFT
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  variants={itemVariants}
                  className="font-serif text-[#FBF9F4] text-3xl sm:text-4xl lg:text-[46px] xl:text-[54px] leading-[1.1] tracking-tight mb-6"
                >
                  <span className="block font-normal">Let’s Create</span>
                  <span className="block italic font-light text-[#FBF9F4]/90">
                    Something Beautiful
                  </span>
                </motion.h2>

                {/* Supporting Copy */}
                <motion.p
                  variants={itemVariants}
                  className="font-sans text-sm sm:text-base text-[#FBF9F4]/80 font-light leading-relaxed max-w-lg mb-10"
                >
                  Book a consultation and let&apos;s bring your ideas to life.
                  Whether you have a clear vision or need guidance, we&apos;ll
                  work with you to create a piece that is uniquely yours.
                </motion.p>

                {/* Primary CTA Button + Side Tagline */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-5 sm:gap-6 mb-12"
                >
                  <Link
                    href="/book"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#B98A2E] hover:bg-[#c99736] text-[#15150F] text-xs font-semibold tracking-[0.22em] uppercase font-sans transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>BOOK A CONSULTATION</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  <div className="flex items-center gap-4 pl-4 border-l border-[#B98A2E]/40">
                    <p className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#FBF9F4]/70 font-sans font-medium leading-tight">
                      A MORE PERSONAL
                      <br />
                      APPROACH TO COUTURE.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Micro Content: 3 Pillars (DISCUSS, PLAN, CREATE) */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10"
              >
                {STEPS.map((step) => (
                  <div key={step.title} className="flex flex-col group">
                    <div className="mb-3 text-[#B98A2E] transition-transform duration-300 group-hover:-translate-y-0.5">
                      {step.icon("w-6 h-6 text-[#B98A2E]")}
                    </div>
                    <h3 className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#FBF9F4] uppercase mb-1">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs text-[#FBF9F4]/65 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN: COUTURE ATELIER IMAGE (COL-SPAN 5) ── */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-5 relative min-h-[420px] sm:min-h-[500px] lg:min-h-full overflow-hidden group bg-[#0E3B2E]"
            >
              <Image
                src={CTA_IMAGE.src}
                alt={CTA_IMAGE.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                priority
              />

              {/* Seamless blend gradient on left edge for desktop */}
              <div className="absolute inset-y-0 left-0 w-20 xl:w-28 bg-gradient-to-r from-[#0E3B2E] via-[#0E3B2E]/50 to-transparent z-10 pointer-events-none hidden lg:block" />

              {/* Subtle top and bottom vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Top-Right Editorial Badge */}
              <div className="absolute top-8 right-8 text-right z-20 pointer-events-none">
                <div className="font-serif italic text-lg sm:text-xl text-[#FBF9F4]/90 font-light leading-tight drop-shadow-sm">
                  Distinctively
                  <br />
                  Yours.
                </div>
                <div
                  className="w-8 h-[1px] bg-[#B98A2E] ml-auto mt-2 opacity-80"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          02: LOWER IVORY TRANSITION BAR (QUOTE & BESPOKE ATELIER EMBLEM)
      ═════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#FBF9F4] text-[#15150F] py-10 sm:py-12 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-[#15150F]/10">
        <div className="max-w-[1540px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left: Editorial Quote */}
          <div>
            <div
              className="w-10 h-[1.5px] bg-[#B98A2E] mb-3"
              aria-hidden="true"
            />
            <blockquote className="font-serif italic text-lg sm:text-2xl text-[#15150F] font-light leading-snug">
              &ldquo;Every great piece begins with a conversation.&rdquo;
            </blockquote>
            <cite className="not-italic text-[10px] tracking-[0.3em] uppercase text-[#15150F]/50 font-sans font-medium mt-1.5 block">
              BLAK MEYD
            </cite>
          </div>

          {/* Right: Atelier Location & Brand Mark */}
          <div className="flex items-center gap-6 self-start md:self-auto">
            <div
              className="hidden sm:block w-[1px] h-12 bg-[#B98A2E]/50"
              aria-hidden="true"
            />
            <div className="text-left md:text-right">
              <div className="font-serif text-base sm:text-lg tracking-[0.2em] text-[#15150F] font-medium uppercase leading-tight">
                BLAK MEYD
              </div>
              <div className="text-[10px] tracking-[0.25em] text-[#B98A2E] uppercase font-sans font-semibold mt-0.5">
                BESPOKE COUTURE
              </div>
              <div className="text-[9px] tracking-[0.22em] text-[#15150F]/60 uppercase font-sans mt-1">
                ACCRA, GHANA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
