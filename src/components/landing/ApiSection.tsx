import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

const REQUEST = `curl https://aistudio.sasto.host/v1/chat/completions \\
  -H "Authorization: Bearer $SASTOHOST_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "doko-ai",
    "messages": [
      { "role": "user", "content": "Write a Dashain offer for my store" }
    ]
  }'`;

const RESPONSE = `{
  "id": "chatcmpl_doko_8h2n",
  "model": "doko-ai",
  "choices": [{
    "message": {
      "role": "assistant",
      "content": "Dashain Dhamaka! 20% off ..."
    },
    "finish_reason": "stop"
  }],
  "usage": { "total_tokens": 184 }
}`;

const ENDPOINTS = [
  { method: "POST", path: "/v1/chat/completions", note: "Streaming chat & tool calls" },
  { method: "POST", path: "/v1/embeddings", note: "Vector search over your docs" },
  { method: "POST", path: "/v1/whatsapp/send", note: "Send templated WhatsApp messages" },
  { method: "GET", path: "/v1/usage", note: "Per-key token and cost usage" },
];

export function ApiSection() {
  const [tab, setTab] = useState<"request" | "response">("request");

  return (
    <Section id="api">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <div className="surface overflow-hidden">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <div className="flex gap-1">
                  {(["request", "response"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTab(t)}
                      className={cn(
                        "rounded-md px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider transition-colors",
                        tab === t
                          ? "bg-elevated text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <span className="font-mono text-[0.65rem] text-muted-foreground">
                  aistudio.sasto.host
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[0.76rem] leading-relaxed text-muted-foreground">
                <code>{tab === "request" ? REQUEST : RESPONSE}</code>
              </pre>
            </div>
          </Reveal>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Developer API"
            title="One API key. OpenAI-compatible."
            description="Point your existing SDK at our base URL and keep your code exactly as it is. Keys, quotas and logs live in the studio dashboard."
          />

          <ul className="mt-10 flex flex-col">
            {ENDPOINTS.map((e, i) => (
              <Reveal key={e.path} delay={i * 80} as="li">
                <div className="flex items-center gap-4 border-t border-border py-4">
                  <span className="w-12 shrink-0 font-mono text-[0.65rem] uppercase text-primary">
                    {e.method}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-mono text-sm">{e.path}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{e.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={340}>
            <a
              href="https://aistudio.sasto.host/chat"
              className="press mt-8 inline-flex rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-ember)" }}
            >
              Get your API key
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
