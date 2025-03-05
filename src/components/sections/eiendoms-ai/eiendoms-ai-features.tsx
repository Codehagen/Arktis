"use client";

import {
  Clock,
  Link as LinkIcon,
  PenLine,
  BarChart3,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export function EiendomsAIFeatures() {
  return (
    <section className="py-12 md:py-20" id="features">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Eiendoms-AI funksjoner
          </h2>
          <p className="text-muted-foreground">
            Vår AI-plattform automatiserer produksjonen av salgsoppgaver og
            bildetekster for eiendomsmeglere, med tilpassede løsninger som
            integreres direkte i dine eksisterende systemer.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              <h3 className="text-sm font-medium">Salgsoppgave på minutter</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Fra timer til minutter - generer komplette boligprospekter basert
              på eksisterende data fra fagsystemet.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <PenLine className="size-4 text-primary" />
              <h3 className="text-sm font-medium">Automatisk bildetekst</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-genererte beskrivelser av boligbilder som fremhever de
              viktigste selgende punktene ved hver eiendom.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LinkIcon className="size-4 text-primary" />
              <h3 className="text-sm font-medium">Sømløs integrasjon</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Kobler seg direkte til fagsystemene Vitec Next og Visma Core med
              sikker API-tilkobling.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ArrowUpRight className="size-4 text-primary" />
              <h3 className="text-sm font-medium">
                Tilpasset etter din profil
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Tekst og innhold genereres i samsvar med din merkevare og
              skrivestil for konsistent kommunikasjon.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <BarChart3 className="size-4 text-primary" />
              <h3 className="text-sm font-medium">
                Økt effektivitet og presisjon
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Reduser menneskelige feil og frigjør verdifull tid til
              klientkontakt og salgsaktiviteter.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" />
              <h3 className="text-sm font-medium">Forbedret kundeopplevelse</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Leverer høykvalitets boligbeskrivelser som engasjerer potensielle
              kjøpere og skaper interesse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
