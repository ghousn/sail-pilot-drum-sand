import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { Footer } from "./footer";
import { Header } from "./header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "!bg-ink !text-paper !border-0 !rounded-md !font-sans",
        }}
      />
    </div>
  );
}
