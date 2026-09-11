const MODELS = ["Claude", "ChatGPT", "Grok", "Gemini", "DeepSeek"];

export function Lineage() {
  const row = [...MODELS, ...MODELS, ...MODELS, ...MODELS];

  return (
    <section className="border-y border-border bg-card/40 py-8">
      <div className="shell flex flex-col items-center gap-5 md:flex-row md:gap-10">
        <p className="shrink-0 text-center text-sm text-muted-foreground md:max-w-xs md:text-left">
          <span className="font-medium text-foreground">Doko AI</span> is our house model
          — fine-tuned on Nepali business language across the frontier families.
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-3">
            {row.map((m, i) => (
              <span
                key={`${m}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background px-4 py-2 font-mono text-xs text-muted-foreground"
              >
                <span className="size-1.5 rounded-full bg-primary/70" />
                {m}
              </span>
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--background), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16"
            style={{
              backgroundImage:
                "linear-gradient(to left, var(--background), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
