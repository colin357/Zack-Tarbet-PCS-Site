"use client";

import { useState } from "react";
import { Download, CheckCircle } from "lucide-react";

/**
 * Email capture for the free printable PCS binder. This is the list-builder
 * for the checklist page. It collects only the reader's own email (no personal
 * contact details are displayed) and hands off the binder.
 *
 * The submit is a client-side placeholder. Wire it to an email/list service
 * (e.g. a Next.js route handler posting to ConvertKit, Mailchimp, or Resend)
 * before launch. See [VERIFY: wire binder signup to email service].
 */
export default function BinderSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!/.+@.+\..+/.test(email.trim())) {
      setError("Enter a valid email so we can send the binder.");
      return;
    }
    // In production, POST to a route handler that adds the email to the list
    // and emails the printable binder.
    setSubmitted(true);
  }

  return (
    <div
      id="free-binder"
      style={{
        backgroundColor: "#111827",
        border: "1px solid rgba(245, 197, 24, 0.3)",
        borderRadius: "16px",
        padding: "2rem",
      }}
    >
      {submitted ? (
        <div style={{ textAlign: "center", padding: "0.5rem 0" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              backgroundColor: "rgba(76, 175, 80, 0.12)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem",
            }}
          >
            <CheckCircle size={26} color="#4CAF50" />
          </div>
          <h3 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.25rem", margin: "0 0 0.5rem" }}>
            Check your inbox
          </h3>
          <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
            Your free printable PCS binder is on its way. Print it, punch it, and
            keep every document in one place through the whole move.
          </p>
        </div>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
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
                flexShrink: 0,
              }}
            >
              <Download size={18} color="#f5c518" />
            </div>
            <h3 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.15rem", margin: 0 }}>
              Get the free printable PCS binder
            </h3>
          </div>
          <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
            The whole checklist plus document trackers, contact logs, and packing
            sheets, formatted to print and drop in a three-ring binder. Enter your
            email and we will send it over.
          </p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@email.com"
              aria-label="Email address"
              style={{
                width: "100%",
                backgroundColor: "#0d1830",
                border: "1px solid #1f2937",
                borderRadius: "8px",
                padding: "0.875rem 1rem",
                color: "#f1f5f9",
                fontSize: "1rem",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            {error && <p style={{ color: "#ef4444", fontSize: "0.85rem", margin: 0 }}>{error}</p>}
            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                backgroundColor: "#f5c518",
                color: "#0a0f1e",
                padding: "0.875rem 1.5rem",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              <Download size={16} />
              Send Me the Binder
            </button>
            <p style={{ color: "#4b5563", fontSize: "0.72rem", textAlign: "center", margin: 0, lineHeight: 1.5 }}>
              One email with your binder. No spam, and you can unsubscribe anytime.
            </p>
          </form>
        </>
      )}
    </div>
  );
}
