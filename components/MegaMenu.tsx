"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { megaMenuGroups } from "@/lib/constants";

type MegaMenuProps = {
  active: "What We Do" | "Solutions" | null;
  onClose: () => void;
};

export function MegaMenu({ active, onClose }: MegaMenuProps) {
  const group = megaMenuGroups.find((item) => item.label === active);

  if (!group) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.18 }}
      className="absolute left-1/2 top-[calc(100%+0.7rem)] hidden w-[760px] -translate-x-1/2 rounded-lg border border-ivory/15 bg-navy/[0.96] p-4 shadow-soft backdrop-blur-xl lg:block"
    >
      <div className="grid grid-cols-[0.75fr_1.25fr] gap-4">
        <div className="rounded-lg border border-ivory/[0.12] bg-ivory/[0.06] p-5 text-ivory">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">{group.eyebrow}</p>
          <h3 className="mt-5 text-2xl font-semibold leading-tight text-ivory">{group.title}</h3>
          <p className="mt-4 text-sm leading-6 text-ivory/70">{group.description}</p>
          <Link
            href={group.href}
            onClick={onClose}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber"
          >
            View overview
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {group.items.map((item) => {
            const Icon = item.icon;
            const description = "description" in item ? item.description : item.outcome;
            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="rounded-lg border border-ivory/[0.12] bg-ivory/[0.05] p-4 transition hover:-translate-y-0.5 hover:border-amber/50 hover:bg-ivory/[0.08]"
              >
                <Icon className="h-5 w-5 text-amber" />
                <p className="mt-4 text-sm font-semibold text-ivory">{item.title}</p>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-ivory/60">{description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
