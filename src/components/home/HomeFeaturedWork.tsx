"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface GownStory {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  lines: [string, string, string];
  image: string;
  alt: string;
  description: string;
  details: string;
}

const GOWNS: GownStory[] = [
  {
    id: "bridal",
    number: "01",
    category: "BRIDAL",
    title: "Ivory Duchess Sweetheart",
    tagline: "Bridal Couture",
    lines: ["LOVE", "IN EVERY", "DETAIL"],
    image: "/images/experience/story-bridal-hd.jpg",
    alt: "Bespoke Ivory Sweetheart Bridal Reception Gown with Orchid Bouquet",
    description: "Hand-beaded gold metallic embroidery along an architectural corseted bodice, paired with a draped waist and cascading train.",
    details: "180 Artisanal Hours · Italian Duchess Silk",
  },
  {
    id: "traditional",
    number: "02",
    category: "TRADITIONAL",
    title: "The Sovereign Kente Column",
    tagline: "Heritage Couture",
    lines: ["HERITAGE", "IN EVERY", "STITCH"],
    image: "/images/experience/story-kente-hd.jpg",
    alt: "The Sovereign Kente Column Gown with Architectural Peplum in Gallery",
    description: "Bonwire hand-loomed raw silk with integrated anatomical corsetry and off-shoulder architectural peplum.",
    details: "140 Artisanal Hours · Bonwire Raw Silk & Gold Lurex",
  },
  {
    id: "evening",
    number: "03",
    category: "EVENING",
    title: "Emerald Architectural Drape",
    tagline: "Evening Gala",
    lines: ["CONFIDENCE", "LOOKS GOOD", "ON YOU"],
    image: "/images/experience/story-evening-hd.jpg",
    alt: "Emerald Architectural Drape Evening Gown with Sculptural Ruffle",
    description: "Sculpted corset bodice crafted with geometric Kente accents, paired with a dramatic emerald silk satin pouf shoulder.",
    details: "115 Artisanal Hours · Emerald Silk Crepe",
  },
];

export default function HomeFeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to center Traditional Kente
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const prevGown = () => setActiveIndex((prev) => (prev === 0 ? GOWNS.length - 1 : prev - 1));
  const nextGown = () => setActiveIndex((prev) => (prev === GOWNS.length - 1 ? 0 : prev + 1));

  return (
    <section
      id="featured-work"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] pt-14 sm:pt-18 lg:pt-22 pb-14 sm:pb-18 px-5 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-[#E4ECE7]"
    >
      {/* ── TOP EDITORIAL HEADER BAR ── */}
      <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E4ECE7]/70 mb-8 sm:mb-12 gap-4">
        {/* Left: Eyebrow with Animated Accent Line */}
        <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#B98A2E]">
          <span>Crafted Stories</span>
          <span className="h-[1px] w-20 sm:w-32 bg-[#B98A2E]/60 transition-all duration-500" />
        </div>

        {/* Right: Atelier Signature */}
        <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-10 text-[9.5px] sm:text-[10px] font-mono tracking-[0.24em] text-[#15150F]/70 uppercase">
          <div className="flex items-center gap-2.5">
            <span className="text-[#15150F] font-semibold tracking-[0.26em]">Blak Meyd</span>
            <span className="h-[1px] w-8 bg-[#B98A2E]/50" />
          </div>
          <div className="text-right leading-tight">
            <div>Bespoke Couture Atelier</div>
            <div className="text-[#15150F]/50">Accra, Ghana</div>
          </div>
        </div>
      </div>

      {/* ── MAIN STAGE: LEFT EDITORIAL NARRATIVE + RIGHT 3 LIVING GOWN PANELS ── */}
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 items-stretch relative min-h-[660px] lg:min-h-[720px]">
        {/* ════════ LEFT COLUMN: INTRO, CIRCULAR CTA & EMERALD FLOURISH (4 cols) ════════ */}
        <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-2 xl:pr-4 relative z-20">
          <div>
            {/* Monumental Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-fraunces text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-light tracking-tight text-[#15150F] leading-[1.04]">
                Moments <br />
                <span className="italic font-normal text-[#0E3B2E]">Beautifully Yours.</span>
              </h2>

              <p className="mt-4 sm:mt-5 text-xs sm:text-[13px] text-[#15150F]/75 font-light leading-relaxed max-w-sm">
                A glimpse into pieces created for moments that matter. Each design is a reflection
                of individuality, culture and timeless elegance — crafted with intention in Accra, for you.
              </p>
            </motion.div>

            {/* Interactive Circular "VIEW ALL →" Button + Vertical Motto */}
            <div className="mt-8 sm:mt-10 flex items-center gap-6 sm:gap-8">
              <Link
                href="/lookbook"
                className="group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#B98A2E] flex flex-col items-center justify-center text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-[#15150F] hover:bg-[#B98A2E] hover:text-[#FBF9F4] transition-all duration-300 shadow-sm hover:shadow-lg shrink-0 overflow-hidden"
                aria-label="View all bespoke couture gowns in Lookbook"
              >
                <motion.div
                  className="absolute inset-0 bg-[#B98A2E] -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="leading-tight">VIEW</span>
                <span className="leading-tight">ALL</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>

              <div className="border-l border-[#B98A2E]/70 pl-4 py-1 text-[9px] sm:text-[9.5px] font-mono tracking-[0.22em] text-[#15150F]/70 uppercase leading-snug">
                <div>Different</div>
                <div>Occasions.</div>
                <div>The Same You.</div>
              </div>
            </div>
          </div>

          {/* Bottom Left Emerald Silk Drapery Card with Gold Orbital Rings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 sm:mt-12 w-full max-w-[290px] h-[130px] sm:h-[150px] rounded-[2px] overflow-hidden bg-[#0A261D] shadow-md group cursor-pointer"
            onClick={() => setActiveIndex(2)}
          >
            {/* Rich Emerald Silk Radial Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#0E3B2E,#061711_85%)] transition-transform duration-700 group-hover:scale-105" />

            {/* Real SVG Gold Orbital Hairline Rings */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity"
              viewBox="0 0 200 120"
              fill="none"
              stroke="#C5A265"
              strokeWidth="0.9"
            >
              <circle cx="15" cy="110" r="60" />
              <circle cx="15" cy="110" r="85" strokeDasharray="3 3" />
              <circle cx="15" cy="110" r="110" strokeOpacity="0.4" />
            </svg>

            {/* Typography */}
            <div className="absolute bottom-3 left-4 z-10 text-[8px] sm:text-[8.5px] font-mono tracking-[0.24em] text-[#FBF9F4] uppercase leading-relaxed font-medium drop-shadow-sm">
              <div>Bespoke For</div>
              <div>Life&rsquo;s Most</div>
              <div>Meaningful Moments</div>
            </div>

            {/* Subtle corner sheen */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#C5A265]/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* ════════ RIGHT COLUMN: 3 FULL-LENGTH LIVING GOWN PANELS (8 cols) ════════ */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-4 lg:gap-4 xl:gap-5 items-stretch relative">
          {GOWNS.map((gown, index) => {
            const isSelected = activeIndex === index;
            const isHovered = hoveredIndex === index;
            const isCenter = index === 1;

            return (
              <motion.div
                key={gown.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
                className={`group relative rounded-[2px] overflow-hidden bg-[#15150F] cursor-pointer transition-all duration-500 flex flex-col justify-between ${
                  isCenter
                    ? "min-h-[520px] sm:min-h-[580px] lg:min-h-[660px] lg:-my-3 shadow-2xl ring-1 ring-[#B98A2E]/50 z-20"
                    : "min-h-[490px] sm:min-h-[550px] lg:min-h-[630px] shadow-lg hover:shadow-2xl z-10"
                } ${isSelected ? "ring-2 ring-[#B98A2E]" : "hover:ring-1 hover:ring-[#B98A2E]/40"}`}
              >
                {/* ── HIGH-DEFINITION FULL-LENGTH PHOTOGRAPHY ── */}
                <div className="absolute inset-0 overflow-hidden bg-[#120E0B]">
                  <Image
                    src={gown.image}
                    alt={gown.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 28vw"
                    className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                    priority={isCenter}
                  />

                  {/* Gradient Shadow for Pristine Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                  {/* Subtle Interactive Ambient Glow */}
                  <div
                    className={`absolute inset-0 bg-[#B98A2E]/10 transition-opacity duration-500 pointer-events-none ${
                      isHovered || isSelected ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* ── TOP RIGHT OVERLAY FOR PANEL 03 (EMERALD CREST) ── */}
                {index === 2 && (
                  <div className="absolute top-4 right-4 z-20 px-3.5 py-2.5 bg-[#0E3B2E]/95 backdrop-blur-xs border border-[#B98A2E]/50 rounded-[2px] text-right shadow-md transition-transform duration-300 group-hover:scale-105">
                    <div className="text-[8px] sm:text-[8.5px] font-mono tracking-[0.24em] text-[#FBF9F4] uppercase leading-tight font-medium">
                      <div>People</div>
                      <div>Culture</div>
                      <div>Artistry</div>
                      <div className="text-[#C5A265] font-semibold">You</div>
                    </div>
                    <div className="h-[1px] w-5 bg-[#C5A265] ml-auto mt-1.5" />
                  </div>
                )}

                {/* ── TOP ARCHIVAL BADGE (REVEALS ON HOVER/ACTIVE) ── */}
                <div className="relative z-20 p-4 flex items-center justify-between">
                  <span
                    className={`text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-[1px] transition-all duration-300 ${
                      isSelected
                        ? "bg-[#B98A2E] text-[#15150F] font-semibold"
                        : "bg-black/50 text-white/80 border border-white/20"
                    }`}
                  >
                    Archive {gown.number}
                  </span>
                  <span className="text-[9px] font-mono tracking-wider text-white/60 uppercase">
                    {gown.category}
                  </span>
                </div>

                {/* ── BOTTOM OVERLAY LABEL & TYPOGRAPHY ── */}
                <div className="relative z-20 p-5 sm:p-6 text-white space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-fraunces text-3xl sm:text-4xl text-white font-light leading-none">
                      {gown.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-[0.26em] text-[#C5A265] uppercase font-semibold">
                      {gown.category}
                    </span>
                  </div>

                  <div className="text-[8.5px] sm:text-[9px] font-mono tracking-[0.22em] text-white/85 uppercase leading-snug pt-1">
                    <div>{gown.lines[0]}</div>
                    <div>{gown.lines[1]}</div>
                    <div>{gown.lines[2]}</div>
                  </div>

                  {/* Micro-Interaction Link */}
                  <div className="pt-2 flex items-center justify-between text-[9.5px] font-mono uppercase tracking-widest text-[#C5A265] opacity-80 group-hover:opacity-100 transition-opacity">
                    <span>Explore Silhouette</span>
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* ── INTERACTIVE SLIDER CONTROLS (IN PANEL 03) ── */}
                {index === 2 && (
                  <div
                    className="absolute bottom-6 right-5 z-30 flex items-center gap-2.5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-[9px] font-mono tracking-widest text-white/70">
                      0{activeIndex + 1} / 03
                    </span>
                    <button
                      type="button"
                      onClick={prevGown}
                      className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:text-white hover:border-[#B98A2E] hover:bg-black/60 transition-colors"
                      aria-label="Previous gown story"
                    >
                      <ChevronLeft size={12} />
                    </button>
                    <button
                      type="button"
                      onClick={nextGown}
                      className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:text-white hover:border-[#B98A2E] hover:bg-black/60 transition-colors"
                      aria-label="Next gown story"
                    >
                      <ChevronRight size={12} />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── BOTTOM EDITORIAL NAVIGATION STRIP ── */}
      <div className="mx-auto max-w-[1600px] mt-12 sm:mt-16 pt-6 border-t border-[#E4ECE7] flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Category Anchor Tags with Active Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[9.5px] sm:text-[10.5px] font-mono tracking-[0.24em] text-[#15150F]/70 uppercase">
          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            className={`transition-colors py-1 ${
              activeIndex === 0 ? "text-[#0E3B2E] font-semibold underline underline-offset-4 decoration-[#B98A2E]" : "hover:text-[#0E3B2E]"
            }`}
          >
            Bridal
          </button>
          <span className="text-[#15150F]/30">|</span>
          <button
            type="button"
            onClick={() => setActiveIndex(1)}
            className={`transition-colors py-1 ${
              activeIndex === 1 ? "text-[#0E3B2E] font-semibold underline underline-offset-4 decoration-[#B98A2E]" : "hover:text-[#0E3B2E]"
            }`}
          >
            Traditional
          </button>
          <span className="text-[#15150F]/30">|</span>
          <button
            type="button"
            onClick={() => setActiveIndex(2)}
            className={`transition-colors py-1 ${
              activeIndex === 2 ? "text-[#0E3B2E] font-semibold underline underline-offset-4 decoration-[#B98A2E]" : "hover:text-[#0E3B2E]"
            }`}
          >
            Evening
          </button>
          <span className="text-[#15150F]/30">|</span>
          <Link href="/lookbook?category=special" className="hover:text-[#0E3B2E] transition-colors py-1">
            Special Occasions
          </Link>
        </div>

        {/* Explore Lookbook Direct Link */}
        <Link
          href="/lookbook"
          className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] font-medium text-[#15150F] hover:text-[#0E3B2E] transition-colors"
        >
          <span className="h-[1px] w-8 bg-[#B98A2E] transition-all duration-300 group-hover:w-12" />
          <span>Explore the Full Lookbook</span>
          <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
