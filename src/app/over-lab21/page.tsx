import Image from "next/image";
import { Container, SectionTitle, CtaLink } from "@/components/ui";
import CategoryHero from "@/components/CategoryHero";

const PILLARS = [
  {
    t: "Eerlijk advies",
    d: "Geen verkooppraat. Onze adviseurs zijn vakmensen — geen verkopers op commissie.",
  },
  {
    t: "Eigen collecties",
    d: "We ontwerpen en kiezen onze houtcollecties samen met fabrieken in Europa.",
  },
  {
    t: "Eigen legdienst",
    d: "Onze vloerleggers werken al jaren bij ons. U krijgt elke keer een vakman.",
  },
  {
    t: "Showrooms door heel Nederland",
    d: "Twaalf vestigingen, zodat goede vloeren bij u in de buurt liggen.",
  },
];

const TIMELINE = [
  { y: "1999", t: "Oprichting LAB21 in Amersfoort." },
  { y: "2006", t: "Eerste eigen huiscollectie eiken: Original Dutch." },
  { y: "2014", t: "Opening flagshipstore Amersfoort." },
  { y: "2019", t: "Twaalfde showroom geopend in Groningen." },
  { y: "2024", t: "Lancering Poseidon — watervast laminaat." },
];

export default function OverLab21() {
  return (
    <>
      <CategoryHero
        eyebrow="Over LAB21"
        title="Een familiebedrijf met passie voor vloeren."
        intro="Sinds 1999 leveren wij vloeren door heel Nederland. Nooit groter geworden dan we zelf konden begeleiden — maar groot genoeg om écht voordeel te bieden."
        image="https://images.unsplash.com/photo-1556909114-44e3e9399a2e?auto=format&fit=crop&w=1900&q=75"
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <p className="eyebrow text-muted">Ons verhaal</p>
              <h2 className="display mt-3 text-3xl md:text-5xl leading-[1.05]">
                Goede vloeren zijn nooit toeval.
              </h2>
            </div>
            <div className="md:col-span-7 text-[15.5px] leading-relaxed text-ink-soft/85 space-y-5">
              <p>
                LAB21 begon in 1999 in Amersfoort als een kleine showroom met
                houten vloeren. Wat ons toen al onderscheidde was dat we onze
                klanten niet zomaar iets verkochten — we kozen mee, dachten mee
                en kwamen langs om te kijken hoe het werd.
              </p>
              <p>
                Vijfentwintig jaar later zijn we uitgegroeid tot dé
                vloerenspecialist van Nederland. Met twaalf showrooms, een
                eigen legdienst en huiscollecties die we zelf ontwerpen — maar
                we werken nog steeds zoals we begonnen. Klein in karakter,
                groot in zorg.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionTitle eyebrow="Onze pijlers" title="Waar wij voor staan." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {PILLARS.map((p) => (
              <div key={p.t} className="bg-bone p-7 md:p-8">
                <p className="display text-[20px] leading-tight">{p.t}</p>
                <p className="mt-3 text-[14px] text-muted leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <p className="eyebrow text-muted">Tijdlijn</p>
              <h2 className="display mt-3 text-3xl md:text-4xl leading-[1.05]">
                Vijfentwintig jaar in vijf momenten.
              </h2>
            </div>
            <div className="md:col-span-7">
              <ul className="border-t border-line">
                {TIMELINE.map((m) => (
                  <li
                    key={m.y}
                    className="flex gap-8 py-6 border-b border-line"
                  >
                    <span className="display text-2xl text-tan w-20 shrink-0">
                      {m.y}
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-soft">
                      {m.t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="duurzaamheid"
        className="relative h-[60vh] min-h-[460px] w-full overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1900&q=75"
          alt="Duurzame eiken vloeren"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <Container className="relative h-full flex items-center">
          <div className="max-w-xl text-bone">
            <p className="eyebrow opacity-90">Duurzaamheid</p>
            <h2 className="display mt-3 text-3xl md:text-5xl leading-[1.05]">
              Hout dat blijft, generaties lang.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed opacity-90 max-w-md">
              Al ons eiken komt uit duurzaam beheerde Europese bossen
              (PEFC/FSC). Onze PVC en laminaat zijn vrij van schadelijke
              stoffen en — net zo belangrijk — gemaakt om lang mee te gaan.
            </p>
            <div className="mt-7">
              <CtaLink href="/contact" variant="solid">
                Stel uw vraag
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      <section id="werken-bij" className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow text-muted">Werken bij LAB21</p>
              <h2 className="display mt-3 text-3xl md:text-4xl leading-[1.05]">
                Word onderdeel van ons team.
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft/85 max-w-md">
                Adviseurs, vloerleggers, logistiek, marketing — wij zoeken
                vakmensen die net als wij geloven dat een vloer méér is dan een
                ondergrond.
              </p>
            </div>
            <div className="md:justify-self-end">
              <CtaLink href="/contact" variant="outline">
                Bekijk vacatures
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
