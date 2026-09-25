import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | CMS Group",
  description: "The requested CMS Group page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-24 text-center">
      <div className="max-w-xl space-y-5">
        <span className="inline-flex rounded-full bg-[#EEF2F1] px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#003F43]">
          404
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#102D30] sm:text-4xl">
          This page could not be found
        </h1>
        <p className="text-sm leading-relaxed text-[#4B6365] sm:text-base">
          The page may have moved. Return to CMS Group to explore our pharmaceutical distribution, healthcare and group company services.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-[#003F43] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#003236]"
        >
          Back to CMS Group
        </Link>
      </div>
    </div>
  );
}
