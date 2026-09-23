export interface Leader {
  name: string;
  role: string;
  phone: string;
  initials: string;
  phoneFormatted: string;
  whatsappUrl: string;
  telUrl: string;
  responsibilities: string[];
}

export const executiveLeadership: Leader[] = [
  {
    name: "Keyur Shah",
    role: "Group Leadership & Strategic Direction",
    phone: "+91 9427620590",
    phoneFormatted: "+91 94276 20590",
    initials: "KS",
    telUrl: "tel:+919427620590",
    whatsappUrl: "https://wa.me/919427620590?text=Hello%20Keyur%20Shah,%20I%20am%20reaching%20out%20via%20CMS%20Group%20corporate%20portal.",
    responsibilities: [
      "Group strategic vision and enterprise growth",
      "Manufacturer alliances and key corporate accounts",
      "Macro supply-chain and expansion initiatives",
    ],
  },
  {
    name: "Parth Shah",
    role: "Operations & Distribution Management",
    phone: "+91 9900290040",
    phoneFormatted: "+91 99002 90040",
    initials: "PS",
    telUrl: "tel:+919900290040",
    whatsappUrl: "https://wa.me/919900290040?text=Hello%20Parth%20Shah,%20I%20am%20reaching%20out%20via%20CMS%20Group%20corporate%20portal.",
    responsibilities: [
      "Flagship warehousing throughput & stockist operations",
      "Logistics coordination & pan-India dispatch speed",
      "ERP workflow optimization and batch traceability",
    ],
  },
  {
    name: "Harvi Shah",
    role: "Commercial Relations & Digital Ecosystem",
    phone: "+91 8758788066",
    phoneFormatted: "+91 87587 88066",
    initials: "HS",
    telUrl: "tel:+918758788066",
    whatsappUrl: "https://wa.me/918758788066?text=Hello%20Harvi%20Shah,%20I%20am%20reaching%20out%20via%20CMS%20Group%20corporate%20portal.",
    responsibilities: [
      "Wholesale commerce & institutional partner relations",
      "Digital B2B platform integration & trade transparency",
      "Client service governance and regulatory liaison",
    ],
  },
];

export interface CorporateValue {
  title: string;
  description: string;
}

export const corporateValues: CorporateValue[] = [
  {
    title: "Quality First",
    description: "Strict adherence to good distribution practices, controlled cold-chain maintenance, and rigorous batch verification at every stage.",
  },
  {
    title: "Integrity",
    description: "Complete transparent compliance, authorized direct sourcing from manufacturers, and ethical commercial stewardship.",
  },
  {
    title: "Reliability",
    description: "Predictable stock availability, uninterrupted healthcare supply lines, and precision dispatch across urban and regional nodes.",
  },
  {
    title: "Customer Commitment",
    description: "Centering the operational priorities of retail pharmacies, hospitals, institutional healthcare providers, and distributors.",
  },
  {
    title: "Technology",
    description: "Deployment of enterprise-grade ERP workflows for inventory visibility, lot traceability, and digital B2B connectivity.",
  },
  {
    title: "Long-Term Partnerships",
    description: "Nurturing multi-decade collaborative relationships with leading global and Indian pharmaceutical manufacturers.",
  },
];
