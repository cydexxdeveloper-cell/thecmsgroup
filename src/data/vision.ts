export interface VisionInitiative {
  num: string;
  title: string;
  subtitle: string;
  status: string;
  description: string;
  strategicGoals: string[];
}

export const visionInitiatives: VisionInitiative[] = [
  {
    num: "01",
    title: "Carrying & Forwarding (C&F Operations)",
    subtitle: "Dedicated Enterprise Depots for Pharmaceutical Principals",
    status: "Strategic Expansion Initiative",
    description:
      "CMS Group is actively developing specialized warehousing infrastructure, temperature-validated storage, and multi-tier logistics capabilities tailored for future Carrying & Forwarding (C&F) operations serving premier pharmaceutical manufacturers across India.",
    strategicGoals: [
      "Dedicated multi-acre distribution depot planning in key Western logistics corridors",
      "End-to-end WMS (Warehouse Management System) integration with manufacturer ERPs",
      "Custom cold-chain zones engineered for biopharmaceuticals and temperature-sensitive biologicals",
      "Scalable infrastructure designed to meet the rigorous audit standards of global pharmaceutical corporations",
    ],
  },
  {
    num: "02",
    title: "Pharmaceutical Export",
    subtitle: "Taking Indian Healthcare Excellence to Global Markets",
    status: "Regulatory Development Initiative",
    description:
      "Building regulatory-compliant export channels with the clear objective of supplying high-quality Indian pharmaceutical formulations to international healthcare markets, adhering to international drug regulatory guidelines.",
    strategicGoals: [
      "Establishing regulatory dossier documentation and export licensing channels",
      "Collaborating with certified Indian formulation manufacturers for international market requirements",
      "Developing temperature-controlled international freight and customs clearance partnerships",
      "Targeting emerging global healthcare markets seeking affordable, high-standard pharmaceutical supplies",
    ],
  },
  {
    num: "03",
    title: "Generic & Specialty Distribution",
    subtitle: "Expanding Access to Affordable & Critical Therapies",
    status: "Market Expansion Initiative",
    description:
      "Expanding distribution capabilities for high-quality affordable generic medicines as well as complex specialty therapeutic segments including oncology, critical care, nephrology, and immunology.",
    strategicGoals: [
      "Broadening access to cost-effective essential generic medicines for tier-2 and tier-3 communities",
      "Dedicated specialty care handling units with ultra-low temperature cold-chain infrastructure",
      "Strategic distribution partnerships with hospitals, specialized oncology clinics, and dialysis centers",
      "Streamlined emergency procurement pathways for life-saving critical care therapeutics",
    ],
  },
];
