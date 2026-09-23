import React from "react";
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, Cpu, Handshake } from "lucide-react";
import { CorporateValue } from "@/data/leadership";

interface ValueCardProps {
  value: CorporateValue;
  index: number;
}

export default function ValueCard({ value, index }: ValueCardProps) {
  const icons = [
    ShieldCheck,
    Award,
    HeartHandshake,
    CheckCircle2,
    Cpu,
    Handshake,
  ];
  const Icon = icons[index % icons.length];

  return (
    <div className="bg-white rounded-2xl border border-[#EEF2F1] p-6 sm:p-7 hover:border-[#FF7900]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#EEF2F1] text-[#003F43] flex items-center justify-center mb-5">
          <Icon className="w-6 h-6 text-[#003F43]" />
        </div>
        <h3 className="text-lg sm:text-xl font-extrabold text-[#102D30] tracking-tight">
          {value.title}
        </h3>
        <p className="mt-2.5 text-sm text-[#4B6365] leading-relaxed">
          {value.description}
        </p>
      </div>
      <div className="mt-5 pt-4 border-t border-[#EEF2F1] flex items-center gap-1.5 text-xs font-bold text-[#FF7900]">
        <span>Core Tenet #{index + 1}</span>
      </div>
    </div>
  );
}
