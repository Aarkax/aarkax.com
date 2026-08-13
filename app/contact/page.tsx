import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedGrid } from "@/components/site/AnimatedGrid";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Eyebrow } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Contact — Aarkax",
  description:
    "Discuss an AI, data engineering, cloud, or automation challenge with Aarkax."
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="relative pt-20">
        <section className="relative overflow-hidden pt-16 pb-20 md:py-28">
          <AnimatedGrid />
          <div className="relative container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <ScrollReveal className="flex flex-col gap-6">
              <Eyebrow>CONTACT</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-gradient sm:text-6xl leading-[1.05]">
                Let&apos;s build something fast and reliable.
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Share details about your challenge, current stack, and desired goals. We&apos;ll schedule a conversation to discuss the technical architecture and delivery path.
              </p>

              <div className="glass-panel rounded-2xl p-6 space-y-4">
                <h3 className="label-mono">What to include</h3>
                <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Current data sources, cloud infrastructure, and manual workflows</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>The AI agent, data platform, or automation problem to solve</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Known timeline, security, or technology constraints</span>
                  </li>
                </ul>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Prefer direct email? Reach out at{" "}
                    <Link href="mailto:hello@aarkax.com" className="text-foreground underline hover:text-primary">
                      hello@aarkax.com
                    </Link>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
