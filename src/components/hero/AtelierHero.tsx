"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

interface HeroSlide {
  id: string;
  number: string;
  image: string;
  alt: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  quote: string;
  panInitial: { x: string; y: string };
  panAnimate: { x: string; y: string };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "atelier-kente",
    number: "01",
    image: "/images/hero/atelier-hero-bg.jpg",
    alt: "Blak Meyd Haute Couture Atelier with signature emerald green and gold Ghanaian Kente gown",
    titleLine1: "WEAR",
    titleLine2: "YOUR STORY",
    subtitle: "BESPOKE COUTURE  •  TIMELESS ELEGANCE  •  UNIQUELY YOU",
    quote: "Custom Garments for Life's Most Meaningful Moments.",
    panInitial: { x: "-2.5%", y: "0%" },
    panAnimate: { x: "1.5%", y: "0%" },
  },
  {
    id: "ivory-pedestal",
    number: "02",
    image: "/images/hero/ivory-couture.jpg",
    alt: "Hand-sculpted ivory and gold bridal gown in the historical stone fitting gallery",
    titleLine1: "SACRED",
    titleLine2: "CRAFTSMANSHIP",
    subtitle: "HEIRLOOM SILKS  •  CORSETRY MASTERY  •  MADE IN ACCRA",
    quote: "Every stitch anchored by hand for generations to treasure.",
    panInitial: { x: "0%", y: "2%" },
    panAnimate: { x: "0%", y: "-1.5%" },
  },
  {
    id: "emerald-gallery",
    number: "03",
    image: "/images/hero/emerald-gallery.jpg",
    alt: "Architectural emerald couture cape gown exhibited on glass pedestal in high-rise gallery",
    titleLine1: "ROYAL",
    titleLine2: "DISTINCTION",
    subtitle: "GHANAIAN HERITAGE  •  AVANT-GARDE FORM  •  GLOBAL LUXURY",
    quote: "Redefining African luxury couture on the world stage.",
    panInitial: { x: "2%", y: "-1.5%" },
    panAnimate: { x: "-1.5%", y: "1%" },
  },
];

// Duration of the Ken Burns pan effect in seconds
const KEN_BURNS_DURATION = 3.6;

export default function AtelierHero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  // Continuous infinite loop through all 3 images right after the Ken Burns effect
  useEffect(() => {
    if (isConsultModalOpen) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, KEN_BURNS_DURATION * 1000);

    return () => clearInterval(timer);
  }, [isConsultModalOpen]);

  return (
    <section
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden bg-[#120E0B] select-none"
      aria-label="Haute Couture Showcase"
    >
      {/* ── BACKGROUND CAROUSEL: CONTINUOUS KEN BURNS PANNING & CROSS-DISSOLVE ── */}
      <AnimatePresence>
        <motion.div
          key={activeSlide.id}
          initial={{
            opacity: 0,
            x: activeSlide.panInitial.x,
            y: activeSlide.panInitial.y,
          }}
          animate={{
            opacity: 1,
            x: activeSlide.panAnimate.x,
            y: activeSlide.panAnimate.y,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: { duration: 1.0, ease: "easeInOut" },
            x: { duration: KEN_BURNS_DURATION, ease: "easeInOut" },
            y: { duration: KEN_BURNS_DURATION, ease: "easeInOut" },
          }}
          className="absolute -inset-x-8 -inset-y-6 z-0 pointer-events-none"
        >
          <Image
            src={activeSlide.image}
            alt={activeSlide.alt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center scale-100"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── CINEMATIC OVERLAYS & GRADIENTS (Matches mockup lighting & contrast) ── */}
      {/* Dark left gradient to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#120E0B]/85 via-[#120E0B]/40 to-transparent w-full md:w-[65%]" />
      
      {/* Top gradient for navbar blending */}
      <div className="absolute top-0 left-0 right-0 h-36 z-10 bg-gradient-to-b from-[#120E0B]/70 via-[#120E0B]/25 to-transparent pointer-events-none" />
      
      {/* Bottom gradient for carousel controls and quote */}
      <div className="absolute bottom-0 left-0 right-0 h-44 z-10 bg-gradient-to-t from-[#120E0B]/75 via-[#120E0B]/30 to-transparent pointer-events-none" />

      {/* Subtle warm amber/gold atmospheric vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_25%_65%,rgba(185,138,46,0.06),transparent_60%)]" />

      {/* ── HERO CONTENT WRAPPER ── */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-12">
        {/* Spacer to push content down from navbar */}
        <div className="flex-1 max-h-16 hidden sm:block" />

        {/* ── MAIN HERO TYPOGRAPHY & CALLS TO ACTION (Left Aligned) ── */}
        <div className="max-w-2xl my-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Massive Editorial Headline */}
              <h1 className="font-fraunces text-5xl sm:text-7xl lg:text-[5.75rem] font-normal leading-[0.92] tracking-[-0.02em] text-[#FFFFFF] drop-shadow-[0_4px_30px_rgba(0,0,0,0.55)]">
                <span className="block">{activeSlide.titleLine1}</span>
                <span className="block italic">{activeSlide.titleLine2}</span>
              </h1>

              {/* Sub-tagline with tracked caps */}
              <p className="mt-5 sm:mt-6 text-[11px] sm:text-xs tracking-[0.24em] font-medium text-[#EBE5D8] uppercase drop-shadow-md">
                {activeSlide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons Row */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Primary CTA: Book a Consultation */}
            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="group relative inline-flex items-center gap-3 px-7 sm:px-8 py-4 bg-[#B98A2E] hover:bg-[#0E3B2E] text-[#FBF9F4] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(185,138,46,0.35)] hover:shadow-[0_6px_32px_rgba(185,138,46,0.5)] hover:-translate-y-0.5 active:translate-y-0 rounded-[2px]"
              aria-label="Book a bespoke consultation"
            >
              <span>BOOK A CONSULTATION</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-sans">
                →
              </span>
            </button>

            {/* Secondary CTA: Explore Collections */}
            <Link
              href="/collections"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-4 border border-white/50 hover:border-[#B98A2E] text-[#FFFFFF] hover:text-[#B98A2E] text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-[2px] bg-black/25 backdrop-blur-xs"
            >
              <span>EXPLORE COLLECTIONS</span>
            </Link>
          </div>
        </div>

        {/* ── BOTTOM ROW: SCROLL CUE & EDITORIAL QUOTE ── */}
        <div className="w-full flex items-end justify-between pt-6 border-t border-white/10 sm:border-t-0">
          {/* Animated Scroll to Explore Cue */}
          <a
            href="#introduction"
            className="group hidden sm:inline-flex items-center gap-3 text-[10px] tracking-[0.24em] font-mono text-white/60 hover:text-[#B98A2E] transition-colors"
            aria-label="Scroll to Atelier Introduction"
          >
            <span className="relative flex h-7 w-[1.5px] bg-white/20 overflow-hidden rounded-full">
              <motion.span
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 h-1/2 bg-[#B98A2E]"
              />
            </span>
            <span className="uppercase">Explore Atelier &darr;</span>
          </a>

          {/* Bottom Right Italic Editorial Caption */}
          <div className="max-w-[280px] sm:max-w-md text-right pl-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeSlide.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.6 }}
                className="font-fraunces italic text-xs sm:text-sm text-[#F5F2EB]/85 font-light leading-relaxed drop-shadow-md"
              >
                &ldquo;{activeSlide.quote}&rdquo;
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── SEAMLESS GRADIENT DISSOLVE INTO INTRODUCTION ── */}
      <div className="absolute -bottom-px left-0 right-0 h-24 sm:h-28 bg-gradient-to-b from-transparent via-[#120E0B]/50 to-[#FAF8F3] pointer-events-none z-10" />



      {/* ── BESPOKE CONSULTATION QUICK MODAL ── */}
      <AnimatePresence>
        {isConsultModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsConsultModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-[#181411] text-[#FBF9F4] border border-[#B98A2E]/50 p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsConsultModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 text-white/60 hover:text-white transition-colors"
                aria-label="Close consultation modal"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B98A2E] font-medium">
                  Private Client Services
                </span>
                <h3 className="font-fraunces text-2xl sm:text-3xl text-white mt-1">
                  Book a Consultation
                </h3>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Experience dedicated bespoke craftsmanship. Select your preferred consultation format:
                </p>
              </div>

              {/* Consultation Options */}
              <div className="space-y-3 mb-6">
                <Link
                  href="/book?type=atelier"
                  onClick={() => setIsConsultModalOpen(false)}
                  className="group block p-4 border border-[#B98A2E]/30 hover:border-[#B98A2E] bg-white/[0.03] hover:bg-white/[0.06] transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-[#FBF9F4] group-hover:text-[#B98A2E] transition-colors flex items-center gap-2">
                        <span>In-Atelier Fitting & Consultation</span>
                        <Sparkles size={13} className="text-[#B98A2E]" />
                      </h4>
                      <p className="text-xs text-white/60 mt-1">
                        Private 60-minute session at our Accra studio. Fabric drape & anatomical measuring.
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-[#B98A2E] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1" />
                  </div>
                </Link>

                <Link
                  href="/book?type=virtual"
                  onClick={() => setIsConsultModalOpen(false)}
                  className="group block p-4 border border-white/10 hover:border-[#B98A2E] bg-white/[0.03] hover:bg-white/[0.06] transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-[#FBF9F4] group-hover:text-[#B98A2E] transition-colors flex items-center gap-2">
                        <span>Global Virtual Consultation</span>
                      </h4>
                      <p className="text-xs text-white/60 mt-1">
                        For international clients across the diaspora. Digital sketch review & measurement guide.
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-[#B98A2E] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1" />
                  </div>
                </Link>
              </div>

              {/* Atelier Note */}
              <div className="flex items-center gap-2 text-[11px] text-white/50 border-t border-white/10 pt-4">
                <CheckCircle size={13} className="text-[#B98A2E] shrink-0" />
                <span>Private consultations require 48 hours advance booking.</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
