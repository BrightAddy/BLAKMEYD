"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Users, Scissors, Sparkles, Gem } from "lucide-react";

interface Pillar {
  title: string;
  description: string;
  icon: typeof Users;
}

const PILLARS: Pillar[] = [
  {
    title: "Personalised Experience",
    description:
      "We take the time to understand your lifestyle, preferences and vision.",
    icon: Users,
  },
  {
    title: "Exceptional Craftsmanship",
    description:
      "Skilled hands, quality fabrics and a meticulous eye for detail.",
    icon: Scissors,
  },
  {
    title: "Rooted in Culture",
    description:
      "Inspired by Ghana's rich heritage, reimagined for the modern woman.",
    icon: Sparkles,
  },
  {
    title: "Timeless Investment",
    description:
      "Pieces made to be worn, cherished and remembered beyond the moment.",
    icon: Gem,
  },
];

export default function WhyBlakMeyd() {
  return (
    <section
      id="why-blak-meyd"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] py-14 sm:py-18 lg:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-[#B98A2E]/15"
    >
      <div className="mx-auto max-w-[1500px] relative z-10">
        {/* ════════════════════════════════════════════════════════════
            TOP TIER: 3-COLUMN EDITORIAL MAGAZINE SPREAD
            (Left Narrative + Center Model with Moodboard + Right 4 Pillars)
            ════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch relative">
          {/* ────────────────────────────────────────────────────────
              COLUMN 1: HEADLINE, NARRATIVE & STORY LINK (~3.5 cols)
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between"
          >
            <div>
              {/* Top Header Mark */}
              <div className="flex items-center justify-between text-[9px] sm:text-[9.5px] tracking-[0.26em] uppercase text-[#787165] font-sans font-medium mb-8 sm:mb-10">
                <span className="font-semibold text-[#15150F]">Blak Meyd</span>
                <span className="text-[#8E877B]">Bespoke Couture Atelier</span>
              </div>

              {/* Eyebrow */}
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B98A2E] mb-3">
                Why Blak Meyd
              </div>

              {/* Monumental Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.08] tracking-tight font-serif max-w-sm">
                <span className="block font-semibold text-[#15150F] font-fraunces">
                  Crafted
                </span>
                <span className="block font-semibold text-[#15150F] font-fraunces">
                  With You
                </span>
                <span className="block font-normal italic text-[#B98A2E] font-fraunces mt-0.5">
                  At The Centre.
                </span>
              </h2>

              {/* Narrative Subtitle */}
              <p className="mt-4 sm:mt-5 text-[13px] sm:text-[14px] leading-relaxed text-[#554E45] font-sans max-w-md">
                We believe true style goes beyond trends — it&apos;s a reflection of
                who you are. At Blak Meyd, every piece is born from a
                collaboration, combining your vision with our expertise to create
                garments that are intentional, meaningful and uniquely yours.
              </p>
            </div>

            {/* CTA Link: — DISCOVER OUR STORY ( → ) */}
            <div className="mt-8 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[11px] sm:text-xs tracking-[0.24em] uppercase font-semibold text-[#15150F] hover:text-[#B98A2E] transition-colors group"
              >
                <span className="h-[1px] w-8 sm:w-10 bg-[#B98A2E]/70 inline-block" />
                <span>Discover Our Story</span>
                <div className="w-8 h-8 rounded-full border border-[#15150F]/40 flex items-center justify-center group-hover:border-[#B98A2E] group-hover:scale-105 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 text-[#B98A2E]" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* ────────────────────────────────────────────────────────
              COLUMN 2: CENTER MODEL IN CAPE GOWN BEFORE MOODBOARD (~4.5 cols)
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-5 relative"
          >
            <div className="relative w-full h-[440px] sm:h-[480px] lg:h-[500px] xl:h-[520px] max-h-[540px] overflow-hidden bg-[#201D19] shadow-md group">
              <Image
                src="/images/why-centre-model.jpg"
                alt="Ghanaian model in sculptural ivory one-shoulder cape gown before atelier sketch moodboard"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* Graphic Badge on Wall */}
              <div className="absolute top-20 left-4 z-10 bg-[#FBF9F4]/90 backdrop-blur-xs p-2.5 text-[8px] tracking-[0.22em] uppercase font-sans font-semibold text-[#15150F] shadow-xs leading-snug border border-[#B98A2E]/20">
                <div>Good</div>
                <div>Design</div>
                <div>Honours</div>
                <div>People.</div>
              </div>

              {/* Text Beside Model */}
              <div className="absolute top-10 right-4 z-10 text-right text-[8px] sm:text-[8.5px] tracking-[0.24em] uppercase text-[#736C61] font-sans font-medium leading-relaxed drop-shadow-xs">
                <div>Same</div>
                <div>Women.</div>
                <div>Different</div>
                <div>Stories.</div>
                <div>Beautifully</div>
                <div>Yours.</div>
                <span className="h-[1px] w-6 bg-[#B98A2E]/70 mt-1.5 inline-block" />
              </div>
            </div>

            {/* ── FLOATING OVERLAPPING POLAROID PHOTO ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -left-6 sm:-left-10 z-20 w-44 sm:w-52 bg-white p-3 pb-6 shadow-[0_16px_35px_rgba(0,0,0,0.18)] border border-[#E4ECE7] hover:rotate-0 hover:scale-105 transition-all duration-300"
            >
              <div className="relative aspect-[1/1] w-full overflow-hidden bg-[#201D19]">
                <Image
                  src="/images/why-polaroid-dressform.jpg"
                  alt="Vintage black and white atelier dress form with measuring tape"
                  fill
                  sizes="200px"
                  className="object-cover grayscale"
                />
              </div>
              <div className="text-center pt-2.5">
                <p className="font-serif italic text-sm sm:text-base text-[#15150F] tracking-wide leading-tight">
                  Thoughtful Design.
                </p>
                <p className="font-serif italic text-xs sm:text-sm text-[#736C61] leading-tight">
                  Lasting Pieces.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ────────────────────────────────────────────────────────
              COLUMN 3: 4 CORE PILLARS WITH ICONS (~4 cols)
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between"
          >
            {/* Top Utility Tabs */}
            <div className="flex items-center justify-between text-[9px] tracking-[0.26em] uppercase text-[#736C61] font-sans font-medium pb-2 border-b border-[#B98A2E]/20 mb-4 sm:mb-6">
              <span>People</span>
              <span>Process</span>
              <span>Purpose</span>
              <span className="h-[1px] w-6 bg-[#B98A2E]/60 inline-block" />
            </div>

            {/* 4 Core Pillars Stack */}
            <div className="space-y-4 sm:space-y-5">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-3.5 pb-4 border-b border-[#B98A2E]/15 last:border-b-0 group"
                  >
                    {/* Soft Circle Icon Badge */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EFE6] border border-[#B98A2E]/20 flex items-center justify-center shrink-0 text-[#B98A2E] group-hover:scale-110 group-hover:border-[#B98A2E] transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#15150F] group-hover:text-[#B98A2E] transition-colors leading-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] sm:text-[11.5px] text-[#6E685E] font-sans leading-relaxed mt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
