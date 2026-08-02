"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { capabilityItems, navItems, primaryCta } from "@/lib/site-data";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-[70] overflow-y-auto bg-navy text-ivory lg:hidden"
    >
      <div className="flex h-20 items-center justify-between px-5">
        <Link href="/" onClick={onClose} aria-label="Aarkax home">
          <Image
            src="/images/brand/aarkax_primary_logo_horizontal.svg"
            alt="Aarkax"
            width={132}
            height={36}
            className="h-11 w-auto brightness-0 invert"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-ivory/15 text-ivory"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="grid gap-2 px-5 pt-6" aria-label="Mobile primary navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="rounded-lg border border-ivory/[0.12] px-4 py-4 text-2xl font-semibold leading-tight text-ivory"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="px-5 py-8">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">Capability paths</p>
        <div className="mt-4 grid gap-2">
          {capabilityItems.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              onClick={onClose}
              className="rounded-lg bg-ivory/[0.06] px-4 py-3 text-sm font-medium text-ivory/80"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Link
          href={primaryCta.href}
          onClick={onClose}
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-lg bg-amber px-5 text-sm font-semibold text-ivory"
        >
          {primaryCta.label}
        </Link>
      </div>
    </motion.div>
  );
}
