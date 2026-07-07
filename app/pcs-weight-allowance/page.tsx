import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { Scale, Package, AlertTriangle, Plane, ArrowRight, Calculator } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import GetInTouch from "@/components/cta/GetInTouch";
import { faqPageSchema, breadcrumbSchema, absoluteUrl, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Military PCS Weight Allowance Guide (2026)",
  description:
    "Your military PCS weight allowance by rank, with and without dependents. See the full JTR HHG table, pro-gear rules, and what happens if you go over.",
  alternates: { canonical: "/pcs-weight-allowance" },
  openGraph: {
    title: "Military PCS Weight Allowance Guide (2026) | Heroes Home Network",
    description:
      "The full JTR HHG weight allowance table by rank and dependents, plus pro-gear, baggage, and over-weight rules for your PCS move.",
    url: "/pcs-weight-allowance",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Military PCS Weight Allowance Guide (2026)",
  description:
    "The JTR household goods weight allowance table by pay grade and dependency status, with pro-gear, unaccompanied baggage, and over-weight rules for a military PCS move.",
  url: absoluteUrl("/pcs-weight-allowance"),
  image: absoluteUrl(SITE.ogImage),
  author: { "@id": absoluteUrl("/#organization") },
  publisher: { "@id": absoluteUrl("/#organization") },
  about: ["Military PCS weight allowance", "HHG weight allowance", "JTR Table 5-37", "Military relocation"],
  isPartOf: { "@id": absoluteUrl("/#website") },
};

const faqs = [
  {
    q: "What is my PCS weight allowance?",
    a: "Your PCS weight allowance is the maximum weight of household goods the government will move at its expense. It is set by your pay grade and whether you have dependents, and it is published in JTR Table 5-37. Allowances run from 5,000 pounds for a junior enlisted member without dependents up to 18,000 pounds for senior officers.",
  },
  {
    q: "What is the weight allowance for an O-4 with dependents?",
    a: "An O-4 with dependents has a household goods weight allowance of 17,000 pounds under JTR Table 5-37. An O-4 without dependents has 14,000 pounds. Professional gear (pro-gear) is authorized in addition to that amount, not counted against it.",
  },
  {
    q: "Does pro-gear count against my weight allowance?",
    a: "No. Professional books, papers, and equipment (pro-gear) needed for your official duties is weighed and shipped in addition to your household goods allowance, as long as it is documented correctly. Your spouse may also be authorized a separate pro-gear amount. Confirm the current limits in the JTR.",
  },
  {
    q: "What happens if I go over my PCS weight allowance?",
    a: "You pay for the excess. The transportation office bills you for the cost of moving every pound over your limit, at the government rate for your move. Weigh early, sell or store what you do not need, and keep certified weight tickets so you can dispute an incorrect charge.",
  },
  {
    q: "Is the weight allowance different for an OCONUS move?",
    a: "The household goods allowance is the same, but an overseas move adds an unaccompanied baggage shipment that arrives faster, and it can limit or authorize consumables shipments. Those pieces come out of or attach to your total allowance depending on the move, so check your specific orders and the JTR.",
  },
  {
    q: "Where can I check my official weight allowance?",
    a: "Use JTR Table 5-37 for the authoritative figures and the Military OneSource weight estimator to gauge how much your household actually weighs. Your local transportation office can confirm the allowance on your specific orders.",
  },
];

// ── Shared style tokens (match the repo's inline-style convention) ──
const container = { maxWidth: "1100px", margin: "0 auto" } as const;

const sectionTitle = {
  color: "#f1f5f9",
  fontWeight: 800 as const,
  fontSize: "1.5rem",
  margin: "0 0 0.75rem",
  lineHeight: 1.3,
} as const;

const bodyText = {
  color: "#9ca3af",
  fontSize: "1rem",
  lineHeight: 1.75,
  margin: "0 0 1rem",
} as const;

const card = {
  backgroundColor: "#111827",
  border: "1px solid #1f2937",
  borderRadius: "12px",
  padding: "1.75rem",
} as const;

const anchor = {
  color: "#f5c518",
  fontWeight: 600 as const,
  textDecoration: "none",
} as const;

// JTR Table 5-37, Maximum HHG Weight Allowances (pounds). Verified against the
// Joint Travel Regulations and Military OneSource; current for 2026.
const weightTable = [
  {
    group: "Enlisted",
    rows: [
      { grade: "E-1", without: "5,000", withDep: "8,000" },
      { grade: "E-2", without: "5,000", withDep: "8,000" },
      { grade: "E-3", without: "5,000", withDep: "8,000" },
      { grade: "E-4", without: "7,000", withDep: "8,000" },
      { grade: "E-5", without: "7,000", withDep: "9,000" },
      { grade: "E-6", without: "8,000", withDep: "11,000" },
      { grade: "E-7", without: "11,000", withDep: "13,000" },
      { grade: "E-8", without: "12,000", withDep: "14,000" },
      { grade: "E-9", without: "13,000", withDep: "15,000" },
    ],
  },
  {
    group: "Warrant Officer",
    rows: [
      { grade: "W-1", without: "10,000", withDep: "12,000" },
      { grade: "W-2", without: "12,500", withDep: "13,500" },
      { grade: "W-3", without: "13,000", withDep: "14,500" },
      { grade: "W-4", without: "14,000", withDep: "17,000" },
      { grade: "W-5", without: "16,000", withDep: "17,500" },
    ],
  },
  {
    group: "Officer",
    rows: [
      { grade: "O-1", without: "10,000", withDep: "12,000" },
      { grade: "O-2", without: "12,500", withDep: "13,500" },
      { grade: "O-3", without: "13,000", withDep: "14,500" },
      { grade: "O-4", without: "14,000", withDep: "17,000", highlight: true },
      { grade: "O-5", without: "16,000", withDep: "17,500" },
      { grade: "O-6", without: "18,000", withDep: "18,000" },
      { grade: "O-7", without: "18,000", withDep: "18,000" },
      { grade: "O-8", without: "18,000", withDep: "18,000" },
      { grade: "O-9", without: "18,000", withDep: "18,000" },
      { grade: "O-10", without: "18,000", withDep: "18,000" },
    ],
  },
];

export default function PcsWeightAllowancePage() {
  return (
    <div style={{ backgroundColor: "#0a0f1e" }}>
      <JsonLd
        data={[
          articleSchema,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Military PCS Guide", path: "/military-pcs-guide" },
            { name: "Weight Allowance", path: "/pcs-weight-allowance" },
          ]),
        ]}
      />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #060c18 0%, #0a0f1e 100%)",
          padding: "4rem 1.5rem",
          borderBottom: "1px solid #1f2937",
        }}
      >
        <div style={container}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(245, 197, 24, 0.1)",
              border: "1px solid rgba(245, 197, 24, 0.3)",
              borderRadius: "9999px",
              padding: "0.375rem 1rem",
              marginBottom: "1.5rem",
            }}
          >
            <Scale size={14} color="#f5c518" />
            <span style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              WEIGHT ALLOWANCE
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 1.25rem", lineHeight: 1.15 }}>
            Military PCS Weight Allowance Guide
          </h1>

          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "720px", margin: "0 0 1rem" }}>
            Your military PCS weight allowance is the most household goods the
            government will ship at its expense, and it is set by your rank and
            whether you have dependents. Go over it and you pay for the excess,
            so it is worth knowing your number before pack-out.
          </p>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "720px", margin: 0 }}>
            The full table is below, straight from JTR Table 5-37 and current for
            2026. New to the process? Start with the{" "}
            <Link href="/military-pcs-guide" style={anchor}>complete military PCS move guide</Link>
            .
          </p>
        </div>
      </section>

      {/* Weight table */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem" }}>PCS weight allowance by rank</h2>
          <p style={{ ...bodyText, marginBottom: "1.5rem", maxWidth: "720px" }}>
            All figures are maximum household goods (HHG) weight in pounds. A
            member &quot;with dependents&quot; has at least one dependent eligible
            to travel at government expense on the PCS.
          </p>

          <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #1f2937" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "480px", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ backgroundColor: "#111827" }}>
                  <th style={{ textAlign: "left", color: "#f5c518", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.06em", padding: "0.875rem 1.25rem", borderBottom: "1px solid #1f2937" }}>
                    PAY GRADE
                  </th>
                  <th style={{ textAlign: "right", color: "#f5c518", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.06em", padding: "0.875rem 1.25rem", borderBottom: "1px solid #1f2937" }}>
                    WITHOUT DEPENDENTS
                  </th>
                  <th style={{ textAlign: "right", color: "#f5c518", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.06em", padding: "0.875rem 1.25rem", borderBottom: "1px solid #1f2937" }}>
                    WITH DEPENDENTS
                  </th>
                </tr>
              </thead>
              <tbody>
                {weightTable.map((section) => (
                  <Fragment key={section.group}>
                    <tr style={{ backgroundColor: "#0d1830" }}>
                      <td colSpan={3} style={{ color: "#9ca3af", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.6rem 1.25rem", borderBottom: "1px solid #1f2937" }}>
                        {section.group}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr
                        key={row.grade}
                        style={{
                          backgroundColor: "highlight" in row && row.highlight ? "rgba(245, 197, 24, 0.06)" : "transparent",
                        }}
                      >
                        <td style={{ color: "#f1f5f9", fontWeight: 600, padding: "0.75rem 1.25rem", borderBottom: "1px solid #1f2937" }}>
                          {row.grade}
                        </td>
                        <td style={{ color: "#d1d5db", textAlign: "right", padding: "0.75rem 1.25rem", borderBottom: "1px solid #1f2937" }}>
                          {row.without}
                        </td>
                        <td style={{ color: "#d1d5db", textAlign: "right", padding: "0.75rem 1.25rem", borderBottom: "1px solid #1f2937" }}>
                          {row.withDep}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: "#6b7280", fontSize: "0.8rem", lineHeight: 1.6, margin: "1rem 0 0" }}>
            Source:{" "}
            <a href="https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/" target="_blank" rel="noopener noreferrer" style={anchor}>
              JTR Table 5-37, Maximum HHG Weight Allowances
            </a>
            . Prior-enlisted officer grades (O-1E, O-2E, O-3E) carry higher
            allowances than their base grade. Always confirm your figure against
            the current JTR and your orders.
          </p>
        </div>
      </section>

      {/* O-4 example callout */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={container}>
          <div style={{ ...card, borderColor: "rgba(245, 197, 24, 0.3)" }}>
            <h2 style={{ ...sectionTitle, fontSize: "1.25rem", margin: "0 0 0.75rem" }}>
              Example: an O-4 with dependents
            </h2>
            <p style={{ ...bodyText, margin: 0 }}>
              An O-4 with dependents gets a 17,000-pound household goods
              allowance. Without dependents it drops to 14,000 pounds. On top of
              that 17,000, the O-4 can ship documented pro-gear for official
              duties, and the spouse may claim a separate pro-gear amount. So the
              trucked weight can exceed 17,000 pounds without going over, as long
              as the pro-gear is weighed and recorded correctly.
            </p>
          </div>
        </div>
      </section>

      {/* Pro-gear, baggage, over-weight */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                icon: Package,
                title: "Pro-gear ships on top",
                body: "Professional books, papers, and equipment needed for your job are shipped in addition to your allowance, not counted against it. It has to be documented and weighed separately, so tell your movers which boxes are pro-gear at pack-out.",
              },
              {
                icon: Plane,
                title: "Baggage for OCONUS moves",
                body: "An overseas PCS adds an unaccompanied baggage shipment, a small express portion of your goods that arrives faster than the main shipment. Whether it attaches to or comes out of your total allowance depends on your orders, so read them and check the JTR.",
              },
              {
                icon: AlertTriangle,
                title: "Going over costs you",
                body: "Every pound over your limit is billed to you at the government move rate. Weigh early, purge before pack-out, and keep certified weight tickets so you can catch and dispute a bad charge.",
              },
            ].map((item) => (
              <div key={item.title} style={card}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(245, 197, 24, 0.1)",
                    border: "1px solid rgba(245, 197, 24, 0.3)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.875rem",
                  }}
                >
                  <item.icon size={18} color="#f5c518" />
                </div>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to estimate + related */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={container}>
          <h2 style={sectionTitle}>Estimate your weight before you pack</h2>
          <p style={bodyText}>
            A rough rule movers use is about 1,000 to 1,500 pounds per fully
            furnished room, but that is only a starting point. The{" "}
            <a href="https://www.militaryonesource.mil/moving-housing/moving/" target="_blank" rel="noopener noreferrer" style={anchor}>
              Military OneSource weight estimator
            </a>{" "}
            gives you a closer number based on what you actually own, which is the
            figure that matters when you compare it to the table above.
          </p>
          <p style={bodyText}>
            If you come in under your allowance and move some goods yourself, a
            Personally Procured Move can pay you for the weight you haul. Run the
            numbers with the{" "}
            <Link href="/pcs-cost-calculator" style={anchor}>PCS cost calculator</Link>,{" "}
            keep the whole move on track with the{" "}
            <Link href="/pcs-checklist" style={anchor}>PCS checklist</Link>, and see
            what else the government covers in the{" "}
            <Link href="/military-onesource-pcs" style={anchor}>Military OneSource guide</Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ ...container, maxWidth: "760px" }}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem", marginBottom: "1.75rem" }}>
            Military PCS weight allowance FAQs
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={card}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.5rem" }}>{faq.q}</h3>
                <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={container}>
          <h2 style={sectionTitle}>Keep planning your move</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
            {[
              { icon: Calculator, title: "PCS Cost Calculator", desc: "Estimate mileage, per diem, and lodging.", href: "/pcs-cost-calculator" },
              { icon: Package, title: "PCS Checklist", desc: "Every task by phase, plus a printable binder.", href: "/pcs-checklist" },
              { icon: Scale, title: "Complete PCS Guide", desc: "The full move from orders to move-in.", href: "/military-pcs-guide" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ ...card, textDecoration: "none", display: "block", padding: "1.5rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(245, 197, 24, 0.1)",
                    border: "1px solid rgba(245, 197, 24, 0.3)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.875rem",
                  }}
                >
                  <item.icon size={18} color="#f5c518" />
                </div>
                <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.375rem", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  {item.title}
                  <ArrowRight size={14} color="#f5c518" />
                </div>
                <div style={{ color: "#6b7280", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch
        heading="Weighing a move against your housing budget?"
        body="If you want to talk through what your PCS could cost or your housing options at the next duty station, get in touch and someone will follow up."
      />
    </div>
  );
}
