import { CtaLink } from "./primitives";

export function CTASection() {
  return (
    <section className="container-page py-20 md:py-32">
      <div className="glass-panel relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
        {/* Subtle grid background overlay */}
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="text-3xl font-semibold tracking-tight text-gradient sm:text-4xl md:text-5xl leading-tight">
            Have a complex problem worth solving?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
            Tell us what you&apos;re building. We&apos;ll help you turn the problem into a production-ready system.
          </p>
          <div className="mt-4">
            <CtaLink href="/contact" variant="primary" arrow="right" className="px-8 py-3.5 text-base">
              Start a Conversation
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
