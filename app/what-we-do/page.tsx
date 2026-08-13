import type { Metadata } from "next";
import { Bot, Cloud, Database, Workflow } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedGrid } from "@/components/site/AnimatedGrid";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { CTASection } from "@/components/site/CTASection";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Eyebrow, SectionHeading, CtaLink } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "What We Do — Aarkax Capabilities",
  description:
    "Aarkax builds AI agents, data engineering pipelines, cloud optimization, and automation systems."
};

const capabilities = [
  {
    id: "ai-agents",
    index: "01",
    icon: Bot,
    title: "AI Agent Development",
    subtitle: "Move from demos to intelligent production agents.",
    description:
      "We build autonomous agents that connect directly to business data, internal tools, and APIs. Designed with robust evaluation, permissions, tool calling, and human-in-the-loop workflows.",
    tags: ["LLMs", "RAG", "Tool Calling", "Voice AI", "Agentic Workflows"],
    points: [
      "Enterprise knowledge retrieval with strict permission boundary checks",
      "Multi-agent orchestration and task delegation",
      "Model evaluation pipelines, prompt testing, and cost control",
      "Real-time voice and conversational interfaces"
    ],
    outputs: ["Agent Architecture Design", "Evaluation Benchmark Suite", "RAG & Retrieval Layer", "Guardrails & Monitoring"]
  },
  {
    id: "data-engineering",
    index: "02",
    icon: Database,
    title: "Data Engineering",
    subtitle: "From fragmented pipelines to a dependable data platform.",
    description:
      "Modern data platforms built for analytics, real-time streaming, and AI readiness. We establish data contracts, semantic layers, lineaging, and automated quality controls.",
    tags: ["Pipelines", "ETL/ELT", "APIs", "Warehouses", "Real-time"],
    points: [
      "Batch and streaming ingestion pipelines",
      "Lakehouse and modern warehouse modelling",
      "Automated data freshness & schema drift detection",
      "Governed semantic layer for analytics and AI"
    ],
    outputs: ["Target Data Architecture", "Production Pipelines", "Quality & Freshness Controls", "Lineage & Governance"]
  },
  {
    id: "cloud-optimization",
    index: "03",
    icon: Cloud,
    title: "Cloud Optimization",
    subtitle: "Infrastructure tuned for scale, cost, and reliability.",
    description:
      "Cloud architecture and containerized platforms built with Infrastructure as Code. We optimize workload performance, reduce cloud spend, and implement zero-downtime deployment pipelines.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes", "IaC"],
    points: [
      "Infrastructure as Code (Terraform, Pulumi)",
      "Kubernetes & container orchestration",
      "Cloud cost intelligence and resource rightsizing",
      "CI/CD automation with security guardrails"
    ],
    outputs: ["IaC Codebase", "Kubernetes Cluster Architecture", "Cloud Cost Audit", "CI/CD Pipeline Setup"]
  },
  {
    id: "automation-tools",
    index: "04",
    icon: Workflow,
    title: "Automation Tools",
    subtitle: "Remove repetitive operational load across teams.",
    description:
      "Custom internal software and integration systems that automate complex document review, ticket triage, data synchronization, and operational workflows.",
    tags: ["Workflows", "Internal Tools", "APIs", "Integrations"],
    points: [
      "Intelligent document parsing and extraction",
      "Cross-system API integrations and webhooks",
      "Approval workflows and exception escalation",
      "Custom operational dashboards and tools"
    ],
    outputs: ["Process Map & Backlog", "Workflow Automation Code", "Custom Dashboard", "Runbooks & Support"]
  }
];

export default function WhatWeDoPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="relative pt-20">
        {/* Page Header */}
        <section className="relative overflow-hidden pt-16 pb-20 md:py-28">
          <AnimatedGrid />
          <div className="relative container-page flex flex-col gap-6 max-w-3xl">
            <ScrollReveal>
              <Eyebrow>WHAT WE DO</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gradient sm:text-6xl leading-[1.05]">
                Four capabilities, engineered deeply.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                A focused offering instead of a service catalogue — each capability reinforces the others to build production-grade technology.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Detailed Capabilities List */}
        <section className="container-page pb-20 space-y-16">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal key={cap.id} className="scroll-mt-28">
                <div id={cap.id} className="glass-panel relative rounded-3xl p-8 md:p-12">
                  <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:items-start">
                    <div>
                      <div className="flex items-center justify-between border-b border-border pb-6">
                        <span className="label-mono">CAPABILITY {cap.index}</span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h2 className="mt-6 text-2xl font-semibold text-foreground sm:text-3xl tracking-tight">
                        {cap.title}
                      </h2>
                      <p className="mt-2 font-mono text-xs text-primary">{cap.subtitle}</p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {cap.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8">
                        <CtaLink href="/contact" variant="primary" arrow="right" className="text-xs py-2.5 px-5">
                          Discuss {cap.title}
                        </CtaLink>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-2xl border border-border bg-background/60 p-6">
                        <h3 className="label-mono mb-4">Core Workstreams</h3>
                        <ul className="space-y-3">
                          {cap.points.map((point) => (
                            <li key={point} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-border bg-background/60 p-6">
                        <h3 className="label-mono mb-4">Deliverables & Outputs</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {cap.outputs.map((output) => (
                            <div key={output} className="rounded-lg border border-border/80 bg-surface/50 p-3 text-xs text-foreground font-mono">
                              {output}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
