import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-green/15 bg-green/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-green",
        className
      )}
      {...props}
    />
  );
}
