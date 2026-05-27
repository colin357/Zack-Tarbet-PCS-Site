import airForceDetails from "./details/air-force";
import armyDetails from "./details/army";
import otherDetails from "./details/other";

export interface Neighborhood {
  name: string;
  description: string;
  commute: string;
  tags: string[];
}

export interface LocalActivity {
  name: string;
  category: "Dining" | "Outdoors" | "Entertainment" | "Shopping" | "Attraction";
  description: string;
}

export interface BaseDetail {
  neighborhoods: Neighborhood[];
  schools: {
    district: string;
    context: string;
    highlights: string[];
  };
  activities: LocalActivity[];
  housing: {
    priceRange: string;
    rentRange: string;
    marketContext: string;
    hotNeighborhoods: string[];
  };
}

const baseDetails: Record<string, BaseDetail> = {
  ...airForceDetails,
  ...armyDetails,
  ...otherDetails,
};

export function getBaseDetail(slug: string): BaseDetail | undefined {
  return baseDetails[slug];
}

export default baseDetails;
