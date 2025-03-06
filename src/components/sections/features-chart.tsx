import Image from "next/image";
import { Cpu, Zap } from "lucide-react";

export default function FeaturesChart() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:px-0">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Teknologi som hjelper bedrifter å oppnå vekst
        </h2>
        <div className="relative">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p className="text-body">
              Arktis AI utvikler seg kontinuerlig og forbedres hver dag.{" "}
              <span className="text-title font-medium">
                Vi støtter komplette forretningsprosesser
              </span>{" "}
              — fra datainnsamling til analyse og handling.
            </p>
            <p>
              Vår teknologi er skreddersydd for å støtte bedrifters
              arbeidsprosesser, fra første datapunkt til strategiske
              beslutninger, med intelligente løsninger som gjør din virksomhet
              mer konkurransedyktig.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Effektiviserende</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Automatiser repetitive oppgaver og reduser tidsbruk med opptil
                  70% gjennom våre AI-løsninger.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Intelligent</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  AI som kontinuerlig lærer og tilpasser seg din virksomhets
                  unike behov og utfordringer.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0 md:z-0">
            <div
              aria-hidden
              className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"
            ></div>
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2 overflow-hidden">
              <div className="absolute inset-0 z-1 bg-gradient-to-r from-background from-0% via-background via-50% to-transparent to-100% pointer-events-none"></div>
              <Image
                src="/charts.png"
                className="hidden rounded-[12px] dark:block"
                alt="AI-drevet data-analyse i mørk modus"
                width={1207}
                height={929}
              />
              <Image
                src="/charts-light.png"
                className="rounded-[12px] shadow dark:hidden"
                alt="AI-drevet data-analyse i lys modus"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
