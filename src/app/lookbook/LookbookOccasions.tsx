"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles } from "lucide-react";

interface OccasionDetail {
  number: string;
  title: string;
  subtitle: string;
  narrative: string;
  image: string;
  alt: string;
  specs: {
    textile: string;
    hours: string;
    silhouette: string;
  };
}

const OCCASIONS: Record<string, OccasionDetail> = {
  "08": {
    number: "08",
    title: "PROM DRESS",
    subtitle: "One night. Your story.",
    narrative:
      "A distinctive silhouette designed around the woman wearing it, not simply the occasion.",
    image: "/images/lookbook/session-08-prom.jpg",
    alt: "Ghanaian muse wearing bespoke Blak Meyd champagne gold crystal strapless prom gown with high slit in ballroom",
    specs: {
      textile: "Champagne Micro Tulle with Hand Strung Glass Crystals",
      hours: "175 Handcraft Hours",
      silhouette: "Strapless Sweetheart Bodice with Cascading Side Train",
    },
  },
  "09": {
    number: "09",
    title: "OTHER OUTFITS",
    subtitle: "Something entirely your own.",
    narrative:
      "For occasions that do not fit a category, Blak Meyd creates pieces around the individual story you want to tell.",
    image: "/images/lookbook/session-09-embroidery.jpg",
    alt: "Macro photograph of hand crafted gold bullion floral embroidery and freshwater pearl embellishment",
    specs: {
      textile: "Pure Silk Duchess Satin, Gold Bullion Wire, Seed Pearls",
      hours: "195 Atelier Hours",
      silhouette: "Custom Tailored Bespoke Silhouette",
    },
  },
};

export default function LookbookOccasions() {
  const [activeOccasion, setActiveOccasion] = useState<OccasionDetail | null>(null);

  return (
    <section
      id="lookbook-occasions"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] w-full min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] flex flex-col justify-center py-4 sm:py-6 lg:py-6 xl:py-8 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 selection:bg-[#0E3B2E] selection:text-[#FBF9F4] overflow-hidden border-t border-[#15150F]/10"
      aria-label="Lookbook Spread Four: Prom Dress and Other Outfits"
    >
      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-6 xl:gap-10">
        
        {/* ── 01: LEFT COLUMN: 08 PROM DRESS TEXT BLOCK ── */}
        <div className="w-full lg:w-[22%] xl:w-[20%] flex flex-col justify-center shrink-0 max-w-sm">
          {/* Number with Gold Hairline */}
          <div className="flex items-center gap-2.5 mb-2">
            <span className="font-fraunces text-2xl sm:text-3xl lg:text-[2rem] text-[#15150F] leading-none">
              08
            </span>
            <span
              className="inline-block w-8 sm:w-10 h-[1px] bg-[#C29D59]"
              aria-hidden="true"
            />
          </div>

          {/* Headline */}
          <h3 className="font-fraunces text-2xl sm:text-3xl xl:text-4xl font-normal uppercase tracking-tight text-[#15150F] leading-tight mb-1.5">
            PROM DRESS
          </h3>

          {/* Italic Subtitle */}
          <p className="font-fraunces text-xs sm:text-sm italic font-normal text-[#9E7B3B] mb-3 leading-snug">
            One night. Your story.
          </p>

          {/* Narrative Body */}
          <p className="text-xs sm:text-[12.5px] font-sans text-[#524D45] leading-relaxed mb-6">
            A distinctive silhouette designed around the woman wearing it, not simply the occasion.
          </p>

          {/* Action Link */}
          <div>
            <button
              type="button"
              onClick={() => setActiveOccasion(OCCASIONS["08"])}
              className="group inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-[#15150F] hover:text-[#9E7B3B] transition-colors cursor-pointer"
            >
              <span>VIEW STORY</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#15150F] group-hover:text-[#9E7B3B] group-hover:translate-x-1.5 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* ── 02: CENTER-LEFT COLUMN: PROM DRESS FULL HEIGHT PHOTO ── */}
        <div className="w-full lg:w-[28%] xl:w-[27%] h-[340px] sm:h-[440px] lg:h-[90%] xl:h-[92%] relative overflow-hidden bg-[#F5F2EB] group shrink-0">
          <Image
            src="/images/lookbook/session-08-prom.jpg"
            alt="Ghanaian muse in bespoke champagne gold crystal strapless prom gown with high slit in ballroom"
            fill
            sizes="(max-width: 1024px) 100vw, 30vw"
            className="object-cover object-top lg:object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
          />
        </div>

        {/* ── 03: CENTER-RIGHT COLUMN: CRAFTSMANSHIP & EMBROIDERY DETAIL STACK ── */}
        <div className="w-full lg:w-[24%] xl:w-[25%] h-[300px] sm:h-[380px] lg:h-[88%] relative flex flex-col justify-between shrink-0">
          {/* Forest Green Backdrop Accent */}
          <div
            className="absolute top-0 right-0 w-24 h-24 bg-[#0A261E] -z-0 pointer-events-none hidden sm:block"
            aria-hidden="true"
          />

          {/* Main Gold Bullion Embroidery Macro Photo */}
          <div className="relative w-[90%] sm:w-[85%] h-[75%] overflow-hidden bg-[#F5F2EB] shadow-md group z-10">
            <Image
              src="/images/lookbook/session-09-embroidery.jpg"
              alt="Macro photograph of hand crafted gold bullion floral embroidery and freshwater pearl embellishment"
              fill
              sizes="(max-width: 1024px) 70vw, 22vw"
              className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Inset Black & White Photo: Artisan Hand-Stitching Beads */}
          <div className="absolute bottom-2 left-0 sm:-left-4 w-28 sm:w-32 h-24 sm:h-28 overflow-hidden bg-[#15150F] shadow-lg z-20 group">
            <Image
              src="/images/lookbook/session-09-hands.jpg"
              alt="Black and white photograph of Ghanaian couture artisan hands sewing delicate crystal beads"
              fill
              sizes="150px"
              className="object-cover object-center grayscale contrast-115 group-hover:scale-[1.05] transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        {/* ── 04: RIGHT COLUMN: 09 OTHER OUTFITS TEXT BLOCK ── */}
        <div className="w-full lg:w-[22%] xl:w-[20%] flex flex-col justify-center shrink-0 max-w-sm">
          {/* Number with Gold Hairline */}
          <div className="flex items-center gap-2.5 mb-2">
            <span className="font-fraunces text-2xl sm:text-3xl lg:text-[2rem] text-[#15150F] leading-none">
              09
            </span>
            <span
              className="inline-block w-8 sm:w-10 h-[1px] bg-[#C29D59]"
              aria-hidden="true"
            />
          </div>

          {/* Headline */}
          <h3 className="font-fraunces text-2xl sm:text-3xl xl:text-4xl font-normal uppercase tracking-tight text-[#15150F] leading-tight mb-1.5">
            OTHER
            <br />
            OUTFITS
          </h3>

          {/* Italic Subtitle */}
          <p className="font-fraunces text-xs sm:text-sm italic font-normal text-[#9E7B3B] mb-3 leading-snug">
            Something entirely your own.
          </p>

          {/* Narrative Body */}
          <p className="text-xs sm:text-[12.5px] font-sans text-[#524D45] leading-relaxed mb-6">
            For occasions that do not fit a category, Blak Meyd creates pieces around the individual story you want to tell.
          </p>

          {/* Action Link */}
          <div>
            <button
              type="button"
              onClick={() => setActiveOccasion(OCCASIONS["09"])}
              className="group inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-[#15150F] hover:text-[#9E7B3B] transition-colors cursor-pointer"
            >
              <span>VIEW STORY</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#15150F] group-hover:text-[#9E7B3B] group-hover:translate-x-1.5 transition-all duration-300" />
            </button>
          </div>
        </div>

      </div>

      {/* ── BESPOKE OCCASION MODAL ── */}
      <AnimatePresence>
        {activeOccasion && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-sm"
            onClick={() => setActiveOccasion(null)}
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
                onClick={() => setActiveOccasion(null)}
                aria-label="Close story view"
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-[#15150F] hover:text-[#9E7B3B] hover:rotate-90 transition-all duration-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full md:w-1/2 aspect-[3/4] overflow-hidden bg-[#F5F2EB] shrink-0">
                <Image
                  src={activeOccasion.image}
                  alt={activeOccasion.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between h-full pt-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-fraunces text-2xl text-[#15150F]">
                      {activeOccasion.number}
                    </span>
                    <span
                      className="inline-block w-8 h-[1px] bg-[#C29D59]"
                      aria-hidden="true"
                    />
                    <span className="font-fraunces text-sm italic text-[#9E7B3B]">
                      {activeOccasion.subtitle}
                    </span>
                  </div>

                  <h3 className="font-fraunces text-3xl sm:text-4xl font-normal uppercase tracking-tight text-[#15150F] mb-3">
                    {activeOccasion.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] font-sans text-[#524D45] leading-relaxed mb-6">
                    {activeOccasion.narrative}
                  </p>

                  <div className="border-t border-[#15150F]/10 pt-5 space-y-3 mb-8">
                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        TEXTILE AND EMBELLISHMENT
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeOccasion.specs.textile}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        ATELIER CRAFT HOURS
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeOccasion.specs.hours}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        SILHOUETTE ARCHITECTURE
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeOccasion.specs.silhouette}
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
