import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { SolutionCard } from "@/components/SolutionCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TechnicalArchitecture } from "@/components/TechnicalArchitecture";
import { CTASection } from "@/components/CTASection";
import {
  capabilityItems,
  differentiators,
  evidenceItems,
  homepageFrames,
  insights,
  primaryCta,
  problemFrames,
  processSteps,
  solutionItems
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Aarkax | Build data and AI systems that work in production",
  description:
    "Aarkax helps organizations modernize data platforms, automate complex operations, and deploy dependable AI from architecture to secure production."
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-shell">
        <Hero />

        <section className="bg-navy py-6 text-ivory" aria-label="Homepage story frames">
          <div className="container-padded overflow-x-auto">
            <ol className="flex min-w-max gap-3 border-y border-ivory/10 py-4">
              {homepageFrames.map((frame, index) => (
                <li key={frame} className="flex items-center gap-3 pr-4 text-xs text-ivory/60">
                  <span className="font-mono text-amber">{String(index + 1).padStart(2, "0")}</span>
                  {frame}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-y bg-navy text-ivory">
          <div className="container-padded">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <SectionHeader
                eyebrow="From complexity to clarity"
                title="Aarkax turns fragmented signals into governed systems."
                description="The work starts where most AI and automation initiatives get stuck: scattered data, manual decisions, missing controls, and unreliable operating infrastructure."
                tone="light"
              />
              <div className="grid gap-4 md:grid-cols-2">
                {problemFrames.map((problem, index) => (
                  <article key={problem.title} className="rounded-lg border border-ivory/[0.12] bg-ivory/[0.055] p-5">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <h3 className="text-xl font-semibold text-ivory">{problem.title}</h3>
                      <span className="font-mono text-sm text-amber">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="grid gap-3">
                      <div className="data-lane rounded-md border border-ivory/10 bg-navy/75 p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ivory/50">Raw input</p>
                        <p className="mt-2 text-sm leading-6 text-ivory/70">{problem.before}</p>
                      </div>
                      <div className="rounded-md border border-amber/25 bg-amber/10 p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-amber">Structured output</p>
                        <p className="mt-2 text-sm leading-6 text-ivory">{problem.after}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="section-y bg-ivory text-navy">
          <div className="container-padded">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader
                eyebrow="Core capabilities"
                title="An interconnected operating system for data, AI, automation, and reliability."
                description="Each capability can stand alone, but the highest leverage appears when architecture, implementation, governance, and operations are designed together."
              />
              <Link href="/what-we-do" className="inline-flex items-center gap-2 text-sm font-semibold text-green">
                Explore capabilities
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {capabilityItems.map((service, index) => (
                <ServiceCard key={service.slug} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-navy text-ivory">
          <div className="container-padded">
            <SectionHeader
              eyebrow="Parallel engineering workflow"
              title="Multiple workstreams advance together, then converge into a production system."
              description="Discovery, architecture, implementation, validation, integration, and improvement run as connected streams instead of a slow handoff chain."
              tone="light"
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-6">
              {processSteps.map((step, index) => (
                <article key={step.title} className="relative rounded-lg border border-ivory/[0.12] bg-ivory/[0.055] p-5">
                  <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-md bg-amber font-mono text-sm font-semibold text-navy">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-semibold text-ivory">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ivory/60">{step.description}</p>
                  <div className="mt-6 h-1 rounded-full bg-ivory/10">
                    <div className="h-1 rounded-full bg-amber" style={{ width: `${Math.max(18, (index + 1) * 16)}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="section-y bg-ivory text-navy">
          <div className="container-padded">
            <SectionHeader
              eyebrow="Solutions"
              title="Concrete patterns for teams that need trusted decisions and lower manual load."
              description="Each solution starts from a buyer problem, then maps the data, AI, workflow, security, and operating boundaries needed to make it dependable."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {solutionItems.map((solution, index) => (
                <SolutionCard key={solution.slug} solution={solution} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-y bg-navy text-ivory">
          <div className="container-padded">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <SectionHeader
                eyebrow="Selected work"
                title="Reference builds and technical demonstrations until client stories are approved."
                description="The PRD prohibits invented clients and unsupported metrics. These work items are clearly labelled as Aarkax reference builds and should be replaced or expanded with approved client proof when available."
                tone="light"
              />
              <div className="grid gap-5">
                {evidenceItems.map((item) => (
                  <CaseStudyCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="architecture" className="section-y bg-navy text-ivory">
          <div className="container-padded">
            <div className="mb-10">
              <SectionHeader
                eyebrow="Technology and architecture"
                title="Readable for executives. Specific enough for technical evaluators."
                description="Aarkax shows how sources, ingestion, processing, intelligence, applications, governance, and monitoring connect before implementation begins."
                tone="light"
              />
            </div>
            <TechnicalArchitecture />
          </div>
        </section>

        <section className="section-y bg-ivory text-navy">
          <div className="container-padded">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <SectionHeader
                eyebrow="Research and future systems"
                title="Research-led engineering without pretending experiments are finished products."
                description="Aarkax’s future-facing work should focus on dependable AI infrastructure, autonomous operations, advanced data processing, and reusable accelerators, with claims clearly separated from production proof."
              />
              <div className="grid gap-4 md:grid-cols-2">
                {differentiators.map((item) => (
                  <article key={item.title} className="rounded-lg border border-navy/10 bg-white p-6">
                    <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-body">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="section-y bg-ivory text-navy">
          <div className="container-padded">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader
                eyebrow="Insights"
                title="Technical notes for teams building reliable data and AI systems."
                description="The editorial surface is structured for future Sanity publishing, but launch content stays focused on Aarkax’s real capability areas."
              />
              <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-green">
                Read insights
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {insights.map((insight) => (
                <article key={insight.title} className="rounded-lg border-t border-navy/15 py-6">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">{insight.pillar}</p>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-navy">{insight.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-body">{insight.excerpt}</p>
                  <p className="mt-6 text-xs text-body">{insight.readTime}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-navy text-ivory">
          <div className="container-padded grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-amber">Final conversion frame</p>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-balance text-ivory sm:text-5xl">
                Let’s build the intelligence layer your business needs.
              </h2>
            </div>
            <div className="rounded-lg border border-ivory/[0.12] bg-ivory/[0.055] p-6">
              <p className="text-base leading-8 text-ivory/70">
                Start with a specific challenge. Aarkax will help frame the architecture, delivery path, risks, and
                whether a simpler system is the better answer.
              </p>
              <Link
                href={primaryCta.href}
                className="mt-7 inline-flex h-12 items-center justify-center rounded-lg bg-amber px-6 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-[#d8890d]"
              >
                {primaryCta.label}
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
