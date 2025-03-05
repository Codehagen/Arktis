"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { LogoStroke } from "@/components/logo-stroke";
import { TeamSection } from "./team-section";

export function AboutHero() {
  return (
    <>
      <section className="pt-16 md:pt-32 relative">
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--foreground)/0.7)_1px,transparent_1px)] bg-[size:40px_40px] opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background"></div>
          <div className="absolute inset-x-0 top-1/2 h-1/2 bg-gradient-to-t from-background/80 to-transparent"></div>
          <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-background to-transparent"></div>
          <div className="absolute top-0 left-0 h-[20%] w-[20%] bg-gradient-to-br from-background via-background/70 to-transparent"></div>
          <div className="absolute top-0 right-0 h-[20%] w-[20%] bg-gradient-to-bl from-background via-background/70 to-transparent"></div>
        </div>

        <div className="mx-auto max-w-5xl px-6 pt-32 lg:px-0">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h1 className="text-balance text-center text-4xl font-medium lg:text-7xl">
              Neste Generasjons AI-Plattform
            </h1>
            <p className="mx-auto my-8 max-w-2xl text-lg">
              Arktis AI er mer enn bare algoritmer. Vi skaper et komplett
              økosystem av API-er og verktøy som hjelper bedrifter og utviklere
              å innovere.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl space-y-16 px-6 md:space-y-32">
          <img
            className="rounded-(--radius) grayscale"
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Arktis AI team"
            loading="lazy"
          />

          <div className="mx-auto grid max-w-lg gap-6 md:gap-12">
            <span className="text-muted-foreground text-sm">Vår Misjon</span>
            <h2 className="text-4xl font-medium">
              Vi skaper teknologi som effektiviserer norske virksomheter og
              frigjør menneskelig potensial.
            </h2>
            <div className="space-y-6">
              <p className="text-pretty text-muted-foreground">
                Vår visjon er å være Norges ledende aktør innen AI-løsninger for
                næringslivet. Vi kombinerer avansert teknologi med dyp
                forståelse for norske virksomheters behov for å skape løsninger
                som gir reell verdi og konkurransefortrinn.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="gap-1 pr-1.5"
                >
                  <Link href="/kontakt">
                    <span>Kontakt oss</span>
                    <ChevronRight className="size-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-12 text-center">
            <div
              aria-hidden
              className="relative -mx-4 mb-8 aspect-video md:mb-16"
            >
              <div className="bg-background absolute inset-0 m-auto size-fit p-8">
                <LogoStroke className="h-fit w-20 text-blue-500" />
              </div>
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(hsl(var(--foreground)/0.7)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div>
              <h2 className="mb-8 text-4xl font-medium md:mb-16">
                Vår Historie
              </h2>
              <p className="text-pretty text-balance text-accent-foreground mb-4">
                Arktis AI ble grunnlagt i 2025 av en gruppe teknologer og
                forretningsutviklere med en felles visjon om å gjøre avansert
                AI-teknologi tilgjengelig for norske virksomheter, uavhengig av
                størrelse og bransje.
              </p>
              <p className="text-pretty text-balance mt-4">
                Vi så at mange norske bedrifter{" "}
                <span className="font-bold">
                  slet med å utnytte potensialet i sine data
                </span>{" "}
                og brukte uforholdsmessig mye tid på manuelle, repetitive
                oppgaver. Vår misjon ble derfor å utvikle skreddersydde,
                brukervennlige og sikre AI-løsninger som adresserer disse
                utfordringene og skaper målbar verdi.
              </p>
            </div>
          </div>

          <TeamSection />
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
              Klar til å starte din AI-reise?
            </h2>
            <p className="mt-4">
              La oss sammen utforske hvordan AI kan transformere din virksomhet
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  <span>Ta kontakt</span>
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link href="/demo">
                  <span>Book Demo</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
