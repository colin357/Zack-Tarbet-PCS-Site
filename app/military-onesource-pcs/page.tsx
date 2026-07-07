import type { Metadata } from "next";
import Link from "next/link";
import {
  LifeBuoy, ClipboardList, MapPin, Truck, HeartHandshake, Briefcase,
  Users, ArrowRight, Home, CheckCircle,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import GetInTouch from "@/components/cta/GetInTouch";
import { faqPageSchema, breadcrumbSchema, absoluteUrl, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Using Military OneSource for Your PCS",
  description:
    "What Military OneSource offers a mover and how to use it for your PCS: Plan My Move, base info, DPS help, and free counseling, plus what it does not cover.",
  alternates: { canonical: "/military-onesource-pcs" },
  openGraph: {
    title: "Using Military OneSource for Your PCS | Heroes Home Network",
    description:
      "How to use Military OneSource for your PCS move: Plan My Move, MilitaryINSTALLATIONS, DPS support, and free counseling, plus the housing gap it leaves.",
    url: "/military-onesource-pcs",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Using Military OneSource for Your PCS",
  description:
    "A guide to what Military OneSource offers during a PCS move and how to use its tools, plus the housing and home-buying decisions it does not cover.",
  url: absoluteUrl("/military-onesource-pcs"),
  image: absoluteUrl(SITE.ogImage),
  author: { "@id": absoluteUrl("/#organization") },
  publisher: { "@id": absoluteUrl("/#organization") },
  about: ["Military OneSource", "PCS move", "Plan My Move", "Military relocation"],
  isPartOf: { "@id": absoluteUrl("/#website") },
};

const faqs = [
  {
    q: "Is Military OneSource free?",
    a: "Yes. Military OneSource is a free program from the Department of Defense for active-duty, National Guard, and Reserve members, their families, and survivors, plus service members for a period after separation. The tools, articles, and counseling do not cost anything to use.",
  },
  {
    q: "What is Plan My Move?",
    a: "Plan My Move is the official moving-checklist tool on Military OneSource. It builds a customizable timeline of tasks for your PCS based on your dates and situation, so both first-time and experienced movers can track what to do and when.",
  },
  {
    q: "Does Military OneSource help with a PCS move?",
    a: "Yes. It offers move-planning tools, installation profiles, guidance on moving your household goods through the Defense Personal Property System, and free non-medical counseling for the stress that comes with relocating. It is the official starting point for planning a move.",
  },
  {
    q: "How do I contact Military OneSource?",
    a: "You can reach a Military OneSource consultant any time through live chat or by phone on the official contact page. Consultants are available around the clock, worldwide, and can connect you with the right relocation resource for your situation.",
  },
  {
    q: "Does Military OneSource help you buy a house?",
    a: "No. Military OneSource covers move logistics, not the housing decision. It will not tell you whether to buy or rent at your next base, help you compare neighborhoods, or run the numbers on a mortgage against your BAH. That is the gap the guides on this site fill.",
  },
];

// ── Shared style tokens (match the repo's inline-style convention) ──
const container = { maxWidth: "1100px", margin: "0 auto" } as const;

const sectionTitle = {
  color: "#f1f5f9",
  fontWeight: 800 as const,
  fontSize: "1.5rem",
  margin: "0 0 0.75rem",
  lineHeight: 1.3,
} as const;

const bodyText = {
  color: "#9ca3af",
  fontSize: "1rem",
  lineHeight: 1.75,
  margin: "0 0 1rem",
} as const;

const card = {
  backgroundColor: "#111827",
  border: "1px solid #1f2937",
  borderRadius: "12px",
  padding: "1.75rem",
} as const;

const anchor = {
  color: "#f5c518",
  fontWeight: 600 as const,
  textDecoration: "none",
} as const;

const offerings = [
  { icon: ClipboardList, title: "Plan My Move", desc: "A customizable moving checklist that turns your PCS into a dated task list, so nothing slips through the cracks." },
  { icon: MapPin, title: "MilitaryINSTALLATIONS", desc: "Profiles for your new base, including the contact for the local household goods and transportation office." },
  { icon: Truck, title: "Personal property and DPS help", desc: "Guidance for moving your household goods through the Defense Personal Property System, plus a weight estimator." },
  { icon: HeartHandshake, title: "Free non-medical counseling", desc: "Confidential support for the stress of a move, with consultants available around the clock, worldwide." },
  { icon: Briefcase, title: "Spouse career support", desc: "Career coaching and job-search help for a spouse restarting at a new duty station." },
  { icon: Users, title: "Special needs consultations", desc: "Support for families with an Exceptional Family Member Program enrollee moving to a new location." },
];

const howToSteps = [
  { title: "Start at the moving and PCS hub", body: "Military OneSource keeps its move resources in one place. Begin there to see the full set of tools before you dive into any single one." },
  { title: "Build your checklist in Plan My Move", body: "Enter your dates and situation, and let the tool generate your task timeline. Pair it with the checklist on this site so nothing gets missed." },
  { title: "Look up your new base", body: "Use MilitaryINSTALLATIONS to find your gaining installation and the transportation office you will work with for your household goods." },
  { title: "Move your household goods through DPS", body: "Follow the personal property resources to request and manage your move, and estimate your weight before pack-out." },
  { title: "Lean on counseling and spouse support", body: "A PCS is stressful. Use the free non-medical counseling and spouse career help for the human side of the move." },
  { title: "Reach a consultant any time", body: "Consultants are available 24/7 by live chat or phone through the official contact page when you hit a question the tools do not answer." },
];

export default function MilitaryOneSourcePcsPage() {
  return (
    <div style={{ backgroundColor: "#0a0f1e" }}>
      <JsonLd
        data={[
          articleSchema,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Military PCS Guide", path: "/military-pcs-guide" },
            { name: "Military OneSource", path: "/military-onesource-pcs" },
          ]),
        ]}
      />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #060c18 0%, #0a0f1e 100%)",
          padding: "4rem 1.5rem",
          borderBottom: "1px solid #1f2937",
        }}
      >
        <div style={container}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(245, 197, 24, 0.1)",
              border: "1px solid rgba(245, 197, 24, 0.3)",
              borderRadius: "9999px",
              padding: "0.375rem 1rem",
              marginBottom: "1.5rem",
            }}
          >
            <LifeBuoy size={14} color="#f5c518" />
            <span style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              MILITARY ONESOURCE
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 1.25rem", lineHeight: 1.15 }}>
            Using Military OneSource for Your PCS Move
          </h1>

          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "720px", margin: "0 0 1rem" }}>
            Military OneSource is the official, free hub for a military PCS, and
            it is the right place to start planning your move. It gives you the
            checklist tools, base information, and moving support the government
            provides at no cost.
          </p>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "720px", margin: 0 }}>
            Here is what Military OneSource offers a mover, how to use it, and the
            one big thing it leaves out. For the whole move end to end, see the{" "}
            <Link href="/military-pcs-guide" style={anchor}>complete military PCS move guide</Link>
            .
          </p>
        </div>
      </section>

      {/* What it offers */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem" }}>What Military OneSource offers a mover</h2>
          <p style={{ ...bodyText, marginBottom: "2rem", maxWidth: "720px" }}>
            OneSource pulls the official move tools into one place. These are the
            pieces you will use most during a PCS.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {offerings.map((item) => (
              <div key={item.title} style={card}>
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
                    marginBottom: "0.875rem",
                  }}
                >
                  <item.icon size={18} color="#f5c518" />
                </div>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use it */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={container}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem" }}>How to use Military OneSource for your PCS</h2>
          <p style={{ ...bodyText, marginBottom: "2rem", maxWidth: "720px" }}>
            Work it in order and it stays manageable. Start early, since the tools
            are most useful before your dates lock in.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {howToSteps.map((step, i) => (
              <div key={step.title} style={{ ...card, display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(245, 197, 24, 0.12)",
                    border: "1px solid rgba(245, 197, 24, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "#f5c518", fontSize: "0.85rem", fontWeight: 800 }}>{i + 1}</span>
                </div>
                <div>
                  <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.375rem" }}>{step.title}</h3>
                  <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: "#6b7280", fontSize: "0.8rem", lineHeight: 1.6, margin: "1.5rem 0 0" }}>
            Get started on the official{" "}
            <a href="https://www.militaryonesource.mil/moving-pcs/" target="_blank" rel="noopener noreferrer" style={anchor}>
              Military OneSource moving and PCS hub
            </a>{" "}
            and the{" "}
            <a href="https://www.militaryonesource.mil/resources/network/plan-my-move/" target="_blank" rel="noopener noreferrer" style={anchor}>
              Plan My Move tool
            </a>
            .
          </p>
        </div>
      </section>

      {/* The gap */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={sectionTitle}>What Military OneSource does not cover</h2>
          <p style={bodyText}>
            Military OneSource is built around move logistics. It gets your goods
            packed, shipped, and tracked. What it does not do is help you decide
            where and how to live once you arrive.
          </p>
          <p style={bodyText}>
            It will not tell you whether to buy or rent at the new base, compare
            neighborhoods and school zones, weigh your BAH against a mortgage
            payment, or help you pick a lender or agent. Those are the decisions
            that shape your next few years, and they are the ones this site is
            built to cover.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", margin: "1.5rem 0 0" }}>
            {[
              { text: "Whether to buy or rent, and how your BAH stacks up against a mortgage", href: "/va-home-loans", label: "VA home loan overview" },
              { text: "How to choose an agent who knows BAH, VA loans, and tight report dates", href: "/pcs-real-estate-agents", label: "military-friendly real estate agents" },
              { text: "What a neighborhood near a specific base is really like", href: "/installations", label: "base profiles" },
            ].map((item) => (
              <div key={item.href} style={{ ...card, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <CheckCircle size={16} color="#4CAF50" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ color: "#d1d5db", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.text}</span>
                </div>
                <Link href={item.href} style={{ ...anchor, fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
                  {item.label} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={container}>
          <h2 style={sectionTitle}>Pair OneSource with these guides</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
            {[
              { icon: ClipboardList, title: "PCS Checklist", desc: "Every task by phase, plus a printable binder.", href: "/pcs-checklist" },
              { icon: Truck, title: "Weight Allowance", desc: "What the movers will haul, by rank.", href: "/pcs-weight-allowance" },
              { icon: Home, title: "Complete PCS Guide", desc: "The full move from orders to move-in.", href: "/military-pcs-guide" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ ...card, textDecoration: "none", display: "block", padding: "1.5rem" }}>
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
                    marginBottom: "0.875rem",
                  }}
                >
                  <item.icon size={18} color="#f5c518" />
                </div>
                <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.375rem", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  {item.title}
                  <ArrowRight size={14} color="#f5c518" />
                </div>
                <div style={{ color: "#6b7280", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={{ ...container, maxWidth: "760px" }}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem", marginBottom: "1.75rem" }}>
            Military OneSource PCS FAQs
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={card}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.5rem" }}>{faq.q}</h3>
                <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch
        heading="OneSource handled the move. What about the house?"
        body="If you want to talk through buying or renting at your next duty station, or how your BAH fits a mortgage, get in touch and someone will follow up."
      />
    </div>
  );
}
