"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  Mail,
  Phone,
  RefreshCw,
} from "lucide-react";
import { BookingRecord } from "@/components/consultation/types";

const INITIAL_DEMO_APPOINTMENTS: BookingRecord[] = [
  {
    bookingId: "BM-BK-1001",
    reference: "BM-CONS-2026-8942",
    type: "bridal",
    fee: 800,
    date: "2026-10-14",
    dateFormatted: "14 October 2026",
    time: "2:00 PM",
    format: "in-person",
    firstName: "Akua",
    lastName: "Mensah",
    email: "akua.mensah@gmail.com",
    phone: "+233 24 456 7890",
    ideaNotes: "Custom beaded bridal kente gown with detachable dramatic cathedral train.",
    createdAt: "2026-09-28T10:30:00Z",
    paymentStatus: "paid",
    bookingStatus: "confirmed",
    paymentMethod: "momo",
    paymentRef: "PAY-BM-482910",
  },
  {
    bookingId: "BM-BK-1002",
    reference: "BM-CONS-2026-7215",
    type: "non-bridal",
    fee: 200,
    date: "2026-10-16",
    dateFormatted: "16 October 2026",
    time: "11:00 AM",
    format: "in-person",
    firstName: "Efua",
    lastName: "Boateng",
    email: "efua.boateng@outlook.com",
    phone: "+233 20 123 4567",
    ideaNotes: "Emerald velvet corset dress for Ghana Women in Business Awards gala.",
    createdAt: "2026-09-27T14:15:00Z",
    paymentStatus: "paid",
    bookingStatus: "confirmed",
    paymentMethod: "card",
    paymentRef: "PAY-BM-391024",
  },
  {
    bookingId: "BM-BK-1003",
    reference: "BM-CONS-2026-5389",
    type: "bridal",
    fee: 800,
    date: "2026-10-18",
    dateFormatted: "18 October 2026",
    time: "4:00 PM",
    format: "virtual",
    firstName: "Naa",
    lastName: "Odarkor",
    email: "naa.odarkor@gmail.com",
    phone: "+44 7911 123456",
    ideaNotes: "Virtual consultation from London for traditional Ghanaian royal engagement ceremonies.",
    createdAt: "2026-09-26T09:00:00Z",
    paymentStatus: "paid",
    bookingStatus: "confirmed",
    paymentMethod: "card",
    paymentRef: "PAY-BM-192834",
  },
];

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<BookingRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "bridal" | "non-bridal">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "confirmed" | "completed" | "cancelled">("all");

  const loadAppointments = () => {
    try {
      const stored = localStorage.getItem("blakmeyd_admin_appointments");
      if (stored) {
        const parsed: BookingRecord[] = JSON.parse(stored);
        setAppointments(parsed);
      } else {
        localStorage.setItem("blakmeyd_admin_appointments", JSON.stringify(INITIAL_DEMO_APPOINTMENTS));
        setAppointments(INITIAL_DEMO_APPOINTMENTS);
      }
    } catch (e) {
      console.error(e);
      setAppointments(INITIAL_DEMO_APPOINTMENTS);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleStatusChange = (bookingId: string, newStatus: "confirmed" | "completed" | "cancelled") => {
    const updated = appointments.map((apt) =>
      apt.bookingId === bookingId ? { ...apt, bookingStatus: newStatus } : apt
    );
    setAppointments(updated);
    try {
      localStorage.setItem("blakmeyd_admin_appointments", JSON.stringify(updated));
      // also update client dashboard copy if same ID
      const clientStored = localStorage.getItem("blakmeyd_consultations");
      if (clientStored) {
        const clientList: BookingRecord[] = JSON.parse(clientStored);
        const updatedClient = clientList.map((apt) =>
          apt.bookingId === bookingId ? { ...apt, bookingStatus: newStatus } : apt
        );
        localStorage.setItem("blakmeyd_consultations", JSON.stringify(updatedClient));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch =
      apt.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || apt.type === typeFilter;
    const matchesStatus = statusFilter === "all" || apt.bookingStatus === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalRevenue = appointments
    .filter((a) => a.paymentStatus === "paid")
    .reduce((sum, a) => sum + (a.fee || 0), 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#B98A2E]">
              ATELIER CALENDAR &amp; BOOKINGS
            </span>
            <span className="w-5 h-[1px] bg-[#B98A2E]" />
          </div>
          <h1 className="font-fraunces text-3xl sm:text-4xl text-[#FBF9F4] font-light">
            Consultation Appointments
          </h1>
          <p className="mt-1 text-xs text-white/60 font-sans">
            Manage incoming private client consultations, slot allocations, and revenue deductions.
          </p>
        </div>

        <button
          type="button"
          onClick={loadAppointments}
          className="inline-flex items-center gap-2 px-3.5 py-2 border border-white/15 rounded-sm text-xs font-sans text-white/80 hover:text-white hover:border-[#B98A2E] transition-colors self-start sm:self-auto cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh Bookings</span>
        </button>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#181411] border border-white/10 p-5 rounded-sm">
          <span className="text-[10.5px] uppercase tracking-wider text-white/50 block mb-1">
            Total Consultations
          </span>
          <div className="font-fraunces text-2xl text-white">{appointments.length}</div>
          <span className="text-[11px] text-[#B98A2E] mt-1 block">Active pipeline</span>
        </div>

        <div className="bg-[#181411] border border-white/10 p-5 rounded-sm">
          <span className="text-[10.5px] uppercase tracking-wider text-white/50 block mb-1">
            Bridal (GHS 800)
          </span>
          <div className="font-fraunces text-2xl text-[#E4ECE7]">
            {appointments.filter((a) => a.type === "bridal").length}
          </div>
          <span className="text-[11px] text-white/40 mt-1 block">Couture wedding commissions</span>
        </div>

        <div className="bg-[#181411] border border-white/10 p-5 rounded-sm">
          <span className="text-[10.5px] uppercase tracking-wider text-white/50 block mb-1">
            Non-Bridal (GHS 200)
          </span>
          <div className="font-fraunces text-2xl text-[#E4ECE7]">
            {appointments.filter((a) => a.type === "non-bridal").length}
          </div>
          <span className="text-[11px] text-white/40 mt-1 block">Occasion &amp; graduation</span>
        </div>

        <div className="bg-[#181411] border border-white/10 p-5 rounded-sm">
          <span className="text-[10.5px] uppercase tracking-wider text-white/50 block mb-1">
            Consultation Revenue
          </span>
          <div className="font-fraunces text-2xl text-[#B98A2E]">
            GHS {totalRevenue.toLocaleString()}
          </div>
          <span className="text-[11px] text-[#0E3B2E] bg-[#E4ECE7] px-1.5 py-0.5 rounded-sm font-medium mt-1 inline-block">
            100% order deductible
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#181411] border border-white/10 p-4 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by client or reference..."
            className="w-full pl-9 pr-3 py-2 bg-white/[0.04] border border-white/10 rounded-sm text-xs text-white placeholder-white/40 outline-none focus:border-[#B98A2E]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/50">Type:</span>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="bg-[#14100D] border border-white/15 rounded-sm px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#B98A2E]"
            >
              <option value="all">All Types</option>
              <option value="bridal">Bridal (GHS 800)</option>
              <option value="non-bridal">Non-Bridal (GHS 200)</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-white/50">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="bg-[#14100D] border border-white/15 rounded-sm px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#B98A2E]"
            >
              <option value="all">All Statuses</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-[#181411] border border-white/10 rounded-sm overflow-x-auto">
        <table className="w-full text-left text-xs font-sans">
          <thead className="bg-white/[0.02] border-b border-white/10 text-[10.5px] uppercase tracking-wider text-white/50">
            <tr>
              <th className="py-3.5 px-4 font-medium">Reference &amp; Date</th>
              <th className="py-3.5 px-4 font-medium">Client</th>
              <th className="py-3.5 px-4 font-medium">Consultation Type</th>
              <th className="py-3.5 px-4 font-medium">Time &amp; Format</th>
              <th className="py-3.5 px-4 font-medium">Payment</th>
              <th className="py-3.5 px-4 font-medium">Status</th>
              <th className="py-3.5 px-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-white/40">
                  No consultation appointments found.
                </td>
              </tr>
            ) : (
              filteredAppointments.map((apt) => (
                <tr key={apt.bookingId} className="hover:bg-white/[0.02] transition-colors">
                  {/* Reference & Date */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="font-mono text-[11px] font-bold text-[#B98A2E] block">
                      {apt.reference}
                    </span>
                    <span className="text-[11px] text-white/70 block mt-0.5">
                      {apt.dateFormatted}
                    </span>
                  </td>

                  {/* Client */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="font-medium text-white">
                      {apt.firstName} {apt.lastName}
                    </div>
                    <div className="text-[11px] text-white/50 flex items-center gap-1.5 mt-0.5">
                      <Mail className="w-3 h-3 text-[#B98A2E]" />
                      <span>{apt.email}</span>
                    </div>
                    <div className="text-[11px] text-white/50 flex items-center gap-1.5 mt-0.5">
                      <Phone className="w-3 h-3 text-white/40" />
                      <span>{apt.phone}</span>
                    </div>
                  </td>

                  {/* Consultation Type */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-[2px] text-[10.5px] font-medium tracking-wide uppercase ${
                        apt.type === "bridal"
                          ? "bg-[#FAF7F0] text-[#15150F] border border-[#B98A2E]/40"
                          : "bg-white/[0.06] text-white/90"
                      }`}
                    >
                      {apt.type === "bridal" ? "Bridal (GHS 800)" : "Non-Bridal (GHS 200)"}
                    </span>
                  </td>

                  {/* Time & Format */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="text-white flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B98A2E]" />
                      <span>{apt.time}</span>
                    </div>
                    <span className="text-[11px] text-white/50 capitalize block mt-0.5">
                      {apt.format === "in-person" ? "Accra Atelier" : "Virtual Video"}
                    </span>
                  </td>

                  {/* Payment */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="text-[#B98A2E] font-medium">GHS {apt.fee}</div>
                    <span className="text-[10px] text-emerald-400 uppercase tracking-wider block mt-0.5">
                      {apt.paymentStatus} &bull; {apt.paymentMethod.toUpperCase()}
                    </span>
                  </td>

                  {/* Status Dropdown */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <select
                      value={apt.bookingStatus}
                      onChange={(e) =>
                        handleStatusChange(apt.bookingId, e.target.value as any)
                      }
                      className="bg-[#14100D] border border-white/20 rounded-sm px-2 py-1 text-xs text-white outline-none focus:border-[#B98A2E]"
                    >
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>

                  {/* Action Link */}
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    {apt.ideaNotes && (
                      <span
                        title={apt.ideaNotes}
                        className="text-[11px] text-[#B98A2E] underline underline-offset-2 cursor-help"
                      >
                        View Notes
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
