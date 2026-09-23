import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Truck, CheckCircle2, ShieldAlert, Building2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import NetworkCard from "@/components/ui/NetworkCard";
import IndiaDistributionMap from "@/components/ui/IndiaDistributionMap";
import BrandPortfolio from "@/components/ui/BrandPortfolio";
import CTASection from "@/components/ui/CTASection";
import { stockistEntities, geographicNodes } from "@/data/network";

export const metadata: Metadata = {
  title: "Distribution Network | CMS Group Stockist & Supply Reach",
  description:
    "Explore CMS Group's stockist network: Ketki Distributors, Anuraj Pharma, Madhuram Medicales (Gandhinagar), and Janta Medical (Mansa), integrated in 2025.",
  alternates: {
    canonical: "/distribution-network",
  },
};

export default function DistributionNetworkPage() {
  const breadcrumbs = [{ label: "Distribution Network" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <PageHero
        badge="STRATEGIC SYNERGY"
        title="A Distribution Network"
        highlightText="Built for Scale."
        description="CMS Group combines deeply established pharmaceutical stockist operations with newer strategic integrations, providing unmatched supply-chain depth across Gujarat and expanding pan-India distribution channels."
        breadcrumbs={breadcrumbs}
        variant="teal"
      />

      {/* 2. NETWORK SYNERGY HIGHLIGHT */}
      <section className="bg-white py-12 border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F7F9F8] rounded-2xl border border-[#EEF2F1]">
              <div className="w-10 h-10 rounded-xl bg-[#003F43] text-white flex items-center justify-center font-bold text-sm mb-3">
                01
              </div>
              <h3 className="text-base font-extrabold text-[#102D30]">Established Heritage</h3>
              <p className="text-xs text-[#4B6365] mt-1.5 leading-relaxed">
                Foundational entities operating continuously since 1973 and 1991, offering generational trust with local healthcare providers.
              </p>
            </div>

            <div className="p-6 bg-[#F7F9F8] rounded-2xl border border-[#EEF2F1]">
              <div className="w-10 h-10 rounded-xl bg-[#FF7900] text-white flex items-center justify-center font-bold text-sm mb-3">
                02
              </div>
              <h3 className="text-base font-extrabold text-[#102D30]">2025 Strategic Integration</h3>
              <p className="text-xs text-[#4B6365] mt-1.5 leading-relaxed">
                Seamless operational consolidation under CMS Group enterprise systems, centralizing ERP traceability and inventory buffer.
              </p>
            </div>

            <div className="p-6 bg-[#F7F9F8] rounded-2xl border border-[#EEF2F1]">
              <div className="w-10 h-10 rounded-xl bg-[#003236] text-white flex items-center justify-center font-bold text-sm mb-3">
                03
              </div>
              <h3 className="text-base font-extrabold text-[#102D30]">Comprehensive Portfolios</h3>
              <p className="text-xs text-[#4B6365] mt-1.5 leading-relaxed">
                Aggregated stockist representation encompassing over 50 premier multinational and top-tier Indian pharmaceutical formulation manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STOCKIST ENTITY CARDS */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="STOCKIST INTEGRATIONS"
            title="Integrated Stockist Entities"
            highlightText="& Regional Hubs."
            description="Our specialized stockist divisions manage dedicated distribution facilities (800–1,500 sq. ft. each) staffed by 7–10 trained personnel per unit."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stockistEntities.map((entity) => (
              <NetworkCard key={entity.id} entity={entity} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDIA MAP & LOGISTICS VISUALIZATION */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="MULTICHANNEL FULFILLMENT"
            title="Geographic Logistics"
            highlightText="Corridors."
            description="Connecting major pharmaceutical production hubs with regional clinics, retail chains, and institutional hospitals across India."
          />

          <IndiaDistributionMap />
        </div>
      </section>

      {/* 5. SEARCHABLE BRAND DIRECTORY */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="STOCKIST CATALOG"
            title="Complete Stockist"
            highlightText="Brand Portfolio."
            description="Detailed catalog of formulation divisions and consumer healthcare brands handled across CMS Group stockists."
          />

          <BrandPortfolio />
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <CTASection
        badge="INFRASTRUCTURE CAPABILITY"
        title="Explore Our Warehousing"
        highlightText="and ERP Systems."
        description="Learn about our 5,000 sq. ft. central fulfillment facility, cold-chain controls, and batch traceability infrastructure."
        ctaText="View Infrastructure"
        ctaHref="/infrastructure"
      />
    </div>
  );
}
