import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "6rem 1.5rem 5rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.pexels.com/photos/33232137/pexels-photo-33232137.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
          transform: "scale(1.04)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, rgba(6,12,24,0.7) 0%, rgba(13,26,46,0.7) 60%, rgba(10,22,40,0.7) 100%)",
        }}
      />

      <div style={{ position: "relative", maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
        <p style={{
          color: "#f5c518",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          Heroes Home Network
        </p>

        <h1 style={{
          fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
          fontWeight: 900,
          lineHeight: 1.06,
          color: "#ffffff",
          margin: "0 0 1.5rem",
          letterSpacing: "-0.03em",
        }}>
          Everything you need<br />
          to know about your<br />
          <span style={{ color: "#f5c518" }}>next duty station.</span>
        </h1>

        <p style={{
          fontSize: "1.125rem",
          lineHeight: 1.75,
          color: "#cbd5e1",
          maxWidth: "560px",
          margin: "0 auto 2.5rem",
        }}>
          Explore every U.S. military installation — base info, local communities, housing, and more. Built for service members, by people who get it.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", justifyContent: "center" }}>
          <Link href="/installations" style={{
            backgroundColor: "#f5c518",
            color: "#0a0f1e",
            padding: "0.9375rem 2rem",
            borderRadius: "6px",
            fontSize: "0.9375rem",
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: "0.01em",
            display: "inline-block",
          }}>
            Explore Installations
          </Link>
          <Link href="/pcs-resources" style={{
            backgroundColor: "transparent",
            color: "#e2e8f0",
            padding: "0.9375rem 2rem",
            borderRadius: "6px",
            fontSize: "0.9375rem",
            fontWeight: 600,
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "inline-block",
          }}>
            PCS Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
