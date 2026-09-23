"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, ChevronRight } from "lucide-react";
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

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EEF2F1]"
            : "bg-white border-b border-[#EEF2F1]"
        }`}
      >
        {/* Top Announcement / Quick Status Bar */}
        <div className="bg-[#003236] text-white text-xs py-2 px-4 border-b border-[#003F43]/40">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FF7900] animate-pulse"></span>
              <span className="font-medium text-gray-200">
                ₹180+ Cr Combined Group Turnover • Pan-India Healthcare Distribution
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="hidden md:inline text-gray-400">Headquarters: Ahmedabad, Gujarat</span>
              <span className="hidden sm:inline">|</span>
              <a
                href="tel:+919427620590"
                className="inline-flex items-center gap-1.5 hover:text-[#FF7900] transition-colors font-medium text-white"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#FF7900]" />
                +91 94276 20590
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#003F43] rounded-lg p-1"
            >
              <div className="relative w-13 h-13 sm:w-14 sm:h-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brand/cms-group-logo.png"
                  alt="CMS GROUP Logo - A Chain of Medical Stores"
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
                  A Chain of Medical Stores
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 relative ${
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

            {/* CTA Button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 bg-[#003F43] hover:bg-[#003236] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 border border-[#003F43] hover:border-[#FF7900]/50"
              >
                <span>Contact CMS Group</span>
                <ChevronRight className="w-4 h-4 text-[#FF7900]" />
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2.5 rounded-lg text-[#003F43] hover:bg-[#EEF2F1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#003F43]"
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
        <div className="fixed inset-0 z-40 xl:hidden">
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
                      A Chain of Medical Stores
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
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
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
