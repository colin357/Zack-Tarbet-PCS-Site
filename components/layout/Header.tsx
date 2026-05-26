"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Shield } from "lucide-react";

const branches = [
  "Air Force",
  "Army",
  "Coast Guard",
  "Joint",
  "Marine Corps",
  "Navy",
  "Space Force",
] as const;

const branchBases: Record<string, { name: string; slug: string }[]> = {
  "Air Force": [
    { name: "Altus AFB", slug: "altus-afb" },
    { name: "Barksdale AFB", slug: "barksdale-afb" },
    { name: "Beale AFB", slug: "beale-afb" },
    { name: "Davis-Monthan AFB", slug: "davis-monthan-afb" },
    { name: "Dover AFB", slug: "dover-afb" },
    { name: "Dyess AFB", slug: "dyess-afb" },
    { name: "Edwards AFB", slug: "edwards-afb" },
    { name: "Eglin AFB", slug: "eglin-afb" },
    { name: "Ellsworth AFB", slug: "ellsworth-afb" },
    { name: "Fairchild AFB", slug: "fairchild-afb" },
    { name: "Hill AFB", slug: "hill-afb" },
    { name: "Holloman AFB", slug: "holloman-afb" },
    { name: "Hurlburt Field", slug: "hurlburt-field" },
    { name: "Keesler AFB", slug: "keesler-afb" },
    { name: "Kirtland AFB", slug: "kirtland-afb" },
    { name: "Lackland AFB", slug: "lackland-afb" },
    { name: "Luke AFB", slug: "luke-afb" },
    { name: "MacDill AFB", slug: "macdill-afb" },
    { name: "Malmstrom AFB", slug: "malmstrom-afb" },
    { name: "Maxwell AFB", slug: "maxwell-afb" },
    { name: "McConnell AFB", slug: "mcconnell-afb" },
    { name: "Minot AFB", slug: "minot-afb" },
    { name: "Moody AFB", slug: "moody-afb" },
    { name: "Nellis AFB", slug: "nellis-afb" },
    { name: "Offutt AFB", slug: "offutt-afb" },
    { name: "Robins AFB", slug: "robins-afb" },
    { name: "Scott AFB", slug: "scott-afb" },
    { name: "Seymour Johnson AFB", slug: "seymour-johnson-afb" },
    { name: "Shaw AFB", slug: "shaw-afb" },
    { name: "Sheppard AFB", slug: "sheppard-afb" },
    { name: "Tinker AFB", slug: "tinker-afb" },
    { name: "Travis AFB", slug: "travis-afb" },
    { name: "Tyndall AFB", slug: "tyndall-afb" },
    { name: "Whiteman AFB", slug: "whiteman-afb" },
    { name: "Wright-Patterson AFB", slug: "wright-patterson-afb" },
  ],
  "Army": [
    { name: "Fort Belvoir", slug: "fort-belvoir" },
    { name: "Fort Bliss", slug: "fort-bliss" },
    { name: "Fort Campbell", slug: "fort-campbell" },
    { name: "Fort Carson", slug: "fort-carson" },
    { name: "Fort Cavazos", slug: "fort-cavazos" },
    { name: "Fort Drum", slug: "fort-drum" },
    { name: "Fort Eisenhower", slug: "fort-eisenhower" },
    { name: "Fort Gregg-Adams", slug: "fort-gregg-adams" },
    { name: "Fort Hamilton", slug: "fort-hamilton" },
    { name: "Fort Huachuca", slug: "fort-huachuca" },
    { name: "Fort Jackson", slug: "fort-jackson" },
    { name: "Fort Johnson", slug: "fort-johnson" },
    { name: "Fort Knox", slug: "fort-knox" },
    { name: "Fort Leavenworth", slug: "fort-leavenworth" },
    { name: "Fort Leonard Wood", slug: "fort-leonard-wood" },
    { name: "Fort Liberty", slug: "fort-liberty" },
    { name: "Fort Meade", slug: "fort-meade" },
    { name: "Fort Moore", slug: "fort-moore" },
    { name: "Fort Novosel", slug: "fort-novosel" },
    { name: "Fort Riley", slug: "fort-riley" },
    { name: "Fort Sam Houston", slug: "fort-sam-houston" },
    { name: "Fort Sill", slug: "fort-sill" },
    { name: "Fort Stewart", slug: "fort-stewart" },
    { name: "Fort Wainwright", slug: "fort-wainwright" },
    { name: "Redstone Arsenal", slug: "redstone-arsenal" },
    { name: "West Point", slug: "west-point" },
  ],
  "Coast Guard": [
    { name: "CG Base Alameda", slug: "coast-guard-base-alameda" },
    { name: "CG Base Boston", slug: "coast-guard-base-boston" },
    { name: "CG Base Clearwater", slug: "coast-guard-base-clearwater" },
    { name: "CG Base Elizabeth City", slug: "coast-guard-base-elizabeth-city" },
    { name: "CG Base Miami Beach", slug: "coast-guard-base-miami-beach" },
    { name: "CG Base New Orleans", slug: "coast-guard-base-new-orleans" },
    { name: "CG Base Portsmouth", slug: "coast-guard-base-portsmouth" },
    { name: "CG Base Seattle", slug: "coast-guard-base-seattle" },
  ],
  "Joint": [
    { name: "JB Anacostia-Bolling", slug: "joint-base-anacostia-bolling" },
    { name: "JB Andrews", slug: "joint-base-andrews" },
    { name: "JB Cape Cod", slug: "joint-base-cape-cod" },
    { name: "JB Charleston", slug: "joint-base-charleston" },
    { name: "JB Elmendorf-Richardson", slug: "joint-base-elmendorf-richardson" },
    { name: "JB Langley-Eustis", slug: "joint-base-langley-eustis" },
    { name: "JB Lewis-McChord", slug: "joint-base-lewis-mcchord" },
    { name: "JB McGuire-Dix-Lakehurst", slug: "joint-base-mcguire-dix-lakehurst" },
    { name: "JB Pearl Harbor-Hickam", slug: "joint-base-pearl-harbor-hickam" },
    { name: "JB San Antonio", slug: "joint-base-san-antonio" },
  ],
  "Marine Corps": [
    { name: "Camp Lejeune", slug: "camp-lejeune" },
    { name: "Camp Pendleton", slug: "camp-pendleton" },
    { name: "MCB Quantico", slug: "mcb-quantico" },
    { name: "MCAS Beaufort", slug: "mcas-beaufort" },
    { name: "MCAS Cherry Point", slug: "mcas-cherry-point" },
    { name: "MCAS Miramar", slug: "mcas-miramar" },
    { name: "MCAS New River", slug: "mcas-new-river" },
    { name: "MCAS Yuma", slug: "mcas-yuma" },
  ],
  "Navy": [
    { name: "NAS Jacksonville", slug: "nas-jacksonville" },
    { name: "NAS Key West", slug: "nas-key-west" },
    { name: "NAS Lemoore", slug: "nas-lemoore" },
    { name: "NAS Oceana", slug: "nas-oceana" },
    { name: "NAS Patuxent River", slug: "nas-patuxent-river" },
    { name: "NAS Pensacola", slug: "nas-pensacola" },
    { name: "NAS Whidbey Island", slug: "nas-whidbey-island" },
    { name: "NAB Coronado", slug: "nab-coronado" },
    { name: "NAVSTA Norfolk", slug: "navsta-norfolk" },
    { name: "NAVSTA Great Lakes", slug: "navsta-great-lakes" },
    { name: "NSB Kings Bay", slug: "nsb-kings-bay" },
    { name: "NSB New London", slug: "nsb-new-london" },
  ],
  "Space Force": [
    { name: "Buckley SFB", slug: "buckley-sfb" },
    { name: "Los Angeles AFB", slug: "los-angeles-afb" },
    { name: "Patrick SFB", slug: "patrick-sfb" },
    { name: "Peterson SFB", slug: "peterson-sfb" },
    { name: "Schriever SFB", slug: "schriever-sfb" },
    { name: "Vandenberg SFB", slug: "vandenberg-sfb" },
  ],
};

export default function Header() {
  const [installationsOpen, setInstallationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileInstallOpen, setMobileInstallOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setInstallationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header style={{ backgroundColor: "#111827", borderBottom: "1px solid #1f2937", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <div style={{ backgroundColor: "#f5c518", borderRadius: "6px", padding: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Shield size={20} color="#0a0f1e" />
            </div>
            <div>
              <span style={{ color: "#f5c518", fontWeight: 700, fontSize: "1.125rem", letterSpacing: "0.05em" }}>ZACK TARBET</span>
              <div style={{ color: "#6b7280", fontSize: "0.65rem", letterSpacing: "0.1em", marginTop: "-2px" }}>PCS & VA HOME LOANS</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden md:flex">
            {/* Installations Dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button
                onClick={() => setInstallationsOpen(!installationsOpen)}
                style={{
                  display: "flex", alignItems: "center", gap: "0.25rem",
                  color: installationsOpen ? "#f5c518" : "#d1d5db",
                  backgroundColor: "transparent", border: "none", cursor: "pointer",
                  padding: "0.5rem 0.75rem", borderRadius: "6px", fontSize: "0.875rem",
                  fontWeight: 600, letterSpacing: "0.05em", transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f5c518")}
                onMouseLeave={e => (e.currentTarget.style.color = installationsOpen ? "#f5c518" : "#d1d5db")}
              >
                INSTALLATIONS
                <ChevronDown size={16} style={{ transform: installationsOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
              </button>

              {installationsOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 8px)", left: "50%",
                  transform: "translateX(-50%)", backgroundColor: "#111827",
                  border: "1px solid #1f2937", borderRadius: "8px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)", padding: "1.5rem",
                  display: "grid", gridTemplateColumns: "repeat(7, minmax(160px, 1fr))",
                  gap: "1.5rem", width: "max-content", maxWidth: "calc(100vw - 3rem)",
                }}>
                  {branches.map(branch => (
                    <div key={branch}>
                      <Link
                        href={`/installations?branch=${encodeURIComponent(branch)}`}
                        style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", display: "block", marginBottom: "0.75rem", textDecoration: "none" }}
                        onClick={() => setInstallationsOpen(false)}
                      >
                        {branch.toUpperCase()}
                      </Link>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        {(branchBases[branch] || []).slice(0, 12).map(base => (
                          <li key={base.slug}>
                            <Link
                              href={`/installations/${base.slug}`}
                              style={{ color: "#9ca3af", fontSize: "0.8rem", textDecoration: "none", display: "block", transition: "color 0.15s" }}
                              onClick={() => setInstallationsOpen(false)}
                              onMouseEnter={e => (e.currentTarget.style.color = "#f1f5f9")}
                              onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
                            >
                              {base.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={`/installations?branch=${encodeURIComponent(branch)}`}
                            style={{ color: "#f5c518", fontSize: "0.75rem", textDecoration: "none", display: "block", marginTop: "0.25rem" }}
                            onClick={() => setInstallationsOpen(false)}
                          >
                            View all →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: "PCS RESOURCES", href: "/pcs-resources" },
              { label: "VA HOME LOANS", href: "/va-home-loans" },
              { label: "CONTACT", href: "/contact" },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: "#d1d5db", padding: "0.5rem 0.75rem", borderRadius: "6px", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f5c518")}
                onMouseLeave={e => (e.currentTarget.style.color = "#d1d5db")}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              style={{
                backgroundColor: "#f5c518", color: "#0a0f1e", padding: "0.5rem 1.25rem",
                borderRadius: "6px", fontSize: "0.875rem", fontWeight: 700,
                letterSpacing: "0.05em", textDecoration: "none", marginLeft: "0.5rem",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d4a800")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f5c518")}
            >
              GET PRE-APPROVED
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: "#d1d5db", padding: "0.5rem" }}
            className="md:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#111827", borderTop: "1px solid #1f2937", padding: "1rem 1.5rem" }} className="md:hidden">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <button
              onClick={() => setMobileInstallOpen(!mobileInstallOpen)}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#d1d5db", backgroundColor: "transparent", border: "none", cursor: "pointer", padding: "0.75rem 0", fontSize: "0.875rem", fontWeight: 600, borderBottom: "1px solid #1f2937", width: "100%" }}
            >
              INSTALLATIONS
              <ChevronDown size={16} style={{ transform: mobileInstallOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>
            {mobileInstallOpen && (
              <div style={{ paddingLeft: "1rem", paddingBottom: "0.5rem" }}>
                {branches.map(branch => (
                  <div key={branch} style={{ marginBottom: "0.75rem" }}>
                    <Link href={`/installations?branch=${encodeURIComponent(branch)}`} style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, textDecoration: "none", display: "block", marginBottom: "0.25rem" }} onClick={() => setMobileOpen(false)}>
                      {branch}
                    </Link>
                  </div>
                ))}
              </div>
            )}
            {[
              { label: "PCS RESOURCES", href: "/pcs-resources" },
              { label: "VA HOME LOANS", href: "/va-home-loans" },
              { label: "CONTACT", href: "/contact" },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: "#d1d5db", padding: "0.75rem 0", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", display: "block", borderBottom: "1px solid #1f2937" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{ backgroundColor: "#f5c518", color: "#0a0f1e", padding: "0.75rem 1.25rem", borderRadius: "6px", fontSize: "0.875rem", fontWeight: 700, textDecoration: "none", textAlign: "center", display: "block", marginTop: "0.75rem" }}
              onClick={() => setMobileOpen(false)}
            >
              GET PRE-APPROVED
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
