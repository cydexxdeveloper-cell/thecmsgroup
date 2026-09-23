export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const navigationLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Group Companies", href: "/group-companies" },
  { title: "Distribution Network", href: "/distribution-network" },
  { title: "Infrastructure", href: "/infrastructure" },
  { title: "Compliance", href: "/compliance" },
  { title: "Vision", href: "/vision" },
  { title: "Contact", href: "/contact" },
];

export const quickLinks: NavItem[] = [
  { title: "About CMS Group", href: "/about" },
  { title: "Group Companies", href: "/group-companies" },
  { title: "Distribution Network", href: "/distribution-network" },
  { title: "Infrastructure & Supply Chain", href: "/infrastructure" },
  { title: "Quality & Compliance", href: "/compliance" },
  { title: "Future Vision", href: "/vision" },
  { title: "Contact Us", href: "/contact" },
];
