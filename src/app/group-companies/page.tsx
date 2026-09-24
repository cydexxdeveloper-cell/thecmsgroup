import React from "react";
import type { Metadata } from "next";
import {
  Layers,
  TrendingUp,
  Globe2,
  Network,
  Boxes,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CompanyCard from "@/components/ui/CompanyCard";
import NetworkCard from "@/components/ui/NetworkCard";
import IndiaDistributionMap from "@/components/ui/IndiaDistributionMap";
import BrandPortfolio from "@/components/ui/BrandPortfolio";
import CTASection from "@/components/ui/CTASection";
import { groupCompanies } from "@/data/companies";
import { stockistEntities } from "@/data/network";

export const metadata: Metadata = {
  title: "Group Companies & Stockist Network | CMS Group Pharmaceutical Ecosystem",
  description:
    "Explore CMS Group's unified ecosystem: core companies (Chandan Medical Stores ₹100 Cr, Veer Pharma ₹30 Cr, MediShah) and 4 partner stockists (Ketki Distributors, Anuraj Pharma, Madhuram Medicales, Janta Medical) integrated in 2025.",
  alternates: {
    canonical: "/group-companies",
  },
};

export default function GroupAndNetworkPage() {
  const breadcrumbs = [{ label: "Group & Network" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <PageHero
        badge="CORPORATE ECOSYSTEM & LOGISTICS"
        title="Group Companies &"
        highlightText="Stockist Network."
        description="CMS Group operates a cohesive multi-entity ecosystem: combining high-volume wholesale distribution, specialized institutional supply, and 4 strategically integrated partner stockists across Gujarat under unified ERP governance."
        breadcrumbs={breadcrumbs}
        variant="teal"
      />

      {/* 2. SYNERGY OVERVIEW STRIP */}
      <section className="bg-white py-12 border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#F7F9F8] border border-[#EEF2F1] hover:border-[#003F43]/30 transition-all">
              <TrendingUp className="w-6 h-6 text-[#FF7900] mb-2.5" />
              <span className="text-xl sm:text-2xl font-extrabold text-[#102D30] block">
                ₹100 Cr Hub
              </span>
              <p className="text-xs text-[#4B6365] mt-1 font-medium">
                Chandan Medical Stores (Wholesale Hub & Prime Retail Outlet)
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F9F8] border border-[#EEF2F1] hover:border-[#003F43]/30 transition-all">
              <Layers className="w-6 h-6 text-[#003F43] mb-2.5" />
              <span className="text-xl sm:text-2xl font-extrabold text-[#102D30] block">
                ₹30 Cr Logistics
              </span>
              <p className="text-xs text-[#4B6365] mt-1 font-medium">
                Veer Pharma Specialized Healthcare Distribution
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F9F8] border border-[#EEF2F1] hover:border-[#003F43]/30 transition-all">
              <Network className="w-6 h-6 text-[#FF7900] mb-2.5" />
              <span className="text-xl sm:text-2xl font-extrabold text-[#102D30] block">
                4 Stockists
              </span>
              <p className="text-xs text-[#4B6365] mt-1 font-medium">
                Ketki • Anuraj • Madhuram • Janta (Integrated 2025)
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F9F8] border border-[#EEF2F1] hover:border-[#003F43]/30 transition-all">
              <Globe2 className="w-6 h-6 text-[#003F43] mb-2.5" />
              <span className="text-xl sm:text-2xl font-extrabold text-[#102D30] block">
                Digital & Brands
              </span>
              <p className="text-xs text-[#4B6365] mt-1 font-medium">
                MediShah B2B Platform & 50+ Global Brand Portfolios
              </p>
            </div>
          </div>

          {/* Quick Anchor Navigation Strip */}
          <div className="mt-8 pt-6 border-t border-[#EEF2F1] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <span className="text-[#4B6365] font-semibold flex items-center gap-1.5">
              <Boxes className="w-4 h-4 text-[#003F43]" />
              <span>Direct Page Navigation:</span>
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#core-companies"
                className="px-3.5 py-1.5 rounded-full bg-[#EEF2F1] hover:bg-[#003F43] text-[#003F43] hover:text-white font-semibold transition-colors"
              >
                1. Core Operating Companies
              </a>
              <a
                href="#stockist-network"
                className="px-3.5 py-1.5 rounded-full bg-[#EEF2F1] hover:bg-[#003F43] text-[#003F43] hover:text-white font-semibold transition-colors"
              >
                2. Integrated Stockist Network (2025)
              </a>
              <a
                href="#logistics-corridors"
                className="px-3.5 py-1.5 rounded-full bg-[#EEF2F1] hover:bg-[#003F43] text-[#003F43] hover:text-white font-semibold transition-colors"
              >
                3. Logistics Corridors & Map
              </a>
              <a
                href="#brand-directory"
                className="px-3.5 py-1.5 rounded-full bg-[#EEF2F1] hover:bg-[#003F43] text-[#003F43] hover:text-white font-semibold transition-colors"
              >
                4. Brand Directory
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: CORE OPERATING ENTITIES */}
      <section id="core-companies" className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1] scroll-mt-20">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="CORE OPERATING PILLARS"
            title="Strategic Companies Powering"
            highlightText="The CMS Foundation."
            description="Our primary group companies command high-volume wholesale dispatch, foundational dispensing heritage since 1991, specialized healthcare supply lines, and next-generation digital commerce."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} isDetailed={true} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: INTEGRATED STOCKIST NETWORK (2025) */}
      <section id="stockist-network" className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1] scroll-mt-20">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="2025 STRATEGIC INTEGRATION"
            title="Integrated Stockist Entities &"
            highlightText="Regional Hubs."
            description="In 2025, CMS Group integrated four prominent regional stockist entities under unified corporate governance, centralized ERP batch tracking, and synchronized inventory buffer across Gujarat."
          />

          {/* Integration Highlight Banner */}
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#003236] to-[#003F43] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm border border-[#003F43]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#FF7900] text-white text-[11px] font-bold uppercase tracking-wider">
                <span>Enterprise Synergy</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold">
                Deep Regional Roots Unified Under Corporate CMS Systems
              </h3>
              <p className="text-xs sm:text-sm text-gray-200">
                Bringing together independent heritage (spanning from 1973, 1986, 1991, and 2016) with centralized ERP batch tracking, compliant GST governance, and direct manufacturer procurement corridors.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <div className="text-right">
                <span className="text-2xl font-extrabold text-[#FF7900] block">4 Units</span>
                <span className="text-[11px] text-gray-300">Synchronized Stockists</span>
              </div>
            </div>
          </div>

          {/* Stockist Entities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stockistEntities.map((entity) => (
              <NetworkCard key={entity.id} entity={entity} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: LOGISTICS CORRIDORS & INDIA MAP */}
      <section id="logistics-corridors" className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1] scroll-mt-20">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="MULTICHANNEL FULFILLMENT"
            title="Geographic Logistics &"
            highlightText="Distribution Corridors."
            description="Connecting major pharmaceutical production hubs with regional clinics, retail chains, and institutional hospitals across Gujarat and pan-India."
          />

          <IndiaDistributionMap />
        </div>
      </section>

      {/* 6. SECTION 4: CONSOLIDATED BRAND DIRECTORY */}
      <section id="brand-directory" className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1] scroll-mt-20">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="PHARMACEUTICAL PORTFOLIO"
            title="Consolidated Brand &"
            highlightText="Division Directory."
            description="Across our core operating companies and integrated stockist divisions, CMS Group manages authorized lines for over 50 premier multinational and leading Indian pharmaceutical manufacturers."
          />

          <BrandPortfolio />
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <CTASection
        badge="INFRASTRUCTURE CAPABILITY"
        title="Explore Our Warehousing &"
        highlightText="Cold Chain Systems."
        description="Learn about our 5,000 sq. ft. central fulfillment facility, refrigerated pharmaceutical storage, and real-time batch traceability infrastructure."
        ctaText="View Infrastructure"
        ctaHref="/infrastructure"
      />
    </div>
  );
}
