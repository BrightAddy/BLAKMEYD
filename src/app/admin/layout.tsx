import React from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Calendar, 
  Clock, 
  Users, 
  Scissors, 
  CreditCard, 
  Image as ImageIcon, 
  Megaphone,
  ArrowUpRight,
  ShieldAlert
} from "lucide-react";

export const metadata = {
  title: "Admin Atelier Portal | Blak Meyd",
  description: "Internal atelier management portal for Blak Meyd couture.",
};

const ADMIN_NAV = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Calendar & Dates", href: "/admin/calendar", icon: Calendar },
  { label: "Appointments", href: "/admin/appointments", icon: Clock },
  { label: "Clients", href: "/admin/clients", icon: Users },
  { label: "Garment Orders", href: "/admin/orders", icon: Scissors },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Portfolio", href: "/admin/portfolio", icon: ImageIcon },
  { label: "Working Hours", href: "/admin/working-hours", icon: Clock },
  { label: "Availability Announcement", href: "/admin/announcements", icon: Megaphone },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#14100D] text-[#FBF9F4] flex flex-col lg:flex-row font-sans selection:bg-[#B98A2E] selection:text-[#14100D]">
      {/* ── ADMIN SIDEBAR ── */}
      <aside className="w-full lg:w-64 bg-[#181411] border-b lg:border-b-0 lg:border-r border-[#B98A2E]/20 flex-shrink-0 flex flex-col justify-between pt-24 lg:pt-28 pb-8 px-6">
        <div>
          {/* Admin Header Badge */}
          <div className="flex items-center gap-2 px-2 pb-6 border-b border-white/10 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#B98A2E] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.22em] font-medium text-[#B98A2E]">
              Atelier Management
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {ADMIN_NAV.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-[2px] text-xs font-medium tracking-wider text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  <Icon size={16} className="text-[#B98A2E]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Status & Public Site Link */}
        <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[11px] text-white/50 px-2">
            <ShieldAlert size={14} className="text-[#B98A2E]" />
            <span>Private Atelier Session</span>
          </div>

          <Link
            href="/"
            className="group flex items-center justify-between px-3 py-2 border border-[#B98A2E]/40 text-xs tracking-wider uppercase text-white/80 hover:text-[#B98A2E] hover:border-[#B98A2E] transition-all rounded-[2px]"
          >
            <span>View Public Site</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </aside>

      {/* ── MAIN ADMIN CONTENT ── */}
      <div className="flex-1 min-w-0 pt-8 lg:pt-28 pb-16 px-6 sm:px-10 lg:px-12 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
