import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie and tracking status for aarkax.com."
};

export default function CookiesPage() {
  return (
    <PageShell
      eyebrow="Cookies"
      title="Cookie Policy"
      description="The current codebase does not include a cookie banner, analytics script, or advertising tracker. Update this page if those tools are added."
    >
      <section className="pb-20">
        <div className="container-padded max-w-4xl rounded-lg border border-navy/10 bg-white p-6 text-sm leading-7 text-body">
          <h2 className="text-2xl font-semibold text-navy">Current cookie use</h2>
          <p className="mt-4">
            At launch baseline, aarkax.com is designed as a static-first marketing website with a contact form. No
            non-essential analytics, advertising, or personalization cookies are configured in the repository.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-navy">Future analytics</h2>
          <p className="mt-4">
            If analytics, experimentation, embedded media, or third-party tools are added, this page and any required
            consent controls should be updated before production use.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-navy">Contact</h2>
          <p className="mt-4">
            Cookie questions can be sent to{" "}
            <a className="font-semibold text-green" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
