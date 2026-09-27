"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface PhilosophyPillar {
  title: string;
  description: string;
}

const PILLARS: PhilosophyPillar[] = [
  {
    title: "INDIVIDUALITY",
    description: "Your style should never feel borrowed.",
  },
  {
    title: "INTENTION",
    description: "Every detail has a reason.",
  },
  {
    title: "HERITAGE",
    description: "Culture informs the work without limiting it.",
  },
  {
    title: "EXPRESSION",
    description: "A garment should become part of your story.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section
      id="philosophy"
      className="relative z-10 bg-[#FAF7F2] text-[#15150F] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-12 overflow-hidden border-t border-[#B98A2E]/20"
      aria-label="Our Philosophy: Clothing Should Feel Like You"
    >
      {/* ── BOTANICAL SUNLIGHT LEAF SHADOW ACCENT (TOP RIGHT PLASTER WALL) ── */}
      <div
        className="absolute -top-10 right-0 w-[420px] h-[340px] pointer-events-none select-none opacity-30 blur-[0.5px]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#15150F]"
        >
          {/* Organic leafy branch shadows cast on wall */}
          <path
            d="M380 -20 C340 40 310 120 280 200"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.3"
          />
          <path
            d="M330 30 C300 20 270 50 280 80 C290 100 330 90 330 30 Z"
            fill="currentColor"
            opacity="0.25"
          />
          <path
            d="M290 110 C250 100 230 140 250 170 C270 190 300 160 290 110 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M360 80 C340 100 320 150 350 180 C380 170 380 120 360 80 Z"
            fill="currentColor"
            opacity="0.22"
          />
          <path
            d="M260 180 C230 190 220 230 240 260 C270 270 280 230 260 180 Z"
            fill="currentColor"
            opacity="0.25"
          />
        </svg>
      </div>

      {/* Ambient warm radial glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_left,rgba(185,138,46,0.06),transparent_70%)] pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* ── MAIN CONTENT WRAPPED IN MAX-W-7XL SITE GRID ── */}
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-12 items-start">
          
          {/* ════════ COLUMN 1: EDITORIAL MUSE PORTRAIT & ARCHITECTURAL MOTIFS (4 Cols) ════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4 relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Arched Gold Leaf Panel Accent (Behind Shoulder) */}
              <div
                className="absolute -top-4 -right-3 sm:-right-4 w-28 sm:w-32 h-52 sm:h-60 rounded-t-full bg-gradient-to-b from-[#C5A265] via-[#A47738] to-[#7B5B22] opacity-80 -z-10 shadow-md"
                aria-hidden="true"
              />

              {/* Deep Emerald Velvet Swatch Accent (Bottom Corner) */}
              <div
                className="absolute -bottom-3 -right-3 w-28 sm:w-32 h-24 sm:h-28 bg-[#0E3B2E] rounded-md -z-10 shadow-md border border-[#B98A2E]/20"
                aria-hidden="true"
              />

              {/* Muse Portrait Frame */}
              <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[550px] rounded-2xl lg:rounded-tl-[4.5rem] lg:rounded-tr-2xl overflow-hidden shadow-[0_20px_50px_rgba(21,21,15,0.18)] border border-[#B98A2E]/30 bg-[#161311] group">
                <Image
                  src="/images/about/philosophy-muse.jpg"
                  alt="Blak Meyd muse draped in sculptural pleated silk organza with hammered gold earring against concrete arches"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle warm luxury vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Fine gold border glow ring */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-tl-[4.5rem] ring-1 ring-inset ring-[#B98A2E]/25 pointer-events-none" />
              </div>

              {/* Architectural Gold Wire Arc Overlay (Echoing Reference Design) */}
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-20 text-[#B98A2E]/60 hidden sm:block"
                aria-hidden="true"
              >
                <path
                  d="M 10 190 A 90 90 0 0 1 190 190"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </motion.div>

          {/* ════════ COLUMN 2: CENTER HEADLINE, NARRATIVE & MOODBOARD COLLAGE (5 Cols) ════════ */}
          <div className="lg:col-span-4 xl:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-7">
            {/* Top: Eyebrow + Headline + Copy */}
            <div>
              {/* Eyebrow with horizontal gold accent rule */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3.5 mb-3 sm:mb-4"
              >
                <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.28em] uppercase text-[#9E7A3E]">
                  Our Philosophy
                </span>
                <span className="w-12 h-[1px] bg-[#B98A2E]/50 inline-block" />
              </motion.div>

              {/* Monumental Dual-Tone Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-fraunces text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.15rem] font-light leading-[1.06] tracking-tight"
              >
                <span className="block font-normal text-[#15150F]">
                  Clothing
                </span>
                <span className="block font-normal text-[#15150F]">
                  Should Feel
                </span>
                <span className="block font-normal italic text-[#A47738] mt-0.5 sm:mt-1">
                  Like You.
                </span>
              </motion.h2>

              {/* Narrative Paragraph (Clean punctuation, zero hyphens) */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[13.5px] sm:text-[14.5px] lg:text-[15px] leading-relaxed text-[#554E45] font-light mt-4 sm:mt-5 max-w-lg"
              >
                At Blak Meyd, we believe clothing is more than fabric and form:
                it is a personal language. Our philosophy is rooted in individuality,
                intentional design, cultural pride and timeless elegance, creating pieces
                that honour who you are and where you are going.
              </motion.p>

              {/* Thin Gold Dividing Bar */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: 44 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1.5px] bg-[#B98A2E]/70 my-5 sm:my-6"
              />
            </div>

            {/* Bottom: Architectural Moodboard & Texture Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] rounded-xl overflow-hidden shadow-lg border border-[#B98A2E]/25 group bg-[#EFE9DF]"
            >
              <div className="relative w-full h-[180px] sm:h-[210px] overflow-hidden">
                <Image
                  src="/images/about/philosophy-collage.jpg"
                  alt="Blak Meyd architectural inspiration moodboard featuring concrete arches, sunlit leaf shadows, hammered gold foil and emerald velvet"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#B98A2E]/20 rounded-xl pointer-events-none" />
              </div>

              {/* Caption pill */}
              <div className="absolute bottom-2.5 right-2.5 z-10 bg-[#FAF7F2]/90 backdrop-blur-xs px-2.5 py-1 rounded-[2px] border border-[#B98A2E]/25">
                <span className="text-[8px] font-mono tracking-[0.22em] text-[#8C7A5B] uppercase">
                  Atelier Moodboard &bull; Form &amp; Material
                </span>
              </div>
            </motion.div>
          </div>

          {/* ════════ COLUMN 3: PHILOSOPHY PILLARS (3 Cols) ════════ */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-between py-2 sm:py-4 space-y-6 sm:space-y-8 lg:space-y-10 border-t lg:border-t-0 lg:border-l border-[#B98A2E]/20 pt-8 lg:pt-2 lg:pl-8">
            {PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15 * idx, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col group"
              >
                {/* Pillar Header */}
                <span className="text-[10px] sm:text-[10.5px] tracking-[0.26em] uppercase font-sans font-semibold text-[#A47738] group-hover:text-[#B98A2E] transition-colors">
                  {pillar.title}
                </span>

                {/* Delicate gold rule */}
                <span className="w-6 h-[1.5px] bg-[#B98A2E]/60 block mt-1.5 mb-2.5 group-hover:w-10 transition-all duration-300" />

                {/* Pillar Description */}
                <p className="text-[13px] sm:text-[13.5px] text-[#554E45] font-serif leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
