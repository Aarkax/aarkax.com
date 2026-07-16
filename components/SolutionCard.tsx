import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Solution } from "@/lib/site-data";

export function SolutionCard({ solution, index = 0 }: { solution: Solution; index?: number }) {
  const Icon = solution.icon;

  return (
    <article
      id={solution.slug}
      style={{ transitionDelay: `${index * 25}ms` }}
      className="group rounded-lg border border-navy/10 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-green/30"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-ivory">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-amber/25 bg-amber/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
          Solution
        </span>
      </div>
      <h3 className="mt-7 text-xl font-semibold text-navy">{solution.title}</h3>
      <div className="mt-5 grid gap-4 text-sm leading-7 text-body">
        <p>
          <span className="font-semibold text-navy">Challenge:</span> {solution.challenge}
        </p>
        <p>
          <span className="font-semibold text-navy">Aarkax system:</span> {solution.system}
        </p>
        <p>
          <span className="font-semibold text-navy">Outcome:</span> {solution.outcome}
        </p>
      </div>
      <Link href={solution.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green">
        Discuss this pattern
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </article>
  );
}
