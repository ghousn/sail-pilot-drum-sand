import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Frame, Kicker, Section } from "@/components/site/frame";
import { QuoteForm } from "@/components/site/quote-form";
import { FAQ, INDUSTRIES, MARQUEE, PRINCIPLES, PROCESS, PRODUCTS, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Industries />
      <Range />
      <Process />
      <Studio />
      <Principles />
      <Faq />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-14">
        <div className="flex flex-col justify-center lg:col-span-5">
          <Kicker>Karachi · Est. {SITE.founded} · Nationwide</Kicker>
          <h1 className="mt-4 font-display text-[2.35rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem]">
            Workplace uniforms, made in Karachi.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            Custom programmes for hotels, hospitals, factories, and enterprises. Scrubs, workwear,
            hospitality, and branded apparel — never school or college uniforms.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">
                Contact us
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/lookbook">View the lookbook</Link>
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-line pt-6">
            <Stat value="25+" label="piece minimum" />
            <Stat value="4" label="workplace sectors" />
            <Stat value="PK" label="nationwide" />
          </dl>
        </div>
        <div className="lg:col-span-7">
          <Frame
            src="/images/hero.jpg"
            alt="Hospitality, medical, industrial, and corporate staff in custom MGN uniforms"
            className="aspect-[16/10] rounded-xl sm:aspect-[16/9]"
            imgClassName="object-[center_20%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-semibold tracking-tight">{value}</dt>
      <dd className="mt-1 text-xs text-muted">{label}</dd>
    </div>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden border-y border-line bg-surface py-3">
      <div className="marquee-track flex w-max gap-8 pr-8">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-xs font-medium uppercase tracking-[0.22em] text-ink-soft"
          >
            {item}
            <span className="ml-8 text-stone">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Industries() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Kicker>Who we dress</Kicker>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Four workplaces. No classrooms.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          If your people work a lobby, a ward, a mill, or an office — we kit the whole roster. We do
          not make school or college uniforms.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {INDUSTRIES.map((item) => (
          <Link
            key={item.slug}
            to="/industries/$slug"
            params={{ slug: item.slug }}
            className="group overflow-hidden rounded-xl bg-surface"
          >
            <Frame
              src={item.image}
              alt={item.imageAlt}
              className="aspect-[16/10] rounded-none"
              imgClassName="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <div className="flex items-end justify-between gap-4 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{item.kicker}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
              </div>
              <span className="mb-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Range() {
  return (
    <Section className="py-4 sm:py-8">
      <div className="rounded-xl bg-ink px-5 py-10 text-paper sm:px-10 sm:py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone">The range</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Cut for the shift.
            </h2>
          </div>
          <Button asChild variant="paper" size="sm">
            <Link to="/lookbook">
              Full lookbook
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {PRODUCTS.slice(0, 4).map((item) => (
            <Link key={item.id} to="/lookbook" className="group">
              <Frame
                src={item.image}
                alt={item.title}
                className="aspect-[3/4] rounded-lg"
                imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <p className="mt-3 font-display text-lg font-semibold tracking-tight">{item.title}</p>
              <p className="mt-1 text-sm text-stone">{item.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section className="py-16 sm:py-20">
      <Kicker>How a programme runs</Kicker>
      <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Brief, sample, produce, dispatch.
      </h2>
      <ol className="mt-10 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-5">
        {PROCESS.map((step) => (
          <li key={step.step} className="bg-paper p-5 sm:p-6">
            <p className="font-display text-sm font-semibold text-pine">{step.step}</p>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Studio() {
  return (
    <Section className="pb-16 sm:pb-20">
      <div className="grid items-center gap-8 lg:grid-cols-12">
        <Frame
          src="/images/atelier.jpg"
          alt="Tailors and fabric in the MGN Karachi atelier"
          className="aspect-[16/10] rounded-xl lg:col-span-7"
        />
        <div className="lg:col-span-5">
          <Kicker>The atelier</Kicker>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
            Cut on Abdullah Haroon Road.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            MGN UNIFORMS has made workplace clothing in Saddar, Karachi since {SITE.founded} —
            hospital scrubs, hotel staff kits, industrial workwear, and promotional apparel for
            companies that need a uniform, not a costume.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{SITE.address}.</p>
          <Button asChild className="mt-6" variant="outline">
            <Link to="/about">
              About the house
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

function Principles() {
  return (
    <Section className="pb-16 sm:pb-20">
      <div className="grid gap-4 sm:grid-cols-2">
        {PRINCIPLES.map((item) => (
          <article key={item.title} className="rounded-xl bg-surface p-6">
            <h3 className="font-display text-xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Faq() {
  return (
    <Section className="pb-16 sm:pb-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Kicker>Procurement</Kicker>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
            What teams usually ask.
          </h2>
        </div>
        <div className="divide-y divide-line lg:col-span-8">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-lg font-semibold tracking-tight">
                {item.q}
                <span className="text-muted transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-pine">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:items-start lg:py-16">
        <div className="text-pine-fg lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Tell us who you need dressed.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
            Name, WhatsApp, and a line on the roles. We reply within one working day.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a
              className="text-pine-fg underline decoration-stone underline-offset-4"
              href={`mailto:${SITE.email}`}
            >
              {SITE.email}
            </a>
            <p>
              <a
                className="text-pine-fg underline decoration-stone underline-offset-4"
                href={`tel:${SITE.phone}`}
              >
                {SITE.phone}
              </a>
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-xl bg-paper p-5 sm:p-7">
            <QuoteForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
