export type SystemNode = {
  label: string;
  sub: string;
};

export function ArchitectureDiagram({
  title = "SYSTEM OVERVIEW",
  nodes = [
    { label: "User / API", sub: "requests · events · voice" },
    { label: "AI Agent", sub: "reasoning · tools · memory" },
    { label: "Data Layer", sub: "RAG · warehouse · streams" },
    { label: "Cloud Infrastructure", sub: "containers · autoscale · CI/CD" },
    { label: "Automation", sub: "workflows executed reliably" }
  ]
}: {
  title?: string;
  nodes?: SystemNode[];
}) {
  return (
    <div className="glass-panel relative w-full rounded-2xl p-6 md:p-8">
      {/* Title */}
      <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
        <span className="label-mono">{title}</span>
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
      </div>

      {/* Nodes list with connecting dashed lines */}
      <div className="flex flex-col items-center">
        {nodes.map((node, index) => {
          const isLast = index === nodes.length - 1;
          return (
            <div key={node.label} className="w-full flex flex-col items-center">
              <div className="group relative w-full rounded-xl border border-border bg-surface/80 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-surface hover:shadow-[0_0_20px_-4px_rgba(59,130,246,0.25)]">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">{node.label}</h4>
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground pl-4.5">{node.sub}</p>
              </div>

              {!isLast ? (
                <div className="my-1.5 flex h-6 w-px flex-col items-center justify-center">
                  <span className="h-full w-px bg-gradient-to-b from-primary/60 via-primary to-primary/20" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
