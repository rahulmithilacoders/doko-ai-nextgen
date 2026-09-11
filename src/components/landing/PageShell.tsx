import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";
import { Reveal } from "./Reveal";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.35]" />
      <div className="shell relative">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="h-px w-6 bg-border-strong" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
        {actions ? (
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="press inline-flex items-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
    >
      {children}
    </a>
  );
}

export function GhostLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="press inline-flex items-center rounded-xl border border-border-strong bg-elevated px-5 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
    >
      {children}
    </a>
  );
}
