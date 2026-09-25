import React from "react";
import Link from "next/link";
import { Building2, Calendar, MapPin, TrendingUp, ExternalLink, CheckCircle2 } from "lucide-react";
import { GroupCompany } from "@/data/companies";

interface CompanyCardProps {
  company: GroupCompany;
  isDetailed?: boolean;
}

export default function CompanyCard({ company, isDetailed = false }: CompanyCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#EEF2F1] p-6 sm:p-8 hover:shadow-lg hover:border-[#003F43]/30 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 bg-[#EEF2F1] text-[#003F43] text-xs font-bold rounded-full">
            {company.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-[#4B6365] font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#FF7900]" />
            <span>Est. {company.established}</span>
          </div>
        </div>

        {/* Company Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#102D30] tracking-tight group-hover:text-[#003F43] transition-colors">
          {company.name}
        </h3>

        {/* Location & Operations */}
        <div className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-[#4B6365]">
          {company.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF7900] shrink-0" />
              <span className="font-semibold text-[#102D30]">{company.location}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-[#003F43] shrink-0" />
            <span>{company.operations}</span>
          </div>
        </div>

        {/* Scale Badge if available */}
        {company.scale && (
          <div className="mt-4 inline-flex items-center gap-2 bg-[#FFF4E8] text-[#FF7900] border border-[#FF7900]/20 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold">
            <TrendingUp className="w-4 h-4" />
            <span>Scale: {company.scale}</span>
          </div>
        )}

        {/* Description */}
        <p className="mt-5 text-sm text-[#4B6365] leading-relaxed">
          {company.description}
        </p>

        {/* Highlights */}
        {company.highlights && company.highlights.length > 0 && (
          <div className="mt-6 pt-5 border-t border-[#EEF2F1] space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#003F43]">
              Operational Focus
            </h4>
            <ul className="space-y-2">
              {company.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-xs sm:text-sm text-[#102D30]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7900] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Brand Portfolio if applicable */}
        {isDetailed && company.brandPortfolio && company.brandPortfolio.length > 0 && (
          <div className="mt-6 pt-5 border-t border-[#EEF2F1]">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#003F43]">
                Brand Portfolio Handled
              </h4>
              <span className="text-[10px] text-[#4B6365] italic">Commercial Portfolio</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {company.brandPortfolio.map((brand) => (
                <span
                  key={brand}
                  className="px-2.5 py-1 bg-[#F7F9F8] border border-[#EEF2F1] text-[#102D30] rounded-md text-xs font-medium"
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="mt-2.5 text-[11px] text-[#4B6365] leading-tight">
              *Brands listed reflect active product distribution and stockist portfolio channels.
            </p>
          </div>
        )}
      </div>

      {/* Footer / Website link */}
      <div className="mt-8 pt-5 border-t border-[#EEF2F1] flex items-center justify-between">
        {company.website ? (
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#003F43] hover:text-[#FF7900] transition-colors"
          >
            <span>Visit {company.website.replace("https://", "")}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-xs text-[#4B6365] font-medium">
            CMS Group Strategic Operating Entity
          </span>
        )}
        <div className="flex items-center gap-4">
          {company.profileHref && (
            <Link
              href={company.profileHref}
              className="text-xs font-semibold text-[#003F43] hover:text-[#FF7900] transition-colors"
            >
              View profile →
            </Link>
          )}
          <Link
            href="/contact"
            className="text-xs font-semibold text-[#4B6365] hover:text-[#003F43] transition-colors"
          >
            Inquire →
          </Link>
        </div>
      </div>
    </div>
  );
}
