import type { Metadata } from "next";
import { bases, branches, type Branch, branchColors } from "@/data/bases";
import BaseCard from "@/components/installations/BaseCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Military Installations | Heroes Home Network",
  description: "Browse all U.S. military installations by branch. Find base information, local housing, and VA loan resources for your next PCS move.",
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
    <div style={{ backgroundColor: "#0a0f1e", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ background: "linear-gradient(135deg, #060c18 0%, #0a0f1e 100%)", padding: "3rem 1.5rem 2rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1 style={{ color: "#f1f5f9", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, margin: "0 0 0.5rem" }}>
            Military Installations
          </h1>
          <p style={{ color: "#6b7280", fontSize: "1rem", margin: "0 0 1.5rem" }}>
            {sorted.length} installations{activeBranch ? ` · ${activeBranch}` : " · All Branches"}
          </p>

          {/* Search */}
          <form style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <input
              name="q"
              defaultValue={query}
              placeholder="Search by name, city, or state..."
              style={{
                flex: 1, minWidth: "240px", backgroundColor: "#111827",
                border: "1px solid #1f2937", borderRadius: "8px",
                padding: "0.75rem 1rem", color: "#f1f5f9", fontSize: "0.9rem", outline: "none",
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
            <Link
              href="/installations"
              style={{
                padding: "0.375rem 0.875rem", borderRadius: "9999px", fontSize: "0.75rem",
                fontWeight: 600, textDecoration: "none", border: "1px solid",
                borderColor: !activeBranch ? "#f5c518" : "#374151",
                backgroundColor: !activeBranch ? "rgba(245, 197, 24, 0.15)" : "transparent",
                color: !activeBranch ? "#f5c518" : "#9ca3af",
              }}
            >
              All Branches
            </Link>
            {branches.map(branch => (
              <Link
                key={branch}
                href={`/installations?branch=${encodeURIComponent(branch)}`}
                style={{
                  padding: "0.375rem 0.875rem", borderRadius: "9999px", fontSize: "0.75rem",
                  fontWeight: 600, textDecoration: "none", border: "1px solid",
                  borderColor: activeBranch === branch ? branchColors[branch] : "#374151",
                  backgroundColor: activeBranch === branch ? `${branchColors[branch]}22` : "transparent",
                  color: activeBranch === branch ? branchColors[branch] : "#9ca3af",
                  display: "inline-flex", alignItems: "center", gap: "0.375rem",
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: branchColors[branch], display: "inline-block" }} />
                {branch}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {sorted.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "#6b7280" }}>
              <p style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>No installations found.</p>
              <Link href="/installations" style={{ color: "#f5c518", fontSize: "0.875rem" }}>Clear filters →</Link>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {sorted.map(base => (
                <BaseCard key={base.slug} base={base} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
