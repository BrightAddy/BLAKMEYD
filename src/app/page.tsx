import AtelierHero from "./home/AtelierHero";
import HomeIntro from "./home/HomeIntro";
import FeaturedCollections from "./home/FeaturedCollections";
import HomeExperience from "./home/HomeExperience";
import HomeProcess from "./home/HomeProcess";
import BridalSpecialOccasions from "./home/BridalSpecialOccasions";
import HomeSignatureCollections from "./home/HomeSignatureCollections";
import WhyBlakMeyd from "./home/WhyBlakMeyd";
import Testimonials from "./home/Testimonials";
import ConsultationCTA from "./home/ConsultationCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "BLAK MEYD | Bespoke Haute Couture Atelier · Accra",
  description:
    "Accra-based haute couture atelier sculpting heirloom bespoke Kente gowns, bridal reception silhouettes, and architectural evening wear. Wear your story.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FBF9F4] text-[#15150F] selection:bg-[#B98A2E] selection:text-[#15150F]">
      {/* ── 01: HERO ── */}
      <AtelierHero />

      {/* ── 02: INTRODUCTION ── */}
      <HomeIntro />

      {/* ── 03: FEATURED COLLECTIONS ── */}
      <FeaturedCollections />

      {/* ── 04: THE BLAK MEYD EXPERIENCE ── */}
      <HomeExperience />

      {/* ── 05: OUR PROCESS ── */}
      <HomeProcess />

      {/* ── 06: BRIDAL & SPECIAL OCCASIONS ── */}
      <BridalSpecialOccasions />

      {/* ── 07: SIGNATURE COLLECTIONS ── */}
      <HomeSignatureCollections />

      {/* ── 08: WHY BLAK MEYD ── */}
      <WhyBlakMeyd />

      {/* ── 09: CLIENT STORIES ── */}
      <Testimonials />

      {/* ── 10: BOOK A CONSULTATION (FINAL CTA) ── */}
      <ConsultationCTA />

      {/* ── 11: FOOTER ── */}
      <Footer />
    </div>
  );
}




