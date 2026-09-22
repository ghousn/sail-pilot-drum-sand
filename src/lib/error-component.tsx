import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center " +
        "bg-paper text-ink"
      }
    >
      <span className="text-danger" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="text-lg font-semibold">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-muted">{errorMessage(error)}</p>
    </main>
  );
}

export function NotFoundComponent() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-pine">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
        This page is not on the rack.
      </h1>
      <p className="mt-3 text-sm text-ink-soft">
        The uniform house is still here — try the lookbook or request a quote.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-md bg-pine px-4 text-sm font-medium text-pine-fg"
      >
        Back to home
      </a>
    </main>
  );
}
