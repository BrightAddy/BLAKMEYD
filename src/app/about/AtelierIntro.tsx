"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Sparkles, Scissors, Layers } from "lucide-react";

export default function AtelierIntro() {
  return (
    <section
      id="introduction"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-12 overflow-hidden border-t border-[#B98A2E]/20"
    >
      {/* ── AMBIENT LUXURY GLOW & TEXTURAL ACCENTS ── */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(185,138,46,0.07),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,59,46,0.05),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute top-6 right-8 lg:right-20 text-[120px] sm:text-[180px] lg:text-[220px] font-fraunces font-light text-[#0E3B2E]/[0.025] select-none pointer-events-none leading-none -z-0"
        aria-hidden="true"
      >
        BM
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* ── MAIN EDITORIAL SPLIT: TEXT (LEFT) + CLEAN ALIGNED GALLERY (RIGHT) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* ════════ LEFT COLUMN: HEADLINE, MANIFESTO, METRICS, CTAS ════════ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6"
          >
            {/* Compact Eyebrow */}
            <div className="flex items-center gap-2.5 text-[10px] sm:text-[10.5px] font-semibold tracking-[0.26em] uppercase text-[#B98A2E]">
              <span className="h-[1px] w-5 bg-[#B98A2E]" />
              <span>Atelier Manifesto &bull; Accra</span>
            </div>

            {/* Monumental Editorial Headline */}
            <div>
              <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-[3.35rem] font-light tracking-tight text-[#15150F] leading-[1.08]">
                Where Ancestral Lineage Meets{" "}
                <span className="italic font-normal text-[#0E3B2E] block sm:inline">
                  Architectural Form.
                </span>
              </h2>
            </div>

            {/* Haute Couture Quote */}
            <div className="relative pl-5 py-0.5 border-l-2 border-[#B98A2E]/50">
              <p className="font-fraunces text-base sm:text-lg italic text-[#15150F]/90 font-light leading-relaxed">
                &ldquo;We do not construct off-the-rack garments. We sculpt heirloom identities. 
                Each commission is drafted once, cut for a single anatomy, and anchored in centuries of Ghanaian textile mastery.&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-2 text-[10.5px] tracking-[0.2em] font-medium text-[#B98A2E] uppercase">
                <span>Creative Direction, Blak Meyd Atelier</span>
              </div>
            </div>

            {/* Brand Narrative */}
            <p className="text-xs sm:text-sm text-[#15150F]/75 font-light leading-relaxed">
              Rooted in the royal weaving lineage of Bonwire in Ashanti and guided by precision anatomical 
              corsetry, Blak Meyd translates authentic West African luxury into sculptural garments 
              for life&rsquo;s most defining occasions. Zero standardized sizing. Single-client exclusivity.
            </p>

            {/* Key Atelier Markers */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#E4ECE7]">
              <div>
                <span className="block font-fraunces text-lg sm:text-xl text-[#0E3B2E] font-normal">24-Pt</span>
                <span className="block text-[9.5px] uppercase tracking-wider text-[#15150F]/60 mt-0.5 font-mono">Anatomical Fit</span>
              </div>
              <div>
                <span className="block font-fraunces text-lg sm:text-xl text-[#0E3B2E] font-normal">Bonwire</span>
                <span className="block text-[9.5px] uppercase tracking-wider text-[#15150F]/60 mt-0.5 font-mono">Royal Weave</span>
              </div>
              <div>
                <span className="block font-fraunces text-lg sm:text-xl text-[#0E3B2E] font-normal">140+</span>
                <span className="block text-[9.5px] uppercase tracking-wider text-[#15150F]/60 mt-0.5 font-mono">Artisanal Hours</span>
              </div>
            </div>

            {/* Discovery CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#0E3B2E] text-[#FBF9F4] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#B98A2E] transition-all rounded-[2px] shadow-sm hover:shadow-[0_4px_20px_rgba(185,138,46,0.3)]"
              >
                <span>The Blak Meyd Story</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/process"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#15150F]/75 hover:text-[#0E3B2E] transition-colors py-2"
              >
                <span>Bespoke Protocol</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* ════════ RIGHT COLUMN: CURATED ATELIER TRIPTYCH (ALIGNED & COHESIVE) ════════ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-stretch"
          >
            {/* Primary Portrait Card (7 cols on sm/lg) */}
            <div className="sm:col-span-7 relative min-h-[380px] sm:min-h-[460px] overflow-hidden bg-[#181411] border border-[#E4ECE7] shadow-lg rounded-[2px] group">
              <Image
                src="/images/atelier-intro-portrait.jpg"
                alt="Blak Meyd Bespoke Kente Gown photographed inside the Accra Atelier"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 32vw"
                className="object-cover object-top transition-all duration-1000 group-hover:scale-105"
                priority
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

              {/* Gold Filigree Micro-Border */}
              <div className="absolute inset-3 border border-white/20 pointer-events-none transition-colors duration-500 group-hover:border-[#B98A2E]/50" />

              {/* Top Status Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-2.5 py-1 bg-[#14100D]/90 backdrop-blur-md border border-[#B98A2E]/50 text-white rounded-[2px] shadow-md">
                <Scissors size={11} className="text-[#B98A2E]" />
                <span className="text-[9px] tracking-[0.2em] font-mono text-[#E4ECE7] uppercase">
                  1-of-1 Bespoke Pattern
                </span>
              </div>

              {/* Bottom Lookbook Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between text-white">
                <div>
                  <span className="text-[9.5px] font-mono tracking-widest text-[#B98A2E] uppercase block">
                    Accra Atelier Look 04
                  </span>
                  <h4 className="font-fraunces text-sm sm:text-base text-white font-normal">
                    Bonwire Kente Peplum
                  </h4>
                </div>
                <span className="text-[8.5px] font-mono text-white/70 tracking-widest uppercase border border-white/20 px-2 py-0.5 bg-black/40">
                  No. 248
                </span>
              </div>
            </div>

            {/* Complementary Dual Stack (5 cols on sm/lg) */}
            <div className="sm:col-span-5 grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
              {/* Detail 1: Embroidery */}
              <div className="relative min-h-[180px] sm:min-h-[220px] overflow-hidden bg-[#181411] border border-[#E4ECE7] shadow-sm rounded-[2px] group">
                <Image
                  src="/images/craftsmanship.jpg"
                  alt="Artisan hands embroidering gold bullion and emerald beads"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 18vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-2.5 border border-white/15 pointer-events-none group-hover:border-[#B98A2E]/40 transition-colors" />

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[9px] font-mono tracking-wider uppercase">
                  <span className="flex items-center gap-1">
                    <Sparkles size={10} className="text-[#B98A2E]" />
                    <span>Bullion</span>
                  </span>
                  <span className="text-[#B98A2E] font-semibold">140+ Hrs</span>
                </div>
              </div>

              {/* Detail 2: Swatches */}
              <div className="relative min-h-[180px] sm:min-h-[220px] overflow-hidden bg-[#181411] border border-[#E4ECE7] shadow-sm rounded-[2px] group">
                <Image
                  src="/images/atelier-swatches.jpg"
                  alt="Authentic Bonwire Kente swatches and tailor tools on cutting bench"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 18vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-2.5 border border-white/15 pointer-events-none group-hover:border-[#B98A2E]/40 transition-colors" />

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[9px] font-mono tracking-wider uppercase">
                  <span className="flex items-center gap-1">
                    <Layers size={10} className="text-[#B98A2E]" />
                    <span>Bonwire</span>
                  </span>
                  <span className="text-white/80">Ashanti</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
