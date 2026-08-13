import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedGrid } from "@/components/site/AnimatedGrid";
import { CTASection } from "@/components/site/CTASection";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Eyebrow, SectionHeading } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Company — Aarkax",
  description:
    "Aarkax is an engineering studio focused on production AI, data systems, cloud infrastructure, and automation."
};

const companyPrinciples = [
  {
    title: "Understand the system before prescribing technology",
    description: "Aarkax starts with business workflows, data realities, security constraints, people, and operating context."
  },
  {
    title: "Make architecture visible",
    description: "Buyers and engineering builders should see the decisions, trade-offs, dependencies, and outputs clearly."
  },
  {
    title: "Treat production as the standard",
    description: "Reliability, evaluation, security, observability, documentation, and operational ownership are part of every build."
  },
  {
    title: "Prefer useful systems over inflated claims",
    description: "We focus on clean software architecture, measurable speed, and dependable software rather than experimental demos."
  }
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

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="relative pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-20 md:py-28">
          <AnimatedGrid />
          <div className="relative container-page flex flex-col gap-6 max-w-3xl">
            <ScrollReveal>
              <Eyebrow>COMPANY</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gradient sm:text-6xl leading-[1.05]">
                Small team. Production standards.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Aarkax exists to make advanced data platforms, AI agents, cloud systems, and operational automation practical, dependable, and fast.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Principles */}
        <section className="container-page pb-20">
          <ScrollReveal>
            <SectionHeading eyebrow="OUR PRINCIPLES" title="Engineering values we build by." />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {companyPrinciples.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 90}>
                <div className="glass-panel relative rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-semibold text-foreground tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Positioning */}
        <section className="relative border-y border-border bg-surface/20 py-20 md:py-28">
          <div className="container-page">
            <ScrollReveal>
              <SectionHeading
                eyebrow="OUR METHOD"
                title="Engineering-first. Vendor-neutral. Production-focused."
                description="We take pride in building software systems with real depth, strong data boundaries, clean observability, and solid codebases."
              />
            </ScrollReveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <ScrollReveal
                  key={item.title}
                  delay={i * 90}
                  className="bg-background p-8 transition-colors hover:bg-surface/60"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
