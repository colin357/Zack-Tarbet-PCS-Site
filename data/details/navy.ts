import { bases } from "../bases";
import type { BaseDetail, Neighborhood } from "../baseDetails";

const neighborhoodMap: Record<string, Neighborhood[]> = {
  "nas-corpus-christi": [
    { name: "Flour Bluff", description: "Closest major residential area to base with strong Navy presence.", commute: "10–15 min to NAS Corpus Christi", tags: ["Military community", "Commute-friendly", "Coastal"] },
    { name: "South Side", description: "Popular family sector with newer subdivisions and retail growth.", commute: "20–30 min to NAS Corpus Christi", tags: ["Family-friendly", "New construction", "Suburban"] },
    { name: "Portland", description: "Bay-side suburb with quieter neighborhoods and good schools.", commute: "25–35 min to NAS Corpus Christi", tags: ["Suburban", "Schools", "Family-friendly"] },
  ],
  "nas-fallon": [
    { name: "Fallon", description: "Primary off-base market with shortest commute and full daily services.", commute: "5–15 min to NAS Fallon", tags: ["Commute-friendly", "Affordable", "Military community"] },
    { name: "Lahontan Valley", description: "Rural communities with larger lots and quieter living.", commute: "20–35 min to NAS Fallon", tags: ["Rural", "Value", "Quiet"] },
    { name: "Fernley", description: "Growing city with added amenities and access to Reno corridor.", commute: "30–45 min to NAS Fallon", tags: ["Growth", "Amenities", "Suburban"] },
  ],
  "nas-fort-worth-jrb": [
    { name: "Lake Worth", description: "Closest area to the JRB with established neighborhoods.", commute: "10–20 min to NAS JRB Fort Worth", tags: ["Commute-friendly", "Suburban", "Military community"] },
    { name: "Benbrook", description: "Family-focused suburb with parks and strong neighborhood feel.", commute: "15–25 min to NAS JRB Fort Worth", tags: ["Family-friendly", "Suburban", "Schools"] },
    { name: "North Richland Hills", description: "Mid-cities option with strong retail and highway connectivity.", commute: "25–40 min to NAS JRB Fort Worth", tags: ["Amenities", "Suburban", "Value"] },
  ],
  "nas-jacksonville": [
    { name: "Ortega", description: "Historic riverside neighborhood convenient to base and downtown.", commute: "10–20 min to NAS Jacksonville", tags: ["Historic", "Commute-friendly", "Lifestyle"] },
    { name: "Orange Park", description: "Top military-family area just south of base with broad housing options.", commute: "10–20 min to NAS Jacksonville", tags: ["Military community", "Family-friendly", "Suburban"] },
    { name: "Fleming Island", description: "Newer suburban area known for schools and master-planned communities.", commute: "20–30 min to NAS Jacksonville", tags: ["Schools", "New construction", "Family-friendly"] },
  ],
  "nas-jrb-new-orleans": [
    { name: "Algiers", description: "Closest New Orleans side option with direct base access.", commute: "10–20 min to NAS JRB New Orleans", tags: ["Commute-friendly", "Urban-suburban", "Value"] },
    { name: "Belle Chasse", description: "Primary base-adjacent community with strong military ties.", commute: "5–15 min to NAS JRB New Orleans", tags: ["Military community", "Family-friendly", "Quiet"] },
    { name: "Gretna", description: "West Bank suburb with established neighborhoods and services.", commute: "15–25 min to NAS JRB New Orleans", tags: ["Suburban", "Amenities", "Affordable"] },
  ],
  "nas-key-west": [
    { name: "Key West (New Town)", description: "Closest civilian housing pocket with easiest commute.", commute: "10–20 min to NAS Key West", tags: ["Commute-friendly", "Island", "Lifestyle"] },
    { name: "Stock Island", description: "More attainable pricing than central Key West with marina access.", commute: "10–20 min to NAS Key West", tags: ["Value", "Waterfront", "Military community"] },
    { name: "Big Coppitt Key", description: "Residential Lower Keys option offering quieter neighborhoods.", commute: "20–30 min to NAS Key West", tags: ["Quiet", "Coastal", "Family-friendly"] },
  ],
  "nas-kingsville": [
    { name: "North Kingsville", description: "Closest neighborhoods to base with practical daily commute.", commute: "10–20 min to NAS Kingsville", tags: ["Commute-friendly", "Affordable", "Military community"] },
    { name: "South Kingsville", description: "Established neighborhoods near schools and city services.", commute: "15–25 min to NAS Kingsville", tags: ["Family-friendly", "Suburban", "Value"] },
    { name: "Alice", description: "Regional alternative with broader home inventory.", commute: "30–40 min to NAS Kingsville", tags: ["Value", "Small-town", "Rural-suburban"] },
  ],
  "nas-lemoore": [
    { name: "Lemoore", description: "Primary Navy housing market with shortest drive to the gates.", commute: "10–20 min to NAS Lemoore", tags: ["Military community", "Commute-friendly", "Affordable"] },
    { name: "Hanford", description: "Larger nearby city with more retail and neighborhood variety.", commute: "20–30 min to NAS Lemoore", tags: ["Amenities", "Family-friendly", "Suburban"] },
    { name: "Visalia", description: "Regional hub offering expanded housing and lifestyle options.", commute: "35–50 min to NAS Lemoore", tags: ["Regional hub", "Schools", "Value"] },
  ],
  "nas-meridian": [
    { name: "North Hills", description: "Popular Meridian neighborhood with established homes.", commute: "10–20 min to NAS Meridian", tags: ["Suburban", "Family-friendly", "Commute-friendly"] },
    { name: "Marion", description: "Small community just east of Meridian with quick access.", commute: "10–20 min to NAS Meridian", tags: ["Small-town", "Value", "Quiet"] },
    { name: "Collinsville", description: "Rural-suburban option with larger lots and lower density.", commute: "20–30 min to NAS Meridian", tags: ["Rural", "Affordable", "Family-friendly"] },
  ],
  "nas-oceana": [
    { name: "Virginia Beach (Kempsville)", description: "Central Virginia Beach area with strong school and commute balance.", commute: "15–25 min to NAS Oceana", tags: ["Family-friendly", "Suburban", "Schools"] },
    { name: "Princess Anne", description: "South VB communities with newer homes and planned developments.", commute: "15–25 min to NAS Oceana", tags: ["New construction", "Family-friendly", "Suburban"] },
    { name: "Chesapeake", description: "Popular alternative for more house and suburban feel.", commute: "25–40 min to NAS Oceana", tags: ["Value", "Suburban", "Family-friendly"] },
  ],
  "nas-patuxent-river": [
    { name: "Lexington Park", description: "Closest and most military-centric off-base housing market.", commute: "5–15 min to NAS Patuxent River", tags: ["Military community", "Commute-friendly", "Value"] },
    { name: "California, MD", description: "Fast-growing suburban area with newer subdivisions and retail.", commute: "10–20 min to NAS Patuxent River", tags: ["New construction", "Suburban", "Family-friendly"] },
    { name: "Leonardtown", description: "Historic county seat with charm and strong community feel.", commute: "20–30 min to NAS Patuxent River", tags: ["Historic", "Lifestyle", "Schools"] },
  ],
  "nas-pensacola": [
    { name: "Warrington", description: "Closest practical neighborhood cluster to main gates.", commute: "10–20 min to NAS Pensacola", tags: ["Commute-friendly", "Military community", "Affordable"] },
    { name: "Perdido Key", description: "Beach-oriented living with premium rents and coastal amenities.", commute: "20–30 min to NAS Pensacola", tags: ["Coastal", "Lifestyle", "Premium"] },
    { name: "Pace", description: "Family-focused inland suburb with strong schools.", commute: "30–45 min to NAS Pensacola", tags: ["Schools", "Family-friendly", "Suburban"] },
  ],
  "nas-point-mugu": [
    { name: "Camarillo", description: "Common choice balancing commute, schools, and amenities.", commute: "20–35 min to NAS Point Mugu", tags: ["Family-friendly", "Suburban", "Schools"] },
    { name: "Oxnard", description: "Closest large city with diverse housing and coastal access.", commute: "15–25 min to NAS Point Mugu", tags: ["Coastal", "Value", "Amenities"] },
    { name: "Ventura", description: "Lifestyle-forward beach city with vibrant downtown.", commute: "25–35 min to NAS Point Mugu", tags: ["Lifestyle", "Coastal", "Premium"] },
  ],
  "nas-whidbey-island": [
    { name: "Oak Harbor", description: "Primary Navy town with shortest commute and full support services.", commute: "5–15 min to NAS Whidbey Island", tags: ["Military community", "Commute-friendly", "Family-friendly"] },
    { name: "Anacortes", description: "Scenic option on Fidalgo Island with stronger amenities.", commute: "25–40 min to NAS Whidbey Island", tags: ["Scenic", "Lifestyle", "Suburban"] },
    { name: "Coupeville", description: "Historic small town with quieter pace and island charm.", commute: "20–35 min to NAS Whidbey Island", tags: ["Historic", "Quiet", "Waterfront"] },
  ],
  "nab-coronado": [
    { name: "Coronado", description: "Closest community with premium island lifestyle and very short commute.", commute: "5–15 min to NAB Coronado", tags: ["Premium", "Commute-friendly", "Waterfront"] },
    { name: "Imperial Beach", description: "South-bay coastal option with more attainable pricing.", commute: "15–25 min to NAB Coronado", tags: ["Coastal", "Value", "Military community"] },
    { name: "Chula Vista", description: "Large suburban city with broad housing inventory.", commute: "20–35 min to NAB Coronado", tags: ["Suburban", "Family-friendly", "Amenities"] },
  ],
  "naf-el-centro": [
    { name: "El Centro", description: "Closest housing market with convenient daily access.", commute: "10–20 min to NAF El Centro", tags: ["Commute-friendly", "Affordable", "Military community"] },
    { name: "Imperial", description: "Small neighboring city with suburban feel and newer homes.", commute: "10–20 min to NAF El Centro", tags: ["Suburban", "Family-friendly", "Value"] },
    { name: "Brawley", description: "Regional alternative with lower density and larger lots.", commute: "25–35 min to NAF El Centro", tags: ["Rural-suburban", "Value", "Quiet"] },
  ],
  "navsta-great-lakes": [
    { name: "Gurnee", description: "Popular suburban option with shopping and commuter convenience.", commute: "15–25 min to Naval Station Great Lakes", tags: ["Suburban", "Family-friendly", "Amenities"] },
    { name: "Waukegan", description: "Closest major city area with varied rental options.", commute: "10–20 min to Naval Station Great Lakes", tags: ["Commute-friendly", "Value", "Urban-suburban"] },
    { name: "Libertyville", description: "Higher-end suburb known for schools and downtown charm.", commute: "20–30 min to Naval Station Great Lakes", tags: ["Schools", "Premium", "Family-friendly"] },
  ],
  "navsta-newport": [
    { name: "Middletown", description: "Most common family choice near base with balanced costs.", commute: "10–20 min to Naval Station Newport", tags: ["Family-friendly", "Commute-friendly", "Value"] },
    { name: "Portsmouth", description: "Nearby island town with quieter neighborhoods.", commute: "15–25 min to Naval Station Newport", tags: ["Waterfront", "Quiet", "Suburban"] },
    { name: "Newport", description: "Historic waterfront city with premium rents and lifestyle perks.", commute: "10–20 min to Naval Station Newport", tags: ["Historic", "Lifestyle", "Premium"] },
  ],
  "navsta-norfolk": [
    { name: "Ghent", description: "Historic Norfolk district with walkability and culture.", commute: "15–25 min to Naval Station Norfolk", tags: ["Historic", "Walkable", "Lifestyle"] },
    { name: "Ocean View", description: "Base-adjacent coastal neighborhood with practical commute.", commute: "10–20 min to Naval Station Norfolk", tags: ["Coastal", "Commute-friendly", "Value"] },
    { name: "Chesapeake", description: "Family-suburban option with more space and schools focus.", commute: "25–40 min to Naval Station Norfolk", tags: ["Family-friendly", "Schools", "Suburban"] },
  ],
  "nsa-annapolis": [
    { name: "Arnold", description: "Nearby residential area with easy access over local bridges.", commute: "15–25 min to NSA Annapolis", tags: ["Suburban", "Family-friendly", "Commute-friendly"] },
    { name: "Cape St. Claire", description: "Community with water access and neighborhood amenities.", commute: "15–25 min to NSA Annapolis", tags: ["Waterfront", "Family-friendly", "Lifestyle"] },
    { name: "Severna Park", description: "Popular school-focused suburb north of Annapolis.", commute: "25–35 min to NSA Annapolis", tags: ["Schools", "Suburban", "Premium"] },
  ],
  "nsa-mid-south": [
    { name: "Millington", description: "Closest community and primary housing market for base personnel.", commute: "5–15 min to NSA Mid-South", tags: ["Commute-friendly", "Military community", "Affordable"] },
    { name: "Bartlett", description: "Suburban Memphis option with strong schools and services.", commute: "20–30 min to NSA Mid-South", tags: ["Schools", "Suburban", "Family-friendly"] },
    { name: "Lakeland", description: "Growing suburban city with newer homes and amenities.", commute: "25–35 min to NSA Mid-South", tags: ["New construction", "Family-friendly", "Suburban"] },
  ],
  "nsb-kings-bay": [
    { name: "St. Marys", description: "Closest town to base with heavy submarine-community presence.", commute: "10–20 min to NSB Kings Bay", tags: ["Military community", "Commute-friendly", "Family-friendly"] },
    { name: "Kingsland", description: "Convenient I-95 area with broad rental and purchase options.", commute: "10–20 min to NSB Kings Bay", tags: ["Suburban", "Value", "Amenities"] },
    { name: "Yulee", description: "Northeast Florida option with growth and retail access.", commute: "25–35 min to NSB Kings Bay", tags: ["Growth", "Suburban", "Family-friendly"] },
  ],
  "nsb-new-london": [
    { name: "Groton", description: "Core submarine-community housing area nearest the base.", commute: "5–15 min to NSB New London", tags: ["Military community", "Commute-friendly", "Value"] },
    { name: "Mystic", description: "Historic coastal village with lifestyle amenities and tourism draw.", commute: "15–25 min to NSB New London", tags: ["Historic", "Coastal", "Lifestyle"] },
    { name: "Waterford", description: "Family-suburban option with more newer housing pockets.", commute: "15–25 min to NSB New London", tags: ["Family-friendly", "Suburban", "Schools"] },
  ],
  "nsy-pearl-harbor": [
    { name: "Aiea", description: "Most common near-base housing choice with excellent freeway access.", commute: "10–20 min to NSY Pearl Harbor", tags: ["Military community", "Commute-friendly", "Suburban"] },
    { name: "Pearl City", description: "Family-oriented area with strong services and housing variety.", commute: "15–25 min to NSY Pearl Harbor", tags: ["Family-friendly", "Suburban", "Value"] },
    { name: "Ewa Beach", description: "Fast-growing west Oahu market with newer subdivisions.", commute: "25–40 min to NSY Pearl Harbor", tags: ["New construction", "Family-friendly", "Growth"] },
  ],
};

function makeDetail(baseName: string, city: string, state: string, neighborhoods: Neighborhood[]): BaseDetail {
  return {
    neighborhoods,
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
      { name: `${city} Harbor & Waterfront`, category: "Outdoors", description: "Marina districts, boardwalks, and waterfront parks are major lifestyle draws for Sailors and families stationed nearby." },
      { name: `${city} Naval Heritage Sites`, category: "Attraction", description: `Historic ships, museums, and memorials highlight the local maritime legacy tied to ${baseName}.` },
      { name: `${city} Regional Mall & Retail`, category: "Shopping", description: "Primary shopping hubs with national retailers, services, and dining corridors used for everyday household needs." },
      { name: `${city} Local Seafood & Dining`, category: "Dining", description: `Regional seafood and neighborhood restaurants form the core of the local dining scene around ${baseName}.` },
      { name: `${city} Sports & Live Events`, category: "Entertainment", description: "Minor-league sports, concerts, and seasonal festivals provide frequent off-duty entertainment options." },
      { name: `${state} Outdoor Escapes`, category: "Outdoors", description: `Weekend trips across ${state} offer beaches, lakes, trails, and campgrounds within driving distance.` },
    ],
    housing: {
      priceRange: "$300,000–$620,000",
      rentRange: "$1,600–$2,900/mo",
      marketContext: `The ${baseName} market includes both Navy-driven rental demand and civilian demand. Pricing varies by proximity to base gates, waterfront areas, and school quality.`,
      hotNeighborhoods: neighborhoods.map((n) => n.name),
    },
  };
}

const navyDetails: Record<string, BaseDetail> = Object.fromEntries(
  bases
    .filter((base) => base.branch === "Navy")
    .map((base) => [base.slug, makeDetail(base.name, base.city, base.state, neighborhoodMap[base.slug])]),
);

export default navyDetails;
