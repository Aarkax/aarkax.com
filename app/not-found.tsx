import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { primaryCta } from "@/lib/site-data";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-shell min-h-screen pt-28 text-ivory">
        <section className="container-padded flex min-h-[62vh] items-center py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-amber">404</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-ivory">
              This page is not part of the current architecture.
            </h1>
            <p className="mt-5 text-base leading-8 text-ivory/70">
              The route may have moved, or it may be a future page that is not exposed until the content is ready.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex h-12 items-center justify-center rounded-lg bg-amber px-6 text-sm font-semibold text-navy" href="/">
                Return home
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded-lg border border-ivory/20 px-6 text-sm font-semibold text-ivory"
                href={primaryCta.href}
              >
                {primaryCta.label}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
