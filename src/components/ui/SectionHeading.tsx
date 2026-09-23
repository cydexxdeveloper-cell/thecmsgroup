import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionHeading({
  badge,
  title,
  highlightText,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div className={`space-y-3 mb-12 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            isDark
              ? "bg-white/10 text-[#FF7900] border border-white/10"
              : "bg-[#EEF2F1] text-[#003F43] border border-[#DDE4E3]"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          isDark ? "text-white" : "text-[#102D30]"
        }`}
      >
        {title}{" "}
        {highlightText && <span className="text-[#FF7900]">{highlightText}</span>}
      </h2>

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-gray-300" : "text-[#4B6365]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
