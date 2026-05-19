import Link from "next/link";
import Image from "next/image";
import { Container, SectionTitle, CtaLink, CategoryCard } from "@/components/ui";
import CategoryHero from "@/components/CategoryHero";

const TYPES = [
  {
    id: "klik",
    title: "Klik PVC",
    eyebrow: "Snel & schoon",
    caption: "Zwevend gelegd over een ondervloer — vandaag besteld, morgen mooi.",
    href: "#klik",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "lijm",
    title: "Lijm PVC",
    eyebrow: "Plat & stil",
    caption: "Volledig verlijmd voor maximale geluidsdemping en stevigheid.",
    href: "#lijm",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "visgraat",
    title: "PVC visgraat",
    eyebrow: "Vanaf €29,95",
    caption: "Meer dan honderd dessins — het iconische patroon in betaalbare uitvoering.",
    href: "#visgraat",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "hongaars",
    title: "Hongaarse punt",
    eyebrow: "Bijzonder",
    caption: "Klassieke chevron — strak, elegant en uniek voor uw interieur.",
    href: "#hongaars",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "tegel",
    title: "PVC tegel",
    eyebrow: "Stijlvol",
    caption: "Steenlook met de warmte en het comfort van PVC.",
    href: "#tegel",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "klik-urban",
    title: "Click Urban",
    eyebrow: "Onze huiscollectie",
    caption: "Onze populairste klik PVC, in meer dan twintig kleuren.",
    href: "#klik",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1100&q=75",
  },
];

const BRANDS = [
  "Moduleo",
  "Floorlife",
  "Ambiant",
  "Belakos",
  "mFlor",
  "Cavallino",
  "Gelasta",
  "Cortina",
  "Dynamic",
  "Enigma",
  "Easyfit",
  "Hebeta",
  "Ligno",
  "Montinique",
];

export default function PvcVloeren() {
  return (
    <>
      <CategoryHero
        eyebrow="PVC vloeren"
        title="Sterk, stil en watervast."
        intro="PVC combineert comfort en design. Geschikt voor elke ruimte, van keuken tot slaapkamer — met meer dan twintig topmerken in onze showrooms."
        image="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1900&q=75"
        cta={{ label: "Bekijk soorten", href: "#soorten" }}
      />

      <section id="soorten" className="py-24 md:py-32">
        <Container>
          <div className="flex items-end justify-between gap-8 mb-12">
            <SectionTitle
              eyebrow="Soorten"
              title="Klik, lijm of visgraat?"
              intro="Drie families, elk met hun eigen kracht. Onze adviseurs helpen u kiezen op basis van uw ruimte, ondergrond en budget."
            />
            <div className="hidden md:block">
              <CtaLink href="/showrooms">Vraag advies</CtaLink>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
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
            <div className="md:col-span-6">
              <p className="eyebrow text-muted">PVC visgraat</p>
              <h2 className="display mt-3 text-3xl md:text-5xl leading-[1.05]">
                Visgraat — al vanaf €29,95 per m².
              </h2>
              <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft/85">
                Het patroon dat een ruimte transformeert, nu binnen ieders
                bereik. Meer dan honderd dessins in klik en lijm — kom kijken,
                voelen en vergelijken in onze showrooms.
              </p>
              <div className="mt-7 flex gap-4">
                <CtaLink href="/showrooms" variant="solid">
                  Naar de showroom
                </CtaLink>
                <CtaLink href="#merken" variant="underline">
                  Bekijk merken
                </CtaLink>
              </div>
            </div>
            <div className="md:col-span-6 relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1500&q=75"
                alt="PVC visgraat detail"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="merken" className="py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="Topmerken"
            title="Het beste PVC van Europa."
            intro="Wij werken met alle gerenommeerde fabrikanten. Zo vinden we altijd de vloer die past — bij uw smaak én uw budget."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-line border border-line">
            {BRANDS.map((b) => (
              <Link
                key={b}
                href={`#${b.toLowerCase()}`}
                id={b.toLowerCase()}
                className="bg-bone hover:bg-cream transition-colors px-5 py-7 text-center"
              >
                <span className="display text-[17px] text-ink">{b}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink text-bone py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div>
              <p className="eyebrow text-bone/70">Legdienst</p>
              <h3 className="display mt-3 text-2xl">Wij leggen het voor u.</h3>
              <p className="mt-3 text-[14px] text-bone/75 leading-relaxed">
                Eigen legteams door heel Nederland, vakkundig en netjes.
              </p>
            </div>
            <div>
              <p className="eyebrow text-bone/70">Onderhoud</p>
              <h3 className="display mt-3 text-2xl">PVC houdt van weinig.</h3>
              <p className="mt-3 text-[14px] text-bone/75 leading-relaxed">
                Schoon water, een platte mop — meer hoeft het niet te zijn.
              </p>
            </div>
            <div>
              <p className="eyebrow text-bone/70">Productinformatie</p>
              <h3 className="display mt-3 text-2xl">Eerlijk advies.</h3>
              <p className="mt-3 text-[14px] text-bone/75 leading-relaxed">
                Alles over slijtlagen, geluidsdemping en vloerverwarming op één
                plek.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
