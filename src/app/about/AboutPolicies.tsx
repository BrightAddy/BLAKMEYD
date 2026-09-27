"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface PolicyItem {
  id: string;
  number: string;
  title1: string;
  title2?: string;
  summary: string;
  detailedPoints: string[];
}

const POLICIES: PolicyItem[] = [
  {
    id: "consultations",
    number: "01",
    title1: "CONSULTATIONS",
    summary:
      "A non refundable fee applies for all consultations and is deducted from your final cost if you proceed.",
    detailedPoints: [
      "Private one on one session with our creative director in our atelier.",
      "Comprehensive silhouette study, moodboard curation, and fabric sampling.",
      "The full consultation fee is credited toward your bespoke garment invoice.",
    ],
  },
  {
    id: "payments",
    number: "02",
    title1: "PAYMENTS",
    summary:
      "A 70% deposit is required to commence production, with the balance due before collection.",
    detailedPoints: [
      "Production begins immediately upon deposit confirmation.",
      "Fabric sourcing and pattern drafting commence once funds clear.",
      "Final balance is settled at the final fitting prior to collection or dispatch.",
    ],
  },
  {
    id: "timelines",
    number: "03",
    title1: "TIMELINES",
    summary:
      "Standard production timelines apply. Express orders (under 14 working days) attract an additional fee and require full payment upfront.",
    detailedPoints: [
      "Standard bespoke turnaround is 4 to 6 weeks from measurement confirmation.",
      "Express orders require dedicated atelier overtime and expedited fabric procurement.",
      "Milestone updates are communicated after each toile fitting.",
    ],
  },
  {
    id: "changes",
    number: "04",
    title1: "CHANGES",
    summary:
      "Limited changes are allowed. Significant design changes may affect timelines and cost.",
    detailedPoints: [
      "Silhouette adjustments are permitted during initial toile fittings.",
      "Structural redesigns after primary fabric cutting incur rework fees.",
      "Any scope alterations are documented and approved in writing.",
    ],
  },
  {
    id: "collection",
    number: "05",
    title1: "COLLECTION",
    title2: "& DELIVERY",
    summary:
      "You will be notified once your garment is ready for collection or delivery. Delivery options and costs will be discussed during your consultation.",
    detailedPoints: [
      "Complimentary white glove atelier pickup with final garment inspection.",
      "Secure insured courier delivery available across Accra and worldwide.",
      "Custom archival garment bag and cedar hanger included with every order.",
    ],
  },
  {
    id: "care",
    number: "06",
    title1: "CARE &",
    title2: "RESPONSIBILITY",
    summary:
      "We take great care with your garments, but we advise clients to attend fittings as scheduled and provide accurate measurements.",
    detailedPoints: [
      "Specialist dry clean only for hand beaded and embellished fabrics.",
      "Prompt attendance at scheduled fittings guarantees flawless architectural drape.",
      "Complimentary lifetime minor stitch maintenance for bespoke pieces.",
    ],
  },
];

export default function AboutPolicies() {
  const [activeModal, setActiveModal] = useState<PolicyItem | null>(null);

  return (
    <section
      id="policies"
      className="relative z-10 bg-[#FAF7F2] text-[#15150F] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-[#B98A2E]/20"
      aria-label="Policies and Client Information: The Details Matter"
    >
      {/* ── AMBIENT GLOW ACCENT ── */}
      <div
        className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(185,138,46,0.05),transparent_70%)] pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* ══════════════════════════════════════════════════════════════
            HEADER SPLIT: 3 COLUMNS WITH REFINED VERTICAL HAIRLINES
            ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 lg:pb-16 border-b border-[#B98A2E]/25 items-center">
          
          {/* ── COLUMN 1: EYEBROW & MONUMENTAL HEADLINE (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow with gold horizontal rule */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.26em] uppercase text-[#8C6D38]">
                Policies & Client Information
              </span>
              <span className="w-12 sm:w-16 h-[1px] bg-[#B98A2E]/50 inline-block" />
            </div>

            {/* Headline */}
            <h2 className="font-fraunces text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light leading-[1.04] tracking-tight text-[#15150F]">
              <span className="block font-normal">
                The Details
              </span>
              <span className="block font-normal italic text-[#9E7B3B] mt-0.5">
                Matter.
              </span>
            </h2>

            {/* Motto */}
            <p className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.24em] uppercase text-[#7A7265] mt-4 sm:mt-5">
              Clear Process. Mutual Respect. Exceptional Results.
            </p>
          </div>

          {/* ── COLUMN 2: EDITORIAL NARRATIVE (4 cols, with left divider on lg) ── */}
          <div className="lg:col-span-4 lg:border-l lg:border-[#B98A2E]/25 lg:pl-8 flex flex-col justify-center">
            <p className="font-serif text-[14px] sm:text-[14.5px] lg:text-[15px] leading-relaxed text-[#4A433A] font-light">
              To ensure a smooth and enjoyable experience, we have outlined key
              information about our process, payments, timelines and more. These
              guidelines help us maintain the quality and personalized service
              Blak Meyd is known for.
            </p>
          </div>

          {/* ── COLUMN 3: PHILOSOPHICAL MOTTO WITH TWIN RULES (3 cols) ── */}
          <div className="lg:col-span-3 lg:border-l lg:border-[#B98A2E]/25 lg:pl-8 flex flex-col justify-center items-start lg:items-center text-left lg:text-center py-2">
            <span className="w-12 h-[1px] bg-[#B98A2E]/60 block mb-3 sm:mb-4" />
            <span className="text-[10.5px] sm:text-[11px] font-sans font-semibold tracking-[0.26em] uppercase text-[#8C6D38] leading-relaxed">
              A More Conscious
              <br />
              Approach to Fashion.
            </span>
            <span className="w-12 h-[1px] bg-[#B98A2E]/60 block mt-3 sm:mt-4" />
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════════
            SIX PILLARS GRID (01 to 06) WITH SUBTLE VERTICAL DIVIDERS
            ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[#B98A2E]/20 py-8 lg:py-12">
          {POLICIES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between py-6 px-3 sm:p-5 lg:px-4 lg:py-4 xl:px-5 group hover:bg-[#F3EFE6]/60 transition-colors rounded-lg"
            >
              <div>
                {/* Number with gold accent line */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-fraunces text-base sm:text-lg font-normal text-[#9E7B3B]">
                    {item.number}
                  </span>
                  <span className="w-8 sm:w-10 h-[1px] bg-[#9E7B3B]/60 inline-block" />
                </div>

                {/* Policy Title */}
                <h3 className="text-[11px] sm:text-[11.5px] font-sans font-bold tracking-[0.18em] uppercase text-[#15150F] leading-snug">
                  {item.title1}
                  {item.title2 && (
                    <>
                      <br />
                      {item.title2}
                    </>
                  )}
                </h3>

                {/* Subtle Underline */}
                <span className="w-6 h-[1.5px] bg-[#9E7B3B]/50 block mt-2 mb-3.5 group-hover:w-10 transition-all duration-300" />

                {/* Policy Summary */}
                <p className="font-serif text-[12.5px] sm:text-[13px] leading-relaxed text-[#554E45] font-light">
                  {item.summary}
                </p>
              </div>

              {/* Action Link: Learn More */}
              <button
                type="button"
                onClick={() => setActiveModal(item)}
                className="mt-6 pt-3 flex items-center gap-2 text-[10px] font-sans font-semibold tracking-[0.22em] uppercase text-[#8C6D38] group-hover:text-[#15150F] transition-colors focus:outline-none cursor-pointer"
                aria-label={`Learn more about ${item.title1} policy`}
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════════
            BOTTOM BANNER: OUR COMMITMENT (DEEP EMERALD ATELIER)
            ══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-4 sm:mt-6 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#071813] border border-[#B98A2E]/30 shadow-[0_20px_50px_rgba(7,24,19,0.25)] p-8 sm:p-10 lg:p-12 text-[#FBF9F4]"
        >
          {/* Ambient Lighting Gradient */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(14,59,46,0.4),transparent_65%)] pointer-events-none select-none"
            aria-hidden="true"
          />

          {/* Decorative Curved Gold Stroke in Bottom Left */}
          <div
            className="absolute -bottom-10 -left-10 w-64 h-64 pointer-events-none select-none"
            aria-hidden="true"
          >
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full opacity-35">
              <path
                d="M 10,190 C 40,110 110,40 190,10"
                stroke="#C5A265"
                strokeWidth="1.5"
              />
              <path
                d="M 30,190 C 60,130 130,60 190,30"
                stroke="#C5A265"
                strokeWidth="0.75"
                strokeOpacity="0.5"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Column: Eyebrow + Headline */}
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C5A265]">
                  Our Commitment
                </span>
                <span className="w-12 h-[1px] bg-[#C5A265]/60 inline-block" />
              </div>

              <h3 className="font-fraunces text-2xl sm:text-3xl lg:text-[2.5rem] font-light leading-[1.1] tracking-tight text-[#FBF9F4]">
                <span className="block font-normal">
                  Your Confidence
                </span>
                <span className="block font-normal italic text-[#C5A265] mt-0.5">
                  Comes First.
                </span>
              </h3>
            </div>

            {/* Vertical Hairline Divider on LG */}
            <div className="hidden lg:block w-[1px] h-20 bg-[#C5A265]/30" />

            {/* Right Column: Narrative + Brandmark */}
            <div className="max-w-xl flex flex-col justify-center space-y-4">
              <p className="font-serif text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#D8D2C6] font-light">
                These policies are in place to protect both you and our creative
                process, ensuring a respectful, transparent and enjoyable
                experience from start to finish.
              </p>

              <div className="pt-1">
                <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[#C5A265]">
                  Blak Meyd
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* ══════════════════════════════════════════════════════════════
          INTERACTIVE POLICY DETAIL MODAL
          ══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-[#FAF7F2] text-[#15150F] rounded-2xl border border-[#B98A2E]/30 shadow-2xl p-6 sm:p-8 overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#15150F]/5 hover:bg-[#15150F]/10 flex items-center justify-center text-[#15150F]/70 hover:text-[#15150F] transition-colors"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Number and Title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-fraunces text-sm font-normal text-[#9E7B3B]">
                  {activeModal.number}
                </span>
                <span className="w-6 h-[1px] bg-[#9E7B3B]/60 inline-block" />
                <span className="text-[10px] font-sans font-semibold tracking-[0.24em] uppercase text-[#8C6D38]">
                  Atelier Policy
                </span>
              </div>

              <h4 className="font-fraunces text-2xl font-normal text-[#15150F] tracking-tight">
                {activeModal.title1} {activeModal.title2 || ""}
              </h4>

              <p className="font-serif text-[13.5px] leading-relaxed text-[#4A433A] font-light mt-3 pb-4 border-b border-[#B98A2E]/20">
                {activeModal.summary}
              </p>

              {/* Key Provisions */}
              <div className="mt-5 space-y-3">
                <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#8C6D38] block">
                  Key Guidelines
                </span>
                {activeModal.detailedPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B98A2E] mt-0.5 shrink-0" />
                    <p className="font-serif text-[13px] text-[#554E45] leading-relaxed font-light">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="mt-7 pt-5 border-t border-[#B98A2E]/20 flex items-center justify-between">
                <Link
                  href="/book"
                  onClick={() => setActiveModal(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#071813] text-[#FBF9F4] text-[11px] font-sans font-semibold tracking-[0.2em] uppercase hover:bg-[#0E3B2E] transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A265]" />
                  <span>Book Consultation</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7A7265] hover:text-[#15150F] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
