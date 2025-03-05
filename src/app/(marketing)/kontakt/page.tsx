import { constructMetadata } from "@/lib/utils";

import Footer from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import ContactSection from "@/components/contact";
export const metadata = constructMetadata({
  title: "Kontakt oss - Arktis AI",
  description:
    "Ta kontakt med Arktis AI for en prat om hvordan våre AI-løsninger kan tilpasses din virksomhet. Vi tilbyr skreddersydde AI-tjenester for norske bedrifter.",
});

export default function Kontakt() {
  return (
    <main>
      <Header />
      <ContactSection />
      <Footer />
    </main>
  );
}
