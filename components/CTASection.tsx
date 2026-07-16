import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { primaryCta } from "@/lib/site-data";

export function CTASection() {
  return (
    <section className="bg-navy text-ivory">
      <div className="container-padded section-y">
        <div className="relative overflow-hidden rounded-lg border border-ivory/15 bg-ivory/[0.055] px-6 py-16 text-center sm:px-10 lg:py-20">
          <div className="absolute inset-0 technical-grid opacity-35" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-amber">Build the right system</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-balance text-ivory sm:text-5xl">
              Bring us the problem slowing your organization down.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ivory/70">
              Aarkax will help determine whether the right answer is a data foundation, an automation workflow, a
              production AI system, or a simpler architectural change.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-amber px-8 text-base font-semibold text-navy shadow-amber transition hover:-translate-y-0.5 hover:bg-[#d8890d]"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/what-we-do"
                className="inline-flex h-14 items-center justify-center rounded-lg border border-ivory/20 px-8 text-base font-semibold text-ivory transition hover:-translate-y-0.5 hover:bg-ivory/[0.08]"
              >
                Explore capabilities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
