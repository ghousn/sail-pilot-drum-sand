import { r as INDUSTRIES } from "./_ssr/utils-CiY9ss4f.mjs";
import { S as require_jsx_runtime, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowRight } from "./_libs/lucide-react.mjs";
import { n as Route, r as Button } from "./_ssr/router-BAq6SJSz.mjs";
import { n as Kicker, r as Section, t as Frame } from "./_ssr/frame-JSUBh7aL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BYMLwdK7.js
var import_jsx_runtime = require_jsx_runtime();
function IndustryPage() {
	const { industry } = Route.useLoaderData();
	const others = INDUSTRIES.filter((item) => item.slug !== industry.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "grid items-end gap-8 py-12 lg:grid-cols-12 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: industry.kicker }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
						children: industry.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-ink-soft",
						children: industry.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/quote",
							search: { industry: industry.slug },
							children: ["Quote this programme", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				src: industry.image,
				alt: industry.imageAlt,
				className: "aspect-[16/11] rounded-xl lg:col-span-6"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "grid gap-4 pb-16 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold tracking-tight",
					children: "Roles we kit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-2 sm:grid-cols-2",
					children: industry.roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-ink-soft",
						children: role
					}, role))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold tracking-tight",
					children: "Cloth & finish"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-2",
					children: industry.fabrics.map((fabric) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-ink-soft",
						children: fabric
					}, fabric))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.2em] text-muted",
				children: "Also in the house"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-4 sm:grid-cols-3",
				children: others.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/industries/$slug",
					params: { slug: item.slug },
					className: "group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
						src: item.image,
						alt: item.imageAlt,
						className: "aspect-[16/10] rounded-lg",
						imgClassName: "transition-transform duration-500 group-hover:scale-[1.03]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-lg font-semibold tracking-tight",
						children: item.short
					})]
				}, item.slug))
			})]
		})
	] });
}
//#endregion
export { IndustryPage as component };
