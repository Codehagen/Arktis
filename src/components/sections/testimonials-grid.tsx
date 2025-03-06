import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function TestimonialsGrid() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:px-0">
        <div className="relative z-10 max-w-2xl space-y-6">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Verdsatt av virksomheter over hele Norge
          </h2>
          <p className="text-balance">
            Arktis AI er mer enn bare teknologi. Vi bygger verktøy og tjenester
            som hjelper bedrifter i ulike bransjer med å bli mer effektive,
            innovative og kundefokuserte.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <img
                className="h-6 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/nike.svg"
                alt="Statoil Logo"
                height="24"
                width="auto"
              />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Arktis AI har transformert måten vi behandler og analyserer
                  data på. Deres omfattende AI-løsninger har betydelig
                  akselerert våre beslutningsprosesser. Fleksibiliteten til å
                  tilpasse hvert aspekt gir oss mulighet til å møte våre unike
                  utfordringer. Arktis AI har virkelig revolusjonert vår
                  tilnærming til dataanalyse.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/shekinah.webp"
                      alt="Thomas Eriksen"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>TE</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">Thomas Eriksen</cite>
                    <span className="text-muted-foreground block text-sm">
                      Teknologidirektør, Equinor
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Arktis AI er virkelig ekstraordinært og svært praktisk. En
                  ekte gullgruve for moderne bedrifter som ønsker å utnytte
                  kraften i kunstig intelligens på en enkel måte.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/jonathan.webp"
                      alt="Silje Nordgård"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Silje Nordgård</cite>
                    <span className="text-muted-foreground block text-sm">
                      Digitaliseringsleder, Posten Norge
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Flott arbeid med å skape intuitive AI-løsninger. Dette er
                  blant de mest brukervennlige systemene vi har implementert i
                  vår virksomhet de siste årene!
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/yucel.webp"
                      alt="Jan Olsen"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>JO</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Jan Olsen</cite>
                    <span className="text-muted-foreground block text-sm">
                      CIO, SpareBank 1
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="card variant-mixed">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Vi har frigjort flere timer hver uke ved å bruke Arktis AI.
                  Det lar våre ansatte fokusere på kreativt og strategisk arbeid
                  istedenfor repetitive oppgaver.
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/rodrigo.webp"
                      alt="Kari Solberg"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>KS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Kari Solberg</p>
                    <span className="text-muted-foreground block text-sm">
                      Daglig leder, Nordic Media AS
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
