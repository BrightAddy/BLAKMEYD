"use client";

import Image from "next/image";
import { motion } from "motion/react";

export interface CollectionCategoryItem {
  number: string;
  title: string;
  descriptor: string;
  tags: string;
  sidebarText: string[];
  description: string;
  image: string;
  alt: string;
}

export const COLLECTION_CATEGORIES_DATA: CollectionCategoryItem[] = [
  {
    number: "01",
    title: "Kente Gown",
    descriptor: "A CELEBRATION OF HERITAGE",
    tags: "CULTURE • ELEGANCE • YOU",
    sidebarText: ["OUR", "HERITAGE", "IN EVERY", "STITCH"],
    description:
      "Our Kente Gown collection reimagines traditional Ghanaian textiles with modern silhouettes. Each piece is crafted to honour our culture while giving you a sophisticated, elegant look for life's most important moments.",
    image: "/images/collections/category-01-kente-gown.jpg",
    alt: "Blak Meyd Bespoke Kente Gown modeled in sunlit architectural atelier courtyard",
  },
  {
    number: "02",
    title: "Reception Outfit",
    descriptor: "EXQUISITE DESIGNS FOR YOUR CELEBRATION",
    tags: "CELEBRATION • CHARM • RADIANCE",
    sidebarText: ["CELEBRATING", "IN UNRIVALED", "LUXURY", "—"],
    description:
      "Tailored for the transition into evening celebrations. Combining midnight silks, structured corsetry, and hand-beaded metallic embroidery designed to radiate beneath celebratory lights.",
    image: "/images/collections/category-02-reception-outfit.jpg",
    alt: "Blak Meyd Bespoke Reception Outfit modeled in sunlit limestone architectural courtyard",
  },
  {
    number: "03",
    title: "Bridal Robe",
    descriptor: "EXQUISITE DESIGNS FOR YOUR FOREVER",
    tags: "LOVE • GRACE • FOREVER",
    sidebarText: ["FOR A", "LOVE STORY", "THAT LASTS", "—"],
    description:
      "Our Bridal Robe collection is designed for the modern bride who appreciates timeless elegance. From intricate lace to bespoke detailing, each gown is crafted with precision, romance and an unmatched attention to detail.",
    image: "/images/collections/category-03-bridal-robe.jpg",
    alt: "Blak Meyd Bespoke Bridal Robe with heirloom Chantilly lace and cathedral veil",
  },
  {
    number: "04",
    title: "Bridesmaid Outfits",
    descriptor: "HARMONIOUS BESPOKE ENSEMBLES",
    tags: "UNITY • HARMONY • REFINEMENT",
    sidebarText: ["BEAUTY IN", "SHARED", "MOMENTS", "—"],
    description:
      "Harmonious bridal party creations sculpted to honor each bridesmaid's unique silhouette while preserving a unified, sophisticated aesthetic for your wedding journey.",
    image: "/images/collection-bridal-reception.jpg",
    alt: "Blak Meyd Bespoke Bridesmaid Outfits in harmonious atelier tones",
  },
  {
    number: "05",
    title: "Wedding Guest",
    descriptor: "DISTINCTIVE OCCASION ATTIRE",
    tags: "DISTINCTION • PRESENCE • COUTURE",
    sidebarText: ["HONORING", "THE SPECIAL", "OCCASION", "—"],
    description:
      "Sophisticated silhouettes for distinguished wedding attendees. Balancing quiet luxury, artisanal accents, and respectful elegance tailored to the ceremony's tone.",
    image: "/images/collection-milestone-outfit.jpg",
    alt: "Blak Meyd Bespoke Wedding Guest Attire crafted with couture precision",
  },
  {
    number: "06",
    title: "Photoshoot Outfits",
    descriptor: "AVANT-GARDE EDITORIAL COUTURE",
    tags: "IMPACT • MEMORY • DRAMA",
    sidebarText: ["FRAMED", "FOR", "ETERNITY", "—"],
    description:
      "Statement couture pieces designed specifically for editorial portraiture, maternity milestones, and legacy photography. Sculpted with bold volume and dynamic lines.",
    image: "/images/hero-couture.jpg",
    alt: "Blak Meyd Avant-Garde Photoshoot Couture Garment in atelier gallery",
  },
  {
    number: "07",
    title: "Graduation Outfits",
    descriptor: "REGAL ACADEMIC COMMENCEMENT",
    tags: "ACHIEVEMENT • PRIDE • HERITAGE",
    sidebarText: ["COMMENCING", "WITH", "DISTINCTION", "—"],
    description:
      "Regal commencement attire fusing bespoke tailoring with subtle African heritage motifs, commemorating monumental academic achievement and professional ascension.",
    image: "/images/craftsmanship.jpg",
    alt: "Blak Meyd Bespoke Graduation Outfit celebrating academic excellence",
  },
  {
    number: "08",
    title: "Prom Dress",
    descriptor: "YOUTHFUL ELEGANCE & GRACE",
    tags: "YOUTH • POISE • RADIANCE",
    sidebarText: ["AN UNFORGETTABLE", "ENTRANCE", "TO REMEMBER", "—"],
    description:
      "Bespoke evening gowns embodying youthful sophistication and individual grace. Tailored to ensure comfort, confidence, and breathtaking presence on milestone evenings.",
    image: "/images/hero/ivory-couture.jpg",
    alt: "Blak Meyd Bespoke Prom Evening Gown on ivory pedestal",
  },
  {
    number: "09",
    title: "Other Outfits",
    descriptor: "PRIVATE BESPOKE COMMISSIONS",
    tags: "EXCLUSIVE • CUSTOM • ATELIER",
    sidebarText: ["YOUR VISION", "BROUGHT", "TO LIFE", "—"],
    description:
      "Custom bespoke creations for private galas, state banquets, and unique celebratory occasions. Every silhouette is drafted from a blank canvas to your exact anatomical dimensions.",
    image: "/images/hero/emerald-gallery.jpg",
    alt: "Blak Meyd Private Haute Couture Commission displayed in architectural space",
  },
];

export default function CollectionCategories() {
  return (
    <section
      id="collection-categories"
      className="relative z-10 w-full bg-[#FBF9F4] text-[#15150F] py-12 sm:py-16 lg:py-20 overflow-hidden select-none"
      aria-label="Blak Meyd Collection Categories"
    >
      {/* ── SECTION INTRODUCTION ── */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center mb-10 sm:mb-14 lg:mb-18">
        {/* Eyebrow flanked by delicate hairlines */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <span className="h-[1px] w-8 sm:w-14 bg-[#B98A2E]/60" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-[#B98A2E] font-medium">
            OUR COLLECTIONS
          </span>
          <span className="h-[1px] w-8 sm:w-14 bg-[#B98A2E]/60" />
        </div>

        {/* Main Heading: Timeless Designs. Meaningful Moments. */}
        <h2 className="font-fraunces text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#15150F] tracking-tight leading-[1.12]">
          Timeless Designs.{" "}
          <span className="italic font-light text-[#0E3B2E]">
            Meaningful Moments.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="mt-4 sm:mt-5 text-xs sm:text-sm lg:text-[15px] text-[#15150F]/70 font-light max-w-xl mx-auto leading-relaxed">
          Each collection is a reflection of culture, craftsmanship and your unique
          story.
        </p>
      </div>

      {/* ── NINE ALTERNATING LARGE EDITORIAL COLLECTION BLOCKS ── */}
      <div className="w-full max-w-[1520px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 space-y-12 sm:space-y-16 lg:space-y-20">
        {COLLECTION_CATEGORIES_DATA.map((item, index) => {
          // Odd indices (0, 2, 4, 6, 8): Image Left | Text Right
          // Even indices (1, 3, 5, 7): Text Left | Image Right
          const isImageLeft = index % 2 === 0;

          return (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center ${
                isImageLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* ── IMAGE WRAPPER (7 COLS ON DESKTOP) ── */}
              <div
                className={`relative w-full overflow-hidden bg-[#15150F]/5 shadow-[0_12px_40px_rgba(21,21,15,0.06)] ${
                  isImageLeft
                    ? "lg:col-span-7 xl:col-span-7"
                    : "lg:col-span-7 xl:col-span-7 lg:order-2"
                }`}
              >
                {/* 16:9 Aspect Ratio Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.03]"
                  />

                  {/* Editorial Vertical Dark Sidebar Tab (as seen in reference design) */}
                  <div
                    className={`absolute top-0 bottom-0 z-10 w-12 sm:w-16 md:w-20 bg-[#15150F]/90 backdrop-blur-xs flex flex-col justify-center items-center py-6 px-1.5 text-center text-[#FBF9F4] select-none ${
                      isImageLeft ? "left-0" : "right-0"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      {item.sidebarText.map((line, lineIdx) => (
                        <span
                          key={lineIdx}
                          className="text-[7.5px] sm:text-[8.5px] tracking-[0.24em] font-light uppercase writing-vertical"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── EDITORIAL TEXT BLOCK (5 COLS ON DESKTOP) ── */}
              <div
                className={`relative flex flex-col justify-center px-2 sm:px-6 lg:px-4 py-4 sm:py-8 ${
                  isImageLeft
                    ? "lg:col-span-5 xl:col-span-5"
                    : "lg:col-span-5 xl:col-span-5 lg:order-1"
                }`}
              >
                {/* Oversized Subtle Background Watermark Numeral */}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-[-15%] font-fraunces italic font-extralight text-[130px] sm:text-[180px] lg:text-[220px] leading-none text-[#15150F]/[0.04] pointer-events-none select-none z-0 ${
                    isImageLeft ? "right-0 sm:right-4" : "left-0 sm:left-4"
                  }`}
                >
                  {item.number}
                </span>

                {/* Content relative above watermark */}
                <div className="relative z-10 space-y-4 sm:space-y-6">
                  {/* Top Bar: Number + Hairline + Pillar Tags */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#15150F]/15">
                    {/* Number with underline indicator */}
                    <div className="relative flex items-center">
                      <span className="font-mono text-sm sm:text-base font-semibold text-[#B98A2E] tracking-widest">
                        {item.number}
                      </span>
                      <span className="absolute -bottom-[13px] left-0 w-full h-[1.5px] bg-[#B98A2E]" />
                    </div>

                    {/* Pillar tags */}
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.22em] text-[#15150F]/60 uppercase">
                      {item.tags}
                    </span>
                  </div>

                  {/* Collection Title in Fraunces */}
                  <div className="space-y-1.5 sm:space-y-2 pt-1">
                    <h3 className="font-fraunces text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal text-[#15150F] tracking-tight leading-[1.08]">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-mono tracking-[0.26em] uppercase text-[#B98A2E] font-medium">
                      {item.descriptor}
                    </p>
                  </div>

                  {/* Concise Craftsmanship Description */}
                  <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#15150F]/75 font-light leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
