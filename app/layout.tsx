import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aarkax | Data and AI systems that work in production",
    template: "%s | Aarkax"
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Aarkax | Data and AI systems that work in production",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Aarkax",
    type: "website",
    images: [
      {
        url: "/images/social/aarkax_open_graph_1200x630.png",
        width: 1200,
        height: 630,
        alt: "Aarkax logo and brand preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarkax | Data and AI systems that work in production",
    description: siteConfig.description,
    images: ["/images/social/aarkax_open_graph_1200x630.png"]
  },
  icons: {
    icon: "/images/brand/favicon.ico",
    apple: "/images/brand/apple-touch-icon.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: "#06172A"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  logo: `${siteConfig.url}/images/brand/aarkax_primary_logo_horizontal.svg`,
  sameAs: [siteConfig.linkedIn]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
