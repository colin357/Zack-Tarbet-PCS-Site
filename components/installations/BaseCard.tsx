"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { type Base, branchColors } from "@/data/bases";

interface Props {
  base: Base;
  light?: boolean;
}

export default function BaseCard({ base, light = false }: Props) {
  const color = branchColors[base.branch];

  return (
    <Link href={`/installations/${base.slug}`} style={{ textDecoration: "none" }}>
      <div style={{
        backgroundColor: light ? "#ffffff" : "#111827",
        border: light ? "1px solid #e2e8f0" : "1px solid #1f2937",
        borderRadius: "10px",
        padding: "1.25rem",
        cursor: "pointer",
        height: "100%",
        transition: "box-shadow 0.2s",
        boxShadow: light ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = light
            ? "0 8px 24px rgba(0,0,0,0.1)"
            : "0 0 0 1px #374151";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = light
            ? "0 1px 3px rgba(0,0,0,0.06)"
            : "none";
        }}
      >
        {/* Branch color bar */}
        <div style={{
          height: "3px",
          width: "32px",
          backgroundColor: color,
          borderRadius: "9999px",
          marginBottom: "0.875rem",
        }} />

        <h3 style={{
          color: light ? "#0f172a" : "#f1f5f9",
          fontWeight: 700,
          fontSize: "0.9375rem",
          margin: "0 0 0.3rem",
          lineHeight: 1.3,
        }}>
          {base.name}
        </h3>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
          color: light ? "#64748b" : "#6b7280",
          fontSize: "0.8rem",
          marginBottom: "0.75rem",
        }}>
          <MapPin size={11} />
          {base.city}, {base.state}
          <span style={{ color: light ? "#cbd5e1" : "#374151", marginLeft: "0.25rem" }}>·</span>
          <span style={{ color: color, fontWeight: 600, fontSize: "0.72rem" }}>{base.branch}</span>
        </div>

        <p style={{
          color: light ? "#64748b" : "#6b7280",
          fontSize: "0.8rem",
          lineHeight: 1.55,
          margin: 0,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {base.description}
        </p>
      </div>
    </Link>
  );
}
