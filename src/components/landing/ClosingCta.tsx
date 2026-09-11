import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="bloom pointer-events-none absolute -bottom-40 left-1/2 h-[26rem] w-[46rem] -translate-x-1/2" />
      <div className="shell relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
            Put your business on autopilot tonight
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Start with Studio Chat, add the widget or API, then upgrade to unlock WhatsApp
            AI and Automations when your business is ready.
          </p>
        </Reveal>
        <Reveal delay={170}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="https://aistudio.sasto.host/chat"
              className="press inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-ember)" }}
            >
              Start free
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#api"
              className="press inline-flex items-center rounded-xl border border-border-strong bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-primary/60"
            >
              Read the API docs
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
