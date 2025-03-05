"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Building2,
  Truck,
  Store,
  BadgeDollarSign,
  Building,
  Shield,
} from "lucide-react";

const industries = [
  {
    id: "realestate",
    name: "Eiendom",
    icon: Building,
    image: "/images/realestate-ai.jpg",
    imageAlt: "AI-løsninger for eiendomsbransjen",
    title: "Prospekt på autopilot!",
    description:
      "Avansert AI Backoffice for salgsoppgaver og bildetekst som effektiviserer eiendomssalg, sparer tid og øker kvaliteten.",
    benefits: [
      "Automatisk generering av salgsprospekter basert på eiendomsdata",
      "AI-drevet bildetekstgenerering som fremhever eiendommens fordeler",
      "Tidsbesparende automatisering av repetitive oppgaver",
      "Konsistent høy kvalitet på alle prospekter",
    ],
  },
  {
    id: "insurance",
    name: "Forsikring",
    icon: Shield,
    image: "/images/insurance-ai.jpg",
    imageAlt: "AI-løsninger for forsikringsbransjen",
    title: "Datainnsamling og strukturering av skademeldinger",
    description:
      "Automatisering av skadebehandling gjennom intelligent tolkning av ustrukturerte data fra kunder, som drastisk reduserer saksbehandlingstid.",
    benefits: [
      "AI-analyse av ustrukturert tekst og bilder fra kundene",
      "Automatisk identifisering og strukturering av nøkkeldetaljer",
      "Automatisert skadevurdering basert på polisevilkår",
      "Raskere responstid og effektiv skadebehandling",
    ],
  },
  {
    id: "finance",
    name: "Finans",
    icon: BadgeDollarSign,
    image: "/images/finance-ai.jpg",
    imageAlt: "AI-løsninger for finansbransjen",
    title: "Reduser risiko og øk effektiviteten i finansielle tjenester",
    description:
      "Kraftige AI-løsninger som øker sikkerhet, reduserer risiko og automatiserer komplekse prosesser i finansinstitusjoner.",
    benefits: [
      "Avansert risikostyring og svindeldeteksjon",
      "Automatisert kredittvurdering og lånesøknadsprosesser",
      "Prediktiv analyse for investeringsbeslutninger",
      "Personlige økonomiske assistenter for kunder",
    ],
  },
  {
    id: "retail",
    name: "Handel",
    icon: Store,
    image: "/images/retail-ai.jpg",
    imageAlt: "AI-løsninger for handelsbransjen",
    title: "Forbedre kundeopplevelse og optimaliser lagerstyring",
    description:
      "AI-løsninger for handelsbransjen som øker salg, forbedrer kunderelasjoner og optimaliserer drift og lagerstyring.",
    benefits: [
      "Personaliserte kundeopplevelser basert på kjøpshistorikk og preferanser",
      "Intelligent lagerstyring og automatisk bestilling",
      "Prediksjon av trender og optimal prissetting",
      "Kunde-chatbots for kundeservice og support 24/7",
    ],
  },
  {
    id: "manufacturing",
    name: "Produksjon",
    icon: Building2,
    image: "/images/manufacturing-ai.jpg",
    imageAlt: "AI-løsninger for produksjonsbransjen",
    title: "Optimalisering av produksjonsprosesser og kvalitetskontroll",
    description:
      "Integrerte AI-systemer som effektiviserer produksjon, reduserer nedetid og sikrer konsistent produktkvalitet.",
    benefits: [
      "Prediktivt vedlikehold som forhindrer produksjonsstopp",
      "Visuell kvalitetskontroll med maskinlæring",
      "Optimalisering av produksjonslinjer for økt effektivitet",
      "Automatisert inventar- og forsyningskjedestyring",
    ],
  },
  {
    id: "logistics",
    name: "Logistikk",
    icon: Truck,
    image: "/images/logistics-ai.jpg",
    imageAlt: "AI-løsninger for logistikkbransjen",
    title: "Optimaliser ruter og reduser transportkostnader",
    description:
      "Smarte logistikkløsninger som optimaliserer transport, reduserer kostnader og forbedrer leveringspresisjon.",
    benefits: [
      "Intelligent ruteoptimalisering som reduserer drivstofforbruk",
      "Prediktiv analyse for behovsplanlegging",
      "Automatisert ordresporing og varsling",
      "Optimalisering av lagerplassering og pakking",
    ],
  },
];

export function SolutionsUseCases() {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeIndustry =
    industries.find((industry) => industry.id === activeTab) || industries[0];

  return (
    <section className="py-16 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AI-løsninger for din bransje
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Vi har erfaring med å levere skreddersydde AI-løsninger på tvers av
            bransjer, med fokus på de spesifikke utfordringene hver sektor står
            overfor.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry) => (
            <Button
              key={industry.id}
              variant={activeTab === industry.id ? "default" : "outline"}
              onClick={() => setActiveTab(industry.id)}
              className="flex items-center gap-2"
            >
              <industry.icon className="h-4 w-4" />
              <span>{industry.name}</span>
            </Button>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{activeIndustry.title}</h3>
            <p className="text-muted-foreground">
              {activeIndustry.description}
            </p>

            <div className="mt-8 space-y-4">
              <h4 className="font-medium">Nøkkelfordeler:</h4>
              <ul className="space-y-3">
                {activeIndustry.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <Button size="lg">Kontakt oss for demo</Button>
            </div>
          </div>

          {/* Image side - using a placeholder since actual images might not exist */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl lg:order-last">
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center bg-gradient-to-br",
                activeTab === "realestate"
                  ? "from-blue-900/80 to-blue-600/80"
                  : activeTab === "insurance"
                  ? "from-indigo-900/80 to-indigo-600/80"
                  : activeTab === "finance"
                  ? "from-green-900/80 to-green-600/80"
                  : activeTab === "retail"
                  ? "from-cyan-900/80 to-cyan-600/80"
                  : activeTab === "manufacturing"
                  ? "from-orange-900/80 to-orange-600/80"
                  : "from-purple-900/80 to-purple-600/80"
              )}
            >
              <div className="text-center text-white">
                <activeIndustry.icon className="mx-auto h-20 w-20 opacity-90" />
                <h3 className="mt-4 text-2xl font-bold">
                  {activeIndustry.name}
                </h3>
                <p className="mt-2 max-w-xs mx-auto">
                  AI-drevne løsninger optimalisert for{" "}
                  {activeIndustry.name.toLowerCase()}sbransjen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
