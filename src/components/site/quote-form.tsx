import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { INDUSTRY_OPTIONS, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { FieldError, Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(2, "Your name is required"),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a WhatsApp number")
    .regex(/^[+\d][\d\s-]{8,}$/, "Use a number we can reach on WhatsApp"),
  message: z.string().trim().max(800, "Keep it under 800 characters").optional(),
});

type FormValues = z.infer<typeof schema>;

const STORAGE_KEY = "mgn-quote-briefs";

export function QuoteForm({
  defaultIndustry,
  compact = false,
}: {
  defaultIndustry?: string;
  compact?: boolean;
}) {
  const industryLabel = INDUSTRY_OPTIONS.find((item) => item.value === defaultIndustry)?.label;
  const [sent, setSent] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      message: industryLabel ? `Quote for ${industryLabel}. ` : "",
    },
  });

  function onSubmit(values: FormValues) {
    if (!compact && (values.message?.trim().length ?? 0) < 4) {
      form.setError("message", { message: "Tell us what you need" });
      return;
    }

    const record = {
      ...values,
      industry: defaultIndustry ?? "",
      submittedAt: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...existing].slice(0, 20)));
    } catch {
      /* storage may be blocked */
    }

    const body = [
      `Hello MGN UNIFORMS, my name is ${values.name}.`,
      `WhatsApp: ${values.phone}`,
      industryLabel ? `Industry: ${industryLabel}` : "",
      values.message?.trim() || "I would like to discuss a uniform programme.",
    ]
      .filter(Boolean)
      .join("\n");

    // WhatsApp is the primary channel because it works without a configured mail app.
    window.location.href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(body)}`;
    setSent(true);
    toast.success("Opening WhatsApp to send your enquiry.");
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-surface px-5 py-8 text-center sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-pine">Ready to send</p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
          WhatsApp should open with your enquiry.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          If it did not open, write to{" "}
          <a
            className="text-ink underline decoration-line underline-offset-4"
            href={`mailto:${SITE.email}`}
          >
            {SITE.email}
          </a>{" "}
          or call <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => {
            form.reset();
            setSent(false);
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4" noValidate>
      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "contents"}>
        <Field label="Name" error={form.formState.errors.name?.message}>
          <Input placeholder="Your name" autoComplete="name" {...form.register("name")} />
        </Field>
        <Field label="WhatsApp" error={form.formState.errors.phone?.message}>
          <Input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="0341 7358518"
            {...form.register("phone")}
          />
        </Field>
      </div>
      {!compact && (
        <Field label="What do you need?" error={form.formState.errors.message?.message}>
          <Textarea
            rows={3}
            placeholder="Hotel, hospital, factory, or office — roles, quantity, city."
            {...form.register("message")}
          />
        </Field>
      )}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 text-sm text-muted">
          <a
            href={`mailto:${SITE.email}`}
            className="underline decoration-line underline-offset-4 hover:text-ink"
          >
            {SITE.email}
          </a>
          <a href={`tel:${SITE.phone}`} className="hover:text-ink">
            {SITE.phone}
          </a>
        </div>
        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          {compact ? "Enquire on WhatsApp" : "Send on WhatsApp"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <Label className="mb-1.5">{label}</Label>
      {children}
      <FieldError>{error}</FieldError>
    </div>
  );
}
