"use client";

import { useState, useEffect, useRef } from "react";

interface TestimonialItem {
  id: string;
  name: string;
  category: string;
  quote: string;
  tagline: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "ama",
    name: "A M A",
    category: "BRIDAL CLIENT",
    quote:
      "Blak Meyd made me feel so confident and elegant on my big day. The attention to detail was exceptional and the entire experience felt so personal.",
    tagline: "A DAY I'LL ALWAYS CHERISH.",
  },
  {
    id: "efua",
    name: "E F U A",
    category: "OCCASION WEAR CLIENT",
    quote:
      "From our first consultation to the final fitting, everything was seamless. My outfit was exactly what I envisioned — even better. I’ve never felt more confident.",
    tagline: "MORE THAN AN OUTFIT, IT WAS A VERSION OF ME.",
  },
  {
    id: "naa",
    name: "N A A",
    category: "RETURNING CLIENT",
    quote:
      "The quality, the fit, the entire experience was outstanding. Blak Meyd truly understands style and individuality. I’ll definitely be coming back.",
    tagline: "TIMELESS PIECES. LASTING IMPRESSIONS.",
  },
  {
    id: "akosua",
    name: "A K O S U A",
    category: "GALA & MILESTONE CLIENT",
    quote:
      "Stepping out in my bespoke Blak Meyd gown felt transformative. The silhouette, the gold-threaded accents, and the impeccable fit commanded every room.",
    tagline: "AN UNFORGETTABLE PRESENCE.",
  },
  {
    id: "yaa",
    name: "PHILOMENA",
    category: "BESPOKE EVENING CLIENT",
    quote:
      "The craftsmanship is unmatched anywhere else in Accra. Blak Meyd didn’t just tailor a dress; they sculpted pure confidence made uniquely for my silhouette.",
    tagline: "CONFIDENCE WOVEN INTO EVERY THREAD.",
  },
];

// Two identical sets create a seamless infinite loop track
const MARQUEE_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Drag interaction state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  // Ongoing smooth right-to-left scrolling loop (requestAnimationFrame)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animId: number;
    let lastTime = performance.now();

    // Constant right-to-left scroll speed (~45px per second, elegant luxury tempo)
    const scrollSpeed = 0.75;

    const loop = (currentTime: number) => {
      // Normalize delta for 60Hz / 120Hz / 144Hz displays; cap delta to prevent jumps after tab switch
      const delta = Math.min((currentTime - lastTime) / (1000 / 60), 2.5);
      lastTime = currentTime;

      if (!isPaused && !isDragging && container) {
        container.scrollLeft += scrollSpeed * (delta || 1);

        // When passing halfway through the duplicated track, seamlessly wrap around
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0 && container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isDragging]);


  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftStart(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    scrollRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <section
      id="testimonials"
      className="relative z-10 bg-[#F3EDE2] text-[#15150F] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#B98A2E]/20"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14 relative z-10">
        {/* ════════════════════════════════════════════════════════════
            TOP HEADER: EYEBROW, HEADLINE, EDITORIAL NOTE & CONTROLS
            ════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12 mb-10 sm:mb-14">
          {/* Left: Eyebrow + Headline */}
          <div className="flex-1">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B98A2E] block mb-2 sm:mb-3 font-sans">
              Client Stories
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.05] tracking-tight font-serif">
              <span className="font-light text-[#15150F] block font-fraunces">
                Different Women.
              </span>
              <span className="font-normal italic text-[#9B7038] block mt-1 font-fraunces">
                Same Confidence.
              </span>
            </h2>
          </div>

          {/* Center: Vertical Divider + Editorial Copy */}
          <div className="flex items-center gap-6 lg:gap-8 max-w-xl">
            <div className="hidden lg:block w-[1px] h-20 bg-[#15150F]/20 flex-shrink-0" />
            <div>
              <p className="font-serif italic text-sm sm:text-[15px] leading-relaxed text-[#554E45]">
                From brides to professionals, from milestone celebrations to everyday elegance — our clients choose Blak Meyd for pieces that fit their lives, their stories and their individuality.
              </p>
              <div className="flex items-center gap-2 mt-3 text-[10px] tracking-[0.24em] uppercase text-[#736C61] font-sans font-medium">
                <span className="h-[1px] w-6 bg-[#15150F]/40 inline-block" />
                <span>Real People. Real Experiences.</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          ONGOING RIGHT-TO-LEFT SCROLLING TRACK (PAUSES ON HOVER)
          ════════════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden my-4 group">
        {/* Soft edge gradient fades matching warm champagne #F3EDE2 */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#F3EDE2] via-[#F3EDE2]/85 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#F3EDE2] via-[#F3EDE2]/85 to-transparent z-20 pointer-events-none" />

        {/* Continuous scrollable track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isDragging) setIsPaused(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className={`flex gap-6 sm:gap-7 overflow-x-hidden py-4 px-6 sm:px-12 select-none [&::-webkit-scrollbar]:hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
        >
          {MARQUEE_ITEMS.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative shrink-0 w-[300px] sm:w-[350px] lg:w-[380px] rounded-2xl p-7 sm:p-9 lg:p-10 flex flex-col justify-between min-h-[350px] sm:min-h-[380px] transition-all duration-400 ease-out bg-[#FAF7F2] border border-[#E2DAD0] shadow-sm hover:border-[#B98A2E]/70 hover:shadow-lg hover:scale-[1.015]"
            >
              {/* Top: Gold Quote Mark + Quote Text */}
              <div>
                <div className="mb-3 sm:mb-4">
                  <span className="font-fraunces text-4xl sm:text-5xl text-[#B98A2E] leading-none select-none">
                    “
                  </span>
                </div>
                <p className="font-serif italic text-[13.5px] sm:text-[14.5px] lg:text-[15px] leading-relaxed text-[#352F2A]">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

                {/* Bottom Section: Author + Tagline */}
                <div>
                  {/* Author Line */}
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-[12.5px] tracking-[0.25em] uppercase text-[#15150F] font-sans font-semibold">
                      <span className="h-[1px] w-5 sm:w-6 bg-[#15150F]/40 inline-block" />
                      <span>{item.name}</span>
                    </div>
                    <span className="text-[9px] sm:text-[9.5px] tracking-[0.22em] uppercase text-[#7D766B] block mt-1 font-sans">
                      {item.category}
                    </span>
                  </div>

                  {/* Thin Divider Line */}
                  <div className="w-full h-[1px] bg-[#15150F]/10 my-4 sm:my-5" />

                  {/* Tagline */}
                  <div className="text-[8.5px] sm:text-[9.5px] tracking-[0.24em] uppercase text-[#736C61] font-sans font-medium text-center">
                    {item.tagline}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Hover Cue Banner */}
        <div className="text-center mt-3">
          <span className="text-[9px] sm:text-[9.5px] tracking-[0.26em] uppercase text-[#8E877B] font-sans font-medium">
            — Hover any story to pause and read —
          </span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          BOTTOM PHILOSOPHY BAR: CONTOUR CURVES, STACKED TEXT & QUOTE
          ════════════════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14 relative z-10">
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-14 border-t border-[#15150F]/10 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 relative">
          {/* Left: Flowing Golden Contour Curves & Stacked Text */}
          <div className="relative pl-2 sm:pl-4">
            <svg
              className="absolute -top-14 -left-8 sm:-left-12 w-48 sm:w-64 h-32 sm:h-40 pointer-events-none opacity-35 text-[#B98A2E]"
              viewBox="0 0 240 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-10 90 C 40 110, 80 30, 150 65 C 200 90, 220 20, 260 45"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M-20 75 C 30 95, 65 15, 135 50 C 185 75, 205 10, 245 35"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <path
                d="M0 105 C 50 125, 95 45, 165 80 C 215 105, 235 30, 275 55"
                stroke="currentColor"
                strokeWidth="0.6"
              />
            </svg>
            <div className="relative z-10 flex flex-col text-[10px] sm:text-[10.5px] tracking-[0.26em] uppercase text-[#736C61] font-sans font-medium">
              <span>PEOPLE</span>
              <span className="mt-1">STORIES</span>
              <span className="mt-1">CONFIDENCE</span>
              <span className="w-5 h-[1px] bg-[#B98A2E]/60 mt-2 inline-block" />
            </div>
          </div>

          {/* Center & Right: Philosophy Quote and Tagline */}
          <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[2.1rem] text-[#15150F] leading-tight">
              &ldquo;It&apos;s not just about what you wear,
              <span className="block sm:inline sm:ml-2 text-[#9B7038]">
                but how it makes you feel.&rdquo;
              </span>
            </blockquote>
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <span className="hidden md:inline-block w-16 lg:w-28 h-[1px] bg-[#15150F]/20" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#736C61] font-sans font-medium whitespace-nowrap">
                THE BLAK MEYD PHILOSOPHY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
