"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface CollectionItem {
  number: string;
  title: string;
  image: string;
  alt: string;
  href: string;
}

const SIGNATURE_COLLECTIONS: CollectionItem[] = [
  {
    number: "01",
    title: "Kente Gown",
    image: "/images/signature-kente-hd.jpg",
    alt: "Sculptural emerald and gold beaded bespoke Kente couture gown",
    href: "/collections#kente-gown",
  },
  {
    number: "02",
    title: "Reception Outfit",
    image: "/images/signature-reception-hd.jpg",
    alt: "Copper bronze satin reception gown with rosette shoulder flounces",
    href: "/collections#reception-outfit",
  },
  {
    number: "03",
    title: "Bridal Robe",
    image: "/images/signature-bridal-hd.jpg",
    alt: "Bespoke ivory sweetheart lace bridal gown with delicate sheer veil",
    href: "/collections#bridal-robe",
  },
  {
    number: "04",
    title: "Bridesmaid Outfits",
    image: "/images/signature-bridesmaid-hd.jpg",
    alt: "Dusty rose mauve one-shoulder draped bridesmaid gown",
    href: "/collections#bridesmaid-outfits",
  },
  {
    number: "05",
    title: "Other Occasions",
    image: "/images/signature-occasions-hd.jpg",
    alt: "Sculptural black and gold beaded couture gala evening gown",
    href: "/collections#other-occasions",
  },
];

export default function HomeSignatureCollections() {
  return (
    <section
      id="signature-collections"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] py-14 sm:py-18 lg:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-[#B98A2E]/15"
    >
      <div className="mx-auto max-w-[1500px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* ────────────────────────────────────────────────────────
              LEFT COLUMN: ARCHITECTURAL STONE ARCH PORTRAIT + EMERALD STRIP (~3.5 cols)
              Strictly height-bounded (max-h-[660px])
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-4 flex"
          >
            <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[620px] xl:h-[650px] max-h-[660px] flex overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              {/* Deep Emerald Brand Margin Strip */}
              <div className="w-16 sm:w-20 bg-[#0E3B2E] text-[#FBF9F4] flex flex-col justify-between py-6 sm:py-8 px-2 text-center shrink-0 border-r border-[#B98A2E]/20 relative z-10 select-none">
                {/* Top: Style For Every Chapter Of You */}
                <div className="flex items-start gap-2 text-[8px] sm:text-[8.5px] tracking-[0.24em] uppercase text-[#C5A059] font-sans font-medium text-left">
                  <span className="h-10 w-[1.5px] bg-[#B98A2E]/60 inline-block shrink-0" />
                  <div className="leading-tight">
                    <div>Style</div>
                    <div>For</div>
                    <div>Every</div>
                    <div>Chapter</div>
                    <div>Of You</div>
                  </div>
                </div>

                {/* Bottom: Blak Meyd / Accra, Ghana */}
                <div className="text-left text-[7.5px] sm:text-[8px] tracking-[0.24em] uppercase text-[#E4ECE7]/80 font-sans font-medium">
                  <div>Blak Meyd</div>
                  <div className="text-[#8E877B] text-[7px]">Accra, Ghana</div>
                  <span className="h-[1px] w-5 bg-[#B98A2E]/60 inline-block mt-2" />
                </div>
              </div>

              {/* Model Image in Architectural Archway */}
              <div className="relative flex-1 h-full bg-[#201D19] overflow-hidden group">
                <Image
                  src="/images/signature-arch-model.jpg"
                  alt="Ghanaian model in bespoke olive green backless gown with rosette bow and pooling train in stone archway"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                {/* Soft ambient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* ────────────────────────────────────────────────────────
              RIGHT MAIN STAGE: HEADER, ARCHED SWATCH, 5 CARDS & CONTROLS (~8.5 cols)
              ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between"
          >
            {/* ── TOP SECTION: HEADLINE & UPPER RIGHT ARCHED CUTOUT ── */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 relative">
              {/* Left Headline Area */}
              <div className="max-w-md lg:max-w-lg">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B98A2E] mb-3">
                  <span>Featured Collections</span>
                  <span className="h-[1px] w-12 sm:w-16 bg-[#B98A2E]/60" />
                </div>

                {/* Monumental Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.08] tracking-tight font-serif">
                  <span className="block font-semibold text-[#15150F] font-fraunces">
                    Occasions
                  </span>
                  <span className="block font-semibold text-[#15150F] font-fraunces">
                    Look Better
                  </span>
                  <span className="block font-normal italic text-[#B98A2E] font-fraunces mt-0.5">
                    Beside You.
                  </span>
                </h2>

                {/* Narrative */}
                <p className="mt-4 text-[13px] sm:text-[14px] leading-relaxed text-[#554E45] font-sans">
                  Explore a curated selection of our signature pieces, designed
                  for life&apos;s most memorable moments. Each creation is a
                  blend of artistry, precision and your unique story.
                </p>
              </div>

              {/* Right: Arched Cutout Swatch + Floating Emerald Badge + Quote */}
              <div className="hidden sm:flex items-start gap-4 lg:gap-6 shrink-0 relative pr-2">
                {/* Arched Beaded Couture Swatch */}
                <div className="relative w-28 lg:w-36 h-40 lg:h-48 rounded-t-full overflow-hidden bg-[#201D19] shadow-md border border-[#B98A2E]/20">
                  <Image
                    src="/images/signature-beaded-swatch-hd.jpg"
                    alt="Close up of gold beaded couture dress with sheer ivory silk tulle"
                    fill
                    sizes="180px"
                    className="object-cover"
                  />

                  {/* Overlapping Floating Dark Emerald Circle Badge */}
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#0E3B2E] text-[#FBF9F4] flex flex-col items-center justify-center text-center p-2 shadow-lg border border-[#B98A2E]/30 z-10 select-none">
                    <span className="text-[7.5px] lg:text-[8px] tracking-[0.22em] uppercase font-semibold text-[#E4ECE7] leading-tight">
                      More
                    </span>
                    <span className="text-[7.5px] lg:text-[8px] tracking-[0.22em] uppercase font-semibold text-[#E4ECE7] leading-tight">
                      Than
                    </span>
                    <span className="text-[7.5px] lg:text-[8px] tracking-[0.22em] uppercase font-semibold text-[#E4ECE7] leading-tight">
                      Fashion
                    </span>
                    <span className="h-[1px] w-5 bg-[#B98A2E]/70 mt-1 inline-block" />
                  </div>
                </div>

                {/* Top-Right Provenance Quote */}
                <div className="flex flex-col items-end text-right text-[8.5px] lg:text-[9px] tracking-[0.24em] uppercase text-[#736C61] font-sans font-medium pt-2">
                  <div>Bespoke</div>
                  <div>Garments</div>
                  <div>For A More</div>
                  <div>Meaningful</div>
                  <div>Tomorrow</div>
                  <span className="h-[1px] w-6 bg-[#B98A2E]/70 mt-2 inline-block" />
                </div>
              </div>
            </div>

            {/* ── MIDDLE SECTION: 5-COLUMN SIGNATURE COLLECTION STRIP ── */}
            <div className="mt-8 sm:mt-10 pt-4 border-t border-[#B98A2E]/15">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
                {SIGNATURE_COLLECTIONS.map((item) => (
                  <Link
                    key={item.number}
                    href={item.href}
                    className="group flex flex-col border-r border-[#B98A2E]/15 pr-2 sm:pr-3 last:border-r-0"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#201D19] shadow-xs group-hover:shadow-md transition-all duration-300">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Step Number & Title */}
                    <div className="mt-2.5">
                      <span className="text-[10px] tracking-[0.2em] font-sans text-[#736C61] font-medium block">
                        {item.number}
                      </span>
                      <h3 className="font-fraunces text-xs sm:text-[13px] font-normal text-[#15150F] group-hover:text-[#B98A2E] transition-colors mt-0.5 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── BOTTOM SECTION: SEE ALL COLLECTIONS LINK ── */}
            <div className="mt-8 sm:mt-10 pt-4 flex items-center justify-start">
              {/* — SEE ALL COLLECTIONS → */}
              <Link
                href="/collections"
                className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs tracking-[0.24em] uppercase font-semibold text-[#15150F] hover:text-[#B98A2E] transition-colors group"
              >
                <span className="h-[1px] w-8 sm:w-10 bg-[#B98A2E]/70 inline-block" />
                <span className="border-b border-[#15150F]/40 group-hover:border-[#B98A2E] pb-0.5">
                  See All Collections
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#B98A2E]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
