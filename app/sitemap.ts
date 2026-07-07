import type { MetadataRoute } from "next";
import { bases, branches } from "@/data/bases";
import { SITE } from "@/data/site";

/**
 * Dynamic sitemap: static marketing pages, all 145 installation profiles, and
 * the per-branch installation facets. Regenerated at build time from the data.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE.url}${path}`;

  const staticPages: MetadataRoute.Sitemap = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/military-pcs-guide", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pcs-checklist", priority: 0.8, changeFrequency: "monthly" },
    { path: "/installations", priority: 0.9, changeFrequency: "weekly" },
    { path: "/va-home-loans", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pcs-resources", priority: 0.8, changeFrequency: "monthly" },
    { path: "/pcs/fort-carson", priority: 0.7, changeFrequency: "monthly" },
    { path: "/pcs/fort-carson/guide", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ].map(p => ({
    url: url(p.path),
    changeFrequency: p.changeFrequency as "weekly" | "monthly" | "yearly",
    priority: p.priority,
  }));

  const branchPages: MetadataRoute.Sitemap = branches.map(branch => ({
    url: url(`/installations?branch=${encodeURIComponent(branch)}`),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const basePages: MetadataRoute.Sitemap = bases.map(base => ({
    url: url(`/installations/${base.slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...branchPages, ...basePages];
}
