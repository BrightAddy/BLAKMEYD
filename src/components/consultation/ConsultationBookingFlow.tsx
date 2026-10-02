"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import BookingProgress from "./BookingProgress";
import PersonalExperienceSidebar from "./PersonalExperienceSidebar";
import ConsultationTypeSelector from "./ConsultationTypeSelector";
import AppointmentPicker from "./AppointmentPicker";
import BookingDetailsForm from "./BookingDetailsForm";
import BookingSummary from "./BookingSummary";
import ConsultationPayment from "./ConsultationPayment";
import BookingConfirmation from "./BookingConfirmation";
import BookingStickySummary from "./BookingStickySummary";
import {
  ConsultationDetails,
  ConsultationType,
  CONSULTATION_PRICING,
  PaymentMethod,
  BookingRecord,
} from "./types";

// Helper to find the earliest available booking date (today or next open day)
const getInitialBookingDate = () => {
  const d = new Date();
  // If today is Sunday (day 0), move to Monday
  if (d.getDay() === 0) {
    d.setDate(d.getDate() + 1);
  }
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return {
    iso: `${year}-${month}-${day}`,
    formatted: `${d.getDate()} ${monthNames[d.getMonth()]} ${year}`,
  };
};

export default function ConsultationBookingFlow() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);

  const initialDate = getInitialBookingDate();

  // Core Booking State
  const [details, setDetails] = useState<ConsultationDetails>({
    type: "non-bridal",
    fee: CONSULTATION_PRICING["non-bridal"].fee,
    date: initialDate.iso,
    dateFormatted: initialDate.formatted,
    time: "2:00 PM",
    format: "in-person",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ideaNotes: "",
  });

  // Validation errors for Step 3
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationDetails, string>>>({});

  // Sync fee if type changes
  const handleTypeSelect = (type: ConsultationType) => {
    setDetails((prev) => ({
      ...prev,
      type,
      fee: CONSULTATION_PRICING[type].fee,
    }));
  };

  const handleDateChange = (isoDate: string, formattedDate: string) => {
    setDetails((prev) => ({
      ...prev,
      date: isoDate,
      dateFormatted: formattedDate,
    }));
  };

  const handleTimeChange = (time: string) => {
    setDetails((prev) => ({
      ...prev,
      time,
    }));
  };

  const handleDetailChange = (field: keyof ConsultationDetails, value: string | number) => {
    setDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear validation error on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Validation for step 3
  const validateStep3 = () => {
    const newErrors: Partial<Record<keyof ConsultationDetails, string>> = {};

    if (!details.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }
    if (!details.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }
    if (!details.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!details.phone.trim()) {
      newErrors.phone = "Phone / WhatsApp number is required.";
    } else if (details.phone.replace(/\D/g, "").length < 8) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step continuation handler
  const handleContinue = () => {
    if (currentStep === 1 || currentStep === 2) {
      // Advance to Step 3
      setCurrentStep(3);
      window.scrollTo({ top: 350, behavior: "smooth" });
    } else if (currentStep === 3) {
      if (validateStep3()) {
        setCurrentStep(4);
        window.scrollTo({ top: 350, behavior: "smooth" });
      }
    } else if (currentStep === 4) {
      setCurrentStep(5);
      window.scrollTo({ top: 350, behavior: "smooth" });
    } else if (currentStep === 5) {
      // Trigger payment submit (handled in ConsultationPayment form)
    } else if (currentStep === 6) {
      window.location.href = "/dashboard";
    }
  };

  // Back button handler
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev === 3 ? 1 : prev - 1));
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  // Direct step jump
  const handleStepJump = (step: number) => {
    if (step <= currentStep || step === 1 || step === 2) {
      setCurrentStep(step);
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  // Payment completion simulation and DB persistence
  const handlePaymentSuccess = (paymentMethod: PaymentMethod, paymentRef: string) => {
    setIsProcessing(true);

    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const reference = `BM-CONS-2026-${randomSuffix}`;
      const bookingId = `BM-BK-${Date.now()}`;

      const newRecord: BookingRecord = {
        ...details,
        bookingId,
        reference,
        createdAt: new Date().toISOString(),
        paymentStatus: "paid",
        bookingStatus: "confirmed",
        paymentMethod,
        paymentRef,
      };

      // Persist to localStorage for client dashboard
      try {
        const storedConsultations = localStorage.getItem("blakmeyd_consultations");
        const consultationsList: BookingRecord[] = storedConsultations
          ? JSON.parse(storedConsultations)
          : [];
        consultationsList.unshift(newRecord);
        localStorage.setItem("blakmeyd_consultations", JSON.stringify(consultationsList));

        // Also persist to admin appointments
        const storedAdmin = localStorage.getItem("blakmeyd_admin_appointments");
        const adminList: BookingRecord[] = storedAdmin ? JSON.parse(storedAdmin) : [];
        adminList.unshift(newRecord);
        localStorage.setItem("blakmeyd_admin_appointments", JSON.stringify(adminList));
      } catch (err) {
        console.error("Local storage error:", err);
      }

      setConfirmedBooking(newRecord);
      setIsProcessing(false);
      setCurrentStep(6);
      window.scrollTo({ top: 350, behavior: "smooth" });
    }, 1200);
  };

  // Reset to book another appointment
  const handleReset = () => {
    const freshDate = getInitialBookingDate();
    setConfirmedBooking(null);
    setCurrentStep(1);
    setDetails({
      type: "non-bridal",
      fee: CONSULTATION_PRICING["non-bridal"].fee,
      date: freshDate.iso,
      dateFormatted: freshDate.formatted,
      time: "2:00 PM",
      format: "in-person",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      ideaNotes: "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#FBF9F4] text-[#15150F]">
      {/* ── 6-STEP PROGRESS INDICATOR ── */}
      <BookingProgress
        currentStep={currentStep}
        onStepClick={handleStepJump}
      />

      {/* ── MAIN 3-COLUMN EDITORIAL WORKSPACE ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
          {/* ── LEFT COLUMN: A PERSONAL EXPERIENCE (lg: 3 cols) ── */}
          <div className="hidden lg:block lg:col-span-3">
            <PersonalExperienceSidebar />
          </div>

          {/* ── CENTER COLUMN: ACTIVE STEP VIEWS (lg: 6 cols) ── */}
          <div className="lg:col-span-6 space-y-8">
            <AnimatePresence mode="wait">
              {/* STEP 1 & 2: Consultation Type + Appointment Picker (Together as in reference) */}
              {(currentStep === 1 || currentStep === 2) && (
                <motion.div
                  key="step-1-and-2"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-10"
                >
                  {/* Step 1: Type */}
                  <ConsultationTypeSelector
                    selectedType={details.type}
                    onSelect={handleTypeSelect}
                  />

                  {/* Step 2: Appointment Calendar & Times */}
                  <AppointmentPicker
                    selectedDate={details.date}
                    selectedDateFormatted={details.dateFormatted}
                    selectedTime={details.time}
                    onDateChange={handleDateChange}
                    onTimeChange={handleTimeChange}
                  />
                </motion.div>
              )}

              {/* STEP 3: Your Details */}
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <BookingDetailsForm
                    details={details}
                    onChange={handleDetailChange}
                    errors={errors}
                  />
                </motion.div>
              )}

              {/* STEP 4: Review Summary */}
              {currentStep === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <BookingSummary
                    details={details}
                    onEditStep={handleStepJump}
                    onProceedToPayment={handleContinue}
                    onBack={handleBack}
                  />
                </motion.div>
              )}

              {/* STEP 5: Payment */}
              {currentStep === 5 && (
                <motion.div
                  key="step-5"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <ConsultationPayment
                    details={details}
                    onPaymentSuccess={handlePaymentSuccess}
                    onBack={handleBack}
                    isProcessing={isProcessing}
                  />
                </motion.div>
              )}

              {/* STEP 6: Confirmation */}
              {currentStep === 6 && confirmedBooking && (
                <motion.div
                  key="step-6"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <BookingConfirmation
                    booking={confirmedBooking}
                    onReset={handleReset}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── RIGHT COLUMN: YOUR CONSULTATION STICKY SUMMARY (lg: 3 cols) ── */}
          <div className="lg:col-span-3">
            <BookingStickySummary
              consultationType={details.type}
              selectedDateFormatted={details.dateFormatted}
              selectedTime={details.time}
              currentStep={currentStep}
              onContinue={handleContinue}
              onBack={handleBack}
              onEditStep={handleStepJump}
              isLoading={isProcessing}
            />

            {/* Mobile View of Left Sidebar Milestones (at the bottom on mobile/tablet) */}
            <div className="block lg:hidden mt-12 pt-8 border-t border-[#15150F]/10">
              <PersonalExperienceSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
