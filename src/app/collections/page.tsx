import type { Metadata } from "next";
import CollectionsHero from "@/components/hero/CollectionsHero";
import CollectionCategories from "@/components/collections/CollectionCategories";
import WhyBlakMeyd from "@/components/collections/WhyBlakMeyd";
import ConsultationCTA from "@/components/collections/ConsultationCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Collections — Blak Meyd Haute Couture Atelier",
  description:
    "Explore bespoke Ghanaian Kente gowns, bridal robes, evening reception attire, and tailored occasionwear handcrafted in our Accra atelier.",
};

export default function CollectionsPage() {
  return (
    <div className="relative min-h-screen bg-[#FBF9F4] text-[#15150F] selection:bg-[#B98A2E] selection:text-[#15150F] overflow-x-hidden">
      {/* ── 01: CINEMATIC EDITORIAL HERO (100VH) ── */}
      <CollectionsHero />

      {/* ── 02: NINE LARGE EDITORIAL COLLECTION CATEGORIES ── */}
      <CollectionCategories />

      {/* ── 03: WHY BLAK MEYD EDITORIAL SECTION ── */}
      <WhyBlakMeyd />

      {/* ── 04: FINAL CONSULTATION CTA SECTION ── */}
      <ConsultationCTA />

      {/* ── 05: DEEP EMERALD EDITORIAL FOOTER ── */}
      <Footer />
    </div>
  );
}
