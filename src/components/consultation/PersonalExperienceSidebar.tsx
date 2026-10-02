"use client";

import Image from "next/image";
import { MessageSquare, Sparkles, FileText, Calendar } from "lucide-react";

const MILESTONES = [
  {
    icon: MessageSquare,
    title: "Discuss Your Idea",
    description: "Share your style, occasion and inspiration with our team.",
  },
  {
    icon: Sparkles,
    title: "Explore Designs",
    description: "We guide you through fabrics, silhouettes and details.",
  },
  {
    icon: FileText,
    title: "Receive a Quotation",
    description: "Get a personalized quotation based on your design.",
  },
  {
    icon: Calendar,
    title: "Begin Your Journey",
    description: "Confirm your booking and let the creation begin.",
  },
];

export default function PersonalExperienceSidebar() {
  return (
    <aside aria-label="A Personal Experience" className="space-y-6 sm:space-y-8">
      {/* Title with Gold Line */}
      <div>
        <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.25em] uppercase text-[#736B5E] block">
          A PERSONAL EXPERIENCE
        </span>
        <span className="inline-block w-7 h-[1.5px] bg-[#B98A2E] mt-1.5" aria-hidden="true" />
      </div>

      {/* Atelier Studio Visual */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#ECE8DF] border border-[#15150F]/10 shadow-sm">
        <Image
          src="/images/consultation/consultation-sidebar-dressform.jpg"
          alt="Bespoke dressform and tailoring studio inside the Blak Meyd atelier"
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>

      {/* 4 Milestones with Circular Badges */}
      <div className="space-y-5 sm:space-y-6 pt-1">
        {MILESTONES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-start gap-3.5 sm:gap-4">
              {/* Circular Icon Container */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D4CEBF] flex items-center justify-center shrink-0 bg-[#FBF9F4] text-[#736B5E] shadow-sm">
                <Icon className="w-4 h-4 text-[#9E7B3B]" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1 pt-0.5">
                <h4 className="font-fraunces text-sm font-normal text-[#15150F] leading-snug">
                  {item.title}
                </h4>
                <p className="mt-0.5 text-xs text-[#736B5E] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
