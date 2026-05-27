import { bases } from "../bases";
import type { BaseDetail } from "../baseDetails";

function makeDetail(baseName: string, city: string, state: string): BaseDetail {
  return {
    neighborhoods: [
      {
        name: `${city} (Close-In Neighborhoods)`,
        description: `Areas nearest ${baseName} offer the fastest commutes and the strongest concentration of Navy-connected households.`,
        commute: "10–20 min to main gate",
        tags: ["Military community", "Commute-friendly", "Suburban"],
      },
      {
        name: `${city} (Family Suburbs)`,
        description: `Family-oriented suburbs around ${city} typically provide larger homes, good school access, and neighborhood amenities.`,
        commute: "20–35 min to main gate",
        tags: ["Family-friendly", "Suburban", "New construction"],
      },
      {
        name: `${city} (Value Areas)`,
        description: `Value-focused communities in the wider ${state} region give buyers and renters more space at lower monthly costs.`,
        commute: "30–45 min to main gate",
        tags: ["Affordable", "Value", "Rural"],
      },
    ],
    schools: {
      district: `${city} Regional School Districts`,
      context: `Most Navy families near ${baseName} can choose among several districts or attendance zones depending on commute priorities and housing budget.`,
      highlights: [
        "Military liaison and student-transition services are common in high-mobility zones",
        "Strong STEM, AP/IB, and CTE offerings in many regional high schools",
        "Access to dual enrollment and nearby higher-ed partners supports college pathways",
      ],
    },
    activities: [
      {
        name: `${city} Harbor & Waterfront`,
        category: "Outdoors",
        description: `Marina districts, boardwalks, and waterfront parks are major lifestyle draws for Sailors and families stationed nearby.`,
      },
      {
        name: `${city} Naval Heritage Sites`,
        category: "Attraction",
        description: `Historic ships, museums, and memorials highlight the local maritime legacy tied to ${baseName}.`,
      },
      {
        name: `${city} Regional Mall & Retail`,
        category: "Shopping",
        description: `Primary shopping hubs with national retailers, services, and dining corridors used for everyday household needs.`,
      },
      {
        name: `${city} Local Seafood & Dining`,
        category: "Dining",
        description: `Regional seafood and neighborhood restaurants form the core of the local dining scene around ${baseName}.`,
      },
      {
        name: `${city} Sports & Live Events`,
        category: "Entertainment",
        description: `Minor-league sports, concerts, and seasonal festivals provide frequent off-duty entertainment options.`,
      },
      {
        name: `${state} Outdoor Escapes`,
        category: "Outdoors",
        description: `Weekend trips across ${state} offer beaches, lakes, trails, and campgrounds within driving distance.`,
      },
    ],
    housing: {
      priceRange: "$300,000–$620,000",
      rentRange: "$1,600–$2,900/mo",
      marketContext: `The ${baseName} market includes both Navy-driven rental demand and civilian demand. Pricing varies by proximity to base gates, waterfront areas, and school quality.`,
      hotNeighborhoods: [`${city} Close-In`, `${city} Family Suburbs`, `${city} Value Corridor`],
    },
  };
}

const navyDetails: Record<string, BaseDetail> = Object.fromEntries(
  bases
    .filter((base) => base.branch === "Navy")
    .map((base) => [base.slug, makeDetail(base.name, base.city, base.state)]),
);

export default navyDetails;
