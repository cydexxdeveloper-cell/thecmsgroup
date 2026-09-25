export interface GroupCompany {
  id: string;
  name: string;
  location?: string;
  established: string;
  operations: string;
  scale?: string;
  website?: string;
  profileHref?: string;
  description: string;
  highlights: string[];
  brandPortfolio?: string[];
  category: "Flagship" | "Stockist & Retail" | "Specialized Supply" | "Digital B2B";
}

export const groupCompanies: GroupCompany[] = [
  {
    id: "chandan-ambawadi",
    name: "Chandan Medical Stores",
    location: "Ambawadi, Ahmedabad",
    established: "2017",
    operations: "Prime Retail Outlet & Wholesale Hub — Pan-India",
    scale: "₹100 Crore Turnover",
    website: "https://chandanmedicalstores.com",
    profileHref: "/chandan-medical-stores",
    category: "Flagship",
    description:
      "The high-volume flagship entity driving large-scale wholesale distribution nationwide alongside a high-traffic prime retail pharmacy outlet in Ambawadi.",
    highlights: [
      "High-traffic prime retail pharmacy outlet in prime Ambawadi",
      "₹100 Crore annual turnover wholesale distribution scale",
      "5,000 sq. ft. central logistics & fulfillment hub",
      "Pan-India wholesale and institutional dispatch",
      "Authorized direct procurement channels",
    ],
  },
  {
    id: "chandan-ellisbridge",
    name: "Chandan Medical Stores",
    location: "Ellisbridge, Ahmedabad",
    established: "1991",
    operations: "Prime Retail Pharmacy Outlet & Major Stockist",
    profileHref: "/chandan-medical-stores",
    category: "Stockist & Retail",
    description:
      "Located at a prime metropolitan location in Ellisbridge with an extensive pharmaceutical and healthcare brand portfolio, serving as the foundational prime retail pharmacy outlet of CMS Group since 1991.",
    highlights: [
      "Foundational prime retail pharmacy outlet established in 1991 (35+ years legacy)",
      "Prime metropolitan retail presence in Ellisbridge, Ahmedabad",
      "Comprehensive multi-division distribution & OTC representation",
      "Extensive brand portfolio representation",
    ],
    brandPortfolio: [
      "Abbott — 7 Divisions",
      "Patanjali OTC & Divya",
      "Emami Zandu",
      "Dabur",
      "Torrent OTC",
      "Hetero OTC",
      "USV OTC / Dibetaal",
      "Sanofi OTC",
      "Sun Pharma OTC",
      "Dr. Morepen",
      "MSD",
      "Himalaya Wellness",
      "Midascare",
      "Canixa Lifesciences",
      "Baidyanath",
      "Babyhug",
      "Bayer",
      "British Lab",
    ],
  },
  {
    id: "veer-pharma",
    name: "Veer Pharma",
    established: "2022",
    operations: "Retail & Wholesale — Pan-India",
    scale: "₹30 Crore Turnover",
    category: "Specialized Supply",
    description:
      "Specialized pharmaceutical supply unit serving diverse domestic healthcare segments with agile inventory and distribution capabilities.",
    highlights: [
      "₹30 Crore annual turnover scale",
      "Rapid turnaround domestic distribution",
      "Targeted institutional healthcare supplies",
      "Integrated ERP batch fulfillment",
    ],
  },
  {
    id: "medishah",
    name: "MediShah",
    established: "2022",
    operations: "Digital B2B Medicine Commerce",
    website: "https://medishah.com",
    profileHref: "/medishah",
    category: "Digital B2B",
    description:
      "A modern B2B digital ecosystem focused on medicine commerce, trade transparency and supply-chain connectivity across India.",
    highlights: [
      "Digital procurement portal for healthcare businesses",
      "Transparent stock availability & pricing",
      "Connected pharmaceutical logistics network",
      "Next-generation digital commerce infrastructure",
    ],
  },
];
