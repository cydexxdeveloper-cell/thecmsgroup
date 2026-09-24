import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Building, Globe, Pill, ShieldPlus } from "lucide-react";

interface CTASectionProps {
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTASection({
  badge = "FUTURE EXPANSION ROADMAP",
  title = "Building the Next Generation",
  highlightText = "of Pharmaceutical Distribution.",
  description = "Advancing beyond traditional wholesaling into specialized C&F depots, regulatory-compliant pharmaceutical exports, and expanded generic and specialty therapeutic distribution.",
  ctaText = "Explore Our Vision",
  ctaHref = "/vision",
}: CTASectionProps) {
  const futurePillars = [
    { title: "C&F Operations", icon: Building },
    { title: "Pharmaceutical Export", icon: Globe },
    { title: "Generic Distribution", icon: Pill },
    { title: "Specialty Therapeutics", icon: ShieldPlus },
  ];

  return (
    <section className="bg-[#003236] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute inset-0 bg-pharma-dots-dark opacity-35 pointer-events-none" />

      <div className="relative w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF7900] text-xs font-bold uppercase tracking-wider border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {title} <span className="text-[#FF7900]">{highlightText}</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* 4 Pillars preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl mx-auto">
            {futurePillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#003F43]/60 border border-[#003F43] p-3.5 rounded-xl flex flex-col items-center text-center gap-2 hover:border-[#FF7900]/40 transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#FF7900]" />
                  <span className="text-xs font-bold text-white leading-tight">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-6">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#FF7900] hover:bg-[#F68A1E] text-white text-sm sm:text-base font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
