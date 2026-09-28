export type ConsultationType = "non-bridal" | "bridal";

export type ConsultationFormat = "in-person" | "virtual";

export type PaymentMethod = "momo" | "card" | "bank";

export interface ConsultationDetails {
  type: ConsultationType;
  fee: number;
  date: string; // ISO date string e.g. "2026-10-14"
  dateFormatted: string; // e.g. "14 October 2026"
  time: string; // e.g. "2:00 PM"
  format: ConsultationFormat;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ideaNotes: string;
}

export interface BookingRecord extends ConsultationDetails {
  bookingId: string;
  reference: string;
  createdAt: string;
  paymentStatus: "paid" | "pending";
  bookingStatus: "confirmed" | "completed" | "rescheduled" | "cancelled";
  paymentMethod: PaymentMethod;
  paymentRef: string;
}

export const CONSULTATION_PRICING: Record<ConsultationType, { fee: number; title: string; subtitle: string; description: string; image: string }> = {
  "non-bridal": {
    fee: 200,
    title: "Non-Bridal Consultation",
    subtitle: "GHS 200",
    description: "For occasional outfits, prom, graduation, wedding guest, photoshoot and more.",
    image: "/images/consultation/consultation-type-nonbridal.jpg",
  },
  "bridal": {
    fee: 800,
    title: "Bridal Consultation",
    subtitle: "GHS 800",
    description: "For wedding gowns and all bridal related outfits.",
    image: "/images/consultation/consultation-type-bridal.jpg",
  },
};

export const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
