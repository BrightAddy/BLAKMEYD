"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Heart, Crown, Calendar } from "lucide-react";

interface BridalOccasion {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  leadTime: string;
  image: string;
  alt: string;
  href: string;
}

const OCCASIONS: BridalOccasion[] = [
  {
    id: "traditional-engagement",
    badge: "Royal Heritage",
    title: "Traditional Engagement Gowns",
    subtitle: "Custom Bonwire Kente · Gold Bullion Embroidery",
    description:
      "A sovereign tribute to Ghanaian marital ceremonies. We commission master weavers in Bonwire to loom ancestral geometric proverbs in raw silk and metallic threads, shaped over our 24-point anatomical corsetry.",
    features: [
      "Custom loom-ordered Kente colourways",
      "Hand-sewn gold bullion & Swarovski crystals",
      "Engineered posture-enhancing corset foundation",
    ],
    leadTime: "8 – 12 Weeks Prior to Ceremony",
    image: "/images/collection-kente-gown.jpg",
    alt: "Bespoke Blak Meyd traditional engagement Kente gown with royal embroidery",
    href: "/collections#kente-gown",
  },
  {
    id: "white-reception",
    badge: "Haute Couture Bridal",
    title: "White & Reception Silhouettes",
    subtitle: "Duchess Silk Satin · Pearl Hand-Beading",
    description:
      "Sculptural glamour for your defining walk. Flowing architectural trains, sculpted sweetheart necklines, and opulent micro-pearl hand-beading designed to move effortlessly from vows to evening dance.",
    features: [
      "Heavyweight Italian duchess silk satin",
      "Detachable sculptural cape or cathedral train",
      "Individual muslin toile prototype fitting",
    ],
    leadTime: "10 – 14 Weeks Prior to Ceremony",
    image: "/images/collection-bridal-reception.jpg",
    alt: "Bespoke ivory duchess silk wedding reception gown by Blak Meyd",
    href: "/collections#reception-outfit",
  },
  {
    id: "milestone-gala",
    badge: "Occasion Tailoring",
    title: "Milestone Galas & Honors",
    subtitle: "State Dinners · Graduation · Prom · Investitures",
    description:
      "For moments when you demand to stand apart. Asymmetrical drapes, bold structural peplums, and unexpected pairings of deep jewel crepes with heritage hand-loomed accents.",
    features: [
      "Architectural cape and peplum drapes",
      "Single-client pattern archive guarantee",
      "Express 3–4 week slots upon private request",
    ],
    leadTime: "4 – 6 Weeks Prior to Event",
    image: "/images/collection-milestone-outfit.jpg",
    alt: "Bespoke emerald and Kente gala evening dress for milestone event",
    href: "/collections#graduation-outfits",
  },
];

export default function BridalSpecialOccasions() {
  return (
    <section
      id="bridal"
      className="relative z-10 bg-[#120E0B] text-[#FBF9F4] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* ── AMBIENT GOLD RADIANCE ── */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(185,138,46,0.09),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(14,59,46,0.15),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b border-[#B98A2E]/25 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B98A2E] mb-2">
              <span className="h-[1px] w-6 bg-[#B98A2E]" />
              <span>Section 06 &bull; Bridal &amp; Occasion Atelier</span>
            </div>

            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#FBF9F4] leading-[1.08]">
              Heirloom Creations for <br />
              <span className="italic font-normal text-[#B98A2E]">Your Sovereign Moments.</span>
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 max-w-md">
            <p className="text-xs sm:text-sm text-[#E4ECE7]/75 font-light leading-relaxed">
              Every bridal and ceremonial commission is handled with white-glove intimacy. 
              We strictly cap our quarterly bridal commissions to preserve uncompromising perfection.
            </p>
            <div className="mt-4 flex items-center gap-4 text-[10px] font-mono tracking-widest text-[#B98A2E] uppercase">
              <span className="flex items-center gap-1.5">
                <Crown size={12} />
                <span>Bridal Consultation: GHS 800</span>
              </span>
              <span className="text-white/30">&bull;</span>
              <span className="text-[#E4ECE7]/70">Credited to Commission</span>
            </div>
          </div>
        </div>

        {/* ── 3-OCCASION CARDS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
          {OCCASIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-[#181411] border border-[#B98A2E]/20 hover:border-[#B98A2E]/70 transition-all duration-500 rounded-[2px] overflow-hidden shadow-2xl"
            >
              {/* Card Photo Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181411] via-transparent to-black/30 pointer-events-none" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#120E0B]/90 backdrop-blur-md border border-[#B98A2E]/50 text-[#B98A2E] text-[9.5px] font-mono tracking-widest uppercase rounded-[2px]">
                  {item.badge}
                </div>

                {/* Lead Time Micro Badge */}
                <div className="absolute bottom-4 right-4 z-10 px-2.5 py-1 bg-black/80 backdrop-blur-xs border border-white/20 text-white/80 text-[9px] font-mono tracking-wider uppercase">
                  {item.leadTime}
                </div>
              </div>

              {/* Card Editorial Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#B98A2E] block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-fraunces text-2xl font-light text-[#FBF9F4] leading-snug group-hover:text-[#B98A2E] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs text-[#E4ECE7]/70 font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-5 space-y-2 border-t border-[#B98A2E]/15 pt-4">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-[11px] text-[#E4ECE7]/85 font-light">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#B98A2E]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-[#B98A2E]/20 flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#B98A2E] group-hover:text-[#FBF9F4] transition-colors"
                  >
                    <span>View Silhouettes</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href={`/book?type=${item.id === "milestone-gala" ? "standard" : "bridal"}`}
                    className="text-[10px] font-mono tracking-wider uppercase text-white/60 hover:text-white transition-colors"
                  >
                    Reserve Fitting
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── BRIDAL CONCIERGE BANNER ── */}
        <div className="mt-10 p-6 sm:p-8 bg-gradient-to-r from-[#0E3B2E]/70 via-[#181411] to-[#0E3B2E]/50 border border-[#B98A2E]/30 rounded-[2px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono tracking-[0.24em] text-[#B98A2E] uppercase block">
              Dedicated Bridal Atelier Concierge
            </span>
            <h4 className="font-fraunces text-xl sm:text-2xl text-[#FBF9F4] font-normal">
              Planning a Destination Wedding or Diaspora Fitting?
            </h4>
            <p className="text-xs text-[#E4ECE7]/75 font-light max-w-xl">
              We coordinate private fitting schedules for traveling brides arriving in Accra, 
              or dispatch our master tailor for London, Toronto, and New York VIP fittings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/book?type=bridal"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B98A2E] text-[#15150F] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#FBF9F4] transition-colors rounded-[2px]"
            >
              <Calendar size={14} />
              <span>Book Bridal Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
