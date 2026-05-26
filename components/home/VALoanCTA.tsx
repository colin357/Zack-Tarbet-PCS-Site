import Link from "next/link";
import { Home, CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "No down payment required",
  "No private mortgage insurance (PMI)",
  "Competitive interest rates",
  "Flexible credit requirements",
  "Available for first-time & repeat buyers",
  "PCS-friendly closing timelines",
];

export default function VALoanCTA() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0d1830 0%, #111827 100%)",
      padding: "4rem 1.5rem",
      borderTop: "1px solid #1f2937",
      borderBottom: "1px solid #1f2937",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          alignItems: "center",
        }}>
          {/* Left: Content */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "rgba(245, 197, 24, 0.1)", border: "1px solid rgba(245, 197, 24, 0.3)",
              borderRadius: "9999px", padding: "0.375rem 1rem", marginBottom: "1.25rem",
            }}>
              <Home size={14} color="#f5c518" />
              <span style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
                VA HOME LOAN SPECIALIST
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#f1f5f9", margin: "0 0 1rem", lineHeight: 1.2,
            }}>
              Buying a home near<br />
              <span style={{ color: "#f5c518" }}>your new base?</span>
            </h2>

            <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: "0 0 1.5rem", fontSize: "1rem" }}>
              Heroes Home Network specializes in VA loans for military families navigating a PCS move. From orders to closing day, we&apos;ll guide you every step of the way.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {benefits.map(b => (
                <li key={b} style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#d1d5db", fontSize: "0.9rem" }}>
                  <CheckCircle size={16} color="#f5c518" style={{ flexShrink: 0 }} />
                  {b}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  backgroundColor: "#f5c518", color: "#0a0f1e",
                  padding: "0.875rem 1.75rem", borderRadius: "8px",
                  fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
                }}
              >
                Get Pre-Approved Today
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/va-home-loans"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  color: "#9ca3af", padding: "0.875rem 0",
                  fontSize: "0.9rem", fontWeight: 600, textDecoration: "none",
                }}
              >
                Learn about VA Loans →
              </Link>
            </div>
          </div>

          {/* Right: Info Card */}
          <div style={{
            backgroundColor: "#1a2235", border: "1px solid #1f2937",
            borderRadius: "12px", padding: "2rem",
          }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "50%",
              backgroundColor: "rgba(245, 197, 24, 0.15)", border: "2px solid #f5c518",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "1.25rem",
            }}>
              <span style={{ color: "#f5c518", fontSize: "1.5rem", fontWeight: 800 }}>HHN</span>
            </div>

            <h3 style={{ color: "#f1f5f9", fontSize: "1.25rem", fontWeight: 700, margin: "0 0 0.25rem" }}>Heroes Home Network</h3>
            <p style={{ color: "#f5c518", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", margin: "0 0 1rem" }}>VA LOAN SPECIALIST · NMLS# [placeholder]</p>

            <div style={{ borderTop: "1px solid #1f2937", paddingTop: "1rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { label: "Specialization", value: "VA Loans for Military Families" },
                { label: "Licensed In", value: "All 50 States" },
                { label: "Avg. Closing Time", value: "21–30 Days" },
                { label: "Experience", value: "Military PCS Specialist" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                  <span style={{ color: "#6b7280", fontSize: "0.8rem" }}>{item.label}</span>
                  <span style={{ color: "#d1d5db", fontSize: "0.8rem", fontWeight: 600, textAlign: "right" }}>{item.value}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              style={{
                display: "block", textAlign: "center",
                backgroundColor: "rgba(245, 197, 24, 0.1)", border: "1px solid rgba(245, 197, 24, 0.4)",
                color: "#f5c518", padding: "0.75rem",
                borderRadius: "8px", fontSize: "0.875rem", fontWeight: 700,
                textDecoration: "none", marginTop: "1.25rem",
                letterSpacing: "0.05em",
              }}
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
