"use client";

import React, { useState } from "react";
import { MessageSquare, X, PhoneCall, ChevronRight } from "lucide-react";
import { executiveLeadership } from "@/data/leadership";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-[#EEF2F1] p-5 w-80 mb-3 animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-[#EEF2F1]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#102D30]">WhatsApp Inquiries</h4>
                <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Direct Leadership Channels
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-700 p-1 rounded-lg"
              aria-label="Close WhatsApp Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-3 space-y-2">
            <p className="text-xs text-[#4B6365] mb-2">
              Select an executive representative to start a direct WhatsApp conversation:
            </p>
            {executiveLeadership.map((leader) => (
              <a
                key={leader.name}
                href={leader.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-[#F7F9F8] hover:bg-[#EEF2F1] rounded-xl border border-[#EEF2F1] transition-colors group"
              >
                <div>
                  <div className="text-xs font-bold text-[#102D30] group-hover:text-[#003F43]">
                    {leader.name}
                  </div>
                  <div className="text-[10px] text-[#4B6365]">{leader.phoneFormatted}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-[#EEF2F1] text-[10px] text-center text-[#4B6365]">
            CMS Group • Ahmedabad, Gujarat, India
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-200"
        aria-label="Open WhatsApp Direct Inquiries"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs font-bold hidden sm:inline">WhatsApp Inquiries</span>
      </button>
    </div>
  );
}
