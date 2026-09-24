import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building, Globe, Pill, CheckCircle2, Sparkles } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { visionInitiatives } from "@/data/vision";

export const metadata: Metadata = {
  title: "Future Vision & Expansion | CMS Group Healthcare Initiatives",
  description:
    "CMS Group's strategic expansion roadmap: C&F operations, pharmaceutical formulation exports, and specialized generic & specialty therapeutics distribution.",
  alternates: {
    canonical: "/vision",
  },
};

export default function VisionPage() {
  const breadcrumbs = [{ label: "Future Vision" }];

  const initiativeIcons: Record<string, React.ElementType> = {
    "01": Building,
    "02": Globe,
    "03": Pill,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <PageHero
        badge="STRATEGIC ROADMAP"
        title="Expanding the Future"
        highlightText="of Healthcare Distribution."
        description="Leveraging three decades of distribution trust and ₹180+ Crore scale to build future C&F warehousing depots, international formulation export channels, and specialized therapeutic delivery."
        breadcrumbs={breadcrumbs}
        variant="teal"
      />

      {/* 2. EXPANSION HORIZON OVERVIEW */}
      <section className="bg-white py-12 border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="bg-[#FFF4E8] border border-[#FF7900]/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#FF7900] uppercase tracking-wider">
                Future Growth Strategy Notice
              </span>
              <h3 className="text-xl font-extrabold text-[#102D30]">
                Proactive Infrastructure Investments Under Active Development
              </h3>
              <p className="text-xs sm:text-sm text-[#4B6365] max-w-2xl leading-relaxed">
                The initiatives detailed below represent future growth and strategic development projects actively planned and underway at CMS Group, advancing our core pharmaceutical wholesale capabilities.
              </p>
            </div>
            <div className="px-4 py-2 bg-[#003F43] text-white text-xs font-bold rounded-xl shadow-xs shrink-0">
              Future Expansion Initiatives
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE MAJOR FUTURE PROJECTS */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20 space-y-16">
          <SectionHeading
            badge="GROWTH VECTORS"
            title="Three Strategic Pillars"
            highlightText="Shaping Our Tomorrow."
            description="Clear developmental roadmaps structured around expanding infrastructure, international trade compliance, and clinical therapeutic access."
          />

          <div className="space-y-12">
            {visionInitiatives.map((item) => {
              const Icon = initiativeIcons[item.num] || Building;

              return (
                <div
                  key={item.num}
                  className="bg-white rounded-3xl border border-[#EEF2F1] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Header Col */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-extrabold text-[#FF7900] tracking-tight">
                          {item.num}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-[#003F43] text-white flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#FF7900]" />
                        </div>
                      </div>

                      <span className="inline-block px-3 py-1 bg-[#EEF2F1] text-[#003F43] text-xs font-bold rounded-full">
                        {item.status}
                      </span>

                      <h3 className="text-2xl font-extrabold text-[#102D30] tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#FF7900]">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Content Col */}
                    <div className="lg:col-span-8 space-y-6 lg:pl-6 lg:border-l lg:border-[#EEF2F1]">
                      <p className="text-base text-[#4B6365] leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#003F43]">
                          Strategic Milestones & Focus Areas
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {item.strategicGoals.map((goal) => (
                            <div
                              key={goal}
                              className="p-3.5 bg-[#F7F9F8] rounded-xl border border-[#EEF2F1] flex items-start gap-2.5 text-xs text-[#102D30]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#003F43] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{goal}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. VISUAL / CLOSING STATEMENT */}
      <section className="py-20 sm:py-28 bg-[#003236] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pharma-dots-dark opacity-30 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#FF7900] text-xs font-bold uppercase tracking-wider border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE NEXT CHAPTER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            From a Strong Legacy to a{" "}
            <span className="text-[#FF7900] block sm:inline">Larger Healthcare Future.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            With foundations built in 1991, ₹180+ Crore consolidated turnover, and pan-India reach, CMS Group is positioned to accelerate modern pharmaceutical distribution and bring vital treatments closer to millions.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF7900] hover:bg-[#F68A1E] text-white text-base font-bold px-8 py-3.5 rounded-xl shadow-lg transition-colors"
            >
              <span>Partner With CMS Group</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/group-companies"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-base font-bold px-8 py-3.5 rounded-xl transition-colors border border-white/20"
            >
              <span>Explore Group Entities</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
