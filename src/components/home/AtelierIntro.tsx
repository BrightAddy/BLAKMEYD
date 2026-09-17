"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AtelierIntro() {
  return (
    <section
      id="introduction"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-[#B98A2E]/20"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── SECTION HEADER & MANIFESTO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline pb-16 border-b border-[#E4ECE7]">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#B98A2E]">
              Section 01 / Atelier Introduction
            </span>
            <h2 className="font-fraunces text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#15150F] mt-4 leading-[1.12]">
              A Dialogue Between <br />
              <span className="italic font-normal text-[#0E3B2E]">Ancestral Weave</span> <br />
              & Modern Silhouette.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="font-fraunces text-xl sm:text-2xl italic text-[#15150F]/90 font-light leading-relaxed mb-6">
              &ldquo;We do not merely construct gowns; we sculpt heirloom identities. 
              Each bespoke commission is drafted once, cut for a single body, and 
              anchored in centuries of Ghanaian textile mastery.&rdquo;
            </p>
            <p className="text-sm text-[#15150F]/70 font-light leading-relaxed max-w-2xl">
              Rooted in the royal weaving traditions of Bonwire and guided by precision haute couture 
              pattern-making, Blak Meyd translates authentic West African luxury into sculptural 
              garments for life&rsquo;s most defining occasions. No off-the-rack sizing. No replicated patterns.
            </p>
          </div>
        </div>

        {/* ── ASYMMETRICAL EDITORIAL SPREAD ── */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Full-Height Model in Atelier */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0E3B2E]/5 border border-[#E4ECE7]">
              <Image
                src="/images/atelier-intro-portrait.jpg"
                alt="Blak Meyd Bespoke Kente Gown photographed in the Accra Atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-1000 ease-out hover:scale-[1.02]"
                priority
              />
            </div>

            {/* Editorial Caption */}
            <div className="mt-4 flex items-center justify-between text-[11px] text-[#15150F]/60 tracking-wider uppercase">
              <span>Look 04 &middot; Bonwire Kente Peplum Column</span>
              <span>Accra Atelier</span>
            </div>
          </div>

          {/* Right Column: Craft Details & Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
            {/* Workbench Detail Image */}
            <div className="relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0E3B2E]/5 border border-[#E4ECE7]">
                <Image
                  src="/images/atelier-swatches.jpg"
                  alt="Tailor workbench with authentic Bonwire Kente swatches and drafting tools"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3 text-[11px] text-[#15150F]/60 tracking-wider uppercase">
                Plate 01 &middot; Muslin Toile Draping &amp; Bonwire Weft Calibration
              </div>
            </div>

            {/* 3 Pillars of Blak Meyd Bespoke */}
            <div className="space-y-8 pt-4 border-t border-[#E4ECE7]">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                <span className="sm:col-span-2 font-mono text-xs text-[#B98A2E] tracking-widest font-medium">
                  01 / FIT
                </span>
                <div className="sm:col-span-10">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-[#15150F]">
                    24-Point Anatomical Pattern Drafting
                  </h3>
                  <p className="mt-1 text-xs text-[#15150F]/70 font-light leading-relaxed">
                    Every garment originates from an individual muslin toile fitting. We measure 
                    torso incline, shoulder slope, and natural waist compression to achieve a bespoke contour impossible in prêt-à-porter.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                <span className="sm:col-span-2 font-mono text-xs text-[#B98A2E] tracking-widest font-medium">
                  02 / LOOM
                </span>
                <div className="sm:col-span-10">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-[#15150F]">
                    Bonwire Royal Weave Provenance
                  </h3>
                  <p className="mt-1 text-xs text-[#15150F]/70 font-light leading-relaxed">
                    Directly commissioned from master weavers in Ashanti. Each warp and weft encodes 
                    centuries of geometric proverbs, woven exclusively from raw silk and metallic lurex threads.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                <span className="sm:col-span-2 font-mono text-xs text-[#B98A2E] tracking-widest font-medium">
                  03 / TIME
                </span>
                <div className="sm:col-span-10">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-[#15150F]">
                    Strict Quarterly Atelier Capacity
                  </h3>
                  <p className="mt-1 text-xs text-[#15150F]/70 font-light leading-relaxed">
                    We accept a deliberate, strictly capped volume of bespoke commissions each season 
                    to guarantee that our master tailors dedicate up to 140 uninterrupted hours per gown.
                  </p>
                </div>
              </div>
            </div>

            {/* Read About Link */}
            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] font-semibold text-[#0E3B2E] hover:text-[#B98A2E] transition-colors"
              >
                <span>Discover The Blak Meyd Story &amp; Philosophy</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
