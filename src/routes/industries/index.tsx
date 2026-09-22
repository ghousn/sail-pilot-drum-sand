import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Frame, Kicker, Section } from "@/components/site/frame";
import { INDUSTRIES } from "@/lib/site";

export const Route = createFileRoute("/industries/")({
  component: IndustriesIndex,
  head: () => ({
    meta: [{ title: "Industries — MGN UNIFORMS" }],
  }),
});

function IndustriesIndex() {
  return (
    <main>
      <Section className="py-12 sm:py-16">
        <Kicker>Industries</Kicker>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Uniforms for workplaces — not schools.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
          Four sectors. Full property and plant programmes, from a 25-piece run to
          multi-site top-ups. We do not manufacture school or college uniforms.
        </p>
      </Section>
      <Section className="grid gap-8 pb-16 lg:grid-cols-2">
        {INDUSTRIES.map((item) => (
          <Link
            key={item.slug}
            to="/industries/$slug"
            params={{ slug: item.slug }}
            className="group"
          >
            <Frame
              src={item.image}
              alt={item.imageAlt}
              className="aspect-[16/10] rounded-xl"
              imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
              </div>
              <ArrowRight className="mt-1 size-5 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </Section>
    </main>
  );
}
