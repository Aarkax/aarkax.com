import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PageShell } from "@/components/PageShell";
import { evidenceItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Aarkax reference builds and technical demonstrations for data reliability, production AI, and enterprise automation."
};

export default function WorkPage() {
  return (
    <PageShell
      eyebrow="Work"
      title="Reference builds and technical demonstrations, clearly labelled."
      description="Until approved client stories are available, Aarkax uses reference builds to demonstrate architecture, implementation thinking, constraints, and trade-offs without inventing proof."
    >
      <section className="pb-20">
        <div className="container-padded grid gap-5 lg:grid-cols-3">
          {evidenceItems.map((item) => (
            <CaseStudyCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
