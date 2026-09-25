import type { Metadata } from "next";
import GroupAndNetworkPage from "@/app/group-companies/page";

export const metadata: Metadata = {
  title: "Group & Stockist Network | CMS Group Pharmaceutical Ecosystem",
  description:
    "Explore CMS Group's unified ecosystem: core companies (Chandan Medical Stores ₹100 Cr, Veer Pharma ₹30 Cr, MediShah) and 4 partner stockists (Ketki Distributors, Anuraj Pharma, Madhuram Medicales, Janta Medical) integrated in 2025.",
  alternates: {
    canonical: "/group-companies",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DistributionNetworkPage() {
  return <GroupAndNetworkPage />;
}
