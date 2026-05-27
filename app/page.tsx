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
    <div>
      {/* 1. Hero — dark */}
      <Hero />

      {/* 2. Browse by Branch — light */}
      <section style={{ backgroundColor: "#ffffff", padding: "4rem 1.5rem", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 0.375rem" }}>Find Your Base</p>
              <h2 style={{ color: "#0f172a", fontWeight: 800, fontSize: "1.75rem", margin: 0, letterSpacing: "-0.02em" }}>Browse by Branch</h2>
            </div>
            <Link href="/installations" style={{ color: "#475569", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", borderBottom: "2px solid #f5c518", paddingBottom: "1px" }}>
              View all installations
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
            {branches.map(branch => {
              const count = bases.filter(b => b.branch === branch).length;
              const color = branchColors[branch];
              return (
                <Link
                  key={branch}
                  href={`/installations?branch=${encodeURIComponent(branch)}`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "0.625rem 1rem",
                    textDecoration: "none",
                    transition: "all 0.15s",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: color, flexShrink: 0 }} />
                  <span style={{ color: "#0f172a", fontWeight: 600, fontSize: "0.875rem" }}>{branch}</span>
                  <span style={{ color: "#94a3b8", fontSize: "0.75rem" }}>{count}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Interactive Map — dark */}
      <section style={{ backgroundColor: "#060c18", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.75rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 0.375rem" }}>Interactive</p>
              <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.75rem", margin: 0, letterSpacing: "-0.02em" }}>Find Your Next Installation</h2>
              <p style={{ color: "#64748b", fontSize: "0.875rem", margin: "0.375rem 0 0" }}>Click any base to explore housing, activities, and VA loan resources</p>
            </div>
            <Link href="/installations" style={{ color: "#94a3b8", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>Browse all →</Link>
          </div>
          <Suspense>
            <BaseMapSection bases={bases} />
          </Suspense>
        </div>
      </section>

      {/* 4. VA Loan CTA — light (with photo) */}
      <VALoanCTA />

      {/* 5. Featured Bases — light */}
      <section style={{ backgroundColor: "#f8fafc", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 0.375rem" }}>Popular Duty Stations</p>
              <h2 style={{ color: "#0f172a", fontWeight: 800, fontSize: "1.75rem", margin: 0, letterSpacing: "-0.02em" }}>Top Installations</h2>
            </div>
            <Link href="/installations" style={{ color: "#475569", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", borderBottom: "2px solid #f5c518", paddingBottom: "1px" }}>
              See all {bases.length} bases
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
            {featuredBases.map(base => (
              <BaseCard key={base.slug} base={base} light />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA — dark */}
      <section style={{ backgroundColor: "#0f172a", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#ffffff", fontWeight: 900, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", margin: "0 0 1rem", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            Ready to make your next move<br />
            <span style={{ color: "#f5c518" }}>your best one yet?</span>
          </h2>
          <p style={{ color: "#64748b", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "1rem" }}>
            Expert VA loan guidance for military families — $0 down, fast closings, licensed in all 50 states.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#f5c518", color: "#0a0f1e", padding: "1rem 2.25rem", borderRadius: "6px", fontSize: "0.9375rem", fontWeight: 700, textDecoration: "none" }}>
              Get Pre-Approved Today
            </Link>
            <Link href="/pcs-resources" style={{ display: "inline-block", color: "#94a3b8", padding: "1rem 2.25rem", borderRadius: "6px", fontSize: "0.9375rem", fontWeight: 600, textDecoration: "none", border: "1px solid #1e293b" }}>
              PCS Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
