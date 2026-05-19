import Image from "next/image";
import { Container, SectionTitle, CtaLink, CategoryCard } from "@/components/ui";
import CategoryHero from "@/components/CategoryHero";

const STIJLEN = [
  {
    title: "Scandinavisch licht",
    eyebrow: "Stijl",
    caption: "Witte eiken, veel licht en rust.",
    href: "#scandi",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1100&q=75",
  },
  {
    title: "Warm landelijk",
    eyebrow: "Stijl",
    caption: "Geleefd eiken met meubels van karakter.",
    href: "#landelijk",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1100&q=75",
  },
  {
    title: "Modern industrieel",
    eyebrow: "Stijl",
    caption: "Donker eiken, staal en beton.",
    href: "#industrieel",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1100&q=75",
  },
  {
    title: "Klassiek visgraat",
    eyebrow: "Stijl",
    caption: "Het patroon van de Hollandse meesters.",
    href: "#klassiek",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1100&q=75",
  },
];

const ARTIKELEN = [
  {
    t: "Welke vloer past bij vloerverwarming?",
    d: "Wat u moet weten over warmtegeleiding, klimaat en uitzetting.",
    h: "#vloerverwarming",
  },
  {
    t: "Eiken sorteringen — wat zijn de verschillen?",
    d: "Rustiek, select, country: een gids door de termen.",
    h: "#sorteringen",
  },
  {
    t: "Hoe meet ik mijn vloer correct op?",
    d: "Stap-voor-stap, met tips voor lastige hoeken en deurkozijnen.",
    h: "#opmeten",
  },
  {
    t: "PVC of laminaat — wat kies ik?",
    d: "Beide hebben hun kracht. Wij zetten ze eerlijk naast elkaar.",
    h: "#pvc-vs-laminaat",
  },
];

export default function Inspiratie() {
  return (
    <>
      <CategoryHero
        eyebrow="Inspiratie"
        title="Mooie vloeren beginnen met een idee."
        intro="Stijlen, voorbeelden en artikelen uit onze kennisbank. Voor wie wil dromen, en voor wie wil weten."
        image="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1900&q=75"
      />

      <section id="stijlen" className="py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="Vier stijlen"
            title="Welke sfeer past bij u?"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {STIJLEN.map((s) => (
              <CategoryCard key={s.title} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <section id="kennisbank" className="bg-cream py-24 md:py-32">
        <Container>
          <div className="flex items-end justify-between gap-8 mb-12">
            <SectionTitle
              eyebrow="Kennisbank"
              title="Alles wat u moet weten."
              intro="Onze adviseurs schrijven de artikelen. Geen verkooppraat — alleen helder, eerlijk advies."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
            {ARTIKELEN.map((a) => (
              <a
                key={a.h}
                href={a.h}
                className="bg-bone p-8 md:p-10 hover:bg-cream transition-colors"
              >
                <p className="display text-2xl leading-tight">{a.t}</p>
                <p className="mt-3 text-[14.5px] text-muted leading-relaxed">
                  {a.d}
                </p>
                <p className="mt-7 text-[12px] tracking-[0.16em] uppercase">
                  Lees artikel →
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section id="nieuwbouw" className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6 relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1500&q=75"
                alt="Nieuwbouw woning interieur"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-6">
              <p className="eyebrow text-muted">Nieuwbouw woning</p>
              <h2 className="display mt-3 text-3xl md:text-5xl leading-[1.05]">
                Verhuizen naar een nieuwbouwhuis?
              </h2>
              <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft/85">
                Een nieuwbouw vraagt om een vloer die meedenkt — denk aan
                droogtijd van dekvloer, vloerverwarming en akoestiek. Onze
                nieuwbouw-experts begeleiden u van keuze tot oplevering.
              </p>
              <div className="mt-8 flex gap-4">
                <CtaLink href="/contact" variant="solid">
                  Vraag een nieuwbouw-advies
                </CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="brochures" className="bg-ink text-bone py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow text-bone/70">Brochures</p>
              <h2 className="display mt-3 text-3xl md:text-4xl leading-[1.05]">
                Liever rustig thuis bladeren?
              </h2>
              <p className="mt-4 text-[15px] text-bone/75 leading-relaxed">
                Download onze brochures voor houten vloeren, PVC en laminaat —
                of laat ze gratis toesturen.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-bone text-ink px-6 py-3 text-[13px] tracking-[0.16em] uppercase hover:bg-tan hover:text-bone transition-colors"
              >
                Hout · PDF
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-bone text-ink px-6 py-3 text-[13px] tracking-[0.16em] uppercase hover:bg-tan hover:text-bone transition-colors"
              >
                PVC · PDF
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-bone text-ink px-6 py-3 text-[13px] tracking-[0.16em] uppercase hover:bg-tan hover:text-bone transition-colors"
              >
                Laminaat · PDF
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
