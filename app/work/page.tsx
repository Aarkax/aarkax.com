import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedGrid } from "@/components/site/AnimatedGrid";
import { CTASection } from "@/components/site/CTASection";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Eyebrow, CtaLink } from "@/components/site/primitives";
import { evidenceItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Work — Aarkax Reference Builds",
  description:
    "Aarkax reference builds and technical demonstrations for data reliability, AI systems, and automation."
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="relative pt-20">
        <section className="relative overflow-hidden pt-16 pb-20 md:py-28">
          <AnimatedGrid />
          <div className="relative container-page flex flex-col gap-6 max-w-3xl">
            <ScrollReveal>
              <Eyebrow>SELECTED WORK</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gradient sm:text-6xl leading-[1.05]">
                Reference builds & architecture.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Technical demonstrations and reference builds showcasing system design, data boundaries, and production engineering.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="container-page pb-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {evidenceItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 90}>
                <div className="glass-panel relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 h-full">
                  <div>
                    <span className="label-mono">{item.type}</span>
                    <h3 className="mt-4 text-xl font-semibold text-foreground tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-xs text-primary font-mono">{item.challenge}</p>
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{item.approach}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="text-xs text-foreground font-mono">{item.outcome}</span>
                  </div>
                </div>
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
