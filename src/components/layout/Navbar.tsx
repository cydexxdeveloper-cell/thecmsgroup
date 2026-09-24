"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { navigationLinks } from "@/data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EEF2F1]"
            : "bg-white border-b border-[#EEF2F1]"
        }`}
      >
        {/* Main Navigation Bar */}
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#003F43] rounded-lg p-1 shrink-0"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brand/cms-group-logo.png"
                  alt="CMS GROUP Logo - A Chain of Medical Stores & Agency"
                  width={56}
                  height={56}
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#003F43]">
                    CMS
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#FF7900]">
                    GROUP
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#4B6365] uppercase">
                  A Chain of Medical Stores & Agency
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Cluster: Links + Divider + Primary CTA */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8">
              {/* Desktop Nav Links */}
              <nav className="flex items-center gap-1 xl:gap-2">
                {navigationLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href === "/group-companies" &&
                      (pathname.startsWith("/group-companies") ||
                        pathname.startsWith("/distribution-network") ||
                        pathname.startsWith("/network")));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 xl:px-3.5 py-2 text-sm xl:text-[15px] font-semibold rounded-lg transition-all duration-200 relative ${
                        isActive
                          ? "text-[#003F43] bg-[#EEF2F1] font-bold"
                          : "text-[#102D30] hover:text-[#003F43] hover:bg-[#F7F9F8]"
                      }`}
                    >
                      {link.title}
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FF7900] rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Subtle Elegant Divider */}
              <div className="h-6 w-px bg-[#DDE4E3]" aria-hidden="true" />

              {/* Primary Header CTA Button: Contact CMS Group */}
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm shadow-xs transition-all duration-200 border ${
                  pathname === "/contact"
                    ? "bg-[#FF7900] text-white border-[#FF7900] shadow-md shadow-[#FF7900]/20"
                    : "bg-[#003F43] hover:bg-[#002E31] text-white border-[#003F43] hover:border-[#FF7900]/50 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <span>Contact CMS Group</span>
                <ChevronRight className="w-4 h-4 text-[#FF7900]" />
              </Link>
            </div>

            {/* Mobile / Tablet Menu Trigger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#003F43] hover:bg-[#EEF2F1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#003F43]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-fade-in border-l border-[#EEF2F1]">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EEF2F1]">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/brand/cms-group-logo.png"
                    alt="CMS Group Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <div>
                    <div className="text-lg font-bold text-[#003F43]">
                      CMS <span className="text-[#FF7900]">GROUP</span>
                    </div>
                    <div className="text-[9px] text-[#4B6365] uppercase tracking-wider font-semibold">
                      A Chain of Medical Stores & Agency
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col space-y-1">
                {navigationLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href === "/group-companies" &&
                      (pathname.startsWith("/group-companies") ||
                        pathname.startsWith("/distribution-network") ||
                        pathname.startsWith("/network")));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-[#003F43] text-white"
                          : "text-[#102D30] hover:bg-[#EEF2F1] hover:text-[#003F43]"
                      }`}
                    >
                      <span>{link.title}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${isActive ? "text-[#FF7900]" : "text-gray-400"}`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-6 border-t border-[#EEF2F1] space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#FF7900] hover:bg-[#F68A1E] text-white text-sm font-bold py-3 rounded-lg shadow-sm transition-colors"
              >
                <span>Contact CMS Group</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-[#4B6365] space-y-1">
                <p className="font-semibold text-[#003F43]">Ahmedabad, Gujarat, India</p>
                <p>₹180+ Cr Combined Group Turnover</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
