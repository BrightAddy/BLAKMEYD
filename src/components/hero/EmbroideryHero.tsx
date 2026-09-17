"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface Particle {
  originX: number; // percentage (0-1)
  originY: number; // percentage (0-1)
  vx: number;
  vy: number;
  size: number;
  color: string;
  side: "left" | "right";
  phase: number;
}

export default function EmbroideryHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for the entire 280vh pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // State for scroll progress in canvas render loop
  const progressRef = useRef(0);

  // Initial load animation state
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Update progressRef whenever scrollYProgress changes
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      progressRef.current = latest;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // ─────────────────────────────────────────────────────────────
  // FRAMER MOTION TRANSFORMS
  // ─────────────────────────────────────────────────────────────
  // Beat 1: Camera zoom into the bodice embroidery (0 - 0.25)
  // Bodice embroidery focal point is approximately at 51% X, 37% Y
  const cameraScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    shouldReduceMotion ? [1, 1.05, 1.08, 1.08, 1.08] : [1, 2.25, 2.28, 1.7, 1.15]
  );

  const cameraOriginX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["50%", "51%", "50%", "50%"]
  );

  const cameraOriginY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["45%", "37%", "42%", "50%"]
  );

  // Initial text fade out on scroll (0 to 0.12)
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.12], [0, -30]);
  const heroTextPointerEvents = useTransform(scrollYProgress, (val) =>
    val > 0.08 ? "none" : "auto"
  );

  // SVG Golden Thread strokeDashoffset (0 to 0.25)
  // Length is ~1400
  const threadStrokeDashoffset = useTransform(scrollYProgress, [0.02, 0.25], [1400, 0]);
  const threadOpacity = useTransform(scrollYProgress, [0.01, 0.06, 0.35, 0.55], [0, 1, 1, 0]);

  // Curtain reveal text opacity (Beats 3 to 4: 0.55 to 0.9)
  const revealOpacity = useTransform(scrollYProgress, [0.55, 0.7, 0.9, 0.98], [0, 1, 1, 0]);
  const revealScale = useTransform(scrollYProgress, [0.55, 0.72], [0.94, 1]);

  // ─────────────────────────────────────────────────────────────
  // CANVAS PARTICLES & BEE SWARM SYSTEM (BEATS 2, 3, 4)
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate 80 anchors along the bodice filigree (percentage coords)
    const particleCount = 76;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      // Embroidery path curve around center bodice (approx 48%-54% X, 34%-42% Y)
      const angle = t * Math.PI * 4;
      const radiusX = 0.035 + 0.02 * Math.sin(t * Math.PI * 6);
      const radiusY = 0.045 + 0.015 * Math.cos(t * Math.PI * 6);

      const originX = 0.51 + Math.cos(angle) * radiusX;
      const originY = 0.37 + Math.sin(angle) * radiusY;

      particles.push({
        originX,
        originY,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -0.8 - Math.random() * 1.2,
        size: 2.2 + Math.random() * 2.4,
        color: i % 3 === 0 ? "#FBF9F4" : i % 2 === 0 ? "#D4AF37" : "#B98A2E",
        side: i % 2 === 0 ? "left" : "right",
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Helper: Draw a stylized golden bee sprite on canvas
    const drawBee = (
      cx: number,
      cy: number,
      size: number,
      heading: number,
      wingCycle: number
    ) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(heading);

      // Delicate translucent flutter wings
      ctx.fillStyle = "rgba(243, 229, 171, 0.45)";
      const wingSpread = Math.sin(wingCycle) * 7;

      ctx.beginPath();
      ctx.ellipse(-1, -size * 1.4, size * 0.9, size * 1.8 + wingSpread, 0.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(-1, size * 1.4, size * 0.9, size * 1.8 + wingSpread, -0.4, 0, Math.PI * 2);
      ctx.fill();

      // Bee Body (Black with gold stripes)
      // Head
      ctx.fillStyle = "#15150F";
      ctx.beginPath();
      ctx.arc(size * 1.4, 0, size * 0.7, 0, Math.PI * 2);
      ctx.fill();

      // Thorax / Abdomen
      const grad = ctx.createLinearGradient(-size * 2, 0, size * 1.5, 0);
      grad.addColorStop(0, "#8A6318");
      grad.addColorStop(0.3, "#D4AF37");
      grad.addColorStop(0.6, "#15150F");
      grad.addColorStop(0.85, "#F5D77F");
      grad.addColorStop(1, "#15150F");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 1.8, size * 0.95, 0, 0, Math.PI * 2);
      ctx.fill();

      // Gold Glow Rim
      ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
      ctx.lineWidth = 0.6;
      ctx.stroke();

      ctx.restore();
    };

    let time = 0;

    const render = () => {
      time += 0.035;
      ctx.clearRect(0, 0, width, height);

      const p = progressRef.current;

      // Only draw during Beats 2, 3, 4 (0.24 to 0.98)
      if (p >= 0.24 && p <= 0.98) {
        // Beat 2: Beads Lift (0.25 -> 0.50)
        // Beat 3: Beads become Bees and Part like a curtain (0.50 -> 0.75)
        // Beat 4: Bees converge to needle on left margin (0.75 -> 0.98)

        particles.forEach((pt, index) => {
          // Center origin coordinates converted to pixels
          const ox = pt.originX * width;
          const oy = pt.originY * height;

          let x = ox;
          let y = oy;
          let alpha = 1;

          if (p < 0.5) {
            // ─── BEAT 2: Glowing Beads Detach & Drift ───
            const liftProgress = (p - 0.25) / 0.25; // 0 to 1
            const driftDistance = liftProgress * (180 + (index % 5) * 20);
            const angleOffset = pt.phase + Math.sin(time + index) * 0.5;

            x = ox + Math.cos(angleOffset) * (liftProgress * 120);
            y = oy + pt.vy * driftDistance + Math.sin(time * 2 + pt.phase) * 12;

            // Fade in gently
            alpha = Math.min(1, liftProgress * 2.5);

            // Draw glowing golden bead
            const beadRad = pt.size * (1 + liftProgress * 0.4);
            const beadGlow = ctx.createRadialGradient(x, y, 0, x, y, beadRad * 3);
            beadGlow.addColorStop(0, "rgba(255, 250, 230, 0.95)");
            beadGlow.addColorStop(0.3, "rgba(212, 175, 55, 0.8)");
            beadGlow.addColorStop(1, "rgba(185, 138, 46, 0)");

            ctx.fillStyle = beadGlow;
            ctx.beginPath();
            ctx.arc(x, y, beadRad * 3, 0, Math.PI * 2);
            ctx.fill();

            // Core dot
            ctx.fillStyle = pt.color;
            ctx.beginPath();
            ctx.arc(x, y, beadRad, 0, Math.PI * 2);
            ctx.fill();
          } else if (p < 0.75) {
            // ─── BEAT 3: Beads Become Bees & Part Like a Curtain ───
            const curtainProgress = (p - 0.5) / 0.25; // 0 to 1

            // Directional curtain spread: Left half sweeps left, right half sweeps right
            const targetX =
              pt.side === "left"
                ? width * 0.12 - Math.sin(time + index) * 40 - curtainProgress * (width * 0.2)
                : width * 0.88 + Math.sin(time + index) * 40 + curtainProgress * (width * 0.2);

            const targetY =
              oy - 120 + Math.sin(time * 1.5 + index * 0.4) * (height * 0.22);

            // Interpolate from Beat 2 position to curtain position
            x = ox + (targetX - ox) * Math.pow(curtainProgress, 0.8);
            y = oy + (targetY - oy) * curtainProgress;

            // Heading angle toward target
            const heading =
              pt.side === "left"
                ? -Math.PI * 0.8 + Math.sin(time + index) * 0.4
                : -Math.PI * 0.2 - Math.sin(time + index) * 0.4;

            // Draw bee sprite
            drawBee(x, y, pt.size * 1.3, heading, time * 12 + index);
          } else {
            // ─── BEAT 4: Re-stitch into the Golden Needle on the left margin ───
            const collapseProgress = (p - 0.75) / 0.23; // 0 to 1
            const easedCollapse = Math.pow(collapseProgress, 1.4);

            // Target needle coordinate on left margin
            const needleTargetX = 32; // left-8 margin
            const needleTargetY = height * 0.35;

            // Intermediate swarm position from Beat 3
            const startX =
              pt.side === "left" ? width * 0.08 : width * 0.92;
            const startY = oy - 80 + Math.sin(index) * 100;

            x = startX + (needleTargetX - startX) * easedCollapse;
            y = startY + (needleTargetY - startY) * easedCollapse;

            // Fade out as they collapse into the single needle
            alpha = Math.max(0, 1 - easedCollapse * 1.2);

            if (alpha > 0.02) {
              ctx.globalAlpha = alpha;
              const heading = Math.atan2(needleTargetY - y, needleTargetX - x);
              drawBee(x, y, pt.size * 1.1, heading, time * 14 + index);
              ctx.globalAlpha = 1;
            }
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      className="relative h-[280vh] w-full bg-[#0E3B2E] selection:bg-[#B98A2E] selection:text-[#15150F]"
    >
      {/* ── STICKY VIEWPORT CONTAINER ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ── Full-Bleed Editorial Background Image with Camera Zoom ── */}
        <motion.div
          style={{
            scale: cameraScale,
            transformOrigin: `${cameraOriginX.get()} ${cameraOriginY.get()}`,
          }}
          className="absolute inset-0 z-0 h-full w-full will-change-transform"
        >
          <Image
            src="/images/hero-couture.jpg"
            alt="Blak Meyd Bespoke Couture Ghanaian Gown"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.92] contrast-[1.04]"
          />

          {/* High-Clarity Light Vignette — clear model, subtle contrast on left for typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E3B2E]/85 via-[#0E3B2E]/30 to-transparent w-full lg:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E3B2E]/60 via-transparent to-[#0E3B2E]/40" />
        </motion.div>

        {/* ── BEAT 1: SVG Golden Bodice Embroidery Thread Overlay ── */}
        <motion.div
          style={{
            opacity: threadOpacity,
            scale: cameraScale,
            transformOrigin: `${cameraOriginX.get()} ${cameraOriginY.get()}`,
          }}
          className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center will-change-transform"
        >
          <svg
            viewBox="0 0 1000 1000"
            className="w-full h-full max-w-[100vw] max-h-[100vh] drop-shadow-[0_0_12px_rgba(212,175,55,0.7)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Master Bodice Filigree Embroidery Path */}
            <motion.path
              d="M510 345 C518 335, 532 338, 535 348 C538 358, 524 366, 514 362 C504 358, 502 344, 512 338 C522 332, 538 340, 542 355 C546 370, 530 384, 515 380 C500 376, 492 360, 502 348 C512 336, 530 338, 545 352 C560 366, 558 388, 538 396 C518 404, 498 392, 492 372 C486 352, 504 332, 526 330 C548 328, 568 344, 570 368 C572 392, 548 412, 522 414 C496 416, 474 394, 478 366 C482 338, 512 316, 540 318 C568 320, 590 348, 584 378 C578 408, 546 428, 516 426"
              stroke="url(#embroidery-thread-gold)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1400"
              style={{ strokeDashoffset: threadStrokeDashoffset }}
            />

            {/* Secondary Symmetrical Flourish Stitch */}
            <motion.path
              d="M490 350 C482 340, 468 343, 465 353 C462 363, 476 371, 486 367 C496 363, 498 349, 488 343 C478 337, 462 345, 458 360 C454 375, 470 389, 485 385 C500 381, 508 365, 498 353 C488 341, 470 343, 455 357 C440 371, 442 393, 462 401 C482 409, 502 397, 508 377"
              stroke="url(#embroidery-thread-gold)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1400"
              style={{ strokeDashoffset: threadStrokeDashoffset }}
            />

            <defs>
              <linearGradient id="embroidery-thread-gold" x1="450" y1="310" x2="600" y2="440" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF7D6" />
                <stop offset="0.3" stopColor="#D4AF37" />
                <stop offset="0.7" stopColor="#B98A2E" />
                <stop offset="1" stopColor="#F5D77F" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* ── BEATS 2, 3, 4: HTML5 CANVAS PARTICLES & BEE SWARM ── */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-20 pointer-events-none w-full h-full"
        />

        {/* ── INITIAL LOAD HERO CONTENT (Fades out 0 to 0.12 scroll) ── */}
        <motion.div
          style={{
            opacity: heroTextOpacity,
            y: heroTextY,
            pointerEvents: heroTextPointerEvents,
          }}
          className="relative z-30 mx-auto max-w-7xl h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-center pt-16"
        >
          <div className="max-w-3xl">
            {/* Wordmark Gold Line Accent (0–0.3s entrance) */}
            <div className="relative inline-block mb-4">
              <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#D4AF37]">
                Atelier Accra • Haute Couture
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isLoaded ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="h-[1px] w-full origin-left bg-[#B98A2E] mt-1"
              />
            </div>

            {/* Headline Word-by-Word Reveal (0.3–1.0s entrance) */}
            <h1 className="font-fraunces text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-[#FBF9F4]">
              {["The", "Art", "of"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={
                    isLoaded
                      ? { opacity: 1, y: 0, filter: "blur(0px)" }
                      : { opacity: 0, y: 12, filter: "blur(4px)" }
                  }
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.25 + i * 0.1,
                  }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:inline" />
              {["Ghanaian", "Bespoke", "Couture."].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={
                    isLoaded
                      ? { opacity: 1, y: 0, filter: "blur(0px)" }
                      : { opacity: 0, y: 12, filter: "blur(4px)" }
                  }
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.55 + i * 0.1,
                  }}
                  className={`inline-block mr-3 ${
                    word === "Bespoke" || word === "Couture."
                      ? "italic text-transparent bg-clip-text bg-gradient-to-r from-[#FBF9F4] via-[#F3E5AB] to-[#D4AF37]"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
              className="mt-6 text-base sm:text-lg text-[#E4ECE7]/90 font-light max-w-xl leading-relaxed"
            >
              Every gown is individually sculpted to your exact measurements,
              woven with authentic Ghanaian heritage fabrics and artisanal gold embroidery.
            </motion.p>

            {/* Two CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Book a consultation (Filled Gold) */}
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#B98A2E] text-[#15150F] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(185,138,46,0.35)] hover:bg-[#D4AF37] hover:shadow-[0_6px_32px_rgba(185,138,46,0.55)] active:scale-[0.99]"
              >
                <span>Book a consultation</span>
                <ArrowUpRight size={14} />
              </Link>

              {/* View lookbook (Outline) */}
              <Link
                href="/lookbook"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#FBF9F4]/40 text-[#FBF9F4] text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#FBF9F4]/5"
              >
                <span>View lookbook</span>
              </Link>
            </motion.div>

            {/* Scroll Indicator Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-[#D4AF37]/80"
            >
              <span className="h-1 w-1 rounded-full bg-[#D4AF37] animate-ping" />
              <span>Scroll to awaken the embroidery</span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── BEATS 3 & 4: CURTAIN REVEAL UNDERNEATH ── */}
        <motion.div
          style={{ opacity: revealOpacity, scale: revealScale }}
          className="absolute inset-0 z-25 pointer-events-none flex flex-col items-center justify-center text-center px-6"
        >
          <div className="max-w-2xl bg-[#0E3B2E]/80 backdrop-blur-md p-10 border border-[#B98A2E]/30 shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-3">
              <Sparkles size={14} />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">
                The Atelier Collections
              </span>
            </div>
            <h2 className="font-fraunces text-4xl sm:text-6xl italic font-normal text-[#FBF9F4]">
              One Silhouette. <br />
              <span className="not-italic text-[#D4AF37]">Never Repeated.</span>
            </h2>
            <p className="mt-4 text-[#E4ECE7]/80 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              Bridal, Kente Gowns, and Special Occasions tailored to the millimeter in our Accra atelier.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
