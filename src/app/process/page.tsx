import type { Metadata } from "next";
import ProcessHero from "@/components/hero/ProcessHero";
import DiscoverySection from "@/components/process/DiscoverySection";
import DevelopSection from "@/components/process/DevelopSection";
import CreateSection from "@/components/process/CreateSection";
import TimelinesSection from "@/components/process/TimelinesSection";
import ProcessCTA from "@/components/process/ProcessCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Process — Blak Meyd Haute Couture Atelier",
  description:
    "Discover the bespoke journey from vision to reality at Blak Meyd. Handcrafted Ghanaian couture, precision fitting, and heirloom craftsmanship.",
};

export default function ProcessPage() {
  return (
    <div className="relative min-h-screen bg-[#072018] text-[#FBF9F4] selection:bg-[#B98A2E] selection:text-[#15150F] overflow-x-hidden">
      {/* ── 01: CINEMATIC EDITORIAL VIDEO HERO (100SVH) ── */}
      <ProcessHero />

      {/* ── 02: CHAPTER 01 / DISCOVERY ── */}
      <DiscoverySection />

      {/* ── 03: CHAPTER 02 / DEVELOP ── */}
      <DevelopSection />

      {/* ── 04: CHAPTER 03 / CREATE ── */}
      <CreateSection />

      {/* ── 05: PRODUCTION TIMELINES & EXPRESS ORDERS ── */}
      <TimelinesSection />

      {/* ── 06: FINAL PROCESS CTA ── */}
      <ProcessCTA />

      {/* ── 07: EDITORIAL FOOTER ── */}
      <Footer />
    </div>
  );
}
