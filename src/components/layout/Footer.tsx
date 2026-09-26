"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUp } from "lucide-react";

/* ── SOCIAL ICONS (CLEAN MINIMAL SVGS) ── */
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.7V16a7 7 0 1 1-7-7c.7 0 1.4.1 2 .3V12z" />
    </svg>
  );
}

function PinterestIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.1-2 .1-2.9l1.4-5.8s-.3-.7-.3-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.8-2.3 3.8-5.6 0-2.9-2.1-5-5.1-5a5.3 5.3 0 0 0-5.5 5.3c0 1 .4 2.1 1 2.7.1.1.1.2.1.3l-.3 1.4c0 .2-.2.3-.4.2-1.7-.8-2.8-3.2-2.8-5.2 0-4.2 3.1-8.1 8.9-8.1 4.7 0 8.3 3.4 8.3 7.8 0 4.7-2.9 8.4-7 8.4-1.4 0-2.7-.7-3.1-1.6l-.8 3.2c-.3 1.2-1.1 2.6-1.7 3.5A10 10 0 1 0 12 2z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Our Process", href: "/process" },
  { label: "Book a Consultation", href: "/book" },
  { label: "Contact", href: "/contact" },
];

const ABOUT_LINKS = [
  { label: "Our Story", href: "/about" },
  { label: "Mission & Vision", href: "/about#philosophy" },
  { label: "The Atelier", href: "/about#craftsmanship" },
  { label: "Bespoke Approach", href: "/about#approach" },
  { label: "Policies", href: "/about#policies" },
];

const COLLECTION_CATEGORIES = [
  { label: "Kente Gown", href: "/collections#kente-gown" },
  { label: "Reception Outfit", href: "/collections#reception-outfit" },
  { label: "Bridal Robe", href: "/collections#bridal-robe" },
  { label: "Bridesmaid Outfits", href: "/collections#bridesmaid-outfits" },
  { label: "Wedding Guest", href: "/collections#wedding-guest" },
  { label: "Photoshoot Outfits", href: "/collections#photoshoot-outfits" },
  { label: "Graduation Outfits", href: "/collections#graduation-outfits" },
  { label: "Prom Dress", href: "/collections#prom-dress" },
  { label: "Other Outfits", href: "/collections#other-outfits" },
];

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      className="relative z-10 bg-[#061A14] text-[#FBF9F4] overflow-hidden pt-20 sm:pt-24 lg:pt-28 border-t border-[#B98A2E]/25"
      role="contentinfo"
    >
      {/* ── DARKER, RICHER LUXURY EMERALD ATMOSPHERE GRADIENT ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04120D]/95 via-[#072018]/90 to-[#030E0A] pointer-events-none" />

      {/* Decorative faint background watermark on right side */}
      <div className="absolute right-0 bottom-12 w-96 h-96 opacity-[0.035] pointer-events-none select-none hidden lg:block">
        <Image
          src="/images/blakmeyd-logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* ═════════════════════════════════════════════════════════════════
            01: MAIN FOUR-COLUMN NAVIGATION GRID
        ═════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 pb-16 sm:pb-20 border-b border-[#FBF9F4]/10">
          {/* ── COLUMN 1: BRAND IDENTITY (COL-SPAN 4) ── */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            {/* EXACT LOGO FROM NAVBAR */}
            <Link
              href="/"
              className="group inline-flex flex-col items-start select-none mb-6"
              aria-label="Blak Meyd — Home"
            >
              {/* Gold Monogram Icon */}
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 mb-4 flex-shrink-0">
                <Image
                  src="/images/blakmeyd-logo.png"
                  alt="Blak Meyd BM Gold Monogram Logo"
                  fill
                  sizes="64px"
                  className="object-contain drop-shadow-[0_2px_12px_rgba(185,138,46,0.35)] transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Brand Typography */}
              <span className="font-serif text-2xl sm:text-[28px] font-normal tracking-[0.18em] text-[#FBF9F4] group-hover:text-[#B98A2E] transition-colors leading-none uppercase">
                BLAK MEYD
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.26em] text-[#B98A2E] uppercase mt-1.5 block">
                BESPOKE COUTURE
              </span>
            </Link>

            {/* Approved Brand Statement */}
            <p className="font-sans text-xs sm:text-[13px] text-[#FBF9F4]/75 font-light leading-relaxed max-w-sm mb-5">
              Thoughtfully designed. Meticulously crafted.
              <br />
              For the moments that matter.
            </p>

            {/* Subtle Gold Rule */}
            <div
              className="w-8 h-[1px] bg-[#B98A2E] mb-5"
              aria-hidden="true"
            />

            {/* Location */}
            <span className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#FBF9F4]/60 font-medium">
              ACCRA, GHANA
            </span>
          </div>

          {/* ── COLUMN 2: EXPLORE NAVIGATION (COL-SPAN 2) ── */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B98A2E] mb-6">
              EXPLORE
            </h3>
            <ul className="space-y-3 font-sans text-xs sm:text-[13px] font-light text-[#FBF9F4]/80">
              {EXPLORE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-block hover:text-[#B98A2E] hover:translate-x-0.5 transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COLUMN 3: ABOUT & COLLECTIONS (COL-SPAN 3) ── */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6 sm:gap-8">
            {/* ABOUT SUB-COLUMN */}
            <div>
              <h3 className="font-sans text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B98A2E] mb-6">
                ABOUT
              </h3>
              <ul className="space-y-3 font-sans text-xs sm:text-[13px] font-light text-[#FBF9F4]/80">
                {ABOUT_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-block hover:text-[#B98A2E] hover:translate-x-0.5 transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLLECTIONS SUB-COLUMN (No awkward truncation) */}
            <div>
              <h3 className="font-sans text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B98A2E] mb-6">
                COLLECTIONS
              </h3>
              <ul className="space-y-2.5 font-sans text-xs sm:text-[13px] font-light text-[#FBF9F4]/80">
                {COLLECTION_CATEGORIES.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-block hover:text-[#B98A2E] hover:translate-x-0.5 transition-all duration-200 whitespace-normal leading-snug"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── COLUMN 4: STAY IN TOUCH & CONTACT (COL-SPAN 3) ── */}
          {/* Email input field completely removed as instructed */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B98A2E] mb-3">
              STAY IN TOUCH
            </h3>
            <p className="font-sans text-xs text-[#FBF9F4]/70 font-light leading-relaxed mb-6">
              Be the first to know about new collections, exclusive updates and
              atelier stories.
            </p>

            {/* Follow Us Row */}
            <div className="mb-7">
              <span className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-[#FBF9F4]/75 block mb-3">
                FOLLOW US
              </span>
              <div className="flex items-center gap-3 text-[#FBF9F4]/80">
                <a
                  href="https://instagram.com/blak_meyd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Blak Meyd on Instagram"
                  className="w-8 h-8 rounded-full border border-[#FBF9F4]/20 flex items-center justify-center hover:text-[#B98A2E] hover:border-[#B98A2E] transition-all"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Blak Meyd Facebook"
                  className="w-8 h-8 rounded-full border border-[#FBF9F4]/20 flex items-center justify-center hover:text-[#B98A2E] hover:border-[#B98A2E] transition-all"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Blak Meyd TikTok"
                  className="w-8 h-8 rounded-full border border-[#FBF9F4]/20 flex items-center justify-center hover:text-[#B98A2E] hover:border-[#B98A2E] transition-all"
                >
                  <TikTokIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Blak Meyd Pinterest"
                  className="w-8 h-8 rounded-full border border-[#FBF9F4]/20 flex items-center justify-center hover:text-[#B98A2E] hover:border-[#B98A2E] transition-all"
                >
                  <PinterestIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Blak Meyd YouTube"
                  className="w-8 h-8 rounded-full border border-[#FBF9F4]/20 flex items-center justify-center hover:text-[#B98A2E] hover:border-[#B98A2E] transition-all"
                >
                  <YouTubeIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Blak Meyd LinkedIn"
                  className="w-8 h-8 rounded-full border border-[#FBF9F4]/20 flex items-center justify-center hover:text-[#B98A2E] hover:border-[#B98A2E] transition-all"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Contact Us Details */}
            <div>
              <span className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-[#FBF9F4]/75 block mb-2.5">
                CONTACT US
              </span>
              <ul className="space-y-2.5 text-xs font-light text-[#FBF9F4]/70">
                <li className="flex items-center gap-2.5">
                  <MapPin size={13} className="text-[#B98A2E] flex-shrink-0" />
                  <span>Accra, Ghana</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={13} className="text-[#B98A2E] flex-shrink-0" />
                  <a
                    href="mailto:blakmeyd@gmail.com"
                    className="hover:text-[#B98A2E] transition-colors"
                  >
                    blakmeyd@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#B98A2E] flex-shrink-0" />
                  <a
                    href="https://wa.me/233559883589"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B98A2E] transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            02: EDITORIAL CLOSING STATEMENT AREA (SLIGHTLY ENLARGED IMAGE)
        ═════════════════════════════════════════════════════════════════ */}
        <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#FBF9F4]/10">
          {/* Left: Slightly Enlarged Fashion Image + "Style Lives Deeper." */}
          <div className="lg:col-span-4 flex items-center gap-6">
            <div className="relative w-28 h-36 sm:w-32 sm:h-40 lg:w-36 lg:h-44 flex-shrink-0 overflow-hidden bg-[#04120D]/90 border border-[#FBF9F4]/15 shadow-md">
              <Image
                src="/images/footer/mannequin-drape.png"
                alt="Blak Meyd Couture Tailoring Form"
                fill
                sizes="(max-width: 640px) 112px, 144px"
                className="object-cover object-top filter brightness-95"
              />
            </div>
            <div>
              <div className="font-serif italic text-2xl sm:text-3xl lg:text-[34px] text-[#FBF9F4]/90 font-light leading-[1.12]">
                Style
                <br />
                Lives
                <br />
                Deeper.
              </div>
            </div>
          </div>

          {/* Center: Bespoke Closing Statement */}
          <div className="lg:col-span-5 text-center px-4">
            <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[32px] text-[#FBF9F4] font-light leading-snug">
              &ldquo;Bespoke for your story.&rdquo;
            </blockquote>
            <div
              className="w-12 h-[1.5px] bg-[#B98A2E] mx-auto mt-4"
              aria-hidden="true"
            />
          </div>

          {/* Right: Atelier Typography Accent */}
          <div className="lg:col-span-3 text-right hidden lg:block">
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#FBF9F4]/50 leading-relaxed font-medium">
              TAILORED
              <br />
              FOR A MORE
              <br />
              BEAUTIFUL
              <br />
              TOMORROW.
            </p>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            03: BOTTOM LEGAL & BACK TO TOP BAR
        ═════════════════════════════════════════════════════════════════ */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-[#FBF9F4]/60 font-sans font-light">
          {/* Dynamic Copyright Year */}
          <div>
            &copy; {new Date().getFullYear()} Blak Meyd. All rights reserved.
          </div>

          {/* Legal Pages & Back to Top */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <Link
              href="/about#policies"
              className="hover:text-[#B98A2E] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#FBF9F4]/20 select-none">|</span>
            <Link
              href="/about#policies"
              className="hover:text-[#B98A2E] transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-[#FBF9F4]/20 select-none">|</span>
            <Link
              href="/about#policies"
              className="hover:text-[#B98A2E] transition-colors"
            >
              Cookie Policy
            </Link>

            <span className="hidden sm:inline-block w-[1px] h-4 bg-[#B98A2E]/40 select-none" />

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.16em] uppercase text-[#FBF9F4]/80 hover:text-[#B98A2E] transition-colors cursor-pointer"
              aria-label="Back to top of page"
            >
              <ArrowUp
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 text-[#B98A2E]"
              />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
