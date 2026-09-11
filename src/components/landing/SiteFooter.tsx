const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "WhatsApp Automation", href: "#whatsapp" },
      { label: "Chat Widget", href: "#widget" },
      { label: "Doko AI API", href: "#api" },
      { label: "Studio Chat", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Customers", href: "#customers" },
      { label: "Create account", href: "https://aistudio.sasto.host/chat" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#api" },
      { label: "API Reference", href: "#api" },
      { label: "FAQ", href: "#faq" },
      { label: "Sign in", href: "https://aistudio.sasto.host/chat" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="grid size-8 place-items-center rounded-lg text-sm font-bold text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-ember)" }}
              >
                डो
              </span>
              <span className="font-display text-[0.95rem] font-semibold">Doko AI</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Doko AI by SastoHost — AI automation built for Nepali businesses. WhatsApp
              agents, embeddable chat, and a developer-first AI API, all under one studio.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SastoHost AI Studio. Doko AI — Nepal&rsquo;s AI. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#top" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
