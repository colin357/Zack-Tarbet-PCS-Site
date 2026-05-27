import type { BaseDetail } from "../baseDetails";

const otherDetails: Record<string, BaseDetail> = {
  // ─── COAST GUARD BASES ────────────────────────────────────────────────────────

  "coast-guard-base-alameda": {
    neighborhoods: [
      {
        name: "Alameda Island (East End)",
        description:
          "Quiet, walkable neighborhoods on the east side of Alameda Island with tree-lined streets, Victorian and Craftsman bungalows, and a genuine small-town feel inside the Bay Area. Good schools and low crime make this a top pick for families.",
        commute: "5–10 min to base main gate",
        tags: ["Family-friendly", "Walkable", "Historic", "Waterfront"],
      },
      {
        name: "Bay Farm Island",
        description:
          "A planned community on the southern tip of Alameda featuring newer homes, waterfront paths along the estuary, and direct access to the Bay Trail. Quiet cul-de-sacs appeal to families with children.",
        commute: "10–15 min to main gate",
        tags: ["Family-friendly", "Suburban", "Waterfront", "New construction"],
      },
      {
        name: "San Leandro (Floresta Gardens)",
        description:
          "Affordable single-family homes just across the estuary in San Leandro offer more house for the dollar than Alameda itself. BART access at Bay Fair makes car-free commutes into Oakland and San Francisco feasible.",
        commute: "15–20 min to main gate",
        tags: ["Affordable", "Suburban", "Military community"],
      },
    ],
    schools: {
      district: "Alameda Unified School District",
      context:
        "AUSD serves Alameda Island with a reputation for strong academics and active parent involvement. The district operates several highly regarded elementary schools as well as Encinal and Alameda High Schools. Bay Area housing costs affect teacher recruitment but the district consistently outperforms state averages.",
      highlights: [
        "Edison Elementary is one of the highest-rated elementaries in Alameda County",
        "Alameda High School offers a robust AP and IB course catalog",
        "District participates in the interdistrict transfer program for families in adjacent cities",
      ],
    },
    activities: [
      {
        name: "Alameda Beach (Crown Memorial State Beach)",
        category: "Outdoors",
        description:
          "A 2.5-mile sandy beach on San Francisco Bay with picnic areas, a paved multi-use path, and stunning views of the San Francisco skyline. Popular for windsurfing and kite flying.",
      },
      {
        name: "Almanac Beer Co.",
        category: "Dining",
        description:
          "Beloved Bay Area craft brewery with a taproom in Alameda pouring flagship and seasonal sours, IPAs, and barrel-aged ales alongside locally sourced food.",
      },
      {
        name: "Park Street Shopping District",
        category: "Shopping",
        description:
          "Alameda's historic main street lined with independent boutiques, antique shops, bookstores, and dozens of restaurants, anchored by a beloved farmers' market on Sundays.",
      },
      {
        name: "USS Hornet Sea, Air & Space Museum",
        category: "Attraction",
        description:
          "The decommissioned aircraft carrier CV-12 docked at Alameda Point houses an impressive collection of aircraft, space capsules, and naval history exhibits open to the public year-round.",
      },
      {
        name: "Speisekammer German Restaurant",
        category: "Dining",
        description:
          "A neighborhood institution on Lincoln Avenue serving authentic Bavarian cuisine—schnitzel, pretzels, and a massive German beer selection—in a lively beer hall atmosphere.",
      },
      {
        name: "Jack London Square (Oakland)",
        category: "Entertainment",
        description:
          "A vibrant waterfront district a short drive or ferry ride away featuring live music venues, craft breweries, the historic Heinold's First and Last Chance saloon, and a weekly farmers' market.",
      },
    ],
    housing: {
      priceRange: "$850,000–$1,250,000",
      rentRange: "$2,800–$3,800/mo",
      marketContext:
        "Alameda's housing market is expensive relative to national averages but comparatively affordable within the Bay Area. Inventory is limited on the island, so homes move quickly. BAH rates are generous for this COLA area, and many military families opt to rent condos or older single-family homes near the base.",
      hotNeighborhoods: ["West Alameda", "Bay Farm Island", "Gold Coast"],
    },
  },

  "coast-guard-base-boston": {
    neighborhoods: [
      {
        name: "South Boston (Southie)",
        description:
          "Once a working-class Irish-American enclave, Southie is now a sought-after urban neighborhood with renovated row houses, new condos, a vibrant bar and restaurant scene, and easy access to Carson Beach on Boston Harbor.",
        commute: "10–15 min to base via Summer St",
        tags: ["Urban", "Walkable", "Nightlife", "Historic"],
      },
      {
        name: "Quincy (Wollaston)",
        description:
          "A coastal suburb south of Boston offering more space for the dollar than the city proper. Wollaston Beach is a local gem, the Red Line T connects commuters to downtown, and the school system is solid.",
        commute: "20–30 min to base via I-93",
        tags: ["Suburban", "Waterfront", "Affordable", "Family-friendly"],
      },
      {
        name: "Weymouth",
        description:
          "A South Shore suburb with large yards, good public schools, and relatively modest home prices by Boston standards. Convenient to the South Shore Plaza shopping complex and Route 3 for commuting.",
        commute: "25–35 min to base",
        tags: ["Suburban", "Family-friendly", "Affordable"],
      },
    ],
    schools: {
      district: "Boston Public Schools / Quincy Public Schools",
      context:
        "Families on base in Boston proper are served by Boston Public Schools, which offers school choice with selective exam schools including Boston Latin School—one of the nation's oldest and most prestigious public schools. Families in the suburbs fall under strong district systems such as Quincy or Weymouth, both with good reputations.",
      highlights: [
        "Boston Latin School and John D. O'Bryant School are among the top public exam schools in the country",
        "Quincy High School offers a full IB Diploma Program",
        "Weymouth Public Schools consistently earns above-average MCAS scores",
      ],
    },
    activities: [
      {
        name: "Boston Harbor Islands State Park",
        category: "Outdoors",
        description:
          "An archipelago of 34 islands accessible by ferry from Long Wharf, offering camping, hiking, historic fort tours, and sweeping views of the Boston skyline.",
      },
      {
        name: "Row 34",
        category: "Dining",
        description:
          "An acclaimed seafood and oyster bar in Fort Point Channel specializing in local shellfish, raw bar selections, and an outstanding craft beer list.",
      },
      {
        name: "Fenway Park",
        category: "Entertainment",
        description:
          "The iconic home of the Boston Red Sox, one of America's oldest ballparks. Tours are available year-round, and attending a game is a quintessential Boston experience.",
      },
      {
        name: "Freedom Trail",
        category: "Attraction",
        description:
          "A 2.5-mile walking trail through downtown Boston linking 16 historic sites from the Revolutionary War era, including Paul Revere's House, Old North Church, and Bunker Hill Monument.",
      },
      {
        name: "Newbury Street",
        category: "Shopping",
        description:
          "Boston's premier shopping corridor in Back Bay with high-end boutiques, national retailers, art galleries, and excellent dining covering eight blocks.",
      },
      {
        name: "Harpoon Brewery",
        category: "Dining",
        description:
          "Boston's flagship craft brewery located on the South Boston waterfront, offering tours, a beer hall, and the beloved Beer Hall Kitchen menu steps from the harbor.",
      },
    ],
    housing: {
      priceRange: "$650,000–$1,100,000",
      rentRange: "$2,600–$4,200/mo",
      marketContext:
        "Boston's housing market is among the most expensive in the northeast. Rentals are common for military personnel given high purchase prices and a competitive market. Suburbs like Quincy and Weymouth offer better value. BAH reflects the high COLA and helps offset costs.",
      hotNeighborhoods: ["South Boston", "South End", "Quincy Center"],
    },
  },

  "coast-guard-base-clearwater": {
    neighborhoods: [
      {
        name: "Safety Harbor",
        description:
          "A charming small city on Tampa Bay with a historic Main Street, spa resort, waterfront park, and excellent schools. Easy access to the Courtney Campbell Causeway for commuting.",
        commute: "20–25 min to base",
        tags: ["Family-friendly", "Waterfront", "Historic", "Walkable"],
      },
      {
        name: "Dunedin",
        description:
          "A walkable coastal town just north of Clearwater with a vibrant downtown, craft breweries, world-class Honeymoon Island State Park, and the Toronto Blue Jays spring training complex. Popular with active-duty and retirees alike.",
        commute: "15–20 min to base",
        tags: ["Walkable", "Waterfront", "Family-friendly", "Nightlife"],
      },
      {
        name: "Largo (Ridgecrest area)",
        description:
          "Affordable single-family homes in established Pinellas County neighborhoods convenient to the base and Tampa Bay beaches. Good value compared to beachfront communities.",
        commute: "10–15 min to base",
        tags: ["Affordable", "Suburban", "Military community", "Family-friendly"],
      },
    ],
    schools: {
      district: "Pinellas County Schools",
      context:
        "One of the largest school districts in Florida, Pinellas County Schools offers a wide range of magnet programs, choice schools, and specialized academies. The district has been recognized for innovation in technical and arts education.",
      highlights: [
        "Dunedin Highland Middle School and Dunedin High are well-regarded for academics and extracurriculars",
        "Pinellas County Schools operates a robust magnet program including a Montessori network and STEM academies",
        "Safety Harbor Middle is among the top-ranked middle schools in the county",
      ],
    },
    activities: [
      {
        name: "Clearwater Beach",
        category: "Outdoors",
        description:
          "Consistently ranked among the best beaches in the United States, Clearwater Beach offers white quartz sand, calm Gulf waters, and the famous Pier 60 sunset celebration nightly.",
      },
      {
        name: "Frenchy's Rockaway Grill",
        category: "Dining",
        description:
          "An iconic Clearwater Beach seafood institution serving fresh-caught grouper sandwiches, stone crab claws, and cold craft beer with bare feet on the sand.",
      },
      {
        name: "Honeymoon Island State Park",
        category: "Outdoors",
        description:
          "One of Florida's most visited state parks, featuring pristine Gulf beaches, osprey nests, nature trails, and a ferry to the car-free Caladesi Island.",
      },
      {
        name: "Dunedin Brewery",
        category: "Dining",
        description:
          "Florida's oldest craft brewery with an outdoor biergarten on Main Street serving European-style lagers, ales, and seasonal taps in a relaxed, dog-friendly atmosphere.",
      },
      {
        name: "Countryside Mall",
        category: "Shopping",
        description:
          "A large regional mall in Clearwater with anchor stores, a full food court, and numerous dining options convenient to base.",
      },
      {
        name: "Ruth Eckerd Hall",
        category: "Entertainment",
        description:
          "One of the premier performing arts venues in the Southeast, hosting national touring Broadway shows, major concerts, and the Cleveland Orchestra Florida residency.",
      },
    ],
    housing: {
      priceRange: "$340,000–$520,000",
      rentRange: "$1,800–$2,600/mo",
      marketContext:
        "Pinellas County experienced rapid price appreciation post-pandemic but remains more affordable than many coastal Florida markets. Flood insurance is an important consideration for any property below 10 feet elevation. BAH rates are reasonably aligned with local rents.",
      hotNeighborhoods: ["Dunedin", "Safety Harbor", "Ozona"],
    },
  },

  "coast-guard-base-elizabeth-city": {
    neighborhoods: [
      {
        name: "Knobbs Creek",
        description:
          "An established residential area in Elizabeth City with mature trees, ranch homes, and a mix of long-time residents and military families. One of the most popular areas for base personnel.",
        commute: "10–15 min to base",
        tags: ["Suburban", "Military community", "Affordable", "Family-friendly"],
      },
      {
        name: "Historic Downtown Elizabeth City",
        description:
          "The revitalized downtown core along the Pasquotank River features restored Victorian homes, walkable restaurants and shops, and the famous free dockage program that draws cruising sailors from up and down the East Coast.",
        commute: "5–10 min to base",
        tags: ["Historic", "Walkable", "Waterfront"],
      },
      {
        name: "Weeksville",
        description:
          "A quiet rural community just southeast of Elizabeth City offering affordable acreage lots and country living a short drive from the base. Popular with families seeking space and privacy.",
        commute: "15–20 min to base",
        tags: ["Rural", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Elizabeth City-Pasquotank Public Schools",
      context:
        "The district serves Pasquotank County and has undergone significant improvements in recent years. Elizabeth City is home to Elizabeth City State University (ECSU), which gives the area a college-town character and some educational enrichment opportunities for families.",
      highlights: [
        "Northeastern Early College High School partners with ECSU to offer college credit to high schoolers",
        "River Road Elementary has earned Title I Reward School status for exceptional achievement gains",
        "ECSU's campus is open to the public for cultural events and continuing education",
      ],
    },
    activities: [
      {
        name: "Museum of the Albemarle",
        category: "Attraction",
        description:
          "A Smithsonian-affiliated museum showcasing the cultural and natural history of North Carolina's Albemarle region, including exhibits on indigenous peoples, the Lost Colony, and maritime heritage.",
      },
      {
        name: "Pasquotank River Greenway",
        category: "Outdoors",
        description:
          "A scenic waterfront trail along the Pasquotank River connecting downtown to Mariner's Wharf Park, ideal for cycling, jogging, and watching sunsets over the water.",
      },
      {
        name: "Cypress Creek Grill",
        category: "Dining",
        description:
          "A local favorite serving Southern comfort food and fresh Outer Banks seafood in a casual waterfront setting near downtown.",
      },
      {
        name: "Outer Banks (Kitty Hawk)",
        category: "Outdoors",
        description:
          "The famous barrier island beaches of North Carolina's Outer Banks are only about 50 miles away, offering swimming, surfing, hang gliding at Jockey's Ridge, and the Wright Brothers National Memorial.",
      },
      {
        name: "Downtown Elizabeth City Shops",
        category: "Shopping",
        description:
          "A walkable collection of independent boutiques, antique stores, and specialty shops along Main and Ehringhaus Streets in the historic downtown core.",
      },
      {
        name: "Currituck Club (Kill Devil Hills area)",
        category: "Entertainment",
        description:
          "The broader Albemarle-OBX region offers several golf courses and waterfront entertainment venues within easy driving distance for a weekend outing.",
      },
    ],
    housing: {
      priceRange: "$210,000–$310,000",
      rentRange: "$1,000–$1,500/mo",
      marketContext:
        "Elizabeth City is one of the most affordable military housing markets on the East Coast. Home prices are low and inventory is generally available. The rural character keeps demand modest, making this a great market for first-time military homebuyers.",
      hotNeighborhoods: ["Knobbs Creek", "Camden County", "Historic Downtown"],
    },
  },

  "coast-guard-base-honolulu": {
    neighborhoods: [
      {
        name: "Ewa Beach",
        description:
          "A large master-planned community on Oahu's west side offering newer homes, parks, and shopping. Many military families choose Ewa Beach for its relative affordability compared to urban Honolulu. The Ho'opili development continues to add inventory.",
        commute: "30–45 min to Sand Island base",
        tags: ["Suburban", "Military community", "New construction", "Family-friendly"],
      },
      {
        name: "Pearl City",
        description:
          "A well-established residential community convenient to multiple military installations. Flat terrain, good schools, and a mix of housing types make Pearl City a top choice for Coast Guard families assigned to Honolulu.",
        commute: "20–30 min to base via H-1",
        tags: ["Suburban", "Military community", "Family-friendly"],
      },
      {
        name: "Kailua (Windward Side)",
        description:
          "One of Oahu's most desirable communities on the windward coast, Kailua boasts the best beaches on the island, a walkable small-town vibe, and a strong military community. The commute through the tunnels or Pali Highway can be lengthy during rush hour.",
        commute: "35–50 min to base",
        tags: ["Waterfront", "Walkable", "Family-friendly", "Military community"],
      },
    ],
    schools: {
      district: "Hawaii Department of Education (Honolulu District)",
      context:
        "Hawaii operates a single statewide school district. Oahu schools vary significantly by neighborhood; the Windward and Central Oahu complexes generally outperform urban Honolulu schools. Many military families use the DoDEA school on post at Schofield or private schools in Kailua.",
      highlights: [
        "Kailua High School has strong Hawaiian culture and arts programs",
        "Moanalua High School in Pearl City consistently ranks among Hawaii's top public high schools",
        "DOD Dependents Schools (DoDEA) at Pearl Harbor and Schofield Barracks serve military-connected students",
      ],
    },
    activities: [
      {
        name: "Kailua Beach Park",
        category: "Outdoors",
        description:
          "Frequently ranked among America's best beaches, Kailua Beach is a two-mile crescent of powdery white sand and calm turquoise water ideal for kayaking, paddleboarding, and swimming.",
      },
      {
        name: "Diamond Head State Monument",
        category: "Outdoors",
        description:
          "A moderate 1.6-mile round-trip hike inside the iconic volcanic crater rewards with panoramic views of Honolulu, Waikiki, and the Pacific Ocean.",
      },
      {
        name: "Leonard's Bakery",
        category: "Dining",
        description:
          "A Honolulu institution since 1952, Leonard's is famous for its malasadas—Portuguese doughnuts rolled in sugar—a Hawaii must-eat available in a rotating selection of flavors.",
      },
      {
        name: "Ala Moana Center",
        category: "Shopping",
        description:
          "The largest open-air shopping center in the world, with over 350 stores including luxury brands, Hawaii-local retailers, and a sprawling food court just minutes from Waikiki.",
      },
      {
        name: "Bishop Museum",
        category: "Attraction",
        description:
          "Hawaii's largest museum and a Smithsonian affiliate, featuring the world's largest collection of Polynesian cultural artifacts, natural history exhibits, and a digital planetarium.",
      },
      {
        name: "Zippy's Restaurants",
        category: "Dining",
        description:
          "An iconic Hawaii chain beloved by locals and military families alike, serving a uniquely Hawaiian menu of chili, saimin, plate lunches, and pastries at locations across the island.",
      },
    ],
    housing: {
      priceRange: "$750,000–$1,100,000",
      rentRange: "$2,400–$3,600/mo",
      marketContext:
        "Honolulu is one of the nation's most expensive housing markets due to limited land and high demand. BAH rates are among the highest in the military pay system to compensate. Most junior personnel rent; purchasing is more feasible for senior NCOs and officers.",
      hotNeighborhoods: ["Kailua", "Kaneohe", "Ewa Beach"],
    },
  },

  "coast-guard-base-miami-beach": {
    neighborhoods: [
      {
        name: "Palmetto Bay",
        description:
          "A quiet, family-oriented village in Miami-Dade County south of the city, known for top-rated schools, low crime, large lots, and a suburban feel that offers a reprieve from urban Miami. A favorite among Coast Guard families.",
        commute: "30–40 min to base via US-1",
        tags: ["Suburban", "Family-friendly", "Retiree-friendly"],
      },
      {
        name: "Coconut Grove",
        description:
          "Miami's oldest neighborhood offers a bohemian waterfront community with Biscayne Bay marinas, art galleries, sidewalk cafes, and lush tree canopies. More affordable than South Beach with a laid-back vibe.",
        commute: "20–25 min to base",
        tags: ["Walkable", "Waterfront", "Historic", "Urban"],
      },
      {
        name: "Homestead",
        description:
          "An affordable city at Miami-Dade's southern end near Biscayne National Park and Everglades National Park. Many military families stationed at nearby installations choose Homestead for its value and proximity to outdoor recreation.",
        commute: "45–55 min to base via Florida Turnpike",
        tags: ["Affordable", "Suburban", "Military community"],
      },
    ],
    schools: {
      district: "Miami-Dade County Public Schools",
      context:
        "The fourth-largest school district in the nation, Miami-Dade County Public Schools operates numerous magnet programs, IB schools, and specialized academies. The district is highly diverse and serves a large bilingual population.",
      highlights: [
        "MAST Academy at Virginia Key is a selective magnet school specializing in marine science and technology",
        "Coral Reef Senior High in Palmetto Bay is consistently ranked among Florida's top public high schools",
        "iPrep Academy in Miami offers a rigorous IB Middle Years Programme and Diploma Programme",
      ],
    },
    activities: [
      {
        name: "South Beach (Ocean Drive)",
        category: "Outdoors",
        description:
          "The world-famous stretch of Art Deco architecture, white sand, and Atlantic surf. Year-round warm weather draws beachgoers, and the nightlife on Ocean Drive is legendary.",
      },
      {
        name: "Joe's Stone Crab",
        category: "Dining",
        description:
          "A Miami Beach institution open since 1913, Joe's serves the definitive stone crab claw experience with mustard sauce, key lime pie, and impeccable service in season (October–May).",
      },
      {
        name: "Everglades National Park",
        category: "Outdoors",
        description:
          "The largest subtropical wilderness in the U.S. offers airboat tours, wildlife viewing (alligators, manatees, roseate spoonbills), kayaking, and camping within an hour of Miami.",
      },
      {
        name: "Wynwood Walls",
        category: "Attraction",
        description:
          "An outdoor museum of large-scale murals by internationally recognized street artists in Miami's Wynwood Arts District, surrounded by galleries, boutiques, and craft cocktail bars.",
      },
      {
        name: "Bal Harbour Shops",
        category: "Shopping",
        description:
          "One of the world's most exclusive open-air shopping centers featuring Chanel, Prada, Gucci, and dozens of luxury brands in a lush tropical garden setting.",
      },
      {
        name: "Hard Rock Stadium (Concerts & Events)",
        category: "Entertainment",
        description:
          "Home of the Miami Dolphins, this venue also hosts major concerts, Super Bowls, and the Miami Grand Prix Formula 1 race, offering year-round entertainment options.",
      },
    ],
    housing: {
      priceRange: "$480,000–$750,000",
      rentRange: "$2,400–$3,800/mo",
      marketContext:
        "Miami's housing market remains expensive and fast-moving, driven by international buyers and domestic migration. Military families often commute from more affordable suburbs in Miami-Dade's southern corridor. BAH rates are set at a level that supports renting a modest unit near the base.",
      hotNeighborhoods: ["Coconut Grove", "South Miami", "Palmetto Bay"],
    },
  },

  "coast-guard-base-new-orleans": {
    neighborhoods: [
      {
        name: "Metairie (Old Metairie)",
        description:
          "The most popular suburb for military families in the New Orleans area, Metairie offers established neighborhoods, excellent restaurants, top private and public schools, and easy I-10 access to the base.",
        commute: "15–25 min to base via I-10",
        tags: ["Suburban", "Family-friendly", "Military community"],
      },
      {
        name: "Lakeview",
        description:
          "A desirable Mid-City neighborhood adjacent to City Park and Lake Pontchartrain. Rebuilt after Katrina with newer infrastructure, Lakeview has become a sought-after area with great schools, restaurants, and a strong community.",
        commute: "15–20 min to base",
        tags: ["Suburban", "Family-friendly", "Historic"],
      },
      {
        name: "Algiers Point",
        description:
          "A historic neighborhood on the West Bank of the Mississippi River accessible by free ferry to the French Quarter. Algiers Point offers affordable Victorian shotgun houses and a quiet pace with French Quarter access.",
        commute: "20–30 min to base",
        tags: ["Historic", "Affordable", "Waterfront"],
      },
    ],
    schools: {
      district: "Jefferson Parish Public School System / Orleans Parish School Board",
      context:
        "Families in Metairie are served by Jefferson Parish Public Schools, which is generally well-regarded and stable. Orleans Parish families navigate a mix of charter schools and traditional public schools; many military families opt for Catholic or private schools given the area's strong parochial school tradition.",
      highlights: [
        "Isidore Newman School and Holy Cross are among Louisiana's top private schools in the metro",
        "Jefferson Parish's Lusher Charter School and Ben Franklin High are highly competitive magnet options",
        "Tulane and Loyola universities enrich the cultural and academic environment for military families seeking tuition assistance opportunities",
      ],
    },
    activities: [
      {
        name: "French Quarter",
        category: "Attraction",
        description:
          "America's most famous neighborhood is a 15-minute drive from base, offering iconic architecture, live jazz on every corner, world-class Creole cuisine, and a party atmosphere 365 days a year.",
      },
      {
        name: "Dooky Chase's Restaurant",
        category: "Dining",
        description:
          "A legendary New Orleans institution in Tremé serving refined Creole cuisine and fried chicken in a space adorned with African American art. One of the most historically significant restaurants in the South.",
      },
      {
        name: "City Park (New Orleans)",
        category: "Outdoors",
        description:
          "One of the largest urban parks in the country, featuring the New Orleans Museum of Art, Botanical Garden, Carousel Gardens amusement park, and 26 miles of lagoons for paddleboating and fishing.",
      },
      {
        name: "Magazine Street",
        category: "Shopping",
        description:
          "A 6-mile corridor through several Uptown neighborhoods lined with antique shops, art galleries, boutiques, and acclaimed restaurants. New Orleans' premier shopping and dining destination.",
      },
      {
        name: "Audubon Zoo",
        category: "Attraction",
        description:
          "One of the top zoos in the nation, home to white alligators, Louisiana swamp exhibit, sea lions, and a children's zoo, located in Audubon Park along the Mississippi.",
      },
      {
        name: "Frenchmen Street",
        category: "Entertainment",
        description:
          "The real New Orleans music scene. A two-block stretch in the Marigny neighborhood packs in a dozen live music venues with brass bands, jazz combos, and funk acts every night of the week.",
      },
    ],
    housing: {
      priceRange: "$280,000–$420,000",
      rentRange: "$1,400–$2,200/mo",
      marketContext:
        "New Orleans offers relatively affordable housing for a major American city, though flood insurance is a significant added cost and a critical consideration. Metairie and the West Bank offer the best value for military families. BAH covers a modest rental or supports a purchase in Jefferson Parish.",
      hotNeighborhoods: ["Old Metairie", "Lakeview", "Gentilly"],
    },
  },

  "coast-guard-base-portsmouth": {
    neighborhoods: [
      {
        name: "Olde Towne Portsmouth",
        description:
          "One of the best-preserved historic districts in the South, with Federal, Georgian, and Victorian homes dating to the Colonial era. Close to the waterfront and just minutes from base, it appeals to history lovers willing to handle older home maintenance.",
        commute: "5–10 min to base",
        tags: ["Historic", "Walkable", "Waterfront"],
      },
      {
        name: "Suffolk (Harbour View)",
        description:
          "A newer master-planned community in western Suffolk near the Nansemond River offering modern construction, community amenities, and good schools. Popular with families seeking new homes at a more manageable price point than Virginia Beach.",
        commute: "20–30 min to base via I-664",
        tags: ["Suburban", "New construction", "Family-friendly", "Military community"],
      },
      {
        name: "Chesapeake (Great Bridge)",
        description:
          "The Great Bridge area of Chesapeake offers top-rated schools, large single-family homes, and a family-friendly suburban environment that remains popular with military families from all branches.",
        commute: "25–35 min to base",
        tags: ["Suburban", "Family-friendly", "Military community"],
      },
    ],
    schools: {
      district: "Portsmouth City Public Schools / Chesapeake Public Schools",
      context:
        "Portsmouth City Schools have faced challenges but continue to improve. Many military families in the area choose to reside in Chesapeake, which operates one of the highest-performing school districts in Virginia. Suffolk Public Schools is another solid option in western communities.",
      highlights: [
        "Chesapeake's Great Bridge High School and Oscar Smith High are competitive academically and athletically",
        "Chesapeake Public Schools has multiple Governor's STEM Academy magnets",
        "Suffolk's Nansemond-Suffolk Academy is a well-regarded private K–12 option",
      ],
    },
    activities: [
      {
        name: "Portsmouth Naval Shipyard Museum",
        category: "Attraction",
        description:
          "A comprehensive museum in Olde Towne chronicling Portsmouth's 300-year naval history with ship models, uniforms, artifacts, and the story of the Civil War ironclad CSS Virginia.",
      },
      {
        name: "Virginia Beach Oceanfront",
        category: "Outdoors",
        description:
          "The Atlantic Ocean resort strip is about 30 minutes away via the Hampton Roads Bridge-Tunnel, featuring miles of public beach, the 3-mile boardwalk, and dozens of restaurants and shops.",
      },
      {
        name: "Bier Garden",
        category: "Dining",
        description:
          "Portsmouth's beloved craft beer bar and restaurant in Olde Towne with over 30 taps of local and regional beers, an extensive food menu, and a vibrant patio.",
      },
      {
        name: "Nauticus (Norfolk)",
        category: "Attraction",
        description:
          "A maritime museum and science center in downtown Norfolk anchored by the battleship USS Wisconsin (BB-64), offering interactive exhibits on naval history and ocean science.",
      },
      {
        name: "Tanger Outlets (Hampton)",
        category: "Shopping",
        description:
          "A major outlet mall in Hampton with over 100 name-brand stores at discount prices, conveniently accessible from Portsmouth via I-64.",
      },
      {
        name: "Carrie B Harbor Tours",
        category: "Entertainment",
        description:
          "A replica 19th-century riverboat offering narrated harbor tours past naval shipyards, aircraft carriers, submarines, and historic sites on the Elizabeth River.",
      },
    ],
    housing: {
      priceRange: "$260,000–$380,000",
      rentRange: "$1,400–$2,000/mo",
      marketContext:
        "The Hampton Roads region offers some of the best housing value on the East Coast for a major metro area with a robust military presence. Portsmouth itself has the lowest prices in the metro, while Chesapeake commands a premium for its schools. The market has tightened in recent years but remains affordable nationally.",
      hotNeighborhoods: ["Great Bridge (Chesapeake)", "Harbour View (Suffolk)", "Olde Towne Portsmouth"],
    },
  },

  "coast-guard-base-seattle": {
    neighborhoods: [
      {
        name: "West Seattle (Admiral District)",
        description:
          "A peninsula neighborhood with stunning views of Puget Sound, the Olympic Mountains, and downtown Seattle. The Admiral District has a walkable village feel, excellent dining, and a strong community identity.",
        commute: "15–25 min to base via West Seattle Bridge",
        tags: ["Walkable", "Waterfront", "Urban", "Family-friendly"],
      },
      {
        name: "Burien",
        description:
          "An increasingly popular suburb just south of Seattle and near Sea-Tac Airport, Burien offers more affordable housing than Seattle proper with a diverse community, excellent restaurants, and views of Puget Sound.",
        commute: "15–20 min to base via 1st Ave S",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
      {
        name: "Bremerton (Silverdale)",
        description:
          "Located across Puget Sound on the Kitsap Peninsula, Silverdale offers suburban housing at significantly lower prices than Seattle. The ferry to downtown Seattle takes 60 minutes, and JBLM families often choose Kitsap Peninsula as well.",
        commute: "60–75 min via Bremerton ferry + drive",
        tags: ["Suburban", "Military community", "Affordable", "Waterfront"],
      },
    ],
    schools: {
      district: "Seattle Public Schools / Highline Public Schools",
      context:
        "West Seattle falls under Seattle Public Schools, which offers neighborhood schools with strong programs and several well-regarded magnet options. Burien is served by Highline Public Schools, which has invested heavily in college and career readiness programs. Bremerton falls under Central Kitsap or Bremerton School Districts, both solid.",
      highlights: [
        "Chief Sealth International High School in West Seattle offers an internationally focused curriculum with IB courses",
        "Highline Public Schools has strong CTE (Career and Technical Education) pathways",
        "Central Kitsap School District has consistent above-average academic ratings for the Silverdale area",
      ],
    },
    activities: [
      {
        name: "Alki Beach Park",
        category: "Outdoors",
        description:
          "A 2.5-mile stretch of sandy beach in West Seattle where Seattle was first settled in 1851, offering views of the Olympic Mountains, beach volleyball courts, and a beloved paved promenade.",
      },
      {
        name: "Pike Place Market",
        category: "Attraction",
        description:
          "One of America's oldest continuously operating public farmers' markets, home to the famous fish-throwers, dozens of local vendors, flower stalls, and the original Starbucks store.",
      },
      {
        name: "Westward Restaurant",
        category: "Dining",
        description:
          "A Pacific Northwest waterfront dining gem on Lake Union serving oysters, clams, wood-fired fish, and Greek-inspired dishes with spectacular views of the Seattle skyline.",
      },
      {
        name: "REI Flagship Store",
        category: "Shopping",
        description:
          "REI's massive flagship in Capitol Hill is a destination unto itself, with a climbing wall, bike shop, extensive gear rental, and expert staff ready to outfit any outdoor adventure.",
      },
      {
        name: "Olympic Sculpture Park (SAM)",
        category: "Attraction",
        description:
          "A free 9-acre outdoor art park on the Seattle waterfront managed by the Seattle Art Museum, featuring major sculptures by Calder, Serra, and Rauschenberg with views of Elliott Bay and the Olympics.",
      },
      {
        name: "Mariners / Seahawks Games",
        category: "Entertainment",
        description:
          "T-Mobile Park (baseball) and Lumen Field (football) are both in the SODO district, easily accessible from the base. Attending a Seahawks or Mariners game is a rite of passage for Seattle-area military families.",
      },
    ],
    housing: {
      priceRange: "$600,000–$900,000",
      rentRange: "$2,200–$3,400/mo",
      marketContext:
        "Seattle is one of the most expensive housing markets in the country, driven by the tech industry. BAH reflects the high cost but purchasing in Seattle proper is difficult for most E-6 and below. Burien, Renton, and the Kitsap Peninsula offer significantly better value. Renting is the norm for most junior military personnel.",
      hotNeighborhoods: ["West Seattle", "Burien", "Renton"],
    },
  },

  // ─── JOINT BASES ─────────────────────────────────────────────────────────────

  "joint-base-anacostia-bolling": {
    neighborhoods: [
      {
        name: "Capitol Hill (SE)",
        description:
          "One of Washington's most iconic neighborhoods, featuring historic row houses, the Eastern Market, and proximity to Capitol Hill and the National Mall. Living here puts military families in the heart of American history.",
        commute: "10–20 min to base via Suitland Pkwy",
        tags: ["Historic", "Urban", "Walkable"],
      },
      {
        name: "National Harbor (Oxon Hill, MD)",
        description:
          "A modern waterfront development across the Potomac in Maryland with luxury apartments, hotels, the MGM National Harbor casino-resort, and easy access to I-295 for base commuting.",
        commute: "10–15 min to base",
        tags: ["Waterfront", "Urban", "New construction", "Nightlife"],
      },
      {
        name: "Clinton, MD",
        description:
          "An affordable Prince George's County suburb popular with military families from Joint Base Andrews and JBAB. Single-family homes, good schools, and convenient access to both bases make Clinton a practical choice.",
        commute: "20–30 min to base",
        tags: ["Suburban", "Military community", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "DC Public Schools / Prince George's County Public Schools",
      context:
        "DC Public Schools has undergone significant reform and improvement in recent years. Families in Maryland suburbs fall under Prince George's County, which operates several IB and STEM magnet programs. The region's proximity to major universities also creates many enrichment opportunities.",
      highlights: [
        "DC's McKinley Technology High School and School Without Walls are highly regarded selective magnets",
        "Prince George's County's Eleanor Roosevelt High School has a nationally recognized STEM program",
        "The DoDEA's Washington area schools system provides additional options for military-connected students",
      ],
    },
    activities: [
      {
        name: "National Mall & Monuments",
        category: "Attraction",
        description:
          "America's front lawn runs from the Lincoln Memorial to the Capitol, flanked by 19 free Smithsonian museums. No military assignment puts you closer to the nation's cultural treasures.",
      },
      {
        name: "The Wharf (DC)",
        category: "Dining",
        description:
          "A mile-long waterfront development on the SW waterfront featuring dozens of restaurants, live music venues, a fishing pier, and water taxis to National Harbor.",
      },
      {
        name: "Eastern Market",
        category: "Shopping",
        description:
          "A Capitol Hill institution since 1873, with an indoor market hall open daily, a massive weekend flea market, and farmers' market featuring local produce and handmade goods.",
      },
      {
        name: "Nationals Park / Capital One Arena",
        category: "Entertainment",
        description:
          "Catch the Washington Nationals (baseball), Washington Capitals (NHL), or Washington Wizards (NBA) within a short drive or Metro ride of the base.",
      },
      {
        name: "Kenilworth Aquatic Gardens",
        category: "Outdoors",
        description:
          "A unique NPS unit in DC's Anacostia neighborhood featuring the only national park dedicated to water plants, with stunning lotus and water lily blooms in summer.",
      },
      {
        name: "Georgetown Waterfront",
        category: "Entertainment",
        description:
          "Georgetown's waterfront along the Potomac features excellent dining, boat rentals on the C&O Canal, and scenic views across to Virginia. A classic DC outing.",
      },
    ],
    housing: {
      priceRange: "$500,000–$850,000",
      rentRange: "$2,400–$4,000/mo",
      marketContext:
        "The Washington DC metro is one of the nation's most expensive markets, with prices driven by federal employment and the tech sector. BAH rates for the DC area are among the highest in the military system. Most junior personnel rent in Maryland suburbs to manage costs.",
      hotNeighborhoods: ["Capitol Hill SE", "National Harbor MD", "Fort Washington MD"],
    },
  },

  "joint-base-andrews": {
    neighborhoods: [
      {
        name: "Clinton, MD",
        description:
          "The closest major residential community to Andrews' main gate, Clinton offers affordable single-family homes, a large military population, and easy access to both Andrews and JBAB via Suitland Parkway.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Military community", "Affordable", "Family-friendly"],
      },
      {
        name: "Upper Marlboro",
        description:
          "The Prince George's County seat offers larger lots, newer construction in areas like Marlton, and a quieter rural character while remaining within commuting distance of Andrews. Good school options in the county.",
        commute: "20–30 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "Waldorf, MD",
        description:
          "A large suburban community in Charles County about 20 miles south of Andrews offering excellent value, strong schools, newer retail development, and a large military community from Andrews, Patuxent River NAS, and Indian Head.",
        commute: "25–35 min to main gate",
        tags: ["Suburban", "Military community", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Prince George's County Public Schools / Charles County Public Schools",
      context:
        "Prince George's County Public Schools is a large, diverse district with strong magnet programs for motivated students. Charles County Public Schools serves Waldorf families and has a solid reputation, particularly at the middle and high school level.",
      highlights: [
        "Eleanor Roosevelt High School's Science and Technology Program is nationally ranked",
        "Charles County's Thomas Stone and La Plata High Schools have competitive academic programs",
        "The county operates a robust JROTC network across multiple high schools serving military families",
      ],
    },
    activities: [
      {
        name: "Six Flags America",
        category: "Entertainment",
        description:
          "Maryland's largest theme park in Upper Marlboro offers roller coasters, water park access, and seasonal events including Fright Fest and Holiday in the Park, just 15 minutes from base.",
      },
      {
        name: "National Harbor",
        category: "Shopping",
        description:
          "A premium waterfront shopping and entertainment destination on the Potomac featuring the MGM Grand, dozens of restaurants, the iconic Capital Wheel observation wheel, and The Gaylord National Resort.",
      },
      {
        name: "Old Hickory Restaurant (Gaylord National)",
        category: "Dining",
        description:
          "The premier steakhouse at the Gaylord National Resort serving USDA prime cuts with floor-to-ceiling views of the Potomac River atrium—a popular special-occasion spot for military families.",
      },
      {
        name: "Cosca Regional Park",
        category: "Outdoors",
        description:
          "A 700-acre Prince George's County park in Clinton with a lake for fishing, boating and fishing piers, nature center, campground, and miles of hiking trails.",
      },
      {
        name: "National Museum of the United States Air Force (day trip)",
        category: "Attraction",
        description:
          "While a day trip to Dayton, OH, the free Air Force Museum near Wright-Patterson is worth noting for Andrews families—the world's largest air and space museum with 350+ aircraft across four hangars.",
      },
      {
        name: "Woodmore Towne Centre",
        category: "Shopping",
        description:
          "A large outdoor lifestyle shopping center in Glenarden with Wegmans, Costco, Target, and dozens of dining options serving the Prince George's County military community.",
      },
    ],
    housing: {
      priceRange: "$380,000–$560,000",
      rentRange: "$1,800–$2,800/mo",
      marketContext:
        "Prince George's County is significantly more affordable than comparable DC or Northern Virginia communities. The military presence in Clinton and the county keeps demand steady. Waldorf in Charles County offers even better value and newer construction. BAH for the DC/Andrews area is generous.",
      hotNeighborhoods: ["Clinton", "Waldorf", "Bowie"],
    },
  },

  "joint-base-cape-cod": {
    neighborhoods: [
      {
        name: "Bourne (Buzzards Bay)",
        description:
          "The town of Bourne straddles the Cape Cod Canal and is the closest community to JBCC. Buzzards Bay village has affordable year-round rentals and a working waterfront character distinct from the tourist-heavy outer Cape.",
        commute: "5–15 min to main gate",
        tags: ["Waterfront", "Affordable", "Military community"],
      },
      {
        name: "Sandwich",
        description:
          "The oldest town on Cape Cod, Sandwich offers charming historic architecture, the Heritage Museums & Gardens, Shawme-Crowell State Forest, and solid schools in the Cape Cod Regional Tech and Sandwich school systems.",
        commute: "15–20 min to main gate",
        tags: ["Historic", "Family-friendly", "Suburban"],
      },
      {
        name: "Falmouth",
        description:
          "A larger Cape Cod town with multiple villages, Falmouth Health Department, the Shining Sea Bikeway trail, Island ferry service to Martha's Vineyard, and a vibrant year-round community of families and retirees.",
        commute: "25–35 min to main gate",
        tags: ["Suburban", "Waterfront", "Family-friendly", "Retiree-friendly"],
      },
    ],
    schools: {
      district: "Bourne Public Schools / Sandwich Public Schools",
      context:
        "Cape Cod school districts are small, community-focused, and benefit from the area's relatively high property values. Sandwich and Bourne school systems consistently perform above state averages. Cape Cod Regional Technical High School serves vocational and technical students from multiple towns.",
      highlights: [
        "Sandwich High School has strong academics and a beautiful campus in a historic setting",
        "Bourne High School has a robust athletic program and improving academic scores",
        "Cape Cod Regional Technical High School offers highly competitive trade programs in boatbuilding, culinary arts, and marine technology",
      ],
    },
    activities: [
      {
        name: "Cape Cod National Seashore",
        category: "Outdoors",
        description:
          "A 40-mile stretch of pristine Atlantic Ocean beach protected by the National Park Service, with dramatic dunes, glacially formed kettle ponds, and historic lighthouses along the Outer Cape.",
      },
      {
        name: "Seafood Sam's (Sandwich)",
        category: "Dining",
        description:
          "A beloved Cape institution serving enormous portions of fried clams, lobster rolls, and chowder at unbeatable prices near the Cape Cod Canal.",
      },
      {
        name: "Heritage Museums & Gardens",
        category: "Attraction",
        description:
          "A 100-acre Sandwich complex featuring a carousel, antique automobile collection, rhododendron gardens, folk art, and rotating art exhibitions—one of the Cape's premier cultural destinations.",
      },
      {
        name: "Wellfleet OysterFest",
        category: "Entertainment",
        description:
          "An iconic annual fall festival in Wellfleet celebrating the Cape's oyster farming heritage with tastings, music, arts, and family activities drawing crowds from across New England.",
      },
      {
        name: "Mashpee Commons",
        category: "Shopping",
        description:
          "Cape Cod's premier outdoor shopping village in Mashpee with national retailers, local boutiques, and numerous dining options in a walkable New England village-style layout.",
      },
      {
        name: "Shining Sea Bikeway",
        category: "Outdoors",
        description:
          "A 10.7-mile paved rail trail through Falmouth connecting North Falmouth to Woods Hole with ocean views, beach access, and connections to ferry service to Martha's Vineyard.",
      },
    ],
    housing: {
      priceRange: "$450,000–$680,000",
      rentRange: "$1,800–$2,800/mo",
      marketContext:
        "Cape Cod's housing market is expensive and tight year-round, exacerbated by a large vacation rental inventory that limits long-term rental supply. Bourne and Sandwich are the most practical choices for military families. Prices have risen significantly since 2020.",
      hotNeighborhoods: ["Sandwich", "Buzzards Bay (Bourne)", "East Falmouth"],
    },
  },

  "joint-base-charleston": {
    neighborhoods: [
      {
        name: "Goose Creek",
        description:
          "The largest city in Berkeley County and the top choice for military families at JB Charleston. Goose Creek offers affordable newer subdivisions, excellent Berkeley County schools, and a large military community from the base, NSC Charleston, and Naval Weapons Station.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Military community", "Affordable", "Family-friendly"],
      },
      {
        name: "Hanahan",
        description:
          "A small city bordering the base on three sides, Hanahan offers the absolute shortest commutes and a tight-knit community. Home values are competitive and the Charleston County School District serves residents.",
        commute: "5–10 min to main gate",
        tags: ["Suburban", "Military community", "Family-friendly"],
      },
      {
        name: "Summerville",
        description:
          "Known as 'The Flower Town in the Pines,' Summerville is a rapidly growing suburb about 25 miles northwest of Charleston offering new construction communities, excellent Dorchester District 2 schools, and a charming historic downtown.",
        commute: "30–40 min to main gate via I-26",
        tags: ["Suburban", "Family-friendly", "New construction", "Historic"],
      },
    ],
    schools: {
      district: "Berkeley County School District / Dorchester School District 2",
      context:
        "Berkeley County School District serves Goose Creek and Hanahan and is known for its growth and improving academics. Dorchester School District 2 in Summerville is consistently rated one of the top school districts in South Carolina and is a major draw for military families.",
      highlights: [
        "Dorchester District 2's Summerville High School and Cane Bay High School have strong academic and athletic programs",
        "Berkeley County's Philip Simmons High School is a modern facility with excellent STEM programming",
        "Hanahan Middle and High School benefit from the district's commitment to small class sizes",
      ],
    },
    activities: [
      {
        name: "Historic Downtown Charleston",
        category: "Attraction",
        description:
          "One of America's best-preserved historic cities, with antebellum architecture, Rainbow Row, the Charleston City Market, Fort Sumter, and exceptional dining all within 25 minutes of base.",
      },
      {
        name: "Husk Charleston",
        category: "Dining",
        description:
          "One of the most acclaimed restaurants in the South, Husk serves locally sourced, ingredient-driven Southern cuisine in a stunning 1893 Victorian mansion in downtown Charleston.",
      },
      {
        name: "Folly Beach",
        category: "Outdoors",
        description:
          "Charleston's most beloved public beach, known for its laid-back surfer vibe, the iconic lighthouse, and excellent seafood shacks lining Center Street.",
      },
      {
        name: "Charles Towne Landing State Historic Site",
        category: "Attraction",
        description:
          "The site of the first permanent European settlement in South Carolina, featuring a living history area, animal forest, replica colonial vessel, and miles of scenic walking trails.",
      },
      {
        name: "Tanger Outlets Charleston",
        category: "Shopping",
        description:
          "A major outlet mall in North Charleston with over 80 stores offering discounts on national brands, conveniently located near I-26.",
      },
      {
        name: "House of Blues Charleston",
        category: "Entertainment",
        description:
          "A premier live music and dining venue in the Historic District featuring national touring acts across genres, the iconic Gospel Brunch, and memorably decorated interiors.",
      },
    ],
    housing: {
      priceRange: "$310,000–$480,000",
      rentRange: "$1,600–$2,400/mo",
      marketContext:
        "The Charleston metro has seen significant appreciation since 2020 driven by migration and job growth. Goose Creek and Hanahan remain the most affordable options for military families. Summerville commands higher prices but the school district premium is real. BAH aligns reasonably with the local rental market.",
      hotNeighborhoods: ["Goose Creek", "Summerville", "Moncks Corner"],
    },
  },

  "joint-base-elmendorf-richardson": {
    neighborhoods: [
      {
        name: "Government Hill / Fairview",
        description:
          "Established Anchorage neighborhoods adjacent to the base offering quick commutes and a mix of mid-century homes and newer infill construction. Fairview has improved significantly in recent years and provides affordable access to downtown.",
        commute: "5–10 min to main gate",
        tags: ["Urban", "Affordable", "Military community"],
      },
      {
        name: "Eagle River",
        description:
          "A scenic bedroom community 12 miles northeast of Anchorage in the Chugach Mountains foothills, Eagle River is a top choice for military families seeking a quieter, outdoor-oriented lifestyle with good schools and more space.",
        commute: "20–30 min to main gate via Glenn Hwy",
        tags: ["Suburban", "Family-friendly", "Military community", "Rural"],
      },
      {
        name: "Wasilla / Palmer (Mat-Su Valley)",
        description:
          "The Matanuska-Susitna Valley offers the most affordable housing in the Anchorage metro and an abundance of wilderness access, at the cost of a longer commute. A popular choice for families prioritizing space, privacy, and Alaska lifestyle.",
        commute: "45–60 min to main gate via Glenn Hwy",
        tags: ["Rural", "Affordable", "Family-friendly", "Military community"],
      },
    ],
    schools: {
      district: "Anchorage School District / Matanuska-Susitna Borough School District",
      context:
        "The Anchorage School District is the largest in Alaska and offers a diverse range of programs. Eagle River schools within ASD are generally well-regarded. The Mat-Su Borough School District serves Wasilla and Palmer and has a strong reputation for academics and athletics.",
      highlights: [
        "Service High School in Anchorage has an outstanding AP program and competitive athletics",
        "Eagle River High School consistently earns high marks and has a strong community feel",
        "Mat-Su Valley schools benefit from the borough's investment in educational facilities and technology",
      ],
    },
    activities: [
      {
        name: "Chugach State Park",
        category: "Outdoors",
        description:
          "Nearly 500,000 acres of wilderness bordering Anchorage's eastern edge, with hundreds of miles of hiking trails, glaciers, wildlife viewing (moose, bears, Dall sheep), and backcountry skiing.",
      },
      {
        name: "Snow City Cafe",
        category: "Dining",
        description:
          "Anchorage's most popular brunch spot in downtown, featuring creative egg dishes, housemade pastries, and Alaskan-themed menu items with a notorious wait on weekends—worth every minute.",
      },
      {
        name: "Anchorage Museum",
        category: "Attraction",
        description:
          "A world-class museum in downtown Anchorage exploring Alaska's art, history, science, and indigenous cultures, with a rotating exhibit program that rivals any Lower 48 institution.",
      },
      {
        name: "Alyeska Resort (Girdwood)",
        category: "Outdoors",
        description:
          "Alaska's premier ski resort, 40 minutes from base in the Chugach Mountains, offers 2,500 vertical feet of skiing and snowboarding, summer tram rides, and the iconic Bake Shop restaurant at the base.",
      },
      {
        name: "5th Avenue Mall (Anchorage)",
        category: "Shopping",
        description:
          "The primary indoor shopping mall in Anchorage with major national retailers, a food court, and an anchor Nordstrom—the main shopping destination for the entire south-central Alaska region.",
      },
      {
        name: "Humpy's Great Alaskan Alehouse",
        category: "Entertainment",
        description:
          "Anchorage's most famous bar and live music venue, with over 50 draft beers, a legendary halibut taco, and live local music nightly. A mandatory stop for anyone stationed in Alaska.",
      },
    ],
    housing: {
      priceRange: "$360,000–$520,000",
      rentRange: "$1,600–$2,400/mo",
      marketContext:
        "Anchorage's housing market is stable and moderately priced given Alaska's economic conditions. BAH reflects the high cost of goods and services in the state. Eagle River is the sweet spot for military families—good schools, reasonable prices, and manageable commutes. The Mat-Su Valley offers significantly lower prices for those willing to drive.",
      hotNeighborhoods: ["Eagle River", "South Anchorage", "Wasilla"],
    },
  },

  "joint-base-langley-eustis": {
    neighborhoods: [
      {
        name: "Hampton (Buckroe Beach / Wythe)",
        description:
          "Hampton is home to many military families from Langley and Eustis. Buckroe Beach neighborhood offers beachside living on the Chesapeake Bay, while Wythe has established single-family homes at affordable prices.",
        commute: "10–20 min to Langley gate",
        tags: ["Waterfront", "Military community", "Affordable", "Family-friendly"],
      },
      {
        name: "York County (Grafton / Tabb)",
        description:
          "York County consistently ranks among Virginia's best school districts, and the Grafton and Tabb areas offer newer subdivisions, quiet suburban streets, and easy access to I-64 for commuting to both posts.",
        commute: "20–30 min to Langley; 15–20 min to Eustis",
        tags: ["Suburban", "Family-friendly", "Military community", "New construction"],
      },
      {
        name: "Newport News (Denbigh)",
        description:
          "Denbigh is Newport News' largest residential district, with affordable housing, a dense military population, and proximity to Patrick Henry Mall and I-64. The Newport News-Williamsburg International Airport is also close.",
        commute: "15–25 min to Eustis; 25–35 min to Langley",
        tags: ["Suburban", "Military community", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Hampton City Schools / York County School Division",
      context:
        "York County School Division is consistently one of Virginia's top-rated systems and a primary reason many military families choose the county despite the slightly longer commute. Hampton City Schools serves the majority of on-base communities and has strong specialty programs.",
      highlights: [
        "York High School and Tabb High School are among the top-performing high schools in the Hampton Roads metro",
        "Hampton's Kecoughtan High School has an excellent aerospace magnet aligned with the Langley mission",
        "York County offers a Governor's STEM Academy at Tabb Middle School",
      ],
    },
    activities: [
      {
        name: "Virginia Air and Space Science Center",
        category: "Attraction",
        description:
          "The official visitor center for NASA Langley Research Center, featuring a space shuttle Enterprise trainer, IMAX theater, NASA artifacts, and hands-on STEM exhibits in downtown Hampton.",
      },
      {
        name: "Colonial Williamsburg",
        category: "Attraction",
        description:
          "The world's largest living history museum is 20 minutes away, recreating 18th-century Virginia with costumed interpreters, historic trades, taverns, and three world-class Colonial Williamsburg Hotels.",
      },
      {
        name: "Watermen's",
        category: "Dining",
        description:
          "A waterfront seafood staple in Hampton serving classic Chesapeake Bay fare—steamed blue crabs, fried oysters, clam chowder—with views of the Hampton Roads harbor.",
      },
      {
        name: "First Landing State Park",
        category: "Outdoors",
        description:
          "Virginia Beach's premier state park with 19 miles of trails through cypress swamps and Spanish moss, plus Chesapeake Bay beach access and campgrounds—a 30-minute drive from Langley.",
      },
      {
        name: "Peninsula Town Center",
        category: "Shopping",
        description:
          "Hampton's premier outdoor lifestyle center with major retailers, a Regal Cinema, and dozens of restaurants in a walkable open-air format.",
      },
      {
        name: "Hampton Roads Convention Center (Events)",
        category: "Entertainment",
        description:
          "Hampton's convention and entertainment complex hosts major concerts, sporting events, consumer shows, and community events year-round.",
      },
    ],
    housing: {
      priceRange: "$270,000–$420,000",
      rentRange: "$1,400–$2,100/mo",
      marketContext:
        "The Hampton Roads market offers excellent value for the East Coast. Hampton is the most affordable option; York County commands a premium for its schools. The military presence is enormous (multiple major installations), which creates a robust rental market. Post-pandemic price increases have moderated.",
      hotNeighborhoods: ["Tabb (York County)", "Buckroe Beach (Hampton)", "Denbigh (Newport News)"],
    },
  },

  "joint-base-lewis-mcchord": {
    neighborhoods: [
      {
        name: "Lakewood",
        description:
          "Directly adjacent to JBLM's main gate, Lakewood is Washington's largest city by area and home to the largest concentration of military families in the Pacific Northwest. Suburban neighborhoods range from affordable older homes to newer subdivisions near American Lake.",
        commute: "5–15 min to main gate",
        tags: ["Suburban", "Military community", "Affordable", "Family-friendly"],
      },
      {
        name: "Puyallup (South Hill)",
        description:
          "South Hill is a rapidly growing unincorporated community in Pierce County offering newer homes, excellent Puyallup School District schools, and proximity to shopping along Meridian Ave. Popular with senior NCOs and officers.",
        commute: "20–30 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction", "Military community"],
      },
      {
        name: "DuPont",
        description:
          "A small planned community near the base's southern gate with newer homes, low crime, and a sense of small-town community rare in the Tacoma metro. NW Trek Wildlife Park is a short drive away.",
        commute: "10–15 min to south gate",
        tags: ["Suburban", "Military community", "Family-friendly", "New construction"],
      },
    ],
    schools: {
      district: "Clover Park School District / Puyallup School District",
      context:
        "Clover Park School District serves Lakewood and has a large military enrollment. Puyallup School District, serving South Hill, has a strong academic reputation and is one of the most popular districts for military families in the JBLM area. DuPont students typically attend Steilacoom Historical School District.",
      highlights: [
        "Puyallup School District's Rogers and Emerald Ridge High Schools are among Pierce County's top academic performers",
        "Steilacoom High School (serving DuPont) has a strong JROTC program and above-average academic scores",
        "Clover Park's Lakes High School offers advanced coursework and a comprehensive athletic program",
      ],
    },
    activities: [
      {
        name: "Mount Rainier National Park",
        category: "Outdoors",
        description:
          "An hour from the base, the 14,411-foot volcano and surrounding national park offer world-class hiking, wildflower meadows, glaciers, and winter snowshoeing—a top draw for every family stationed at JBLM.",
      },
      {
        name: "Harmon Brewing Company",
        category: "Dining",
        description:
          "Tacoma's original craft brewery, open since 1997, with a downtown taproom serving flagship IPAs, lagers, and seasonal ales alongside elevated pub fare.",
      },
      {
        name: "Museum of Glass (Tacoma)",
        category: "Attraction",
        description:
          "A world-class museum dedicated to glass art, anchored by a cone-shaped hot shop where artists work live. The iconic Chihuly Bridge of Glass connects it to downtown's waterfront.",
      },
      {
        name: "Point Defiance Park",
        category: "Outdoors",
        description:
          "One of the largest urban parks in the nation at 760 acres, Point Defiance offers old-growth forests, 5 miles of waterfront trails, Fort Nisqually living history, a zoo and aquarium, and Puget Sound beaches.",
      },
      {
        name: "Tacoma Mall",
        category: "Shopping",
        description:
          "The largest enclosed shopping mall in Washington state outside Seattle, with major anchors, a wide dining selection, and easy access from I-5 near the base.",
      },
      {
        name: "Emerald Queen Casino",
        category: "Entertainment",
        description:
          "A large tribal casino in Fife with gaming, live entertainment, multiple restaurants, and hotel accommodations, popular for special events among the JBLM community.",
      },
    ],
    housing: {
      priceRange: "$380,000–$560,000",
      rentRange: "$1,800–$2,600/mo",
      marketContext:
        "Pierce County offers dramatically better housing value than the Seattle metro an hour north. Lakewood is the most affordable option; South Hill/Puyallup commands a premium for newer homes and better schools. The JBLM military community is the largest in the Pacific Northwest and creates consistent demand. BAH is well-calibrated to the local market.",
      hotNeighborhoods: ["DuPont", "South Hill (Puyallup)", "University Place"],
    },
  },

  "joint-base-mcguire-dix-lakehurst": {
    neighborhoods: [
      {
        name: "Wrightstown / New Hanover Township",
        description:
          "The communities immediately surrounding the base offer the shortest commutes. Wrightstown is a small borough with some commercial services; New Hanover Township has quiet residential streets popular with military families.",
        commute: "5–10 min to main gate",
        tags: ["Suburban", "Military community", "Affordable"],
      },
      {
        name: "Bordentown",
        description:
          "A charming small city on the Delaware River with a walkable historic district, excellent restaurants, and a revitalized arts scene. About 15 miles from the base, Bordentown offers more character than typical suburbs.",
        commute: "20–25 min to main gate",
        tags: ["Historic", "Walkable", "Family-friendly", "Waterfront"],
      },
      {
        name: "Mount Holly",
        description:
          "Burlington County's historic seat offers a quaint downtown with independent shops and restaurants, affordable Victorian homes, and access to the South Jersey outdoor recreation network.",
        commute: "15–20 min to main gate",
        tags: ["Historic", "Affordable", "Walkable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Burlington City School District / Pemberton Township Schools",
      context:
        "The base draws from Burlington County's diverse school options. Pemberton Township serves families closest to the base with an active military-focused community. Many families choose private schools or move to towns with higher-rated systems like Bordentown Regional or Moorestown.",
      highlights: [
        "Bordentown Regional High School has strong academics and a notably active community",
        "Burlington County Institute of Technology (BCIT) offers exceptional vocational and technical education",
        "Moorestown Township Schools, about 25 miles away, is consistently one of New Jersey's top-rated districts",
      ],
    },
    activities: [
      {
        name: "Six Flags Great Adventure",
        category: "Entertainment",
        description:
          "New Jersey's premier theme park is just 20 minutes from base in Jackson, featuring Kingda Ka (world's tallest coaster), Safari Off Road Adventure, and Hurricane Harbor water park.",
      },
      {
        name: "Grounds for Sculpture",
        category: "Attraction",
        description:
          "A world-class 42-acre sculpture park in Hamilton, NJ, combining over 270 sculptures by major artists with elaborate landscaping and the Rat's restaurant—one of New Jersey's finest.",
      },
      {
        name: "Lahiere's Restaurant (Princeton)",
        category: "Dining",
        description:
          "An institution in historic Princeton, serving refined continental cuisine near the Ivy League campus and Princeton's excellent shopping, museums, and gallery district.",
      },
      {
        name: "Jersey Shore (Point Pleasant Beach)",
        category: "Outdoors",
        description:
          "The classic Jersey Shore boardwalk at Point Pleasant is about 45 minutes from base, offering Atlantic Ocean swimming, Jenkinsons Amusements, arcades, and fresh seafood.",
      },
      {
        name: "Crossings at Bellevue Shopping Center",
        category: "Shopping",
        description:
          "A large outlet and retail complex in Swedesboro, NJ, with dozens of brand-name stores at discount prices, easily accessible from the base.",
      },
      {
        name: "River Line Trail (Delaware River)",
        category: "Outdoors",
        description:
          "A multi-use trail following the Delaware River from Trenton to Burlington, passing historic canal locks, riverside parks, and charming small towns ideal for cycling and kayaking.",
      },
    ],
    housing: {
      priceRange: "$310,000–$460,000",
      rentRange: "$1,600–$2,400/mo",
      marketContext:
        "South Jersey's housing market is more affordable than the Philadelphia suburbs across the river or the New York metro corridor to the north. Military families find good value in Burlington and Ocean counties. New Jersey's property taxes are famously high and must be factored into any purchase decision.",
      hotNeighborhoods: ["Bordentown", "Hainesport", "Moorestown"],
    },
  },

  "joint-base-myer-henderson-hall": {
    neighborhoods: [
      {
        name: "Ballston / Arlington (N. Arlington)",
        description:
          "Northern Arlington's walkable urban neighborhoods—Ballston, Clarendon, Rosslyn—offer Metro access, excellent dining, and a vibrant social scene. Premium pricing is offset by proximity to the Pentagon, JBM-HH, and the DC core.",
        commute: "10–15 min to main gate",
        tags: ["Urban", "Walkable", "Nightlife"],
      },
      {
        name: "South Arlington (Shirlington / Douglas Park)",
        description:
          "South Arlington's neighborhoods offer somewhat more affordable homes than the north while retaining excellent Metro access, the Shirlington Village dining district, and Four Mile Run Trail.",
        commute: "10–20 min to main gate",
        tags: ["Urban", "Walkable", "Affordable"],
      },
      {
        name: "Alexandria (Old Town / Del Ray)",
        description:
          "Old Town Alexandria is one of the most coveted communities in the DC metro, with cobblestone streets, King Street dining, and waterfront access on the Potomac. Del Ray offers a quieter, more neighborhood-centric alternative at slightly lower prices.",
        commute: "15–20 min to main gate",
        tags: ["Historic", "Walkable", "Waterfront", "Urban"],
      },
    ],
    schools: {
      district: "Arlington Public Schools / Alexandria City Public Schools",
      context:
        "Arlington Public Schools is one of Virginia's highest-performing districts and is nationally recognized for innovation, diversity, and academic rigor. Alexandria City Public Schools has undergone significant improvements and operates several IB schools. Both systems benefit from high property taxes that fund exceptional programming.",
      highlights: [
        "Washington-Liberty and Yorktown High Schools in Arlington are among the top public high schools in Virginia",
        "Arlington's H-B Woodlawn secondary is one of the most progressive and academically acclaimed public schools in the country",
        "Alexandria's T.C. Williams (now Alexandria City High School) has strong IB, STEM, and arts programs",
      ],
    },
    activities: [
      {
        name: "Arlington National Cemetery",
        category: "Attraction",
        description:
          "The nation's most hallowed military cemetery, final resting place for over 400,000 veterans and service members, with hourly Tomb of the Unknown Soldier ceremonies, memorials to JFK and the Challenger crew, and daily guided tours.",
      },
      {
        name: "The Capital Grille (Pentagon City)",
        category: "Dining",
        description:
          "An upscale steakhouse near Fashion Centre at Pentagon City favored by senior military and civilian leadership for special occasions, serving dry-aged steaks and an outstanding wine program.",
      },
      {
        name: "Four Mile Run / W&OD Trail",
        category: "Outdoors",
        description:
          "The 45-mile Washington & Old Dominion Trail through Arlington and Northern Virginia is one of the most heavily used rail trails in the eastern US, connecting JBM-HH neighborhoods to the Virginia countryside.",
      },
      {
        name: "Kennedy Center for the Performing Arts",
        category: "Entertainment",
        description:
          "America's national cultural center across the Potomac presents opera, ballet, symphony, jazz, and theater year-round, with free Millennium Stage performances daily at 6 PM.",
      },
      {
        name: "Fashion Centre at Pentagon City",
        category: "Shopping",
        description:
          "A premier mall adjacent to the Pentagon Metro station with Nordstrom, Macy's, and hundreds of retailers, making it the most convenient major mall for JBM-HH families.",
      },
      {
        name: "Del Ray Farmers' Market",
        category: "Shopping",
        description:
          "One of the most popular weekly farmers' markets in Northern Virginia, held Saturdays on Mt. Vernon Avenue in Alexandria's Del Ray neighborhood with local produce, artisan goods, and food vendors.",
      },
    ],
    housing: {
      priceRange: "$700,000–$1,200,000",
      rentRange: "$2,800–$4,500/mo",
      marketContext:
        "Arlington and Alexandria are among the most expensive housing markets in the Mid-Atlantic. BAH for the DC area is generous but still difficult for junior personnel to afford Arlington or Old Town. Many E-6 and below live further out in Fairfax, Prince William County, or Maryland. Senior personnel and officers find the convenience worth the premium.",
      hotNeighborhoods: ["Clarendon", "Del Ray (Alexandria)", "Crystal City"],
    },
  },

  "joint-base-pearl-harbor-hickam": {
    neighborhoods: [
      {
        name: "Pearl City / Aiea",
        description:
          "Established suburban communities adjacent to the base offering the best combination of commute time, school quality, and (relative) housing affordability on Oahu. Pearl City's extensive retail corridor along Kamehameha Highway adds convenience.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Military community", "Family-friendly"],
      },
      {
        name: "Ewa Beach / Kapolei",
        description:
          "Oahu's fastest-growing region on the west side, Ewa Beach and Kapolei offer newer master-planned communities, the Kapolei Commons shopping district, and more affordable homes than the urban core. The Kapolei-area H-1 interchange can slow commutes during peak hours.",
        commute: "20–35 min to main gate",
        tags: ["Suburban", "Military community", "New construction", "Family-friendly"],
      },
      {
        name: "Kailua (Windward Oahu)",
        description:
          "A picture-perfect beach town on the island's windward coast, Kailua is beloved by military families for its outdoor recreation, walkable village, Lanikai Beach, and top-tier schools—at the cost of a longer commute through the mountains.",
        commute: "30–50 min to main gate via H-3 or Pali",
        tags: ["Waterfront", "Walkable", "Family-friendly", "Military community"],
      },
    ],
    schools: {
      district: "Hawaii Department of Education (Leeward and Central Oahu Districts)",
      context:
        "Hawaii's single statewide DOE administers schools through regional complex areas. The Leeward complex (Pearl City, Aiea, Ewa) and Central Oahu complex serve most JBPHH families. Moanalua High School and Campbell High School are among Oahu's most consistently ranked public schools.",
      highlights: [
        "Moanalua High School in the Salt Lake neighborhood consistently earns top academic rankings in Hawaii",
        "Campbell High School in Ewa Beach has a strong JROTC and athletics program",
        "Aiea High School and Pearl City High School have longstanding reputations in the military community",
      ],
    },
    activities: [
      {
        name: "USS Arizona Memorial (Pearl Harbor NPS)",
        category: "Attraction",
        description:
          "One of the most visited war memorials in America, the white marble structure over the sunken USS Arizona at Pearl Harbor is a profoundly moving experience, surrounded by Battleship Missouri and the Pacific Aviation Museum.",
      },
      {
        name: "Lanikai Beach",
        category: "Outdoors",
        description:
          "A postcard-perfect crescent of powdery white sand on the windward coast, with turquoise water and views of the Mokulua Islands. Consistently rated among the world's best beaches.",
      },
      {
        name: "Marukai Pacific Market",
        category: "Shopping",
        description:
          "A beloved Japanese and Asian grocery market on Oahu serving the military community with a wide selection of Asian foods, fresh fish, bento, and specialty ingredients unavailable at commissary.",
      },
      {
        name: "Kailua Beach Park",
        category: "Outdoors",
        description:
          "Two miles of gentle surf perfect for kayaking, paddleboarding, and swimming, with kite and kayak rentals, picnic facilities, and stunning Koolau Mountain backdrop.",
      },
      {
        name: "Pearlridge Center",
        category: "Shopping",
        description:
          "The largest air-conditioned shopping mall in Hawaii, located in Aiea just minutes from the base, with major retailers, food court, and a monorail connecting two wings.",
      },
      {
        name: "Highway Inn Kakaako",
        category: "Dining",
        description:
          "A revived Oahu institution serving traditional Hawaiian plate lunch staples—laulau, poi, kalua pig, pipikaula—in the hip Kakaako neighborhood, popular with military families seeking authentic Hawaiian food.",
      },
    ],
    housing: {
      priceRange: "$750,000–$1,100,000",
      rentRange: "$2,500–$3,800/mo",
      marketContext:
        "Oahu's housing market is among the most expensive in the nation. BAH rates for the Pearl Harbor area are among the highest in the DOD pay system. Most junior personnel rent in Pearl City, Ewa Beach, or Waipahu to manage costs. Purchasing requires significant down payment and senior pay grades.",
      hotNeighborhoods: ["Pearl City", "Kailua", "Ewa Beach"],
    },
  },

  "joint-base-san-antonio": {
    neighborhoods: [
      {
        name: "Converse / Universal City",
        description:
          "Northeast San Antonio suburbs directly adjacent to Randolph AFB (part of JBSA), offering affordable homes, a large military population, and convenient access to all JBSA installations via Loop 1604.",
        commute: "10–20 min to Randolph; 20–30 min to Fort Sam/Lackland",
        tags: ["Suburban", "Military community", "Affordable", "Family-friendly"],
      },
      {
        name: "Schertz / Cibolo",
        description:
          "Rapidly growing Guadalupe County suburbs northeast of San Antonio with new construction communities, excellent Schertz-Cibolo-Universal City ISD schools, low crime, and a strong military identity.",
        commute: "25–35 min to Fort Sam/Lackland; 15 min to Randolph",
        tags: ["Suburban", "Military community", "New construction", "Family-friendly"],
      },
      {
        name: "Leon Valley / Helotes",
        description:
          "Western San Antonio suburbs convenient to Lackland AFB's main gate. Leon Valley is affordable and close-in; Helotes offers a more rural Hill Country feel with newer larger homes and excellent Northside ISD schools.",
        commute: "10–15 min to Lackland; 30–40 min to Fort Sam",
        tags: ["Suburban", "Military community", "Family-friendly", "New construction"],
      },
    ],
    schools: {
      district: "Schertz-Cibolo-Universal City ISD / Northside ISD",
      context:
        "JBSA families have access to several excellent school districts. Schertz-Cibolo-Universal City ISD (SCUCISD) is consistently rated among Texas's top districts and serves the northeast communities. Northside ISD is the largest in San Antonio and serves the Lackland/Helotes corridor with strong programs across all levels.",
      highlights: [
        "Clemens High School in Schertz is consistently ranked among the top 100 high schools in Texas",
        "Northside ISD's O'Connor High School and Clark High School are flagship campuses with strong AP enrollment",
        "JBSA benefits from DoD Education Activity (DoDEA) schools on Randolph and Lackland for military students",
      ],
    },
    activities: [
      {
        name: "The San Antonio River Walk",
        category: "Attraction",
        description:
          "San Antonio's signature attraction is a 15-mile linear park along the San Antonio River, lined with restaurants, shops, hotels, and the UNESCO World Heritage missions just downstream.",
      },
      {
        name: "The Alamo",
        category: "Attraction",
        description:
          "The iconic 1836 battle site in downtown San Antonio is a free, sobering reminder of Texas history and one of the most visited historic sites in the United States.",
      },
      {
        name: "Biga on the Banks",
        category: "Dining",
        description:
          "One of San Antonio's finest restaurants on the River Walk, featuring inventive contemporary American cuisine with Texas ingredients and an exceptional wine program in an elegant setting.",
      },
      {
        name: "Natural Bridge Caverns",
        category: "Attraction",
        description:
          "Texas's largest known commercial cave system is 20 minutes from Randolph, with guided tours through stunning stalactite formations, a zipline course, and a gem mining sluice for kids.",
      },
      {
        name: "La Cantera Resort & Spa (Shops at La Cantera)",
        category: "Shopping",
        description:
          "San Antonio's premier lifestyle shopping center on the far northwest side, with luxury brands, a full Alamo draft house cinema, and dining with views of the Hill Country.",
      },
      {
        name: "Gruene Hall",
        category: "Entertainment",
        description:
          "Texas's oldest dance hall, in the historic Hill Country town of Gruene 45 minutes from JBSA, featuring live Texas country and Americana music every weekend in an atmospheric 1878 wooden hall.",
      },
    ],
    housing: {
      priceRange: "$290,000–$420,000",
      rentRange: "$1,400–$2,100/mo",
      marketContext:
        "San Antonio remains one of the most affordable major military markets in the country, offering significant value versus peer cities. The northeast and northwest suburbs near JBSA installations offer the best combination of value, schools, and commute. Texas has no state income tax, which further boosts military family purchasing power.",
      hotNeighborhoods: ["Schertz", "Stone Oak", "Helotes"],
    },
  },

  // ─── SPACE FORCE BASES ───────────────────────────────────────────────────────

  "buckley-sfb": {
    neighborhoods: [
      {
        name: "Aurora (Sable Ridge / Tallyn's Reach)",
        description:
          "Buckley SFB sits within the city of Aurora, and newer subdivisions in the Tallyn's Reach and Sable Ridge areas offer modern homes, good Cherry Creek Schools access, and convenient access to E-470 and I-225.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Military community", "New construction", "Family-friendly"],
      },
      {
        name: "Parker",
        description:
          "A highly rated south Denver suburb with excellent Douglas County schools, a charming historic Main Street, and newer master-planned communities. Parker's family-friendly reputation makes it a top choice for military families.",
        commute: "20–30 min to main gate via E-470",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "Centennial (Foxridge)",
        description:
          "An established Arapahoe County suburb south of Denver with top-rated Littleton Public Schools, large lots, and mature trees. Proximity to Cherry Creek State Park and the Tech Center corridor.",
        commute: "20–25 min to main gate via I-225",
        tags: ["Suburban", "Family-friendly", "Retiree-friendly"],
      },
    ],
    schools: {
      district: "Cherry Creek School District / Aurora Public Schools",
      context:
        "The Cherry Creek School District—which serves much of Aurora south of Colfax—is one of the most acclaimed in Colorado and draws families from across the metro. Aurora Public Schools serves the northern and central portions of Aurora and has improving scores with strong English-language learner support.",
      highlights: [
        "Cherry Creek High School is among Colorado's most academically competitive public schools with a large AP and IB program",
        "Grandview High School in Aurora (Cherry Creek SD) is consistently ranked in the top tier of Colorado high schools",
        "Aurora's STEM School (Liberty Middle and High School) offers a rigorous project-based curriculum",
      ],
    },
    activities: [
      {
        name: "Cherry Creek State Park",
        category: "Outdoors",
        description:
          "A 4,000-acre reservoir and park just south of the base, offering sailing, motorboating, windsurfing, fishing, swimming beaches, and over 12 miles of trails—one of the most-used state parks in Colorado.",
      },
      {
        name: "Denver International Airport Area (Gaylord Rockies)",
        category: "Entertainment",
        description:
          "The massive Gaylord Rockies Resort near DIA offers an indoor waterpark (RELÂCHE), restaurants, and events that serve as a local entertainment hub for the northeast Denver metro.",
      },
      {
        name: "Que Bueno! Mexican Restaurant",
        category: "Dining",
        description:
          "A beloved Aurora institution serving authentic Mexican cuisine—green chile, enchiladas, breakfast burritos—popular with the military community and local families for decades.",
      },
      {
        name: "Denver Museum of Nature & Science",
        category: "Attraction",
        description:
          "One of the largest natural history museums in the nation, with IMAX, planetarium, gems and minerals, Egyptian mummies, Space Odyssey exhibit, and rotating blockbuster shows.",
      },
      {
        name: "Aurora Premium Outlets",
        category: "Shopping",
        description:
          "A large outlet mall east of Denver offering major brands at discount prices, with easy access from Buckley via I-70 or E-470.",
      },
      {
        name: "Red Rocks Amphitheatre",
        category: "Entertainment",
        description:
          "The world's premier outdoor concert venue west of Denver, where massive sandstone formations create a naturally perfect acoustical setting for major touring acts and the iconic morning yoga sessions.",
      },
    ],
    housing: {
      priceRange: "$420,000–$620,000",
      rentRange: "$1,800–$2,600/mo",
      marketContext:
        "Aurora offers the most affordable entry into the Denver metro for military families. The southeast Aurora communities nearest the Cherry Creek School District command a premium. Douglas County (Parker, Centennial) prices are higher but offer top-tier schools. Colorado's market has cooled from its 2021–2022 peak but remains active.",
      hotNeighborhoods: ["Saddle Rock (Aurora)", "Parker", "Centennial"],
    },
  },

  "los-angeles-afb": {
    neighborhoods: [
      {
        name: "El Segundo",
        description:
          "The small city where LA AFB is located has an unexpectedly strong residential community with single-family homes, a walkable downtown, top-rated El Segundo Unified schools, and proximity to Manhattan Beach's restaurants and beach scene.",
        commute: "5–10 min on base",
        tags: ["Suburban", "Military community", "Walkable", "Family-friendly"],
      },
      {
        name: "Manhattan Beach",
        description:
          "One of the South Bay's most desirable coastal communities, Manhattan Beach offers a vibrant pier area, excellent restaurants, top private and public schools, and beach access. Prices are high but BAH reflects the market.",
        commute: "10–15 min to main gate",
        tags: ["Waterfront", "Walkable", "Family-friendly", "Urban"],
      },
      {
        name: "Torrance (North Torrance / Old Torrance)",
        description:
          "A large South Bay city offering more affordable housing than the beachfront communities, with excellent Torrance Unified schools, the Del Amo Fashion Center, and diverse dining reflecting the large Japanese-American community.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "Affordable"],
      },
    ],
    schools: {
      district: "El Segundo Unified School District / Torrance Unified School District",
      context:
        "El Segundo USD is a small, high-performing district that consistently ranks among California's best, with a 4.2 DI rating on Niche. Torrance USD is one of the top large urban school districts in California with strong academic programs across its 15 elementary, 4 middle, and 3 high schools.",
      highlights: [
        "El Segundo High School is consistently ranked in the top 10% of California public high schools",
        "Torrance's North High School and West High School are consistently among the best high schools in Los Angeles County",
        "Torrance has a nationally recognized Gifted/High Ability Magnet program at 3 middle schools",
      ],
    },
    activities: [
      {
        name: "Manhattan Beach Pier and Strand",
        category: "Outdoors",
        description:
          "The iconic pier extends into the Pacific from the heart of Manhattan Beach, flanked by the Roundhouse Marine Studies Lab. The 22-mile Strand bike and pedestrian path follows the beach from Torrance to Santa Monica.",
      },
      {
        name: "Fishing with Dynamite",
        category: "Dining",
        description:
          "A celebrated seafood restaurant in Manhattan Beach by chef David LeFevre, serving sustainably sourced West Coast seafood in a casual but polished setting—one of the South Bay's finest dining experiences.",
      },
      {
        name: "Cabrillo Marine Aquarium",
        category: "Attraction",
        description:
          "A free (small parking fee) aquarium in San Pedro housing impressive Southern California marine life collections and offering seasonal grunion runs that draw visitors to watch the fish spawn on the beach at night.",
      },
      {
        name: "Del Amo Fashion Center",
        category: "Shopping",
        description:
          "One of the largest malls in the United States, with nearly 2.5 million square feet of retail in Torrance including Tesla, Apple, H&M, and hundreds more stores plus a massive dining terrace.",
      },
      {
        name: "Palos Verdes Peninsula (White Point)",
        category: "Outdoors",
        description:
          "The scenic Palos Verdes Peninsula just south of the base offers dramatic ocean cliffs, tide pools, the Terranea Resort coastal trails, and the Korean Bell of Friendship at Angel's Gate Park.",
      },
      {
        name: "SoFi Stadium",
        category: "Entertainment",
        description:
          "State-of-the-art home of the LA Rams and LA Chargers in Inglewood, one of the most technologically advanced stadiums in the world, also hosting the Super Bowl, FIFA World Cup, and major concerts.",
      },
    ],
    housing: {
      priceRange: "$1,100,000–$1,800,000",
      rentRange: "$3,200–$5,000/mo",
      marketContext:
        "The Los Angeles South Bay is one of the most expensive housing markets in the country. BAH rates for this area are the highest in the Space Force, but purchasing is extremely difficult for most personnel. El Segundo is slightly more affordable than Manhattan Beach or Hermosa Beach. Many personnel rent in Torrance or commute from further inland.",
      hotNeighborhoods: ["El Segundo", "Hermosa Beach", "North Torrance"],
    },
  },

  "patrick-sfb": {
    neighborhoods: [
      {
        name: "Cocoa Beach",
        description:
          "The Space Coast's most iconic beach town, directly adjacent to the base. Cocoa Beach has a laid-back surf town atmosphere, excellent walkability to the beach, Ron Jon Surf Shop, and the Cocoa Beach Pier—a perfect assignment for families who love the outdoors.",
        commute: "5–10 min to main gate",
        tags: ["Waterfront", "Walkable", "Military community", "Family-friendly"],
      },
      {
        name: "Satellite Beach",
        description:
          "A quiet barrier island community just south of Patrick SFB with a strong military family presence, beautiful Atlantic beaches, and excellent Brevard County schools. More residential and less touristy than Cocoa Beach.",
        commute: "5–10 min to main gate",
        tags: ["Waterfront", "Suburban", "Military community", "Family-friendly"],
      },
      {
        name: "Viera",
        description:
          "A master-planned community on the mainland side of Brevard County offering the Space Coast's newest construction, top-rated schools, the Avenues at Viera shopping center, and proximity to both Patrick SFB and Cape Canaveral Space Force Station.",
        commute: "20–30 min to main gate via I-95",
        tags: ["Suburban", "New construction", "Family-friendly", "Golf community"],
      },
    ],
    schools: {
      district: "Brevard County Public Schools",
      context:
        "Brevard County Public Schools is one of Florida's top-performing districts, buoyed by the highly educated aerospace and defense workforce in the region. The district consistently outperforms state averages and operates multiple magnet and advanced programs.",
      highlights: [
        "Satellite Beach's Satellite High School is among the top-rated public high schools in Florida",
        "Viera High School has strong STEM programming aligned with the local space and defense industry",
        "Brevard's STEM network is among the strongest in Florida, with designated STEM schools at multiple levels",
      ],
    },
    activities: [
      {
        name: "Kennedy Space Center Visitor Complex",
        category: "Attraction",
        description:
          "One of Florida's premier attractions, the KSC Visitor Complex features the Space Shuttle Atlantis, Apollo/Saturn V exhibits, rocket launch viewing opportunities, and encounters with active NASA astronauts.",
      },
      {
        name: "Cocoa Beach Pier",
        category: "Entertainment",
        description:
          "An 800-foot pier over the Atlantic Ocean featuring a restaurant, tiki bar, bait shop, and regular live music—the social hub of Cocoa Beach and a favorite gathering spot for base families.",
      },
      {
        name: "Fischer's Seafood Bar & Grill",
        category: "Dining",
        description:
          "A beloved Space Coast institution in Cape Canaveral serving fresh local seafood, steamed stone crab, and cold Florida craft beer in an open-air waterfront setting.",
      },
      {
        name: "Canaveral National Seashore",
        category: "Outdoors",
        description:
          "24 miles of undeveloped Atlantic Ocean beach north of the base, one of the longest stretches of natural beach in the eastern US, with sea turtle nesting, bird watching, and the Turtle Mound archaeological site.",
      },
      {
        name: "The Avenue Viera",
        category: "Shopping",
        description:
          "Brevard County's premier outdoor lifestyle shopping center with over 60 stores, a full-service gym, multiple restaurants, and a movie theater anchoring the Viera master-planned community.",
      },
      {
        name: "Thousand Islands Conservation Area (kayaking)",
        category: "Outdoors",
        description:
          "A stunning chain of mangrove islands in the Indian River Lagoon accessible by kayak from Cocoa Beach, offering exceptional bioluminescence kayaking at night—one of only a few such sites in the world.",
      },
    ],
    housing: {
      priceRange: "$340,000–$520,000",
      rentRange: "$1,700–$2,600/mo",
      marketContext:
        "Brevard County's Space Coast has seen significant appreciation fueled by SpaceX hiring and the broader space industry renaissance. Barrier island homes command a premium for beach access. Viera offers the best value for newer construction. Flood insurance is important for barrier island properties. BAH is reasonably aligned with the local market.",
      hotNeighborhoods: ["Satellite Beach", "Viera", "West Melbourne"],
    },
  },

  "peterson-sfb": {
    neighborhoods: [
      {
        name: "Briargate (Colorado Springs NE)",
        description:
          "Colorado Springs' premier northeast development corridor, Briargate offers newer master-planned communities, the Academy School District 20 (one of Colorado's best), and convenient access to Peterson via Powers Blvd.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction", "Military community"],
      },
      {
        name: "Falcon / Peyton (El Paso County)",
        description:
          "Fast-growing unincorporated communities east of Colorado Springs offering newer larger homes at lower prices than in-city neighborhoods, with views of Pikes Peak and Falcon School District 49 schools.",
        commute: "15–25 min to main gate",
        tags: ["Suburban", "Affordable", "New construction", "Rural"],
      },
      {
        name: "Stetson Hills / Meridian Ranch",
        description:
          "Newer master-planned communities in the northeast springs area with modern homes, community pools, parks, and excellent D20 schools. One of the fastest-growing areas in the Colorado Springs metro.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "New construction", "Military community", "Family-friendly"],
      },
    ],
    schools: {
      district: "Academy School District 20 / District 49 (Falcon)",
      context:
        "Academy District 20 serves northern Colorado Springs and is consistently Colorado's top-performing large school district, with exceptional AP enrollment, a gifted/talented program, and supportive community. District 49 serves the Falcon/Peyton area with newer schools and improving academic scores.",
      highlights: [
        "Pine Creek High School in D20 is consistently ranked among Colorado's top 5 public high schools",
        "D20's Liberty High School and Rampart High School offer extensive AP and dual-enrollment options",
        "D49's Falcon High School has a strong JROTC program and serves a large military family population",
      ],
    },
    activities: [
      {
        name: "Garden of the Gods",
        category: "Outdoors",
        description:
          "A free National Natural Landmark featuring dramatic 300-foot red sandstone formations, 21 miles of trails, rock climbing, and iconic views of Pikes Peak—15 minutes from Peterson and one of Colorado's most spectacular sites.",
      },
      {
        name: "Pikes Peak — America's Mountain",
        category: "Outdoors",
        description:
          "The inspiration for 'America the Beautiful,' Pikes Peak reaches 14,115 feet and is accessible by the Cog Railway, auto road, or a challenging 26-mile round-trip trail. Summit views on a clear day extend from Denver to New Mexico.",
      },
      {
        name: "Uchenna Ethiopian Restaurant",
        category: "Dining",
        description:
          "A Colorado Springs institution serving authentic Ethiopian cuisine—injera, tibs, misir wot—popular with the military and civilian community seeking something beyond the standard Colorado Springs dining scene.",
      },
      {
        name: "Cheyenne Mountain Zoo",
        category: "Attraction",
        description:
          "America's only mountain zoo, perched at 6,800 feet on the slopes of Cheyenne Mountain, featuring giraffe feedings, Rocky Mountain elk, and outstanding views of the city and plains below.",
      },
      {
        name: "Chapel Hills Mall",
        category: "Shopping",
        description:
          "Colorado Springs' primary enclosed mall in the north end of the city, with major retailers, a Dillard's anchor, multiple dining options, and convenient location near Peterson.",
      },
      {
        name: "Broadmoor World Arena",
        category: "Entertainment",
        description:
          "Colorado Springs' premier entertainment venue hosting major concerts, AHL Colorado Eagles hockey, and family events throughout the year.",
      },
    ],
    housing: {
      priceRange: "$380,000–$560,000",
      rentRange: "$1,700–$2,500/mo",
      marketContext:
        "Colorado Springs is significantly more affordable than Denver and the Front Range metro but has seen rapid appreciation since 2020. The northeast corridor near Peterson and Schriever has the most new construction. Academy D20 neighborhoods command a premium. Peterson and Schriever personnel often share neighborhoods given both base's east-side locations.",
      hotNeighborhoods: ["Briargate", "Stetson Hills", "Meridian Ranch"],
    },
  },

  "schriever-sfb": {
    neighborhoods: [
      {
        name: "Falcon / Peyton",
        description:
          "The closest residential communities to Schriever SFB, Falcon and Peyton are fast-growing unincorporated El Paso County communities offering newer homes at moderate prices, wide-open Front Range views, and District 49 schools.",
        commute: "10–20 min to main gate",
        tags: ["Suburban", "Military community", "Affordable", "New construction"],
      },
      {
        name: "Briargate (Colorado Springs NE)",
        description:
          "Schriever personnel can live in the highly regarded Briargate corridor of Colorado Springs and commute east on Woodmen or Research Pkwy. Academy D20 schools are the primary draw.",
        commute: "25–35 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction", "Military community"],
      },
      {
        name: "Widefield / Security",
        description:
          "Affordable southeast Colorado Springs communities convenient to Schriever via US-24/Fountain Blvd. Slightly lower prices than northeast Colorado Springs, served by Widefield School District 3.",
        commute: "25–35 min to main gate via Powers/Marksheffel",
        tags: ["Suburban", "Affordable", "Military community"],
      },
    ],
    schools: {
      district: "District 49 (Falcon) / Academy District 20",
      context:
        "District 49 serves the communities nearest Schriever and has invested significantly in new school construction to keep pace with growth. Families willing to commute to Briargate gain access to Academy D20, the state's top district. Widefield SD 3 serves the southeast communities at an improving academic trajectory.",
      highlights: [
        "Vista Ridge High School (D49) is the premier D49 campus with a strong STEM and military-connected student body",
        "Sand Creek High School in D49 has an active JROTC and CTE programs",
        "Academy D20 schools (accessible to Schriever commuters from Briargate) remain Colorado's top-rated large district",
      ],
    },
    activities: [
      {
        name: "Black Forest Regional Park",
        category: "Outdoors",
        description:
          "A 120-acre El Paso County park in the ponderosa pine forests north of Schriever, offering hiking trails, equestrian paths, and a quiet natural retreat from the suburban development of the Powers corridor.",
      },
      {
        name: "Venetucci Farm Pumpkin Patch",
        category: "Attraction",
        description:
          "A Colorado Springs landmark south of town that has been giving away pumpkins to children at Thanksgiving for decades, now also open for fall festivals and fresh produce—a cherished military family tradition.",
      },
      {
        name: "Cork 'N Bottle (Falcon)",
        category: "Dining",
        description:
          "A popular wine bar and restaurant in Falcon serving charcuterie, wood-fired pizzas, and an extensive wine list in a relaxed neighborhood setting convenient for Schriever families.",
      },
      {
        name: "Paint Mines Interpretive Park",
        category: "Outdoors",
        description:
          "An El Paso County geological wonder east of Colorado Springs featuring wildly eroded hoodoos and spires of colorful clay in shades of pink, lavender, and white—a striking and little-known local landmark.",
      },
      {
        name: "Powers Corridor Shopping",
        category: "Shopping",
        description:
          "The Powers Boulevard commercial corridor in northeast Colorado Springs features every major big-box retailer, restaurant chain, and specialty store needed by military families, easily accessible from Schriever.",
      },
      {
        name: "US Olympic & Paralympic Museum",
        category: "Attraction",
        description:
          "Colorado Springs is the home of the US Olympic movement, and this stunning 60,000-square-foot museum in downtown tells the stories of America's Olympic athletes through immersive, award-winning exhibits.",
      },
    ],
    housing: {
      priceRange: "$360,000–$520,000",
      rentRange: "$1,600–$2,300/mo",
      marketContext:
        "Falcon and the Schriever corridor offer the most affordable new construction in the Colorado Springs metro. The commute penalty is the tradeoff versus Peterson-area neighborhoods. District 49 is rapidly building new schools to keep pace with residential growth. The market remains active given continued Space Force and defense contractor hiring.",
      hotNeighborhoods: ["Falcon", "Woodmen Hills (Peyton)", "Briargate"],
    },
  },

  "vandenberg-sfb": {
    neighborhoods: [
      {
        name: "Lompoc",
        description:
          "The city immediately adjacent to Vandenberg, Lompoc offers the most affordable housing in the Central Coast with a large military community, the historic Ryon Park, and improving downtown dining and arts. The Santa Rita Hills wine region begins just east of town.",
        commute: "5–15 min to main gate",
        tags: ["Military community", "Affordable", "Suburban", "Family-friendly"],
      },
      {
        name: "Santa Maria",
        description:
          "A larger Central Coast city 25 miles east of Vandenberg, Santa Maria offers significantly more dining, shopping, and entertainment options than Lompoc. Known nationally for Santa Maria-style BBQ, it has a large military community and more housing variety.",
        commute: "25–35 min to main gate via Hwy 1 or 135",
        tags: ["Suburban", "Military community", "Affordable"],
      },
      {
        name: "Buellton / Solvang",
        description:
          "Charming small communities in the Santa Ynez Valley east of Vandenberg, Solvang is a Danish-themed village surrounded by world-class Sta. Rita Hills wineries. Buellton is more practical for families, with newer homes and solid Lompoc USD schools.",
        commute: "30–40 min to main gate",
        tags: ["Suburban", "Historic", "Family-friendly", "Retiree-friendly"],
      },
    ],
    schools: {
      district: "Lompoc Unified School District / Santa Maria-Bonita School District",
      context:
        "Lompoc USD serves the base community with improving academic scores and strong military family support programs. Santa Maria has both an elementary district (Santa Maria-Bonita) and a high school district (Santa Maria Joint Union), with several competitive programs. Buellton is in the Lompoc USD boundary for most grade levels.",
      highlights: [
        "Lompoc High School has a longstanding JROTC program and active military family engagement",
        "Pioneer Valley High School in Santa Maria has strong AP participation and CTE programs",
        "The Santa Ynez Valley Union High School (serving Buellton/Solvang teens) is a small, highly regarded rural campus",
      ],
    },
    activities: [
      {
        name: "Santa Barbara (day trip)",
        category: "Attraction",
        description:
          "An hour south on the 101, Santa Barbara is one of California's most beautiful cities with a stunning Mission, Stearns Wharf, State Street shopping, and the American Riviera wine country—a perfect weekend destination.",
      },
      {
        name: "Jalama Beach County Park",
        category: "Outdoors",
        description:
          "A secluded and stunning stretch of California coastline accessible by a winding country road from Lompoc, with camping, surfing, and the legendary Jalama Beach Store hamburger and daily specials.",
      },
      {
        name: "Industrial Eats",
        category: "Dining",
        description:
          "Buellton's acclaimed farm-to-table restaurant and butcher shop serving wood-fired whole animal cuisine, artisan sandwiches, and Central Coast wines in a former industrial warehouse space.",
      },
      {
        name: "Sta. Rita Hills Wine Trail",
        category: "Entertainment",
        description:
          "One of California's premier Pinot Noir and Chardonnay regions begins just east of Lompoc, with acclaimed wineries including Brewer-Clifton, Sanford, and Melville offering tasting rooms to visitors.",
      },
      {
        name: "Old Town Orcutt / Santa Maria Fairpark",
        category: "Shopping",
        description:
          "The historic Orcutt district near Santa Maria has antique shops, boutiques, and restaurants. The Santa Barbara County Fairgrounds hosts the annual Mid-State Fair and year-round events.",
      },
      {
        name: "Vandenberg Space Launch Viewing",
        category: "Attraction",
        description:
          "Vandenberg launches rockets into polar orbit, making it the launch facility for classified national security satellites and commercial SpaceX missions. Public viewing areas in Lompoc and along Hwy 1 offer dramatic opportunities to witness launches.",
      },
    ],
    housing: {
      priceRange: "$480,000–$700,000",
      rentRange: "$1,800–$2,600/mo",
      marketContext:
        "Lompoc is dramatically more affordable than Santa Barbara County coastal communities but has seen price increases from the SpaceX workforce influx. Santa Maria offers more housing variety and is slightly more affordable than Lompoc. California's overall cost of living means BAH is generous relative to the national military average.",
      hotNeighborhoods: ["Vandenberg Village", "Lompoc (northeast)", "Orcutt (Santa Maria)"],
    },
  },
};

export default otherDetails;
