import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ExternalLink, ArrowLeft, Phone, CheckCircle } from "lucide-react";
import { bases, getBaseBySlug, getBasesByBranch, branchColors } from "@/data/bases";
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
    description: `${base.description} Learn about VA home loans and local housing near ${base.name} in ${base.city}, ${base.state}.`,
  };
}

function getActivities(state: string): string[] {
  const stateActivities: Record<string, string[]> = {
    FL: ["White sand beaches", "State and national parks", "Water sports and fishing", "Theme parks nearby", "Year-round outdoor recreation"],
    CA: ["Pacific coastline access", "National park adventures", "Wine country day trips", "World-class dining and culture", "Mountain and desert recreation"],
    TX: ["Hill Country getaways", "Tex-Mex cuisine scene", "Hunting and fishing", "State fair and rodeos", "Vibrant city culture"],
    VA: ["Colonial history sites", "Shenandoah Valley hiking", "Atlantic beach access", "D.C. day trips", "Wine country tours"],
    NC: ["Outer Banks beaches", "Blue Ridge Parkway drives", "Research Triangle culture", "Waterfalls and hiking", "Farm-to-table dining"],
    CO: ["World-class skiing", "Rocky Mountain hiking", "White water rafting", "Mountain biking", "Craft brewery scene"],
    WA: ["Olympic and Cascade hiking", "Pacific Northwest seafood", "Island and ferry adventures", "Skiing at major resorts", "Craft beer and coffee culture"],
    GA: ["Civil War history tours", "Atlanta day trips", "Sea island beaches", "Georgia Aquarium", "Southern hospitality and food"],
    SC: ["Lowcountry cuisine", "Civil War battlefields", "Beach towns and islands", "Golf courses", "Historic district tours"],
    MD: ["Chesapeake Bay boating", "Blue crabs and seafood", "Baltimore Inner Harbor", "D.C. day trips", "Appalachian Trail access"],
    AK: ["Northern Lights viewing", "World-class fishing", "Glacier trekking", "Wildlife safaris", "Midnight sun adventures"],
    HI: ["World-class surfing", "Volcano national parks", "Snorkeling and diving", "Luau and Polynesian culture", "Island hopping"],
    OK: ["Native American cultural sites", "Lake Texoma recreation", "Oklahoma City arts district", "Wichita Mountains wildlife", "Rodeo and state fair"],
    KS: ["Tallgrass Prairie National Preserve", "Flint Hills scenic byway", "Kansas City dining nearby", "College sports culture", "Cycling trails"],
  };
  return stateActivities[state] || [
    "State and national park access",
    "Community festivals and local events",
    "Vibrant dining and entertainment",
    "Sports leagues and recreation centers",
    "Museums and cultural attractions",
  ];
}

export default async function BaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const base = getBaseBySlug(slug);
  if (!base) notFound();

  const color = branchColors[base.branch];
  const relatedBases = getBasesByBranch(base.branch).filter(b => b.slug !== base.slug).slice(0, 3);
  const activities = getActivities(base.state);

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* Dark header */}
      <section style={{ backgroundColor: "#0f172a", padding: "0 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ padding: "1rem 0", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <Link href="/installations" style={{ color: "#64748b", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <ArrowLeft size={13} />
              Installations
            </Link>
            <span style={{ color: "#334155" }}>›</span>
            <span style={{ color: "#94a3b8" }}>{base.name}</span>
          </div>

          {/* Hero content */}
          <div style={{ padding: "2.5rem 0 3rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
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

            {/* Aerial neighborhood photo */}
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

      {/* Content + Sidebar — light */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr minmax(0, 300px)", gap: "2rem", alignItems: "start" }}>
          {/* Main content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", minWidth: 0 }}>

            {/* Housing Info */}
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <h2 style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 0.875rem" }}>Housing Near {base.name}</h2>
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

            {/* Local Life */}
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <h2 style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 0.875rem" }}>Life Near {base.city}, {base.state}</h2>
              <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                The {base.city} area offers military families a vibrant community with plenty of activities, dining, and recreation.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "0.5rem" }}>
                {activities.map(activity => (
                  <li key={activity} style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#334155", fontSize: "0.875rem" }}>
                    <CheckCircle size={14} color="#f5c518" style={{ flexShrink: 0 }} />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            {/* PCS Tips */}
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <h2 style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 0.875rem" }}>PCS Tips for {base.name}</h2>
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

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "sticky", top: "80px" }}>
            {/* VA Loan CTA */}
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
              <a href="tel:+15551234567" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                color: "#475569", textDecoration: "none", fontSize: "0.8rem",
              }}>
                <Phone size={13} color="#64748b" /> (555) 123-4567
              </a>
            </div>

            {/* Quick Links */}
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

      {/* Related Bases */}
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
        @media (max-width: 768px) {
          .base-hero-photo { display: none !important; }
        }
      `}</style>
    </div>
  );
}
