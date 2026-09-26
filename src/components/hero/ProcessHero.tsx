"use client";

import React, { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ProcessHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldReduceMotion) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Autoplay may be restricted in rare browser modes until user interaction
      });
    }
  }, [shouldReduceMotion]);

  return (
    <section
      id="process-hero"
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden flex items-center bg-[#072018] text-[#FBF9F4]"
      aria-label="Process Overview Hero"
    >
      {/* ═════════════════════════════════════════════════════════════════
          01: CINEMATIC BACKGROUND VIDEO (FULL-BLEED / LOOP / COVER)
      ═════════════════════════════════════════════════════════════════ */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-[center_right] sm:object-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <source src="/video/process.mp4" type="video/mp4" />
        <source src="/videos/process.mp4" type="video/mp4" />
      </video>

      {/* ═════════════════════════════════════════════════════════════════
          02: EDITORIAL CINEMATIC GRADIENT OVERLAYS
      ═════════════════════════════════════════════════════════════════ */}
      {/* Left-to-right gradient for typography readability while keeping dress visible */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#04120D]/90 via-[#072018]/50 via-45% to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Right side subtle darkening to balance warm atelier lighting */}
      <div
        className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/35 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Top vignette to ensure transparent navbar text and logo remain pristine */}
      <div
        className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/65 via-black/25 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom vignette for scroll indicator and gentle transition */}
      <div
        className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#04120D]/85 via-[#04120D]/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* ═════════════════════════════════════════════════════════════════
          03: EDITORIAL CONTENT (LEFT-ALIGNED ~40% WIDTH LOCKUP)
      ═════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[620px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="w-8 h-[1px] bg-[#B98A2E]"
              aria-hidden="true"
            />
            <span className="font-sans text-[11px] sm:text-xs font-medium tracking-[0.28em] uppercase text-[#B98A2E]">
              OUR PROCESS
            </span>
          </motion.div>

          {/* Main Display Heading (Masked Reveal) */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: shouldReduceMotion ? 0 : "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.95,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-light text-[#FBF9F4] tracking-tight leading-[1.05]"
            >
              <span className="block font-normal">From Vision</span>
              <span className="block italic font-light text-[#FBF9F4]/90">
                to Reality.
              </span>
            </motion.h1>
          </div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-sans text-sm sm:text-base lg:text-lg text-[#FBF9F4]/80 font-light leading-relaxed max-w-lg mb-10"
          >
            Every piece begins with an idea and moves through a considered
            process of design, craftsmanship, fittings and finishing.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a
              href="#process-journey"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[#B98A2E] bg-[#B98A2E]/10 hover:bg-[#B98A2E] text-[#FBF9F4] hover:text-[#15150F] text-xs font-medium tracking-[0.22em] uppercase font-sans transition-all duration-500 backdrop-blur-sm shadow-sm active:translate-y-0.5"
            >
              <span>EXPLORE THE PROCESS</span>
              <span className="text-[#B98A2E] group-hover:text-[#15150F] transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          04: EDITORIAL SCROLL INDICATOR (BOTTOM ALIGNED)
      ═════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 1.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-8 left-6 sm:left-10 lg:left-16 xl:left-24 z-20 flex items-center gap-4 select-none pointer-events-none"
      >
        <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#FBF9F4]/75 font-medium">
          SCROLL TO EXPLORE
        </span>
        <span
          className="w-8 h-[1px] bg-gradient-to-r from-[#B98A2E] to-transparent"
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
}
