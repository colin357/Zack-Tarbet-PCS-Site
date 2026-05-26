"use client";

import dynamic from "next/dynamic";
import { type Base } from "@/data/bases";

const BaseMap = dynamic(() => import("@/components/home/BaseMap"), {
  ssr: false,
  loading: () => (
    <div style={{ backgroundColor: "#060c18", borderRadius: "12px", border: "1px solid #1f2937", height: "440px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ color: "#374151", fontSize: "0.9rem" }}>Loading map...</span>
    </div>
  ),
});

export default function BaseMapSection({ bases }: { bases: Base[] }) {
  return <BaseMap bases={bases} />;
}
