import React from "react";
import { StatItem } from "@/data/stats";

interface StatCardProps {
  stat: StatItem;
  theme?: "light" | "teal";
}

export default function StatCard({ stat, theme = "light" }: StatCardProps) {
  const isTeal = theme === "teal";

  return (
    <div
      className={`p-6 sm:p-7 rounded-xl border transition-all duration-300 hover:shadow-md ${
        isTeal
          ? "bg-[#003236]/80 border-[#003F43] hover:border-[#FF7900]/40 text-white"
          : "bg-white border-[#EEF2F1] hover:border-[#FF7900]/40 text-[#102D30]"
      }`}
    >
      <div className="flex items-baseline gap-1">
        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FF7900]">
          {stat.value}
        </span>
      </div>

      <div className="mt-2.5">
        <h4 className="text-sm sm:text-base font-bold tracking-tight">
          {stat.label}
          {stat.sublabel && <span className="block">{stat.sublabel}</span>}
        </h4>
        {stat.description && (
          <p
            className={`mt-1.5 text-xs leading-relaxed ${
              isTeal ? "text-gray-300" : "text-[#4B6365]"
            }`}
          >
            {stat.description}
          </p>
        )}
      </div>
    </div>
  );
}
