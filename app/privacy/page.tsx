import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Aarkax handles personal information submitted through this website."
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy Policy"
      description="This page describes the limited information collected through aarkax.com and should be reviewed before production launch with legal counsel."
    >
      <section className="pb-20">
        <div className="container-padded max-w-4xl rounded-lg border border-navy/10 bg-white p-6 text-sm leading-7 text-body">
          <h2 className="text-2xl font-semibold text-navy">Information collected</h2>
          <p className="mt-4">
            Aarkax collects information you choose to submit through the contact form, including name, work email,
            company, role, area of interest, timeline, budget context, and challenge description.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-navy">Purpose</h2>
          <p className="mt-4">
            Submitted information is used to review and respond to business inquiries. Do not submit confidential client
            data, credentials, production secrets, or regulated personal data through the website form.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-navy">Contact</h2>
          <p className="mt-4">
            Privacy questions can be sent to{" "}
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
