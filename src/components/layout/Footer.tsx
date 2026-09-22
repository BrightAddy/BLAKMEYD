"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#15150F] text-[#FBF9F4] pt-14 pb-10 px-6 sm:px-10 lg:px-16 border-t border-[#B98A2E]/20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#FBF9F4]/10">
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                <Image
                  src="/images/blakmeyd-logo.png"
                  alt="Blak Meyd BM Gold Monogram Logo"
                  fill
                  sizes="48px"
                  className="object-contain drop-shadow-[0_2px_8px_rgba(185,138,46,0.35)]"
                />
              </div>
              <span className="text-xl font-light text-[#B98A2E]/60 select-none pb-0.5">
                |
              </span>
              <span className="font-fraunces text-2xl sm:text-3xl font-normal tracking-wide text-[#FBF9F4]">
                BLAK MEYD
              </span>
            </div>
            <p className="text-xs text-[#E4ECE7]/70 font-light leading-relaxed max-w-sm">
              Luxury Bespoke Haute Couture Atelier based in Accra, Ghana.
              Sculpting heirloom garments from authentic Bonwire hand-woven Kente silks
              and precision European corsetry.
            </p>
            <div className="pt-2 text-[11px] font-mono tracking-widest text-[#B98A2E] uppercase">
              Accra Atelier &middot; Worldwide Private Commissions
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#B98A2E] block">
              Atelier Pages
            </span>
            <ul className="space-y-2.5 text-xs font-light text-[#E4ECE7]/80">
              <li>
                <Link href="/" className="hover:text-[#B98A2E] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B98A2E] transition-colors">About &amp; Story</Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-[#B98A2E] transition-colors">Collections</Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-[#B98A2E] transition-colors">Bespoke Process</Link>
              </li>
              <li>
                <Link href="/lookbook" className="hover:text-[#B98A2E] transition-colors">Lookbook Archive</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B98A2E] transition-colors">Contact &amp; Studio</Link>
              </li>
            </ul>
          </div>

          {/* Bespoke Collections */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#B98A2E] block">
              Collections
            </span>
            <ul className="space-y-2.5 text-xs font-light text-[#E4ECE7]/80">
              <li>
                <Link href="/collections#kente-gown" className="hover:text-[#B98A2E] transition-colors">Kente Gowns</Link>
              </li>
              <li>
                <Link href="/collections#reception-outfit" className="hover:text-[#B98A2E] transition-colors">Reception Outfits</Link>
              </li>
              <li>
                <Link href="/collections#bridal-robe" className="hover:text-[#B98A2E] transition-colors">Bridal Robes</Link>
              </li>
              <li>
                <Link href="/collections#graduation-outfits" className="hover:text-[#B98A2E] transition-colors">Graduation &amp; Prom</Link>
              </li>
              <li>
                <Link href="/collections#wedding-guest" className="hover:text-[#B98A2E] transition-colors">Wedding Guest</Link>
              </li>
            </ul>
          </div>

          {/* Atelier Contact & WhatsApp */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#B98A2E] block">
              Direct Inquiries
            </span>
            <p className="text-xs text-[#E4ECE7]/70 font-light leading-relaxed">
              For immediate assistance with consultation bookings or private bespoke fittings:
            </p>
            <div className="space-y-2 pt-1">
              <a
                href="https://wa.me/233559883589"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#B98A2E] hover:text-[#FBF9F4] transition-colors"
              >
                <span>WhatsApp: +233 55 988 3589</span>
                <ArrowUpRight size={13} />
              </a>
              <div className="text-xs text-[#E4ECE7]/60 font-light">
                consultations@blakmeyd.com
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B98A2E] text-[#15150F] text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-[#0E3B2E] hover:text-[#FBF9F4] transition-colors"
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E4ECE7]/50 font-light">
          <div>
            &copy; {new Date().getFullYear()} BLAK MEYD HAUTE COUTURE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#B98A2E] transition-colors">Studio Policy</Link>
            <Link href="/process" className="hover:text-[#B98A2E] transition-colors">Fittings &amp; Delivery</Link>
            <Link href="/login" className="hover:text-[#B98A2E] transition-colors">Client Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
