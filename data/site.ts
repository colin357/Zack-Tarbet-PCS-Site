/**
 * Central site configuration and structured-data (JSON-LD) builders.
 *
 * Single source of truth for SEO/AEO: NAP (name/address/phone), canonical
 * URL, social profiles, and the schema.org objects we emit across the site.
 *
 * The canonical origin is read from NEXT_PUBLIC_SITE_URL so it can be set per
 * environment (preview vs. production) without code changes. The default is
 * the production brand domain.
 */

export const SITE = {
  name: "Heroes Home Network",
  shortName: "Heroes Home Network",
  // Override per-environment via NEXT_PUBLIC_SITE_URL (no trailing slash).
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://heroeshomenetwork.com").replace(/\/$/, ""),
  description:
    "Your guide to military PCS moves. Explore 140+ base profiles, local neighborhood and school info, PCS resources, and connect with a VA loan specialist to buy a home near your next duty station.",
  logo: "/hhn-logo.png",
  ogImage: "/hhn-logo.png",
  locale: "en_US",
  phone: "+1-719-259-2246",
  phoneDisplay: "(719) 259-2246",
  nmls: "2040562",
  specialist: "Zack Tarbet",
  // VA loan specialist is licensed nationwide; the storefront is Colorado Springs.
  address: {
    city: "Colorado Springs",
    region: "CO",
    country: "US",
  },
  sameAs: [] as string[],
} as const;

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

type Json = Record<string, unknown>;

/**
 * Organization + FinancialService (a LocalBusiness subtype). Emitted once,
 * site-wide, from the root layout. Carries the NAP, license (NMLS), and the
 * nationwide service area so answer engines can attribute the brand.
 */
export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "FinancialService"],
    "@id": absoluteUrl("/#organization"),
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE.logo),
    },
    image: absoluteUrl(SITE.ogImage),
    description: SITE.description,
    telephone: SITE.phone,
    email: "info@heroeshomenetwork.com",
    priceRange: "$0 down (VA loans)",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "VA home loans",
      "Military PCS moves",
      "Basic Allowance for Housing (BAH)",
      "Military relocation",
      "Veteran home buying",
    ],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "NMLS",
      value: SITE.nmls,
    },
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

/** WebSite node so engines link pages back to one site entity. */
export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": absoluteUrl("/#organization") },
    inLanguage: "en-US",
  };
}

/** BreadcrumbList from an ordered list of { name, path } crumbs. */
export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage from question/answer pairs — the core AEO surface. */
export function faqPageSchema(faqs: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/** A marketed Service (e.g. VA home loans) provided by the organization. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType ?? opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: { "@type": "Country", name: "United States" },
  };
}
