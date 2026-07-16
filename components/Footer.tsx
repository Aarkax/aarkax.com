import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { footerLinks, primaryCta } from "@/lib/site-data";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="container-padded py-14 sm:py-16">
        <div className="grid gap-10 border-b border-ivory/10 pb-10 lg:grid-cols-[1.05fr_1.2fr]">
          <div>
            <Image
              src="/images/brand/aarkax_primary_logo_horizontal.svg"
              alt="Aarkax"
              width={158}
              height={42}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-xl text-base leading-8 text-ivory/70">
              Aarkax builds dependable data, AI, automation, and reliability systems for organizations moving from
              architecture to secure, observable production.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-amber px-5 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-[#d8890d]"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-ivory/15 px-5 text-sm font-semibold text-ivory transition hover:bg-ivory/[0.08]"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">{group}</p>
                <div className="mt-4 grid gap-3">
                  {links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm text-ivory/60 transition hover:text-ivory">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={siteConfig.linkedIn} className="inline-flex items-center gap-1 hover:text-ivory">
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/sitemap" className="hover:text-ivory">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
