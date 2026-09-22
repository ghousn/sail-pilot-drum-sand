import { createFileRoute, useSearch } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/quote-form";
import { Kicker, Section } from "@/components/site/frame";
import { SITE } from "@/lib/site";

type QuoteSearch = { industry?: string };

export const Route = createFileRoute("/quote")({
  component: QuotePage,
  validateSearch: (search: Record<string, unknown>): QuoteSearch => ({
    industry: typeof search.industry === "string" ? search.industry : undefined,
  }),
  head: () => ({
    meta: [{ title: "Request a quote — MGN UNIFORMS" }],
  }),
});

function QuotePage() {
  const { industry } = useSearch({ from: "/quote" });

  return (
    <main>
      <Section className="grid gap-12 py-12 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-5">
          <Kicker>Quote</Kicker>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Tell us who you need dressed.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            A specialist replies within one working day with fabric options, timing, and a price for
            your headcount. Workplace programmes only.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink-soft">
            <li>25-piece minimum on custom styles</li>
            <li>Samples before full production</li>
            <li>Nationwide dispatch from Karachi</li>
            <li>No school or college uniforms</li>
          </ul>
          <div className="mt-10 space-y-2 text-sm text-muted">
            <p>
              Prefer email?{" "}
              <a
                className="text-ink underline decoration-line underline-offset-4"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
            </p>
            <p>
              Or call / WhatsApp{" "}
              <a
                className="text-ink underline decoration-line underline-offset-4"
                href={`tel:${SITE.phone}`}
              >
                {SITE.phone}
              </a>
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-xl bg-paper p-1">
            <QuoteForm defaultIndustry={industry} />
          </div>
        </div>
      </Section>
    </main>
  );
}
