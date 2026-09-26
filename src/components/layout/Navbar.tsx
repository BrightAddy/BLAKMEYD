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

  const isContact = pathname === "/contact" || pathname?.startsWith("/contact");

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isContact
            ? isScrolled
              ? "bg-[#FBF9F4]/98 backdrop-blur-md border-b border-[#DDD5C5]/80 py-3 sm:py-3.5 shadow-sm"
              : "bg-[#FBF9F4]/92 backdrop-blur-sm border-b border-[#DDD5C5]/60 py-3.5 sm:py-4 lg:py-5"
            : isScrolled
            ? "bg-[#14100D]/95 backdrop-blur-xl border-b border-[#B98A2E]/30 shadow-[0_8px_30px_rgba(0,0,0,0.4)] py-3 sm:py-3.5"
            : "bg-transparent border-b border-transparent py-4 sm:py-5 lg:py-6"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 xl:px-12 flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8 xl:gap-12">
          {/* ── BRAND LOGO LOCKUP (LEFT) ── */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 lg:gap-3.5 select-none flex-shrink-0 justify-self-start"
            aria-label="Blak Meyd — Wear Your Story"
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
            <span
              className={cn(
                "text-base sm:text-lg lg:text-xl font-light select-none pb-0.5 px-0.5",
                isContact ? "text-[#B98A2E]/70" : "text-[#B98A2E]/50"
              )}
            >
              |
            </span>

            {/* Brand Text */}
            <div className="flex flex-col items-start flex-shrink-0">
              <span
                className={cn(
                  "font-fraunces text-lg sm:text-xl lg:text-[21px] xl:text-2xl font-normal tracking-[0.16em] lg:tracking-[0.18em] transition-colors leading-none uppercase",
                  isContact
                    ? "text-[#15150F] group-hover:text-[#0E3B2E]"
                    : "text-[#FFFFFF] group-hover:text-[#B98A2E]"
                )}
              >
                BLAK MEYD
              </span>
              <div
                className={cn(
                  "flex items-center gap-1.5 mt-1 text-[7px] sm:text-[8px] lg:text-[8.5px] xl:text-[9px] tracking-[0.22em] xl:tracking-[0.26em] font-medium uppercase",
                  isContact ? "text-[#B98A2E]" : "text-[#C49D4F]"
                )}
              >
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
                    isContact
                      ? isActive
                        ? "text-[#0E3B2E] font-semibold"
                        : "text-[#15150F]/75 hover:text-[#0E3B2E]"
                      : isActive
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
              className={cn(
                "relative inline-flex items-center justify-center px-4.5 xl:px-6 py-2 xl:py-2.5 rounded-[2px] border border-[#B98A2E] text-[10px] xl:text-[11px] font-medium tracking-[0.16em] xl:tracking-[0.18em] uppercase transition-all duration-300 shadow-sm whitespace-nowrap",
                isContact
                  ? "text-[#15150F] hover:bg-[#B98A2E] hover:text-[#FBF9F4] active:scale-[0.98]"
                  : "text-[#FFFFFF] hover:bg-[#B98A2E] hover:text-[#15150F] hover:shadow-[0_4px_20px_rgba(185,138,46,0.3)] active:scale-[0.98]"
              )}
            >
              <span>Book a Consultation</span>
            </Link>
          </div>

          {/* ── MOBILE / TABLET MENU TOGGLE (< LG) ── */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/book"
              className={cn(
                "px-3 py-1.5 border border-[#B98A2E] text-[10px] uppercase tracking-[0.16em] font-medium transition-colors rounded-[2px]",
                isContact
                  ? "text-[#15150F] hover:bg-[#B98A2E] hover:text-[#FBF9F4]"
                  : "text-white hover:bg-[#B98A2E] hover:text-black"
              )}
            >
              Consult
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 transition-colors",
                isContact ? "text-[#15150F] hover:text-[#0E3B2E]" : "text-white/90 hover:text-white"
              )}
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
            className={cn(
              "fixed top-[65px] sm:top-[70px] left-0 right-0 z-40 lg:hidden overflow-hidden shadow-2xl",
              isContact
                ? "bg-[#FBF9F4]/98 border-b border-[#DDD5C5]"
                : "bg-[#16120F]/98 backdrop-blur-2xl border-b border-[#B98A2E]/30"
            )}
          >
            <div className="px-6 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <div
                    key={item.label}
                    className={cn(
                      "border-b pb-3",
                      isContact ? "border-[#15150F]/10" : "border-white/5"
                    )}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block text-xs tracking-[0.2em] uppercase font-medium py-1 transition-colors",
                        isContact
                          ? isActive
                            ? "text-[#0E3B2E] font-semibold"
                            : "text-[#15150F]/80 hover:text-[#0E3B2E]"
                          : isActive
                          ? "text-[#B98A2E]"
                          : "text-white/90 hover:text-[#B98A2E]"
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
                    className={cn(
                      "text-[11px] tracking-wider uppercase",
                      isContact
                        ? "text-[#15150F]/70 hover:text-[#0E3B2E]"
                        : "text-[#E4ECE7]/70 hover:text-[#B98A2E]"
                    )}
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
