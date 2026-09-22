import AboutHero from "@/components/about/AboutHero";
import AtelierIntro from "@/components/home/AtelierIntro";
import WhyBlakMeyd from "@/components/home/WhyBlakMeyd";
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

      {/* ── 02: ATELIER LINEAGE & MANIFESTO ── */}
      <div id="heritage">
        <AtelierIntro />
      </div>

      {/* ── 03: THE BLAK MEYD CRAFT PHILOSOPHY ── */}
      <div id="philosophy">
        <WhyBlakMeyd />
      </div>

      {/* ── 04: ATELIER FOOTER ── */}
      <Footer />
    </main>
  );
}
