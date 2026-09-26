"use client";

import React, { useState, useEffect } from "react";
import OrderHero from "@/components/order/OrderHero";
import OrderMultiStepForm from "@/components/order/OrderMultiStepForm";
import Footer from "@/components/layout/Footer";

export default function OrderClientContainer() {
  const [isOrdering, setIsOrdering] = useState(false);

  useEffect(() => {
    // Check if user navigated with hash #order-start or #order-form
    if (
      typeof window !== "undefined" &&
      (window.location.hash === "#order-start" ||
        window.location.hash === "#order-form")
    ) {
      setIsOrdering(true);
    }
  }, []);

  const handleStartOrder = () => {
    setIsOrdering(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleExitOrder = () => {
    setIsOrdering(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (isOrdering) {
    return <OrderMultiStepForm onExit={handleExitOrder} />;
  }

  return (
    <div className="relative min-h-screen bg-[#FBF9F4] text-[#15150F] selection:bg-[#B98A2E] selection:text-[#15150F] overflow-x-hidden">
      {/* ── 01: ORDER A GARMENT HERO ── */}
      <OrderHero onStartOrder={handleStartOrder} />

      {/* ── GLOBAL FOOTER ── */}
      <Footer />
    </div>
  );
}
