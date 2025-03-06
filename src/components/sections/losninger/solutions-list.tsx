"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChartBig,
  BrainCircuit,
  MessageSquareText,
  FileSearch,
  Zap,
  Database,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    id: "data-analytics",
    title: "AI Dataanalyse",
    description:
      "Avansert analyse av store datamengder for å avdekke trender, mønstre og innsikt som gir beslutningsstøtte.",
    icon: BarChartBig,
    features: [
      "Prediktiv analyse og prognoser",
      "Visualisering av komplekse data",
      "Anomali-deteksjon og alarmering",
      "Tilpasset dashboards og rapporter",
    ],
    color: "blue",
  },
  {
    id: "nlp",
    title: "Tekstanalyse & NLP",
    description:
      "Automatisert behandling av tekst og språk for å forstå, analysere og generere innhold effektivt.",
    icon: FileSearch,
    features: [
      "Automatisk dokumentklassifisering",
      "Sentiment-analyse og meningsuttrekking",
      "Tekst-sammendrag og informasjonsuttrekking",
      "Flerspråklig støtte og oversettelse",
    ],
    color: "purple",
  },
  {
    id: "chatbot",
    title: "Intelligente Chatbots",
    description:
      "Samtaleroboter som naturlig kommuniserer med kunder, besvarer spørsmål og løser henvendelser automatisk.",
    icon: MessageSquareText,
    features: [
      "Naturlig samtaleflyt med kontekstforståelse",
      "Integrasjon med eksisterende systemer",
      "Flerspråklig støtte og spesialiserte kunnskapsområder",
      "Kontinuerlig forbedring gjennom samtaledata",
    ],
    color: "teal",
  },
  {
    id: "ml",
    title: "Maskinlæringsmodeller",
    description:
      "Skreddersydde algoritmer som lærer av data og optimaliserer prosesser tilpasset din virksomhets behov.",
    icon: BrainCircuit,
    features: [
      "Beslutningsstøttesystemer",
      "Bildegjenkjenning og klassifisering",
      "Prediktivt vedlikehold",
      "Personalisering og anbefalinger",
    ],
    color: "orange",
  },
  {
    id: "automation",
    title: "Prosessautomatisering",
    description:
      "Effektivisering av arbeidsflyt og rutineoppgaver gjennom intelligente automatiseringsløsninger.",
    icon: Zap,
    features: [
      "Automatisert dokumentbehandling",
      "Intelligent skjemagjenkjenning",
      "Arbeidsflyt-optimalisering",
      "Reduksjon av manuelle prosesser",
    ],
    color: "green",
  },
  {
    id: "big-data",
    title: "Stordata & AI-plattformer",
    description:
      "Komplette løsninger for håndtering, analyse og utnyttelse av store datamengder med AI-teknologi.",
    icon: Database,
    features: [
      "Skalerbar datahåndtering og lagring",
      "Sanntids dataanalyse og innsikt",
      "Integrasjon med eksisterende systemer",
      "Sikker håndtering av sensitive data",
    ],
    color: "red",
  },
];

export function SolutionsList() {
  return (
    <section id="losninger" className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Våre AI-løsninger
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Vi skreddersyr avansert AI-teknologi for å løse spesifikke
            utfordringer og skape merverdi for norske virksomheter på tvers av
            bransjer.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-${solution.color}-100 dark:bg-${solution.color}-900/20`}
              >
                <solution.icon
                  className={`h-6 w-6 text-${solution.color}-600 dark:text-${solution.color}-400`}
                />
              </div>

              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p className="mt-2 flex-1 text-muted-foreground">
                {solution.description}
              </p>

              <ul className="mt-4 space-y-2">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={`mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-${solution.color}-500`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t">
                <Button variant="link" className="px-0" asChild>
                  <Link
                    // href={`/losninger/${solution.id}`}
                    href="#"
                    className="group flex items-center gap-1"
                  >
                    <span>Lær mer</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
