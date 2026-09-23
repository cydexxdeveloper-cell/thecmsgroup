export interface GroupCompany {
  id: string;
  name: string;
  location?: string;
  established: string;
  operations: string;
  scale?: string;
  website?: string;
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
    operations: "Retail & Wholesale — Pan-India",
    scale: "₹100 Crore Turnover",
    website: "https://chandanmedicalstores.com",
    category: "Flagship",
    description:
      "The high-volume flagship entity driving large-scale retail and wholesale pharmaceutical distribution nationwide.",
    highlights: [
      "₹100 Crore annual turnover scale",
      "5,000 sq. ft. central hub operations",
      "Pan-India wholesale and institutional dispatch",
      "Authorized direct procurement channels",
    ],
  },
  {
    id: "chandan-ellisbridge",
    name: "Chandan Medical Stores",
    location: "Ellisbridge, Ahmedabad",
    established: "1991",
    operations: "Major Stockist & Premium Retail Stores",
    category: "Stockist & Retail",
    description:
      "Located at prime key locations with a major pharmaceutical and healthcare brand portfolio, serving as the foundational pillar of CMS Group since 1991.",
    highlights: [
      "Foundational entity established in 1991",
      "Prime metropolitan retail presence",
      "Comprehensive multi-division distribution",
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
