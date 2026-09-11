import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Lineage } from "@/components/landing/Lineage";
import { Products } from "@/components/landing/Products";
import { WhatsAppSteps } from "@/components/landing/WhatsAppSteps";
import { WidgetSection } from "@/components/landing/WidgetSection";
import { ApiSection } from "@/components/landing/ApiSection";
import { Channels } from "@/components/landing/Channels";
import { WhyTeams } from "@/components/landing/WhyTeams";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { ClosingCta } from "@/components/landing/ClosingCta";
import { SiteFooter } from "@/components/landing/SiteFooter";

const TITLE = "Doko AI — Nepal's AI for WhatsApp, Web & Automation";
const DESCRIPTION =
  "Doko AI by SastoHost AI Studio: WhatsApp AI automation, an embeddable chat widget, mobile & web chat, and an OpenAI-compatible API. NPR pricing, Nepali and English.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Lineage />
        <Products />
        <WhatsAppSteps />
        <WidgetSection />
        <ApiSection />
        <Channels />
        <WhyTeams />
        <Pricing />
        <Testimonials />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
