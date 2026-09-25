import React from "react";
import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/pageSocialMetadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, HeartPulse, Building2, TrendingUp } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadershipCard from "@/components/ui/LeadershipCard";
import ValueCard from "@/components/ui/ValueCard";
import StatsStrip from "@/components/ui/StatsStrip";
import CTASection from "@/components/ui/CTASection";
import JourneyTimeline from "@/components/ui/JourneyTimeline";
import { executiveLeadership, corporateValues } from "@/data/leadership";

export const metadata: Metadata = {
  title: "About CMS Group | Established Pharmaceutical Enterprise Ahmedabad",
  description:
    "Learn about CMS Group's legacy since 1991, leadership team, corporate philosophy, and scale across pharmaceutical retail, wholesale, and distribution.",
  alternates: {
    canonical: "/about",
  },
  ...pageSocialMetadata({
    title: "About CMS Group | Established Pharmaceutical Enterprise Ahmedabad",
    description:
      "Learn about CMS Group's legacy since 1991, leadership team, corporate philosophy, and scale across pharmaceutical retail, wholesale, and distribution.",
    path: "/about",
    image: "/images/pharmacy-store.webp",
    alt: "CMS Group pharmaceutical retail and wholesale legacy in Ahmedabad",
  }),
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About CMS Group" }];

  const philosophies = [
    {
      title: "Uncompromising Quality",
      desc: "Zero tolerance for substandard or compromised formulations. Every item adheres to rigorous regulatory standards and verified batch integrity from the manufacturer to the dispensing counter.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Business Practices",
      desc: "Ethical commercial governance, complete GST compliance, precise lot tracing, and transparent terms that have fostered generational trust with multinational pharmaceutical leaders.",
      icon: Building2,
    },
    {
      title: "Technology-Driven Efficiency",
      desc: "Modern ERP-coordinated logistics, automated stock replenishment, and digital B2B connectivity that slash turnaround times and maintain reliable medicine access across markets.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SeoBreadcrumbs currentName="About CMS Group" path="/about" />

      {/* 1. HERO */}
      <PageHero
        badge="CORPORATE OVERVIEW & LEGACY"
        title="Built on Trust."
        highlightText="Growing Through Innovation."
        description="CMS Group is a legacy-driven pharmaceutical enterprise headquartered in Ahmedabad, Gujarat, operating across premium retail, wholesale, major stockist distribution, and digital healthcare commerce."
        breadcrumbs={breadcrumbs}
        variant="teal"
      />

      {/* 2. OUR SCALE STRIP */}
      <section className="relative -mt-8 w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20 z-10">
        <StatsStrip theme="light" />
      </section>

      {/* 3. OUR STORY & Scale */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold uppercase tracking-wider border border-[#DDE4E3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                <span>OUR STORY & HERITAGE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D30] tracking-tight">
                From a Foundational Pharmacy to a{" "}
                <span className="text-[#FF7900]">₹180+ Crore Corporate Group</span>
              </h2>

              <p className="text-base text-[#4B6365] leading-relaxed">
                CMS Group began its pharmaceutical journey in 1991 with Chandan Medical Stores establishing its foundational prime retail pharmacy outlet in Ellisbridge, Ahmedabad, built on an unwavering commitment to genuine medicine dispensing, patient counseling, and clinical integrity. Over more than three decades, that founding principle has expanded into an integrated healthcare ecosystem.
              </p>

              <p className="text-base text-[#4B6365] leading-relaxed">
                Today, CMS Group encompasses high-volume wholesale operations and high-traffic prime retail pharmacy outlets through Chandan Medical Stores (Ambawadi ₹100 Crore Central Hub & Ellisbridge flagship store), prime stockist entities representing major global pharmaceutical portfolios, specialized healthcare logistics with Veer Pharma (₹30 Crore turnover), and next-generation B2B commerce via MediShah. Explore the <Link href="/chandan-medical-stores" className="font-bold text-[#003F43] underline decoration-[#FF7900] underline-offset-4">Chandan Medical Stores profile</Link>, <Link href="/pharmaceutical-distributors" className="font-bold text-[#003F43] underline decoration-[#FF7900] underline-offset-4">pharmaceutical distribution services</Link> and <Link href="/medishah" className="font-bold text-[#003F43] underline decoration-[#FF7900] underline-offset-4">MediShah</Link>.
              </p>

              {/* Story milestones */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1]">
                  <span className="text-xs font-bold text-[#FF7900] uppercase tracking-wider block">
                    Operating Footprint
                  </span>
                  <span className="text-sm font-extrabold text-[#102D30] mt-1 block">
                    Ahmedabad • Gandhinagar • Mansa
                  </span>
                  <p className="text-xs text-[#4B6365] mt-1">
                    Multi-node facilities orchestrating pan-India distribution
                  </p>
                </div>

                <div className="p-4 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1]">
                  <span className="text-xs font-bold text-[#FF7900] uppercase tracking-wider block">
                    Institutional Alliances
                  </span>
                  <span className="text-sm font-extrabold text-[#102D30] mt-1 block">
                    Authorized Direct Sourcing
                  </span>
                  <p className="text-xs text-[#4B6365] mt-1">
                    Direct CFA channels with leading multinational drugmakers
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#EEF2F1] shadow-xl bg-[#003236]">
                <Image
                  src="/images/pharmacy-store.webp"
                  alt="CMS Group Flagship Pharmacy Store"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-5 bg-white border-t border-[#EEF2F1]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#003F43]">
                    <HeartPulse className="w-4 h-4 text-[#FF7900]" />
                    <span>HEALTH • TRUST • TOGETHER</span>
                  </div>
                  <p className="text-xs text-[#4B6365] mt-1">
                    Our heritage is rooted in clinical dispensing integrity and patient trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3.1 Interactive Journey Timeline */}
          <div className="mt-20 pt-16 border-t border-[#EEF2F1]">
            <JourneyTimeline />
          </div>
        </div>
      </section>

      {/* 4. OUR PHILOSOPHY */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="GUIDING PRINCIPLES"
            title="Our Core Corporate"
            highlightText="Philosophy."
            description="Our operations are guided by three uncompromising pillars that govern every partnership, consignment, and dispensing interaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-[#EEF2F1] p-8 shadow-xs hover:shadow-md hover:border-[#003F43]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-13 h-13 rounded-xl bg-[#003F43] text-white flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#FF7900]" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#102D30] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#4B6365] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#EEF2F1] flex items-center gap-2 text-xs font-bold text-[#003F43]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7900]" />
                    <span>Non-Negotiable Commitment</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR VALUES */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="ETHICAL STANDARDS"
            title="The Six Values Shaping"
            highlightText="Every Transaction."
            description="Preserving the highest ethical, clinical, and commercial standards across our pharmaceutical distribution network."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateValues.map((value, idx) => (
              <ValueCard key={value.title} value={value} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXECUTIVE LEADERSHIP (Verified Details, Monograms, NO Fake Portraits) */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="EXECUTIVE GOVERNANCE"
            title="Group Leadership"
            highlightText="& Management."
            description="Our executive directors drive group strategy, operational rigor, institutional partnerships, and digital distribution across India."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveLeadership.map((leader) => (
              <LeadershipCard key={leader.name} leader={leader} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-2xl border border-[#EEF2F1] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-extrabold text-[#102D30]">
                Have a High-Volume Commercial Proposal or Institutional Requirement?
              </h4>
              <p className="text-xs sm:text-sm text-[#4B6365] mt-0.5">
                Our leadership team welcomes direct discussions with hospital administrators and pharmaceutical manufacturers.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#003F43] hover:bg-[#003236] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shrink-0 transition-colors"
            >
              <span>Connect with Management</span>
              <ArrowRight className="w-4 h-4 text-[#FF7900]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <CTASection
        badge="STRATEGIC EXPANSION"
        title="Discover What Lies Ahead"
        highlightText="for CMS Group."
        description="Explore our vision for carrying & forwarding operations, international pharmaceutical formulation exports, and specialty therapeutic supply."
      />
    </div>
  );
}
