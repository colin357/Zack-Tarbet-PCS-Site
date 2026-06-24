/**
 * Shared FAQ content.
 *
 * Kept in one place so the visible accordion (FAQSection) and the FAQPage
 * JSON-LD render from identical text — Google requires the structured-data
 * answer to match what users see, or it drops the rich result.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaqs: FaqItem[] = [
  {
    q: "How do I find the best neighborhood near my next duty station?",
    a: "Start with the installation page for your base, then compare commute ranges, school context, and housing trends. Most families narrow to 2–3 communities and validate by talking to sponsors, local agents, and recent arrivals.",
  },
  {
    q: "Can I use a VA loan right after a PCS move?",
    a: "In many cases, yes. Eligible service members can use VA financing during or after a PCS if occupancy timelines and lender documentation requirements are met.",
  },
  {
    q: "Should we rent first or buy immediately after arrival?",
    a: "That depends on assignment length, local inventory, and school priorities. Renting first can reduce risk in fast-moving markets, while buying can make sense for longer tours where monthly payments align with BAH.",
  },
  {
    q: "What costs should we plan for besides down payment?",
    a: "Even with $0 down VA options, plan for closing costs, inspections, insurance, utilities, and moving overlap. Your budget should include both one-time and monthly ownership costs.",
  },
];
