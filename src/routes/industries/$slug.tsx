import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Frame, Kicker, Section } from "@/components/site/frame";
import { getIndustry, INDUSTRIES } from "@/lib/site";

export const Route = createFileRoute("/industries/$slug")({
  component: IndustryPage,
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.industry.title ?? "Industry"} — MGN UNIFORMS` }],
  }),
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  const others = INDUSTRIES.filter((item) => item.slug !== industry.slug);

  return (
    <main>
      <Section className="grid items-end gap-8 py-12 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-6">
          <Kicker>{industry.kicker}</Kicker>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {industry.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">{industry.body}</p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/quote" search={{ industry: industry.slug }}>
              Quote this programme
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <Frame
          src={industry.image}
          alt={industry.imageAlt}
          className="aspect-[16/11] rounded-xl lg:col-span-6"
        />
      </Section>

      <Section className="grid gap-4 pb-16 sm:grid-cols-2">
        <article className="rounded-xl bg-surface p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Roles we kit</h2>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {industry.roles.map((role) => (
              <li key={role} className="text-sm text-ink-soft">
                {role}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl bg-surface p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Cloth & finish</h2>
          <ul className="mt-5 space-y-2">
            {industry.fabrics.map((fabric) => (
              <li key={fabric} className="text-sm text-ink-soft">
                {fabric}
              </li>
            ))}
          </ul>
        </article>
      </Section>

      <Section className="pb-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Also in the house</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {others.map((item) => (
            <Link key={item.slug} to="/industries/$slug" params={{ slug: item.slug }} className="group">
              <Frame
                src={item.image}
                alt={item.imageAlt}
                className="aspect-[16/10] rounded-lg"
                imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <p className="mt-3 font-display text-lg font-semibold tracking-tight">{item.short}</p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
