import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

const FAQS = [
  {
    q: "How does token billing work?",
    a: "Each plan comes with a monthly pool of AI tokens shared across Studio chat, website widget, WhatsApp AI and API calls. When the balance finishes, AI usage pauses until the next cycle or a top-up.",
  },
  {
    q: "Do I need the official WhatsApp Business API?",
    a: "No. SastoHost AI Studio links your existing number through a QR code, the same way WhatsApp Web works.",
  },
  {
    q: "Will the AI answer in Nepali?",
    a: "Yes. The agent replies in the language the customer writes in, including Romanised Nepali, and you can force a preferred language per channel.",
  },
  {
    q: "How do I put the chat widget on my website?",
    a: "Copy the one-line script tag from your dashboard and paste it before the closing body tag. It works on WordPress, Shopify, Webflow, Next.js and plain HTML.",
  },
  {
    q: "Which AI model powers SastoHost AI Studio?",
    a: "Doko AI — the house model by SastoHost AI Studio, fine-tuned across the frontier model families. It answers everywhere: Studio chat, WhatsApp, website widgets, and the API (model id doko-ai).",
  },
  {
    q: "Is the API really OpenAI-compatible?",
    a: "Yes. Keep your existing SDK, change the base URL to /v1, set the model to doko-ai and use your SastoHost key.",
  },
  {
    q: "Can a human take over a conversation?",
    a: "Any chat can be claimed from the shared inbox. The agent pauses, your teammate sees the full history, and AI suggests replies in the background.",
  },
  {
    q: "How is my data handled?",
    a: "Your content trains only your own agent, is encrypted at rest, and can be deleted permanently from the dashboard at any time.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:items-start">
        <SectionHeading align="left" eyebrow="FAQ" title="Questions, answered" />

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="text-left text-[0.95rem] font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
