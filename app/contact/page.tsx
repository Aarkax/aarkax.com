import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss a data, AI, automation, or platform reliability challenge with Aarkax."
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Discuss a data, AI, automation, or reliability challenge."
      description="Share enough context for Aarkax to understand the current system, desired outcome, risk, and constraints. The first useful step may be an assessment, architecture review, pilot, or a simpler fix."
    >
      <section className="pb-20">
        <div className="container-padded grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-lg border border-navy/10 bg-white p-6">
            <h2 className="text-2xl font-semibold text-navy">What to include</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-body">
              <li>Current data sources, tools, workflows, and manual steps.</li>
              <li>The decision, automation, AI use case, or reliability problem you need to improve.</li>
              <li>Known security, privacy, integration, timeline, or stakeholder constraints.</li>
              <li>What a successful first phase would prove.</li>
            </ul>
            <div className="mt-8 rounded-lg border border-navy/10 bg-ivory p-4 text-sm leading-7 text-body">
              Prefer email? Write to{" "}
              <Link href={`mailto:${siteConfig.email}`} className="font-semibold text-green">
                {siteConfig.email}
              </Link>
              .
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
