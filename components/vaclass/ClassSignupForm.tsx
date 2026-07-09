"use client";

import { useState } from "react";
import { CalendarPlus, CheckCircle, Video } from "lucide-react";
import { CONFIG } from "@/data/vaClass";

const T = CONFIG.THEME;

/**
 * The one action on the page: capture a realtor's details and hand back the
 * Zoom link. All wiring is driven by CONFIG in data/vaClass.ts — this component
 * only handles UI state, validation, and the POST.
 *
 * The next class's calendar links are computed on the server (so "today" stays
 * fresh) and passed in as props to avoid any client/server date mismatch.
 */
export default function ClassSignupForm({
  nextDateLabel,
  nextTimeLabel,
  googleCalUrl,
  icsHref,
}: {
  nextDateLabel: string;
  nextTimeLabel: string;
  googleCalUrl: string;
  icsHref: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brokerage: "",
    role: "",
    phone: "",
    company: "", // honeypot — real people leave this empty
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Client-side validation.
    if (!form.name.trim()) return setError("Please enter your name.");
    if (!/.+@.+\..+/.test(form.email.trim()))
      return setError("Please enter a valid email so we can send the link.");
    if (!form.brokerage.trim())
      return setError("Please enter your brokerage or team name.");

    // Honeypot: a filled hidden field means a bot. Fake success, send nothing.
    if (form.company.trim()) {
      setStatus("done");
      return;
    }

    setStatus("sending");

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      brokerage: form.brokerage.trim(),
      role: form.role || null,
      phone: form.phone.trim() || null,
      class: "VA Loan Class for Realtors",
      nextDate: nextDateLabel,
      submittedFrom: "va-loan-class-landing",
    };

    // With no endpoint configured yet, skip the network and show the
    // confirmation so the flow can be previewed. Set CONFIG.FORM_ENDPOINT to
    // go live.
    if (!CONFIG.FORM_ENDPOINT) {
      setStatus("done");
      return;
    }

    try {
      const res = await fetch(CONFIG.FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("done");
    } catch {
      setStatus("error");
      setError(
        "Something went wrong on our end. Please try again, or email info@heroeshomenetwork.com and we'll send the link."
      );
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: T.inputBg,
    border: `1px solid ${T.border}`,
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: T.text,
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: T.textMuted,
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    marginBottom: "0.375rem",
  };

  /* Confirmation state --------------------------------------------------- */
  if (status === "done") {
    return (
      <div
        id="signup"
        style={{
          backgroundColor: T.surface,
          border: `1px solid rgba(245, 197, 24, 0.3)`,
          borderRadius: "16px",
          padding: "2.5rem 2rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "rgba(76, 175, 80, 0.12)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.25rem",
          }}
        >
          <CheckCircle size={28} color={T.success} />
        </div>
        <h3 style={{ color: T.text, fontWeight: 800, fontSize: "1.4rem", margin: "0 0 0.5rem" }}>
          You&apos;re saved for the class
        </h3>
        <p style={{ color: T.textMuted, fontSize: "0.95rem", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
          Thanks{form.name.trim() ? `, ${form.name.trim().split(" ")[0]}` : ""}. Here&apos;s your Zoom
          link for <strong style={{ color: T.text }}>{nextDateLabel}</strong> at {nextTimeLabel}. Add
          it to your calendar so it doesn&apos;t slip.
        </p>

        <a
          href={CONFIG.ZOOM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            backgroundColor: T.accent,
            color: T.accentInk,
            padding: "0.9rem 1.5rem",
            borderRadius: "8px",
            fontSize: "0.95rem",
            fontWeight: 700,
            textDecoration: "none",
            marginBottom: "1rem",
          }}
        >
          <Video size={18} />
          Open the Zoom link
        </a>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href={googleCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: T.text,
              border: `1px solid ${T.border}`,
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <CalendarPlus size={15} color={T.accent} />
            Google Calendar
          </a>
          <a
            href={icsHref}
            download="va-loan-class.ics"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: T.text,
              border: `1px solid ${T.border}`,
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <CalendarPlus size={15} color={T.accent} />
            Apple / Outlook (.ics)
          </a>
        </div>
      </div>
    );
  }

  /* Form state ----------------------------------------------------------- */
  return (
    <div
      id="signup"
      style={{
        backgroundColor: T.surface,
        border: `1px solid ${T.border}`,
        borderRadius: "16px",
        padding: "2rem",
      }}
    >
      <h3 style={{ color: T.text, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 0.35rem" }}>
        Save my spot
      </h3>
      <p style={{ color: T.textMuted, fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
        Free class on {nextDateLabel} at {nextTimeLabel}. Sign up and we&apos;ll send the Zoom link.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label htmlFor="name" style={labelStyle}>
            FULL NAME *
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={update}
            required
            placeholder="Jane Doe"
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>
            EMAIL *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            required
            placeholder="jane@brokerage.com"
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="brokerage" style={labelStyle}>
            BROKERAGE / TEAM *
          </label>
          <input
            id="brokerage"
            name="brokerage"
            value={form.brokerage}
            onChange={update}
            required
            placeholder="Doe Realty Group"
            style={inputStyle}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label htmlFor="role" style={labelStyle}>
              ROLE
            </label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={update}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="">Select (optional)</option>
              <option value="Agent">Agent</option>
              <option value="Team Lead">Team Lead</option>
              <option value="Broker Owner">Broker Owner</option>
            </select>
          </div>
          <div>
            <label htmlFor="phone" style={labelStyle}>
              PHONE
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={update}
              placeholder="(optional)"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Honeypot: hidden from people, catnip for bots. Kept out of the tab
            order and off-screen. */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
          <label htmlFor="company">Company (leave this blank)</label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={update}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {error && (
          <p style={{ color: T.error, fontSize: "0.85rem", margin: 0 }} role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            backgroundColor: T.accent,
            color: T.accentInk,
            padding: "0.95rem 1.5rem",
            borderRadius: "8px",
            fontSize: "0.95rem",
            fontWeight: 700,
            border: "none",
            cursor: status === "sending" ? "default" : "pointer",
            opacity: status === "sending" ? 0.7 : 1,
          }}
        >
          {status === "sending" ? "Saving your spot…" : "Save my spot"}
        </button>

        <p style={{ color: "#4b5563", fontSize: "0.72rem", textAlign: "center", margin: 0, lineHeight: 1.5 }}>
          We&apos;ll only use your info to send the class link and follow-ups. No spam, unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
