"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Scissors, Ruler, Sparkles, CheckCircle2 } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    stage: "STAGE 01",
    title: "Creative Consultation",
    desc: "A private 1-on-1 session to define your silhouette, fabric palette, neckline contours, and occasion moodboard.",
    icon: Sparkles,
  },
  {
    step: "02",
    stage: "STAGE 02",
    title: "24-Point Measurement",
    desc: "Comprehensive anatomical body dimensions captured in our Accra atelier or through guided private virtual appointment.",
    icon: Ruler,
  },
  {
    step: "03",
    stage: "STAGE 03",
    title: "Muslin Toile & Basted Fitting",
    desc: "A bespoke toile fitting in unbleached cotton muslin to sculpt drape, boning channels, and waist compression before cutting precious silks.",
    icon: Scissors,
  },
  {
    step: "04",
    stage: "STAGE 04",
    title: "Hand-Embroidery & Finish",
    desc: "Up to 140 artisanal hours anchoring authentic Bonwire Kente geometric silks, metallic lurex threads, and hand-finished blind hems.",
    icon: CheckCircle2,
  },
];

export default function BespokeProcessPreview() {
  return (
    <section
      id="process"
      className="relative z-10 bg-[#FAF8F3] text-[#15150F] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-16 border-t border-[#E4ECE7]"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b border-[#E4ECE7] mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B98A2E] mb-2">
              <span className="h-[1px] w-6 bg-[#B98A2E]" />
              <span>Section 05 &bull; Bespoke Protocol</span>
            </div>

            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#15150F] leading-[1.08]">
              The Four-Stage <br />
              <span className="italic font-normal text-[#0E3B2E]">Bespoke Journey.</span>
            </h2>
          </div>

          <p className="mt-4 lg:mt-0 text-xs sm:text-sm text-[#15150F]/70 font-light leading-relaxed max-w-md">
            No off-the-rack sizing, no replicated patterns. Every commission is individually
            pattern-drafted, fitted in muslin toile, and handcrafted to your posture and silhouette.
          </p>
        </div>

        {/* ── 4 STAGES GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative p-6 sm:p-7 bg-white border border-[#E4ECE7] hover:border-[#B98A2E]/60 transition-all duration-300 rounded-[2px] shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs tracking-widest text-[#B98A2E] font-medium">
                      {step.stage}
                    </span>
                    <Icon size={16} className="text-[#0E3B2E] opacity-60 group-hover:opacity-100 group-hover:text-[#B98A2E] transition-colors" />
                  </div>

                  <h3 className="font-fraunces text-xl font-normal text-[#15150F] mb-3 leading-snug group-hover:text-[#0E3B2E] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#15150F]/70 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E4ECE7]/60 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[#B98A2E]">
                  <span>Step {step.step} of 04</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── LEAD TIME & PROTOCOL LINK ── */}
        <div className="mt-10 pt-6 border-t border-[#E4ECE7] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#15150F]/60 tracking-wider uppercase font-mono">
            Standard lead time: 4 to 8 weeks prior to event date &bull; Express commissions available
          </p>
          <Link
            href="/process"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#0E3B2E] hover:text-[#B98A2E] transition-colors"
          >
            <span>Explore Complete 7-Step Protocol</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
