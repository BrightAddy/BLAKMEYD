import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutInspiration from "./AboutInspiration";
import AboutPhilosophy from "./AboutPhilosophy";
import AboutProcess from "./AboutProcess";
import AboutPolicies from "./AboutPolicies";
import AboutCTA from "./AboutCTA";
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

      {/* ── 04: OUR PHILOSOPHY (CLOTHING SHOULD FEEL LIKE YOU.) ── */}
      <div id="philosophy">
        <AboutPhilosophy />
      </div>

      {/* ── 05: OUR BESPOKE APPROACH (A PROCESS DESIGNED AROUND YOU.) ── */}
      <div id="process">
        <AboutProcess />
      </div>

      {/* ── 06: POLICIES & CLIENT INFORMATION (THE DETAILS MATTER.) ── */}
      <div id="policies">
        <AboutPolicies />
      </div>

      {/* ── 07: BESPOKE CONSULTATION & CONTACT CTA ── */}
      <AboutCTA />

      {/* ── 08: ATELIER FOOTER ── */}
      <Footer />
    </main>
  );
}
