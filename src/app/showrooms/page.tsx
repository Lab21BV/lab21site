import Link from "next/link";
import Image from "next/image";
import { Container, SectionTitle, CtaLink } from "@/components/ui";
import CategoryHero from "@/components/CategoryHero";
import { SHOWROOMS } from "@/lib/site";

const DETAILS: Record<string, { addr: string; tel: string; hours: string }> = {
  Amersfoort: {
    addr: "Computerweg 12, 3821 AB Amersfoort",
    tel: "033 — 200 00 00",
    hours: "Ma–Za 09:30 — 17:30 · Do 21:00",
  },
  Amsterdam: {
    addr: "Klaprozenweg 75, 1033 NN Amsterdam",
    tel: "020 — 200 00 00",
    hours: "Ma–Za 10:00 — 17:30",
  },
  Breda: {
    addr: "Lunetstraat 13, 4815 AR Breda",
    tel: "076 — 200 00 00",
    hours: "Ma–Za 09:30 — 17:30",
  },
  "Capelle aan den IJssel": {
    addr: "Hoofdweg 91, 2908 LC Capelle aan den IJssel",
    tel: "010 — 200 00 00",
    hours: "Ma–Za 09:30 — 17:30",
  },
  Delft: {
    addr: "Westvest 35, 2611 AZ Delft",
    tel: "015 — 200 00 00",
    hours: "Ma–Za 09:30 — 17:30",
  },
  "Den Bosch": {
    addr: "Rietveldenweg 51, 5222 AS Den Bosch",
    tel: "073 — 200 00 00",
    hours: "Ma–Za 09:30 — 17:30",
  },
  Eindhoven: {
    addr: "Achtseweg Zuid 153, 5651 GW Eindhoven",
    tel: "040 — 200 00 00",
    hours: "Ma–Za 09:30 — 17:30",
  },
  Groningen: {
    addr: "Peizerweg 97, 9727 AJ Groningen",
    tel: "050 — 200 00 00",
    hours: "Ma–Za 09:30 — 17:30",
  },
  Hoogeveen: {
    addr: "Wijnberg 5, 7906 AV Hoogeveen",
    tel: "0528 — 200 000",
    hours: "Ma–Za 09:30 — 17:30",
  },
  Leeuwarden: {
    addr: "Edisonstraat 6, 8912 AW Leeuwarden",
    tel: "058 — 200 00 00",
    hours: "Ma–Za 09:30 — 17:30",
  },
  Tilburg: {
    addr: "Ringbaan-Oost 102, 5018 HG Tilburg",
    tel: "013 — 200 00 00",
    hours: "Ma–Za 09:30 — 17:30",
  },
  Utrecht: {
    addr: "Atoomweg 350, 3542 AB Utrecht",
    tel: "030 — 200 00 00",
    hours: "Ma–Za 09:30 — 17:30",
  },
};

export default function Showrooms() {
  return (
    <>
      <CategoryHero
        eyebrow="Showrooms"
        title="Bezoek ons in heel Nederland."
        intro="Twaalf showrooms, één team. Persoonlijk advies, alle stalen in handen — en altijd een kop koffie."
        image="https://images.unsplash.com/photo-1556909114-44e3e9399a2e?auto=format&fit=crop&w=1900&q=75"
        cta={{ label: "Plan uw bezoek", href: "#vestigingen" }}
      />

      <section id="vestigingen" className="py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="Vestigingen"
            title="Onze 12 showrooms."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {SHOWROOMS.map((s) => {
              const d = DETAILS[s.city];
              const slug = s.city.toLowerCase().replace(/\s+/g, "-");
              return (
                <article
                  key={s.city}
                  id={slug}
                  className="bg-bone p-8 md:p-10 flex flex-col"
                >
                  <p className="eyebrow text-muted">
                    {"note" in s && s.note ? s.note : "Showroom"}
                  </p>
                  <h2 className="display mt-2 text-2xl md:text-3xl text-ink">
                    {s.city}
                  </h2>
                  <dl className="mt-6 space-y-3 text-[14px] leading-relaxed">
                    <div>
                      <dt className="eyebrow text-muted mb-0.5">Adres</dt>
                      <dd>{d?.addr}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-muted mb-0.5">Telefoon</dt>
                      <dd>{d?.tel}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-muted mb-0.5">Openingstijden</dt>
                      <dd>{d?.hours}</dd>
                    </div>
                  </dl>
                  <div className="mt-8 flex gap-4">
                    <CtaLink
                      href={`https://maps.google.com/?q=LAB21+${s.city}`}
                      variant="underline"
                    >
                      Routebeschrijving
                    </CtaLink>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6 relative aspect-[3/2] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1500&q=75"
                alt="LAB21 flagshipstore Amersfoort"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-6">
              <p className="eyebrow text-muted">Flagship · Amersfoort</p>
              <h2 className="display mt-3 text-3xl md:text-5xl leading-[1.05]">
                Onze grootste showroom, met de volledige collectie.
              </h2>
              <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft/85">
                In Amersfoort vindt u álle collecties, alle merken en alle
                patronen — gelegd in volledige kamers. Hier kunt u écht zien
                hoe een vloer in uw huis komt te liggen.
              </p>
              <div className="mt-7 flex gap-4">
                <Link
                  href="#amersfoort"
                  className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3 text-[13px] tracking-[0.16em] uppercase hover:bg-clay transition-colors"
                >
                  Bekijk Amersfoort
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
