import Link from "next/link";
import Image from "next/image";
import { Container, SectionTitle, CtaLink, CategoryCard } from "@/components/ui";
import CategoryHero from "@/components/CategoryHero";

const TYPES = [
  {
    id: "klik",
    title: "Klik laminaat",
    eyebrow: "Snel & sterk",
    caption: "Snel gelegd, eindeloos houtbeeld, sterke toplaag.",
    href: "#klik",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "visgraat",
    title: "Visgraat laminaat",
    eyebrow: "Iconisch",
    caption: "Het visgraat patroon, in een sterke en betaalbare uitvoering.",
    href: "#visgraat",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "watervast",
    title: "Watervast laminaat",
    eyebrow: "Voor de hele woning",
    caption: "Geschikt voor keuken en badkamer — eindelijk laminaat overal.",
    href: "#watervast",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "tegel",
    title: "Tegel laminaat",
    eyebrow: "Steenlook",
    caption: "De look van tegel, het comfort van laminaat.",
    href: "#tegel",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "wit",
    title: "Wit laminaat",
    eyebrow: "Licht & ruimtelijk",
    caption: "Witte tinten die een ruimte groter laten lijken.",
    href: "#wit",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "restpartijen",
    title: "Restpartijen",
    eyebrow: "Voordeel",
    caption: "Sterk afgeprijsde partijen — op = op.",
    href: "#restpartijen",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1100&q=75",
  },
];

const SERIES = [
  { id: "poseidon", title: "Poseidon", meta: "Watervast — onze populairste" },
  { id: "neptune", title: "Neptune", meta: "Topserie, breed assortiment" },
  { id: "floorlife", title: "Floorlife", meta: "Tijdloze houtdessins" },
  { id: "heritage", title: "Heritage", meta: "Klassieke uitstraling" },
  { id: "portwood", title: "Portwood", meta: "Premium toplaag" },
  { id: "maris", title: "Maris", meta: "Watervast & stoer" },
  { id: "ambiant", title: "Ambiant", meta: "Modern en betaalbaar" },
  { id: "top-line", title: "Top Line", meta: "Best verkocht" },
  { id: "quality-line", title: "Quality Line", meta: "Prijs/kwaliteit kampioen" },
  { id: "budget-line", title: "Budget Line", meta: "Voor de slimme kiezer" },
];

export default function Laminaat() {
  return (
    <>
      <CategoryHero
        eyebrow="Laminaat"
        title="Een vloer voor het hele leven, voor elk budget."
        intro="Sterk, modern en in elk denkbaar decor. Onze laminaatcollecties zijn gemaakt om dagelijks gebruik moeiteloos op te vangen."
        image="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1900&q=75"
        cta={{ label: "Bekijk soorten", href: "#soorten" }}
      />

      <section id="soorten" className="py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="Soorten"
            title="Welk laminaat past bij u?"
            intro="Van klassiek klik tot watervast — alle types op een rij."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {TYPES.map((t) => (
              <div key={t.id} id={t.id}>
                <CategoryCard {...t} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6 relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1500&q=75"
                alt="Poseidon watervast laminaat"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-6" id="poseidon">
              <p className="eyebrow text-muted">Poseidon · onze huisserie</p>
              <h2 className="display mt-3 text-3xl md:text-5xl leading-[1.05]">
                Watervast laminaat, eindelijk overal te leggen.
              </h2>
              <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft/85">
                Met onze Poseidon-serie hoeft u niet meer te kiezen tussen
                comfort en praktisch. Geschikt voor keuken én badkamer, een
                superkern die water niet door laat, en een houtdessin dat niet
                van echt te onderscheiden is.
              </p>
              <div className="mt-7 flex gap-4">
                <CtaLink href="/showrooms" variant="solid">
                  Bekijk in showroom
                </CtaLink>
                <CtaLink href="#series" variant="underline">
                  Alle series
                </CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="series" className="py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="Series"
            title="Tien laminaatseries voor elk huis."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-line border border-line">
            {SERIES.map((s) => (
              <Link
                key={s.id}
                id={s.id}
                href={`#${s.id}`}
                className="bg-bone hover:bg-cream transition-colors p-6 md:p-7"
              >
                <p className="display text-[18px]">{s.title}</p>
                <p className="mt-1.5 text-[12.5px] text-muted">{s.meta}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
