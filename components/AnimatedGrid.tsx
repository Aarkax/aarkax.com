import { cn } from "@/lib/utils";

export function AnimatedGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-dot-grid bg-[length:22px_22px] opacity-55 [mask-image:radial-gradient(circle_at_50%_20%,black,transparent_72%)]",
        className
      )}
    />
  );
}
