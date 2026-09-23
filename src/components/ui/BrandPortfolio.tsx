"use client";

import React, { useState, useMemo } from "react";
import { Search, ShieldAlert, CheckCircle2 } from "lucide-react";
import { stockistEntities } from "@/data/network";
import { groupCompanies } from "@/data/companies";

export default function BrandPortfolio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");

  // Collect all unique brand portfolios
  const allBrandEntries = useMemo(() => {
    const list: { brand: string; source: string; category: string }[] = [];

    // From Ellisbridge
    const ellisbridge = groupCompanies.find((c) => c.id === "chandan-ellisbridge");
    if (ellisbridge?.brandPortfolio) {
      ellisbridge.brandPortfolio.forEach((b) =>
        list.push({ brand: b, source: "Chandan Medical Stores (Ellisbridge)", category: "Retail & Stockist" })
      );
    }

    // From stockists
    stockistEntities.forEach((entity) => {
      entity.brandPortfolio.forEach((b) => {
        list.push({ brand: b, source: entity.name, category: "Stockist Distribution" });
      });
    });

    return list;
  }, []);

  const filteredBrands = useMemo(() => {
    return allBrandEntries.filter((item) => {
      const matchesSearch =
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.source.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTab = activeTab === "all" || item.source.toLowerCase().includes(activeTab.toLowerCase());
      return matchesSearch && matchesTab;
    });
  }, [allBrandEntries, searchTerm, activeTab]);

  return (
    <div className="bg-white rounded-2xl border border-[#EEF2F1] p-6 sm:p-8 lg:p-10 shadow-sm">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#EEF2F1]">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#102D30] tracking-tight">
            Commercial Brand Portfolio Directory
          </h3>
          <p className="text-xs sm:text-sm text-[#4B6365] mt-1">
            Explore multinational and Indian pharmaceutical brands distributed across group entities
          </p>
        </div>

        {/* Search input */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search brands (e.g. Abbott, Cipla)..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#F7F9F8] border border-[#DDE4E3] rounded-xl text-xs sm:text-sm text-[#102D30] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003F43] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-6 pb-4">
        {[
          { id: "all", label: "All Portfolios" },
          { id: "ellisbridge", label: "Chandan Ellisbridge" },
          { id: "ketki", label: "Ketki Distributors" },
          { id: "anuraj", label: "Anuraj Pharma" },
          { id: "madhuram", label: "Madhuram Medicales" },
          { id: "janta", label: "Janta Medical" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              activeTab === tab.id
                ? "bg-[#003F43] text-white shadow-xs"
                : "bg-[#F7F9F8] text-[#4B6365] hover:bg-[#EEF2F1] hover:text-[#003F43]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Brand Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 pt-4">
        {filteredBrands.map((item, idx) => (
          <div
            key={`${item.brand}-${item.source}-${idx}`}
            className="bg-[#F7F9F8] border border-[#EEF2F1] hover:border-[#003F43]/40 p-3 rounded-xl transition-all flex flex-col justify-between"
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#003F43] shrink-0" />
              <span className="font-bold text-xs sm:text-sm text-[#102D30] leading-tight truncate">
                {item.brand}
              </span>
            </div>
            <span className="text-[10px] text-[#4B6365] leading-tight truncate block">
              via {item.source.split(" ")[0]}
            </span>
          </div>
        ))}
      </div>

      {filteredBrands.length === 0 && (
        <div className="text-center py-10 text-sm text-[#4B6365]">
          No brand matches found for &quot;{searchTerm}&quot;. Please try another search term.
        </div>
      )}

      {/* Mandatory Disclaimer */}
      <div className="mt-8 p-4 bg-[#FFF4E8] rounded-xl border border-[#FF7900]/20 flex items-start gap-2.5 text-xs text-[#102D30]">
        <ShieldAlert className="w-4 h-4 text-[#FF7900] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-bold text-[#003F43] block mb-0.5">Commercial Portfolio Notice:</span>
          Pharmaceutical manufacturer names, trademarks, and brand divisions listed above represent verified commercial stockist, wholesale, and retail distribution relationships managed across CMS Group entities. CMS Group does not imply manufacturer endorsement or sponsorship.
        </div>
      </div>
    </div>
  );
}
