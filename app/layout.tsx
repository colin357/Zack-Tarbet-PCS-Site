import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { SITE, organizationSchema, websiteSchema } from "@/data/site";

const TITLE = "Heroes Home Network | Military PCS & VA Home Loans";

export const metadata: Metadata = {
  // Makes every relative canonical/OG URL across the site resolve absolutely.
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    // Page titles render as "<Page> | Heroes Home Network".
    template: "%s | Heroes Home Network",
  },
  description:
    "Your guide to military PCS moves. Explore base information, local activities, and connect with a VA loan specialist to buy a home near your next duty station.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  keywords: [
    "military PCS",
    "PCS move",
    "VA home loans",
    "military bases",
    "duty station housing",
    "BAH",
    "veteran home buying",
    "military relocation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description:
      "Explore military installations, PCS resources, and get expert VA home loan assistance for your next move.",
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [{ url: SITE.ogImage, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Military PCS guide, base profiles, and VA home loan help for your next move.",
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  category: "finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Site-wide entities: brand (Organization/FinancialService) + WebSite. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
