import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ExternalLink, ArrowLeft, Home, Phone, CheckCircle } from "lucide-react";
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
    title: `${base.name} | Zack Tarbet PCS Guide`,
    description: `${base.description} Learn about VA home loans and local housing near ${base.name} in ${base.city}, ${base.state}.`,
  };
}

const localActivities: Record<string, string[]> = {};

function getActivities(state: string): string[] {
  const stateActivities: Record<string, string[]> = {
    FL: ["White sand beaches", "State and national parks", "Water sports and fishing", "Theme parks nearby", "Year-round outdoor recreation"],
    CA: ["Pacific coastline access", "National park adventures", "Wine country day trips", "World-class dining and culture", "Mountain and desert recreation"],
    TX: ["Hill Country getaways", "Tex-Mex cuisine scene", "Hunting and fishing", "State fair and rodeos", "Vibrant city nightlife"],
    VA: ["Colonial history sites", "Shenandoah Valley hiking", "Atlantic beach access", "D.C. day trips", "Wine country tours"],
    NC: ["Outer Banks beaches", "Blue Ridge Parkway drives", "Research Triangle culture", "Waterfalls and hiking", "Farm-to-table dining"],
    CO: ["World-class skiing", "Rocky Mountain hiking", "White water rafting", "Mountain biking", "Craft brewery scene"],
    WA: ["Olympic and Cascade hiking", "Pacific Northwest seafood", "Island and ferry adventures", "Skiing at major resorts", "Craft beer and coffee culture"],
    GA: ["Civil War history tours", "Atlanta day trips", "Sea island beaches", "Georgia Aquarium", "Southern hospitality and food"],
    SC: ["Lowcountry cuisine", "Civil War battlefields", "Beach towns and islands", "Golf courses", "Historic district tours"],
    MD: ["Chesapeake Bay boating", "Blue crabs and seafood", "Baltimore Inner Harbor", "D.C. day trips", "Appalachian Trail access"],
    AK: ["Northern Lights viewing", "World-class fishing", "Glacier trekking", "Wildlife safaris", "Midnight sun adventures"],
    HI: ["World-class surfing", "Volcano national parks", "Snorkeling and diving", "Luau and Polynesian culture", "Island hopping"],
  };
  return stateActivities[state] || [
    "Local state and national parks",
    "Community festivals and events",
    "Dining and entertainment districts",
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
    <div style={{ backgroundColor: "#0a0f1e", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: "#060c18", borderBottom: "1px solid #1f2937", padding: "0.75rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem" }}>
          <Link href="/installations" style={{ color: "#6b7280", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <ArrowLeft size={14} />
            Installations
          </Link>
          <span style={{ color: "#374151" }}>›</span>
          <span style={{ color: "#9ca3af" }}>{base.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #060c18 0%, #0a0f1e 100%)", padding: "3rem 1.5rem 2.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            backgroundColor: `${color}22`, color: color,
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em",
            padding: "0.25rem 0.75rem", borderRadius: "9999px",
            border: `1px solid ${color}44`, marginBottom: "0.75rem",
          }}>
            {base.branch.toUpperCase()}
          </div>
          <h1 style={{ color: "#f1f5f9", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, margin: "0 0 0.75rem", lineHeight: 1.2 }}>
            {base.name}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#6b7280", fontSize: "0.9rem", marginBottom: "1rem" }}>
            <MapPin size={16} color="#f5c518" />
            {base.city}, {base.state}
          </div>
          <p style={{ color: "#9ca3af", lineHeight: 1.7, maxWidth: "700px", fontSize: "1rem", margin: "0 0 1.5rem" }}>
            {base.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a
              href={base.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "transparent", border: "1px solid #374151",
                color: "#d1d5db", padding: "0.625rem 1.25rem",
                borderRadius: "8px", fontSize: "0.875rem", fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <ExternalLink size={14} />
              Official Website
            </a>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "#f5c518", color: "#0a0f1e",
                padding: "0.625rem 1.25rem", borderRadius: "8px",
                fontSize: "0.875rem", fontWeight: 700, textDecoration: "none",
              }}
            >
              <Home size={14} />
              VA Loan Near {base.name}
            </Link>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr minmax(0, 320px)", gap: "2rem", alignItems: "start" }}>
          {/* Main content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", minWidth: 0 }}>
            {/* Housing Info */}
            <div style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "10px", padding: "1.75rem" }}>
              <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 1rem" }}>Housing Near {base.name}</h2>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                Military members stationed at {base.name} can choose between on-base housing and off-base rentals or purchases using their BAH (Basic Allowance for Housing). VA loans are an excellent tool for buying near this installation with $0 down payment.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
                {[
                  { label: "On-Base Housing", value: "Available through installation housing office" },
                  { label: "VA Loan Eligible", value: "Yes — $0 down for qualified buyers" },
                  { label: "BAH Varies By", value: "Pay grade & dependency status" },
                ].map(item => (
                  <div key={item.label} style={{ backgroundColor: "#0d1830", borderRadius: "8px", padding: "1rem", border: "1px solid #1f2937" }}>
                    <div style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", marginBottom: "0.25rem" }}>{item.label}</div>
                    <div style={{ color: "#9ca3af", fontSize: "0.8rem" }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Activities */}
            <div style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "10px", padding: "1.75rem" }}>
              <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 1rem" }}>Life Near {base.city}, {base.state}</h2>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                The {base.city} area offers military families a vibrant community with plenty of activities, dining, and recreation options.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.5rem" }}>
                {activities.map(activity => (
                  <li key={activity} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#d1d5db", fontSize: "0.875rem" }}>
                    <CheckCircle size={14} color="#f5c518" style={{ flexShrink: 0 }} />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            {/* PCS Tips */}
            <div style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "10px", padding: "1.75rem" }}>
              <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 1rem" }}>PCS Tips for {base.name}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Contact the installation's housing office early — on-base wait lists can be long.",
                  "Check BAH rates for your pay grade at the official DoD BAH calculator before setting a home budget.",
                  "Getting VA pre-approved before your PCS orders helps you move fast in competitive markets.",
                  "Many areas near military bases have established military-friendly real estate markets — inventory can be competitive.",
                ].map((tip, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.6 }}>
                    <span style={{ color: "#f5c518", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", position: "sticky", top: "80px" }}>
            {/* VA Loan CTA */}
            <div style={{ backgroundColor: "#111827", border: "1px solid rgba(245, 197, 24, 0.3)", borderRadius: "12px", padding: "1.75rem" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(245, 197, 24, 0.15)", border: "2px solid #f5c518", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <span style={{ color: "#f5c518", fontWeight: 800, fontSize: "1rem" }}>ZT</span>
              </div>
              <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.0625rem", margin: "0 0 0.375rem" }}>
                Buying near {base.name}?
              </h3>
              <p style={{ color: "#9ca3af", fontSize: "0.8rem", lineHeight: 1.6, margin: "0 0 1.25rem" }}>
                I specialize in VA loans for military members PCSing to {base.city}, {base.state}. $0 down, fast closings, military-focused service.
              </p>
              <Link
                href="/contact"
                style={{
                  display: "block", textAlign: "center",
                  backgroundColor: "#f5c518", color: "#0a0f1e",
                  padding: "0.75rem", borderRadius: "8px",
                  fontSize: "0.875rem", fontWeight: 700, textDecoration: "none",
                  marginBottom: "0.75rem",
                }}
              >
                Get Pre-Approved
              </Link>
              <a
                href="tel:+15551234567"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  color: "#9ca3af", textDecoration: "none", fontSize: "0.8rem",
                  padding: "0.5rem",
                }}
              >
                <Phone size={14} /> (555) 123-4567
              </a>
            </div>

            {/* Quick Links */}
            <div style={{ backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "12px", padding: "1.5rem" }}>
              <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.9rem", margin: "0 0 1rem", letterSpacing: "0.05em" }}>QUICK LINKS</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { label: "VA Loan Guide", href: "/va-home-loans" },
                  { label: "PCS Checklist", href: "/pcs-resources" },
                  { label: "BAH Calculator", href: "/pcs-resources#bah" },
                  { label: `More ${base.branch} Bases`, href: `/installations?branch=${encodeURIComponent(base.branch)}` },
                ].map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ color: "#9ca3af", textDecoration: "none", fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    {link.label}
                    <span style={{ color: "#374151" }}>→</span>
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
            <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 1.25rem" }}>
              Other {base.branch} Installations
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {relatedBases.map(b => (
                <BaseCard key={b.slug} base={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
