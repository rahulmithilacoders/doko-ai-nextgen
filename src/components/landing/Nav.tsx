import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Channels", href: "#channels" },
  { label: "Pricing", href: "#pricing" },
  { label: "API Docs", href: "#api" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="shell">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            scrolled ? "h-14" : "h-[4.5rem]",
          )}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span
              className="grid size-8 place-items-center rounded-lg text-sm font-bold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-ember)" }}
            >
              डो
            </span>
            <span className="font-display text-[0.95rem] font-semibold tracking-tight">
              Doko AI
              <span className="ml-1.5 hidden text-xs font-normal text-muted-foreground sm:inline">
                by SastoHost
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://aistudio.sasto.host/chat"
              className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Sign in
            </a>
            <a
              href="https://aistudio.sasto.host/chat"
              className="press rounded-lg border border-border-strong bg-elevated px-4 py-2 text-sm font-medium transition-colors hover:border-primary/60"
            >
              Get started
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-9 place-items-center rounded-lg border border-border md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="shell flex flex-col py-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-muted-foreground last:border-0"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
