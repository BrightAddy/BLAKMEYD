"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Easing } from "motion/react";

/* ─── Luxury Motion Easing ───────────────────────────────────────── */
const LUXURY_EASE: Easing = [0.22, 1, 0.36, 1] as unknown as Easing;

/* ─── Minimal Line-Based Outline Icons ─────────────────────────── */
function IconMannequin() {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 26 30"
      fill="none"
      stroke="#B98A2E"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:scale-105"
    >
      <circle cx="13" cy="3.5" r="1.5" />
      <line x1="13" y1="5" x2="13" y2="7" />
      <path d="M 9.5 7.5 L 16.5 7.5 C 18 11.5, 16.5 14.5, 16 17 L 10 17 C 9.5 14.5, 8 11.5, 9.5 7.5 Z" />
      <line x1="13" y1="17" x2="13" y2="27" />
      <line x1="8.5" y1="27" x2="17.5" y2="27" />
    </svg>
  );
}

function IconAdinkra() {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 26 30"
      fill="none"
      stroke="#B98A2E"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:scale-105"
    >
      <rect x="3.5" y="5.5" width="8" height="8" rx="1.5" />
      <rect x="14.5" y="5.5" width="8" height="8" rx="1.5" />
      <rect x="3.5" y="16.5" width="8" height="8" rx="1.5" />
      <rect x="14.5" y="16.5" width="8" height="8" rx="1.5" />
      <circle cx="7.5" cy="9.5" r="1.5" />
      <circle cx="18.5" cy="9.5" r="1.5" />
      <circle cx="7.5" cy="20.5" r="1.5" />
      <circle cx="18.5" cy="20.5" r="1.5" />
      <path d="M 13 10.5 L 15.5 13 L 13 15.5 L 10.5 13 Z" strokeWidth="0.9" />
    </svg>
  );
}

function IconLotus() {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 26 30"
      fill="none"
      stroke="#B98A2E"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:scale-105"
    >
      <path d="M 13 6 C 11.2 11, 11.2 17.5, 13 21 C 14.8 17.5, 14.8 11, 13 6 Z" />
      <path d="M 12 11 C 7.5 13, 5.5 18.5, 9.5 21.5 C 10.8 19.5, 11.8 16.5, 12 13.5" />
      <path d="M 14 11 C 18.5 13, 20.5 18.5, 16.5 21.5 C 15.2 19.5, 14.2 16.5, 14 13.5" />
      <path d="M 6.5 19.5 C 9.5 23.5, 16.5 23.5, 19.5 19.5" />
    </svg>
  );
}

/* ─── Reusable Value Marker Component ──────────────────────────── */
interface ValueMarkerProps {
  icon: React.ReactNode;
  primary: string;
  secondary: string;
  delay: number;
}

function ValueMarker({ icon, primary, secondary, delay }: ValueMarkerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, delay, ease: LUXURY_EASE }}
      className="group flex flex-col items-center gap-1.5 flex-1 text-center cursor-default"
    >
      <div className="p-0.5 transition-transform duration-300 group-hover:-translate-y-1">
        {icon}
      </div>
      <span className="font-fraunces text-[8.5px] sm:text-[9.5px] tracking-[0.24em] uppercase font-semibold text-[#15150F]/85 leading-[1.45]">
        {primary}
        <br />
        {secondary}
      </span>
    </motion.div>
  );
}

/* ─── Main Introduction Section Component ──────────────────────── */
export default function HomeIntro() {
  return (
    <section
      id="introduction"
      className="relative w-full bg-[#FBF9F4] text-[#15150F] py-12 sm:py-16 lg:py-20 overflow-hidden select-text border-t border-[#B98A2E]/15"
      aria-label="Introduction: Blak Meyd Haute Couture"
    >
      {/* Subtle ambient luxury radial glows */}
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(ellipse_at_top_right,rgba(185,138,46,0.06),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,59,46,0.04),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 relative z-10">
        
        {/* ── TWO-PART EDITORIAL GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* ═══════════════════════════════════════════════════════════
              LEFT SIDE: Bold Headline, Sub-heading, Rich Story (7 Cols)
              ═══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">

            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, ease: LUXURY_EASE }}
              className="flex items-center gap-3"
            >
              <span className="block w-7 sm:w-10 h-px bg-[#B98A2E] shrink-0" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase font-semibold text-[#8C7A5B]">
                INTRODUCING BLAK MEYD
              </span>
            </motion.div>

            {/* 2. Main Bold Headline (No fragile overflow clipping) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, delay: 0.1, ease: LUXURY_EASE }}
              className="flex flex-col"
            >
              <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-bold text-[#15150F] leading-[1.04] tracking-tight">
                <span className="block">Bespoke</span>
                <span className="block mt-0.5">Couture for</span>
                <span className="block mt-1 italic font-bold text-[#B98A2E]">
                  Modern Women
                </span>
              </h2>
            </motion.div>

            {/* 3. Sub-Heading */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: LUXURY_EASE }}
              className="pt-0.5"
            >
              <p className="font-fraunces italic font-medium text-lg sm:text-xl lg:text-[22px] text-[#0E3B2E] tracking-tight leading-snug">
                Sculpting Heirloom Identities Through Ghanaian Haute Couture.
              </p>
            </motion.div>

            {/* 4. Storytelling Paragraphs Introducing Blak Meyd */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: LUXURY_EASE }}
              className="space-y-3.5 text-[#4F4A42] text-[13.5px] sm:text-[14.5px] lg:text-[15px] font-normal leading-[1.8] max-w-xl"
            >
              <p>
                Founded in the vibrant heart of Accra, <strong className="font-semibold text-[#15150F]">Blak Meyd</strong> is
                a premier Ghanaian bespoke couture atelier sculpting heirloom eveningwear, bridal reception silhouettes,
                and architectural ceremonial garments. We design with deep intention, for women who honor craftsmanship,
                ancestral authenticity, and distinct personal style.
              </p>
              <p className="text-[#4F4A42]/90">
                Every commission begins with an intimate creative dialogue, hand-drafted custom patterns sculpted to
                your exact measurements, and centuries-old Ghanaian textile lineages harmonized with modern corsetry.
                At Blak Meyd, we do not follow fleeting trends; we create timeless statements of self-expression.
              </p>
            </motion.div>

            {/* 5. Three Value Markers */}
            <div className="pt-2 flex items-start gap-2 sm:gap-4 max-w-lg">
              <ValueMarker
                icon={<IconMannequin />}
                primary="BESPOKE"
                secondary="DESIGN"
                delay={0.4}
              />
              <span className="w-px h-11 bg-[#B98A2E]/25 mt-2 shrink-0" aria-hidden="true" />
              <ValueMarker
                icon={<IconAdinkra />}
                primary="GHANAIAN"
                secondary="HERITAGE"
                delay={0.48}
              />
              <span className="w-px h-11 bg-[#B98A2E]/25 mt-2 shrink-0" aria-hidden="true" />
              <ValueMarker
                icon={<IconLotus />}
                primary="TIMELESS"
                secondary="ELEGANCE"
                delay={0.56}
              />
            </div>

            {/* 6. CTA Button & MORE THAN FASHION */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-5 max-w-lg border-t border-[#B98A2E]/20">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.65, ease: LUXURY_EASE }}
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center gap-3 bg-[#0E3B2E] text-[#FBF9F4] px-7 py-3.5 text-[10.5px] sm:text-[11px] tracking-[0.28em] uppercase font-medium shadow-[0_4px_18px_rgba(14,59,46,0.18)] hover:bg-[#07251D] hover:shadow-[0_6px_24px_rgba(14,59,46,0.28)] transition-all duration-300"
                >
                  <span>DISCOVER OUR WORLD</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1 font-light text-sm">
                    →
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.75, ease: LUXURY_EASE }}
                className="flex items-center gap-3 select-none"
              >
                <span className="block w-6 sm:w-8 h-px bg-[#B98A2E]/60 shrink-0" aria-hidden="true" />
                <span className="text-[9px] sm:text-[9.5px] tracking-[0.38em] uppercase font-medium text-[#15150F]/70">
                  MORE THAN FASHION
                </span>
              </motion.div>
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════
              RIGHT SIDE: Curated Fashion Frame with Smooth Animation
              ═══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.85, delay: 0.2, ease: LUXURY_EASE }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[460px] aspect-[4/5] rounded-t-[3.5rem] lg:rounded-t-[4.5rem] rounded-b-2xl overflow-hidden shadow-[0_20px_50px_rgba(21,21,15,0.12)] border border-[#B98A2E]/30 bg-[#0E1511]"
            >
              <Image
                src="/images/intro-couture-campaign.jpg"
                alt="High-fashion couture campaign for Blak Meyd atelier in Accra featuring Ghanaian model in emerald and gold gown"
                fill
                priority
                quality={95}
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 400px, 340px"
                className="object-cover object-[52%_15%]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />
              <div className="absolute inset-0 rounded-t-[3.5rem] lg:rounded-t-[4.5rem] rounded-b-2xl border border-white/10 pointer-events-none" />

              {/* Top Right: ACCRA, GHANA — */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: LUXURY_EASE }}
                className="absolute top-5 sm:top-6 right-5 sm:right-6 z-20 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 shadow-[0_2px_14px_rgba(0,0,0,0.6)]"
              >
                <span className="text-[9px] sm:text-[9.5px] tracking-[0.32em] uppercase font-semibold text-[#E2C178]">
                  ACCRA, GHANA
                </span>
                <span className="block w-5 h-px bg-[#E2C178]" aria-hidden="true" />
              </motion.div>

              {/* Lower Right: Fashion with purpose. */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: LUXURY_EASE }}
                className="absolute bottom-6 sm:bottom-8 right-5 sm:right-6 z-20 flex flex-col items-end text-right px-4 py-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.7)] max-w-[210px]"
              >
                <span className="font-fraunces italic font-normal text-[#FFFFFF] text-base sm:text-lg leading-[1.3] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  Fashion
                  <br />
                  with purpose.
                </span>
                <span className="block w-10 h-px bg-[#E2C178] mt-2 shadow-[0_0_8px_rgba(226,193,120,0.7)]" aria-hidden="true" />
              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
