import { bases } from "../bases";
import type { BaseDetail } from "../baseDetails";

function makeDetail(baseName: string, city: string, state: string): BaseDetail {
  return {
    neighborhoods: [
      {
        name: `${city} (Near Gate Areas)`,
        description: `Communities closest to ${baseName} with the shortest commutes, established neighborhoods, and strong military presence.`,
        commute: "10–20 min to main gate",
        tags: ["Military community", "Family-friendly", "Suburban"],
      },
      {
        name: `${city} (Newer Subdivisions)`,
        description: `Newer construction options with modern floor plans, neighborhood amenities, and easy access to retail and schools in the ${city} market.`,
        commute: "15–30 min to main gate",
        tags: ["New construction", "Family-friendly", "Suburban"],
      },
      {
        name: `${city} Regional Communities`,
        description: `Outlying communities that trade longer commutes for larger lots, quieter streets, and additional value in the broader ${state} housing market.`,
        commute: "25–40 min to main gate",
        tags: ["Affordable", "Rural", "Retiree-friendly"],
      },
    ],
    schools: {
      district: `${city} Area School Districts`,
      context: `Families stationed at ${baseName} are typically served by multiple districts in and around ${city}, with school quality varying by neighborhood and attendance zone.`,
      highlights: [
        "Military-family transition support and counseling resources are widely available",
        "Strong extracurricular pathways including athletics, arts, and career-tech tracks",
        "Dual-enrollment and community-college partnerships support college readiness",
      ],
    },
    activities: [
      {
        name: `${city} Waterfront & Trails`,
        category: "Outdoors",
        description: `Popular parks, trails, and waterfront recreation around ${city} make weekend outdoor activities easy for military families.`,
      },
      {
        name: `${city} Historic District`,
        category: "Attraction",
        description: `Local museums, historic sites, and heritage attractions provide a strong sense of place and family-friendly day trips.`,
      },
      {
        name: `${city} Town Center`,
        category: "Shopping",
        description: `Main retail corridor with grocery anchors, national brands, and everyday services used by most ${baseName} households.`,
      },
      {
        name: `${city} Dining Scene`,
        category: "Dining",
        description: `From local staples to newer concepts, ${city} offers reliable casual dining and regional specialties popular with service members.`,
      },
      {
        name: `${city} Community Events`,
        category: "Entertainment",
        description: `Seasonal festivals, live music, and family events give newcomers easy ways to connect with the local community.`,
      },
      {
        name: `${state} Weekend Getaways`,
        category: "Outdoors",
        description: `Short-drive destinations around ${state} provide beaches, hiking, boating, or mountain escapes depending on season.`,
      },
    ],
    housing: {
      priceRange: "$280,000–$520,000",
      rentRange: "$1,400–$2,400/mo",
      marketContext: `${baseName}'s surrounding market offers a mix of rentals and for-sale inventory. Costs vary significantly by school zone, commute time, and proximity to major employment corridors.`,
      hotNeighborhoods: [`${city} Gate Area`, `${city} New Builds`, `${city} Regional Suburbs`],
    },
  };
}

const marineCorpsDetails: Record<string, BaseDetail> = Object.fromEntries(
  bases
    .filter((base) => base.branch === "Marine Corps")
    .map((base) => [base.slug, makeDetail(base.name, base.city, base.state)]),
);

export default marineCorpsDetails;
