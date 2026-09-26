"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

export interface StudioLocationConfig {
  address?: string;
  locationDescription?: string;
  mapUrl?: string;
}

interface StudioLocationProps {
  config?: StudioLocationConfig;
}

export default function StudioLocation({ config = {} }: StudioLocationProps) {
  const shouldReduceMotion = useReducedMotion();
  const mapUrl =
    config.mapUrl ||
    "https://www.google.com/maps/dir/?api=1&destination=Blak+Meyd,+Accra,+Ghana";

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.75,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : custom * 0.12,
      },
    }),
  };

  const imageRevealVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      id="studio-location"
      className="relative w-full bg-[#FBF9F4] text-[#15150F] py-20 sm:py-28 lg:py-36 border-t border-[#DDD5C5]/60 overflow-hidden"
      aria-label="Studio and Location Information"
    >
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* ── ASYMMETRIC TWO-COLUMN EDITORIAL COMPOSITION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* ══════════════════════════════════════════════════════════════
              LEFT: LARGE EDITORIAL ATELIER PHOTOGRAPH (~58% on Desktop)
          ══════════════════════════════════════════════════════════════ */}
          <motion.div
            variants={imageRevealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 relative w-full overflow-hidden"
          >
            <div className="relative w-full aspect-[16/10.5] sm:aspect-[16/10] overflow-hidden">
              <Image
                src="/images/contact/studio-location-atelier.jpg"
                alt="Blak Meyd couture fashion atelier with emerald draped silk, design sketches, gold garment rack with bespoke gowns, and sunlit arched window"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT: EDITORIAL STUDIO DETAILS (~42% on Desktop)
          ══════════════════════════════════════════════════════════════ */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Eyebrow: OUR STUDIO */}
            <div className="flex items-center gap-3.5 mb-6 sm:mb-8">
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.28em] text-[#15150F]/70 font-medium uppercase">
                OUR STUDIO
              </span>
              <span
                className="w-16 sm:w-20 h-[1px] bg-[#B98A2E]/70"
                aria-hidden="true"
              />
            </div>

            {/* Display Heading: Visit Our / Atelier. */}
            <h2 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[58px] xl:text-[68px] leading-[0.98] tracking-tight text-[#0E3B2E] mb-6 sm:mb-8">
              <span className="block">Visit Our</span>
              <span className="block italic text-[#B98A2E] font-normal my-0.5 sm:my-1">
                Atelier.
              </span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="font-sans text-xs sm:text-[13px] md:text-sm leading-relaxed text-[#15150F]/80 font-normal max-w-lg mb-8 sm:mb-10">
              Our studio is where ideas, fabrics and craftsmanship come
              together. We welcome you to reach out and arrange a visit or
              discuss your bespoke needs.
            </p>

            {/* Understated Editorial Divider */}
            <div
              className="w-full h-[1px] bg-[#DDD5C5]/70 mb-8 sm:mb-10"
              aria-hidden="true"
            />

            {/* ── INFORMATION AREA: STUDIO & GOOGLE MAPS DIRECTIONS ── */}
            <div className="flex items-start gap-4 sm:gap-5">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Google Maps directions to Blak Meyd studio"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0E3B2E] text-[#B98A2E] flex items-center justify-center shrink-0 border border-[#B98A2E]/25 transition-transform duration-300 hover:scale-105 hover:border-[#B98A2E]/60 shadow-sm"
              >
                <MapPin
                  className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                  strokeWidth={1.8}
                />
              </a>

              <div className="flex flex-col">
                <span className="font-sans text-[9px] sm:text-[9.5px] tracking-[0.24em] uppercase text-[#15150F]/60 font-medium mb-1">
                  STUDIO
                </span>

                {config.address ? (
                  <p className="font-sans text-xs sm:text-[13px] text-[#15150F]/90 font-medium leading-relaxed mb-2.5">
                    {config.address}
                  </p>
                ) : (
                  <p className="font-sans text-xs sm:text-[13px] text-[#15150F]/75 font-normal leading-relaxed max-w-sm mb-2.5">
                    {config.locationDescription ||
                      "Get directions to our studio location upon appointment confirmation."}
                  </p>
                )}

                {/* Google Maps Directions Action Link */}
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-[11px] sm:text-xs tracking-[0.16em] uppercase font-medium text-[#B98A2E] hover:text-[#0E3B2E] transition-colors w-fit"
                >
                  <span className="border-b border-[#B98A2E]/50 group-hover/link:border-[#0E3B2E] pb-0.5 transition-colors">
                    Get Directions on Google Maps
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
