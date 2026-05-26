"use client";

import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import { type Base, branchColors } from "@/data/bases";

interface Props {
  base: Base;
}

export default function BaseCard({ base }: Props) {
  return (
    <Link
      href={`/installations/${base.slug}`}
      style={{ textDecoration: "none" }}
    >
      <div style={{
        backgroundColor: "#111827", border: "1px solid #1f2937",
        borderRadius: "10px", padding: "1.25rem",
        transition: "border-color 0.2s, transform 0.2s",
        cursor: "pointer", height: "100%",
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "#374151";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "#1f2937";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
          <span style={{
            backgroundColor: `${branchColors[base.branch]}22`,
            color: branchColors[base.branch],
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em",
            padding: "0.25rem 0.625rem", borderRadius: "9999px",
            border: `1px solid ${branchColors[base.branch]}44`,
          }}>
            {base.branch.toUpperCase()}
          </span>
          <ExternalLink size={14} color="#374151" />
        </div>

        <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.9375rem", margin: "0 0 0.375rem", lineHeight: 1.3 }}>
          {base.name}
        </h3>

        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#6b7280", fontSize: "0.8rem", marginBottom: "0.75rem" }}>
          <MapPin size={12} />
          {base.city}, {base.state}
        </div>

        <p style={{ color: "#6b7280", fontSize: "0.8rem", lineHeight: 1.5, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {base.description}
        </p>
      </div>
    </Link>
  );
}
