"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";

export interface CollectionSlide {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  animationType: "typewriter" | "liquid" | "silk";
  kenBurns: {
    initial: { x: string; y: string; scale: number };
    animate: { x: string; y: string; scale: number };
  };
}

export const COLLECTION_SLIDES: CollectionSlide[] = [
  {
    id: "kente-gown",
    number: "01",
    category: "KENTE GOWN",
    title: "Kente Gown",
    description:
      "A curated showcase of bespoke garments, crafted for life's most meaningful moments.",
    image: "/images/collections/hero-kente-gown.jpg",
    alt: "Blak Meyd Bespoke Kente Gown with authentic Bonwire woven geometric silks in an architectural atelier",
    animationType: "typewriter",
    kenBurns: {
      initial: { x: "-1.5%", y: "0%", scale: 1.00 },
      animate: { x: "1.2%", y: "0%", scale: 1.045 },
    },
  },
  {
    id: "bridal-robe",
    number: "02",
    category: "BRIDAL ROBE",
    title: "Bridal Robe",
    description:
      "A curated showcase of bespoke garments, crafted for life's most meaningful moments.",
    image: "/images/collections/hero-bridal-robe.jpg",
    alt: "Blak Meyd Bespoke Bridal Robe tailored in heirloom ivory silk satin with Chantilly lace",
    animationType: "liquid",
    kenBurns: {
      initial: { x: "0%", y: "-1.4%", scale: 1.00 },
      animate: { x: "0%", y: "1.2%", scale: 1.05 },
    },
  },
  {
    id: "reception-outfit",
    number: "03",
    category: "RECEPTION OUTFIT",
    title: "Reception Outfit",
    description:
      "A curated showcase of bespoke garments, crafted for life's most meaningful moments.",
    image: "/images/collections/hero-reception-outfit.jpg",
    alt: "Blak Meyd Bespoke Reception Outfit with sculpted midnight satin and gold beadwork",
    animationType: "silk",
    kenBurns: {
      initial: { x: "1.5%", y: "0%", scale: 1.00 },
      animate: { x: "-1.2%", y: "0%", scale: 1.045 },
    },
  },
];

// 4 seconds per slide as requested for automatic slideshow progression
const SLIDE_INTERVAL_MS = 4000;

/* ── SLIDE 01: SLOW EDITORIAL TYPEWRITER (KENTE GOWN) ── */
function TypewriterHeading({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <h1
      className="font-fraunces text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-light text-[#FBF9F4] tracking-tight leading-[1.05]"
      aria-label={text}
    >
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.05, delayChildren: 0.18 }}
        className="inline-block"
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0"
          >
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={{
                  hidden: { opacity: 0, y: 6, filter: "blur(4px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </h1>
  );
}

/* ── SLIDE 02: LIQUID / WATER WAVE REVEAL (BRIDAL ROBE) ── */
function LiquidHeading({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <h1
      className="font-fraunces text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-light text-[#FBF9F4] tracking-tight leading-[1.05]"
      aria-label={text}
    >
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.045, delayChildren: 0.15 }}
        className="inline-block"
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0"
          >
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 16,
                    skewX: -6,
                    scaleY: 0.9,
                    filter: "blur(6px)",
                  },
                  visible: {
                    opacity: 1,
                    y: [16, -2, 0],
                    skewX: [-6, 2, 0],
                    scaleY: [0.9, 1.02, 1],
                    filter: ["blur(6px)", "blur(1px)", "blur(0px)"],
                    transition: {
                      duration: 0.75,
                      ease: [0.25, 1, 0.5, 1],
                    },
                  },
                }}
                className="inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </h1>
  );
}

/* ── SLIDE 03: SILK UNFOLDING / MASK REVEAL (RECEPTION OUTFIT) ── */
function SilkUnfoldHeading({ text }: { text: string }) {
  return (
    <h1
      className="font-fraunces text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-light text-[#FBF9F4] tracking-tight leading-[1.05]"
      aria-label={text}
    >
      <motion.span
        initial={{
          clipPath: "inset(50% 0% 50% 0%)",
          opacity: 0.2,
          y: 12,
          scaleY: 0.86,
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          y: 0,
          scaleY: 1,
        }}
        transition={{
          duration: 0.85,
          delay: 0.18,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block origin-center"
      >
        {text}
      </motion.span>
    </h1>
  );
}

export default function CollectionsHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const activeSlide = COLLECTION_SLIDES[activeIndex];

  // Automatic gentle slide transition: 01 -> 02 -> 03 -> 01
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % COLLECTION_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % COLLECTION_SLIDES.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === 0 ? COLLECTION_SLIDES.length - 1 : prev - 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className="relative w-full h-screen min-h-[640px] max-h-[1100px] overflow-hidden bg-[#15150F] select-none flex flex-col justify-center"
      aria-label="Blak Meyd Collections Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── BACKGROUND SLIDESHOW WITH CONTINUOUS KEN BURNS MOTION ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          {/* Slide Transition Wrapper (handles crossfade opacity) */}
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.3,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            {/* Inner Ken Burns Motion Layer (camera drift & subtle scale) */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { x: "0%", y: "0%", scale: 1 }
                  : {
                      x: activeSlide.kenBurns.initial.x,
                      y: activeSlide.kenBurns.initial.y,
                      scale: activeSlide.kenBurns.initial.scale,
                    }
              }
              animate={
                shouldReduceMotion
                  ? { x: "0%", y: "0%", scale: 1 }
                  : {
                      x: activeSlide.kenBurns.animate.x,
                      y: activeSlide.kenBurns.animate.y,
                      scale: activeSlide.kenBurns.animate.scale,
                    }
              }
              transition={{
                duration: SLIDE_INTERVAL_MS / 1000,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="relative w-full h-full will-change-transform"
            >
              <Image
                src={activeSlide.image}
                alt={activeSlide.alt}
                fill
                priority={activeIndex === 0}
                quality={92}
                sizes="100vw"
                className="object-cover object-[72%_center] md:object-[center_center]"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ── LUXURY EDITORIAL LIGHT & SHADOW TREATMENT ── */}
        {/* Left directional vignette for clear typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#15150F]/90 via-[#15150F]/45 to-transparent sm:w-[68%] lg:w-[58%] pointer-events-none" />

        {/* Fine grain texture overlay for tactile print editorial realism */}
        <div className="grain-overlay absolute inset-0 pointer-events-none opacity-35" />

        {/* Atmospheric studio wall tagline in background (visible on wide screens) */}
        <div className="hidden 2xl:block absolute top-[28%] right-[18%] text-[#FBF9F4]/20 font-general-sans text-[11px] tracking-[0.35em] uppercase font-light pointer-events-none leading-relaxed text-right">
          MORE THAN A DRESS
          <br />
          A STORY
        </div>
      </div>

      {/* ── MAIN EDITORIAL CONTENT (LEFT-ALIGNED ASYMMETRIC COMPOSITION) ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 pt-16 sm:pt-20">
        <div className="max-w-xl xl:max-w-2xl">
          {/* Eyebrow: THE COLLECTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3 mb-4 sm:mb-6"
          >
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-[#E4ECE7]/80 font-medium">
              THE COLLECTIONS
            </span>
            <span className="h-[1px] w-6 bg-[#B98A2E]/60" />
          </motion.div>

          {/* Synchronized Animated Collection Typography with Outgoing Graceful Blur Dissolve */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                y: -10,
                filter: "blur(5px)",
                transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] },
              }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Collection Indicator: 01 / 02 / 03 + Category */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="flex items-center gap-3.5 text-xs sm:text-sm font-light text-[#B98A2E]"
              >
                <span className="font-mono text-sm sm:text-base tracking-[0.2em] font-semibold">
                  {activeSlide.number}
                </span>
                <span className="text-[#B98A2E]/40 font-light">/</span>
                <span className="tracking-[0.24em] uppercase text-[11px] sm:text-xs text-[#E4ECE7]/90 font-medium">
                  {activeSlide.category}
                </span>
              </motion.div>

              {/* Unique Art-Directed Editorial Headline Reveal per Slide */}
              {activeSlide.animationType === "typewriter" && (
                <TypewriterHeading text={activeSlide.title} />
              )}
              {activeSlide.animationType === "liquid" && (
                <LiquidHeading text={activeSlide.title} />
              )}
              {activeSlide.animationType === "silk" && (
                <SilkUnfoldHeading text={activeSlide.title} />
              )}

              {/* Refined Supporting Editorial Description */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className="text-sm sm:text-base lg:text-[17px] text-[#E4ECE7]/85 font-light leading-relaxed max-w-md sm:max-w-lg"
              >
                {activeSlide.description}
              </motion.p>

              {/* Subtle Gold Accent Separator Line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.42 }}
                className="pt-2 origin-left"
              >
                <div className="w-12 h-[1.5px] bg-[#B98A2E]/80" />
              </motion.div>

              {/* CTA: EXPLORE COLLECTIONS */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.52 }}
                className="pt-2 sm:pt-4"
              >
                <Link
                  href="/lookbook"
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-[#FBF9F4] hover:text-[#B98A2E] transition-colors py-2"
                >
                  <span className="relative">
                    EXPLORE THE COLLECTIONS
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent group-hover:bg-[#B98A2E] transition-colors duration-300" />
                  </span>
                  <ChevronRight
                    size={16}
                    className="text-[#B98A2E] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
