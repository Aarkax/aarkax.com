import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedGrid } from "@/components/site/AnimatedGrid";
import { CTASection } from "@/components/site/CTASection";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Eyebrow, CtaLink } from "@/components/site/primitives";
import { solutionItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Solutions — Aarkax",
  description:
    "Engineering solution patterns for data modernization, enterprise knowledge assistants, data observability, document processing, and AI operations."
};

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="relative pt-20">
        <section className="relative overflow-hidden pt-16 pb-20 md:py-28">
          <AnimatedGrid />
          <div className="relative container-page flex flex-col gap-6 max-w-3xl">
            <ScrollReveal>
              <Eyebrow>SOLUTIONS</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gradient sm:text-6xl leading-[1.05]">
                Production system patterns.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Repeatable outcomes built as adaptable starting points. Each solution is tailored to your infrastructure during architecture discovery.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="container-page pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.slug} delay={i * 80}>
                  <div className="glass-panel relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 h-full">
                    <div>
                      <div className="flex items-center justify-between border-b border-border pb-4">
                        <span className="label-mono">PATTERN 0{i + 1}</span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-foreground tracking-tight">{item.title}</h3>
                      <p className="mt-2 text-xs font-mono text-primary">{item.challenge}</p>
                      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{item.system}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs font-semibold text-foreground">{item.outcome}</span>
                      <CtaLink href="/contact" variant="ghost" arrow="right" className="text-xs px-2 py-1">
                        Discuss
                      </CtaLink>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
