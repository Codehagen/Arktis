import { constructMetadata } from "@/lib/utils";
import { EiendomsAIHero } from "@/components/sections/eiendoms-ai/eiendoms-ai-hero";
import { EiendomsAIFeatures } from "@/components/sections/eiendoms-ai/eiendoms-ai-features";
import { EiendomsAIBenefits } from "@/components/sections/eiendoms-ai/eiendoms-ai-benefits";
import { EiendomsAIIntegrations } from "@/components/sections/eiendoms-ai/eiendoms-ai-integrations";
import Footer from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

export const metadata = constructMetadata({
  title: "Eiendoms-AI - Arktis AI",
  description:
    "Automatiser eiendomsprospekter og bildetekster med vår spesialiserte AI-løsning for eiendomsbransjen. Integrasjoner med Vitec Next og Visma Core for sømløs arbeidsflyt.",
});

export default function EiendomsAI() {
  return (
    <main>
      <Header />
      <EiendomsAIHero />
      <EiendomsAIFeatures />
      <EiendomsAIBenefits />
      <EiendomsAIIntegrations />
      <Footer />
    </main>
  );
}
