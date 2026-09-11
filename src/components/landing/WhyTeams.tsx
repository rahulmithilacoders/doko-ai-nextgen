import {
  BarChart3,
  Coins,
  Languages,
  ShieldCheck,
  UserRoundCheck,
  Wallet,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

const REASONS = [
  {
    icon: Languages,
    title: "Nepali + English + 10 more",
    body: "Replies in the language your customer wrote in, including Romanised Nepali.",
  },
  {
    icon: Coins,
    title: "Token-metered usage",
    body: "No per-contact or per-reply billing. One transparent token balance across Studio, widget and API.",
  },
  {
    icon: BarChart3,
    title: "Conversation analytics",
    body: "See resolution rate, response time, top questions and lost-lead reasons.",
  },
  {
    icon: UserRoundCheck,
    title: "Human handoff",
    body: "Agents take over mid-chat with full history and suggested replies.",
  },
  {
    icon: Wallet,
    title: "Priced for Nepal",
    body: "Local pricing in NPR with eSewa, Khalti and card payments.",
  },
  {
    icon: ShieldCheck,
    title: "Private by default",
    body: "Your data trains only your agent. Encrypted at rest, deletable any time.",
  },
];

export function WhyTeams() {
  return (
    <Section id="why">
      <SectionHeading
        eyebrow="Why teams switch"
        title="Built for real businesses, not demos"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} delay={i * 70}>
            <article className="surface surface-hover flex h-full flex-col p-6">
              <r.icon className="size-5 text-primary" />
              <h3 className="mt-5 text-sm font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
