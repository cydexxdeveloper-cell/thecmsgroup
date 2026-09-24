"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { journeyMilestones, Milestone } from "@/data/timeline";

export default function JourneyTimeline() {
  const [selectedYear, setSelectedYear] = useState<string>(journeyMilestones[0].year);

  const activeMilestone: Milestone =
    journeyMilestones.find((m) => m.year === selectedYear) || journeyMilestones[0];

  const activeIndex = journeyMilestones.findIndex((m) => m.year === selectedYear);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setSelectedYear(journeyMilestones[activeIndex - 1].year);
    }
  };

  const handleNext = () => {
    if (activeIndex < journeyMilestones.length - 1) {
      setSelectedYear(journeyMilestones[activeIndex + 1].year);
    }
  };

  return (
    <div className="w-full">
      {/* Title & Subtitle */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003F43] tracking-tight">
          Our Journey Through The Years
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#4B6365]">
          Click on any year below to view milestones.
        </p>
      </div>

      {/* Horizontal Timeline Bar */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Scrollable container for mobile responsiveness */}
        <div className="overflow-x-auto pb-4 pt-2 no-scrollbar">
          <div className="relative flex items-center justify-between min-w-[620px] sm:min-w-full px-6 py-4">
            {/* Background Connecting Line */}
            <div
              className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-1 bg-[#D1E7DD] z-0"
              aria-hidden="true"
            />

            {/* Year Nodes */}
            {journeyMilestones.map((item) => {
              const isSelected = item.year === selectedYear;

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setSelectedYear(item.year)}
                  className={`relative z-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#003F43]/30 ${
                    isSelected
                      ? "w-14 h-14 sm:w-16 sm:h-16 bg-[#003F43] text-white shadow-xl ring-4 ring-[#003F43]/20 scale-110"
                      : "w-12 h-12 sm:w-14 sm:h-14 bg-white text-[#003F43] border-2 border-[#003F43] hover:bg-[#EEF2F1] hover:scale-105 shadow-sm"
                  }`}
                  aria-label={`View milestone for year ${item.year}`}
                  aria-pressed={isSelected}
                >
                  <span className="font-extrabold text-xs sm:text-sm tracking-tight">
                    {item.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Detail Card (matching screenshot format) */}
        <div
          key={activeMilestone.year}
          className="mt-8 bg-[#F7F9F8] border-l-4 border-[#003F43] rounded-r-2xl p-6 sm:p-8 lg:p-10 shadow-xs animate-fade-in transition-all"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
              <span>
                {activeMilestone.year} • {activeMilestone.tag}
              </span>
            </div>

            {/* Next / Prev Quick Switchers */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4B6365]">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#DDE4E3] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#EEF2F1] transition-colors"
                aria-label="Previous milestone"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <span>
                {activeIndex + 1} of {journeyMilestones.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeIndex === journeyMilestones.length - 1}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#DDE4E3] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#EEF2F1] transition-colors"
                aria-label="Next milestone"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-[#003F43] tracking-tight">
            {activeMilestone.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-[#4B6365] leading-relaxed">
            {activeMilestone.description}
          </p>

          {activeMilestone.highlights && activeMilestone.highlights.length > 0 && (
            <div className="mt-5 pt-4 border-t border-[#DDE4E3] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeMilestone.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 text-xs sm:text-sm text-[#102D30]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7900] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
