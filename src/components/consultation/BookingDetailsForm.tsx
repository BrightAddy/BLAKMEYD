"use client";

import { ConsultationDetails, ConsultationFormat } from "./types";

interface BookingDetailsFormProps {
  details: ConsultationDetails;
  onChange: (field: keyof ConsultationDetails, value: string | number) => void;
  errors?: Partial<Record<keyof ConsultationDetails, string>>;
}

export default function BookingDetailsForm({
  details,
  onChange,
  errors = {},
}: BookingDetailsFormProps) {
  return (
    <section aria-labelledby="details-heading" className="space-y-6">
      {/* Heading & Subtitle */}
      <div>
        <h2
          id="details-heading"
          className="font-fraunces text-2xl sm:text-[1.65rem] font-normal text-[#15150F] tracking-tight"
        >
          3. Your Details
        </h2>
        <p className="mt-1 text-xs sm:text-[13px] font-sans text-[#736B5E]">
          Please provide your contact information so our atelier concierge can prepare for your session.
        </p>
      </div>

      <div className="bg-white p-5 sm:p-7 rounded-sm border border-[#15150F]/10 shadow-sm space-y-6">
        {/* Consultation Format (In-Person vs Virtual) */}
        <div>
          <label className="block text-xs font-sans font-semibold tracking-wider uppercase text-[#736B5E] mb-2.5">
            Consultation Format
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                id: "in-person" as ConsultationFormat,
                title: "In-Person Fitting Salon",
                subtitle: "Atelier, Airport Residential Area, Accra",
              },
              {
                id: "virtual" as ConsultationFormat,
                title: "Virtual Private Video Link",
                subtitle: "High-definition private video consultation",
              },
            ].map((option) => {
              const isSelected = details.format === option.id;
              return (
                <div
                  key={option.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => onChange("format", option.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onChange("format", option.id);
                    }
                  }}
                  className={`cursor-pointer p-3.5 rounded-sm border text-left transition-all ${
                    isSelected
                      ? "bg-[#FAF7F0] border-[#B98A2E] ring-1 ring-[#B98A2E]/30"
                      : "bg-white border-[#15150F]/10 hover:border-[#B98A2E]/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-fraunces text-sm text-[#15150F]">
                      {option.title}
                    </span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? "border-[#B98A2E] bg-white"
                          : "border-[#D4CEBF] bg-white"
                      }`}
                    >
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#B98A2E]" />
                      )}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] font-sans text-[#736B5E]">
                    {option.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-xs font-sans font-medium text-[#15150F] mb-1.5"
            >
              First Name <span className="text-[#9E7B3B]">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              required
              value={details.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
              placeholder="e.g. Akua"
              className={`w-full px-3.5 py-2.5 text-xs sm:text-[13px] font-sans bg-[#FBF9F4] border rounded-sm outline-none transition-colors ${
                errors.firstName
                  ? "border-red-400 focus:border-red-500"
                  : "border-[#15150F]/15 focus:border-[#0E3B2E] focus:bg-white"
              }`}
            />
            {errors.firstName && (
              <p className="mt-1 text-[11px] text-red-500 font-sans">
                {errors.firstName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-xs font-sans font-medium text-[#15150F] mb-1.5"
            >
              Last Name <span className="text-[#9E7B3B]">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              required
              value={details.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
              placeholder="e.g. Mensah"
              className={`w-full px-3.5 py-2.5 text-xs sm:text-[13px] font-sans bg-[#FBF9F4] border rounded-sm outline-none transition-colors ${
                errors.lastName
                  ? "border-red-400 focus:border-red-500"
                  : "border-[#15150F]/15 focus:border-[#0E3B2E] focus:bg-white"
              }`}
            />
            {errors.lastName && (
              <p className="mt-1 text-[11px] text-red-500 font-sans">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-sans font-medium text-[#15150F] mb-1.5"
            >
              Email Address <span className="text-[#9E7B3B]">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={details.email}
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="akua@example.com"
              className={`w-full px-3.5 py-2.5 text-xs sm:text-[13px] font-sans bg-[#FBF9F4] border rounded-sm outline-none transition-colors ${
                errors.email
                  ? "border-red-400 focus:border-red-500"
                  : "border-[#15150F]/15 focus:border-[#0E3B2E] focus:bg-white"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-[11px] text-red-500 font-sans">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-sans font-medium text-[#15150F] mb-1.5"
            >
              Phone / WhatsApp <span className="text-[#9E7B3B]">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={details.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              placeholder="+233 24 000 0000"
              className={`w-full px-3.5 py-2.5 text-xs sm:text-[13px] font-sans bg-[#FBF9F4] border rounded-sm outline-none transition-colors ${
                errors.phone
                  ? "border-red-400 focus:border-red-500"
                  : "border-[#15150F]/15 focus:border-[#0E3B2E] focus:bg-white"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-[11px] text-red-500 font-sans">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Tell Us About Your Idea */}
        <div>
          <div className="flex items-baseline justify-between mb-1.5">
            <label
              htmlFor="ideaNotes"
              className="block text-xs font-sans font-medium text-[#15150F]"
            >
              Tell us about your idea
            </label>
            <span className="text-[11px] text-[#8E8678] font-sans italic">
              Optional but helpful
            </span>
          </div>
          <textarea
            id="ideaNotes"
            rows={4}
            value={details.ideaNotes}
            onChange={(e) => onChange("ideaNotes", e.target.value)}
            placeholder="Tell us about your occasion, aesthetic inspiration, preferred silhouettes, fabrics or anything important you would like us to discuss..."
            className="w-full px-3.5 py-3 text-xs sm:text-[13px] font-sans bg-[#FBF9F4] border border-[#15150F]/15 rounded-sm outline-none transition-colors focus:border-[#0E3B2E] focus:bg-white resize-none"
          />
          <p className="mt-1.5 text-[11px] text-[#736B5E] font-sans leading-relaxed">
            Note: Detailed measurements and final fabric selections are made during or after the consultation session.
          </p>
        </div>
      </div>
    </section>
  );
}
