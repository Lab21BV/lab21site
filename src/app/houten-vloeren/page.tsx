import Link from "next/link";
import Image from "next/image";
import { Container, SectionTitle, CtaLink, CategoryCard } from "@/components/ui";
import CategoryHero from "@/components/CategoryHero";

const COLLECTIONS = [
  {
    id: "original-dutch",
    title: "Original Dutch",
    eyebrow: "Eiken plankvloer",
    caption: "Authentiek Hollands eiken, klassiek geborsteld en geolied.",
    href: "#original-dutch",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "nordic",
    title: "Nordic",
    eyebrow: "Licht & rustig",
    caption: "Een lichte, witte eiken in Scandinavische sfeer.",
    href: "#nordic",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "country",
    title: "Country",
    eyebrow: "Geleefd karakter",
    caption: "Robuust geborsteld en gerookt, voor warme interieurs.",
    href: "#country",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "highland",
    title: "Highland",
    eyebrow: "Diepe tonen",
    caption: "Donker rookhout met een rijke, warme uitstraling.",
    href: "#highland",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "click-urban",
    title: "Click Urban",
    eyebrow: "Click-vloer",
    caption: "Snel gelegd, eiken look, ideaal voor verbouwingen.",
    href: "#click-urban",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1100&q=75",
  },
  {
    id: "altelier",
    title: "Altelier",
    eyebrow: "Maatwerk",
    caption: "Maatwerk eiken planken, geheel naar uw wens afgewerkt.",
    href: "#altelier",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1100&q=75",
  },
];

const TYPES = [
  { id: "eiken", title: "Eiken vloeren", desc: "Onze grootste familie — van rustig licht tot diep rookbruin." },
  { id: "visgraat", title: "Eiken visgraat", desc: "Het iconische patroon, in plankjes van 60 tot 90 cm." },
  { id: "parket", title: "Parketvloeren", desc: "Massief en multiplank in verschillende afwerkingen." },
  { id: "lamel", title: "Lamelparket", desc: "Stabiele toplaag eiken, geschikt voor vloerverwarming." },
  { id: "restpartijen", title: "Restpartijen", desc: "Wisselende, sterk afgeprijsde partijen — op = op." },
];

const SERVICE_LINKS = [
  { id: "legservice", title: "Legservice", desc: "Vakkundig gelegd door onze eigen specialisten." },
  { id: "onderhoud", title: "Onderhoud", desc: "Olie, was en herstel voor een lang vloerleven." },
  { id: "verwarming", title: "Vloerverwarming", desc: "Welke vloer past bij uw warmtebron?" },
  { id: "info", title: "Productinformatie", desc: "Leggen, sortering, randafwerking — alles op een rij." },
];

export default function HoutenVloeren() {
  return (
    <>
      <CategoryHero
        eyebrow="Houten vloeren"
        title="Massief karakter, gemaakt om te blijven."
        intro="Onze houten vloeren zijn met zorg gekozen Europees eiken. Geborsteld, gerookt of geolied — altijd met respect voor het materiaal."
        image="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1900&q=75"
        cta={{ label: "Bekijk collecties", href: "#collecties" }}
      />

      <section id="collecties" className="py-24 md:py-32">
        <Container>
          <div className="flex items-end justify-between gap-8 mb-12">
            <SectionTitle
              eyebrow="Onze collecties"
              title="Zes huiscollecties eiken."
              intro="Gemaakt in samenwerking met fabrieken in Europa, ontworpen voor het Nederlandse interieur."
            />
            <div className="hidden md:block">
              <CtaLink href="/inspiratie">Bekijk inspiratie</CtaLink>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {COLLECTIONS.map((c) => (
              <div key={c.id} id={c.id}>
                <CategoryCard {...c} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="Soorten"
            title="Welk type past bij uw huis?"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-px bg-line">
            {TYPES.map((t) => (
              <Link
                key={t.id}
                href={`#${t.id}`}
                id={t.id}
                className="bg-bone p-6 md:p-8 hover:bg-cream transition-colors flex flex-col"
              >
                <p className="display text-[20px] leading-tight">{t.title}</p>
                <p className="mt-2 text-[13.5px] text-muted flex-1">{t.desc}</p>
                <p className="mt-6 text-[12px] tracking-[0.16em] uppercase">
                  Meer info →
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1500&q=75"
                alt="Eiken visgraat gelegd in woonkamer"
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div id="visgraat" className="md:col-span-5">
              <p className="eyebrow text-muted">Eiken visgraat</p>
              <h2 className="display mt-3 text-3xl md:text-4xl leading-[1.05]">
                Een patroon dat een ruimte verandert.
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft/85">
                Visgraat brengt rust en richting in een ruimte. Wij leveren het
                in plankjes van 60 tot 90 cm, in verschillende sorteringen en
                afwerkingen — van licht geborsteld eiken tot diep gerookt.
              </p>
              <div className="mt-7 flex gap-4">
                <CtaLink href="/showrooms" variant="solid">
                  Bekijk in showroom
                </CtaLink>
                <CtaLink href="#service" variant="underline">
                  Legservice
                </CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="service" className="bg-ink text-bone py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="Service"
            title="Van advies tot afwerking."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10">
            {SERVICE_LINKS.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="bg-ink p-7 hover:bg-ink-soft transition-colors"
              >
                <p className="display text-[20px] leading-tight">{s.title}</p>
                <p className="mt-2 text-[13.5px] text-bone/70">{s.desc}</p>
                <p className="mt-6 text-[12px] tracking-[0.16em] uppercase text-tan">
                  Meer info →
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
