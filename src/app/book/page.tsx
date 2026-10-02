import type { Metadata } from "next";
import ConsultationIntro from "@/components/consultation/ConsultationIntro";
import ConsultationBookingFlow from "@/components/consultation/ConsultationBookingFlow";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Book a Consultation | Blak Meyd Bespoke Couture Accra",
  description:
    "Schedule your private 1-on-1 couture consultation with Blak Meyd. Non-bridal and bridal appointments in our Accra fitting salon or via private virtual video link.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#15150F] pt-16 sm:pt-20">
      <ConsultationIntro />
      <ConsultationBookingFlow />
      <Footer />
    </div>
  );
}
