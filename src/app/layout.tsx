import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CMS Group | Pharmaceutical Distribution, Retail & Wholesale India",
  description:
    "CMS Group is an Ahmedabad-based pharmaceutical enterprise operating across retail, wholesale, stockist distribution and B2B healthcare commerce with pan-India reach. Combined group turnover ₹180+ Crore.",
  keywords: [
    "CMS Group",
    "A Chain of Medical Stores",
    "Pharmaceutical Distribution India",
    "Pharma Stockist Ahmedabad",
    "Chandan Medical Stores",
    "Veer Pharma",
    "MediShah",
    "Healthcare Supply Chain Gujarat",
  ],
  authors: [{ name: "CMS Group" }],
  metadataBase: new URL("https://thecmsgroup.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CMS Group | Pharmaceutical Distribution, Retail & Wholesale India",
    description:
      "CMS Group connects leading pharmaceutical manufacturers with retailers, healthcare institutions and businesses across India. Combined group turnover ₹180+ Crore.",
    url: "https://thecmsgroup.in",
    siteName: "CMS Group",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/brand/cms-group-logo.png",
        width: 600,
        height: 600,
        alt: "CMS Group - A Chain of Medical Stores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMS Group | Pharmaceutical Distribution, Retail & Wholesale India",
    description:
      "CMS Group connects leading pharmaceutical manufacturers with retailers, healthcare institutions and businesses across India.",
    images: ["/brand/cms-group-logo.png"],
  },
  icons: {
    icon: [
      { url: "/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/cms-symbol.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Organization Data (strictly accurate, zero unverified claims)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CMS Group",
    alternateName: "A Chain of Medical Stores",
    url: "https://thecmsgroup.in",
    logo: "https://thecmsgroup.in/brand/cms-group-logo.png",
    foundingDate: "1991",
    description:
      "Ahmedabad-based pharmaceutical group operating across retail, wholesale, stockist distribution and B2B healthcare commerce with pan-India reach.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9427620590",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9900290040",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-8758788066",
        contactType: "operations",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
    ],
  };

  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#102D30] font-sans selection:bg-[#003F43] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
