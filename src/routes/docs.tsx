import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { PageShell, PageHero, PrimaryLink, GhostLink } from "@/components/landing/PageShell";
import { Section, SectionHeading } from "@/components/landing/SectionHeading";
import { Reveal } from "@/components/landing/Reveal";
import { cn } from "@/lib/utils";

const TITLE = "Doko AI API Docs — SastoHost AI Studio";
const DESCRIPTION =
  "Full API reference for Doko AI by SastoHost AI Studio: authentication, chat completions, streaming, embeddings, WhatsApp send, widget config, errors and rate limits.";

export const Route = createFileRoute("/docs")({
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
  component: DocsPage,
});

const NAV = [
  { id: "quickstart", label: "Quickstart" },
  { id: "auth", label: "Authentication" },
  { id: "models", label: "Models" },
  { id: "chat", label: "Chat completions" },
  { id: "streaming", label: "Streaming" },
  { id: "embeddings", label: "Embeddings" },
  { id: "whatsapp", label: "WhatsApp send" },
  { id: "widget", label: "Widget config" },
  { id: "errors", label: "Errors" },
  { id: "limits", label: "Rate limits" },
];

const MODELS = [
  { name: "doko-ai", ctx: "128k", note: "General assistant, Nepali + English", price: "NPR 0.30 / 1k tok" },
  { name: "doko-ai-pro", ctx: "200k", note: "Long documents, reasoning, tool use", price: "NPR 0.90 / 1k tok" },
  { name: "doko-ai-fast", ctx: "32k", note: "High-volume chat & WhatsApp replies", price: "NPR 0.12 / 1k tok" },
  { name: "doko-embed", ctx: "8k", note: "1536-dim embeddings for search", price: "NPR 0.02 / 1k tok" },
];

const ERRORS = [
  { code: "400", name: "invalid_request", note: "Malformed JSON or missing required field." },
  { code: "401", name: "invalid_api_key", note: "Key missing, revoked or from another workspace." },
  { code: "402", name: "quota_exhausted", note: "Wallet balance or plan quota finished. Top up in the studio." },
  { code: "429", name: "rate_limited", note: "Too many requests. Back off and retry with jitter." },
  { code: "500", name: "server_error", note: "Something broke on our side. Safe to retry." },
];

function Code({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="surface overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <button
          type="button"
          onClick={() => {
            void navigator.clipboard.writeText(code);
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
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border pt-10 first:border-0 first:pt-0">
      <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-5 flex flex-col gap-5 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function DocsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Developer reference"
        title="Doko AI API documentation"
        description="Doko AI runs inside SastoHost AI Studio and speaks the OpenAI wire format. Change your base URL, drop in a studio key, and every SDK you already use keeps working."
        actions={
          <>
            <PrimaryLink href="https://aistudio.sasto.host/chat">Get an API key</PrimaryLink>
            <GhostLink href="#quickstart">Read the quickstart</GhostLink>
          </>
        }
      />

      <div className="shell grid gap-12 py-16 lg:grid-cols-[200px_1fr] lg:py-24">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 flex flex-col gap-1">
            <p className="eyebrow mb-3">On this page</p>
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-col gap-12">
          <Block id="quickstart" title="Quickstart">
            <p>
              Every request goes to <span className="font-mono text-foreground">https://aistudio.sasto.host/v1</span>.
              Create a key in the studio, export it, and make your first call.
            </p>
            <Code
              label="curl"
              code={`export SASTOHOST_API_KEY="sk-doko-..."

curl https://aistudio.sasto.host/v1/chat/completions \\
  -H "Authorization: Bearer $SASTOHOST_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "doko-ai",
    "messages": [
      { "role": "user", "content": "Namaste! Dashain offer lekhdinus na" }
    ]
  }'`}
            />
            <Code
              label="node — openai sdk"
              code={`import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.SASTOHOST_API_KEY,
  baseURL: "https://aistudio.sasto.host/v1",
});

const res = await client.chat.completions.create({
  model: "doko-ai",
  messages: [{ role: "user", content: "Summarise this invoice" }],
});

console.log(res.choices[0].message.content);`}
            />
          </Block>

          <Block id="auth" title="Authentication">
            <p>
              Keys are workspace-scoped and sent as a bearer token. Never ship a key in browser
              code — call the API from your server, or use the chat widget token for public pages.
            </p>
            <Code label="header" code={`Authorization: Bearer sk-doko-xxxxxxxxxxxxxxxx`} />
          </Block>

          <Block id="models" title="Models">
            <div className="surface overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-medium">Model</th>
                    <th className="px-4 py-3 font-medium">Context</th>
                    <th className="px-4 py-3 font-medium">Best for</th>
                    <th className="px-4 py-3 font-medium">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {MODELS.map((m) => (
                    <tr key={m.name} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 font-mono text-xs text-foreground">{m.name}</td>
                      <td className="px-4 py-3">{m.ctx}</td>
                      <td className="px-4 py-3">{m.note}</td>
                      <td className="px-4 py-3 font-mono text-xs">{m.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>

          <Block id="chat" title="Chat completions">
            <p>
              <span className="font-mono text-foreground">POST /v1/chat/completions</span> — supports
              system prompts, multi-turn history, JSON mode and tool calling.
            </p>
            <Code
              label="response"
              code={`{
  "id": "chatcmpl_doko_8h2n",
  "model": "doko-ai",
  "choices": [{
    "index": 0,
    "message": { "role": "assistant", "content": "Dashain Dhamaka! 20% off ..." },
    "finish_reason": "stop"
  }],
  "usage": { "prompt_tokens": 42, "completion_tokens": 142, "total_tokens": 184 }
}`}
            />
          </Block>

          <Block id="streaming" title="Streaming">
            <p>
              Set <span className="font-mono text-foreground">"stream": true</span> to receive
              server-sent events. The stream ends with <span className="font-mono text-foreground">data: [DONE]</span>.
            </p>
            <Code
              label="sse"
              code={`data: {"choices":[{"delta":{"content":"Nam"}}]}
data: {"choices":[{"delta":{"content":"aste"}}]}
data: [DONE]`}
            />
          </Block>

          <Block id="embeddings" title="Embeddings">
            <p>Turn your product catalogue or docs into vectors for retrieval.</p>
            <Code
              label="curl"
              code={`curl https://aistudio.sasto.host/v1/embeddings \\
  -H "Authorization: Bearer $SASTOHOST_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "model": "doko-embed", "input": ["Khukuri bag, medium size"] }'`}
            />
          </Block>

          <Block id="whatsapp" title="WhatsApp send">
            <p>
              Send a templated or free-form WhatsApp message from a connected number. Replies are
              handled by your Doko AI agent automatically.
            </p>
            <Code
              label="curl"
              code={`curl https://aistudio.sasto.host/v1/whatsapp/send \\
  -H "Authorization: Bearer $SASTOHOST_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+9779800000000",
    "text": "Tapaiko order confirm bhayo. Bholi 11am ma delivery.",
    "agent": "sales-bot"
  }'`}
            />
          </Block>

          <Block id="widget" title="Widget config">
            <p>Drop one script tag on any page. Configure tone, language and greeting in the studio.</p>
            <Code
              label="html"
              code={`<script
  src="https://aistudio.sasto.host/widget.js"
  data-agent="support-bot"
  data-lang="np"
  data-position="right"
  defer
></script>`}
            />
          </Block>

          <Block id="errors" title="Errors">
            <ul className="flex flex-col">
              {ERRORS.map((e) => (
                <li key={e.code} className="flex gap-4 border-t border-border py-3 first:border-0">
                  <span className="w-10 shrink-0 font-mono text-xs text-foreground">{e.code}</span>
                  <div>
                    <p className="font-mono text-xs text-foreground">{e.name}</p>
                    <p className="mt-0.5 text-xs">{e.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Block>

          <Block id="limits" title="Rate limits">
            <p>
              Free keys allow 20 requests/min. Arambh 120, Utkarsh 600, Uttam custom. Every response
              carries <span className="font-mono text-foreground">x-ratelimit-remaining</span> and
              <span className="font-mono text-foreground"> x-ratelimit-reset</span> headers.
            </p>
          </Block>
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Next step"
          title="Ship your first Doko AI integration today"
          description="Create a workspace, generate a key, and go live on WhatsApp, your website widget or your own app."
        />
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryLink href="https://aistudio.sasto.host/chat">Open the studio</PrimaryLink>
            <GhostLink href="/contact">Talk to us</GhostLink>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
