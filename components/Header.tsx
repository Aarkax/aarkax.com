"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaLink } from "@/components/site/primitives";

const links = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl py-3"
          : "border-b border-transparent py-5"
      )}
    >
      <nav className="container-page flex items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="group flex items-center gap-2.5">
          <span className="relative h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px_var(--primary)]" />
          <span className="font-mono text-[15px] font-bold tracking-[0.22em] text-foreground">AARKAX</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  active ? "text-foreground font-semibold" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <CtaLink href="/contact" arrow="diagonal" className="ml-4 px-5 py-2.5 text-xs">
            Let&apos;s Build
          </CtaLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/50 md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[60px] bottom-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="container-page flex flex-col gap-3 pt-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 text-2xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6">
            <CtaLink href="/contact" onClick={() => setOpen(false)} arrow="diagonal" className="w-full text-center">
              Let&apos;s Build
            </CtaLink>
          </div>
        </div>
      </div>
    </header>
  );
}
