import { useState } from "react";
import { Check, Copy, MessageSquare } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

const SNIPPET = `<script
  src="https://aistudio.sasto.host/embed.js"
  data-agent-id="agent_9f2c41"
  data-theme="mono"
  defer
></script>`;

const BULLETS = [
  "Works on WordPress, Shopify, Webflow, React & plain HTML",
  "Matches your brand — light, dark or full monochrome",
  "Captures name, phone and email straight into your inbox",
  "Escalates to a live agent with full conversation context",
];

export function WidgetSection() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <Section id="widget">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Chat widget"
            title="Embed a trained agent on any website"
            description="Copy one script tag and your visitors get instant answers. No iframes to style, no build step, no plugin lock-in."
          />
          <ul className="mt-10 flex flex-col gap-3.5">
            {BULLETS.map((b, i) => (
              <Reveal key={b} delay={i * 80} as="li">
                <div className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {b}
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={340}>
            <button
              type="button"
              onClick={copy}
              className="press mt-9 inline-flex items-center gap-2 rounded-xl border border-border-strong bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-primary/60"
            >
              {copied ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
              {copied ? "Copied to clipboard" : "Copy embed snippet"}
            </button>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="relative">
            <div className="surface overflow-hidden">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <span className="font-mono text-xs text-muted-foreground">index.html</span>
                <button
                  type="button"
                  onClick={copy}
                  className="press inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[0.78rem] leading-relaxed text-muted-foreground">
                <code>{SNIPPET}</code>
              </pre>
              <div className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
                Paste before <span className="font-mono">&lt;/body&gt;</span> — the widget
                in the corner is the real thing.
              </div>
            </div>

            <div className="surface mt-4 flex items-center gap-3 p-4">
              <span
                className="grid size-10 shrink-0 place-items-center rounded-full text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-ember)" }}
              >
                <MessageSquare className="size-4" />
              </span>
              <div>
                <p className="text-sm font-medium">Ask Doko AI</p>
                <p className="text-xs text-muted-foreground">
                  Typically replies instantly
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
