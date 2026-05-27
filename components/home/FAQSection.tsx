"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I find the best neighborhood near my next duty station?",
    a: "Start with the installation page for your base, then compare commute ranges, school context, and housing trends. Most families narrow to 2–3 communities and validate by talking to sponsors, local agents, and recent arrivals.",
  },
  {
    q: "Can I use a VA loan right after a PCS move?",
    a: "In many cases, yes. Eligible service members can use VA financing during or after a PCS if occupancy timelines and lender documentation requirements are met.",
  },
  {
    q: "Should we rent first or buy immediately after arrival?",
    a: "That depends on assignment length, local inventory, and school priorities. Renting first can reduce risk in fast-moving markets, while buying can make sense for longer tours where monthly payments align with BAH.",
  },
  {
    q: "What costs should we plan for besides down payment?",
    a: "Even with $0 down VA options, plan for closing costs, inspections, insurance, utilities, and moving overlap. Your budget should include both one-time and monthly ownership costs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ backgroundColor: "#f8fafc", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <h2 style={{ color: "#0f172a", fontWeight: 800, fontSize: "1.75rem", margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>Frequently Asked Questions</h2>
        <p style={{ color: "#64748b", margin: "0 0 1.5rem" }}>Quick answers for PCS planning, neighborhoods, and VA home loan prep.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, idx) => {
            const open = openIndex === idx;
            return (
              <div key={faq.q} style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", overflow: "hidden" }}>
                <button
                  onClick={() => setOpenIndex(open ? null : idx)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    padding: "1rem 1.1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#0f172a",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: "0.95rem",
                  }}
                >
                  {faq.q}
                  <ChevronDown size={18} style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 220ms ease" }} />
                </button>
                <div
                  style={{
                    maxHeight: open ? "180px" : "0px",
                    opacity: open ? 1 : 0,
                    transition: "max-height 260ms ease, opacity 220ms ease",
                    padding: open ? "0 1.1rem 1rem" : "0 1.1rem",
                  }}
                >
                  <p style={{ margin: 0, color: "#475569", lineHeight: 1.65, fontSize: "0.9rem" }}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
