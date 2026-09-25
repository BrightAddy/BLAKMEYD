"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// 7 Public Pages per BLAK MEYD Website Implementation Architecture
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Process", href: "/process" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const scrollDifference = latest - previous;

    // At the very top of the page, always show navbar
    if (latest <= 50) {
      setIsVisible(true);
      setIsScrolled(false);
    } else {
      setIsScrolled(true);

      // Don't auto-hide if mobile drawer is currently open
      if (!isMobileMenuOpen) {
        // Scrolling DOWN (past 60px) -> hide navbar
        if (scrollDifference > 6 && latest > 60) {
          setIsVisible(false);
        }
        // Scrolling UP -> reveal navbar smoothly
        else if (scrollDifference < -6) {
          setIsVisible(true);
        }
      }
    }

    lastScrollY.current = latest;
  });

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isScrolled
            ? "bg-[#14100D]/95 backdrop-blur-xl border-b border-[#B98A2E]/30 shadow-[0_8px_30px_rgba(0,0,0,0.4)] py-3 sm:py-3.5"
            : "bg-[#16120F]/65 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4 lg:py-5"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 xl:px-12 flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8 xl:gap-12">
          {/* ── BRAND LOGO LOCKUP (LEFT) ── */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 lg:gap-3.5 select-none flex-shrink-0 justify-self-start"
            aria-label="Blak Meyd: Wear Your Story"
          >
            {/* Gold Monogram Logo */}
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 lg:h-10 lg:w-10 xl:h-11 xl:w-11 flex-shrink-0">
              <Image
                src="/images/blakmeyd-logo.png"
                alt="Blak Meyd BM Gold Monogram Logo"
                fill
                sizes="(max-width: 640px) 36px, 44px"
                className="object-contain drop-shadow-[0_2px_10px_rgba(185,138,46,0.35)] transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            {/* Separator | with balanced breathing room */}
            <span className="text-base sm:text-lg lg:text-xl font-light text-[#B98A2E]/50 select-none pb-0.5 px-0.5">
              |
            </span>

            {/* Brand Text */}
            <div className="flex flex-col items-start flex-shrink-0">
              <span className="font-fraunces text-lg sm:text-xl lg:text-[21px] xl:text-2xl font-normal tracking-[0.16em] lg:tracking-[0.18em] text-[#FFFFFF] group-hover:text-[#B98A2E] transition-colors leading-none uppercase">
                BLAK MEYD
              </span>
              <div className="flex items-center gap-1.5 mt-1 text-[7px] sm:text-[8px] lg:text-[8.5px] xl:text-[9px] tracking-[0.22em] xl:tracking-[0.26em] font-medium text-[#C49D4F] uppercase">
                <span className="h-[1px] w-2 sm:w-2.5 bg-[#B98A2E]/70" />
                <span>WEAR YOUR STORY</span>
                <span className="h-[1px] w-2 sm:w-2.5 bg-[#B98A2E]/70" />
              </div>
            </div>
          </Link>

          {/* ── DESKTOP NAVIGATION (PERFECTLY CENTERED WITH EQUAL LUXURY GAPS) ── */}
          <nav
            className="hidden lg:flex items-center justify-center gap-5 xl:gap-8 2xl:gap-10 w-full justify-self-center px-2"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "group relative text-[10.5px] xl:text-[11.5px] tracking-[0.16em] xl:tracking-[0.22em] font-medium uppercase transition-colors duration-200 py-1.5 whitespace-nowrap",
                    isActive
                      ? "text-[#FFFFFF]"
                      : "text-[#E6E0D4]/80 hover:text-[#FFFFFF]"
                  )}
                >
                  <span>{item.label}</span>

                  {/* Active gold indicator underline */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B98A2E]"
                      transition={{ duration: 0.25 }}
                    />
                  )}

                  {/* Subtle hover line if not active */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#B98A2E]/60 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── RIGHT: OUTLINED GOLD "BOOK A CONSULTATION" CTA (DESKTOP) ── */}
          <div className="hidden lg:flex items-center justify-self-end flex-shrink-0">
            <Link
              href="/book"
              className="relative inline-flex items-center justify-center px-4.5 xl:px-6 py-2 xl:py-2.5 rounded-[2px] border border-[#B98A2E] text-[#FFFFFF] text-[10px] xl:text-[11px] font-medium tracking-[0.16em] xl:tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#B98A2E] hover:text-[#15150F] shadow-sm hover:shadow-[0_4px_20px_rgba(185,138,46,0.3)] active:scale-[0.98] whitespace-nowrap"
            >
              <span>Book a Consultation</span>
            </Link>
          </div>

          {/* ── MOBILE / TABLET MENU TOGGLE (< LG) ── */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/book"
              className="px-3 py-1.5 border border-[#B98A2E] text-[10px] uppercase tracking-[0.16em] text-white font-medium hover:bg-[#B98A2E] hover:text-black transition-colors rounded-[2px]"
            >
              Consult
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── MOBILE NAVIGATION DRAWER ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[65px] sm:top-[70px] left-0 right-0 z-40 bg-[#16120F]/98 backdrop-blur-2xl border-b border-[#B98A2E]/30 lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <div key={item.label} className="border-b border-white/5 pb-3">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block text-xs tracking-[0.2em] uppercase font-medium py-1 transition-colors",
                        isActive ? "text-[#B98A2E]" : "text-white/90 hover:text-[#B98A2E]"
                      )}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}

              <div className="pt-4 space-y-3">
                <Link
                  href="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center py-3.5 bg-[#B98A2E] text-[#15150F] text-xs font-semibold uppercase tracking-[0.2em] rounded-[2px]"
                >
                  Book a Consultation
                </Link>
                <div className="text-center">
                  <a
                    href="https://wa.me/233559883589"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#E4ECE7]/70 hover:text-[#B98A2E] tracking-wider uppercase"
                  >
                    WhatsApp Atelier (+233 55 988 3589)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
