"use client";

import { Info, ArrowRight } from "lucide-react";
import { ConsultationType, CONSULTATION_PRICING } from "./types";

interface BookingStickySummaryProps {
  consultationType: ConsultationType;
  selectedDateFormatted: string;
  selectedTime: string;
  currentStep: number;
  onContinue: () => void;
  onBack: () => void;
  onEditStep?: (step: number) => void;
  isLoading?: boolean;
}

export default function BookingStickySummary({
  consultationType,
  selectedDateFormatted,
  selectedTime,
  currentStep,
  onContinue,
  onBack,
  onEditStep,
  isLoading = false,
}: BookingStickySummaryProps) {
  const currentPricing = CONSULTATION_PRICING[consultationType];

  // Dynamic button labels based on the active step
  const getButtonText = () => {
    switch (currentStep) {
      case 1:
      case 2:
        return "Continue to Your Details";
      case 3:
        return "Review Consultation";
      case 4:
        return "Continue to Payment";
      case 5:
        return `Confirm & Pay GHS ${currentPricing.fee}`;
      case 6:
        return "Go to Dashboard";
      default:
        return "Continue";
    }
  };

  return (
    <div className="bg-white p-5 sm:p-6 lg:p-7 rounded-sm border border-[#15150F]/10 shadow-sm flex flex-col justify-between sticky top-28">
      <div>
        {/* Section Heading */}
        <div className="pb-4 mb-5 border-b border-[#15150F]/10">
          <h3 className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-[#736B5E]">
            YOUR CONSULTATION
          </h3>
        </div>

        {/* Breakdown Items */}
        <div className="space-y-4 text-xs sm:text-[13px] font-sans">
          {/* Consultation Type & Price */}
          <div className="pb-3 border-b border-[#15150F]/5">
            <div className="text-[11px] text-[#8E8678] font-medium mb-1">
              Consultation Type
            </div>
            <div className="flex items-start justify-between gap-2">
              <span className="text-[#15150F] font-normal leading-snug">
                {currentPricing.title}
              </span>
              <span className="font-fraunces font-light text-base text-[#9E7B3B] shrink-0">
                GHS {currentPricing.fee}
              </span>
            </div>
          </div>

          {/* Date */}
          <div className="pb-3 border-b border-[#15150F]/5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#8E8678] font-medium">Date</span>
              {onEditStep && currentStep > 2 && currentStep < 6 && (
                <button
                  type="button"
                  onClick={() => onEditStep(2)}
                  className="text-[11px] text-[#736B5E] hover:text-[#9E7B3B] underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Edit
                </button>
              )}
            </div>
            <div className="text-[#15150F] font-normal mt-0.5">
              {selectedDateFormatted || "14 October 2026"}
            </div>
          </div>

          {/* Time */}
          <div className="pb-4 border-b border-[#15150F]/10">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#8E8678] font-medium">Time</span>
              {onEditStep && currentStep > 2 && currentStep < 6 && (
                <button
                  type="button"
                  onClick={() => onEditStep(2)}
                  className="text-[11px] text-[#736B5E] hover:text-[#9E7B3B] underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Edit
                </button>
              )}
            </div>
            <div className="text-[#15150F] font-normal mt-0.5">
              {selectedTime || "2:00 PM"}
            </div>
          </div>

          {/* Total */}
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-fraunces text-base sm:text-lg text-[#15150F] font-normal">
              Total
            </span>
            <span className="font-fraunces text-xl sm:text-2xl text-[#9E7B3B] font-light">
              GHS {currentPricing.fee}
            </span>
          </div>

          {/* Informational Callout (Fee Deductible) */}
          <div className="p-3.5 bg-[#FAF7F0] border border-[#B98A2E]/25 rounded-sm flex items-start gap-2.5 mt-5">
            <Info className="w-4 h-4 text-[#9E7B3B] shrink-0 mt-0.5" />
            <p className="text-[11.5px] leading-relaxed text-[#736B5E] font-sans">
              Consultation fees are non-refundable and will be deducted from the final cost if you proceed with your order.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-[#15150F]/10 space-y-3">
        <button
          type="button"
          onClick={onContinue}
          disabled={isLoading}
          className="w-full py-3.5 px-4 bg-[#0E3B2E] text-white hover:bg-[#092920] active:scale-[0.99] transition-all rounded-sm font-sans text-xs sm:text-[13px] font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
        >
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </span>
          ) : (
            <>
              <span>{getButtonText()}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        {/* Back Link */}
        {currentStep > 1 && currentStep < 6 && (
          <button
            type="button"
            onClick={onBack}
            className="w-full py-2 text-center text-xs font-sans text-[#736B5E] hover:text-[#15150F] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>&larr;</span>
            <span>Back</span>
          </button>
        )}
      </div>
    </div>
  );
}
