import { i as __toESM } from "../_runtime.mjs";
import { a as LOOKBOOK_FILTERS, m as cn, u as PRODUCTS } from "./utils-CiY9ss4f.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Button } from "./router-BAq6SJSz.mjs";
import { n as Kicker, r as Section, t as Frame } from "./frame-JSUBh7aL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lookbook-CqH4hYaB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LookbookPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const items = (0, import_react.useMemo)(() => filter === "All" ? PRODUCTS : PRODUCTS.filter((item) => item.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Lookbook" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Garments for the floor, the ward, and the lobby."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base leading-relaxed text-ink-soft",
					children: "A working set of styles we programme most often. Every piece can be colour-matched, embroidered, and graded to your roster."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: LOOKBOOK_FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(item),
						className: cn("h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150", filter === item ? "bg-ink text-paper" : "bg-surface text-ink-soft hover:text-ink"),
						children: item
					}, item))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
					src: item.image,
					alt: item.title,
					className: "aspect-[4/5] w-full rounded-xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs uppercase tracking-[0.18em] text-muted",
					children: item.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-2xl font-semibold tracking-tight",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-ink-soft",
					children: item.blurb
				})
			] }, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				className: "flex flex-col gap-5 py-12 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md font-display text-2xl font-semibold tracking-tight",
					children: "Ready to spec a programme?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quote",
						children: "Request a quote"
					})
				})]
			})
		})
	] });
}
//#endregion
export { LookbookPage as component };
