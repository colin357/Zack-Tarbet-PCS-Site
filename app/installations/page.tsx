import type { Metadata } from "next";
import { bases, branches, type Branch, branchColors } from "@/data/bases";
import BaseCard from "@/components/installations/BaseCard";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, absoluteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Military Installations",
  description: "Browse all U.S. military installations by branch. Find base information, local housing, and VA loan resources for your next PCS move.",
  alternates: { canonical: "/installations" },
  openGraph: {
    title: "Military Installations | Heroes Home Network",
    description: "Browse all U.S. military installations by branch. Find base information, local housing, and VA loan resources for your next PCS move.",
    url: "/installations",
    type: "website",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "U.S. Military Installations Directory",
  description: "Directory of U.S. military installations with neighborhood, school, housing, and VA loan resources for PCS moves.",
  url: absoluteUrl("/installations"),
  isPartOf: { "@id": absoluteUrl("/#website") },
  about: { "@id": absoluteUrl("/#organization") },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: bases.length,
    itemListElement: bases.map((base, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${base.name} — ${base.city}, ${base.state}`,
      url: absoluteUrl(`/installations/${base.slug}`),
    })),
  },
};

interface Props {
  searchParams: Promise<{ branch?: string; q?: string }>;
}

export default async function InstallationsPage({ searchParams }: Props) {
  const params = await searchParams;
  const activeBranch = params.branch as Branch | undefined;
  const query = params.q?.toLowerCase() || "";

  let filtered = bases;
  if (activeBranch && branches.includes(activeBranch as Branch)) {
    filtered = filtered.filter(b => b.branch === activeBranch);
  }
  if (query) {
    filtered = filtered.filter(b =>
      b.name.toLowerCase().includes(query) ||
      b.city.toLowerCase().includes(query) ||
      b.state.toLowerCase().includes(query)
    );
  }

  const sorted = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <JsonLd
        data={[
          collectionSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Installations", path: "/installations" },
          ]),
        ]}
      />
      {/* Header — dark */}
      <section style={{ backgroundColor: "#0f172a", padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 0.5rem" }}>
            {activeBranch || "All Branches"}
          </p>
          <h1 style={{ color: "#ffffff", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>
            Military Installations
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.9rem", margin: "0 0 2rem" }}>
            {sorted.length} installation{sorted.length !== 1 ? "s" : ""} found
          </p>

          {/* Search */}
          <form style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <input
              name="q"
              defaultValue={query}
              placeholder="Search by name, city, or state..."
              style={{
                flex: 1, minWidth: "240px",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "8px",
                padding: "0.75rem 1rem",
                color: "#f1f5f9",
                fontSize: "0.9rem",
                outline: "none",
              }}
            />
            <button type="submit" style={{
              backgroundColor: "#f5c518", color: "#0a0f1e",
              padding: "0.75rem 1.5rem", borderRadius: "8px",
              fontSize: "0.875rem", fontWeight: 700, border: "none", cursor: "pointer",
            }}>
              Search
            </button>
          </form>

          {/* Branch filters */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link href="/installations" style={{
              padding: "0.4rem 0.875rem", borderRadius: "6px", fontSize: "0.8rem",
              fontWeight: 600, textDecoration: "none",
              backgroundColor: !activeBranch ? "#f5c518" : "rgba(255,255,255,0.08)",
              color: !activeBranch ? "#0a0f1e" : "#94a3b8",
              border: !activeBranch ? "none" : "1px solid rgba(255,255,255,0.1)",
            }}>
              All
            </Link>
            {branches.map(branch => (
              <Link key={branch} href={`/installations?branch=${encodeURIComponent(branch)}`} style={{
                padding: "0.4rem 0.875rem", borderRadius: "6px", fontSize: "0.8rem",
                fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.375rem",
                backgroundColor: activeBranch === branch ? `${branchColors[branch]}22` : "rgba(255,255,255,0.06)",
                color: activeBranch === branch ? branchColors[branch] : "#94a3b8",
                border: activeBranch === branch ? `1px solid ${branchColors[branch]}55` : "1px solid rgba(255,255,255,0.08)",
              }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: branchColors[branch] }} />
                {branch}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grid — light */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {sorted.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "#64748b" }}>
              <p style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>No installations found.</p>
              <Link href="/installations" style={{ color: "#0f172a", fontSize: "0.875rem", fontWeight: 600 }}>Clear filters →</Link>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {sorted.map(base => (
                <BaseCard key={base.slug} base={base} light />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
