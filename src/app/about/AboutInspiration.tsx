"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ATTRIBUTES = [
  "HERITAGE",
  "CRAFTSMANSHIP",
  "CULTURE",
  "INDIVIDUALITY",
];

export default function AboutInspiration() {
  return (
    <section
      id="inspiration"
      className="relative z-10 bg-[#120E0B] text-[#FBF9F4] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-12 overflow-hidden border-t border-[#B98A2E]/25"
      aria-label="Our Story: From Inspiration to Timeless Pieces"
    >
      {/* ── AMBIENT HAUTE COUTURE GOLD GLOW (BEHIND VISUAL) ── */}
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(197,162,101,0.08),transparent_65%)] pointer-events-none select-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_left,rgba(185,138,46,0.05),transparent_65%)] pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* ── MAIN CONTENT: STRICTLY ALIGNED WITH SITE'S MAX-W-7XL GRID ── */}
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* ════════ LEFT COLUMN: EDITORIAL NARRATIVE & ATTRIBUTES (7 of 12 cols) ════════ */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            {/* Eyebrow with horizontal gold accent line */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3.5 mb-4 sm:mb-5"
            >
              <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C5A265]">
                Our Story
              </span>
              <span className="w-12 h-[1px] bg-[#C5A265]/50 inline-block" />
            </motion.div>

            {/* Monumental Dual-Tone Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-fraunces text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-light leading-[1.06] tracking-tight"
            >
              <span className="block font-normal text-[#FBF9F4]">
                From
              </span>
              <span className="block font-normal text-[#FBF9F4]">
                Inspiration
              </span>
              <span className="block font-normal italic text-[#C5A265] mt-1 sm:mt-1.5">
                to Timeless
              </span>
              <span className="block font-normal italic text-[#C5A265]">
                Pieces.
              </span>
            </motion.h2>

            {/* Narrative Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[14px] sm:text-[15px] lg:text-[15.5px] leading-relaxed text-[#D8D2C6] font-light mt-5 sm:mt-6 max-w-lg"
            >
              At Blak Meyd, every garment begins with a story: a woman,
              a moment, a vision. Rooted in Ghana, we blend heritage, artistry
              and contemporary design to create pieces that celebrate individuality
              and stand the test of time.
            </motion.p>

            {/* Thin Gold Dividing Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 44 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1.5px] bg-[#C5A265]/70 my-6 sm:my-7"
            />

            {/* Horizontal 4 Attributes Row with vertical line dividers */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2.5 pt-0.5"
            >
              {ATTRIBUTES.map((attr, index) => (
                <div key={attr} className="flex items-center gap-4 sm:gap-5">
                  <span className="text-[9.5px] sm:text-[10px] tracking-[0.24em] uppercase font-sans font-semibold text-[#FBF9F4]/90">
                    {attr}
                  </span>
                  {index < ATTRIBUTES.length - 1 && (
                    <span className="h-3.5 w-[1px] bg-[#C5A265]/40 inline-block" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* ── BOTTOM SCROLL CUE ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 sm:pt-10 lg:pt-12"
            >
              <a
                href="#manifesto"
                className="group inline-flex items-center gap-3 text-[9.5px] tracking-[0.24em] uppercase text-[#A8A095] hover:text-[#FBF9F4] font-mono transition-colors"
                aria-label="Scroll to explore our atelier manifesto"
              >
                {/* Vertical Gold Bar */}
                <span className="h-5 w-[1.5px] bg-[#C5A265]/70 group-hover:bg-[#C5A265] transition-colors" />
                <div className="flex flex-col">
                  <span className="font-medium">Scroll to Explore</span>
                  <span className="text-xs transition-transform duration-300 group-hover:translate-y-0.5">
                    &darr;
                  </span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* ════════ RIGHT COLUMN: REFINED ATELIER PHOTOGRAPHY (5 of 12 cols) ════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 w-full flex justify-center lg:justify-end"
          >
            {/* Strictly sized, elegant luxury photo card with gold contour frame */}
            <div className="relative w-full max-w-[480px] xl:max-w-[500px] h-[340px] sm:h-[400px] lg:h-[440px] xl:h-[470px] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.65)] border border-[#C5A265]/35 group bg-[#1A1613]">
              <Image
                src="/images/about/about-inspiration-session.jpg"
                alt="Blak Meyd couture designer sketching garment designs at atelier drafting table in Accra"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Inner subtle gold border glow ring */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#C5A265]/20 pointer-events-none" />

              {/* Subtle luxury vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

              {/* Atelier Provenance Badge */}
              <div className="absolute bottom-4 right-4 z-10 bg-[#120E0B]/85 backdrop-blur-xs px-3 py-1.5 rounded-[3px] border border-[#C5A265]/30">
                <span className="text-[8.5px] font-mono tracking-[0.24em] text-[#C5A265] uppercase">
                  Atelier Accra &bull; Hand-Drafted
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
