import { Link } from "@tanstack/react-router";
import { SITE, INDUSTRIES } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo className="text-paper [&_span:last-child]:text-stone" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone">
            Custom workplace uniforms from Karachi. Hotels, hospitals, factories, and
            enterprises — not schools or colleges.
          </p>
          <p className="mt-6 text-sm text-stone">Est. {SITE.founded} · {SITE.city}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">Industries</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {INDUSTRIES.map((item) => (
              <li key={item.slug}>
                <Link to="/industries/$slug" params={{ slug: item.slug }} className="hover:text-cream">
                  {item.short}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/lookbook" className="hover:text-cream">
                Lookbook
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">Studio</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-stone">
            {SITE.address}
            <br />
            {SITE.region}
          </address>
          <p className="mt-4 text-sm">
            <a href={`mailto:${SITE.email}`} className="text-paper hover:text-cream">
              {SITE.email}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-stone hover:text-cream"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-stone sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {SITE.name}. Workplace uniforms only.</p>
          <Link to="/quote" className="hover:text-cream">
            Request a quote
          </Link>
        </div>
      </div>
    </footer>
  );
}
