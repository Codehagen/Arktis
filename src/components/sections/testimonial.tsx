import Image from "next/image";

export function Testimonial() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:px-0">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Arktisk AI frigjør verdifull tid for virksomheter
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/payments.png"
                className="hidden rounded-[15px] dark:block"
                alt="AI-drevet dataanalyse"
                width={1207}
                height={929}
              />
              <Image
                src="/payments-light.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="AI-drevet dataanalyse"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Arktisk AI utvikler seg til å bli mer enn bare teknologi.{" "}
              <span className="text-accent-foreground font-bold">
                Vi støtter et helt økosystem
              </span>{" "}
              — fra tilpassede løsninger til sømløse integrasjoner.
            </p>
            <p className="text-muted-foreground">
              Med våre AI-løsninger kan bedrifter automatisere tidkrevende
              prosesser og isteden fokusere på strategisk arbeid, innovasjon og
              kundeopplevelser.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Å implementere Arktisk AI i våre prosesser har vært
                  transformerende. Den betydelige tidsbesparelsen har gitt oss
                  mulighet til å fokusere på de mest verdiskapende aktivitetene.
                  Kvaliteten på vårt arbeid har samtidig økt markant.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">
                    Morten Andersen, Digital Direktør i Nordisk Innovasjon AS
                  </cite>
                  <img
                    className="h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nordisk Innovasjon Logo"
                    height="20"
                    width="auto"
                  />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
