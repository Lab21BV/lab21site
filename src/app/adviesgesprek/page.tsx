import Link from "next/link";
import Image from "next/image";
import { Container, SectionTitle, CtaLink } from "@/components/ui";
import { SHOWROOMS } from "@/lib/site";

export const metadata = {
  title: "Plan een adviesgesprek — LAB21",
  description:
    "Plan kosteloos een persoonlijk adviesgesprek in een van onze twaalf showrooms. Vind de dichtstbijzijnde winkel en kies direct een moment dat u uitkomt.",
};

const HERO =
  "https://images.unsplash.com/photo-1556909114-44e3e9399a2e?auto=format&fit=crop&w=1900&q=75";

export default function Adviesgesprek() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[52vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src={HERO}
            alt="Adviesgesprek in een LAB21 showroom"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          <Container className="relative h-full flex items-end pb-12 md:pb-16">
            <div className="max-w-xl text-bone">
              <p className="eyebrow opacity-90">Persoonlijk &amp; kosteloos</p>
              <h1 className="display mt-4 text-4xl md:text-5xl leading-[1.05]">
                Plan een adviesgesprek bij u in de buurt.
              </h1>
              <p className="mt-5 text-[16px] leading-relaxed opacity-90 max-w-md">
                Onze vloerexperts nemen alle tijd voor uw verhaal. Voel,
                vergelijk en kies — zonder verkooppraat.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Stap 1"
            title="Kies uw dichtstbijzijnde showroom."
            intro="Twaalf vestigingen door heel Nederland. Elke showroom heeft een eigen team van vloerspecialisten."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-line">
            {SHOWROOMS.map((s) => (
              <Link
                key={s.city}
                href={`#plan-${s.city.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-bone hover:bg-cream transition-colors p-6 md:p-7 group"
              >
                <p className="display text-[19px] md:text-[20px] leading-tight text-ink">
                  {s.city}
                </p>
                <p className="mt-1.5 text-[12.5px] text-muted">
                  {"note" in s && s.note ? s.note : "Bezoek onze showroom"}
                </p>
                <p className="mt-6 text-[12px] tracking-[0.16em] uppercase text-ink group-hover:text-clay transition-colors">
                  Plan een afspraak →
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="plan-amersfoort"
        className="bg-cream py-16 md:py-24 border-t border-line/60"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <p className="eyebrow text-muted">Stap 2</p>
              <h2 className="display mt-3 text-3xl md:text-4xl leading-[1.05]">
                Kies een moment dat u uitkomt.
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft/85">
                Reserveer direct een tijdslot bij uw favoriete adviseur. Wij
                bevestigen uw afspraak per e-mail, met routebeschrijving en
                contactgegevens van de showroom.
              </p>
              <ul className="mt-8 space-y-3 text-[14.5px] text-ink-soft/90">
                <li className="flex gap-3">
                  <span className="text-tan">—</span> Adviesgesprek van circa 45
                  minuten
                </li>
                <li className="flex gap-3">
                  <span className="text-tan">—</span> Gratis, vrijblijvend en
                  zonder verkoopdruk
                </li>
                <li className="flex gap-3">
                  <span className="text-tan">—</span> Neem gerust foto&apos;s of
                  plattegronden mee
                </li>
              </ul>
              <div className="mt-10">
                <CtaLink href="/showrooms">Liever eerst rondkijken?</CtaLink>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="bg-bone border border-line/70 aspect-[4/3] md:aspect-[5/4] flex items-center justify-center text-center p-10">
                <div>
                  <p className="eyebrow text-muted">Calendly</p>
                  <p className="display mt-3 text-2xl md:text-3xl leading-snug">
                    Hier verschijnt de boekingskalender.
                  </p>
                  <p className="mt-4 text-[14px] text-muted max-w-sm mx-auto">
                    Plaats hier de Calendly embed van de geselecteerde showroom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
