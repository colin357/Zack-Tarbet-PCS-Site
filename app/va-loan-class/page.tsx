import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, CheckCircle, Clock, Users, Video } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, absoluteUrl } from "@/data/site";
import ClassSignupForm from "@/components/vaclass/ClassSignupForm";
import {
  CONFIG,
  getUpcomingClasses,
  formatClassDate,
  formatClassDateShort,
  googleCalendarUrl,
  icsDataUri,
} from "@/data/vaClass";

const T = CONFIG.THEME;

// Recompute the schedule at least hourly so "the next class" never goes stale,
// while still serving a cached, fast page between regenerations.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Free VA Loan Class for Realtors",
  description:
    "A free monthly online class for real estate agents, team leads, and broker owners who want to win more military and veteran buyers by actually understanding VA loans. Hosted by Zack Tarbet.",
  alternates: { canonical: "/va-loan-class" },
  openGraph: {
    title: "Free VA Loan Class for Realtors | Heroes Home Network",
    description:
      "Stop losing military buyers to VA loan myths. A free monthly class for agents who want to understand VA loans and win more veteran clients.",
    url: "/va-loan-class",
    type: "website",
  },
};

const LEARN = [
  {
    title: "Win more military and veteran buyers",
    desc: "Know what these buyers actually need from an agent, so you become the one they refer to their whole unit.",
  },
  {
    title: "Stop VA offers from getting wrongly rejected",
    desc: "The real reasons listing agents pass on VA offers — and how to write one that competes and closes.",
  },
  {
    title: "Understand what VA loans actually allow",
    desc: "Appraisals, repairs, condos, closing costs, funding fees. Separate the real rules from the myths you've been told.",
  },
  {
    title: "Answer buyer questions with confidence",
    desc: "Walk out able to explain $0 down, no PMI, and eligibility in plain language your clients trust.",
  },
];

export default function VALoanClassPage() {
  // Computed on the server at (re)generation time; passed to the client form as
  // plain strings to avoid any date mismatch between server and browser.
  const upcoming = getUpcomingClasses(new Date(), CONFIG.UPCOMING_COUNT);
  const next = upcoming[0];
  const timeLabel = `${CONFIG.CLASS_TIME} ${CONFIG.TIMEZONE_LABEL}`;
  const nextDateLabel = formatClassDate(next);

  const sectionBorder = `1px solid ${T.border}`;

  return (
    <div style={{ backgroundColor: T.bg }}>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "EducationEvent",
            name: "VA Loan Class for Realtors",
            description:
              "A free monthly online class for real estate agents on how to win more military and veteran buyers using VA loans.",
            eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            startDate: next.toISOString().slice(0, 10),
            url: absoluteUrl("/va-loan-class"),
            isAccessibleForFree: true,
            location: {
              "@type": "VirtualLocation",
              url: CONFIG.ZOOM_LINK,
            },
            organizer: { "@id": absoluteUrl("/#organization") },
            performer: {
              "@type": "Person",
              name: CONFIG.HOST.name,
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: absoluteUrl("/va-loan-class"),
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "VA Loan Class for Realtors", path: "/va-loan-class" },
          ]),
        ]}
      />

      {/* ---------------------------------------------------------------- *
       * Hero                                                              *
       * ---------------------------------------------------------------- */}
      <section
        style={{
          background: `linear-gradient(135deg, ${T.bgDeep} 0%, ${T.bg} 100%)`,
          padding: "4rem 1.5rem 3.5rem",
          borderBottom: sectionBorder,
        }}
      >
        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
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
            <Video size={14} color={T.accent} />
            <span style={{ color: T.accent, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              FREE MONTHLY ONLINE CLASS
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              color: T.text,
              margin: "0 0 1.25rem",
              lineHeight: 1.15,
            }}
          >
            Stop Losing Military Buyers to <span style={{ color: T.accent }}>VA Loan Myths</span>
          </h1>
          <p
            style={{
              color: T.textMuted,
              fontSize: "1.15rem",
              lineHeight: 1.7,
              maxWidth: "620px",
              margin: "0 auto 2rem",
            }}
          >
            A free monthly class for agents who want to actually understand VA loans, and win more
            veteran clients because of it.
          </p>

          {/* Next class callout */}
          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem 1.25rem",
              backgroundColor: T.surface,
              border: sectionBorder,
              borderRadius: "12px",
              padding: "0.875rem 1.5rem",
              marginBottom: "2rem",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: T.text, fontWeight: 700, fontSize: "0.95rem" }}>
              <CalendarDays size={16} color={T.accent} />
              Next class: {nextDateLabel}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: T.textMuted, fontSize: "0.95rem" }}>
              <Clock size={16} color={T.accent} />
              {timeLabel}
            </span>
          </div>

          <div>
            <a
              href="#signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: T.accent,
                color: T.accentInk,
                padding: "1rem 2.5rem",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Save my spot
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * What you'll learn                                                 *
       * ---------------------------------------------------------------- */}
      <section style={{ padding: "4rem 1.5rem", borderBottom: sectionBorder }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <h2 style={{ color: T.text, fontSize: "1.75rem", fontWeight: 800, margin: "0 0 0.5rem", textAlign: "center" }}>
            What you&apos;ll learn
          </h2>
          <p style={{ color: T.textDim, textAlign: "center", margin: "0 0 2.5rem" }}>
            One hour, no fluff. Here&apos;s what you walk away with.
          </p>
          <div
            className="learn-grid"
            style={{
              display: "grid",
              gap: "1.25rem",
            }}
          >
            {LEARN.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: T.surface,
                  border: sectionBorder,
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <CheckCircle size={22} color={T.accent} style={{ marginBottom: "0.875rem" }} />
                <h3 style={{ color: T.text, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ color: T.textDim, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Who this is for                                                   *
       * ---------------------------------------------------------------- */}
      <section style={{ padding: "4rem 1.5rem", borderBottom: sectionBorder, backgroundColor: T.bgDeep }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <Users size={28} color={T.accent} style={{ marginBottom: "1rem" }} />
          <h2 style={{ color: T.text, fontSize: "1.75rem", fontWeight: 800, margin: "0 0 1rem" }}>
            Who this is for
          </h2>
          <p style={{ color: T.textMuted, fontSize: "1.05rem", lineHeight: 1.75, margin: 0 }}>
            This is built for agents, team leads, and broker owners who already serve the veteran
            community, or want to. If your team works anywhere near a base, or you just keep running
            into VA offers and want to handle them well, bring everyone. It&apos;s worth an hour of a
            sales meeting.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Host bio                                                          *
       * ---------------------------------------------------------------- */}
      <section style={{ padding: "4rem 1.5rem", borderBottom: sectionBorder }}>
        <div
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "2rem",
            alignItems: "center",
          }}
          className="host-grid"
        >
          {/* Headshot (or placeholder) */}
          {CONFIG.HOST.headshot ? (
            <Image
              src={CONFIG.HOST.headshot}
              alt={CONFIG.HOST.name}
              width={140}
              height={140}
              style={{ borderRadius: "16px", objectFit: "cover", border: `1px solid ${T.border}` }}
            />
          ) : (
            <div
              aria-hidden="true"
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "16px",
                backgroundColor: T.surface,
                border: `1px solid ${T.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: T.accent,
                fontSize: "2.25rem",
                fontWeight: 800,
                flexShrink: 0,
              }}
            >
              {CONFIG.HOST.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
          )}

          <div>
            <p style={{ color: T.accent, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", margin: "0 0 0.5rem" }}>
              YOUR HOST
            </p>
            <h2 style={{ color: T.text, fontSize: "1.5rem", fontWeight: 800, margin: "0 0 0.25rem" }}>
              {CONFIG.HOST.name}
            </h2>
            <p style={{ color: T.textMuted, fontSize: "0.9rem", fontWeight: 600, margin: "0 0 1rem" }}>
              {CONFIG.HOST.title} · {CONFIG.HOST.brand}
            </p>
            <p style={{ color: T.textMuted, fontSize: "1rem", lineHeight: 1.75, margin: 0 }}>
              {CONFIG.HOST.bio}
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Schedule                                                          *
       * ---------------------------------------------------------------- */}
      <section style={{ padding: "4rem 1.5rem", borderBottom: sectionBorder, backgroundColor: T.bgDeep }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: T.text, fontSize: "1.75rem", fontWeight: 800, margin: "0 0 0.5rem" }}>
            When it runs
          </h2>
          <p style={{ color: T.textDim, margin: "0 0 2.5rem" }}>
            Same class every month, on the 4th Tuesday, at {timeLabel}. Here are the next few:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            {upcoming.map((d, i) => (
              <div
                key={d.toISOString()}
                style={{
                  backgroundColor: T.surface,
                  border: i === 0 ? `1px solid rgba(245, 197, 24, 0.4)` : sectionBorder,
                  borderRadius: "12px",
                  padding: "1.25rem 1.75rem",
                  minWidth: "150px",
                }}
              >
                <div style={{ color: T.accent, fontSize: "1.5rem", fontWeight: 800, lineHeight: 1.1 }}>
                  {formatClassDateShort(d)}
                </div>
                <div style={{ color: T.textMuted, fontSize: "0.85rem", marginTop: "0.25rem" }}>
                  {d.getFullYear()}
                </div>
                <div style={{ color: T.textDim, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                  {i === 0 ? "Next up" : "Tuesday"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Sign-up form                                                      *
       * ---------------------------------------------------------------- */}
      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <ClassSignupForm
            nextDateLabel={nextDateLabel}
            nextTimeLabel={timeLabel}
            googleCalUrl={googleCalendarUrl(next)}
            icsHref={icsDataUri(next)}
          />
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Compliance footer (page-specific, mortgage disclosures)           *
       * ---------------------------------------------------------------- */}
      <section style={{ padding: "2.5rem 1.5rem", borderTop: sectionBorder, backgroundColor: T.bgDeep }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <p style={{ color: T.textDim, fontSize: "0.75rem", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
            {CONFIG.HOST.name}, {CONFIG.HOST.title} · NMLS# {CONFIG.COMPLIANCE.loNmls}. Provided by{" "}
            {CONFIG.COMPLIANCE.companyLegalName}, NMLS# {CONFIG.COMPLIANCE.companyNmls},{" "}
            {CONFIG.COMPLIANCE.companyAddress}.
          </p>
          <p style={{ color: T.textDim, fontSize: "0.75rem", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
            <strong style={{ color: T.textMuted }}>Equal Housing Opportunity.</strong> This class is
            for educational purposes only. It is not a commitment to lend, an offer or extension of
            credit, or financial advice. All loans are subject to credit approval, income
            verification, and property eligibility. Not affiliated with or endorsed by the U.S.
            Department of Veterans Affairs or any government agency.
          </p>
        </div>
      </section>

      {/* Responsive grids: four "What you'll learn" cards on one row on
          desktop, two on tablets, one on phones; host bio stacks on small
          screens. */}
      <style>{`
        .learn-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 900px) {
          .learn-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .learn-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .host-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
        }
      `}</style>
    </div>
  );
}
