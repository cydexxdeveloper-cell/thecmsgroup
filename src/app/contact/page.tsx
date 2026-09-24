import React from "react";
import type { Metadata } from "next";
import { MapPin, Building, Clock, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCard from "@/components/ui/ContactCard";
import ContactForm from "@/components/ui/ContactForm";
import { executiveLeadership } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Contact CMS Group | Direct Executive & Commercial Inquiries",
  description:
    "Direct executive contacts for Keyur Shah (+91 9427620590) and Parth Shah (+91 9900290040), alongside CMS Group executive commercial desk. Headquarters in Ahmedabad, Gujarat, India.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact Us" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <PageHero
        badge="COMMERCIAL LIAISON"
        title="Let's Build Stronger"
        highlightText="Healthcare Connections."
        description="Connect directly with CMS Group executive directors and commercial operations teams for institutional pharmaceutical procurement, stockist distribution, and manufacturer alliances."
        breadcrumbs={breadcrumbs}
        variant="teal"
      />

      {/* 2. CORPORATE HQ & DIRECT LEADERSHIP STRIP */}
      <section className="bg-white py-12 border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F7F9F8] rounded-2xl border border-[#EEF2F1] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#003F43] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#FF7900]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#FF7900] uppercase tracking-wider block">
                  Corporate Headquarters
                </span>
                <h3 className="text-base font-extrabold text-[#102D30] mt-1">
                  Ahmedabad, Gujarat, India
                </h3>
                <p className="text-xs text-[#4B6365] mt-1">
                  Flagship Hub: Ambawadi • Central distribution operations
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#F7F9F8] rounded-2xl border border-[#EEF2F1] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#003F43] text-white flex items-center justify-center shrink-0">
                <Building className="w-6 h-6 text-[#FF7900]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#FF7900] uppercase tracking-wider block">
                  Regional Stockist Units
                </span>
                <h3 className="text-base font-extrabold text-[#102D30] mt-1">
                  Ahmedabad • Gandhinagar • Mansa
                </h3>
                <p className="text-xs text-[#4B6365] mt-1">
                  Dedicated stockist units serving northern & central corridors
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#F7F9F8] rounded-2xl border border-[#EEF2F1] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#003F43] text-white flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#FF7900]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#FF7900] uppercase tracking-wider block">
                  Operating Hours
                </span>
                <h3 className="text-base font-extrabold text-[#102D30] mt-1">
                  Monday – Saturday
                </h3>
                <p className="text-xs text-[#4B6365] mt-1">
                  10:00 AM – 8:00 PM IST • Direct wholesale dispatch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECT EXECUTIVE CONTACTS */}
      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="DIRECT EXECUTIVE ACCESS"
            title="Direct Leadership"
            highlightText="Communication Channels."
            description="Our executive directors are accessible via direct phone calls and WhatsApp messaging for priority institutional partnerships and high-volume commercial inquiries."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveLeadership.map((leader) => (
              <ContactCard key={leader.name} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMERCIAL INQUIRY FORM */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Context (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold uppercase tracking-wider border border-[#DDE4E3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                <span>STRUCTURED INQUIRIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D30] tracking-tight">
                Submit an Institutional or <span className="text-[#FF7900]">Wholesale Request</span>
              </h2>

              <p className="text-base text-[#4B6365] leading-relaxed">
                Whether you represent a hospital network, retail pharmacy chain, or pharmaceutical manufacturer looking for established distribution across Gujarat and India, submit your inquiry here for prompt review.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-[#102D30]">
                  <CheckCircle2 className="w-4 h-4 text-[#003F43] shrink-0 mt-0.5" />
                  <span>Direct routing to relevant operating entity (Ambawadi, Ellisbridge, Veer, MediShah)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#102D30]">
                  <CheckCircle2 className="w-4 h-4 text-[#003F43] shrink-0 mt-0.5" />
                  <span>Strict commercial confidentiality guaranteed</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#102D30]">
                  <CheckCircle2 className="w-4 h-4 text-[#003F43] shrink-0 mt-0.5" />
                  <span>Rapid turnaround on bulk availability and GST invoicing quotes</span>
                </div>
              </div>
            </div>

            {/* Right Form Component (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
