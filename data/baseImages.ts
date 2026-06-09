const regionImages = {
  northeast:  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
  midAtlantic:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
  southeast:  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=600&q=80",
  southwest:  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80",
  mountain:   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
  pacific:    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
  midwest:    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80",
  south:      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=600&q=80",
} as const;

type Region = keyof typeof regionImages;

const stateRegion: Record<string, Region> = {
  // New England
  CT: "northeast", MA: "northeast", RI: "northeast",
  // Mid-Atlantic
  DC: "midAtlantic", DE: "midAtlantic", MD: "midAtlantic",
  NJ: "midAtlantic", NY: "midAtlantic", PA: "midAtlantic", VA: "midAtlantic",
  // Southeast / coastal South
  AL: "southeast", FL: "southeast", GA: "southeast",
  MS: "southeast", NC: "southeast", SC: "southeast",
  // Southwest / desert
  AZ: "southwest", NM: "southwest", NV: "southwest", TX: "southwest",
  // Mountain West
  AK: "mountain", CO: "mountain", ID: "mountain", MT: "mountain",
  UT: "mountain", WY: "mountain",
  // Pacific Coast
  CA: "pacific", HI: "pacific", OR: "pacific", WA: "pacific",
  // Midwest / Great Plains
  IL: "midwest", KS: "midwest", MO: "midwest", ND: "midwest",
  NE: "midwest", OH: "midwest", SD: "midwest",
  // Upper South / South Central
  AR: "south", KY: "south", LA: "south", OK: "south", TN: "south",
};

export function getBaseImage(state: string): string {
  const region: Region = stateRegion[state] ?? "midAtlantic";
  return regionImages[region];
}
