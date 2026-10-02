"use client";

import Image from "next/image";
import { ConsultationType, CONSULTATION_PRICING } from "./types";

interface ConsultationTypeSelectorProps {
  selectedType: ConsultationType;
  onSelect: (type: ConsultationType) => void;
}

export default function ConsultationTypeSelector({
  selectedType,
  onSelect,
}: ConsultationTypeSelectorProps) {
  const types: ConsultationType[] = ["non-bridal", "bridal"];

  return (
    <section aria-labelledby="consultation-type-heading" className="space-y-4">
      {/* Heading & Subtitle */}
      <div>
        <h2
          id="consultation-type-heading"
          className="font-fraunces text-2xl sm:text-[1.65rem] font-normal text-[#15150F] tracking-tight"
        >
          1. Choose Your Consultation Type
        </h2>
        <p className="mt-1 text-xs sm:text-[13px] font-sans text-[#736B5E]">
          Select the type of consultation that best matches your occasion.
        </p>
      </div>

      {/* Two Consultation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {types.map((typeKey) => {
          const item = CONSULTATION_PRICING[typeKey];
          const isSelected = selectedType === typeKey;

          return (
            <div
              key={typeKey}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(typeKey)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(typeKey);
                }
              }}
              className={`group cursor-pointer p-4 sm:p-4.5 rounded-sm border transition-all duration-300 flex items-start gap-4 ${
                isSelected
                  ? "bg-[#FAF7F0] border-[#B98A2E] shadow-sm ring-1 ring-[#B98A2E]/30"
                  : "bg-white border-[#15150F]/10 hover:border-[#B98A2E]/50 hover:bg-[#FCFAF7]"
              }`}
            >
              {/* Thumbnail Image */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden bg-[#ECE8DF] shrink-0 border border-[#15150F]/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="80px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Copy */}
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-fraunces text-base sm:text-[17px] font-normal text-[#15150F] leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-fraunces text-base sm:text-lg font-light text-[#9E7B3B] mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Custom Radio Button */}
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                      isSelected
                        ? "border-[#B98A2E] bg-white"
                        : "border-[#D4CEBF] bg-white group-hover:border-[#9E7B3B]"
                    }`}
                    aria-hidden="true"
                  >
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#B98A2E]" />
                    )}
                  </div>
                </div>

                <p className="mt-2 text-[11px] sm:text-xs text-[#736B5E] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
