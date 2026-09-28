"use client";

import { Check } from "lucide-react";

interface BookingProgressProps {
  currentStep: number; // 1 to 6
  onStepClick?: (step: number) => void;
}

const STEPS = [
  { step: 1, label: "Consultation Type" },
  { step: 2, label: "Appointment" },
  { step: 3, label: "Your Details" },
  { step: 4, label: "Review" },
  { step: 5, label: "Payment" },
  { step: 6, label: "Confirmation" },
];

export default function BookingProgress({ currentStep, onStepClick }: BookingProgressProps) {
  return (
    <div className="w-full py-6 sm:py-8 border-b border-[#15150F]/8 overflow-x-auto no-scrollbar">
      <div className="max-w-4xl mx-auto px-4 min-w-[560px] sm:min-w-0">
        <div className="relative flex items-center justify-between">
          {/* Background Connecting Line */}
          <div
            className="absolute top-3.5 left-4 right-4 h-[1px] bg-[#E0D8C8] -z-0"
            aria-hidden="true"
          />

          {STEPS.map((item) => {
            const isCompleted = item.step < currentStep;
            const isCurrent = item.step === currentStep;
            const isClickable = isCompleted && onStepClick && currentStep < 6;

            return (
              <div
                key={item.step}
                className="relative z-10 flex flex-col items-center group cursor-default"
              >
                {/* Circle */}
                <button
                  type="button"
                  disabled={!isClickable}
                  onClick={() => isClickable && onStepClick(item.step)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-sans transition-all duration-300 ${
                    isCurrent
                      ? "bg-[#9E7B3B] text-white shadow-sm ring-4 ring-[#FBF9F4]"
                      : isCompleted
                      ? "bg-[#0E3B2E] text-white ring-4 ring-[#FBF9F4] cursor-pointer hover:bg-[#9E7B3B]"
                      : "bg-[#FBF9F4] border border-[#D4CEBF] text-[#736B5E]"
                  }`}
                  aria-label={`Step ${item.step}: ${item.label}`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <span className="text-[11px] sm:text-xs font-medium">{item.step}</span>
                  )}
                </button>

                {/* Label */}
                <span
                  className={`mt-2 text-[10.5px] sm:text-[11px] font-sans text-center transition-colors whitespace-nowrap ${
                    isCurrent
                      ? "font-semibold text-[#15150F]"
                      : isCompleted
                      ? "text-[#524D45] font-medium"
                      : "text-[#8E8678]"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
