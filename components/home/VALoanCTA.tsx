import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const benefits = [
  "$0 down payment required",
  "No private mortgage insurance (PMI)",
  "Competitive rates for qualified borrowers",
  "Flexible credit requirements",
  "PCS-friendly closing timelines",
];

export default function VALoanCTA() {
  return (
    <section style={{ backgroundColor: "#f8fafc", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
          className="va-grid"
        >
          {/* Left: Photo */}
          <div style={{ position: "relative" }} className="va-photo">
            <div style={{
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: "3/4",
              position: "relative",
              boxShadow: "0 24px 60px rgba(0,0,0,0.15)",
            }}>
              <Image
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
                alt="American home"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Decorative accent */}
            <div style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1.5rem",
              width: "100px",
              height: "100px",
              backgroundColor: "#f5c518",
              borderRadius: "12px",
              zIndex: -1,
              opacity: 0.4,
            }} />
          </div>

          {/* Right: Content */}
          <div>
            <p style={{
              color: "#f5c518",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              VA Home Loans
            </p>

            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              fontWeight: 900,
              color: "#0f172a",
              margin: "0 0 1.25rem",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}>
              Buying a home near<br />your new base?
            </h2>

            <p style={{
              color: "#475569",
              lineHeight: 1.75,
              fontSize: "1rem",
              margin: "0 0 2rem",
            }}>
              Heroes Home Network specializes in VA loans for military members navigating a PCS move. From the day you get orders to closing day, we make it simple.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {benefits.map(b => (
                <li key={b} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#334155", fontSize: "0.9375rem" }}>
                  <CheckCircle size={18} color="#f5c518" style={{ flexShrink: 0 }} />
                  {b}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <Link href="/contact" style={{
                backgroundColor: "#0f172a",
                color: "#ffffff",
                padding: "0.9375rem 2rem",
                borderRadius: "6px",
                fontSize: "0.9rem",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
              }}>
                Get Pre-Approved
              </Link>
              <Link href="/va-home-loans" style={{
                color: "#475569",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: "2px solid #f5c518",
                paddingBottom: "2px",
              }}>
                Learn more about VA loans
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .va-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .va-photo {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
