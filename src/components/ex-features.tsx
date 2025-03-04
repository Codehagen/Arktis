import Image from "next/image";

export function ExampleFeatures() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6 lg:px-0">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">
            Arktisk AI transformerer virksomheter med intelligente løsninger
          </h2>
          <p className="max-w-sm sm:ml-auto">
            Gi din virksomhet kraft til å fokusere på verdiskapende arbeid, mens
            våre AI-løsninger automatiserer tidkrevende oppgaver på tvers av
            bransjer.
          </p>
        </div>
        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-88/36 relative">
            <div className="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent"></div>
            <Image
              src="/mail-upper.png"
              className="absolute inset-0 z-10"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <Image
              src="/mail-back.png"
              className="hidden dark:block"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <Image
              src="/mail-back-light.png"
              className="dark:hidden"
              alt="payments illustration light"
              width={2797}
              height={1137}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
