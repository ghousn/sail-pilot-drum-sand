import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-11 w-full rounded-md bg-cream px-3.5 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted md:text-sm",
        "focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-pine)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-lg bg-cream px-3.5 py-3 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted md:text-sm",
        "focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-pine)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export function NativeSelect({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "h-11 w-full appearance-none rounded-md bg-cream bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path fill=%22%2316181c%22 d=%22M1 1.5 6 6.5 11 1.5%22/></svg>')] bg-[length:12px_8px] bg-[right_14px_center] bg-no-repeat px-3.5 pr-10 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none transition-[box-shadow] duration-150 md:text-sm",
        "focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-pine)]",
        className,
      )}
      {...props}
    />
  );
}
