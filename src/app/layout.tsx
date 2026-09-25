import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SeoJsonLd from "@/components/SeoJsonLd";
import { DEFAULT_DESCRIPTION, SITE_URL, absoluteUrl, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CMS Group | Pharmaceutical Retail, Wholesale & Distribution India",
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "CMS Group",
    "CMS Group India",
    "CMS Group Ahmedabad",
    "A Chain of Medical Stores & Agency",
    "Chandan Medical Stores",
    "MediShah",
    "pharmaceutical distributors",
    "pharma distributors",
    "pharmaceutical wholesalers",
    "medicine wholesaler Ahmedabad",
    "bulk medicine distributor",
    "healthcare supply chain Gujarat",
  ],
  authors: [{ name: "CMS Group" }],
  creator: "CMS Group",
  publisher: "CMS Group",
  category: "Pharmaceutical Distribution",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "CMS Group | Pharmaceutical Retail, Wholesale & Distribution India",
    description: DEFAULT_DESCRIPTION,
    url: absoluteUrl("/"),
    siteName: "CMS Group",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/brand/cms-group-logo.png",
        width: 600,
        height: 600,
        alt: "CMS Group - A Chain of Medical Stores & Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMS Group | Pharmaceutical Retail, Wholesale & Distribution India",
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/brand/cms-group-logo.png", alt: "CMS Group logo" }],
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
  return (
    <html lang="en-IN" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        <SeoJsonLd data={organizationJsonLd} />
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
