"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HomeExperience() {
  return (
    <section
      id="experience"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] overflow-hidden border-t border-[#B98A2E]/20"
    >
      {/* ════════ DESKTOP & TABLET MASTER EDITORIAL SPREAD ════════ */}
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[750px] lg:min-h-[820px] xl:min-h-[860px] relative">
        {/* ────────────────────────────────────────────────────────
            COLUMN 1: LEFT CREAM EDITORIAL MANIFESTO (5 of 12 cols)
            With graceful curved SVG boundary extending into photo
            ──────────────────────────────────────────────────────── */}
        <div className="lg:col-span-5 bg-[#FBF9F4] p-8 sm:p-12 lg:p-10 xl:p-14 flex flex-col justify-between relative z-10">
          {/* Top: Eyebrow + Monumental Headline + Keywords */}
          <div className="space-y-4 sm:space-y-5 max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B98A2E]">
              <span className="h-[1px] w-6 bg-[#B98A2E]" />
              <span>The Blak Meyd Experience</span>
            </div>

            {/* Headline */}
            <h2 className="font-fraunces text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-light tracking-tight text-[#15150F] leading-[1.05]">
              More Than <br />
              Fashion. <br />
              <span className="italic font-normal text-[#C5A265]">
                A Piece Created <br />
                Around You.
              </span>
            </h2>

            {/* Keyword Spacing */}
            <p className="text-[10px] sm:text-[10.5px] font-mono tracking-[0.28em] uppercase text-[#8C7355] pt-1 pb-2">
              PEOPLE &nbsp;/&nbsp; PASSION &nbsp;/&nbsp; PURPOSE
            </p>

            {/* Three Numbered Pillars */}
            <div className="space-y-4 pt-1">
              {/* 01 Personal */}
              <div className="flex items-start gap-3.5 group">
                <div className="flex items-baseline gap-2 pt-0.5 shrink-0">
                  <span className="font-fraunces text-base sm:text-lg text-[#C5A265] font-normal">
                    01
                  </span>
                  <span className="text-[#C5A265]/40 text-sm font-light">|</span>
                </div>
                <div>
                  <h3 className="font-fraunces text-base sm:text-lg font-normal text-[#15150F]">
                    Personal <span className="font-light text-[#C5A265]">—</span>
                  </h3>
                  <p className="text-xs font-semibold text-[#15150F] mt-0.5">
                    Your story comes first.
                  </p>
                  <p className="text-xs text-[#15150F]/70 font-light mt-0.5 leading-relaxed">
                    We take time to understand who you are, your style, and the moments that matter most.
                  </p>
                </div>
              </div>

              {/* 02 Intentional */}
              <div className="flex items-start gap-3.5 group">
                <div className="flex items-baseline gap-2 pt-0.5 shrink-0">
                  <span className="font-fraunces text-base sm:text-lg text-[#C5A265] font-normal">
                    02
                  </span>
                  <span className="text-[#C5A265]/40 text-sm font-light">|</span>
                </div>
                <div>
                  <h3 className="font-fraunces text-base sm:text-lg font-normal text-[#15150F]">
                    Intentional <span className="font-light text-[#C5A265]">—</span>
                  </h3>
                  <p className="text-xs font-semibold text-[#15150F] mt-0.5">
                    Purpose in every detail.
                  </p>
                  <p className="text-xs text-[#15150F]/70 font-light mt-0.5 leading-relaxed">
                    Every design decision is made with meaning — from concept to fabric, fit to final finish.
                  </p>
                </div>
              </div>

              {/* 03 Exceptional */}
              <div className="flex items-start gap-3.5 group">
                <div className="flex items-baseline gap-2 pt-0.5 shrink-0">
                  <span className="font-fraunces text-base sm:text-lg text-[#C5A265] font-normal">
                    03
                  </span>
                  <span className="text-[#C5A265]/40 text-sm font-light">|</span>
                </div>
                <div>
                  <h3 className="font-fraunces text-base sm:text-lg font-normal text-[#15150F]">
                    Exceptional <span className="font-light text-[#C5A265]">—</span>
                  </h3>
                  <p className="text-xs font-semibold text-[#15150F] mt-0.5">
                    Uncompromising mastery.
                  </p>
                  <p className="text-xs text-[#15150F]/70 font-light mt-0.5 leading-relaxed">
                    Our craftsmanship brings together heritage, precision and artistry, creating pieces that stand the test of time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Signature Calligraphy & Atelier Tag */}
          <div className="mt-8 pt-4">
            <div className="flex items-center">
              <div>
                <span
                  className="block text-4xl sm:text-5xl text-[#C5A265] leading-none select-none drop-shadow-xs"
                  style={{ fontFamily: "'Alex Brush', cursive, serif" }}
                >
                  Your Story
                </span>
                <span
                  className="block text-4xl sm:text-5xl text-[#C5A265] leading-none pl-8 sm:pl-10 pt-1 select-none drop-shadow-xs"
                  style={{ fontFamily: "'Alex Brush', cursive, serif" }}
                >
                  Our Craft
                </span>
              </div>
              <div className="h-[1px] flex-1 bg-[#C5A265]/40 ml-4 sm:ml-6" />
            </div>

            <p className="text-[9px] sm:text-[9.5px] font-mono tracking-[0.24em] uppercase text-[#15150F]/60 mt-3">
              BESPOKE &nbsp;COUTURE &nbsp;ATELIER &nbsp;/&nbsp; ACCRA
            </p>
          </div>

          {/* ── CONVEX CURVED SVG OVERLAY ON RIGHT EDGE (DESKTOP) ── */}
          <svg
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            className="hidden lg:block absolute top-0 right-0 translate-x-[98%] h-full w-14 xl:w-20 pointer-events-none z-20 fill-[#FBF9F4]"
            aria-hidden="true"
          >
            <path d="M0,0 Q100,500 0,1000 L0,1000 L0,0 Z" />
            <path
              d="M0,0 Q100,500 0,1000"
              fill="none"
              stroke="#C5A265"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
          </svg>
        </div>

        {/* ────────────────────────────────────────────────────────
            COLUMN 2: CENTER HAUTE COUTURE MODEL PHOTOGRAPHY (4 cols)
            ──────────────────────────────────────────────────────── */}
        <div className="lg:col-span-4 relative min-h-[460px] sm:min-h-[580px] lg:min-h-full bg-[#0E3B2E] overflow-hidden">
          <Image
            src="/images/experience/model-portrait-hd.jpg"
            alt="Blak Meyd bespoke haute couture gown fitting in Accra salon"
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-cover object-[center_20%] transition-transform duration-1000 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Upper Right Badge on Emerald Wall */}
          <div className="absolute top-6 sm:top-8 right-6 z-10 text-right">
            <span className="block text-[9.5px] sm:text-[10px] font-mono tracking-[0.28em] text-[#FBF9F4] uppercase leading-tight font-medium drop-shadow-sm">
              Artistry <br />
              In Every <br />
              Stitch
            </span>
            <span className="inline-block h-[1px] w-6 bg-[#B98A2E] mt-2" />
          </div>
        </div>

        {/* ────────────────────────────────────────────────────────
            COLUMN 3: RIGHT EDITORIAL SYSTEM (3 cols)
            Top narrative & stats + Middle embroidery + Bottom bronze
            ──────────────────────────────────────────────────────── */}
        <div className="lg:col-span-3 flex flex-col justify-between bg-[#FBF9F4] relative">
          {/* Top Panel: Narrative & Metrics */}
          <div className="p-6 sm:p-8 lg:p-7 xl:p-8 bg-[#FBF9F4]">
            <p className="text-xs sm:text-[12.5px] text-[#15150F]/80 font-light leading-relaxed">
              At Blak Meyd, bespoke is not merely about transformation — it is an intimate collaboration.
              Rooted in Ghanaian heritage and contemporary artistry, we create pieces for a single client,
              designed to honour your individuality and life&rsquo;s most meaningful moments.
            </p>

            {/* 3 Metrics Row */}
            <div className="pt-6 mt-6 border-t border-[#E4ECE7] grid grid-cols-3 gap-2 text-center">
              <div>
                <span className="font-fraunces text-2xl xl:text-3xl text-[#15150F] font-light block">
                  24+
                </span>
                <span className="text-[8.5px] xl:text-[9px] font-mono tracking-wider text-[#15150F]/60 uppercase block mt-1">
                  Anatomical Fit
                </span>
              </div>
              <div>
                <span className="font-fraunces text-2xl xl:text-3xl text-[#15150F] font-light block">
                  140+
                </span>
                <span className="text-[8.5px] xl:text-[9px] font-mono tracking-wider text-[#15150F]/60 uppercase block mt-1">
                  Artisanal Hours
                </span>
              </div>
              <div>
                <span className="font-fraunces text-2xl xl:text-3xl text-[#15150F] font-light block">
                  1:1
                </span>
                <span className="text-[8.5px] xl:text-[9px] font-mono tracking-wider text-[#15150F]/60 uppercase block mt-1">
                  Client Focus
                </span>
              </div>
            </div>
          </div>

          {/* Middle Panel: Hand Embroidery Close-Up */}
          <div className="relative aspect-[16/7] lg:aspect-[16/8] xl:aspect-[16/7.5] w-full bg-[#15150F] overflow-hidden group">
            <Image
              src="/images/experience/hand-embroidery-hd.jpg"
              alt="Close up artisan hands hand-embroidering couture embellishments"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {/* Overlay Inset Text */}
            <div className="absolute top-4 sm:top-5 left-5 z-10 text-left">
              <span className="text-[9px] sm:text-[9.5px] font-mono tracking-[0.24em] text-[#FBF9F4] uppercase leading-tight block font-medium">
                The <br />
                Details <br />
                Make The <br />
                Difference
              </span>
            </div>
          </div>

          {/* Bottom Panel: Rich Bronze Texture & Quote */}
          <div className="relative p-6 sm:p-8 lg:p-6 xl:p-8 overflow-hidden bg-[#241A10] text-[#FBF9F4] flex flex-col justify-between">
            <Image
              src="/images/experience/bronze-texture-hd.jpg"
              alt="Rich gold bronze satin texture"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover opacity-60 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#15100B] via-[#241A10]/90 to-[#2E2012]/80 pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <blockquote className="font-fraunces text-base sm:text-lg italic text-[#FBF9F4] font-light leading-snug">
                &ldquo;Crafted with intention. <br />
                Worn with purpose.&rdquo;
              </blockquote>

              <div className="h-[1px] w-6 bg-[#C5A265]/60" />
            </div>

            <div className="relative z-10 pt-4 text-right space-y-0.5 text-[8.5px] sm:text-[9px] font-mono tracking-[0.24em] text-[#C5A265] uppercase">
              <div>Heritage</div>
              <div>Craftsmanship</div>
              <div>Modern Femininity</div>
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────────
            OVERLAPPING ATELIER INSET CARD (CENTER-RIGHT DESKTOP)
            Framed sketch, brass shears, emerald silk swatch & logo
            ──────────────────────────────────────────────────────── */}
        <div className="hidden lg:block absolute bottom-8 xl:bottom-12 left-[58%] xl:left-[59%] -translate-x-1/2 z-30 w-[185px] xl:w-[215px] aspect-[4/4.8] rounded-[1px] border-2 border-white shadow-[0_15px_35px_rgba(0,0,0,0.35)] overflow-hidden bg-[#15150F] group">
          <Image
            src="/images/experience/sketch-swatch-card-hd.jpg"
            alt="Blak Meyd bespoke design illustration, gold shears and Bonwire emerald silk"
            fill
            sizes="220px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-black/10 pointer-events-none" />
        </div>
      </div>

      {/* Mobile-only Inset Showcase (ensuring mobile users also see the beautiful sketch) */}
      <div className="block lg:hidden px-6 pb-12 pt-2 bg-[#FBF9F4]">
        <div className="relative w-full max-w-sm mx-auto aspect-[4/3] rounded-[2px] border-2 border-white shadow-md overflow-hidden bg-[#15150F]">
          <Image
            src="/images/experience/sketch-swatch-card-hd.jpg"
            alt="Blak Meyd bespoke design illustration and silk swatch"
            fill
            sizes="(max-width: 640px) 100vw, 400px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
