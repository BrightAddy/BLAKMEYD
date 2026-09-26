import type { Metadata } from "next";
import OrderClientContainer from "@/components/order/OrderClientContainer";

export const metadata: Metadata = {
  title: "Order a Garment — Blak Meyd Haute Couture Atelier",
  description:
    "Share your garment details, measurements, design preferences and references, and let Blak Meyd create a bespoke piece that's uniquely yours.",
};

export default function OrderPage() {
  return <OrderClientContainer />;
}
