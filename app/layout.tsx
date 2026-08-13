import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aarkax — AI, Data & Cloud Engineering",
    template: "%s | Aarkax"
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Aarkax — AI, Data & Cloud Engineering",
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
    title: "Aarkax — AI, Data & Cloud Engineering",
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
  colorScheme: "dark",
  themeColor: "#0b0d13"
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
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
        <a className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white" href="#main-content">
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
