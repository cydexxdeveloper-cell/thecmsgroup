import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ThermometerSnowflake,
  FileCheck,
  Receipt,
  CheckCircle2,
  Building2,
  AlertTriangle,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { compliancePillars } from "@/data/compliance";

export const metadata: Metadata = {
  title: "Quality & Compliance | CMS Group Pharmaceutical Governance",
  description:
    "CMS Group operates under strict State Food and Drug Control Administration wholesale & retail drug licensing, storage standards, multi-tier batch verification, and direct manufacturer sourcing.",
  alternates: {
    canonical: "/compliance",
  },
};

export default function CompliancePage() {
  const breadcrumbs = [{ label: "Compliance & Quality" }];

  const pillarIcons: Record<string, React.ElementType> = {
    licensing: FileCheck,
    storage: ThermometerSnowflake,
    traceability: ShieldCheck,
    "gst-tax": Receipt,
    "authentic-sourcing": ShieldCheck,
    "manufacturer-alliances": Building2,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <PageHero
        badge="REGULATORY GOVERNANCE"
        title="Quality, Compliance"
        highlightText="& Trust at Every Step."
        description="Operating under rigorous statutory drug licensing frameworks, specialized pharmaceutical climate controls, multi-tier batch traceability, and direct manufacturer supply agreements."
        breadcrumbs={breadcrumbs}
        variant="teal"
      />

      {/* 2. STATUTORY STANDARDS SUMMARY */}
      <section className="bg-white py-12 border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F7F9F8] border border-[#EEF2F1] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#FF7900] uppercase tracking-wider">
                FDCA Drug Control Compliance
              </span>
              <h3 className="text-xl font-extrabold text-[#102D30]">
                State Food & Drug Control Administration Adherence
              </h3>
              <p className="text-xs sm:text-sm text-[#4B6365] max-w-2xl leading-relaxed">
                CMS Group entities operate strictly in compliance with applicable State Food and Drug Control Administration wholesale and retail drug licensing statutory requirements.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-2.5 bg-[#003F43] text-white text-xs font-bold rounded-xl shadow-xs">
                Statutory Licensed
              </div>
              <div className="px-4 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-xs">
                100% Tax Compliant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPLIANCE PILLARS GRID */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GOVERNANCE FRAMEWORK"
            title="Six Rigorous Pillars of"
            highlightText="Operational Compliance."
            description="Our institutional compliance protocols safeguard every therapeutic consignment from inbound manufacturer receipt through to final retail and hospital delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {compliancePillars.map((pillar) => {
              const Icon = pillarIcons[pillar.id] || ShieldCheck;
              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-2xl border border-[#EEF2F1] p-6 sm:p-8 hover:shadow-lg hover:border-[#003F43]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#EEF2F1] text-[#003F43] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7900] bg-[#FFF4E8] px-2.5 py-1 rounded">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-[#102D30] tracking-tight">
                      {pillar.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#4B6365] leading-relaxed">
                      {pillar.summary}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#EEF2F1] space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#003F43]">
                        Protocols & Controls
                      </h4>
                      <ul className="space-y-1.5">
                        {pillar.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-xs text-[#102D30] leading-tight"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#003F43] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SOURCING INTEGRITY & ANTI-COUNTERFEIT STANDARDS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold uppercase tracking-wider border border-[#DDE4E3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                <span>AUTHENTICITY GUARANTEE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D30] tracking-tight">
                Zero Tolerance for Counterfeits.{" "}
                <span className="text-[#FF7900]">100% Authorized Channels.</span>
              </h2>

              <p className="text-base text-[#4B6365] leading-relaxed">
                CMS Group upholds an uncompromising policy against counterfeit or substandard pharmaceutical formulations. All products distributed across our retail, wholesale, and stockist channels are procured directly from pharmaceutical manufacturers and their authorized CFA/C&F networks.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#003F43] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#102D30]">Direct Sourcing Exclusivity</h4>
                    <p className="text-xs text-[#4B6365] mt-0.5">
                      We never engage unverified middlemen, secondary traders, or unauthorized open market channels.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#003F43] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#102D30]">Batch Integrity Verification</h4>
                    <p className="text-xs text-[#4B6365] mt-0.5">
                      Inbound stock is cross-referenced with manufacturer batch test reports and digitally locked in ERP.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#003F43] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#102D30]">Full GST & E-Way Bill Traceability</h4>
                    <p className="text-xs text-[#4B6365] mt-0.5">
                      Every transaction is supported by computerized tax invoicing and transparent statutory records.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#EEF2F1] shadow-xl group">
                <Image
                  src="/images/medicines.webp"
                  alt="Quality Tested Genuine Pharmaceutical Formulations"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="p-5 bg-[#003236] text-white">
                  <span className="text-xs font-bold text-[#FF7900] uppercase tracking-wider block">
                    PATIENT SAFETY FIRST
                  </span>
                  <p className="text-xs text-gray-300 mt-1">
                    Providing hospitals and retail pharmacies with verified genuine therapeutic supplies since 1991.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <CTASection
        badge="STRATEGIC EXPANSION"
        title="From Rigorous Compliance to"
        highlightText="Global Export Standards."
        description="Learn how CMS Group is leveraging its compliance heritage to build future pharmaceutical export and C&F operations."
        ctaText="Explore Future Vision"
        ctaHref="/vision"
      />
    </div>
  );
}
