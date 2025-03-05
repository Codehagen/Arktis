import { constructMetadata } from "@/lib/utils";
import { AboutHero } from "@/components/sections/om-oss/about-hero";
import { TeamSection } from "@/components/sections/om-oss/team-section";
import Footer from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

export const metadata = constructMetadata({
  title: "Om oss - Arktis AI",
  description:
    "Bli kjent med teamet bak Arktis AI. Vi leverer skreddersydde AI-løsninger for norske virksomheter med fokus på innovasjon, kvalitet og resultater.",
});

export default function OmOss() {
  return (
    <main>
      <Header />
      <AboutHero />
      <Footer />
    </main>
  );
}
