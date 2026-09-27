"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface CraftPillar {
  title1: string;
  title2: string;
  description: string;
}

const PILLARS: CraftPillar[] = [
  {
    title1: "QUALITY",
    title2: "MATERIALS",
    description: "Carefully sourced fabrics for lasting beauty.",
  },
  {
    title1: "EXPERT",
    title2: "TECHNIQUE",
    description: "A blend of traditional skills and modern precision.",
  },
  {
    title1: "REFINED",
    title2: "FINISHES",
    description: "Thoughtful details in every stitch.",
  },
];

export default function AboutCraftsmanship() {
  return (
    <section
      id="craftsmanship"
      className="relative z-10 bg-[#FAF7F2] text-[#15150F] py-14 sm:py-18 lg:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-[#B98A2E]/20"
      aria-label="Our Craftsmanship: Details Make the Difference"
    >
      {/* ── AMBIENT WARM RADIAL GLOW ── */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(185,138,46,0.08),transparent_65%)] pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* ── MAIN CONTENT CONTAINER (MAX-W-7XL SITE ALIGNED) ── */}
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* ─────────────────────────────────────────────────────────────
            LUXURY ATELIER SHOWCASE CARD
            Controlled height ensures the embroidery image does not appear oversized
            ───────────────────────────────────────────────────────────── */}
        <div className="relative min-h-[460px] lg:min-h-[480px] xl:min-h-[500px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#B98A2E]/30 shadow-[0_20px_50px_rgba(12,21,16,0.18)] bg-[#07130E] flex flex-col lg:flex-row items-stretch">
          
          {/* ── BACKGROUND PHOTOGRAPH (MASTER ARTISAN EMBROIDERY) ── */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/about/craftsmanship-embroidery.jpg"
              alt="Blak Meyd master artisan hand embroidering intricate gold bullion embroidery onto rich emerald velvet"
              fill
              priority
              quality={95}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-[center_32%] lg:object-[48%_32%] transition-transform duration-700 ease-out"
            />

            {/* Left Scrim for Text Readability without darkening center hands */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07130E] via-[#07130E]/85 via-35% to-transparent w-full lg:w-[48%] pointer-events-none" />

            {/* Subtle Atelier Lighting Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />
          </div>

          {/* ── SCULPTURAL SVG S-CURVE DIVIDER WITH METALLIC GOLD ACCENT (LG+) ── */}
          <div
            className="hidden lg:block absolute inset-0 z-10 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1200 500"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <defs>
                {/* Metallic Gold Ribbon Gradient */}
                <linearGradient id="goldRibbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8C6721" />
                  <stop offset="30%" stopColor="#DFBA6E" />
                  <stop offset="55%" stopColor="#F9EDB8" />
                  <stop offset="80%" stopColor="#C5A265" />
                  <stop offset="100%" stopColor="#7E5C1B" />
                </linearGradient>

                {/* Subtle Inner Shadow Mask */}
                <linearGradient id="panelFade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FAF7F2" />
                  <stop offset="100%" stopColor="#F5F0E6" />
                </linearGradient>
              </defs>

              {/* Warm Ivory Right Panel Canvas */}
              <path
                d="M 940,0 C 850,150 830,350 910,500 L 1200,500 L 1200,0 Z"
                fill="url(#panelFade)"
              />

              {/* Sculpted Metallic Gold Ribbon */}
              <path
                d="M 940,0 C 850,150 830,350 910,500"
                stroke="url(#goldRibbonGradient)"
                strokeWidth="12"
                strokeLinecap="butt"
              />

              {/* Fine Gold Edge Highlight */}
              <path
                d="M 934,0 C 844,150 824,350 904,500"
                stroke="#FFE8A3"
                strokeWidth="1.2"
                strokeOpacity="0.8"
              />

              {/* Outer Deep Shadow Accent Line */}
              <path
                d="M 946,0 C 856,150 836,350 916,500"
                stroke="#6B4F17"
                strokeWidth="1"
                strokeOpacity="0.6"
              />
            </svg>
          </div>

          {/* ── EDITORIAL CONTENT SPLIT ── */}
          <div className="relative z-20 w-full flex flex-col lg:flex-row justify-between items-stretch">
            
            {/* ════════ LEFT COLUMN: HEADLINE & NARRATIVE (DARK ATELIER SIDE) ════════ */}
            <div className="w-full lg:w-[38%] xl:w-[35%] flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div className="max-w-md">
                {/* Eyebrow with horizontal gold accent rule */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 mb-3 sm:mb-4"
                >
                  <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C5A265]">
                    Our Craftsmanship
                  </span>
                  <span className="w-10 sm:w-12 h-[1px] bg-[#C5A265]/60 inline-block" />
                </motion.div>

                {/* Monumental Dual Tone Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="font-fraunces text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-light leading-[1.08] tracking-tight text-[#FBF9F4]"
                >
                  <span className="block font-normal">
                    Details
                  </span>
                  <span className="block font-normal">
                    Make the
                  </span>
                  <span className="block font-normal italic text-[#C5A265] mt-0.5">
                    Difference.
                  </span>
                </motion.h2>

                {/* Narrative Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-[13px] sm:text-[14px] lg:text-[14.5px] leading-relaxed text-[#D8D2C6] font-light mt-4 sm:mt-5"
                >
                  At Blak Meyd, craftsmanship is the heart of everything we do.
                  Each garment is meticulously constructed, combining traditional
                  tailoring techniques with modern precision, to create pieces
                  that are as enduring as they are elegant.
                </motion.p>

                {/* Thin Gold Dividing Bar */}
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: 40 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[1.5px] bg-[#C5A265]/70 mt-5 sm:mt-6"
                />
              </div>
            </div>

            {/* ════════ RIGHT COLUMN: 3 PILLARS (WARM IVORY PANEL) ════════ */}
            <div className="w-full lg:w-[26%] xl:w-[23%] bg-[#FAF7F2] lg:bg-transparent text-[#15150F] p-8 sm:p-10 lg:py-10 lg:pr-8 lg:pl-6 xl:py-12 xl:pr-10 xl:pl-8 flex flex-col justify-center space-y-6 sm:space-y-7">
              {PILLARS.map((pillar, idx) => (
                <motion.div
                  key={pillar.title1 + pillar.title2}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.12 * idx, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col group"
                >
                  {/* Pillar Two-Line Uppercase Title */}
                  <span className="text-[10px] sm:text-[10.5px] tracking-[0.24em] uppercase font-sans font-semibold text-[#8C6D38] leading-snug group-hover:text-[#B98A2E] transition-colors">
                    {pillar.title1}
                    <br />
                    {pillar.title2}
                  </span>

                  {/* Delicate gold rule */}
                  <span className="w-6 h-[1.5px] bg-[#B98A2E]/60 block mt-1.5 mb-2 group-hover:w-9 transition-all duration-300" />

                  {/* Pillar Description */}
                  <p className="text-[12px] sm:text-[12.5px] text-[#554E45] font-serif leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
