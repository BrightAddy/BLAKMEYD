"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

// WhatsApp Custom SVG Icon matching minimal editorial aesthetic
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9a1.5 1.5 0 0 0 1.5 1.5c.5 0 1-.5 1.5-.5s1 .5 1.5 1 .5 1 .5 1.5a1.5 1.5 0 0 1-1.5 1.5" />
    </svg>
  );
}

// Instagram Custom SVG Icon matching minimal editorial aesthetic
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface ContactMethod {
  number: string;
  category: string;
  title: string;
  primaryDetail: string;
  secondaryDetail: string;
  href: string;
  isExternal: boolean;
  icon: React.ReactNode;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    number: "01",
    category: "WHATSAPP",
    title: "Chat with us",
    primaryDetail: "+233 559883589",
    secondaryDetail: "Get a quick response on WhatsApp.",
    href: "https://wa.me/233559883589",
    isExternal: true,
    icon: <WhatsAppIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />,
  },
  {
    number: "02",
    category: "EMAIL",
    title: "Send us a message",
    primaryDetail: "blakmeyd@gmail.com",
    secondaryDetail: "We'll get back to you as soon as possible.",
    href: "mailto:blakmeyd@gmail.com",
    isExternal: false,
    icon: <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} />,
  },
  {
    number: "03",
    category: "INSTAGRAM",
    title: "Follow our journey",
    primaryDetail: "@blak_meyd",
    secondaryDetail: "See our latest creations and behind the scenes.",
    href: "https://instagram.com/blak_meyd",
    isExternal: true,
    icon: <InstagramIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />,
  },
];

export default function ContactInformation() {
  const shouldReduceMotion = useReducedMotion();

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

  return (
    <section
      id="contact-information"
      className="relative w-full bg-[#F5F2EB] text-[#15150F] py-20 sm:py-28 lg:py-36 border-t border-[#E5DDD0] overflow-hidden"
      aria-label="Contact Information"
    >
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* ── THREE-PART EDITORIAL COMPOSITION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
          {/* ══════════════════════════════════════════════════════════════
              LEFT COLUMN: EDITORIAL HEADING & SUPPORTING TEXT
          ══════════════════════════════════════════════════════════════ */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            className="lg:col-span-4 flex flex-col justify-between h-full"
          >
            <div>
              {/* Eyebrow: GET IN TOUCH */}
              <div className="flex items-center gap-3.5 mb-6 sm:mb-8">
                <span className="font-sans text-[11px] sm:text-xs tracking-[0.28em] text-[#15150F]/70 font-medium uppercase">
                  GET IN TOUCH
                </span>
                <span
                  className="w-16 sm:w-20 h-[1px] bg-[#B98A2E]/70"
                  aria-hidden="true"
                />
              </div>

              {/* Large Display Heading: We’re / Here / For You. */}
              <h2 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[58px] xl:text-[68px] leading-[0.98] tracking-tight text-[#0E3B2E] mb-8 sm:mb-10">
                <span className="block">We’re</span>
                <span className="block italic text-[#B98A2E] font-normal my-0.5 sm:my-1">
                  Here
                </span>
                <span className="block">For You.</span>
              </h2>

              {/* Supporting Paragraph with Vertical Gold Line */}
              <div className="flex items-start gap-4 sm:gap-5 max-w-sm">
                <span
                  className="w-[1.5px] h-14 sm:h-16 bg-[#B98A2E] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="font-sans text-xs sm:text-[13px] md:text-sm leading-relaxed text-[#15150F]/80 font-normal">
                  Have a question, need more information, or ready to get in
                  touch with us? We&apos;d love to hear from you.
                </p>
              </div>
            </div>

            {/* Bottom Editorial Anchor */}
            <div className="hidden lg:flex items-center gap-3.5 pt-12 xl:pt-16">
              <span className="font-sans text-[10px] tracking-[0.28em] text-[#15150F]/60 font-medium uppercase">
                REACH US DIRECTLY
              </span>
              <span className="w-14 h-[1px] bg-[#B98A2E]/60" aria-hidden="true" />
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════════════
              CENTER COLUMN: REFINED ATELIER PHOTOGRAPH
          ══════════════════════════════════════════════════════════════ */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            className="lg:col-span-4 flex justify-center items-center"
          >
            <div className="relative w-full aspect-[4/5] max-w-[420px] lg:max-w-none overflow-hidden">
              <Image
                src="/images/contact/contact-info-atelier.jpg"
                alt="Blak Meyd haute couture atelier workspace with draped emerald velvet, fabric swatch cards, and gowns on rack"
                fill
                priority={false}
                sizes="(max-width: 1024px) 90vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT COLUMN: VERTICAL LIST OF CONTACT METHODS
          ══════════════════════════════════════════════════════════════ */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={2}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <div className="divide-y divide-[#DDD5C5]/70 border-y border-[#DDD5C5]/70">
              {CONTACT_METHODS.map((item) => (
                <a
                  key={item.category}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between py-5 sm:py-6 lg:py-5 xl:py-6 transition-colors duration-200"
                  aria-label={`${item.category}: ${item.title}`}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Dark Emerald Circular Icon Badge with Gold Symbol */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0E3B2E] text-[#B98A2E] flex items-center justify-center shrink-0 border border-[#B98A2E]/25 transition-all duration-300 group-hover:border-[#B98A2E]/60 group-hover:bg-[#07241C]">
                      {item.icon}
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col">
                      <span className="font-sans text-[9px] sm:text-[9.5px] tracking-[0.24em] uppercase text-[#15150F]/60 font-medium mb-0.5">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl text-[#15150F] group-hover:text-[#0E3B2E] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-[13px] text-[#15150F]/70 mt-0.5 font-normal">
                        <span className="font-medium text-[#15150F]/90">
                          {item.primaryDetail}
                        </span>
                        {" · "}
                        <span>{item.secondaryDetail}</span>
                      </p>
                    </div>
                  </div>

                  {/* Subtle Gold Hover Arrow */}
                  <div className="text-[#B98A2E] shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.8} />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
