import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCS to Fort Carson, Colorado Springs",
  description:
    "PCSing to Fort Carson? Get local neighborhood, housing, and VA home loan help for Colorado Springs from Heroes Home Network — $0 down, fast closings.",
  alternates: { canonical: "/pcs/fort-carson" },
  openGraph: {
    title: "PCS to Fort Carson, Colorado Springs | Heroes Home Network",
    description:
      "Local Fort Carson PCS, housing, and VA home loan help for Colorado Springs — $0 down, fast closings.",
    url: "/pcs/fort-carson",
    type: "website",
  },
};

export default function FortCarsonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
