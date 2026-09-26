import FeaturedWork from "./FeaturedWork";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Lookbook | BLAK MEYD Bespoke Haute Couture",
  description: "Visual portfolio and archive of bespoke commissions sculpted by Blak Meyd atelier in Accra.",
};

export default function LookbookPage() {
  return (
    <main className="min-h-screen bg-[#FBF9F4] text-[#15150F] pt-24">
      {/* Page Header */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-12 pb-8 border-b border-[#E4ECE7]">
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B98A2E] mb-2">
          <span className="h-[1px] w-6 bg-[#B98A2E]" />
          <span>Visual Portfolio</span>
        </div>
        <h1 className="font-fraunces text-4xl sm:text-6xl font-light tracking-tight text-[#15150F]">
          The Lookbook
        </h1>
        <p className="mt-3 text-sm text-[#15150F]/70 font-light max-w-2xl">
          An archival photographic record of our most celebrated bespoke commissions, from state banquets and royal ceremonies to destination weddings across the diaspora.
        </p>
      </div>

      <FeaturedWork />
      <Footer />
    </main>
  );
}
