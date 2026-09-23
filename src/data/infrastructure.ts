export interface FacilitySpec {
  name: string;
  type: string;
  location: string;
  area: string;
  team: string;
  description: string;
  capabilities: string[];
}

export const facilitySpecs: FacilitySpec[] = [
  {
    name: "Flagship Ambawadi Hub",
    type: "Central Distribution Center",
    location: "Ambawadi, Ahmedabad",
    area: "5,000 sq. ft.",
    team: "50 Dedicated Professionals",
    description:
      "Advanced central logistics facility optimized for high-throughput receiving, cold-chain storage, lot sorting, and multi-tier institutional dispatch.",
    capabilities: [
      "High-density pharmaceutical racking & storage",
      "Temperature-regulated zones for sensitive formulations",
      "Dedicated staging docks for multi-carrier dispatch",
      "Real-time ERP barcode inventory scanning",
    ],
  },
  {
    name: "Ellisbridge Facility",
    type: "Stockist & Retail Center",
    location: "Ellisbridge, Ahmedabad",
    area: "800–1,500 sq. ft.",
    team: "7–10 Team Members",
    description:
      "Strategic urban fulfillment hub supporting primary stockist supply and high-volume retail operations across core healthcare districts.",
    capabilities: [
      "Multi-division OTC & ethical formulation storage",
      "Same-day local hospital and pharmacy dispatch",
      "Prime metropolitan accessibility",
      "Integrated regulatory documentation center",
    ],
  },
  {
    name: "Gandhinagar Regional Unit (Madhuram)",
    type: "Regional Stockist Facility",
    location: "Gandhinagar, Gujarat",
    area: "800–1,500 sq. ft.",
    team: "7–10 Team Members",
    description:
      "Dedicated regional facility serving the state capital and surrounding district networks with a comprehensive multi-brand pharmaceutical catalog.",
    capabilities: [
      "Dedicated regional inventory holding buffer",
      "Direct replenishment to primary healthcare centers",
      "Standardized temperature and climate controls",
      "Audited storage compliance workflows",
    ],
  },
  {
    name: "Mansa Northern Unit (Janta Medical)",
    type: "Regional Stockist Facility",
    location: "Mansa, Gujarat",
    area: "800–1,500 sq. ft.",
    team: "7–10 Team Members",
    description:
      "Established in 1973, anchor distribution hub providing dependable healthcare product connectivity across Northern Gujarat corridors.",
    capabilities: [
      "Broad multi-segment pharmaceutical holding",
      "Deep local retailer relationship network",
      "Systematic batch-wise storage management",
      "Reliable daily distribution dispatch cycles",
    ],
  },
];

export const erpCapabilities = [
  {
    title: "Order Processing",
    description: "Rapid end-to-end digital sales order entry, automated credit verification, and expedited pick-pack-ship workflows.",
  },
  {
    title: "Batch Traceability",
    description: "Granular lot and expiration tracking from manufacturer intake through final retail and institutional delivery.",
  },
  {
    title: "Inventory Management",
    description: "Dynamic stock visibility, reorder point alerts, and minimum-maximum stock level control across all hubs.",
  },
  {
    title: "Dispatch Coordination",
    description: "Route-optimized carrier dispatch management ensuring safe transit conditions and timely pan-India delivery.",
  },
  {
    title: "Operational Visibility",
    description: "Unified analytics dashboard providing complete visibility into turnover, inventory velocity, and fulfillment metrics.",
  },
];
