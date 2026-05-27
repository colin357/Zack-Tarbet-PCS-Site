import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{
      background: "linear-gradient(160deg, #060c18 0%, #0d1a2e 60%, #0a1628 100%)",
      padding: "5rem 1.5rem 4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <div>
            <p style={{
              color: "#f5c518",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}>
              Military PCS &amp; VA Home Loans
            </p>

            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              color: "#ffffff",
              margin: "0 0 1.5rem",
              letterSpacing: "-0.03em",
            }}>
              Your PCS.<br />
              Your Home.<br />
              <span style={{ color: "#f5c518" }}>Your Guide.</span>
            </h1>

            <p style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#94a3b8",
              maxWidth: "480px",
              margin: "0 0 2.5rem",
            }}>
              Explore every U.S. military installation, discover your next community, and get expert VA loan help from a specialist who puts military families first.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
              <Link href="/installations" style={{
                backgroundColor: "#f5c518",
                color: "#0a0f1e",
                padding: "0.875rem 1.75rem",
                borderRadius: "6px",
                fontSize: "0.9rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.01em",
                display: "inline-block",
              }}>
                Explore Installations
              </Link>
              <Link href="/va-home-loans" style={{
                backgroundColor: "transparent",
                color: "#e2e8f0",
                padding: "0.875rem 1.75rem",
                borderRadius: "6px",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "inline-block",
              }}>
                VA Loan Info
              </Link>
            </div>
          </div>

          {/* Right: Photo */}
          <div style={{ position: "relative" }} className="hero-image-wrap">
            {/* Main photo */}
            <div style={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "4/3",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            }}>
              <Image
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80"
                alt="Beautiful American home"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* subtle overlay at bottom for the floating card */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
              }} />
            </div>

            {/* Floating stat card */}
            <div style={{
              position: "absolute",
              bottom: "-1.25rem",
              left: "-1.25rem",
              backgroundColor: "#111827",
              border: "1px solid rgba(245,197,24,0.25)",
              borderRadius: "12px",
              padding: "1rem 1.25rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}>
              <div style={{ color: "#f5c518", fontSize: "1.75rem", fontWeight: 900, lineHeight: 1 }}>$0</div>
              <div style={{ color: "#94a3b8", fontSize: "0.75rem", marginTop: "0.2rem", whiteSpace: "nowrap" }}>Down Payment with VA Loan</div>
            </div>

            {/* Second floating card */}
            <div style={{
              position: "absolute",
              top: "-1rem",
              right: "-1rem",
              backgroundColor: "#111827",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "1rem 1.25rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}>
              <div style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: 900, lineHeight: 1 }}>145+</div>
              <div style={{ color: "#94a3b8", fontSize: "0.75rem", marginTop: "0.2rem", whiteSpace: "nowrap" }}>Military Installations</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-image-wrap {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
