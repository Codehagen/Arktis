import Image from "next/image";

export function Partners() {
  return (
    <section className="bg-background relative z-10 py-16">
      <div className="m-auto max-w-5xl px-6">
        <h2 className="text-center text-lg font-medium">
          Våre partnere på tvers av bransjer
        </h2>
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <img
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/nvidia.svg"
            alt="Equinor Logo"
            height="20"
            width="auto"
          />
          <img
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/column.svg"
            alt="DNB Logo"
            height="16"
            width="auto"
          />
          <img
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/github.svg"
            alt="Telenor Logo"
            height="16"
            width="auto"
          />
          <img
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/nike.svg"
            alt="SpareBank 1 Logo"
            height="20"
            width="auto"
          />
          <img
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/laravel.svg"
            alt="Posten Logo"
            height="16"
            width="auto"
          />
          <img
            className="h-7 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/lilly.svg"
            alt="Gjensidige Logo"
            height="28"
            width="auto"
          />
          <img
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
            alt="OBOS Logo"
            height="20"
            width="auto"
          />
          <img
            className="h-6 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/openai.svg"
            alt="Schibsted Logo"
            height="24"
            width="auto"
          />
          <img
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
            alt="Elkjøp Logo"
            height="16"
            width="auto"
          />
          <img
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/vercel.svg"
            alt="NRK Logo"
            height="20"
            width="auto"
          />
          <img
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/zapier.svg"
            alt="Finn.no Logo"
            height="20"
            width="auto"
          />
        </div>
      </div>
    </section>
  );
}
