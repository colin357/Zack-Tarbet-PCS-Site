import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Zack Tarbet | Military PCS & VA Home Loans",
  description:
    "Your guide to military PCS moves. Explore base information, local activities, and connect with a VA loan specialist to buy a home near your next duty station.",
  openGraph: {
    title: "Zack Tarbet | Military PCS & VA Home Loans",
    description:
      "Explore military installations, PCS resources, and get expert VA home loan assistance for your next move.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
