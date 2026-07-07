import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList, FolderOpen, FileText, CheckCircle, ArrowRight, Folder,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import GetInTouch from "@/components/cta/GetInTouch";
import BinderSignup from "@/components/pcs/BinderSignup";
import { faqPageSchema, breadcrumbSchema, absoluteUrl, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "The Ultimate Military PCS Checklist",
  description:
    "A step-by-step military PCS checklist by phase, orders to move-in. Download a free printable PCS binder to keep every document in one place.",
  alternates: { canonical: "/pcs-checklist" },
  openGraph: {
    title: "The Ultimate Military PCS Checklist | Heroes Home Network",
    description:
      "A phase-by-phase military PCS checklist plus a free printable PCS binder with document trackers, contact logs, and packing sheets.",
    url: "/pcs-checklist",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Ultimate Military PCS Checklist",
  description:
    "A step-by-step military PCS checklist organized by phase, from the day you learn your next location through move-in, plus a free printable PCS binder.",
  url: absoluteUrl("/pcs-checklist"),
  image: absoluteUrl(SITE.ogImage),
  author: { "@id": absoluteUrl("/#organization") },
  publisher: { "@id": absoluteUrl("/#organization") },
  about: ["Military PCS checklist", "PCS binder", "Military relocation", "PCS timeline"],
  isPartOf: { "@id": absoluteUrl("/#website") },
};

const faqs = [
  {
    q: "What should be on a military PCS checklist?",
    a: "A good PCS checklist walks the move by phase: start a document binder and read your orders, book your move in the Defense Personal Property System, confirm your weight allowance and travel plans, supervise pack-out, then in-process and receive your goods at the new base. The phase list on this page covers each step.",
  },
  {
    q: "When should I start my PCS checklist?",
    a: "Start the day you learn your next location, even before hard-copy orders. Early action means better pack-out dates, more housing options, and time to gather medical and school records. Booking your move early matters most during the summer PCS season, when dates fill fast.",
  },
  {
    q: "Does Military OneSource have a PCS checklist?",
    a: "Yes. Military OneSource publishes a PCS checklist and planning tools, and it is the official starting point for your move request. This checklist covers the same ground and adds the housing and buying steps OneSource does not, so use them together.",
  },
  {
    q: "What is a PCS binder?",
    a: "A PCS binder is a single three-ring binder that holds every document your move depends on: orders, IDs, medical and school records, vehicle and financial paperwork, and your moving inventory. Keeping it with you, not on the truck, means nothing critical gets lost or packed by accident.",
  },
  {
    q: "What should I keep in my PCS binder?",
    a: "Keep your orders and copies, family IDs and vital records, medical and dental records, school and immunization records, vehicle titles and insurance, financial documents, pet health records, and your household goods inventory. Hand-carry the binder during the move.",
  },
  {
    q: "Where can I get free PCS binder printables?",
    a: "You can download a free printable PCS binder from this page. It includes the full checklist plus document trackers, contact logs, and packing sheets, formatted to print and drop into a three-ring binder.",
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

// Each item can carry a React node so we can drop internal links inline.
const phases: { when: string; title: string; items: React.ReactNode[] }[] = [
  {
    when: "As soon as you know",
    title: "Set up and read in",
    items: [
      "Start a PCS binder or folder for every document, and keep it with you.",
      "Read your orders closely once they arrive, then make several copies.",
      <>Log in to the Defense Personal Property System at{" "}
        <a href="https://move.mil" target="_blank" rel="noopener noreferrer" style={anchor}>move.mil</a>{" "}
        and start your move request.</>,
      "Tell your chain of command and your family the plan and the dates.",
      "Check your BAH for the new duty station so you know your housing budget.",
    ],
  },
  {
    when: "Two to three months out",
    title: "Book the move and the logistics",
    items: [
      "Book your pack-out and delivery dates before the summer season fills up.",
      <>Confirm your{" "}
        <Link href="/pcs-weight-allowance" style={anchor}>PCS weight allowance</Link>{" "}
        so you do not go over and pay out of pocket.</>,
      "Decide between a government-arranged move and a Personally Procured Move.",
      <>Arrange{" "}
        <Link href="/pcs-vehicle-shipping" style={anchor}>vehicle shipping</Link>{" "}
        if you are shipping a car, especially for an overseas move.</>,
      <>Start{" "}
        <Link href="/pcs-with-pets" style={anchor}>pet paperwork and vet visits</Link>,{" "}
        which need weeks of lead time for OCONUS.</>,
      "Research neighborhoods and schools near the new base.",
    ],
  },
  {
    when: "One month out",
    title: "Money, records, and notifications",
    items: [
      <>Estimate your costs with the{" "}
        <Link href="/pcs-cost-calculator" style={anchor}>PCS cost calculator</Link>{" "}
        and request{" "}
        <Link href="/pcs-advance-pay-allowances" style={anchor}>advance pay or allowances</Link>{" "}
        if you need them.</>,
      "Line up temporary lodging for both ends of the move if you need it.",
      "Gather medical and dental records, and request copies of school records.",
      "Notify your landlord, utilities, banks, and the post office of the move.",
      "Confirm travel plans, including flights for an OCONUS move.",
      "Set aside orders, IDs, and valuables to hand-carry, not to ship.",
    ],
  },
  {
    when: "Moving week",
    title: "Pack-out and travel",
    items: [
      "Supervise pack-out and check the inventory before the truck loads.",
      "Photograph high-value items and note serial numbers for your records.",
      "Keep a do-not-pack pile: documents, medications, chargers, and a few days of clothes.",
      "Do a final walkthrough and clear quarters or your rental.",
      "Confirm your report date and your route to the new base.",
    ],
  },
  {
    when: "After you arrive",
    title: "In-process and settle in",
    items: [
      "Report in and start in-processing at the new installation.",
      "Update DEERS and change your address with every account and agency.",
      "Receive your household goods and inspect for loss or damage as they unload.",
      "File any loss or damage claims quickly, within the required deadlines.",
      "Enroll your kids in school and set up healthcare at the new location.",
      "Confirm your BAH is paying correctly for the new duty station.",
    ],
  },
];

const binderContents = [
  "PCS orders and any amendments, with several copies",
  "Family IDs, CACs, birth certificates, passports, and marriage license",
  "Medical and dental records for every family member",
  "School records, transcripts, and immunization histories",
  "Vehicle titles, registration, and insurance cards",
  "Financial documents: recent LES, bank details, and any pre-approval letter",
  "Pet records, vaccinations, and health certificates",
  "Household goods inventory and your high-value item list",
];

export default function PcsChecklistPage() {
  return (
    <div style={{ backgroundColor: "#0a0f1e" }}>
      <JsonLd
        data={[
          articleSchema,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Military PCS Guide", path: "/military-pcs-guide" },
            { name: "PCS Checklist", path: "/pcs-checklist" },
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
            <ClipboardList size={14} color="#f5c518" />
            <span style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              PCS CHECKLIST
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 1.25rem", lineHeight: 1.15 }}>
            The Ultimate Military PCS Checklist
          </h1>

          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "720px", margin: "0 0 1rem" }}>
            This military PCS checklist breaks the move into five phases so
            nothing sneaks up on you. Work it top to bottom, from the day you
            learn your next location to the day you unpack the last box.
          </p>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "720px", margin: 0 }}>
            Want it on paper? Grab the{" "}
            <a href="#free-binder" style={anchor}>free printable PCS binder</a>{" "}
            below and check items off as you go. New to the whole process? Start
            with the{" "}
            <Link href="/military-pcs-guide" style={anchor}>complete military PCS move guide</Link>
            .
          </p>
        </div>
      </section>

      {/* Binder capture (primary on-page action) */}
      <section style={{ padding: "3rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={{ ...container, maxWidth: "720px" }}>
          <BinderSignup />
        </div>
      </section>

      {/* Checklist by phase */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem" }}>The PCS checklist, phase by phase</h2>
          <p style={{ ...bodyText, marginBottom: "2.5rem", maxWidth: "720px" }}>
            Check items off as you finish them. Dates shift from move to move, so
            treat the phases as a sequence, not a hard calendar.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {phases.map((phase, i) => (
              <div key={phase.when} style={card}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
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
                    <div style={{ color: "#f5c518", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                      {phase.when.toUpperCase()}
                    </div>
                    <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.05rem", margin: "0.15rem 0 0" }}>
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {phase.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <input
                        type="checkbox"
                        aria-label="Mark task complete"
                        style={{ width: "16px", height: "16px", marginTop: "3px", accentColor: "#f5c518", flexShrink: 0, cursor: "pointer" }}
                      />
                      <span style={{ color: "#d1d5db", fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is a PCS binder */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={container}>
          <h2 style={sectionTitle}>Build your military PCS binder</h2>
          <p style={bodyText}>
            A PCS binder is one three-ring binder that holds every document your
            move depends on. Movers lose paperwork when it is scattered across
            boxes and email. A binder keeps it in your hands, so orders, records,
            and IDs never end up on the truck.
          </p>
          <p style={bodyText}>
            Here is what to put in your military PCS binder:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "0.75rem", margin: "0 0 1.75rem" }}>
            {binderContents.map((doc) => (
              <div key={doc} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", backgroundColor: "#111827", border: "1px solid #1f2937", borderRadius: "8px", padding: "0.875rem 1rem" }}>
                <FileText size={15} color="#f5c518" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "#d1d5db", fontSize: "0.875rem", lineHeight: 1.5 }}>{doc}</span>
              </div>
            ))}
          </div>

          <p style={{ ...bodyText, margin: 0 }}>
            The{" "}
            <a href="#free-binder" style={anchor}>free printable PCS binder</a>{" "}
            gives you dividers and trackers for all of this, so you can print it
            once and reuse it on the next move.
          </p>
        </div>
      </section>

      {/* Where this fits */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={sectionTitle}>Keep going with the deep-dive guides</h2>
          <p style={{ ...bodyText, marginBottom: "2rem" }}>
            The checklist points to the exact steps. These guides go deeper on the
            parts that trip people up.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {[
              { icon: FolderOpen, title: "Complete PCS Guide", desc: "The full move from orders to move-in.", href: "/military-pcs-guide" },
              { icon: FileText, title: "Weight Allowance", desc: "Your household goods limit by rank.", href: "/pcs-weight-allowance" },
              { icon: Folder, title: "Using Military OneSource", desc: "The official PCS checklist and tools.", href: "/military-onesource-pcs" },
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
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={{ ...container, maxWidth: "760px" }}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem", marginBottom: "1.75rem" }}>
            Military PCS checklist FAQs
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
        heading="Stuck on a piece of your move?"
        body="If a step on the checklist raises a question, or you want to talk through housing at the next duty station, get in touch and someone will follow up."
      />
    </div>
  );
}
