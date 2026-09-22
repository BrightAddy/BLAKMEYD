"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";

interface StepCard {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

const CARDS: StepCard[] = [
  {
    number: "01",
    title: "Personal Consultation",
    description: "We listen, understand your style, occasion and vision.",
    image: "/images/experience/card-01.jpg",
    alt: "Personal bespoke consultation session with Ghanaian designer and client",
    href: "/book",
  },
  {
    number: "02",
    title: "Custom Design",
    description: "Unique designs tailored exclusively for you.",
    image: "/images/experience/card-02.jpg",
    alt: "Hand sketching custom haute couture gown blueprint on archival paper",
    href: "/process",
  },
  {
    number: "03",
    title: "Exceptional Craftsmanship",
    description: "Meticulous attention to detail using premium materials.",
    image: "/images/experience/card-03.jpg",
    alt: "Artisan hands embroidering pearls and crystals onto couture silk",
    href: "/about",
  },
  {
    number: "04",
    title: "A Perfect Fit",
    description: "Multiple fittings for a flawless, confidence-boosting result.",
    image: "/images/experience/card-04.jpg",
    alt: "Client in mirror during bespoke gown fitting with designer",
    href: "/process",
  },
];

export default function BlakMeydExperience() {
  return (
    <section id="experience" className="relative z-10 w-full overflow-hidden bg-[#FAF8F3]">
      {/* ════════ TOP SECTION: ARCHED ATELIER FITTING & MANIFESTO ════════ */}
      <div className="relative w-full overflow-hidden border-t border-[#B98A2E]/20 bg-[#FAF8F3]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px] items-stretch">
          
          {/* ── Left Column: Editorial Manifesto (5 cols on lg, 6 cols on xl) ── */}
          <div className="lg:col-span-6 xl:col-span-5 px-6 sm:px-12 lg:px-14 xl:px-18 py-12 sm:py-16 flex flex-col justify-between relative z-20">
            <div className="space-y-4 max-w-lg">
              {/* Top Eyebrows */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[10.5px] font-semibold tracking-[0.28em] uppercase text-[#15150F]/70">
                  <span>The Blak Meyd</span>
                  <span className="h-[1px] w-14 sm:w-20 bg-[#B98A2E]/40" />
                </div>
                <span className="block text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B98A2E]">
                  More Than Fashion
                </span>
              </div>

              {/* Stacked Two-Line Headline */}
              <h2 className="font-fraunces text-5xl sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-light text-[#15150F] tracking-tight leading-[0.94]">
                The <br />
                <span className="font-normal text-[#15150F]">Experience</span>
              </h2>

              {/* Sub-eyebrow */}
              <span className="block text-[10px] sm:text-[10.5px] font-mono tracking-[0.26em] text-[#B98A2E] uppercase pt-1">
                A Journey As Unique As You
              </span>

              {/* Narrative Paragraph */}
              <p className="text-xs sm:text-[13px] text-[#15150F]/75 font-light leading-relaxed pt-1">
                At Blak Meyd, we believe every piece tells a story &mdash; your story. 
                Our experience is built on genuine connection, thoughtful collaboration and exceptional 
                craftsmanship, ensuring you feel seen, confident and truly special from start to finish.
              </p>

              {/* Dual Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-5 sm:gap-6">
                <Link
                  href="/process"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#151714] text-[#FBF9F4] text-xs font-mono uppercase tracking-[0.2em] font-medium hover:bg-[#B98A2E] hover:text-[#15150F] transition-all duration-300 rounded-[2px] shadow-sm hover:shadow-[0_4px_20px_rgba(185,138,46,0.3)]"
                >
                  <span>Explore Our Process</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-[#15150F]/85 hover:text-[#B98A2E] transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full border border-[#15150F]/25 flex items-center justify-center text-[#15150F] group-hover:border-[#B98A2E] group-hover:bg-[#B98A2E] group-hover:text-white transition-all shadow-xs">
                    <Play size={11} className="fill-current translate-x-0.5" />
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.22em]">Watch Our Story</span>
                </Link>
              </div>
            </div>

            {/* 3 Pillars Footer (01 PERSONAL | 02 INTENTIONAL | 03 UNFORGETTABLE) */}
            <div className="pt-8 mt-8 border-t border-[#E4ECE7] grid grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#B98A2E] block text-[10px] mb-0.5">01</span>
                <span className="uppercase tracking-widest text-[#15150F]/80 font-medium text-[10.5px]">Personal</span>
              </div>
              <div className="border-l border-[#E4ECE7] pl-4">
                <span className="text-[#B98A2E] block text-[10px] mb-0.5">02</span>
                <span className="uppercase tracking-widest text-[#15150F]/80 font-medium text-[10.5px]">Intentional</span>
              </div>
              <div className="border-l border-[#E4ECE7] pl-4">
                <span className="text-[#B98A2E] block text-[10px] mb-0.5">03</span>
                <span className="uppercase tracking-widest text-[#15150F]/80 font-medium text-[10.5px]">Unforgettable</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Dramatic Haute Couture Fitting Scene with Arched Curve ── */}
          <div className="lg:col-span-6 xl:col-span-7 relative min-h-[460px] sm:min-h-[520px] lg:min-h-full overflow-hidden group">
            {/* Background Fitting Photography */}
            <Image
              src="/images/experience/experience-bronze-hero.jpg"
              alt="Haute couture fitting session in Blak Meyd Accra atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[68%_center] sm:object-center transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[1.02] contrast-[1.03]"
              priority
            />

            {/* Arched Convex Curve Transition from Cream to Dark Photo */}
            <div 
              className="hidden lg:block absolute inset-y-0 left-0 w-32 xl:w-44 pointer-events-none z-10"
              style={{
                background: "linear-gradient(to right, #FAF8F3 0%, rgba(250,248,243,0.85) 45%, rgba(250,248,243,0.3) 75%, transparent 100%)",
                clipPath: "ellipse(70% 50% at 0% 50%)",
              }}
              aria-hidden="true"
            />
            
            {/* Soft left gradient falloff */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAF8F3] via-[#FAF8F3]/50 to-transparent pointer-events-none z-10" />

            {/* Dark bottom-vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

            {/* Fluid Gold Script Calligraphy in dark pocket: "Your Story Our Craft" */}
            <div className="absolute bottom-16 sm:bottom-20 left-8 sm:left-14 z-20 select-none pointer-events-none drop-shadow-md">
              <span 
                className="block text-4xl sm:text-5xl lg:text-[3.5rem] text-[#D4AF37] leading-none"
                style={{ fontFamily: "'Alex Brush', cursive, serif" }}
              >
                Your Story
              </span>
              <span 
                className="block text-4xl sm:text-5xl lg:text-[3.5rem] text-[#D4AF37] leading-none pl-10 sm:pl-14 pt-1"
                style={{ fontFamily: "'Alex Brush', cursive, serif" }}
              >
                Our Craft
              </span>
            </div>

            {/* Top-Right Vertical Typography Pillars */}
            <div className="absolute top-8 right-6 sm:right-8 z-20 text-right text-[8.5px] font-mono tracking-[0.32em] text-white/85 uppercase space-y-1.5 select-none drop-shadow-sm">
              <span>Ideas</span>
              <span className="block">Fabrics</span>
              <span className="block">Details</span>
              <span className="block">Craftsmanship</span>
              <span className="block">You</span>
              <span className="block h-[1px] w-6 bg-white/50 ml-auto mt-2" />
            </div>

            {/* Bottom-Right Location & Bespoke Label */}
            <div className="absolute bottom-8 right-6 sm:right-8 z-20 text-right text-[8.5px] font-mono tracking-[0.3em] text-white/85 uppercase space-y-1 select-none drop-shadow-sm">
              <span>Bespoke</span>
              <span className="block">Couture</span>
              <span className="block">Accra</span>
              <span className="block h-[1px] w-6 bg-white/50 ml-auto mt-1" />
            </div>
          </div>
        </div>
      </div>

      {/* ════════ MIDDLE SECTION: 4 PROCESS CARDS ON LIGHT CREAM ════════ */}
      <div className="bg-[#FAF8F3] text-[#15150F] pt-12 sm:pt-16 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 border-t border-[#E4ECE7]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 items-stretch">
            {CARDS.map((card, idx) => (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between"
              >
                {/* Image Thumbnail with subtle luxury frame */}
                <Link href={card.href} className="block relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-black/5 border border-[#E4ECE7] group-hover:border-[#B98A2E]/60 transition-all duration-300 shadow-xs group-hover:shadow-md">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[1.01]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </Link>

                {/* Card Meta Row: Number on left, Circled arrow on right */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#B98A2E] font-mono text-xs tracking-widest">
                    <span>{card.number}</span>
                    <span className="h-[1px] w-7 bg-[#B98A2E]/50" />
                  </div>

                  <Link 
                    href={card.href}
                    aria-label={`Learn more about ${card.title}`}
                    className="w-7 h-7 rounded-full border border-[#15150F]/20 flex items-center justify-center text-[#15150F] group-hover:border-[#B98A2E] group-hover:bg-[#B98A2E] group-hover:text-white transition-all shadow-2xs"
                  >
                    <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Card Title & Description */}
                <div className="pt-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-fraunces text-xl font-normal text-[#15150F] group-hover:text-[#0E3B2E] transition-colors leading-snug mb-1.5">
                      <Link href={card.href}>{card.title}</Link>
                    </h3>

                    <p className="text-xs text-[#15150F]/70 font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════ BOTTOM BAR: DARK DRAPED SILK SATIN WITH GOLD MONOGRAM & QUOTE ════════ */}
      <div 
        className="relative z-10 text-[#FBF9F4] py-10 sm:py-12 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-[#B98A2E]/30"
        style={{
          backgroundColor: "#0A0D0B",
          backgroundImage: "radial-gradient(ellipse at center top, rgba(30,43,34,0.6) 0%, #080A09 85%)",
        }}
      >
        <div className="mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
          {/* Left: Gold Monogram Logo + Client Testimonial */}
          <div className="flex items-center gap-6 sm:gap-8 max-w-3xl">
            {/* Luxury Gold Monogram Symbol */}
            <div className="relative shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-[2px] border border-[#B98A2E]/40 bg-gradient-to-br from-[#1E2B22] to-[#0A0D0B] shadow-md">
              <span className="font-fraunces text-2xl sm:text-3xl font-light text-[#D4AF37] select-none tracking-tighter">
                B
              </span>
              <span className="absolute -top-1 -right-1 text-[8px] text-[#B98A2E] select-none">+</span>
            </div>

            {/* Testimonial Quote */}
            <div>
              <p className="font-fraunces italic text-sm sm:text-base text-white/95 font-light leading-relaxed">
                &ldquo;From the first conversation to the final fitting, Blak Meyd made me feel seen, heard, and truly special.&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="h-[1px] w-6 bg-[#B98A2E]/60" />
                <span className="text-[9.5px] font-mono tracking-widest text-[#B98A2E] uppercase">
                  A Happy Client
                </span>
              </div>
            </div>
          </div>

          {/* Right: Brand Core Values */}
          <div className="flex items-center gap-3 text-white/60 text-[10px] sm:text-[11px] font-mono tracking-[0.24em] uppercase shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
            <span className="h-[1px] w-8 sm:w-12 bg-[#B98A2E]/40" />
            <span>People &nbsp;/&nbsp; Passion &nbsp;/&nbsp; Purpose</span>
          </div>
        </div>
      </div>
    </section>
  );
}
