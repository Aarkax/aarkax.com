"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Database, GitBranch, ShieldCheck } from "lucide-react";
import { primaryCta, secondaryCta, trustSignals } from "@/lib/site-data";

const DataNetwork = dynamic(() => import("@/components/three/data-network").then((mod) => mod.DataNetwork), {
  ssr: false,
  loading: () => <div className="absolute inset-0 technical-grid opacity-25" aria-hidden="true" />
});

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-navy pb-16 pt-28 text-ivory sm:pt-32 lg:flex lg:items-center lg:pb-20">
      <div className="absolute inset-0 technical-grid opacity-55" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,23,42,0.98),rgba(6,23,42,0.72)_44%,rgba(6,23,42,0.96))]" aria-hidden="true" />
      <div className="absolute -right-36 top-1/4 h-96 w-96 rounded-full bg-amber/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-36 bottom-0 h-72 w-72 rounded-full bg-green/15 blur-3xl" aria-hidden="true" />

      <div className="container-padded relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-amber">
            Data · AI · automation · reliability
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-balance text-ivory sm:text-6xl xl:text-7xl">
            Build data and AI systems that work in production.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/70">
            Aarkax helps organizations modernize data platforms, automate complex operations, and deploy dependable AI
            from architecture to secure, observable production systems.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-amber px-8 text-base font-semibold text-ivory"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex h-14 items-center justify-center rounded-lg bg-amber px-8 text-base font-semibold text-ivory"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative min-h-[440px] overflow-hidden rounded-lg border border-ivory/15 bg-ivory/[0.045] shadow-soft sm:min-h-[520px]">
          <DataNetwork />
          <div className="absolute inset-0 technical-grid opacity-30" aria-hidden="true" />
          <div className="relative z-10 flex min-h-[440px] flex-col justify-between p-5 sm:min-h-[520px] sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">Intelligence core</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-ivory/60">
                  One visual system for sources, pipelines, controls, models, and operating workflows.
                </p>
              </div>
              <span className="rounded-full border border-green/30 bg-green px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                observable
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Sources", Database],
                ["Pipelines", GitBranch],
                ["Controls", ShieldCheck]
              ].map(([label, Icon]) => (
                <div key={label as string} className="rounded-lg border border-ivory/[0.12] bg-navy/70 p-4">
                  <Icon className="h-5 w-5 text-amber" />
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-ivory">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-2 border-y border-ivory/10 py-4 sm:grid-cols-5">
            {trustSignals.map((item) => (
              <div key={item} className="rounded-md px-2 py-1 text-sm font-medium text-ivory/60 sm:text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
