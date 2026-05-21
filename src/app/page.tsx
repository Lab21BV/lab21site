import Image from "next/image";
import Link from "next/link";
import { Container, SectionTitle, CtaLink, CategoryCard } from "@/components/ui";
import { SHOWROOMS } from "@/lib/site";

const HERO_IMG =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1900&q=75";

const CATEGORIES = [
  {
    title: "Vloeren",
    eyebrow: "Onze passie",
    caption:
      "Hout, PVC en laminaat. Meer dan 2.000 vloeren — gemaakt voor generaties wonen.",
    href: "/houten-vloeren",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1100&q=75",
  },
  {
    title: "Raamdecoratie",
    eyebrow: "Op maat",
    caption:
      "Gordijnen, jaloezieën en plissé — afgestemd op uw vloer en interieur.",
    href: "/raamdecoratie",
    image:
      "https://images.unsplash.com/photo-1505692433770-36f19f51681d?auto=format&fit=crop&w=1100&q=75",
  },
  {
    title: "Meubels",
    eyebrow: "Het complete plaatje",
    caption:
      "Tafels, banken en kasten van Europese makers — zorgvuldig geselecteerd.",
    href: "/meubels",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1100&q=75",
  },
];

const WOONSTIJLEN = [
  {
    label: "Nordic",
    meta: "Licht, rustig en natuurlijk",
    href: "/inspiratie#nordic",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=70",
  },
  {
    label: "Original Dutch",
    meta: "Tijdloze eiken vloer als basis",
    href: "/inspiratie#original-dutch",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=70",
  },
  {
    label: "Country",
    meta: "Warm, geleefd en karaktervol",
    href: "/inspiratie#country",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=70",
  },
  {
    label: "Highland",
    meta: "Diepe tonen en rijke texturen",
    href: "/inspiratie#highland",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=70",
  },
  {
    label: "Urban",
    meta: "Strak, modern en stedelijk",
    href: "/inspiratie#urban",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=70",
  },
  {
    label: "Klassiek",
    meta: "Visgraat met grandeur",
    href: "/inspiratie#klassiek",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=70",
  },
];

const USPS = [
  { t: "12 showrooms", d: "Persoonlijk advies in heel Nederland" },
  { t: "Eigen legdienst", d: "Vakkundig gelegd door onze specialisten" },
  { t: "Prijsgarantie", d: "Bij ons koopt u altijd voordelig" },
  { t: "Trustpilot · 9,2 / 10", d: "4.000+ reviews van klanten" },
];

const EXPERTISE_IMG =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1900&q=75";

const SHOP_HOTSPOTS = [
  { label: "Eiken visgraat", href: "/houten-vloeren#visgraat", x: "32%", y: "62%" },
  { label: "Lambrisering", href: "/inspiratie#wanddecoratie", x: "70%", y: "38%" },
  { label: "Eettafel", href: "/meubels#tafels", x: "55%", y: "75%" },
];

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[82vh] min-h-[580px] max-h-[860px] w-full overflow-hidden">
          <Image
            src={HERO_IMG}
            alt="Eiken vloer in een lichte woonkamer"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <Container className="relative h-full flex items-end pb-16 md:pb-24">
            <div className="max-w-xl text-bone">
              <p className="eyebrow opacity-90">Onze belofte</p>
              <h1 className="display mt-4 text-4xl md:text-6xl leading-[1.02]">
                De juiste vloer, gelegd door mensen die u kent.
              </h1>
              <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed max-w-md opacity-90">
                Bij LAB21 vindt u een vloer die past bij uw huis, uw budget en
                uw leven. Eerlijk advies, een eigen legdienst en service die
                blijft — ook na de oplevering.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink href="/adviesgesprek" variant="solid">
                  Plan een adviesgesprek
                </CtaLink>
                <Link
                  href="/showrooms"
                  className="inline-flex items-center gap-2 border border-bone/60 text-bone px-6 py-3 text-[13px] tracking-[0.16em] uppercase hover:bg-bone hover:text-ink transition-colors"
                >
                  Vind een showroom
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="border-b border-line/60 bg-bone">
        <Container className="py-6">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
            {USPS.map((u) => (
              <li key={u.t} className="flex flex-col">
                <span className="text-[14px] font-medium text-ink">{u.t}</span>
                <span className="text-[12.5px] text-muted">{u.d}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pt-24 md:pt-32">
        <Container>
          <div className="flex items-end justify-between gap-8 mb-12">
            <SectionTitle
              eyebrow="De collectie"
              title="Het complete interieur, onder één dak."
              intro="Begin bij de vloer, eindig met het complete plaatje. Drie categorieën — vakkundig op elkaar afgestemd."
            />
            <div className="hidden md:block">
              <CtaLink href="/inspiratie">Bekijk inspiratie</CtaLink>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {CATEGORIES.map((c) => (
              <CategoryCard key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24 md:py-32 mt-24 md:mt-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6">
              <p className="eyebrow text-muted">Sinds 1999</p>
              <h2 className="display mt-3 text-3xl md:text-5xl leading-[1.05]">
                Ambacht dat u kunt voelen.
              </h2>
              <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft/85">
                Geen massaproductie, maar collecties die we zelf samenstellen
                met fabrieken die we persoonlijk kennen. Onze eigen leggers
                weten precies wat een vloer nodig heeft — van eerste meting tot
                laatste plint. Dat ambacht is wat LAB21 onderscheidt.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CtaLink href="/over-lab21" variant="solid">
                  Over LAB21
                </CtaLink>
                <CtaLink href="/showrooms" variant="outline">
                  Bezoek een showroom
                </CtaLink>
              </div>
            </div>
            <div className="md:col-span-6 relative aspect-[4/3] overflow-hidden">
              <Image
                src={EXPERTISE_IMG}
                alt="Eiken visgraat in een sfeervolle woonkamer met meubels"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              {SHOP_HOTSPOTS.map((h) => (
                <Link
                  key={h.label}
                  href={h.href}
                  style={{ left: h.x, top: h.y }}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  aria-label={`Shop ${h.label}`}
                >
                  <span className="block w-6 h-6 rounded-full bg-bone/95 ring-2 ring-bone shadow-md flex items-center justify-center">
                    <span className="block w-2 h-2 rounded-full bg-ink" />
                  </span>
                  <span className="absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap bg-ink text-bone text-[11px] tracking-[0.16em] uppercase px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {h.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-6 text-[12.5px] text-muted">
            Tip: klik op de stippen in de foto om direct naar dat product te
            gaan.
          </p>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="mb-10 md:mb-14">
          <div className="flex items-end justify-between gap-8">
            <SectionTitle
              eyebrow="Woonstijlen"
              title="Vind de stijl die bij u past."
              intro="Zes woonstijlen, van Nordic licht tot klassieke grandeur. Scroll erdoorheen en kies de wereld die u aanspreekt."
            />
            <div className="hidden md:block">
              <CtaLink href="/inspiratie">Alle stijlen</CtaLink>
            </div>
          </div>
        </Container>
        <div className="mx-auto max-w-[1600px] pl-6 md:pl-10">
          <div className="flex gap-5 md:gap-7 overflow-x-auto pb-6 snap-x snap-mandatory pr-6 md:pr-10 [scrollbar-width:thin]">
            {WOONSTIJLEN.map((w) => (
              <Link
                key={w.label}
                href={w.href}
                className="group flex-none w-[78vw] sm:w-[46vw] lg:w-[32vw] xl:w-[28vw] snap-start block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                  <Image
                    src={w.image}
                    alt={w.label}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 640px) 46vw, 78vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-bone">
                    <p className="display text-[26px] md:text-[30px] leading-tight">
                      {w.label}
                    </p>
                    <p className="mt-1.5 text-[13.5px] opacity-90">{w.meta}</p>
                  </div>
                </div>
                <p className="mt-4 text-[12px] tracking-[0.16em] uppercase text-ink group-hover:text-clay transition-colors">
                  Bekijk de stijl →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div>
              <p className="display text-4xl md:text-5xl">9,2 / 10</p>
              <p className="mt-2 text-[13px] tracking-[0.18em] uppercase text-bone/70">
                Trustpilot · 4.000+ reviews
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="display text-2xl md:text-3xl leading-snug">
                &ldquo;Eerlijk advies, mooie collectie en een nette legdienst.
                We hebben nu eiken visgraat door het hele huis — exact wat we
                voor ogen hadden.&rdquo;
              </p>
              <p className="mt-5 text-[13px] text-bone/70">
                — Familie de Vries, Utrecht
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative">
        <div className="relative h-[62vh] min-h-[460px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1900&q=75"
            alt="Een LAB21 showroom van binnen"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <Container className="relative h-full flex items-center">
            <div className="max-w-2xl text-bone">
              <p className="eyebrow opacity-90">Klaar voor de volgende stap?</p>
              <h2 className="display mt-4 text-3xl md:text-5xl leading-[1.05]">
                Plan een afspraak in uw dichtstbijzijnde winkel.
              </h2>
              <p className="mt-5 text-[15.5px] md:text-[16.5px] leading-relaxed opacity-90 max-w-lg">
                Geen verkooppraat, wél eerlijk advies. Kom langs, voel de
                materialen en laat ons met u meedenken — kosteloos en
                vrijblijvend.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/adviesgesprek"
                  className="inline-flex items-center gap-2 bg-bone text-ink px-7 py-3.5 text-[13px] tracking-[0.18em] uppercase hover:bg-tan hover:text-bone transition-colors"
                >
                  Plan uw adviesgesprek
                </Link>
                <Link
                  href="/showrooms"
                  className="inline-flex items-center gap-2 border border-bone/70 text-bone px-7 py-3.5 text-[13px] tracking-[0.18em] uppercase hover:bg-bone hover:text-ink transition-colors"
                >
                  Bekijk alle showrooms
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="Showrooms"
            title="Twaalf vestigingen, één belofte."
            intro="Bekijk, voel en vergelijk in het echt. Onze adviseurs nemen alle tijd voor uw verhaal."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-line">
            {SHOWROOMS.map((s) => (
              <Link
                key={s.city}
                href={`/showrooms#${s.city.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-bone hover:bg-cream transition-colors p-6 md:p-7 group"
              >
                <p className="display text-[19px] md:text-[20px] leading-tight text-ink">
                  {s.city}
                </p>
                <p className="mt-1.5 text-[12.5px] text-muted">
                  {"note" in s && s.note ? s.note : "Bezoek onze showroom"}
                </p>
                <p className="mt-6 text-[12px] tracking-[0.16em] uppercase text-ink group-hover:text-clay transition-colors">
                  Routebeschrijving →
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
