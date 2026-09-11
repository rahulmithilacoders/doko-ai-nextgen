import { Globe, MessageCircle, Smartphone, Workflow, LayoutPanelTop } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

const CHANNELS = [
  { icon: Smartphone, title: "Mobile app", body: "Doko AI in your pocket for daily questions, drafting and translation." },
  { icon: Globe, title: "Web studio", body: "A full chat workspace with threads, files and shared prompts." },
  { icon: MessageCircle, title: "WhatsApp", body: "Your existing number, answering customers around the clock." },
  { icon: LayoutPanelTop, title: "Site widget", body: "A trained assistant on every page of your website." },
  { icon: Workflow, title: "Automations", body: "Trigger follow-ups, catalogs and reminders without lifting a finger." },
];

export function Channels() {
  return (
    <Section id="channels">
      <SectionHeading
        eyebrow="Everywhere you work"
        title="One AI brain, every surface of your day"
        description="Doko AI is built for business hours and for everything after them — the same assistant on mobile, web, WhatsApp, your website and inside your workflows."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {CHANNELS.map((c, i) => (
          <Reveal key={c.title} delay={i * 70}>
            <article className="surface surface-hover flex h-full flex-col p-6">
              <span className="grid size-10 place-items-center rounded-lg border border-border bg-elevated text-primary">
                <c.icon className="size-[1.1rem]" />
              </span>
              <h3 className="mt-5 text-sm font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
