"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "UNDERSTAND",
    description: "We listen to your ideas, preferences and lifestyle to understand your vision.",
    image: "/images/process-step-1-hd.jpg",
  },
  {
    number: "02",
    title: "EXPLORE",
    description: "We guide you through fabric selections, silhouettes and details that suit you.",
    image: "/images/process-step-2-hd.jpg",
  },
  {
    number: "03",
    title: "REFINE",
    description: "We collaborate on design details, ensuring every element feels right.",
    image: "/images/process-step-3-hd.jpg",
  },
  {
    number: "04",
    title: "CREATE",
    description: "We bring your garment to life with precision, care and craftsmanship.",
    image: "/images/process-step-4-hd.jpg",
  },
];

export default function AboutProcess() {
  return (
    <section
      id="process"
      className="relative z-10 bg-[#FAF7F2] text-[#15150F] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-12 overflow-hidden border-t border-[#B98A2E]/20"
      aria-label="Our Bespoke Approach: A Process Designed Around You"
    >
      {/* ── AMBIENT WARM RADIAL GLOW ── */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(185,138,46,0.06),transparent_65%)] pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* ── MAIN CONTENT CONTAINER (MAX-W-7XL GRID ALIGNED) ── */}
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* ════════ TOP SPLIT: HEADLINE & NARRATIVE (LEFT) + GOWN HERO (RIGHT) ════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ── LEFT: EDITORIAL COPY (5 Cols) ── */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            {/* Eyebrow with horizontal gold accent rule */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3.5 mb-3 sm:mb-4"
            >
              <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.28em] uppercase text-[#9E7A3E]">
                Our Bespoke Approach
              </span>
              <span className="w-12 h-[1px] bg-[#B98A2E]/50 inline-block" />
            </motion.div>

            {/* Monumental Dual-Tone Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-fraunces text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-light leading-[1.05] tracking-tight"
            >
              <span className="block font-normal text-[#15150F]">
                A Process
              </span>
              <span className="block font-normal italic text-[#A47738] mt-0.5 sm:mt-1">
                Designed
              </span>
              <span className="block font-normal italic text-[#A47738]">
                Around You.
              </span>
            </motion.h2>

            {/* Narrative Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[13.5px] sm:text-[14.5px] lg:text-[15px] leading-relaxed text-[#554E45] font-light mt-4 sm:mt-5 max-w-lg"
            >
              Every garment at Blak Meyd begins with you. Our bespoke approach is
              collaborative, thoughtful and intentional, ensuring each piece reflects
              your personality, lifestyle and occasion, with exceptional attention
              to detail.
            </motion.p>
          </div>

          {/* ── RIGHT: HAUTE COUTURE GOWN VISUAL & MANIFESTO TAGLINE (7 Cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 relative flex flex-col sm:flex-row items-center sm:items-stretch gap-6 lg:gap-8 justify-end"
          >
            {/* Sculptural Gown Visual */}
            <div className="relative w-full max-w-[540px] h-[320px] sm:h-[370px] lg:h-[390px] rounded-2xl lg:rounded-tr-[4.5rem] lg:rounded-bl-2xl overflow-hidden shadow-[0_20px_50px_rgba(21,21,15,0.16)] border border-[#B98A2E]/25 group bg-[#161311]">
              <Image
                src="/images/about/process-hero-gown.jpg"
                alt="Blak Meyd bespoke haute couture gown in emerald velvet and champagne pleated silk draped at architectural arches with olive tree"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Inner subtle gold border glow ring */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-tr-[4.5rem] lg:rounded-bl-2xl ring-1 ring-inset ring-[#B98A2E]/20 pointer-events-none" />

              {/* Gentle warm luxury vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Vertical Manifesto Tagline (Right Margin) */}
            <div className="hidden sm:flex flex-col justify-center space-y-3 py-2 shrink-0 border-l border-[#B98A2E]/25 pl-4 sm:pl-5 text-left">
              <span className="text-[8.5px] sm:text-[9px] tracking-[0.28em] text-[#8C7A5B] font-mono uppercase font-semibold">
                Your Vision.
              </span>
              <span className="w-5 h-[1px] bg-[#B98A2E]/50 block" />
              <span className="text-[8.5px] sm:text-[9px] tracking-[0.28em] text-[#8C7A5B] font-mono uppercase font-semibold">
                Our Expertise.
              </span>
              <span className="w-5 h-[1px] bg-[#B98A2E]/50 block" />
              <span className="text-[8.5px] sm:text-[9px] tracking-[0.28em] text-[#8C7A5B] font-mono uppercase font-semibold leading-relaxed max-w-[100px]">
                A Garment That Feels Like You.
              </span>
            </div>

            {/* Architectural Gold Wire Contour Arc (Decorative SVG) */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-8 left-4 w-32 h-32 pointer-events-none z-20 text-[#B98A2E]/50 hidden lg:block"
              aria-hidden="true"
            >
              <path
                d="M 190 190 A 90 90 0 0 0 10 190"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </motion.div>
        </div>

        {/* ════════ BOTTOM ROW: 4 STEPS + EMERALD MARBLE CLOSING ARCH (5 Cards) ════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mt-12 sm:mt-16">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[230px] sm:h-[250px] rounded-xl overflow-hidden p-5 flex flex-col justify-end border border-[#B98A2E]/25 group hover:border-[#B98A2E]/60 transition-all duration-300 shadow-md bg-[#161311]"
            >
              {/* Card Photo Background */}
              <Image
                src={step.image}
                alt={`Blak Meyd Bespoke Step ${step.number}: ${step.title}`}
                fill
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Atmospheric Scrim for Pristine Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/35 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />

              {/* Card Content */}
              <div className="relative z-10">
                {/* Step Number */}
                <span className="font-fraunces text-2xl sm:text-[1.7rem] italic font-light text-[#C5A265] block leading-none">
                  {step.number}
                </span>

                {/* Step Title */}
                <span className="text-[9.5px] sm:text-[10px] tracking-[0.24em] font-sans font-semibold uppercase text-[#FBF9F4] block mt-1.5">
                  {step.title}
                </span>

                {/* Delicate Gold Rule */}
                <span className="w-5 h-[1.5px] bg-[#C5A265]/70 block my-2.5 group-hover:w-8 transition-all duration-300" />

                {/* Step Description */}
                <p className="text-[11.5px] sm:text-[12px] text-[#D8D2C6] font-serif leading-snug font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* ── CARD 05: EMERALD GOLD MARBLE CLOSING ARCH QUOTE ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[230px] sm:h-[250px] rounded-xl lg:rounded-r-[2.5rem] overflow-hidden p-5 flex flex-col justify-end border border-[#B98A2E]/35 group hover:border-[#B98A2E]/70 transition-all duration-300 shadow-md bg-[#0A1C16]"
          >
            {/* Deep Emerald Gold-Veined Marble Background */}
            <Image
              src="/images/about/process-emerald-marble.jpg"
              alt="Deep emerald green marble with delicate veins of pure gold"
              fill
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Emerald Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25 pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#C5A265]/25 rounded-xl lg:rounded-r-[2.5rem] pointer-events-none" />

            {/* Closing Quote Content */}
            <div className="relative z-10">
              {/* Decorative Gold Accent Bar */}
              <span className="w-8 h-[1.5px] bg-[#C5A265]/80 block mb-3" />

              <p className="font-fraunces italic text-xs sm:text-[12.5px] leading-relaxed text-[#FBF9F4] font-light drop-shadow-sm">
                The result is a garment that not only fits you beautifully, but also
                carries meaning: a true reflection of you.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
