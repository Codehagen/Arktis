"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Server, ExternalLink, ArrowRight } from "lucide-react";

export function EiendomsAIIntegrations() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-medium md:text-4xl mb-6">
            Integrasjoner som forenkler arbeidsflyten
          </h2>
          <p className="text-muted-foreground">
            Eiendoms-AI kobler seg direkte til fagsystemene dine for å gi en
            sømløs brukeropplevelse og maksimal effektivitet i din daglige
            drift.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
          {/* Vitec Next Integration */}
          <div className="relative rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 mr-4">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Vitec Next Integrasjon</h3>
            </div>
            <p className="mb-6 text-muted-foreground">
              Vår API-integrasjon med Vitec Next lar deg generere komplette
              boligbeskrivelser og bildetekster direkte innenfor systemet du
              allerede bruker.
            </p>
            <div className="space-y-3 mb-6">
              <div className="pl-4 border-l-2 border-primary">
                <p className="text-sm">
                  Automatisk datainnhenting fra eksisterende boligdata
                </p>
              </div>
              <div className="pl-4 border-l-2 border-primary">
                <p className="text-sm">
                  Direkte innsetting av tekst i riktige felt i Vitec Next
                </p>
              </div>
              <div className="pl-4 border-l-2 border-primary">
                <p className="text-sm">
                  Tilgang fra både desktop og mobilversjonen
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm" asChild>
                <Link href="/kontakt" className="flex items-center">
                  <span>Spør om integrasjon</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visma Core Integration */}
          <div className="relative rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 mr-4">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Visma Core Integrasjon</h3>
            </div>
            <p className="mb-6 text-muted-foreground">
              Med vår Visma Core-integrasjon kan du enkelt få AI-genererte
              boligbeskrivelser og bildetekster som sømløst importeres til dine
              eiendomsdokumenter.
            </p>
            <div className="space-y-3 mb-6">
              <div className="pl-4 border-l-2 border-primary">
                <p className="text-sm">
                  Fungerer med både eldre og nyere versjoner av Visma Core
                </p>
              </div>
              <div className="pl-4 border-l-2 border-primary">
                <p className="text-sm">
                  Ett-klikks generering av boligprospekter
                </p>
              </div>
              <div className="pl-4 border-l-2 border-primary">
                <p className="text-sm">
                  Automatisk formatering tilpasset systemets maler
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm" asChild>
                <Link href="/kontakt" className="flex items-center">
                  <span>Spør om integrasjon</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Developer / API section */}
        <div className="mt-16 pt-12 border-t">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 mr-4">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium">API-tilgang for utviklere</h3>
            </div>
            <p className="mb-6 text-muted-foreground">
              For de som ønsker å bygge egne integrasjoner eller har spesifikke
              behov, tilbyr vi en robust API for tilgang til
              Eiendoms-AI-funksjonalitet.
            </p>

            <div className="bg-muted/50 p-4 rounded-md mb-6 overflow-x-auto">
              <pre className="text-xs text-muted-foreground">
                <code>{`// Eksempel API-kall for å generere boligbeskrivelse
const response = await fetch('https://api.arktis.ai/eiendom/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    propertyData: {
      address: 'Storgata 1, 0155 Oslo',
      size: 85,
      rooms: 3,
      features: ['balkong', 'parkett', 'heis']
    }
  })
});

const data = await response.json();
console.log(data.description);`}</code>
              </pre>
            </div>

            <div className="flex justify-end">
              <Button asChild>
                <Link href="/kontakt" className="flex items-center">
                  <span>Kontakt for API-tilgang</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
