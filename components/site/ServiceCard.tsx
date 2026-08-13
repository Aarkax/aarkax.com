import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export type ServiceCardProps = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  href?: string;
};

export function ServiceCard({
  index,
  title,
  description,
  tags,
  icon: Icon,
  href = "/what-we-do"
}: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface/40 p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-surface/80 hover:shadow-[0_0_30px_-6px_rgba(59,130,246,0.2)]">
      <div>
        <div className="flex items-center justify-between border-b border-border/60 pb-5">
          <span className="font-mono text-xs font-medium text-muted-foreground">{index}</span>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
            <Icon className="h-4.5 w-4.5" />
          </div>
        </div>

        <h3 className="mt-6 text-xl font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/80 bg-background/50 px-3 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-border/40">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-semibold font-mono text-primary transition-all duration-300 group-hover:translate-x-1"
        >
          Explore <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
