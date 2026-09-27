import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInformation from "@/components/contact/ContactInformation";
import StudioLocation from "@/components/contact/StudioLocation";
import ContactCTA from "@/components/contact/ContactCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact — Blak Meyd Haute Couture Atelier",
  description:
    "Connect with Blak Meyd bespoke atelier in Accra, Ghana. Enquire about bespoke couture garments, bridal wear, and private appointments.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#FBF9F4] text-[#15150F] selection:bg-[#B98A2E] selection:text-[#15150F] overflow-x-hidden">
      {/* ── 01: SPLIT EDITORIAL CONTACT HERO ── */}
      <ContactHero />

      {/* ── 02: EDITORIAL CONTACT INFORMATION ── */}
      <ContactInformation />

      {/* ── 03: STUDIO / LOCATION INFORMATION ── */}
      <StudioLocation />

      {/* ── 04: HOW CAN WE ASSIST YOU (CONSULTATION + GARMENT ORDER) ── */}
      <ContactCTA />

      {/* ── 05: GLOBAL FOOTER ── */}
      <Footer />
    </div>
  );
}
