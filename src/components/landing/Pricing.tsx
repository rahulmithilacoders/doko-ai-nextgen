import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

const PLANS = [
  {
    name: "Arambh",
    tagline: "The starting token pack for WhatsApp AI and one site.",
    monthly: 599,
    features: [
      "1 WhatsApp number",
      "1 website widget",
      "2,500,000 AI tokens / month",
      "Tokens shared across all channels",
      "10× faster responses — priority AI lanes",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Utkarsh",
    tagline: "A bigger token pool for stores that live in the inbox.",
    monthly: 1799,
    features: [
      "3 WhatsApp numbers",
      "Unlimited widgets",
      "10,000,000 AI tokens / month",
      "10× faster responses — priority AI lanes",
      "API access + analytics",
      "Human handoff inbox",
    ],
    popular: true,
  },
  {
    name: "Uttam",
    tagline: "Custom token volume across every channel.",
    monthly: 5399,
    features: [
      "Unlimited numbers",
      "Unlimited website widgets",
      "50,000,000+ tokens / month",
      "Studio Chat workspaces",
      "Custom AI models",
      "Priority support & SLA",
    ],
    popular: false,
  },
];

const FREE_FEATURES = [
  "1 website widget",
  "100,000 AI tokens / month",
  "AI API access (REST)",
  "ChatGPT-style AI Studio Chat",
  "Standard response speed (shared lanes)",
  "Email support",
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title="Token-based pricing, no per-message fees"
        description="Free includes AI Studio Chat, the website widget and API access. Paid plans add WhatsApp AI and Automations, with one transparent token pool across your channels."
      />

      <Reveal delay={160}>
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
            {(
              [
                { key: false, label: "Monthly" },
                { key: true, label: "Yearly · save 20%" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => setYearly(opt.key)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition-colors",
                  yearly === opt.key
                    ? "bg-elevated text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {PLANS.map((plan, i) => {
          const price = yearly ? Math.round(plan.monthly * 0.8) : plan.monthly;
          return (
            <Reveal key={plan.name} delay={i * 90}>
              <article
                className={cn(
                  "surface surface-hover flex h-full flex-col p-7",
                  plan.popular && "border-primary/50",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                  {plan.popular ? (
                    <span
                      className="rounded-full px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-primary-foreground"
                      style={{ backgroundImage: "var(--gradient-ember)" }}
                    >
                      Popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 min-h-[2.5rem] text-sm text-muted-foreground">
                  {plan.tagline}
                </p>
                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-semibold">
                    रु {price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </p>
                <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-border pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://aistudio.sasto.host/chat"
                  className={cn(
                    "press mt-8 rounded-xl border px-5 py-3 text-center text-sm font-semibold transition-colors",
                    plan.popular
                      ? "border-transparent text-primary-foreground"
                      : "border-border-strong bg-elevated hover:border-primary/60",
                  )}
                  style={
                    plan.popular ? { backgroundImage: "var(--gradient-ember)" } : undefined
                  }
                >
                  Start with {plan.name}
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div className="surface mt-4 grid gap-6 p-7 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <span className="eyebrow">Free plan</span>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              रु 0 <span className="text-sm font-normal text-muted-foreground">· no card required</span>
            </h3>
            <a
              href="https://aistudio.sasto.host/chat"
              className="press mt-5 inline-flex rounded-xl border border-border-strong bg-elevated px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60"
            >
              Start free
            </a>
          </div>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {FREE_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
