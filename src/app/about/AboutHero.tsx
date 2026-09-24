"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, CheckCircle } from "lucide-react";

const TYPEWRITER_PHRASES = [
  "Designed for You.",
  "Worn with Purpose.",
  "Sculpted with Intention.",
  "Wear Your Story.",
];

export default function AboutHero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  // Typewriter effect loop
  useEffect(() => {
    const fullText = TYPEWRITER_PHRASES[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === fullText) {
      // Pause at the end of the phrase
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && currentText === "") {
      // Move to next phrase
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      }, 50);
    } else {
      // Typing or deleting speed
      const speed = isDeleting ? 45 : 90;
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section
      className="relative w-full h-screen min-h-[660px] max-h-[1100px] bg-[#120E0B] text-[#FBF9F4] overflow-hidden select-none"
      aria-label="About Blak Meyd — Rooted in Heritage"
    >
      {/* ── 01: FULL-BLEED HIGH-DEFINITION ATELIER PHOTOGRAPHY BACKGROUND ── */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/about/about-atelier-designer.jpg"
          alt="Blak Meyd bespoke haute couture atelier salon in Accra"
          fill
          priority
          quality={98}
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
      </motion.div>

      {/* ── 02: CINEMATIC LUXURY OVERLAYS (ENSURES PRISTINE TYPOGRAPHY CONTRAST) ── */}
      {/* Left dark scrim for sharp text contrast */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#120E0B]/90 via-[#120E0B]/55 to-transparent w-full lg:w-[65%]" />

      {/* Top gradient for navbar blending */}
      <div className="absolute top-0 left-0 right-0 h-32 z-1 bg-gradient-to-b from-[#120E0B]/80 via-[#120E0B]/25 to-transparent pointer-events-none" />

      {/* Subtle warm amber/gold atmospheric vignette */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(circle_at_25%_60%,rgba(185,138,46,0.08),transparent_65%)]" />

      {/* ── 03: SEAMLESS GRADIENT DISSOLVE INTO NEXT SECTION (#FBF9F4) ── */}
      <div className="absolute -bottom-px left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-transparent via-[#120E0B]/50 to-[#FBF9F4] pointer-events-none z-10" />

      {/* ── 04: HERO CONTENT WRAPPER ── */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-between pt-32 sm:pt-36 pb-8 sm:pb-10">
        <div className="flex-1 max-h-12 hidden sm:block" />

        {/* ── MAIN HERO TYPOGRAPHY & ANIMATED TYPEWRITER TEXT ── */}
        <div className="max-w-2xl my-auto">
          {/* Monumental Headline with Living Typewriter Effect */}
          <h1 className="font-fraunces text-4xl sm:text-6xl lg:text-[4.4rem] xl:text-[5.2rem] font-light leading-[0.96] tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            <span className="block font-normal">Rooted in Heritage.</span>
            <span className="block mt-2 text-[#C5A265] italic font-normal min-h-[1.15em]">
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-[#C5A265] ml-1.5 align-baseline"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Editorial Narrative Paragraph */}
          <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-[#FBF9F4]/85 font-light leading-relaxed max-w-xl drop-shadow-md">
            At Blak Meyd, we believe fashion is more than fabric — it is a story, a culture,
            and a reflection of who you are. Born in Ghana, our atelier creates bespoke pieces
            that celebrate individuality, heritage and modern elegance, designed for life&rsquo;s most meaningful moments.
          </p>

          {/* Primary Action Buttons Row */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Circular "OUR JOURNEY →" Button */}
            <Link
              href="/process"
              className="group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#B98A2E] flex flex-col items-center justify-center text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-[#FBF9F4] hover:bg-[#B98A2E] hover:text-[#15150F] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(185,138,46,0.4)] shrink-0 overflow-hidden backdrop-blur-xs"
              aria-label="Explore our bespoke journey and protocol"
            >
              <span className="leading-tight">OUR</span>
              <span className="leading-tight">JOURNEY</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>

            {/* Quick Consultation Trigger */}
            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="px-7 sm:px-8 py-4 bg-[#B98A2E] hover:bg-white text-[#15150F] text-[10.5px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl hover:shadow-[0_4px_30px_rgba(185,138,46,0.5)] rounded-[2px]"
            >
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>

        {/* ── BOTTOM ROW: SCROLL CUE (FLOATING ABOVE THE GRADIENT DISSOLVE) ── */}
        <div className="w-full flex items-end justify-start pt-4 sm:border-t-0 z-30">
          {/* Animated Scroll to Explore Cue */}
          <a
            href="#heritage"
            className="group inline-flex items-center gap-3 text-[10px] sm:text-[10.5px] tracking-[0.24em] font-mono text-[#15150F] hover:text-[#0E3B2E] transition-colors"
            aria-label="Scroll to explore our heritage"
          >
            <span className="relative flex h-7 w-[1.5px] bg-[#B98A2E]/50 overflow-hidden rounded-full">
              <motion.span
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 h-1/2 bg-[#B98A2E]"
              />
            </span>
            <span className="uppercase font-medium">Explore Our Heritage &darr;</span>
          </a>
        </div>
      </div>

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
                    <span className="text-[#B98A2E] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1">
                      &rarr;
                    </span>
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
                    <span className="text-[#B98A2E] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1">
                      &rarr;
                    </span>
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
