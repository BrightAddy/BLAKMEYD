import LookbookIntro from "./LookbookIntro";
import LookbookGallery from "./LookbookGallery";
import LookbookStories from "./LookbookStories";
import LookbookGraduation from "./LookbookGraduation";
import LookbookOccasions from "./LookbookOccasions";
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

      {/* ── 02: LOOKBOOK SPREAD ONE (ITEMS 01, 02, 03: KENTE, BRIDAL, RECEPTION) ── */}
      <LookbookGallery />

      {/* ── 03: LOOKBOOK SPREAD TWO (ITEMS 04, 05, 06: BRIDESMAIDS, WEDDING GUEST, PHOTOSHOOT) ── */}
      <LookbookStories />

      {/* ── 04: LOOKBOOK SPREAD THREE (ITEM 07: GRADUATION OUTFITS / CONFIDENCE IN EVERY CHAPTER) ── */}
      <LookbookGraduation />

      {/* ── 05: LOOKBOOK SPREAD FOUR (ITEMS 08, 09: PROM DRESS & OTHER OUTFITS) ── */}
      <LookbookOccasions />

      {/* ── 06: ATELIER FOOTER ── */}
      <Footer />
    </main>
  );
}
