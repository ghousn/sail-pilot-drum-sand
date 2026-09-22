import { r as INDUSTRIES } from "./utils-CiY9ss4f.mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Kicker, r as Section, t as Frame } from "./frame-JSUBh7aL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-DtEjfODC.js
var import_jsx_runtime = require_jsx_runtime();
function IndustriesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "py-12 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Industries" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "Uniforms for workplaces — not schools."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-base leading-relaxed text-ink-soft",
				children: "Four sectors. Full property and plant programmes, from a 25-piece run to multi-site top-ups. We do not manufacture school or college uniforms."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "grid gap-8 pb-16 lg:grid-cols-2",
		children: INDUSTRIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/industries/$slug",
			params: { slug: item.slug },
			className: "group",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				src: item.image,
				alt: item.imageAlt,
				className: "aspect-[16/10] rounded-xl",
				imgClassName: "transition-transform duration-500 group-hover:scale-[1.03]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold tracking-tight",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-ink-soft",
					children: item.summary
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-1 size-5 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5" })]
			})]
		}, item.slug))
	})] });
}
//#endregion
export { IndustriesIndex as component };
