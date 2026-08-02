import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, align = "left", tone = "dark", className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-amber">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl",
          tone === "light" ? "text-ivory" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-6 text-base leading-8 sm:text-lg", tone === "light" ? "text-ivory/70" : "text-body")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
