import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedGrid } from "@/components/site/AnimatedGrid";
import { CTASection } from "@/components/site/CTASection";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Eyebrow } from "@/components/site/primitives";
import { insights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights — Aarkax Technical Notes",
  description:
    "Technical notes and architecture thinking for reliable data systems, production AI, and automation."
};

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="relative pt-20">
        <section className="relative overflow-hidden pt-16 pb-20 md:py-28">
          <AnimatedGrid />
          <div className="relative container-page flex flex-col gap-6 max-w-3xl">
            <ScrollReveal>
              <Eyebrow>INSIGHTS</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gradient sm:text-6xl leading-[1.05]">
                Engineering notes & research.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Practical views on building dependable data platforms, evaluating AI agents, and scaling enterprise systems.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="container-page pb-20 space-y-6">
          {insights.map((insight, i) => (
            <ScrollReveal key={insight.title} delay={i * 90}>
              <div className="glass-panel relative rounded-2xl p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="label-mono text-primary">{insight.pillar}</span>
                    <span className="text-xs font-mono text-muted-foreground">• {insight.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground tracking-tight">{insight.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{insight.excerpt}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
