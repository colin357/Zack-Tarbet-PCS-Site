import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The single site-wide conversion action for the informational PCS content
 * pages. Every SEO/content page ends with this one shared button, which links
 * to the contact route and intentionally carries no personal contact details
 * (no phone, email, name, or NMLS). Heading and body can be tailored per page;
 * the button label and destination stay constant.
 */
export default function GetInTouch({
  heading = "Want a hand with your PCS?",
  body = "Every move is different. If you have a question about your PCS or the housing options at your next duty station, get in touch and someone will follow up.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section
      style={{
        padding: "4rem 1.5rem",
        borderTop: "1px solid #1f2937",
        textAlign: "center",
        backgroundColor: "#060c18",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2
          style={{
            color: "#f1f5f9",
            fontSize: "1.75rem",
            fontWeight: 800,
            margin: "0 0 1rem",
          }}
        >
          {heading}
        </h2>
        <p style={{ color: "#9ca3af", lineHeight: 1.7, marginBottom: "2rem" }}>
          {body}
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "#f5c518",
            color: "#0a0f1e",
            padding: "0.875rem 1.75rem",
            borderRadius: "8px",
            fontSize: "0.9rem",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Get in Touch <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
