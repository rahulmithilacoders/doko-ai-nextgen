import { QrCode } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Scan the QR",
    body: "Open WhatsApp → Linked devices → scan. Your number is connected in under two minutes, no Business API approval required.",
  },
  {
    step: "02",
    title: "Train on your business",
    body: "Paste your website, upload a price list or PDF catalog. The agent learns your products, hours, and tone of voice.",
  },
  {
    step: "03",
    title: "AI replies 24/7",
    body: "Every message gets an instant, on-brand answer in Nepali or English — with human handoff the moment a deal gets serious.",
  },
];

export function WhatsAppSteps() {
  return (
    <Section id="whatsapp">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <div>
          <SectionHeading
            align="left"
            eyebrow="WhatsApp automation"
            title="Connect your WhatsApp with a single scan"
            description="No developer, no paperwork, no waiting on approvals. Link your existing number and let the agent handle the conversation."
          />

          <ol className="mt-12 flex flex-col">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 100} as="li">
                <div className="grid grid-cols-[auto_1fr] gap-5 border-t border-border py-7">
                  <span className="font-mono text-xs text-primary">{s.step}</span>
                  <div>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={160}>
          <div className="surface flex flex-col items-center gap-5 p-8 text-center lg:sticky lg:top-24">
            <span className="eyebrow">Scan me</span>
            <div className="grid size-44 place-items-center rounded-xl border border-border-strong bg-background">
              <QrCode className="size-28 text-foreground" strokeWidth={1} />
            </div>
            <p className="max-w-[16rem] text-sm text-muted-foreground">
              Scan with your phone camera to open AI Studio Chat instantly.
            </p>
            <a
              href="https://aistudio.sasto.host/chat"
              className="press w-full rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-ember)" }}
            >
              Try it now
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
