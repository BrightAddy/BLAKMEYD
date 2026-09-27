"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles } from "lucide-react";

type Category =
  | "ALL"
  | "KENTE GOWN"
  | "BRIDAL ROBE"
  | "RECEPTION OUTFIT"
  | "BRIDESMAIDS"
  | "WEDDING GUEST"
  | "PHOTOSHOOT"
  | "GRADUATION"
  | "PROM"
  | "OTHER";

const CATEGORIES: Category[] = [
  "ALL",
  "KENTE GOWN",
  "BRIDAL ROBE",
  "RECEPTION OUTFIT",
  "BRIDESMAIDS",
  "WEDDING GUEST",
  "PHOTOSHOOT",
  "GRADUATION",
  "PROM",
  "OTHER",
];

interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  category: Category;
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

const PROJECTS: Record<string, ProjectDetail> = {
  "01": {
    id: "kente-gown",
    number: "01",
    title: "KENTE GOWN",
    category: "KENTE GOWN",
    subtitle: "A CELEBRATION OF HERITAGE.",
    narrative:
      "Our Kente gowns blend traditional heritage with modern couture, creating bold, elegant pieces for life's most meaningful moments.",
    image: "/images/lookbook/lookbook-kente-editorial.jpg",
    alt: "Statuesque Ghanaian muse wearing a bespoke Blak Meyd off shoulder Bonwire Kente couture gown on outdoor limestone terrace",
    specs: {
      textile: "Authentic Bonwire Silk Kente and Metallic Lurex",
      hours: "160 Handcraft Hours",
      silhouette: "Sculptural Off Shoulder Peplum Column",
    },
  },
  "02": {
    id: "bridal-robe",
    number: "02",
    title: "BRIDAL ROBE",
    category: "BRIDAL ROBE",
    subtitle: "MODERN GRACE FOR A TIMELESS MOMENT.",
    narrative:
      "Our bridal robes are designed to make you feel extraordinary, with exquisite detailing and flawless craftsmanship for your special day.",
    image: "/images/lookbook/lookbook-bride-editorial.jpg",
    alt: "Ghanaian bride in an ethereal Blak Meyd bespoke ivory couture bridal gown with cathedral veil",
    specs: {
      textile: "Pure Silk Organza, Freshwater Pearls, French Tulle",
      hours: "220 Atelier Hours",
      silhouette: "Architectural Corset with Dramatic Cathedral Train",
    },
  },
  "03": {
    id: "reception-outfit",
    number: "03",
    title: "RECEPTION OUTFIT",
    category: "RECEPTION OUTFIT",
    subtitle: "EFFORTLESS ELEGANCE FOR YOUR NEXT CHAPTER.",
    narrative:
      "From intimate gatherings to grand celebrations, our reception outfits are tailored to make a statement with sophistication and style.",
    image: "/images/lookbook/lookbook-reception-editorial.jpg",
    alt: "Ghanaian muse in deep emerald green gown with sculptural pleated ruffle sleeve between classical stone columns",
    specs: {
      textile: "Heavyweight Emerald Silk Faille and Silk Crepe",
      hours: "185 Handcraft Hours",
      silhouette: "Sculptural Pleated Ruffle Sleeve Column",
    },
  },
};

export default function LookbookGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Determine highlight state based on active category
  const isHighlighted = (itemNumber: "01" | "02" | "03") => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "KENTE GOWN" && itemNumber === "01") return true;
    if (activeCategory === "BRIDAL ROBE" && itemNumber === "02") return true;
    if (activeCategory === "RECEPTION OUTFIT" && itemNumber === "03") return true;
    return false;
  };

  return (
    <section
      id="lookbook-gallery"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] w-full min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] flex flex-col justify-between py-3 sm:py-4 lg:py-5 px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 selection:bg-[#0E3B2E] selection:text-[#FBF9F4] overflow-hidden"
      aria-label="Lookbook Editorial Gallery Spread"
    >
      {/* ── TOP EDITORIAL CATEGORY NAVIGATION BAR ── */}
      <div className="w-full shrink-0 pb-2.5 sm:pb-3 mb-2 sm:mb-3 lg:mb-4 border-b border-[#15150F]/10">
        <nav
          aria-label="Lookbook editorial categories"
          className="flex items-center justify-start lg:justify-between gap-x-2 sm:gap-x-3 lg:gap-x-4 overflow-x-auto no-scrollbar py-1 text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-[#6B6358]"
        >
          {CATEGORIES.map((cat, idx) => {
            const isActive = activeCategory === cat;
            return (
              <div key={cat} className="flex items-center shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative py-1 transition-colors focus:outline-none cursor-pointer ${
                    isActive ? "text-[#15150F] font-semibold" : "hover:text-[#15150F]"
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <motion.span
                      layoutId="editorialActiveCategory"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E7B3B]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
                {idx < CATEGORIES.length - 1 && (
                  <span
                    className="ml-2 sm:ml-3 lg:ml-4 text-[#D4CEBF] select-none text-[10.5px] font-light"
                    aria-hidden="true"
                  >
                    |
                  </span>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* ── MAIN EDITORIAL MAGAZINE SPREAD (FULL CAPACITY OF SCREEN) ── */}
      <div className="flex-1 min-h-0 w-full">
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-4 xl:gap-6 items-stretch">
          
          {/* ══════════════════════════════════════════════════════════════
              LEFT SIDE: 01 KENTE GOWN (DOMINANT FEATURE, ~50% SPREAD)
              ══════════════════════════════════════════════════════════════ */}
          <div
            className={`lg:col-span-6 h-full min-h-0 relative flex flex-col overflow-hidden bg-[#F5F2EB] transition-all duration-700 ${
              isHighlighted("01") ? "opacity-100" : "opacity-35 grayscale"
            }`}
          >
            <div className="h-full w-full flex flex-col sm:flex-row items-stretch">
              
              {/* Left Sub-Area: Crisp Editorial Typography */}
              <div className="w-full sm:w-[46%] lg:w-[44%] xl:w-[42%] shrink-0 flex flex-col justify-between p-4 sm:p-5 lg:p-5 xl:p-7 z-10 bg-[#F5F2EB]/90 sm:bg-transparent">
                <div>
                  {/* 01 with Gold Hairline */}
                  <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
                    <span className="font-fraunces text-2xl sm:text-2xl lg:text-[1.75rem] xl:text-3xl font-normal text-[#15150F] leading-none">
                      01
                    </span>
                    <span
                      className="inline-block w-8 sm:w-10 h-[1px] bg-[#C29D59]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Monumental Headline: KENTE GOWN */}
                  <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.75rem] font-normal uppercase tracking-tight text-[#15150F] leading-[0.95] mb-2.5 sm:mb-3">
                    KENTE
                    <br />
                    GOWN
                  </h2>

                  {/* Small Editorial Subtitle */}
                  <p className="text-[9.5px] sm:text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#9E7B3B] mb-2 sm:mb-3">
                    A CELEBRATION OF HERITAGE.
                  </p>

                  {/* Narrative Body Copy */}
                  <p className="text-xs xl:text-[12.5px] font-sans text-[#524D45] leading-relaxed">
                    Our Kente gowns blend traditional heritage with modern couture, creating bold, elegant pieces for life's most meaningful moments.
                  </p>
                </div>

                {/* Interactive Action Link */}
                <div className="pt-4 sm:pt-6">
                  <button
                    type="button"
                    onClick={() => setActiveProject(PROJECTS["01"])}
                    className="group inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] xl:text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#15150F] hover:text-[#9E7B3B] transition-colors cursor-pointer"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#15150F] group-hover:text-[#9E7B3B] group-hover:translate-x-1.5 transition-all duration-300" />
                  </button>
                </div>
              </div>

              {/* Right Sub-Area: Ultra-Realistic Full Height Kente Photograph */}
              <div className="flex-1 h-full min-h-[280px] sm:min-h-0 relative overflow-hidden bg-[#EAE5DA] group">
                <Image
                  src="/images/lookbook/lookbook-kente-editorial.jpg"
                  alt="Ghanaian muse wearing an authentic bespoke Blak Meyd Bonwire Kente haute couture gown with natural skin texture"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-top sm:object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT SIDE: 02 BRIDAL ROBE & 03 RECEPTION OUTFIT (~50% SPREAD)
              ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 h-full min-h-0 flex flex-col justify-between gap-3 sm:gap-3.5 lg:gap-3 xl:gap-4">
            
            {/* ── ROW 1: 02 BRIDAL ROBE & EMBROIDERY DETAIL ── */}
            <div
              className={`h-full lg:h-[calc(50%-6px)] min-h-0 flex flex-col sm:flex-row items-stretch justify-between gap-2.5 sm:gap-3 xl:gap-4 bg-[#F5F2EB]/30 transition-all duration-700 ${
                isHighlighted("02") ? "opacity-100" : "opacity-35 grayscale"
              }`}
            >
              {/* Photo A: Bride in Cathedral Veil & Bouquet */}
              <div className="relative w-full sm:w-[32%] h-[220px] sm:h-full min-h-0 shrink-0 overflow-hidden bg-[#F5F2EB] group">
                <Image
                  src="/images/lookbook/lookbook-bride-editorial.jpg"
                  alt="Ghanaian bride wearing an ethereal Blak Meyd bespoke ivory couture bridal gown"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 18vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Block: 02 BRIDAL ROBE */}
              <div className="flex-1 h-full min-h-0 flex flex-col justify-between py-1.5 sm:py-2 px-1 sm:px-2">
                <div>
                  {/* 02 with Gold Hairline */}
                  <div className="flex items-center gap-2 mb-1 sm:mb-1.5">
                    <span className="font-fraunces text-xl sm:text-2xl text-[#15150F] leading-none">
                      02
                    </span>
                    <span
                      className="inline-block w-7 sm:w-8 h-[1px] bg-[#C29D59]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Headline: BRIDAL ROBE */}
                  <h3 className="font-fraunces text-xl sm:text-2xl xl:text-[26px] font-normal uppercase tracking-tight text-[#15150F] leading-tight mb-1 sm:mb-1.5">
                    BRIDAL ROBE
                  </h3>

                  {/* Small Editorial Subtitle */}
                  <p className="text-[9px] sm:text-[9.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#9E7B3B] mb-1.5 sm:mb-2 leading-tight">
                    MODERN GRACE FOR A TIMELESS MOMENT.
                  </p>

                  {/* Narrative Body Copy */}
                  <p className="text-[11px] sm:text-[11.5px] xl:text-xs font-sans text-[#524D45] leading-relaxed line-clamp-3">
                    Our bridal robes are designed to make you feel extraordinary, with exquisite detailing and flawless craftsmanship for your special day.
                  </p>
                </div>

                {/* Interactive Action Link */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveProject(PROJECTS["02"])}
                    className="group inline-flex items-center gap-1.5 text-[10px] sm:text-[10.5px] xl:text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-[#15150F] hover:text-[#9E7B3B] transition-colors cursor-pointer"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#15150F] group-hover:text-[#9E7B3B] group-hover:translate-x-1.5 transition-all duration-300" />
                  </button>
                </div>
              </div>

              {/* Photo B: Macro Detail of 3D Floral & Pearl Embroidery */}
              <div className="w-full sm:w-[32%] h-[220px] sm:h-full min-h-0 shrink-0 flex flex-col justify-between">
                <div className="flex-1 w-full relative overflow-hidden bg-[#F5F2EB] group">
                  <Image
                    src="/images/lookbook/lookbook-bead-detail.jpg"
                    alt="Macro photograph of hand-beaded lace with pearls and gold embroidery"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 18vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Detail Caption at Bottom (Strictly Zero Hyphens) */}
                <div className="mt-1.5 shrink-0 flex items-center justify-between text-[7.5px] sm:text-[8px] xl:text-[8.5px] font-sans font-medium tracking-[0.16em] uppercase text-[#6B6358]">
                  <span>DETAIL</span>
                  <span
                    className="inline-block w-4 h-[1px] bg-[#C29D59]/60 mx-1 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="truncate">HAND FINISHED EMBROIDERY</span>
                </div>
              </div>
            </div>

            {/* ── ROW 2: 03 RECEPTION OUTFIT & VELVET DETAIL ── */}
            <div
              className={`h-full lg:h-[calc(50%-6px)] min-h-0 flex flex-col sm:flex-row items-stretch justify-between gap-2.5 sm:gap-3 xl:gap-4 bg-[#F5F2EB]/30 transition-all duration-700 ${
                isHighlighted("03") ? "opacity-100" : "opacity-35 grayscale"
              }`}
            >
              {/* Photo A: Muse in Emerald Pleated Sleeve Gown */}
              <div className="relative w-full sm:w-[48%] h-[220px] sm:h-full min-h-0 shrink-0 overflow-hidden bg-[#F5F2EB] group">
                <Image
                  src="/images/lookbook/lookbook-reception-editorial.jpg"
                  alt="Ghanaian muse in emerald green couture gown with sculpted fan pleated sleeves"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Block: 03 RECEPTION OUTFIT */}
              <div className="flex-1 h-full min-h-0 flex flex-col justify-between py-1.5 sm:py-2 px-1 sm:px-2">
                <div>
                  {/* 03 with Gold Hairline */}
                  <div className="flex items-center gap-2 mb-1 sm:mb-1.5">
                    <span className="font-fraunces text-xl sm:text-2xl text-[#15150F] leading-none">
                      03
                    </span>
                    <span
                      className="inline-block w-7 sm:w-8 h-[1px] bg-[#C29D59]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Headline: RECEPTION OUTFIT */}
                  <h3 className="font-fraunces text-xl sm:text-2xl xl:text-[26px] font-normal uppercase tracking-tight text-[#15150F] leading-tight mb-1 sm:mb-1.5">
                    RECEPTION OUTFIT
                  </h3>

                  {/* Small Editorial Subtitle */}
                  <p className="text-[9px] sm:text-[9.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#9E7B3B] mb-1.5 sm:mb-2 leading-tight">
                    EFFORTLESS ELEGANCE FOR YOUR NEXT CHAPTER.
                  </p>

                  {/* Narrative Body Copy */}
                  <p className="text-[11px] sm:text-[11.5px] xl:text-xs font-sans text-[#524D45] leading-relaxed line-clamp-3">
                    From intimate gatherings to grand celebrations, our reception outfits are tailored to make a statement with sophistication and style.
                  </p>
                </div>

                {/* Interactive Action Link */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveProject(PROJECTS["03"])}
                    className="group inline-flex items-center gap-1.5 text-[10px] sm:text-[10.5px] xl:text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-[#15150F] hover:text-[#9E7B3B] transition-colors cursor-pointer"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#15150F] group-hover:text-[#9E7B3B] group-hover:translate-x-1.5 transition-all duration-300" />
                  </button>
                </div>
              </div>

              {/* Photo B: Emerald Crushed Velvet Accent Fabric Sliver */}
              <div className="w-full sm:w-[8%] xl:w-[9%] h-[120px] sm:h-full min-h-0 shrink-0 relative overflow-hidden bg-[#07241A] group">
                <Image
                  src="/images/lookbook/lookbook-velvet-editorial.jpg"
                  alt="Deep emerald crushed velvet couture fabric texture"
                  fill
                  sizes="8vw"
                  className="object-cover object-center group-hover:scale-[1.08] transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          BESPOKE PROJECT DETAIL MODAL (QUICK-VIEW EDITORIAL)
          ══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FBF9F4] text-[#15150F] p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project view"
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-[#15150F] hover:text-[#9E7B3B] hover:rotate-90 transition-all duration-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Garment Image */}
              <div className="relative w-full md:w-1/2 aspect-[3/4] overflow-hidden bg-[#F5F2EB] shrink-0">
                <Image
                  src={activeProject.image}
                  alt={activeProject.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Garment Details & Atelier Specs */}
              <div className="flex-1 flex flex-col justify-between h-full pt-2">
                <div>
                  {/* Number & Category */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-fraunces text-2xl text-[#15150F]">
                      {activeProject.number}
                    </span>
                    <span
                      className="inline-block w-8 h-[1px] bg-[#C29D59]"
                      aria-hidden="true"
                    />
                    <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#9E7B3B]">
                      {activeProject.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-fraunces text-3xl sm:text-4xl font-normal uppercase tracking-tight text-[#15150F] mb-3">
                    {activeProject.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#9E7B3B] mb-4">
                    {activeProject.subtitle}
                  </p>

                  {/* Narrative */}
                  <p className="text-xs sm:text-[13px] font-sans text-[#524D45] leading-relaxed mb-6">
                    {activeProject.narrative}
                  </p>

                  {/* Atelier Specifications (Zero Hyphens) */}
                  <div className="border-t border-[#15150F]/10 pt-5 space-y-3 mb-8">
                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        TEXTILE AND EMBELLISHMENT
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeProject.specs.textile}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        ATELIER CRAFT HOURS
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeProject.specs.hours}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        SILHOUETTE ARCHITECTURE
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeProject.specs.silhouette}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Consultation Inquiry Link */}
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
