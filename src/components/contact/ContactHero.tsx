"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : custom * 0.15 + 0.1,
      },
    }),
  };

  const imageRevealVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section
      id="contact-hero"
      className="relative w-full min-h-[100svh] bg-[#FBF9F4] text-[#15150F] overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28"
      aria-label="Contact Blak Meyd Atelier"
    >
      {/* ── TWO-COLUMN SPLIT: 50% EDITORIAL TEXT (LEFT) / 50% ATELIER VISUAL (RIGHT) ── */}
      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2 min-h-0 items-stretch">
        {/* ════════════════════════════════════════════════════════════════
            LEFT SIDE: EDITORIAL TYPOGRAPHY (~50% ON DESKTOP)
        ════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col justify-between py-6 sm:py-8 lg:py-10 px-6 sm:px-10 lg:pl-16 lg:pr-10 xl:pl-20 xl:pr-14 z-10">
          <div>
            {/* 1. Eyebrow: CONTACT ─────── */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center gap-3.5 mb-6 sm:mb-8 lg:mb-10"
            >
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.28em] text-[#15150F]/70 font-medium uppercase">
                CONTACT
              </span>
              <span
                className="w-16 sm:w-20 lg:w-24 h-[1px] bg-[#B98A2E]/70"
                aria-hidden="true"
              />
            </motion.div>

            {/* 2. Main Display Heading: Let's / Talk. */}
            <div className="overflow-hidden mb-6 sm:mb-8">
              <motion.h1
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={1}
                className="font-heading font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[84px] xl:text-[96px] 2xl:text-[104px] leading-[0.94] tracking-tight text-[#0E3B2E]"
              >
                <span className="block">Let&apos;s</span>
                <span className="block italic text-[#B98A2E] font-normal mt-1 sm:mt-2">
                  Talk.
                </span>
              </motion.h1>
            </div>

            {/* 3. Supporting Paragraph with Vertical Gold Rule */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={2}
              className="flex items-start gap-4 sm:gap-5 mt-6 sm:mt-8 max-w-md"
            >
              <span
                className="w-[1.5px] h-14 sm:h-16 bg-[#B98A2E] shrink-0 mt-1"
                aria-hidden="true"
              />
              <p className="font-sans text-xs sm:text-[13px] md:text-sm leading-relaxed text-[#15150F]/80 font-normal">
                We&apos;d love to hear from you. Whether you have a question,
                want to discuss a custom piece, or need more information, our
                atelier is here to assist you.
              </p>
            </motion.div>
          </div>

          {/* 4. Understated Scroll Indicator (Bottom Left) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col items-start gap-1 pt-8 sm:pt-12 select-none"
          >
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#15150F]/60 font-medium">
              SCROLL TO EXPLORE
            </span>
            <span
              className="text-[#B98A2E] text-xs font-light"
              aria-hidden="true"
            >
              ↓
            </span>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            RIGHT SIDE: ATELIER STILL LIFE VISUAL (~50% ON DESKTOP)
        ════════════════════════════════════════════════════════════════ */}
        <motion.div
          variants={imageRevealVariant}
          initial="hidden"
          animate="visible"
          className="relative w-full h-[52vh] sm:h-[60vh] lg:h-auto min-h-[380px] lg:min-h-full overflow-hidden"
        >
          <Image
            src="/images/contact/contact-hero-atelier.jpg"
            alt="Blak Meyd luxury atelier with green velvet chair, marble table with draped emerald velvet, tailor measuring tape, sketchpad, and couture gowns on rack"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[55%_center] lg:object-[55%_center]"
          />
        </motion.div>
      </div>
    </section>
  );
}
