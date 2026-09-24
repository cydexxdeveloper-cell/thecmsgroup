export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const navigationLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Group & Network", href: "/group-companies" },
  { title: "Infrastructure", href: "/infrastructure" },
  { title: "Compliance", href: "/compliance" },
  { title: "Vision", href: "/vision" },
];

export const quickLinks: NavItem[] = [
  { title: "About CMS Group", href: "/about" },
  { title: "Group & Network", href: "/group-companies" },
  { title: "Infrastructure & Supply Chain", href: "/infrastructure" },
  { title: "Quality & Compliance", href: "/compliance" },
  { title: "Future Vision", href: "/vision" },
  { title: "Contact Us", href: "/contact" },
];
