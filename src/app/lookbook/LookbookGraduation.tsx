"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles } from "lucide-react";

export default function LookbookGraduation() {
  const [modalOpen, setModalOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="lookbook-graduation"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] w-full min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] flex flex-col justify-between py-3 sm:py-4 lg:py-5 xl:py-6 px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 selection:bg-[#0E3B2E] selection:text-[#FBF9F4] overflow-hidden border-t border-[#15150F]/10"
      aria-label="Lookbook Spread: Session 07 Graduation Outfits"
    >
      <div className="h-full w-full flex-1 min-h-0">
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-4 xl:gap-5 items-stretch">
          
          {/* ══════════════════════════════════════════════════════════════
              01: LEFT COLUMN: 07 GRADUATION OUTFITS EDITORIAL TEXT (~25%)
              ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-3 flex flex-col justify-between py-2 sm:py-3 lg:py-4 min-h-0 max-w-sm">
            <div>
              {/* Number with Gold Hairline */}
              <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
                <span className="font-fraunces text-2xl sm:text-3xl xl:text-4xl text-[#9E7B3B] leading-none">
                  07
                </span>
                <span
                  className="inline-block w-8 sm:w-10 h-[1px] bg-[#C29D59]"
                  aria-hidden="true"
                />
              </div>

              {/* Headline */}
              <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-[2.1rem] xl:text-[2.5rem] font-normal uppercase tracking-tight text-[#15150F] leading-[0.95] mb-2 sm:mb-2.5">
                GRADUATION
                <br />
                OUTFITS
              </h2>

              {/* Italic Serif Subtitle in Antique Gold */}
              <p className="font-fraunces text-xs sm:text-[13px] xl:text-sm italic font-normal text-[#9E7B3B] mb-2.5 sm:mb-3 leading-snug">
                A milestone, dressed well.
              </p>

              {/* Narrative Body Copy */}
              <p className="text-[11px] sm:text-xs xl:text-[12.5px] font-sans text-[#524D45] leading-relaxed mb-4 sm:mb-6">
                Bespoke pieces created to mark achievement with personality, confidence and a distinctive sense of style. Whether traditional inspiration or modern silhouettes, each piece is designed to make your graduation day as unforgettable as the journey that brought you here.
              </p>
            </div>

            {/* View Story Action Link */}
            <div className="pt-2 sm:pt-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] xl:text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#9E7B3B] hover:text-[#15150F] transition-colors cursor-pointer"
              >
                <span>VIEW STORY</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9E7B3B] group-hover:text-[#15150F] group-hover:translate-x-1.5 transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              02: CENTER HERO: FULL-HEIGHT KENTE GRADUATION CORSET GOWN (~33%)
              ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-4 h-[340px] sm:h-[420px] lg:h-full min-h-0 relative overflow-hidden bg-[#F5F2EB] group">
            <Image
              src="/images/lookbook/lookbook-07-grad-kente-hero-v1.jpg"
              alt="Radiant Ghanaian university graduate wearing bespoke Bonwire Kente corset dress under black academic gown outside university colonnades"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover object-[center_18%] group-hover:scale-[1.025] transition-transform duration-700 ease-out"
            />
          </div>

          {/* ══════════════════════════════════════════════════════════════
              03: RIGHT SECTION: TWO FAR-RIGHT SPLIT PHOTOS & SUB-BAR (~42%)
              ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 h-auto lg:h-full min-h-0 flex flex-col justify-between">
            
            {/* Top Portion: Two Side-by-Side High Fashion Graduation Photos (~75% Height) */}
            <div className="w-full h-[260px] sm:h-[320px] lg:h-[75%] xl:h-[76%] min-h-0 grid grid-cols-2 gap-3 sm:gap-3.5 lg:gap-3 xl:gap-4">
              
              {/* Photo A: Ivory Tailored Suit Graduate on Steps */}
              <div className="relative h-full w-full overflow-hidden bg-[#F5F2EB] group">
                <Image
                  src="/images/lookbook/lookbook-07-grad-ivory-suit-v1.jpg"
                  alt="Ghanaian graduate seated on campus stone steps wearing bespoke ivory tailored suit with bouquet"
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Photo B: Emerald Green Gown with Lace-Up Back & Golden Hood (Far Right) */}
              <div className="relative h-full w-full overflow-hidden bg-[#F5F2EB] group">
                <Image
                  src="/images/lookbook/lookbook-07-grad-emerald-back-v1.jpg"
                  alt="Ghanaian graduate turning with radiant smile wearing emerald green lace-up corset gown and gold hood"
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover object-[center_20%] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

            </div>

            {/* Bottom Portion: Editorial Accent Sub-Bar Directly Under Each Photo (~25% Height) */}
            <div className="w-full grid grid-cols-2 gap-3 sm:gap-3.5 lg:gap-3 xl:gap-4 pt-3 sm:pt-4 xl:pt-5 pb-1 items-start min-h-0">
              
              {/* Column 1 Accent: Under Ivory Suit Photo */}
              <div className="flex flex-col justify-start">
                <span
                  className="inline-block w-8 sm:w-10 h-[1px] bg-[#C29D59] mb-2 sm:mb-2.5"
                  aria-hidden="true"
                />
                <p className="text-[9.5px] sm:text-[10px] xl:text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-[#15150F] leading-snug">
                  DIFFERENT JOURNEYS.
                  <br />
                  THE SAME PRIDE.
                </p>
              </div>

              {/* Column 2 Accent: Under Emerald Gown Photo (Far Right) */}
              <div className="flex items-center pl-2 sm:pl-3 xl:pl-5">
                <span
                  className="w-[1px] h-8 sm:h-9 xl:h-10 bg-[#C29D59] mr-3 sm:mr-3.5 shrink-0"
                  aria-hidden="true"
                />
                <div className="space-y-0.5 xl:space-y-1 text-[8px] sm:text-[8.5px] xl:text-[9.5px] font-sans font-medium tracking-[0.22em] uppercase text-[#6B6358]">
                  <div>PEOPLE</div>
                  <div>OCCASIONS</div>
                  <div>CRAFTSMANSHIP</div>
                  <div>BESPOKE STORIES</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ── BESPOKE GRADUATION OUTFITS MODAL ── */}
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

              <div className="relative w-full md:w-1/2 aspect-[3/4] overflow-hidden bg-[#F5F2EB] shrink-0">
                <Image
                  src="/images/lookbook/lookbook-07-grad-kente-hero-v1.jpg"
                  alt="Ghanaian university graduate wearing bespoke Bonwire Kente corset dress"
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
                    Bespoke pieces created to mark achievement with personality, confidence and a distinctive sense of style. Whether traditional inspiration or modern silhouettes, each piece is designed to make your graduation day as unforgettable as the journey that brought you here.
                  </p>

                  <div className="border-t border-[#15150F]/10 pt-5 space-y-3 mb-8">
                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        TEXTILE AND EMBELLISHMENT
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        Authentic Bonwire Silk Kente and Tailored Ivory Silk Crepe
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        ATELIER CRAFT HOURS
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        175 Handcraft Hours
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        SILHOUETTE ARCHITECTURE
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        Off Shoulder Corsetry Bodice and Tailored Wide Leg Trouser Suit
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
