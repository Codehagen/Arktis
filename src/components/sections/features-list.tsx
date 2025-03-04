import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

export function FeaturesList() {
  return (
    <section className="pb-16 md:pb-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6 lg:px-0">
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Lynrask</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Reduser tiden for repetitive arbeidsoppgaver fra timer til
              minutter med våre AI-drevne løsninger.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Kraftfull</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Avansert AI som analyserer data og skaper presise, verdifulle
              innsikter tilpasset din virksomhet.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Sikker</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Høyeste standard for datasikkerhet og personvern, med full
              GDPR-etterlevelse for din trygghet.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">Sømløs</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Enkel integrasjon med dine eksisterende systemer via våre
              fleksible API-løsninger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
