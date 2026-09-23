import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

export default function FeatureCard({ icon: Icon, title, description, badge }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#EEF2F1] p-6 sm:p-8 hover:shadow-lg hover:border-[#003F43]/30 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 rounded-xl bg-[#003F43]/5 text-[#003F43] flex items-center justify-center group-hover:bg-[#003F43] group-hover:text-white transition-colors duration-300">
            <Icon className="w-6 h-6 text-inherit transition-colors" />
          </div>
          {badge && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7900] bg-[#FFF4E8] px-2.5 py-1 rounded-md border border-[#FF7900]/20">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-extrabold text-[#102D30] tracking-tight group-hover:text-[#003F43] transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-sm text-[#4B6365] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#EEF2F1] flex items-center gap-1.5 text-xs font-semibold text-[#003F43]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
        <span>Institutional Standard</span>
      </div>
    </div>
  );
}
