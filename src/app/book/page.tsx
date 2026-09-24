import BookingAvailability from "./BookingAvailability";
import ConsultationCTA from "@/app/home/ConsultationCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Book a Consultation | BLAK MEYD Haute Couture Atelier",
  description: "Schedule your private 1-on-1 bespoke consultation in our Accra fitting salon or arrange a guided virtual appointment across the global diaspora.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#120E0B] text-[#FBF9F4] pt-24">
      {/* Page Header */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-12 pb-8 border-b border-[#B98A2E]/20">
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B98A2E] mb-2">
          <span className="h-[1px] w-6 bg-[#B98A2E]" />
          <span>Private Salon Reservations</span>
        </div>
        <h1 className="font-fraunces text-4xl sm:text-6xl font-light tracking-tight text-[#FBF9F4]">
          Book a Private Consultation
        </h1>
        <p className="mt-3 text-sm text-[#E4ECE7]/80 font-light max-w-2xl">
          Reserve your dedicated dialogue with our creative director and master tailoring team. Select between an in-person session at our Accra salon or a worldwide virtual appointment.
        </p>
      </div>

      <BookingAvailability />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
