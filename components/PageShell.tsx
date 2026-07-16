import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="light-shell pt-28">
        <section className="section-y pb-12">
          <div className="container-padded">
            <SectionHeader eyebrow={eyebrow} title={title} description={description} />
          </div>
        </section>
        {children}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
