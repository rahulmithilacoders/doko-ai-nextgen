import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const SCRIPT = [
  { role: "user" as const, text: "Dashain offer ko details pathaunus na" },
  {
    role: "ai" as const,
    text: "Namaste! Dashain Sale: 20% off all bags, free delivery inside Kathmandu. Kun size chahiyo?",
  },
  { role: "user" as const, text: "Medium. Cash on delivery hunchha?" },
  {
    role: "ai" as const,
    text: "Yes — COD available. Order confirmed for tomorrow 11am. Naam ra address pathaidinus.",
  },
];

const STATS = [
  { value: "2 min", label: "WhatsApp setup" },
  { value: "1 pool", label: "Shared AI tokens" },
  { value: "<400ms", label: "API latency" },
];

function useTypedScript() {
  const [step, setStep] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (step >= SCRIPT.length) return;
    const full = SCRIPT[step]!.text.length;
    if (chars < full) {
      const t = setTimeout(() => setChars((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setStep((s) => s + 1);
      setChars(0);
    }, 900);
    return () => clearTimeout(t);
  }, [step, chars]);

  return { step, chars };
}

function ChatMock() {
  const { step, chars } = useTypedScript();
  const visible = SCRIPT.slice(0, step + 1);

  return (
    <div className="surface overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span
            className="grid size-7 place-items-center rounded-md text-[0.65rem] font-bold text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-ember)" }}
          >
            डो
          </span>
          <div className="leading-tight">
            <p className="text-xs font-medium">Doko AI · WhatsApp</p>
            <p className="font-mono text-[0.6rem] text-muted-foreground">
              connected · replying 24/7
            </p>
          </div>
        </div>
        <span className="size-2 rounded-full bg-success" />
      </div>

      <div className="flex min-h-[17rem] flex-col justify-end gap-2.5 p-4">
        {visible.map((m, i) => {
          const isLast = i === step;
          const text = isLast ? m.text.slice(0, chars) : m.text;
          return (
            <div
              key={i}
              className={
                m.role === "user"
                  ? "max-w-[82%] self-end rounded-2xl rounded-br-sm bg-elevated px-3.5 py-2.5 text-[0.82rem] leading-relaxed"
                  : "max-w-[86%] self-start rounded-2xl rounded-bl-sm border border-border bg-background px-3.5 py-2.5 text-[0.82rem] leading-relaxed"
              }
            >
              {text}
              {isLast ? <span className="caret ml-0.5">▍</span> : null}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 border-t border-border px-4 py-3 font-mono text-[0.65rem] text-muted-foreground">
        <Check className="size-3 text-success" />
        answered in 0.4s · tokens metered from one pool
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.5]" />
      <div className="bloom pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[52rem] -translate-x-1/2" />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                Now live in Nepal
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.03] sm:text-5xl lg:text-[3.9rem]">
                Nepal&rsquo;s AI that answers, sells and{" "}
                <span className="text-ember">never sleeps.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Doko AI automates your WhatsApp, drops a trained chat widget onto any
                website, and gives your developers one OpenAI-compatible API — for
                business and everyday life, all metered from a single token balance.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
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
                  className="press inline-flex items-center gap-2 rounded-xl border border-border-strong bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-primary/60"
                >
                  <BookOpen className="size-4" />
                  Read the API docs
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-border border-y border-border">
                {STATS.map((s) => (
                  <div key={s.label} className="px-4 py-4 first:pl-0">
                    <dt className="font-display text-2xl font-semibold">{s.value}</dt>
                    <dd className="eyebrow mt-1">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <ChatMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
