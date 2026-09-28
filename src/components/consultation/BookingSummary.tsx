"use client";

import { Edit3, CheckCircle2 } from "lucide-react";
import { ConsultationDetails, CONSULTATION_PRICING } from "./types";

interface BookingSummaryProps {
  details: ConsultationDetails;
  onEditStep: (step: number) => void;
  onProceedToPayment: () => void;
  onBack: () => void;
}

export default function BookingSummary({
  details,
  onEditStep,
  onProceedToPayment,
  onBack,
}: BookingSummaryProps) {
  const pricing = CONSULTATION_PRICING[details.type];

  return (
    <section aria-labelledby="review-heading" className="space-y-6">
      {/* Heading & Subtitle */}
      <div>
        <h2
          id="review-heading"
          className="font-fraunces text-2xl sm:text-[1.65rem] font-normal text-[#15150F] tracking-tight"
        >
          4. Review Consultation Summary
        </h2>
        <p className="mt-1 text-xs sm:text-[13px] font-sans text-[#736B5E]">
          Carefully review your appointment and client details before proceeding to payment.
        </p>
      </div>

      {/* Main Review Card */}
      <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#15150F]/10 shadow-sm space-y-6">
        {/* Section 1: Appointment & Consultation Info */}
        <div className="border-b border-[#15150F]/10 pb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-sans font-semibold tracking-wider uppercase text-[#736B5E]">
              Appointment &amp; Service
            </span>
            <button
              type="button"
              onClick={() => onEditStep(1)}
              className="text-xs font-sans text-[#736B5E] hover:text-[#9E7B3B] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Service</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-[11px] text-[#8E8678] font-sans block mb-0.5">
                CONSULTATION TYPE
              </span>
              <span className="font-fraunces text-base text-[#15150F]">
                {pricing.title}
              </span>
              <p className="text-xs text-[#736B5E] font-sans mt-0.5">
                {details.format === "in-person"
                  ? "In-Person Fitting Salon (Accra)"
                  : "Virtual Video Salon (Worldwide)"}
              </p>
            </div>

            <div>
              <span className="text-[11px] text-[#8E8678] font-sans block mb-0.5">
                SCHEDULED DATE &amp; TIME
              </span>
              <span className="font-fraunces text-base text-[#15150F]">
                {details.dateFormatted}
              </span>
              <p className="text-xs text-[#736B5E] font-sans mt-0.5">
                {details.time} GMT (60 minutes)
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Client Contact Details */}
        <div className="border-b border-[#15150F]/10 pb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-sans font-semibold tracking-wider uppercase text-[#736B5E]">
              Client Details
            </span>
            <button
              type="button"
              onClick={() => onEditStep(3)}
              className="text-xs font-sans text-[#736B5E] hover:text-[#9E7B3B] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Details</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <span className="text-[11px] text-[#8E8678] font-sans block mb-0.5">
                CLIENT
              </span>
              <span className="text-xs sm:text-[13px] font-medium text-[#15150F] font-sans">
                {details.firstName} {details.lastName}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-[#8E8678] font-sans block mb-0.5">
                EMAIL
              </span>
              <span className="text-xs sm:text-[13px] text-[#15150F] font-sans break-all">
                {details.email}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-[#8E8678] font-sans block mb-0.5">
                PHONE
              </span>
              <span className="text-xs sm:text-[13px] text-[#15150F] font-sans">
                {details.phone}
              </span>
            </div>
          </div>

          {details.ideaNotes && (
            <div className="mt-4 pt-3 border-t border-[#15150F]/5">
              <span className="text-[11px] text-[#8E8678] font-sans block mb-1">
                IDEA &amp; DESIGN VISION
              </span>
              <p className="text-xs font-sans text-[#524D45] leading-relaxed italic bg-[#FBF9F4] p-3 rounded-sm border border-[#15150F]/5">
                &ldquo;{details.ideaNotes}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Section 3: Fee Breakdown & Atelier Policy */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-sans font-semibold tracking-wider uppercase text-[#736B5E]">
              Consultation Fee
            </span>
            <span className="font-fraunces text-2xl text-[#9E7B3B] font-light">
              GHS {pricing.fee}
            </span>
          </div>

          <div className="p-4 bg-[#E4ECE7]/40 border border-[#0E3B2E]/20 rounded-sm space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0E3B2E]">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#0E3B2E]" />
              <span>100% Deductible from Garment Commission</span>
            </div>
            <p className="text-[11.5px] text-[#524D45] leading-relaxed pl-6">
              Your consultation fee of GHS {pricing.fee} will be credited directly towards your final invoice if you proceed with creating a custom couture garment with Blak Meyd.
            </p>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 border-t border-[#15150F]/10">
          <button
            type="button"
            onClick={onBack}
            className="text-xs font-sans text-[#736B5E] hover:text-[#15150F] transition-colors cursor-pointer py-2"
          >
            &larr; Back to Details
          </button>

          <button
            type="button"
            onClick={onProceedToPayment}
            className="w-full sm:w-auto px-7 py-3 bg-[#0E3B2E] text-white hover:bg-[#092920] active:scale-[0.99] transition-all rounded-sm font-sans text-xs sm:text-[13px] font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Continue to Payment</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
