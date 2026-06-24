import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Faceted installation URLs (?branch=, ?q=) are duplicate views of
      // /installations — let engines crawl pages, not query permutations.
      disallow: ["/installations?"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
