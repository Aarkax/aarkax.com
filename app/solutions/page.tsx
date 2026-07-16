import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SolutionCard } from "@/components/SolutionCard";
import { solutionItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Solution patterns for data modernization, enterprise knowledge assistants, data observability, document processing, AI operations, and cloud cost intelligence."
};

export default function SolutionsPage() {
  return (
    <PageShell
      eyebrow="Solutions"
      title="Business outcomes built from dependable data and AI architecture."
      description="Aarkax packages repeatable outcomes as adaptable starting points, not fixed software claims. Each solution is shaped around your constraints during discovery."
    >
      <section className="pb-20">
        <div className="container-padded grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutionItems.map((solution, index) => (
            <SolutionCard key={solution.slug} solution={solution} index={index} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
