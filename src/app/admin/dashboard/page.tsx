import React from "react";
import Link from "next/link";
import { 
  Clock, 
  Scissors, 
  CreditCard, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";

export const metadata = {
  title: "Admin Dashboard — Blak Meyd Atelier",
};

export default function AdminDashboardPage() {
  return (
    <div className="max-w-6xl space-y-10">
      {/* ── HEADER & ATELIER PULSE ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#B98A2E] uppercase">
            Administration Area &bull; Page 21
          </span>
          <h1 className="font-fraunces text-3xl sm:text-4xl text-white font-normal mt-1">
            Atelier Activity Overview
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E3B2E] border border-[#B98A2E]/40 text-[11px] font-mono tracking-wider text-white rounded-[2px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B98A2E] animate-ping" />
            <span>Studio Open &bull; Accra</span>
          </span>
        </div>
      </div>

      {/* ── KPI METRICS CARDS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="p-5 bg-[#181411] border border-white/10 rounded-[2px]">
          <div className="flex items-center justify-between text-white/50 text-xs uppercase tracking-wider font-mono">
            <span>Upcoming Consultations</span>
            <Clock size={16} className="text-[#B98A2E]" />
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-fraunces text-3xl text-white font-light">6</span>
            <span className="text-xs text-[#B98A2E]">This week</span>
          </div>
          <p className="mt-1 text-[11px] text-white/50">4 In-Atelier, 2 Virtual</p>
        </div>

        {/* Metric 2 */}
        <div className="p-5 bg-[#181411] border border-white/10 rounded-[2px]">
          <div className="flex items-center justify-between text-white/50 text-xs uppercase tracking-wider font-mono">
            <span>Active Commissions</span>
            <Scissors size={16} className="text-[#B98A2E]" />
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-fraunces text-3xl text-white font-light">8</span>
            <span className="text-xs text-emerald-400">In Production</span>
          </div>
          <p className="mt-1 text-[11px] text-white/50">3 Toile fitting, 5 Embroidery</p>
        </div>

        {/* Metric 3 */}
        <div className="p-5 bg-[#181411] border border-white/10 rounded-[2px]">
          <div className="flex items-center justify-between text-white/50 text-xs uppercase tracking-wider font-mono">
            <span>Seasonal Capacity</span>
            <Sparkles size={16} className="text-[#B98A2E]" />
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-fraunces text-3xl text-white font-light">85%</span>
            <span className="text-xs text-amber-400">Capped</span>
          </div>
          <p className="mt-1 text-[11px] text-white/50">3 slots left for Q4 / 2026</p>
        </div>

        {/* Metric 4 */}
        <div className="p-5 bg-[#181411] border border-white/10 rounded-[2px]">
          <div className="flex items-center justify-between text-white/50 text-xs uppercase tracking-wider font-mono">
            <span>Pending Balances</span>
            <CreditCard size={16} className="text-[#B98A2E]" />
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-fraunces text-2xl text-white font-light">GHS 24,500</span>
          </div>
          <p className="mt-1 text-[11px] text-white/50">Across 4 milestone fittings</p>
        </div>
      </div>

      {/* ── TWO COLUMN SECTIONS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (8 cols): Recent Consultations */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h2 className="font-fraunces text-xl text-white font-normal flex items-center gap-2">
              <span>Upcoming Consultations</span>
            </h2>
            <Link href="/admin/appointments" className="text-xs text-[#B98A2E] hover:underline font-mono">
              View All &rarr;
            </Link>
          </div>

          <div className="space-y-3">
            {[
              {
                name: "Nana Akua Osei",
                occasion: "Traditional Marriage & Reception",
                format: "In-Atelier (Accra)",
                date: "Friday, 20 Sep &bull; 11:00 AM",
                fee: "GHS 800 (Paid)",
                status: "Confirmed",
              },
              {
                name: "Dr. Evelyn Mensah",
                occasion: "State Honors & Gala Gown",
                format: "In-Atelier (Accra)",
                date: "Saturday, 21 Sep &bull; 2:30 PM",
                fee: "GHS 200 (Paid)",
                status: "Confirmed",
              },
              {
                name: "Chloe Vandevelde",
                occasion: "Diaspora Bridal Commission",
                format: "Global Virtual Appointment",
                date: "Monday, 23 Sep &bull; 4:00 PM GMT",
                fee: "GHS 800 (Paid)",
                status: "Confirmed",
              },
            ].map((booking, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#181411] border border-white/10 rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-white">{booking.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0E3B2E] text-white rounded-[2px]">
                      {booking.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#B98A2E] mt-0.5">{booking.occasion}</p>
                  <p
                    className="text-[11px] text-white/50 mt-1 font-mono"
                    dangerouslySetInnerHTML={{ __html: booking.date }}
                  />
                </div>

                <div className="text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-white/5">
                  <span className="text-xs text-white/80 font-mono">{booking.format}</span>
                  <span className="text-[11px] text-emerald-400 font-medium">{booking.fee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (5 cols): Active Garment Production Orders */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h2 className="font-fraunces text-xl text-white font-normal">
              Active Garment Orders
            </h2>
            <Link href="/admin/orders" className="text-xs text-[#B98A2E] hover:underline font-mono">
              View All &rarr;
            </Link>
          </div>

          <div className="space-y-3">
            {[
              {
                code: "BM-2026-088",
                client: "Serwaa K.",
                category: "Kente Gown & Cape",
                stage: "Hand-Embroidery",
                progress: 70,
                delivery: "12 Oct 2026",
              },
              {
                code: "BM-2026-089",
                client: "Abena F.",
                category: "Bridal Reception Robe",
                stage: "Muslin Toile Fitting",
                progress: 45,
                delivery: "24 Oct 2026",
              },
              {
                code: "BM-2026-090",
                client: "Yaa Ampofo",
                category: "Graduation Gala Outfit",
                stage: "Final Basted Fitting",
                progress: 90,
                delivery: "05 Oct 2026",
              },
            ].map((order, idx) => (
              <div key={idx} className="p-4 bg-[#181411] border border-white/10 rounded-[2px] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#B98A2E] font-medium">{order.code}</span>
                  <span className="text-white/50 text-[11px] font-mono">Due: {order.delivery}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white font-medium">{order.client}</span>
                  <span className="text-xs text-white/70">{order.category}</span>
                </div>
                <div className="pt-1">
                  <div className="flex items-center justify-between text-[11px] text-white/50 mb-1">
                    <span>Stage: {order.stage}</span>
                    <span className="font-mono">{order.progress}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#B98A2E]"
                      style={{ width: `${order.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 08 AVAILABILITY ANNOUNCEMENT CONTROLLER ── */}
      <div className="p-6 bg-[#181411] border border-[#B98A2E]/30 rounded-[2px] space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#B98A2E]" />
              <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
                Public Booking Availability Announcement (Live on Home Page)
              </h3>
            </div>
            <p className="text-xs text-white/70 mt-1">
              Active status displayed to website visitors:
            </p>
          </div>
          <Link
            href="/admin/announcements"
            className="text-xs uppercase tracking-wider text-[#B98A2E] hover:underline font-mono flex-shrink-0"
          >
            Edit Announcement &rarr;
          </Link>
        </div>

        <div className="p-4 bg-[#14100D] border border-white/5 text-xs text-[#EBE5D8] font-mono leading-relaxed">
          &ldquo;Accepting bespoke commissions for Q4 &amp; the 2027 Bridal Season. Studio fittings strictly by advance appointment. Current calendar availability: 3 remaining private slots for October.&rdquo;
        </div>
      </div>
    </div>
  );
}
