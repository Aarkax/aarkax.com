"use client";

import { motion } from "framer-motion";
import { architectureLayers, technicalCapabilities } from "@/lib/site-data";

export function TechnicalArchitecture() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        {technicalCapabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <motion.div
              key={capability.title}
              initial={{ y: 14, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.38 }}
              className="rounded-lg border border-ivory/[0.12] bg-ivory/[0.055] p-5"
            >
              <Icon className="h-5 w-5 text-amber" />
              <p className="mt-5 text-sm font-semibold text-ivory">{capability.title}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-lg border border-ivory/[0.12] bg-navy p-5">
        <div className="absolute inset-0 technical-grid opacity-35" aria-hidden="true" />
        <div className="relative">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">Interactive architecture map</p>
            <span className="w-fit rounded-full bg-green px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ivory">
              Governed flow
            </span>
          </div>
          <div className="grid gap-3">
            {architectureLayers.map((layer, index) => (
              <motion.article
                key={layer.title}
                initial={{ x: -12, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                className="grid gap-3 rounded-lg border border-ivory/[0.12] bg-ivory/[0.06] p-4 sm:grid-cols-[44px_0.42fr_1fr] sm:items-start"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-amber text-sm font-semibold text-navy">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-ivory">{layer.title}</h3>
                <p className="text-sm leading-6 text-ivory/60">{layer.description}</p>
              </motion.article>
            ))}
          </div>
          <p className="mt-5 rounded-lg border border-amber/25 bg-amber/10 p-4 text-sm leading-7 text-ivory">
            Text equivalent: Aarkax connects source data to ingestion, storage, intelligence, workflow interfaces,
            governance, and monitoring so production systems remain traceable and operable.
          </p>
        </div>
      </div>
    </div>
  );
}
