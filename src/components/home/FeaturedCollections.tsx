"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface CollectionItem {
  id: string;
  code: string;
  categoryNumber: string;
  title: string;
  categoryName: string;
  description: string;
  provenance: string;
  hours: string;
  image: string;
  alt: string;
  href: string;
}

const COLLECTIONS: CollectionItem[] = [
  {
    id: "kente-couture",
    code: "BM-KC-01",
    categoryNumber: "01",
    title: "Kente Couture Gowns",
    categoryName: "Heritage Luxury",
    description:
      "Hand-loomed Bonwire geometric weaves sculpted into statuesque off-shoulder evening silhouettes with integrated corsetry.",
    provenance: "Ashanti Bonwire Silk · Internal Boning",
    hours: "140 Atelier Hours",
    image: "/images/collection-kente-gown.jpg",
    alt: "Ghanaian model in bespoke Blak Meyd Kente off-shoulder evening gown in modern gallery",
    href: "/collections#kente-gown",
  },
  {
    id: "bridal-reception",
    code: "BM-BR-02",
    categoryNumber: "02",
    title: "Reception & Bridal Gowns",
    categoryName: "Bridal Atelier",
    description:
      "Heirloom ivory duchess silk satin with sculpted sweetheart corsetry, micro-pearl hand embroidery, and fluid architectural split train.",
    provenance: "Duchess Silk Satin · Gold Threading",
    hours: "180 Atelier Hours",
    image: "/images/collection-bridal-reception.jpg",
    alt: "Bespoke ivory duchess silk bridal reception gown with gold hand-beading on Accra terrace",
    href: "/collections#reception-outfit",
  },
  {
    id: "milestone-gala",
    code: "BM-MS-03",
    categoryNumber: "03",
    title: "Graduation & Prom Galas",
    categoryName: "Milestone Occasions",
    description:
      "Sharp bespoke evening tailoring fusing deep emerald silk crepe with hand-woven Kente panels and sculptural cape drapes.",
    provenance: "Emerald Crepe & Kente Weave",
    hours: "95 Atelier Hours",
    image: "/images/collection-milestone-outfit.jpg",
    alt: "Young woman in bespoke emerald green and Kente evening gown on illuminated staircase",
    href: "/collections#graduation-outfits",
  },
];

// Documented 9 Categories per PROJECT.md Section 2.3
const ALL_CATEGORIES = [
  { name: "Kente Gown", slug: "kente-gown", number: "01" },
  { name: "Reception Outfit", slug: "reception-outfit", number: "02" },
  { name: "Bridal Robe", slug: "bridal-robe", number: "03" },
  { name: "Bridesmaid Outfits", slug: "bridesmaid-outfits", number: "04" },
  { name: "Wedding Guest", slug: "wedding-guest", number: "05" },
  { name: "Photoshoot Outfits", slug: "photoshoot-outfits", number: "06" },
  { name: "Graduation Outfits", slug: "graduation-outfits", number: "07" },
  { name: "Prom Dress", slug: "prom-dress", number: "08" },
  { name: "Other Outfits", slug: "other-outfits", number: "09" },
];

export default function FeaturedCollections() {
  return (
    <section
      id="collections"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-[#B98A2E]/20"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E4ECE7] pb-8 mb-16 sm:mb-24">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#B98A2E]">
              Section 02 / Curated Works
            </span>
            <h2 className="font-fraunces text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#15150F] mt-3 leading-[1.15]">
              Featured <br />
              <span className="italic font-normal text-[#0E3B2E]">Bespoke Creations.</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#15150F]/70 font-light leading-relaxed">
              Every commission represents a singular dialogue between the client and our Accra atelier.
              Explore our core silhouettes crafted for life&rsquo;s most extraordinary milestones.
            </p>
          </div>

          <Link
            href="/collections"
            className="mt-8 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0E3B2E] hover:text-[#B98A2E] transition-colors group"
          >
            <span>Explore All 9 Categories</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ── ASYMMETRICAL EDITORIAL CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {COLLECTIONS.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group flex flex-col justify-between border border-[#E4ECE7] bg-[#FBF9F4] transition-all duration-500 hover:border-[#B98A2E]/60 hover:shadow-[0_12px_40px_rgba(21,21,15,0.06)] ${
                index === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Image Container with editorial museum framing */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0E3B2E]/5">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                />

                {/* Minimalist Editorial Tag - top right */}
                <div className="absolute top-3 right-3 bg-[#15150F]/85 backdrop-blur-sm text-[#FBF9F4] text-[10px] font-mono tracking-wider px-2.5 py-1 border border-[#B98A2E]/30">
                  {item.code}
                </div>
              </div>

              {/* Card Meta & Editorial Text */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between border-t border-[#E4ECE7]">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#B98A2E] mb-2 uppercase">
                    <span>{item.categoryNumber} / {item.categoryName}</span>
                    <span className="text-[#15150F]/40">{item.hours}</span>
                  </div>

                  <h3 className="font-fraunces text-2xl font-light text-[#15150F] group-hover:text-[#0E3B2E] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs text-[#15150F]/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E4ECE7] flex items-center justify-between text-[11px] font-medium tracking-[0.18em] uppercase text-[#0E3B2E] group-hover:text-[#B98A2E] transition-colors">
                  <span>View Silhouette Details</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── 9 DOCUMENTED CATEGORIES DIRECTORY (PROJECT.md Section 2.3) ── */}
        <div className="mt-20 pt-12 border-t border-[#E4ECE7]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[11px] font-semibold tracking-[0.26em] uppercase text-[#B98A2E]">
              Atelier Garment Archive &middot; 9 Bespoke Categories
            </span>
            <span className="text-xs text-[#15150F]/50 font-mono">
              PROJECT.MD APPROVED ARCHIVE
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {ALL_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/collections#${cat.slug}`}
                className="group border border-[#E4ECE7] p-4 bg-[#FBF9F4] hover:bg-[#0E3B2E] hover:text-[#FBF9F4] hover:border-[#0E3B2E] transition-all duration-300 flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono text-[#B98A2E] group-hover:text-[#B98A2E] transition-colors">
                  {cat.number}
                </span>
                <span className="mt-3 text-xs font-medium tracking-wide uppercase group-hover:text-[#FBF9F4] transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
