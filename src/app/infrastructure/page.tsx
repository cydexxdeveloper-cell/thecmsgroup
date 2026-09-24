import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Warehouse,
  Users,
  Truck,
  CheckCircle2,
  ShieldCheck,
  Layers,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { facilitySpecs, erpCapabilities } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Infrastructure & Logistics | CMS Group Pharmaceutical Facilities",
  description:
    "Explore CMS Group's infrastructure: 5,000 sq. ft. flagship Ambawadi hub, regional stockist facilities, 50+ operations team, and enterprise ERP batch traceability.",
  alternates: {
    canonical: "/infrastructure",
  },
};

export default function InfrastructurePage() {
  const breadcrumbs = [{ label: "Infrastructure" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <PageHero
        badge="FACILITIES & OPERATIONS"
        title="Infrastructure Designed"
        highlightText="for Pharmaceutical Scale."
        description="Combining a high-throughput 5,000 sq. ft. central flagship hub with strategic regional branch facilities and enterprise ERP systems, built to handle pharmaceutical distribution across India."
        breadcrumbs={breadcrumbs}
        variant="teal"
      />

      {/* 2. SCALE METRIC HIGHLIGHTS */}
      <section className="bg-white py-12 border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-[#F7F9F8] rounded-2xl border border-[#EEF2F1]">
              <Warehouse className="w-5 h-5 text-[#003F43] mb-2" />
              <div className="text-2xl sm:text-3xl font-extrabold text-[#FF7900]">5,000 sq. ft.</div>
              <div className="text-xs font-bold text-[#102D30] mt-1">Central Flagship Hub</div>
              <p className="text-[11px] text-[#4B6365] mt-1">Ambawadi, Ahmedabad</p>
            </div>

            <div className="p-6 bg-[#F7F9F8] rounded-2xl border border-[#EEF2F1]">
              <Layers className="w-5 h-5 text-[#003F43] mb-2" />
              <div className="text-2xl sm:text-3xl font-extrabold text-[#FF7900]">800–1,500 sq. ft.</div>
              <div className="text-xs font-bold text-[#102D30] mt-1">Branch Facilities</div>
              <p className="text-[11px] text-[#4B6365] mt-1">Each regional stockist unit</p>
            </div>

            <div className="p-6 bg-[#F7F9F8] rounded-2xl border border-[#EEF2F1]">
              <Users className="w-5 h-5 text-[#003F43] mb-2" />
              <div className="text-2xl sm:text-3xl font-extrabold text-[#FF7900]">50</div>
              <div className="text-xs font-bold text-[#102D30] mt-1">Flagship Professionals</div>
              <p className="text-[11px] text-[#4B6365] mt-1">Logistics, quality & dispatch</p>
            </div>

            <div className="p-6 bg-[#F7F9F8] rounded-2xl border border-[#EEF2F1]">
              <Truck className="w-5 h-5 text-[#003F43] mb-2" />
              <div className="text-2xl sm:text-3xl font-extrabold text-[#FF7900]">Pan-India</div>
              <div className="text-xs font-bold text-[#102D30] mt-1">Dispatch Reach</div>
              <p className="text-[11px] text-[#4B6365] mt-1">Multichannel freight lines</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WAREHOUSING SECTION */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="WAREHOUSING NETWORK"
            title="Physical Infrastructure &"
            highlightText="Fulfillment Hubs."
            description="Our physical spaces are customized for pharmaceutical handling, storage protocols, temperature management, and rapid order turnover."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilitySpecs.map((facility) => (
              <div
                key={facility.name}
                className="bg-white rounded-2xl border border-[#EEF2F1] p-6 sm:p-8 hover:shadow-lg hover:border-[#003F43]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#EEF2F1] text-[#003F43] text-xs font-bold rounded-full">
                      {facility.type}
                    </span>
                    <span className="text-xs font-bold text-[#FF7900] bg-[#FFF4E8] px-2.5 py-0.5 rounded">
                      {facility.area}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#102D30] tracking-tight">
                    {facility.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#003F43] mt-1">
                    {facility.location} • Team: {facility.team}
                  </p>

                  <p className="mt-4 text-sm text-[#4B6365] leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#EEF2F1] space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#003F43]">
                      Operational Capabilities
                    </h4>
                    <ul className="space-y-1.5">
                      {facility.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-xs sm:text-sm text-[#102D30]">
                          <CheckCircle2 className="w-4 h-4 text-[#FF7900] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORKFORCE & HUMAN EXPERTISE */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#EEF2F1] shadow-xl group">
                <Image
                  src="/images/team.webp"
                  alt="CMS Group Operations and Logistics Team"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="p-4 bg-[#003236] text-white">
                  <span className="text-xs font-bold text-[#FF7900] uppercase tracking-wider block">
                    OPERATIONAL RIGOR
                  </span>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Coordinated logistics, quality audits, and institutional customer service.
                  </p>
                </div>
              </div>
            </div>

            {/* Description & Team Specs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold uppercase tracking-wider border border-[#DDE4E3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                <span>HUMAN CAPITAL & GOVERNANCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D30] tracking-tight">
                Specialized Teams Across <span className="text-[#FF7900]">Four Key Disciplines</span>
              </h2>

              <p className="text-base text-[#4B6365] leading-relaxed">
                Beyond physical infrastructure, our operational excellence is powered by 50 dedicated professionals at our Ambawadi flagship operations, complemented by 7 to 10 experienced staff members stationed at each regional branch and stockist unit.
              </p>

              {/* Four Disciplines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1]">
                  <h4 className="text-sm font-extrabold text-[#003F43] flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#FF7900]" />
                    <span>Logistics & Dispatch</span>
                  </h4>
                  <p className="text-xs text-[#4B6365] mt-1.5 leading-relaxed">
                    Orchestrating route timing, carrier coordination, transit packaging, and rapid pan-India order delivery.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1]">
                  <h4 className="text-sm font-extrabold text-[#003F43] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FF7900]" />
                    <span>Compliance & QA</span>
                  </h4>
                  <p className="text-xs text-[#4B6365] mt-1.5 leading-relaxed">
                    Executing statutory licensing filings, batch verification protocols, and storage temperature audits.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1]">
                  <h4 className="text-sm font-extrabold text-[#003F43] flex items-center gap-2">
                    <Warehouse className="w-4 h-4 text-[#FF7900]" />
                    <span>Warehouse Operations</span>
                  </h4>
                  <p className="text-xs text-[#4B6365] mt-1.5 leading-relaxed">
                    Systematic intake, barcode scanning, lot segregation, FIFO/FEFO stock rotation, and order picking.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1]">
                  <h4 className="text-sm font-extrabold text-[#003F43] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FF7900]" />
                    <span>Client Relations</span>
                  </h4>
                  <p className="text-xs text-[#4B6365] mt-1.5 leading-relaxed">
                    Providing dedicated commercial support for hospital accounts, pharmacy retailers, and distributors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY & ENTERPRISE ERP */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="DIGITAL WORKFLOWS"
            title="Enterprise-Grade ERP &"
            highlightText="Supply Chain Systems."
            description="Our integrated digital systems deliver real-time operational visibility, precise lot tracking, and error-free fulfillment across every branch and hub."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {erpCapabilities.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-[#EEF2F1] p-6 shadow-xs hover:border-[#003F43]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#003F43] text-[#FF7900] flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-extrabold text-[#102D30] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#4B6365] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EEF2F1] text-[10px] font-bold text-[#003F43] uppercase tracking-wider">
                  ERP Core Module
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <CTASection
        badge="QUALITY ASSURANCE"
        title="Commitment to Absolute"
        highlightText="Statutory Compliance."
        description="Discover how CMS Group maintains rigorous storage standards, batch tracking, and direct authorized sourcing relationships."
        ctaText="View Quality & Compliance"
        ctaHref="/compliance"
      />
    </div>
  );
}
