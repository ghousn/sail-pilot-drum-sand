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
  message: z.string().trim().min(4, "Tell us what you need").max(800, "Keep it under 800 characters"),
});

type FormValues = z.infer<typeof schema>;

const STORAGE_KEY = "mgn-quote-briefs";

export function QuoteForm({ defaultIndustry }: { defaultIndustry?: string }) {
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
    const record = { ...values, industry: defaultIndustry ?? "", submittedAt: new Date().toISOString() };
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...existing].slice(0, 20)));
    } catch {
      /* storage may be blocked */
    }

    const body = [
      `Name: ${values.name}`,
      `WhatsApp: ${values.phone}`,
      industryLabel ? `Industry: ${industryLabel}` : "",
      "",
      values.message,
    ]
      .filter((line, i, arr) => line !== "" || arr[i - 1] !== "")
      .join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(`Uniform enquiry — ${values.name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSent(true);
    toast.success("Opening your email to send the enquiry.");
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-surface px-5 py-8 text-center sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-pine">Sent</p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">We’ll reply on WhatsApp or email.</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          If your mail app didn’t open, write to{" "}
          <a className="text-ink underline decoration-line underline-offset-4" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
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
      <Field label="Name" error={form.formState.errors.name?.message}>
        <Input placeholder="Your name" autoComplete="name" {...form.register("name")} />
      </Field>
      <Field label="WhatsApp" error={form.formState.errors.phone?.message}>
        <Input
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+92 3XX XXXXXXX"
          {...form.register("phone")}
        />
      </Field>
      <Field label="What do you need?" error={form.formState.errors.message?.message}>
        <Textarea
          rows={3}
          placeholder="Hotel, hospital, factory, or office — roles, quantity, city."
          {...form.register("message")}
        />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={`mailto:${SITE.email}`}
          className="text-sm text-muted underline decoration-line underline-offset-4 hover:text-ink"
        >
          {SITE.email}
        </a>
        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          Send
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
