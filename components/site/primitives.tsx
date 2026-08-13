import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1 text-[11px] font-mono tracking-widest text-muted-foreground uppercase backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("flex flex-col gap-4 max-w-2xl", align === "center" && "mx-auto text-center items-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-gradient sm:text-4xl lg:text-5xl leading-[1.08]">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  arrow = "right",
  className,
  onClick
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  arrow?: "right" | "diagonal" | "down" | "none";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_24px_-4px_rgba(59,130,246,0.5)] hover:shadow-[0_0_32px_-2px_rgba(59,130,246,0.7)]",
        variant === "outline" &&
          "border border-border bg-surface/60 text-foreground hover:border-primary/50 hover:bg-surface",
        variant === "ghost" && "text-foreground hover:text-primary",
        className
      )}
    >
      {children}
      {arrow === "right" && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
      {arrow === "diagonal" && <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
      {arrow === "down" && <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />}
    </Link>
  );
}
