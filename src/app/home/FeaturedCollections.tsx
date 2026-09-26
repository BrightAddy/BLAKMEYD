"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  href: string;
}

const COLLECTIONS: CollectionItem[] = [
  {
    id: "bridal",
    title: "Bridal",
    subtitle: "TIMELESS LOVE",
    image: "/images/collection-bridal-editorial.jpg",
    alt: "Ghanaian bride in bespoke Blak Meyd couture ivory lace bridal gown with white bouquet",
    href: "/collections#bridal",
  },
  {
    id: "heritage",
    title: "Heritage",
    subtitle: "ROOTED IN BEAUTY",
    image: "/images/collection-heritage-editorial.jpg",
    alt: "Ghanaian woman in bespoke Blak Meyd authentic Kente one-shoulder couture gown",
    href: "/collections#heritage",
  },
  {
    id: "occasions",
    title: "Occasions",
    subtitle: "MADE FOR YOU",
    image: "/images/collection-occasions-editorial.jpg",
    alt: "Sculptural emerald green couture pleated evening gown by Blak Meyd",
    href: "/collections#occasions",
  },
];

export default function FeaturedCollections() {
  return (
    <section
      id="collections"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] pt-14 sm:pt-20 lg:pt-24 pb-14 sm:pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* ── BOTANICAL AMBIENT FOLIAGE ACCENT (LEFT MARGIN) ── */}
      <div
        className="absolute top-1/2 -left-12 -translate-y-1/2 w-48 sm:w-64 h-80 sm:h-96 pointer-events-none opacity-40 select-none -z-0 blur-[1px]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#1A4333]/30"
        >
          <path
            d="M-20 60 C30 80 80 120 70 180 C60 230 10 260 -30 290"
            stroke="currentColor"
            strokeWidth="28"
            strokeLinecap="round"
            className="opacity-40"
          />
          <path
            d="M-10 130 C40 135 110 155 125 210 C135 250 80 270 20 280"
            stroke="currentColor"
            strokeWidth="22"
            strokeLinecap="round"
            className="opacity-35"
          />
          <path
            d="M-40 200 C10 190 70 215 95 260"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
            className="opacity-30"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* ── TOP SECTION HEADER ROW ── */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-12 mb-10 sm:mb-14">
          {/* Left Column: Eyebrow + Two-Tone Headline + Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B98A2E] mb-4 sm:mb-5">
              <span className="h-[1px] w-8 sm:w-12 bg-[#B98A2E]" />
              <span>Featured Collections</span>
            </div>

            {/* Headline: Moments, beautifully yours. */}
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight font-serif">
              <span className="block font-semibold text-[#15150F] font-fraunces">
                Moments,
              </span>
              <span className="block font-normal italic text-[#B98A2E] font-fraunces mt-0.5">
                beautifully yours.
              </span>
            </h2>

            {/* Tagline */}
            <p className="mt-4 sm:mt-5 text-[11px] sm:text-[11.5px] tracking-[0.22em] uppercase text-[#5C5549] font-sans font-medium">
              Couture for the occasions that matter most.
            </p>
          </motion.div>

          {/* Right Column: Provenance Stamp + Narrative Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:items-end justify-between max-w-md lg:text-right pt-2"
          >
            {/* Provenance: BLAK MEYD / ACCRA, GHANA with vertical gold line */}
            <div className="flex items-center lg:justify-end gap-3 mb-6 sm:mb-8">
              <div className="text-[10px] sm:text-[10.5px] tracking-[0.28em] uppercase text-[#736C61] font-sans font-medium">
                <div>Blak Meyd</div>
                <div className="text-[#8E877B] text-[9.5px]">Accra, Ghana</div>
              </div>
              <span className="h-7 w-[1.5px] bg-[#B98A2E]/60 inline-block" />
            </div>

            {/* Narrative text with gold bottom underline */}
            <div className="flex flex-col lg:items-end">
              <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#504B43] font-serif italic max-w-sm">
                From bridal beginnings to unforgettable celebrations, our
                collections are designed to make you feel extraordinary.
              </p>
              <span className="h-[1px] w-12 sm:w-16 bg-[#B98A2E]/60 mt-4 self-start lg:self-end" />
            </div>
          </motion.div>
        </div>

        {/* ── 3-CARD COLLECTION GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {COLLECTIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.75,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={item.href}
                className="group relative block w-full aspect-[1/1] sm:aspect-[1.05/1] overflow-hidden bg-[#1E1E1A] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(14,59,46,0.18)] transition-all duration-500"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index === 0}
                />

                {/* Dark Gradient Overlay for optimal legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Card Content Overlay at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex items-end justify-between">
                  <div>
                    {/* Collection Title */}
                    <h3 className="font-fraunces text-2xl sm:text-[1.75rem] font-normal text-[#FBF9F4] tracking-wide">
                      {item.title}
                    </h3>
                    {/* Collection Subtitle */}
                    <p className="text-[10px] sm:text-[10.5px] tracking-[0.26em] uppercase text-[#E4ECE7]/80 font-sans font-medium mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Circular Interactive Arrow Button */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/60 flex items-center justify-center text-white transition-all duration-300 group-hover:border-[#B98A2E] group-hover:text-[#B98A2E] group-hover:scale-110 group-hover:bg-white/5">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── CENTER EXPLORE ALL COLLECTIONS CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-14 flex justify-center"
        >
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 bg-[#0E3B2E] hover:bg-[#08281E] text-[#FBF9F4] px-8 sm:px-10 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-[0.24em] uppercase font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:border-[#B98A2E]/60 border border-transparent group"
          >
            <span>Explore All Collections</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#B98A2E]" />
          </Link>
        </motion.div>

        {/* ── BOTTOM ACCENTS: 'MORE THAN FASHION' & GEOMETRIC GOLD THREADS + 'WEAR YOUR STORY' ── */}
        <div className="mt-12 sm:mt-16 pt-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 relative">
          {/* Bottom Left Accent */}
          <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] tracking-[0.25em] uppercase text-[#6B665E] font-medium">
            <span className="h-[1px] w-8 sm:w-10 bg-[#8C8270]/60" />
            <span>More Than Fashion</span>
          </div>

          {/* Bottom Right: Gold Wire Curves + 'Wear your story.' */}
          <div className="relative self-end sm:self-auto flex flex-col items-end">
            {/* Delicate Golden Arcs SVG */}
            <div
              className="absolute -right-6 sm:-right-12 -bottom-8 sm:-bottom-12 w-48 sm:w-64 h-32 sm:h-44 pointer-events-none opacity-40 select-none overflow-visible"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 240 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#B98A2E]"
              >
                <path
                  d="M0 160 C70 120 160 90 240 0"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <path
                  d="M40 160 C110 130 190 100 240 40"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <path
                  d="M80 160 C150 140 210 120 240 80"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
              </svg>
            </div>

            {/* Wear your story text */}
            <div className="relative z-10 flex flex-col items-end">
              <span className="font-fraunces italic text-base sm:text-lg text-[#554E45]">
                Wear your story.
              </span>
              <span className="h-[1.5px] w-8 sm:w-10 bg-[#B98A2E]/70 mt-1.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
