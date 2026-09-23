export interface CompliancePillar {
  id: string;
  title: string;
  badge: string;
  summary: string;
  details: string[];
}

export const compliancePillars: CompliancePillar[] = [
  {
    id: "licensing",
    title: "Licensing & Statutory Compliance",
    badge: "Regulatory Mandate",
    summary:
      "CMS Group entities operate strictly under applicable State Food and Drug Control Administration wholesale and retail drug licensing requirements.",
    details: [
      "Rigorous adherence to Drugs and Cosmetics Act and Rules guidelines",
      "Valid wholesale and retail drug licenses held by respective operating entities",
      "Regular statutory compliance filings and authorized inspections",
      "Registered qualified pharmaceutical personnel overseeing dispensing and distribution",
    ],
  },
  {
    id: "storage",
    title: "Storage & Temperature Standards",
    badge: "Storage Integrity",
    summary:
      "Systematic pharmaceutical storage adhering to product-specific preservation protocols and climate controls.",
    details: [
      "Dedicated cold-chain and temperature-controlled storage spaces",
      "Protection from direct sunlight, moisture, and environmental contamination",
      "Systematic shelf organization by batch, expiry, and therapeutic class",
      "FIFO (First-In, First-Out) and FEFO (First-Expired, First-Out) stock rotation principles",
    ],
  },
  {
    id: "traceability",
    title: "Batch Verification & Traceability",
    badge: "Supply Chain Safety",
    summary:
      "Multi-tier batch verification protocols safeguarding the end-to-end supply chain against errors and adulteration.",
    details: [
      "Inbound physical inspection against manufacturer invoices and batch certificates",
      "Digital recording of batch numbers, manufacturing dates, and expiry dates into ERP",
      "Automated alerts preventing dispatch of near-expiry inventory without authorization",
      "Instant audit recall capability mapping any batch from supplier to recipient",
    ],
  },
  {
    id: "gst-tax",
    title: "GST & Tax Transparency",
    badge: "Commercial Governance",
    summary:
      "Fully compliant, auditable financial operations engineered to support seamless transactions with large healthcare institutions and corporate entities.",
    details: [
      "100% computerized tax invoices with precise HSN coding and GST rates",
      "E-way bill compliance for all inter-state and intra-state consignments",
      "Timely statutory tax filings ensuring seamless input tax credit (ITC) for buyers",
      "Transparent audit trails supporting corporate and institutional auditing standards",
    ],
  },
  {
    id: "authentic-sourcing",
    title: "100% Authentic Sourcing Policy",
    badge: "Zero Tolerance",
    summary:
      "A resolute zero-tolerance stance against counterfeit, diverted, or substandard pharmaceuticals.",
    details: [
      "Procurement strictly direct from pharmaceutical manufacturers and their authorized CFA/C&F channels",
      "Complete exclusion of unverified secondary intermediaries or gray market channels",
      "Continuous verification of manufacturer tamper-evident seals and security packaging",
      "Institutional commitment to patient health and genuine medicine accessibility",
    ],
  },
  {
    id: "manufacturer-alliances",
    title: "Direct Manufacturer Relationships",
    badge: "Commercial Partnerships",
    summary:
      "Decades of direct, authorized commercial relationships with leading multinational and premier domestic pharmaceutical corporations.",
    details: [
      "Authorized stockist and retail distribution agreements",
      "Direct technical updates and product launch coordination with manufacturers",
      "Consistent feedback loops regarding market demand and stock availability",
      "Mutual trust developed over 30+ years of ethical business conduct",
    ],
  },
];
