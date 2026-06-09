"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Phone, CheckCircle, MapPin, Mountain, Star, ArrowRight } from "lucide-react";

export default function FortCarsonLandingPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill out all fields.");
      return;
    }
    setSubmitting(true);
    // In production, wire this to an API route or form service
    setTimeout(() => {
      router.push("/pcs/fort-carson/guide");
    }, 600);
  }

  const inputStyle = {
    width: "100%",
    backgroundColor: "#0d1830",
    border: "1px solid #1f2937",
    borderRadius: "8px",
    padding: "0.875rem 1rem",
    color: "#f1f5f9",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    color: "#9ca3af",
    fontSize: "0.8rem",
    fontWeight: 600 as const,
    letterSpacing: "0.05em",
    marginBottom: "0.375rem",
  };

  return (
    <div style={{ backgroundColor: "#0a0f1e" }}>

      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #060c18 0%, #0a0f1e 50%, #111827 100%)",
        padding: "3rem 1.5rem 4rem",
        borderBottom: "1px solid #1f2937",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, right: 0, width: "50%", height: "100%",
          background: "radial-gradient(ellipse at 70% 50%, rgba(245, 197, 24, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            backgroundColor: "rgba(76, 175, 80, 0.1)", border: "1px solid rgba(76, 175, 80, 0.3)",
            borderRadius: "9999px", padding: "0.375rem 1rem", marginBottom: "1.5rem",
          }}>
            <Mountain size={14} color="#4CAF50" />
            <span style={{ color: "#4CAF50", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              PCS TO FORT CARSON
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900,
            color: "#f1f5f9", margin: "0 0 1rem", lineHeight: 1.15,
            letterSpacing: "-0.025em",
          }}>
            PCS&apos;ing to Fort Carson?<br />
            <span style={{ color: "#f5c518" }}>
              Get Your Free Colorado Springs Relocation Guide
            </span>
          </h1>

          <p style={{
            color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.7,
            maxWidth: "600px", margin: "0 0 0.5rem",
          }}>
            Everything you need to know about housing, neighborhoods, schools, and VA home loans near Fort Carson — from a military relocation specialist who&apos;s helped hundreds of families make the move.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Benefits */}
      <section style={{ padding: "3rem 1.5rem 4rem" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "3rem", alignItems: "start",
        }} className="landing-grid">

          {/* Left: Value Prop + Benefits */}
          <div>
            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{
                color: "#f1f5f9", fontWeight: 800, fontSize: "1.5rem",
                margin: "0 0 1rem", lineHeight: 1.3,
              }}>
                What You&apos;ll Get
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Neighborhood Breakdown", desc: "Detailed guide to the best neighborhoods near Fort Carson — with commute times, price ranges, and what each area is really like." },
                  { title: "School District Guide", desc: "Ratings, programs, and military family support for every school district near the post." },
                  { title: "VA Loan Expertise", desc: "Learn how to use your VA benefit to buy near Fort Carson with $0 down — even if you've never used it before." },
                  { title: "Local Insider Knowledge", desc: "From the best restaurants to outdoor adventures at Garden of the Gods and Pikes Peak — everything your family needs to know." },
                ].map(item => (
                  <div key={item.title} style={{
                    display: "flex", gap: "0.75rem", alignItems: "flex-start",
                  }}>
                    <div style={{
                      width: "24px", height: "24px", flexShrink: 0, marginTop: "2px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <CheckCircle size={18} color="#f5c518" />
                    </div>
                    <div>
                      <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                        {item.title}
                      </div>
                      <div style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.6 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div style={{
              backgroundColor: "#111827", border: "1px solid #1f2937",
              borderRadius: "12px", padding: "1.5rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <Shield size={18} color="#f5c518" />
                <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem" }}>
                  Why Military Families Trust Us
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "VA loan specialist — NMLS# 2040562",
                  "Helped hundreds of military families buy near Fort Carson",
                  "Fast responses — usually within a few hours",
                  "No obligation, no pressure — just helpful info",
                ].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <Star size={12} color="#f5c518" style={{ flexShrink: 0 }} />
                    <span style={{ color: "#9ca3af", fontSize: "0.85rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div style={{
            backgroundColor: "#111827", border: "1px solid #1f2937",
            borderRadius: "16px", padding: "2rem",
            position: "sticky", top: "80px",
          }}>
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "rgba(245, 197, 24, 0.1)",
                border: "1px solid rgba(245, 197, 24, 0.3)",
                borderRadius: "9999px", padding: "0.375rem 1rem",
                marginBottom: "1rem",
              }}>
                <MapPin size={14} color="#f5c518" />
                <span style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                  COLORADO SPRINGS, CO
                </span>
              </div>
              <h3 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.25rem", margin: "0 0 0.5rem" }}>
                Get Your Free Fort Carson PCS Guide
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
                Enter your info below and get instant access to our comprehensive relocation guide.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>FULL NAME *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>EMAIL ADDRESS *</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="john.smith@email.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>PHONE NUMBER *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="(555) 123-4567"
                  style={inputStyle}
                />
              </div>

              {error && (
                <p style={{ color: "#ef4444", fontSize: "0.85rem", margin: 0 }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  backgroundColor: submitting ? "#d4a800" : "#f5c518",
                  color: "#0a0f1e", padding: "1rem 2rem", borderRadius: "8px",
                  fontSize: "1rem", fontWeight: 700, border: "none", cursor: submitting ? "wait" : "pointer",
                  letterSpacing: "0.02em", transition: "background-color 0.2s",
                  marginTop: "0.25rem",
                }}
              >
                {submitting ? "Loading Your Guide..." : (
                  <>
                    Get My Free Guide
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <p style={{ color: "#4b5563", fontSize: "0.72rem", textAlign: "center", margin: 0, lineHeight: 1.5 }}>
                Your information is never sold or shared. By submitting, you agree to be contacted regarding VA loan options and PCS resources.
              </p>
            </form>

            {/* Phone CTA */}
            <div style={{
              marginTop: "1.25rem", paddingTop: "1.25rem",
              borderTop: "1px solid #1f2937", textAlign: "center",
            }}>
              <p style={{ color: "#6b7280", fontSize: "0.8rem", margin: "0 0 0.5rem" }}>
                Prefer to talk? Call us directly:
              </p>
              <a href="tel:+17192592246" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                color: "#f5c518", textDecoration: "none", fontWeight: 700, fontSize: "1rem",
              }}>
                <Phone size={16} />
                (719) 259-2246
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Fort Carson Highlights */}
      <section style={{
        padding: "3rem 1.5rem", borderTop: "1px solid #1f2937",
        backgroundColor: "#111827",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{
            color: "#f1f5f9", fontWeight: 800, fontSize: "1.375rem",
            margin: "0 0 2rem", textAlign: "center",
          }}>
            Why Fort Carson Is One of the Best Duty Stations in the Army
          </h2>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}>
            {[
              { stat: "300+", label: "Days of Sunshine Per Year", desc: "Colorado Springs averages 300+ sunny days — more than San Diego." },
              { stat: "$380K", label: "Median Home Price", desc: "Affordable compared to most major metro areas, and your BAH stretches further here." },
              { stat: "55+", label: "Trails Within 30 Minutes", desc: "Hike, bike, and run at Garden of the Gods, Cheyenne Mountain, and beyond." },
              { stat: "#2", label: "Best Place to Live in CO", desc: "Colorado Springs consistently ranks among the best cities to live in the state." },
            ].map(item => (
              <div key={item.label} style={{
                backgroundColor: "#0a0f1e", border: "1px solid #1f2937",
                borderRadius: "12px", padding: "1.5rem", textAlign: "center",
              }}>
                <div style={{ color: "#f5c518", fontWeight: 900, fontSize: "2rem", margin: "0 0 0.25rem" }}>
                  {item.stat}
                </div>
                <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                  {item.label}
                </div>
                <div style={{ color: "#6b7280", fontSize: "0.8rem", lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "#f5c518", color: "#0a0f1e",
              padding: "0.875rem 2rem", borderRadius: "8px",
              fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
            }}>
              Get My Free Guide
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .landing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
