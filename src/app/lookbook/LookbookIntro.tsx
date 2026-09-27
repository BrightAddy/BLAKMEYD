"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

interface CategoryLink {
  label: string;
  href: string;
}

const CATEGORIES: CategoryLink[] = [
  { label: "PEOPLE", href: "#people" },
  { label: "OCCASIONS", href: "#occasions" },
  { label: "CRAFTSMANSHIP", href: "#craftsmanship" },
  { label: "BESPOKE STORIES", href: "#stories" },
];

export default function LookbookIntro() {
  return (
    <section
      id="lookbook-intro"
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#FBF9F4] text-[#15150F] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 px-8 sm:px-14 lg:px-20 xl:px-24 selection:bg-[#0E3B2E] selection:text-[#FBF9F4]"
      aria-label="Blak Meyd Lookbook: A visual record of pieces made for real stories"
    >
      {/* ── BACKGROUND PHOTOGRAPH (STEPPED-BACK WIDE EDITORIAL SPREAD) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/lookbook/lookbook-spread-clean.jpg"
          alt="Regal Ghanaian muse in bespoke Blak Meyd emerald green gown with gold bullion embroidery seated in an architectural courtyard"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[75%_center] sm:object-[70%_center] lg:object-right transition-transform duration-1000 ease-out"
        />

        {/* Mobile Readability Gradient (Gentle warm ivory tint on narrow screens only) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F4]/90 via-[#FBF9F4]/50 to-transparent sm:hidden pointer-events-none" />

        {/* Subtle Ambient Contrast */}
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />
      </div>

      {/* ── TOP AREA (CLEAN OPEN CANVAS, BRANDING REMOVED AS REQUESTED) ── */}
      <div className="relative z-10 w-full" aria-hidden="true" />

      {/* ── CENTER EDITORIAL CONTENT (MASTHEAD + NARRATIVE) ── */}
      <div className="relative z-10 my-auto py-4 sm:py-6 max-w-lg sm:max-w-xl lg:max-w-2xl">
        
        {/* Monumental Masthead: THE */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-fraunces text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-normal leading-[0.84] tracking-tight text-[#15150F]">
            THE
          </h1>
        </motion.div>

        {/* Monumental Masthead: LOOKBOOK (Fraunces Italic Antique Gold) */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-1 sm:mt-2"
        >
          <span className="font-fraunces text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-normal italic leading-[0.86] tracking-tight text-[#9E7B3B] block">
            LOOKBOOK
          </span>
        </motion.div>

        {/* Supporting Copy with Vertical Accent Hairline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 max-w-xs sm:max-w-sm"
        >
          {/* Vertical hairline accent */}
          <span className="w-[1.5px] h-6 bg-[#15150F]/70 block mb-3.5" />

          {/* Supporting Copy */}
          <p className="text-[10.5px] sm:text-[11.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#15150F] leading-relaxed">
            A visual record of pieces
            <br />
            made for real stories.
          </p>
        </motion.div>

      </div>

      {/* ── BOTTOM ROW: SCROLL PROMPT (LEFT) & RIGHT CATEGORY PILLARS (RIGHT) ── */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 pt-4">
        
        {/* Left: Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <a
            href="#lookbook-gallery"
            className="group flex flex-col items-start focus:outline-none"
            aria-label="Scroll to explore lookbook gallery"
          >
            <div className="flex items-center gap-2.5 text-[9.5px] sm:text-[10px] font-sans font-semibold tracking-[0.28em] uppercase text-[#15150F]/70 group-hover:text-[#15150F] transition-colors">
              <span className="w-[1.5px] h-4 bg-[#15150F]/60 inline-block" />
              <span>Scroll to Explore</span>
            </div>
            <ArrowDown className="w-3.5 h-3.5 text-[#15150F]/75 mt-1 ml-0.5 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>

        {/* Right: Four Categories / Themes (In the architectural recess on the right) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start sm:items-end text-left sm:text-right"
        >
          {/* Delicate horizontal gold hairline rule */}
          <span className="w-8 sm:w-10 h-[1px] bg-[#9E7B3B]/80 block mb-3 sm:mb-4" />

          {/* Category List */}
          <nav aria-label="Lookbook categories" className="flex flex-col space-y-2 sm:space-y-2.5">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#15150F]/80 sm:text-[#E8E3D7] hover:text-[#9E7B3B] transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </nav>
        </motion.div>

      </div>
    </section>
  );
}
