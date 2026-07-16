import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { EvidenceItem } from "@/lib/site-data";

export function CaseStudyCard({ item }: { item: EvidenceItem }) {
  const id = item.href.includes("#") ? item.href.split("#")[1] : undefined;

  return (
    <article
      id={id}
      className="group rounded-lg border border-navy/10 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-amber/40"
    >
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-green">{item.type}</p>
      <h3 className="mt-7 text-2xl font-semibold leading-tight text-navy">{item.title}</h3>
      <div className="mt-6 grid gap-4 text-sm leading-7 text-body">
        <p>
          <span className="font-semibold text-navy">Challenge:</span> {item.challenge}
        </p>
        <p>
          <span className="font-semibold text-navy">Approach:</span> {item.approach}
        </p>
        <p>
          <span className="font-semibold text-navy">Architecture:</span> {item.architecture}
        </p>
        <p>
          <span className="font-semibold text-navy">Outcome:</span> {item.outcome}
        </p>
      </div>
      <Link href={item.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber">
        View work
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </article>
  );
}
