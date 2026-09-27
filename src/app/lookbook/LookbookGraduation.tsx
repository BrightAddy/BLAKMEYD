"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles } from "lucide-react";

export default function LookbookGraduation() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="lookbook-graduation"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] w-full min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] flex flex-col justify-center py-4 sm:py-6 lg:py-6 xl:py-8 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 selection:bg-[#0E3B2E] selection:text-[#FBF9F4] overflow-hidden border-t border-[#15150F]/10"
      aria-label="Lookbook Spread Three: Graduation Outfits"
    >
      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-12">
        
        {/* ── LEFT ACCENT: BLACK & WHITE GRADUATE PORTRAIT & VERTICAL CAPTION ── */}
        <div className="w-full lg:w-[22%] xl:w-[20%] h-auto lg:h-[85%] flex flex-row lg:flex-row items-center gap-4 xl:gap-6 shrink-0">
          {/* Black & White Photo Crop */}
          <div className="relative w-28 sm:w-36 lg:w-36 xl:w-44 h-40 sm:h-48 lg:h-full min-h-0 overflow-hidden bg-[#EAE5DA] shrink-0 group">
            <Image
              src="/images/lookbook/session-07-grad-bw.jpg"
              alt="Black and white editorial portrait of a Ghanaian graduate wearing graduation cap and couture gown"
              fill
              sizes="(max-width: 1024px) 150px, 15vw"
              className="object-cover object-center grayscale contrast-110 group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Vertical Editorial Caption */}
          <div className="flex flex-col justify-center">
            <span
              className="inline-block w-8 sm:w-10 h-[1px] bg-[#C29D59] mb-3"
              aria-hidden="true"
            />
            <p className="text-[9.5px] sm:text-[10px] xl:text-[10.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#6B6358] leading-relaxed">
              CONFIDENCE
              <br />
              IN EVERY
              <br />
              CHAPTER
            </p>
          </div>
        </div>

        {/* ── CENTER HERO: MONUMENTAL GRADUATION GOWN PLATE ── */}
        <div className="w-full lg:w-[48%] xl:w-[50%] h-[320px] sm:h-[420px] lg:h-[90%] xl:h-[92%] relative overflow-hidden bg-[#0A261E] group shrink-0">
          <Image
            src="/images/lookbook/session-07-grad-hero.jpg"
            alt="Ghanaian graduate wearing bespoke Blak Meyd emerald green couture velvet ballgown with gold bullion embroidery and mortarboard cap"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-top lg:object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
            priority
          />
        </div>

        {/* ── RIGHT ACCENT: 07 COPY + WATERMARK + PILLAR LIST ── */}
        <div className="w-full lg:w-[30%] xl:w-[28%] h-auto lg:h-[85%] flex flex-col justify-between py-2 shrink-0 relative">
          
          {/* Subtle Background Watermark: BLAK MEYD */}
          <div
            className="absolute -right-4 top-1/2 -translate-y-1/2 text-[5rem] sm:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] font-fraunces font-normal uppercase tracking-widest text-[#15150F]/[0.05] pointer-events-none select-none writing-mode-vertical leading-none z-0"
            aria-hidden="true"
          >
            BLAK MEYD
          </div>

          {/* Copy Block */}
          <div className="relative z-10 max-w-sm">
            {/* Number with Gold Hairline */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="font-fraunces text-2xl sm:text-3xl lg:text-[2rem] text-[#15150F] leading-none">
                07
              </span>
              <span
                className="inline-block w-8 sm:w-10 h-[1px] bg-[#C29D59]"
                aria-hidden="true"
              />
            </div>

            {/* Headline */}
            <h3 className="font-fraunces text-2xl sm:text-3xl xl:text-4xl font-normal uppercase tracking-tight text-[#15150F] leading-tight mb-1.5">
              GRADUATION
              <br />
              OUTFITS
            </h3>

            {/* Italic Subtitle */}
            <p className="font-fraunces text-xs sm:text-sm italic font-normal text-[#9E7B3B] mb-3 leading-snug">
              A milestone, dressed well.
            </p>

            {/* Narrative Body */}
            <p className="text-xs sm:text-[12.5px] font-sans text-[#524D45] leading-relaxed mb-6">
              Bespoke pieces created to mark achievement with personality, confidence and a distinctive sense of style.
            </p>

            {/* Action Button */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-[#15150F] hover:text-[#9E7B3B] transition-colors cursor-pointer"
            >
              <span>VIEW STORY</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#15150F] group-hover:text-[#9E7B3B] group-hover:translate-x-1.5 transition-all duration-300" />
            </button>
          </div>

          {/* Far Right Category Pillar List */}
          <div className="relative z-10 pt-6 border-t border-[#15150F]/10">
            <span
              className="inline-block w-6 h-[1px] bg-[#C29D59] mb-2"
              aria-hidden="true"
            />
            <div className="space-y-1 text-[8.5px] sm:text-[9px] font-sans font-medium tracking-[0.22em] uppercase text-[#6B6358]">
              <div>PEOPLE</div>
              <div>OCCASIONS</div>
              <div>CRAFTSMANSHIP</div>
              <div>BESPOKE STORIES</div>
            </div>
          </div>

        </div>

      </div>

      {/* ── BESPOKE MODAL FOR 07 GRADUATION ── */}
      <AnimatePresence>
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FBF9F4] text-[#15150F] p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-start"
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Close story view"
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-[#15150F] hover:text-[#9E7B3B] hover:rotate-90 transition-all duration-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full md:w-1/2 aspect-[3/4] overflow-hidden bg-[#0A261E] shrink-0">
                <Image
                  src="/images/lookbook/session-07-grad-hero.jpg"
                  alt="Ghanaian graduate wearing bespoke Blak Meyd emerald green couture velvet ballgown"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between h-full pt-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-fraunces text-2xl text-[#15150F]">
                      07
                    </span>
                    <span
                      className="inline-block w-8 h-[1px] bg-[#C29D59]"
                      aria-hidden="true"
                    />
                    <span className="font-fraunces text-sm italic text-[#9E7B3B]">
                      A milestone, dressed well.
                    </span>
                  </div>

                  <h3 className="font-fraunces text-3xl sm:text-4xl font-normal uppercase tracking-tight text-[#15150F] mb-3">
                    GRADUATION OUTFITS
                  </h3>

                  <p className="text-xs sm:text-[13px] font-sans text-[#524D45] leading-relaxed mb-6">
                    Bespoke pieces created to mark achievement with personality, confidence and a distinctive sense of style. Handcrafted in our Accra atelier.
                  </p>

                  <div className="border-t border-[#15150F]/10 pt-5 space-y-3 mb-8">
                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        TEXTILE AND EMBELLISHMENT
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        Heavy Emerald Silk Velvet and Gold Metallic Bullion Wire
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        ATELIER CRAFT HOURS
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        210 Handcraft Hours
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        SILHOUETTE ARCHITECTURE
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        Boned Corsetry Bodice with Structured Cap Sleeves
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#15150F]/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#0E3B2E] text-[#FBF9F4] text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#07241A] transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C29D59]" />
                    <span>BOOK AN ATELIER CONSULTATION</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
