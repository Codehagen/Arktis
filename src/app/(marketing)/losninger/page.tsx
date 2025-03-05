import { constructMetadata } from "@/lib/utils";
import { SolutionsHero } from "@/components/sections/losninger/solutions-hero";
import { SolutionsList } from "@/components/sections/losninger/solutions-list";
import { SolutionsUseCases } from "@/components/sections/losninger/solutions-use-cases";
import Footer from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

export const metadata = constructMetadata({
  title: "Løsninger - Arktis AI",
  description:
    "Utforsk våre skreddersydde AI-løsninger for norske virksomheter. Fra automatisering og dataanalyse til prediktive modeller og chatbots - vi hjelper din bedrift å utnytte potensialet i kunstig intelligens.",
});

export default function Losninger() {
  return (
    <main>
      <Header />
      <SolutionsHero />
      <SolutionsList />
      <SolutionsUseCases />
      <Footer />
    </main>
  );
}
