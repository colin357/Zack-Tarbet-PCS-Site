import { Suspense } from "react";
import Link from "next/link";
import { bases, branches, branchColors } from "@/data/bases";
import Hero from "@/components/home/Hero";
import VALoanCTA from "@/components/home/VALoanCTA";
import BaseCard from "@/components/installations/BaseCard";
import BaseMapSection from "@/components/home/BaseMapSection";

const featuredSlugs = [
  "fort-liberty", "camp-lejeune", "joint-base-lewis-mcchord",
  "nellis-afb", "fort-campbell", "navsta-norfolk",
  "camp-pendleton", "macdill-afb",
];
const featuredBases = featuredSlugs
  .map(slug => bases.find(b => b.slug === slug))
  .filter((b): b is NonNullable<typeof b> => b !== undefined);

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#0a0f1e" }}>
      <Hero />

      {/* Browse by Branch */}
      <section style={{ padding: "3rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <h2 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.375rem", margin: 0 }}>Browse by Branch</h2>
            <Link href="/installations" style={{ color: "#f5c518", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>View all installations →</Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {branches.map(branch => {
              const count = bases.filter(b => b.branch === branch).length;
              const color = branchColors[branch];
              return (
                <Link
                  key={branch}
                  href={`/installations?branch=${encodeURIComponent(branch)}`}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.625rem",
                    backgroundColor: "#111827", border: "1px solid #1f2937",
                    borderRadius: "10px", padding: "0.75rem 1.25rem",
                    textDecoration: "none", flex: "1 0 auto",
                    minWidth: "180px",
                  }}
                >
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: color, flexShrink: 0 }} />
                  <div>
                    <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem" }}>{branch}</div>
                    <div style={{ color: "#4b5563", fontSize: "0.75rem" }}>{count} installations</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <div>
              <h2 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.375rem", margin: "0 0 0.25rem" }}>Find Your Next Base</h2>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>Click any dot to explore base info, housing, and VA loan resources</p>
            </div>
            <Link href="/installations" style={{ color: "#f5c518", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>Browse all →</Link>
          </div>
          <Suspense>
            <BaseMapSection bases={bases} />
          </Suspense>
        </div>
      </section>

      {/* VA Loan CTA */}
      <VALoanCTA />

      {/* Featured Bases */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <div>
              <h2 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.375rem", margin: "0 0 0.25rem" }}>Popular Installations</h2>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>Frequently PCS&apos;d-to duty stations</p>
            </div>
            <Link href="/installations" style={{ color: "#f5c518", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>View all {bases.length} bases →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
            {featuredBases.map(base => (
              <BaseCard key={base.slug} base={base} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section style={{ padding: "3.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.75rem", margin: "0 0 1rem", lineHeight: 1.2 }}>
            Ready to make your next move<br /><span style={{ color: "#f5c518" }}>your best one yet?</span>
          </h2>
          <p style={{ color: "#6b7280", lineHeight: 1.7, marginBottom: "2rem" }}>
            Get expert VA loan guidance from a specialist who puts military families first — fast closings, $0 down, all 50 states.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#f5c518", color: "#0a0f1e", padding: "1rem 2rem", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none" }}>
              Get Pre-Approved Today
            </Link>
            <Link href="/pcs-resources" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#9ca3af", padding: "1rem 2rem", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid #374151" }}>
              PCS Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
