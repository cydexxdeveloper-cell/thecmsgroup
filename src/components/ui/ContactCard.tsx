import React from "react";
import { Phone, MessageSquare, MapPin, Building, ShieldCheck } from "lucide-react";
import { Leader } from "@/data/leadership";

interface ContactCardProps {
  leader: Leader;
}

export default function ContactCard({ leader }: ContactCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#EEF2F1] p-6 sm:p-7 hover:shadow-lg hover:border-[#003F43]/30 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-13 h-13 rounded-xl bg-[#003F43] text-white flex items-center justify-center font-extrabold text-xl tracking-tight shadow-sm shrink-0">
            <span className="text-[#FF7900]">{leader.initials.charAt(0)}</span>
            <span>{leader.initials.charAt(1)}</span>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#102D30] tracking-tight">
              {leader.name}
            </h3>
            <p className="text-xs font-semibold text-[#FF7900]">
              {leader.role}
            </p>
          </div>
        </div>

        <div className="space-y-1.5 text-xs text-[#4B6365] mb-5">
          <p className="font-medium text-[#102D30] flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-[#003F43]" />
            <span>CMS Group Executive Operations</span>
          </p>
          <p className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FF7900]" />
            <span>Ahmedabad, Gujarat, India</span>
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-[#EEF2F1] space-y-2.5">
        <div className="text-xs text-[#4B6365] flex items-center justify-between">
          <span className="font-semibold">Phone:</span>
          <span className="font-bold text-[#102D30]">{leader.phoneFormatted}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={leader.telUrl}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#EEF2F1] hover:bg-[#DDE4E3] text-[#003F43] rounded-lg text-xs font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#003F43]" />
            <span>Call</span>
          </a>
          <a
            href={leader.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
