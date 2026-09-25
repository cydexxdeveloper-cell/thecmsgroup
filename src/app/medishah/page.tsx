import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ExternalLink,
  Network,
  SearchCheck,
  ShieldCheck,
  Users,
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

const pageTitle = "MediShah | B2B Medicine Commerce & Digital Procurement";
const pageDescription =
  "MediShah is CMS Group's digital B2B medicine commerce ecosystem, connecting healthcare businesses with pharmaceutical stock visibility, procurement and distribution.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "MediShah",
    "MediShah medicine commerce",
    "B2B medicine platform India",
    "digital pharmaceutical procurement",
    "medicine distributor platform",
    "pharmaceutical B2B commerce",
    "CMS Group MediShah",
  ],
  alternates: {
    canonical: "/medishah",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/medishah/`,
    siteName: "CMS Group",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/distribution.webp",
        width: 600,
        height: 450,
        alt: "MediShah digital pharmaceutical distribution ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/images/distribution.webp", alt: "MediShah digital pharmaceutical distribution ecosystem" }],
  },
};

const platformFeatures = [
  {
    title: "Digital procurement",
    description:
      "A modern B2B workflow for healthcare businesses to connect medicine requirements with CMS Group's distribution capabilities.",
    icon: Network,
  },
  {
    title: "Stock visibility",
    description:
      "A commerce ecosystem designed to improve availability communication and reduce friction between buyers, distributors and supply partners.",
    icon: SearchCheck,
  },
  {
    title: "Trade transparency",
    description:
      "Digital product and commercial workflows support more structured communication for institutional, pharmacy and business customers.",
    icon: Boxes,
  },
  {
    title: "Connected fulfillment",
    description:
      "MediShah connects digital ordering with the group's broader logistics, stockist and pharmaceutical distribution network.",
    icon: Users,
  },
];

const audiences = [
  "Retail pharmacies and pharmacy chains",
  "Hospitals and healthcare institutions",
  "Healthcare businesses and institutional buyers",
  "Distribution partners seeking a digital commerce workflow",
];

const faqs = [
  {
    question: "What is MediShah?",
    answer:
      "MediShah is CMS Group's digital B2B medicine commerce ecosystem for healthcare procurement, stock communication and pharmaceutical distribution connections.",
  },
  {
    question: "Who can use MediShah?",
    answer:
      "MediShah is designed for healthcare businesses such as retail pharmacies, hospitals, institutions and other organizations with medicine procurement requirements.",
  },
  {
    question: "How is MediShah connected to CMS Group?",
    answer:
      "MediShah is CMS Group's digital B2B operating company and works alongside the group's retail, wholesale, stockist and logistics capabilities.",
  },
  {
    question: "Can I request a medicine availability check through CMS Group?",
    answer:
      "Yes. Submit your requirement through the CMS Group contact page and the relevant operating team can respond to the commercial inquiry.",
  },
];

export default function MediShahPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE_URL}/medishah/#organization`,
          name: "MediShah",
          alternateName: "MediShah B2B Medicine Commerce",
          url: `${SITE_URL}/medishah/`,
          logo: `${SITE_URL}/brand/cms-group-logo.png`,
          description: pageDescription,
          parentOrganization: {
            "@id": ORGANIZATION_ID,
          },
          areaServed: {
            "@type": "Country",
            name: "India",
          },
          sameAs: ["https://medishah.com/"],
        }}
      />
      <SeoJsonLd
        data={webPageJsonLd({
          path: "/medishah",
          title: pageTitle,
          description: pageDescription,
        })}
      />
      <SeoJsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "MediShah", path: "/medishah" },
        ])}
      />

      <PageHero
        badge="DIGITAL B2B OPERATING COMPANY"
        title="MediShah"
        highlightText="Digital Medicine Commerce."
        description="MediShah connects healthcare buyers with CMS Group's pharmaceutical distribution ecosystem through a focused digital B2B procurement experience."
        breadcrumbs={[{ label: "MediShah" }]}
        variant="teal"
      />

      <section className="py-16 sm:py-24 bg-white border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F1] text-[#003F43] text-xs font-bold uppercase tracking-wider border border-[#DDE4E3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                <span>B2B PHARMACEUTICAL COMMERCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D30] tracking-tight">
                A digital bridge between <span className="text-[#FF7900]">medicine demand and supply</span>
              </h2>
              <p className="text-base text-[#4B6365] leading-relaxed">
                MediShah is CMS Group&apos;s digital B2B medicine commerce platform. It is designed to help pharmacies, hospitals and healthcare businesses communicate procurement requirements more efficiently while connecting them with the group&apos;s wider pharmaceutical distribution capabilities.
              </p>
              <p className="text-base text-[#4B6365] leading-relaxed">
                For traditional wholesale and stockist distribution, explore <Link href="/pharmaceutical-distributors" className="font-bold text-[#003F43] underline decoration-[#FF7900] underline-offset-4">CMS Group&apos;s pharmaceutical distributor network</Link>. For the established retail pharmacy business, visit <Link href="/chandan-medical-stores" className="font-bold text-[#003F43] underline decoration-[#FF7900] underline-offset-4">Chandan Medical Stores</Link>.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#003F43] hover:bg-[#003236] text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors">
                  Discuss a B2B Requirement <ArrowRight className="w-4 h-4 text-[#FF7900]" />
                </Link>
                <a href="https://medishah.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#F7F9F8] hover:bg-[#EEF2F1] text-[#003F43] border border-[#DDE4E3] text-sm font-bold px-6 py-3 rounded-xl transition-colors">
                  Visit MediShah.com <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border-2 border-[#EEF2F1] bg-[#003236] p-7 sm:p-9 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Network className="w-7 h-7 text-[#FF7900]" />
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-[#FF7900] text-white text-[11px] font-extrabold uppercase tracking-wider">CMS Group</span>
                </div>
                <p className="mt-8 text-2xl sm:text-3xl font-extrabold leading-tight">Medicine procurement, connected.</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-200">Digital access to a group network spanning pharmaceutical retail, wholesale, stockist distribution and healthcare logistics.</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 p-4">
                    <span className="block text-xl font-extrabold text-[#FF7900]">B2B</span>
                    <span className="mt-1 block text-xs text-gray-300">Business workflow</span>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <span className="block text-xl font-extrabold text-[#FF7900]">India</span>
                    <span className="mt-1 block text-xs text-gray-300">Network reach</span>
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
            badge="PLATFORM CAPABILITIES"
            title="A clearer way to"
            highlightText="manage B2B medicine requirements."
            description="MediShah brings digital procurement, communication and fulfillment into one connected healthcare commerce ecosystem."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-2xl border border-[#EEF2F1] bg-white p-6">
                  <div className="w-11 h-11 rounded-xl bg-[#003F43] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#FF7900]" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-[#102D30]">{feature.title}</h3>
                  <p className="mt-2 text-sm text-[#4B6365] leading-relaxed">{feature.description}</p>
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
                <ShieldCheck className="w-4 h-4 text-[#FF7900]" />
                <span>WHO MEDISHAH SERVES</span>
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-[#102D30] tracking-tight">
                Built for healthcare <span className="text-[#FF7900]">business users</span>
              </h2>
              <p className="mt-4 text-base text-[#4B6365] leading-relaxed">
                MediShah&apos;s B2B focus supports organizations that need a more structured route for medicine availability, commercial communication and distribution coordination.
              </p>
            </div>
            <ul className="space-y-3">
              {audiences.map((audience) => (
                <li key={audience} className="flex items-start gap-3 rounded-xl border border-[#DDE4E3] bg-[#F7F9F8] p-4 text-sm font-semibold text-[#102D30]">
                  <CheckCircle2 className="w-5 h-5 text-[#FF7900] shrink-0 mt-0.5" />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F7F9F8] border-b border-[#EEF2F1]">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <SectionHeading
            badge="MEDISHAH FAQ"
            title="Digital procurement"
            highlightText="with CMS Group."
            description="Learn how MediShah connects healthcare buyers with the wider CMS Group pharmaceutical ecosystem."
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
        badge="DIGITAL COMMERCE ENQUIRIES"
        title="Connect your B2B"
        highlightText="medicine requirements."
        description="Speak with CMS Group about MediShah, medicine availability, institutional procurement and digital healthcare commerce."
        ctaText="Contact CMS Group"
        ctaHref="/contact"
      />
    </div>
  );
}
