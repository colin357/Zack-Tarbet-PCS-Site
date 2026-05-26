import Link from "next/link";
import { ArrowRight, Home, Map } from "lucide-react";

export default function Hero() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #060c18 0%, #0a0f1e 40%, #0d1830 100%)",
      padding: "5rem 1.5rem 4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background grid pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "linear-gradient(#f5c518 1px, transparent 1px), linear-gradient(90deg, #f5c518 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* Glowing orb effect */}
      <div style={{
        position: "absolute", top: "-100px", right: "-100px",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(245, 197, 24, 0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <div style={{ maxWidth: "720px" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            backgroundColor: "rgba(245, 197, 24, 0.1)", border: "1px solid rgba(245, 197, 24, 0.3)",
            borderRadius: "9999px", padding: "0.375rem 1rem", marginBottom: "1.5rem",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#f5c518" }} />
            <span style={{ color: "#f5c518", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em" }}>
              VA LOAN SPECIALIST · PCS RESOURCE GUIDE
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            fontWeight: 800, lineHeight: 1.15,
            color: "#f1f5f9", margin: "0 0 1.25rem",
            letterSpacing: "-0.02em",
          }}>
            Your PCS.{" "}
            <span style={{ color: "#f5c518" }}>Your Home.</span>{" "}
            Your Guide.
          </h1>

          <p style={{
            fontSize: "1.125rem", lineHeight: 1.7,
            color: "#9ca3af", maxWidth: "560px", margin: "0 0 2.5rem",
          }}>
            Explore every U.S. military installation, discover local communities, and connect with a VA loan specialist who understands the military lifestyle — because Zack has lived it too.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link
              href="/installations"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "#f5c518", color: "#0a0f1e",
                padding: "0.875rem 1.75rem", borderRadius: "8px",
                fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
                letterSpacing: "0.02em", transition: "background-color 0.2s",
              }}
            >
              <Map size={18} />
              Explore Bases
            </Link>
            <Link
              href="/va-home-loans"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "transparent", color: "#f1f5f9",
                padding: "0.875rem 1.75rem", borderRadius: "8px",
                fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
                border: "1px solid #374151", letterSpacing: "0.02em",
                transition: "border-color 0.2s",
              }}
            >
              <Home size={18} />
              Get VA Loan Help
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "2rem",
          marginTop: "4rem", paddingTop: "2.5rem",
          borderTop: "1px solid #1f2937",
        }}>
          {[
            { value: "200+", label: "Military Installations" },
            { value: "$0", label: "Down Payment with VA Loan" },
            { value: "All 50", label: "States Licensed" },
            { value: "24/7", label: "Support for Military Families" },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ color: "#f5c518", fontSize: "1.75rem", fontWeight: 800, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ color: "#6b7280", fontSize: "0.8rem", marginTop: "0.25rem", letterSpacing: "0.05em" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
