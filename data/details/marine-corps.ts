import { bases } from "../bases";
import type { BaseDetail, Neighborhood } from "../baseDetails";

const neighborhoodMap: Record<string, Neighborhood[]> = {
  "camp-hm-smith": [
    { name: "Aiea", description: "Central Oahu community with convenient H-1 access and a strong military presence.", commute: "15–25 min to Camp H.M. Smith", tags: ["Military community", "Suburban", "Family-friendly"] },
    { name: "Pearl City", description: "Popular family area with shopping, schools, and generally good value for Oahu.", commute: "20–30 min to Camp H.M. Smith", tags: ["Family-friendly", "Suburban", "Value"] },
    { name: "Kailua", description: "Windward beach town with a premium lifestyle for families willing to commute farther.", commute: "35–50 min to Camp H.M. Smith", tags: ["Waterfront", "Lifestyle", "Premium"] },
  ],
  "camp-lejeune": [
    { name: "Piney Green", description: "Large military-oriented residential area just outside key gates.", commute: "10–20 min to Camp Lejeune", tags: ["Military community", "Affordable", "Family-friendly"] },
    { name: "Sneads Ferry", description: "Coastal community with newer subdivisions and Topsail access.", commute: "20–30 min to Camp Lejeune", tags: ["Coastal", "New construction", "Family-friendly"] },
    { name: "Swansboro", description: "Historic waterfront town with quieter neighborhoods and local charm.", commute: "25–35 min to Camp Lejeune", tags: ["Historic", "Waterfront", "Suburban"] },
  ],
  "mcas-beaufort": [
    { name: "Burton", description: "Closest practical housing area to base with established neighborhoods.", commute: "10–15 min to MCAS Beaufort", tags: ["Commute-friendly", "Suburban", "Military community"] },
    { name: "Port Royal", description: "Historic coastal town with walkable pockets and marsh views.", commute: "15–20 min to MCAS Beaufort", tags: ["Historic", "Coastal", "Walkable"] },
    { name: "Lady's Island", description: "Family-focused area with more newer homes and school options.", commute: "20–30 min to MCAS Beaufort", tags: ["Family-friendly", "Suburban", "New construction"] },
  ],
  "mcas-cherry-point": [
    { name: "Havelock", description: "Primary off-base city with the shortest drive and strongest military footprint.", commute: "5–15 min to MCAS Cherry Point", tags: ["Military community", "Affordable", "Commute-friendly"] },
    { name: "New Bern", description: "Historic riverfront city with more dining and downtown amenities.", commute: "20–30 min to MCAS Cherry Point", tags: ["Historic", "Dining", "Family-friendly"] },
    { name: "Morehead City", description: "Coastal option with waterfront lifestyle and beach proximity.", commute: "30–40 min to MCAS Cherry Point", tags: ["Coastal", "Lifestyle", "Waterfront"] },
  ],
  "mcas-miramar": [
    { name: "Scripps Ranch", description: "Highly sought-after family neighborhood near the base and major freeways.", commute: "10–20 min to MCAS Miramar", tags: ["Family-friendly", "Suburban", "Schools"] },
    { name: "Mira Mesa", description: "Diverse central area with strong rental inventory and base access.", commute: "10–20 min to MCAS Miramar", tags: ["Military community", "Commute-friendly", "Value"] },
    { name: "Poway", description: "Inland suburb known for top schools and larger homes.", commute: "20–35 min to MCAS Miramar", tags: ["Schools", "Family-friendly", "Premium"] },
  ],
  "mcas-new-river": [
    { name: "Richlands", description: "Affordable inland community popular with Marine families.", commute: "15–25 min to MCAS New River", tags: ["Affordable", "Family-friendly", "Rural-suburban"] },
    { name: "Jacksonville", description: "Largest nearby city with full retail and rental options.", commute: "15–25 min to MCAS New River", tags: ["Military community", "Suburban", "Convenient"] },
    { name: "Hubert", description: "Quieter community between New River and coastal areas.", commute: "20–30 min to MCAS New River", tags: ["Quiet", "Family-friendly", "Value"] },
  ],
  "mcas-yuma": [
    { name: "Mesa Del Sol", description: "Master-planned Yuma area with newer homes and parks.", commute: "15–25 min to MCAS Yuma", tags: ["New construction", "Family-friendly", "Suburban"] },
    { name: "Foothills", description: "Popular area with newer builds and strong value relative to Arizona metros.", commute: "20–30 min to MCAS Yuma", tags: ["Affordable", "Retiree-friendly", "Value"] },
    { name: "Somerton", description: "Smaller community south of Yuma with lower housing costs.", commute: "20–30 min to MCAS Yuma", tags: ["Affordable", "Small-town", "Rural"] },
  ],
  "mcb-hawaii": [
    { name: "Kaneohe", description: "Closest town to base with strong Marine presence and daily convenience.", commute: "5–15 min to MCB Hawaii", tags: ["Military community", "Commute-friendly", "Suburban"] },
    { name: "Kailua", description: "Beach-centered community with strong schools and high demand.", commute: "10–20 min to MCB Hawaii", tags: ["Waterfront", "Family-friendly", "Premium"] },
    { name: "Aikahi Park", description: "Established neighborhood between Kaneohe and Kailua near base corridors.", commute: "10–20 min to MCB Hawaii", tags: ["Family-friendly", "Suburban", "Military community"] },
  ],
  "mcb-quantico": [
    { name: "Stafford", description: "Most common off-base area with many military-focused neighborhoods.", commute: "10–25 min to MCB Quantico", tags: ["Military community", "Suburban", "Family-friendly"] },
    { name: "Dumfries", description: "More affordable options with direct I-95 access to base.", commute: "15–25 min to MCB Quantico", tags: ["Affordable", "Commute-friendly", "Suburban"] },
    { name: "Fredericksburg", description: "Historic city with wider housing inventory and amenities.", commute: "30–45 min to MCB Quantico", tags: ["Historic", "Amenities", "Value"] },
  ],
  "camp-pendleton": [
    { name: "Oceanside", description: "Primary Marine housing market with coastal lifestyle and quick gate access.", commute: "10–25 min to Camp Pendleton", tags: ["Military community", "Coastal", "Commute-friendly"] },
    { name: "Fallbrook", description: "Inland option with larger lots and quieter neighborhoods.", commute: "20–35 min to Camp Pendleton", tags: ["Rural-suburban", "Family-friendly", "Value"] },
    { name: "San Clemente", description: "North-county coastal city with strong schools and beach lifestyle.", commute: "20–35 min to Camp Pendleton", tags: ["Coastal", "Schools", "Premium"] },
  ],
};

function makeDetail(baseName: string, city: string, state: string, neighborhoods: Neighborhood[]): BaseDetail {
  return {
    neighborhoods,
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
      { name: `${city} Waterfront & Trails`, category: "Outdoors", description: `Popular parks, trails, and waterfront recreation around ${city} make weekend outdoor activities easy for military families.` },
      { name: `${city} Historic District`, category: "Attraction", description: "Local museums, historic sites, and heritage attractions provide a strong sense of place and family-friendly day trips." },
      { name: `${city} Town Center`, category: "Shopping", description: `Main retail corridor with grocery anchors, national brands, and everyday services used by most ${baseName} households.` },
      { name: `${city} Dining Scene`, category: "Dining", description: `From local staples to newer concepts, ${city} offers reliable casual dining and regional specialties popular with service members.` },
      { name: `${city} Community Events`, category: "Entertainment", description: "Seasonal festivals, live music, and family events give newcomers easy ways to connect with the local community." },
      { name: `${state} Weekend Getaways`, category: "Outdoors", description: `Short-drive destinations around ${state} provide beaches, hiking, boating, or mountain escapes depending on season.` },
    ],
    housing: {
      priceRange: "$280,000–$520,000",
      rentRange: "$1,400–$2,400/mo",
      marketContext: `${baseName}'s surrounding market offers a mix of rentals and for-sale inventory. Costs vary significantly by school zone, commute time, and proximity to major employment corridors.`,
      hotNeighborhoods: neighborhoods.map((n) => n.name),
    },
  };
}

const marineCorpsDetails: Record<string, BaseDetail> = Object.fromEntries(
  bases
    .filter((base) => base.branch === "Marine Corps")
    .map((base) => [base.slug, makeDetail(base.name, base.city, base.state, neighborhoodMap[base.slug])]),
);

export default marineCorpsDetails;
