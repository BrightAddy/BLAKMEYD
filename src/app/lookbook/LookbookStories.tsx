"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles } from "lucide-react";

interface StoryItem {
  number: string;
  title: string;
  subtitle: string;
  narrative: string;
  image: string;
  alt: string;
  colSpanClass: string;
  specs: {
    textile: string;
    hours: string;
    silhouette: string;
  };
}

const STORIES: StoryItem[] = [
  {
    number: "04",
    title: "BRIDESMAID OUTFITS",
    subtitle: "Together, beautifully.",
    narrative:
      "Coordinated pieces designed to complement the celebration while allowing each woman to retain her own unique presence.",
    image: "/images/lookbook/lookbook-04-bridesmaids-couture-purple-v3.jpg",
    alt: "Ghanaian bridesmaids wearing bespoke Blak Meyd architectural royal purple silk duchess satin couture gowns holding calla lily and orchid bouquets",
    colSpanClass: "lg:col-span-4 xl:col-span-4",
    specs: {
      textile: "Heavyweight Royal Purple Silk Duchess Satin",
      hours: "155 Atelier Hours per Ensemble",
      silhouette: "Architectural One Shoulder and Off Shoulder Cowl Corsetry",
    },
  },
  {
    number: "05",
    title: "WEDDING GUEST",
    subtitle: "Made for the moment.",
    narrative:
      "Refined silhouettes created for celebrations where being beautifully dressed is part of the occasion.",
    image: "/images/lookbook/lookbook-05-wedding-guest-candid-hd.jpg",
    alt: "Glamorous Ghanaian wedding guest wearing bespoke bronze and gold couture evening gown in garden wedding in Accra",
    colSpanClass: "lg:col-span-4 xl:col-span-4",
    specs: {
      textile: "Shimmering Bronze and Gold Metallic Silk Crepe",
      hours: "165 Handcraft Hours",
      silhouette: "Sculptural Off Shoulder Bodice with Side Train",
    },
  },
  {
    number: "06",
    title: "PHOTOSHOOT OUTFITS",
    subtitle: "Designed to be remembered.",
    narrative:
      "Statement pieces created to come alive through movement, light and the camera.",
    image: "/images/lookbook/lookbook-06-photoshoot-editorial-hd.jpg",
    alt: "Ghanaian muse wearing dramatic scarlet red silk faille couture gown with sculptural ruffled cascading puff sleeves",
    colSpanClass: "lg:col-span-4 xl:col-span-4",
    specs: {
      textile: "Scarlet Red Heavy Silk Faille and Crisp Organza",
      hours: "190 Atelier Hours",
      silhouette: "Monumental Pleated Ruffle Sleeve Ballgown",
    },
  },
];

export default function LookbookStories() {
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveStory(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="lookbook-stories"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] w-full min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] flex flex-col justify-between py-3 sm:py-4 lg:py-5 xl:py-6 px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 selection:bg-[#0E3B2E] selection:text-[#FBF9F4] overflow-hidden border-t border-[#15150F]/10"
      aria-label="Lookbook Spread: Sessions 04, 05, and 06"
    >
      {/* ── 16:9 THREE COLUMN EDITORIAL SPREAD ── */}
      <div className="h-full w-full flex-1 min-h-0">
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-5 xl:gap-6 items-stretch">
          {STORIES.map((story) => (
            <div
              key={story.number}
              className="h-full min-h-0 flex flex-col justify-between group"
            >
              {/* ── TOP SECTION: HIGH RESOLUTION PHOTOGRAPHIC PLATE (~62% OF SPREAD) ── */}
              <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[62%] xl:h-[63%] min-h-0 overflow-hidden bg-[#F5F2EB]">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top lg:object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                />
              </div>

              {/* ── BOTTOM SECTION: EDITORIAL TEXT BLOCK WITH VERTICAL ACCENT HAIRLINE (~38% OF SPREAD) ── */}
              <div className="flex-1 min-h-0 flex flex-col justify-between pt-3.5 sm:pt-4 lg:pt-4 xl:pt-5 pl-4 sm:pl-5 lg:pl-5 xl:pl-6 border-l border-[#C29D59]/40">
                <div>
                  {/* Number with Gold Hairline */}
                  <div className="flex items-center gap-2.5 mb-1.5 sm:mb-2">
                    <span className="font-fraunces text-2xl sm:text-3xl xl:text-4xl text-[#15150F] leading-none">
                      {story.number}
                    </span>
                    <span
                      className="inline-block w-8 sm:w-10 h-[1px] bg-[#C29D59]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-fraunces text-xl sm:text-2xl xl:text-[26px] font-normal uppercase tracking-tight text-[#15150F] leading-tight mb-1 sm:mb-1.5">
                    {story.title}
                  </h3>

                  {/* Italic Serif Subtitle in Antique Gold */}
                  <p className="font-fraunces text-xs sm:text-[13px] xl:text-sm italic font-normal text-[#9E7B3B] mb-2 sm:mb-2.5 leading-snug">
                    {story.subtitle}
                  </p>

                  {/* Narrative Body Copy */}
                  <p className="text-[11px] sm:text-xs xl:text-[12.5px] font-sans text-[#524D45] leading-relaxed line-clamp-3">
                    {story.narrative}
                  </p>
                </div>

                {/* View Story Action Link */}
                <div className="pt-2 sm:pt-3">
                  <button
                    type="button"
                    onClick={() => setActiveStory(story)}
                    className="group inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] xl:text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#15150F] hover:text-[#9E7B3B] transition-colors cursor-pointer"
                  >
                    <span>VIEW STORY</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#15150F] group-hover:text-[#9E7B3B] group-hover:translate-x-1.5 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BESPOKE STORY MODAL (QUICK-VIEW EDITORIAL) ── */}
      <AnimatePresence>
        {activeStory && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-sm"
            onClick={() => setActiveStory(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FBF9F4] text-[#15150F] p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-start"
            >
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                aria-label="Close story view"
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-[#15150F] hover:text-[#9E7B3B] hover:rotate-90 transition-all duration-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden bg-[#F5F2EB] shrink-0">
                <Image
                  src={activeStory.image}
                  alt={activeStory.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between h-full pt-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-fraunces text-2xl text-[#15150F]">
                      {activeStory.number}
                    </span>
                    <span
                      className="inline-block w-8 h-[1px] bg-[#C29D59]"
                      aria-hidden="true"
                    />
                    <span className="font-fraunces text-sm italic text-[#9E7B3B]">
                      {activeStory.subtitle}
                    </span>
                  </div>

                  <h3 className="font-fraunces text-3xl sm:text-4xl font-normal uppercase tracking-tight text-[#15150F] mb-3">
                    {activeStory.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] font-sans text-[#524D45] leading-relaxed mb-6">
                    {activeStory.narrative}
                  </p>

                  <div className="border-t border-[#15150F]/10 pt-5 space-y-3 mb-8">
                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        TEXTILE AND EMBELLISHMENT
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeStory.specs.textile}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        ATELIER CRAFT HOURS
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeStory.specs.hours}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        SILHOUETTE ARCHITECTURE
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeStory.specs.silhouette}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#15150F]/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#0E3B2E] text-[#FBF9F4] text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#07241A] transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C29D59]" />
                    <span>BOOK AN ATELIER CONSULTATION</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
