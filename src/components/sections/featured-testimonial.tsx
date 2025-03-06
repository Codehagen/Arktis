export function FeaturedTestimonial() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-blue-600">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl">
          <blockquote>
            <p className="text-lg font-semibold sm:text-xl md:text-3xl">
              Å implementere Arktis AI i vår virksomhet har forvandlet måten vi
              jobber på. Den intuitive teknologien har gitt oss muligheten til å
              redusere manuelle prosesser drastisk, samtidig som kvaliteten på
              arbeidet vårt har blitt betydelig bedre. Dette er fremtiden for
              norsk næringsliv.
            </p>

            <div className="mt-12 flex items-center gap-6">
              <img
                className="h-7 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                alt="Telenor Logo"
                height="20"
                width="auto"
              />
              <div className="space-y-1 border-l pl-6">
                <cite className="font-medium">Kristin Bergersen</cite>
                <span className="text-muted-foreground block text-sm">
                  Innovasjonsdirektør, Telenor
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
