import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Website terms for using aarkax.com."
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Terms and Conditions"
      description="These website terms are a practical launch baseline and should be reviewed before public release."
    >
      <section className="pb-20">
        <div className="container-padded max-w-4xl rounded-lg border border-navy/10 bg-white p-6 text-sm leading-7 text-body">
          <h2 className="text-2xl font-semibold text-navy">Use of the website</h2>
          <p className="mt-4">
            This website provides general information about {siteConfig.legalName}, its capabilities, reference builds,
            and contact options. Content is not a binding proposal, guarantee, or professional advice for a specific
            system without a separate written agreement.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-navy">Accuracy and claims</h2>
          <p className="mt-4">
            Aarkax aims to keep public claims accurate and verifiable. Reference builds and demonstrations are labelled
            separately from approved client outcomes.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-navy">Contact</h2>
          <p className="mt-4">
            Questions about these terms can be sent to{" "}
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
