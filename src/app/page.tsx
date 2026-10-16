import AtelierHero from "./home/AtelierHero";
import HomeIntro from "./home/HomeIntro";
import FeaturedCollections from "./home/FeaturedCollections";
import HomeProcess from "./home/HomeProcess";
import WhyBlakMeyd from "@/components/collections/WhyBlakMeyd";
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

      {/* ── 04: OUR PROCESS ── */}
      <HomeProcess />

      {/* ── 05: WHY BLAK MEYD (From Collections) ── */}
      <WhyBlakMeyd />

      {/* ── 06: CLIENT STORIES ── */}
      <Testimonials />

      {/* ── 07: BOOK A CONSULTATION (FINAL CTA) ── */}
      <ConsultationCTA />

      {/* ── 08: FOOTER ── */}
      <Footer />
    </div>
  );
}




