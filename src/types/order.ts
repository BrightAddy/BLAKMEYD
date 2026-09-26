export interface OrderReferenceFile {
  id: string;
  name: string;
  size: number;
  type: string;
  previewUrl?: string;
}

export interface OrderFormData {
  // Step 01: Client Details
  clientName: string;
  contactDetails: string;
  email: string;
  igAccount: string;
  address: string;

  // Step 02: Garment & Occasion
  garmentOccasion: string;
  eventDate: string;
  pickupDate: string;

  // Step 03: Measurements
  measurementUnit: "inches" | "cm";
  bust: string;
  waist: string;
  hip: string;
  dressLength: string;

  // Step 04: Design, Colour & Details
  designDetails: string;

  // Step 05: Design & Fabric References
  garmentDesignFiles: OrderReferenceFile[];
  fabricSampleFiles: OrderReferenceFile[];

  // Step 06: Order Details
  feeConfirmed: boolean;
  orderFee?: string; // Configurable from backend / business system
  clientNotes?: string;
  acknowledgedTerms: boolean;

  // Submission metadata
  orderReference?: string;
  submittedAt?: string;
}

export const INITIAL_ORDER_DATA: OrderFormData = {
  clientName: "",
  contactDetails: "",
  email: "",
  igAccount: "",
  address: "",

  garmentOccasion: "",
  eventDate: "",
  pickupDate: "",

  measurementUnit: "inches",
  bust: "",
  waist: "",
  hip: "",
  dressLength: "",

  designDetails: "",

  garmentDesignFiles: [],
  fabricSampleFiles: [],

  feeConfirmed: false,
  orderFee: undefined, // Unavailable until confirmed by atelier
  clientNotes: "",
  acknowledgedTerms: false,
};

export const ORDER_STEPS = [
  { id: 1, label: "Client Details", shortLabel: "Client" },
  { id: 2, label: "Garment & Occasion", shortLabel: "Occasion" },
  { id: 3, label: "Measurements", shortLabel: "Measure" },
  { id: 4, label: "Design, Colour & Details", shortLabel: "Design" },
  { id: 5, label: "Design & Fabric References", shortLabel: "References" },
  { id: 6, label: "Order Details", shortLabel: "Details" },
  { id: 7, label: "Review Your Order", shortLabel: "Review" },
] as const;
