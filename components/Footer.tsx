import Link from "next/link";

const links = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" }
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/20">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr] md:py-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px_var(--primary)]" />
            <span className="font-mono text-[15px] font-bold tracking-[0.22em] text-foreground">AARKAX</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            An engineering studio building AI agents, data platforms, cloud infrastructure and automation systems for modern businesses.
          </p>
          <a
            href="mailto:info@aarkax.com"
            className="text-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            info@aarkax.com
          </a>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="label-mono">Navigate</p>
          <div className="grid grid-cols-2 gap-2 max-w-xs">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className="container-page flex flex-col gap-3 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="label-mono">AI · Data · Cloud · Automation</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aarkax. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
