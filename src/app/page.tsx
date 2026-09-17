import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
import AtelierHero from "@/components/hero/AtelierHero";
import AtelierIntro from "@/components/home/AtelierIntro";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import Footer from "@/components/layout/Footer";

const PROCESS_STEPS = [
  {
    step: "01",
    stage: "STAGE 01",
    title: "Creative Consultation",
    desc: "A private 1-on-1 session to define your silhouette, fabric palette, neckline contours, and occasion moodboard.",
  },
  {
    step: "02",
    stage: "STAGE 02",
    title: "24-Point Measurement",
    desc: "Comprehensive anatomical body dimensions captured in our Accra atelier or through guided private virtual appointment.",
  },
  {
    step: "03",
    stage: "STAGE 03",
    title: "Muslin Toile & Basted Fitting",
    desc: "A bespoke toile fitting in unbleached cotton muslin to sculpt drape, boning channels, and waist compression before cutting precious silks.",
  },
  {
    step: "04",
    stage: "STAGE 04",
    title: "Hand-Embroidery & Finish",
    desc: "Up to 140 artisanal hours anchoring authentic Bonwire Kente geometric silks, metallic lurex threads, and hand-finished blind hems.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FBF9F4] text-[#15150F] selection:bg-[#B98A2E] selection:text-[#15150F]">
      {/* ── 01: ATELIER HAUTE COUTURE HERO SHOWCASE ── */}
      <AtelierHero />

      {/* ── 02: ATELIER INTRODUCTION & MANIFESTO ── */}
      <AtelierIntro />

      {/* ── 03: FEATURED CURATED COLLECTIONS ── */}
      <FeaturedCollections />

      {/* ── 04: BESPOKE PROCESS PREVIEW ── */}
      <section
        id="process"
        className="relative z-10 bg-[#0E3B2E] text-[#FBF9F4] py-28 sm:py-36 px-6 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 border-b border-[#B98A2E]/30 mb-16">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#B98A2E]">
                Section 03 / Bespoke Protocol
              </span>
              <h2 className="font-fraunces text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight mt-3 leading-[1.12]">
                The Four-Stage <br />
                <span className="italic font-normal text-[#B98A2E]">Bespoke Journey.</span>
              </h2>
            </div>
            <p className="mt-6 lg:mt-0 text-xs sm:text-sm text-[#E4ECE7]/80 font-light leading-relaxed max-w-md">
              No off-the-rack sizing, no replicated patterns. Every commission is individually
              pattern-drafted, fitted in muslin toile, and handcrafted to your posture and silhouette.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative border-t border-[#B98A2E]/40 pt-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs tracking-widest text-[#B98A2E] block mb-3 font-medium">
                    {step.stage}
                  </span>
                  <h3 className="font-fraunces text-xl font-light text-[#FBF9F4] mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#E4ECE7]/70 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#B98A2E]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs text-[#E4ECE7]/60 tracking-wider uppercase font-light">
              Standard lead time: 4 to 8 weeks prior to event date &middot; Express commissions available
            </p>
            <Link
              href="/process"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#B98A2E] hover:text-[#FBF9F4] transition-colors"
            >
              <span>Explore Complete 7-Step Protocol</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 05: MASTER CRAFTSMANSHIP & PROVENANCE ── */}
      <section className="relative z-10 bg-[#FBF9F4] text-[#15150F] py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-[#E4ECE7]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#E4ECE7] bg-[#0E3B2E]/5">
                <Image
                  src="/images/craftsmanship.jpg"
                  alt="Blak Meyd Master Tailor Hand-Embroidering Kente Silk in Accra"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-[#15150F]/60 tracking-wider uppercase font-light">
                <span>Accra Atelier &middot; Hand-Embroidered Metallic Threading</span>
                <span>Bonwire Raw Silk</span>
              </div>
            </div>

            {/* Editorial Text Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#B98A2E]">
                Section 04 / Artisanal Integrity
              </span>

              <h2 className="font-fraunces text-3xl sm:text-5xl font-light text-[#15150F] tracking-tight leading-[1.14] mt-3">
                Centuries of Weaving. <br />
                <span className="italic font-normal text-[#0E3B2E]">Modern Couture Precision.</span>
              </h2>

              <p className="mt-6 text-[#15150F]/75 text-sm sm:text-base leading-relaxed font-light">
                At Blak Meyd, we honor the sovereign legacy of Ghanaian royal weavers while elevating
                traditional textiles into global haute couture silhouettes. Each creation reflects
                flawless internal corsetry, bespoke waist sculpting, and meticulously hand-finished hems.
              </p>

              <div className="mt-8 pt-8 border-t border-[#E4ECE7] space-y-6">
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#15150F]">
                    Authentic Bonwire Provenance
                  </h3>
                  <p className="text-xs text-[#15150F]/70 mt-1.5 leading-relaxed font-light">
                    Every strip of Kente is hand-loomed in Bonwire, Ashanti, preserving ancestral loom
                    rhythms and royal color compositions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#15150F]">
                    Single-Commission Integrity
                  </h3>
                  <p className="text-xs text-[#15150F]/70 mt-1.5 leading-relaxed font-light">
                    Your garment is never mass-produced. When your commission is complete, the pattern
                    remains registered exclusively to your private client profile.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0E3B2E] hover:text-[#B98A2E] transition-colors group"
                >
                  <span>Read The Full Craftsmanship Manifesto</span>
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06: PRIVATE CONSULTATION CTA ── */}
      <section className="relative z-10 bg-[#15150F] text-[#FBF9F4] py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-[#B98A2E]/20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#B98A2E]">
            Section 05 / Begin Your Commission
          </span>

          <h2 className="font-fraunces text-4xl sm:text-6xl font-light text-[#FBF9F4] mt-4 mb-6 leading-tight">
            Reserve Your <span className="italic font-normal text-[#B98A2E]">Private Consultation.</span>
          </h2>

          <p className="text-[#E4ECE7]/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10 font-light">
            Private 1-on-1 appointments available in our Accra atelier or worldwide via private virtual appointment.
            Standard consultation GHS 200 &middot; Bridal consultation GHS 800 (deducted from final garment cost).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-[#B98A2E] text-[#15150F] text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-200 hover:bg-[#0E3B2E] hover:text-[#FBF9F4] rounded-[2px]"
            >
              <Calendar size={14} />
              <span>Book Consultation</span>
            </Link>

            <a
              href="https://wa.me/233559883589"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 border border-[#FBF9F4]/30 text-[#FBF9F4] text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:border-[#B98A2E] hover:text-[#B98A2E] rounded-[2px]"
            >
              <span>WhatsApp Atelier (+233 55 988 3589)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 07: EDITORIAL ATELIER FOOTER ── */}
      <Footer />
    </div>
  );
}
