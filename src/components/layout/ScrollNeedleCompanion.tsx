"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function ScrollNeedleCompanion() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate needle Y position (from 10% to 90% of screen height)
  const needleY = useTransform(smoothProgress, [0, 1], ["8vh", "88vh"]);
  const threadHeight = useTransform(smoothProgress, [0, 1], ["8vh", "90vh"]);

  // Reveal companion as user scrolls past initial hero entrance (~15% of total page)
  const opacity = useTransform(smoothProgress, [0.08, 0.15], [0, 1]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.aside
      style={{ opacity }}
      aria-hidden="true"
      className="fixed left-4 lg:left-8 top-0 bottom-0 z-40 hidden md:flex flex-col items-center pointer-events-none select-none"
    >
      {/* Background guide rail (faint gold hairline) */}
      <div className="absolute top-16 bottom-16 w-[1px] bg-[#B98A2E]/15" />

      {/* Active Stitched Thread (drawn down as you scroll) */}
      <motion.div
        style={{ height: threadHeight }}
        className="absolute top-0 w-[1px] bg-gradient-to-b from-[#B98A2E] via-[#D4AF37] to-[#F3E5AB] shadow-[0_0_8px_rgba(212,175,55,0.45)]"
      />

      {/* Golden Needle that travels along the thread */}
      <motion.div
        style={{ top: needleY }}
        className="absolute -left-[9px] flex flex-col items-center"
      >
        {/* Needle SVG (Haute Couture Tailor Needle) */}
        <svg
          width="20"
          height="48"
          viewBox="0 0 20 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_8px_rgba(185,138,46,0.6)]"
        >
          {/* Needle Eye */}
          <path
            d="M10 2C8.5 2 7 3.5 7 5V12C7 13.5 8.5 15 10 15C11.5 15 13 13.5 13 12V5C13 3.5 11.5 2 10 2Z"
            stroke="#D4AF37"
            strokeWidth="1.2"
            fill="#15150F"
          />
          <ellipse cx="10" cy="8.5" rx="1.2" ry="3.5" fill="#D4AF37" />

          {/* Needle Shaft and Point */}
          <path
            d="M8.5 12L9.5 45C9.6 46.5 10.4 46.5 10.5 45L11.5 12H8.5Z"
            fill="url(#needle-metallic-gradient)"
          />

          {/* Golden Highlights */}
          <line x1="10" y1="12" x2="10" y2="44" stroke="#FFF7D6" strokeWidth="0.6" strokeOpacity="0.8" />

          <defs>
            <linearGradient id="needle-metallic-gradient" x1="8" y1="2" x2="12" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B98A2E" />
              <stop offset="0.4" stopColor="#F5D77F" />
              <stop offset="0.7" stopColor="#D4AF37" />
              <stop offset="1" stopColor="#8A6318" />
            </linearGradient>
          </defs>
        </svg>

        {/* Delicate Golden Stitch Node */}
        <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] ring-2 ring-[#B98A2E]/30 animate-pulse mt-0.5" />
      </motion.div>
    </motion.aside>
  );
}
