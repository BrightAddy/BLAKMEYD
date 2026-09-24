"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ArchivalWork {
  id: string;
  code: string;
  title: string;
  category: string;
  occasion: string;
  specs: {
    loom: string;
    hours: string;
    fitting: string;
  };
  image: string;
  alt: string;
}

const FEATURED_ARCHIVE: ArchivalWork[] = [
  {
    id: "fw-01",
    code: "BM-FW-01",
    title: "The Sovereign Akwasidae Column",
    category: "Kente Gown",
    occasion: "Royal Ancestral Investiture &bull; Kumasi",
    specs: {
      loom: "Bonwire Raw Silk & Metallic Lurex",
      hours: "155 Handcraft Hours",
      fitting: "24-Point Anatomical Corsetry",
    },
    image: "/images/hero/ivory-couture.jpg",
    alt: "Sculptural Blak Meyd bespoke ivory and metallic gown photographed in Accra atelier",
  },
  {
    id: "fw-02",
    code: "BM-FW-02",
    title: "Emerald Peplum Gala Architecture",
    category: "Graduation & Gala",
    occasion: "Pan-African State Banquet &bull; Accra",
    specs: {
      loom: "Heavyweight Silk Crepe & Ashanti Weft",
      hours: "120 Handcraft Hours",
      fitting: "Basted Muslin Prototype",
    },
    image: "/images/hero/emerald-gallery.jpg",
    alt: "Bespoke emerald green gown with sculptural structural drape",
  },
  {
    id: "fw-03",
    code: "BM-FW-03",
    title: "L'Or de Bonwire Peplum Drape",
    category: "Kente Gown",
    occasion: "Traditional Engagement &bull; Accra",
    specs: {
      loom: "Custom Weft Palette & Gold Bullion",
      hours: "140 Handcraft Hours",
      fitting: "Single-Client Pattern Archive",
    },
    image: "/images/collection-kente-gown.jpg",
    alt: "Bespoke Blak Meyd traditional engagement gown with gold hand-beading",
  },
  {
    id: "fw-04",
    code: "BM-FW-04",
    title: "Duchess Sweetheart Reception Train",
    category: "Reception Outfit",
    occasion: "Bridal Reception &bull; Kempinski Accra",
    specs: {
      loom: "Italian Duchess Silk & Freshwater Pearls",
      hours: "185 Handcraft Hours",
      fitting: "Double-Boned Internal Corset",
    },
    image: "/images/collection-bridal-reception.jpg",
    alt: "Bespoke ivory duchess silk reception gown by Blak Meyd",
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="featured-work"
      className="relative z-10 bg-[#FAF8F3] text-[#15150F] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-16 border-t border-[#E4ECE7]"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b border-[#E4ECE7] mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B98A2E] mb-2">
              <span className="h-[1px] w-6 bg-[#B98A2E]" />
              <span>Section 07 &bull; Atelier Portfolio Archive</span>
            </div>

            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#15150F] leading-[1.08]">
              Archive of Singular <br />
              <span className="italic font-normal text-[#0E3B2E]">Artisanal Commissions.</span>
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 max-w-md">
            <p className="text-xs sm:text-sm text-[#15150F]/70 font-light leading-relaxed">
              Every commission enters the Blak Meyd permanent archive with its unique serial code, 
              weaver lineage record, and anatomical pattern blueprint.
            </p>
            <div className="mt-4">
              <Link
                href="/lookbook"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-medium text-[#0E3B2E] hover:text-[#B98A2E] transition-colors"
              >
                <span>Explore Full Lookbook Gallery</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── 4-COL ARCHIVAL GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURED_ARCHIVE.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-white border border-[#E4ECE7] hover:border-[#B98A2E]/60 transition-all duration-300 rounded-[2px] overflow-hidden shadow-xs hover:shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#181411]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Code Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 bg-[#120E0B]/90 backdrop-blur-md border border-[#B98A2E]/40 text-[#B98A2E] text-[9px] font-mono tracking-widest uppercase rounded-[1px]">
                  {item.code}
                </div>

                {/* Bottom Overlay Category */}
                <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#B98A2E] block">
                    {item.category}
                  </span>
                  <p 
                    dangerouslySetInnerHTML={{ __html: item.occasion }}
                    className="text-[10px] text-white/80 font-light truncate"
                  />
                </div>
              </div>

              {/* Information Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-fraunces text-lg font-normal text-[#15150F] leading-snug group-hover:text-[#0E3B2E] transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-3 space-y-1.5 border-t border-[#E4ECE7] pt-3 text-[10.5px] font-mono text-[#15150F]/70">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Loom:</span>
                      <span className="text-right truncate max-w-[140px] text-[#15150F]">{item.specs.loom}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Hours:</span>
                      <span className="text-[#0E3B2E] font-medium">{item.specs.hours}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Fit:</span>
                      <span className="text-right text-[#15150F]">{item.specs.fitting}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E4ECE7]">
                  <Link
                    href={`/collections#${item.category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center justify-between w-full text-[10px] font-mono uppercase tracking-widest text-[#0E3B2E] group-hover:text-[#B98A2E] transition-colors"
                  >
                    <span>View Garment File</span>
                    <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
