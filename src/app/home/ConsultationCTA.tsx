"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section
      id="consultation"
      className="relative z-10 bg-[#FAF7F2] text-[#15150F] py-14 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-14 overflow-hidden border-t border-[#B98A2E]/20"
      aria-label="Book a consultation with Blak Meyd Haute Couture"
    >
      <div className="mx-auto max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* ════════════════════════════════════════════════════════════
              LEFT COLUMN: HEADLINE, NARRATIVE, CTA BUTTON & QUOTE
              ════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between py-2"
          >
            <div>
              {/* Eyebrow */}
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#B98A2E] block mb-3 sm:mb-4 font-sans">
                Ready When You Are
              </span>

              {/* Display Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.75rem] leading-[1.05] tracking-tight font-serif">
                <span className="font-light text-[#15150F] block font-fraunces">
                  Let&apos;s Bring
                </span>
                <span className="font-normal italic text-[#9B7038] block mt-1 font-fraunces">
                  Your Vision to Life.
                </span>
              </h2>

              {/* Narrative Copy */}
              <div className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-4 max-w-lg text-[#554E45] font-sans text-sm sm:text-[15px] lg:text-base leading-relaxed">
                <p>
                  Whether it&apos;s a wedding, a special occasion or a piece
                  that&apos;s uniquely yours, it all begins with a conversation.
                </p>
                <p>
                  Book a consultation and let&apos;s explore the possibilities
                  together.
                </p>
              </div>

              {/* Primary CTA Button */}
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-between gap-6 sm:gap-8 bg-[#0E3B2E] text-[#FBF9F4] px-8 sm:px-10 py-4 sm:py-5 rounded-xs hover:bg-[#15150F] transition-all duration-300 shadow-md group cursor-pointer"
                >
                  <span className="text-[11px] sm:text-xs tracking-[0.24em] uppercase font-sans font-semibold">
                    Book A Consultation
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#FBF9F4] group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>

                {/* Sub-tagline Badges */}
                <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5 text-[9px] sm:text-[9.5px] tracking-[0.24em] uppercase text-[#736C61] font-sans font-medium">
                  <span>In-Studio</span>
                  <span className="text-[#B98A2E]/60">|</span>
                  <span>Virtual</span>
                  <span className="text-[#B98A2E]/60">|</span>
                  <span>By Appointment Only</span>
                </div>
              </div>
            </div>

            {/* Editorial Quote (Bottom Left) */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-[#15150F]/10">
              <blockquote className="font-serif italic text-base sm:text-lg text-[#352F2A] leading-snug">
                &ldquo;Exceptional pieces
                <span className="block text-[#9B7038]">
                  begin with meaningful conversations.&rdquo;
                </span>
              </blockquote>
              <div className="mt-3 flex items-center gap-2.5 text-[9px] tracking-[0.25em] uppercase text-[#787165] font-sans font-semibold">
                <span className="w-6 h-[1px] bg-[#15150F]/30 inline-block" />
                <span>Blak Meyd</span>
              </div>
            </div>
          </motion.div>

          {/* ════════════════════════════════════════════════════════════
              RIGHT COLUMN: ATELIER STILL-LIFE EDITORIAL PHOTOGRAPH
              ════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 relative w-full max-w-[460px] lg:max-w-none h-[280px] sm:h-[340px] lg:h-[390px] xl:h-[420px] rounded-xs overflow-hidden bg-[#EAE3D6] shadow-lg group mx-auto lg:mx-0"
          >
            <Image
              src="/images/cta-atelier-still-life-hd.jpg"
              alt="Blak Meyd bespoke haute couture atelier stationery still life with letterpress card, gold pen, and draped emerald velvet"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              priority
            />

            {/* Subtle atmospheric vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

            {/* Floating Gold Typography on Emerald Velvet (Top Right) */}
            <div className="absolute top-6 sm:top-8 right-6 sm:right-8 text-right text-[8px] sm:text-[8.5px] tracking-[0.26em] uppercase text-[#FBF9F4]/90 font-sans font-medium leading-relaxed drop-shadow-md select-none">
              <div>People</div>
              <div>Ideas</div>
              <div>Fabrics</div>
              <div>Couture</div>
              <div>A Brighter You</div>
              <span className="h-[1px] w-6 bg-[#B98A2E]/80 mt-1.5 self-end inline-block" />
            </div>

            {/* Location Tag (Bottom Right) */}
            <div className="absolute bottom-6 right-6 sm:right-8 flex items-center gap-3 text-[9px] sm:text-[9.5px] tracking-[0.26em] uppercase text-[#FBF9F4]/90 font-sans font-medium drop-shadow-md select-none">
              <span className="w-8 sm:w-12 h-[1px] bg-[#FBF9F4]/60 inline-block" />
              <span>Accra, Ghana</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
