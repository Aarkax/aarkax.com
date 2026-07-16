import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { insights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical notes and architecture thinking for reliable data systems, production AI, enterprise automation, and platform performance."
};

export default function InsightsPage() {
  return (
    <PageShell
      eyebrow="Insights"
      title="Practical thinking for data, AI, automation, and reliability leaders."
      description="Insights are structured around real practitioner questions and should include diagrams, trade-offs, constraints, and review dates when published as full articles."
    >
      <section className="pb-20">
        <div className="container-padded">
          <div className="grid gap-8">
            {insights.map((insight) => (
              <article
                id={insight.href.split("#")[1]}
                key={insight.title}
                className="grid gap-5 border-t border-navy/15 py-8 lg:grid-cols-[0.35fr_1fr_auto] lg:items-start"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">{insight.pillar}</p>
                  <p className="mt-3 text-xs text-body">{insight.readTime}</p>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold leading-tight text-navy">{insight.title}</h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-body">{insight.excerpt}</p>
                </div>
                <Link href={insight.href} className="inline-flex items-center gap-2 text-sm font-semibold text-green">
                  Topic anchor
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
