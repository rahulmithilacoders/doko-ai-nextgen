import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Clock, ShoppingBag, Users, Bell, Languages } from "lucide-react";

import { PageShell, PageHero, PrimaryLink, GhostLink } from "@/components/landing/PageShell";
import { Section, SectionHeading } from "@/components/landing/SectionHeading";
import { Reveal } from "@/components/landing/Reveal";

const TITLE = "WhatsApp AI for Nepali Businesses — Doko AI";
const DESCRIPTION =
  "Connect your WhatsApp number to Doko AI and reply to customers 24/7 in Nepali and English — orders, delivery, pricing, bookings and follow-ups, fully automated.";

export const Route = createFileRoute("/whatsapp")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: WhatsAppPage,
});

const FEATURES = [
  { icon: Clock, title: "24/7 replies", body: "Customers message at 11pm. Doko AI answers in seconds, every night, in their language." },
  { icon: ShoppingBag, title: "Order taking", body: "Collect size, quantity, address and COD preference, then hand a clean order to your team." },
  { icon: Languages, title: "Nepali + English", body: "Romanised Nepali, Devanagari or English — the agent matches how the customer writes." },
  { icon: Users, title: "Human handover", body: "Any conversation can be escalated to a staff member with the full chat history attached." },
  { icon: Bell, title: "Broadcasts", body: "Send Dashain, Tihar or restock announcements to opted-in customers from the studio." },
  { icon: MessageCircle, title: "Knowledge trained", body: "Upload your catalogue, price list and policies — replies stay on-brand and accurate." },
];

const STEPS = [
  { n: "01", t: "Scan the QR", d: "Open the studio, scan the QR from WhatsApp on your business phone. No SIM change, no new number." },
  { n: "02", t: "Train your agent", d: "Paste your products, prices, delivery areas and FAQs. Set the tone: formal, friendly or short." },
  { n: "03", t: "Go live", d: "Turn the agent on. Watch conversations, take over any chat, and export orders whenever you want." },
];

const USECASES = [
  { t: "Retail & e-commerce", d: "Sizes, stock, COD, delivery timing and order confirmations without a chat operator." },
  { t: "Clinics & salons", d: "Appointment booking, reminders and rescheduling handled inside WhatsApp." },
  { t: "Travel & trekking", d: "Package details, permits and itinerary questions answered instantly for overseas clients." },
  { t: "Schools & institutes", d: "Admission queries, fee structures and class routines answered for hundreds of parents at once." },
];

function WhatsAppPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Channel · WhatsApp"
        title="Your WhatsApp, answering customers all night"
        description="Doko AI connects to the WhatsApp number you already use and replies like your best staff member — in Nepali or English, with your prices, your policies and your tone."
        actions={
          <>
            <PrimaryLink href="https://aistudio.sasto.host/chat">Connect WhatsApp</PrimaryLink>
            <GhostLink href="/pricing">See pricing</GhostLink>
          </>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything a good sales assistant does"
          description="Trained on your business, available on the channel your customers already live in."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="h-full bg-background p-7 transition-colors hover:bg-elevated">
                <f.icon className="size-5" />
                <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          align="left"
          eyebrow="Setup"
          title="Live in about ten minutes"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="border-t border-border-strong pt-6">
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Who uses it"
          title="Built for how Nepal actually sells"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {USECASES.map((u, i) => (
            <Reveal key={u.t} delay={i * 70}>
              <div className="surface h-full p-7">
                <h3 className="font-display text-lg font-semibold">{u.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={320}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <PrimaryLink href="https://aistudio.sasto.host/chat">Start free</PrimaryLink>
            <GhostLink href="/docs">WhatsApp API docs</GhostLink>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
