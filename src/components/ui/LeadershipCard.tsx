import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import { Leader } from "@/data/leadership";

interface LeadershipCardProps {
  leader: Leader;
}

export default function LeadershipCard({ leader }: LeadershipCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#EEF2F1] p-6 sm:p-8 hover:shadow-lg hover:border-[#003F43]/30 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Monogram / Abstract Executive Header (No Fake Portraits!) */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003F43] to-[#003236] text-white flex items-center justify-center font-extrabold text-2xl tracking-tight shadow-sm border border-[#003F43]/20 shrink-0 group-hover:scale-105 transition-transform">
            <span className="text-[#FF7900]">{leader.initials.charAt(0)}</span>
            <span>{leader.initials.charAt(1)}</span>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#102D30] tracking-tight group-hover:text-[#003F43] transition-colors">
              {leader.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#FF7900] mt-0.5">
              {leader.role}
            </p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="space-y-2.5 pt-4 border-t border-[#EEF2F1]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#003F43]">
            Key Leadership Areas
          </h4>
          <ul className="space-y-2">
            {leader.responsibilities.map((resp) => (
              <li key={resp} className="flex items-start gap-2 text-xs sm:text-sm text-[#4B6365]">
                <CheckCircle2 className="w-4 h-4 text-[#003F43] shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Direct Contact Bar */}
      {leader.phoneFormatted && leader.telUrl && leader.whatsappUrl ? (
        <div className="mt-8 pt-5 border-t border-[#EEF2F1] space-y-3">
          <div className="flex items-center justify-between text-xs text-[#4B6365]">
            <span className="font-semibold uppercase tracking-wider">Direct Liaison:</span>
            <span className="font-bold text-[#102D30]">{leader.phoneFormatted}</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={leader.telUrl}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#EEF2F1] hover:bg-[#DDE4E3] text-[#003F43] rounded-lg text-xs font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#003F43]" />
              <span>Call Now</span>
            </a>

            <a
              href={leader.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-8 pt-5 border-t border-[#EEF2F1] space-y-3">
          <div className="flex items-center justify-between text-xs text-[#4B6365]">
            <span className="font-semibold uppercase tracking-wider">Direct Liaison:</span>
            <span className="font-bold text-[#003F43]">Corporate Inquiries</span>
          </div>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-[#EEF2F1] hover:bg-[#003F43] text-[#003F43] hover:text-white rounded-lg text-xs font-bold transition-colors group/btn"
          >
            <span>Reach via Executive Desk</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF7900] group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
}
