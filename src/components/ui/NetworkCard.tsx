import React from "react";
import { MapPin, Users, Warehouse, ShieldAlert, History } from "lucide-react";
import { StockistEntity } from "@/data/network";

interface NetworkCardProps {
  entity: StockistEntity;
}

export default function NetworkCard({ entity }: NetworkCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#EEF2F1] p-6 sm:p-8 hover:shadow-lg hover:border-[#003F43]/30 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Meta Strip: Integrated Year highlighted on the OUTSIDE */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF4E8] text-[#FF7900] border border-[#FF7900]/30 text-xs font-extrabold rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF7900] animate-pulse" />
            <span>CMS Group Integrated: {entity.integrated}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#EEF2F1] text-[#003F43] text-xs font-bold rounded-full">
            <MapPin className="w-3.5 h-3.5 text-[#FF7900] shrink-0" />
            <span>{entity.location}</span>
          </div>
        </div>

        {/* Entity Title & Role */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#102D30] tracking-tight group-hover:text-[#003F43] transition-colors">
          {entity.name}
        </h3>
        <p className="mt-1 text-xs font-semibold text-[#4B6365]">
          {entity.role} • Regional Stockist Division
        </p>

        {/* Description */}
        <p className="mt-4 text-sm text-[#4B6365] leading-relaxed">
          {entity.description}
        </p>

        {/* DETAILS SECTION: Where Established Year is Highlighted as its Independent Heritage */}
        <div className="mt-5 p-4 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1] space-y-3">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#EEF2F1]">
            <div className="flex items-center gap-2">
              <History className="w-4 h-4 text-[#FF7900]" />
              <span className="text-xs font-bold text-[#102D30]">
                Independent Founding Heritage
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#003F43] bg-[#E8F1F2] px-2.5 py-0.5 rounded-md border border-[#DDE4E3]">
              Est. {entity.established}
            </span>
          </div>

          <p className="text-[11px] text-[#4B6365] leading-relaxed">
            Founded independently in <strong className="text-[#102D30]">{entity.established}</strong> with decades of deep regional healthcare relationships, prior to strategic operational integration into CMS Group in <strong className="text-[#102D30]">{entity.integrated}</strong>.
          </p>

          {/* Infrastructure Specs */}
          <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
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
        </div>

        {/* Brand Portfolio Section */}
        <div className="mt-6 pt-5 border-t border-[#EEF2F1]">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#003F43]">
              Brand Portfolio Handled ({entity.brandPortfolio.length})
            </h4>
            <span className="text-[10px] text-[#4B6365] font-medium">Stockist Supply</span>
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-52 overflow-y-auto pr-1">
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
              Brands listed represent commercial wholesale and stockist portfolio channels.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
