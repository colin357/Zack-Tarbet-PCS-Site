import { Suspense } from "react";
import Link from "next/link";
import { bases } from "@/data/bases";
import Hero from "@/components/home/Hero";
import BaseCard from "@/components/installations/BaseCard";
import BaseMapSection from "@/components/home/BaseMapSection";
import FAQSection from "@/components/home/FAQSection";

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
      {/* 1. Hero — dark, text-only */}
      <Hero />

      {/* 2. Interactive Map — dark */}
      <section style={{ backgroundColor: "#060c18", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.75rem" }}>
            <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.75rem", margin: "0 0 0.375rem", letterSpacing: "-0.02em" }}>Find Your Next Installation</h2>
            <p style={{ color: "#64748b", fontSize: "0.875rem", margin: 0 }}>Click any base to explore info, local community, and housing resources</p>
          </div>
          <Suspense>
            <BaseMapSection bases={bases} />
          </Suspense>
        </div>
      </section>

      {/* 3. Featured Bases — light */}
      <section style={{ backgroundColor: "#f8fafc", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <h2 style={{ color: "#0f172a", fontWeight: 800, fontSize: "1.75rem", margin: 0, letterSpacing: "-0.02em" }}>Popular Installations</h2>
              <p style={{ color: "#64748b", fontSize: "0.875rem", margin: "0.375rem 0 0" }}>Frequently PCS&apos;d-to duty stations</p>
            </div>
            <Link href="/installations" style={{ color: "#0f172a", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", borderBottom: "2px solid #f5c518", paddingBottom: "1px" }}>
              See all {bases.length} installations
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
            {featuredBases.map(base => (
              <BaseCard key={base.slug} base={base} light />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ — light */}
      <FAQSection />

      {/* 5. Soft CTA — dark */}
      <section style={{ backgroundColor: "#0f172a", padding: "4rem 1.5rem", borderTop: "1px solid #1e293b" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.5rem", margin: "0 0 0.875rem", letterSpacing: "-0.02em" }}>
            PCS&apos;ing soon and thinking about buying?
          </h2>
          <p style={{ color: "#64748b", lineHeight: 1.75, marginBottom: "2rem", fontSize: "0.9375rem" }}>
            When you&apos;re ready, Heroes Home Network can help you navigate the VA loan process — $0 down, fast closings, all 50 states.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/va-home-loans" style={{ display: "inline-block", backgroundColor: "#f5c518", color: "#0a0f1e", padding: "0.875rem 2rem", borderRadius: "6px", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none" }}>
              Learn About VA Loans
            </Link>
            <Link href="/contact" style={{ display: "inline-block", color: "#64748b", padding: "0.875rem 2rem", borderRadius: "6px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid #1e293b" }}>
              Talk to Someone
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
