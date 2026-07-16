import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { sitemapLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "HTML Sitemap",
  description: "Public page index for aarkax.com."
};

export default function HtmlSitemapPage() {
  return (
    <PageShell
      eyebrow="Sitemap"
      title="HTML Sitemap"
      description="A clear index of the current production-visible Aarkax website pages."
    >
      <section className="pb-20">
        <div className="container-padded grid gap-3 rounded-lg border border-navy/10 bg-white p-6">
          {sitemapLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-green hover:text-navy">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
