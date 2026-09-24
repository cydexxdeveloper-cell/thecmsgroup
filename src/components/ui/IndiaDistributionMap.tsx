import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, ShieldCheck, Truck, Building } from "lucide-react";
import { geographicNodes } from "@/data/network";

export default function IndiaDistributionMap() {
  return (
    <div className="bg-[#003236] rounded-2xl border border-[#003F43] p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-pharma-dots-dark opacity-30 pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Context & Strategic Nodes (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FF7900] text-xs font-bold uppercase tracking-wider border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900] animate-pulse" />
            <span>National Logistics Corridor</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Strategic Distribution Across <span className="text-[#FF7900]">Gujarat & India</span>
          </h3>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Headquartered in Ahmedabad, CMS Group integrates veteran stockist facilities and modern fulfillment centers, orchestrating pharmaceutical movements with verified cold-chain safeguards and pan-India dispatch speed.
          </p>

          {/* Node Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {geographicNodes.map((node) => (
              <div
                key={node.city}
                className="bg-[#003F43]/60 border border-[#003F43] p-3.5 rounded-xl hover:border-[#FF7900]/40 transition-colors"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-white">
                  <MapPin className="w-4 h-4 text-[#FF7900] shrink-0" />
                  <span>{node.city}</span>
                  <span className="text-xs font-normal text-gray-400">({node.state})</span>
                </div>
                <p className="mt-1 text-xs text-gray-300 pl-6 leading-tight">
                  {node.type}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/group-companies#stockist-network"
              className="inline-flex items-center gap-2 bg-[#FF7900] hover:bg-[#F68A1E] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              <span>Explore Stockist Network</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#FF7900]" />
              <span>Full Batch Traceability via ERP</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visualization Graphic (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#002629]">
            <Image
              src="/images/india-network.webp"
              alt="Pan-India Pharmaceutical Distribution Network Graphic"
              width={600}
              height={400}
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
            {/* Overlay Badges */}
            <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#003236]/90 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#FF7900]" />
                <span className="font-semibold text-white">Fast-Track Regional Dispatches</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#FF7900]" />
                <span className="text-gray-300">Central Hub & Branches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
