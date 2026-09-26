"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface OrderHeroProps {
  onStartOrder?: () => void;
}

export default function OrderHero({ onStartOrder }: OrderHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  // Subtle luxury editorial fade-up animation variant
  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.75,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : custom * 0.1,
      },
    }),
  };

  // Restrained, stable image reveal variant (no aggressive scale / zoom)
  const imageRevealVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.9,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section
      id="order-hero"
      className="relative w-full min-h-[calc(100vh-20px)] lg:min-h-screen bg-[#FBF9F4] text-[#15150F] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden flex flex-col justify-center"
      aria-label="Order a Garment Introduction"
    >
      {/* ── AMBIENT WARM EDITORIAL TONE ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(ellipse_60%_40%_at_25%_35%,rgba(185,138,46,0.04),transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 xl:gap-14 items-center">
          {/* ═════════════════════════════════════════════════════════════════
              LEFT COLUMN: EDITORIAL TYPOGRAPHY & ORDER CALL TO ACTION (~46%)
          ═════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center max-w-xl lg:max-w-none">
            {/* 01: Eyebrow with gold rule */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center gap-3.5 mb-5 sm:mb-6"
            >
              <span className="font-sans text-[10.5px] sm:text-[11.5px] tracking-[0.28em] text-[#15150F]/75 font-medium uppercase">
                ORDER A GARMENT
              </span>
              <span
                className="w-12 sm:w-16 h-[1px] bg-[#B98A2E]/70"
                aria-hidden="true"
              />
            </motion.div>

            {/* 02: Main Display Heading (Fraunces) */}
            <motion.h1
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-heading font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[66px] leading-[1.04] tracking-tight text-[#0E3B2E] mb-6 sm:mb-7"
            >
              <span className="block">Bring Your</span>
              <span className="block italic text-[#B98A2E] font-normal my-0.5 sm:my-1">
                Vision to Life.
              </span>
            </motion.h1>

            {/* 03: Supporting Copy */}
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-sans text-xs sm:text-[13.5px] md:text-sm text-[#15150F]/80 font-normal leading-relaxed max-w-md mb-8 sm:mb-10"
            >
              Share your garment details, measurements, design preferences and
              references, and let us create a piece that&apos;s uniquely yours.
            </motion.p>

            {/* 04: Primary CTA Button */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mb-10 sm:mb-12"
            >
              <button
                type="button"
                onClick={() => {
                  if (onStartOrder) {
                    onStartOrder();
                  }
                }}
                className="group inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 bg-[#0E3B2E] border border-[#B98A2E]/80 text-[#FBF9F4] text-[11px] sm:text-xs font-medium tracking-[0.22em] uppercase font-sans rounded-[1px] transition-all duration-300 shadow-sm hover:bg-[#07241C] hover:border-[#B98A2E] hover:shadow-[0_4px_20px_rgba(14,59,46,0.25)] active:scale-[0.99] w-full sm:w-auto cursor-pointer"
              >
                <span>START YOUR ORDER</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B98A2E] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* 05: Restrained Editorial Detail */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex items-start gap-4 pt-2 sm:pt-4"
            >
              {/* Subtle Vertical Gold Accent Line */}
              <div
                className="w-[1.5px] h-10 sm:h-11 bg-[#B98A2E] shrink-0 mt-0.5"
                aria-hidden="true"
              />

              <div className="flex flex-col">
                <span className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.26em] uppercase text-[#15150F]/65 font-medium mb-1">
                  A BESPOKE EXPERIENCE
                </span>
                <span className="font-sans text-[10.5px] sm:text-[11px] tracking-[0.2em] uppercase text-[#B98A2E] font-medium leading-snug">
                  YOUR STYLE &mdash; OUR EXPERTISE &mdash; A TIMELESS CREATION
                </span>
              </div>
            </motion.div>
          </div>

          {/* ═════════════════════════════════════════════════════════════════
              RIGHT COLUMN: SUNLIT COUTURE ATELIER PHOTOGRAPH (~54%)
          ═════════════════════════════════════════════════════════════════ */}
          <motion.div
            variants={imageRevealVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-7 relative w-full"
          >
            {/* Visual Container with subtle soft fade into ivory composition */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10.5] lg:aspect-[16/10] xl:aspect-[16/9.5] overflow-hidden rounded-[1px] shadow-[0_12px_40px_rgba(21,21,15,0.06)] border border-[#DDD5C5]/60 bg-[#F5F2EB]">
              <Image
                src="/images/order/order-hero-atelier.jpg"
                alt="Blak Meyd bespoke couture atelier with emerald draped velvet gown on mannequin, marble worktable with tailoring tape measure and fashion sketches, and morning light through studio window"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-[60%_center] sm:object-center select-none"
              />

              {/* Gentle ambient edge vignette preserving photographic warmth */}
              <div
                className="absolute inset-0 pointer-events-none select-none ring-1 ring-inset ring-[#DDD5C5]/40"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
