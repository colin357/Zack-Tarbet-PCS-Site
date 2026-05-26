import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Calendar, Home, Truck, DollarSign, BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "PCS Resources | Zack Tarbet – Military PCS Guide",
  description:
    "Everything you need for your military PCS move: checklists, BAH info, housing tips, moving guides, and more.",
};

const checklistItems = [
  { phase: "12+ Months Out", items: ["Review your career timeline and potential duty stations", "Start researching communities near likely bases", "Check VA loan eligibility and get pre-qualified", "Research schools if you have children"] },
  { phase: "6–12 Months Out", items: ["Contact gaining installation's housing office", "Begin exploring neighborhoods and home prices", "Connect with a VA loan specialist (that's me!)", "Review your BAH entitlement for the new area"] },
  { phase: "3–6 Months Out", items: ["Receive official PCS orders", "Get VA loan pre-approval letter", "Begin home search or on-base housing application", "Schedule DPS (Defense Personal Property System) move"] },
  { phase: "1–3 Months Out", items: ["Make an offer on a home (or confirm on-base housing)", "Schedule VA appraisal and home inspection", "Arrange transportation for vehicles", "Update mailing address with key organizations"] },
  { phase: "Moving Week", items: ["Confirm movers and report date", "Do a final walkthrough of your current home", "Gather important documents (orders, medical records, etc.)", "Complete out-processing at current installation"] },
];

const resources = [
  { icon: DollarSign, title: "BAH (Basic Allowance for Housing)", desc: "BAH rates are set by DoD and vary by duty station, pay grade, and dependency status. You're entitled to BAH based on your permanent duty station (PDS), not where you choose to live.", link: "https://www.defensetravel.dod.mil/site/bahCalc.cfm", linkText: "Official BAH Calculator →" },
  { icon: Home, title: "On-Base vs. Off-Base Housing", desc: "If you choose to live off-base, you receive BAH to help cover costs. Many installations have privatized housing — wait times and quality vary significantly by base. Research early.", link: null, linkText: null },
  { icon: Truck, title: "DoD Moving Entitlements", desc: "The military covers the cost of moving your household goods (HHG). Use DPS (Defense Personal Property System) to schedule your move. You may also qualify for a PPM (Personally Procured Move).", link: "https://move.mil", linkText: "Schedule Your Move at move.mil →" },
  { icon: BookOpen, title: "Schools & Education", desc: "MilitaryChildCare.com helps with childcare. The Interstate Compact on Educational Opportunity for Military Children (MIC3) protects your kids' academic standing during transitions.", link: null, linkText: null },
];

export default function PCSResourcesPage() {
  return (
    <div style={{ backgroundColor: "#0a0f1e" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #060c18 0%, #0a0f1e 100%)", padding: "4rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(245, 197, 24, 0.1)", border: "1px solid rgba(245, 197, 24, 0.3)", borderRadius: "9999px", padding: "0.375rem 1rem", marginBottom: "1.5rem" }}>
            <span style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>PCS RESOURCES</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 1rem", lineHeight: 1.2 }}>
            Everything You Need<br /><span style={{ color: "#f5c518" }}>for a Smooth PCS Move</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "600px" }}>
            PCS moves are stressful. We&apos;ve compiled the resources, checklists, and guides to help you plan ahead, understand your entitlements, and land in your new community ready to go.
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section id="checklist" style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ color: "#f1f5f9", fontSize: "1.75rem", fontWeight: 800, margin: "0 0 0.5rem" }}>PCS Timeline Checklist</h2>
          <p style={{ color: "#6b7280", marginBottom: "2.5rem" }}>Use this timeline as a general guide — your specific PCS may vary based on orders type and gaining installation.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {checklistItems.map(phase => (
              <div key={phase.phase} style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "10px", padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <Calendar size={18} color="#f5c518" />
                  <h3 style={{ color: "#f5c518", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em", margin: 0 }}>{phase.phase}</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0.5rem" }}>
                  {phase.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#d1d5db", fontSize: "0.875rem" }}>
                      <CheckCircle size={14} color="#4CAF50" style={{ flexShrink: 0, marginTop: "2px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ color: "#f1f5f9", fontSize: "1.75rem", fontWeight: 800, margin: "0 0 2.5rem" }}>Key Resources</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {resources.map(r => (
              <div key={r.title} style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "10px", padding: "1.5rem" }}>
                <div style={{ width: "44px", height: "44px", backgroundColor: "rgba(245, 197, 24, 0.1)", border: "1px solid rgba(245, 197, 24, 0.3)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <r.icon size={20} color="#f5c518" />
                </div>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.625rem" }}>{r.title}</h3>
                <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.6, margin: "0 0 1rem" }}>{r.desc}</p>
                {r.link && (
                  <a href={r.link} target="_blank" rel="noopener noreferrer" style={{ color: "#f5c518", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>
                    {r.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Housing section */}
      <section id="housing" style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            <div>
              <h2 style={{ color: "#f1f5f9", fontSize: "1.5rem", fontWeight: 800, margin: "0 0 1rem" }}>Buying vs. Renting During PCS</h2>
              <p style={{ color: "#9ca3af", lineHeight: 1.7, marginBottom: "1rem" }}>One of the biggest decisions during a PCS is whether to rent or buy near your new installation. Here&apos;s what to consider:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { label: "How long will you be stationed there?", detail: "Buying makes more sense for 3+ year tours." },
                  { label: "What is the local housing market like?", detail: "Some markets near bases are very competitive — pre-approval is key." },
                  { label: "Does your BAH cover a mortgage payment?", detail: "In many markets, your BAH can cover most or all of your mortgage." },
                  { label: "VA loan = $0 down payment", detail: "This eliminates one of the biggest barriers to buying." },
                ].map(item => (
                  <div key={item.label} style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "8px", padding: "0.875rem 1rem" }}>
                    <div style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>{item.label}</div>
                    <div style={{ color: "#6b7280", fontSize: "0.8rem" }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: "#111827", border: "1px solid rgba(245, 197, 24, 0.3)", borderRadius: "12px", padding: "2rem", alignSelf: "start" }}>
              <h3 style={{ color: "#f5c518", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 0.75rem" }}>Talk to a VA Loan Specialist</h3>
              <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>I can help you crunch the numbers for your specific situation — BAH, loan payment, market conditions — so you can make the most informed decision possible.</p>
              <Link href="/contact" style={{ display: "block", textAlign: "center", backgroundColor: "#f5c518", color: "#0a0f1e", padding: "0.875rem", borderRadius: "8px", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}>
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ color: "#f1f5f9", fontSize: "1.75rem", fontWeight: 800, margin: "0 0 1rem" }}>Ready to Start Planning?</h2>
          <p style={{ color: "#9ca3af", lineHeight: 1.7, marginBottom: "2rem" }}>Explore the base you&apos;re heading to, or get in touch with Zack to start the VA loan process today.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/installations" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#f5c518", color: "#0a0f1e", padding: "0.875rem 1.75rem", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none" }}>
              Explore Installations <ArrowRight size={16} />
            </Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#9ca3af", padding: "0.875rem 1.75rem", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid #374151" }}>
              Contact Zack
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
