export const SITE_URL = "https://thecmsgroup.in";
export const SITE_NAME = "CMS Group";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/brand/cms-group-logo.png`;

export const DEFAULT_DESCRIPTION =
  "CMS Group is an Ahmedabad-based pharmaceutical group for retail, wholesale, stockist and B2B medicine distribution. Explore Chandan Medical Stores and MediShah.";

export function absoluteUrl(path = "/") {
  const normalizedPath =
    path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  return new URL(normalizedPath, `${SITE_URL}/`).toString();
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "CMS Group",
      alternateName: [
        "A Chain of Medical Stores & Agency",
        "CMS Group India",
        "CMS Group Pharmaceutical Distribution",
      ],
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
        width: 600,
        height: 600,
      },
      image: LOGO_URL,
      foundingDate: "1991",
      description: DEFAULT_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9427620590",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9900290040",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
      ],
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      knowsAbout: [
        "Pharmaceutical wholesale",
        "Pharmaceutical distribution",
        "Retail pharmacy",
        "Stockist distribution",
        "B2B medicine commerce",
      ],
      sameAs: [
        "https://chandanmedicalstores.com/",
        "https://medishah.com/",
      ],
      subOrganization: [
        {
          "@id": `${SITE_URL}/chandan-medical-stores/#pharmacy`,
        },
        {
          "@id": `${SITE_URL}/medishah/#organization`,
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: absoluteUrl("/"),
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      inLanguage: "en-IN",
    },
  ],
};

export interface BreadcrumbSchemaItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageJsonLd({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": ORGANIZATION_ID,
    },
    inLanguage: "en-IN",
  };
}
