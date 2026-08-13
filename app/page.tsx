import type { Metadata } from "next";
import { Bot, Cloud, Database, Workflow } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedGrid } from "@/components/site/AnimatedGrid";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { CTASection } from "@/components/site/CTASection";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaLink, Eyebrow, SectionHeading } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Aarkax — AI, Data & Cloud Engineering",
  description:
    "Aarkax builds AI agents, data platforms, cloud infrastructure and automation systems for modern businesses."
};

const services = [
  {
    index: "01",
    title: "AI Agent Development",
    description:
      "Intelligent agents that reason, use tools, access business data and execute real workflows end to end.",
    tags: ["LLMs", "RAG", "Tool Calling", "Voice AI", "Agentic Workflows"],
    icon: Bot,
    href: "/what-we-do#ai-agents"
  },
  {
    index: "02",
    title: "Data Engineering",
    description:
      "Reliable pipelines and data infrastructure that turn raw, scattered data into usable intelligence.",
    tags: ["Pipelines", "ETL/ELT", "APIs", "Warehouses", "Real-time"],
    icon: Database,
    href: "/what-we-do#data-engineering"
  },
  {
    index: "03",
    title: "Cloud Optimization",
    description:
      "Infrastructure built and tuned for performance, scale and cost — with automation from day one.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes", "IaC"],
    icon: Cloud,
    href: "/what-we-do#cloud-optimization"
  },
  {
    index: "04",
    title: "Automation Tools",
    description:
      "Custom software that removes repetitive operational work across teams, tools and systems.",
    tags: ["Workflows", "Internal Tools", "APIs", "Integrations"],
    icon: Workflow,
    href: "/what-we-do#automation-tools"
  }
];

const process = [
  { step: "Discover", copy: "Understand the business problem before writing code." },
  { step: "Architect", copy: "Design the technical system, data flow and boundaries." },
  { step: "Build", copy: "Engineer the product and the infrastructure around it." },
  { step: "Deploy", copy: "Ship reliable systems into production." },
  { step: "Optimize", copy: "Continuously improve performance, reliability and cost." }
];

const differentiators = [
  {
    title: "Built for Production",
    copy: "We don't stop at prototypes. We build systems designed to operate reliably under real load."
  },
  {
    title: "Engineering First",
    copy: "Strong software architecture and infrastructure fundamentals behind every solution."
  },
  {
    title: "AI-Native",
    copy: "We apply modern AI capabilities where they create measurable business value."
  },
  {
    title: "Lean & Fast",
    copy: "Small, focused engineering teams without unnecessary enterprise overhead."
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="relative pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 md:py-28">
          <AnimatedGrid />
          <div className="relative container-page grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <div>
                <Eyebrow>AI · DATA · CLOUD · AUTOMATION</Eyebrow>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-gradient sm:text-6xl lg:text-7xl leading-[0.98]">
                We build intelligent systems for businesses that want to move faster.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Aarkax engineers AI agents, data platforms, cloud infrastructure and automation
                systems that turn complex business workflows into scalable technology.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <CtaLink href="/contact" variant="primary" arrow="right">
                  Start a Project
                </CtaLink>
                <CtaLink href="#capabilities" variant="outline" arrow="down">
                  Explore Our Work
                </CtaLink>
              </div>
            </div>

            <div>
              <ArchitectureDiagram
                title="SYSTEM OVERVIEW"
                nodes={[
                  { label: "User / API", sub: "requests · events · voice" },
                  { label: "AI Agent", sub: "reasoning · tools · memory" },
                  { label: "Data Layer", sub: "RAG · warehouse · streams" },
                  { label: "Cloud Infrastructure", sub: "containers · autoscale · CI/CD" },
                  { label: "Automation", sub: "workflows executed reliably" }
                ]}
              />
            </div>
          </div>

          {/* Positioning strip */}
          <div className="relative mt-16 border-y border-border bg-surface/30">
            <div className="container-page flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
              <p className="label-mono">AI Engineering · Data Engineering · Cloud · Automation</p>
              <p className="text-xs text-muted-foreground">
                From idea to production — we engineer the systems that make modern businesses faster.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Section ("What We Do") */}
        <section id="capabilities" className="container-page scroll-mt-24 py-20 md:py-32">
          <ScrollReveal>
            <SectionHeading
              eyebrow="WHAT WE DO"
              title="Four capabilities, engineered deeply."
              description="A focused offering instead of a service catalogue — each capability supports the others."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <ScrollReveal key={service.index} delay={i * 90}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Process Section ("How We Build") */}
        <section className="relative border-y border-border bg-surface/20 py-20 md:py-32">
          <div className="container-page">
            <ScrollReveal>
              <SectionHeading eyebrow="HOW WE BUILD" title="A short path from problem to production." />
            </ScrollReveal>
            <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
              {process.map((item, i) => (
                <ScrollReveal
                  key={item.step}
                  delay={i * 100}
                  className="relative flex flex-col gap-3 bg-background p-6"
                >
                  <span className="label-mono">0{i + 1}</span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.step}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-px w-full bg-gradient-to-r from-primary/70 to-transparent"
                  />
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Architecture Visual */}
        <section className="container-page py-20 md:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left" className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="ARCHITECTURE"
                title="Engineering systems that work together."
                description="Agents are only useful when they're wired into real data, real infrastructure and real workflows. We design the whole stack, not a demo layer on top of it."
              />
              <div>
                <CtaLink href="/what-we-do" variant="outline" arrow="right">
                  See how we build
                </CtaLink>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ArchitectureDiagram
                title="PRODUCTION STACK"
                nodes={[
                  { label: "Business", sub: "outcomes & operations" },
                  { label: "Applications", sub: "products · internal tools" },
                  { label: "AI Agents", sub: "reasoning & execution" },
                  { label: "Data Layer", sub: "pipelines · storage · retrieval" },
                  { label: "Cloud Infrastructure", sub: "reliable, observable, cost-aware" }
                ]}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Why Aarkax */}
        <section className="container-page pb-12">
          <ScrollReveal>
            <SectionHeading eyebrow="WHY AARKAX" title="Small team. Production standards." />
          </ScrollReveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {differentiators.map((item, i) => (
              <ScrollReveal
                key={item.title}
                delay={i * 90}
                className="group bg-background p-8 transition-colors duration-500 hover:bg-surface/60"
              >
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
