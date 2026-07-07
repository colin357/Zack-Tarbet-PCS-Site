import type { Metadata } from "next";
import Link from "next/link";
import { Car, Ship, MapPin, Clock, CheckCircle, ArrowRight, Calculator, Package } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import GetInTouch from "@/components/cta/GetInTouch";
import { faqPageSchema, breadcrumbSchema, absoluteUrl, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Military PCS Vehicle Shipping: CONUS & OCONUS",
  description:
    "How military PCS vehicle shipping works for CONUS and OCONUS moves: the PCSmyPOV process, timelines, one vs. multiple vehicles, and how to prep your car.",
  alternates: { canonical: "/pcs-vehicle-shipping" },
  openGraph: {
    title: "Military PCS Vehicle Shipping: CONUS & OCONUS | Heroes Home Network",
    description:
      "The PCSmyPOV process, timelines, one vs. multiple vehicles, and OCONUS differences for shipping your POV during a military PCS.",
    url: "/pcs-vehicle-shipping",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Military PCS Vehicle Shipping: CONUS & OCONUS",
  description:
    "A guide to shipping your privately owned vehicle during a military PCS, covering CONUS versus OCONUS rules, the PCSmyPOV process, timelines, and vehicle prep.",
  url: absoluteUrl("/pcs-vehicle-shipping"),
  image: absoluteUrl(SITE.ogImage),
  author: { "@id": absoluteUrl("/#organization") },
  publisher: { "@id": absoluteUrl("/#organization") },
  about: ["Military PCS vehicle shipping", "POV shipping", "PCSmyPOV", "OCONUS move"],
  isPartOf: { "@id": absoluteUrl("/#website") },
};

const faqs = [
  {
    q: "Does the military ship your car during a CONUS PCS?",
    a: "Usually no. For a move within the continental United States, the standard entitlement is to drive your vehicle and receive a mileage allowance plus per diem, not to ship it at government expense. Government-paid shipping within CONUS is authorized only in limited cases, such as certain medical situations or specific orders. Check your orders and your transportation office.",
  },
  {
    q: "How many vehicles can I ship for an OCONUS move?",
    a: "Generally one privately owned vehicle per family ships at government expense on an OCONUS move. A second vehicle is rare and tied to special circumstances. In many cases you can put a second vehicle into storage at government expense while you are overseas instead.",
  },
  {
    q: "Who ships military POVs and where do I start?",
    a: "The DoD contracts POV shipping through International Auto Logistics, which runs the PCSmyPOV program and a network of Vehicle Processing Centers. You start with your orders and Personal Property Office counseling, then schedule a drop-off at a Vehicle Processing Center through PCSmyPOV.com.",
  },
  {
    q: "How long does OCONUS vehicle shipping take?",
    a: "It varies by destination and season, and it can run several weeks or longer. Plan for a gap where you will not have your vehicle at either end, and use the estimated availability date in PCSmyPOV rather than assuming a fixed timeline.",
  },
  {
    q: "Can I store a second vehicle while stationed overseas?",
    a: "Often yes. When only one vehicle ships, the military may authorize non-temporary storage of a second vehicle stateside while you are on an OCONUS tour. Confirm the specifics on your orders and with your transportation office.",
  },
  {
    q: "How do I prep my car for POV shipment?",
    a: "Clean it inside and out for the inspection, drop the fuel to about a quarter tank, remove all personal belongings, and leave only the spare tire and jack. Bring the title, registration, a valid ID, your orders, and any lien authorization letter to the Vehicle Processing Center.",
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

const processSteps = [
  {
    title: "Confirm the entitlement on your orders",
    body: "Your orders have to authorize POV shipment. For OCONUS moves that is standard for one vehicle. For CONUS it is the exception, so read the orders first.",
  },
  {
    title: "Get Personal Property Office counseling",
    body: "Your transportation or Personal Property Office confirms your entitlement, explains storage options, and points you to the right Vehicle Processing Center.",
  },
  {
    title: "Schedule a drop-off at PCSmyPOV.com",
    body: "Book your Vehicle Processing Center appointment online. Submitting documents ahead of time can cut your processing time at the center.",
  },
  {
    title: "Drop off and inspect the vehicle",
    body: "At the Vehicle Processing Center you and an agent inspect the car, note existing damage, and hand over the keys. Bring your title, registration, ID, and orders.",
  },
  {
    title: "Track the shipment",
    body: "Follow your vehicle online and watch the estimated availability date. Distances and season affect how long it takes, so check the estimate rather than guess.",
  },
  {
    title: "Pick it up at the destination center",
    body: "Collect the vehicle at the receiving Vehicle Processing Center, inspect it again, and note any new damage before you sign for it.",
  },
];

const prepList = [
  "Clean the interior and exterior so the inspection catches real damage",
  "Reduce fuel to about a quarter tank",
  "Remove all personal belongings from the vehicle",
  "Leave only the spare tire and jack",
  "Note and photograph existing dents and scratches",
  "Bring title, registration, ID, orders, and any lien authorization letter",
];

export default function PcsVehicleShippingPage() {
  return (
    <div style={{ backgroundColor: "#0a0f1e" }}>
      <JsonLd
        data={[
          articleSchema,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Military PCS Guide", path: "/military-pcs-guide" },
            { name: "Vehicle Shipping", path: "/pcs-vehicle-shipping" },
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
            <Car size={14} color="#f5c518" />
            <span style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              VEHICLE SHIPPING
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 1.25rem", lineHeight: 1.15 }}>
            Military PCS Vehicle Shipping: CONUS and OCONUS
          </h1>

          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "720px", margin: "0 0 1rem" }}>
            Military PCS vehicle shipping works one way for a CONUS move and a
            very different way for an OCONUS one. For most moves inside the lower
            48 you drive your car and get paid mileage. For an overseas move the
            government ships one vehicle for you.
          </p>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "720px", margin: 0 }}>
            Here is how each one works, what the process looks like, and how to
            prep the car. For the full move, start with the{" "}
            <Link href="/military-pcs-guide" style={anchor}>complete military PCS move guide</Link>
            .
          </p>
        </div>
      </section>

      {/* CONUS vs OCONUS */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem", marginBottom: "1.5rem" }}>CONUS vs. OCONUS car shipping</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            <div style={card}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.875rem" }}>
                <MapPin size={20} color="#f5c518" />
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.15rem", margin: 0 }}>CONUS moves</h3>
              </div>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 0.875rem" }}>
                For a move within the continental United States, the government
                usually does not ship your car. You drive it and collect a
                mileage allowance plus per diem for the trip.
              </p>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                Government-paid shipping inside CONUS shows up only in limited
                cases, such as certain medical situations or specific orders. If
                you think you qualify, ask your transportation office before you
                assume it is covered.
              </p>
            </div>
            <div style={card}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.875rem" }}>
                <Ship size={20} color="#f5c518" />
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.15rem", margin: 0 }}>OCONUS moves</h3>
              </div>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 0.875rem" }}>
                For an overseas move, including Alaska, Hawaii, and U.S.
                territories, the government ships one privately owned vehicle at
                its expense through the POV program.
              </p>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                You drop the vehicle at a Vehicle Processing Center on this end
                and pick it up at one near your new base. Plan for weeks without
                the car, so line up a rental or a plan to get around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={container}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem" }}>How the PCSmyPOV shipping process works</h2>
          <p style={{ ...bodyText, marginBottom: "2rem", maxWidth: "720px" }}>
            The DoD contracts POV shipping through International Auto Logistics,
            which runs the{" "}
            <a href="https://www.pcsmypov.com" target="_blank" rel="noopener noreferrer" style={anchor}>PCSmyPOV</a>{" "}
            program and the Vehicle Processing Centers you use to drop off and
            collect your car. Here is the sequence.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {processSteps.map((step, i) => (
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
        </div>
      </section>

      {/* One vs multiple vehicles */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={sectionTitle}>One vehicle vs. multiple vehicles</h2>
          <p style={bodyText}>
            The overseas entitlement covers one vehicle. If your family has two
            cars, you decide which one ships. The military will often authorize
            non-temporary storage for the second vehicle stateside while you are
            on the tour, which beats selling a car you will want back.
          </p>
          <p style={bodyText}>
            A second shipped vehicle is rare and tied to special circumstances,
            such as an Exceptional Family Member Program need. Do not count on it
            unless your orders and transportation office confirm it. There is also
            a size limit on the vehicle that ships, so an oversized truck or van
            can run into an excess cost.
          </p>
        </div>
      </section>

      {/* Timeline + prep */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            <div style={card}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.875rem" }}>
                <Clock size={20} color="#f5c518" />
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.15rem", margin: 0 }}>How long it takes</h3>
              </div>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 0.875rem" }}>
                Shipping time depends on the destination and the season, and it
                can run several weeks or longer for distant locations. Summer PCS
                volume slows everything down.
              </p>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                Use the estimated availability date in PCSmyPOV instead of
                assuming a fixed number, and build in a rental or a ride plan for
                the gap on both ends.
              </p>
            </div>
            <div style={card}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.875rem" }}>
                <CheckCircle size={20} color="#f5c518" />
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.15rem", margin: 0 }}>Prep before drop-off</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {prepList.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#d1d5db", fontSize: "0.85rem", lineHeight: 1.6 }}>
                    <CheckCircle size={14} color="#4CAF50" style={{ flexShrink: 0, marginTop: "3px" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost + related */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={sectionTitle}>Driving instead? Count the mileage</h2>
          <p style={bodyText}>
            If you drive to a CONUS duty station, the trip pays a mileage
            allowance and per diem for you and your family. That adds up on a
            cross-country move, so fold it into your budget. Estimate it with the{" "}
            <Link href="/pcs-cost-calculator" style={anchor}>PCS cost calculator</Link>{" "}
            and see how the payment timing works in the{" "}
            <Link href="/pcs-advance-pay-allowances" style={anchor}>advance pay and allowances guide</Link>
            .
          </p>
          <p style={bodyText}>
            Shipping a car overseas is one piece of a bigger move. Keep the rest
            on track with the{" "}
            <Link href="/pcs-checklist" style={anchor}>PCS checklist</Link>, confirm
            what the movers will haul in the{" "}
            <Link href="/pcs-weight-allowance" style={anchor}>weight allowance guide</Link>,
            and, if animals are coming too, read{" "}
            <Link href="/pcs-with-pets" style={anchor}>PCSing with pets</Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937", backgroundColor: "#060c18" }}>
        <div style={{ ...container, maxWidth: "760px" }}>
          <h2 style={{ ...sectionTitle, fontSize: "1.75rem", marginBottom: "1.75rem" }}>
            Military PCS vehicle shipping FAQs
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

      {/* Related links */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: "1px solid #1f2937" }}>
        <div style={container}>
          <h2 style={sectionTitle}>Keep planning your move</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
            {[
              { icon: Calculator, title: "PCS Cost Calculator", desc: "Estimate mileage, per diem, and lodging.", href: "/pcs-cost-calculator" },
              { icon: Package, title: "Weight Allowance", desc: "What the movers will haul, by rank.", href: "/pcs-weight-allowance" },
              { icon: Car, title: "Complete PCS Guide", desc: "The full move from orders to move-in.", href: "/military-pcs-guide" },
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

      <GetInTouch
        heading="Sorting out a move to a new duty station?"
        body="If you want to talk through the costs of your PCS or your housing options once you arrive, get in touch and someone will follow up."
      />
    </div>
  );
}
