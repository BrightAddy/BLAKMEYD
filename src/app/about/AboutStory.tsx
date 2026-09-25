"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ValuePillar {
  title: string;
  subtitle: string;
}

const PILLARS: ValuePillar[] = [
  {
    title: "PEOPLE",
    subtitle: "Meaningful Connections",
  },
  {
    title: "CRAFTSMANSHIP",
    subtitle: "Exceptional Detail",
  },
  {
    title: "CULTURE",
    subtitle: "Proudly Ghanaian",
  },
  {
    title: "INDIVIDUALITY",
    subtitle: "Uniquely Yours",
  },
];

export default function AboutStory() {
  return (
    <section
      id="story"
      className="relative w-full bg-[#FAF7F2] text-[#15150F] overflow-hidden select-none border-t border-[#B98A2E]/15"
      aria-label="Our Story: Rooted in Heritage. Sculpted with Intention."
    >
      {/* ─────────────────────────────────────────────────────────────
          MAIN SECTION CONTAINER (COMPACT & BALANCED EDITORIAL HEIGHT)
          ───────────────────────────────────────────────────────────── */}
      <div className="relative min-h-[480px] lg:min-h-[540px] xl:min-h-[580px] max-h-[660px] w-full flex items-stretch">
        {/* ── DESKTOP PHOTOGRAPH (RIGHT SIDE — PROPORTIONATE & REFINED SCALE) ── */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] xl:w-[46%] z-0 overflow-hidden">
          <Image
            src="/images/about/about-story-atelier.jpg"
            alt="Blak Meyd couture designer in emerald gown at atelier marble cutting table in Accra"
            fill
            priority
            quality={95}
            sizes="(max-width: 1280px) 50vw, 46vw"
            className="object-cover object-center"
          />

          {/* Subtle warm luxury atmospheric gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none" />
        </div>

        {/* ── SCULPTURAL SVG S-CURVE OVERLAY WITH GOLDEN CONTOUR THREAD ── */}
        <div
          className="hidden lg:block absolute inset-0 z-10 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 600"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            {/* Solid Warm Ivory Mask covering the Left Content Area */}
            <path
              d="M 0,0 L 740,0 C 705,180 750,420 860,600 L 0,600 Z"
              fill="#FAF7F2"
            />

            {/* Primary Golden Contour Stroke */}
            <path
              d="M 740,0 C 705,180 750,420 860,600"
              stroke="#B98A2E"
              strokeWidth="1.3"
              strokeOpacity="0.8"
            />

            {/* Delicate Secondary Gold Thread Arc (Top) */}
            <path
              d="M 240,80 C 440,80 660,40 740,0"
              stroke="#B98A2E"
              strokeWidth="0.75"
              strokeOpacity="0.35"
            />

            {/* Delicate Secondary Gold Thread Arc (Bottom) */}
            <path
              d="M 600,600 C 720,570 800,580 860,600"
              stroke="#B98A2E"
              strokeWidth="0.75"
              strokeOpacity="0.35"
            />
          </svg>
        </div>

        {/* ── CONTENT CONTAINER (OUR STORY NARRATIVE & VALUES) ── */}
        <div className="relative z-20 w-full lg:w-[55%] xl:w-[53%] flex flex-col justify-between py-12 sm:py-14 lg:py-16 px-6 sm:px-10 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pr-8 bg-[#FAF7F2]">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-3 sm:mb-4"
            >
              <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.28em] uppercase text-[#9E7A3E]">
                Our Story
              </span>
            </motion.div>

            {/* Monumental Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-fraunces text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-light leading-[1.05] tracking-tight"
            >
              <span className="block font-normal text-[#15150F]">
                Rooted in Heritage.
              </span>
              <span className="block font-normal italic text-[#A47738] mt-1">
                Sculpted with Intention.
              </span>
            </motion.h2>

            {/* Narrative Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[13.5px] sm:text-[14.5px] lg:text-[15px] leading-relaxed text-[#554E45] font-light mt-4 sm:mt-5 max-w-md lg:max-w-lg"
            >
              Blak Meyd is a bespoke couture atelier in Accra, Ghana, created for
              women who value intentional design, refined craftsmanship and pieces
              that tell their story.
            </motion.p>

            {/* Thin Gold Dividing Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 44 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1.5px] bg-[#B98A2E]/70 my-5 sm:my-6"
            />

            {/* 4 Pillars / Value Columns Grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-0.5"
            >
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="flex flex-col space-y-0.5">
                  <span className="text-[9px] sm:text-[9.5px] tracking-[0.22em] uppercase font-sans font-semibold text-[#15150F]">
                    {pillar.title}
                  </span>
                  <span className="text-[11.5px] sm:text-[12px] text-[#736C61] font-serif leading-snug">
                    {pillar.subtitle}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* ── MOBILE / TABLET DEDICATED IMAGE (CLEAN, PROPORTIONATE & NOT HUGE) ── */}
            <div className="lg:hidden mt-8 relative w-full aspect-[16/10] sm:aspect-[2/1] max-h-[280px] rounded-xl overflow-hidden border border-[#B98A2E]/25 shadow-md">
              <Image
                src="/images/about/about-story-atelier.jpg"
                alt="Blak Meyd couture designer at atelier marble cutting table in Accra"
                fill
                quality={95}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* ── BOTTOM SCROLL CUE ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6 sm:pt-8 lg:pt-10"
          >
            <a
              href="#inspiration"
              className="group inline-flex items-center gap-3 text-[9.5px] tracking-[0.24em] uppercase text-[#736C61] hover:text-[#15150F] font-mono transition-colors"
              aria-label="Scroll to explore our inspiration session"
            >
              {/* Vertical Gold Bar */}
              <span className="h-5 w-[1.5px] bg-[#B98A2E]/70 group-hover:bg-[#B98A2E] transition-colors" />
              <div className="flex flex-col">
                <span className="font-medium">Scroll to Explore</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-y-0.5">
                  &darr;
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
