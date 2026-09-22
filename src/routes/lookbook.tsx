import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Frame, Kicker, Section } from "@/components/site/frame";
import { LOOKBOOK_FILTERS, PRODUCTS } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/lookbook")({
  component: LookbookPage,
  head: () => ({
    meta: [{ title: "Lookbook — MGN UNIFORMS" }],
  }),
});

function LookbookPage() {
  const [filter, setFilter] = useState<(typeof LOOKBOOK_FILTERS)[number]>("All");
  const items = useMemo(
    () => (filter === "All" ? PRODUCTS : PRODUCTS.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <main>
      <Section className="py-12 sm:py-16">
        <Kicker>Lookbook</Kicker>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Garments for the floor, the ward, and the lobby.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
          A working set of styles we programme most often. Every piece can be colour-matched,
          embroidered, and graded to your roster.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {LOOKBOOK_FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150",
                filter === item ? "bg-ink text-paper" : "bg-surface text-ink-soft hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </Section>

      <Section className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.id}>
            <Frame src={item.image} alt={item.title} className="aspect-[4/5] w-full rounded-xl" />
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted">{item.category}</p>
            <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-1 text-sm text-ink-soft">{item.blurb}</p>
          </article>
        ))}
      </Section>

      <section className="border-t border-line bg-surface">
        <Section className="flex flex-col gap-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-display text-2xl font-semibold tracking-tight">
            Ready to spec a programme?
          </p>
          <Button asChild size="lg">
            <Link to="/quote">Request a quote</Link>
          </Button>
        </Section>
      </section>
    </main>
  );
}
