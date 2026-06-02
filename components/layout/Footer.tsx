import Link from "next/link";
import { Shield, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#060c18", borderTop: "1px solid #1f2937", color: "#9ca3af" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2.5rem" }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "1rem" }}>
              <div style={{ backgroundColor: "#f5c518", borderRadius: "6px", padding: "6px" }}>
                <Shield size={18} color="#0a0f1e" />
              </div>
              <div>
                <span style={{ color: "#f5c518", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.05em" }}>HEROES HOME NETWORK</span>
                <div style={{ color: "#6b7280", fontSize: "0.65rem", letterSpacing: "0.1em" }}>PCS & VA HOME LOANS</div>
              </div>
            </Link>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.6, maxWidth: "260px" }}>
              Helping military members navigate PCS moves and secure VA home loans since day one. Serving all 50 states.
            </p>
            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="tel:+13037287690" style={{ color: "#9ca3af", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
                <Phone size={14} color="#f5c518" /> (303) 728-7690
              </a>
            </div>
          </div>

          {/* Installations */}
          <div>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.08em", marginBottom: "1rem" }}>INSTALLATIONS</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "Air Force Bases", href: "/installations?branch=Air+Force" },
                { label: "Army Posts", href: "/installations?branch=Army" },
                { label: "Marine Corps Bases", href: "/installations?branch=Marine+Corps" },
                { label: "Navy Stations", href: "/installations?branch=Navy" },
                { label: "Coast Guard Bases", href: "/installations?branch=Coast+Guard" },
                { label: "Joint Bases", href: "/installations?branch=Joint" },
                { label: "Space Force Bases", href: "/installations?branch=Space+Force" },
                { label: "All Installations", href: "/installations" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: "#9ca3af", textDecoration: "none", fontSize: "0.875rem" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.08em", marginBottom: "1rem" }}>RESOURCES</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "PCS Resources", href: "/pcs-resources" },
                { label: "VA Home Loan Guide", href: "/va-home-loans" },
                { label: "BAH Calculator", href: "/pcs-resources#bah" },
                { label: "PCS Checklist", href: "/pcs-resources#checklist" },
                { label: "Housing on Base", href: "/pcs-resources#housing" },
                { label: "Moving Tips", href: "/pcs-resources#moving" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: "#9ca3af", textDecoration: "none", fontSize: "0.875rem" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* VA Loans */}
          <div>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.08em", marginBottom: "1rem" }}>VA HOME LOANS</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "VA Loan Benefits", href: "/va-home-loans#benefits" },
                { label: "Eligibility Requirements", href: "/va-home-loans#eligibility" },
                { label: "How It Works", href: "/va-home-loans#process" },
                { label: "Get Pre-Approved", href: "/contact" },
                { label: "First-Time Homebuyer", href: "/va-home-loans#first-time" },
                { label: "Contact Zack", href: "/contact" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: "#9ca3af", textDecoration: "none", fontSize: "0.875rem" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1f2937", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", fontSize: "0.8rem" }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Heroes Home Network. NMLS# 2040562. Licensed VA Loan Specialist.
          </p>
          <p style={{ margin: 0 }}>
            Equal Housing Lender. Not affiliated with the U.S. Department of Veterans Affairs.
          </p>
        </div>
      </div>
    </footer>
  );
}
