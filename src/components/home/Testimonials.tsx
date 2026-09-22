"use client";

import { motion } from "motion/react";
import { Quote, Sparkles, Star } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  client: string;
  role: string;
  occasion: string;
  location: string;
  commissionType: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-01",
    quote:
      "When I stepped into my traditional engagement gown, I wept. The Bonwire Kente wasn't just fabric—it felt alive, sculpted precisely to every contour of my spine. Guests flew in from London and could not stop speaking about the corsetry.",
    client: "Dr. Ama Poku-Boateng",
    role: "Bride & Surgeon",
    occasion: "Traditional Engagement Ceremony",
    location: "Accra & London",
    commissionType: "Bespoke Kente Gown",
  },
  {
    id: "test-02",
    quote:
      "Living in New York, I was initially nervous about coordinating a bespoke gala gown from across the Atlantic. The Blak Meyd digital portal and virtual fitting protocol were flawless. The dress arrived in Manhattan fitting like a glove.",
    client: "Evelyn Mensah-Reid",
    role: "Managing Director, Global Finance",
    occasion: "Pan-African Gala & Honors",
    location: "Manhattan, New York",
    commissionType: "Emerald Peplum Gala Column",
  },
  {
    id: "test-03",
    quote:
      "Blak Meyd redefines what African luxury means on the international stage. The 24-point measurement and basted muslin fitting completely transform how a garment sits on the shoulders. It is pure art.",
    client: "Nana Akua Adomako",
    role: "Cultural Patron & Barrister",
    occasion: "State Banquet & Reception",
    location: "Kumasi & Geneva",
    commissionType: "Duchess Silk Reception Silhouette",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative z-10 bg-[#FAF8F3] text-[#15150F] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-16 border-t border-[#E4ECE7]"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── HEADER ── */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B98A2E] mb-2">
            <span className="h-[1px] w-6 bg-[#B98A2E]" />
            <span>Section 09 &bull; Patron Testimonials</span>
            <span className="h-[1px] w-6 bg-[#B98A2E]" />
          </div>

            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#15150F] leading-[1.08]">
              Echoes of <br />
              <span className="italic font-normal text-[#0E3B2E]">Transformed Presence.</span>
            </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#15150F]/70 font-light leading-relaxed">
            The intimate words of patrons who entrusted Blak Meyd with life&rsquo;s most memorable ceremonies.
          </p>
        </div>

        {/* ── 3-CARD EDITORIAL SPREAD ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-9 bg-white border border-[#E4ECE7] hover:border-[#B98A2E]/50 transition-all duration-300 rounded-[2px] shadow-xs hover:shadow-xl flex flex-col justify-between relative group"
            >
              <div>
                {/* Gold Quote Icon & Commission Badge */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E4ECE7]/60">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B98A2E]">
                    {t.commissionType}
                  </span>
                  <div className="flex items-center gap-1 text-[#B98A2E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Quote Body */}
                <p className="font-fraunces text-base sm:text-lg italic text-[#15150F]/85 font-light leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Patron Attribution */}
              <div className="pt-5 border-t border-[#E4ECE7]">
                <h4 className="font-fraunces text-base font-normal text-[#15150F]">
                  {t.client}
                </h4>
                <p className="text-[11px] text-[#15150F]/65 font-light mt-0.5">
                  {t.role}
                </p>
                <div className="flex items-center justify-between mt-3 text-[9.5px] font-mono tracking-wider uppercase text-gray-400">
                  <span>{t.occasion}</span>
                  <span className="text-[#0E3B2E] font-medium">{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
