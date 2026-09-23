import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  TrendingUp,
  Cpu,
  Store,
  Layers,
  Globe2,
  Warehouse,
  Users,
  CheckCircle2,
} from "lucide-react";
import StatsStrip from "@/components/ui/StatsStrip";
import SectionHeading from "@/components/ui/SectionHeading";
import CompanyCard from "@/components/ui/CompanyCard";
import IndiaDistributionMap from "@/components/ui/IndiaDistributionMap";
import CTASection from "@/components/ui/CTASection";
import { groupCompanies } from "@/data/companies";

export default function HomePage() {
  const introPillars = [
    {
      title: "Retail",
      icon: Store,
      desc: "Prime metropolitan pharmacy stores providing prescription medication, patient counseling, and comprehensive OTC offerings.",
    },
    {
      title: "Wholesale",
      icon: Building2,
      desc: "High-volume pan-India pharmaceutical supply network serving retail pharmacies, clinics, and institutional healthcare accounts.",
    },
    {
      title: "Stockist Distribution",
      icon: Layers,
      desc: "Decades-established stockist operations representing premier multinational and domestic formulation manufacturers.",
    },
    {
      title: "Digital B2B Commerce",
      icon: Globe2,
      desc: "Next-generation B2B healthcare commerce via MediShah, driving supply transparency, stock visibility, and digital connectivity.",
    },
  ];

  const whyCards = [
    {
      title: "100% Authentic Sourcing",
      icon: ShieldCheck,
      badge: "Direct CFA Channels",
      desc: "Direct-from-manufacturer procurement agreements eliminate gray market intermediaries and ensure complete formulation authenticity.",
    },
    {
      title: "Pan-India Distribution",
      icon: TrendingUp,
      badge: "National Reach",
      desc: "Seamless fulfillment corridors bridging manufacturing hubs with institutional buyers, hospitals, and pharmacies across Indian states.",
    },
    {
      title: "Decades of Industry Experience",
      icon: Building2,
      badge: "Legacy Since 1991",
      desc: "Over three decades of continuous operating heritage, deep market trust, and institutional relationships spanning generations.",
    },
    {
      title: "Technology-Driven Operations",
      icon: Cpu,
      badge: "Enterprise ERP",
      desc: "End-to-end computerized inventory tracking, lot-level batch traceability, automated reordering, and dispatch visibility.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION (Split Layout) */}
      <section className="relative bg-white pt-10 pb-16 lg:py-20 overflow-hidden border-b border-[#EEF2F1]">
        <div className="absolute inset-0 bg-pharma-pattern opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Subtle Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-extrabold uppercase tracking-wider border border-[#DDE4E3]">
                <span className="w-2 h-2 rounded-full bg-[#FF7900]" />
                <span>PHARMACEUTICAL RETAIL • WHOLESALE • DISTRIBUTION</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#102D30] tracking-tight leading-[1.12]">
                Powering Healthcare{" "}
                <span className="text-[#FF7900] block sm:inline">Across India.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#4B6365] max-w-2xl leading-relaxed">
                CMS Group connects leading pharmaceutical manufacturers with retailers, healthcare institutions and businesses through a powerful retail, wholesale, stockist and digital distribution ecosystem.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#003F43] hover:bg-[#003236] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>Explore CMS Group</span>
                  <ArrowRight className="w-4 h-4 text-[#FF7900]" />
                </Link>
                <Link
                  href="/distribution-network"
                  className="inline-flex items-center gap-2 bg-[#F7F9F8] hover:bg-[#EEF2F1] text-[#003F43] border border-[#DDE4E3] text-sm sm:text-base font-bold px-7 py-3.5 rounded-xl transition-all duration-200"
                >
                  <span>Our Network</span>
                </Link>
              </div>

              {/* Highlights below buttons */}
              <div className="pt-4 border-t border-[#EEF2F1] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-[#102D30]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003F43]" />
                  <span>₹180+ Cr Combined Turnover</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003F43]" />
                  <span>100% Authorized Sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003F43]" />
                  <span>30+ Years Established</span>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#EEF2F1] shadow-xl bg-[#003236] group">
                <Image
                  src="/images/distribution.webp"
                  alt="CMS Group Pharmaceutical Distribution Fleet"
                  width={600}
                  height={450}
                  priority
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />

                {/* Ambient Card Floating on image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#EEF2F1] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003F43] text-white flex items-center justify-center font-bold text-sm">
                      CMS
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#102D30] block">
                        Direct-to-Pharmacy Logistics
                      </span>
                      <span className="text-[10px] text-[#4B6365]">
                        Multi-temperature pan-India dispatch
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#FF7900] bg-[#FFF4E8] px-2.5 py-1 rounded-md">
                    Active Supply
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATISTICS STRIP */}
      <section className="relative -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <StatsStrip theme="teal" />
      </section>

      {/* 3. INTRODUCTION: ONE GROUP. A COMPLETE ECOSYSTEM */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GROUP OVERVIEW"
            title="One Group."
            highlightText="A Complete Pharmaceutical Ecosystem."
            description="CMS Group is a legacy-driven pharmaceutical group headquartered in Ahmedabad, Gujarat, operating across premium retail, wholesale, major stockist distribution and digital B2B healthcare commerce."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {introPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl border border-[#EEF2F1] p-6 hover:shadow-md hover:border-[#003F43]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EEF2F1] text-[#003F43] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#102D30] tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#4B6365] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#EEF2F1] flex items-center gap-1.5 text-xs font-semibold text-[#003F43]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                    <span>Core Operating Wing</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CMS GROUP */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INSTITUTIONAL RELIABILITY"
            title="Why Leading Healthcare Partners"
            highlightText="Choose CMS Group."
            description="Our foundational strengths combine direct manufacturer relationships, strict cold-chain compliance, decades of market trust, and high-throughput technological workflows."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-[#F7F9F8] rounded-2xl border border-[#EEF2F1] p-6 sm:p-7 hover:bg-white hover:shadow-lg hover:border-[#003F43]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#003F43] text-white flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#FF7900]" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7900] bg-[#FFF4E8] px-2 py-0.5 rounded">
                        {card.badge}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#102D30] tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#4B6365] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#EEF2F1] text-[11px] font-semibold text-[#003F43]">
                    Strict Quality Governance
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. GROUP COMPANIES PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold uppercase tracking-wider border border-[#DDE4E3] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                <span>OPERATING ENTITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D30] tracking-tight">
                Our Specialized <span className="text-[#FF7900]">Group Companies</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#4B6365] max-w-2xl">
                A strategically diversified collective of pharmaceutical entities powering retail, wholesale, stockist distribution, and digital trade.
              </p>
            </div>
            <Link
              href="/group-companies"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#003F43] hover:text-[#FF7900] transition-colors shrink-0"
            >
              <span>Explore Group Companies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {groupCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} isDetailed={false} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. NETWORK PREVIEW (India Distribution Map Component) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GEOGRAPHIC FOOTPRINT"
            title="Pan-India Distribution Network"
            highlightText="Anchored in Gujarat."
            description="Bridging regional stockist hubs in Ahmedabad, Gandhinagar, and Mansa with high-velocity pan-India dispatch capabilities."
          />
          <IndiaDistributionMap />
        </div>
      </section>

      {/* 7. INFRASTRUCTURE PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#EEF2F1] shadow-xl group">
                <Image
                  src="/images/warehouse.webp"
                  alt="CMS Group Flagship Warehouse Facility"
                  width={650}
                  height={450}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#003F43]/90 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold backdrop-blur-xs">
                  Ambawadi Central Operations Hub
                </div>
              </div>
            </div>

            {/* Infrastructure metrics (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold uppercase tracking-wider border border-[#DDE4E3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                <span>PHARMACEUTICAL LOGISTICS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D30] tracking-tight">
                Infrastructure Designed for <span className="text-[#FF7900]">Healthcare Scale</span>
              </h2>

              <p className="text-sm sm:text-base text-[#4B6365] leading-relaxed">
                Our logistics network pairs a 5,000 sq. ft. central fulfillment center with strategic branch units, supported by specialized teams in logistics, compliance, and institutional client service.
              </p>

              {/* Metric grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-[#EEF2F1] shadow-xs">
                  <Warehouse className="w-5 h-5 text-[#003F43] mb-2" />
                  <div className="text-2xl font-extrabold text-[#FF7900]">5,000 SQ. FT.</div>
                  <div className="text-xs font-bold text-[#102D30] mt-1">Flagship Ambawadi Hub</div>
                  <p className="text-[11px] text-[#4B6365] mt-1">Central fulfillment & cold-chain holding</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#EEF2F1] shadow-xs">
                  <Warehouse className="w-5 h-5 text-[#003F43] mb-2" />
                  <div className="text-2xl font-extrabold text-[#FF7900]">800–1,500 SQ. FT.</div>
                  <div className="text-xs font-bold text-[#102D30] mt-1">Branch Facilities</div>
                  <p className="text-[11px] text-[#4B6365] mt-1">Stockist units in Ahmedabad, Gandhinagar & Mansa</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#EEF2F1] shadow-xs">
                  <Users className="w-5 h-5 text-[#003F43] mb-2" />
                  <div className="text-2xl font-extrabold text-[#FF7900]">50</div>
                  <div className="text-xs font-bold text-[#102D30] mt-1">Professionals at Flagship</div>
                  <p className="text-[11px] text-[#4B6365] mt-1">Full-time inventory & dispatch specialists</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#EEF2F1] shadow-xs">
                  <Users className="w-5 h-5 text-[#003F43] mb-2" />
                  <div className="text-2xl font-extrabold text-[#FF7900]">7–10</div>
                  <div className="text-xs font-bold text-[#102D30] mt-1">Personnel per Branch</div>
                  <p className="text-[11px] text-[#4B6365] mt-1">Skilled on-site stockist operations team</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/infrastructure"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#003F43] hover:text-[#FF7900] transition-colors"
                >
                  <span>Learn more about our logistics & ERP infrastructure</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. VISION CTA (Dark Teal Section) */}
      <CTASection />
    </div>
  );
}
