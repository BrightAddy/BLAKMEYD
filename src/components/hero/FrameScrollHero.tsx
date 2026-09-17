"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const TOTAL_FRAMES = 300;

export default function FrameScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cached HTMLImageElements
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef(0);
  const isInitialDrawn = useRef(false);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Pinned scroll progress across the ~400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Buttery-smooth spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.0005,
  });

  // ─────────────────────────────────────────────────────────────
  // TEXT OVERLAY OPACITIES (Scroll-Scrubbed Beats)
  // ─────────────────────────────────────────────────────────────
  // Beat 1: Initial Brand Title (0 to 22%)
  const beat1Opacity = useTransform(smoothProgress, [0, 0.16, 0.22], [1, 1, 0]);
  const beat1Y = useTransform(smoothProgress, [0, 0.2], [0, -40]);

  // Beat 2: Silhouette & Craftsmanship (26% to 48%)
  const beat2Opacity = useTransform(smoothProgress, [0.24, 0.32, 0.44, 0.5], [0, 1, 1, 0]);
  const beat2Y = useTransform(smoothProgress, [0.24, 0.32, 0.48], [40, 0, -40]);

  // Beat 3: Ancestral Weave & Precision (54% to 74%)
  const beat3Opacity = useTransform(smoothProgress, [0.52, 0.6, 0.7, 0.76], [0, 1, 1, 0]);
  const beat3Y = useTransform(smoothProgress, [0.52, 0.6, 0.74], [40, 0, -40]);

  // Beat 4: Final Call to Action (80% to 100%)
  const beat4Opacity = useTransform(smoothProgress, [0.78, 0.86, 1], [0, 1, 1]);
  const beat4Y = useTransform(smoothProgress, [0.78, 0.86], [40, 0]);

  // ─────────────────────────────────────────────────────────────
  // DRAW FRAME HELPER (Object-fit: cover)
  // ─────────────────────────────────────────────────────────────
  const drawFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Calculate aspect cover
    const hRatio = canvasWidth / img.width;
    const vRatio = canvasHeight / img.height;
    const ratio = Math.max(hRatio, vRatio);

    const shiftX = (canvasWidth - img.width * ratio) / 2;
    const shiftY = (canvasHeight - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      shiftX,
      shiftY,
      img.width * ratio,
      img.height * ratio
    );
  };

  // ─────────────────────────────────────────────────────────────
  // PRELOAD FRAMES CONCURRENTLY
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // Redraw current frame
      const currentImg = imagesRef.current[currentFrameRef.current];
      if (currentImg && currentImg.complete && currentImg.naturalWidth > 0) {
        drawFrame(currentImg);
      }
    };

    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize();

    // Priority 1: Load frame 1 immediately
    const firstFrame = new window.Image();
    firstFrame.src = "/hero/ezgif-frame-001.jpg";
    firstFrame.onload = () => {
      if (!isMounted) return;
      imagesRef.current[0] = firstFrame;
      if (!isInitialDrawn.current) {
        drawFrame(firstFrame);
        isInitialDrawn.current = true;
        setIsReady(true);
      }
    };

    // Priority 2: Preload all frames progressively
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      const numStr = String(i).padStart(3, "0");
      img.src = `/hero/ezgif-frame-${numStr}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        imagesRef.current[i - 1] = img;
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));

        // If frame 1 wasn't drawn yet and this is frame 1
        if (i === 1 && !isInitialDrawn.current) {
          drawFrame(img);
          isInitialDrawn.current = true;
          setIsReady(true);
        }
      };
    }

    return () => {
      isMounted = false;
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  // ─────────────────────────────────────────────────────────────
  // RENDER ON SCROLL PROGRESS CHANGE
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (progress) => {
      // Map progress (0 to 1) to frame index (0 to 299)
      const targetFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
      );

      currentFrameRef.current = targetFrame;

      // Find target frame or closest available loaded frame
      let imgToDraw = imagesRef.current[targetFrame];
      if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
        // Search backwards
        for (let i = targetFrame - 1; i >= 0; i--) {
          if (imagesRef.current[i]?.complete && imagesRef.current[i]?.naturalWidth) {
            imgToDraw = imagesRef.current[i];
            break;
          }
        }
      }

      if (imgToDraw && imgToDraw.complete && imgToDraw.naturalWidth > 0) {
        drawFrame(imgToDraw);
      }
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh] w-full bg-[#15150F] text-[#FBF9F4] selection:bg-[#B98A2E] selection:text-[#15150F]"
    >
      {/* ── STICKY 100VH VIEWPORT ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* HTML5 Canvas Rendering the 300-frame sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Ambient atmospheric gradients for typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15150F]/70 via-transparent to-[#15150F]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#15150F]/60 via-transparent to-transparent pointer-events-none w-full lg:w-[65%]" />

        {/* Loading Indicator (fades out as first frame loads) */}
        {!isReady && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#15150F] text-[#FBF9F4]">
            <span className="font-fraunces text-2xl italic tracking-wider mb-3">Blak Meyd</span>
            <div className="w-32 h-[1px] bg-[#B98A2E]/30 overflow-hidden">
              <div
                className="h-full bg-[#D4AF37] transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#B98A2E] mt-3">
              Preparing Atelier Experience {loadingProgress}%
            </span>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            SCROLL-SCRUBBED EDITORIAL TEXT OVERLAYS
           ───────────────────────────────────────────────────────────── */}
        {/* BEAT 1: Initial Brand Arrival (0% to 22%) */}
        <motion.div
          style={{ opacity: beat1Opacity, y: beat1Y }}
          className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-5xl"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-[#D4AF37]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.28em] uppercase">
                Atelier Accra • Bespoke MMXXVI
              </span>
            </div>

            <h1 className="font-fraunces text-5xl sm:text-7xl lg:text-8xl italic font-normal tracking-tight text-[#FBF9F4] leading-[1.05]">
              Blak Meyd
            </h1>

            <p className="text-base sm:text-xl text-[#E4ECE7]/90 font-light max-w-xl leading-relaxed">
              Haute couture sculpted to your essence. Handcrafted with ancestral Ghanaian
              techniques and contemporary architectural silhouettes.
            </p>

            <div className="pt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#D4AF37]">
              <div className="w-8 h-[1px] bg-[#D4AF37]" />
              <span>Scroll to unveil the sequence</span>
            </div>
          </div>
        </motion.div>

        {/* BEAT 2: The Silhouette (26% to 48%) */}
        <motion.div
          style={{ opacity: beat2Opacity, y: beat2Y }}
          className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-end px-6 sm:px-12 lg:px-20 text-right"
        >
          <div className="max-w-xl space-y-4">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.26em] uppercase text-[#D4AF37]">
              Bespoke Precision
            </span>
            <h2 className="font-fraunces text-4xl sm:text-6xl italic font-normal text-[#FBF9F4] leading-[1.1]">
              One Client. <br />
              <span className="not-italic text-[#D4AF37]">One Masterpiece.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#E4ECE7]/85 font-light leading-relaxed">
              Every curve calibrated to your exact posture. No templates, no repetition.
            </p>
          </div>
        </motion.div>

        {/* BEAT 3: Craftsmanship & Heritage (54% to 74%) */}
        <motion.div
          style={{ opacity: beat3Opacity, y: beat3Y }}
          className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-xl"
        >
          <div className="space-y-4">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.26em] uppercase text-[#D4AF37]">
              Ancestral Artisanship
            </span>
            <h2 className="font-fraunces text-4xl sm:text-6xl font-normal text-[#FBF9F4] leading-[1.1]">
              Over 120 Hours <br />
              <span className="italic text-[#D4AF37]">Per Commission.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#E4ECE7]/85 font-light leading-relaxed">
              Metallic threads, Bonwire Ashanti geometric weaves, and hand-anchored filigree.
            </p>
          </div>
        </motion.div>

        {/* BEAT 4: Final Reveal & Call to Action (80% to 100%) */}
        <motion.div
          style={{ opacity: beat4Opacity, y: beat4Y }}
          className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center px-6 text-center"
        >
          <div className="max-w-2xl bg-[#15150F]/75 backdrop-blur-md p-8 sm:p-12 border border-[#B98A2E]/30 shadow-2xl space-y-6">
            <div className="inline-flex items-center gap-2 text-[#D4AF37]">
              <Sparkles size={14} />
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
                Private Commission
              </span>
            </div>

            <h2 className="font-fraunces text-4xl sm:text-6xl italic font-normal text-[#FBF9F4]">
              Reserve Your Fitting
            </h2>

            <p className="text-sm sm:text-base text-[#E4ECE7]/85 font-light max-w-md mx-auto leading-relaxed">
              Appointments available in our Accra atelier or worldwide via private virtual protocol.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#B98A2E] text-[#15150F] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-[#D4AF37] shadow-lg active:scale-95"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight size={14} />
              </Link>

              <Link
                href="/lookbook"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#FBF9F4]/30 text-[#FBF9F4] text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <span>View Lookbook</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Persistent Bottom Bar with Frame Counter */}
        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between text-[9px] uppercase tracking-[0.26em] text-[#E4ECE7]/60 pointer-events-none">
          <span>Accra • Atelier • Worldwide</span>
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <span>Frame Sequence</span>
            <span className="font-mono text-xs text-[#FBF9F4]">
              {String(currentFrameRef.current + 1).padStart(3, "0")} / {TOTAL_FRAMES}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
