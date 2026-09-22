"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Compass, Shield, Scissors, Clock, KeyRound } from "lucide-react";

const WHY_PILLARS = [
  {
    number: "01",
    title: "Ancestral Bonwire Provenance",
    highlight: "Heritage Integrity",
    description:
      "We do not purchase commercial printed cloth. Every strip of Kente is hand-loomed to order by master weavers in Bonwire, Ashanti, preserving sacred geometric proverbs and royal raw silks.",
    icon: Compass,
  },
  {
    number: "02",
    title: "24-Point Anatomical Precision",
    highlight: "Zero S/M/L Sizing",
    description:
      "Commercial sizing relies on standardized averages that flatter few. We capture 24 distinct anatomical coordinates—including spinal incline, shoulder slope, and rib compression.",
    icon: Scissors,
  },
  {
    number: "03",
    title: "Single-Client Pattern Archive",
    highlight: "1-of-1 Exclusivity",
    description:
      "Your blueprint is never reused for another patron. Once drafted, cut, and finalized, your pattern remains permanently registered under your private Blak Meyd client archive.",
    icon: Shield,
  },
  {
    number: "04",
    title: "140+ Artisanal Handcraft Hours",
    highlight: "Unhurried Luxury",
    description:
      "From internal canvas boning and silk blind hems to hand-stitched gold bullion and Czech crystal beadwork, our master tailors dedicate up to 140 uninterrupted hours to every single gown.",
    icon: Clock,
  },
  {
    number: "05",
    title: "Private Digital Client Portal",
    highlight: "Atelier Transparency",
    description:
      "Follow your commission in real time. Access confidential progress imagery, approve toile fittings, manage consultation schedules, and download digital certificates of authenticity.",
    icon: KeyRound,
  },
];

export default function WhyBlakMeyd() {
  return (
    <section
      id="why-blak-meyd"
      className="relative z-10 bg-[#0A1A14] text-[#FBF9F4] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-[#B98A2E]/20"
    >
      {/* ── AMBIENT EMERALD GLOW ── */}
      <div 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(185,138,46,0.06),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,59,46,0.2),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b border-[#B98A2E]/25 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B98A2E] mb-2">
              <span className="h-[1px] w-6 bg-[#B98A2E]" />
              <span>Section 08 &bull; The Atelier Distinction</span>
            </div>

            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#FBF9F4] leading-[1.08]">
              Why the World Chooses <br />
              <span className="italic font-normal text-[#B98A2E]">Blak Meyd Haute Couture.</span>
            </h2>
          </div>

          <p className="mt-6 lg:mt-0 text-xs sm:text-sm text-[#E4ECE7]/75 font-light leading-relaxed max-w-md">
            In an era of mass fashion, Blak Meyd stands as a citadel of West African craftsmanship. 
            Here is why our patrons trust us with life&rsquo;s most monumental milestones.
          </p>
        </div>

        {/* ── 5-PILLAR ASYMMETRICAL EDITORIAL GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isLarge = idx === 0 || idx === 3;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`p-7 sm:p-8 bg-[#10241C] border border-[#B98A2E]/20 hover:border-[#B98A2E]/60 transition-all duration-300 rounded-[2px] flex flex-col justify-between group shadow-lg ${
                  isLarge ? "lg:col-span-1.5" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs tracking-widest text-[#B98A2E] font-medium">
                      Pillar {pillar.number}
                    </span>
                    <Icon size={18} className="text-[#B98A2E] opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/50 block mb-1.5">
                    {pillar.highlight}
                  </span>

                  <h3 className="font-fraunces text-2xl font-light text-[#FBF9F4] mb-3 leading-snug group-hover:text-[#B98A2E] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#E4ECE7]/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40 group-hover:text-[#B98A2E] transition-colors">
                  <span>Guaranteed Standard</span>
                  <span className="tracking-widest uppercase">Verified &bull; BM</span>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: Direct Invitation */}
          <div className="p-7 sm:p-8 bg-gradient-to-br from-[#181411] to-[#0E3B2E] border border-[#B98A2E]/40 rounded-[2px] flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#B98A2E] font-medium block mb-4">
                The Atelier Pledge
              </span>
              <h3 className="font-fraunces text-2xl font-light text-[#FBF9F4] leading-snug mb-3">
                Experience the Craft in Person.
              </h3>
              <p className="text-xs text-[#E4ECE7]/80 font-light leading-relaxed">
                Step into our Accra salon for a fabric tactile tour, or arrange a private virtual consultation with our Creative Director.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#B98A2E]/30">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#B98A2E] hover:text-white transition-colors"
              >
                <span>Read Brand Philosophy</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
