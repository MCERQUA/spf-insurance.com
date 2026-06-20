import type { Metadata } from "next";
import { headingFont, bodyFont, monoFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "SPF insurance",
    "spray polyurethane foam insurance",
    "SPF contractor insurance",
    "SPF GL insurance",
    "SPF pollution liability",
    "spray foam rig insurance",
    "SPF workers comp",
    "SPF commercial auto",
    "spray polyurethane foam contractor coverage",
    "SPF applicator insurance",
    "SPF isocyanate insurance",
    "SPF off ratio insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Precision insurance coverage for spray polyurethane foam contractors — SPF contractor GL, contractor pollution liability for isocyanate exposure, workers' comp, commercial auto, rig insurance, and umbrella. Technical coverage for technical work. All 50 states.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — SPF contractor insurance` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Precision insurance for SPF contractors — GL with isocyanate endorsements, CPL for MDI/TDI exposure, rig insurance, umbrella. All 50 states. 15-min quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "SPF Contractor General Liability Insurance",
      "Contractor Pollution Liability for Isocyanate Exposure",
      "Workers' Compensation for SPF Applicators",
      "Commercial Auto Insurance for Spray Rigs",
      "SPF Rig and Equipment Insurance",
      "Commercial Umbrella for SPF Contractors",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
