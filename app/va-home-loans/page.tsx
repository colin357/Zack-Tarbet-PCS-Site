import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Home, DollarSign, Shield, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "VA Home Loans | Zack Tarbet – Military PCS Specialist",
  description:
    "Learn about VA loan benefits, eligibility, and get pre-approved with Zack Tarbet — a VA loan specialist serving military families across all 50 states.",
};

const benefits = [
  { icon: DollarSign, title: "No Down Payment", desc: "Eligible veterans and active-duty members can finance 100% of the home's value with no money down." },
  { icon: Shield, title: "No PMI Required", desc: "Unlike conventional loans, VA loans don't require private mortgage insurance — saving you hundreds per month." },
  { icon: Home, title: "Competitive Rates", desc: "VA loans typically offer lower interest rates than conventional mortgages, reducing your monthly payment." },
  { icon: Clock, title: "PCS-Ready Closings", desc: "We understand PCS timelines. Fast closings available to align with your report date." },
];

const steps = [
  { num: "01", title: "Check Eligibility", desc: "Active duty, veterans, and surviving spouses may qualify. Contact us to verify your eligibility quickly." },
  { num: "02", title: "Get Pre-Approved", desc: "We review your Certificate of Eligibility (COE), income, and credit to issue your pre-approval letter fast." },
  { num: "03", title: "Find Your Home", desc: "Use your pre-approval to make competitive offers near your new duty station with confidence." },
  { num: "04", title: "Close & Move In", desc: "We handle the paperwork, coordinate with your realtor, and target a closing date that works for your PCS." },
];

const faqs = [
  { q: "Can I use a VA loan for my first home?", a: "Yes! VA loans are available for first-time and repeat buyers. There's no requirement to be a first-time homebuyer." },
  { q: "Can I use a VA loan at any military base?", a: "VA loans can be used anywhere in the U.S. — near any military installation. We cover all 50 states." },
  { q: "What's the VA funding fee?", a: "Most borrowers pay a small funding fee (typically 1.25%–3.3%), but many veterans with service-connected disabilities are exempt." },
  { q: "How fast can I close with a VA loan?", a: "Typically 21–45 days. We work to expedite closings for military members with PCS orders and tight timelines." },
  { q: "Can I buy a home before my report date?", a: "Yes. With PCS orders in hand, you can start the process immediately. We've helped service members close remotely." },
  { q: "Do I need perfect credit?", a: "No. VA loans have more flexible credit requirements than conventional loans. We'll help you understand your options." },
];

export default function VAHomeLoansPage() {
  return (
    <div style={{ backgroundColor: "#0a0f1e" }}>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #060c18 0%, #0a0f1e 100%)",
        padding: "4rem 1.5rem",
        borderBottom: "1px solid #1f2937",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            backgroundColor: "rgba(245, 197, 24, 0.1)", border: "1px solid rgba(245, 197, 24, 0.3)",
            borderRadius: "9999px", padding: "0.375rem 1rem", marginBottom: "1.5rem",
          }}>
            <Home size={14} color="#f5c518" />
            <span style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>VA HOME LOANS</span>
          </div>

          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 1rem", lineHeight: 1.2 }}>
            You Earned This Benefit.<br />
            <span style={{ color: "#f5c518" }}>Let&apos;s Put It to Work.</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "600px", margin: "0 0 2rem" }}>
            The VA home loan benefit is one of the most powerful financial tools available to service members and veterans — and I&apos;m here to help you use it to the fullest.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "#f5c518", color: "#0a0f1e",
              padding: "0.875rem 2rem", borderRadius: "8px",
              fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
            }}
          >
            Get Pre-Approved Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ color: "#f1f5f9", fontSize: "1.75rem", fontWeight: 800, margin: "0 0 0.5rem" }}>VA Loan Benefits</h2>
          <p style={{ color: "#6b7280", marginBottom: "2.5rem" }}>Why a VA loan is often the best mortgage option for military families.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {benefits.map(b => (
              <div key={b.title} style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "10px", padding: "1.5rem" }}>
                <div style={{ width: "44px", height: "44px", backgroundColor: "rgba(245, 197, 24, 0.1)", border: "1px solid rgba(245, 197, 24, 0.3)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <b.icon size={20} color="#f5c518" />
                </div>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.5rem" }}>{b.title}</h3>
                <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <h2 style={{ color: "#f1f5f9", fontSize: "1.75rem", fontWeight: 800, margin: "0 0 1rem" }}>Who Is Eligible?</h2>
              <p style={{ color: "#9ca3af", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                VA loans are available to a wide range of service members, veterans, and their families. Here&apos;s who typically qualifies:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Active-duty service members (Army, Navy, Air Force, Marine Corps, Coast Guard, Space Force)",
                  "Veterans who meet minimum service requirements",
                  "National Guard and Reserve members (with qualifying service)",
                  "Surviving spouses of veterans who died in service or from a service-connected disability",
                  "Some Public Health Service officers and NOAA officers",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#d1d5db", fontSize: "0.9rem" }}>
                    <CheckCircle size={16} color="#f5c518" style={{ flexShrink: 0, marginTop: "2px" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "12px", padding: "2rem" }}>
              <h3 style={{ color: "#f5c518", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 1rem" }}>Quick Eligibility Check</h3>
              <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>Not sure if you qualify? I&apos;ll pull your Certificate of Eligibility (COE) directly from VA systems — usually in minutes.</p>
              <Link href="/contact" style={{ display: "block", textAlign: "center", backgroundColor: "#f5c518", color: "#0a0f1e", padding: "0.875rem", borderRadius: "8px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
                Check My Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ color: "#f1f5f9", fontSize: "1.75rem", fontWeight: 800, margin: "0 0 0.5rem", textAlign: "center" }}>How It Works</h2>
          <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "3rem" }}>Four simple steps from PCS orders to moving in.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ position: "relative" }}>
                <div style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "10px", padding: "1.5rem" }}>
                  <div style={{ color: "#f5c518", fontSize: "2rem", fontWeight: 900, lineHeight: 1, marginBottom: "0.75rem", opacity: 0.6 }}>{step.num}</div>
                  <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.5rem" }}>{step.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: "#f1f5f9", fontSize: "1.75rem", fontWeight: 800, margin: "0 0 2.5rem", textAlign: "center" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map(faq => (
              <div key={faq.q} style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "10px", padding: "1.25rem 1.5rem" }}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.9rem", margin: "0 0 0.5rem" }}>{faq.q}</h3>
                <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ color: "#f1f5f9", fontSize: "1.75rem", fontWeight: 800, margin: "0 0 1rem" }}>Ready to Get Started?</h2>
          <p style={{ color: "#9ca3af", lineHeight: 1.7, marginBottom: "2rem" }}>Whether you&apos;re months out from a PCS or need to close fast, I&apos;ll make it happen. Get your free pre-approval today.</p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#f5c518", color: "#0a0f1e", padding: "1rem 2.5rem", borderRadius: "8px", fontSize: "1rem", fontWeight: 700, textDecoration: "none" }}>
            Get Pre-Approved <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
