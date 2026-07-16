"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { navItems, primaryCta } from "@/lib/site-data";
import { MegaMenu } from "@/components/MegaMenu";
import { MobileNav } from "@/components/MobileNav";
import { cn } from "@/lib/utils";

type MenuName = "What We Do" | "Solutions";

export function Header() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<MenuName | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
        <div
          onMouseLeave={() => setActiveMenu(null)}
          className={cn(
            "relative mx-auto flex h-16 max-w-7xl items-center justify-between rounded-lg border px-4 backdrop-blur-xl transition duration-300 sm:px-5",
            scrolled
              ? "border-ivory/15 bg-navy/[0.92] shadow-soft"
              : "border-ivory/[0.12] bg-navy/[0.72] shadow-none"
          )}
        >
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Aarkax home">
            <Image
              src="/images/brand/aarkax_primary_logo_horizontal.svg"
              alt="Aarkax"
              width={132}
              height={36}
              priority
              className="h-11 w-auto brightness-0 invert"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const canOpen = item.label === "What We Do" || item.label === "Solutions";
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onFocus={() => setActiveMenu(canOpen ? (item.label as MenuName) : null)}
                  onMouseEnter={() => setActiveMenu(canOpen ? (item.label as MenuName) : null)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-ivory/70 transition hover:bg-ivory/[0.08] hover:text-ivory focus-visible:outline-offset-2",
                    active && "bg-ivory/10 text-ivory"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={primaryCta.href}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-amber px-4 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-[#d8890d]"
            >
              {primaryCta.label}
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-ivory/15 bg-ivory/[0.08] text-ivory lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <AnimatePresence>
            <MegaMenu active={activeMenu} onClose={() => setActiveMenu(null)} />
          </AnimatePresence>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
