"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Plus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { BookingRecord, CONSULTATION_PRICING } from "@/components/consultation/types";
import Footer from "@/components/layout/Footer";

export default function ClientDashboardPage() {
  const [consultations, setConsultations] = useState<BookingRecord[]>([]);
  const [activeTab, setActiveTab] = useState<"consultations" | "garments">("consultations");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("blakmeyd_consultations");
      if (stored) {
        const parsed: BookingRecord[] = JSON.parse(stored);
        setConsultations(parsed);
      } else {
        // Fallback demo appointment if none booked yet
        setConsultations([
          {
            type: "bridal",
            fee: 800,
            date: "2026-10-14",
            dateFormatted: "14 October 2026",
            time: "2:00 PM",
            format: "in-person",
            firstName: "Akua",
            lastName: "Mensah",
            email: "akua.mensah@example.com",
            phone: "+233 24 456 7890",
            ideaNotes: "Custom beaded bridal gown with cathedral train and corset bodice.",
            bookingId: "BM-BK-DEMO-01",
            reference: "BM-CONS-2026-8942",
            createdAt: new Date().toISOString(),
            paymentStatus: "paid",
            bookingStatus: "confirmed",
            paymentMethod: "momo",
            paymentRef: "PAY-BM-482910",
          },
        ]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#15150F] pt-20 sm:pt-24 flex flex-col justify-between">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {/* Header */}
        <div className="border-b border-[#15150F]/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10.5px] font-sans font-semibold tracking-[0.25em] uppercase text-[#B98A2E]">
                CLIENT PORTAL
              </span>
              <span className="w-6 h-[1px] bg-[#B98A2E]" />
            </div>
            <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-normal text-[#15150F] tracking-tight">
              Client Dashboard
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#736B5E] font-sans">
              Manage your private atelier consultations and bespoke garment commissions.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E3B2E] text-white hover:bg-[#092920] transition-colors rounded-sm text-xs font-sans font-medium shrink-0 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Book New Consultation</span>
          </Link>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 border-b border-[#15150F]/10 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("consultations")}
            className={`pb-3 text-xs sm:text-[13px] font-sans font-medium transition-all relative cursor-pointer ${
              activeTab === "consultations"
                ? "text-[#15150F]"
                : "text-[#8E8678] hover:text-[#15150F]"
            }`}
          >
            <span>My Consultations</span>
            <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] bg-[#E4ECE7] text-[#0E3B2E] font-semibold">
              {consultations.length}
            </span>
            {activeTab === "consultations" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0E3B2E]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("garments")}
            className={`pb-3 text-xs sm:text-[13px] font-sans font-medium transition-all relative cursor-pointer ${
              activeTab === "garments"
                ? "text-[#15150F]"
                : "text-[#8E8678] hover:text-[#15150F]"
            }`}
          >
            <span>Garment Orders</span>
            <span className="ml-2 text-[11px] text-[#8E8678] font-normal italic">
              (Post-Consultation)
            </span>
            {activeTab === "garments" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0E3B2E]" />
            )}
          </button>
        </div>

        {/* Tab 1: My Consultations */}
        {activeTab === "consultations" && (
          <div className="space-y-6">
            {consultations.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-sm border border-[#15150F]/10 space-y-4">
                <Calendar className="w-8 h-8 text-[#9E7B3B] mx-auto stroke-1" />
                <h3 className="font-fraunces text-xl text-[#15150F]">No Consultations Yet</h3>
                <p className="text-xs text-[#736B5E] max-w-md mx-auto">
                  Begin your bespoke haute couture journey with Blak Meyd. Schedule an intimate private consultation with our master designers.
                </p>
                <Link
                  href="/book"
                  className="inline-block px-6 py-3 bg-[#0E3B2E] text-white text-xs font-sans rounded-sm font-medium hover:bg-[#092920] transition-colors"
                >
                  Book Your Consultation &rarr;
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {consultations.map((item) => {
                  const pricing = CONSULTATION_PRICING[item.type];
                  return (
                    <div
                      key={item.bookingId}
                      className="bg-white p-6 sm:p-7 rounded-sm border border-[#15150F]/10 shadow-sm space-y-5"
                    >
                      {/* Top Bar: Reference + Status */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#15150F]/10 pb-4">
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 bg-[#FAF7F0] border border-[#B98A2E]/30 text-[#15150F] text-xs font-mono font-semibold rounded-sm">
                            {item.reference}
                          </span>
                          <span className="text-xs font-sans text-[#736B5E]">
                            Booked on {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E4ECE7] text-[#0E3B2E] text-xs font-sans font-medium rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0E3B2E]" />
                            <span>Confirmed Appointment</span>
                          </span>
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Col 1: Type */}
                        <div>
                          <span className="text-[10.5px] uppercase tracking-wider text-[#8E8678] font-sans block mb-1">
                            CONSULTATION TYPE
                          </span>
                          <div className="font-fraunces text-lg text-[#15150F]">
                            {pricing?.title || item.type}
                          </div>
                          <p className="text-xs text-[#736B5E] font-sans mt-0.5">
                            {item.format === "in-person"
                              ? "In-Person Fitting Salon"
                              : "Virtual Video Salon"}
                          </p>
                        </div>

                        {/* Col 2: Date & Time */}
                        <div>
                          <span className="text-[10.5px] uppercase tracking-wider text-[#8E8678] font-sans block mb-1">
                            DATE &amp; TIME
                          </span>
                          <div className="font-fraunces text-lg text-[#15150F] flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-[#9E7B3B]" />
                            <span>{item.dateFormatted}</span>
                          </div>
                          <p className="text-xs text-[#736B5E] font-sans mt-0.5 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#8E8678]" />
                            <span>{item.time} GMT (60 mins)</span>
                          </p>
                        </div>

                        {/* Col 3: Fee & Deductible */}
                        <div>
                          <span className="text-[10.5px] uppercase tracking-wider text-[#8E8678] font-sans block mb-1">
                            CONSULTATION FEE
                          </span>
                          <div className="font-fraunces text-lg text-[#9E7B3B]">
                            GHS {item.fee} Paid
                          </div>
                          <span className="text-[11px] font-sans text-[#0E3B2E] font-medium block mt-0.5">
                            100% credited to order
                          </span>
                        </div>

                        {/* Col 4: Location */}
                        <div>
                          <span className="text-[10.5px] uppercase tracking-wider text-[#8E8678] font-sans block mb-1">
                            LOCATION / ACCESS
                          </span>
                          <p className="text-xs text-[#15150F] font-sans leading-relaxed">
                            {item.format === "in-person"
                              ? "Blak Meyd Atelier, Airport Residential Area, Accra"
                              : "Encrypted HD Video Link (Sent via email)"}
                          </p>
                        </div>
                      </div>

                      {/* Vision Note if present */}
                      {item.ideaNotes && (
                        <div className="p-3.5 bg-[#FBF9F4] rounded-sm border border-[#15150F]/5 text-xs font-sans text-[#524D45]">
                          <span className="font-medium text-[#15150F] mr-1">Design Idea:</span>
                          &ldquo;{item.ideaNotes}&rdquo;
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Garment Orders Info */}
        {activeTab === "garments" && (
          <div className="bg-white p-8 sm:p-10 rounded-sm border border-[#15150F]/10 space-y-5 text-center max-w-2xl mx-auto">
            <Sparkles className="w-8 h-8 text-[#9E7B3B] mx-auto stroke-1" />
            <h3 className="font-fraunces text-2xl text-[#15150F]">
              The Garment Order Journey
            </h3>
            <p className="text-xs sm:text-[13px] font-sans text-[#736B5E] leading-relaxed">
              At Blak Meyd, bespoke couture begins with your consultation dialogue. Once your consultation is complete and your custom sketches and fabric selections are approved, your formal garment order will be initiated right here.
            </p>
            <div className="p-4 bg-[#FAF7F0] border border-[#B98A2E]/20 rounded-sm text-xs font-sans text-[#524D45] text-left">
              <span className="font-semibold text-[#15150F] block mb-1">
                Consultation Fee Deduction:
              </span>
              Your consultation payment of GHS 200 (or GHS 800 for bridal) will be deducted automatically from your garment commission invoice.
            </div>
            <Link
              href="/book"
              className="inline-block px-6 py-2.5 bg-[#0E3B2E] text-white text-xs font-sans rounded-sm font-medium hover:bg-[#092920] transition-colors"
            >
              Book an Atelier Consultation &rarr;
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
