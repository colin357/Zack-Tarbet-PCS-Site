import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ClipboardList, FileText, Truck, DollarSign, Home, PawPrint,
  Calculator, ShieldCheck, MapPin, CheckCircle, ArrowRight, LifeBuoy,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import GetInTouch from "@/components/cta/GetInTouch";
import { faqPageSchema, breadcrumbSchema, absoluteUrl, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "The Complete Military PCS Move Guide",
  description:
    "Plan your military PCS move step by step, from orders to move-in. Timelines, entitlements, weight allowances, vehicle shipping, and housing help in one guide.",
  alternates: { canonical: "/military-pcs-guide" },
  openGraph: {
    title: "The Complete Military PCS Move Guide | Heroes Home Network",
    description:
      "A step-by-step military PCS move guide: the full timeline from orders to move-in, entitlements, moving your household goods, and choosing housing at your next base.",
    url: "/military-pcs-guide",
    type: "article",
  },
};

/**
 * Article schema for the pillar. Mirrors the inline pattern used by the
 * Fort Carson guide: attributed to the site Organization, tied to the WebSite.
 */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Complete Military PCS Move Guide",
  description:
    "A step-by-step military PCS move guide covering the full timeline from orders to move-in, entitlements and allowances, moving your household goods, and choosing housing at your next duty station.",
  url: absoluteUrl("/military-pcs-guide"),
  image: absoluteUrl(SITE.ogImage),
  author: { "@id": absoluteUrl("/#organization") },
  publisher: { "@id": absoluteUrl("/#organization") },
  about: ["Military PCS move", "PCS timeline", "Military relocation", "BAH", "VA home loans"],
  isPartOf: { "@id": absoluteUrl("/#website") },
};

const faqs = [
  {
    q: "What does PCS mean in the military?",
    a: "PCS stands for Permanent Change of Station. It is an official move from one duty station to another under orders, as opposed to a temporary duty (TDY) trip. A PCS move covers travel, moving your household goods, and settling your family into a new location.",
  },
  {
    q: "How long does a military PCS move take?",
    a: "Most service members start planning two to three months before their report date, though you can begin as soon as you have a reporting month. The physical move usually runs a few weeks from pack-out to delivery for a CONUS move, and longer for OCONUS moves that ship goods by sea.",
  },
  {
    q: "When should I start planning my PCS?",
    a: "Start as soon as you know your next location, even before you have hard-copy orders. Early planning gives you time to schedule your move in the Defense Personal Property System, sort out housing, and line up school enrollment. The Fort Carson PCS guide and the PCS checklist walk through what to do at each stage.",
  },
  {
    q: "Does the military pay for my PCS move?",
    a: "Yes. The government pays to move your authorized household goods up to your weight allowance and reimburses travel through allowances such as per diem, the Dislocation Allowance, and mileage. Amounts depend on rank, dependents, and distance. Confirm current figures in the Joint Travel Regulations and on Military OneSource.",
  },
  {
    q: "Should I buy or rent at my next duty station?",
    a: "It depends on how long your tour is, the local housing market, and whether your BAH covers a mortgage payment. Buying tends to make more sense for tours of three years or longer in a stable market. Read the buy versus rent framing in the PCS resources and VA home loan pages before you decide.",
  },
  {
    q: "What is BAH and how does it affect my move?",
    a: "Basic Allowance for Housing is a monthly allowance tied to your permanent duty station, pay grade, and dependency status. It is set by the Department of Defense and often covers most or all of a rent or mortgage payment. You draw BAH for your assigned duty station, not for wherever you choose to live.",
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

// The PCS timeline is the spine of the page. Each phase points at the
// cluster page that goes deep on that stage.
const timeline = [
  {
    when: "Before you get orders",
    title: "Research your likely locations",
    points: [
      "Look at the bases you might land at and what family life is like there.",
      "Start a rough budget for housing so you know what your BAH will cover.",
      "Check your VA loan eligibility early if buying is on the table.",
    ],
  },
  {
    when: "Orders in hand",
    title: "Lock your timeline and entitlements",
    points: [
      "Read your orders for your report date, entitlements, and any restrictions.",
      "Log in to the Defense Personal Property System (DPS) at move.mil to request your move.",
      "Decide between a government-arranged move (HHG) and a Personally Procured Move (PPM).",
    ],
  },
  {
    when: "60 to 90 days out",
    title: "Set your move in motion",
    points: [
      "Book your pack-out and delivery dates before the summer PCS season fills up.",
      "Confirm your weight allowance so you do not go over and pay out of pocket.",
      "Arrange vehicle shipping and, if you have animals, start your pet paperwork.",
    ],
  },
  {
    when: "30 to 60 days out",
    title: "Sort the money and the housing",
    points: [
      "Estimate your total move cost and request advance pay or allowances if you need them.",
      "Choose buy or rent at the new base and, if buying, line up an agent and pre-approval.",
      "Update auto and homeowners or renters insurance for the new state.",
    ],
  },
  {
    when: "Moving week",
    title: "Pack out and travel",
    points: [
      "Keep orders, medical records, and valuables with you, not on the truck.",
      "Photograph high-value items and note them on the inventory before it loads.",
      "Track your per diem and lodging receipts for travel reimbursement.",
    ],
  },
  {
    when: "After you arrive",
    title: "In-process and settle in",
    points: [
      "Report in, then handle housing, DEERS, and school enrollment.",
      "Receive your household goods and file any loss or damage claims quickly.",
      "Get to know the area and confirm your BAH is paying correctly.",
    ],
  },
];

// Deep-dive cluster links, grouped the way a mover actually thinks about them.
const clusters = [
  {
    group: "Moving your stuff",
    items: [
      { icon: ClipboardList, title: "PCS Checklist", desc: "A step-by-step checklist by phase, plus a free printable PCS binder.", href: "/pcs-checklist" },
      { icon: FileText, title: "PCS Weight Allowance", desc: "Your household goods weight limit by rank and dependents.", href: "/pcs-weight-allowance" },
      { icon: Truck, title: "Vehicle Shipping", desc: "How to ship a car CONUS and OCONUS through the POV process.", href: "/pcs-vehicle-shipping" },
      { icon: PawPrint, title: "PCSing With Pets", desc: "Flights, quarantine, health certificates, and OCONUS pet rules.", href: "/pcs-with-pets" },
    ],
  },
  {
    group: "Money and entitlements",
    items: [
      { icon: Calculator, title: "PCS Cost Calculator", desc: "Estimate mileage, per diem, lodging, and incidental move costs.", href: "/pcs-cost-calculator" },
      { icon: DollarSign, title: "Advance Pay & Allowances", desc: "Advance pay, DLA, per diem, and TLE explained in plain English.", href: "/pcs-advance-pay-allowances" },
      { icon: LifeBuoy, title: "Using Military OneSource", desc: "What OneSource offers a mover and how to use it during a PCS.", href: "/military-onesource-pcs" },
    ],
  },
  {
    group: "Housing at your new base",
    items: [
      { icon: MapPin, title: "Real Estate Agents", desc: "How to pick an agent who understands BAH, VA loans, and short timelines.", href: "/pcs-real-estate-agents" },
      { icon: ShieldCheck, title: "Homeowners Insurance", desc: "What changes when you buy at a new duty station.", href: "/pcs-homeowners-insurance" },
      { icon: ShieldCheck, title: "Auto Insurance", desc: "Updating coverage across states and during OCONUS moves.", href: "/pcs-auto-insurance" },
      { icon: Home, title: "VA Home Loans", desc: "Buy near your next base with $0 down using your VA benefit.", href: "/va-home-loans" },
    ],
  },
];

export default function MilitaryPcsGuidePage() {
  return (
    <div style={{ backgroundColor: "#0a0f1e" }}>
      <JsonLd
        data={[
          articleSchema,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Military PCS Guide", path: "/military-pcs-guide" },
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
              MILITARY PCS GUIDE
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 1.25rem", lineHeight: 1.15 }}>
            The Complete Military PCS Move Guide
          </h1>

          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "720px", margin: "0 0 1rem" }}>
            A military PCS move has a lot of moving parts, and the timeline is
            what keeps them from piling up on you. This guide walks the whole
            PCS move from the day you learn your next location to the day your
            household goods hit the floor at the new base.
          </p>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "720px", margin: 0 }}>
            Use it as your map. Each stage links to a deeper guide on the exact
            step you are working through, so you can plan the move once and stop
            second-guessing whether you missed something.
          </p>
        </div>
      </section>

      {/* What is a PCS move */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={sectionTitle}>What is a PCS move?</h2>
          <p style={bodyText}>
            A PCS, or Permanent Change of Station, is an official move from one
            duty station to another under orders. It is different from a
            temporary duty trip because you are relocating your life, and often
            your family, for the length of the new assignment.
          </p>
          <p style={bodyText}>
            The military move covers three things: getting you and your family
            to the new location, moving your household goods, and paying the
            allowances that offset the cost. How much you are entitled to depends
            on your rank, your dependents, and the distance. Current figures live
            in the{" "}
            <a href="https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/" target="_blank" rel="noopener noreferrer" style={anchor}>
              Joint Travel Regulations
            </a>{" "}
            and on{" "}
            <a href="https://www.militaryonesource.mil/moving-housing/moving/" target="_blank" rel="noopener noreferrer" style={anchor}>
              Military OneSource
            </a>
            .
          </p>
          <p style={bodyText}>
            The rest of this page follows the PCS move in the order you will
            actually do it. If you would rather start with a printable list, jump
            to the{" "}
            <Link href="/pcs-checklist" style={anchor}>ultimate PCS checklist</Link>{" "}
            and come back.
          </p>
        </div>
      </section>

      {/* PCS timeline */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={container}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem" }}>The PCS move timeline, orders to move-in</h2>
          <p style={{ ...bodyText, marginBottom: "2.5rem", maxWidth: "720px" }}>
            Timing is the whole game. Book your move early, especially for a
            summer PCS, because pack-out dates fill fast. Here is the sequence
            most service members follow.
          </p>

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {timeline.map((phase, i) => (
              <div key={phase.when} style={card}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
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
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {phase.points.map((point) => (
                    <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#d1d5db", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      <CheckCircle size={15} color="#4CAF50" style={{ flexShrink: 0, marginTop: "3px" }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving your household goods */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={sectionTitle}>Moving your household goods</h2>
          <p style={bodyText}>
            The government moves your household goods up to a weight limit tied to
            your rank and whether you have dependents. Go over that limit and you
            pay for the excess, so it pays to know your number before pack-out.
            The{" "}
            <Link href="/pcs-weight-allowance" style={anchor}>PCS weight allowance guide</Link>{" "}
            breaks down the table by rank so you can plan what to ship, store, or
            sell.
          </p>
          <p style={bodyText}>
            Shipping a vehicle runs on its own timeline, and it changes a lot for
            an overseas move. Start early and read the{" "}
            <Link href="/pcs-vehicle-shipping" style={anchor}>vehicle shipping guide</Link>{" "}
            for how the POV process works and how long it takes. If animals are
            coming with you, the{" "}
            <Link href="/pcs-with-pets" style={anchor}>PCSing with pets guide</Link>{" "}
            covers flights, quarantine, and health certificates, which need weeks
            of lead time for OCONUS.
          </p>
          <p style={bodyText}>
            Want the whole thing on one page you can check off? The{" "}
            <Link href="/pcs-checklist" style={anchor}>ultimate PCS checklist</Link>{" "}
            organizes every task by phase and includes a printable binder.
          </p>
        </div>
      </section>

      {/* Money and entitlements */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={container}>
          <h2 style={sectionTitle}>PCS money: entitlements and allowances</h2>
          <p style={bodyText}>
            A PCS costs money up front even though the military reimburses much of
            it. You front lodging, meals, fuel, and deposits, then recover them
            through allowances. Knowing what you are owed keeps the move from
            straining your budget.
          </p>
          <p style={bodyText}>
            The{" "}
            <Link href="/pcs-advance-pay-allowances" style={anchor}>advance pay and allowances guide</Link>{" "}
            explains advance pay, the Dislocation Allowance, per diem, and
            temporary lodging in plain terms. To put a number on your specific
            move, run the{" "}
            <Link href="/pcs-cost-calculator" style={anchor}>PCS cost calculator</Link>{" "}
            and estimate mileage, per diem, and lodging before you file anything.
          </p>
          <p style={bodyText}>
            Pay rules and rates change, so verify the current figures against{" "}
            <a href="https://www.dfas.mil/" target="_blank" rel="noopener noreferrer" style={anchor}>DFAS</a>{" "}
            and the Joint Travel Regulations before you count on a number.
          </p>
        </div>
      </section>

      {/* Housing at your new base */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={sectionTitle}>Housing at your new base: buy or rent</h2>
          <p style={bodyText}>
            One of the biggest PCS decisions is whether to rent or buy near the
            new base. Buying tends to make sense for tours of three years or
            longer in a stable market, especially when your BAH covers most of a
            mortgage payment. Renting keeps you flexible for a short tour or an
            uncertain market.
          </p>
          <p style={bodyText}>
            If you lean toward buying, a good agent saves you weeks. The{" "}
            <Link href="/pcs-real-estate-agents" style={anchor}>guide to military-friendly real estate agents</Link>{" "}
            covers how to find someone who understands BAH, VA loans, and a tight
            report date. On the financing side, the{" "}
            <Link href="/va-home-loans" style={anchor}>VA home loan overview</Link>{" "}
            explains how eligible buyers purchase with no down payment.
          </p>
          <p style={bodyText}>
            Insurance changes when you cross state lines. Review your{" "}
            <Link href="/pcs-homeowners-insurance" style={anchor}>homeowners insurance</Link>{" "}
            and{" "}
            <Link href="/pcs-auto-insurance" style={anchor}>auto insurance</Link>{" "}
            before the move so you are covered on day one. To scout a specific
            area, browse the{" "}
            <Link href="/installations" style={anchor}>base profiles</Link>{" "}
            or a local housing guide like the{" "}
            <Link href="/pcs/fort-carson" style={anchor}>PCS to Fort Carson guide</Link>
            .
          </p>
        </div>
      </section>

      {/* Cluster deep-dive grid */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={container}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem" }}>Go deeper on each step</h2>
          <p style={{ ...bodyText, marginBottom: "2.5rem", maxWidth: "720px" }}>
            Every guide below zooms in on one part of the move. Start with the
            stage you are on now.
          </p>

          {clusters.map((group) => (
            <div key={group.group} style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ color: "#9ca3af", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 1rem" }}>
                {group.group}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{ ...card, textDecoration: "none", display: "block", padding: "1.5rem" }}
                  >
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
          ))}
        </div>
      </section>

      {/* Military OneSource callout */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <div style={{ ...card, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem", alignItems: "center", padding: "2rem" }}>
            <div>
              <h2 style={{ ...sectionTitle, fontSize: "1.375rem" }}>Use Military OneSource as you go</h2>
              <p style={{ ...bodyText, margin: 0 }}>
                Military OneSource is the official hub for move planning, the DPS
                move request, and free relocation support. It covers the logistics
                well. For the housing and buying decisions it does not, this site
                fills the gap. See{" "}
                <Link href="/military-onesource-pcs" style={anchor}>how to use Military OneSource for your PCS</Link>
                .
              </p>
            </div>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", borderRadius: "10px", overflow: "hidden", border: "1px solid #1f2937" }}>
              <Image
                src={SITE.ogImage}
                alt="Military family planning a PCS move with a checklist and laptop"
                fill
                style={{ objectFit: "contain", backgroundColor: "#0d1830", padding: "1rem" }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={{ ...container, maxWidth: "760px" }}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem", marginBottom: "1.75rem" }}>
            Military PCS move FAQs
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
        heading="Planning a PCS and weighing your housing options?"
        body="If you want to talk through buying or renting at your next duty station, or you just have a question about the move, get in touch and someone will follow up."
      />
    </div>
  );
}
