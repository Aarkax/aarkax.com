export function AnimatedGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Fine grid mask overlay */}
      <div className="absolute inset-0 grid-bg opacity-75" />

      {/* Floating ambient glow lights */}
      <div className="animate-glow-drift absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="animate-glow-drift absolute top-1/3 -right-20 h-[400px] w-[400px] rounded-full bg-accent-2/10 blur-[140px] [animation-delay:-4s]" />
    </div>
  );
}
