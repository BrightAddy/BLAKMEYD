"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function ConsultationIntro() {
  return (
    <section className="relative w-full bg-[#15150F] text-[#FBF9F4] overflow-hidden border-b border-[#B98A2E]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[380px] lg:min-h-[440px] items-stretch">
        {/* ── LEFT: EDITORIAL COPY ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-12 sm:py-16 z-10"
        >
          {/* Subtitle with Gold Hairline */}
          <div className="mb-4 sm:mb-5">
            <span className="text-[10.5px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#B98A2E] block">
              BOOK A CONSULTATION
            </span>
            <span className="inline-block w-8 sm:w-10 h-[1.5px] bg-[#B98A2E] mt-2" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-normal tracking-tight text-[#FBF9F4] leading-[1.05] mb-4 sm:mb-5">
            Let’s Bring <br />
            Your Vision to Life.
          </h1>

          {/* Supporting Copy */}
          <p className="text-xs sm:text-[13.5px] font-sans text-[#E4ECE7]/80 leading-relaxed max-w-xl font-light">
            Every extraordinary piece begins with a conversation. Book a consultation to discuss your ideas, explore design options and begin your bespoke journey with Blak Meyd.
          </p>
        </motion.div>

        {/* ── RIGHT: ATELIER CONSULTATION PHOTOGRAPHY ── */}
        <div className="relative lg:col-span-6 xl:col-span-7 min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden">
          <Image
            src="/images/consultation/consultation-hero.jpg"
            alt="Intimate bespoke consultation at Blak Meyd atelier with client and designer reviewing couture sketches and fabric swatches"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center lg:object-right"
          />
          {/* Subtle dark gradient overlay blending into the left content */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#15150F] via-[#15150F]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
