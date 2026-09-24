"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  image: string;
  alt: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    image: "/images/process-step-1-hd.jpg",
    alt: "Private couture consultation at Blak Meyd atelier with lookbook and tea",
    description: "We listen to your ideas, style preferences and the occasion.",
  },
  {
    number: "02",
    title: "Design & Details",
    image: "/images/process-step-2-hd.jpg",
    alt: "Hand sketching custom evening gown silhouette with pencil and ruler",
    description:
      "Together we explore designs, fabrics and refinements until it feels just right.",
  },
  {
    number: "03",
    title: "Creation",
    image: "/images/process-step-3-hd.jpg",
    alt: "Artisan hand-beading intricate gold embroidery onto rich emerald silk",
    description:
      "Your piece is expertly crafted with precision and care in our atelier.",
  },
  {
    number: "04",
    title: "The Final Look",
    image: "/images/process-step-4-hd.jpg",
    alt: "Bespoke fitting of tailored emerald gown before golden atelier mirror",
    description:
      "Fittings, final touches and a look made for your special moment.",
  },
];

export default function HomeProcess() {
  return (
    <section
      id="process"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] py-14 sm:py-18 lg:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-[#B98A2E]/15"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ────────────────────────────────────────────────────────
              LEFT COLUMN: DESIGNER ATELIER PORTRAIT (~38% / 5 cols)
              Strictly framed & height-controlled (max-h-[580px])
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5"
          >
            <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[560px] xl:h-[580px] max-h-[600px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.12)] group bg-[#201D19]">
              {/* Designer Portrait Image */}
              <Image
                src="/images/process-designer-hd.jpg"
                alt="Blak Meyd Ghanaian haute couture designer hand-sketching bespoke gown at atelier cutting table"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-[center_top] sm:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* Top-Left Badge: FROM VISION TO REALITY */}
              <div className="absolute top-6 left-6 z-10 flex items-start gap-2.5 text-[9px] sm:text-[9.5px] tracking-[0.26em] uppercase text-[#FBF9F4] font-sans font-medium drop-shadow-sm">
                <span className="h-9 w-[1.5px] bg-[#B98A2E] inline-block shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <div>From</div>
                  <div>Vision</div>
                  <div>To Reality</div>
                </div>
              </div>

              {/* Bottom Gradient Scrim & Quote Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-7 z-10">
                <p className="font-fraunces italic text-base sm:text-lg text-[#FBF9F4] leading-snug">
                  Intentional <br />
                  Design. <br />
                  Timeless Results.
                </p>
                <span className="h-[1.5px] w-8 bg-[#B98A2E] mt-2 inline-block" />
              </div>
            </div>
          </motion.div>

          {/* ────────────────────────────────────────────────────────
              RIGHT COLUMN: EDITORIAL HEADER + 4 STEP PROCESS CARDS (~62% / 7 cols)
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center relative"
          >
            {/* Top-Right Provenance Mark */}
            <div className="hidden sm:flex items-center justify-end gap-2 text-[9.5px] tracking-[0.26em] uppercase text-[#736C61] font-sans font-medium mb-2">
              <span>Blak Meyd</span>
              <span className="h-[1px] w-4 bg-[#B98A2E]/60 inline-block" />
              <span className="text-[#8E877B]">Accra, Ghana</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B98A2E] mb-3">
              <span className="h-[1px] w-8 sm:w-10 bg-[#B98A2E]" />
              <span>Our Process</span>
            </div>

            {/* Headline: A Thoughtful Journey, Beautifully Yours. */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3rem] leading-[1.12] tracking-tight font-serif">
              <span className="block font-semibold text-[#15150F] font-fraunces">
                A Thoughtful Journey,
              </span>
              <span className="inline-block font-normal italic text-[#B98A2E] font-fraunces mt-0.5 mr-2">
                Beautifully
              </span>
              <span className="inline-block font-semibold text-[#15150F] font-fraunces">
                Yours.
              </span>
            </h2>

            {/* Narrative Subtitle */}
            <p className="mt-3 sm:mt-4 text-[13.5px] sm:text-[14px] leading-relaxed text-[#554E45] font-sans max-w-xl">
              From the first conversation to the final fitting, our process is
              designed to be personal, seamless and enjoyable — with every detail
              handled with care.
            </p>

            {/* ── 4-STEP PROCESS GRID ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-7 sm:mt-9">
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} className="flex flex-col group">
                  {/* Step Number + Connecting Gold Rule */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-fraunces text-base sm:text-lg text-[#B98A2E] font-normal">
                      {step.number}
                    </span>
                    <span className="h-[1px] flex-1 bg-[#B98A2E]/40" />
                  </div>

                  {/* Title */}
                  <h3 className="font-fraunces text-sm sm:text-base font-normal text-[#15150F] leading-tight mb-2.5 min-h-[2.25rem] flex items-center">
                    {step.title}
                  </h3>

                  {/* Step Thumbnail Photo */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#201D19] shadow-xs group-hover:shadow-md transition-all duration-300">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 180px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-[11px] sm:text-[11.5px] text-[#6E685E] font-sans leading-relaxed mt-2.5">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* ── BOTTOM ROW: CTA BUTTON & BESPOKE BY DESIGN ACCENT ── */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              {/* Call To Action */}
              <Link
                href="/process"
                className="inline-flex items-center gap-3 bg-[#0E3B2E] hover:bg-[#08281E] text-[#FBF9F4] px-8 sm:px-9 py-3.5 text-[11px] sm:text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:border-[#B98A2E]/60 border border-transparent group"
              >
                <span>Explore the Process</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#B98A2E]" />
              </Link>

              {/* Bottom Right: Gold Wire Curves + 'Bespoke by Design' */}
              <div className="relative self-end sm:self-auto flex flex-col items-end">
                {/* Golden Arcs SVG */}
                <div
                  className="absolute -right-6 sm:-right-10 -bottom-6 w-36 sm:w-48 h-24 sm:h-32 pointer-events-none opacity-40 select-none overflow-visible"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 200 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-[#B98A2E]"
                  >
                    <path
                      d="M0 120 C60 90 130 60 200 0"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    />
                    <path
                      d="M30 120 C90 95 150 70 200 30"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col items-end text-right">
                  <span className="text-[9.5px] sm:text-[10px] tracking-[0.24em] uppercase text-[#736C61] font-sans font-medium">
                    Bespoke
                  </span>
                  <span className="text-[9.5px] sm:text-[10px] tracking-[0.24em] uppercase text-[#736C61] font-sans font-medium">
                    By Design
                  </span>
                  <span className="h-[1.5px] w-7 bg-[#B98A2E]/70 mt-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
