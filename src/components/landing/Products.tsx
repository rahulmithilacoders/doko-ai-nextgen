import { ArrowUpRight, Code2, MessageCircle, Sparkle, Terminal } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

const PRODUCTS = [
  {
    icon: MessageCircle,
    title: "WhatsApp AI Automation",
    body: "Scan a QR code to connect your number. The agent replies instantly, qualifies leads, sends catalogs and hands off to a human when needed.",
    points: ["QR session connect", "Broadcast & flows", "Human handoff inbox"],
  },
  {
    icon: Code2,
    title: "Embeddable Chat Widget",
    body: "One script tag drops a trained assistant onto any website — WordPress, Shopify, Webflow or your own React app.",
    points: ["1-line embed", "Brand-matched theming", "Lead capture forms"],
  },
  {
    icon: Terminal,
    title: "Doko AI API",
    body: "Doko AI as an OpenAI-compatible endpoint — your own keys, usage dashboards and per-project rate limits. Swap the base URL and you're done.",
    points: ["Chat & embeddings", "Streaming responses", "Usage analytics"],
  },
  {
    icon: Sparkle,
    title: "AI Studio Chat",
    body: "A ChatGPT-style workspace for your team — threads, prompt library, file context and shared assistants trained on your business.",
    points: ["Threaded history", "Prompt library", "Team workspaces"],
  },
];

export function Products() {
  return (
    <Section id="products">
      <SectionHeading
        eyebrow="Four products, one studio"
        title={
          <>
            Everything you need to run
            <br className="hidden sm:block" /> AI conversations
          </>
        }
        description="Each module works standalone or together on a single subscription and a single AI brain trained on your business."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="surface surface-hover group flex h-full flex-col p-6 md:p-7">
              <div className="flex items-start justify-between">
                <span className="grid size-10 place-items-center rounded-lg border border-border bg-elevated text-primary">
                  <p.icon className="size-[1.15rem]" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-5">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground"
                  >
                    <span className="size-1 rounded-full bg-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
