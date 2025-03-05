"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function SolutionsHero() {
  return (
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
            Smarte AI-løsninger for din virksomhet
          </h1>
          <p className="mx-auto my-8 max-w-2xl text-lg">
            Vi tilbyr skreddersydde AI-tjenester som effektiviserer
            arbeidsprosesser, avdekker innsikt i data og skaper
            konkurransefortrinn for din bedrift.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/kontakt">
                <span>Diskuter ditt prosjekt</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#losninger">
                <span>Se alle løsninger</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
