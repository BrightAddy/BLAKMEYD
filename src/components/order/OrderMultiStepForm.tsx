"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Upload,
  X,
  Check,
  Copy,
  ExternalLink,
  Calendar,
  Sparkles,
  Info,
  CheckCircle2,
} from "lucide-react";
import {
  OrderFormData,
  INITIAL_ORDER_DATA,
  ORDER_STEPS,
  OrderReferenceFile,
} from "@/types/order";

interface OrderMultiStepFormProps {
  onExit: () => void;
}

export default function OrderMultiStepForm({ onExit }: OrderMultiStepFormProps) {
  const shouldReduceMotion = useReducedMotion();

  // Master persistent form state
  const [formData, setFormData] = useState<OrderFormData>(INITIAL_ORDER_DATA);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderReference, setOrderReference] = useState("");
  const [copiedRef, setCopiedRef] = useState(false);

  // Scroll form area to top on step change
  const formScrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (formScrollRef.current) {
      formScrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentStep]);

  // Ensure body attribute data-hide-nav is set while in the order form
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.setAttribute("data-hide-nav", "true");
      window.dispatchEvent(new Event("blakmeyd:nav-state"));
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.removeAttribute("data-hide-nav");
        window.dispatchEvent(new Event("blakmeyd:nav-state"));
      }
    };
  }, []);

  // Update form fields
  const updateField = <K extends keyof OrderFormData>(
    field: K,
    value: OrderFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear validation error on touch
    if (errors[field as string]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as string];
        return next;
      });
    }
  };

  // Step Validation
  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!formData.clientName.trim()) {
        newErrors.clientName = "Please enter your full name";
      }
      if (!formData.contactDetails.trim()) {
        newErrors.contactDetails = "Please enter your contact phone number";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Please enter your email address";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (!formData.address.trim()) {
        newErrors.address = "Please enter your delivery or studio fitting address";
      }
    } else if (stepNumber === 2) {
      if (!formData.garmentOccasion.trim()) {
        newErrors.garmentOccasion = "Please specify the occasion for your garment";
      }
      if (!formData.eventDate) {
        newErrors.eventDate = "Please select the date of your event";
      }
      if (!formData.pickupDate) {
        newErrors.pickupDate = "Please select your preferred completion / pickup date";
      }
    } else if (stepNumber === 3) {
      if (!formData.bust.trim()) {
        newErrors.bust = "Please enter bust measurement";
      }
      if (!formData.waist.trim()) {
        newErrors.waist = "Please enter waist measurement";
      }
      if (!formData.hip.trim()) {
        newErrors.hip = "Please enter hip measurement";
      }
      if (!formData.dressLength.trim()) {
        newErrors.dressLength = "Please enter dress length measurement";
      }
    } else if (stepNumber === 4) {
      if (!formData.designDetails.trim() || formData.designDetails.trim().length < 8) {
        newErrors.designDetails =
          "Please provide details regarding your design, colour, silhouette, or styling preferences";
      }
    } else if (stepNumber === 6) {
      if (!formData.acknowledgedTerms) {
        newErrors.acknowledgedTerms =
          "Please acknowledge that final pricing is confirmed following atelier review";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation handlers
  const handleContinue = () => {
    if (!validateStep(currentStep)) return;

    if (currentStep < 7) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      // Return to hero
      if (typeof document !== "undefined") {
        document.body.removeAttribute("data-hide-nav");
        window.dispatchEvent(new Event("blakmeyd:nav-state"));
      }
      onExit();
    } else {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleJumpToStep = (stepNumber: number) => {
    setDirection(stepNumber > currentStep ? 1 : -1);
    setCurrentStep(stepNumber);
  };

  // File Upload Handlers (for Step 05)
  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "garment" | "fabric"
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newFiles: OrderReferenceFile[] = Array.from(files).map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: file.name,
      size: file.size,
      type: file.type,
      previewUrl: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : undefined,
    }));

    if (type === "garment") {
      updateField("garmentDesignFiles", [
        ...formData.garmentDesignFiles,
        ...newFiles,
      ]);
    } else {
      updateField("fabricSampleFiles", [
        ...formData.fabricSampleFiles,
        ...newFiles,
      ]);
    }
  };

  const removeFile = (id: string, type: "garment" | "fabric") => {
    if (type === "garment") {
      updateField(
        "garmentDesignFiles",
        formData.garmentDesignFiles.filter((f) => f.id !== id)
      );
    } else {
      updateField(
        "fabricSampleFiles",
        formData.fabricSampleFiles.filter((f) => f.id !== id)
      );
    }
  };

  // Order Submission
  const handleSubmitOrder = async () => {
    // Validate required steps
    if (
      !validateStep(1) ||
      !validateStep(2) ||
      !validateStep(3) ||
      !validateStep(4) ||
      !validateStep(6)
    ) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate clean unique order reference: BM-ORD-XXXX
      const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      const generatedRef = `BM-ORD-${randomCode}`;

      // Simulate network persistence delay
      await new Promise((resolve) => setTimeout(resolve, 1400));

      setOrderReference(generatedRef);
      setIsSubmitted(true);
    } catch {
      setErrors({ submit: "An error occurred while submitting. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && orderReference) {
      navigator.clipboard.writeText(orderReference);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  // Slide Animation Variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.35,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -30 : 30,
      opacity: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.25,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  // ═════════════════════════════════════════════════════════════════════════
  // SEPARATE ORDER CONFIRMATION SCREEN (NOT STEP 08)
  // ═════════════════════════════════════════════════════════════════════════
  if (isSubmitted) {
    return (
      <div className="min-h-screen w-full bg-[#FBF9F4] text-[#15150F] flex items-center justify-center py-12 px-6 sm:px-10 lg:px-16 selection:bg-[#B98A2E] selection:text-[#15150F]">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl w-full bg-[#F5F2EB] border border-[#DDD5C5]/80 p-8 sm:p-12 lg:p-16 rounded-[2px] shadow-sm text-center relative overflow-hidden"
        >
          {/* Subtle gold brand crest watermark */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(185,138,46,0.08),transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Success Check Seal */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0E3B2E] text-[#B98A2E] mx-auto flex items-center justify-center mb-8 border border-[#B98A2E]/40 shadow-sm">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#B98A2E]" strokeWidth={1.8} />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B98A2E]/60" />
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] text-[#B98A2E] font-medium uppercase">
              ORDER RECEIVED
            </span>
            <span className="w-8 h-[1px] bg-[#B98A2E]/60" />
          </div>

          {/* Display Heading */}
          <h1 className="font-heading font-normal text-3xl sm:text-4xl lg:text-5xl text-[#0E3B2E] tracking-tight mb-4">
            Thank You,{" "}
            <span className="italic text-[#B98A2E] font-normal">
              {formData.clientName || "Valued Client"}
            </span>
            .
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#15150F]/75 font-normal leading-relaxed max-w-md mx-auto mb-8">
            Your bespoke garment order request has been received by our atelier in
            Accra. Our creative director and master pattern makers will review your
            measurements and design details.
          </p>

          {/* Order Reference Box */}
          <div className="bg-[#FAF7F2] border border-[#B98A2E]/30 p-5 sm:p-6 mb-8 rounded-[1px] max-w-md mx-auto">
            <span className="font-sans text-[9px] sm:text-[9.5px] tracking-[0.26em] uppercase text-[#15150F]/60 block mb-1">
              ORDER REFERENCE
            </span>
            <div className="flex items-center justify-center gap-3">
              <span className="font-mono text-xl sm:text-2xl font-semibold tracking-wider text-[#0E3B2E]">
                {orderReference}
              </span>
              <button
                type="button"
                onClick={copyToClipboard}
                title="Copy reference code"
                className="p-1.5 rounded hover:bg-[#B98A2E]/15 text-[#B98A2E] transition-colors"
                aria-label="Copy order reference to clipboard"
              >
                {copiedRef ? (
                  <Check className="w-4 h-4 text-[#0E3B2E]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copiedRef && (
              <span className="font-sans text-[10px] text-[#0E3B2E] mt-1 block">
                Reference copied to clipboard
              </span>
            )}
          </div>

          {/* Order Summary Recap Cards */}
          <div className="grid grid-cols-2 gap-4 text-left border-t border-[#DDD5C5]/70 pt-6 mb-8 text-xs font-sans">
            <div>
              <span className="text-[9.5px] uppercase tracking-wider text-[#15150F]/50 block">
                Occasion
              </span>
              <span className="font-medium text-[#15150F]/90">
                {formData.garmentOccasion || "Bespoke Garment"}
              </span>
            </div>
            <div>
              <span className="text-[9.5px] uppercase tracking-wider text-[#15150F]/50 block">
                Event Date
              </span>
              <span className="font-medium text-[#15150F]/90">
                {formData.eventDate || "To be confirmed"}
              </span>
            </div>
            <div>
              <span className="text-[9.5px] uppercase tracking-wider text-[#15150F]/50 block">
                Contact
              </span>
              <span className="font-medium text-[#15150F]/90 truncate block">
                {formData.contactDetails}
              </span>
            </div>
            <div>
              <span className="text-[9.5px] uppercase tracking-wider text-[#15150F]/50 block">
                Email
              </span>
              <span className="font-medium text-[#15150F]/90 truncate block">
                {formData.email}
              </span>
            </div>
          </div>

          {/* Direct Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/233559883589?text=${encodeURIComponent(
                `Hello Blak Meyd Atelier, I have submitted a bespoke garment order with reference: ${orderReference}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 bg-[#0E3B2E] border border-[#B98A2E] text-[#FBF9F4] text-[11px] font-medium tracking-[0.2em] uppercase font-sans hover:bg-[#07241C] transition-colors rounded-[1px]"
            >
              <span>Chat on WhatsApp with Reference</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#B98A2E]" />
            </a>

            <button
              type="button"
              onClick={() => {
                if (typeof document !== "undefined") {
                  document.body.removeAttribute("data-hide-nav");
                  window.dispatchEvent(new Event("blakmeyd:nav-state"));
                }
                onExit();
              }}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 border border-[#15150F]/20 text-[#15150F]/80 text-[11px] font-medium tracking-[0.2em] uppercase font-sans hover:bg-[#15150F]/5 transition-colors rounded-[1px]"
            >
              Return to Atelier
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ═════════════════════════════════════════════════════════════════════════
  // MAIN PERSISTENT FORM WORKFLOW (SPLIT EDITORIAL INTERFACE)
  // ═════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen w-full bg-[#FBF9F4] text-[#15150F] flex flex-col lg:flex-row selection:bg-[#B98A2E] selection:text-[#15150F] overflow-x-hidden">
      {/* ═════════════════════════════════════════════════════════════════════
          LEFT COLUMN: PERMANENT ATELIER VISUAL (STABLE ACROSS ALL STEPS)
      ═════════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full lg:w-[42%] lg:min-h-screen lg:sticky lg:top-0 h-48 sm:h-64 lg:h-screen bg-[#F5F2EB] overflow-hidden shrink-0 border-b lg:border-b-0 lg:border-r border-[#DDD5C5]/70">
        <Image
          src="/images/order/order-hero-atelier.jpg"
          alt="Blak Meyd couture fashion atelier with emerald velvet gown on mannequin, marble worktable, and fashion sketches"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover object-[55%_center] select-none"
        />

        {/* Ambient Dark Gradient Vignette for Atelier Brand Seal */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0E3B2E]/80 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Brand Atelier Seal (Bottom Left) */}
        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 z-10 select-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-heading text-xs sm:text-sm text-[#FBF9F4] tracking-[0.22em] uppercase">
              BLAK MEYD
            </span>
            <span className="w-5 sm:w-7 h-[1px] bg-[#B98A2E]" aria-hidden="true" />
          </div>
          <p className="font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.26em] uppercase text-[#B98A2E] font-medium">
            BESPOKE COUTURE ATELIER
          </p>
          <p className="font-sans text-[8px] sm:text-[8.5px] tracking-[0.22em] uppercase text-[#FBF9F4]/75">
            ACCRA, GHANA
          </p>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          RIGHT COLUMN: INTERACTIVE FORM CONTAINER (~58%)
      ═════════════════════════════════════════════════════════════════════ */}
      <div
        ref={formScrollRef}
        className="w-full lg:w-[58%] min-h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 xl:p-18 overflow-y-auto"
      >
        <div>
          {/* ── 01: SEVEN-STEP PROGRESS INDICATOR ── */}
          <nav
            aria-label="Garment Order Steps Progress"
            className="w-full mb-10 sm:mb-12 border-b border-[#DDD5C5]/60 pb-6 sm:pb-8"
          >
            {/* Desktop / Tablet 7-Step Horizontal Tracker */}
            <div className="hidden sm:flex items-start justify-between relative">
              {/* Connecting Background Line */}
              <div
                className="absolute top-4 left-6 right-6 h-[1px] bg-[#DDD5C5] -z-0"
                aria-hidden="true"
              />

              {ORDER_STEPS.map((step) => {
                const isCurrent = step.id === currentStep;
                const isCompleted = step.id < currentStep;

                return (
                  <div
                    key={step.id}
                    className="relative z-10 flex flex-col items-center text-center flex-1"
                  >
                    <button
                      type="button"
                      disabled={step.id > currentStep}
                      onClick={() => handleJumpToStep(step.id)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                        isCurrent
                          ? "bg-[#0E3B2E] text-[#B98A2E] border-2 border-[#B98A2E] ring-2 ring-[#B98A2E]/25 shadow-sm"
                          : isCompleted
                          ? "bg-[#FAF7F2] text-[#0E3B2E] border border-[#B98A2E] hover:bg-[#B98A2E]/10 cursor-pointer"
                          : "bg-[#FBF9F4] text-[#15150F]/40 border border-[#DDD5C5] cursor-not-allowed"
                      }`}
                      aria-current={isCurrent ? "step" : undefined}
                    >
                      {isCompleted ? (
                        <Check className="w-3.5 h-3.5 text-[#B98A2E]" strokeWidth={2.2} />
                      ) : (
                        <span>0{step.id}</span>
                      )}
                    </button>

                    <span
                      className={`font-sans text-[9.5px] tracking-[0.16em] uppercase mt-2 max-w-[80px] leading-tight transition-colors ${
                        isCurrent
                          ? "text-[#0E3B2E] font-semibold"
                          : isCompleted
                          ? "text-[#15150F]/80 font-normal"
                          : "text-[#15150F]/40 font-light"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Mobile Compact Progress Tracker */}
            <div className="flex sm:hidden items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0E3B2E] text-[#B98A2E] border border-[#B98A2E] flex items-center justify-center text-[10px] font-semibold">
                  0{currentStep}
                </span>
                <span className="font-sans text-xs tracking-wider uppercase text-[#0E3B2E] font-semibold">
                  {ORDER_STEPS[currentStep - 1].label}
                </span>
              </div>
              <span className="font-sans text-[11px] tracking-widest text-[#B98A2E] font-medium">
                STEP 0{currentStep} OF 07
              </span>
            </div>
          </nav>

          {/* ── 02: ACTIVE STEP CONTENT SLIDER ── */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-2xl"
            >
              {/* ═════════════════════════════════════════════════════════════
                  STEP 01 — CLIENT DETAILS
              ═════════════════════════════════════════════════════════════ */}
              {currentStep === 1 && (
                <div>
                  {/* Step Eyebrow with gold rule */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#15150F]/65 font-medium">
                      STEP 01 / 07 &mdash; CLIENT DETAILS
                    </span>
                    <span className="w-12 h-[1px] bg-[#B98A2E]/60" aria-hidden="true" />
                  </div>

                  {/* Heading */}
                  <h2 className="font-heading font-normal text-4xl sm:text-5xl text-[#0E3B2E] tracking-tight leading-[1.06] mb-3">
                    Tell Us{" "}
                    <span className="italic text-[#B98A2E] font-normal">
                      About You.
                    </span>
                  </h2>

                  {/* Supporting Copy */}
                  <p className="font-sans text-xs sm:text-[13px] text-[#15150F]/75 font-normal leading-relaxed mb-8 sm:mb-10 max-w-lg">
                    Let&apos;s start with your details so we can get in touch and
                    keep you updated on your order.
                  </p>

                  {/* Fields Grid */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      {/* Name of Client */}
                      <div>
                        <label
                          htmlFor="clientName"
                          className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                        >
                          NAME OF CLIENT <span className="text-[#B98A2E]">*</span>
                        </label>
                        <input
                          id="clientName"
                          type="text"
                          value={formData.clientName}
                          onChange={(e) => updateField("clientName", e.target.value)}
                          placeholder="Enter your full name"
                          className={`w-full h-11 px-4 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] ${
                            errors.clientName ? "border-red-500" : "border-[#DDD5C5]"
                          }`}
                        />
                        {errors.clientName && (
                          <p className="text-[11px] text-red-600 font-sans mt-1.5">
                            {errors.clientName}
                          </p>
                        )}
                      </div>

                      {/* Contact Details */}
                      <div>
                        <label
                          htmlFor="contactDetails"
                          className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                        >
                          CONTACT DETAILS <span className="text-[#B98A2E]">*</span>
                        </label>
                        <input
                          id="contactDetails"
                          type="tel"
                          value={formData.contactDetails}
                          onChange={(e) => updateField("contactDetails", e.target.value)}
                          placeholder="e.g. +233 55 988 3589"
                          className={`w-full h-11 px-4 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] ${
                            errors.contactDetails ? "border-red-500" : "border-[#DDD5C5]"
                          }`}
                        />
                        {errors.contactDetails && (
                          <p className="text-[11px] text-red-600 font-sans mt-1.5">
                            {errors.contactDetails}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      {/* Email Address */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                        >
                          EMAIL ADDRESS <span className="text-[#B98A2E]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="Enter your email address"
                          className={`w-full h-11 px-4 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] ${
                            errors.email ? "border-red-500" : "border-[#DDD5C5]"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600 font-sans mt-1.5">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Instagram Account */}
                      <div>
                        <label
                          htmlFor="igAccount"
                          className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                        >
                          INSTAGRAM ACCOUNT
                        </label>
                        <input
                          id="igAccount"
                          type="text"
                          value={formData.igAccount}
                          onChange={(e) => updateField("igAccount", e.target.value)}
                          placeholder="@username"
                          className="w-full h-11 px-4 bg-[#FAF7F2] border border-[#DDD5C5] text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px]"
                        />
                      </div>
                    </div>

                    {/* Address (Full Width) */}
                    <div>
                      <label
                        htmlFor="address"
                        className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                      >
                        ADDRESS <span className="text-[#B98A2E]">*</span>
                      </label>
                      <textarea
                        id="address"
                        rows={3}
                        value={formData.address}
                        onChange={(e) => updateField("address", e.target.value)}
                        placeholder="Enter your street address, city, and location details"
                        className={`w-full p-4 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] resize-y ${
                          errors.address ? "border-red-500" : "border-[#DDD5C5]"
                        }`}
                      />
                      {errors.address && (
                        <p className="text-[11px] text-red-600 font-sans mt-1.5">
                          {errors.address}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ═════════════════════════════════════════════════════════════
                  STEP 02 — GARMENT & OCCASION
              ═════════════════════════════════════════════════════════════ */}
              {currentStep === 2 && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#15150F]/65 font-medium">
                      STEP 02 / 07 &mdash; GARMENT & OCCASION
                    </span>
                    <span className="w-12 h-[1px] bg-[#B98A2E]/60" aria-hidden="true" />
                  </div>

                  <h2 className="font-heading font-normal text-4xl sm:text-5xl text-[#0E3B2E] tracking-tight leading-[1.06] mb-3">
                    The Occasion{" "}
                    <span className="italic text-[#B98A2E] font-normal">Ahead.</span>
                  </h2>

                  <p className="font-sans text-xs sm:text-[13px] text-[#15150F]/75 font-normal leading-relaxed mb-8 sm:mb-10 max-w-lg">
                    Tell us about the significance of the occasion and your timeline so
                    we can ensure seamless bespoke craftsmanship.
                  </p>

                  <div className="space-y-6">
                    {/* Garment Occasion */}
                    <div>
                      <label
                        htmlFor="garmentOccasion"
                        className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                      >
                        GARMENT OCCASION <span className="text-[#B98A2E]">*</span>
                      </label>
                      <input
                        id="garmentOccasion"
                        type="text"
                        value={formData.garmentOccasion}
                        onChange={(e) => updateField("garmentOccasion", e.target.value)}
                        placeholder="e.g. Traditional Wedding, Bridal Gown, Gala, Prom, Birthday"
                        className={`w-full h-11 px-4 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] ${
                          errors.garmentOccasion ? "border-red-500" : "border-[#DDD5C5]"
                        }`}
                      />
                      {errors.garmentOccasion && (
                        <p className="text-[11px] text-red-600 font-sans mt-1.5">
                          {errors.garmentOccasion}
                        </p>
                      )}

                      {/* Quick Suggestion Chips */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {[
                          "Kente Gown",
                          "Bridal Reception",
                          "Wedding Guest",
                          "Gala & Black Tie",
                          "Graduation",
                          "Prom Dress",
                        ].map((suggestion) => (
                          <button
                            key={suggestion}
                            type="button"
                            onClick={() => updateField("garmentOccasion", suggestion)}
                            className="px-2.5 py-1 text-[10px] tracking-wider uppercase font-sans border border-[#DDD5C5] bg-[#FAF7F2] text-[#15150F]/75 hover:border-[#B98A2E] hover:text-[#0E3B2E] transition-colors rounded-[1px]"
                          >
                            + {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-2">
                      {/* Event Date */}
                      <div>
                        <label
                          htmlFor="eventDate"
                          className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                        >
                          EVENT DATE <span className="text-[#B98A2E]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={(e) => updateField("eventDate", e.target.value)}
                            className={`w-full h-11 px-4 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] ${
                              errors.eventDate ? "border-red-500" : "border-[#DDD5C5]"
                            }`}
                          />
                        </div>
                        {errors.eventDate && (
                          <p className="text-[11px] text-red-600 font-sans mt-1.5">
                            {errors.eventDate}
                          </p>
                        )}
                      </div>

                      {/* Pickup Date */}
                      <div>
                        <label
                          htmlFor="pickupDate"
                          className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                        >
                          PICKUP DATE <span className="text-[#B98A2E]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="pickupDate"
                            type="date"
                            value={formData.pickupDate}
                            onChange={(e) => updateField("pickupDate", e.target.value)}
                            className={`w-full h-11 px-4 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] ${
                              errors.pickupDate ? "border-red-500" : "border-[#DDD5C5]"
                            }`}
                          />
                        </div>
                        {errors.pickupDate && (
                          <p className="text-[11px] text-red-600 font-sans mt-1.5">
                            {errors.pickupDate}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ═════════════════════════════════════════════════════════════
                  STEP 03 — MEASUREMENTS
              ═════════════════════════════════════════════════════════════ */}
              {currentStep === 3 && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#15150F]/65 font-medium">
                      STEP 03 / 07 &mdash; MEASUREMENTS
                    </span>
                    <span className="w-12 h-[1px] bg-[#B98A2E]/60" aria-hidden="true" />
                  </div>

                  <h2 className="font-heading font-normal text-4xl sm:text-5xl text-[#0E3B2E] tracking-tight leading-[1.06] mb-3">
                    Made to{" "}
                    <span className="italic text-[#B98A2E] font-normal">
                      Your Measure.
                    </span>
                  </h2>

                  <p className="font-sans text-xs sm:text-[13px] text-[#15150F]/75 font-normal leading-relaxed mb-6 max-w-lg">
                    Provide your key anatomical measurements. Our tailoring atelier
                    ensures millimeter precision for your custom fit.
                  </p>

                  {/* Unit Selector */}
                  <div className="flex items-center gap-3 mb-8 p-3 bg-[#FAF7F2] border border-[#DDD5C5] rounded-[1px] w-fit">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-[#15150F]/60">
                      Unit of Measure:
                    </span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => updateField("measurementUnit", "inches")}
                        className={`px-3 py-1 text-xs font-medium rounded-[1px] transition-colors ${
                          formData.measurementUnit === "inches"
                            ? "bg-[#0E3B2E] text-[#B98A2E]"
                            : "text-[#15150F]/60 hover:text-[#0E3B2E]"
                        }`}
                      >
                        Inches (in)
                      </button>
                      <button
                        type="button"
                        onClick={() => updateField("measurementUnit", "cm")}
                        className={`px-3 py-1 text-xs font-medium rounded-[1px] transition-colors ${
                          formData.measurementUnit === "cm"
                            ? "bg-[#0E3B2E] text-[#B98A2E]"
                            : "text-[#15150F]/60 hover:text-[#0E3B2E]"
                        }`}
                      >
                        Centimeters (cm)
                      </button>
                    </div>
                  </div>

                  {/* 4 Contract Measurement Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Bust */}
                    <div>
                      <label
                        htmlFor="bust"
                        className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                      >
                        BUST ({formData.measurementUnit}) <span className="text-[#B98A2E]">*</span>
                      </label>
                      <input
                        id="bust"
                        type="text"
                        value={formData.bust}
                        onChange={(e) => updateField("bust", e.target.value)}
                        placeholder={`e.g. ${formData.measurementUnit === "inches" ? "36" : "91"}`}
                        className={`w-full h-11 px-4 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] ${
                          errors.bust ? "border-red-500" : "border-[#DDD5C5]"
                        }`}
                      />
                      {errors.bust && (
                        <p className="text-[11px] text-red-600 font-sans mt-1.5">
                          {errors.bust}
                        </p>
                      )}
                    </div>

                    {/* Waist */}
                    <div>
                      <label
                        htmlFor="waist"
                        className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                      >
                        WAIST ({formData.measurementUnit}) <span className="text-[#B98A2E]">*</span>
                      </label>
                      <input
                        id="waist"
                        type="text"
                        value={formData.waist}
                        onChange={(e) => updateField("waist", e.target.value)}
                        placeholder={`e.g. ${formData.measurementUnit === "inches" ? "28" : "71"}`}
                        className={`w-full h-11 px-4 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] ${
                          errors.waist ? "border-red-500" : "border-[#DDD5C5]"
                        }`}
                      />
                      {errors.waist && (
                        <p className="text-[11px] text-red-600 font-sans mt-1.5">
                          {errors.waist}
                        </p>
                      )}
                    </div>

                    {/* Hip */}
                    <div>
                      <label
                        htmlFor="hip"
                        className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                      >
                        HIP ({formData.measurementUnit}) <span className="text-[#B98A2E]">*</span>
                      </label>
                      <input
                        id="hip"
                        type="text"
                        value={formData.hip}
                        onChange={(e) => updateField("hip", e.target.value)}
                        placeholder={`e.g. ${formData.measurementUnit === "inches" ? "40" : "102"}`}
                        className={`w-full h-11 px-4 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] ${
                          errors.hip ? "border-red-500" : "border-[#DDD5C5]"
                        }`}
                      />
                      {errors.hip && (
                        <p className="text-[11px] text-red-600 font-sans mt-1.5">
                          {errors.hip}
                        </p>
                      )}
                    </div>

                    {/* Dress Length */}
                    <div>
                      <label
                        htmlFor="dressLength"
                        className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                      >
                        DRESS LENGTH ({formData.measurementUnit}){" "}
                        <span className="text-[#B98A2E]">*</span>
                      </label>
                      <input
                        id="dressLength"
                        type="text"
                        value={formData.dressLength}
                        onChange={(e) => updateField("dressLength", e.target.value)}
                        placeholder={`e.g. ${formData.measurementUnit === "inches" ? "60" : "152"}`}
                        className={`w-full h-11 px-4 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] ${
                          errors.dressLength ? "border-red-500" : "border-[#DDD5C5]"
                        }`}
                      />
                      {errors.dressLength && (
                        <p className="text-[11px] text-red-600 font-sans mt-1.5">
                          {errors.dressLength}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="font-sans text-[11px] text-[#15150F]/60 mt-4 leading-relaxed italic">
                    Note: If you have questions about measuring, our atelier team will
                    confirm all anatomical details with you upon order intake.
                  </p>
                </div>
              )}

              {/* ═════════════════════════════════════════════════════════════
                  STEP 04 — DESIGN, COLOUR & DETAILS
              ═════════════════════════════════════════════════════════════ */}
              {currentStep === 4 && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#15150F]/65 font-medium">
                      STEP 04 / 07 &mdash; DESIGN, COLOUR & DETAILS
                    </span>
                    <span className="w-12 h-[1px] bg-[#B98A2E]/60" aria-hidden="true" />
                  </div>

                  <h2 className="font-heading font-normal text-4xl sm:text-5xl text-[#0E3B2E] tracking-tight leading-[1.06] mb-3">
                    Shape the{" "}
                    <span className="italic text-[#B98A2E] font-normal">Vision.</span>
                  </h2>

                  <p className="font-sans text-xs sm:text-[13px] text-[#15150F]/75 font-normal leading-relaxed mb-8 max-w-lg">
                    Describe your vision in your own words. Include silhouette notes,
                    colour palettes, neckline preferences, slit/train details, or
                    specific styling ideas.
                  </p>

                  <div>
                    <label
                      htmlFor="designDetails"
                      className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2.5"
                    >
                      DESIGN COLOUR & DETAILS <span className="text-[#B98A2E]">*</span>
                    </label>
                    <textarea
                      id="designDetails"
                      rows={8}
                      value={formData.designDetails}
                      onChange={(e) => updateField("designDetails", e.target.value)}
                      placeholder="e.g. An emerald green structured corset gown with Bonwire Kente silk draping across the shoulder. Sweetheart neckline, floor-length skirt with a subtle side slit and delicate gold hand-beading along the waistline..."
                      className={`w-full p-5 bg-[#FAF7F2] border text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] leading-relaxed resize-y ${
                        errors.designDetails ? "border-red-500" : "border-[#DDD5C5]"
                      }`}
                    />
                    {errors.designDetails && (
                      <p className="text-[11px] text-red-600 font-sans mt-1.5">
                        {errors.designDetails}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* ═════════════════════════════════════════════════════════════
                  STEP 05 — DESIGN & FABRIC REFERENCES
              ═════════════════════════════════════════════════════════════ */}
              {currentStep === 5 && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#15150F]/65 font-medium">
                      STEP 05 / 07 &mdash; DESIGN & FABRIC REFERENCES
                    </span>
                    <span className="w-12 h-[1px] bg-[#B98A2E]/60" aria-hidden="true" />
                  </div>

                  <h2 className="font-heading font-normal text-4xl sm:text-5xl text-[#0E3B2E] tracking-tight leading-[1.06] mb-3">
                    Bring Your{" "}
                    <span className="italic text-[#B98A2E] font-normal">
                      References.
                    </span>
                  </h2>

                  <p className="font-sans text-xs sm:text-[13px] text-[#15150F]/75 font-normal leading-relaxed mb-8 max-w-lg">
                    Attach any reference photos, sketches, or fabric samples you have.
                    Uploads are optional and assist our pattern makers in bringing your
                    inspiration to life.
                  </p>

                  <div className="space-y-8">
                    {/* Zone 01: Garment Design Upload */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium">
                          1. GARMENT DESIGN REFERENCES
                        </label>
                        <span className="text-[10px] text-[#15150F]/50">
                          {formData.garmentDesignFiles.length} file(s) attached
                        </span>
                      </div>

                      <div className="border border-dashed border-[#B98A2E]/50 bg-[#FAF7F2] p-6 text-center rounded-[1px] hover:border-[#B98A2E] transition-colors relative">
                        <input
                          type="file"
                          id="garmentUpload"
                          multiple
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileUpload(e, "garment")}
                          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                        />
                        <Upload className="w-6 h-6 text-[#B98A2E] mx-auto mb-2" />
                        <span className="font-sans text-xs text-[#0E3B2E] font-medium block">
                          Click or drag photos of sketches or design inspiration
                        </span>
                        <span className="font-sans text-[10px] text-[#15150F]/50 block mt-1">
                          PNG, JPG, WEBP, PDF up to 15MB
                        </span>
                      </div>

                      {/* Uploaded File Previews */}
                      {formData.garmentDesignFiles.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                          {formData.garmentDesignFiles.map((file) => (
                            <div
                              key={file.id}
                              className="relative p-2 bg-white border border-[#DDD5C5] rounded-[1px] flex items-center gap-2 group"
                            >
                              {file.previewUrl ? (
                                <div className="relative w-8 h-8 rounded shrink-0 overflow-hidden bg-gray-100">
                                  <Image
                                    src={file.previewUrl}
                                    alt={file.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="w-8 h-8 rounded bg-[#E4ECE7] text-[#0E3B2E] flex items-center justify-center shrink-0 text-[10px] font-bold">
                                  DOC
                                </div>
                              )}
                              <span className="text-[10px] text-[#15150F]/80 truncate font-sans flex-1">
                                {file.name}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFile(file.id, "garment")}
                                className="text-[#15150F]/40 hover:text-red-600 transition-colors p-1"
                                aria-label={`Remove ${file.name}`}
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Zone 02: Fabric Samples Upload */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium">
                          2. FABRIC SAMPLES & TEXTILE REFERENCES
                        </label>
                        <span className="text-[10px] text-[#15150F]/50">
                          {formData.fabricSampleFiles.length} file(s) attached
                        </span>
                      </div>

                      <div className="border border-dashed border-[#B98A2E]/50 bg-[#FAF7F2] p-6 text-center rounded-[1px] hover:border-[#B98A2E] transition-colors relative">
                        <input
                          type="file"
                          id="fabricUpload"
                          multiple
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileUpload(e, "fabric")}
                          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                        />
                        <Upload className="w-6 h-6 text-[#B98A2E] mx-auto mb-2" />
                        <span className="font-sans text-xs text-[#0E3B2E] font-medium block">
                          Click or drag fabric swatches, colours, or textile samples
                        </span>
                        <span className="font-sans text-[10px] text-[#15150F]/50 block mt-1">
                          Photos of Kente, silk, lace, velvet, or beadwork swatches
                        </span>
                      </div>

                      {/* Uploaded File Previews */}
                      {formData.fabricSampleFiles.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                          {formData.fabricSampleFiles.map((file) => (
                            <div
                              key={file.id}
                              className="relative p-2 bg-white border border-[#DDD5C5] rounded-[1px] flex items-center gap-2 group"
                            >
                              {file.previewUrl ? (
                                <div className="relative w-8 h-8 rounded shrink-0 overflow-hidden bg-gray-100">
                                  <Image
                                    src={file.previewUrl}
                                    alt={file.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="w-8 h-8 rounded bg-[#E4ECE7] text-[#0E3B2E] flex items-center justify-center shrink-0 text-[10px] font-bold">
                                  DOC
                                </div>
                              )}
                              <span className="text-[10px] text-[#15150F]/80 truncate font-sans flex-1">
                                {file.name}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFile(file.id, "fabric")}
                                className="text-[#15150F]/40 hover:text-red-600 transition-colors p-1"
                                aria-label={`Remove ${file.name}`}
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ═════════════════════════════════════════════════════════════
                  STEP 06 — ORDER DETAILS & FEE
              ═════════════════════════════════════════════════════════════ */}
              {currentStep === 6 && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#15150F]/65 font-medium">
                      STEP 06 / 07 &mdash; ORDER DETAILS
                    </span>
                    <span className="w-12 h-[1px] bg-[#B98A2E]/60" aria-hidden="true" />
                  </div>

                  <h2 className="font-heading font-normal text-4xl sm:text-5xl text-[#0E3B2E] tracking-tight leading-[1.06] mb-3">
                    Review the{" "}
                    <span className="italic text-[#B98A2E] font-normal">
                      Order Details.
                    </span>
                  </h2>

                  <p className="font-sans text-xs sm:text-[13px] text-[#15150F]/75 font-normal leading-relaxed mb-8 max-w-lg">
                    Review our atelier commissioning protocol before final order review
                    and submission.
                  </p>

                  <div className="space-y-6">
                    {/* Dedicated Fee / Quotation Area (Configurable) */}
                    <div className="bg-[#FAF7F2] border border-[#DDD5C5] p-6 rounded-[1px]">
                      <div className="flex items-center justify-between pb-4 border-b border-[#DDD5C5]/70 mb-4">
                        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-[#15150F]/70 font-semibold">
                          ATELIER COMMISSION FEE
                        </span>
                        <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-[#B98A2E] font-medium px-2.5 py-1 bg-[#B98A2E]/10 rounded-[1px]">
                          {formData.orderFee ? "CONFIRMED" : "PENDING ATELIER REVIEW"}
                        </span>
                      </div>

                      <div className="mb-4">
                        {formData.orderFee ? (
                          <div className="flex items-baseline gap-2">
                            <span className="font-heading text-3xl text-[#0E3B2E]">
                              {formData.orderFee}
                            </span>
                            <span className="font-sans text-xs text-[#15150F]/60">
                              (Standard Atelier Commission)
                            </span>
                          </div>
                        ) : (
                          <p className="font-heading text-xl text-[#0E3B2E]">
                            Quotation Confirmed Upon Design Review
                          </p>
                        )}
                        <p className="font-sans text-xs text-[#15150F]/70 leading-relaxed mt-2">
                          Because each Blak Meyd creation requires bespoke pattern
                          drafting and tailored textile sourcing, our team provides an
                          itemized quotation upon assessing your measurements, chosen
                          fabrics, and embellishment complexity.
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#DDD5C5]/60 flex items-start gap-2.5 text-xs text-[#15150F]/70 font-sans">
                        <Info className="w-4 h-4 text-[#B98A2E] shrink-0 mt-0.5" />
                        <span>
                          You will receive your confirmed design quotation and delivery
                          schedule via WhatsApp and Email directly from our atelier team.
                        </span>
                      </div>
                    </div>

                    {/* Additional Client Notes */}
                    <div>
                      <label
                        htmlFor="clientNotes"
                        className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#15150F]/70 font-medium mb-2"
                      >
                        ADDITIONAL NOTES FOR ATELIER (OPTIONAL)
                      </label>
                      <textarea
                        id="clientNotes"
                        rows={3}
                        value={formData.clientNotes}
                        onChange={(e) => updateField("clientNotes", e.target.value)}
                        placeholder="Any additional preferences, questions, or timing considerations..."
                        className="w-full p-4 bg-[#FAF7F2] border border-[#DDD5C5] text-xs sm:text-[13px] text-[#15150F] placeholder-[#15150F]/35 transition-colors focus:outline-none focus:border-[#B98A2E] focus:ring-1 focus:ring-[#B98A2E]/25 rounded-[1px] resize-y"
                      />
                    </div>

                    {/* Acknowledgment Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={formData.acknowledgedTerms}
                          onChange={(e) =>
                            updateField("acknowledgedTerms", e.target.checked)
                          }
                          className="mt-1 w-4 h-4 rounded text-[#0E3B2E] border-[#DDD5C5] focus:ring-[#B98A2E]"
                        />
                        <span className="font-sans text-xs text-[#15150F]/80 leading-relaxed">
                          I understand that my garment order will be reviewed by the Blak
                          Meyd atelier team, and formal pricing &amp; scheduling will be
                          confirmed directly prior to production.
                        </span>
                      </label>
                      {errors.acknowledgedTerms && (
                        <p className="text-[11px] text-red-600 font-sans mt-1.5 ml-7">
                          {errors.acknowledgedTerms}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ═════════════════════════════════════════════════════════════
                  STEP 07 — REVIEW YOUR ORDER
              ═════════════════════════════════════════════════════════════ */}
              {currentStep === 7 && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#15150F]/65 font-medium">
                      STEP 07 / 07 &mdash; REVIEW YOUR ORDER
                    </span>
                    <span className="w-12 h-[1px] bg-[#B98A2E]/60" aria-hidden="true" />
                  </div>

                  <h2 className="font-heading font-normal text-4xl sm:text-5xl text-[#0E3B2E] tracking-tight leading-[1.06] mb-3">
                    Everything{" "}
                    <span className="italic text-[#B98A2E] font-normal">
                      Looks Right?
                    </span>
                  </h2>

                  <p className="font-sans text-xs sm:text-[13px] text-[#15150F]/75 font-normal leading-relaxed mb-8 max-w-lg">
                    Please review all your details below. You can edit any section before
                    submitting your bespoke commission.
                  </p>

                  <div className="space-y-6">
                    {/* GROUP 01: CLIENT DETAILS */}
                    <div className="bg-[#FAF7F2] border border-[#DDD5C5] p-5 rounded-[1px]">
                      <div className="flex items-center justify-between pb-3 border-b border-[#DDD5C5]/60 mb-3">
                        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-[#B98A2E] font-semibold">
                          01 &bull; CLIENT DETAILS
                        </span>
                        <button
                          type="button"
                          onClick={() => handleJumpToStep(1)}
                          className="text-[10px] tracking-wider uppercase font-medium text-[#0E3B2E] hover:text-[#B98A2E] transition-colors"
                        >
                          EDIT &rarr;
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                        <div>
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Name
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.clientName}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Contact
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.contactDetails}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Email
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.email}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Instagram
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.igAccount || "Not provided"}
                          </span>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Address
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.address}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* GROUP 02: GARMENT & OCCASION */}
                    <div className="bg-[#FAF7F2] border border-[#DDD5C5] p-5 rounded-[1px]">
                      <div className="flex items-center justify-between pb-3 border-b border-[#DDD5C5]/60 mb-3">
                        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-[#B98A2E] font-semibold">
                          02 &bull; GARMENT &amp; OCCASION
                        </span>
                        <button
                          type="button"
                          onClick={() => handleJumpToStep(2)}
                          className="text-[10px] tracking-wider uppercase font-medium text-[#0E3B2E] hover:text-[#B98A2E] transition-colors"
                        >
                          EDIT &rarr;
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
                        <div>
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Occasion
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.garmentOccasion}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Event Date
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.eventDate}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Pickup Date
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.pickupDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* GROUP 03: MEASUREMENTS */}
                    <div className="bg-[#FAF7F2] border border-[#DDD5C5] p-5 rounded-[1px]">
                      <div className="flex items-center justify-between pb-3 border-b border-[#DDD5C5]/60 mb-3">
                        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-[#B98A2E] font-semibold">
                          03 &bull; MEASUREMENTS ({formData.measurementUnit})
                        </span>
                        <button
                          type="button"
                          onClick={() => handleJumpToStep(3)}
                          className="text-[10px] tracking-wider uppercase font-medium text-[#0E3B2E] hover:text-[#B98A2E] transition-colors"
                        >
                          EDIT &rarr;
                        </button>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-sans">
                        <div>
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Bust
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.bust} {formData.measurementUnit}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Waist
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.waist} {formData.measurementUnit}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Hip
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.hip} {formData.measurementUnit}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#15150F]/50 text-[10px] uppercase block">
                            Dress Length
                          </span>
                          <span className="font-medium text-[#15150F]/90">
                            {formData.dressLength} {formData.measurementUnit}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* GROUP 04: DESIGN, COLOUR & DETAILS */}
                    <div className="bg-[#FAF7F2] border border-[#DDD5C5] p-5 rounded-[1px]">
                      <div className="flex items-center justify-between pb-3 border-b border-[#DDD5C5]/60 mb-3">
                        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-[#B98A2E] font-semibold">
                          04 &bull; DESIGN, COLOUR &amp; DETAILS
                        </span>
                        <button
                          type="button"
                          onClick={() => handleJumpToStep(4)}
                          className="text-[10px] tracking-wider uppercase font-medium text-[#0E3B2E] hover:text-[#B98A2E] transition-colors"
                        >
                          EDIT &rarr;
                        </button>
                      </div>
                      <p className="font-sans text-xs text-[#15150F]/85 leading-relaxed whitespace-pre-wrap">
                        {formData.designDetails}
                      </p>
                    </div>

                    {/* GROUP 05: REFERENCES */}
                    <div className="bg-[#FAF7F2] border border-[#DDD5C5] p-5 rounded-[1px]">
                      <div className="flex items-center justify-between pb-3 border-b border-[#DDD5C5]/60 mb-3">
                        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-[#B98A2E] font-semibold">
                          05 &bull; REFERENCES
                        </span>
                        <button
                          type="button"
                          onClick={() => handleJumpToStep(5)}
                          className="text-[10px] tracking-wider uppercase font-medium text-[#0E3B2E] hover:text-[#B98A2E] transition-colors"
                        >
                          EDIT &rarr;
                        </button>
                      </div>
                      <div className="text-xs font-sans space-y-2">
                        <div>
                          <span className="text-[#15150F]/60 text-[10px] uppercase block">
                            Garment Design Files ({formData.garmentDesignFiles.length}):
                          </span>
                          <span className="text-[#15150F]/80">
                            {formData.garmentDesignFiles.length > 0
                              ? formData.garmentDesignFiles.map((f) => f.name).join(", ")
                              : "None uploaded"}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#15150F]/60 text-[10px] uppercase block">
                            Fabric Sample Files ({formData.fabricSampleFiles.length}):
                          </span>
                          <span className="text-[#15150F]/80">
                            {formData.fabricSampleFiles.length > 0
                              ? formData.fabricSampleFiles.map((f) => f.name).join(", ")
                              : "None uploaded"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* GROUP 06: ORDER DETAILS */}
                    <div className="bg-[#FAF7F2] border border-[#DDD5C5] p-5 rounded-[1px]">
                      <div className="flex items-center justify-between pb-3 border-b border-[#DDD5C5]/60 mb-3">
                        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-[#B98A2E] font-semibold">
                          06 &bull; ORDER DETAILS &amp; PROTOCOL
                        </span>
                        <button
                          type="button"
                          onClick={() => handleJumpToStep(6)}
                          className="text-[10px] tracking-wider uppercase font-medium text-[#0E3B2E] hover:text-[#B98A2E] transition-colors"
                        >
                          EDIT &rarr;
                        </button>
                      </div>
                      <div className="text-xs font-sans text-[#15150F]/80 space-y-1.5">
                        <p>
                          <span className="font-semibold text-[#0E3B2E]">Commission Fee:</span>{" "}
                          {formData.orderFee || "To be confirmed upon atelier design review"}
                        </p>
                        {formData.clientNotes && (
                          <p>
                            <span className="font-semibold text-[#0E3B2E]">Client Notes:</span>{" "}
                            {formData.clientNotes}
                          </p>
                        )}
                        <p className="text-[11px] text-[#15150F]/60 italic pt-1">
                          Terms acknowledged: Order quotation &amp; production timeline confirmed directly via WhatsApp/Email.
                        </p>
                      </div>
                    </div>

                    {errors.submit && (
                      <p className="text-xs text-red-600 font-sans p-3 bg-red-50 border border-red-200 rounded-[1px]">
                        {errors.submit}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── 03: PERSISTENT BOTTOM NAVIGATION BAR ── */}
        <div className="pt-10 sm:pt-12 border-t border-[#DDD5C5]/60 mt-10 sm:mt-12 flex items-center justify-between">
          {/* Back Button */}
          <button
            type="button"
            onClick={handleBack}
            className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans text-[#15150F]/70 hover:text-[#0E3B2E] transition-colors py-2 px-1"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>BACK</span>
          </button>

          {/* Continue / Submit Button */}
          {currentStep < 7 ? (
            <button
              type="button"
              onClick={handleContinue}
              className="group inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 bg-[#0E3B2E] border border-[#B98A2E] text-[#FBF9F4] text-[11px] sm:text-xs font-medium tracking-[0.22em] uppercase font-sans rounded-[1px] transition-all duration-300 hover:bg-[#07241C] hover:border-[#B98A2E] active:scale-[0.99] cursor-pointer shadow-sm"
            >
              <span>CONTINUE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B98A2E] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          ) : (
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmitOrder}
              className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-[#0E3B2E] border border-[#B98A2E] text-[#FBF9F4] text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase font-sans rounded-[1px] transition-all duration-300 hover:bg-[#07241C] hover:border-[#B98A2E] active:scale-[0.99] cursor-pointer shadow-md disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>PROCESSING ORDER...</span>
                </>
              ) : (
                <>
                  <span>SUBMIT GARMENT ORDER</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B98A2E] transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
