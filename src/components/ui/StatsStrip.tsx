import React from "react";
import { corporateStats } from "@/data/stats";

interface StatsStripProps {
  theme?: "light" | "teal";
}

export default function StatsStrip({ theme = "light" }: StatsStripProps) {
  const isTeal = theme === "teal";

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 lg:p-10 shadow-sm ${
        isTeal
          ? "bg-[#003236] border-[#003F43] text-white"
          : "bg-white border-[#EEF2F1] text-[#102D30]"
      }`}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EEF2F1]/30">
        {corporateStats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col justify-between ${
              idx !== 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""
            }`}
          >
            <div>
              <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#FF7900] tracking-tight whitespace-nowrap">
                {stat.value}
              </div>
              <div className="mt-2 text-sm sm:text-base font-bold leading-tight">
                {stat.label}
                {stat.sublabel && <span className="block">{stat.sublabel}</span>}
              </div>
            </div>
            {stat.description && (
              <p
                className={`mt-2 text-xs leading-relaxed ${
                  isTeal ? "text-gray-300" : "text-[#4B6365]"
                }`}
              >
                {stat.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
