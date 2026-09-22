import { i as __toESM } from "../_runtime.mjs";
import { d as QTY, f as ROLES, i as INDUSTRY_OPTIONS, m as cn, p as SITE, t as CITIES } from "./utils-CiY9ss4f.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { S as require_jsx_runtime, b as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as Button } from "./router-BAq6SJSz.mjs";
import { n as Kicker, r as Section } from "./frame-JSUBh7aL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-B_QayhIU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("h-11 w-full rounded-md bg-cream px-3.5 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted md:text-sm", "focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-pine)]", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-lg bg-cream px-3.5 py-3 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted md:text-sm", "focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-pine)]", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function NativeSelect({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("h-11 w-full appearance-none rounded-md bg-cream bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path fill=%22%2316181c%22 d=%22M1 1.5 6 6.5 11 1.5%22/></svg>')] bg-[length:12px_8px] bg-[right_14px_center] bg-no-repeat px-3.5 pr-10 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none transition-[box-shadow] duration-150 md:text-sm", "focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-pine)]", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("block text-sm font-medium text-ink-soft", className),
		...props
	});
}
function FieldError({ children }) {
	if (!children) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1.5 text-sm text-danger",
		children
	});
}
var schema = object({
	company: string().trim().min(2, "Company name is required"),
	name: string().trim().min(2, "Your name is required"),
	role: string().min(1, "Select your role"),
	email: string().trim().email("Enter a valid work email"),
	phone: string().trim().min(10, "Enter a WhatsApp number").regex(/^[+\d][\d\s-]{8,}$/, "Use a phone number we can reach on WhatsApp"),
	city: string().min(1, "Select a city"),
	industry: string().min(1, "Select an industry"),
	quantity: string().min(1, "Estimate the quantity"),
	notes: string().trim().max(1200, "Keep notes under 1,200 characters").optional()
});
var STORAGE_KEY = "mgn-quote-briefs";
function QuoteForm({ defaultIndustry }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			company: "",
			name: "",
			role: "",
			email: "",
			phone: "",
			city: "",
			industry: defaultIndustry ?? "",
			quantity: "",
			notes: ""
		}
	});
	function onSubmit(values) {
		const record = {
			...values,
			submittedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
			localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...existing].slice(0, 20)));
		} catch {}
		setSent(true);
		toast.success("Brief received. We’ll reply within one working day.");
	}
	if (sent) {
		const email = form.getValues("email");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface px-6 py-10 text-center sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.2em] text-pine",
					children: "Received"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold tracking-tight",
					children: "Your brief is with the studio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft",
					children: [
						"We’ll write to ",
						email,
						" within one working day with fabric options, timing, and a quote. Keep your WhatsApp free — that’s often the fastest follow-up."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					className: "mt-8",
					onClick: () => {
						form.reset();
						setSent(false);
					},
					children: "Send another brief"
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: form.handleSubmit(onSubmit),
		className: "grid gap-5 sm:grid-cols-2",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Company",
				error: form.formState.errors.company?.message,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Property, hospital, mill, or company",
					...form.register("company")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Your name",
				error: form.formState.errors.name?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Full name",
					...form.register("name")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Role",
				error: form.formState.errors.role?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
					...form.register("role"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Select"
					}), ROLES.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: role,
						children: role
					}, role))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Work email",
				error: form.formState.errors.email?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "email",
					placeholder: "you@company.com",
					...form.register("email")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "WhatsApp",
				error: form.formState.errors.phone?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "tel",
					inputMode: "tel",
					placeholder: "+92 3XX XXXXXXX",
					...form.register("phone")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "City",
				error: form.formState.errors.city?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
					...form.register("city"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Select"
					}), CITIES.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: city,
						children: city
					}, city))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Industry",
				error: form.formState.errors.industry?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
					...form.register("industry"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Select"
					}), INDUSTRY_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: opt.value,
						children: opt.label
					}, opt.value))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Estimated quantity",
				error: form.formState.errors.quantity?.message,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
					...form.register("quantity"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Pieces in this programme"
					}), QTY.map((qty) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: qty,
						children: [qty, " pieces"]
					}, qty))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Notes",
				error: form.formState.errors.notes?.message,
				className: "sm:col-span-2",
				hint: "Colours, logos, existing samples, departments to kit out.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 5,
					placeholder: "We need housekeeping and F&B for a 120-key hotel, embroidered crest, navy and cream…",
					...form.register("notes")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-muted",
					children: "Workplace uniforms only. We do not quote school or college programmes."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					disabled: form.formState.isSubmitting,
					children: "Send brief"
				})]
			})
		]
	});
}
function Field({ label, error, hint, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "mb-1.5",
				children: label
			}),
			children,
			hint && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs text-muted",
				children: hint
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: error })
		]
	});
}
function QuotePage() {
	const { industry } = useSearch({ from: "/quote" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "grid gap-12 py-12 lg:grid-cols-12 lg:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Quote" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Tell us who you need dressed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-ink-soft",
					children: "A specialist replies within one working day with fabric options, timing, and a price for your headcount. Workplace programmes only."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-3 text-sm text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "25-piece minimum on custom styles" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Samples before full production" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Nationwide dispatch from Karachi" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No school or college uniforms" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-sm text-muted",
					children: [
						"Prefer email?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-ink underline decoration-line underline-offset-4",
							href: `mailto:${SITE.email}`,
							children: SITE.email
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl bg-paper p-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, { defaultIndustry: industry })
			})
		})]
	}) });
}
//#endregion
export { QuotePage as component };
