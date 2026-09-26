"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface Principle {
  number: string;
  title: string;
  description: string;
  icon: (className?: string) => React.ReactNode;
}

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "BESPOKE",
    description:
      "Designed around you, for a flawless fit and a truly individual look.",
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
    number: "02",
    title: "CRAFTSMANSHIP",
    description:
      "Meticulous attention to detail, using quality fabrics and refined techniques.",
    icon: (className = "w-6 h-6 text-[#B98A2E]") => (
      // Needle & Thread Icon
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="20" y1="4" x2="8" y2="16" />
        <circle cx="18.5" cy="5.5" r="1" />
        <path d="M14 10c-3 1-5 4-5 7 0 2 1.5 3 3.5 3s3.5-1 3.5-3c0-3-2-5-5-5" />
        <path d="M8 16l-3 3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "PERSONAL",
    description:
      "A collaborative journey from concept to completion, with you at the centre.",
    icon: (className = "w-6 h-6 text-[#B98A2E]") => (
      // Elegant Silhouette Icon
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "EXPERIENCE",
    description:
      "A seamless and memorable experience, from the first consultation to the final fitting.",
    icon: (className = "w-6 h-6 text-[#B98A2E]") => (
      // Faceted Diamond / Gem Icon
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3h12l4 6-10 12L2 9z" />
        <path d="M10 3l-2 6 4 12" />
        <path d="M14 3l2 6-4 12" />
        <line x1="2" y1="9" x2="22" y2="9" />
      </svg>
    ),
  },
];

const COLLAGE_IMAGES = {
  primary: {
    src: "/images/why-blak-meyd/primary-couture.jpg",
    alt: "Blak Meyd Bespoke Couture Gown — Emerald Green & Gold Handcrafted Silhouette",
  },
  details: [
    {
      src: "/images/why-blak-meyd/detail-mannequin.jpg",
      alt: "Tailoring Mannequin with Gold Measuring Tape in Blak Meyd Atelier",
    },
    {
      src: "/images/why-blak-meyd/detail-embroidery.jpg",
      alt: "Artisan Hand-Beading and Gold Thread Embroidery Detail",
    },
    {
      src: "/images/why-blak-meyd/detail-atelier-label.jpg",
      alt: "Blak Meyd Bespoke Couture Embossed Leather Label and Tailor Shears",
    },
  ],
};

export default function WhyBlakMeyd() {
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

  const imageRevealVariants = {
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
      id="why-blak-meyd"
      className="relative w-full bg-[#FBF9F4] text-[#15150F] py-20 sm:py-24 lg:py-32 border-t border-[#15150F]/10 overflow-hidden"
    >
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start"
        >
          {/* ═════════════════════════════════════════════════════════════════
              LEFT SIDE: CONTENT & FOUR PRINCIPLES (COL-SPAN 6 / 7)
          ═════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Eyebrow */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-8 h-[1px] bg-[#B98A2E]" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#B98A2E] font-medium font-sans">
                  WHY BLAK MEYD
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                variants={itemVariants}
                className="font-serif text-[#15150F] text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] leading-[1.12] tracking-tight mb-6"
              >
                <span className="block font-normal">More Than a Garment.</span>
                <span className="block italic font-light text-[#15150F]/90">
                  A Considered Experience.
                </span>
              </motion.h2>

              {/* Introductory Paragraph */}
              <motion.p
                variants={itemVariants}
                className="font-sans text-sm sm:text-base text-[#15150F]/75 font-light leading-relaxed max-w-xl mb-12"
              >
                At Blak Meyd, we believe true style is personal. Every piece is
                thoughtfully designed and meticulously crafted to reflect your
                story, your occasion and your individuality.
              </motion.p>

              {/* Four Principles Horizontal Grid */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 py-8 sm:py-10 border-t border-b border-[#15150F]/10 mb-12"
              >
                {PRINCIPLES.map((principle) => (
                  <div
                    key={principle.number}
                    className="flex flex-col group pr-2"
                  >
                    {/* Icon */}
                    <div className="mb-4 text-[#B98A2E] transition-transform duration-500 group-hover:-translate-y-0.5">
                      {principle.icon("w-7 h-7 text-[#B98A2E]")}
                    </div>

                    {/* Subtle Number */}
                    <span className="font-serif italic text-base sm:text-lg text-[#15150F]/45 mb-1.5 font-light">
                      {principle.number}
                    </span>

                    {/* Title */}
                    <h3 className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#15150F] uppercase mb-2">
                      {principle.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs text-[#15150F]/70 leading-relaxed font-light">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Left Editorial Quote Anchor */}
            <motion.div
              variants={itemVariants}
              className="pt-2 border-t border-transparent"
            >
              <div
                className="w-10 h-[1.5px] bg-[#B98A2E] mb-5"
                aria-hidden="true"
              />
              <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-[26px] text-[#15150F] font-light leading-snug max-w-lg mb-3">
                &ldquo;Exceptional pieces for life’s most meaningful
                moments.&rdquo;
              </blockquote>
              <cite className="not-italic text-[10px] tracking-[0.3em] uppercase text-[#15150F]/60 font-sans font-medium block">
                BLAK MEYD
              </cite>
            </motion.div>
          </div>

          {/* ═════════════════════════════════════════════════════════════════
              RIGHT SIDE: EDITORIAL IMAGE COLLAGE & LOOKBOOK CTA (COL-SPAN 6)
          ═════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between h-full">
            {/* Collage Grid: Primary Portrait (68%) + Detail Stack (32%) */}
            <motion.div
              variants={imageRevealVariants}
              className="grid grid-cols-12 gap-3 sm:gap-4"
            >
              {/* Primary Couture Fashion Portrait (8 cols) */}
              <div className="col-span-8 relative aspect-[3/4.3] overflow-hidden bg-[#15150F]/5 group">
                <Image
                  src={COLLAGE_IMAGES.primary.src}
                  alt={COLLAGE_IMAGES.primary.alt}
                  fill
                  sizes="(max-width: 1024px) 65vw, 35vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  priority
                />

                {/* Subtle dark vignette overlay for typography legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

                {/* Floating Top-Right Editorial Text */}
                <div className="absolute top-5 right-5 text-right z-10 pointer-events-none">
                  <div className="text-[9px] sm:text-[10px] tracking-[0.26em] uppercase text-[#FBF9F4]/95 font-sans font-medium leading-relaxed drop-shadow-sm space-y-0.5">
                    <div>PEOPLE</div>
                    <div>FABRICS</div>
                    <div>DETAILS</div>
                    <div>STORIES</div>
                  </div>
                  <div
                    className="w-5 h-[1px] bg-[#B98A2E] ml-auto mt-2 opacity-90"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Stack of 3 Detail Images (4 cols) */}
              <div className="col-span-4 flex flex-col justify-between gap-3 sm:gap-4">
                {COLLAGE_IMAGES.details.map((detail, index) => (
                  <div
                    key={index}
                    className="relative flex-1 min-h-[110px] sm:min-h-[135px] lg:min-h-[145px] overflow-hidden bg-[#15150F]/5 group"
                  >
                    <Image
                      src={detail.src}
                      alt={detail.alt}
                      fill
                      sizes="(max-width: 1024px) 30vw, 15vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Lookbook CTA & Editorial Note Bar */}
            <motion.div
              variants={itemVariants}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4 pt-4"
            >
              {/* Explore Lookbook Button */}
              <Link
                href="/lookbook"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 border border-[#15150F]/30 hover:border-[#B98A2E] bg-transparent text-xs tracking-[0.22em] uppercase font-sans font-medium text-[#15150F] hover:text-[#B98A2E] transition-all duration-300 shadow-sm"
              >
                <span>EXPLORE THE LOOKBOOK</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-[#B98A2E]">
                  →
                </span>
              </Link>

              {/* Editorial Tagline */}
              <div className="flex items-center gap-4 pl-4 border-l border-[#B98A2E]/60">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#15150F]/65 font-sans font-medium leading-tight">
                  SAME CRAFT.
                  <br />
                  DIFFERENT STORIES.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
