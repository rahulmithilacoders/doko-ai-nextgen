import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

const QUOTES = [
  {
    quote:
      "We used to lose orders overnight. The WhatsApp agent now closes sales at 2am and our team just confirms delivery in the morning.",
    name: "Anisha Shrestha",
    role: "Founder, Himalayan Retail",
    initials: "AS",
  },
  {
    quote:
      "The widget took one paste into our theme file. Support tickets dropped by roughly 60% in the first month.",
    name: "Bikash Adhikari",
    role: "Head of Ops, Everest Mart",
    initials: "BA",
  },
  {
    quote:
      "OpenAI-compatible meant we migrated in an afternoon, and we finally pay in NPR without a foreign card.",
    name: "Rojan Karki",
    role: "CTO, NepTech Labs",
    initials: "RK",
  },
];

export function Testimonials() {
  return (
    <Section id="customers">
      <SectionHeading
        eyebrow="Customers"
        title="Quietly running thousands of conversations"
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {QUOTES.map((q, i) => (
          <Reveal key={q.name} delay={i * 90}>
            <figure className="surface surface-hover flex h-full flex-col justify-between p-7">
              <blockquote className="text-[0.95rem] leading-relaxed text-foreground/90">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <span className="grid size-9 place-items-center rounded-full border border-border bg-elevated font-mono text-[0.7rem] text-primary">
                  {q.initials}
                </span>
                <div>
                  <p className="text-sm font-medium">{q.name}</p>
                  <p className="text-xs text-muted-foreground">{q.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
