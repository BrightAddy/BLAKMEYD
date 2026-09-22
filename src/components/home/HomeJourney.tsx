"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Quote, Sparkles, CheckCircle2 } from "lucide-react";

interface Step {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "CONSULTATION",
    tagline: "Vision & Silhouette",
    description: "An intimate dialogue to explore your event, moodboard, and fabric palette.",
    image: "/images/experience/step-01-consultation.jpg",
    badge: "Stage 01 · Private Dialogue",
  },
  {
    number: "02",
    title: "DESIGN",
    tagline: "Anatomy & Sketching",
    description: "24-point anatomical measurements and a bespoke illustration sculpted for your frame.",
    image: "/images/experience/step-02-sketching.jpg",
    badge: "Stage 02 · 1-of-1 Pattern",
  },
  {
    number: "03",
    title: "CREATION",
    tagline: "Loom & Muslin Toile",
    description: "Bonwire hand-loomed raw silk weaving and precision unbleached muslin structure.",
    image: "/images/craftsmanship.jpg",
    badge: "Stage 03 · Bonwire Silk",
  },
  {
    number: "04",
    title: "FITTING",
    tagline: "Sculpting & Boning",
    description: "Basted fitting in our Accra atelier or guided virtual fitting across the diaspora.",
    image: "/images/experience/step-04-fitting.jpg",
    badge: "Stage 04 · Anatomical Balance",
  },
  {
    number: "05",
    title: "YOUR PIECE",
    tagline: "Archival Delivery",
    description: "Hand-finished embroidery, heirloom pressing, and final salon unveiling.",
    image: "/images/experience/experience-hero.jpg",
    badge: "Stage 05 · The Heirloom",
  },
];

export default function HomeJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="journey"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-t border-[#E4ECE7] overflow-hidden"
    >
      {/* Subtle ambient luxury light */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_left,rgba(185,138,46,0.05),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E4ECE7] mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B98A2E] mb-2">
              <span className="h-[1px] w-6 bg-[#B98A2E]" />
              <span>The Bespoke Protocol</span>
            </div>

            <h2 className="font-fraunces text-3xl sm:text-5xl lg:text-[3.5rem] font-light tracking-tight text-[#15150F] leading-[1.06]">
              Your Journey
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-[#15150F]/70 font-light leading-relaxed max-w-lg">
              Every commission follows an intentional architectural progression from initial dialogue to final heirloom unveiling.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/process"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#0E3B2E] text-[#FBF9F4] text-xs font-mono uppercase tracking-[0.2em] font-medium hover:bg-[#B98A2E] transition-all rounded-[2px] shadow-sm hover:shadow-[0_4px_20px_rgba(185,138,46,0.3)]"
            >
              <span>Explore Our Process</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* ── 5-STEP HORIZONTAL EDITORIAL TIMELINE ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 mb-14 sm:mb-18">
          {STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 lg:p-4 xl:p-5 rounded-[2px] border transition-all duration-300 relative group flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#B98A2E] shadow-md ring-1 ring-[#B98A2E]/30"
                    : "bg-white/70 hover:bg-white border-[#E4ECE7] hover:border-[#B98A2E]/50 shadow-xs"
                }`}
              >
                {/* Top indicator bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                    isSelected ? "bg-[#B98A2E]" : "bg-transparent group-hover:bg-[#B98A2E]/40"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs tracking-widest text-[#B98A2E] font-medium">
                      {step.number}
                    </span>
                    <span className="text-[9px] font-mono tracking-wider text-[#15150F]/40 uppercase">
                      Step {idx + 1}/5
                    </span>
                  </div>

                  <h3 className="font-fraunces text-lg xl:text-xl font-normal text-[#15150F] group-hover:text-[#0E3B2E] transition-colors leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-[11px] font-mono text-[#0E3B2E] mt-1 font-medium tracking-wide">
                    {step.tagline}
                  </p>

                  <p className="text-xs text-[#15150F]/70 font-light mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E4ECE7]/60 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#15150F]/50">
                  <span>View Step</span>
                  <span className={`transition-transform duration-300 ${isSelected ? "text-[#B98A2E] translate-x-1" : "group-hover:translate-x-1"}`}>
                    &rarr;
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── DUAL EDITORIAL BLOCK: PROCESS VISUAL (LEFT) + EMOTIONAL TESTIMONIAL (RIGHT) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Interactive/Visual Process Anchor (6 cols) */}
          <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[420px] rounded-[2px] border border-[#E4ECE7] overflow-hidden bg-[#15150F] group shadow-md">
            <Image
              src={STEPS[activeStep].image}
              alt={`${STEPS[activeStep].title} - Blak Meyd Bespoke Haute Couture Atelier`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

            {/* Stage Badge */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#120E0B]/90 backdrop-blur-md border border-[#B98A2E]/50 text-white rounded-[2px] flex items-center gap-2">
              <Sparkles size={11} className="text-[#B98A2E]" />
              <span className="text-[9px] font-mono tracking-widest uppercase text-[#E4ECE7]">
                {STEPS[activeStep].badge}
              </span>
            </div>

            {/* Inset Step Caption */}
            <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#B98A2E] block mb-1">
                Atelier Protocol &bull; Step {STEPS[activeStep].number}
              </span>
              <h4 className="font-fraunces text-2xl sm:text-3xl text-white font-light">
                {STEPS[activeStep].title}
              </h4>
              <p className="text-xs text-white/80 font-light mt-1.5 max-w-md leading-relaxed">
                {STEPS[activeStep].description}
              </p>
            </div>
          </div>

          {/* Right Column: Emotional Testimonial as Journey Conclusion (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 bg-white rounded-[2px] border border-[#E4ECE7] shadow-md flex flex-col justify-between relative overflow-hidden">
            {/* Background luxury emblem */}
            <Quote
              size={120}
              className="absolute -bottom-6 -right-6 text-[#0E3B2E]/5 pointer-events-none"
              aria-hidden="true"
            />

            <div>
              {/* Eyebrow / Commission Meta */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E4ECE7] mb-6">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#B98A2E]">
                  <CheckCircle2 size={13} className="text-[#B98A2E]" />
                  <span>The Defining Moment &bull; Patron Story</span>
                </div>
                <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#0E3B2E] font-medium border border-[#0E3B2E]/20 px-2 py-0.5 bg-[#0E3B2E]/5">
                  Bespoke Kente Gown
                </span>
              </div>

              {/* Emotional Quote */}
              <blockquote className="font-fraunces text-lg sm:text-xl lg:text-2xl italic text-[#15150F]/90 font-light leading-relaxed mb-8">
                &ldquo;When I stepped into my traditional engagement gown, I wept. The Bonwire Kente wasn&rsquo;t just fabric—it felt alive, sculpted precisely to every contour of my spine. Guests flew in from London and could not stop speaking about the corsetry.&rdquo;
              </blockquote>
            </div>

            {/* Patron Attribution */}
            <div className="pt-6 border-t border-[#E4ECE7] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h4 className="font-fraunces text-lg font-normal text-[#15150F]">
                  Dr. Ama Poku-Boateng
                </h4>
                <p className="text-xs text-[#15150F]/65 font-light mt-0.5">
                  Bride &amp; Surgeon &bull; Traditional Engagement Ceremony
                </p>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#0E3B2E] mt-1 block">
                  Accra &amp; London
                </span>
              </div>

              <div className="text-right font-mono text-[10px] text-[#15150F]/50 uppercase tracking-widest">
                Lead Time: 6 Weeks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
