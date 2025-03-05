import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Kontakt salg
        </h1>
        <p className="mt-4 text-center">
          Vi hjelper deg med å finne riktig plan og pris for din virksomhet.
        </p>

        <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
          <div>
            <h2 className="text-xl font-semibold">
              La oss hjelpe deg til riktig sted
            </h2>
            <p className="mt-4 text-sm">
              Ta kontakt med vårt salgsteam! Vi er ivrige etter å lære mer om
              hvordan du planlegger å bruke applikasjonen vår.
            </p>
          </div>

          <form
            action=""
            className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
          >
            <div>
              <Label htmlFor="name">Fullt navn</Label>
              <Input type="text" id="name" required />
            </div>

            <div>
              <Label htmlFor="email">Jobb-epost</Label>
              <Input type="email" id="email" required />
            </div>

            <div>
              <Label htmlFor="country">Land/Region</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Velg land/region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">DR Kongo</SelectItem>
                  <SelectItem value="2">USA</SelectItem>
                  <SelectItem value="3">Frankrike</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="website">Selskapets nettside</Label>
              <Input type="url" id="website" />
              <span className="text-muted-foreground inline-block text-sm">
                Må starte med 'https'
              </span>
            </div>

            <div>
              <Label htmlFor="job">Jobbfunksjon</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Velg jobbfunksjon" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Finans</SelectItem>
                  <SelectItem value="2">Utdanning</SelectItem>
                  <SelectItem value="3">Juridisk</SelectItem>
                  <SelectItem value="4">Mer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="msg">Melding</Label>
              <Textarea id="msg" rows={3} />
            </div>

            <Button>Send inn</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
