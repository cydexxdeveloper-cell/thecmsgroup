import type { Metadata } from "next";
import GroupAndNetworkPage from "@/app/group-companies/page";

export const metadata: Metadata = {
  title: "Stockist Network | CMS Group Partner Stockists & Supply Reach",
  description:
    "Explore CMS Group's partner stockist network: Ketki Distributors (Est. 1991), Anuraj Pharma (Est. 2016), Madhuram Medicales (Est. 1986), and Janta Medical (Est. 1973), all integrated into CMS Group in 2025.",
  alternates: {
    canonical: "/network",
  },
};

export default function NetworkPage() {
  return <GroupAndNetworkPage />;
}
