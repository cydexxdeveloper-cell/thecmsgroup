import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Building2,
  CheckCircle2,
  MapPin,
  Network,
  ShieldCheck,
  Truck,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import IndiaDistributionMap from "@/components/ui/IndiaDistributionMap";
import CTASection from "@/components/ui/CTASection";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  ORGANIZATION_ID,
  SITE_URL,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

const pageTitle = "Pharmaceutical Distributors & Wholesalers | CMS Group";
const pageDescription =
  "Ahmedabad-based CMS Group provides pharmaceutical wholesale, stockist and B2B distribution for pharmacies, hospitals and healthcare businesses across India.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "pharmaceutical distributors",
    "pharma distributors",
    "pharmaceutical wholesalers",
    "medicine wholesaler",
    "bulk medicine distributor",
    "pharmaceutical distributor Ahmedabad",
    "medical wholesale supplier Gujarat",
    "CMS Group distributor",
  ],
  alternates: {
    canonical: "/pharmaceutical-distributors",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/pharmaceutical-distributors/`,
    siteName: "CMS Group",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/warehouse.webp",
        width: 650,
        height: 450,
        alt: "Pharmaceutical warehouse and wholesale distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/images/warehouse.webp", alt: "Pharmaceutical warehouse and wholesale distribution" }],
  },
};

const distributionCapabilities = [
  {
    title: "Retail pharmacy supply",
    description:
      "Support pharmacies with dependable replenishment, authorized sourcing and a broad healthcare distribution network.",
    icon: Building2,
  },
  {
    title: "Institutional procurement",
    description:
      "Coordinate requirements for hospitals, clinics and healthcare institutions through structured commercial workflows.",
    icon: Boxes,
  },
  {
    title: "Stockist distribution",
    description:
      "Connect regional stockist divisions and manufacturer portfolios with pharmacies and healthcare buyers.",
    icon: Network,
  },
  {
    title: "Pan-India dispatch",
    description:
      "Use Ahmedabad-based operations and logistics coordination to serve domestic healthcare supply corridors.",
    icon: Truck,
  },
];

const locations = [
  { city: "Ahmedabad", detail: "Corporate headquarters and Ambawadi central hub" },
  { city: "Gandhinagar", detail: "Regional stockist facility" },
  { city: "Mansa", detail: "Regional stockist facility" },
  { city: "Pan-India", detail: "Institutional and B2B wholesale corridors" },
];

const faqs = [
  {
    question: "What is a pharmaceutical distributor?",
    answer:
      "A pharmaceutical distributor manages the movement of medicines and healthcare products from manufacturers or authorized supply channels to pharmacies, hospitals and other healthcare buyers.",
  },
  {
    question: "Does CMS Group work as a pharmaceutical wholesaler?",
    answer:
      "Yes. CMS Group operates retail, wholesale, stockist and logistics capabilities through entities including Chandan Medical Stores and Veer Pharma, with a pan-India distribution focus.",
  },
  {
    question: "Where is CMS Group based?",
    answer:
      "CMS Group is headquartered in Ahmedabad, Gujarat, with regional stockist operations in Ahmedabad, Gandhinagar and Mansa and domestic distribution corridors across India.",
  },
  {
    question: "How do I request a bulk medicine quotation?",
    answer:
      "Pharmacies, hospitals and healthcare businesses can submit a wholesale or institutional requirement through the CMS Group contact page for commercial review.",
  },
  {
    question: "How should I choose the best pharmaceutical wholesaler?",
    answer:
      "There is no single universal best wholesaler. Compare authorized sourcing, batch verification, commercial communication, dispatch reliability, compliant storage and support for your procurement volume and delivery area.",
  },
];

export default function PharmaceuticalDistributorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/pharmaceutical-distributors/#service`,
          name: "Pharmaceutical Distribution & Wholesale Services",
          serviceType: "Pharmaceutical distribution, wholesale and stockist supply",
          description: pageDescription,
          url: `${SITE_URL}/pharmaceutical-distributors/`,
          provider: {
            "@id": ORGANIZATION_ID,
          },
          areaServed: {
            "@type": "Country",
            name: "India",
          },
        }}
      />
      <SeoJsonLd
        data={webPageJsonLd({
          path: "/pharmaceutical-distributors",
          title: pageTitle,
          description: pageDescription,
        })}
      />
      <SeoJsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pharmaceutical Distributors", path: "/pharmaceutical-distributors" },
        ])}
      />

      <PageHero
        badge="PHARMACEUTICAL SUPPLY CHAIN"
        title="Pharmaceutical Distributors"
        highlightText="for Healthcare Businesses."
        description="CMS Group connects authorized medicine supply with pharmacies, hospitals and healthcare institutions through wholesale, stockist and pan-India distribution capabilities."
        breadcrumbs={[{ label: "Pharmaceutical Distributors" }]}
        variant="teal"
      />

      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold uppercase tracking-wider border border-[#DDE4E3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                <span>AHMEDABAD • GUJARAT • PAN-INDIA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D30] tracking-tight">
                Medicine distribution with a <span className="text-[#FF7900]">complete group network</span>
              </h2>
              <p className="text-base text-[#4B6365] leading-relaxed">
                CMS Group is an Ahmedabad-based pharmaceutical distributor and wholesaler serving the healthcare supply chain through multiple operating capabilities. Our network combines retail pharmacy relationships, high-volume wholesale distribution, regional stockist operations and digital B2B commerce.
              </p>
              <p className="text-base text-[#4B6365] leading-relaxed">
                Whether you need a pharmacy replenishment partner, a bulk medicine supplier or a pharmaceutical distribution connection for an institutional requirement, CMS Group provides a direct route to discuss the requirement with the relevant operating team. For digital B2B procurement, explore <Link href="/medishah" className="font-bold text-[#003F43] underline decoration-[#FF7900] underline-offset-4">MediShah</Link>.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#003F43] hover:bg-[#003236] text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors">
                  Request a Distribution Quote <ArrowRight className="w-4 h-4 text-[#FF7900]" />
                </Link>
                <Link href="/chandan-medical-stores" className="inline-flex items-center gap-2 bg-[#F7F9F8] hover:bg-[#EEF2F1] text-[#003F43] border border-[#DDE4E3] text-sm font-bold px-6 py-3 rounded-xl transition-colors">
                  Explore Chandan Medical Stores
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#003236] text-white p-7 sm:p-9 shadow-xl">
                <ShieldCheck className="w-9 h-9 text-[#FF7900]" />
                <h3 className="mt-6 text-2xl font-extrabold leading-tight">A wholesale partner connected to real healthcare demand.</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-200">CMS Group&apos;s operating companies work across the pharmaceutical supply chain—from retail pharmacy needs to institutional and distributor requirements.</p>
                <div className="mt-8 space-y-3 text-sm font-semibold">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF7900]" />Authorized sourcing focus</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF7900]" />Batch and inventory visibility</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF7900]" />Domestic distribution coordination</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="DISTRIBUTION CAPABILITIES"
            title="One network for"
            highlightText="pharma wholesale needs."
            description="CMS Group's operating model is designed to serve multiple healthcare buying contexts without losing sight of medicine authenticity, availability and fulfillment."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributionCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="rounded-2xl border border-[#EEF2F1] bg-white p-6">
                  <div className="w-11 h-11 rounded-xl bg-[#003F43] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#FF7900]" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-[#102D30]">{capability.title}</h3>
                  <p className="mt-2 text-sm text-[#4B6365] leading-relaxed">{capability.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold uppercase tracking-wider border border-[#DDE4E3]">
                <MapPin className="w-4 h-4 text-[#FF7900]" />
                <span>DISTRIBUTION FOOTPRINT</span>
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-[#102D30] tracking-tight">From Gujarat hubs to <span className="text-[#FF7900]">domestic corridors</span></h2>
              <p className="mt-4 text-base text-[#4B6365] leading-relaxed">CMS Group combines its Ahmedabad headquarters with regional stockist facilities and pan-India dispatch capabilities to serve healthcare supply requirements.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((location) => (
                <div key={location.city} className="rounded-2xl border border-[#DDE4E3] bg-[#F7F9F8] p-5">
                  <div className="flex items-center gap-2 text-[#003F43] font-extrabold"><MapPin className="w-4 h-4 text-[#FF7900]" />{location.city}</div>
                  <p className="mt-2 text-xs text-[#4B6365] leading-relaxed">{location.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="NETWORK PREVIEW"
            title="A pan-India"
            highlightText="pharmaceutical distribution network."
            description="Explore the operating footprint behind CMS Group's wholesale and stockist distribution capabilities."
          />
          <IndiaDistributionMap />
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="PHARMACEUTICAL DISTRIBUTOR FAQ"
            title="Choosing a reliable"
            highlightText="medicine wholesaler."
            description="A practical guide to the capabilities healthcare buyers should look for in a pharmaceutical distribution partner."
          />
          <div className="max-w-4xl mx-auto divide-y divide-[#DDE4E3] rounded-2xl border border-[#DDE4E3] bg-[#F7F9F8] px-6 sm:px-8">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm sm:text-base font-extrabold text-[#102D30]">
                  <span>{faq.question}</span>
                  <span className="text-xl font-normal text-[#FF7900] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 pr-8 text-sm text-[#4B6365] leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        badge="WHOLESALE & DISTRIBUTION"
        title="Looking for a pharmaceutical"
        highlightText="distributor for your business?"
        description="Tell CMS Group about your pharmacy, hospital, institutional or distributor requirement and the relevant operating team will review the inquiry."
        ctaText="Request a Quote"
        ctaHref="/contact"
      />
    </div>
  );
}
