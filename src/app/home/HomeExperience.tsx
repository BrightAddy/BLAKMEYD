"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Pillar {
  number: string;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Personal",
    description:
      "Every piece begins with your vision, your story, and how you want to feel.",
  },
  {
    number: "02",
    title: "Intentional",
    description:
      "From fabric selection to the final stitch, every detail is considered with purpose.",
  },
  {
    number: "03",
    title: "Exceptional",
    description:
      "A considered couture experience shaped around you from consultation to completion.",
  },
];

export default function HomeExperience() {
  return (
    <section
      id="experience"
      className="relative z-10 bg-[#F3EDE2] text-[#15150F] py-14 sm:py-18 lg:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-[#B98A2E]/20"
    >
      {/* SVG Clip Path Definition for the Convex Arched Boundary */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="experience-convex-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0.12,0 C 0.03,0.25 0,0.5 0,0.5 C 0,0.5 0.03,0.75 0.12,1 L 1,1 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ────────────────────────────────────────────────────────
              LEFT COLUMN: EDITORIAL NARRATIVE & VALUE PILLARS (5.5 of 12 cols)
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B98A2E] mb-3 sm:mb-4">
              <span className="h-[1px] w-8 sm:w-10 bg-[#B98A2E]" />
              <span>The Blak Meyd Experience</span>
            </div>

            {/* Headline: More Than Fashion. An Experience Made for You. */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.12] tracking-tight font-serif">
              <span className="block font-semibold text-[#15150F] font-fraunces">
                More Than Fashion.
              </span>
              <span className="block font-normal italic text-[#B98A2E] font-fraunces mt-0.5">
                An Experience
              </span>
              <span className="block font-semibold text-[#15150F] font-fraunces mt-0.5">
                Made for You.
              </span>
            </h2>

            {/* Narrative Subtitle */}
            <p className="mt-4 sm:mt-5 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#554E45] font-sans max-w-lg">
              At Blak Meyd, we create more than garments. We create a personal
              journey, defined by attention, artistry and a genuine
              commitment to you.
            </p>

            {/* Three Numbered Value Pillars */}
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
              {PILLARS.map((pillar) => (
                <div key={pillar.number} className="flex items-start gap-4 sm:gap-5 group">
                  {/* Number 01 / 02 / 03 */}
                  <span className="font-fraunces text-xl sm:text-2xl text-[#B98A2E] font-normal shrink-0 pt-0.5 w-7 sm:w-8">
                    {pillar.number}
                  </span>

                  {/* Vertical Divider Rule */}
                  <span className="h-9 sm:h-10 w-[1.5px] bg-[#B98A2E]/40 shrink-0 self-center" />

                  {/* Pillar Text */}
                  <div className="pt-0.5">
                    <h3 className="font-fraunces text-base sm:text-lg font-normal text-[#15150F] leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6E685E] font-sans leading-relaxed mt-1 max-w-md">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call To Action Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 bg-[#0E3B2E] hover:bg-[#08281E] text-[#FBF9F4] px-7 sm:px-9 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:border-[#B98A2E]/60 border border-transparent group"
              >
                <span>Begin Your Journey</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#B98A2E]" />
              </Link>
            </div>
          </motion.div>

          {/* ────────────────────────────────────────────────────────
              RIGHT COLUMN: PROPORTIONED ATELIER VISUAL + EMERALD STRIP (6 of 12 cols)
              Strictly controlled height (max-h-[540px]) to prevent oversized layout
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 w-full"
          >
            <div
              className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] xl:h-[530px] max-h-[550px] shadow-[0_12px_40px_rgba(0,0,0,0.1)] overflow-hidden flex"
              style={{
                clipPath: "url(#experience-convex-curve)",
              }}
            >
              {/* Atelier Photo Section (approx 78% width) */}
              <div className="relative flex-1 h-full bg-[#201D19] overflow-hidden">
                <Image
                  src="/images/experience-atelier-hd.jpg"
                  alt="Blak Meyd luxury atelier dress form draped in champagne satin on mahogany cutting table with couture sketches and measuring tape"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                  className="object-cover object-[30%_center] sm:object-center transition-transform duration-700 ease-out hover:scale-105"
                  priority
                />
                {/* Subtle warm atelier vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30 pointer-events-none" />
              </div>

              {/* Deep Emerald Right Sidebar Column (approx 22% width) */}
              <div className="w-24 sm:w-28 lg:w-32 bg-[#0E3B2E] text-[#FBF9F4] flex flex-col justify-between items-center py-6 sm:py-8 px-2 sm:px-3 text-center shrink-0 border-l border-[#B98A2E]/20 relative z-10 select-none">
                {/* Top Quote */}
                <div className="flex flex-col items-center gap-2">
                  <span className="h-[1px] w-6 bg-[#B98A2E]/60 inline-block" />
                  <p className="font-fraunces italic text-xs sm:text-[13px] leading-snug text-[#E4ECE7] max-w-[90px]">
                    Every detail tells a story.
                  </p>
                  <span className="h-[1px] w-6 bg-[#B98A2E]/60 inline-block" />
                </div>

                {/* Center Brand Pillars */}
                <div className="flex flex-col items-center gap-1.5 py-4">
                  <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.26em] uppercase font-semibold text-[#FBF9F4]">
                    Blak Meyd
                  </span>
                  <div className="flex flex-col gap-1 text-[8px] sm:text-[8.5px] tracking-[0.24em] uppercase text-[#B98A2E] font-medium mt-1">
                    <span>People</span>
                    <span>Craft</span>
                    <span>Purpose</span>
                  </div>
                </div>

                {/* Bottom Provenance */}
                <div className="flex items-center gap-2">
                  <span className="text-[7.5px] sm:text-[8px] tracking-[0.24em] uppercase text-[#C5A059]/80 font-sans whitespace-nowrap">
                    Accra, Ghana
                  </span>
                  <span className="h-[1px] w-4 bg-[#B98A2E]/60 inline-block" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
