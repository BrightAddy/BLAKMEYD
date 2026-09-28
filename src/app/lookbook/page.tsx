import LookbookIntro from "./LookbookIntro";
import LookbookGallery from "./LookbookGallery";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "The Lookbook | BLAK MEYD Bespoke Haute Couture &bull; Accra",
  description:
    "A visual record of pieces made for real stories. Explore the archival bespoke couture portfolio of Blak Meyd atelier in Accra.",
};

export default function LookbookPage() {
  return (
    <main className="min-h-screen bg-[#FBF9F4] text-[#15150F] selection:bg-[#0E3B2E] selection:text-[#FBF9F4]">
      {/* ── 01: LOOKBOOK INTRODUCTION (FULL-BLEED EDITORIAL SPREAD) ── */}
      <LookbookIntro />

      {/* ── 02: COMPLETE ATELIER ARCHIVE (ALL 7 BESPOKE GARMENT SESSIONS) ── */}
      <LookbookGallery />

      {/* ── 05: ATELIER FOOTER ── */}
      <Footer />
    </main>
  );
}
