"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function ConsultationIntro() {
  return (
    <section
      id="consultation-intro"
      aria-label="Book a Consultation: Let's Bring Your Vision to Life"
      className="relative w-full bg-[#FAF7F2] text-[#15150F] border-b border-[#15150F]/8 select-none"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 sm:py-6 lg:py-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* ── LEFT COLUMN: EDITORIAL TYPOGRAPHY & TEASER COPY (lg: 5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Eyebrow with Architectural Gold Hairline */}
            <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.28em] uppercase text-[#B98A2E]">
                BOOK A CONSULTATION
              </span>
              <span className="w-7 sm:w-8 h-[1.5px] bg-[#B98A2E]" aria-hidden="true" />
            </div>

            {/* Display Headline */}
            <h1 className="font-fraunces text-2xl sm:text-3xl lg:text-[2.35rem] xl:text-[2.65rem] font-normal leading-[1.08] tracking-tight text-[#15150F]">
              Let’s Bring <br />
              Your Vision{" "}
              <span className="font-fraunces italic font-light text-[#9E7B3B]">
                to Life.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-2 text-xs sm:text-[13px] font-sans text-[#524D45] leading-relaxed font-normal">
              Every extraordinary piece begins with a conversation. Book a consultation
              to discuss your ideas, explore design options and begin your bespoke journey
              with Blak Meyd.
            </p>
          </motion.div>

          {/* ── RIGHT COLUMN: FULL UNBLURRED HIGH-DEFINITION ATELIER PHOTOGRAPHY (lg: 7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative w-full aspect-[16/9] max-h-[260px] sm:max-h-[290px] lg:max-h-[310px] rounded-xs overflow-hidden border border-[#15150F]/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] bg-[#ECE6DA]">
              <Image
                src="/images/consultation/consultation-hero-clean.jpg"
                alt="Client and master designer reviewing sketches and couture fabrics inside Blak Meyd atelier salon"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

              {/* Discreet Editorial Badge */}
              <div className="absolute bottom-2.5 right-2.5 bg-[#15150F]/80 backdrop-blur-xs text-[#FBF9F4] text-[9px] font-mono tracking-[0.2em] uppercase px-2 py-0.5 rounded-[1px] border border-white/10 pointer-events-none">
                Blak Meyd Atelier &bull; Accra
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
