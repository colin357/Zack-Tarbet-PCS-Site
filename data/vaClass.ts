/**
 * VA Loan Class — single source of truth for everything a non-developer might
 * want to change on the landing page (`/va-loan-class`).
 *
 * Everything marked CONFIG below is meant to be edited by hand. If you only
 * ever touch this one file, you can update the form endpoint, Zoom link, class
 * time, host bio, compliance numbers, and colors without opening any other
 * file. The date logic further down is computed automatically — you should not
 * need to touch it.
 */

/* ------------------------------------------------------------------ *
 * CONFIG — edit these values.                                         *
 * ------------------------------------------------------------------ */

export const CONFIG = {
  /**
   * Where the sign-up form POSTs its JSON. Paste your HighLevel (GoHighLevel)
   * inbound webhook or form endpoint here. Swapping this one string is all it
   * takes to wire the form to your CRM.
   *
   * While this is left blank (""), the form skips the network call and jumps
   * straight to the confirmation screen so you can preview the full flow.
   */
  FORM_ENDPOINT: "",

  /**
   * The Zoom webinar registration / join link shown after someone signs up.
   * Replace with your real webinar link before launch.
   */
  ZOOM_LINK: "https://zoom.us/webinar/register/REPLACE_WITH_YOUR_ZOOM_LINK",

  /**
   * Class time, shown to visitors. TIMEZONE_LABEL is displayed verbatim, so
   * change it if the class is not on Eastern time (e.g. "PT", "CT", "MT").
   * CLASS_TIME and TIMEZONE_LABEL are display-only.
   */
  CLASS_TIME: "12:00 PM",
  TIMEZONE_LABEL: "ET",

  /**
   * The same start time in 24-hour HH:MM form, used to build the
   * "Add to calendar" links (.ics + Google Calendar). Keep this in sync with
   * CLASS_TIME above. CLASS_TZ is the IANA timezone for the calendar entry.
   */
  CLASS_START_24H: "12:00",
  CLASS_DURATION_MIN: 45,
  CLASS_TZ: "America/New_York",

  /** How many upcoming dates to list in the Schedule section. */
  UPCOMING_COUNT: 3,

  /* Host / presenter -------------------------------------------------- */
  HOST: {
    name: "Zack Tarbet",
    brand: "Heroes Home Network",
    title: "VA Loan Specialist & In-House Lender",
    /**
     * Headshot. Drop a square image in /public (e.g. /zack-tarbet.jpg) and put
     * its path here. Leave "" to show a placeholder avatar with his initials.
     */
    headshot: "",
    bio:
      "Zack Tarbet is a VA loan specialist and in-house lender with Heroes Home Network. He works VA loans all day, every day, so he knows exactly where these deals get stuck and how to keep them moving. He runs this class because too many strong offers from veteran buyers get passed over for reasons that simply aren't true.",
  },

  /* Compliance footer — fill these in. Do not guess these values. ----- */
  COMPLIANCE: {
    /** Loan officer's individual NMLS number (Zack). */
    loNmls: "2040562",
    /** Company NMLS number. */
    companyNmls: "REPLACE_WITH_COMPANY_NMLS",
    /** Company legal entity name. */
    companyLegalName: "REPLACE_WITH_COMPANY_LEGAL_NAME",
    /** Company mailing address (street, city, state, ZIP). */
    companyAddress: "REPLACE_WITH_COMPANY_ADDRESS",
  },

  /* Brand colors — a clean, trustworthy navy + a single gold accent. -- */
  THEME: {
    bg: "#0a0f1e", // page background (deep navy)
    bgDeep: "#060c18", // darker section background
    surface: "#111827", // cards / panels
    inputBg: "#0d1830", // form fields
    border: "#1f2937", // hairline borders
    text: "#f1f5f9", // primary text
    textMuted: "#9ca3af", // secondary text
    textDim: "#6b7280", // tertiary text
    accent: "#f5c518", // gold accent (buttons, highlights)
    accentInk: "#0a0f1e", // text that sits on the accent color
    success: "#4CAF50",
    error: "#ef4444",
  },
} as const;

/* ------------------------------------------------------------------ *
 * Schedule logic — computed, no need to edit.                         *
 *                                                                     *
 * The class runs on the 4th Tuesday of every month. Rather than       *
 * hardcoding dates that go stale, we compute the next few occurrences *
 * from today. Validated against: Jul 28, Aug 25, Sep 22, Oct 27,      *
 * Nov 24, Dec 22 (2026) and Jan 26 (2027).                            *
 * ------------------------------------------------------------------ */

/** The 4th Tuesday of a given month. `monthIndex` is 0-based (0 = January). */
export function fourthTuesday(year: number, monthIndex: number): Date {
  const first = new Date(year, monthIndex, 1);
  // Days to advance from the 1st to reach the first Tuesday (Tuesday = 2).
  const offsetToTuesday = (2 - first.getDay() + 7) % 7;
  // First Tuesday + 3 weeks = 4th Tuesday.
  return new Date(year, monthIndex, 1 + offsetToTuesday + 21);
}

/**
 * The next `count` class dates on or after `from` (today's class still counts
 * on the day it happens). Returns plain Date objects at local midnight.
 */
export function getUpcomingClasses(from: Date, count: number): Date[] {
  const today = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const out: Date[] = [];
  let year = today.getFullYear();
  let month = today.getMonth();

  while (out.length < count) {
    const d = fourthTuesday(year, month);
    if (d.getTime() >= today.getTime()) out.push(d);
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Display + calendar helpers.                                         *
 * ------------------------------------------------------------------ */

/** e.g. "Tuesday, July 28, 2026" */
export function formatClassDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** e.g. "Jul 28" — compact form for the schedule chips. */
export function formatClassDateShort(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

/** A date + "HH:MM" rendered as a calendar timestamp: YYYYMMDDTHHMMSS. */
function calStamp(d: Date, minutesFromMidnight: number): string {
  const dt = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  dt.setMinutes(minutesFromMidnight);
  return (
    `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}` +
    `T${pad(dt.getHours())}${pad(dt.getMinutes())}00`
  );
}

/** Minutes past midnight for CONFIG.CLASS_START_24H ("12:00" -> 720). */
function startMinutes(): number {
  const [h, m] = CONFIG.CLASS_START_24H.split(":").map(Number);
  return h * 60 + m;
}

const CLASS_TITLE = "VA Loan Class for Realtors";

function classDescription(): string {
  return `A free monthly class with ${CONFIG.HOST.name} (${CONFIG.HOST.brand}) on how to win more military and veteran buyers with VA loans. Join here: ${CONFIG.ZOOM_LINK}`;
}

/** Google Calendar "add event" URL for a class occurrence. */
export function googleCalendarUrl(d: Date): string {
  const start = startMinutes();
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: CLASS_TITLE,
    dates: `${calStamp(d, start)}/${calStamp(d, start + CONFIG.CLASS_DURATION_MIN)}`,
    details: classDescription(),
    location: "Online (Zoom)",
    ctz: CONFIG.CLASS_TZ,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * A downloadable .ics file as a data: URI. Times are written as local
 * (floating) wall-clock times, matching CONFIG.CLASS_START_24H, so the invite
 * shows the class at that time in the attendee's calendar.
 */
export function icsDataUri(d: Date): string {
  const start = startMinutes();
  const uid = `va-class-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}@heroeshomenetwork.com`;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Heroes Home Network//VA Loan Class//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${calStamp(d, start)}`,
    `DTSTART:${calStamp(d, start)}`,
    `DTEND:${calStamp(d, start + CONFIG.CLASS_DURATION_MIN)}`,
    `SUMMARY:${CLASS_TITLE}`,
    `DESCRIPTION:${classDescription().replace(/,/g, "\\,")}`,
    "LOCATION:Online (Zoom)",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}
