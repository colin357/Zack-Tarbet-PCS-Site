import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ExternalLink, ArrowLeft, Phone, Clock, GraduationCap, Utensils, TreePine, Ticket, ShoppingBag, Landmark, Home, TrendingUp, CheckCircle } from "lucide-react";
import { bases, getBaseBySlug, getBasesByBranch, branchColors } from "@/data/bases";
import { getBaseDetail } from "@/data/baseDetails";
import type { LocalActivity } from "@/data/baseDetails";
import BaseCard from "@/components/installations/BaseCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return bases.map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const base = getBaseBySlug(slug);
  if (!base) return { title: "Installation Not Found" };
  return {
    title: `${base.name} | Heroes Home Network`,
    description: `${base.description} Find neighborhoods, schools, local activities, and VA home loan resources near ${base.name} in ${base.city}, ${base.state}.`,
  };
}

const categoryMeta: Record<LocalActivity["category"], { color: string; bg: string; icon: typeof Utensils }> = {
  Dining: { color: "#16a34a", bg: "#f0fdf4", icon: Utensils },
  Outdoors: { color: "#0891b2", bg: "#ecfeff", icon: TreePine },
  Entertainment: { color: "#7c3aed", bg: "#f5f3ff", icon: Ticket },
  Shopping: { color: "#2563eb", bg: "#eff6ff", icon: ShoppingBag },
  Attraction: { color: "#d97706", bg: "#fffbeb", icon: Landmark },
};

const card = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "10px",
  padding: "1.75rem",
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
} as const;

const sectionHeading = {
  color: "#0f172a",
  fontWeight: 700,
  fontSize: "1.125rem",
  margin: "0 0 1rem",
} as const;

export default async function BaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const base = getBaseBySlug(slug);
  if (!base) notFound();

  const color = branchColors[base.branch];
  const relatedBases = getBasesByBranch(base.branch).filter(b => b.slug !== base.slug).slice(0, 3);
  const detail = getBaseDetail(slug);

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>

      {/* ── Dark header ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0f172a", padding: "0 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          <div style={{ padding: "1rem 0", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <Link href="/installations" style={{ color: "#64748b", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <ArrowLeft size={13} />
              Installations
            </Link>
            <span style={{ color: "#334155" }}>›</span>
            <span style={{ color: "#94a3b8" }}>{base.name}</span>
          </div>

          <div className="base-hero-grid" style={{ padding: "2.5rem 0 3rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{
                display: "inline-block",
                backgroundColor: `${color}22`, color,
                fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
                padding: "0.2rem 0.625rem", borderRadius: "4px",
                border: `1px solid ${color}44`, marginBottom: "0.875rem",
                textTransform: "uppercase",
              }}>
                {base.branch}
              </div>
              <h1 style={{ color: "#ffffff", fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 900, margin: "0 0 0.625rem", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                {base.name}
              </h1>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#64748b", fontSize: "0.875rem", marginBottom: "1rem" }}>
                <MapPin size={14} color="#f5c518" />
                {base.city}, {base.state}
              </div>
              <p style={{ color: "#94a3b8", lineHeight: 1.75, maxWidth: "620px", fontSize: "0.9375rem", margin: "0 0 1.75rem" }}>
                {base.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/contact" style={{
                  display: "inline-block",
                  backgroundColor: "#f5c518", color: "#0a0f1e",
                  padding: "0.6875rem 1.5rem", borderRadius: "6px",
                  fontSize: "0.875rem", fontWeight: 700, textDecoration: "none",
                }}>
                  Get VA Loan Help
                </Link>
                <a href={base.website} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.375rem",
                  backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                  color: "#cbd5e1", padding: "0.6875rem 1.25rem",
                  borderRadius: "6px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none",
                }}>
                  <ExternalLink size={13} />
                  Official Website
                </a>
              </div>
            </div>

            <div style={{ width: "260px", flexShrink: 0 }} className="base-hero-photo">
              <div style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80"
                  alt={`Neighborhood near ${base.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", right: "0.75rem" }}>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", margin: 0 }}>Local neighborhood · {base.city}, {base.state}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content + Sidebar ────────────────────────────────────────────── */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div className="base-content-grid" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr minmax(0, 300px)", gap: "2rem", alignItems: "start" }}>

          {/* ── Main content ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", minWidth: 0 }}>

            {/* Neighborhoods */}
            {detail ? (
              <div style={card}>
                <h2 style={sectionHeading}>Neighborhoods Near {base.name}</h2>
                <p style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
                  Popular communities where military families stationed at {base.name} choose to live.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
                  {detail.neighborhoods.map(n => (
                    <div key={n.name} style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1.125rem" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.5rem" }}>
                        <h3 style={{ color: "#0f172a", fontWeight: 700, fontSize: "0.9375rem", margin: 0 }}>{n.name}</h3>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#64748b", fontSize: "0.72rem", whiteSpace: "nowrap", flexShrink: 0 }}>
                          <Clock size={10} />
                          {n.commute}
                        </span>
                      </div>
                      <p style={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.6, margin: "0 0 0.75rem" }}>{n.description}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                        {n.tags.map(tag => (
                          <span key={tag} style={{ backgroundColor: "#e2e8f0", color: "#475569", fontSize: "0.67rem", fontWeight: 600, padding: "0.2rem 0.5rem", borderRadius: "9999px" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Schools */}
            {detail ? (
              <div style={card}>
                <h2 style={{ ...sectionHeading, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <GraduationCap size={18} color="#f5c518" />
                  Schools &amp; Education
                </h2>
                <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1.125rem", marginBottom: "1rem" }}>
                  <p style={{ color: "#0f172a", fontWeight: 700, fontSize: "0.875rem", margin: "0 0 0.375rem" }}>{detail.schools.district}</p>
                  <p style={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{detail.schools.context}</p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {detail.schools.highlights.map(h => (
                    <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#334155", fontSize: "0.875rem" }}>
                      <CheckCircle size={14} color="#f5c518" style={{ flexShrink: 0, marginTop: "2px" }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Activities & Dining */}
            {detail ? (
              <div style={card}>
                <h2 style={sectionHeading}>Things to Do Near {base.city}</h2>
                <p style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
                  Local favorites for dining, outdoor adventures, and entertainment in the {base.city} area.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.875rem" }}>
                  {detail.activities.map(act => {
                    const meta = categoryMeta[act.category];
                    const Icon = meta.icon;
                    return (
                      <div key={act.name} style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "6px", backgroundColor: meta.bg, flexShrink: 0 }}>
                            <Icon size={14} color={meta.color} />
                          </span>
                          <div>
                            <div style={{ color: "#0f172a", fontWeight: 700, fontSize: "0.875rem", lineHeight: 1.2 }}>{act.name}</div>
                            <div style={{ color: meta.color, fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{act.category}</div>
                          </div>
                        </div>
                        <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>{act.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {/* Housing & Cost of Living */}
            {detail ? (
              <div style={card}>
                <h2 style={{ ...sectionHeading, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Home size={18} color="#f5c518" />
                  Housing &amp; Cost of Living
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1.125rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#64748b", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.375rem" }}>
                      <TrendingUp size={11} />
                      Median Home Price
                    </div>
                    <div style={{ color: "#0f172a", fontWeight: 800, fontSize: "1.25rem", lineHeight: 1 }}>{detail.housing.priceRange}</div>
                  </div>
                  <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1.125rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#64748b", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.375rem" }}>
                      <Home size={11} />
                      Typical Rent
                    </div>
                    <div style={{ color: "#0f172a", fontWeight: 800, fontSize: "1.25rem", lineHeight: 1 }}>{detail.housing.rentRange}</div>
                  </div>
                </div>
                <p style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 1rem" }}>{detail.housing.marketContext}</p>
                <div>
                  <p style={{ color: "#0f172a", fontWeight: 700, fontSize: "0.8rem", margin: "0 0 0.5rem" }}>Popular neighborhoods to consider:</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {detail.housing.hotNeighborhoods.map(n => (
                      <span key={n} style={{ backgroundColor: "#0f172a", color: "#f5c518", fontSize: "0.75rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: "9999px" }}>{n}</span>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {/* Generic Housing Info fallback when no detail data */}
            {!detail && (
              <div style={card}>
                <h2 style={sectionHeading}>Housing Near {base.name}</h2>
                <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                  Military members stationed at {base.name} can choose between on-base housing and off-base rentals or purchases using their BAH (Basic Allowance for Housing). VA loans are an excellent tool for buying near this installation with $0 down payment.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem" }}>
                  {[
                    { label: "On-Base Housing", value: "Contact installation housing office early" },
                    { label: "VA Loan", value: "$0 down for qualified buyers" },
                    { label: "BAH", value: "Based on pay grade & dependents" },
                  ].map(item => (
                    <div key={item.label} style={{ backgroundColor: "#f8fafc", borderRadius: "8px", padding: "0.875rem 1rem", border: "1px solid #e2e8f0" }}>
                      <div style={{ color: "#0f172a", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "0.25rem" }}>{item.label}</div>
                      <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PCS Tips */}
            <div style={card}>
              <h2 style={sectionHeading}>PCS Tips for {base.name}</h2>
              <ol style={{ padding: "0 0 0 1.25rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Contact the installation housing office early — wait lists can be long.",
                  "Check BAH rates at the official DoD BAH calculator before setting your home budget.",
                  "Get VA pre-approved before your PCS orders — it helps you move fast in competitive markets.",
                  "Military-friendly real estate markets near bases can move quickly — be ready to act.",
                ].map((tip, i) => (
                  <li key={i} style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.7 }}>{tip}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="base-sidebar" style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "sticky", top: "80px" }}>
            <div style={{ backgroundColor: "#0f172a", borderRadius: "12px", padding: "1.75rem" }}>
              <p style={{ color: "#f5c518", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 0.75rem" }}>
                VA Home Loans
              </p>
              <h3 style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.0625rem", margin: "0 0 0.625rem", lineHeight: 1.3 }}>
                Buying near {base.name}?
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.65, margin: "0 0 1.25rem" }}>
                Heroes Home Network specializes in VA loans for military members PCSing to {base.city}, {base.state}. $0 down, fast closings.
              </p>
              <Link href="/contact" style={{
                display: "block", textAlign: "center",
                backgroundColor: "#f5c518", color: "#0a0f1e",
                padding: "0.75rem", borderRadius: "6px",
                fontSize: "0.875rem", fontWeight: 700, textDecoration: "none",
                marginBottom: "0.75rem",
              }}>
                Get Pre-Approved
              </Link>
              <a href="tel:+17194240561" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                color: "#475569", textDecoration: "none", fontSize: "0.8rem",
              }}>
                <Phone size={13} color="#64748b" /> (719) 424-0561
              </a>
            </div>

            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <h3 style={{ color: "#0f172a", fontWeight: 700, fontSize: "0.8rem", margin: "0 0 0.875rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>Quick Links</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { label: "VA Loan Guide", href: "/va-home-loans" },
                  { label: "PCS Checklist", href: "/pcs-resources" },
                  { label: "BAH Info", href: "/pcs-resources#bah" },
                  { label: `More ${base.branch} Bases`, href: `/installations?branch=${encodeURIComponent(base.branch)}` },
                ].map(link => (
                  <Link key={link.href} href={link.href} style={{
                    color: "#475569", textDecoration: "none", fontSize: "0.8rem",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "0.375rem 0", borderBottom: "1px solid #f1f5f9",
                  }}>
                    {link.label}
                    <span style={{ color: "#cbd5e1" }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Bases ─────────────────────────────────────────────────── */}
      {relatedBases.length > 0 && (
        <section style={{ padding: "0 1.5rem 3rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2 style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 1.25rem" }}>
              Other {base.branch} Installations
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {relatedBases.map(b => (
                <BaseCard key={b.slug} base={b} light />
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .base-content-grid { grid-template-columns: minmax(0, 1fr) !important; }
          .base-sidebar { position: static !important; top: auto !important; }
        }

        @media (max-width: 768px) {
          .base-hero-grid { grid-template-columns: minmax(0, 1fr) !important; }
          .base-hero-photo { display: none !important; }
        }
      `}</style>
    </div>
  );
}
