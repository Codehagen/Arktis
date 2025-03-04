export function Stats() {
  return (
    <section className="bg-zinc-50 py-12 md:py-20 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Arktisk AI i tall
          </h2>

          <p>
            Arktisk AI er i rask utvikling og blir stadig mer enn bare
            teknologi. Vi bygger et økosystem av intelligente løsninger som
            hjelper virksomheter på tvers av bransjer med å øke produktivitet og
            kvalitet.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">70%</div>
            <p>Gjennomsnittlig tidsbesparelse</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">15+</div>
            <p>Bransjer betjent</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">97%</div>
            <p>Kundetilfredshet</p>
          </div>
        </div>
      </div>
    </section>
  );
}
