import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, absoluteUrl, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact a VA Loan Specialist",
  description:
    "Get in touch with Heroes Home Network for VA loan pre-approval and PCS home-buying help. Serving military families in all 50 states.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact a VA Loan Specialist | Heroes Home Network",
    description:
      "Reach out for VA loan pre-approval and PCS home-buying help — fast, military-friendly, all 50 states.",
    url: "/contact",
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Heroes Home Network",
  url: absoluteUrl("/contact"),
  about: { "@id": absoluteUrl("/#organization") },
  mainEntity: {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE.name,
    telephone: SITE.phone,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          contactSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
