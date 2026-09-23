export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  description?: string;
}

export const corporateStats: StatItem[] = [
  {
    value: "₹180+ Cr",
    label: "Combined Group Turnover",
    description: "Aggregated annual revenue across retail, wholesale, and stockist entities",
  },
  {
    value: "1991",
    label: "Legacy Since",
    description: "Over 3 decades of uninterrupted pharmaceutical trust and service",
  },
  {
    value: "Pan-India",
    label: "Distribution Reach",
    description: "Multichannel connectivity spanning Gujarat and major national corridors",
  },
  {
    value: "50+",
    label: "Professionals at Flagship",
    sublabel: "Operations",
    description: "Dedicated specialists in inventory, compliance, dispatch, and client care",
  },
  {
    value: "5,000 sq. ft.",
    label: "Flagship Hub",
    description: "State-of-the-art centralized pharmaceutical fulfillment facility in Ambawadi",
  },
];
