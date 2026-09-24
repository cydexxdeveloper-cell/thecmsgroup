"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavLinks = [
    { title: "About Us", href: "/about" },
    { title: "Group & Network", href: "/group-companies" },
    { title: "Infrastructure", href: "/infrastructure" },
    { title: "Compliance", href: "/compliance" },
    { title: "Vision", href: "/vision" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#003034] to-[#002225] text-white border-t border-[#003F43] relative overflow-hidden">
      {/* Subtle ambient radial glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#004A50]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Brand Area (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-13 h-13 sm:w-14 sm:h-14 bg-white/10 rounded-2xl p-2 border border-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/brand/cms-group-logo-white.png"
                  alt="CMS Group Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    CMS
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FF7900]">
                    GROUP
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-gray-300 uppercase">
                  A Chain of Medical Stores & Agency
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md font-normal">
              Empowering healthcare through excellence in pharmaceutical wholesale, prime retail, and agency distribution services.
            </p>
          </div>

          {/* Right Navigation Grid (7 cols: 3 columns x 2 rows) */}
          <div className="lg:col-span-7 lg:pl-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-7 sm:gap-y-9">
              {footerNavLinks.map((link) => (
                <div key={link.title} className="flex flex-col items-start">
                  <Link
                    href={link.href}
                    className="text-base sm:text-lg font-medium text-white/90 hover:text-white transition-colors relative py-1 inline-block group"
                  >
                    <span>{link.title}</span>
                    {/* Elegant underline hover matching user mockup */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF7900] group-hover:w-full transition-all duration-300 rounded-full" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal, Copyright & Minimal Certifications Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-gray-400">
            © {currentYear} CMS Group. All rights reserved.
          </p>

          {/* Minimalist Trust Badges matching user mockup */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            {/* ISO Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-gray-300">
              <span className="font-extrabold tracking-wider text-white">ISO</span>
              <span className="text-gray-400 text-[10px]">9001:2015</span>
            </div>

            {/* GDP Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
              <span className="font-semibold text-white">GDP</span>
              <span className="text-gray-400 text-[10px]">Compliant</span>
            </div>

            {/* Verified Partner Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#FF7900]/40 bg-[#FF7900]/10 text-white">
              <div className="w-3.5 h-3.5 rounded-full bg-[#FF7900] text-white flex items-center justify-center">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="font-medium text-[11px]">Verified Healthcare Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
