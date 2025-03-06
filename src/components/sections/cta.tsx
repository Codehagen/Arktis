import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Transformer din virksomhet med AI
          </h2>
          <p className="mt-4">
            Ta kontakt for en uforpliktende demonstrasjon av hvordan Arktis AI
            kan skape verdi for din virksomhet, uansett bransje.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <span>Kom i gang</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <span>Book demo</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
