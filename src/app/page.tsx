import Image from "next/image";
import Link from "next/link";
import { Container, SectionTitle, CtaLink, CategoryCard } from "@/components/ui";
import { SHOWROOMS } from "@/lib/site";

const HERO_IMG =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1900&q=75";

const CATEGORIES = [
  {
    title: "Houten vloeren",
    eyebrow: "Tijdloos",
    caption: "Massief eiken, parket en visgraat — gemaakt voor generaties.",
    href: "/houten-vloeren",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1100&q=75",
  },
  {
    title: "PVC vloeren",
    eyebrow: "Veelzijdig",
    caption: "Stil, sterk en watervast — perfect voor het hele huis.",
    href: "/pvc-vloeren",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1100&q=75",
  },
  {
    title: "Laminaat",
    eyebrow: "Voordelig",
    caption: "Modern, sterk en in elk decor — al meer dan 25 jaar onze favoriet.",
    href: "/laminaat",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1100&q=75",
  },
  {
    title: "Visgraat",
    eyebrow: "Iconisch",
    caption: "Het patroon dat een ruimte transformeert — in hout, PVC of laminaat.",
    href: "/houten-vloeren#visgraat",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1100&q=75",
  },
];

const COLLECTIONS = [
  {
    label: "Original Dutch",
    meta: "Eiken plankvloer",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=70",
    href: "/houten-vloeren#original-dutch",
  },
  {
    label: "Nordic",
    meta: "Licht & rustig",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=70",
    href: "/houten-vloeren#nordic",
  },
  {
    label: "Country",
    meta: "Geleefd karakter",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=70",
    href: "/houten-vloeren#country",
  },
  {
    label: "Highland",
    meta: "Diepe tonen",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=700&q=70",
    href: "/houten-vloeren#highland",
  },
  {
    label: "Click Urban",
    meta: "Klik PVC",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=700&q=70",
    href: "/houten-vloeren#click-urban",
  },
  {
    label: "Poseidon",
    meta: "Watervast laminaat",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=700&q=70",
    href: "/laminaat#poseidon",
  },
];

const USPS = [
  { t: "12 showrooms", d: "Persoonlijk advies in heel Nederland" },
  { t: "Gratis stalen", d: "Bestel monsters en bekijk thuis" },
  { t: "Eigen legdienst", d: "Vakkundig gelegd door onze specialisten" },
  { t: "Prijsgarantie", d: "Bij ons koopt u altijd voordelig" },
];

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[78vh] min-h-[560px] max-h-[820px] w-full overflow-hidden">
          <Image
            src={HERO_IMG}
            alt="Eiken vloer in een lichte woonkamer"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
          <Container className="relative h-full flex items-end pb-16 md:pb-24">
            <div className="max-w-xl text-bone">
              <p className="eyebrow opacity-90">De lentecollectie 2026</p>
              <h1 className="display mt-4 text-4xl md:text-6xl leading-[1.02]">
                Een vloer die nooit uit de mode raakt.
              </h1>
              <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed max-w-md opacity-90">
                Van massief eiken visgraat tot watervast laminaat — bij LAB21
                vindt u de vloer die past bij uw huis en uw leven.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink href="/houten-vloeren" variant="solid">
                  Ontdek hout
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

      <section className="border-b border-line/60">
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
              title="Alles wat u zoekt onder één dak."
              intro="Drie hoofdgroepen, oneindig veel mogelijkheden. Kies de basis — wij helpen u met de details."
            />
            <div className="hidden md:block">
              <CtaLink href="/inspiratie">Bekijk inspiratie</CtaLink>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {CATEGORIES.map((c) => (
              <CategoryCard key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-24 md:mt-32">
        <div className="relative h-[60vh] min-h-[460px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1900&q=75"
            alt="Eiken visgraat in een sfeervolle woonkamer"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <Container className="relative h-full flex items-center">
            <div className="max-w-xl text-bone">
              <p className="eyebrow opacity-90">Iconisch</p>
              <h2 className="display mt-3 text-3xl md:text-5xl leading-[1.05]">
                Visgraat — een patroon met geschiedenis.
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed opacity-90 max-w-md">
                Al meer dan honderd jaar het signatuur van de mooiste interieurs.
                Wij maken het toegankelijk in massief eiken, PVC en laminaat.
              </p>
              <div className="mt-7">
                <Link
                  href="/houten-vloeren#visgraat"
                  className="inline-flex items-center gap-2 bg-bone text-ink px-6 py-3 text-[13px] tracking-[0.16em] uppercase hover:bg-tan hover:text-bone transition-colors"
                >
                  Bekijk visgraat collectie
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="flex items-end justify-between gap-8 mb-12">
            <SectionTitle
              eyebrow="Collecties"
              title="Onze huiscollecties."
              intro="Gemaakt in samenwerking met fabrieken in Europa, ontworpen voor het Nederlandse interieur."
            />
            <div className="hidden md:block">
              <CtaLink href="/houten-vloeren">Alle collecties</CtaLink>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-10">
            {COLLECTIONS.map((p) => (
              <Link key={p.label} href={p.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                  <Image
                    src={p.image}
                    alt={p.label}
                    fill
                    sizes="(min-width: 1024px) 16vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-[14px] text-ink">{p.label}</p>
                <p className="text-[12.5px] text-muted">{p.meta}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6 relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-44e3e9399a2e?auto=format&fit=crop&w=1200&q=75"
                alt="Vloerexpert bij LAB21"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-6">
              <p className="eyebrow text-muted">Sinds 1999</p>
              <h2 className="display mt-3 text-3xl md:text-5xl leading-[1.05]">
                Vakmensen met een passie voor vloeren.
              </h2>
              <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft/85">
                Meer dan twintig jaar leveren wij vloeren door heel Nederland.
                Geen massaproductie, maar collecties die we zelf samenstellen
                met fabrieken die we persoonlijk kennen. In onze twaalf
                showrooms staat een team van vloerexperts klaar om u — eerlijk
                en zonder verkooppraat — te helpen kiezen.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CtaLink href="/over-lab21" variant="outline">
                  Over LAB21
                </CtaLink>
                <CtaLink href="/showrooms">Onze showrooms</CtaLink>
              </div>
            </div>
          </div>
        </Container>
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
                “Eerlijk advies, mooie collectie en een nette legdienst. We
                hebben nu eiken visgraat door het hele huis — exact wat we voor
                ogen hadden.”
              </p>
              <p className="mt-5 text-[13px] text-bone/70">
                — Familie de Vries, Utrecht
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
