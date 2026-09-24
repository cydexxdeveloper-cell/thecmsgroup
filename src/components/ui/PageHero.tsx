import React from "react";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

interface PageHeroProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  variant?: "teal" | "light";
  extraContent?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  highlightText,
  description,
  breadcrumbs,
  variant = "teal",
  extraContent,
}: PageHeroProps) {
  const isTeal = variant === "teal";

  return (
    <section
      className={`relative pt-10 pb-16 sm:pb-20 overflow-hidden ${
        isTeal
          ? "bg-[#003F43] text-white"
          : "bg-[#F7F9F8] text-[#102D30] border-b border-[#EEF2F1]"
      }`}
    >
      {/* Background visual motif */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isTeal ? "bg-pharma-dots-dark opacity-30" : "bg-pharma-pattern opacity-60"
        }`}
      />

      <div className="relative w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={breadcrumbs} lightTheme={isTeal} />
        </div>

        <div className="max-w-4xl lg:max-w-5xl">
          {badge && (
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF7900]" />
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  isTeal ? "text-[#FF7900]" : "text-[#003F43]"
                }`}
              >
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
            {title}{" "}
            {highlightText && (
              <span className="text-[#FF7900] inline-block">{highlightText}</span>
            )}
          </h1>

          <p
            className={`mt-5 text-base sm:text-lg leading-relaxed ${
              isTeal ? "text-gray-200" : "text-[#4B6365]"
            }`}
          >
            {description}
          </p>

          {extraContent && <div className="mt-8">{extraContent}</div>}
        </div>
      </div>
    </section>
  );
}
