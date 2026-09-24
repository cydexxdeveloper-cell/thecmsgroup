"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Store,
  Building2,
  Layers,
  Globe2,
  X,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export interface PillarData {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  badge: string;
  modalTitle: string;
  modalSubtitle: string;
  keyEntities: string;
  keyTag: string;
  highlights: string[];
  href: string;
  ctaText: string;
}

export const pillarsData: PillarData[] = [
  {
    id: "retail",
    title: "Retail",
    icon: Store,
    desc: "Prime metropolitan retail pharmacy outlets providing prescription medication, patient counseling, and comprehensive OTC healthcare offerings.",
    badge: "Core Operating Wing",
    modalTitle: "Prime Retail Pharmacy Outlets",
    modalSubtitle: "Chandan Medical Stores Flagship & Metropolitan Retail Pharmacy Outlets",
    keyEntities: "Chandan Medical Stores (Prime Retail Outlets: Ellisbridge & Ambawadi)",
    keyTag: "Prime Retail Outlets • Est. 1991",
    highlights: [
      "Prime retail pharmacy outlets operating in key Ahmedabad locations (Ellisbridge & Ambawadi)",
      "Foundational dispensing legacy established in 1991 with 35+ years of continuous community trust",
      "Strict clinical dispensing integrity and personalized patient counseling by certified pharmacists",
      "100% genuine formulation procurement directly from authorized pharmaceutical manufacturers",
      "Comprehensive inventory covering chronic therapies, critical care, and OTC healthcare lines",
    ],
    href: "/group-companies#core-companies",
    ctaText: "Explore Chandan Medical Stores in Group & Network",
  },
  {
    id: "wholesale",
    title: "Wholesale",
    icon: Building2,
    desc: "High-volume pan-India pharmaceutical supply network serving retail pharmacies, clinics, and institutional healthcare accounts.",
    badge: "Core Operating Wing",
    modalTitle: "High-Volume Wholesale Logistics",
    modalSubtitle: "Institutional Healthcare Supply & Pan-India Logistics Dispatch",
    keyEntities: "Chandan Medical Stores (Ambawadi Central Hub) & Veer Pharma",
    keyTag: "₹100 Cr + ₹30 Cr Annual Turnover",
    highlights: [
      "5,000 sq. ft. central logistics & cold-chain fulfillment hub in Ambawadi",
      "₹100 Crore annual wholesale distribution scale",
      "Veer Pharma specialized healthcare logistics scaling to ₹30 Crore turnover",
      "High-throughput dispatch corridors serving hospitals, clinics, and pharmacies nationwide",
    ],
    href: "/group-companies#core-companies",
    ctaText: "View Wholesale Operations in Group & Network",
  },
  {
    id: "stockist",
    title: "Stockist Distribution",
    icon: Layers,
    desc: "Decades-established stockist operations representing premier multinational and domestic formulation manufacturers.",
    badge: "Core Operating Wing",
    modalTitle: "Integrated Stockist Distribution Network",
    modalSubtitle: "4 Strategically Integrated Regional Stockist Hubs across Gujarat",
    keyEntities: "Ketki Distributors • Anuraj Pharma • Madhuram Medicales • Janta Medical",
    keyTag: "CMS Group Integrated 2025",
    highlights: [
      "Ketki Distributors (Ahmedabad, Est. 1991) — Key multinational pharma distributor",
      "Anuraj Pharma (Ahmedabad, Est. 2016) — Agile distribution corridors and ethical formulations",
      "Madhuram Medicales (Gandhinagar, Est. 1986) — Capital city hospital & retail distribution anchor",
      "Janta Medical & General Stores (Mansa, Est. 1973) — 50+ years of Northern Gujarat regional trust",
      "Centralized ERP batch tracking, synchronized stock buffer, and compliant GST governance",
    ],
    href: "/group-companies#stockist-network",
    ctaText: "Explore 4 Stockist Partners in Group & Network",
  },
  {
    id: "digital",
    title: "Digital B2B Commerce",
    icon: Globe2,
    desc: "Next-generation B2B healthcare commerce via MediShah, driving supply transparency, stock visibility, and digital connectivity.",
    badge: "Core Operating Wing",
    modalTitle: "Digital B2B Healthcare Commerce",
    modalSubtitle: "Next-Generation Digital Medicine Marketplace & Supply Transparency",
    keyEntities: "MediShah Digital Ecosystem",
    keyTag: "Digital Supply Platform",
    highlights: [
      "Direct digital ordering platform for licensed retail pharmacies, clinics, and hospitals",
      "Real-time pharmaceutical stock visibility and transparent commercial terms",
      "Seamless digital synchronization with CMS Group central warehousing & stockist inventory",
      "Rapid delivery dispatch corridors expanding across Gujarat and neighboring states",
    ],
    href: "/group-companies#core-companies",
    ctaText: "Explore MediShah in Group & Network",
  },
];

export default function EcosystemPillars() {
  const [activePillar, setActivePillar] = useState<PillarData | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePillar(null);
      }
    };
    if (activePillar) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activePillar]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillarsData.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              role="button"
              tabIndex={0}
              onClick={() => setActivePillar(pillar)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActivePillar(pillar);
                }
              }}
              className="group bg-white rounded-2xl border border-[#EEF2F1] p-6 hover:shadow-xl hover:border-[#003F43]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer text-left relative focus:outline-none focus:ring-2 focus:ring-[#003F43]"
              aria-label={`View details for ${pillar.title}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF2F1] text-[#003F43] group-hover:bg-[#003F43] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#003F43] group-hover:text-[#FF7900] flex items-center gap-1 transition-colors">
                    <span>View Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#102D30] group-hover:text-[#003F43] tracking-tight transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#4B6365] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#EEF2F1] flex items-center justify-between text-xs font-semibold text-[#003F43]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                  <span>{pillar.badge}</span>
                </div>
                <span className="text-[#FF7900] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* POPUP MODAL DIALOG */}
      {activePillar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActivePillar(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EEF2F1] overflow-hidden text-left animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#003236] text-white p-6 sm:p-8 relative">
              <button
                type="button"
                onClick={() => setActivePillar(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7900] text-white text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activePillar.badge}</span>
              </div>

              <h3
                id="modal-headline"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white"
              >
                {activePillar.modalTitle}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1.5 max-w-xl">
                {activePillar.modalSubtitle}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Key Entity Info Box */}
              <div className="p-4 rounded-2xl bg-[#F7F9F8] border border-[#EEF2F1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-[#FF7900] uppercase tracking-wider block">
                    Operating Entity / Portfolio
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#102D30] block mt-0.5">
                    {activePillar.keyEntities}
                  </span>
                </div>
                <div className="shrink-0 inline-flex items-center px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold border border-[#DDE4E3]">
                  {activePillar.keyTag}
                </div>
              </div>

              {/* Highlights List */}
              <div>
                <h4 className="text-xs font-bold text-[#4B6365] uppercase tracking-wider mb-3">
                  Key Operational Capabilities & Scope:
                </h4>
                <div className="space-y-2.5">
                  {activePillar.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#102D30]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF7900] shrink-0 mt-0.5" />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="pt-4 border-t border-[#EEF2F1] flex flex-col sm:flex-row items-center justify-between gap-3">
                <Link
                  href={activePillar.href}
                  onClick={() => setActivePillar(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#003F43] hover:bg-[#003236] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md hover:shadow transition-all"
                >
                  <span>{activePillar.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#FF7900]" />
                </Link>

                <button
                  type="button"
                  onClick={() => setActivePillar(null)}
                  className="w-full sm:w-auto text-xs font-semibold text-[#4B6365] hover:text-[#102D30] px-4 py-2 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
