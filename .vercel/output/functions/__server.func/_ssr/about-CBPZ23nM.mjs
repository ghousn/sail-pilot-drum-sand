import { p as SITE } from "./utils-CiY9ss4f.mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as Button } from "./router-BAq6SJSz.mjs";
import { n as Kicker, r as Section, t as Frame } from "./frame-JSUBh7aL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CBPZ23nM.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The house" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "A Karachi uniform studio for people who work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-2xl text-base leading-relaxed text-ink-soft",
					children: [
						"MGN UNIFORMS was founded in ",
						SITE.founded,
						" to kit companies — not classrooms. We design, cut, and brand workplace clothing: hospital scrubs, hotel staff uniforms, industrial workwear, and promotional apparel."
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				src: "/images/atelier.jpg",
				alt: "The MGN garment atelier in Karachi",
				className: "aspect-[16/8] rounded-xl"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "grid gap-10 pb-16 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold tracking-tight",
						children: "What we make"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-ink-soft",
						children: "A uniform programme is not a catalogue order. It is a set of garments that have to look like one company on day one and still match on a reorder six months later. We lock fabric lots, embroidery placements, and size grades so HR and procurement are not guessing."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-ink-soft",
						children: "Our work sits on hotel floors, hospital wards, factory lines, and office lobbies across Pakistan. We will not quote school or college uniforms — that is a different trade, and we leave it to houses that specialise in it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-10 font-display text-2xl font-semibold tracking-tight",
						children: "Where we sit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm leading-relaxed text-ink-soft",
						children: [
							"The studio is at ",
							SITE.address,
							", ",
							SITE.region,
							". Production is coordinated from Karachi; finished goods ship nationwide."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-xl bg-surface p-6 lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.2em] text-pine",
						children: "Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 space-y-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Founded"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 font-medium",
								children: SITE.founded
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 font-medium leading-relaxed",
								children: SITE.address
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "font-medium hover:text-pine",
									href: `mailto:${SITE.email}`,
									children: SITE.email
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Trade"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 font-medium",
								children: "Apparel manufacturing · workplace only"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8 w-full sm:w-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/quote",
							children: ["Work with us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				]
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };
