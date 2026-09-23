import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  lightTheme?: boolean;
}

export default function Breadcrumb({ items, lightTheme = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-xs font-medium space-x-1.5 py-1">
      <Link
        href="/"
        className={`flex items-center gap-1 transition-colors ${
          lightTheme ? "text-gray-300 hover:text-white" : "text-[#4B6365] hover:text-[#003F43]"
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            <ChevronRight
              className={`w-3.5 h-3.5 ${
                lightTheme ? "text-gray-400" : "text-gray-400"
              }`}
            />
            {isLast || !item.href ? (
              <span
                className={`font-semibold ${
                  lightTheme ? "text-[#FF7900]" : "text-[#003F43]"
                }`}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`transition-colors ${
                  lightTheme ? "text-gray-300 hover:text-white" : "text-[#4B6365] hover:text-[#003F43]"
                }`}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
