import AtelierHero from "@/components/hero/AtelierHero";
import HomeExperience from "@/components/home/HomeExperience";
import HomeFeaturedWork from "@/components/home/HomeFeaturedWork";
import HomeJourney from "@/components/home/HomeJourney";
import HomeConsultationCTA from "@/components/home/HomeConsultationCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "BLAK MEYD | Bespoke Haute Couture Atelier · Accra",
  description:
    "Accra-based haute couture atelier sculpting heirloom bespoke Kente gowns, bridal reception silhouettes, and architectural evening wear. Wear your story.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FBF9F4] text-[#15150F] selection:bg-[#B98A2E] selection:text-[#15150F]">
      {/* ── 01: EXISTING ATELIER HAUTE COUTURE HERO (UNTOUCHED & APPROVED) ── */}
      <AtelierHero />

      {/* ── 02: THE BLAK MEYD EXPERIENCE (PERSONAL, INTENTIONAL, EXCEPTIONAL) ── */}
      <HomeExperience />

      {/* ── 03: FEATURED WORK (CRAFTED STORIES VISUAL SHOWCASE) ── */}
      <HomeFeaturedWork />

      {/* ── 04: YOUR JOURNEY (5-STAGE PROTOCOL & INTEGRATED TESTIMONIAL) ── */}
      <HomeJourney />

      {/* ── 05: CONSULTATION CTA (CINEMATIC CLOSING INVITATION) ── */}
      <HomeConsultationCTA />

      {/* ── 06: ATELIER FOOTER ── */}
      <Footer />
    </div>
  );
}
