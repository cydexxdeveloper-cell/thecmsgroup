import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  ORGANIZATION_ID,
  SITE_URL,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

const pageTitle = "Chandan Medical Stores | Retail & Wholesale Ahmedabad";
const pageDescription =
  "Chandan Medical Stores is CMS Group's Ahmedabad retail pharmacy and wholesale hub in Ambawadi and Ellisbridge, serving pharmacies, hospitals and businesses.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Chandan Medical Stores",
    "Chandan Medical Stores Ahmedabad",
    "Chandan Medical Stores Ambawadi",
    "Chandan Medical Stores Ellisbridge",
    "medical store Ahmedabad",
    "pharmacy Ahmedabad",
    "medicine wholesaler Ahmedabad",
  ],
  alternates: {
    canonical: "/chandan-medical-stores",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/chandan-medical-stores/`,
    siteName: "CMS Group",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/pharmacy-store.webp",
        width: 600,
        height: 450,
        alt: "Chandan Medical Stores pharmacy in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/images/pharmacy-store.webp", alt: "Chandan Medical Stores pharmacy in Ahmedabad" }],
  },
};

const locations = [
  {
    name: "Ambawadi Central Hub",
    location: "Ambawadi, Ahmedabad",
    role: "Wholesale distribution and healthcare supply",
    description:
      "A high-volume central hub for pharmaceutical wholesale dispatch, institutional supply and pan-India fulfillment.",
    points: ["5,000 sq. ft. central operations hub", "Bulk and institutional inquiries", "Pan-India dispatch coordination"],
  },
  {
    name: "Ellisbridge Flagship Store",
    location: "Ellisbridge, Ahmedabad",
    role: "Retail pharmacy and major stockist",
    description:
      "CMS Group's foundational prime retail pharmacy outlet, established in 1991, with an extensive healthcare brand portfolio.",
    points: ["Established in 1991", "Retail pharmacy and stockist representation", "Multi-divisional healthcare portfolio"],
  },
];

const capabilities = [
  {
    title: "Retail pharmacy supply",
    description:
      "Serve retail pharmacy customers with genuine formulations, OTC healthcare products and dependable replenishment through authorized channels.",
    icon: Building2,
  },
  {
    title: "Bulk medicine distribution",
    description:
      "Coordinate high-volume medicine requirements for pharmacies, hospitals and healthcare institutions with structured dispatch workflows.",
    icon: PackageCheck,
  },
  {
    title: "Pan-India fulfillment",
    description:
      "Connect Ahmedabad's distribution base with pharmacies and healthcare businesses across major domestic supply corridors.",
    icon: Truck,
  },
  {
    title: "Quality-led procurement",
    description:
      "Follow CMS Group's authorized sourcing, batch verification and pharmaceutical storage compliance practices.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "Where is Chandan Medical Stores located?",
    answer:
      "Chandan Medical Stores operates an Ambawadi central hub and an established Ellisbridge retail pharmacy in Ahmedabad, Gujarat.",
  },
  {
    question: "Does Chandan Medical Stores handle wholesale requirements?",
    answer:
      "Yes. The Ambawadi operation supports wholesale, institutional and healthcare supply requirements through CMS Group's distribution network.",
  },
  {
    question: "Can pharmacies request bulk medicine availability?",
    answer:
      "Yes. Retail pharmacies, hospitals and healthcare businesses can submit a commercial or availability request through the CMS Group contact page.",
  },
  {
    question: "Is Chandan Medical Stores part of CMS Group?",
    answer:
      "Yes. Chandan Medical Stores is one of the core operating companies in the CMS Group pharmaceutical ecosystem.",
  },
];

export default function ChandanMedicalStoresPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Pharmacy",
          "@id": `${SITE_URL}/chandan-medical-stores/#pharmacy`,
          name: "Chandan Medical Stores",
          alternateName: "Chandan Medical Stores Ahmedabad",
          url: `${SITE_URL}/chandan-medical-stores/`,
          logo: `${SITE_URL}/brand/cms-group-logo.png`,
          image: `${SITE_URL}/images/pharmacy-store.webp`,
          description: pageDescription,
          parentOrganization: {
            "@id": ORGANIZATION_ID,
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          areaServed: {
            "@type": "Country",
            name: "India",
          },
          sameAs: ["https://chandanmedicalstores.com/"],
        }}
      />
      <SeoJsonLd
        data={webPageJsonLd({
          path: "/chandan-medical-stores",
          title: pageTitle,
          description: pageDescription,
        })}
      />
      <SeoJsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Chandan Medical Stores", path: "/chandan-medical-stores" },
        ])}
      />

      <PageHero
        badge="CMS GROUP CORE COMPANY"
        title="Chandan Medical Stores"
        highlightText="Retail & Wholesale Ahmedabad."
        description="Chandan Medical Stores combines an established Ahmedabad retail pharmacy presence with high-volume wholesale distribution through the Ambawadi central hub."
        breadcrumbs={[{ label: "Chandan Medical Stores" }]}
        variant="teal"
      />

      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold uppercase tracking-wider border border-[#DDE4E3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                <span>AHMEDABAD PHARMACY &amp; MEDICINE SUPPLY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D30] tracking-tight">
                An established Ahmedabad name for <span className="text-[#FF7900]">medical supply</span>
              </h2>
              <p className="text-base text-[#4B6365] leading-relaxed">
                Chandan Medical Stores is part of CMS Group&apos;s pharmaceutical ecosystem, connecting genuine medicine sourcing with retail pharmacy service, wholesale distribution and healthcare logistics. The Ellisbridge outlet carries forward a business legacy established in 1991, while the Ambawadi hub supports larger commercial and institutional requirements.
              </p>
              <p className="text-base text-[#4B6365] leading-relaxed">
                Customers can explore the group&apos;s wider capabilities through our <Link href="/pharmaceutical-distributors" className="font-bold text-[#003F43] underline decoration-[#FF7900] underline-offset-4">pharmaceutical distributor services</Link> or explore the digital B2B ecosystem at <Link href="/medishah" className="font-bold text-[#003F43] underline decoration-[#FF7900] underline-offset-4">MediShah</Link>.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#003F43] hover:bg-[#003236] text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors">
                  Request a Wholesale Inquiry <ArrowRight className="w-4 h-4 text-[#FF7900]" />
                </Link>
                <a href="https://chandanmedicalstores.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#F7F9F8] hover:bg-[#EEF2F1] text-[#003F43] border border-[#DDE4E3] text-sm font-bold px-6 py-3 rounded-xl transition-colors">
                  Visit Official Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-2 border-[#EEF2F1] shadow-xl bg-[#003236]">
                <Image
                  src="/images/pharmacy-store.webp"
                  alt="Chandan Medical Stores pharmacy retail outlet in Ahmedabad"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-5 bg-white">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#003F43]">
                    <MapPin className="w-4 h-4 text-[#FF7900]" />
                    <span>Serving Ahmedabad and pan-India corridors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="TWO AHMEDABAD LOCATIONS"
            title="Chandan Medical Stores"
            highlightText="Across Ahmedabad."
            description="From a foundational Ellisbridge pharmacy to a high-volume Ambawadi distribution hub, Chandan Medical Stores serves different stages of the healthcare supply chain."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <article key={location.name} className="bg-white rounded-2xl border border-[#EEF2F1] p-7 sm:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#003F43] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#FF7900]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#102D30] tracking-tight">{location.name}</h3>
                    <p className="text-sm font-semibold text-[#003F43] mt-1">{location.location}</p>
                    <p className="text-xs font-semibold text-[#FF7900] mt-1">{location.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-[#4B6365] leading-relaxed">{location.description}</p>
                <ul className="mt-6 space-y-3 border-t border-[#EEF2F1] pt-5">
                  {location.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[#102D30]">
                      <CheckCircle2 className="w-4 h-4 text-[#FF7900] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="RETAIL TO WHOLESALE"
            title="Healthcare supply built"
            highlightText="around your requirement."
            description="Chandan Medical Stores works alongside CMS Group's distribution companies to support medicine availability, institutional procurement and reliable fulfillment."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="rounded-2xl border border-[#EEF2F1] bg-[#F7F9F8] p-6">
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

      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="FREQUENT QUESTIONS"
            title="Questions about"
            highlightText="Chandan Medical Stores?"
            description="Key information for pharmacies, hospitals and healthcare businesses looking for an Ahmedabad medical store or wholesale contact."
          />
          <div className="max-w-4xl mx-auto divide-y divide-[#DDE4E3] rounded-2xl border border-[#DDE4E3] bg-white px-6 sm:px-8">
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
        badge="COMMERCIAL ENQUIRIES"
        title="Need medicines or a"
        highlightText="bulk supply quote?"
        description="Contact CMS Group for Chandan Medical Stores availability, wholesale requirements, institutional procurement and healthcare distribution enquiries."
        ctaText="Contact CMS Group"
        ctaHref="/contact"
      />
    </div>
  );
}
