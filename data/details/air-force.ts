import type { BaseDetail } from "../baseDetails";

const airForceDetails: Record<string, BaseDetail> = {
  "air-force-academy": {
    neighborhoods: [
      {
        name: "Briargate",
        description: "A large master-planned community in north Colorado Springs with excellent schools, parks, and retail. Popular with Academy families who want suburban convenience.",
        commute: "15–20 min to North Gate",
        tags: ["Family-friendly", "Suburban", "New construction"],
      },
      {
        name: "Monument",
        description: "A small-town community just north of the Academy with a historic downtown, trails, and a tight-knit feel. Quieter and more rural than Colorado Springs proper.",
        commute: "10–15 min to North Gate",
        tags: ["Family-friendly", "Rural", "Retiree-friendly"],
      },
      {
        name: "Flying Horse",
        description: "An upscale planned community with a Tom Weiskopf-designed golf course, luxury homes, and mountain views. A top choice for senior officers.",
        commute: "20–25 min to North Gate",
        tags: ["Suburban", "Golf community", "Gated community"],
      },
    ],
    schools: {
      district: "Academy School District 20",
      context: "D-20 is consistently ranked among Colorado's top school districts, serving north Colorado Springs and Monument. Families near the Academy benefit from high-performing neighborhood schools and strong extracurricular programs.",
      highlights: [
        "Pine Creek High School and Liberty High School are top-rated secondary schools",
        "District-wide gifted and talented programs and robust STEM offerings",
        "High graduation rates and strong college placement statistics",
      ],
    },
    activities: [
      {
        name: "Garden of the Gods Park",
        category: "Outdoors",
        description: "Iconic red-rock formations with free hiking trails, rock climbing, and stunning views of Pikes Peak. A must-see natural landmark minutes from the base.",
      },
      {
        name: "Pikes Peak Summit",
        category: "Outdoors",
        description: "Drive or take the cog railway to the 14,115-ft summit for panoramic views of the Front Range. A bucket-list experience for every family stationed here.",
      },
      {
        name: "The Broadmoor",
        category: "Attraction",
        description: "A historic five-star resort offering fine dining, spa services, and the famous Seven Falls attraction nearby. Great for special occasions.",
      },
      {
        name: "Edelweiss Restaurant",
        category: "Dining",
        description: "A beloved German restaurant in Colorado Springs serving schnitzel, spaetzle, and imported beers in an authentic Bavarian setting since 1975.",
      },
      {
        name: "Cheyenne Mountain State Park",
        category: "Outdoors",
        description: "Over 20 miles of hiking and mountain biking trails with wildlife viewing and overnight camping near the foot of Cheyenne Mountain.",
      },
      {
        name: "Colorado Springs Fine Arts Center",
        category: "Entertainment",
        description: "A combined art museum and performing arts theater on the Colorado College campus hosting Broadway touring shows, concerts, and rotating galleries.",
      },
    ],
    housing: {
      priceRange: "$380,000–$580,000",
      rentRange: "$1,700–$2,400/mo",
      marketContext: "Colorado Springs has seen significant appreciation since 2020. North-side neighborhoods near D-20 schools command a premium. The market remains competitive but more affordable than Denver.",
      hotNeighborhoods: ["Briargate", "Monument", "Flying Horse"],
    },
  },

  "altus-afb": {
    neighborhoods: [
      {
        name: "Altus (Northwest Side)",
        description: "The residential area closest to the main gate with established neighborhoods, modest homes, and easy base access. Most active-duty families live here.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Blair",
        description: "A small farming community about 10 miles north of Altus AFB with very affordable housing and a quiet rural lifestyle.",
        commute: "15–20 min to main gate",
        tags: ["Rural", "Affordable"],
      },
      {
        name: "Altus (South Side)",
        description: "Older, established residential neighborhoods near downtown Altus with larger lots and mature trees. Close to local restaurants and shops.",
        commute: "10–15 min to main gate",
        tags: ["Affordable", "Historic", "Family-friendly"],
      },
    ],
    schools: {
      district: "Altus Public Schools",
      context: "Altus Public Schools serves the city and surrounding area. The district is small but offers solid academics, strong athletics, and a close-knit community environment typical of southwest Oklahoma towns.",
      highlights: [
        "Altus High School offers AP courses and career tech pathways",
        "Small class sizes allow for individualized attention",
        "Active parent involvement and community support for school programs",
      ],
    },
    activities: [
      {
        name: "Quartz Mountain State Park",
        category: "Outdoors",
        description: "A scenic state park on Lake Altus-Lugert with boating, fishing, hiking, and a resort lodge. One of southwestern Oklahoma's premier outdoor destinations.",
      },
      {
        name: "Museum of the Western Prairie",
        category: "Attraction",
        description: "Chronicles the history of southwestern Oklahoma from prehistoric times through pioneer settlement and the Dust Bowl era.",
      },
      {
        name: "Cotton Electric Park",
        category: "Outdoors",
        description: "A community park with sports fields, walking trails, and picnic areas used heavily by base and civilian families alike.",
      },
      {
        name: "Kiamichi Steakhouse",
        category: "Dining",
        description: "A local favorite for hand-cut steaks and comfort food in a casual, family-friendly dining room popular with both military and civilian crowds.",
      },
      {
        name: "Great Plains Country Historical Society Museum",
        category: "Attraction",
        description: "Showcases artifacts and stories from Jackson County's agricultural and military history.",
      },
      {
        name: "Lake Altus-Lugert",
        category: "Outdoors",
        description: "A reservoir popular for bass fishing, water skiing, and camping — the main outdoor recreation hub for the Altus community.",
      },
    ],
    housing: {
      priceRange: "$120,000–$220,000",
      rentRange: "$750–$1,100/mo",
      marketContext: "Altus is one of the most affordable military markets in the country. BAH typically covers rent comfortably and may allow buying. Inventory is limited but prices are very low by national standards.",
      hotNeighborhoods: ["Altus Northwest Side", "South Side"],
    },
  },

  "arnold-afb": {
    neighborhoods: [
      {
        name: "Tullahoma",
        description: "The closest city to Arnold AFB with a revitalized downtown, craft breweries, and walkable neighborhoods. Most base workers live here.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Walkable", "Family-friendly"],
      },
      {
        name: "Manchester",
        description: "A small Coffee County community with rural acreage lots and affordable homes southeast of the base.",
        commute: "20–25 min to main gate",
        tags: ["Rural", "Affordable"],
      },
      {
        name: "Lynchburg",
        description: "Known as the home of Jack Daniel's Distillery, this small Moore County town offers historic charm and rural living within commuting distance.",
        commute: "25–30 min to main gate",
        tags: ["Historic", "Rural", "Affordable"],
      },
    ],
    schools: {
      district: "Coffee County Schools",
      context: "Coffee County Schools serves Tullahoma and the surrounding area. The district is considered solid for rural Tennessee, with Tullahoma City Schools operating separately as a high-performing municipal district.",
      highlights: [
        "Tullahoma City Schools consistently outperforms state averages on standardized tests",
        "Strong STEM programs supported in part by the aerospace research community at Arnold AFB",
        "University of Tennessee Space Institute nearby provides dual enrollment opportunities",
      ],
    },
    activities: [
      {
        name: "Jack Daniel's Distillery",
        category: "Attraction",
        description: "The world's oldest registered distillery in Lynchburg offers daily tours through the historic caves, barrel houses, and the charcoal mellowing process.",
      },
      {
        name: "Old Stone Fort State Archaeological Park",
        category: "Outdoors",
        description: "A 2,000-year-old Native American enclosure along Duck River with waterfalls, hiking trails, and a museum in Manchester.",
      },
      {
        name: "Tims Ford State Park",
        category: "Outdoors",
        description: "A Tennessee Valley Authority reservoir with boating, fishing, camping, and golf. One of Middle Tennessee's most popular recreational lakes.",
      },
      {
        name: "Calfkiller Brewing Company",
        category: "Dining",
        description: "An award-winning craft brewery in Sparta with rotating taps of Tennessee-made ales and lagers in a rustic taproom setting.",
      },
      {
        name: "Main Street Tullahoma",
        category: "Shopping",
        description: "A revitalized downtown with boutiques, antique shops, and local restaurants anchored by a growing arts and small business scene.",
      },
      {
        name: "Tullahoma Fine Arts Center",
        category: "Entertainment",
        description: "Community theater productions, visual arts exhibitions, and music events held in a historic venue in downtown Tullahoma.",
      },
    ],
    housing: {
      priceRange: "$220,000–$350,000",
      rentRange: "$1,000–$1,500/mo",
      marketContext: "The Tullahoma area offers solid value for Middle Tennessee. Prices have risen since 2020 but remain well below Nashville metro levels. Good inventory of both new construction and established homes.",
      hotNeighborhoods: ["Tullahoma", "Lynchburg"],
    },
  },

  "barksdale-afb": {
    neighborhoods: [
      {
        name: "Bossier City (Airline Drive corridor)",
        description: "The primary suburban corridor for Barksdale families with new construction, retail centers, and easy freeway access. Very family-oriented.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Military community", "Family-friendly"],
      },
      {
        name: "Shreveport (South Highlands)",
        description: "A historic neighborhood in Shreveport with large craftsman homes, tree-lined streets, and proximity to dining and entertainment.",
        commute: "20–25 min to main gate",
        tags: ["Historic", "Walkable", "Urban"],
      },
      {
        name: "Haughton",
        description: "A growing bedroom community east of Bossier City with newer subdivisions, good schools, and a more rural feel.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Bossier Parish School System",
      context: "Bossier Parish Schools is considered one of the stronger school systems in Louisiana, frequently outperforming neighboring Caddo Parish. Haughton and Airline Drive corridor schools are particularly well-regarded.",
      highlights: [
        "Parkway High School and Haughton High School are top performers in the parish",
        "Strong JROTC programs aligned with the base's military community",
        "Multiple magnet and academy programs offering specialized tracks",
      ],
    },
    activities: [
      {
        name: "Margaritaville Resort Casino",
        category: "Entertainment",
        description: "A large casino resort on the Red River with live entertainment, multiple dining options, and a hotel — a major local attraction.",
      },
      {
        name: "Barnwell Garden & Art Center",
        category: "Attraction",
        description: "A serene botanical garden and sculpture park in Shreveport with seasonal flower displays and rotating art installations.",
      },
      {
        name: "Louisiana Boardwalk Outlets",
        category: "Shopping",
        description: "An outdoor shopping and entertainment complex on the Red River in Bossier City with national retailers, restaurants, and a movie theater.",
      },
      {
        name: "Waffle House at Barksdale Blvd",
        category: "Dining",
        description: "A beloved late-night institution for the military community — the Waffle House near base is a rite of passage for incoming troops.",
      },
      {
        name: "Red River District",
        category: "Dining",
        description: "Shreveport's arts and entertainment district with locally owned restaurants, live music venues, and bars along the riverfront.",
      },
      {
        name: "Cypress Black Bayou Recreation Area",
        category: "Outdoors",
        description: "A Bossier Parish park with a lake, camping, fishing, a zoo, and an aquarium — ideal for family outdoor recreation.",
      },
    ],
    housing: {
      priceRange: "$180,000–$310,000",
      rentRange: "$1,000–$1,600/mo",
      marketContext: "The Shreveport-Bossier City market is affordable by national standards. Bossier Parish's newer developments command slight premiums over Shreveport. BAH generally covers costs well.",
      hotNeighborhoods: ["Haughton", "Airline Drive corridor"],
    },
  },

  "beale-afb": {
    neighborhoods: [
      {
        name: "Linda/Olivehurst",
        description: "Unincorporated Yuba County communities directly adjacent to Beale AFB. Most base-adjacent housing is here — convenient but modest.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Marysville/Yuba City",
        description: "The twin cities straddling the Feather River offer the best mix of services, dining, and housing for Beale families. Yuba City is especially family-friendly.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "Walkable"],
      },
      {
        name: "Grass Valley",
        description: "A charming Gold Rush-era town in the Sierra Nevada foothills with excellent schools, boutique shops, and outdoor recreation. A longer commute but highly desirable.",
        commute: "35–45 min to main gate",
        tags: ["Historic", "Family-friendly", "Retiree-friendly"],
      },
    ],
    schools: {
      district: "Marysville Joint Unified School District",
      context: "MJUSD serves the core Beale AFB commute area. Yuba City Unified is also widely used and considered stronger academically. Families willing to commute to Grass Valley access Nevada County's well-regarded schools.",
      highlights: [
        "Yuba City High School and River Valley High School offer strong AP programs",
        "Several charter school options in Yuba-Sutter area",
        "Proximity to Sacramento for additional educational resources",
      ],
    },
    activities: [
      {
        name: "Sycamore Ranch County Park",
        category: "Outdoors",
        description: "A Yuba County park along the Yuba River with swimming holes, hiking trails, and picnic areas popular with Beale families during hot summers.",
      },
      {
        name: "Tribal Heritage Preserve (Yuba-Sutter)",
        category: "Attraction",
        description: "A cultural site preserving and interpreting the heritage of the Maidu people of the Yuba-Sutter area.",
      },
      {
        name: "State Theatre Marysville",
        category: "Entertainment",
        description: "A restored 1930s movie palace in historic downtown Marysville hosting films, concerts, and community events.",
      },
      {
        name: "Taqueria La Hacienda",
        category: "Dining",
        description: "A popular Mexican restaurant in Yuba City serving authentic tacos, burritos, and aguas frescas — a local institution.",
      },
      {
        name: "Empire Mine State Historic Park",
        category: "Attraction",
        description: "One of California's richest gold mines turned state park in Grass Valley with mine tours, trails, and a Victorian cottage museum.",
      },
      {
        name: "Feather Falls Scenic Area",
        category: "Outdoors",
        description: "A 9.5-mile round-trip hike to one of the tallest waterfalls in the continental US, located in the Plumas National Forest east of Oroville.",
      },
    ],
    housing: {
      priceRange: "$320,000–$480,000",
      rentRange: "$1,400–$2,000/mo",
      marketContext: "The Yuba-Sutter market is significantly more affordable than the Sacramento metro but has appreciated sharply. Remote workers fleeing Sacramento have driven up prices, though BAH generally keeps pace.",
      hotNeighborhoods: ["Yuba City", "Marysville", "Grass Valley"],
    },
  },

  "columbus-afb": {
    neighborhoods: [
      {
        name: "Columbus (North Side)",
        description: "The residential area closest to the base along Highway 182 with new subdivisions, fast food corridors, and easy gate access.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Starkville",
        description: "Home of Mississippi State University, Starkville offers a vibrant college-town atmosphere with great restaurants, entertainment, and a young demographic.",
        commute: "20–25 min to main gate",
        tags: ["College town", "Walkable", "Nightlife"],
      },
      {
        name: "Columbus (East Side)",
        description: "Established older neighborhoods east of downtown Columbus near Riverwalk and the historic district with larger lots and mature landscaping.",
        commute: "10–15 min to main gate",
        tags: ["Historic", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Columbus Municipal School District",
      context: "Columbus Municipal schools serve the city's military and civilian population. Many families with children opt for the Lowndes County School District in the surrounding county, which is considered stronger academically.",
      highlights: [
        "New Hope High School (Lowndes County) is highly rated for Mississippi",
        "Mississippi School for Mathematics and Science is a statewide residential school located in Columbus",
        "Multiple private school options including Columbus Christian Academy",
      ],
    },
    activities: [
      {
        name: "Riverwalk Trail",
        category: "Outdoors",
        description: "A scenic paved trail along the Tombigbee River through Columbus connecting parks, historic sites, and downtown.",
      },
      {
        name: "Tennessee Williams Welcome Center",
        category: "Attraction",
        description: "Birthplace of the legendary playwright, this historic home museum tells the story of Williams's early life in Columbus.",
      },
      {
        name: "Mississippi State University Campus",
        category: "Attraction",
        description: "Attend Bulldog football games, visit the museums, or enjoy the campus grounds — MSU is a major cultural hub for the region.",
      },
      {
        name: "Harvey's Restaurant",
        category: "Dining",
        description: "A Columbus institution serving Southern comfort food, hand-cut steaks, and fresh seafood in a warm, family-friendly atmosphere.",
      },
      {
        name: "Lake Lowndes State Park",
        category: "Outdoors",
        description: "A state park with fishing, paddle boating, camping, and nature trails just south of Columbus.",
      },
      {
        name: "Breckenridge's Furniture & Antiques",
        category: "Shopping",
        description: "A large antique mall in downtown Columbus popular with families looking for unique home furnishings and collectibles.",
      },
    ],
    housing: {
      priceRange: "$140,000–$250,000",
      rentRange: "$800–$1,200/mo",
      marketContext: "Columbus is one of the most affordable military housing markets. Low cost of living means BAH goes far. New construction is available but limited — resale homes dominate the market.",
      hotNeighborhoods: ["Columbus North Side", "Starkville"],
    },
  },

  "davis-monthan-afb": {
    neighborhoods: [
      {
        name: "Rincon Heights / Southeast Tucson",
        description: "Established Tucson neighborhoods southeast of the base with a mix of mid-century homes, desert landscaping, and proximity to Saguaro National Park East.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Military community", "Family-friendly"],
      },
      {
        name: "Civano",
        description: "A master-planned sustainable community in southeast Tucson with parks, walking paths, and a strong neighborhood association. Very popular with DM families.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
      {
        name: "Midtown Tucson",
        description: "Tucson's urban core with walkable streets, eclectic restaurants, University of Arizona proximity, and the 4th Avenue entertainment district.",
        commute: "15–20 min to main gate",
        tags: ["Urban", "Walkable", "Nightlife", "College town"],
      },
    ],
    schools: {
      district: "Tucson Unified School District",
      context: "TUSD is large and varied in quality by school. Many DM families opt for the Vail School District (southeast Tucson/Civano area) which is consistently rated among Arizona's best.",
      highlights: [
        "Vail School District serves the Civano/Rita Ranch area and is an A-rated Arizona district",
        "Empire High School in Vail was an early 1:1 laptop school and maintains strong academics",
        "University High School (TUSD magnet) is one of Arizona's top public high schools",
      ],
    },
    activities: [
      {
        name: "Saguaro National Park East",
        category: "Outdoors",
        description: "Thousands of towering saguaro cacti with excellent hiking, cycling, and wildlife viewing just minutes from DM's east side.",
      },
      {
        name: "Pima Air & Space Museum",
        category: "Attraction",
        description: "One of the world's largest aviation museums adjacent to DM's famous aircraft boneyard, with over 400 aircraft on display.",
      },
      {
        name: "Fourth Avenue",
        category: "Dining",
        description: "Tucson's eclectic street of independent restaurants, bars, vintage clothing, and music venues — the heart of the city's alternative culture.",
      },
      {
        name: "Mount Lemmon / Ski Valley",
        category: "Outdoors",
        description: "A 9,157-ft sky island accessible by a scenic highway with hiking, skiing in winter, and a charming mountain village.",
      },
      {
        name: "Tucson Gem & Mineral Show",
        category: "Attraction",
        description: "The world's largest gem and mineral show held every February, transforming Tucson into a global destination for collectors and rockhounds.",
      },
      {
        name: "El Charro Café",
        category: "Dining",
        description: "America's oldest family-operated Mexican restaurant, credited with inventing the chimichanga, serving Tucson since 1922.",
      },
    ],
    housing: {
      priceRange: "$280,000–$420,000",
      rentRange: "$1,300–$1,900/mo",
      marketContext: "Tucson is one of the more affordable major Southwest cities. The southeast side near DM has appreciated but remains accessible. Vail-area new construction is popular but competitive.",
      hotNeighborhoods: ["Civano", "Rita Ranch", "Southeast Tucson"],
    },
  },

  "dover-afb": {
    neighborhoods: [
      {
        name: "Camden Wyoming",
        description: "A quiet Kent County community south of Dover with a small-town feel, good schools, and newer suburban developments preferred by many base families.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "Affordable"],
      },
      {
        name: "Smyrna",
        description: "A growing town north of Dover with new construction neighborhoods, a charming historic downtown, and easy base access via Route 1.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
      {
        name: "Dover (Wesley College area)",
        description: "The city of Dover proper with access to state capital amenities, the Dover International Speedway, and the most direct commute to base.",
        commute: "5–10 min to main gate",
        tags: ["Urban", "Military community", "Affordable"],
      },
    ],
    schools: {
      district: "Capital School District",
      context: "Capital School District serves Dover. Many families prefer the Caesar Rodney School District (Camden Wyoming area) or the Smyrna School District, both of which are rated higher. Delaware's small size means multiple good options are within reach.",
      highlights: [
        "Caesar Rodney High School is well-regarded for academics and athletics",
        "Smyrna High School has been recognized for student performance growth",
        "Delaware's proximity to Philadelphia and Baltimore metro resources",
      ],
    },
    activities: [
      {
        name: "Dover International Speedway",
        category: "Entertainment",
        description: "The 'Monster Mile' NASCAR track hosts two major race weekends per year, transforming Dover into a massive motorsports hub.",
      },
      {
        name: "First State National Historical Park",
        category: "Attraction",
        description: "Commemorates Delaware's role as the first state to ratify the Constitution, with sites throughout Dover and the surrounding county.",
      },
      {
        name: "Delaware Beaches (Rehoboth, Dewey)",
        category: "Outdoors",
        description: "World-class Atlantic beaches just 45–50 miles east with boardwalks, dining, surf, and outlet shopping at Rehoboth.",
      },
      {
        name: "Firefly Music Festival Grounds (The Woodlands)",
        category: "Entertainment",
        description: "Dover Downs hosts the massive annual Firefly Music Festival attracting top national and international acts each summer.",
      },
      {
        name: "Casapulla's Subs",
        category: "Dining",
        description: "A Delaware institution for Philly-style hoagies and subs, beloved by military and civilian locals across Kent County.",
      },
      {
        name: "Bombay Hook National Wildlife Refuge",
        category: "Outdoors",
        description: "A stunning Delaware Bay tidal marsh refuge north of Dover with exceptional shorebird and waterfowl migration viewing.",
      },
    ],
    housing: {
      priceRange: "$260,000–$380,000",
      rentRange: "$1,300–$1,800/mo",
      marketContext: "Dover sits in central Delaware with no state income tax, making it financially attractive. The market is stable but competitive. Coastal Delaware demand pushes prices up slightly compared to inland areas.",
      hotNeighborhoods: ["Camden Wyoming", "Smyrna"],
    },
  },

  "dyess-afb": {
    neighborhoods: [
      {
        name: "Abilene (Northwest)",
        description: "The primary residential corridor for Dyess families with newer subdivisions, retail corridors along Buffalo Gap Road, and easy base access.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Military community", "Family-friendly"],
      },
      {
        name: "Wylie (South Abilene)",
        description: "An independent city within the Abilene metro with its own school district, newer development, and a strong community identity popular with families.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "Abilene (Elmwood)",
        description: "An established midtown neighborhood with tree-lined streets, proximity to Abilene Christian and Hardin-Simmons universities, and walkable shopping.",
        commute: "10–15 min to main gate",
        tags: ["Walkable", "College town", "Historic"],
      },
    ],
    schools: {
      district: "Abilene Independent School District",
      context: "AISD is a large West Texas district serving most Dyess families. The Wylie Independent School District, a separate suburban district, is widely considered the premium option and highly sought after.",
      highlights: [
        "Wylie ISD is consistently rated as one of the top districts in West Texas",
        "Cooper High School (AISD) offers strong athletic and academic programs",
        "Multiple university partnerships with ACU, HSU, and McMurry provide dual-credit opportunities",
      ],
    },
    activities: [
      {
        name: "Dyess Linear Air Park",
        category: "Attraction",
        description: "An outdoor aircraft display park at the base's main gate showcasing historic Air Force aircraft including a B-1B Lancer and B-17 Flying Fortress.",
      },
      {
        name: "Buffalo Gap Historic Village",
        category: "Attraction",
        description: "A collection of restored 19th-century buildings south of Abilene depicting frontier Texas life, including a jail, depot, and schoolhouse.",
      },
      {
        name: "Frontier Texas!",
        category: "Attraction",
        description: "An immersive museum in downtown Abilene using holographic technology to bring the West Texas frontier era to life.",
      },
      {
        name: "Joe Allen's Bar-B-Que",
        category: "Dining",
        description: "An Abilene institution since 1957 serving smoked brisket, ribs, and all the fixings in a no-frills West Texas setting.",
      },
      {
        name: "Abilene State Park",
        category: "Outdoors",
        description: "A hill country oasis with swimming, camping, nature trails, and a resident buffalo herd in the rolling terrain southwest of the city.",
      },
      {
        name: "Abilene Zoological Gardens",
        category: "Attraction",
        description: "A 15-acre zoo in Nelson Park with over 1,000 animals representing 200 species, including an African savanna exhibit.",
      },
    ],
    housing: {
      priceRange: "$160,000–$290,000",
      rentRange: "$900–$1,400/mo",
      marketContext: "Abilene is among the most affordable mid-sized Texas cities. BAH covers rent well, and purchasing is very accessible. The Wylie ISD area commands a modest premium.",
      hotNeighborhoods: ["Wylie", "Northwest Abilene"],
    },
  },

  "edwards-afb": {
    neighborhoods: [
      {
        name: "Rosamond",
        description: "The closest off-base community to Edwards, Rosamond is an unincorporated Kern County community with very affordable homes and a strong military presence.",
        commute: "10–15 min to main gate",
        tags: ["Military community", "Affordable", "Rural"],
      },
      {
        name: "Lancaster",
        description: "A larger Antelope Valley city with more retail, restaurants, and schools. The majority of Edwards families who live off-base choose Lancaster.",
        commute: "25–30 min to main gate",
        tags: ["Suburban", "Family-friendly", "Affordable"],
      },
      {
        name: "Palmdale",
        description: "The largest Antelope Valley city with strong aerospace industry employment, major retail, and newer subdivisions. A longer commute but more amenities.",
        commute: "35–40 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Antelope Valley Union High School District",
      context: "Elementary schools in the Antelope Valley fall under multiple districts. The overall quality is mixed; many families with academic priorities seek out charter schools or accept the tradeoff for the unique Edwards experience.",
      highlights: [
        "Eastside Union School District (Lancaster area) has several well-rated elementary schools",
        "STEM-focused charter options are available in Lancaster and Palmdale",
        "The Antelope Valley College dual enrollment program benefits high school students",
      ],
    },
    activities: [
      {
        name: "Air Force Flight Test Museum",
        category: "Attraction",
        description: "On-base museum chronicling the storied history of flight testing at Edwards, including Yeager's sound barrier aircraft and early space program capsules.",
      },
      {
        name: "Poppy Reserve (Lancaster)",
        category: "Outdoors",
        description: "During peak bloom (March–April), the Antelope Valley California Poppy Reserve explodes in orange — one of California's most spectacular wildflower displays.",
      },
      {
        name: "Vasquez Rocks Natural Area",
        category: "Outdoors",
        description: "Iconic tilted sandstone formations used in countless films and TV shows, with hiking trails and climbing in the hills south of Palmdale.",
      },
      {
        name: "BLVD Kitchen & Cocktails",
        category: "Dining",
        description: "A popular upscale-casual restaurant in Lancaster serving creative American cuisine in a stylish setting on the Lancaster BLVD arts corridor.",
      },
      {
        name: "Lancaster Performing Arts Center",
        category: "Entertainment",
        description: "A professional-grade venue hosting Broadway touring shows, concerts, and community theater events in the Antelope Valley.",
      },
      {
        name: "Mojave Air & Space Port",
        category: "Attraction",
        description: "A civilian spaceport and aviation hub in nearby Mojave where experimental aircraft, Virgin Galactic, and aerospace startups test vehicles.",
      },
    ],
    housing: {
      priceRange: "$340,000–$490,000",
      rentRange: "$1,500–$2,100/mo",
      marketContext: "The Antelope Valley is one of the more affordable parts of greater LA, though prices rose sharply during the pandemic. On-base housing has long wait lists. Lancaster and Palmdale offer the best value.",
      hotNeighborhoods: ["Lancaster", "Palmdale"],
    },
  },
  "eglin-afb": {
    neighborhoods: [
      {
        name: "Fort Walton Beach",
        description: "The closest city to Eglin's main gate with a strong military community, excellent beaches, and solid retail infrastructure. The hub of the Eglin community.",
        commute: "10–15 min to main gate",
        tags: ["Military community", "Waterfront", "Family-friendly"],
      },
      {
        name: "Niceville",
        description: "A highly sought-after community on the north shore of Choctawhatchee Bay known for excellent schools, safe neighborhoods, and a tight-knit military atmosphere.",
        commute: "15–20 min to main gate",
        tags: ["Family-friendly", "Waterfront", "Military community"],
      },
      {
        name: "Destin",
        description: "A premier Florida beach destination with some of the Gulf's clearest water. Higher cost of living but extraordinary quality of life for families who prioritize beaches.",
        commute: "20–30 min to main gate",
        tags: ["Waterfront", "Suburban", "Retiree-friendly"],
      },
    ],
    schools: {
      district: "Okaloosa County School District",
      context: "Okaloosa County is consistently rated among Florida's top school districts, benefiting from a highly educated military and aerospace workforce. Schools in Niceville and Fort Walton Beach are particularly strong.",
      highlights: [
        "Niceville High School is perennially ranked among Florida's best public high schools",
        "District offers International Baccalaureate and Advanced International Certificate of Education programs",
        "Strong STEM focus district-wide supported by defense industry community",
      ],
    },
    activities: [
      {
        name: "Okaloosa Island (Fort Walton Beach)",
        category: "Outdoors",
        description: "A barrier island with public beach access, water sports rentals, and the iconic Boardwalk on Okaloosa Island with dining and entertainment.",
      },
      {
        name: "Indian Temple Mound Museum",
        category: "Attraction",
        description: "A National Historic Landmark in Fort Walton Beach with one of the largest prehistoric Southeastern temple mounds and a museum of Native American artifacts.",
      },
      {
        name: "Eglin AFB Reservation Trails",
        category: "Outdoors",
        description: "Hundreds of miles of trails on the vast Eglin reservation open to base-authorized personnel for hiking, mountain biking, and hunting.",
      },
      {
        name: "McGuire's Irish Pub",
        category: "Dining",
        description: "A legendary Florida institution in Fort Walton Beach known for its Irish stew, hand-crafted ales, and walls covered in signed dollar bills.",
      },
      {
        name: "Gulfarium Marine Adventure Park",
        category: "Attraction",
        description: "Florida's oldest marine attraction on Fort Walton Beach with dolphin shows, sea lion encounters, and marine life exhibits.",
      },
      {
        name: "Henderson Beach State Park",
        category: "Outdoors",
        description: "A pristine 6,000-foot stretch of sugar-white Destin sand with camping, nature trails, and some of the clearest emerald water on the Gulf Coast.",
      },
    ],
    housing: {
      priceRange: "$340,000–$560,000",
      rentRange: "$1,600–$2,500/mo",
      marketContext: "The Emerald Coast has seen significant price appreciation driven by tourism and remote work. Niceville commands the highest premiums for its schools. Fort Walton Beach offers more affordable entry points.",
      hotNeighborhoods: ["Niceville", "Fort Walton Beach", "Destin"],
    },
  },

  "eielson-afb": {
    neighborhoods: [
      {
        name: "North Pole",
        description: "A quirky, named community east of Fairbanks with affordable housing, a strong military presence, and the charm of Christmas-themed streets year-round.",
        commute: "20–25 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Fairbanks (College area)",
        description: "Home to University of Alaska Fairbanks with a more cosmopolitan atmosphere, cultural events, and the best dining in the Interior. A longer commute but the richest amenities.",
        commute: "30–35 min to main gate",
        tags: ["College town", "Walkable", "Urban"],
      },
      {
        name: "Moose Creek / Two Rivers",
        description: "Rural homestead-style living in the hills east of Fairbanks with larger parcels, dog mushing culture, and a true Alaskan backcountry lifestyle.",
        commute: "25–35 min to main gate",
        tags: ["Rural", "Retiree-friendly", "Affordable"],
      },
    ],
    schools: {
      district: "Fairbanks North Star Borough School District",
      context: "FNSBSD serves the entire Fairbanks area including Eielson and North Pole. The district performs well by Alaska standards. North Pole High School serves the area closest to Eielson.",
      highlights: [
        "North Pole High School offers strong vocational and technical programs",
        "University of Alaska Fairbanks provides concurrent enrollment opportunities for high schoolers",
        "District-wide aurora science and environmental education curriculum unique to Alaska",
      ],
    },
    activities: [
      {
        name: "Northern Alaska Tour Company Aurora Tours",
        category: "Outdoors",
        description: "World-class aurora borealis viewing tours north of Fairbanks — a bucket-list experience unique to an Eielson assignment.",
      },
      {
        name: "Denali National Park",
        category: "Outdoors",
        description: "North America's highest peak and a spectacular wilderness park accessible via a 4-hour drive south on the Parks Highway — stunning in every season.",
      },
      {
        name: "Pioneer Park",
        category: "Attraction",
        description: "A free Fairbanks heritage theme park with historic gold rush buildings, a sternwheeler, museums, and summer cultural events.",
      },
      {
        name: "The Pump House Restaurant",
        category: "Dining",
        description: "Fairbanks' most storied restaurant in a converted gold dredge pump house on the Chena River serving Alaskan seafood, game, and craft cocktails.",
      },
      {
        name: "Chena Hot Springs Resort",
        category: "Outdoors",
        description: "Natural geothermal hot springs 60 miles northeast of Fairbanks with year-round soaking, an ice museum, dog mushing, and aurora viewing.",
      },
      {
        name: "Creamer's Field Migratory Waterfowl Refuge",
        category: "Outdoors",
        description: "A city wildlife refuge where thousands of sandhill cranes and other migratory birds stop in spring and fall, right in the heart of Fairbanks.",
      },
    ],
    housing: {
      priceRange: "$220,000–$380,000",
      rentRange: "$1,200–$1,800/mo",
      marketContext: "Fairbanks/North Pole housing is affordable by most standards, though heating costs are substantial. Most base families budget heavily for utilities. BAH includes a cost-of-living adjustment for Alaska.",
      hotNeighborhoods: ["North Pole", "Fairbanks College area"],
    },
  },

  "ellsworth-afb": {
    neighborhoods: [
      {
        name: "Box Elder",
        description: "An unincorporated community directly adjacent to Ellsworth with the most affordable housing and fastest gate access. Very popular with junior enlisted.",
        commute: "5 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Rapid City (West Side)",
        description: "The western neighborhoods of Rapid City closest to Ellsworth with newer developments, good schools, and proximity to the Black Hills.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "Rapid City (Robbinsdale)",
        description: "An established Rapid City neighborhood with mid-century homes, mature trees, and a neighborhood feel popular with NCO and officer families.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Rapid City Area Schools",
      context: "RCAS serves both Rapid City and the Ellsworth area. It's the largest district in western South Dakota and offers solid academics. The district has invested heavily in career and technical education.",
      highlights: [
        "Stevens High School and Central High School are the district's flagship secondary schools",
        "Strong dual-credit programs with Western Dakota Tech and South Dakota Mines",
        "Excellent extracurricular activities including competitive outdoor sports programs",
      ],
    },
    activities: [
      {
        name: "Mount Rushmore National Memorial",
        category: "Attraction",
        description: "The iconic carved presidential faces in the Black Hills granite — one of America's most recognized landmarks, just 30 miles from the base.",
      },
      {
        name: "Badlands National Park",
        category: "Outdoors",
        description: "Otherworldly eroded buttes, spires, and prairie less than an hour east of Ellsworth with exceptional fossil beds and bison herds.",
      },
      {
        name: "Sturgis Motorcycle Rally Area",
        category: "Entertainment",
        description: "The legendary annual gathering each August in Sturgis, just 30 minutes away, draws hundreds of thousands of motorcyclists to the Black Hills.",
      },
      {
        name: "Firehouse Brewing Co.",
        category: "Dining",
        description: "Rapid City's pioneering craft brewery in a restored 1915 firehouse serving house-brewed beers and hearty American food downtown.",
      },
      {
        name: "Custer State Park",
        category: "Outdoors",
        description: "A vast state park in the Black Hills with free-roaming bison herds, pristine lakes, scenic drives, and one of the nation's best state park lodge systems.",
      },
      {
        name: "Reptile Gardens",
        category: "Attraction",
        description: "The world's largest reptile zoo near Rapid City featuring alligators, giant tortoises, and spectacular bird shows — a favorite for military families.",
      },
    ],
    housing: {
      priceRange: "$240,000–$380,000",
      rentRange: "$1,100–$1,700/mo",
      marketContext: "Rapid City remains one of the more affordable upper-Midwest markets. The Black Hills lifestyle draws remote workers, which has pushed prices up modestly. Strong BAH-to-cost ratio.",
      hotNeighborhoods: ["Box Elder", "West Rapid City"],
    },
  },

  "fe-warren-afb": {
    neighborhoods: [
      {
        name: "Cheyenne (West Side)",
        description: "Neighborhoods on Cheyenne's west side closest to Warren provide convenient base access with established residential streets and moderate prices.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Cheyenne (South College Drive area)",
        description: "A growing area along College Drive with newer shopping, restaurants, and residential developments. A popular choice for families wanting amenities nearby.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "Fox Farm-College",
        description: "Unincorporated Laramie County communities just south of Cheyenne with larger lots, rural character, and affordable prices.",
        commute: "15–20 min to main gate",
        tags: ["Rural", "Affordable", "Suburban"],
      },
    ],
    schools: {
      district: "Laramie County School District 1",
      context: "LCSD1 is Wyoming's largest school district and serves all of Cheyenne. Schools are generally solid with a strong focus on college and career readiness. The district is well-supported by the military community.",
      highlights: [
        "Cheyenne East and Cheyenne Central are both strong comprehensive high schools",
        "District offers robust vocational and career technical education aligned with Wyoming industries",
        "University of Wyoming nearby enables dual enrollment for high schoolers",
      ],
    },
    activities: [
      {
        name: "Cheyenne Frontier Days",
        category: "Entertainment",
        description: "The 'Daddy of 'em All' — the world's largest outdoor rodeo and Western celebration each July draws major country acts and hundreds of thousands of visitors.",
      },
      {
        name: "Wyoming State Museum",
        category: "Attraction",
        description: "Free museum in the state capital complex chronicling Wyoming's natural history, Native American cultures, and frontier heritage.",
      },
      {
        name: "Vedauwoo Recreation Area",
        category: "Outdoors",
        description: "Dramatic granite rock formations in the Medicine Bow National Forest just 30 miles west of Cheyenne, world-famous for technical rock climbing.",
      },
      {
        name: "Sanford's Grub & Pub",
        category: "Dining",
        description: "A Cheyenne institution packed with eclectic memorabilia serving enormous portions of American comfort food and a huge beer selection.",
      },
      {
        name: "Holliday Park",
        category: "Outdoors",
        description: "Cheyenne's premier urban park with a large playground, ball fields, picnic shelters, and the famous Big Boy Union Pacific locomotive on display.",
      },
      {
        name: "Historic Downtown Cheyenne",
        category: "Shopping",
        description: "The state capital's walkable downtown with independent shops, the Capitol building, and the Depot Museum in a restored 1886 train station.",
      },
    ],
    housing: {
      priceRange: "$280,000–$420,000",
      rentRange: "$1,200–$1,800/mo",
      marketContext: "Cheyenne offers good value for a state capital with no state income tax. Housing has appreciated but remains affordable. The military community is large and well-integrated into the city.",
      hotNeighborhoods: ["South College Drive area", "West Side"],
    },
  },

  "fairchild-afb": {
    neighborhoods: [
      {
        name: "Airway Heights",
        description: "The community directly adjacent to Fairchild's main gate with affordable housing, a growing commercial corridor, and the highest military family concentration.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Medical Lake",
        description: "A small city 5 miles south of the base with a historic downtown, therapeutic lake, and very affordable homes popular with families who want space.",
        commute: "10–15 min to main gate",
        tags: ["Rural", "Affordable", "Family-friendly"],
      },
      {
        name: "Spokane Valley",
        description: "A large suburban city east of Spokane with excellent retail, strong schools, newer subdivisions, and a slightly longer commute.",
        commute: "25–30 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
    ],
    schools: {
      district: "Cheney School District",
      context: "Cheney School District serves Airway Heights and Medical Lake areas closest to Fairchild. It's a compact district with solid academics. Many families in Spokane Valley use the Central Valley or West Valley districts.",
      highlights: [
        "Cheney High School offers IB and AP coursework and strong athletics",
        "Eastern Washington University in Cheney provides concurrent enrollment opportunities",
        "Central Valley School District (Spokane Valley) is one of the region's highest performers",
      ],
    },
    activities: [
      {
        name: "Riverside State Park",
        category: "Outdoors",
        description: "Washington's largest state park with 50+ miles of trails along the Spokane River, off-road vehicle areas, and camping — accessible within 20 minutes.",
      },
      {
        name: "Riverfront Park Spokane",
        category: "Outdoors",
        description: "An iconic urban park on Spokane's river falls with the SkyRide gondola, ice ribbon, IMAX theater, and the historic Looff Carrousel.",
      },
      {
        name: "Northern Quest Resort & Casino",
        category: "Entertainment",
        description: "A large casino resort in Airway Heights operated by the Kalispel Tribe with top-tier live entertainment, dining, and spa facilities right next to base.",
      },
      {
        name: "Yards Bruncheon",
        category: "Dining",
        description: "Spokane's most beloved brunch spot serving creative egg dishes and cocktails in a hip Kendall Yards setting overlooking the Spokane River.",
      },
      {
        name: "Mount Spokane State Park",
        category: "Outdoors",
        description: "A year-round recreation area 30 miles northeast with skiing in winter and mountain biking and hiking in summer.",
      },
      {
        name: "Spokane Public Market",
        category: "Shopping",
        description: "A year-round indoor farmers market and food hall in the Perry District showcasing Eastern Washington produce, artisan goods, and local eateries.",
      },
    ],
    housing: {
      priceRange: "$280,000–$430,000",
      rentRange: "$1,300–$1,900/mo",
      marketContext: "Spokane has attracted significant remote worker migration from Seattle, pushing prices up substantially since 2020. Airway Heights and Medical Lake remain the most affordable options. Spokane Valley is competitive.",
      hotNeighborhoods: ["Airway Heights", "Spokane Valley"],
    },
  },

  "goodfellow-afb": {
    neighborhoods: [
      {
        name: "San Angelo (Southeast)",
        description: "The residential areas southeast of the base with easy access to the main gate. Mix of military and civilian families in established neighborhoods.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "San Angelo (Bentwood area)",
        description: "A desirable neighborhood cluster in north-central San Angelo with newer homes, parks, and proximity to good schools.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "San Angelo (Southland area)",
        description: "An affordable established neighborhood with larger lots and a mix of military and local families close to Angelo State University.",
        commute: "10–15 min to main gate",
        tags: ["Affordable", "College town", "Family-friendly"],
      },
    ],
    schools: {
      district: "San Angelo Independent School District",
      context: "SAISD serves the city. Lake View High School and Central High School are the primary secondary options. Many families also consider Christoval ISD in the surrounding county for a smaller-district experience.",
      highlights: [
        "Central High School has strong academic and athletic programs including nationally competitive athletics",
        "Angelo State University's proximity enables dual enrollment for motivated high schoolers",
        "District supports significant JROTC programs aligned with Goodfellow's intelligence training mission",
      ],
    },
    activities: [
      {
        name: "San Angelo State Park",
        category: "Outdoors",
        description: "A large West Texas park on Twin Buttes Reservoir with camping, hiking, mountain biking, and a free-roaming bison herd.",
      },
      {
        name: "Fort Concho National Historic Landmark",
        category: "Attraction",
        description: "One of the best-preserved frontier forts in the country, telling the story of the Buffalo Soldiers and frontier military life in West Texas.",
      },
      {
        name: "Concho River Walk",
        category: "Outdoors",
        description: "A scenic linear park along the Concho River through downtown San Angelo with trails, art installations, and the famous Chicken Farm Art Center.",
      },
      {
        name: "Zentner's Daughter Steakhouse",
        category: "Dining",
        description: "San Angelo's most beloved steakhouse serving hand-cut West Texas beef since 1963 in a classic Texas roadhouse atmosphere.",
      },
      {
        name: "San Angelo Museum of Fine Arts",
        category: "Attraction",
        description: "A regionally significant art museum on the Concho River with a renowned ceramics collection and rotating contemporary exhibitions.",
      },
      {
        name: "O.C. Fisher Reservoir",
        category: "Outdoors",
        description: "A popular recreation area adjacent to the state park with boating, fishing, and migratory shorebird watching.",
      },
    ],
    housing: {
      priceRange: "$150,000–$280,000",
      rentRange: "$850–$1,300/mo",
      marketContext: "San Angelo is among West Texas's most affordable cities. BAH covers housing costs well. The market is stable with limited new construction. Older established neighborhoods offer excellent value.",
      hotNeighborhoods: ["Bentwood area", "Southeast San Angelo"],
    },
  },

  "grand-forks-afb": {
    neighborhoods: [
      {
        name: "Grand Forks (South End)",
        description: "The primary residential area closest to the base with established neighborhoods, easy access, and a strong military family presence.",
        commute: "10–15 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Grand Forks (University area)",
        description: "Neighborhoods surrounding the University of North Dakota with a college-town energy, walkable streets, and the best restaurant and bar scene in the region.",
        commute: "15–20 min to main gate",
        tags: ["College town", "Walkable", "Affordable"],
      },
      {
        name: "East Grand Forks, MN",
        description: "Just across the Red River in Minnesota, East Grand Forks offers another housing market with Minnesota school district access and slightly different tax implications.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Grand Forks Public Schools",
      context: "GFPS serves the city and base area. The district has invested heavily in modernizing facilities. UND's presence means the city has strong educational culture overall.",
      highlights: [
        "Red River High School and Central High School are the main secondary schools",
        "UND offers one of the nation's top aerospace programs, creating a STEM-positive culture",
        "District participates in advanced learning networks and gifted education programs",
      ],
    },
    activities: [
      {
        name: "University of North Dakota Hockey",
        category: "Entertainment",
        description: "UND Fighting Hawks hockey is a massive community event at the Ralph Engelstad Arena — tickets are coveted and the atmosphere is electric.",
      },
      {
        name: "Greenway Trail System",
        category: "Outdoors",
        description: "Over 60 miles of paved trails along the Red River and through Grand Forks' park system — exceptional for cycling and running.",
      },
      {
        name: "Rhombus Guys Brewing Company",
        category: "Dining",
        description: "Grand Forks' beloved craft pizza and brewery concept with creative pies and house-brewed ales in a welcoming downtown taproom.",
      },
      {
        name: "Alerus Center",
        category: "Entertainment",
        description: "A large arena and convention center hosting UND football, concerts, trade shows, and major community events.",
      },
      {
        name: "North Dakota Museum of Art",
        category: "Attraction",
        description: "A nationally recognized contemporary art museum on the UND campus with rotating exhibitions of significant regional and international work.",
      },
      {
        name: "Turtle River State Park",
        category: "Outdoors",
        description: "A forested state park along the Turtle River west of Grand Forks with camping, picnicking, and cross-country skiing trails.",
      },
    ],
    housing: {
      priceRange: "$180,000–$300,000",
      rentRange: "$900–$1,400/mo",
      marketContext: "Grand Forks is one of the most affordable markets in the upper Midwest. Limited economic diversity keeps prices low. BAH covers costs well and purchasing is very accessible for most ranks.",
      hotNeighborhoods: ["South End", "University area"],
    },
  },

  "hanscom-afb": {
    neighborhoods: [
      {
        name: "Bedford",
        description: "The host community for Hanscom with charming New England neighborhoods, excellent schools, and a highly educated professional population.",
        commute: "5–10 min to main gate",
        tags: ["Suburban", "Family-friendly", "Retiree-friendly"],
      },
      {
        name: "Lexington",
        description: "A prestigious Boston suburb bordering Hanscom with nationally top-ranked schools, historic Revolutionary War sites, and beautiful homes — and very high prices.",
        commute: "10–15 min to main gate",
        tags: ["Historic", "Suburban", "Family-friendly"],
      },
      {
        name: "Billerica",
        description: "A more affordable alternative north of Bedford with solid schools, newer construction options, and easy 128/I-95 freeway access.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Bedford Public Schools",
      context: "Bedford Public Schools is a small, high-performing district with an excellent reputation. Lexington Public Schools is even more prestigious. Both routinely rank among Massachusetts's and the nation's top districts.",
      highlights: [
        "Bedford High School ranks in the top tier of Massachusetts and national school rankings",
        "Lexington High School consistently places in the top 1% nationally for AP performance",
        "Area benefits from proximity to MIT, Harvard, and numerous research institutions",
      ],
    },
    activities: [
      {
        name: "Minuteman National Historical Park",
        category: "Attraction",
        description: "The site of the 'Shot Heard Round the World' in Lexington and Concord — walk the Battle Road trail through American Revolution history.",
      },
      {
        name: "Walden Pond State Reservation",
        category: "Outdoors",
        description: "The famous pond where Thoreau wrote Walden, offering swimming, hiking, and literary pilgrimage in the heart of Concord.",
      },
      {
        name: "Great Meadows National Wildlife Refuge",
        category: "Outdoors",
        description: "A stunning freshwater marsh along the Concord River with exceptional birding and a scenic canoe route near Concord.",
      },
      {
        name: "The Wayside Inn",
        category: "Dining",
        description: "America's oldest operating inn in Sudbury (1716) offering colonial-era dining in a landmark setting — a unique New England dining experience.",
      },
      {
        name: "Burlington Mall",
        category: "Shopping",
        description: "One of the Boston area's largest regional malls with major department stores, specialty retailers, and restaurants just 10 minutes from Hanscom.",
      },
      {
        name: "Boston (via Route 2)",
        category: "Entertainment",
        description: "World-class museums, the Red Sox, Patriots, Celtics, Bruins, fine dining, and cultural attractions all accessible within 30–45 minutes of Hanscom.",
      },
    ],
    housing: {
      priceRange: "$680,000–$1,100,000",
      rentRange: "$2,400–$3,800/mo",
      marketContext: "Greater Boston is one of the nation's most expensive housing markets. BAH is high to reflect costs but often doesn't fully cover premium neighborhoods like Lexington. Billerica and surrounding towns offer more value.",
      hotNeighborhoods: ["Bedford", "Lexington", "Billerica"],
    },
  },

  "hill-afb": {
    neighborhoods: [
      {
        name: "Layton",
        description: "The largest city nearest to Hill AFB with excellent retail, restaurants, and a huge military family population. Layton Hills Mall is a major hub.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Military community", "Family-friendly"],
      },
      {
        name: "Roy",
        description: "A community immediately adjacent to the base's south side with very high military family concentration, affordable housing, and quick gate access.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Kaysville",
        description: "A highly desirable Davis County community known for excellent schools, beautiful neighborhoods, and a strong LDS community culture. Premium pricing.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "Retiree-friendly"],
      },
    ],
    schools: {
      district: "Davis School District",
      context: "Davis School District is one of Utah's largest and most respected districts. Schools near Hill AFB routinely perform well. The district is highly regarded for both academics and extracurriculars.",
      highlights: [
        "Layton High School and Northridge High School are among the district's flagship schools",
        "Davis District's gifted and advanced learning programs are among Utah's strongest",
        "Strong extracurricular and athletic programs reflecting the community's family focus",
      ],
    },
    activities: [
      {
        name: "Hill Aerospace Museum",
        category: "Attraction",
        description: "An outstanding free museum at the base's north gate with over 90 military aircraft on display, including rare Cold War era jets and bombers.",
      },
      {
        name: "Antelope Island State Park",
        category: "Outdoors",
        description: "A Great Salt Lake island with a free-roaming bison herd, hiking, mountain biking, and spectacular sunsets over the lake.",
      },
      {
        name: "Snowbasin Ski Resort",
        category: "Outdoors",
        description: "A world-class ski resort 30 miles east of the base in the Wasatch Mountains — host of 2002 Olympic downhill events with uncrowded, powder-filled terrain.",
      },
      {
        name: "Texas Roadhouse Layton",
        category: "Dining",
        description: "The local Texas Roadhouse is a perennial military family favorite — enormous portions, hand-cut steaks, and fresh-baked rolls at military-friendly prices.",
      },
      {
        name: "Lagoon Amusement Park",
        category: "Entertainment",
        description: "Utah's premier amusement park in Farmington with roller coasters, waterpark, and a pioneer village — just south of the base.",
      },
      {
        name: "Weber County Parks (Fort Buenaventura)",
        category: "Outdoors",
        description: "A recreation of the 1840s mountain man fort in Ogden with river access, camping, and the annual Mountain Man Rendezvous event.",
      },
    ],
    housing: {
      priceRange: "$380,000–$580,000",
      rentRange: "$1,600–$2,200/mo",
      marketContext: "Davis County has seen extraordinary appreciation since 2020. The market has softened from peak but remains significantly elevated. Roy offers the most affordable entry, while Kaysville commands premium prices.",
      hotNeighborhoods: ["Layton", "Roy", "Kaysville"],
    },
  },

  "holloman-afb": {
    neighborhoods: [
      {
        name: "Alamogordo (North)",
        description: "The primary residential area for Holloman families with newer subdivisions north of downtown, close to White Sands National Park access.",
        commute: "10–15 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Tularosa",
        description: "A charming small town north of Holloman with historic adobe homes, acequia irrigation culture, and very affordable prices.",
        commute: "15–20 min to main gate",
        tags: ["Historic", "Rural", "Affordable"],
      },
      {
        name: "Las Cruces",
        description: "New Mexico's second-largest city, 65 miles south, has a more complete amenity set, NM State University, and growing communities. A very long commute but preferred by some senior officers.",
        commute: "55–65 min to main gate",
        tags: ["College town", "Urban", "Suburban"],
      },
    ],
    schools: {
      district: "Alamogordo Public Schools",
      context: "APS serves the base community. The district is modest in size but has improved academically. Many families on longer rotations explore New Mexico School for the Deaf (for specialized needs) or private options.",
      highlights: [
        "Alamogordo High School offers solid AP and career tech programs",
        "District has improved test scores steadily in recent years",
        "New Mexico State University-Alamogordo campus provides community college access",
      ],
    },
    activities: [
      {
        name: "White Sands National Park",
        category: "Outdoors",
        description: "The world's largest gypsum dunefield with blindingly white sand dunes, sunsets, and the unique Heart of the Sands trail system — minutes from the base.",
      },
      {
        name: "Space History Museum (New Mexico Museum of Space History)",
        category: "Attraction",
        description: "A world-class museum in Alamogordo tracing the history of rocketry and space exploration with the International Space Hall of Fame.",
      },
      {
        name: "Sacramento Mountains / Cloudcroft",
        category: "Outdoors",
        description: "A cool mountain escape just 16 miles up into the Sacramento Mountains with skiing, hiking, and the historic Cloudcroft lodge at 9,000 feet.",
      },
      {
        name: "Noisy Water Winery",
        category: "Dining",
        description: "A popular winery and tasting room in Cloudcroft drawing Holloman families up the mountain for live music, wine, and mountain air.",
      },
      {
        name: "White Sands Missile Range Museum",
        category: "Attraction",
        description: "Chronicles the history of America's missile testing programs with outdoor missile park and indoor exhibits about the early space and nuclear era.",
      },
      {
        name: "Oliver Lee Memorial State Park",
        category: "Outdoors",
        description: "A rugged state park at the base of the Sacramento Mountains with a historic ranch site, spring-fed oasis, and dramatic canyon hiking.",
      },
    ],
    housing: {
      priceRange: "$160,000–$280,000",
      rentRange: "$850–$1,300/mo",
      marketContext: "Alamogordo is one of the most affordable military markets in the Southwest. Very low cost of living and high BAH-to-cost ratio. Housing supply is adequate for the base population.",
      hotNeighborhoods: ["Alamogordo North", "Tularosa"],
    },
  },

  "hurlburt-field": {
    neighborhoods: [
      {
        name: "Mary Esther",
        description: "The community directly surrounding Hurlburt Field with heavy Special Operations Forces family concentration, waterfront options, and easy gate access.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Waterfront", "Suburban"],
      },
      {
        name: "Fort Walton Beach (West)",
        description: "Established neighborhoods west of the Fort Walton Beach bridge close to Hurlburt with beach access, shopping, and restaurants.",
        commute: "10–15 min to main gate",
        tags: ["Waterfront", "Suburban", "Family-friendly"],
      },
      {
        name: "Navarre",
        description: "A rapidly growing community east along the coast with new construction, beautiful beaches, and a quieter, more residential atmosphere.",
        commute: "20–25 min to main gate",
        tags: ["Waterfront", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Santa Rosa County School District",
      context: "Santa Rosa County schools serve the Navarre and Mary Esther areas near Hurlburt. The district consistently outperforms Florida averages and is one of the state's strongest, particularly in the Navarre area.",
      highlights: [
        "Navarre High School is one of Florida's top-ranked public schools",
        "District serves a highly educated and engaged military family population",
        "Strong dual enrollment programs with Pensacola State College",
      ],
    },
    activities: [
      {
        name: "Navarre Beach",
        category: "Outdoors",
        description: "One of Florida's most pristine and least-crowded beaches with sugar-white sand and Gulf access — a Hurlburt family staple.",
      },
      {
        name: "Air Force Special Operations Command Museum",
        category: "Attraction",
        description: "An on-base museum tracing the history of USAF special operations aviation from WWII Carpetbaggers to modern AFSOC.",
      },
      {
        name: "Soundside Park",
        category: "Outdoors",
        description: "A Santa Rosa Sound waterfront park popular for kayaking, fishing, and watching stunning sunsets over the sound.",
      },
      {
        name: "Floyd's Shrimp House",
        category: "Dining",
        description: "A legendary Gulf Coast seafood restaurant serving fresh local shrimp, grouper, and oysters in a classic Florida fish shack setting.",
      },
      {
        name: "The Track Family Fun Parks",
        category: "Entertainment",
        description: "A go-kart and family entertainment center on the Fort Walton Beach strip popular with military families for birthday celebrations.",
      },
      {
        name: "Blackwater River State Park",
        category: "Outdoors",
        description: "One of the purest sand-bottom rivers in the world for kayaking, canoeing, and swimming through pristine Florida longleaf pine forest.",
      },
    ],
    housing: {
      priceRange: "$320,000–$520,000",
      rentRange: "$1,500–$2,400/mo",
      marketContext: "The Emerald Coast market around Hurlburt has seen major appreciation. The SOF community's high BAH and dual-income households push prices up. Navarre offers relative value over Santa Rosa Beach or Destin.",
      hotNeighborhoods: ["Navarre", "Mary Esther", "Fort Walton Beach"],
    },
  },

  "keesler-afb": {
    neighborhoods: [
      {
        name: "Biloxi (D'Iberville area)",
        description: "Inland communities north of Biloxi with newer suburban development, better flood elevation, and strong school access popular with Keesler families.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Military community", "Family-friendly"],
      },
      {
        name: "Ocean Springs",
        description: "One of Mississippi's most charming small cities with a vibrant arts scene, beautiful live oak canopy, historic downtown, and waterfront restaurants.",
        commute: "15–20 min to main gate",
        tags: ["Walkable", "Waterfront", "Historic"],
      },
      {
        name: "Long Beach",
        description: "A quieter Gulf Coast community west of Biloxi with affordable waterfront access, good schools, and a strong military family presence.",
        commute: "20–25 min to main gate",
        tags: ["Waterfront", "Affordable", "Military community"],
      },
    ],
    schools: {
      district: "Biloxi Public Schools",
      context: "BPS serves the base community. Harrison County and Jackson County (Ocean Springs) school districts are considered stronger. Ocean Springs School District is particularly well-regarded.",
      highlights: [
        "Ocean Springs High School has strong arts and academic programs",
        "Biloxi High School has competitive JROTC and athletic programs",
        "Multiple private school options including Resurrection Catholic School and Saint Stanislaus",
      ],
    },
    activities: [
      {
        name: "Biloxi Beach and Lighthouse",
        category: "Outdoors",
        description: "The iconic Biloxi Lighthouse on the beach road is the city's landmark, surrounded by a white-sand beach and Gulf views.",
      },
      {
        name: "Beau Rivage Casino Resort",
        category: "Entertainment",
        description: "MGM's Gulf Coast flagship casino with a full resort experience, world-class entertainment, fine dining, and the largest poker room in Mississippi.",
      },
      {
        name: "Gulf Islands National Seashore",
        category: "Outdoors",
        description: "Pristine barrier islands accessible by boat with camping, shell collecting, snorkeling, and some of the Gulf's most undisturbed ecosystems.",
      },
      {
        name: "Mary Mahoney's Old French House",
        category: "Dining",
        description: "A legendary Biloxi restaurant in a 1737 French colonial house serving Gulf seafood and classic dishes — one of America's oldest restaurants.",
      },
      {
        name: "Ohr-O'Keefe Museum of Art",
        category: "Attraction",
        description: "A Frank Gehry-designed museum complex celebrating Biloxi's 'Mad Potter of Biloxi,' George Ohr, with striking titanium pods housing the collection.",
      },
      {
        name: "Backcountry Trails (DeSoto National Forest)",
        category: "Outdoors",
        description: "Miles of hiking and biking trails through longleaf pine forest in the DeSoto National Forest north of Biloxi.",
      },
    ],
    housing: {
      priceRange: "$200,000–$340,000",
      rentRange: "$1,000–$1,700/mo",
      marketContext: "Biloxi offers Gulf Coast living at a fraction of Florida prices. The market remains affordable despite casino industry money. Elevation matters for flood insurance — check FEMA maps carefully.",
      hotNeighborhoods: ["Ocean Springs", "D'Iberville"],
    },
  },

  "kirtland-afb": {
    neighborhoods: [
      {
        name: "Kirtland (Southeast Albuquerque)",
        description: "The neighborhoods directly adjacent to Kirtland's south and east fences with heavy military family concentration and easy gate access.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Four Hills Village",
        description: "An established neighborhood in far southeast Albuquerque with mountain views, larger lots, and a more upscale residential feel.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Family-friendly", "Retiree-friendly"],
      },
      {
        name: "Rio Rancho",
        description: "The fastest-growing city in New Mexico directly northwest of Albuquerque with new construction, Intel campus employment, and very family-friendly neighborhoods.",
        commute: "25–35 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Albuquerque Public Schools",
      context: "APS is New Mexico's largest district with highly variable school quality. Families near Kirtland often seek charter schools or private options. The Rio Rancho Independent School District is widely regarded as better than APS.",
      highlights: [
        "Eldorado High School (APS) is among the district's strongest academic performers",
        "Rio Rancho Public Schools is consistently rated higher than APS overall",
        "National Academy Foundation programs at several APS high schools",
      ],
    },
    activities: [
      {
        name: "Sandia Peak Tramway",
        category: "Outdoors",
        description: "The world's longest aerial tramway rises 4,000 feet to the 10,378-ft Sandia Peak crest with panoramic New Mexico views and skiing in winter.",
      },
      {
        name: "Balloon Fiesta Park",
        category: "Attraction",
        description: "Home to the Albuquerque International Balloon Fiesta every October — the world's largest hot air balloon event with 500+ balloons.",
      },
      {
        name: "Old Town Albuquerque",
        category: "Attraction",
        description: "The historic heart of the city with Spanish colonial architecture, adobe galleries, Native American jewelry, and the New Mexico Museum of Natural History.",
      },
      {
        name: "Range Café",
        category: "Dining",
        description: "A beloved Albuquerque institution with multiple locations serving New Mexican comfort food, green chile stew, and famous desserts.",
      },
      {
        name: "Petroglyph National Monument",
        category: "Outdoors",
        description: "Thousands of ancient Native American petroglyphs carved into West Mesa basalt — a unique cultural and hiking destination right in the city.",
      },
      {
        name: "Bosque Trail System",
        category: "Outdoors",
        description: "Miles of paved and unpaved trails through the Rio Grande cottonwood forest offering birding, cycling, and equestrian access.",
      },
    ],
    housing: {
      priceRange: "$270,000–$420,000",
      rentRange: "$1,200–$1,800/mo",
      marketContext: "Albuquerque remains one of the more affordable Sunbelt metros despite recent appreciation. Southeast Albuquerque near Kirtland has seen steady demand. Rio Rancho new construction is competitive.",
      hotNeighborhoods: ["Four Hills Village", "Rio Rancho"],
    },
  },

  "laughlin-afb": {
    neighborhoods: [
      {
        name: "Del Rio (Las Vacas area)",
        description: "Residential neighborhoods near the base with the highest military family concentration. Del Rio is a small, tight-knit border community.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Del Rio (San Felipe area)",
        description: "Established neighborhoods in central Del Rio with larger homes, proximity to downtown, and the best local dining options in the city.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Historic", "Affordable"],
      },
      {
        name: "Amistad Area",
        description: "Lakeside homes and rural properties near Lake Amistad offering outdoor-focused living with stunning reservoir views and very affordable prices.",
        commute: "15–25 min to main gate",
        tags: ["Waterfront", "Rural", "Affordable"],
      },
    ],
    schools: {
      district: "San Felipe Del Rio Consolidated Independent School District",
      context: "SFDR CISD serves Del Rio with one high school, Del Rio High School. The district is small and community-oriented. Amenities are limited but the military community is well-integrated.",
      highlights: [
        "Del Rio High School offers dual enrollment with Southwest Texas Junior College",
        "Strong Spanish bilingual programs reflecting the community's border culture",
        "Active JROTC program with strong community support",
      ],
    },
    activities: [
      {
        name: "Amistad National Recreation Area",
        category: "Outdoors",
        description: "A massive international reservoir on the Rio Grande shared with Mexico, with world-class bass fishing, scuba diving, and prehistoric rock art sites.",
      },
      {
        name: "Langtry / Judge Roy Bean Visitor Center",
        category: "Attraction",
        description: "The legendary 'Law West of the Pecos' site in Langtry with Judge Roy Bean's authentic Jersey Lilly Saloon and a cactus garden.",
      },
      {
        name: "Seminole Canyon State Park",
        category: "Outdoors",
        description: "One of North America's best prehistoric rock art sites with ranger-led tours to Fate Bell Shelter and stunning canyon views.",
      },
      {
        name: "Memo's Restaurant",
        category: "Dining",
        description: "A Del Rio Tex-Mex institution beloved by both military families and locals for its enchiladas, fajitas, and friendly border-town atmosphere.",
      },
      {
        name: "Bracketville / Fort Clark Springs",
        category: "Attraction",
        description: "A historic frontier fort turned private residential community with a spring-fed pool, golf course, and old stone buildings 30 miles east.",
      },
      {
        name: "Ciudad Acuña, Mexico",
        category: "Dining",
        description: "The sister city across the International Bridge offering authentic Coahuila cuisine, markets, and restaurants — a unique border experience just minutes away.",
      },
    ],
    housing: {
      priceRange: "$120,000–$220,000",
      rentRange: "$700–$1,100/mo",
      marketContext: "Del Rio is one of the most affordable military markets in the country. The remote location keeps prices very low. BAH covers costs easily and purchasing is highly accessible. Very limited new construction.",
      hotNeighborhoods: ["Del Rio San Felipe area", "Amistad Area"],
    },
  },
  "lackland-afb": {
    neighborhoods: [
      {
        name: "Leon Valley",
        description: "An independent city immediately north of Lackland with affordable housing, strong military family community, and easy access to Loop 410.",
        commute: "10–15 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Helotes",
        description: "A rapidly growing community in northwest San Antonio with new construction, Hill Country character, and excellent Northside ISD schools.",
        commute: "20–30 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
      {
        name: "San Antonio (Southwest / Alamo Ranch)",
        description: "San Antonio's fastest-growing residential area with master-planned communities, new retail, and strong schools, all within reasonable distance of Lackland.",
        commute: "15–25 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Northside Independent School District",
      context: "NISD is one of Texas's largest and best districts, serving most of Lackland's off-base population. It consistently outperforms the state on most metrics and has strong fine arts and athletic programs.",
      highlights: [
        "O'Connor, Stevens, and Warren High Schools are flagship NISD secondaries",
        "District-wide magnet and career academy programs for specialized interests",
        "Exceptional fine arts pipeline feeding the San Antonio arts community",
      ],
    },
    activities: [
      {
        name: "The Alamo",
        category: "Attraction",
        description: "Texas's most iconic historic site in downtown San Antonio — a must-visit pilgrimage for every family stationed in the city.",
      },
      {
        name: "San Antonio River Walk",
        category: "Dining",
        description: "The famous limestone-lined canal through downtown lined with restaurants, bars, and hotels — the heart of San Antonio's tourism and dining scene.",
      },
      {
        name: "Natural Bridge Caverns",
        category: "Attraction",
        description: "Texas's largest known commercial cavern system north of San Antonio with spectacular formations, outdoor adventure tours, and a discovery village.",
      },
      {
        name: "SeaWorld San Antonio",
        category: "Entertainment",
        description: "One of the country's top SeaWorld parks with rides, marine animal shows, and a full waterpark adjacent to the Lackland area.",
      },
      {
        name: "Leon Creek Greenway",
        category: "Outdoors",
        description: "A paved multi-use trail along Leon Creek near the base perfect for cycling, running, and family outings.",
      },
      {
        name: "Market Square (El Mercado)",
        category: "Shopping",
        description: "The largest Mexican market in the US outside of Mexico with artisan goods, authentic food, and cultural events in the heart of San Antonio.",
      },
    ],
    housing: {
      priceRange: "$240,000–$380,000",
      rentRange: "$1,200–$1,800/mo",
      marketContext: "San Antonio remains one of the most affordable large Texas cities. Strong job market keeps demand high. Alamo Ranch and Helotes corridors have seen rapid appreciation. Overall strong BAH-to-cost ratio.",
      hotNeighborhoods: ["Helotes", "Alamo Ranch", "Leon Valley"],
    },
  },

  "little-rock-afb": {
    neighborhoods: [
      {
        name: "Jacksonville",
        description: "The host city for Little Rock AFB with the highest military family concentration, affordable housing, and the shortest commute to the flight line.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Cabot",
        description: "A rapidly growing bedroom community northeast of Jacksonville with outstanding Cabot School District, new construction, and a strong family atmosphere.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
      {
        name: "Sherwood",
        description: "A well-established north Little Rock suburb with good schools, mature neighborhoods, and reasonable proximity to both the base and Little Rock's amenities.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "Family-friendly", "Affordable"],
      },
    ],
    schools: {
      district: "Jacksonville-North Pulaski School District",
      context: "JNPSD was formed in 2016 as a separate district from Pulaski County. The newly independent district is actively improving. Many families with school-age children move to Cabot ISD, widely considered one of Arkansas's best.",
      highlights: [
        "Cabot High School is consistently among Arkansas's top public schools",
        "JNPSD has invested heavily in new facilities and academic programs since its founding",
        "Multiple private school options in the Jacksonville-Sherwood corridor",
      ],
    },
    activities: [
      {
        name: "Pinnacle Mountain State Park",
        category: "Outdoors",
        description: "A popular cone-shaped peak near Little Rock with a challenging summit hike and river trail offering great views of the Arkansas River Valley.",
      },
      {
        name: "Clinton Presidential Center",
        category: "Attraction",
        description: "The Bill Clinton presidential library and museum in Little Rock designed as a bridge over the Arkansas River with extensive archives and exhibits.",
      },
      {
        name: "Two Rivers Park",
        category: "Outdoors",
        description: "A large river park at the confluence of the Arkansas and Maumelle rivers with trails, picnic areas, and incredible sunset views.",
      },
      {
        name: "South on Main",
        category: "Dining",
        description: "Little Rock's premier modern Southern restaurant in the SoMa district with innovative takes on regional cuisine and a vibrant arts venue attached.",
      },
      {
        name: "Little Rock Central High School National Historic Site",
        category: "Attraction",
        description: "The site of the 1957 desegregation crisis with a visitor center telling the powerful story of the Little Rock Nine.",
      },
      {
        name: "Heifer International Village",
        category: "Attraction",
        description: "A free interactive global village in downtown Little Rock exploring world hunger issues and Heifer's global programs.",
      },
    ],
    housing: {
      priceRange: "$180,000–$320,000",
      rentRange: "$950–$1,500/mo",
      marketContext: "Little Rock is one of the most affordable state capitals. The base area around Jacksonville is particularly affordable. Cabot has seen sharp appreciation due to school district demand.",
      hotNeighborhoods: ["Cabot", "Sherwood"],
    },
  },

  "luke-afb": {
    neighborhoods: [
      {
        name: "Litchfield Park",
        description: "An established West Valley community adjacent to Luke with a historic village center, the Wigwam Resort, and a strong golf community atmosphere.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Golf community", "Retiree-friendly"],
      },
      {
        name: "Goodyear",
        description: "One of the Phoenix area's fastest-growing cities with large master-planned communities, new construction, excellent schools, and strong retail.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
      {
        name: "Surprise",
        description: "A large planned community northwest of Luke popular with military families for its affordable new construction, spring training baseball, and water parks.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Agua Fria Union High School District",
      context: "AFHSD serves the Luke AFB area secondary schools. Elementary schools fall under multiple smaller districts. The West Valley has several highly rated school options, particularly in Goodyear and Surprise.",
      highlights: [
        "Millennium High School (AFHSD) is consistently among Arizona's top public schools",
        "Goodyear's Palm Valley/Liberty area schools are top-rated in the West Valley",
        "Dysart Unified (Surprise) has strong schools and extensive extracurricular programs",
      ],
    },
    activities: [
      {
        name: "White Tank Mountain Regional Park",
        category: "Outdoors",
        description: "Maricopa County's largest regional park with 30+ miles of trails, Hohokam petroglyphs, and stunning Sonoran desert scenery west of Surprise.",
      },
      {
        name: "Peoria Sports Complex",
        category: "Entertainment",
        description: "Spring training home of the Padres and Mariners with MLB games from February through March — a quintessential Arizona West Valley experience.",
      },
      {
        name: "Wigwam Golf Resort",
        category: "Outdoors",
        description: "A historic Arizona resort with 54 holes of golf, spa, and dining in Litchfield Park — an iconic destination since 1929.",
      },
      {
        name: "The Yard Milkshake Bar",
        category: "Dining",
        description: "A wildly popular dessert shop in Surprise serving over-the-top milkshakes piled with toppings — a military family favorite.",
      },
      {
        name: "Lake Pleasant Regional Park",
        category: "Outdoors",
        description: "A large Maricopa County reservoir with boating, wakeboarding, fishing, and camping in the desert mountains north of the West Valley.",
      },
      {
        name: "Tanger Outlets (Goodyear)",
        category: "Shopping",
        description: "A major outlet mall in Goodyear with dozens of name-brand stores and restaurants — one of the West Valley's top shopping destinations.",
      },
    ],
    housing: {
      priceRange: "$350,000–$550,000",
      rentRange: "$1,600–$2,300/mo",
      marketContext: "The West Phoenix Valley has seen extraordinary growth and appreciation. Prices peaked in 2022 and have softened but remain elevated. New construction is abundant. Goodyear and Surprise are most competitive.",
      hotNeighborhoods: ["Goodyear", "Surprise", "Litchfield Park"],
    },
  },

  "macdill-afb": {
    neighborhoods: [
      {
        name: "South Tampa (Ballast Point)",
        description: "An upscale South Tampa neighborhood directly adjacent to MacDill's north gate with waterfront views, historic bungalows, and walkable streets.",
        commute: "5–10 min to main gate",
        tags: ["Waterfront", "Historic", "Walkable"],
      },
      {
        name: "Brandon",
        description: "A large suburban community east of Tampa with strong schools, major retail, and more affordable housing than South Tampa. Very popular with MacDill families.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "Family-friendly", "Affordable"],
      },
      {
        name: "Riverview",
        description: "A rapidly growing community south of Brandon with new master-planned communities, A-rated schools, and direct access to I-75 for the base commute.",
        commute: "25–30 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Hillsborough County Public Schools",
      context: "HCPS is Florida's third-largest district with highly variable quality by area. Schools in Brandon and Riverview are among the district's strongest. South Tampa magnet schools are also highly desirable.",
      highlights: [
        "Riverview High School and Newsome High School in the FishHawk area are A-rated Florida schools",
        "Hillsborough County offers choice programs including magnets and IB programs",
        "The district's military family liaison office actively supports PCS transitions",
      ],
    },
    activities: [
      {
        name: "Tampa Riverwalk",
        category: "Outdoors",
        description: "A 2.6-mile waterfront park along the Hillsborough River through downtown Tampa connecting museums, restaurants, and Amalie Arena.",
      },
      {
        name: "Busch Gardens Tampa",
        category: "Entertainment",
        description: "A world-class theme park and zoo hybrid just north of MacDill with major roller coasters, African wildlife, and a full waterpark.",
      },
      {
        name: "Clearwater Beach",
        category: "Outdoors",
        description: "Ranked one of America's best beaches, the Gulf-side Clearwater Beach is about 45 minutes from MacDill with beautiful white sand and calm water.",
      },
      {
        name: "Oxford Exchange",
        category: "Dining",
        description: "An acclaimed Tampa café and marketplace in a stunning historic building near the University of Tampa serving upscale breakfast and lunch.",
      },
      {
        name: "Ybor City",
        category: "Dining",
        description: "Tampa's historic Latin quarter with a lively nightlife scene, Cuban sandwiches at La Segunda Bakery, and the Columbia Restaurant since 1905.",
      },
      {
        name: "Hillsborough River State Park",
        category: "Outdoors",
        description: "A state park north of Tampa with kayaking, hiking, and some of Florida's rare rapids — a natural escape close to the city.",
      },
    ],
    housing: {
      priceRange: "$380,000–$650,000",
      rentRange: "$1,800–$3,000/mo",
      marketContext: "Tampa is one of Florida's most competitive housing markets post-pandemic. South Tampa near MacDill is extremely expensive. Brandon and Riverview offer relative value. No state income tax helps offset costs.",
      hotNeighborhoods: ["Brandon", "Riverview", "South Tampa"],
    },
  },

  "malmstrom-afb": {
    neighborhoods: [
      {
        name: "Great Falls (North Side)",
        description: "Neighborhoods north of the Missouri River closest to Malmstrom's main gate with affordable housing and a strong military family presence.",
        commute: "10–15 min to main gate",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Great Falls (West Bank)",
        description: "Established Great Falls neighborhoods along the Missouri River's west bank with scenic river access and a mix of ranch-style and two-story homes.",
        commute: "10–15 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
      {
        name: "Black Eagle",
        description: "An unincorporated community adjacent to Great Falls with older working-class homes and the most affordable prices near the base.",
        commute: "15–20 min to main gate",
        tags: ["Affordable", "Rural", "Military community"],
      },
    ],
    schools: {
      district: "Great Falls Public Schools",
      context: "GFPS serves the Malmstrom community. The district is modestly sized and offers standard Montana public school programming. C.M. Russell High School and Great Falls High School are the two main secondaries.",
      highlights: [
        "C.M. Russell High School offers strong fine arts programs reflecting the city's namesake artist",
        "Great Falls College MSU provides community college dual enrollment",
        "District has strong vocational-technical programs",
      ],
    },
    activities: [
      {
        name: "Giant Springs State Park",
        category: "Outdoors",
        description: "One of the largest freshwater springs in the US in Great Falls with a fish hatchery, Lewis & Clark interpretive exhibits, and riverside trails.",
      },
      {
        name: "C.M. Russell Museum",
        category: "Attraction",
        description: "A world-class Western art museum dedicated to Charles M. Russell, the 'Cowboy Artist,' with original oils, bronzes, and his log-cabin studio.",
      },
      {
        name: "River's Edge Trail",
        category: "Outdoors",
        description: "A 60+ mile trail system along the Missouri River in Great Falls offering cycling, running, and wildlife viewing through the city.",
      },
      {
        name: "Bert & Ernie's Restaurant",
        category: "Dining",
        description: "A Great Falls favorite for casual American dining with excellent burgers, sandwiches, and a family-friendly atmosphere since the 1970s.",
      },
      {
        name: "Glacier National Park",
        category: "Outdoors",
        description: "One of America's crown jewel national parks is about 2 hours north with the Going-to-the-Sun Road, alpine hiking, and stunning glaciated peaks.",
      },
      {
        name: "Sluice Boxes State Park",
        category: "Outdoors",
        description: "A rugged canyon park south of Great Falls with hiking, fishing on Belt Creek, and dramatic limestone formations.",
      },
    ],
    housing: {
      priceRange: "$220,000–$360,000",
      rentRange: "$1,000–$1,500/mo",
      marketContext: "Great Falls is one of Montana's most affordable cities. The housing market is stable and BAH covers costs well. Limited new construction but solid inventory of older homes. Very low competition compared to Bozeman or Missoula.",
      hotNeighborhoods: ["Great Falls North Side", "West Bank"],
    },
  },

  "maxwell-afb": {
    neighborhoods: [
      {
        name: "Montgomery (Cloverdale)",
        description: "A historic Montgomery neighborhood with craftsman bungalows, mature trees, and walkability to dining and cultural sites. Close to the base.",
        commute: "10–15 min to main gate",
        tags: ["Historic", "Walkable", "Suburban"],
      },
      {
        name: "Prattville",
        description: "A growing Autauga County city north of Montgomery with new construction, excellent schools, and a distinct community identity. Very popular with Maxwell families.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
      {
        name: "Millbrook",
        description: "An Elmore County bedroom community northeast of Montgomery with affordable newer homes and easy I-65 access to the base.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Montgomery County Public Schools",
      context: "MCPS is a large urban district with highly variable quality. Most Maxwell families with school-age children choose Autauga County Schools (Prattville) or Elmore County Schools (Millbrook), both significantly stronger.",
      highlights: [
        "Prattville High School is consistently one of Alabama's top large public schools",
        "Autauga County Schools has won multiple state academic and athletic championships",
        "Stanhope Elmore High School in Millbrook is a strong Elmore County option",
      ],
    },
    activities: [
      {
        name: "Civil Rights Memorial Center",
        category: "Attraction",
        description: "A moving memorial designed by Maya Lin honoring 40 martyrs of the Civil Rights Movement, operated by the Southern Poverty Law Center.",
      },
      {
        name: "Dexter Avenue King Memorial Baptist Church",
        category: "Attraction",
        description: "Dr. Martin Luther King Jr.'s first pulpit and a National Historic Landmark with guided tours telling the story of the Civil Rights Movement.",
      },
      {
        name: "Alabama Shakespeare Festival",
        category: "Entertainment",
        description: "One of the world's largest Shakespeare theaters, based permanently in Montgomery, producing year-round classical and contemporary productions.",
      },
      {
        name: "Central",
        category: "Dining",
        description: "Montgomery's premier modern Southern restaurant in a beautifully restored downtown building serving creative regional cuisine and craft cocktails.",
      },
      {
        name: "Cahaba River at Prattville",
        category: "Outdoors",
        description: "The Cahaba, America's longest free-flowing river, has fishing, kayaking, and the rare Cahaba lily bloom near Prattville each spring.",
      },
      {
        name: "Jasmine Hill Gardens",
        category: "Outdoors",
        description: "A 20-acre formal garden outside Montgomery with Greek statues, seasonal blooms, and a replica of the Temple of Hera.",
      },
    ],
    housing: {
      priceRange: "$180,000–$320,000",
      rentRange: "$950–$1,500/mo",
      marketContext: "Montgomery is one of the most affordable state capitals. Prattville commands a premium for its schools. The market is stable with good inventory. Very low cost of living compared to national averages.",
      hotNeighborhoods: ["Prattville", "Millbrook"],
    },
  },

  "mcconnell-afb": {
    neighborhoods: [
      {
        name: "Derby",
        description: "A fast-growing Sedgwick County suburb directly south of McConnell with very high military family concentration, new construction, and excellent schools.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Suburban", "New construction"],
      },
      {
        name: "Wichita (South)",
        description: "South Wichita neighborhoods near the base offer affordable established housing with easy access to both the flight line and city amenities.",
        commute: "10–15 min to main gate",
        tags: ["Affordable", "Suburban", "Military community"],
      },
      {
        name: "Andover",
        description: "An upscale east Wichita suburb with top-rated schools, new construction, and a higher price point — popular with officer families.",
        commute: "20–30 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
    ],
    schools: {
      district: "USD 260 Derby School District",
      context: "Derby USD 260 is one of Kansas's top school districts and the primary choice for McConnell families. Derby High School has been nationally recognized. Andover USD 385 is also excellent.",
      highlights: [
        "Derby High School ranks among Kansas's top large public schools and is home to a nationally competitive debate program",
        "Andover High School consistently leads Kansas in ACT scores",
        "Both districts offer strong fine arts and STEM programs",
      ],
    },
    activities: [
      {
        name: "Exploration Place",
        category: "Attraction",
        description: "Wichita's premier science and technology museum with aviation exhibits, IMAX, hands-on science galleries, and a wing dedicated to Kansas aviation history.",
      },
      {
        name: "Keeper of the Plains",
        category: "Attraction",
        description: "An iconic 44-ft steel sculpture at the confluence of the Little Arkansas and Arkansas rivers — the symbol of Wichita with a dramatic fire ritual at dusk.",
      },
      {
        name: "Old Town Wichita",
        category: "Dining",
        description: "Wichita's entertainment district in a renovated warehouse area with independent restaurants, craft breweries, live music, and unique retail.",
      },
      {
        name: "Sedgwick County Zoo",
        category: "Attraction",
        description: "One of the top zoos in the central US with over 3,000 animals and a well-regarded elephant and North American Prairielands habitat.",
      },
      {
        name: "Wichita Art Museum",
        category: "Attraction",
        description: "A world-class regional art museum with a significant collection of American art including works by Mary Cassatt, Edward Hopper, and Winslow Homer.",
      },
      {
        name: "El Dorado State Park",
        category: "Outdoors",
        description: "Kansas's most visited state park 30 miles east of Wichita with a large reservoir, camping, fishing, and 10 miles of off-road vehicle trails.",
      },
    ],
    housing: {
      priceRange: "$210,000–$360,000",
      rentRange: "$1,000–$1,600/mo",
      marketContext: "Wichita is one of the most affordable major metros in the southern Plains. Derby and Andover command premiums for schools. Strong BAH-to-cost ratio for most ranks. New construction is abundant.",
      hotNeighborhoods: ["Derby", "Andover"],
    },
  },

  "minot-afb": {
    neighborhoods: [
      {
        name: "Minot (South Hill)",
        description: "The most desirable Minot residential neighborhood on the south ridge above the city with newer homes, good schools, and the best views.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "Minot (Southeast)",
        description: "Established Minot neighborhoods closest to the hospital and mall with a mix of military and civilian families and moderate pricing.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Military community", "Affordable"],
      },
      {
        name: "Burlington",
        description: "A small community directly adjacent to the east gate with the lowest prices and shortest commute for enlisted families.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Affordable", "Rural"],
      },
    ],
    schools: {
      district: "Minot Public Schools",
      context: "MPS serves both Minot and the base area. The district is the dominant public option and has improved significantly with recent infrastructure investments. Minot State University supports dual enrollment.",
      highlights: [
        "Minot High School – Magic City Campus has strong academic and extracurricular programs",
        "District has benefited from oil boom tax revenues improving facilities",
        "Minot State University's proximity enables concurrent enrollment for motivated seniors",
      ],
    },
    activities: [
      {
        name: "North Dakota State Fair",
        category: "Entertainment",
        description: "The largest annual event in North Dakota, held in Minot each July with major concerts, carnival rides, livestock shows, and agricultural exhibits.",
      },
      {
        name: "Scandinavian Heritage Park",
        category: "Attraction",
        description: "A unique outdoor park celebrating Minot's Scandinavian immigrant heritage with a Norwegian stave church, Swedish Dala horse, and Danish windmill.",
      },
      {
        name: "Lake Sakakawea",
        category: "Outdoors",
        description: "One of the largest reservoirs in North America, 50 miles south of Minot, with exceptional walleye fishing, boating, and camping.",
      },
      {
        name: "JL Beers",
        category: "Dining",
        description: "A popular Minot restaurant and craft beer bar with 100+ craft beers on tap and a menu of upscale pub food and signature burgers.",
      },
      {
        name: "Souris River Trails",
        category: "Outdoors",
        description: "A paved trail system following the Souris River through Minot's parks, connecting neighborhoods and offering cycling and running routes year-round.",
      },
      {
        name: "Roosevelt Park Zoo",
        category: "Attraction",
        description: "A free zoo in Minot's Roosevelt Park with over 100 animals including primates, big cats, and a popular giraffe feeding platform.",
      },
    ],
    housing: {
      priceRange: "$200,000–$340,000",
      rentRange: "$1,000–$1,500/mo",
      marketContext: "Minot is affordable by most measures though the oil industry created a boom-bust cycle in housing. The market has stabilized. BAH covers costs well. Heating costs are a major budget consideration.",
      hotNeighborhoods: ["South Hill", "Southeast Minot"],
    },
  },

  "moody-afb": {
    neighborhoods: [
      {
        name: "Valdosta (Bemiss Road corridor)",
        description: "The primary residential corridor for Moody families along Bemiss Road heading north from base with suburban neighborhoods and strong retail access.",
        commute: "10–15 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Hahira",
        description: "A small city north of Valdosta with lower prices, a quiet small-town atmosphere, and newer subdivisions popular with families wanting space.",
        commute: "20–25 min to main gate",
        tags: ["Suburban", "Affordable", "Family-friendly"],
      },
      {
        name: "Lake Park",
        description: "A community near I-75 with very affordable housing, outlet shopping, and easy highway access to both the base and Florida destinations.",
        commute: "20–25 min to main gate",
        tags: ["Affordable", "Rural", "Family-friendly"],
      },
    ],
    schools: {
      district: "Lowndes County School System",
      context: "Lowndes County Schools serves the Moody AFB community. The district is one of south Georgia's stronger systems with Lowndes High School being a flagship. Valdosta City Schools operates separately in the city core.",
      highlights: [
        "Lowndes High School is consistently rated highly in Georgia and has a nationally competitive athletics program",
        "Hahira Middle/High School is well-regarded in the county system",
        "Valdosta State University's presence supports educational culture throughout the community",
      ],
    },
    activities: [
      {
        name: "Valdosta State University Campus",
        category: "Attraction",
        description: "VSU's beautiful Spanish Mediterranean campus with athletics events, performing arts, and cultural programming open to the community.",
      },
      {
        name: "Wild Adventures Theme Park",
        category: "Entertainment",
        description: "A full theme and water park in Valdosta with roller coasters, water slides, a zoo, and live entertainment — a major regional draw.",
      },
      {
        name: "Okefenokee National Wildlife Refuge",
        category: "Outdoors",
        description: "One of the oldest and largest intact freshwater ecosystems in the US with boat tours, canoe trails, and extraordinary wildlife just an hour east.",
      },
      {
        name: "Connie Mac's Seafood",
        category: "Dining",
        description: "A Valdosta institution for fried seafood baskets, po'boys, and South Georgia coastal flavors in a casual local setting.",
      },
      {
        name: "Reed Bingham State Park",
        category: "Outdoors",
        description: "A Georgia state park north of Moody on the Little River with swimming, boating, fishing, and a large vulture roost.",
      },
      {
        name: "Crescent Center Arts",
        category: "Entertainment",
        description: "The performing arts complex at VSU hosting professional touring shows, symphony performances, and student productions throughout the year.",
      },
    ],
    housing: {
      priceRange: "$170,000–$300,000",
      rentRange: "$950–$1,400/mo",
      marketContext: "Valdosta is one of south Georgia's most affordable markets. The market has appreciated somewhat but remains very accessible. BAH covers rent comfortably and purchasing is accessible for most ranks.",
      hotNeighborhoods: ["Bemiss Road corridor", "Hahira"],
    },
  },

  "mountain-home-afb": {
    neighborhoods: [
      {
        name: "Mountain Home",
        description: "The only substantial city near the base, Mountain Home offers all local amenities and the housing stock used by most base families. Limited but adequate.",
        commute: "10–15 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Glenns Ferry",
        description: "A small Snake River canyon town about 25 miles west with very affordable homes and a historic Oregon Trail crossing site.",
        commute: "30–35 min to main gate",
        tags: ["Rural", "Historic", "Affordable"],
      },
      {
        name: "Boise (Southeast)",
        description: "Families willing to accept a longer commute access Idaho's capital city with its booming economy, excellent amenities, and top-rated Boise schools.",
        commute: "45–55 min to main gate",
        tags: ["Urban", "Family-friendly", "Suburban"],
      },
    ],
    schools: {
      district: "Mountain Home School District",
      context: "Mountain Home School District serves the base community. The district is small with a heavy military family population, which creates a transient dynamic. Mountain Home High School is the main secondary option.",
      highlights: [
        "Mountain Home High School offers standard Idaho diploma requirements with some CTE options",
        "District has strong support systems for military families during PCS transitions",
        "Proximity to Boise gives motivated students access to College of Western Idaho dual enrollment",
      ],
    },
    activities: [
      {
        name: "Bruneau Dunes State Park",
        category: "Outdoors",
        description: "Home to the tallest single-structured sand dune in North America, with an observatory, hiking, swimming lake, and stargazing programs.",
      },
      {
        name: "Snake River Birds of Prey National Conservation Area",
        category: "Outdoors",
        description: "The densest concentration of nesting raptors in North America along the Snake River canyon — spectacular for birding and hiking.",
      },
      {
        name: "C.J. Strike Reservoir",
        category: "Outdoors",
        description: "A popular reservoir on the Snake River southwest of Mountain Home with fishing, camping, and boating used heavily by base families.",
      },
      {
        name: "Papa Kelsey's Pizza",
        category: "Dining",
        description: "Mountain Home's most popular pizza joint and gathering spot for military families, known for large pies and a welcoming community atmosphere.",
      },
      {
        name: "Boise River Greenbelt",
        category: "Outdoors",
        description: "A 25-mile paved trail along the Boise River connecting parks, the zoo, and downtown Boise — accessible on weekends for the longer drive.",
      },
      {
        name: "Sawtooth National Recreation Area",
        category: "Outdoors",
        description: "World-class backpacking, fly fishing, and mountain scenery in the central Idaho mountains, 3–4 hours from Mountain Home but worth the trip.",
      },
    ],
    housing: {
      priceRange: "$180,000–$300,000",
      rentRange: "$900–$1,400/mo",
      marketContext: "Mountain Home is one of Idaho's most affordable markets, largely because the isolated location limits demand outside the military community. Boise's boom has had little effect here.",
      hotNeighborhoods: ["Mountain Home"],
    },
  },

  "nellis-afb": {
    neighborhoods: [
      {
        name: "North Las Vegas",
        description: "The city directly adjacent to Nellis with the most military families, affordable housing, and easy gate access along Las Vegas Blvd North.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Henderson (Green Valley)",
        description: "One of Las Vegas's most family-friendly suburbs with excellent schools, master-planned neighborhoods, retail, and a longer but manageable commute.",
        commute: "30–40 min to main gate",
        tags: ["Suburban", "Family-friendly", "Gated community"],
      },
      {
        name: "Summerlin (Northwest Las Vegas)",
        description: "Las Vegas's premium master-planned community with top schools, golf courses, Red Rock access, and a higher price point popular with senior officers.",
        commute: "25–35 min to main gate",
        tags: ["Suburban", "Golf community", "Gated community"],
      },
    ],
    schools: {
      district: "Clark County School District",
      context: "CCSD is one of the nation's largest districts with highly variable quality. Families in Henderson and Summerlin access the district's best schools. Many families opt for charter or magnet alternatives.",
      highlights: [
        "SLAM (Sports Leadership Arts and Management) Academy and Democracy Prep are popular charters",
        "Coronado High School and Liberty High School in Henderson are top CCSD schools",
        "The Nevada Promise Scholarship provides free community college for Nevada graduates",
      ],
    },
    activities: [
      {
        name: "Red Rock Canyon National Conservation Area",
        category: "Outdoors",
        description: "Stunning red sandstone escarpment 20 miles west of the Strip with world-class climbing, hiking, and a scenic 13-mile drive — an extraordinary backyard.",
      },
      {
        name: "Las Vegas Strip",
        category: "Entertainment",
        description: "World-class entertainment, dining, shows, and nightlife just minutes away — unique to a military assignment and unmatched anywhere else.",
      },
      {
        name: "Springs Preserve",
        category: "Attraction",
        description: "The historic water source of Las Vegas with nature trails, native gardens, the Nevada State Museum, and sustainability exhibits.",
      },
      {
        name: "Beerhaus at Park MGM",
        category: "Dining",
        description: "A craft beer hall on the Las Vegas Strip with an extensive draft selection, outdoor games, and a casual atmosphere perfect for a military crew night out.",
      },
      {
        name: "Valley of Fire State Park",
        category: "Outdoors",
        description: "Nevada's oldest state park with fiery red Aztec sandstone formations, ancient petroglyphs, and desert wildlife just 55 miles northeast.",
      },
      {
        name: "Mob Museum",
        category: "Attraction",
        description: "The National Museum of Organized Crime and Law Enforcement in downtown Las Vegas — a fascinating and surprisingly serious history museum.",
      },
    ],
    housing: {
      priceRange: "$330,000–$540,000",
      rentRange: "$1,500–$2,300/mo",
      marketContext: "Las Vegas saw extraordinary appreciation post-pandemic but has seen significant correction. North Las Vegas is most affordable for Nellis families. Henderson and Summerlin command premiums. No state income tax.",
      hotNeighborhoods: ["Henderson", "Summerlin", "North Las Vegas"],
    },
  },

  "offutt-afb": {
    neighborhoods: [
      {
        name: "Bellevue",
        description: "Nebraska's third-largest city directly adjacent to Offutt with the highest military family concentration, affordable housing, and comprehensive amenities.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Papillion",
        description: "One of the Midwest's most family-friendly suburbs with outstanding schools, new construction, and strong community programs. Slightly longer commute.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "La Vista",
        description: "A growing community between Bellevue and Papillion with newer developments, solid schools, and good access to the metropolitan area.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "New construction", "Family-friendly"],
      },
    ],
    schools: {
      district: "Bellevue Public Schools",
      context: "BPS serves the core Offutt area with solid academics and strong military family support programs. Papillion-LaVista School District is consistently rated among Nebraska's best and is the top choice for families in those communities.",
      highlights: [
        "Papillion-LaVista High School is among Nebraska's top large schools academically",
        "Bellevue West and Bellevue East offer strong athletics and extracurricular programs",
        "District's military student program is one of Nebraska's strongest",
      ],
    },
    activities: [
      {
        name: "Strategic Air Command & Aerospace Museum",
        category: "Attraction",
        description: "A world-class aviation museum in Ashland with Cold War bombers, SR-71, and U-2 aircraft reflecting Offutt's central role in SAC history.",
      },
      {
        name: "Henry Doorly Zoo",
        category: "Attraction",
        description: "Consistently rated among the world's top zoos, Omaha's Henry Doorly Zoo features an indoor desert, rainforest, aquarium, and outstanding gorilla exhibits.",
      },
      {
        name: "Old Market Omaha",
        category: "Dining",
        description: "A historic cobblestone warehouse district with acclaimed restaurants, breweries, boutiques, and galleries — Omaha's dining and entertainment epicenter.",
      },
      {
        name: "Fontenelle Forest",
        category: "Outdoors",
        description: "One of the Midwest's premier nature preserves along the Missouri River bluffs with 26 miles of trails through old-growth forest.",
      },
      {
        name: "Ralston Arena",
        category: "Entertainment",
        description: "Omaha metro's mid-sized entertainment arena hosting concerts, USHL Lancers hockey, and major events in the heart of Ralston.",
      },
      {
        name: "Heartland of America Park",
        category: "Outdoors",
        description: "A downtown Omaha park with a scenic lake, fountain, walking paths, and beautiful views of the Missouri River bluffs.",
      },
    ],
    housing: {
      priceRange: "$240,000–$400,000",
      rentRange: "$1,100–$1,800/mo",
      marketContext: "Omaha remains one of the most affordable major metros in the US. Bellevue offers the best BAH ratio. Papillion commands a premium for its schools but remains accessible. Strong overall value.",
      hotNeighborhoods: ["Papillion", "Bellevue", "La Vista"],
    },
  },

  "robins-afb": {
    neighborhoods: [
      {
        name: "Warner Robins (North)",
        description: "The primary residential corridor north of Robins AFB with heavy military family presence, strong retail, and the most direct base access.",
        commute: "5–10 min to main gate",
        tags: ["Military community", "Suburban", "Affordable"],
      },
      {
        name: "Kathleen",
        description: "A popular community in Houston County with newer subdivisions, top-rated Northside High School access, and a strong family atmosphere.",
        commute: "15–20 min to main gate",
        tags: ["Suburban", "Family-friendly", "New construction"],
      },
      {
        name: "Perry",
        description: "A small city south of Robins with very affordable housing, small-town charm, and the annual Georgia National Fair — a longer commute but great value.",
        commute: "20–25 min to main gate",
        tags: ["Rural", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Houston County School District",
      context: "Houston County Schools is one of Georgia's top-performing large districts and the primary choice for Robins families. It serves a community with a high percentage of college-educated military and defense industry families.",
      highlights: [
        "Northside High School is among Georgia's top large public schools with strong academics and athletics",
        "Houston County's graduation rate and test scores consistently lead the state",
        "Warner Robins High School and Veteran's High School offer competitive academic environments",
      ],
    },
    activities: [
      {
        name: "Museum of Aviation",
        category: "Attraction",
        description: "One of the US Air Force's four official museums with 90+ aircraft including rare aircraft like the SR-71, B-1B, and U-2, free admission.",
      },
      {
        name: "Georgia National Fairgrounds",
        category: "Entertainment",
        description: "The Perry fairgrounds host the annual Georgia National Fair each October plus major livestock events, concerts, and motorsports throughout the year.",
      },
      {
        name: "Rum Creek WMA",
        category: "Outdoors",
        description: "A state wildlife management area north of Macon with hunting, fishing, hiking, and paddling on the Ocmulgee River.",
      },
      {
        name: "Nu-Way Weiners",
        category: "Dining",
        description: "A central Georgia institution since 1916 serving the legendary crimson-colored Nu-Way hot dog in Macon — a must-try for any new arrival to the area.",
      },
      {
        name: "Ocmulgee Mounds National Historical Park",
        category: "Attraction",
        description: "A significant Native American site in Macon with massive earthen mounds and a unique earthlodge dating back 1,000 years.",
      },
      {
        name: "Lake Tobesofkee",
        category: "Outdoors",
        description: "A popular recreational lake west of Macon with boating, swimming, fishing, and camping facilities — a Robins family staple for summer.",
      },
    ],
    housing: {
      priceRange: "$180,000–$320,000",
      rentRange: "$950–$1,500/mo",
      marketContext: "Warner Robins is one of middle Georgia's most affordable markets. Strong defense-sector employment stabilizes the market. Kathleen area commands a premium for school access. Overall excellent BAH ratio.",
      hotNeighborhoods: ["Kathleen", "Warner Robins North"],
    },
  },
  "scott-afb": {
    neighborhoods: [
      {
        name: "O'Fallon",
        description: "A fast-growing St. Louis suburb consistently ranked among the best places to live in Illinois. Excellent schools, abundant retail, and a family-oriented community with parks and rec programs.",
        commute: "10–15 min to base",
        tags: ["Family-friendly", "Suburban", "New construction"],
      },
      {
        name: "Shiloh",
        description: "A quiet residential community directly adjacent to Scott AFB with tree-lined streets and convenient base access. Very popular with military families for its proximity and affordability.",
        commute: "5–10 min to base",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Belleville",
        description: "The St. Clair County seat with a charming historic downtown, diverse dining, and a mix of older homes and new development. Offers a small-city feel with easy access to St. Louis.",
        commute: "10–15 min to base",
        tags: ["Historic", "Walkable", "Affordable"],
      },
    ],
    schools: {
      district: "O'Fallon Township High School District 203 / Belleville District 118",
      context: "The metro-east area offers several strong school districts. O'Fallon schools are particularly well-regarded and draw many military families. Belleville also has solid public and parochial school options.",
      highlights: [
        "O'Fallon Township High School is one of the largest and highest-performing in the region",
        "Shiloh Village schools have small class sizes and strong military family support",
        "Multiple parochial and private school options throughout the metro-east",
      ],
    },
    activities: [
      {
        name: "Gateway Arch National Park",
        category: "Attraction",
        description: "Just 20 minutes across the river in downtown St. Louis, the iconic 630-foot Gateway Arch offers tram rides to the top and a museum of westward expansion.",
      },
      {
        name: "Eckert's Orchards",
        category: "Outdoors",
        description: "A beloved family farm in Belleville offering pick-your-own fruits, a country store, and seasonal festivals — a metro-east tradition since 1910.",
      },
      {
        name: "St. Louis Zoo",
        category: "Attraction",
        description: "One of the nation's top zoos with free admission, located in Forest Park. Features over 16,000 animals and world-class exhibits.",
      },
      {
        name: "Global Brew Tap House",
        category: "Dining",
        description: "A popular O'Fallon craft beer bar with rotating taps and hearty pub fare, a favorite gathering spot for Scott AFB personnel.",
      },
      {
        name: "Busch Stadium",
        category: "Entertainment",
        description: "Home of the St. Louis Cardinals, just across the river. Military appreciation nights and affordable bleacher seats make it a regular outing for base families.",
      },
    ],
    housing: {
      priceRange: "$180,000–$350,000",
      rentRange: "$1,000–$1,600/mo",
      marketContext: "The metro-east Illinois market is significantly more affordable than the Missouri side of St. Louis. O'Fallon commands a premium for schools while Belleville and Shiloh offer strong value. BAH stretches well here.",
      hotNeighborhoods: ["O'Fallon", "Shiloh", "Swansea"],
    },
  },
  "seymour-johnson-afb": {
    neighborhoods: [
      {
        name: "Goldsboro (West Side)",
        description: "The western neighborhoods of Goldsboro closest to base offer affordable single-family homes, convenient shopping, and quick gate access. A practical choice for E-5 and below.",
        commute: "5–10 min to base",
        tags: ["Affordable", "Military community", "Suburban"],
      },
      {
        name: "Pikeville / Mar-Mac",
        description: "Unincorporated communities north of Goldsboro with larger lots, newer construction, and a rural feel. Popular with families wanting more space and privacy.",
        commute: "15–20 min to base",
        tags: ["Rural", "Family-friendly", "New construction"],
      },
      {
        name: "Mount Olive / Dudley",
        description: "Small towns south and east of base with very affordable housing, farmland, and a tight-knit community atmosphere. A budget-friendly option for junior enlisted.",
        commute: "15–25 min to base",
        tags: ["Rural", "Affordable"],
      },
    ],
    schools: {
      district: "Wayne County Public Schools",
      context: "Wayne County schools serve the Goldsboro area and have seen investments in STEM programs and facility upgrades. Several schools have active military family liaison programs due to the base presence.",
      highlights: [
        "Eastern Wayne High School and Goldsboro High School offer AP and CTE programs",
        "Strong JROTC programs with Air Force connections",
        "Wayne School of Engineering (magnet) offers STEM-focused curriculum",
      ],
    },
    activities: [
      {
        name: "Cliffs of the Neuse State Park",
        category: "Outdoors",
        description: "A scenic state park along the Neuse River with swimming, hiking, and striking 90-foot cliffs — one of the geological gems of eastern North Carolina.",
      },
      {
        name: "Wilber's Barbecue",
        category: "Dining",
        description: "A legendary eastern NC whole-hog barbecue joint in Goldsboro since 1962. Vinegar-based sauce and pit-cooked pork make it a must-stop for newcomers.",
      },
      {
        name: "Seymour Johnson Golf Course",
        category: "Outdoors",
        description: "An on-base 18-hole course open to military and dependents, well-maintained and very affordable — one of the best MWR golf values in the Air Force.",
      },
      {
        name: "Downtown Goldsboro Arts District",
        category: "Entertainment",
        description: "A revitalized downtown with galleries, murals, craft breweries, and the historic Paramount Theatre hosting live music and community events.",
      },
      {
        name: "Grady's Barbecue",
        category: "Dining",
        description: "Another acclaimed whole-hog pit in nearby Dudley, often ranked among the top BBQ spots in North Carolina. Cash only and worth the trip.",
      },
      {
        name: "Cherry Hospital Recreation Trail",
        category: "Outdoors",
        description: "A paved multi-use trail near Goldsboro popular with runners, cyclists, and families. Connects to local greenway extensions.",
      },
    ],
    housing: {
      priceRange: "$150,000–$280,000",
      rentRange: "$850–$1,400/mo",
      marketContext: "Goldsboro is one of the most affordable duty stations in the Air Force. Housing costs are well below the national average and BAH covers most options comfortably. Newer construction is available in the Mar-Mac area.",
      hotNeighborhoods: ["West Goldsboro", "Mar-Mac", "Pikeville"],
    },
  },
  "shaw-afb": {
    neighborhoods: [
      {
        name: "Sumter (West Side)",
        description: "The western neighborhoods of Sumter nearest to Shaw offer convenient access, established neighborhoods, and good value. Many military families settle here for the short commute.",
        commute: "5–10 min to base",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Dalzell",
        description: "A small unincorporated community just outside Shaw's main gate with affordable homes and a quiet, rural setting. Extremely convenient for daily commuters.",
        commute: "5 min to base",
        tags: ["Rural", "Military community", "Affordable"],
      },
      {
        name: "Columbia (Northeast)",
        description: "The northeast suburbs of Columbia such as Lugoff, Elgin, and Northeast Richland offer better schools and more amenities, though the commute is longer. Popular with families prioritizing education.",
        commute: "35–45 min to base",
        tags: ["Family-friendly", "Suburban", "New construction"],
      },
    ],
    schools: {
      district: "Sumter School District",
      context: "Sumter School District is the primary district serving the base area. While performance is mixed, the district has invested in choice and magnet programs. Some families commute from the Columbia area for Richland or Kershaw County schools.",
      highlights: [
        "Sumter High School and Crestwood High School offer AP, IB, and career-tech programs",
        "Alice Drive schools are among the stronger elementary/middle options in Sumter",
        "Families in Lugoff/Elgin area access well-rated Kershaw County schools",
      ],
    },
    activities: [
      {
        name: "Swan Lake Iris Gardens",
        category: "Outdoors",
        description: "A stunning 150-acre public garden in Sumter featuring eight species of swans, Japanese irises, and cypress-lined walking paths — one of South Carolina's hidden gems.",
      },
      {
        name: "Sumter Opera House",
        category: "Entertainment",
        description: "A beautifully restored 1893 performing arts venue hosting concerts, plays, and community events in downtown Sumter.",
      },
      {
        name: "Poinsett State Park",
        category: "Outdoors",
        description: "A scenic state park along the Wateree River with hiking, fishing, and camping. Named for Joel Poinsett, it sits where the mountains meet the coast geologically.",
      },
      {
        name: "La Piazza Italian Restaurant",
        category: "Dining",
        description: "A locally-owned Sumter favorite serving authentic Italian dishes in a cozy setting. A go-to date night spot for Shaw families.",
      },
      {
        name: "Manchester State Forest",
        category: "Outdoors",
        description: "Over 25,000 acres of pine forest south of Sumter with hunting, horseback riding, mountain biking, and the popular Killer Bunny mountain bike trail system.",
      },
      {
        name: "The Diner",
        category: "Dining",
        description: "A classic American diner on Broad Street in Sumter known for hearty breakfasts and comfort food. A popular gathering spot since the 1950s.",
      },
    ],
    housing: {
      priceRange: "$140,000–$260,000",
      rentRange: "$800–$1,300/mo",
      marketContext: "Sumter offers very affordable housing with BAH covering most options and leaving room to spare. The market is stable due to Shaw's large military population. Columbia suburbs cost more but offer better schools and amenities.",
      hotNeighborhoods: ["Dalzell", "West Sumter", "Lugoff"],
    },
  },
  "sheppard-afb": {
    neighborhoods: [
      {
        name: "Wichita Falls (Southwest)",
        description: "The southwest side of Wichita Falls near Midwestern State University has established neighborhoods, good restaurants, and a college-town vibe. Popular with permanent party and instructors.",
        commute: "10–15 min to base",
        tags: ["Suburban", "Walkable", "College town"],
      },
      {
        name: "Burkburnett",
        description: "A small city just north of Sheppard AFB with affordable housing, a small-town feel, and very quick base access. A top choice for military families on a budget.",
        commute: "10–15 min to base",
        tags: ["Affordable", "Family-friendly", "Military community"],
      },
      {
        name: "Wichita Falls (Central/Kell District)",
        description: "The Kell Boulevard corridor offers newer retail, restaurants, and suburban neighborhoods with easy access to both the base and city amenities.",
        commute: "15–20 min to base",
        tags: ["Suburban", "Shopping", "Family-friendly"],
      },
    ],
    schools: {
      district: "Wichita Falls Independent School District",
      context: "WFISD is the primary district serving the area, with Burkburnett ISD also serving families north of base. Both districts have strong ties to the military community and offer open enrollment for military-connected students.",
      highlights: [
        "Rider High School and Wichita Falls High School both offer strong athletics and AP programs",
        "Burkburnett ISD is well-regarded for smaller class sizes and community feel",
        "WFISD's Career Education Center offers hands-on technical training for high schoolers",
      ],
    },
    activities: [
      {
        name: "Wichita Falls Brewing Company",
        category: "Dining",
        description: "A popular downtown craft brewery with locally-brewed beers and a lively taproom. A favorite weekend gathering spot for Sheppard personnel.",
      },
      {
        name: "Lucy Park",
        category: "Outdoors",
        description: "A scenic riverside park along the Wichita River with hiking trails, swimming pool, playgrounds, and picnic areas. The park's waterfall is a local landmark.",
      },
      {
        name: "The Wichita Theatre",
        category: "Entertainment",
        description: "A restored 1908 vaudeville theatre hosting Broadway-style productions, concerts, and community events in historic downtown.",
      },
      {
        name: "Lake Arrowhead State Park",
        category: "Outdoors",
        description: "A state park southeast of Wichita Falls with camping, swimming, fishing, mountain biking, and an 18-hole disc golf course on the shores of Lake Arrowhead.",
      },
      {
        name: "The Gypsy Kit",
        category: "Dining",
        description: "A trendy downtown restaurant and bar serving creative American cuisine with global influences. Popular for date nights and special occasions.",
      },
    ],
    housing: {
      priceRange: "$130,000–$250,000",
      rentRange: "$800–$1,300/mo",
      marketContext: "Wichita Falls is one of the most affordable housing markets in Texas. BAH covers most options comfortably. The large student population at Sheppard creates steady rental demand but prices remain very reasonable.",
      hotNeighborhoods: ["Southwest Wichita Falls", "Burkburnett", "Kell West"],
    },
  },
  "tinker-afb": {
    neighborhoods: [
      {
        name: "Midwest City",
        description: "The city directly adjacent to Tinker AFB with a wide range of housing from affordable to mid-range. Rose State College and a strong retail corridor make it the default choice for many Tinker families.",
        commute: "5–10 min to base",
        tags: ["Military community", "Affordable", "Suburban"],
      },
      {
        name: "Moore",
        description: "A popular suburb south of Oklahoma City with excellent schools (Moore Public Schools), new construction, and a family-oriented community. Warren Theatre and major retail nearby.",
        commute: "20–25 min to base",
        tags: ["Family-friendly", "Suburban", "New construction"],
      },
      {
        name: "Norman",
        description: "Home to the University of Oklahoma, Norman offers a vibrant college-town atmosphere, excellent dining, and strong schools. A longer commute but worth it for quality of life.",
        commute: "25–35 min to base",
        tags: ["College town", "Walkable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Mid-Del Schools / Moore Public Schools",
      context: "Mid-Del Schools serve Midwest City and Del City directly near base. Moore Public Schools, further south, are generally higher-rated and draw many military families willing to commute. Norman Public Schools near OU are also excellent.",
      highlights: [
        "Moore Public Schools consistently rank among the top districts in the OKC metro",
        "Mid-Del Schools have strong military family support programs and JROTC",
        "Norman Public Schools offer International Baccalaureate and advanced STEM programs",
      ],
    },
    activities: [
      {
        name: "Oklahoma City National Memorial & Museum",
        category: "Attraction",
        description: "A powerful memorial honoring the 168 victims of the 1995 bombing. The reflecting pool, empty chairs, and Survivor Tree are profoundly moving.",
      },
      {
        name: "Bricktown District",
        category: "Entertainment",
        description: "OKC's revitalized entertainment district with restaurants, bars, a riverwalk, minor-league baseball, and a comedy club. The heart of OKC nightlife.",
      },
      {
        name: "Lake Thunderbird State Park",
        category: "Outdoors",
        description: "A large reservoir between Norman and Midwest City with boating, fishing, swimming, hiking, and mountain biking trails. A popular weekend escape.",
      },
      {
        name: "Cattlemen's Steakhouse",
        category: "Dining",
        description: "An Oklahoma City institution in Stockyards City since 1910, serving legendary steaks in a historic setting. A must-visit for any carnivore at Tinker.",
      },
      {
        name: "OU Football at Gaylord Family Stadium",
        category: "Entertainment",
        description: "Watching the Sooners play on a fall Saturday in Norman is a quintessential Oklahoma experience. Military appreciation games offer discounted tickets.",
      },
      {
        name: "Martin Park Nature Center",
        category: "Outdoors",
        description: "A 140-acre urban nature preserve in northwest OKC with trails through prairie, woodland, and wetland habitats. Free admission and great for families.",
      },
    ],
    housing: {
      priceRange: "$170,000–$330,000",
      rentRange: "$900–$1,500/mo",
      marketContext: "The OKC metro is one of the most affordable major metro areas in the country. Midwest City offers the most convenient and budget-friendly options. Moore and Norman command premiums for schools and amenities but remain very affordable by national standards.",
      hotNeighborhoods: ["Moore", "Midwest City", "Del City"],
    },
  },
  "travis-afb": {
    neighborhoods: [
      {
        name: "Fairfield",
        description: "The city immediately outside Travis AFB with diverse neighborhoods, good shopping, and quick base access. Offers a mix of affordable and mid-range housing options.",
        commute: "5–10 min to base",
        tags: ["Military community", "Suburban", "Diverse"],
      },
      {
        name: "Vacaville",
        description: "A growing city north of Fairfield with excellent schools, premium outlet shopping, charming downtown, and a slightly more upscale feel. Very popular with Travis families.",
        commute: "15–20 min to base",
        tags: ["Family-friendly", "Suburban", "Shopping"],
      },
      {
        name: "Dixon",
        description: "A small agricultural town west of Travis with a quiet, rural atmosphere, affordable homes, and a tight-knit community. Great for families wanting space and a slower pace.",
        commute: "15–20 min to base",
        tags: ["Rural", "Affordable", "Family-friendly"],
      },
    ],
    schools: {
      district: "Fairfield-Suisun Unified School District / Vacaville Unified",
      context: "Vacaville Unified is generally the higher-performing district and draws many military families. Fairfield-Suisun Unified serves the areas closest to base and has active military liaison programs. Both districts offer strong support for military-connected students.",
      highlights: [
        "Vacaville High School and Will C. Wood High School are well-regarded in Solano County",
        "Fairfield-Suisun schools have robust programs for military-connected students",
        "Travis Unified School District, on base, serves on-base housing families with small class sizes",
      ],
    },
    activities: [
      {
        name: "Jelly Belly Factory Tour",
        category: "Attraction",
        description: "The Jelly Belly headquarters in Fairfield offers free factory tours, a candy store, and seasonal events. A fun family outing and a unique local landmark.",
      },
      {
        name: "Napa Valley Wine Country",
        category: "Outdoors",
        description: "World-class wineries are just 30 minutes north in Napa and Sonoma. Tasting tours, scenic drives, and gourmet dining make this a top perk of Travis duty.",
      },
      {
        name: "San Francisco Day Trips",
        category: "Attraction",
        description: "The Golden Gate Bridge, Fisherman's Wharf, Alcatraz, and Chinatown are all about 60 minutes southwest. One of the best weekend day-trip cities in the world.",
      },
      {
        name: "Bud's Pub & Grill",
        category: "Dining",
        description: "A Fairfield staple with hearty American fare, craft beers, and a welcoming atmosphere. Known for burgers and a popular spot with Travis personnel.",
      },
      {
        name: "Suisun Valley Farms & Orchards",
        category: "Outdoors",
        description: "Local farms in the Suisun Valley offer u-pick produce, farm stands, and seasonal festivals. A taste of California agriculture minutes from base.",
      },
      {
        name: "Sacramento River Delta",
        category: "Outdoors",
        description: "The nearby delta offers world-class bass fishing, kayaking, boating, and scenic waterway exploration. A hidden gem for outdoor enthusiasts.",
      },
    ],
    housing: {
      priceRange: "$420,000–$680,000",
      rentRange: "$1,800–$2,800/mo",
      marketContext: "Solano County is significantly more affordable than San Francisco or Napa but still reflects California pricing. BAH is set high for the area but housing costs remain tight. Fairfield and Suisun City offer the best value; Vacaville is pricier but has better schools.",
      hotNeighborhoods: ["Vacaville", "Fairfield", "Suisun City"],
    },
  },
  "tyndall-afb": {
    neighborhoods: [
      {
        name: "Panama City Beach",
        description: "The famous beach town west of Tyndall with sugar-white sand, resort amenities, restaurants, and a lively social scene. Popular with single airmen and young couples.",
        commute: "25–35 min to base",
        tags: ["Beach", "Nightlife", "Tourist area"],
      },
      {
        name: "Lynn Haven",
        description: "A residential community north of Panama City with affordable homes, good schools, and a quiet family atmosphere. Recovering well post-Hurricane Michael with new construction.",
        commute: "15–20 min to base",
        tags: ["Family-friendly", "Suburban", "Affordable"],
      },
      {
        name: "Callaway / Parker",
        description: "Communities east of Panama City closest to Tyndall with the shortest commutes and most affordable housing options. Significant rebuilding since Hurricane Michael has brought newer homes.",
        commute: "5–15 min to base",
        tags: ["Affordable", "Military community", "New construction"],
      },
    ],
    schools: {
      district: "Bay County School District",
      context: "Bay County schools serve the entire Panama City area. The district has invested heavily in rebuilding and upgrading facilities since Hurricane Michael in 2018. Several schools have been rebuilt with modern facilities.",
      highlights: [
        "Mosley High School in Lynn Haven is a top-performing school in the district",
        "Bay County offers a virtual school option and multiple choice/magnet programs",
        "A.D. Harris Learning Village and other rebuilt schools feature state-of-the-art facilities",
      ],
    },
    activities: [
      {
        name: "St. Andrews State Park",
        category: "Outdoors",
        description: "A stunning state park on a peninsula with pristine beaches, snorkeling, fishing, and a ferry to Shell Island. Consistently rated one of America's best beaches.",
      },
      {
        name: "Shell Island",
        category: "Outdoors",
        description: "An undeveloped 7-mile barrier island accessible by ferry or boat with crystal-clear water, wild dolphins, and untouched beaches. A Tyndall family favorite.",
      },
      {
        name: "Pier Park",
        category: "Shopping",
        description: "A massive open-air shopping and entertainment complex on Panama City Beach with retail, restaurants, an IMAX theater, and a SkyWheel Ferris wheel.",
      },
      {
        name: "Finns Island Style Grub",
        category: "Dining",
        description: "A popular casual beachside restaurant serving fresh seafood, tacos, and tropical cocktails with a laid-back Panhandle vibe.",
      },
      {
        name: "Scuba and Diving Charters",
        category: "Outdoors",
        description: "Panama City is known as the 'Wreck Diving Capital of the South' with numerous artificial reefs and shipwrecks. Multiple dive operators cater to all experience levels.",
      },
    ],
    housing: {
      priceRange: "$220,000–$400,000",
      rentRange: "$1,200–$1,900/mo",
      marketContext: "The Panama City market has rebounded strongly since Hurricane Michael. New construction is plentiful but prices have risen. Beach properties command a premium. Lynn Haven and Callaway offer the best value for military families.",
      hotNeighborhoods: ["Lynn Haven", "Callaway", "Panama City Beach"],
    },
  },
  "vance-afb": {
    neighborhoods: [
      {
        name: "Enid (West Side)",
        description: "The western neighborhoods of Enid offer newer subdivisions, proximity to Oakwood Mall, and the city's primary retail and dining corridor. A popular choice for student pilots and families.",
        commute: "10–15 min to base",
        tags: ["Suburban", "Family-friendly", "Shopping"],
      },
      {
        name: "Enid (Downtown/Historic)",
        description: "Enid's historic downtown area has charming older homes, a revitalizing town square, and a walkable feel. Affordable and full of character.",
        commute: "10–15 min to base",
        tags: ["Historic", "Walkable", "Affordable"],
      },
      {
        name: "Enid (South Side / Meadowlake)",
        description: "The south side near Meadowlake Park offers established homes, quiet tree-lined streets, and proximity to one of the city's best parks. A solid family neighborhood.",
        commute: "10–15 min to base",
        tags: ["Family-friendly", "Parks", "Affordable"],
      },
    ],
    schools: {
      district: "Enid Public Schools",
      context: "Enid Public Schools is the primary district serving the area. It is a mid-sized Oklahoma district with solid academic programs and strong athletics. The community is very welcoming to military families in the student pilot pipeline.",
      highlights: [
        "Enid High School offers AP courses, strong athletics, and career-tech programs",
        "Longfellow Middle School and surrounding elementaries serve most military neighborhoods",
        "Oklahoma Bible Academy and St. Joseph Catholic School offer private alternatives",
      ],
    },
    activities: [
      {
        name: "Leonardo's Discovery Warehouse & Adventure Quest",
        category: "Attraction",
        description: "A hands-on children's museum and ropes course in downtown Enid. A surprisingly impressive attraction for a small city and a family favorite.",
      },
      {
        name: "Meadowlake Park",
        category: "Outdoors",
        description: "Enid's premier park with a golf course, fishing lake, swimming pool, disc golf, playgrounds, and miles of walking trails. The community's outdoor hub.",
      },
      {
        name: "Enid Brewing Company",
        category: "Dining",
        description: "A downtown craft brewery with rotating taps and a relaxed atmosphere. A social hub for Vance student pilots and permanent party alike.",
      },
      {
        name: "Great Salt Plains State Park",
        category: "Outdoors",
        description: "A unique state park about 45 minutes north where visitors can dig for hourglass-shaped selenite crystals on the salt flats. A one-of-a-kind Oklahoma experience.",
      },
      {
        name: "Jumbo's",
        category: "Dining",
        description: "A legendary Enid diner known for giant portions and homestyle cooking. The chicken-fried steak is a rite of passage for every Vance student pilot.",
      },
    ],
    housing: {
      priceRange: "$110,000–$220,000",
      rentRange: "$700–$1,100/mo",
      marketContext: "Enid is among the most affordable duty stations in the Air Force. BAH far exceeds typical housing costs, allowing significant savings. The market is stable with steady demand from Vance personnel.",
      hotNeighborhoods: ["West Enid", "Meadowlake Area", "South Enid"],
    },
  },
  "whiteman-afb": {
    neighborhoods: [
      {
        name: "Knob Noster",
        description: "The small town immediately outside Whiteman's gate with affordable housing, a quaint downtown, and a tight-knit military-civilian community. Most convenient option for base access.",
        commute: "5 min to base",
        tags: ["Military community", "Affordable", "Small town"],
      },
      {
        name: "Warrensburg",
        description: "Home to the University of Central Missouri, Warrensburg offers more dining, shopping, and rental options than Knob Noster. A popular choice for families wanting more amenities.",
        commute: "15–20 min to base",
        tags: ["College town", "Family-friendly", "Suburban"],
      },
      {
        name: "Lee's Summit",
        description: "A thriving Kansas City suburb with excellent schools, upscale shopping, and a vibrant downtown. A longer commute but offers big-city amenities and strong property values.",
        commute: "45–55 min to base",
        tags: ["Suburban", "Family-friendly", "Upscale"],
      },
    ],
    schools: {
      district: "Knob Noster R-VIII / Warrensburg R-VI",
      context: "Knob Noster R-VIII is a small district with strong military family integration and personalized attention. Warrensburg R-VI is larger with more program offerings. Families willing to commute from Lee's Summit access top-rated Lee's Summit R-VII schools.",
      highlights: [
        "Knob Noster schools have very small class sizes and strong military family support",
        "Warrensburg High School offers diverse AP and extracurricular programs",
        "Lee's Summit R-VII is consistently rated among Missouri's best districts",
      ],
    },
    activities: [
      {
        name: "Knob Noster State Park",
        category: "Outdoors",
        description: "A scenic state park adjacent to base with hiking, camping, fishing, and one of Missouri's few remaining examples of eastern woodlands prairie. The base's backyard retreat.",
      },
      {
        name: "Kansas City BBQ Trail",
        category: "Dining",
        description: "World-famous barbecue is about an hour west. Joe's Kansas City, Q39, and Gates BBQ are essential stops for any Whiteman newcomer.",
      },
      {
        name: "National World War I Museum",
        category: "Attraction",
        description: "Located in Kansas City at Liberty Memorial, this is the nation's leading WWI museum with immersive exhibits and a 217-foot tower with panoramic city views.",
      },
      {
        name: "Bushwhacker Lake Conservation Area",
        category: "Outdoors",
        description: "A popular fishing and hunting spot near Knob Noster with bass and catfish in the 155-acre lake, plus hiking trails through Ozark-edge woodlands.",
      },
      {
        name: "Arrowhead Stadium / Kauffman Stadium",
        category: "Entertainment",
        description: "Home of the Kansas City Chiefs and Royals, about an hour from base. Military appreciation events and group ticket deals make game days accessible.",
      },
      {
        name: "Fitter's 5th Street Pub",
        category: "Dining",
        description: "A beloved Warrensburg bar and grill popular with Whiteman personnel. Good burgers, cold beer, and a laid-back college-town atmosphere.",
      },
    ],
    housing: {
      priceRange: "$140,000–$260,000",
      rentRange: "$750–$1,200/mo",
      marketContext: "Knob Noster and Warrensburg are very affordable, with BAH covering most options easily. The market is heavily influenced by Whiteman personnel. Lee's Summit is considerably pricier but offers superior schools and Kansas City access.",
      hotNeighborhoods: ["Knob Noster", "Warrensburg", "Lee's Summit"],
    },
  },
  "wright-patterson-afb": {
    neighborhoods: [
      {
        name: "Beavercreek",
        description: "A highly desirable suburb directly adjacent to Wright-Patterson with top-rated schools, abundant retail, and a family-friendly atmosphere. The default choice for many WPAFB families.",
        commute: "5–15 min to base",
        tags: ["Family-friendly", "Suburban", "Top schools"],
      },
      {
        name: "Fairborn",
        description: "The city immediately outside the base's main gates, home to Wright State University. Offers affordable housing and quick base access, with a college-town feel.",
        commute: "5–10 min to base",
        tags: ["Affordable", "College town", "Military community"],
      },
      {
        name: "Centerville",
        description: "An upscale suburb south of Dayton with excellent Centerville Schools, a charming downtown, and established neighborhoods. Popular with senior officers and GS civilians.",
        commute: "15–25 min to base",
        tags: ["Suburban", "Top schools", "Upscale"],
      },
    ],
    schools: {
      district: "Beavercreek City Schools / Centerville City Schools",
      context: "The Dayton suburbs offer some of Ohio's best school districts. Beavercreek and Centerville are both highly rated and draw the majority of WPAFB families. Fairborn City Schools serve the area closest to base and have strong military family programs.",
      highlights: [
        "Beavercreek High School is one of Ohio's top-performing public high schools",
        "Centerville Schools are consistently rated Excellent by the Ohio Department of Education",
        "Multiple STEM magnet programs available through the Montgomery County ESC",
      ],
    },
    activities: [
      {
        name: "National Museum of the United States Air Force",
        category: "Attraction",
        description: "The world's largest and oldest military aviation museum, located on Wright-Patterson. Over 350 aircraft and missiles with free admission — a must-see for anyone at WPAFB.",
      },
      {
        name: "Dayton Aviation Heritage National Historical Park",
        category: "Attraction",
        description: "Explore the Wright Brothers' bicycle shop, Huffman Prairie Flying Field, and other sites where powered flight was born. Dayton's greatest historical claim.",
      },
      {
        name: "Yellow Springs",
        category: "Outdoors",
        description: "A charming artsy village near base with the stunning Glen Helen Nature Preserve, John Bryan State Park, and unique shops and restaurants. A favorite weekend destination.",
      },
      {
        name: "2nd Street Market",
        category: "Shopping",
        description: "A year-round indoor market in downtown Dayton with local produce, baked goods, artisan crafts, and prepared foods. A Saturday morning tradition.",
      },
      {
        name: "Wheat Penny Oven & Bar",
        category: "Dining",
        description: "A celebrated Dayton restaurant serving creative wood-fired pizzas and craft cocktails. Consistently ranked among the best restaurants in the region.",
      },
      {
        name: "Great Miami River Trail",
        category: "Outdoors",
        description: "Part of the nation's largest paved trail network, with over 340 miles of connected paths for biking, running, and walking throughout the Miami Valley.",
      },
    ],
    housing: {
      priceRange: "$200,000–$380,000",
      rentRange: "$1,000–$1,700/mo",
      marketContext: "The Dayton market is affordable compared to national averages, and WPAFB BAH rates cover the area well. Beavercreek is the sweet spot of price, schools, and convenience. Centerville is pricier but prestigious. Fairborn is the most budget-friendly.",
      hotNeighborhoods: ["Beavercreek", "Centerville", "Fairborn"],
    },
  },
};

export default airForceDetails;
