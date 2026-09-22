"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface CollectionCard {
  number: string;
  category: string;
  title: string;
  tagline: string;
  image: string;
  alt: string;
  href: string;
}

// 9 documented categories partitioned into 3 pages of 3
const COLLECTION_PAGES: CollectionCard[][] = [
  // Page 1: Exact matches to reference mockup
  [
    {
      number: "01",
      category: "KENTE GOWN",
      title: "Cultural Heritage",
      tagline: "TRADITION REIMAGINED",
      image: "/images/collection-kente-gown.jpg",
      alt: "Ghanaian model in bespoke Blak Meyd Kente off-shoulder evening gown in courtyard",
      href: "/collections#kente-gown",
    },
    {
      number: "02",
      category: "BRIDAL ROBE",
      title: "Bridal Couture",
      tagline: "MADE FOR FOREVER",
      image: "/images/collection-bridal-reception.jpg",
      alt: "Bespoke ivory sweetheart draped bridal gown with white roses by Blak Meyd",
      href: "/collections#bridal-robe",
    },
    {
      number: "03",
      category: "RECEPTION OUTFIT",
      title: "Modern Glamour",
      tagline: "CONFIDENCE IN EVERY DETAIL",
      image: "/images/collection-milestone-outfit.jpg",
      alt: "Woman in bespoke emerald green sculptural corseted evening dress on illuminated terrace",
      href: "/collections#reception-outfit",
    },
  ],
  // Page 2: Next 3 Documented Categories
  [
    {
      number: "04",
      category: "BRIDESMAID OUTFITS",
      title: "Harmonious Grace",
      tagline: "UNITED IN ELEGANCE",
      image: "/images/hero/ivory-couture.jpg",
      alt: "Bespoke bridal party gowns in harmonic tones by Blak Meyd",
      href: "/collections#bridesmaid-outfits",
    },
    {
      number: "05",
      category: "WEDDING GUEST",
      title: "Sovereign Presence",
      tagline: "DISTINGUISHED FORM",
      image: "/images/hero/emerald-gallery.jpg",
      alt: "Statuesque bespoke emerald gown for distinguished wedding guest",
      href: "/collections#wedding-guest",
    },
    {
      number: "06",
      category: "PHOTOSHOOT OUTFITS",
      title: "Iconic Radiance",
      tagline: "FRAMED IN ARTISTRY",
      image: "/images/atelier-intro-portrait.jpg",
      alt: "Editorial photoshoot bespoke Kente gown inside Accra atelier",
      href: "/collections#photoshoot-outfits",
    },
  ],
  // Page 3: Final 3 Documented Categories
  [
    {
      number: "07",
      category: "GRADUATION OUTFITS",
      title: "Academic Triumph",
      tagline: "SCHOLARLY DISTINCTION",
      image: "/images/collection-milestone-outfit.jpg",
      alt: "Bespoke milestone graduation gown by Blak Meyd",
      href: "/collections#graduation-outfits",
    },
    {
      number: "08",
      category: "PROM DRESS",
      title: "Youthful Splendor",
      tagline: "A NIGHT TO REMEMBER",
      image: "/images/hero-couture.jpg",
      alt: "Bespoke prom gown with architectural corset by Blak Meyd",
      href: "/collections#prom-dress",
    },
    {
      number: "09",
      category: "OTHER OUTFITS",
      title: "Bespoke Singular",
      tagline: "TAILORED TO IMAGINATION",
      image: "/images/hero/atelier-crafting.png",
      alt: "Special custom bespoke commission in the Accra studio",
      href: "/collections#other-outfits",
    },
  ],
];

export default function FeaturedCollections() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = COLLECTION_PAGES.length;

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentCards = COLLECTION_PAGES[currentPage];

  return (
    <section
      id="collections"
      className="relative z-10 bg-[#F7F4EE] text-[#15150F] pt-10 sm:pt-14 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-[#B98A2E]/20"
    >
      {/* ── BOTANICAL SHADOW ACCENT (BOTTOM-RIGHT LUXURY VIGNETTE) ── */}
      <div
        className="absolute -bottom-10 -right-10 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none opacity-20 select-none -z-0"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle at center, rgba(14,59,46,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* ── HEADER ROW PER REFERENCE MOCKUP ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10">
          {/* Left Title & Eyebrow */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] font-semibold tracking-[0.26em] uppercase text-[#B98A2E] mb-2">
              <span>Our Collections</span>
              <span className="h-[1px] w-16 sm:w-24 bg-[#B98A2E]/40" />
            </div>

            <h2 className="font-fraunces text-3xl sm:text-5xl lg:text-[3.5rem] font-light tracking-tight text-[#15150F] leading-[1.08]">
              Crafted for Every Chapter
            </h2>
          </div>

          {/* Right Description + Carousel Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
            <p className="text-xs sm:text-[13px] text-[#15150F]/70 font-light leading-relaxed max-w-xs sm:max-w-sm">
              From timeless tradition to modern elegance, explore our curated collections designed for life&rsquo;s most meaningful moments.
            </p>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="hidden sm:block h-[1px] w-8 bg-[#B98A2E]/30" />
              
              {/* Counter Display */}
              <div className="font-mono text-xs sm:text-sm tracking-wider text-[#15150F]/80">
                <span className="font-medium text-[#15150F]">
                  0{currentPage + 1}
                </span>
                <span className="mx-2 text-[#15150F]/40">/</span>
                <span className="text-[#15150F]/50">0{totalPages}</span>
              </div>

              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous collections slide"
                className="w-10 h-10 rounded-full border border-[#15150F]/20 bg-white/60 hover:bg-white hover:border-[#15150F]/50 flex items-center justify-center text-[#15150F] transition-all duration-200 cursor-pointer shadow-xs"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next collections slide"
                className="w-10 h-10 rounded-full bg-[#0A1A14] hover:bg-[#B98A2E] flex items-center justify-center text-white transition-all duration-200 cursor-pointer shadow-md"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ── 3 EDITORIAL CARDS (ANIMATED ON SLIDE) ── */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
            >
              {currentCards.map((card) => (
                <Link
                  key={card.number}
                  href={card.href}
                  className="group relative aspect-[3/4.6] sm:aspect-[3/4.7] w-full overflow-hidden rounded-[2px] bg-[#120E0B] shadow-lg flex flex-col justify-between p-6 sm:p-7 text-white"
                >
                  {/* Background Photography */}
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                    priority={currentPage === 0}
                  />

                  {/* Gradient Scrim for Flawless Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 pointer-events-none transition-opacity duration-500 group-hover:opacity-95" />

                  {/* Top Item Indicator: 01 ———— */}
                  <div className="relative z-10 flex items-center gap-2 text-white/80 font-mono text-xs tracking-widest">
                    <span>{card.number}</span>
                    <span className="h-[1px] w-8 bg-white/60" />
                  </div>

                  {/* Bottom Content Plate */}
                  <div className="relative z-10 space-y-1">
                    {/* Category Label */}
                    <span className="text-[10px] sm:text-[10.5px] font-mono tracking-[0.24em] text-white/80 uppercase block">
                      {card.category}
                    </span>

                    {/* Editorial Title */}
                    <h3 className="font-fraunces text-2xl sm:text-3xl lg:text-[2.1rem] font-light text-white tracking-tight leading-tight group-hover:text-[#C5A265] transition-colors">
                      {card.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-[9.5px] sm:text-[10px] font-mono tracking-[0.22em] text-white/70 uppercase pt-1 pb-4">
                      {card.tagline}
                    </p>

                    {/* View Collection Link with Circled Arrow */}
                    <div className="pt-2 border-t border-white/20 flex items-center justify-between group/cta text-white/90 group-hover:text-white">
                      <span className="text-xs sm:text-[13px] font-light tracking-wide font-serif italic">
                        View Collection
                      </span>
                      <span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300 group-hover/cta:border-[#B98A2E] group-hover/cta:bg-[#B98A2E] group-hover/cta:text-[#15150F]">
                        <ArrowRight size={13} className="transition-transform group-hover/cta:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── FOOTER SIGNATURE LINE PER REFERENCE MOCKUP ── */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-[#15150F]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#15150F]/65">
          {/* Left Signature */}
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-wider text-[#15150F]">BLAK MEYD</span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#B98A2E]/40" />
            <span className="tracking-widest uppercase text-[10px] text-[#15150F]/60">
              Bespoke Couture &middot; Accra, Ghana
            </span>
          </div>

          {/* Right Tagline */}
          <div className="flex items-center gap-3 text-right">
            <span className="hidden sm:inline-block h-[1px] w-8 sm:w-12 bg-[#B98A2E]/40" />
            <span className="font-fraunces italic text-xs sm:text-sm text-[#15150F]/80">
              More Than Fashion, A Story in You
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
