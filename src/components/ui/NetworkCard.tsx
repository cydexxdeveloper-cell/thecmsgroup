import React from "react";
import { MapPin, Calendar, Users, Warehouse, ShieldAlert } from "lucide-react";
import { StockistEntity } from "@/data/network";

interface NetworkCardProps {
  entity: StockistEntity;
}

export default function NetworkCard({ entity }: NetworkCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#EEF2F1] p-6 sm:p-8 hover:shadow-lg hover:border-[#003F43]/30 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Meta Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 bg-[#003F43] text-white text-xs font-bold rounded-full">
            {entity.role}
          </span>
          <div className="flex items-center gap-3 text-xs text-[#4B6365] font-semibold">
            <span>Est. {entity.established}</span>
            <span>•</span>
            <span className="text-[#FF7900]">Integrated {entity.integrated}</span>
          </div>
        </div>

        {/* Name and Location */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#102D30] tracking-tight">
          {entity.name}
        </h3>

        <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-[#003F43]">
          <MapPin className="w-4 h-4 text-[#FF7900] shrink-0" />
          <span>{entity.location}</span>
        </div>

        {/* Infrastructure Specs */}
        <div className="mt-4 grid grid-cols-2 gap-3 p-3 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1] text-xs">
          <div className="flex items-center gap-2 text-[#102D30]">
            <Warehouse className="w-4 h-4 text-[#003F43] shrink-0" />
            <div>
              <span className="text-[10px] text-[#4B6365] block">Facility Scale</span>
              <span className="font-bold">{entity.facilitySize}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#102D30]">
            <Users className="w-4 h-4 text-[#003F43] shrink-0" />
            <div>
              <span className="text-[10px] text-[#4B6365] block">Operational Team</span>
              <span className="font-bold">{entity.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-[#4B6365] leading-relaxed">
          {entity.description}
        </p>

        {/* Brand Portfolio Section */}
        <div className="mt-6 pt-5 border-t border-[#EEF2F1]">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#003F43]">
              Brand Portfolio Handled ({entity.brandPortfolio.length})
            </h4>
            <span className="text-[10px] text-[#4B6365] font-medium">Stockist Supply</span>
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
            {entity.brandPortfolio.map((brand) => (
              <span
                key={brand}
                className="px-2.5 py-1 bg-[#EEF2F1]/80 hover:bg-[#EEF2F1] border border-[#DDE4E3] text-[#102D30] rounded-md text-xs font-medium transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>

          <div className="mt-3.5 flex items-start gap-1.5 text-[11px] text-[#4B6365] leading-tight">
            <ShieldAlert className="w-3.5 h-3.5 text-[#FF7900] shrink-0 mt-0.5" />
            <span>
              Brands listed represent commercial wholesale and stockist portfolio channels. Not an endorsement claim.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
