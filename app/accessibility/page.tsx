import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Aarkax accessibility statement and contact method."
};

export default function AccessibilityPage() {
  return (
    <PageShell
      eyebrow="Accessibility"
      title="Accessibility Statement"
      description="Aarkax aims for WCAG 2.2 AA alignment where reasonably possible across semantic structure, keyboard access, contrast, form labels, and reduced motion."
    >
      <section className="pb-20">
        <div className="container-padded max-w-4xl rounded-lg border border-navy/10 bg-white p-6 text-sm leading-7 text-body">
          <h2 className="text-2xl font-semibold text-navy">Implemented foundations</h2>
          <ul className="mt-4 grid gap-2">
            <li>Skip-to-content link and semantic page structure.</li>
            <li>Keyboard-accessible navigation, forms, links, and focus states.</li>
            <li>Reduced-motion support for animations and WebGL rendering.</li>
            <li>Text alternatives or textual equivalents for technical visuals.</li>
          </ul>
          <h2 className="mt-8 text-2xl font-semibold text-navy">Feedback</h2>
          <p className="mt-4">
            Accessibility issues can be sent to{" "}
            <a className="font-semibold text-green" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
