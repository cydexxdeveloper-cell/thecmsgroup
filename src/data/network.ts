export interface StockistEntity {
  id: string;
  name: string;
  role: string;
  location: string;
  established: string;
  integrated: string;
  facilitySize: string;
  teamSize: string;
  description: string;
  brandPortfolio: string[];
}

export const stockistEntities: StockistEntity[] = [
  {
    id: "ketki-distributors",
    name: "Ketki Distributors",
    role: "Stockist Distribution",
    location: "Ahmedabad, Gujarat",
    established: "1991",
    integrated: "2025",
    facilitySize: "800–1,500 sq. ft.",
    teamSize: "7–10 Team Members",
    description:
      "A veteran stockist entity established in 1991, strategically integrated into CMS Group in 2025 to expand deep pharmaceutical channel distribution.",
    brandPortfolio: [
      "Pfizer",
      "Abbott",
      "Lupin",
      "USV",
      "Hetero",
      "Charak",
      "Gufic",
      "Cadila",
      "Genx",
    ],
  },
  {
    id: "anuraj-pharma",
    name: "Anuraj Pharma",
    role: "Stockist Distribution",
    location: "Ahmedabad, Gujarat",
    established: "2016",
    integrated: "2025",
    facilitySize: "800–1,500 sq. ft.",
    teamSize: "7–10 Team Members",
    description:
      "Modern distribution unit established in 2016, integrated in 2025 to strengthen agile supply connectivity with leading manufacturers.",
    brandPortfolio: [
      "Alkem",
      "Zuvantas",
      "West-Coast",
      "Hetero",
      "Opsis",
    ],
  },
  {
    id: "madhuram-medicales",
    name: "Madhuram Medicales",
    role: "Stockist Distribution",
    location: "Gandhinagar, Gujarat",
    established: "1986",
    integrated: "2025",
    facilitySize: "800–1,500 sq. ft.",
    teamSize: "7–10 Team Members",
    description:
      "Established in 1986 in the state capital of Gandhinagar, bringing nearly four decades of regional distribution heritage. Strategically integrated into CMS Group in 2025 to anchor regional healthcare supply with an extensive multi-segment brand catalog.",
    brandPortfolio: [
      "Torrent",
      "Encube",
      "Maneesh / Febrinil",
      "Sanofi",
      "Emcure",
      "Cipla",
      "Lupin",
      "Cadila",
      "Ban Lab / Sesa Oil",
      "Dr. Morepen",
      "Rudraksha",
      "Shree Narnarayan Ayurvedic",
      "Marss Herbal",
      "Sahajanand Life Sciences",
      "Bonita",
      "Lucifer & Hesper",
    ],
  },
  {
    id: "janta-medical",
    name: "Janta Medical & General Stores",
    role: "Stockist Distribution",
    location: "Mansa, Gujarat",
    established: "1973",
    integrated: "2025",
    facilitySize: "800–1,500 sq. ft.",
    teamSize: "7–10 Team Members",
    description:
      "A foundational regional distribution cornerstone established in 1973, bringing over 50 years of uninterrupted pharmaceutical trust across Northern Gujarat. Strategically integrated into CMS Group in 2025.",
    brandPortfolio: [
      "Torrent",
      "Glaxo Pharma / Consumer",
      "Cadila Pharma",
      "Alembic",
      "Abbott Healthcare",
      "Sanofi Consumer / India",
      "Emcure",
      "Cipla",
      "Leo Life",
      "Alcon",
      "Novartis India & Healthcare",
      "Piramal Pharma",
      "West-Coast",
      "Khandelwal Lab",
      "Alarsin",
      "Dabur OTC",
      "Vibac",
      "Rakesh Veterinary",
    ],
  },
];

export const geographicNodes = [
  { city: "Ahmedabad", state: "Gujarat", type: "Corporate HQ & Flagship Hub (5,000 sq. ft.)" },
  { city: "Gandhinagar", state: "Gujarat", type: "Regional Stockist Facility (Madhuram Medicales)" },
  { city: "Mansa", state: "Gujarat", type: "Regional Stockist Facility (Janta Medical)" },
  { city: "Pan-India", state: "Domestic Network", type: "Institutional & B2B Wholesale Corridors" },
];
