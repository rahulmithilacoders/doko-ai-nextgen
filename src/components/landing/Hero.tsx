import { ArrowRight, BookOpen } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "2 min", label: "WhatsApp setup" },
  { value: "1 pool", label: "Shared AI tokens" },
  { value: "<400ms", label: "API latency" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.5]" />
      <div className="bloom pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[52rem] -translate-x-1/2" />

      <div className="shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Now live in Nepal
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.03] sm:text-5xl lg:text-[3.9rem]">
              Nepal&rsquo;s AI that answers, sells and{" "}
              <span className="text-primary">never sleeps.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Doko AI automates your WhatsApp, drops a trained chat widget onto any
              website, and gives your developers one OpenAI-compatible API — for
              business and everyday life, all metered from a single token balance.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://aistudio.sasto.host/chat"
                className="press inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Start free
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#api"
                className="press inline-flex items-center gap-2 rounded-xl border border-border-strong bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-primary/60"
              >
                <BookOpen className="size-4" />
                Read the API docs
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl className="mx-auto mt-12 grid max-w-xl grid-cols-3 divide-x divide-border border-y border-border">
              {STATS.map((s) => (
                <div key={s.label} className="px-4 py-4 first:pl-0">
                  <dt className="font-display text-2xl font-semibold">{s.value}</dt>
                  <dd className="eyebrow mt-1">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
