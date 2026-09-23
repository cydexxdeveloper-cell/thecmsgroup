"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "Wholesale & Stockist Inquiries",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.phone || !formData.message) {
      setError("Please complete all required fields (Name, Phone, and Message).");
      return;
    }

    setIsSubmitting(true);

    // Simulated static dispatch - prepared for API / webhook integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        subject: "Wholesale & Stockist Inquiries",
        message: "",
      });
    } catch {
      setError("There was a problem submitting your inquiry. Please contact us via phone or WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#F7F9F8] border border-[#EEF2F1] rounded-2xl p-8 sm:p-10 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#003F43]">
          Inquiry Successfully Received
        </h3>
        <p className="text-sm text-[#4B6365] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to CMS Group. A dedicated member of our commercial operations team in Ahmedabad will review your inquiry and follow up shortly.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="px-5 py-2.5 bg-[#003F43] hover:bg-[#003236] text-white text-xs font-bold rounded-lg transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#EEF2F1] p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#102D30] tracking-tight">
          Commercial Inquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-[#4B6365] mt-1">
          Reach out for wholesale stockist distribution, institutional supply, or corporate partnerships.
        </p>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102D30] mb-2">
            Your Full Name <span className="text-[#FF7900]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Patel"
            className="w-full px-4 py-2.5 bg-[#F7F9F8] border border-[#DDE4E3] rounded-xl text-sm text-[#102D30] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003F43] focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102D30] mb-2">
            Company / Hospital / Entity
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Patel Healthcare Ltd."
            className="w-full px-4 py-2.5 bg-[#F7F9F8] border border-[#DDE4E3] rounded-xl text-sm text-[#102D30] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003F43] focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102D30] mb-2">
            Phone / Mobile Number <span className="text-[#FF7900]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2.5 bg-[#F7F9F8] border border-[#DDE4E3] rounded-xl text-sm text-[#102D30] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003F43] focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102D30] mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@domain.com"
            className="w-full px-4 py-2.5 bg-[#F7F9F8] border border-[#DDE4E3] rounded-xl text-sm text-[#102D30] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003F43] focus:bg-white transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#102D30] mb-2">
          Inquiry Department / Subject
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2.5 bg-[#F7F9F8] border border-[#DDE4E3] rounded-xl text-sm text-[#102D30] focus:outline-none focus:ring-2 focus:ring-[#003F43] focus:bg-white transition-all"
        >
          <option value="Wholesale & Stockist Inquiries">Wholesale & Stockist Distribution Inquiries</option>
          <option value="Institutional Healthcare Supply">Institutional & Hospital Healthcare Supply</option>
          <option value="Manufacturer Alliances">Manufacturer Alliance & CFA Partnership</option>
          <option value="Retail Pharmacy Distribution">Retail Pharmacy Supplies (Ambawadi / Ellisbridge)</option>
          <option value="Digital B2B Commerce (MediShah)">Digital B2B Commerce (MediShah Platform)</option>
          <option value="General Corporate Inquiries">General Corporate Inquiries</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#102D30] mb-2">
          Your Inquiry Details <span className="text-[#FF7900]">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your requirements, therapeutic segments of interest, or proposed business collaboration..."
          className="w-full px-4 py-2.5 bg-[#F7F9F8] border border-[#DDE4E3] rounded-xl text-sm text-[#102D30] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003F43] focus:bg-white transition-all"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#003F43] hover:bg-[#003236] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Sending Inquiry...</span>
          ) : (
            <>
              <span>Submit Commercial Inquiry</span>
              <Send className="w-4 h-4 text-[#FF7900]" />
            </>
          )}
        </button>

        <div className="flex items-center gap-1.5 text-xs text-[#4B6365]">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Strictly Confidential Commercial Data</span>
        </div>
      </div>
    </form>
  );
}
