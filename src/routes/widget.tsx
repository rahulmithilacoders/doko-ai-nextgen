import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { PageShell, PageHero, PrimaryLink, GhostLink } from "@/components/landing/PageShell";
import { Section, SectionHeading } from "@/components/landing/SectionHeading";
import { Reveal } from "@/components/landing/Reveal";

const TITLE = "Website Chat Widget — Doko AI by SastoHost";
const DESCRIPTION =
  "Add an AI chat widget to any website with one script tag. Doko AI answers visitor questions in Nepali and English, captures leads and hands off to your team.";

export const Route = createFileRoute("/widget")({
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
  component: WidgetPage,
});

const SNIPPET = `<script
  src="https://aistudio.sasto.host/widget.js"
  data-agent="support-bot"
  data-lang="np"
  defer
></script>`;

const OPTIONS = [
  { key: "data-agent", val: "string", note: "Which trained agent answers on this site." },
  { key: "data-lang", val: "np | en | auto", note: "Reply language. Auto matches the visitor." },
  { key: "data-position", val: "right | left", note: "Which corner the launcher sits in." },
  { key: "data-greeting", val: "string", note: "First message shown when the widget opens." },
  { key: "data-theme", val: "dark | light", note: "Match your site's palette." },
];

const POINTS = [
  { t: "One line, any stack", d: "WordPress, Shopify, Webflow, React, plain HTML — the script works everywhere." },
  { t: "Trained on your site", d: "Point it at your pages and PDFs; answers cite your real content, not guesses." },
  { t: "Lead capture", d: "Collects name, number and intent, then pushes to your inbox, Sheets or CRM." },
  { t: "Loads fast", d: "Under 30KB, lazy-loaded, and it never blocks your page from rendering." },
];

function WidgetPage() {
  const [copied, setCopied] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Channel · Website"
        title="An AI chat widget your visitors actually get answers from"
        description="Paste one script tag and your website starts answering pricing, delivery, availability and support questions instantly — in Nepali or English, around the clock."
        actions={
          <>
            <PrimaryLink href="https://aistudio.sasto.host/chat">Create your widget</PrimaryLink>
            <GhostLink href="/docs#widget">Widget docs</GhostLink>
          </>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Install"
              title="Copy, paste, done"
              description="Add the snippet before your closing body tag. Everything else — tone, language, knowledge — is configured in the studio."
            />
            <ul className="mt-10 flex flex-col">
              {POINTS.map((p, i) => (
                <Reveal key={p.t} delay={i * 70} as="li">
                  <div className="border-t border-border py-4">
                    <p className="text-sm font-medium">{p.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={140}>
            <div className="surface overflow-hidden">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  index.html
                </span>
                <button
                  type="button"
                  onClick={() => {
                    void navigator.clipboard.writeText(SNIPPET);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1600);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[0.7rem] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[0.76rem] leading-relaxed text-muted-foreground">
                <code>{SNIPPET}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Configuration"
          title="Every option, in one table"
        />
        <Reveal delay={100}>
          <div className="surface mt-12 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Attribute</th>
                  <th className="px-4 py-3 font-medium">Value</th>
                  <th className="px-4 py-3 font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {OPTIONS.map((o) => (
                  <tr key={o.key} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-mono text-xs text-foreground">{o.key}</td>
                    <td className="px-4 py-3 font-mono text-xs">{o.val}</td>
                    <td className="px-4 py-3 text-muted-foreground">{o.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <PrimaryLink href="https://aistudio.sasto.host/chat">Get the snippet</PrimaryLink>
            <GhostLink href="/pricing">Compare plans</GhostLink>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
