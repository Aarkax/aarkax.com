import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { companyPrinciples, differentiators } from "@/lib/site-data";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Aarkax is an engineering-first data and AI systems company focused on production readiness, transparent delivery, and reliable operations."
};

export default function CompanyPage() {
  return (
    <PageShell
      eyebrow="Company"
      title="Aarkax exists to make advanced data and AI systems practical and dependable."
      description="The company focuses on measurable operational outcomes rather than experimental technology for its own sake."
    >
      <section className="pb-20">
        <div className="container-padded grid gap-5 lg:grid-cols-2">
          {companyPrinciples.map((item) => (
            <article key={item.title} className="rounded-lg border border-navy/10 bg-white p-6">
              <h2 className="text-2xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-body">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 text-ivory sm:py-24">
        <div className="container-padded">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-amber">Positioning</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ivory sm:text-4xl">
              Engineering-first, vendor-neutral, production-focused.
            </h2>
            <p className="mt-5 text-base leading-8 text-ivory/70">
              Aarkax is currently best represented through transparent methods, reference builds, technical writing, and
              clear delivery artefacts. Client logos, metrics, awards, and partnerships should only be published when
              they are verified and approved.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {differentiators.map((item) => (
              <article key={item.title} className="rounded-lg border border-ivory/[0.12] bg-ivory/[0.055] p-6">
                <h3 className="text-xl font-semibold text-ivory">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ivory/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-20">
        <div className="container-padded rounded-lg border border-navy/10 bg-white p-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">Operating identity</p>
          <h2 className="mt-4 text-2xl font-semibold text-navy">{siteConfig.legalName}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-body">
            Public company details should stay accurate and reviewed. Add founder, leadership, hiring, and careers
            content only when approved information is available.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
