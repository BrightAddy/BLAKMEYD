"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface PhilosophyPillar {
  title: string;
  description: string;
}

const PILLARS: PhilosophyPillar[] = [
  {
    title: "Individuality",
    description: "Designed around your personal style, never borrowed.",
  },
  {
    title: "Intention",
    description: "Every cut and detail crafted with care and purpose.",
  },
  {
    title: "Heritage",
    description: "Grounded in rich Ghanaian tradition and modern grace.",
  },
  {
    title: "Expression",
    description: "Made to become a natural, lasting part of your story.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section
      id="philosophy"
      className="relative z-10 bg-[#FAF7F2] text-[#15150F] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-[#B98A2E]/20"
      aria-label="Our Philosophy: Clothing Should Feel Like You"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ── LEFT: REFINED MUSE PORTRAIT (5 COLS) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(21,21,15,0.12)] border border-[#B98A2E]/25 bg-[#161311]">
              <Image
                src="/images/about/philosophy-muse.jpg"
                alt="Blak Meyd muse draped in bespoke couture"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* ── RIGHT: HEADLINE, CONCISE NARRATIVE & 4 PILLARS (7 COLS) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B98A2E]" />
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#9E7A3E]">
                Our Philosophy
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#15150F]">
              Clothing Should Feel{" "}
              <span className="italic text-[#A47738]">Like You.</span>
            </h2>

            {/* Clear, Simplified Narrative */}
            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#554E45] font-light max-w-xl">
              At Blak Meyd, we believe clothing is a personal language. Every garment is crafted to reflect your individuality, honoring who you are with intentional design and timeless Ghanaian craftsmanship.
            </p>

            {/* 4 Pillars in a Clean 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-[#B98A2E]/20 max-w-xl">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="space-y-1">
                  <span className="text-[10.5px] sm:text-[11px] tracking-[0.22em] uppercase font-semibold text-[#A47738]">
                    {pillar.title}
                  </span>
                  <p className="text-[13px] sm:text-[13.5px] text-[#554E45] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
