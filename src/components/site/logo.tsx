import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      className={cn("inline-flex items-baseline gap-2 text-ink", className)}
      aria-label="MGN UNIFORMS home"
    >
      <span className="font-display text-[1.35rem] font-bold leading-none tracking-tight">MGN</span>
      <span className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-muted">
        Uniforms
      </span>
    </Link>
  );
}
