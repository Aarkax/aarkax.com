import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { sitemapLinks } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapLinks
    .filter((link) => link.href !== "/sitemap")
    .map((link) => ({
      url: `${siteConfig.url}${link.href}`,
      lastModified: new Date(),
      changeFrequency: link.href === "/" ? "weekly" : "monthly",
      priority: link.href === "/" ? 1 : 0.7
    }));
}
