import { Container, CtaLink } from "@/components/ui";
import CategoryHero from "@/components/CategoryHero";

export const metadata = {
  title: "Meubels — LAB21",
  description:
    "Tafels, banken en kasten van Europese makers. Zorgvuldig geselecteerd om uw vloer en interieur te laten samenkomen.",
};

const RUBRIEKEN = [
  { t: "Eettafels", d: "Massief eiken en walnoot in tijdloze vormen." },
  { t: "Banken", d: "Modulair en gemaakt om jaren mee te gaan." },
  { t: "Kasten", d: "Statig en functioneel — op maat leverbaar." },
  { t: "Accessoires", d: "Vloerkleden, verlichting en wooninspiratie." },
];

export default function Meubels() {
  return (
    <>
      <CategoryHero
        eyebrow="Meubels"
        title="Het complete plaatje."
        intro="Wij geloven dat een vloer pas écht leeft als de meubels kloppen. Onze meubels komen uit Europa — van makers die we persoonlijk kennen."
        image="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1900&q=75"
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {RUBRIEKEN.map((s) => (
              <div key={s.t} className="bg-bone p-7 md:p-8">
                <p className="display text-[20px] leading-tight">{s.t}</p>
                <p className="mt-3 text-[14px] text-muted leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <CtaLink href="/adviesgesprek" variant="solid">
              Plan een adviesgesprek
            </CtaLink>
            <CtaLink href="/showrooms" variant="outline">
              Bezoek een showroom
            </CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
