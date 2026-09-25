import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutInspiration from "./AboutInspiration";
import AtelierIntro from "./AtelierIntro";
import WhyBlakMeyd from "@/app/home/WhyBlakMeyd";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About | BLAK MEYD Bespoke Haute Couture Atelier · Accra",
  description:
    "Rooted in Heritage. Designed for You. Discover the heritage, master craftsmanship, and architectural philosophy of Blak Meyd bespoke atelier.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FBF9F4] text-[#15150F]">
      {/* ── 01: ABOUT HERO (ROOTED IN HERITAGE. DESIGNED FOR YOU.) ── */}
      <AboutHero />

      {/* ── 02: OUR STORY — CHAPTER 1 (ROOTED IN HERITAGE. SCULPTED WITH INTENTION.) ── */}
      <div id="heritage">
        <AboutStory />
      </div>

      {/* ── 03: OUR STORY — CHAPTER 2 (FROM INSPIRATION TO TIMELESS PIECES.) ── */}
      <div id="inspiration">
        <AboutInspiration />
      </div>

      {/* ── 04: ATELIER LINEAGE & MANIFESTO ── */}
      <div id="manifesto">
        <AtelierIntro />
      </div>

      {/* ── 04: THE BLAK MEYD CRAFT PHILOSOPHY ── */}
      <div id="philosophy">
        <WhyBlakMeyd />
      </div>

      {/* ── 04: ATELIER FOOTER ── */}
      <Footer />
    </main>
  );
}
