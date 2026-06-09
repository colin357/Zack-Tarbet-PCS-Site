import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin, Phone, Home, GraduationCap, TreePine, Utensils, ShoppingBag,
  Landmark, Clock, CheckCircle, TrendingUp, Shield, Mountain, Sun,
  Heart, Briefcase, Stethoscope, DollarSign, Car, Users, Building,
  Star, ArrowRight, Ticket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fort Carson PCS Guide | Everything You Need to Know | Heroes Home Network",
  description: "The ultimate guide to PCS'ing to Fort Carson, Colorado Springs. Neighborhoods, schools, housing, BAH rates, things to do, spouse employment, healthcare, and VA loan resources.",
};

const card = {
  backgroundColor: "#111827",
  border: "1px solid #1f2937",
  borderRadius: "12px",
  padding: "2rem",
} as const;

const sectionTitle = {
  color: "#f1f5f9",
  fontWeight: 800 as const,
  fontSize: "1.375rem",
  margin: "0 0 0.5rem",
  lineHeight: 1.3,
} as const;

const sectionSubtitle = {
  color: "#6b7280",
  fontSize: "0.9rem",
  lineHeight: 1.7,
  margin: "0 0 1.5rem",
} as const;

const tagStyle = {
  backgroundColor: "#1f2937",
  color: "#9ca3af",
  fontSize: "0.72rem",
  fontWeight: 600 as const,
  padding: "0.25rem 0.625rem",
  borderRadius: "9999px",
} as const;

export default function FortCarsonGuidePage() {
  return (
    <div style={{ backgroundColor: "#0a0f1e" }}>

      {/* Thank You Hero */}
      <section style={{
        background: "linear-gradient(135deg, #060c18 0%, #0a0f1e 50%, #111827 100%)",
        padding: "3rem 1.5rem 3rem",
        borderBottom: "1px solid #1f2937",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            backgroundColor: "rgba(76, 175, 80, 0.1)",
            border: "1px solid rgba(76, 175, 80, 0.3)",
            borderRadius: "9999px", padding: "0.375rem 1rem", marginBottom: "1.5rem",
          }}>
            <CheckCircle size={14} color="#4CAF50" />
            <span style={{ color: "#4CAF50", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              YOU&apos;RE ALL SET
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900,
            color: "#f1f5f9", margin: "0 0 1rem", lineHeight: 1.15,
          }}>
            Your Complete Guide to<br />
            <span style={{ color: "#f5c518" }}>PCS&apos;ing to Fort Carson</span>
          </h1>

          <p style={{ color: "#9ca3af", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "640px", margin: "0 0 1.5rem" }}>
            Thanks for signing up! Below is everything you need to know about moving to Fort Carson and the Colorado Springs area. Bookmark this page — we&apos;ll also be in touch soon to help with your VA loan and home search.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "#f5c518", color: "#0a0f1e",
              padding: "0.75rem 1.5rem", borderRadius: "8px",
              fontSize: "0.875rem", fontWeight: 700, textDecoration: "none",
            }}>
              Get VA Loan Pre-Approval
              <ArrowRight size={14} />
            </Link>
            <a href="tel:+13037287690" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
              color: "#cbd5e1", padding: "0.75rem 1.25rem",
              borderRadius: "8px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none",
            }}>
              <Phone size={14} />
              (303) 728-7690
            </a>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section style={{ padding: "1.5rem 1.5rem 0", borderBottom: "1px solid #1f2937" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "0.5rem",
            paddingBottom: "1.5rem",
          }}>
            {[
              { label: "About Fort Carson", href: "#about" },
              { label: "On-Post Life", href: "#on-post" },
              { label: "Neighborhoods", href: "#neighborhoods" },
              { label: "Schools", href: "#schools" },
              { label: "Housing & BAH", href: "#housing" },
              { label: "Things To Do", href: "#activities" },
              { label: "Spouse Employment", href: "#employment" },
              { label: "Healthcare", href: "#healthcare" },
              { label: "Climate", href: "#climate" },
              { label: "PCS Checklist", href: "#checklist" },
            ].map(item => (
              <a key={item.href} href={item.href} style={{
                color: "#9ca3af", backgroundColor: "#111827",
                border: "1px solid #1f2937", borderRadius: "9999px",
                padding: "0.375rem 0.875rem", fontSize: "0.8rem",
                fontWeight: 600, textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>

          {/* ── About Fort Carson ────────────────────────────── */}
          <div id="about" style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Shield size={20} color="#4CAF50" />
              <h2 style={sectionTitle}>About Fort Carson</h2>
            </div>
            <p style={sectionSubtitle}>
              Fort Carson, known as &quot;The Mountain Post,&quot; is one of the Army&apos;s premier installations and a favorite duty station among service members.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
              <div style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.25rem" }}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.75rem" }}>Mission & Units</h3>
                <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
                  Fort Carson is home to the 4th Infantry Division (4th ID), the 10th Special Forces Group (Airborne), the 71st Ordnance Group (EOD), the 4th Combat Aviation Brigade, and the 759th Military Police Battalion. The post supports more than 25,000 active-duty soldiers.
                </p>
                <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                  The installation also hosts the 13th Air Support Operations Squadron (USAF) and various tenant units, making it a major joint operations hub.
                </p>
              </div>
              <div style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.25rem" }}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.75rem" }}>Location & History</h3>
                <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
                  Located just south of Colorado Springs at the foot of the Rocky Mountains, Fort Carson covers approximately 137,000 acres. The installation was established in 1942 during World War II and named after the legendary frontier scout Kit Carson.
                </p>
                <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                  Colorado Springs sits at 6,035 feet elevation and is the second-largest city in Colorado with a population of roughly 490,000. The metro area is home to over 730,000 people.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem" }}>
              {[
                { label: "Active Duty", value: "25,000+" },
                { label: "Total Population", value: "65,000+" },
                { label: "Established", value: "1942" },
                { label: "Acreage", value: "137,000" },
                { label: "Elevation", value: "6,035 ft" },
                { label: "Nearest City", value: "Colorado Springs" },
              ].map(item => (
                <div key={item.label} style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "0.875rem" }}>
                  <div style={{ color: "#f5c518", fontWeight: 800, fontSize: "1.125rem" }}>{item.value}</div>
                  <div style={{ color: "#6b7280", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── On-Post Life ────────────────────────────── */}
          <div id="on-post" style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Building size={20} color="#f5c518" />
              <h2 style={sectionTitle}>On-Post Life & Amenities</h2>
            </div>
            <p style={sectionSubtitle}>
              Fort Carson has invested heavily in quality-of-life facilities. Here&apos;s what you&apos;ll find on post.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
              {[
                {
                  title: "Housing",
                  items: ["Lend Lease manages 4,000+ on-post family housing units", "Neighborhoods: Apache Village, Arapahoe Village, Cherokee Village, Comanche Village, Sioux Village", "Newly renovated homes available — 2–4 bedroom floor plans", "Walk-to-school programs for on-post kids", "Maintenance requests handled 24/7"],
                },
                {
                  title: "Shopping & Dining",
                  items: ["Main Exchange (PX) with major retail brands", "Commissary with full grocery selection", "Burger King, Subway, Starbucks, Taco Bell, Arby's on post", "Class Six (liquor store)", "Shoppette & Gas Station"],
                },
                {
                  title: "Recreation & Fitness",
                  items: ["Garcia Physical Fitness Center — free for active duty", "Outdoor Recreation Center — ski/snowboard rentals, camping gear", "Cheyenne Shadows Golf Course (18-hole)", "Indoor pool, bowling alley, movie theater", "Auto skills center, arts & crafts center"],
                },
                {
                  title: "Support Services",
                  items: ["ACS (Army Community Service) — PCS help, financial counseling", "Soldier & Family Assistance Center", "School Liaison Officer for education transitions", "Legal assistance office (wills, POA, lease reviews)", "USO on post with regular family events"],
                },
              ].map(section => (
                <div key={section.title} style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.25rem" }}>
                  <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 0.75rem" }}>{section.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {section.items.map(item => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#9ca3af", fontSize: "0.825rem", lineHeight: 1.5 }}>
                        <CheckCircle size={12} color="#f5c518" style={{ flexShrink: 0, marginTop: "3px" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Neighborhoods ────────────────────────────── */}
          <div id="neighborhoods" style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <MapPin size={20} color="#f5c518" />
              <h2 style={sectionTitle}>Best Neighborhoods Near Fort Carson</h2>
            </div>
            <p style={sectionSubtitle}>
              Where you live makes a big difference in your quality of life. Here are the most popular neighborhoods for military families, with honest pros and cons.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                {
                  name: "Security-Widefield",
                  commute: "5–10 min to Gate 1",
                  priceRange: "$300K–$420K",
                  rent: "$1,400–$1,800/mo",
                  description: "The closest community to Fort Carson's main gate, Security-Widefield is the go-to neighborhood for military families who want minimal commute. The area is primarily single-family homes with a suburban feel. You'll find lots of other military families here, which creates a strong support network.",
                  pros: ["Shortest commute to post", "Strong military community", "Most affordable option near Carson", "Close to Fort Carson schools"],
                  cons: ["Older housing stock in some areas", "Limited nightlife/dining", "Can feel isolated from the rest of Colorado Springs"],
                  tags: ["Military Community", "Affordable", "Short Commute", "Suburban"],
                },
                {
                  name: "Fountain",
                  commute: "10–15 min to Gate 1",
                  priceRange: "$340K–$460K",
                  rent: "$1,500–$2,000/mo",
                  description: "Fountain has experienced explosive growth with new construction subdivisions popping up everywhere. It's slightly further from post but offers newer homes and a family-friendly small-town atmosphere. Fountain-Fort Carson High School is here, and the town has its own charming downtown area.",
                  pros: ["Lots of new construction", "Family-friendly small-town feel", "Home to Fountain-Fort Carson High School", "Growing retail and dining options"],
                  cons: ["Rapid growth straining infrastructure", "Limited public transit", "Further from north Colorado Springs amenities"],
                  tags: ["New Construction", "Family-Friendly", "Growing", "Suburban"],
                },
                {
                  name: "Powers Corridor (East Colorado Springs)",
                  commute: "15–25 min to Gate 1",
                  priceRange: "$380K–$520K",
                  rent: "$1,600–$2,200/mo",
                  description: "The Powers Corridor is where Colorado Springs' growth has exploded. This area offers the best shopping, dining, and entertainment options with easy access to major retailers at First & Main Town Center and the Citadel Mall area. Newer subdivisions in this area are popular with military families who want a more urban-suburban experience.",
                  pros: ["Best shopping and dining in the city", "Newer homes and subdivisions", "Close to multiple school districts", "Lots to do for families"],
                  cons: ["Longer commute to post", "Higher price point", "Traffic on Powers Blvd during rush hour"],
                  tags: ["Shopping", "Dining", "New Construction", "Urban-Suburban"],
                },
                {
                  name: "Lorson Ranch",
                  commute: "8–12 min to Gate 1",
                  priceRange: "$350K–$480K",
                  rent: "$1,600–$2,100/mo",
                  description: "Lorson Ranch is a master-planned community that's become extremely popular with Fort Carson families. It offers newer construction, community parks, a pool, and walking trails. The neighborhood has an HOA that keeps the area well-maintained, and it's close to both Gate 1 and Gate 20.",
                  pros: ["Master-planned with community amenities", "Pool, parks, and walking trails", "Close to two Fort Carson gates", "Strong resale value"],
                  cons: ["HOA fees add to monthly costs", "Limited lot sizes", "Can sell quickly — competitive market"],
                  tags: ["Master-Planned", "Amenities", "HOA", "Popular with Military"],
                },
                {
                  name: "Broadmoor / Cheyenne Mountain",
                  commute: "12–20 min to Gate 1",
                  priceRange: "$450K–$750K+",
                  rent: "$2,000–$3,000/mo",
                  description: "If your BAH allows it (or you have dual income), the Broadmoor and Cheyenne Mountain areas offer some of the most beautiful neighborhoods in Colorado Springs. Nestled against the mountains with stunning views, these areas are home to top-rated Cheyenne Mountain School District 12 schools.",
                  pros: ["Stunning mountain views", "Top-rated Cheyenne Mountain D12 schools", "Low crime, well-established neighborhoods", "Close to Broadmoor resort and Seven Falls"],
                  cons: ["Higher price point — may exceed BAH", "Older homes in some pockets", "Further from post"],
                  tags: ["Upscale", "Mountain Views", "Top Schools", "Established"],
                },
                {
                  name: "Falcon / Peyton (Northeast)",
                  commute: "25–40 min to Gate 1",
                  priceRange: "$380K–$550K",
                  rent: "$1,700–$2,300/mo",
                  description: "For those who want land, space, and a rural feel, Falcon and Peyton northeast of the city offer larger lots (often 1–5 acres) and a quieter lifestyle. Falcon School District 49 schools have improved significantly. The trade-off is a longer commute, but many families love the open-sky Colorado feel.",
                  pros: ["Larger lots and more space", "Rural Colorado feel", "Growing area with new builds", "Great for families with outdoor hobbies"],
                  cons: ["Longest commute to Fort Carson", "Fewer nearby amenities", "Well and septic in some areas"],
                  tags: ["Rural", "Large Lots", "Space", "Quiet"],
                },
              ].map(n => (
                <div key={n.name} style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "10px", padding: "1.5rem" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.125rem", margin: 0 }}>{n.name}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#6b7280", fontSize: "0.8rem" }}>
                      <Clock size={12} />
                      {n.commute}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "0.875rem" }}>
                    <span style={{ color: "#f5c518", fontSize: "0.8rem", fontWeight: 700 }}>Buy: {n.priceRange}</span>
                    <span style={{ color: "#6b7280" }}>|</span>
                    <span style={{ color: "#9ca3af", fontSize: "0.8rem" }}>Rent: {n.rent}</span>
                  </div>

                  <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 1rem" }}>
                    {n.description}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="pros-cons-grid">
                    <div>
                      <div style={{ color: "#4CAF50", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "0.5rem" }}>PROS</div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                        {n.pros.map(p => (
                          <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#9ca3af", fontSize: "0.8rem", lineHeight: 1.5 }}>
                            <CheckCircle size={12} color="#4CAF50" style={{ flexShrink: 0, marginTop: "2px" }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div style={{ color: "#ef4444", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "0.5rem" }}>CONS</div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                        {n.cons.map(c => (
                          <li key={c} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#9ca3af", fontSize: "0.8rem", lineHeight: 1.5 }}>
                            <span style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px", fontSize: "12px" }}>-</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {n.tags.map(tag => (
                      <span key={tag} style={tagStyle}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Schools & Education ────────────────────────────── */}
          <div id="schools" style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <GraduationCap size={20} color="#f5c518" />
              <h2 style={sectionTitle}>Schools & Education</h2>
            </div>
            <p style={sectionSubtitle}>
              Colorado Springs has multiple school districts serving the Fort Carson area. Here&apos;s a breakdown to help you choose the right fit.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  district: "Fountain-Fort Carson School District 8",
                  area: "Fountain, Security-Widefield, Lorson Ranch",
                  rating: "Above Average",
                  highlights: [
                    "Fountain-Fort Carson High School — strong JROTC program and athletic teams",
                    "Military Family Life Counselors in every school",
                    "School Liaison Officers help with enrollment during PCS",
                    "Free breakfast and lunch programs available",
                    "Strong special education and gifted/talented programs",
                    "New elementary and middle schools opening to accommodate growth",
                  ],
                },
                {
                  district: "Widefield School District 3",
                  area: "Security-Widefield",
                  rating: "Average",
                  highlights: [
                    "Widefield High School — close to Gate 1",
                    "Smaller class sizes in some elementary schools",
                    "Active parent involvement from military families",
                    "After-school programs and tutoring available",
                  ],
                },
                {
                  district: "Colorado Springs District 11",
                  area: "Central Colorado Springs",
                  rating: "Varies by School",
                  highlights: [
                    "Largest district in the area with diverse school options",
                    "Palmer High School — IB (International Baccalaureate) program",
                    "School of choice program — open enrollment across the district",
                    "Magnet programs in STEM, arts, and languages",
                    "Tesla and CIVA charter school options",
                  ],
                },
                {
                  district: "Academy School District 20",
                  area: "North Colorado Springs",
                  rating: "Highly Rated",
                  highlights: [
                    "Consistently top-rated district in El Paso County",
                    "Liberty High School and Air Academy High School are standouts",
                    "Strong AP and concurrent enrollment programs",
                    "Longer commute to Fort Carson (30–40 min)",
                    "Very competitive home prices in this district",
                  ],
                },
                {
                  district: "Cheyenne Mountain School District 12",
                  area: "Broadmoor / Southwest Colorado Springs",
                  rating: "Highest Rated",
                  highlights: [
                    "Consistently ranked #1 in El Paso County and top 5 in Colorado",
                    "Cheyenne Mountain High School — excellent academics and athletics",
                    "Small district with strong community feel",
                    "Homes in this district tend to be higher priced ($450K+)",
                    "15–20 minute commute to Fort Carson",
                  ],
                },
              ].map(d => (
                <div key={d.district} style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.25rem" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: 0 }}>{d.district}</h3>
                    <span style={{ ...tagStyle, backgroundColor: "rgba(245, 197, 24, 0.15)", color: "#f5c518" }}>{d.rating}</span>
                  </div>
                  <p style={{ color: "#6b7280", fontSize: "0.8rem", margin: "0 0 0.75rem" }}>Serves: {d.area}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {d.highlights.map(h => (
                      <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#9ca3af", fontSize: "0.825rem", lineHeight: 1.5 }}>
                        <CheckCircle size={12} color="#f5c518" style={{ flexShrink: 0, marginTop: "3px" }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "#0a0f1e", border: "1px solid rgba(245, 197, 24, 0.2)", borderRadius: "8px", padding: "1.25rem", marginTop: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <Star size={14} color="#f5c518" />
                <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem" }}>Pro Tip</span>
              </div>
              <p style={{ color: "#9ca3af", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                Contact the Fort Carson School Liaison Officer before your move. They can help you research schools, navigate enrollment, and transfer records. They can also connect you with Military Family Life Counselors who support kids during transitions. Call the School Liaison at (719) 524-0642.
              </p>
            </div>
          </div>

          {/* ── Housing & BAH ────────────────────────────── */}
          <div id="housing" style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Home size={20} color="#f5c518" />
              <h2 style={sectionTitle}>Housing Market & BAH Rates</h2>
            </div>
            <p style={sectionSubtitle}>
              Colorado Springs has a competitive but fair housing market. Here&apos;s what you need to know about buying or renting near Fort Carson.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                { icon: TrendingUp, label: "Median Home Price", value: "$380,000", sub: "El Paso County" },
                { icon: Home, label: "Typical Rent", value: "$1,600–$2,200", sub: "3-bed near Carson" },
                { icon: DollarSign, label: "BAH (E-5 w/dep)", value: "$1,878/mo", sub: "2025 rates" },
                { icon: DollarSign, label: "BAH (E-7 w/dep)", value: "$2,130/mo", sub: "2025 rates" },
              ].map(item => (
                <div key={item.label} style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.25rem", textAlign: "center" }}>
                  <item.icon size={20} color="#f5c518" style={{ marginBottom: "0.5rem" }} />
                  <div style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.25rem", marginBottom: "0.125rem" }}>{item.value}</div>
                  <div style={{ color: "#9ca3af", fontSize: "0.8rem", fontWeight: 600 }}>{item.label}</div>
                  <div style={{ color: "#4b5563", fontSize: "0.72rem" }}>{item.sub}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
              <div style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.25rem" }}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.75rem" }}>Buying With a VA Loan</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    "$0 down payment — your biggest advantage",
                    "No private mortgage insurance (PMI)",
                    "Competitive interest rates — typically lower than conventional",
                    "Colorado Springs appraisers are experienced with VA loans",
                    "Seller concessions up to 4% are common in this market",
                    "You can use VA loan benefits multiple times",
                    "Pre-approval takes as little as 24 hours with us",
                  ].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#9ca3af", fontSize: "0.825rem", lineHeight: 1.5 }}>
                      <CheckCircle size={12} color="#4CAF50" style={{ flexShrink: 0, marginTop: "3px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.25rem" }}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.75rem" }}>Renting Near Fort Carson</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    "Apartments available near Gate 1 and Gate 20",
                    "Many landlords accept military clause for early lease termination",
                    "BAH covers most 2–3 bedroom apartments comfortably",
                    "Utilities (especially heating) can be significant in winter",
                    "Pet-friendly rentals are available but may have breed restrictions",
                    "Consider renting first to explore neighborhoods before buying",
                    "Rental market moves fast May–August during PCS season",
                  ].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#9ca3af", fontSize: "0.825rem", lineHeight: 1.5 }}>
                      <CheckCircle size={12} color="#f5c518" style={{ flexShrink: 0, marginTop: "3px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: "rgba(245, 197, 24, 0.05)", border: "1px solid rgba(245, 197, 24, 0.2)", borderRadius: "10px", padding: "1.5rem", textAlign: "center" }}>
              <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.5rem" }}>
                Ready to Start Your Home Search?
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 1rem" }}>
                Get pre-approved for a VA loan and know exactly how much home you can afford before your PCS move.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "#f5c518", color: "#0a0f1e",
                padding: "0.75rem 1.5rem", borderRadius: "8px",
                fontSize: "0.875rem", fontWeight: 700, textDecoration: "none",
              }}>
                Get VA Pre-Approval
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* ── Things To Do ────────────────────────────── */}
          <div id="activities" style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Mountain size={20} color="#f5c518" />
              <h2 style={sectionTitle}>Things To Do in Colorado Springs</h2>
            </div>
            <p style={sectionSubtitle}>
              Colorado Springs is a world-class destination for outdoor recreation, family fun, and dining. Here are the highlights.
            </p>

            {/* Outdoor Activities */}
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <TreePine size={16} color="#0891b2" />
              Outdoor Adventures
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.875rem", marginBottom: "2rem" }}>
              {[
                { name: "Garden of the Gods", desc: "Free public park with stunning red rock formations. Hiking, rock climbing, and horseback riding. One of the most photographed spots in Colorado." },
                { name: "Pikes Peak (America's Mountain)", desc: "Drive, hike, or take the Cog Railway to the 14,115-foot summit. The view inspired 'America the Beautiful.' New summit visitor center opened in 2021." },
                { name: "Cheyenne Mountain State Park", desc: "21 trails right next to Fort Carson. Mountain biking, hiking, and wildlife viewing. Annual pass: $80. One of the closest outdoor spots to post." },
                { name: "North Cheyenne Canon Park", desc: "Free city park with waterfalls, hiking trails, and scenic overlooks. Helen Hunt Falls is a quick 10-minute hike. Great for families." },
                { name: "Mueller State Park", desc: "45 minutes west — 5,000 acres of hiking, fishing, and camping. Elk, deer, and wild turkey are common. Perfect for weekend getaways." },
                { name: "Ski Resorts (90 min drive)", desc: "Monarch Mountain, Breckenridge, and Keystone are all within 2 hours. Fort Carson Outdoor Rec offers discounted lift tickets and gear rentals." },
                { name: "Arkansas River Rafting", desc: "World-class whitewater rafting just an hour away in Buena Vista and Canon City. Half-day trips start around $60. Browns Canyon is beginner-friendly." },
                { name: "Manitou Incline", desc: "2,744 steps to the top — one of the most popular (and grueling) hikes in Colorado. Free, open dawn to dusk. Average completion time: 45–90 minutes." },
              ].map(act => (
                <div key={act.name} style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "6px", backgroundColor: "#ecfeff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <TreePine size={14} color="#0891b2" />
                    </div>
                    <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem" }}>{act.name}</div>
                  </div>
                  <p style={{ color: "#6b7280", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>{act.desc}</p>
                </div>
              ))}
            </div>

            {/* Family Attractions */}
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Landmark size={16} color="#d97706" />
              Family Attractions
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.875rem", marginBottom: "2rem" }}>
              {[
                { name: "Cheyenne Mountain Zoo", desc: "World-renowned mountain zoo at 6,714 feet. 750+ animals, giraffe feeding, and stunning mountain views. Military discount available." },
                { name: "U.S. Olympic & Paralympic Training Center", desc: "Free guided tours of the elite training facility right in Colorado Springs. See where Team USA athletes train year-round." },
                { name: "Space Foundation Discovery Center", desc: "Interactive space museum — great for kids. Robotics programs, Mars simulation, and planetarium shows." },
                { name: "Manitou Springs", desc: "Charming mountain town with art galleries, boutiques, the famous Penny Arcade, and natural mineral springs. 15 minutes from post." },
                { name: "Royal Gorge Bridge & Park", desc: "America's highest suspension bridge at 956 feet above the Arkansas River. Zip lines, gondola, and via ferrata climbing. 45 minutes from Carson." },
                { name: "Cave of the Winds", desc: "Underground cave tours ranging from family-friendly walking tours to adventure crawling tours. Right in Manitou Springs." },
              ].map(act => (
                <div key={act.name} style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "6px", backgroundColor: "#fffbeb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Landmark size={14} color="#d97706" />
                    </div>
                    <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem" }}>{act.name}</div>
                  </div>
                  <p style={{ color: "#6b7280", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>{act.desc}</p>
                </div>
              ))}
            </div>

            {/* Dining */}
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Utensils size={16} color="#16a34a" />
              Dining & Nightlife
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.875rem", marginBottom: "2rem" }}>
              {[
                { name: "The Famous Steak House", desc: "Colorado Springs institution since 1953. Prime steaks, seafood, and an old-school atmosphere. Perfect for celebrations." },
                { name: "Shuga's", desc: "Eclectic café and cocktail bar downtown. Creative sandwiches, craft cocktails, and a unique vibe. Local favorite." },
                { name: "Front Range BBQ", desc: "Award-winning Texas-style BBQ. Brisket, ribs, and pulled pork smoked low and slow. Great for military family gatherings." },
                { name: "Pizzeria Rustica", desc: "Wood-fired Neapolitan pizza in Old Colorado City. Locally sourced ingredients and an excellent beer list." },
                { name: "Colorado Mountain Brewery", desc: "Craft brewery with a full menu. Multiple locations including Roundhouse at the Broadmoor. Live music on weekends." },
                { name: "Iron Bird Brewing", desc: "Military-owned brewery near Fort Carson. Great beer, food trucks, and a strong military community atmosphere. Veteran discounts." },
              ].map(act => (
                <div key={act.name} style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "6px", backgroundColor: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Utensils size={14} color="#16a34a" />
                    </div>
                    <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem" }}>{act.name}</div>
                  </div>
                  <p style={{ color: "#6b7280", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>{act.desc}</p>
                </div>
              ))}
            </div>

            {/* Shopping */}
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: "0 0 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ShoppingBag size={16} color="#2563eb" />
              Shopping
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.875rem" }}>
              {[
                { name: "First & Main Town Center", desc: "Open-air lifestyle center with Target, Dick's, REI, restaurants, and a movie theater. Powers Corridor location." },
                { name: "The Promenade Shops at Briargate", desc: "Upscale shopping center in north Colorado Springs. Bass Pro, Williams-Sonoma, and over 80 stores." },
                { name: "Old Colorado City", desc: "Historic arts district with galleries, boutiques, and local shops. Great for unique gifts and Colorado souvenirs." },
                { name: "Chapel Hills Mall / Citadel Mall", desc: "Two major indoor malls with department stores and national retailers. Chapel Hills is newer; Citadel is closer to Carson." },
              ].map(act => (
                <div key={act.name} style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "6px", backgroundColor: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <ShoppingBag size={14} color="#2563eb" />
                    </div>
                    <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem" }}>{act.name}</div>
                  </div>
                  <p style={{ color: "#6b7280", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>{act.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Spouse Employment ────────────────────────────── */}
          <div id="employment" style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Briefcase size={20} color="#f5c518" />
              <h2 style={sectionTitle}>Spouse Employment & Job Market</h2>
            </div>
            <p style={sectionSubtitle}>
              Colorado Springs has a strong and diverse job market, which is great news for military spouses looking for work.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              <div style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.25rem" }}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 0.75rem" }}>Top Employers in the Area</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {[
                    "USAA — major employer, military-friendly hiring",
                    "Lockheed Martin — aerospace and defense",
                    "Amazon — distribution center and tech roles",
                    "T-Mobile — customer service and tech hub",
                    "UCHealth / Penrose-St. Francis — healthcare",
                    "School districts — always hiring, great for education degrees",
                    "Fort Carson — civilian positions on post (NAF & GS)",
                    "Colorado Springs Utilities — public utility jobs",
                  ].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#9ca3af", fontSize: "0.825rem", lineHeight: 1.5 }}>
                      <CheckCircle size={12} color="#f5c518" style={{ flexShrink: 0, marginTop: "3px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.25rem" }}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 0.75rem" }}>Military Spouse Resources</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {[
                    "MySECO (Military Spouse Employment & Career Opportunities) — free career coaching",
                    "Hiring Our Heroes — military spouse fellowship program",
                    "Fort Carson ACS Employment Readiness Program — resume help, job fairs",
                    "Colorado has interstate license portability for many professions",
                    "USAJOBS — search military spouse preference (MSP) positions",
                    "Remote work-friendly city — many tech and customer service roles are hybrid/remote",
                    "Pikes Peak Workforce Center — free job training programs",
                    "Military spouse scholarship opportunities through MyCAA ($4,000 benefit)",
                  ].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#9ca3af", fontSize: "0.825rem", lineHeight: 1.5 }}>
                      <CheckCircle size={12} color="#4CAF50" style={{ flexShrink: 0, marginTop: "3px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Healthcare ────────────────────────────── */}
          <div id="healthcare" style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Stethoscope size={20} color="#f5c518" />
              <h2 style={sectionTitle}>Healthcare & Medical</h2>
            </div>
            <p style={sectionSubtitle}>
              Fort Carson has excellent medical facilities, and Colorado Springs offers extensive civilian healthcare options.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              <div style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.25rem" }}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 0.75rem" }}>On-Post Medical</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {[
                    "Evans Army Community Hospital (EACH) — full-service hospital on post",
                    "Primary care, specialty clinics, pharmacy, and lab services",
                    "Dental clinic for active duty, TRICARE dental for family members",
                    "Behavioral health clinic and Warrior Recovery Center",
                    "OB/GYN and labor & delivery services",
                    "Pediatric and adolescent medicine",
                    "Physical therapy and rehabilitation services",
                  ].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#9ca3af", fontSize: "0.825rem", lineHeight: 1.5 }}>
                      <CheckCircle size={12} color="#f5c518" style={{ flexShrink: 0, marginTop: "3px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.25rem" }}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 0.75rem" }}>Civilian Healthcare</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {[
                    "UCHealth Memorial Hospital — Level I Trauma Center, 5 minutes from Gate 1",
                    "Penrose-St. Francis Health Services — two campuses in the city",
                    "Children's Hospital Colorado (Colorado Springs campus)",
                    "TRICARE network providers widely available",
                    "VA clinic on Fillmore St. for veteran healthcare needs",
                    "Multiple urgent care facilities accept TRICARE",
                    "Altitude sickness is possible during the first 1–2 weeks — stay hydrated!",
                  ].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#9ca3af", fontSize: "0.825rem", lineHeight: 1.5 }}>
                      <CheckCircle size={12} color="#4CAF50" style={{ flexShrink: 0, marginTop: "3px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Climate & Weather ────────────────────────────── */}
          <div id="climate" style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Sun size={20} color="#f5c518" />
              <h2 style={sectionTitle}>Climate & Weather</h2>
            </div>
            <p style={sectionSubtitle}>
              Colorado Springs enjoys 300+ days of sunshine and four distinct seasons. Here&apos;s what to expect year-round.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                { season: "Spring (Mar–May)", temp: "40°F – 65°F", notes: "Unpredictable — snow one day, 70°F the next. Hail season. Wildflowers in May." },
                { season: "Summer (Jun–Aug)", temp: "60°F – 85°F", notes: "Warm and sunny. Afternoon thunderstorms common (usually brief). Low humidity." },
                { season: "Fall (Sep–Nov)", temp: "35°F – 70°F", notes: "Beautiful foliage in the mountains. Crisp mornings, warm afternoons. Best hiking season." },
                { season: "Winter (Dec–Feb)", temp: "15°F – 45°F", notes: "Snow comes and goes quickly. Sunny days between storms. Not as cold as you'd think." },
              ].map(s => (
                <div key={s.season} style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "8px", padding: "1.125rem" }}>
                  <div style={{ color: "#f5c518", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.25rem" }}>{s.season}</div>
                  <div style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.125rem", marginBottom: "0.5rem" }}>{s.temp}</div>
                  <p style={{ color: "#6b7280", fontSize: "0.8rem", lineHeight: 1.5, margin: 0 }}>{s.notes}</p>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "#0a0f1e", border: "1px solid rgba(245, 197, 24, 0.2)", borderRadius: "8px", padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <Star size={14} color="#f5c518" />
                <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem" }}>What to Know About the Altitude</span>
              </div>
              <p style={{ color: "#9ca3af", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                At 6,035 feet elevation, you&apos;ll notice the altitude. Drink extra water (especially during your first two weeks), use sunscreen year-round (UV is stronger at elevation), and give yourself time to adjust before intense exercise. Most people acclimate fully within 2–3 weeks. Alcohol hits harder at altitude — be aware. Cooking at elevation is different too — water boils at a lower temperature, so baking and cooking times may need adjusting.
              </p>
            </div>
          </div>

          {/* ── PCS Checklist ────────────────────────────── */}
          <div id="checklist" style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <CheckCircle size={20} color="#f5c518" />
              <h2 style={sectionTitle}>Fort Carson PCS Checklist</h2>
            </div>
            <p style={sectionSubtitle}>
              Your step-by-step guide to a smooth PCS move to Fort Carson.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  phase: "6+ Months Out",
                  color: "#4CAF50",
                  items: [
                    "Get VA loan pre-approved — start early to know your budget",
                    "Research neighborhoods (use this guide!)",
                    "Start connecting with Fort Carson's School Liaison Officer",
                    "Begin decluttering — less stuff = cheaper move",
                    "Request your medical and dental records",
                    "Start a PCS binder — keep all documents together",
                  ],
                },
                {
                  phase: "3–6 Months Out",
                  color: "#f5c518",
                  items: [
                    "Schedule your HHG (household goods) move with transportation office",
                    "If buying: start your home search with a military-friendly agent",
                    "If renting: research apartments and rental homes",
                    "Apply for on-post housing if desired (waiting lists can be long)",
                    "Update your DEERS information",
                    "Research childcare and register for CDC (Child Development Center) waitlist",
                    "Get vehicle inspected — Colorado has emissions testing",
                  ],
                },
                {
                  phase: "1–3 Months Out",
                  color: "#d97706",
                  items: [
                    "Finalize housing — close on a home or sign a lease",
                    "Coordinate temporary lodging (IHG Army Hotels on post or TLA)",
                    "Transfer school records and enroll kids in new school",
                    "Notify current utility companies of move date",
                    "Cancel or transfer gym memberships, subscriptions",
                    "Update auto insurance for Colorado rates",
                    "Get a copy of your PCS orders for everything",
                  ],
                },
                {
                  phase: "2 Weeks Before",
                  color: "#ef4444",
                  items: [
                    "Confirm HHG pickup date and delivery window",
                    "Pack your essentials box (documents, meds, chargers, snacks, kid stuff)",
                    "Arrange pet travel if applicable (Colorado has breed restrictions in some areas)",
                    "Download Fort Carson's garrison app for in-processing info",
                    "Confirm temporary lodging reservation",
                    "Set up Colorado utilities at new address",
                  ],
                },
                {
                  phase: "First Week at Carson",
                  color: "#2563eb",
                  items: [
                    "Report to in-processing at Building 1525 (Replacement Company)",
                    "Register your vehicle on post within 72 hours",
                    "Get your Colorado driver's license within 90 days (no state income tax!)",
                    "Register vehicles with El Paso County Clerk",
                    "Enroll in TRICARE at Evans Army Community Hospital",
                    "Set up your CAC at the ID card office",
                    "Visit ACS (Army Community Service) for welcome packet and area orientation",
                    "Breathe — you made it to one of the best duty stations in the Army!",
                  ],
                },
              ].map(phase => (
                <div key={phase.phase} style={{ backgroundColor: "#0a0f1e", border: "1px solid #1f2937", borderRadius: "10px", padding: "1.25rem" }}>
                  <div style={{
                    display: "inline-block", backgroundColor: `${phase.color}22`, color: phase.color,
                    fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em",
                    padding: "0.25rem 0.75rem", borderRadius: "9999px",
                    border: `1px solid ${phase.color}44`, marginBottom: "0.875rem",
                  }}>
                    {phase.phase}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {phase.items.map(item => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#9ca3af", fontSize: "0.825rem", lineHeight: 1.5 }}>
                        <CheckCircle size={12} color={phase.color} style={{ flexShrink: 0, marginTop: "3px" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Final CTA ────────────────────────────── */}
          <div style={{
            backgroundColor: "#111827",
            border: "1px solid rgba(245, 197, 24, 0.3)",
            borderRadius: "16px", padding: "2.5rem", textAlign: "center",
          }}>
            <div style={{
              width: "56px", height: "56px", backgroundColor: "rgba(245, 197, 24, 0.1)",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.25rem",
            }}>
              <Home size={24} color="#f5c518" />
            </div>
            <h2 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.5rem", margin: "0 0 0.75rem" }}>
              Ready to Find Your Home Near Fort Carson?
            </h2>
            <p style={{ color: "#6b7280", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 1.5rem" }}>
              Let&apos;s get you pre-approved for a VA loan so you know exactly how much home you can afford. $0 down, competitive rates, and fast closing — that&apos;s the VA loan advantage.
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "#f5c518", color: "#0a0f1e",
                padding: "0.875rem 2rem", borderRadius: "8px",
                fontSize: "1rem", fontWeight: 700, textDecoration: "none",
              }}>
                Get VA Pre-Approval
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+13037287690" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                color: "#cbd5e1", padding: "0.875rem 1.5rem",
                borderRadius: "8px", fontSize: "1rem", fontWeight: 600, textDecoration: "none",
              }}>
                <Phone size={16} />
                (303) 728-7690
              </a>
            </div>
            <p style={{ color: "#4b5563", fontSize: "0.8rem", marginTop: "1rem" }}>
              VA Loan Specialist · NMLS# 2040562 · Responds within a few hours
            </p>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .pros-cons-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
