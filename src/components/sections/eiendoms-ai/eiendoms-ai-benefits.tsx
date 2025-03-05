"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EiendomsAIBenefits() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-muted/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content side */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 mb-6">
              Spar verdifull tid
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Mer tid til det som skaper verdi
            </h2>
            <p className="text-muted-foreground mb-8">
              Ved å automatisere tidkrevende tekstarbeid kan du fokusere på
              aktiviteter som faktisk genererer inntekter og bygger
              kunderelasjonene dine.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-[24px_1fr] items-start gap-4">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <p>Øk antall salgsoppdrag du kan håndtere samtidig</p>
              </div>

              <div className="grid grid-cols-[24px_1fr] items-start gap-4">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <p>
                  Reduser tiden brukt på administrativt arbeid med opptil 70%
                </p>
              </div>

              <div className="grid grid-cols-[24px_1fr] items-start gap-4">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <p>Skap konsistente og profesjonelle salgsoppgaver hver gang</p>
              </div>

              <div className="grid grid-cols-[24px_1fr] items-start gap-4">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <p>Integrer direkte med dine eksisterende fagsystemer</p>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/kontakt">Få en demo</Link>
              </Button>
            </div>
          </div>

          {/* Testimonial side */}
          <div className="lg:ml-auto">
            <div className="relative">
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <p className="text-lg italic">
                    "Eiendoms-AI har hjulpet oss å kutte tiden vi bruker på å
                    lage salgsoppgaver med over 60%. Nå kan vi bruke mer tid på
                    kundene og mindre tid på papirarbeid."
                  </p>
                  <div className="mt-4">
                    <p className="font-medium">Anna Nygaard</p>
                    <p className="text-sm text-muted-foreground">
                      Daglig leder, KonradsensEiendom
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
