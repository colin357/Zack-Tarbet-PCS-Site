"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Clock, Shield, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", base: "", branch: "", message: "", timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, wire this to an API route or form service (Formspree, Resend, etc.)
    setSubmitted(true);
  }

  const inputStyle = {
    width: "100%", backgroundColor: "#0d1830", border: "1px solid #1f2937",
    borderRadius: "8px", padding: "0.75rem 1rem", color: "#f1f5f9",
    fontSize: "0.9rem", outline: "none", boxSizing: "border-box" as const,
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block", color: "#9ca3af", fontSize: "0.8rem",
    fontWeight: 600, letterSpacing: "0.05em", marginBottom: "0.375rem",
  };

  return (
    <div style={{ backgroundColor: "#0a0f1e" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #060c18 0%, #0a0f1e 100%)", padding: "4rem 1.5rem 3rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(245, 197, 24, 0.1)", border: "1px solid rgba(245, 197, 24, 0.3)", borderRadius: "9999px", padding: "0.375rem 1rem", marginBottom: "1.5rem" }}>
            <span style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>CONTACT US</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 1rem", lineHeight: 1.2 }}>
            Let&apos;s Get You<br /><span style={{ color: "#f5c518" }}>Pre-Approved Today</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "560px" }}>
            Whether you&apos;re 12 months out or need to close in 30 days, reach out and I&apos;ll get back to you fast — usually within a few hours.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem" }}>
          {/* Form */}
          <div>
            {submitted ? (
              <div style={{ backgroundColor: "#111827", border: "1px solid rgba(245, 197, 24, 0.3)", borderRadius: "12px", padding: "3rem", textAlign: "center" }}>
                <div style={{ width: "64px", height: "64px", backgroundColor: "rgba(245, 197, 24, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <Shield size={28} color="#f5c518" />
                </div>
                <h2 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.5rem", margin: "0 0 0.75rem" }}>Message Received!</h2>
                <p style={{ color: "#9ca3af", lineHeight: 1.7 }}>Thanks for reaching out. I&apos;ll be in touch within a few hours to discuss your VA loan options and PCS plans.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>FULL NAME *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Sgt. John Smith" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>PHONE</label>
                    <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="(719) 259-2246" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>EMAIL ADDRESS *</label>
                  <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="john.smith@email.com" style={inputStyle} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>BRANCH OF SERVICE</label>
                    <select name="branch" value={form.branch} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="">Select branch</option>
                      {["Air Force", "Army", "Coast Guard", "Marine Corps", "Navy", "Space Force", "National Guard", "Reserves", "Veteran"].map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>GAINING INSTALLATION</label>
                    <input name="base" value={form.base} onChange={handleChange} placeholder="Fort Bragg, NC" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>PCS TIMELINE</label>
                  <select name="timeline" value={form.timeline} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">Select timeline</option>
                    {["ASAP (within 30 days)", "1–3 months", "3–6 months", "6–12 months", "12+ months", "Just exploring"].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>MESSAGE</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell me about your situation — home price range, questions about VA loans, anything on your mind..." style={{ ...inputStyle, resize: "vertical" }} />
                </div>

                <button type="submit" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  backgroundColor: "#f5c518", color: "#0a0f1e",
                  padding: "1rem 2rem", borderRadius: "8px",
                  fontSize: "0.9rem", fontWeight: 700, border: "none", cursor: "pointer",
                  letterSpacing: "0.02em",
                }}>
                  <Send size={16} />
                  Send Message
                </button>

                <p style={{ color: "#4b5563", fontSize: "0.75rem", textAlign: "center" }}>
                  Your information is never sold or shared. By submitting, you agree to be contacted regarding VA loan options.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "12px", padding: "1.75rem" }}>
              <Image src="/hhn-logo.png" alt="Heroes Home Network" width={160} height={40} style={{ objectFit: "contain", marginBottom: "1rem" }} />
              <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 0.25rem" }}>Heroes Home Network</h3>
              <p style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", margin: "0 0 1rem" }}>VA LOAN SPECIALIST · NMLS# 2040562</p>
              <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.6, margin: "0 0 1.25rem" }}>
                I help military families navigate the VA loan process during PCS moves. Fast responses, clear answers, no runaround.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a href="tel:+17192592246" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#d1d5db", textDecoration: "none", fontSize: "0.875rem" }}>
                  <div style={{ width: "36px", height: "36px", backgroundColor: "rgba(245, 197, 24, 0.1)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={16} color="#f5c518" />
                  </div>
                  (719) 259-2246
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#d1d5db", fontSize: "0.875rem" }}>
                  <div style={{ width: "36px", height: "36px", backgroundColor: "rgba(245, 197, 24, 0.1)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Clock size={16} color="#f5c518" />
                  </div>
                  Responds within a few hours
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "12px", padding: "1.75rem" }}>
              <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 1rem" }}>What to Expect</h3>
              {[
                { step: "1", text: "Submit the form above" },
                { step: "2", text: "I'll call or email within a few hours" },
                { step: "3", text: "We review your eligibility and goals" },
                { step: "4", text: "You get a pre-approval letter, fast" },
              ].map(s => (
                <div key={s.step} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "rgba(245, 197, 24, 0.15)", border: "1px solid rgba(245, 197, 24, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700 }}>{s.step}</span>
                  </div>
                  <span style={{ color: "#d1d5db", fontSize: "0.875rem" }}>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
