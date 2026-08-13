"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = ""
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const getInitial = () => {
    if (direction === "up") return { opacity: 0, y: 24 };
    if (direction === "left") return { opacity: 0, x: -32 };
    if (direction === "right") return { opacity: 0, x: 32 };
    return { opacity: 0 };
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
