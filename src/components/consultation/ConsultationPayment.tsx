"use client";

import { useState } from "react";
import { ShieldCheck, Lock, Smartphone, CreditCard, Building2, AlertCircle } from "lucide-react";
import { ConsultationDetails, CONSULTATION_PRICING, PaymentMethod } from "./types";

interface ConsultationPaymentProps {
  details: ConsultationDetails;
  onPaymentSuccess: (paymentMethod: PaymentMethod, paymentRef: string) => void;
  onBack: () => void;
  isProcessing: boolean;
}

export default function ConsultationPayment({
  details,
  onPaymentSuccess,
  onBack,
  isProcessing,
}: ConsultationPaymentProps) {
  const pricing = CONSULTATION_PRICING[details.type];
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("momo");

  // Mobile Money states
  const [momoNetwork, setMomoNetwork] = useState<"MTN" | "Telecel" | "AT">("MTN");
  const [momoNumber, setMomoNumber] = useState(details.phone || "");

  // Card states
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardHolder, setCardHolder] = useState(`${details.firstName} ${details.lastName}`.trim());

  // Error state
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (selectedMethod === "momo") {
      if (!momoNumber || momoNumber.length < 9) {
        setError("Please enter a valid Ghana Mobile Money number.");
        return;
      }
    } else if (selectedMethod === "card") {
      if (!cardNumber || cardNumber.replace(/\s/g, "").length < 16) {
        setError("Please enter a valid 16-digit card number.");
        return;
      }
      if (!cardExpiry || !cardExpiry.includes("/")) {
        setError("Please enter a valid expiration date (MM/YY).");
        return;
      }
      if (!cardCvc || cardCvc.length < 3) {
        setError("Please enter a valid CVV security code.");
        return;
      }
    }

    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const generatedRef = `PAY-BM-${randomSuffix}`;

    onPaymentSuccess(selectedMethod, generatedRef);
  };

  return (
    <section aria-labelledby="payment-heading" className="space-y-6">
      {/* Heading & Subtitle */}
      <div>
        <h2
          id="payment-heading"
          className="font-fraunces text-2xl sm:text-[1.65rem] font-normal text-[#15150F] tracking-tight"
        >
          5. Consultation Payment
        </h2>
        <p className="mt-1 text-xs sm:text-[13px] font-sans text-[#736B5E]">
          Securely complete your consultation fee to guarantee your atelier reservation.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#15150F]/10 shadow-sm space-y-6">
        {/* Banner with Clear Amount & Deduction Policy */}
        <div className="p-4 sm:p-5 bg-[#FAF7F0] border border-[#B98A2E]/30 rounded-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#B98A2E]/20 pb-3 mb-3">
            <div>
              <span className="text-[10.5px] font-sans font-semibold tracking-wider uppercase text-[#736B5E] block">
                CONSULTATION PAYMENT
              </span>
              <span className="font-fraunces text-lg sm:text-xl text-[#15150F]">
                {pricing.title}
              </span>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[10.5px] font-sans text-[#736B5E] block">
                Total Due
              </span>
              <span className="font-fraunces text-2xl sm:text-3xl text-[#9E7B3B] font-light">
                GHS {pricing.fee}
              </span>
            </div>
          </div>
          <p className="text-xs text-[#524D45] font-sans leading-relaxed">
            This payment confirms your consultation appointment. It is non-refundable and will be deducted from your final garment cost if you proceed with an order.
          </p>
        </div>

        {/* Payment Method Selector Tabs */}
        <div>
          <label className="block text-xs font-sans font-semibold tracking-wider uppercase text-[#736B5E] mb-3">
            Select Payment Method
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {[
              {
                id: "momo" as PaymentMethod,
                label: "Mobile Money",
                sub: "MTN, Telecel, AT",
                icon: Smartphone,
              },
              {
                id: "card" as PaymentMethod,
                label: "Card",
                sub: "Visa, Mastercard",
                icon: CreditCard,
              },
              {
                id: "bank" as PaymentMethod,
                label: "Bank Wire",
                sub: "Atelier Account",
                icon: Building2,
              },
            ].map((method) => {
              const Icon = method.icon;
              const isSelected = selectedMethod === method.id;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => {
                    setSelectedMethod(method.id);
                    setError(null);
                  }}
                  className={`p-3 rounded-sm border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#0E3B2E] text-white border-[#0E3B2E] shadow-sm"
                      : "bg-[#FBF9F4] text-[#15150F] border-[#15150F]/15 hover:border-[#9E7B3B]"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 mb-2 ${
                      isSelected ? "text-[#E4ECE7]" : "text-[#736B5E]"
                    }`}
                  />
                  <div className="text-xs font-sans font-medium">{method.label}</div>
                  <div
                    className={`text-[10px] font-sans truncate ${
                      isSelected ? "text-[#E4ECE7]/80" : "text-[#8E8678]"
                    }`}
                  >
                    {method.sub}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-sm text-xs text-red-600 font-sans flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Payment Forms */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          {selectedMethod === "momo" && (
            <div className="space-y-4 bg-[#FBF9F4] p-4 sm:p-5 rounded-sm border border-[#15150F]/10">
              <div className="text-xs font-sans text-[#524D45]">
                You will receive an instant prompt on your phone to authorize GHS {pricing.fee}.
              </div>

              {/* Network Provider Radios */}
              <div>
                <label className="block text-[11px] font-sans text-[#736B5E] mb-1.5 uppercase tracking-wide">
                  Mobile Network Provider
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["MTN", "Telecel", "AT"] as const).map((net) => (
                    <button
                      key={net}
                      type="button"
                      onClick={() => setMomoNetwork(net)}
                      className={`py-2 px-3 text-xs font-sans rounded-sm border text-center transition-all cursor-pointer ${
                        momoNetwork === net
                          ? "bg-[#FAF7F0] border-[#B98A2E] text-[#15150F] font-semibold"
                          : "bg-white border-[#15150F]/15 text-[#736B5E]"
                      }`}
                    >
                      {net === "MTN" ? "MTN MoMo" : net === "Telecel" ? "Telecel Cash" : "AT Money"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="momoNumber"
                  className="block text-xs font-sans font-medium text-[#15150F] mb-1.5"
                >
                  Mobile Money Registered Phone Number
                </label>
                <input
                  id="momoNumber"
                  type="tel"
                  required
                  value={momoNumber}
                  onChange={(e) => setMomoNumber(e.target.value)}
                  placeholder="024 123 4567"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-[13px] font-sans bg-white border border-[#15150F]/15 rounded-sm outline-none focus:border-[#0E3B2E]"
                />
              </div>
            </div>
          )}

          {selectedMethod === "card" && (
            <div className="space-y-4 bg-[#FBF9F4] p-4 sm:p-5 rounded-sm border border-[#15150F]/10">
              <div>
                <label
                  htmlFor="cardHolder"
                  className="block text-xs font-sans font-medium text-[#15150F] mb-1.5"
                >
                  Name on Card
                </label>
                <input
                  id="cardHolder"
                  type="text"
                  required
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  placeholder="Akua Mensah"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-[13px] font-sans bg-white border border-[#15150F]/15 rounded-sm outline-none focus:border-[#0E3B2E]"
                />
              </div>

              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-xs font-sans font-medium text-[#15150F] mb-1.5"
                >
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  required
                  maxLength={19}
                  value={cardNumber}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                    const formatted = v.match(/.{1,4}/g)?.join(" ") || v;
                    setCardNumber(formatted);
                  }}
                  placeholder="4123 4567 8901 2345"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-[13px] font-sans bg-white border border-[#15150F]/15 rounded-sm outline-none focus:border-[#0E3B2E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="cardExpiry"
                    className="block text-xs font-sans font-medium text-[#15150F] mb-1.5"
                  >
                    Expiry (MM/YY)
                  </label>
                  <input
                    id="cardExpiry"
                    type="text"
                    required
                    maxLength={5}
                    value={cardExpiry}
                    onChange={(e) => {
                      let v = e.target.value.replace(/\D/g, "").slice(0, 4);
                      if (v.length >= 3) {
                        v = `${v.slice(0, 2)}/${v.slice(2)}`;
                      }
                      setCardExpiry(v);
                    }}
                    placeholder="12/28"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-[13px] font-sans bg-white border border-[#15150F]/15 rounded-sm outline-none focus:border-[#0E3B2E]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cardCvc"
                    className="block text-xs font-sans font-medium text-[#15150F] mb-1.5"
                  >
                    Security Code (CVV)
                  </label>
                  <input
                    id="cardCvc"
                    type="password"
                    required
                    maxLength={4}
                    value={cardCvc}
                    onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    placeholder="123"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-[13px] font-sans bg-white border border-[#15150F]/15 rounded-sm outline-none focus:border-[#0E3B2E]"
                  />
                </div>
              </div>
            </div>
          )}

          {selectedMethod === "bank" && (
            <div className="space-y-3 bg-[#FBF9F4] p-4 sm:p-5 rounded-sm border border-[#15150F]/10 text-xs font-sans">
              <p className="text-[#524D45] leading-relaxed">
                Direct wire transfer to the Blak Meyd Atelier corporate treasury account. Your slot will be held for 12 hours pending confirmation.
              </p>
              <div className="bg-white p-3.5 rounded-sm border border-[#15150F]/10 space-y-1.5 text-[11.5px]">
                <div className="flex justify-between">
                  <span className="text-[#736B5E]">Bank Name:</span>
                  <span className="font-medium text-[#15150F]">Standard Chartered Bank Ghana</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736B5E]">Account Name:</span>
                  <span className="font-medium text-[#15150F]">Blak Meyd Atelier Limited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736B5E]">Account Number:</span>
                  <span className="font-mono font-medium text-[#15150F]">0100 2348 9120 01</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736B5E]">Branch:</span>
                  <span className="font-medium text-[#15150F]">Airport City Branch, Accra</span>
                </div>
              </div>
            </div>
          )}

          {/* Security Assurance */}
          <div className="flex items-center gap-2 text-[11px] text-[#736B5E] font-sans pt-1">
            <Lock className="w-3.5 h-3.5 text-[#0E3B2E]" />
            <span>256-bit encrypted secure atelier transaction. Zero garment fees are charged now.</span>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 border-t border-[#15150F]/10">
            <button
              type="button"
              onClick={onBack}
              disabled={isProcessing}
              className="text-xs font-sans text-[#736B5E] hover:text-[#15150F] transition-colors cursor-pointer py-2 disabled:opacity-50"
            >
              &larr; Back to Review
            </button>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0E3B2E] text-white hover:bg-[#092920] active:scale-[0.99] transition-all rounded-sm font-sans text-xs sm:text-[13px] font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
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
                  Authorizing Payment...
                </span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-[#E4ECE7]" />
                  <span>Authorize &amp; Pay GHS {pricing.fee}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
