import type { BaseDetail } from "../baseDetails";

const armyDetails: Record<string, BaseDetail> = {
  "fort-belvoir": {
    neighborhoods: [
      {
        name: "Hybla Valley",
        description: "A diverse, suburban community in Fairfax County with easy access to Fort Belvoir's main gate and the Richmond Highway corridor.",
        commute: "5–10 min to main gate",
        tags: ["Suburban", "Military community", "Family-friendly"],
      },
      {
        name: "Mount Vernon",
        description: "Historic neighborhood near George Washington's estate with good schools and quiet residential streets popular with senior officers.",
        commute: "10–15 min to main gate",
        tags: ["Historic", "Family-friendly", "Retiree-friendly"],
      },
      {
        name: "Lorton",
        description: "Growing suburban community with newer townhomes and single-family homes, offering more affordable options than closer-in Fairfax neighborhoods.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "New construction", "Affordable"],
      },
    ],
    schools: {
      district: "Fairfax County Public Schools",
      context: "One of the largest and highest-rated school districts in the nation, with many schools near Fort Belvoir earning high GreatSchools ratings.",
      highlights: [
        "Hayfield Secondary School serves much of the immediate base area and offers strong IB and AP programs",
        "West Potomac High School is known for arts and STEM programs",
        "District provides dedicated military family liaisons at each school",
      ],
    },
    activities: [
      {
        name: "Mount Vernon Estate",
        category: "Attraction",
        description: "George Washington's historic plantation and museum, just minutes from base — a must-see for families new to the area.",
      },
      {
        name: "Pohick Bay Regional Park",
        category: "Outdoors",
        description: "Waterfront park on the Potomac with camping, mini-golf, and boat rentals — a favorite weekend spot for military families.",
      },
      {
        name: "Springfield Town Center",
        category: "Shopping",
        description: "Major indoor mall with over 200 stores, anchored by Macy's and Nordstrom Rack, about 15 minutes from base.",
      },
      {
        name: "Hunters Head Tavern",
        category: "Dining",
        description: "Charming British pub in nearby Upperville serving classic ales and hearty fare in a historic setting.",
      },
      {
        name: "Workhouse Arts Center",
        category: "Entertainment",
        description: "Former prison converted into a vibrant arts campus in Lorton with galleries, live music, and theater performances.",
      },
      {
        name: "Occoquan Regional Park",
        category: "Outdoors",
        description: "Scenic park along the Occoquan River offering kayaking, hiking trails, and fishing, popular with active-duty families.",
      },
    ],
    housing: {
      priceRange: "$520,000–$750,000",
      rentRange: "$2,200–$3,200/mo",
      marketContext: "Fairfax County is one of the priciest markets in the country. Demand is consistently high due to federal and defense employment. BAH rates are generous but homes move quickly.",
      hotNeighborhoods: ["Hybla Valley", "Lorton", "Kingstowne"],
    },
  },

  "fort-bliss": {
    neighborhoods: [
      {
        name: "Northeast El Paso",
        description: "The closest civilian neighborhoods to Fort Bliss, with a mix of ranch-style homes and newer subdivisions popular with junior enlisted families.",
        commute: "5–15 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "East El Paso / Horizon City",
        description: "Fast-growing eastern suburbs with newer construction, good schools, and lower home prices — popular with families looking to buy.",
        commute: "20–30 min to main gate",
        tags: ["New construction", "Family-friendly", "Suburban"],
      },
      {
        name: "Upper Valley (Canutillo area)",
        description: "Rural-suburban communities northwest of downtown with spacious lots, agricultural feel, and proximity to the Rio Grande.",
        commute: "25–35 min to main gate",
        tags: ["Rural", "Family-friendly", "Affordable"],
      },
    ],
    schools: {
      district: "Ysleta Independent School District / El Paso ISD",
      context: "Multiple ISDs serve the El Paso area. Ysleta ISD covers much of the northeast area nearest base; El Paso ISD covers midtown and westside areas.",
      highlights: [
        "Parkland High School and Andress High School are top-rated campuses near base",
        "Canutillo ISD (Upper Valley) is a smaller district with strong community ties",
        "El Paso is home to UTEP, providing dual-enrollment opportunities for high schoolers",
      ],
    },
    activities: [
      {
        name: "Franklin Mountains State Park",
        category: "Outdoors",
        description: "The largest urban state park in the US, offering over 100 miles of hiking and mountain biking trails right in El Paso.",
      },
      {
        name: "Cattleman's Steakhouse at Indian Cliffs Ranch",
        category: "Dining",
        description: "Iconic Texas steakhouse set on a sprawling ranch east of El Paso — a local institution for big cuts and western atmosphere.",
      },
      {
        name: "Sunland Park Racetrack & Casino",
        category: "Entertainment",
        description: "Live horse racing and casino gaming just across the New Mexico border, a popular evening entertainment option.",
      },
      {
        name: "El Paso Museum of Art",
        category: "Attraction",
        description: "Free art museum in downtown El Paso with an impressive collection spanning centuries of Western and Mexican art.",
      },
      {
        name: "Cielo Vista Mall",
        category: "Shopping",
        description: "Main regional mall near the base with major anchor stores and a wide range of dining options.",
      },
      {
        name: "Wet 'n' Wild El Paso",
        category: "Entertainment",
        description: "Large water park perfect for summer fun in the desert heat — a family staple during the long El Paso summer.",
      },
    ],
    housing: {
      priceRange: "$200,000–$320,000",
      rentRange: "$1,100–$1,700/mo",
      marketContext: "El Paso remains one of the most affordable large cities in Texas. The military presence keeps demand steady but prices remain accessible compared to other Texas metros.",
      hotNeighborhoods: ["Northeast El Paso", "Horizon City", "East Montana area"],
    },
  },

  "fort-campbell": {
    neighborhoods: [
      {
        name: "Clarksville (Sango / St. Bethlehem area)",
        description: "Northern Clarksville suburbs with newer subdivisions, popular chains, and easy access to Gate 4 — the most common off-post area for families.",
        commute: "10–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "Military community"],
      },
      {
        name: "Clarksville Downtown / Historic District",
        description: "Revitalized downtown with restaurants, breweries, and older craftsman homes — popular with young officers and NCOs who want walkability.",
        commute: "20–25 min to main gate",
        tags: ["Historic", "Walkable", "Nightlife"],
      },
      {
        name: "Oak Grove, KY",
        description: "Small Kentucky town right outside Gate 1, with very affordable housing and a strong military community feel.",
        commute: "5 min to main gate",
        tags: ["Military community", "Affordable", "Rural"],
      },
    ],
    schools: {
      district: "Clarksville-Montgomery County School System",
      context: "One of the larger school systems in Tennessee, with many schools near Fort Campbell designated as Purple Star schools honoring military families.",
      highlights: [
        "Northwest High School and Rossview High School are top-rated campuses on the Clarksville side",
        "District has a robust military family support program with dedicated transition counselors",
        "Christian County Schools (KY side) serves Oak Grove with smaller class sizes",
      ],
    },
    activities: [
      {
        name: "Dunbar Cave State Park",
        category: "Outdoors",
        description: "Beautiful state park with a historic cave, Swan Lake, and easy hiking trails — a beloved local escape just outside Clarksville.",
      },
      {
        name: "101st Airborne Division Museum",
        category: "Attraction",
        description: "On-post museum chronicling the Screaming Eagles' history from WWII through current operations — free and open to the public.",
      },
      {
        name: "The Blackhorse Pub & Brewery",
        category: "Dining",
        description: "Local craft brewery and restaurant in downtown Clarksville with a rotating tap list and a popular military-friendly atmosphere.",
      },
      {
        name: "Clarksville Riverwalk",
        category: "Outdoors",
        description: "Scenic trail along the Cumberland River with parks, playgrounds, and event spaces in the heart of Clarksville.",
      },
      {
        name: "Governor's Square Mall",
        category: "Shopping",
        description: "Main regional mall in Clarksville with major retailers and a food court, convenient to most military families.",
      },
      {
        name: "Beachaven Vineyards & Winery",
        category: "Entertainment",
        description: "Family-owned winery in Clarksville hosting live jazz on weekends and wine tastings year-round.",
      },
    ],
    housing: {
      priceRange: "$230,000–$360,000",
      rentRange: "$1,200–$1,800/mo",
      marketContext: "Clarksville has grown significantly due to its proximity to Nashville and Fort Campbell. The market is competitive but still affordable compared to national averages. Inventory can be tight.",
      hotNeighborhoods: ["Sango", "St. Bethlehem", "Oak Grove"],
    },
  },

  "fort-carson": {
    neighborhoods: [
      {
        name: "Security-Widefield",
        description: "Unincorporated community immediately east of Fort Carson, with affordable single-family homes and a strong military community presence.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Fountain",
        description: "Small city south of Colorado Springs that has grown substantially due to Fort Carson proximity. Offers newer homes at lower prices.",
        commute: "10–15 min to main gate",
        tags: ["Affordable", "New construction", "Family-friendly"],
      },
      {
        name: "Powers Corridor (East Colorado Springs)",
        description: "Rapidly developing eastern Colorado Springs corridor with modern retail, restaurants, and newer subdivisions popular with military families.",
        commute: "15–25 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Fountain-Fort Carson School District 8 / Colorado Springs District 11",
      context: "Fountain-Fort Carson SD 8 serves the area immediately surrounding the base and is accustomed to high military family turnover with strong transition support.",
      highlights: [
        "Fountain-Fort Carson High School has strong JROTC and athletic programs",
        "District 8 maintains a dedicated Military Family Services coordinator",
        "Academy District 20 (north Springs) is highly rated if commute is acceptable",
      ],
    },
    activities: [
      {
        name: "Garden of the Gods",
        category: "Outdoors",
        description: "Stunning free public park with towering red rock formations and hiking trails — one of Colorado Springs' most iconic attractions.",
      },
      {
        name: "Pikes Peak (America's Mountain)",
        category: "Outdoors",
        description: "Iconic 14,115-ft summit accessible by cog railway, toll road, or on foot — a bucket-list experience for every Fort Carson family.",
      },
      {
        name: "Old Chicago Pizza & Taproom",
        category: "Dining",
        description: "Local Colorado chain with a massive beer selection and deep-dish pizza, popular gathering spot for soldiers and families.",
      },
      {
        name: "Cheyenne Mountain Zoo",
        category: "Attraction",
        description: "America's only mountain zoo, perched at 6,714 feet with over 750 animals and incredible views of the Front Range.",
      },
      {
        name: "First & Main Town Center",
        category: "Shopping",
        description: "Large outdoor shopping and dining complex on the Powers Corridor with dozens of national retailers and restaurants.",
      },
      {
        name: "Manitou Springs",
        category: "Entertainment",
        description: "Quirky historic town at the foot of Pikes Peak with mineral springs, art galleries, and the famous Penny Arcade — a great day trip.",
      },
    ],
    housing: {
      priceRange: "$340,000–$490,000",
      rentRange: "$1,600–$2,200/mo",
      marketContext: "Colorado Springs has seen significant appreciation in recent years driven by remote workers and military growth. Fountain and Security-Widefield offer the most affordable options closest to base.",
      hotNeighborhoods: ["Fountain", "Security-Widefield", "Lorson Ranch"],
    },
  },

  "fort-hood": {
    neighborhoods: [
      {
        name: "Killeen (Trimmier Road / South Fort Hood Street area)",
        description: "The primary off-post community for Fort Hood soldiers, with dense military-oriented housing, apartments, and retail.",
        commute: "5–15 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Harker Heights",
        description: "Suburb east of Killeen with newer homes, better-rated schools, and a slightly quieter community feel compared to Killeen proper.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "Copperas Cove",
        description: "Small city northwest of the base with very affordable housing and a tight-knit community. Popular with families prioritizing budget.",
        commute: "20–25 min to main gate",
        tags: ["Affordable", "Family-friendly", "Rural"],
      },
    ],
    schools: {
      district: "Killeen Independent School District",
      context: "Killeen ISD is one of the most diverse districts in Texas, heavily influenced by Fort Hood. It has experience supporting military families with PCS transitions.",
      highlights: [
        "Shoemaker High School and Killeen High School are the main campuses serving base families",
        "District has dedicated military family liaisons and flexible enrollment processes",
        "Harker Heights High School (KISD) is consistently among the higher-rated campuses",
      ],
    },
    activities: [
      {
        name: "Stillhouse Hollow Lake",
        category: "Outdoors",
        description: "Corps of Engineers lake near Belton offering swimming, fishing, camping, and watersports — a go-to weekend destination.",
      },
      {
        name: "3rd Cavalry Museum",
        category: "Attraction",
        description: "On-post museum documenting the history of the 3rd Armored Cavalry Regiment and Fort Hood from establishment to present.",
      },
      {
        name: "Izzy's Burgers Cafe & Bar",
        category: "Dining",
        description: "Beloved local burger joint in Killeen with creative toppings and a casual atmosphere popular with soldiers.",
      },
      {
        name: "Cove Lanes",
        category: "Entertainment",
        description: "Family bowling alley in Copperas Cove — affordable entertainment for families on a budget.",
      },
      {
        name: "Killeen Mall",
        category: "Shopping",
        description: "Primary retail hub for the Killeen-Fort Hood area with major stores and a military discount program at many tenants.",
      },
      {
        name: "Belton Lake",
        category: "Outdoors",
        description: "Large reservoir with extensive recreation areas, boat ramps, and beaches — a staple for outdoor recreation near base.",
      },
    ],
    housing: {
      priceRange: "$180,000–$290,000",
      rentRange: "$1,000–$1,500/mo",
      marketContext: "Killeen remains one of the most affordable military markets in Texas. The large rental inventory keeps prices accessible. Harker Heights commands a modest premium for better schools.",
      hotNeighborhoods: ["Harker Heights", "Nolanville", "South Killeen"],
    },
  },

  "fort-detrick": {
    neighborhoods: [
      {
        name: "Frederick (Downtown / College area)",
        description: "Historic downtown Frederick with brick row houses, award-winning restaurants, and a walkable main street — popular with officers and medical professionals.",
        commute: "5–10 min to main gate",
        tags: ["Historic", "Walkable", "Urban"],
      },
      {
        name: "Urbana",
        description: "Planned suburban community south of Frederick with newer homes, top-rated schools, and easy commutes to Fort Detrick and DC area.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
      {
        name: "Middletown / Myersville",
        description: "Quiet rural-suburban communities in the Catoctin foothills west of Frederick — ideal for families seeking space and scenic surroundings.",
        commute: "20–25 min to main gate",
        tags: ["Rural", "Family-friendly", "Historic"],
      },
    ],
    schools: {
      district: "Frederick County Public Schools",
      context: "Frederick County Public Schools is well-regarded in Maryland, with multiple schools earning state recognition. The district is experienced with military and federal employee families.",
      highlights: [
        "Urbana High School is consistently one of the top-rated schools in the county",
        "Governor Thomas Johnson High School serves downtown Frederick and has strong arts programs",
        "District offers a Military Family Support program with dedicated point-of-contact staff",
      ],
    },
    activities: [
      {
        name: "Market Street (Downtown Frederick)",
        category: "Dining",
        description: "Frederick's bustling main street with dozens of independent restaurants, wine bars, and craft breweries in historic 18th-century buildings.",
      },
      {
        name: "Catoctin Mountain Park",
        category: "Outdoors",
        description: "National Park Service land west of Frederick with hiking, fishing, and the iconic Cunningham Falls — popular with families year-round.",
      },
      {
        name: "National Museum of Civil War Medicine",
        category: "Attraction",
        description: "Unique museum in downtown Frederick documenting medical practices during the Civil War — highly relevant given Fort Detrick's medical research mission.",
      },
      {
        name: "Brewer's Alley",
        category: "Dining",
        description: "Frederick's original brewpub, housed in a historic 1890s town hall building, serving house-brewed beers and American comfort food.",
      },
      {
        name: "Francis Scott Key Mall",
        category: "Shopping",
        description: "Main regional mall in Frederick with department stores, specialty retailers, and a movie theater.",
      },
      {
        name: "Monocacy National Battlefield",
        category: "Attraction",
        description: "Civil War battlefield park just south of Frederick commemorating the 1864 Battle of Monocacy — great for history-minded families.",
      },
    ],
    housing: {
      priceRange: "$380,000–$560,000",
      rentRange: "$1,800–$2,600/mo",
      marketContext: "Frederick has become increasingly desirable for DC-area commuters and federal employees, driving prices up. It remains more affordable than Montgomery County but the market is competitive.",
      hotNeighborhoods: ["Urbana", "Downtown Frederick", "Ballenger Creek"],
    },
  },

  "fort-drum": {
    neighborhoods: [
      {
        name: "Watertown",
        description: "The primary city near Fort Drum, with older Victorian homes, a revitalized downtown, and most of the area's retail and services.",
        commute: "10–15 min to main gate",
        tags: ["Urban", "Historic", "Affordable"],
      },
      {
        name: "Evans Mills / Black River area",
        description: "Small communities immediately outside Fort Drum's gates with abundant military rental housing and very short commutes.",
        commute: "5 min to main gate",
        tags: ["Military community", "Affordable", "Rural"],
      },
      {
        name: "Sackets Harbor",
        description: "Charming historic village on Lake Ontario with Victorian architecture, waterfront dining, and a unique small-town character.",
        commute: "20–25 min to main gate",
        tags: ["Waterfront", "Historic", "Family-friendly"],
      },
    ],
    schools: {
      district: "Watertown City School District / General Brown Central School District",
      context: "Several small school districts serve the Fort Drum area. General Brown CSD (Dexter/Brownville) is popular with military families for its size and community feel.",
      highlights: [
        "General Brown High School has strong athletics and a close-knit student body",
        "Watertown City SD has a dedicated military family liaison",
        "Indian River Central SD (Philadelphia, NY) serves communities closest to the north gate",
      ],
    },
    activities: [
      {
        name: "Thousand Islands Region",
        category: "Outdoors",
        description: "World-famous archipelago of over 1,800 islands in the St. Lawrence River — boating, kayaking, and fishing within an hour of base.",
      },
      {
        name: "Thompson Park",
        category: "Outdoors",
        description: "Large municipal park in Watertown with the Watertown Zoo, ski slopes, hiking trails, and a summer concert series.",
      },
      {
        name: "Sackets Harbor Brewing Company",
        category: "Dining",
        description: "Waterfront brewpub in historic Sackets Harbor with a great tap list and views of Lake Ontario — very popular with soldiers.",
      },
      {
        name: "New York State Fair",
        category: "Entertainment",
        description: "Annual late-summer fair in Syracuse (90 min south) — a classic New York tradition worth the drive for families.",
      },
      {
        name: "Salmon Run Mall",
        category: "Shopping",
        description: "The region's primary mall in Watertown with major retailers and dining options.",
      },
      {
        name: "Dry Hill Ski Area",
        category: "Outdoors",
        description: "Local ski area near Watertown — Fort Drum's notorious winters mean great snow, making this a beloved winter activity for families.",
      },
    ],
    housing: {
      priceRange: "$160,000–$260,000",
      rentRange: "$900–$1,400/mo",
      marketContext: "The North Country is one of the most affordable military housing markets in the Northeast. Cold winters keep demand manageable, and the small market means inventory can be limited but prices stay low.",
      hotNeighborhoods: ["Evans Mills", "Watertown West Side", "Dexter"],
    },
  },

  "fort-eisenhower": {
    neighborhoods: [
      {
        name: "Martinez / Evans",
        description: "Suburban communities immediately west of Fort Eisenhower with affordable single-family homes and strong military community presence.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Grovetown",
        description: "Fast-growing suburb west of Augusta with newer construction, strong schools, and very popular with military families buying their first home.",
        commute: "15–20 min to main gate",
        tags: ["New construction", "Family-friendly", "Suburban"],
      },
      {
        name: "Aiken, SC",
        description: "Charming equestrian community just across the South Carolina border, known for historic neighborhoods, golf, and a slower pace of life.",
        commute: "25–35 min to main gate",
        tags: ["Historic", "Golf community", "Retiree-friendly"],
      },
    ],
    schools: {
      district: "Columbia County School District / Richmond County School System",
      context: "Columbia County (Grovetown, Evans, Martinez) is the preferred district for military families due to higher-performing schools and newer facilities.",
      highlights: [
        "Grovetown High School and Evans High School serve the primary military family areas",
        "Columbia County SD consistently outperforms state averages",
        "District has a military family liaison program for incoming PCS families",
      ],
    },
    activities: [
      {
        name: "Augusta Canal National Heritage Area",
        category: "Outdoors",
        description: "Historic canal with hiking, biking, and boat tours along a 7-mile stretch — one of Augusta's best outdoor resources.",
      },
      {
        name: "Masters Golf Tournament (Augusta National)",
        category: "Attraction",
        description: "One of golf's four majors, held every April at Augusta National Golf Club — a world-class event in the backyard of Fort Eisenhower.",
      },
      {
        name: "Frog Hollow Tavern",
        category: "Dining",
        description: "Award-winning Southern cuisine restaurant in downtown Augusta, known for farm-to-table dishes and an impressive whiskey selection.",
      },
      {
        name: "Riverwalk Augusta",
        category: "Outdoors",
        description: "Scenic promenade along the Savannah River in downtown Augusta with parks, festivals, and waterfront dining.",
      },
      {
        name: "Augusta Mall",
        category: "Shopping",
        description: "The region's largest mall with over 100 stores and dining options, centrally located for military families.",
      },
      {
        name: "Phinizy Swamp Nature Park",
        category: "Outdoors",
        description: "Free nature park with boardwalks and trails through wetlands, excellent for birdwatching and nature walks with kids.",
      },
    ],
    housing: {
      priceRange: "$220,000–$360,000",
      rentRange: "$1,200–$1,800/mo",
      marketContext: "The Augusta area remains affordable relative to other military markets. Grovetown and Evans are the most competitive submarkets due to strong school demand from military families.",
      hotNeighborhoods: ["Grovetown", "Evans", "Martinez"],
    },
  },

  "fort-gregg-adams": {
    neighborhoods: [
      {
        name: "Colonial Heights",
        description: "Independent city bordering Fort Gregg-Adams with affordable older homes and direct access to the base — popular with junior enlisted.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Prince George County (Hopewell area)",
        description: "Rural-suburban county surrounding the base with newer subdivisions and a quieter lifestyle, good for families who want more space.",
        commute: "10–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "Affordable"],
      },
      {
        name: "Chester / Chesterfield County",
        description: "Rapidly growing northern suburb with newer homes, strong schools, and easy access to Richmond's amenities while remaining base-accessible.",
        commute: "20–30 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Colonial Heights City Schools / Chesterfield County Public Schools",
      context: "Chesterfield County is one of Virginia's highest-performing large districts and is popular with military families who can manage a longer commute from base.",
      highlights: [
        "Chesterfield County SD is consistently rated among Virginia's best districts",
        "Colonial Heights City Schools is small and community-focused",
        "Prince George County Schools serves the immediate base area with a military-aware staff",
      ],
    },
    activities: [
      {
        name: "Petersburg National Battlefield",
        category: "Attraction",
        description: "Civil War battlefield park preserving the 9-month Siege of Petersburg — an essential historical visit given the base's location.",
      },
      {
        name: "Pocahontas State Park",
        category: "Outdoors",
        description: "Large state park in Chesterfield County with lake swimming, mountain biking, hiking, and camping — a top family outdoor destination.",
      },
      {
        name: "Old Towne Petersburg",
        category: "Dining",
        description: "Revitalized historic district with craft breweries, restaurants, and art galleries — Petersburg's dining scene has grown considerably.",
      },
      {
        name: "Ironclad Brewery",
        category: "Entertainment",
        description: "Popular craft brewery in Petersburg with a taproom, live music events, and a welcoming atmosphere for military families.",
      },
      {
        name: "Southpark Mall",
        category: "Shopping",
        description: "Major regional mall in Colonial Heights with anchor stores and dining — the primary shopping destination for base families.",
      },
      {
        name: "Appomattox Court House National Historical Park",
        category: "Attraction",
        description: "Historic site where Lee surrendered to Grant, ending the Civil War — about 90 minutes from base and worth the trip.",
      },
    ],
    housing: {
      priceRange: "$230,000–$370,000",
      rentRange: "$1,200–$1,800/mo",
      marketContext: "The Petersburg metro is significantly more affordable than the Richmond core market. Military demand and Richmond spillover keep the market steady, with Colonial Heights and Prince George being the most budget-friendly.",
      hotNeighborhoods: ["Colonial Heights", "Chester", "Hopewell"],
    },
  },

  "fort-hamilton": {
    neighborhoods: [
      {
        name: "Bay Ridge, Brooklyn",
        description: "The neighborhood immediately surrounding Fort Hamilton, with classic Brooklyn rowhouses, a vibrant dining scene, and a surprisingly suburban feel for NYC.",
        commute: "5–10 min to main gate",
        tags: ["Urban", "Walkable", "Historic"],
      },
      {
        name: "Staten Island (Annadale / Tottenville)",
        description: "Southern Staten Island offers suburban single-family homes at relative NYC affordability, with a short ferry or bridge commute.",
        commute: "20–35 min to main gate",
        tags: ["Suburban", "Family-friendly", "Military community"],
      },
      {
        name: "Dyker Heights / Sunset Park",
        description: "Adjacent Brooklyn neighborhoods north of Fort Hamilton with strong Italian and Chinese immigrant communities, excellent food, and moderate housing.",
        commute: "10–15 min to main gate",
        tags: ["Urban", "Walkable", "Historic"],
      },
    ],
    schools: {
      district: "New York City Department of Education (District 20)",
      context: "NYC DOE District 20 covers the southwest Brooklyn area surrounding Fort Hamilton. School quality varies; many military families pursue specialized or charter school options.",
      highlights: [
        "Fort Hamilton High School is the local zoned high school and has a JROTC program",
        "NYC offers specialized high school options (Stuyvesant, Brooklyn Tech) accessible via exam",
        "District 20 has several well-regarded elementary schools including PS 105 and PS 176",
      ],
    },
    activities: [
      {
        name: "Verrazzano-Narrows Bridge Promenade",
        category: "Outdoors",
        description: "Walk or jog along the waterfront with iconic views of the Verrazzano Bridge, New York Harbor, and the Manhattan skyline.",
      },
      {
        name: "Totonno's Pizzeria Napolitano",
        category: "Dining",
        description: "One of New York's oldest and most celebrated pizzerias in Coney Island — a pilgrimage-worthy slice of NYC history.",
      },
      {
        name: "Coney Island",
        category: "Entertainment",
        description: "Legendary beachside amusement area with rides, the original Nathan's Famous hot dogs, and miles of Atlantic Ocean beach.",
      },
      {
        name: "Brooklyn Bridge Park",
        category: "Outdoors",
        description: "85-acre waterfront park under the Brooklyn Bridge with piers, playgrounds, kayaking, and stunning Manhattan views.",
      },
      {
        name: "Industry City",
        category: "Shopping",
        description: "Converted industrial waterfront complex in Sunset Park with independent shops, food halls, art studios, and weekend markets.",
      },
      {
        name: "Fort Wadsworth (Gateway NRA)",
        category: "Attraction",
        description: "Historic military installation on Staten Island open for tours, with stunning views of the Narrows — a fascinating military history site.",
      },
    ],
    housing: {
      priceRange: "$650,000–$1,100,000",
      rentRange: "$2,400–$3,800/mo",
      marketContext: "Fort Hamilton sits in one of the most expensive housing markets in the country. BAH is the highest in the Army, but out-of-pocket costs remain significant. Many families opt for Staten Island or New Jersey for more space.",
      hotNeighborhoods: ["Bay Ridge", "Dyker Heights", "Annadale (Staten Island)"],
    },
  },

  "fort-huachuca": {
    neighborhoods: [
      {
        name: "Sierra Vista (Buena area)",
        description: "The primary city adjacent to Fort Huachuca, with the full range of suburban amenities and a population that is roughly 40% military-connected.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Huachuca City",
        description: "Small town just north of the base with very affordable housing — a common choice for junior enlisted families watching their budget.",
        commute: "10–15 min to main gate",
        tags: ["Affordable", "Rural", "Military community"],
      },
      {
        name: "Bisbee / Tombstone area",
        description: "Historic Old West communities in the surrounding mountains, popular with retirees and those seeking unique character over suburban convenience.",
        commute: "25–40 min to main gate",
        tags: ["Historic", "Rural", "Retiree-friendly"],
      },
    ],
    schools: {
      district: "Sierra Vista Unified School District / Tombstone Unified School District",
      context: "Sierra Vista USD serves the primary base community and is familiar with high military family turnover, offering streamlined enrollment processes.",
      highlights: [
        "Buena High School and Cochise High School serve the main military family areas",
        "District has a military family support coordinator",
        "Cochise College (community college) is right in Sierra Vista for continuing education",
      ],
    },
    activities: [
      {
        name: "Ramsey Canyon Preserve",
        category: "Outdoors",
        description: "Nature Conservancy preserve famous worldwide for hummingbird diversity — over a dozen species visit this canyon in the Huachuca Mountains.",
      },
      {
        name: "Kartchner Caverns State Park",
        category: "Attraction",
        description: "Living cave discovered in 1974 with stunning formations — one of Arizona's premier natural attractions, about 45 minutes north.",
      },
      {
        name: "Tombstone",
        category: "Attraction",
        description: "The legendary Old West town of the Earps and Doc Holliday, with daily gunfight reenactments and historic saloons — a fun family day trip.",
      },
      {
        name: "La Casita Restaurant",
        category: "Dining",
        description: "Beloved Sierra Vista Mexican restaurant with authentic Sonoran-style dishes that has fed generations of Fort Huachuca soldiers.",
      },
      {
        name: "Sierra Vista Mall",
        category: "Shopping",
        description: "The area's main retail center, anchored by big-box stores and national retailers serving the military community.",
      },
      {
        name: "San Pedro Riparian National Conservation Area",
        category: "Outdoors",
        description: "Internationally significant bird habitat along the San Pedro River with excellent hiking, birdwatching, and stargazing.",
      },
    ],
    housing: {
      priceRange: "$200,000–$320,000",
      rentRange: "$1,000–$1,600/mo",
      marketContext: "Sierra Vista is an affordable market anchored almost entirely by Fort Huachuca. Prices are stable and accessible. The small market means fewer choices but no shortage of inventory for PCSing soldiers.",
      hotNeighborhoods: ["Buena Vista", "Pueblo Del Sol", "Huachuca City"],
    },
  },

  "fort-jackson": {
    neighborhoods: [
      {
        name: "Forest Acres / Arcadia Lakes",
        description: "Upscale suburban communities northeast of downtown Columbia, convenient to Fort Jackson and popular with officers and senior NCOs.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Family-friendly", "Retiree-friendly"],
      },
      {
        name: "Northeast Columbia (Sandhill area)",
        description: "Growing suburbs in Richland County northeast of the base with newer construction and easy gate access — a top choice for military families.",
        commute: "5–15 min to main gate",
        tags: ["Suburban", "New construction", "Military community"],
      },
      {
        name: "Lexington",
        description: "Booming suburb southwest of Columbia (longer commute) with excellent schools, lower taxes, and strong community infrastructure.",
        commute: "30–40 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
    ],
    schools: {
      district: "Richland County School District Two",
      context: "Richland Two is one of South Carolina's highest-rated large districts and serves the primary military family communities near Fort Jackson.",
      highlights: [
        "Ridge View High School and Spring Valley High School are the flagship campuses",
        "Richland Two has a dedicated Military Family Advisory Council",
        "District has multiple National Blue Ribbon schools within its boundaries",
      ],
    },
    activities: [
      {
        name: "Congaree National Park",
        category: "Outdoors",
        description: "America's largest intact old-growth bottomland hardwood forest, with boardwalk trails and kayaking through primeval cypress swamps.",
      },
      {
        name: "Lake Murray",
        category: "Outdoors",
        description: "Large reservoir west of Columbia with extensive recreation including boating, fishing, and beaches — a regional outdoor hub.",
      },
      {
        name: "Motor Supply Co. Bistro",
        category: "Dining",
        description: "Award-winning farm-to-table restaurant in downtown Columbia's Congaree Vista district, a local institution since 1989.",
      },
      {
        name: "South Carolina State Museum",
        category: "Attraction",
        description: "Comprehensive state museum in Columbia covering art, history, natural history, and space exploration in a converted textile mill.",
      },
      {
        name: "Sandhill Shopping Area",
        category: "Shopping",
        description: "Large lifestyle shopping center near base with national retailers, restaurants, and a movie theater.",
      },
      {
        name: "EdVenture Children's Museum",
        category: "Entertainment",
        description: "One of the largest children's museums in the Southeast, featuring Eddie — the world's largest child exhibit — and dozens of hands-on galleries.",
      },
    ],
    housing: {
      priceRange: "$240,000–$380,000",
      rentRange: "$1,200–$1,900/mo",
      marketContext: "Columbia is an affordable Sun Belt market. Fort Jackson proximity keeps northeast Columbia in steady demand. Lexington is the most competitive submarket due to school quality.",
      hotNeighborhoods: ["Northeast Columbia", "Forest Acres", "Irmo"],
    },
  },

  "fort-johnson": {
    neighborhoods: [
      {
        name: "Leesville",
        description: "The small city immediately adjacent to Fort Johnson, offering the most affordable and most military-centric housing in the area.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "DeRidder",
        description: "Larger city about 20 miles from base with more suburban amenities, better retail options, and a slightly broader community outside the military bubble.",
        commute: "25–30 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
      {
        name: "Anacoco / Westlake Road area",
        description: "Rural communities southwest of Fort Johnson with acreage properties and very affordable land for families wanting a country lifestyle.",
        commute: "15–25 min to main gate",
        tags: ["Rural", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Vernon Parish School Board",
      context: "Vernon Parish schools serve Leesville and surrounding communities. The district is familiar with military family transitions given Fort Johnson's large training population.",
      highlights: [
        "Leesville High School serves the primary base community",
        "New Llano Elementary is popular with military families on the east side of Leesville",
        "Beauregard Parish School Board (DeRidder area) has well-regarded schools for those willing to commute",
      ],
    },
    activities: [
      {
        name: "Toledo Bend Reservoir",
        category: "Outdoors",
        description: "One of the largest man-made lakes in the US on the Texas-Louisiana border, famous for world-class bass fishing and beautiful scenery.",
      },
      {
        name: "Kisatchie National Forest",
        category: "Outdoors",
        description: "Louisiana's only national forest, surrounding Fort Johnson with hundreds of miles of hiking and ATV trails.",
      },
      {
        name: "The Big Easy Bar & Grill",
        category: "Dining",
        description: "Local Leesville staple serving Louisiana classics like crawfish, boudin, and po'boys — authentic Cajun flavors near base.",
      },
      {
        name: "Hodges Gardens State Park",
        category: "Outdoors",
        description: "Scenic garden park with a large lake, manicured gardens, and abundant wildlife — a peaceful escape from base life.",
      },
      {
        name: "Fort Polk Military Museum",
        category: "Attraction",
        description: "On-post museum (former name) documenting the history of Fort Johnson and its predecessor installations since WWII.",
      },
      {
        name: "Leesville Cinema",
        category: "Entertainment",
        description: "Local movie theater serving the Leesville community — one of the primary entertainment options in the small city.",
      },
    ],
    housing: {
      priceRange: "$140,000–$230,000",
      rentRange: "$800–$1,300/mo",
      marketContext: "Fort Johnson's market is among the most affordable in the Army. The remote location of Leesville keeps prices very accessible, though the rental market is heavily tied to military tenants.",
      hotNeighborhoods: ["Leesville East", "New Llano", "DeRidder"],
    },
  },

  "fort-knox": {
    neighborhoods: [
      {
        name: "Radcliff",
        description: "City immediately outside Fort Knox's main gate, purpose-built around the installation with a high density of military families and supporting businesses.",
        commute: "5 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Elizabethtown",
        description: "Larger city 10 miles from base with better retail options, restaurants, and a growing suburban community popular with families wanting more amenities.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "Affordable"],
      },
      {
        name: "Vine Grove",
        description: "Small community between Radcliff and Elizabethtown with newer home developments and a quieter neighborhood feel.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Hardin County Schools",
      context: "Hardin County Schools serves the Fort Knox area and is well-versed in supporting military families, with Purple Star designations at several campuses.",
      highlights: [
        "North Hardin High School (Radcliff) has a strong JROTC program and is the main military family campus",
        "Central Hardin High School (Elizabethtown) has higher academic rankings",
        "District maintains a Military Family Support Liaison",
      ],
    },
    activities: [
      {
        name: "Patton Museum of Cavalry and Armor",
        category: "Attraction",
        description: "World-class military museum on post dedicated to Gen. George S. Patton with an extraordinary collection of historic tanks and artifacts.",
      },
      {
        name: "Mammoth Cave National Park",
        category: "Outdoors",
        description: "The world's longest known cave system, about 45 minutes from Fort Knox — a must-do natural wonder for every family stationed here.",
      },
      {
        name: "Lincoln Jamboree",
        category: "Entertainment",
        description: "Long-running weekly country music show in Hodgenville (near Lincoln's birthplace) — a unique Kentucky entertainment tradition.",
      },
      {
        name: "Elizabethtown Square",
        category: "Dining",
        description: "Historic downtown Elizabethtown with local restaurants, coffee shops, and the occasional farmers market.",
      },
      {
        name: "Elizabethtown Community and Technical College",
        category: "Attraction",
        description: "Key resource for continuing education and spouse employment programs in the area.",
      },
      {
        name: "Leitchfield Lake (Rough River Lake)",
        category: "Outdoors",
        description: "Corps of Engineers lake about an hour west with boating, fishing, and camping — a popular Fort Knox family weekend destination.",
      },
    ],
    housing: {
      priceRange: "$170,000–$280,000",
      rentRange: "$900–$1,400/mo",
      marketContext: "The Fort Knox market is very affordable, with Radcliff being the lowest-cost option and Elizabethtown offering more amenities at a slightly higher price. Louisville (40 min) is accessible for those wanting a larger city.",
      hotNeighborhoods: ["Radcliff", "Vine Grove", "Elizabethtown"],
    },
  },

  "fort-leavenworth": {
    neighborhoods: [
      {
        name: "Leavenworth (Downtown / South side)",
        description: "The historic city surrounding Fort Leavenworth, with Victorian-era homes and a tight-knit community centered on the Army's Command and General Staff College.",
        commute: "5–10 min to main gate",
        tags: ["Historic", "Military community", "Family-friendly"],
      },
      {
        name: "Lansing",
        description: "Suburban community adjacent to Leavenworth with newer homes, good schools, and easy access to the base at a lower price point.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
      {
        name: "Basehor / Leavenworth County rural",
        description: "Suburban-rural areas east of Kansas City with larger lots, newer homes, and access to KC metro while remaining reasonably close to post.",
        commute: "20–30 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Leavenworth USD 453",
      context: "USD 453 serves Leavenworth and is familiar with the CGSC student population cycling through annually. The district has processes in place for frequent military family transitions.",
      highlights: [
        "Leavenworth High School is the main campus for base families",
        "Several elementary schools are rated above state average",
        "Basehor-Linwood USD 458 is highly rated for families who can commute from the county",
      ],
    },
    activities: [
      {
        name: "Fort Leavenworth National Cemetery",
        category: "Attraction",
        description: "One of the nation's oldest military cemeteries, with guided tours offering deep insight into Army history from frontier days onward.",
      },
      {
        name: "Frontier Army Museum",
        category: "Attraction",
        description: "On-post museum documenting the history of Fort Leavenworth and the frontier Army — highly relevant to CGSC students and history buffs.",
      },
      {
        name: "Missouri River Brewery",
        category: "Dining",
        description: "Leavenworth craft brewery with river views, house-made beers, and a popular patio — a great spot to unwind after command school.",
      },
      {
        name: "Weston Bend State Park",
        category: "Outdoors",
        description: "Scenic Missouri River park with hiking trails, views, and fall foliage — one of the region's most beautiful state parks.",
      },
      {
        name: "Kansas City (Power & Light District)",
        category: "Entertainment",
        description: "KC's entertainment hub is just 30 minutes away, offering world-class dining, live music, Chiefs/Royals games, and the famous KC BBQ scene.",
      },
      {
        name: "Zona Rosa Shopping Center",
        category: "Shopping",
        description: "Large outdoor lifestyle center in North Kansas City with national retailers — the closest significant shopping hub to Fort Leavenworth.",
      },
    ],
    housing: {
      priceRange: "$220,000–$360,000",
      rentRange: "$1,100–$1,700/mo",
      marketContext: "Leavenworth is an affordable market with a steady military demand cycle tied to CGSC class rotations. Victorian homes downtown can be surprisingly affordable; newer construction in Lansing and Basehor commands more.",
      hotNeighborhoods: ["Lansing", "Leavenworth South Side", "Basehor"],
    },
  },

  "fort-leonard-wood": {
    neighborhoods: [
      {
        name: "Waynesville",
        description: "The city immediately adjacent to Fort Leonard Wood, with a dense military commercial strip and a growing residential base.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "St. Robert",
        description: "Community bordering the base that caters almost entirely to military families, with abundant apartment complexes and affordable single-family rentals.",
        commute: "5 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Richland / Dixon areas",
        description: "Rural Pulaski County communities with land and acreage available at very low prices for families wanting a country lifestyle.",
        commute: "15–25 min to main gate",
        tags: ["Rural", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Waynesville R-VI School District",
      context: "Waynesville R-VI is highly regarded in Missouri and receives recognition for its military family support programs, including a dedicated Military Family Life Counselor presence.",
      highlights: [
        "Waynesville High School has strong JROTC, athletics, and career-tech programs",
        "District has won multiple Purple Star designations",
        "Student population is over 50% military-connected, making transitions seamless",
      ],
    },
    activities: [
      {
        name: "Big Piney River (Mark Twain National Forest)",
        category: "Outdoors",
        description: "Crystal-clear Ozark river ideal for floating, kayaking, and fishing — one of Missouri's best float trips, right outside the base.",
      },
      {
        name: "Missouri Military Memorial Museum",
        category: "Attraction",
        description: "Community museum in Waynesville documenting Missouri's military heritage and the history of Fort Leonard Wood.",
      },
      {
        name: "Roubidoux Spring & Creek",
        category: "Outdoors",
        description: "Natural spring and swimming hole in Waynesville that's a beloved local spot, especially for families during summer.",
      },
      {
        name: "Old Stagecoach Stop",
        category: "Dining",
        description: "Historic tavern and restaurant in Waynesville serving American comfort food in a 19th-century stone building.",
      },
      {
        name: "Lake of the Ozarks",
        category: "Outdoors",
        description: "Missouri's premier recreational lake about 45 minutes north — boating, water parks, and lakeside restaurants draw Fort Leonard Wood families all summer.",
      },
      {
        name: "Fort Wood Hotels & Entertainment",
        category: "Entertainment",
        description: "Local entertainment cluster in St. Robert with bowling, movie theater, and dining catering to the military community.",
      },
    ],
    housing: {
      priceRange: "$150,000–$240,000",
      rentRange: "$800–$1,200/mo",
      marketContext: "The Fort Leonard Wood market is extremely affordable. The isolated location of the Ozarks keeps prices low. St. Robert and Waynesville are the primary rental markets, almost entirely military-driven.",
      hotNeighborhoods: ["St. Robert", "Waynesville", "Richland"],
    },
  },

  "fort-bragg": {
    neighborhoods: [
      {
        name: "Hope Mills",
        description: "Suburban community southwest of Fayetteville with affordable single-family homes and easy access to Fort Bragg's gates.",
        commute: "10–15 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Raeford",
        description: "Small city west of the base in Hoke County, known for very affordable housing and proximity to the Bragg back gates.",
        commute: "20–25 min to main gate",
        tags: ["Affordable", "Rural", "Military community"],
      },
      {
        name: "Haymount / Downtown Fayetteville",
        description: "Historic Fayetteville neighborhood with larger older homes and walkable proximity to downtown restaurants, parks, and the Cape Fear River.",
        commute: "15–20 min to main gate",
        tags: ["Historic", "Walkable", "Urban"],
      },
    ],
    schools: {
      district: "Cumberland County Schools",
      context: "Cumberland County Schools serves Fayetteville and Fort Bragg — one of the most military-diverse districts in the nation with extensive transition support.",
      highlights: [
        "District has over a dozen Purple Star school designations",
        "Terry Sanford High School and Jack Britt High School are the top-rated campuses",
        "District employs full-time Military Family Support Liaisons at every school level",
      ],
    },
    activities: [
      {
        name: "Airborne & Special Operations Museum",
        category: "Attraction",
        description: "World-class free museum in downtown Fayetteville documenting the history of airborne and special operations forces — a must-visit for any Army family.",
      },
      {
        name: "Cape Fear Botanical Garden",
        category: "Outdoors",
        description: "Beautifully maintained 80-acre garden along the Cape Fear River with seasonal blooms, trails, and family events.",
      },
      {
        name: "Segra Stadium",
        category: "Entertainment",
        description: "Modern downtown baseball stadium hosting the Fayetteville Woodpeckers (Houston Astros affiliate) — great affordable family entertainment.",
      },
      {
        name: "Mash House Brewing Company",
        category: "Dining",
        description: "Local Fayetteville brewery and restaurant with craft beers and a welcoming atmosphere popular with soldiers and families.",
      },
      {
        name: "Cross Creek Mall",
        category: "Shopping",
        description: "Primary regional mall in Fayetteville with major retailers and a strong military discount culture among tenants.",
      },
      {
        name: "Carvers Creek State Park",
        category: "Outdoors",
        description: "Longleaf pine forest state park near Spring Lake with hiking trails and swimming hole access — a peaceful natural escape.",
      },
    ],
    housing: {
      priceRange: "$200,000–$320,000",
      rentRange: "$1,100–$1,700/mo",
      marketContext: "Fayetteville is an affordable military market. The large military population creates consistent rental demand. Hope Mills and Raeford offer the best value; neighborhoods like Haymount command a small premium.",
      hotNeighborhoods: ["Hope Mills", "Haymount", "Seventy First area"],
    },
  },

  "fort-meade": {
    neighborhoods: [
      {
        name: "Odenton",
        description: "The planned community immediately surrounding Fort Meade, with newer townhomes and single-family homes along the MARC train corridor to DC and Baltimore.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Suburban", "New construction"],
      },
      {
        name: "Crofton",
        description: "Upscale planned community adjacent to Odenton with excellent schools, golf courses, and a strong sense of neighborhood pride.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Golf community", "Family-friendly"],
      },
      {
        name: "Severn / Glen Burnie",
        description: "Larger suburban communities offering more affordable options with access to both Fort Meade and the Baltimore metro job market.",
        commute: "15–25 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Anne Arundel County Public Schools",
      context: "AACPS is one of Maryland's stronger districts, with schools near Fort Meade benefiting from a well-educated parent population in NSA and defense contractor families.",
      highlights: [
        "Arundel High School and Crofton High School serve the primary military family areas",
        "District has Purple Star school designations recognizing military family support",
        "AACPS consistently performs above state averages in math and reading",
      ],
    },
    activities: [
      {
        name: "National Cryptologic Museum",
        category: "Attraction",
        description: "Free museum adjacent to NSA Headquarters documenting the history of U.S. signals intelligence and cryptology — one of the most unique military museums in the country.",
      },
      {
        name: "Quiet Waters Park",
        category: "Outdoors",
        description: "340-acre Anne Arundel County park on the South River with walking trails, dog parks, and an outdoor skating rink in winter.",
      },
      {
        name: "Maryland Live! Casino",
        category: "Entertainment",
        description: "Major casino and entertainment complex in Hanover with live music, restaurants, and gaming — 10 minutes from base.",
      },
      {
        name: "The Rusty Scupper",
        category: "Dining",
        description: "Iconic Baltimore Inner Harbor restaurant with stunning waterfront views and fresh Mid-Atlantic seafood — 25 minutes from base.",
      },
      {
        name: "Arundel Mills Mall",
        category: "Shopping",
        description: "Massive outlet and retail mall near Fort Meade with over 200 stores, dining, and entertainment including a movie theater.",
      },
      {
        name: "Patuxent Research Refuge",
        category: "Outdoors",
        description: "National wildlife refuge on the base perimeter with hiking trails, wildlife observation, and a nature center — free and family-friendly.",
      },
    ],
    housing: {
      priceRange: "$380,000–$580,000",
      rentRange: "$1,800–$2,800/mo",
      marketContext: "Fort Meade sits in the expensive Baltimore-Washington corridor. NSA and defense contractor demand keeps the market competitive year-round. Odenton is the sweet spot for military families, but prices have risen sharply.",
      hotNeighborhoods: ["Odenton", "Crofton", "Piney Orchard"],
    },
  },

  "fort-benning": {
    neighborhoods: [
      {
        name: "Phenix City, AL",
        description: "Alabama city directly across the Chattahoochee River from Columbus, offering affordable housing with quick bridge access to the base.",
        commute: "10–15 min to main gate",
        tags: ["Affordable", "Suburban", "Military community"],
      },
      {
        name: "North Columbus / Midland",
        description: "Northern Columbus suburbs with newer construction, top-rated Muscogee County schools, and easy access to Fort Benning's main gate.",
        commute: "10–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "Wynton Road / South Columbus",
        description: "South Columbus communities closest to Fort Benning's main gate with affordable, established neighborhoods and high military density.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
    ],
    schools: {
      district: "Muscogee County School District",
      context: "MCSD serves Columbus and is experienced with the Fort Benning military family population, with multiple Purple Star schools and an active military liaison program.",
      highlights: [
        "Northside High School consistently ranks as MCSD's highest-performing campus",
        "Columbus High School is the magnet academic school with IB programming",
        "District has a Military Student Transition Coordinator at each level",
      ],
    },
    activities: [
      {
        name: "National Infantry Museum",
        category: "Attraction",
        description: "One of the finest military museums in America, documenting the history of the U.S. Army Infantry from colonial times to today — free and on post.",
      },
      {
        name: "Chattahoochee RiverWalk",
        category: "Outdoors",
        description: "22-mile scenic paved trail along the Chattahoochee River connecting Columbus to Phenix City — excellent for cycling, jogging, and family walks.",
      },
      {
        name: "Whitewater Express",
        category: "Outdoors",
        description: "World-class whitewater rafting on the Chattahoochee through downtown Columbus — one of the longest urban whitewater courses in the world.",
      },
      {
        name: "The Loft Restaurant",
        category: "Dining",
        description: "Upscale Columbus restaurant in a restored historic building, known for fresh seafood and Southern-inspired cuisine.",
      },
      {
        name: "Columbus Park Crossing",
        category: "Shopping",
        description: "Large outdoor shopping center in Columbus with major retailers, restaurants, and a movie theater.",
      },
      {
        name: "Coca-Cola Space Science Center",
        category: "Attraction",
        description: "Planetarium and science museum in Columbus affiliated with Columbus State University — a great family STEM destination.",
      },
    ],
    housing: {
      priceRange: "$170,000–$290,000",
      rentRange: "$1,000–$1,500/mo",
      marketContext: "Columbus is an affordable market with a large military-driven rental sector. Phenix City, AL offers the lowest prices. North Columbus commands a premium for better schools but remains highly affordable.",
      hotNeighborhoods: ["North Columbus", "Phenix City", "Midland"],
    },
  },

  "fort-myer": {
    neighborhoods: [
      {
        name: "Arlington (Alcova Heights / Columbia Pike)",
        description: "Diverse Arlington neighborhoods south of the Pentagon and Fort Myer with walkable streets, metro access, and a range of housing options.",
        commute: "5–10 min to main gate",
        tags: ["Urban", "Walkable", "Historic"],
      },
      {
        name: "Arlington (Clarendon / Ballston)",
        description: "Trendy transit-oriented Arlington neighborhoods with excellent restaurant scenes, nightlife, and direct Metro access to DC.",
        commute: "10–15 min to main gate",
        tags: ["Urban", "Walkable", "Nightlife"],
      },
      {
        name: "Falls Church / Alexandria",
        description: "Adjacent independent cities with excellent schools, historic character, and suburban amenities slightly removed from the DC core.",
        commute: "15–20 min to main gate",
        tags: ["Historic", "Family-friendly", "Suburban"],
      },
    ],
    schools: {
      district: "Arlington Public Schools",
      context: "Arlington Public Schools is one of the highest-rated urban school districts in the nation with diverse, well-resourced campuses and strong special programs.",
      highlights: [
        "Washington-Lee (now Washington-Liberty) and Yorktown High School are the flagship high schools",
        "District has numerous IB, language immersion, and STEM magnet programs",
        "Very high teacher quality and significant per-pupil spending compared to national averages",
      ],
    },
    activities: [
      {
        name: "Arlington National Cemetery",
        category: "Attraction",
        description: "America's most hallowed military burial ground — the Tomb of the Unknown Soldier and burial services are deeply meaningful experiences for military families.",
      },
      {
        name: "Pentagon Memorial",
        category: "Attraction",
        description: "Outdoor memorial honoring the 184 victims of the 9/11 Pentagon attack — a moving and important site adjacent to the installation.",
      },
      {
        name: "Crystal City Underground",
        category: "Shopping",
        description: "Underground shopping and dining corridor connecting Crystal City's office buildings — convenient for quick errands during the workday.",
      },
      {
        name: "The Capital Grille (Tysons)",
        category: "Dining",
        description: "Upscale steakhouse in nearby Tysons Corner — ideal for officer dining and special occasions.",
      },
      {
        name: "Theodore Roosevelt Island",
        category: "Outdoors",
        description: "Car-free island nature park in the Potomac River, accessible via footbridge — a surprising natural escape minutes from the DC hustle.",
      },
      {
        name: "Washington DC National Mall",
        category: "Attraction",
        description: "The full suite of Smithsonian museums, monuments, and memorials — all free and within 15 minutes of Fort Myer.",
      },
    ],
    housing: {
      priceRange: "$650,000–$1,200,000",
      rentRange: "$2,500–$4,200/mo",
      marketContext: "Arlington is one of the most expensive housing markets in the country. Fort Myer assignments come with the highest BAH rates in the Army but purchasing is extremely challenging. Most junior personnel rent; senior officers may consider further-out suburbs.",
      hotNeighborhoods: ["Clarendon", "Ballston", "Columbia Pike"],
    },
  },

  "fort-novosel": {
    neighborhoods: [
      {
        name: "Daleville",
        description: "Small city immediately adjacent to Fort Novosel with dense military housing options and direct gate access.",
        commute: "5 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Enterprise",
        description: "The region's largest city about 20 minutes east, with substantially more retail, dining, and housing options at still very affordable prices.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
      {
        name: "Ozark",
        description: "Dale County seat between Daleville and Enterprise, with small-town character, newer home developments, and good community feel.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Dale County Schools / Coffee County Schools",
      context: "Dale County Schools serves Ozark and Daleville, while Coffee County Schools serves Enterprise. Enterprise City Schools is typically rated higher and covers families willing to commute.",
      highlights: [
        "Enterprise High School consistently ranks among Alabama's top public schools",
        "George W. Long High School (Dale County) has a strong ROTC program",
        "Both districts have experience with military family enrollment due to Fort Novosel proximity",
      ],
    },
    activities: [
      {
        name: "Boll Weevil Monument",
        category: "Attraction",
        description: "Enterprise's famous monument to the boll weevil — a quirky historical landmark celebrating how adversity led to agricultural diversification.",
      },
      {
        name: "Army Aviation Museum",
        category: "Attraction",
        description: "On-post museum with the world's largest collection of Army helicopters — an extraordinary free attraction open to the public.",
      },
      {
        name: "Conecuh National Forest",
        category: "Outdoors",
        description: "Beautiful longleaf pine forest an hour south, offering hiking, fishing, and swimming in pristine natural springs.",
      },
      {
        name: "Mama Mia's Italian Restaurant",
        category: "Dining",
        description: "Beloved Enterprise Italian restaurant that has fed generations of Fort Rucker/Novosel aviators and their families.",
      },
      {
        name: "Enterprise Shopping Center",
        category: "Shopping",
        description: "The main retail hub for the Fort Novosel area with national retailers and a military-friendly commercial atmosphere.",
      },
      {
        name: "Lake Tholocco",
        category: "Outdoors",
        description: "On-post recreation lake offering fishing, boating, and camping for active-duty families and their guests.",
      },
    ],
    housing: {
      priceRange: "$160,000–$270,000",
      rentRange: "$900–$1,400/mo",
      marketContext: "The Fort Novosel area is very affordable. Daleville is the cheapest option; Enterprise offers more amenities at a slightly higher price. The market is almost entirely driven by the aviation training mission.",
      hotNeighborhoods: ["Daleville", "Ozark", "Enterprise"],
    },
  },

  "fort-riley": {
    neighborhoods: [
      {
        name: "Junction City",
        description: "City immediately adjacent to Fort Riley, with the majority of off-post military housing, retail, and services for soldiers.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Manhattan (Aggieville area)",
        description: "College town 15 minutes east of base, home to Kansas State University with a vibrant dining and entertainment scene popular with military families.",
        commute: "15–20 min to main gate",
        tags: ["College town", "Walkable", "Family-friendly"],
      },
      {
        name: "Ogden",
        description: "Small community right outside Fort Riley's east gate — essentially a bedroom community for the post with very affordable housing.",
        commute: "5 min to east gate",
        tags: ["Military community", "Affordable", "Rural"],
      },
    ],
    schools: {
      district: "Geary County Schools USD 475",
      context: "USD 475 serves Junction City and is one of the most military-connected districts in Kansas, with decades of experience supporting PCS family transitions.",
      highlights: [
        "Junction City High School and Milford High School are the main campuses",
        "District has one of the highest percentages of military-connected students in Kansas",
        "Purple Star school designations district-wide",
      ],
    },
    activities: [
      {
        name: "First Infantry Division Museum",
        category: "Attraction",
        description: "On-post museum honoring the Big Red One's history — an impressive collection of artifacts and vehicles spanning WWI to recent conflicts.",
      },
      {
        name: "Milford Lake",
        category: "Outdoors",
        description: "Kansas's largest reservoir, just north of the base, with extensive recreation including sailing, fishing, hiking, and a state park.",
      },
      {
        name: "Aggieville (Manhattan, KS)",
        category: "Dining",
        description: "The entertainment district adjacent to KSU with dozens of bars, restaurants, and live music venues — a popular off-post destination.",
      },
      {
        name: "Konza Prairie Biological Station",
        category: "Outdoors",
        description: "Pristine native tallgrass prairie preserve near Manhattan with hiking trails offering an authentic Great Plains landscape experience.",
      },
      {
        name: "Manhattan Town Center Mall",
        category: "Shopping",
        description: "Main regional mall in Manhattan with major retailers and dining, serving the Fort Riley and KSU community.",
      },
      {
        name: "Wamego Tulip Festival / Wizard of Oz Museum",
        category: "Attraction",
        description: "Quirky small-town attraction in nearby Wamego celebrating Oz history and hosting an annual spring tulip festival.",
      },
    ],
    housing: {
      priceRange: "$160,000–$270,000",
      rentRange: "$900–$1,400/mo",
      marketContext: "The Junction City-Manhattan area is an affordable market. Junction City is slightly cheaper; Manhattan commands a premium from KSU demand. The market is stable with consistent military and student demand.",
      hotNeighborhoods: ["Junction City South", "Manhattan (Poyntz Ave area)", "Ogden"],
    },
  },

  "fort-sam-houston": {
    neighborhoods: [
      {
        name: "Alamo Heights / Terrell Hills",
        description: "Upscale independent cities encircled by San Antonio, immediately adjacent to Fort Sam Houston with excellent schools and historic neighborhoods.",
        commute: "5–10 min to main gate",
        tags: ["Historic", "Family-friendly", "Retiree-friendly"],
      },
      {
        name: "Stone Oak / North San Antonio",
        description: "Master-planned suburban communities north of the city with newer homes, highly rated schools, and strong amenities — popular with senior personnel.",
        commute: "20–30 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
      {
        name: "Converse / Universal City",
        description: "East San Antonio suburbs adjacent to Randolph AFB, offering affordable homes with easy access to both Fort Sam Houston and JBSA-Randolph.",
        commute: "20–25 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
    ],
    schools: {
      district: "Alamo Heights ISD / North East ISD",
      context: "Alamo Heights ISD is tiny but ranks among the top in Texas. North East ISD serves the larger Stone Oak and northeast areas with excellent programs.",
      highlights: [
        "Alamo Heights High School consistently ranks in the top 5% of Texas high schools",
        "MacArthur High School (NEISD) has strong AP programs and serves Stone Oak families",
        "Both districts have active military family liaison programs",
      ],
    },
    activities: [
      {
        name: "The Alamo",
        category: "Attraction",
        description: "The most visited historic site in Texas — just minutes from Fort Sam Houston and an essential experience for every family stationed here.",
      },
      {
        name: "San Antonio River Walk",
        category: "Outdoors",
        description: "The iconic 15-mile urban waterway lined with restaurants, bars, and hotels — a vibrant outdoor promenade in the heart of San Antonio.",
      },
      {
        name: "Pearl Brewery District",
        category: "Dining",
        description: "Converted historic brewery complex that is now SA's premier dining and shopping neighborhood, with James Beard-nominated restaurants.",
      },
      {
        name: "Six Flags Fiesta Texas",
        category: "Entertainment",
        description: "Major theme park with rollercoasters and a waterpark — military discount programs make this very accessible for Army families.",
      },
      {
        name: "La Cantera Resort & Shops",
        category: "Shopping",
        description: "Upscale outdoor shopping and dining complex in northwest San Antonio with stunning Hill Country views.",
      },
      {
        name: "Natural Bridge Caverns",
        category: "Attraction",
        description: "Texas's largest natural caverns, just north of San Antonio — a spectacular underground adventure for the whole family.",
      },
    ],
    housing: {
      priceRange: "$290,000–$480,000",
      rentRange: "$1,400–$2,400/mo",
      marketContext: "San Antonio is the most affordable large city in Texas for military families. Fort Sam's location in central SA is convenient. JBSA's multiple installations keep demand steady, but inventory is generally healthy.",
      hotNeighborhoods: ["Alamo Heights", "Stone Oak", "Terrell Hills"],
    },
  },

  "fort-sill": {
    neighborhoods: [
      {
        name: "Lawton (Cache Road corridor)",
        description: "The main commercial and residential corridor outside Fort Sill, with dense military housing and all supporting services.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Elgin",
        description: "Small community south of Lawton near the Wichita Mountains with newer home developments and a quieter suburban feel.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
      {
        name: "Fletcher Road / Southwest Lawton",
        description: "Newer southwest Lawton subdivisions with better-maintained neighborhoods and slightly newer housing stock than the Cache Road area.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Lawton Public Schools",
      context: "Lawton Public Schools is the primary district serving Fort Sill families. It is the largest district in southwest Oklahoma and has considerable military family experience.",
      highlights: [
        "MacArthur High School and Lawton High School are the main campuses",
        "District has dedicated military family support services",
        "Elgin Public Schools (smaller district) is rated higher and serves families commuting from Elgin",
      ],
    },
    activities: [
      {
        name: "Wichita Mountains Wildlife Refuge",
        category: "Outdoors",
        description: "Stunning National Wildlife Refuge with free-roaming bison, elk, and prairie dogs — hiking, rock climbing, and camping right outside Lawton.",
      },
      {
        name: "Fort Sill National Historic Landmark & Museum",
        category: "Attraction",
        description: "One of the Army's oldest and best-preserved historic installations with Old Post buildings dating to 1869 and an excellent Artillery museum.",
      },
      {
        name: "Elmer Thomas Park",
        category: "Outdoors",
        description: "Large Lawton city park with a lake, botanical garden, zoo, and extensive recreation facilities.",
      },
      {
        name: "Meers Restaurant",
        category: "Dining",
        description: "Famous Wichita Mountains roadhouse serving enormous Longhorn beef burgers — a Fort Sill institution that soldiers have been visiting for generations.",
      },
      {
        name: "Central Mall Lawton",
        category: "Shopping",
        description: "Main shopping mall in Lawton with major retailers serving the military and civilian community.",
      },
      {
        name: "Comanche National Museum and Cultural Center",
        category: "Attraction",
        description: "Museum in Lawton celebrating the culture and history of the Comanche Nation — provides important context for the region's deep Native history.",
      },
    ],
    housing: {
      priceRange: "$150,000–$250,000",
      rentRange: "$800–$1,300/mo",
      marketContext: "Lawton is one of the most affordable military markets in the country. The isolated location keeps prices very low. Elgin is the most desirable submarket but commands only a modest premium.",
      hotNeighborhoods: ["Southwest Lawton", "Elgin", "Cache Road area"],
    },
  },

  "fort-stewart": {
    neighborhoods: [
      {
        name: "Hinesville",
        description: "The city immediately adjacent to Fort Stewart, purpose-built to support the installation with a high density of military families and services.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Richmond Hill",
        description: "Rapidly growing suburb between Fort Stewart and Savannah with newer homes, excellent Bryan County schools, and a strong community infrastructure.",
        commute: "25–35 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
      {
        name: "Savannah (Southside)",
        description: "The southern suburbs of Georgia's most beautiful city — longer commute but access to world-class dining, history, and the Georgia coast.",
        commute: "45–55 min to main gate",
        tags: ["Historic", "Family-friendly", "Walkable"],
      },
    ],
    schools: {
      district: "Liberty County School System",
      context: "Liberty County Schools serves Hinesville and surroundings, with heavy military enrollment and strong transition support programs.",
      highlights: [
        "Liberty County High School and Bradwell Institute are the main campuses",
        "Bryan County Schools (Richmond Hill) consistently outperforms Liberty County in state rankings",
        "District has a full-time Military Family Liaison",
      ],
    },
    activities: [
      {
        name: "Fort Stewart Museum",
        category: "Attraction",
        description: "On-post museum documenting the 3rd Infantry Division's history — the oldest continuously active division in the U.S. Army.",
      },
      {
        name: "Savannah Historic District",
        category: "Attraction",
        description: "One of America's most beautiful historic cities, 45 minutes from base — squares, antebellum architecture, River Street dining, and ghost tours.",
      },
      {
        name: "Tybee Island Beach",
        category: "Outdoors",
        description: "Georgia's closest beach to Fort Stewart, about an hour away via Savannah — a beloved weekend getaway for base families.",
      },
      {
        name: "Dogwood Festival & Coastal Georgia Events",
        category: "Entertainment",
        description: "Hinesville hosts multiple community festivals throughout the year serving the military family population.",
      },
      {
        name: "Oglethorpe Mall (Savannah)",
        category: "Shopping",
        description: "Main regional mall in Savannah serving the Fort Stewart area with major retailers and a movie theater.",
      },
      {
        name: "LeConte-Woodmanston Botanical Garden",
        category: "Outdoors",
        description: "Restored 18th-century plantation and botanical garden in nearby Riceboro — a peaceful piece of Georgia's natural and cultural history.",
      },
    ],
    housing: {
      priceRange: "$190,000–$310,000",
      rentRange: "$1,100–$1,700/mo",
      marketContext: "Hinesville is affordable but Richmond Hill has seen significant appreciation from Savannah spillover. Families who can tolerate the longer commute benefit from better schools and more desirable neighborhoods in Richmond Hill.",
      hotNeighborhoods: ["Richmond Hill", "Hinesville West", "Midway"],
    },
  },

  "fort-wainwright": {
    neighborhoods: [
      {
        name: "Fairbanks (College / University area)",
        description: "Neighborhoods near the University of Alaska Fairbanks with a mix of academic and military families, good services, and proximity to the base.",
        commute: "15–20 min to main gate",
        tags: ["College town", "Suburban", "Family-friendly"],
      },
      {
        name: "North Pole",
        description: "Suburban community 15 miles southeast of Fairbanks, famous for Christmas-themed street names and a tight-knit community popular with military families.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "Military community", "Family-friendly"],
      },
      {
        name: "Fairbanks (Airport / Cushman area)",
        description: "Central Fairbanks neighborhoods with affordable older homes and walking distance to downtown services.",
        commute: "10–15 min to main gate",
        tags: ["Affordable", "Walkable", "Urban"],
      },
    ],
    schools: {
      district: "Fairbanks North Star Borough School District",
      context: "FNSBSD serves all of the Fairbanks area including Fort Wainwright communities, with a number of military-connected students and a strong outdoor and Alaska Native curriculum focus.",
      highlights: [
        "Lathrop High School and West Valley High School are the flagship campuses",
        "District has strong STEM and outdoor education programs relevant to the Alaskan environment",
        "North Pole High School serves the North Pole community with a tight-knit student body",
      ],
    },
    activities: [
      {
        name: "Aurora Borealis Viewing",
        category: "Outdoors",
        description: "Fairbanks is one of the world's premier Northern Lights viewing locations — a life-changing experience available from August through April.",
      },
      {
        name: "Chena Hot Springs Resort",
        category: "Outdoors",
        description: "Natural hot springs resort 60 miles east of Fairbanks with year-round soaking, ice sculptures, and Aurora viewing packages.",
      },
      {
        name: "Denali National Park",
        category: "Outdoors",
        description: "North America's tallest peak and surrounding wilderness, about 2.5 hours south — a bucket-list destination available while stationed here.",
      },
      {
        name: "Pump House Restaurant & Saloon",
        category: "Dining",
        description: "Fairbanks landmark restaurant in a historic gold rush-era pump house on the Chena River, serving Alaskan seafood and prime rib.",
      },
      {
        name: "Fred Meyer (Fairbanks)",
        category: "Shopping",
        description: "Alaska's primary large-format retailer — Fred Meyer is the go-to shopping destination for military families throughout interior Alaska.",
      },
      {
        name: "Running Reindeer Ranch",
        category: "Attraction",
        description: "Unique Fairbanks experience where you hike through the boreal forest with a friendly herd of reindeer — unforgettable for kids and adults.",
      },
    ],
    housing: {
      priceRange: "$280,000–$420,000",
      rentRange: "$1,400–$2,100/mo",
      marketContext: "Fairbanks housing is moderately priced for Alaska but comes with high utility costs due to extreme winters. BAH accounts for heating supplements. North Pole offers good value with community amenities.",
      hotNeighborhoods: ["North Pole", "College area", "Hamilton Acres"],
    },
  },

  "schofield-barracks": {
    neighborhoods: [
      {
        name: "Wahiawa",
        description: "The small city surrounding Schofield Barracks on the Leilehua Plateau, with many military families and affordable (by Hawaii standards) housing options.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Mililani",
        description: "Master-planned community south of Schofield with excellent schools, parks, and a strong community infrastructure — Hawaii's model planned town.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "Ewa Beach / Kapolei",
        description: "Rapidly developing 'second city' on Oahu's west side with newer homes, beaches, and more space than Honolulu — popular with families buying in Hawaii.",
        commute: "25–35 min to main gate",
        tags: ["New construction", "Waterfront", "Family-friendly"],
      },
    ],
    schools: {
      district: "Hawaii Department of Education (Central District)",
      context: "Hawaii has a single statewide school district. Schools near Schofield are in the Central District, with Mililani-area schools consistently ranking as some of the state's best.",
      highlights: [
        "Mililani High School consistently ranks as one of Hawaii's top public schools",
        "Leilehua High School serves Wahiawa with strong JROTC and athletic programs",
        "The state DOE has a Military Family Liaison program for PCS transitions",
      ],
    },
    activities: [
      {
        name: "North Shore (Haleiwa)",
        category: "Outdoors",
        description: "World-famous surfing destination minutes from Schofield, with legendary winter waves, shrimp trucks, and laid-back beach town vibe.",
      },
      {
        name: "Dole Plantation",
        category: "Attraction",
        description: "Agricultural attraction celebrating Hawaii's pineapple history, with tours, a garden maze, and the famous Dole Whip — steps from Schofield.",
      },
      {
        name: "Waimea Valley",
        category: "Outdoors",
        description: "Cultural and botanical preserve on the North Shore with a waterfall, ancient Hawaiian sites, and lush gardens.",
      },
      {
        name: "Giovanni's Shrimp Truck",
        category: "Dining",
        description: "The original North Shore shrimp truck serving garlic shrimp from a roadside trailer since 1993 — a Schofield family rite of passage.",
      },
      {
        name: "Pearlridge Center",
        category: "Shopping",
        description: "The largest shopping center in central Oahu, about 20 minutes from Schofield, with major retailers and dining.",
      },
      {
        name: "USS Arizona Memorial (Pearl Harbor)",
        category: "Attraction",
        description: "The most visited memorial in Hawaii — honoring those killed on December 7, 1941, an essential and moving experience for military families.",
      },
    ],
    housing: {
      priceRange: "$650,000–$950,000",
      rentRange: "$2,200–$3,400/mo",
      marketContext: "Hawaii housing is among the most expensive in the nation. BAH is very high but out-of-pocket costs remain significant. Most junior enlisted live on post; buying is a high-stakes decision given the island's market volatility.",
      hotNeighborhoods: ["Mililani", "Wahiawa", "Ewa Beach"],
    },
  },

  "natick-soldier-systems-center": {
    neighborhoods: [
      {
        name: "Natick (Downtown / South Natick)",
        description: "The historic town center of Natick with Colonial-era character, walkable downtown, and proximity to the Soldier Systems Center campus.",
        commute: "5–10 min to main gate",
        tags: ["Historic", "Walkable", "Suburban"],
      },
      {
        name: "Framingham",
        description: "Larger diverse city adjacent to Natick with more affordable housing options, good services, and access to the Mass Pike corridor.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
      {
        name: "Ashland / Holliston",
        description: "Quiet suburban towns south of Natick with strong school districts, a rural feel, and slightly lower prices than Natick proper.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "Rural"],
      },
    ],
    schools: {
      district: "Natick Public Schools",
      context: "Natick Public Schools is consistently rated among Massachusetts' top districts, with a high graduation rate and strong college placement — reflecting the affluent, educated community.",
      highlights: [
        "Natick High School is highly rated with extensive AP and extracurricular offerings",
        "District has a welcoming approach to the relatively small military population",
        "Framingham Public Schools is a larger, diverse district with strong ELL and support programs",
      ],
    },
    activities: [
      {
        name: "Lake Cochituate State Park",
        category: "Outdoors",
        description: "Three-lake state park on Natick's border with swimming beaches, boating, and fishing — an ideal summer family destination.",
      },
      {
        name: "Natick Collection (Mall)",
        category: "Shopping",
        description: "One of New England's premier luxury malls with high-end retailers and dining options adjacent to the SSC campus.",
      },
      {
        name: "Farm Pond",
        category: "Outdoors",
        description: "Town-owned swimming area in Framingham with a sandy beach and summer programs — a local favorite for families.",
      },
      {
        name: "Garden on the Millpond",
        category: "Dining",
        description: "Charming Natick restaurant in a historic mill setting, known for creative American cuisine and seasonal menus.",
      },
      {
        name: "Hopkinton State Park",
        category: "Outdoors",
        description: "Beautiful reservoir park with hiking, swimming, and boating — start of the Boston Marathon route runs through Hopkinton.",
      },
      {
        name: "Boston (South Station)",
        category: "Entertainment",
        description: "World-class city accessible via commuter rail from Natick — sports, museums, the Freedom Trail, and culinary scene all within reach.",
      },
    ],
    housing: {
      priceRange: "$580,000–$880,000",
      rentRange: "$2,200–$3,400/mo",
      marketContext: "Natick sits in the expensive Greater Boston market. Housing costs are high but BAH reflects the Boston metro rate. Framingham offers slightly more affordability while remaining convenient.",
      hotNeighborhoods: ["Downtown Natick", "South Natick", "Saxonville (Framingham)"],
    },
  },

  "pentagon": {
    neighborhoods: [
      {
        name: "Pentagon City / Crystal City",
        description: "High-density urban neighborhoods directly adjacent to the Pentagon with luxury apartments, Metro access, and walkable amenities.",
        commute: "5 min to Pentagon",
        tags: ["Urban", "Walkable", "Nightlife"],
      },
      {
        name: "Alexandria Old Town",
        description: "Historic waterfront city with cobblestone streets, Federal architecture, and excellent restaurants — one of the most desirable communities in the DC area.",
        commute: "10–15 min to Pentagon",
        tags: ["Historic", "Walkable", "Waterfront"],
      },
      {
        name: "McLean / Tysons (Fairfax County)",
        description: "Upscale Northern Virginia suburbs west of the Pentagon with excellent schools, high-end amenities, and many senior government and military officials.",
        commute: "15–25 min to Pentagon",
        tags: ["Suburban", "Family-friendly", "Retiree-friendly"],
      },
    ],
    schools: {
      district: "Arlington Public Schools / Alexandria City Public Schools",
      context: "Both Arlington and Alexandria run highly rated urban school systems with strong diversity and academic programs, familiar to DoD families.",
      highlights: [
        "Arlington's three high schools consistently rank among Virginia's best",
        "Alexandria's T.C. Williams (now Alexandria City High School) has a renowned performing arts program",
        "Both districts have active military family liaison programs given the Pentagon's enormous workforce",
      ],
    },
    activities: [
      {
        name: "Washington DC National Mall",
        category: "Attraction",
        description: "America's front yard — Smithsonian museums, the Lincoln Memorial, WWII Memorial, and more, all free and within Metro reach of the Pentagon.",
      },
      {
        name: "Alexandria King Street",
        category: "Dining",
        description: "Old Town Alexandria's main street with dozens of acclaimed restaurants, wine bars, and locally-owned shops steps from the Potomac.",
      },
      {
        name: "Kennedy Center for the Performing Arts",
        category: "Entertainment",
        description: "America's premiere performing arts venue across the river in DC — military discounts available and world-class performances year-round.",
      },
      {
        name: "Mount Vernon Trail",
        category: "Outdoors",
        description: "18-mile paved trail along the Potomac from the Pentagon to Mount Vernon — one of the DC area's most popular running and cycling routes.",
      },
      {
        name: "Fashion Centre at Pentagon City",
        category: "Shopping",
        description: "Upscale mall directly above the Pentagon City Metro station — the most convenient shopping destination for Pentagon workers.",
      },
      {
        name: "Tidal Basin / Cherry Blossoms",
        category: "Outdoors",
        description: "Washington's iconic cherry blossom display around the Tidal Basin peaks in late March — a spectacular annual highlight for families stationed nearby.",
      },
    ],
    housing: {
      priceRange: "$700,000–$1,400,000",
      rentRange: "$2,600–$4,500/mo",
      marketContext: "Pentagon assignments are in the most expensive housing market in the country. BAH is at the maximum rate but purchasing is extremely difficult. Most junior officers rent; senior officials and flag officers typically receive quarters on post at Fort Myer.",
      hotNeighborhoods: ["Pentagon City", "Old Town Alexandria", "Ballston"],
    },
  },

  "picatinny-arsenal": {
    neighborhoods: [
      {
        name: "Rockaway Township / Wharton",
        description: "Morris County communities immediately surrounding Picatinny Arsenal with a suburban-rural feel, excellent schools, and reasonable commutes.",
        commute: "5–15 min to main gate",
        tags: ["Suburban", "Family-friendly", "Rural"],
      },
      {
        name: "Denville",
        description: "Desirable Morris County suburb east of Picatinny with lakefront properties, strong schools, and good train access to New York City.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "Waterfront", "Family-friendly"],
      },
      {
        name: "Dover / Rockaway Borough",
        description: "More affordable Morris County communities close to the arsenal with older housing stock and growing dining and retail scenes.",
        commute: "10–15 min to main gate",
        tags: ["Affordable", "Historic", "Suburban"],
      },
    ],
    schools: {
      district: "Jefferson Township School District / Rockaway Township School District",
      context: "Morris County has excellent school districts overall. Jefferson Township and Rockaway Township schools are the closest to Picatinny and are well-regarded.",
      highlights: [
        "Jefferson Township High School is a well-rated suburban school serving the immediate area",
        "Mountain Lakes School District (slightly further) consistently ranks among NJ's very best",
        "Morris County overall has some of New Jersey's strongest public school performance",
      ],
    },
    activities: [
      {
        name: "Allamuchy Mountain State Park",
        category: "Outdoors",
        description: "Large state park adjacent to Picatinny with hundreds of acres for hiking, mountain biking, and wildlife viewing.",
      },
      {
        name: "Delaware Water Gap National Recreation Area",
        category: "Outdoors",
        description: "Stunning national recreation area about 30 minutes west with hiking, swimming, fishing, and whitewater kayaking along the Delaware River.",
      },
      {
        name: "Lake Hopatcong",
        category: "Outdoors",
        description: "New Jersey's largest lake, minutes from Picatinny, with boating, fishing, and waterfront dining — a beloved summer destination.",
      },
      {
        name: "Sorrento's Restaurant",
        category: "Dining",
        description: "Beloved Italian restaurant in Rockaway Township serving classic red-sauce dishes in a warm, family-friendly setting.",
      },
      {
        name: "Rockaway Townsquare Mall",
        category: "Shopping",
        description: "Large regional mall in Rockaway with major retailers, a movie theater, and extensive dining options.",
      },
      {
        name: "Historic Morristown",
        category: "Attraction",
        description: "Washington's Revolutionary War headquarters, 25 minutes east — Morristown National Historical Park offers fascinating tours and living history.",
      },
    ],
    housing: {
      priceRange: "$380,000–$620,000",
      rentRange: "$1,800–$2,800/mo",
      marketContext: "Morris County is an expensive New Jersey market driven by NYC commuter demand. Picatinny's research mission attracts civilian scientists and engineers, keeping demand strong year-round.",
      hotNeighborhoods: ["Denville", "Rockaway Township", "Wharton"],
    },
  },

  "presidio-of-monterey": {
    neighborhoods: [
      {
        name: "Seaside",
        description: "City bordering the Presidio with the most affordable housing on the Monterey Peninsula — a diverse military community with direct gate access.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Monterey (Downtown / New Monterey)",
        description: "Beautiful historic city adjacent to the Presidio with world-class restaurants, the aquarium, and scenic coastal living.",
        commute: "10–15 min to main gate",
        tags: ["Historic", "Walkable", "Waterfront"],
      },
      {
        name: "Pacific Grove",
        description: "Charming Victorian seaside city on the peninsula tip known as 'Butterfly Town, USA' with some of the best coastline on the peninsula.",
        commute: "15–20 min to main gate",
        tags: ["Historic", "Waterfront", "Family-friendly"],
      },
    ],
    schools: {
      district: "Monterey Peninsula Unified School District",
      context: "MPUSD serves Monterey, Seaside, and Pacific Grove with a diverse student population reflecting the international student body at the Defense Language Institute.",
      highlights: [
        "Monterey High School has strong arts and language programs",
        "Pacific Grove Unified (separate district) consistently rates higher than MPUSD",
        "DLI brings an extraordinary linguistic diversity to local schools",
      ],
    },
    activities: [
      {
        name: "Monterey Bay Aquarium",
        category: "Attraction",
        description: "One of the world's great aquariums with stunning exhibits on the Cannery Row waterfront — a must-experience for every Presidio family.",
      },
      {
        name: "17-Mile Drive",
        category: "Outdoors",
        description: "Iconic scenic coastal drive through Pebble Beach with world-famous views, cypress trees, and the Lone Cypress.",
      },
      {
        name: "Lovers Point Park",
        category: "Outdoors",
        description: "Stunning Pacific Grove park on Monterey Bay with beach access, snorkeling, and incredible whale watching from the shore.",
      },
      {
        name: "Schooner's Coastal Kitchen",
        category: "Dining",
        description: "Beachfront dining at the Monterey Marriott with fresh seafood and Bay views — a local favorite for special occasions.",
      },
      {
        name: "Del Monte Shopping Center",
        category: "Shopping",
        description: "The primary shopping center in Monterey with major retailers and restaurants convenient to the Presidio.",
      },
      {
        name: "Carmel-by-the-Sea",
        category: "Attraction",
        description: "Fairy-tale ocean village minutes from the Presidio with galleries, wine tasting, and the white sand beach at Carmel Beach.",
      },
    ],
    housing: {
      priceRange: "$700,000–$1,200,000",
      rentRange: "$2,400–$3,800/mo",
      marketContext: "The Monterey Peninsula is one of the most expensive coastal California markets. Seaside is the most affordable option for military families. BAH is generous but ownership remains a challenge on most military salaries.",
      hotNeighborhoods: ["Seaside", "Del Rey Oaks", "Pacific Grove"],
    },
  },

  "redstone-arsenal": {
    neighborhoods: [
      {
        name: "Madison (Southeast Madison)",
        description: "Upscale suburban community in Madison County adjacent to Redstone Arsenal, popular with the large defense contractor and government scientist workforce.",
        commute: "5–10 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "Huntsville (Southeast / Whitesburg area)",
        description: "Established Huntsville neighborhoods south of downtown near the Tennessee River with good schools and convenient access to both the arsenal and Research Park.",
        commute: "10–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "Retiree-friendly"],
      },
      {
        name: "Hampton Cove",
        description: "Planned golf community on the eastern edge of Huntsville with newer homes, a Robert Trent Jones golf course, and mountain views.",
        commute: "20–30 min to main gate",
        tags: ["Golf community", "Suburban", "New construction"],
      },
    ],
    schools: {
      district: "Madison City Schools / Huntsville City Schools",
      context: "Madison City Schools is consistently rated as one of Alabama's very best districts, while Huntsville City Schools has significant variation by neighborhood.",
      highlights: [
        "Bob Jones High School (Madison) and James Clemens High School are top-rated Alabama schools",
        "Grissom High School (Huntsville) is known for STEM programs and NASA tie-ins",
        "Madison County's school system benefits from the highly educated aerospace workforce",
      ],
    },
    activities: [
      {
        name: "U.S. Space & Rocket Center",
        category: "Attraction",
        description: "America's largest space museum, home to the original Saturn V moon rocket — an extraordinary attraction for any family stationed at NASA's partner installation.",
      },
      {
        name: "Monte Sano State Park",
        category: "Outdoors",
        description: "Beautiful mountain park overlooking Huntsville with hiking, biking, stargazing, and a Japanese Garden — a beloved local escape.",
      },
      {
        name: "Campus 805",
        category: "Dining",
        description: "Vibrant food and craft beer complex in a converted school campus in southeast Huntsville with multiple restaurants and a popular taproom.",
      },
      {
        name: "Huntsville Botanical Garden",
        category: "Outdoors",
        description: "Stunning 112-acre garden with seasonal exhibits, butterfly house, and Huntsville's famous Galaxy of Lights Christmas display.",
      },
      {
        name: "Bridge Street Town Centre",
        category: "Shopping",
        description: "Upscale outdoor lifestyle mall with national retailers, dining, and entertainment — Huntsville's most popular shopping destination.",
      },
      {
        name: "Big Spring Park",
        category: "Outdoors",
        description: "Downtown Huntsville's beautiful park centered on a natural spring-fed lake — a scenic spot for families and events.",
      },
    ],
    housing: {
      priceRange: "$300,000–$500,000",
      rentRange: "$1,400–$2,200/mo",
      marketContext: "Huntsville has boomed due to NASA, defense, and tech sector growth. Madison City has the most competitive housing market. Prices have risen substantially but remain affordable compared to coastal markets.",
      hotNeighborhoods: ["Madison", "Hampton Cove", "Southeast Huntsville"],
    },
  },

  "rock-island-arsenal": {
    neighborhoods: [
      {
        name: "Bettendorf",
        description: "Upscale Iowa Quad City with excellent schools, riverfront parks, and newer development — the preferred address for officers and senior civilians.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Family-friendly", "Waterfront"],
      },
      {
        name: "Moline",
        description: "Illinois city directly across from the Arsenal island with established neighborhoods, good amenities, and easy bridge access to the installation.",
        commute: "5–10 min to main gate",
        tags: ["Suburban", "Affordable", "Historic"],
      },
      {
        name: "Davenport (NE Davenport)",
        description: "Iowa's largest Quad City with diverse neighborhoods, the University of Iowa's satellite campus, and a range of housing options.",
        commute: "10–15 min to main gate",
        tags: ["Urban", "Affordable", "College town"],
      },
    ],
    schools: {
      district: "Bettendorf Community School District / Moline-Coal Valley School District",
      context: "Bettendorf CSD consistently ranks as one of Iowa's top performing districts. Moline-Coal Valley serves the Illinois side with solid academic programs.",
      highlights: [
        "Bettendorf High School is consistently rated among Iowa's best",
        "Moline High School has a strong career and technical education program",
        "Both districts have experience with military family enrollment from the Arsenal workforce",
      ],
    },
    activities: [
      {
        name: "Rock Island Arsenal Museum",
        category: "Attraction",
        description: "The second-oldest U.S. Army museum, housing an extraordinary collection of weapons and military artifacts in a stunning Civil War-era building.",
      },
      {
        name: "Mississippi Riverfront (Davenport/Rock Island)",
        category: "Outdoors",
        description: "Extensive riverfront parks and trails along the Mississippi through all four Quad Cities — excellent for cycling and family outings.",
      },
      {
        name: "Niabi Zoo",
        category: "Attraction",
        description: "Beloved Quad Cities zoo in Coal Valley with over 500 animals and family-friendly exhibits.",
      },
      {
        name: "Bent River Brewing Company",
        category: "Dining",
        description: "Popular Moline craft brewery with house-made beers and elevated pub fare, a favorite Quad Cities gathering spot.",
      },
      {
        name: "SouthPark Mall",
        category: "Shopping",
        description: "Major Moline mall with national retailers serving the Illinois Quad Cities community.",
      },
      {
        name: "Celebration Belle Riverboat",
        category: "Entertainment",
        description: "Historic Mississippi paddleboat offering dinner cruises and sightseeing tours from the Moline waterfront — a unique Quad Cities experience.",
      },
    ],
    housing: {
      priceRange: "$180,000–$310,000",
      rentRange: "$950–$1,500/mo",
      marketContext: "The Quad Cities market is very affordable by national standards. Bettendorf commands the highest prices for its superior schools; Moline offers the best value for Arsenal commute. Inventory is generally healthy.",
      hotNeighborhoods: ["Bettendorf", "Northeast Moline", "Northeast Davenport"],
    },
  },

  "west-point": {
    neighborhoods: [
      {
        name: "Highland Falls",
        description: "The village at the West Point main gate, with Victorian-era homes, close community ties, and the densest population of Academy-connected families.",
        commute: "5 min to main gate",
        tags: ["Historic", "Military community", "Family-friendly"],
      },
      {
        name: "Newburgh",
        description: "City 15 miles north on the Hudson with a revitalizing historic district, affordable housing, and growing restaurant scene.",
        commute: "20–25 min to main gate",
        tags: ["Historic", "Affordable", "Urban"],
      },
      {
        name: "Cornwall-on-Hudson",
        description: "Beautiful Hudson Valley village with historic homes, waterfront access, and excellent schools — popular with officers who can manage the commute.",
        commute: "15–20 min to main gate",
        tags: ["Historic", "Waterfront", "Family-friendly"],
      },
    ],
    schools: {
      district: "Highland Falls-Fort Montgomery Central School District",
      context: "The Highland Falls-Fort Montgomery CSD directly serves West Point families and has a uniquely high proportion of military-connected students, with tailored transition support.",
      highlights: [
        "James I. O'Neill High School serves the Academy community with strong college-prep programming",
        "District's close relationship with the Academy means families are well-supported",
        "Cornwall Central SD (adjacent) is rated higher and is an option for families in Cornwall",
      ],
    },
    activities: [
      {
        name: "West Point Museum",
        category: "Attraction",
        description: "The oldest public museum in the Department of Defense, with an extraordinary collection of military history from the Revolutionary War forward.",
      },
      {
        name: "Storm King Art Center",
        category: "Attraction",
        description: "World-renowned 500-acre outdoor sculpture museum in the Hudson Highlands — a spectacular and unique cultural experience.",
      },
      {
        name: "Hudson River Waterfront (Cold Spring)",
        category: "Outdoors",
        description: "Charming Victorian river town 10 miles north with antique shops, hiking, and stunning Hudson Valley views.",
      },
      {
        name: "Thayer Hotel Dining",
        category: "Dining",
        description: "Historic hotel on the West Point campus with formal dining and stunning Hudson River views — a beloved institution for special occasions.",
      },
      {
        name: "Woodbury Common Premium Outlets",
        category: "Shopping",
        description: "One of the nation's largest outlet malls, 20 minutes from West Point, with over 220 designer outlets.",
      },
      {
        name: "Bear Mountain State Park",
        category: "Outdoors",
        description: "Iconic Hudson Valley state park with hiking, swimming, and winter skiing — minutes from West Point and a perennial family favorite.",
      },
    ],
    housing: {
      priceRange: "$320,000–$580,000",
      rentRange: "$1,600–$2,600/mo",
      marketContext: "The Hudson Valley has seen strong appreciation from NYC buyers seeking space. West Point's location in a scenic Hudson Highlands area commands good prices. Highland Falls is the most affordable option for those who want to be closest.",
      hotNeighborhoods: ["Highland Falls", "Cornwall-on-Hudson", "Fort Montgomery"],
    },
  },

  "white-sands-missile-range": {
    neighborhoods: [
      {
        name: "Las Cruces (East Mesa / Sonoma Ranch)",
        description: "The primary city for White Sands personnel, with the full range of suburban amenities, New Mexico State University, and a fast-growing economy.",
        commute: "30–40 min to main gate",
        tags: ["Suburban", "College town", "Family-friendly"],
      },
      {
        name: "Alamogordo",
        description: "Closer desert city on the eastern side of the White Sands range with affordable housing and a smaller military-connected community.",
        commute: "20–30 min to east gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Tularosa / La Luz",
        description: "Small historic communities in the Tularosa Basin between Las Cruces and Alamogordo with very affordable rural properties.",
        commute: "20–30 min to main gate",
        tags: ["Rural", "Affordable", "Historic"],
      },
    ],
    schools: {
      district: "Las Cruces Public Schools / Alamogordo Public Schools",
      context: "Las Cruces Public Schools is the largest district in the region; Alamogordo has a smaller district more closely connected to the WSMR mission.",
      highlights: [
        "Organ Mountain High School and Las Cruces High School are the top LCPS campuses",
        "Alamogordo High School has a strong JROTC program connected to WSMR",
        "NMSU in Las Cruces provides continuing education and dual-enrollment opportunities",
      ],
    },
    activities: [
      {
        name: "White Sands National Park",
        category: "Outdoors",
        description: "The world's largest gypsum dune field — an otherworldly landscape of brilliant white dunes perfect for sledding, hiking, and sunset photography.",
      },
      {
        name: "New Mexico Museum of Space History",
        category: "Attraction",
        description: "International Space Hall of Fame in Alamogordo documenting humanity's journey to space — highly relevant given WSMR's space launch mission.",
      },
      {
        name: "Organ Mountains-Desert Peaks National Monument",
        category: "Outdoors",
        description: "Dramatic mountain range east of Las Cruces with excellent hiking and rock climbing in stunning Chihuahuan Desert scenery.",
      },
      {
        name: "La Posta de Mesilla",
        category: "Dining",
        description: "Historic New Mexican restaurant in Old Mesilla serving traditional red and green chile dishes in a 19th-century stage stop building.",
      },
      {
        name: "Mesilla Valley Mall",
        category: "Shopping",
        description: "Primary mall in Las Cruces with major retailers serving the WSMR and broader Mesilla Valley community.",
      },
      {
        name: "Old Mesilla Plaza",
        category: "Attraction",
        description: "Historic village plaza where the Gadsden Purchase was signed, with galleries, shops, and restaurants in a preserved 19th-century setting.",
      },
    ],
    housing: {
      priceRange: "$220,000–$350,000",
      rentRange: "$1,100–$1,700/mo",
      marketContext: "Las Cruces offers affordable housing by Southwest standards, and Alamogordo is even cheaper. The WSMR market is relatively stable; remote location limits appreciation but also keeps the market accessible.",
      hotNeighborhoods: ["East Mesa (Las Cruces)", "Sonoma Ranch", "Alamogordo"],
    },
  },

  "yuma-proving-ground": {
    neighborhoods: [
      {
        name: "Yuma (North Yuma / Foothills area)",
        description: "Newer developments in north Yuma and the Foothills with good schools, retail, and the most popular military family residential areas.",
        commute: "20–30 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
      {
        name: "Yuma (Downtown / Historic area)",
        description: "Central Yuma with historic character, proximity to the Colorado River, and the full range of city amenities at affordable prices.",
        commute: "25–35 min to main gate",
        tags: ["Historic", "Affordable", "Urban"],
      },
      {
        name: "Wellton / Roll",
        description: "Small agricultural communities midway between Yuma and the proving ground, offering rural living with easy access to both the base and city.",
        commute: "10–15 min to main gate",
        tags: ["Rural", "Affordable", "Military community"],
      },
    ],
    schools: {
      district: "Yuma Union High School District / Crane Elementary School District",
      context: "The Yuma area has multiple school districts. The Foothills and north Yuma areas are served by well-regarded elementary and high school districts.",
      highlights: [
        "Cibola High School consistently ranks as one of Yuma's best high schools",
        "Foothills Academy Charter School is a popular choice for military families in north Yuma",
        "The small size of the YPG workforce means schools are less specifically oriented to military transitions",
      ],
    },
    activities: [
      {
        name: "Colorado River (Yuma Crossing)",
        category: "Outdoors",
        description: "Historic crossing point with state park, river access, kayaking, and the Yuma Territorial Prison — the Colorado runs through Yuma's heart.",
      },
      {
        name: "Yuma Territorial Prison State Historic Park",
        category: "Attraction",
        description: "Legendary 1870s frontier prison with fascinating tours documenting the Wild West history of one of Arizona's most notorious landmarks.",
      },
      {
        name: "Imperial Sand Dunes (Glamis)",
        category: "Outdoors",
        description: "Massive sand dunes on the California border, an hour east — a premier destination for off-road vehicles, ATVs, and camping.",
      },
      {
        name: "Garden Cafe",
        category: "Dining",
        description: "Yuma's most beloved breakfast and lunch spot in a restored historic building, famous for long lines and excellent New Mexican-influenced dishes.",
      },
      {
        name: "Yuma Palms Regional Center",
        category: "Shopping",
        description: "The primary retail hub in Yuma with major national retailers and restaurants serving the regional community.",
      },
      {
        name: "Cocopah Resort & Casino",
        category: "Entertainment",
        description: "Tribal casino and resort south of Yuma with gaming, dining, and a golf course — a popular off-post entertainment destination.",
      },
    ],
    housing: {
      priceRange: "$220,000–$360,000",
      rentRange: "$1,100–$1,700/mo",
      marketContext: "Yuma is an affordable Arizona market, significantly cheaper than Phoenix or Tucson. The proving ground's relatively small military footprint keeps prices stable. The Foothills area commands a modest premium for newer construction.",
      hotNeighborhoods: ["Foothills", "North Yuma", "Wellton"],
    },
  },
};

export default armyDetails;
