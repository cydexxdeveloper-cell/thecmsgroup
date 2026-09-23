import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, TrendingUp, Building2, Globe2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CompanyCard from "@/components/ui/CompanyCard";
import BrandPortfolio from "@/components/ui/BrandPortfolio";
import CTASection from "@/components/ui/CTASection";
import { groupCompanies } from "@/data/companies";

export const metadata: Metadata = {
  title: "Group Companies | CMS Group Pharmaceutical Ecosystem",
  description:
    "Explore CMS Group's operating companies: Chandan Medical Stores (Ambawadi ₹100 Cr, Ellisbridge Est 1991), Veer Pharma (₹30 Cr), and MediShah B2B digital commerce.",
  alternates: {
    canonical: "/group-companies",
  },
};

export default function GroupCompaniesPage() {
  const breadcrumbs = [{ label: "Group Companies" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <PageHero
        badge="CORPORATE STRUCTURE"
        title="A Diversified"
        highlightText="Pharmaceutical Group."
        description="CMS Group operates a cohesive multi-entity structure spanning high-volume wholesale distribution, veteran stockist facilities, specialized supply channels, and digital B2B commerce."
        breadcrumbs={breadcrumbs}
        variant="teal"
      />

      {/* 2. SYNERGY OVERVIEW STRIP */}
      <section className="bg-white py-12 border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-[#F7F9F8] border border-[#EEF2F1]">
              <TrendingUp className="w-5 h-5 text-[#FF7900] mb-2" />
              <span className="text-xl font-extrabold text-[#102D30]">₹100 Cr Flagship</span>
              <p className="text-xs text-[#4B6365] mt-1">Chandan Medical Stores Ambawadi</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F9F8] border border-[#EEF2F1]">
              <Building2 className="w-5 h-5 text-[#003F43] mb-2" />
              <span className="text-xl font-extrabold text-[#102D30]">Legacy Since 1991</span>
              <p className="text-xs text-[#4B6365] mt-1">Chandan Medical Stores Ellisbridge</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F9F8] border border-[#EEF2F1]">
              <Layers className="w-5 h-5 text-[#FF7900] mb-2" />
              <span className="text-xl font-extrabold text-[#102D30]">₹30 Cr Distribution</span>
              <p className="text-xs text-[#4B6365] mt-1">Veer Pharma Specialized Supply</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F9F8] border border-[#EEF2F1]">
              <Globe2 className="w-5 h-5 text-[#003F43] mb-2" />
              <span className="text-xl font-extrabold text-[#102D30]">Digital Commerce</span>
              <p className="text-xs text-[#4B6365] mt-1">MediShah B2B Medicine Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED GROUP ENTITIES GRID */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PORTFOLIO ENTITIES"
            title="Strategic Entities Powering"
            highlightText="The CMS Ecosystem."
            description="Each group company fulfills a targeted role in the pharmaceutical value chain, from authorized direct-from-manufacturer procurement to doorstep pharmacy fulfillment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} isDetailed={true} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE BRAND DIRECTORY */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PHARMACEUTICAL PORTFOLIO"
            title="Multi-Division Brand"
            highlightText="Representation."
            description="Across our entities, CMS Group manages extensive distribution and stockist lines across ethical formulations, consumer healthcare, OTC, and specialty medications."
          />

          <BrandPortfolio />
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <CTASection
        badge="LOGISTICS INTEGRATION"
        title="Explore How Our Stockists"
        highlightText="Extend Our Reach."
        description="Learn more about our dedicated stockist partners across Gujarat and our pan-India distribution channels."
        ctaText="View Distribution Network"
        ctaHref="/distribution-network"
      />
    </div>
  );
}
