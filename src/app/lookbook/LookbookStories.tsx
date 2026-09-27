"use client";

import { useState } from "react";
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
    image: "/images/lookbook/session-04-bridesmaids.jpg",
    alt: "Four Ghanaian bridesmaids wearing bespoke Blak Meyd olive sage green satin corset gowns holding white bouquets",
    specs: {
      textile: "Lustrous Olive Silk Duchess Satin and Micro Tulle",
      hours: "140 Atelier Hours per Ensemble",
      silhouette: "Sculpted Sweetheart Bodice with Thigh Slit",
    },
  },
  {
    number: "05",
    title: "WEDDING GUEST",
    subtitle: "Made for the moment.",
    narrative:
      "Refined silhouettes created for celebrations where being beautifully dressed is part of the occasion.",
    image: "/images/lookbook/session-05-wedding-guest.jpg",
    alt: "Regal Ghanaian wedding guest in bespoke gold and black off shoulder couture gown with traditional headwrap",
    specs: {
      textile: "Bonwire Metallic Kente and Black Silk Velvet",
      hours: "165 Handcraft Hours",
      silhouette: "Off Shoulder Corset Gown with Crown Drape",
    },
  },
  {
    number: "06",
    title: "PHOTOSHOOT OUTFITS",
    subtitle: "Designed to be remembered.",
    narrative:
      "Statement pieces created to come alive through movement, light and the camera.",
    image: "/images/lookbook/session-06-photoshoot.jpg",
    alt: "Ghanaian muse wearing dramatic scarlet red silk faille couture gown with voluminous ruffled sleeves",
    specs: {
      textile: "Scarlet Silk Faille and Layered French Organza",
      hours: "190 Atelier Hours",
      silhouette: "Monumental Pleated Ruffle Sleeve Ballgown",
    },
  },
];

export default function LookbookStories() {
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null);

  return (
    <section
      id="lookbook-stories"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] w-full min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] flex flex-col justify-between py-4 sm:py-6 lg:py-6 xl:py-8 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 selection:bg-[#0E3B2E] selection:text-[#FBF9F4] overflow-hidden border-t border-[#15150F]/10"
      aria-label="Lookbook Spread Two: Pieces For Every Chapter"
    >
      {/* ── SECTION HEADER (PIECES FOR EVERY CHAPTER) ── */}
      <div className="w-full shrink-0 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 sm:pb-5 border-b border-[#15150F]/10">
        <div>
          {/* Centered Small Eyebrow with CSS Hairlines */}
          <div className="flex items-center gap-3 mb-1.5">
            <span
              className="inline-block w-8 sm:w-10 h-[1px] bg-[#C29D59]"
              aria-hidden="true"
            />
            <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.26em] uppercase text-[#9E7B3B]">
              MORE STORIES
            </span>
            <span
              className="inline-block w-8 sm:w-10 h-[1px] bg-[#C29D59]"
              aria-hidden="true"
            />
          </div>

          {/* Monumental Headline */}
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal uppercase tracking-tight text-[#15150F] leading-none">
            PIECES FOR EVERY CHAPTER.
          </h2>
        </div>

        {/* Editorial Side Quote */}
        <div className="flex items-center text-left max-w-xs xl:max-w-sm">
          <span
            className="w-[1.5px] h-10 bg-[#15150F]/25 mr-3.5 shrink-0"
            aria-hidden="true"
          />
          <p className="text-[10.5px] xl:text-[11px] font-sans text-[#524D45] leading-relaxed uppercase tracking-[0.14em]">
            Different occasions.
            <br />
            The same commitment to
            <br />
            craftsmanship, elegance
            <br />
            and individuality.
          </p>
        </div>
      </div>

      {/* ── THREE COLUMN EDITORIAL SPREAD (04, 05, 06) ── */}
      <div className="flex-1 min-h-0 w-full py-3 lg:py-4">
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 xl:gap-8 items-stretch">
          {STORIES.map((story) => (
            <div
              key={story.number}
              className="h-full min-h-0 flex flex-col justify-between group"
            >
              {/* Photo Card */}
              <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[58%] xl:h-[62%] min-h-0 overflow-hidden bg-[#F5F2EB]">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Block */}
              <div className="flex-1 min-h-0 flex flex-col justify-between pt-3 sm:pt-4">
                <div>
                  {/* Number with Gold Hairline */}
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="font-fraunces text-2xl lg:text-2xl xl:text-3xl text-[#15150F] leading-none">
                      {story.number}
                    </span>
                    <span
                      className="inline-block w-8 sm:w-10 h-[1px] bg-[#C29D59]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-fraunces text-lg sm:text-xl lg:text-xl xl:text-2xl font-normal uppercase tracking-tight text-[#15150F] leading-tight mb-1">
                    {story.title}
                  </h3>

                  {/* Italic Serif Subhead */}
                  <p className="font-fraunces text-xs sm:text-[13px] italic font-normal text-[#9E7B3B] mb-2 leading-snug">
                    {story.subtitle}
                  </p>

                  {/* Narrative Paragraph */}
                  <p className="text-[11px] sm:text-[11.5px] xl:text-xs font-sans text-[#524D45] leading-relaxed line-clamp-3">
                    {story.narrative}
                  </p>
                </div>

                {/* View Story Action */}
                <div className="pt-2 sm:pt-3">
                  <button
                    type="button"
                    onClick={() => setActiveStory(story)}
                    className="group inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-[#15150F] hover:text-[#9E7B3B] transition-colors cursor-pointer"
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

      {/* ── BESPOKE STORY MODAL ── */}
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
