import { m as cn } from "./utils-CiY9ss4f.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/frame-JSUBh7aL.js
var import_jsx_runtime = require_jsx_runtime();
function Frame({ src, alt, className, imgClassName, priority = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: cn("overflow-hidden bg-surface", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: cn("block h-full w-full object-cover", imgClassName),
			loading: priority ? "eager" : "lazy",
			decoding: priority ? "sync" : "async",
			fetchPriority: priority ? "high" : "auto"
		})
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-medium uppercase tracking-[0.22em] text-pine",
		children
	});
}
function Section({ children, className, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className),
		children
	});
}
//#endregion
export { Kicker as n, Section as r, Frame as t };
