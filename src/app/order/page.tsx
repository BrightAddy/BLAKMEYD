import type { Metadata } from "next";
import OrderHero from "@/components/order/OrderHero";
import OrderMultiStepForm from "@/components/order/OrderMultiStepForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Order a Garment — Blak Meyd Haute Couture Atelier",
  description:
    "Share your garment details, measurements, design preferences and references, and let Blak Meyd create a bespoke piece that's uniquely yours.",
};

export default function OrderPage() {
  return (
    <div className="relative min-h-screen bg-[#FBF9F4] text-[#15150F] selection:bg-[#B98A2E] selection:text-[#15150F] overflow-x-hidden">
      {/* ── 01: ORDER A GARMENT HERO ── */}
      <OrderHero />

      {/* ── 02: COMPLETE MULTI-STEP ORDER FORM (CONNECTED WORKFLOW DIRECTLY BELOW HERO) ── */}
      <section
        id="order-form"
        className="relative w-full border-t border-[#DDD5C5]/70 scroll-mt-0"
        aria-label="Garment Order Multi-Step Form"
      >
        <OrderMultiStepForm />
      </section>

      {/* ── 03: GLOBAL FOOTER ── */}
      <Footer />
    </div>
  );
}
