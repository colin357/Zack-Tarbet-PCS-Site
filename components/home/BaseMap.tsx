"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { type Base, type Branch, branchColors } from "@/data/bases";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface Props {
  bases: Base[];
}

export default function BaseMap({ bases }: Props) {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<{ base: Base; x: number; y: number } | null>(null);
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);

  const filteredBases = activeBranch
    ? bases.filter(b => b.branch === activeBranch)
    : bases;

  const handleMarkerClick = useCallback((base: Base) => {
    router.push(`/installations/${base.slug}`);
  }, [router]);

  const branchList: Branch[] = [
    "Air Force", "Army", "Coast Guard", "Joint", "Marine Corps", "Navy", "Space Force"
  ];

  return (
    <div>
      {/* Branch filter legend */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "0.5rem",
        justifyContent: "center", marginBottom: "1.5rem",
      }}>
        <button
          onClick={() => setActiveBranch(null)}
          style={{
            padding: "0.375rem 0.875rem", borderRadius: "9999px", fontSize: "0.75rem",
            fontWeight: 600, cursor: "pointer", border: "1px solid",
            borderColor: activeBranch === null ? "#f5c518" : "#374151",
            backgroundColor: activeBranch === null ? "rgba(245, 197, 24, 0.15)" : "transparent",
            color: activeBranch === null ? "#f5c518" : "#9ca3af",
            transition: "all 0.15s",
          }}
        >
          All Branches
        </button>
        {branchList.map(branch => (
          <button
            key={branch}
            onClick={() => setActiveBranch(activeBranch === branch ? null : branch)}
            style={{
              padding: "0.375rem 0.875rem", borderRadius: "9999px", fontSize: "0.75rem",
              fontWeight: 600, cursor: "pointer", border: "1px solid",
              borderColor: activeBranch === branch ? branchColors[branch] : "#374151",
              backgroundColor: activeBranch === branch ? `${branchColors[branch]}22` : "transparent",
              color: activeBranch === branch ? branchColors[branch] : "#9ca3af",
              transition: "all 0.15s",
              display: "flex", alignItems: "center", gap: "0.375rem",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: branchColors[branch], display: "inline-block" }} />
            {branch}
          </button>
        ))}
      </div>

      {/* Map */}
      <div style={{
        backgroundColor: "#060c18", borderRadius: "12px",
        border: "1px solid #1f2937", overflow: "hidden",
        position: "relative",
      }}>
        <ComposableMap
          projection="geoAlbersUsa"
          style={{ width: "100%", height: "auto" }}
          width={980}
          height={551}
        >
          <ZoomableGroup>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#0d1830"
                    stroke="#1f2937"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#111827", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {filteredBases.map(base => (
              <Marker
                key={base.slug}
                coordinates={[base.lng, base.lat]}
                onClick={() => handleMarkerClick(base)}
                onMouseEnter={(e) => {
                  const rect = (e.target as SVGElement).closest("svg")?.getBoundingClientRect();
                  setTooltip({ base, x: 0, y: 0 });
                }}
                onMouseLeave={() => setTooltip(null)}
              >
                <circle
                  r={4}
                  fill={branchColors[base.branch]}
                  stroke="#0a0f1e"
                  strokeWidth={1}
                  style={{ cursor: "pointer", opacity: 0.9 }}
                />
                <circle
                  r={8}
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>

        {/* Tooltip */}
        {tooltip && (
          <div
            style={{
              position: "absolute", bottom: "1rem", left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#111827", border: "1px solid #374151",
              borderRadius: "8px", padding: "0.625rem 1rem",
              pointerEvents: "none", zIndex: 10, whiteSpace: "nowrap",
            }}
          >
            <div style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.875rem" }}>{tooltip.base.name}</div>
            <div style={{ color: branchColors[tooltip.base.branch], fontSize: "0.75rem", marginTop: "0.125rem" }}>
              {tooltip.base.branch} · {tooltip.base.city}, {tooltip.base.state}
            </div>
          </div>
        )}
      </div>

      <p style={{ textAlign: "center", color: "#4b5563", fontSize: "0.75rem", marginTop: "0.75rem" }}>
        Click any base to explore local housing, activities, and VA loan opportunities
      </p>
    </div>
  );
}
