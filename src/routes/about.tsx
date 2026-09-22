import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Frame, Kicker, Section } from "@/components/site/frame";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About — MGN UNIFORMS" }],
  }),
});

function AboutPage() {
  return (
    <main>
      <Section className="py-12 sm:py-16">
        <Kicker>The house</Kicker>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          A Karachi uniform studio for people who work.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
          MGN UNIFORMS was founded in {SITE.founded} to kit companies — not classrooms.
          We design, cut, and brand workplace clothing: hospital scrubs, hotel staff
          uniforms, industrial workwear, and promotional apparel.
        </p>
      </Section>

      <Section className="pb-12">
        <Frame
          src="/images/atelier.jpg"
          alt="The MGN garment atelier in Karachi"
          className="aspect-[16/8] rounded-xl"
        />
      </Section>

      <Section className="grid gap-10 pb-16 lg:grid-cols-12">
        <article className="lg:col-span-7">
          <h2 className="font-display text-2xl font-semibold tracking-tight">What we make</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            A uniform programme is not a catalogue order. It is a set of garments that
            have to look like one company on day one and still match on a reorder six
            months later. We lock fabric lots, embroidery placements, and size grades so
            HR and procurement are not guessing.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Our work sits on hotel floors, hospital wards, factory lines, and office
            lobbies across Pakistan. We will not quote school or college uniforms — that
            is a different trade, and we leave it to houses that specialise in it.
          </p>
          <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight">Where we sit</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            The studio is at {SITE.address}, {SITE.region}. Production is coordinated from
            Karachi; finished goods ship nationwide.
          </p>
        </article>
        <aside className="rounded-xl bg-surface p-6 lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-pine">Studio</p>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-muted">Founded</dt>
              <dd className="mt-0.5 font-medium">{SITE.founded}</dd>
            </div>
            <div>
              <dt className="text-muted">Address</dt>
              <dd className="mt-0.5 font-medium leading-relaxed">{SITE.address}</dd>
            </div>
            <div>
              <dt className="text-muted">Email</dt>
              <dd className="mt-0.5">
                <a className="font-medium hover:text-pine" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Trade</dt>
              <dd className="mt-0.5 font-medium">Apparel manufacturing · workplace only</dd>
            </div>
          </dl>
          <Button asChild className="mt-8 w-full sm:w-auto">
            <Link to="/quote">
              Work with us
              <ArrowRight />
            </Link>
          </Button>
        </aside>
      </Section>
    </main>
  );
}
