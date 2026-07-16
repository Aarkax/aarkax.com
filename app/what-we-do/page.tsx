import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ServiceCard } from "@/components/ServiceCard";
import { TechnicalArchitecture } from "@/components/TechnicalArchitecture";
import { capabilityItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Aarkax capabilities across data engineering, AI systems, enterprise automation, and platform reliability."
};

export default function WhatWeDoPage() {
  return (
    <PageShell
      eyebrow="What We Do"
      title="Production-ready data, AI, automation, and platform reliability systems."
      description="Aarkax works across four connected capability areas. Each can begin as an assessment or pilot and scale into a reliable operating system."
    >
      <section className="pb-20">
        <div className="container-padded grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilityItems.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 text-ivory sm:py-24">
        <div className="container-padded">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-amber">Reference architecture</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ivory sm:text-4xl">
              Capabilities stay connected through a shared production architecture.
            </h2>
            <p className="mt-5 text-base leading-8 text-ivory/70">
              The same delivery model covers ingestion, modelling, AI systems, workflow integration, governance,
              observability, and improvement.
            </p>
          </div>
          <TechnicalArchitecture />
        </div>
      </section>

      <section className="pb-20 pt-20">
        <div className="container-padded grid gap-5 md:grid-cols-2">
          {capabilityItems.map((item) => (
            <article id={item.slug} key={item.slug} className="rounded-lg border border-navy/10 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">{item.title}</p>
              <h2 className="mt-5 text-2xl font-semibold text-navy">{item.outcome}</h2>
              <p className="mt-4 text-sm leading-7 text-body">{item.description}</p>
              <div className="mt-6 grid gap-2">
                {item.outputs.map((output) => (
                  <div key={output} className="rounded-md border border-navy/10 bg-ivory px-4 py-3 text-sm text-body">
                    {output}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
