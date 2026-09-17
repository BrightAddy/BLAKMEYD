"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CelestialHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle mouse parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 16,
      y: (clientY / innerHeight - 0.5) * 16,
    });
  };

  // Scroll progress through pinned 240vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 22,
    restDelta: 0.001,
  });

  // ─────────────────────────────────────────────────────────────
  // SCROLL-LINKED ANIMATIONS
  // ─────────────────────────────────────────────────────────────
  // 1. Initial Stacked Title ("FIND YOUR ATELIER") — fades out 0 to 0.3
  const initialTitleOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const initialTitleY = useTransform(smoothProgress, [0, 0.25], [0, -50]);
  const initialTitleScale = useTransform(smoothProgress, [0, 0.25], [1, 0.92]);

  // 2. Giant Background Wordmark ("BLAK MEYD") behind the Queen:
  // Starts prominent, expands and tracks dynamically across the horizon
  const bgWordmarkOpacity = useTransform(smoothProgress, [0, 0.25, 0.85], [0.55, 1, 0.85]);
  const bgWordmarkScale = useTransform(smoothProgress, [0, 0.45, 0.9], [1.0, 1.1, 1.2]);
  const bgWordmarkY = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "-4%", "-10%"]);
  const bgWordmarkLetterSpacing = useTransform(smoothProgress, [0, 0.5, 1], ["-0.03em", "0.02em", "0.06em"]);

  // 3. Make the Queen HUGE and commanding:
  // Starts zoomed-in on her regal crown, face, and gold Adinkra corset,
  // then gracefully pans and scales to reveal the sweeping white and gold couture gown
  const modelScale = useTransform(smoothProgress, [0, 0.5, 1], [1.95, 1.75, 1.45]);
  const modelY = useTransform(smoothProgress, [0, 0.5, 1], ["10%", "4%", "-4%"]);

  // 4. Editorial bottom captions reveal on scroll (0.2 to 0.9)
  const captionOpacity = useTransform(smoothProgress, [0.2, 0.38, 0.85, 0.98], [0, 1, 1, 0]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[240vh] w-full bg-[#A39F96] text-[#15150F] selection:bg-[#B98A2E] selection:text-[#15150F]"
    >
      {/* ── STICKY 100VH VIEWPORT ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#B2ADA4] via-[#A39F96] to-[#969188]">
        {/* Top spacer for the fixed top navbar */}
        <div className="h-20 w-full pointer-events-none" />

        {/* ─────────────────────────────────────────────────────────────
            SCENE 3D LAYERS:
            Layer 1: Base Studio Photo (HUGE, commanding)
            Layer 2: Giant "BLAK MEYD" Wordmark (BEHIND the model)
            Layer 3: Queen Cutout (Crown & Bodice IN FRONT of the letters)
            Layer 4: Initial Stacked "FIND YOUR ATELIER" Title
           ───────────────────────────────────────────────────────────── */}
        <div className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden">
          {/* ── LAYER 1: BASE STUDIO PHOTO (SCALED HUGE) ── */}
          <motion.div
            style={{
              scale: modelScale,
              y: modelY,
              transformOrigin: "50% 28%",
            }}
            className="absolute inset-0 z-0 flex items-center justify-center will-change-transform"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/queen-couture.jpg"
                alt="Blak Meyd Black Excellence Haute Couture Model"
                fill
                priority
                sizes="100vw"
                className="object-contain object-center filter contrast-[1.03] brightness-[0.98]"
              />
            </div>
          </motion.div>

          {/* ── LAYER 2: GIANT "BLAK MEYD" WORDMARK BEHIND THE HEAD/CROWN ── */}
          {/* Sits at z-index 10, between the studio backdrop and the cutout layer */}
          <motion.div
            style={{
              scale: bgWordmarkScale,
              y: bgWordmarkY,
              letterSpacing: bgWordmarkLetterSpacing,
              opacity: bgWordmarkOpacity,
              x: mousePos.x * 0.25,
            }}
            className="absolute z-10 select-none pointer-events-none top-[12%] sm:top-[10%] lg:top-[8%] w-full text-center px-2 will-change-transform"
          >
            <h1 className="font-sans font-black text-[23vw] sm:text-[21vw] lg:text-[19vw] leading-[0.78] tracking-tight uppercase text-[#15150F] drop-shadow-sm">
              BLAK MEYD
            </h1>
          </motion.div>

          {/* ── LAYER 3: QUEEN CUTOUT (FOREGROUND) ── */}
          {/* Sits at z-index 20 OVER the giant wordmark, so her crown and head sit in front of the letters! */}
          <motion.div
            style={{
              scale: modelScale,
              y: modelY,
              x: mousePos.x * -0.35,
              transformOrigin: "50% 28%",
            }}
            className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center will-change-transform"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/queen-couture-cutout.png"
                alt="Black Excellence — Crown and Bodice"
                fill
                priority
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>
          </motion.div>

          {/* ── LAYER 4: INITIAL STACKED EDITORIAL TITLE (Matching Screenshot 1) ── */}
          {/* "FIND YOUR ATELIER" on the left, smooth fade out as you scroll down */}
          <motion.div
            style={{
              opacity: initialTitleOpacity,
              y: initialTitleY,
              scale: initialTitleScale,
              x: mousePos.x * 0.4,
            }}
            className="absolute z-30 left-6 sm:left-12 lg:left-24 top-[24%] sm:top-[28%] select-none pointer-events-none max-w-lg"
          >
            <h2 className="font-sans font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.86] uppercase text-[#15150F]">
              FIND <br />
              YOUR <br />
              <span className="font-serif italic font-normal text-[#15150F] text-5xl sm:text-6xl lg:text-7xl">
                ATELIER.
              </span>
            </h2>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-[1.5px] w-8 bg-[#15150F]" />
              <p className="text-[11px] font-medium tracking-[0.24em] uppercase text-[#15150F]/85">
                White Silk • Black Velvet • Molten Gold
              </p>
            </div>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            BOTTOM EDITORIAL CAPTIONS (Matching reference Screenshot 2)
           ───────────────────────────────────────────────────────────── */}
        <motion.footer
          style={{ opacity: captionOpacity }}
          className="relative z-40 flex items-end justify-between px-6 sm:px-10 lg:px-14 pb-8 w-full text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-[#15150F]"
        >
          {/* Bottom Left: Editorial Creed */}
          <div className="max-w-xs space-y-1">
            <p className="font-bold text-[#15150F] tracking-[0.24em]">RITUALS REFINED:</p>
            <p className="text-[#15150F]/80 leading-relaxed font-sans">
              TRACING LINE, SILK & SHADOW
              <br />
              ACROSS BESPOKE AFRICAN FORM.
            </p>
          </div>

          {/* Bottom Center: Scroll Prompt */}
          <div className="hidden md:flex flex-col items-center gap-2 text-[#15150F]/80">
            <span className="text-[9px] tracking-[0.32em] font-semibold">SCROLL TO REVEAL FULL GOWN</span>
            <div className="w-[1.5px] h-6 bg-[#15150F]/70 animate-bounce" />
          </div>

          {/* Bottom Right: Consultation CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#15150F] text-[#FBF9F4] text-[10px] tracking-[0.24em] uppercase font-semibold transition-all duration-300 hover:bg-[#B98A2E] hover:text-[#15150F] shadow-md active:scale-95"
            >
              <Sparkles size={12} />
              <span>Book Consultation</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
