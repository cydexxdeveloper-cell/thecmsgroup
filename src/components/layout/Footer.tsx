"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Building2, ShieldCheck, ArrowUpRight } from "lucide-react";
import { quickLinks } from "@/data/navigation";
import { executiveLeadership } from "@/data/leadership";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003236] text-white border-t border-[#003F43] relative overflow-hidden">
      {/* Subtle background ambient graphic */}
      <div className="absolute inset-0 bg-pharma-dots-dark pointer-events-none opacity-40" />

      {/* Top Footer Strip */}
      <div className="relative border-b border-[#003F43]/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/10 rounded-xl p-2 border border-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <Image
                src="/brand/cms-group-logo-white.png"
                alt="CMS Group Logo White"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">
                CMS <span className="text-[#FF7900]">GROUP</span>
              </h3>
              <p className="text-xs text-[#EEF2F1]/80 font-medium tracking-wide uppercase">
                A Chain of Medical Stores • Established 1991
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Building2 className="w-4 h-4 text-[#FF7900]" />
              <span>₹180+ Cr Combined Group Turnover</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#FF7900]" />
              <span>100% Authorized Direct Sourcing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: About Group (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7900]" />
              About CMS Group
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Building a trusted pharmaceutical ecosystem through retail, wholesale, distribution, and technology. Connecting premier pharmaceutical manufacturers with healthcare providers across India.
            </p>
            <div className="pt-2 flex items-start gap-3 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-[#FF7900] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Corporate Headquarters</p>
                <p className="text-gray-300 text-xs">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7900]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <span className="text-[#FF7900] text-xs">›</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Leadership Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7900]" />
              Leadership Contacts
            </h4>
            <p className="text-xs text-gray-300">
              Direct institutional and wholesale procurement liaison:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {executiveLeadership.map((leader) => (
                <div
                  key={leader.name}
                  className="bg-[#003F43]/40 border border-[#003F43] rounded-lg p-3 hover:border-[#FF7900]/40 transition-colors flex items-center justify-between"
                >
                  <div>
                    <h5 className="text-sm font-semibold text-white">{leader.name}</h5>
                    <p className="text-xs text-gray-300">{leader.role.split("&")[0]}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={leader.telUrl}
                      className="p-2 bg-white/10 hover:bg-[#FF7900] rounded text-white transition-colors"
                      title={`Call ${leader.name}`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={leader.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="relative border-t border-[#003F43] bg-[#002629] py-5 px-4 sm:px-6 lg:px-8 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © {currentYear} CMS Group. All rights reserved. • A Chain of Medical Stores
          </p>
          <p className="text-[11px] text-gray-400">
            Headquartered in Ahmedabad, Gujarat • Pharmaceutical Retail, Wholesale & Stockist Distribution
          </p>
        </div>
      </div>
    </footer>
  );
}
