"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function BridalSpecialOccasions() {
  return (
    <section
      id="bridal"
      className="relative z-10 bg-[#F3EDE2] text-[#15150F] py-14 sm:py-18 lg:py-22 px-4 sm:px-8 lg:px-14 overflow-hidden border-t border-[#B98A2E]/20"
      aria-label="Bridal and Special Occasions Bespoke Haute Couture"
    >
      <div className="mx-auto max-w-[1480px] relative z-10">
        {/* ════════════════════════════════════════════════════════════
            3-COLUMN EDITORIAL MAGAZINE SPREAD
            (Left Narrative + Center Bride Portrait + Right Stacked Cards)
            ════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* ────────────────────────────────────────────────────────
              COLUMN 1: HEADLINE, NARRATIVE & QUICK LINKS (~4-5 cols)
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4 2xl:col-span-4 relative z-20 flex flex-col justify-between py-1"
          >
            <div>
              {/* Eyebrow */}
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.26em] uppercase text-[#B98A2E] block mb-2 sm:mb-3 font-sans">
                Bridal &amp; Special Occasions
              </span>

              {/* Display Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.25rem] 2xl:text-[3.75rem] leading-[1.04] tracking-tight font-serif">
                <span className="font-light text-[#15150F] block font-fraunces">
                  Moments
                </span>
                <span className="font-light text-[#15150F] block font-fraunces">
                  Made
                </span>
                <span className="font-normal italic text-[#9B7038] block mt-1 font-fraunces tracking-normal whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap">
                  Extraordinary.
                </span>
              </h2>

              {/* Sub-tagline */}
              <div className="flex items-center gap-3 mt-4 sm:mt-5 text-[9px] sm:text-[9.5px] tracking-[0.24em] uppercase text-[#736C61] font-sans font-medium">
                <span className="h-[1px] w-6 bg-[#B98A2E]/60 inline-block" />
                <span>Bespoke For Your Most Important Moments.</span>
              </div>

              {/* Narrative Copy */}
              <p className="mt-5 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#554E45] font-sans max-w-sm">
                From bridal gowns to special occasion attire, we create timeless
                pieces that celebrate your story with elegance, intention and
                impeccable craftsmanship.
              </p>

              {/* 3 Category Quick Links (Horizontal Row with Dividers) */}
              <div className="grid grid-cols-3 gap-3 pt-6 sm:pt-8 my-6 border-t border-[#15150F]/10">
                <Link
                  href="/collections#bridal"
                  className="group flex flex-col justify-between pr-2 border-r border-[#15150F]/10 hover:opacity-80 transition-opacity"
                >
                  <span className="text-[9px] sm:text-[9.5px] tracking-[0.22em] uppercase font-sans font-semibold text-[#15150F] group-hover:text-[#B98A2E] transition-colors leading-tight">
                    Bridal Wear
                  </span>
                  <span className="mt-2 text-xs text-[#15150F] group-hover:translate-x-1 transition-transform inline-block">
                    &rarr;
                  </span>
                </Link>

                <Link
                  href="/collections#occasions"
                  className="group flex flex-col justify-between px-2 border-r border-[#15150F]/10 hover:opacity-80 transition-opacity"
                >
                  <span className="text-[9px] sm:text-[9.5px] tracking-[0.22em] uppercase font-sans font-semibold text-[#15150F] group-hover:text-[#B98A2E] transition-colors leading-tight">
                    Special Occasions
                  </span>
                  <span className="mt-2 text-xs text-[#15150F] group-hover:translate-x-1 transition-transform inline-block">
                    &rarr;
                  </span>
                </Link>

                <Link
                  href="/book"
                  className="group flex flex-col justify-between pl-2 hover:opacity-80 transition-opacity"
                >
                  <span className="text-[9px] sm:text-[9.5px] tracking-[0.22em] uppercase font-sans font-semibold text-[#15150F] group-hover:text-[#B98A2E] transition-colors leading-tight">
                    Custom Ensembles
                  </span>
                  <span className="mt-2 text-xs text-[#15150F] group-hover:translate-x-1 transition-transform inline-block">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>

            {/* Editorial Quote (Bottom Left) */}
            <div className="mt-6 sm:mt-10 pt-4">
              <blockquote className="font-serif italic text-base sm:text-lg text-[#352F2A] leading-snug">
                &ldquo;For the moments
                <span className="block">you&apos;ll always remember.&rdquo;</span>
              </blockquote>
              <div className="mt-2.5 flex items-center gap-2.5 text-[9px] tracking-[0.25em] uppercase text-[#787165] font-sans font-semibold">
                <span className="w-5 h-[1px] bg-[#15150F]/30 inline-block" />
                <span>Blak Meyd</span>
              </div>
            </div>
          </motion.div>

          {/* ────────────────────────────────────────────────────────
              COLUMN 2: CENTER BRIDE HERO PORTRAIT (~4-5 cols)
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-5 2xl:col-span-5 relative z-10 h-[480px] sm:h-[580px] lg:h-full min-h-[500px] lg:min-h-[640px] rounded-xs overflow-hidden bg-[#E8E1D5] shadow-lg group"
          >
            <Image
              src="/images/bridal-center-bride-real-hd.jpg"
              alt="Bespoke Blak Meyd bridal ballgown with sculptural bow back and cathedral veil in sunlit stone colonnade"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              priority
            />

            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

            {/* Overlay Text: Timeless / Elegant / Uniquely Yours (Top Left) */}
            <div className="absolute top-6 sm:top-8 left-6 sm:left-8 text-left text-[8.5px] sm:text-[9px] tracking-[0.26em] uppercase text-[#15150F]/90 font-sans font-medium leading-relaxed drop-shadow-sm select-none">
              <div>Timeless</div>
              <div>Elegant</div>
              <div>Uniquely Yours</div>
              <span className="h-[1px] w-6 bg-[#B98A2E]/80 mt-1.5 inline-block" />
            </div>
          </motion.div>

          {/* ────────────────────────────────────────────────────────
              COLUMN 3: RIGHT STACKED TIERS (~3 cols)
              (Occasions Box + 2 Split Photos + Consultation Card)
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 xl:col-span-3 flex flex-col justify-between gap-4 lg:gap-5"
          >
            {/* Top Box: Deep Emerald Velvet with Special Occasions List */}
            <div className="relative h-44 sm:h-52 lg:h-48 rounded-xs overflow-hidden bg-[#0E3B2E] p-5 sm:p-6 flex flex-col justify-between shadow-md group">
              <Image
                src="/images/bridal-emerald-silk-real-hd.jpg"
                alt="Deep emerald green draped silk velvet textile"
                fill
                sizes="350px"
                className="object-cover object-center opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-10">
                <span className="text-[8px] sm:text-[8.5px] tracking-[0.26em] uppercase text-[#FBF9F4]/90 font-sans font-semibold block">
                  Special Occasions
                </span>
                <span className="h-[1px] w-5 bg-[#B98A2E]/80 mt-1 inline-block" />
              </div>
              <div className="relative z-10 space-y-1 text-[7.5px] sm:text-[8px] tracking-[0.22em] uppercase text-[#FBF9F4]/90 font-sans font-medium leading-snug">
                <div>Engagements</div>
                <div>Receptions</div>
                <div>Gala Events</div>
                <div>Birthday Celebrations</div>
                <div>Cultural Ceremonies</div>
                <div className="text-[#B98A2E]">And More</div>
              </div>
            </div>

            {/* Middle Row: 2 Split Photo Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-44 sm:h-52 lg:h-48">
              {/* Left Photo: Emerald Evening Gown */}
              <div className="relative rounded-xs overflow-hidden bg-[#201D19] shadow-sm group">
                <Image
                  src="/images/bridal-emerald-gown-real-hd.jpg"
                  alt="African woman in bespoke emerald green couture ballgown with sculptural bustle"
                  fill
                  sizes="200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Photo: Macro Hand-Beaded Embroidery */}
              <div className="relative rounded-xs overflow-hidden bg-[#201D19] shadow-sm group">
                <Image
                  src="/images/bridal-beaded-detail-real-hd.jpg"
                  alt="Intricate bridal hand-beaded lace with pearls, Swarovski crystals, and gold embroidery"
                  fill
                  sizes="200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Card: Consultation Callout */}
            <div className="bg-[#FAF7F2] p-5 sm:p-6 border border-[#E7E0D5] rounded-xs flex flex-col justify-between shadow-xs">
              <div className="flex items-start gap-3">
                <span className="w-[1.5px] h-8 bg-[#15150F]/40 shrink-0 inline-block mt-0.5" />
                <span className="text-[9px] sm:text-[9.5px] tracking-[0.24em] uppercase text-[#736C61] font-sans font-medium leading-relaxed">
                  Let&apos;s Bring Your Vision To Life
                </span>
              </div>
              <Link
                href="/book"
                className="mt-4 flex items-center justify-between bg-[#0E3B2E] text-[#FBF9F4] px-4 sm:px-5 py-3 rounded-xs hover:bg-[#15150F] transition-colors text-[9px] sm:text-[9.5px] tracking-[0.24em] uppercase font-sans font-semibold group cursor-pointer"
              >
                <span>Book A Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            BOTTOM UTILITY FOOTER STRIP
            ════════════════════════════════════════════════════════════ */}
        <div className="mt-12 sm:mt-16 pt-5 border-t border-[#15150F]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] sm:text-[9.5px] tracking-[0.26em] uppercase text-[#736C61] font-sans font-medium">
          <div className="flex items-center gap-3">
            <span>Accra, Ghana</span>
            <span className="h-[1px] w-8 sm:w-14 bg-[#B98A2E]/50 inline-block" />
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="h-[1px] w-6 sm:w-10 bg-[#15150F]/20 hidden sm:inline-block" />
            <span>Couture For Life&apos;s Most Meaningful Moments</span>
            <span className="h-[1px] w-6 sm:w-10 bg-[#15150F]/20 hidden sm:inline-block" />
          </div>
          <div>
            <span className="text-[#8E877B]">BlakMeyd.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
