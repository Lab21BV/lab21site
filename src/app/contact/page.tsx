import { Container, SectionTitle, CtaLink } from "@/components/ui";
import CategoryHero from "@/components/CategoryHero";

const FAQ = [
  {
    q: "Hoe bestel ik gratis stalen?",
    a: "Op elke productpagina vindt u een knop ‘Bestel staal’. Wij sturen ze gratis op binnen 2 werkdagen.",
  },
  {
    q: "Kan ik mijn order nog wijzigen?",
    a: "Dat kan tot uiterlijk 24 uur na de bevestiging. Bel onze helpdesk of gebruik het wijzigformulier.",
  },
  {
    q: "Leveren jullie ook in België?",
    a: "Ja, wij leveren door heel Nederland en België. Voor België geldt een afwijkend leveringstarief.",
  },
  {
    q: "Wat is de levertijd?",
    a: "Voorraadartikelen leveren we binnen 5 werkdagen. Bestelartikelen 2–4 weken — uw bevestiging vermeldt de exacte datum.",
  },
  {
    q: "Bieden jullie garantie?",
    a: "Op alle vloeren minimaal 5 jaar fabrieksgarantie. Op onze huiscollecties zelfs 10 jaar.",
  },
  {
    q: "Wat doe ik bij een klacht?",
    a: "Vul het klachtformulier in. We reageren binnen 2 werkdagen met een voorstel of een afspraak.",
  },
];

export default function Contact() {
  return (
    <>
      <CategoryHero
        eyebrow="Contact"
        title="Wij helpen u graag verder."
        intro="Telefonisch, per e-mail of in een van onze showrooms. U krijgt altijd antwoord van een vloerexpert — geen callcenter."
        image="https://images.unsplash.com/photo-1556909114-44e3e9399a2e?auto=format&fit=crop&w=1900&q=75"
      />

      <section id="helpdesk" className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <p className="eyebrow text-muted">Direct contact</p>
              <h2 className="display mt-3 text-3xl md:text-4xl leading-[1.05]">
                Bereikbaar wanneer u dat nodig heeft.
              </h2>
              <dl className="mt-10 space-y-6 text-[15px]">
                <div>
                  <dt className="eyebrow text-muted mb-1">Klantenservice</dt>
                  <dd>033 — 200 00 00</dd>
                  <dd className="text-muted">Ma–Vr 09:00 — 17:30 · Za 10:00 — 16:00</dd>
                </div>
                <div>
                  <dt className="eyebrow text-muted mb-1">E-mail</dt>
                  <dd>info@lab21.nl</dd>
                </div>
                <div>
                  <dt className="eyebrow text-muted mb-1">Hoofdkantoor</dt>
                  <dd>Computerweg 12, 3821 AB Amersfoort</dd>
                </div>
              </dl>
            </div>

            <form className="md:col-span-7 space-y-5">
              <p className="eyebrow text-muted">Stuur ons een bericht</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="eyebrow text-muted">Naam</span>
                  <input
                    type="text"
                    className="mt-1 w-full bg-transparent border-b border-line py-3 text-[15px] focus:outline-none focus:border-ink"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted">E-mail</span>
                  <input
                    type="email"
                    className="mt-1 w-full bg-transparent border-b border-line py-3 text-[15px] focus:outline-none focus:border-ink"
                  />
                </label>
              </div>
              <label className="block">
                <span className="eyebrow text-muted">Onderwerp</span>
                <input
                  type="text"
                  className="mt-1 w-full bg-transparent border-b border-line py-3 text-[15px] focus:outline-none focus:border-ink"
                />
              </label>
              <label className="block">
                <span className="eyebrow text-muted">Bericht</span>
                <textarea
                  rows={5}
                  className="mt-1 w-full bg-transparent border-b border-line py-3 text-[15px] focus:outline-none focus:border-ink resize-none"
                />
              </label>
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3 text-[13px] tracking-[0.16em] uppercase hover:bg-clay transition-colors"
                >
                  Versturen
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>

      <section id="faq" className="bg-cream py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="Veelgestelde vragen"
            title="De antwoorden die u zoekt."
          />
          <div className="mt-12 max-w-3xl">
            <ul className="border-t border-line">
              {FAQ.map((f) => (
                <li key={f.q} className="border-b border-line py-7">
                  <p className="display text-[20px] leading-tight">{f.q}</p>
                  <p className="mt-3 text-[14.5px] text-ink-soft/85 leading-relaxed">
                    {f.a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="afhalen" className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div id="order">
              <p className="eyebrow text-muted">Order wijzigen</p>
              <h3 className="display mt-3 text-2xl">Wijzig binnen 24 uur.</h3>
              <p className="mt-3 text-[14px] text-ink-soft/85 leading-relaxed">
                Iets vergeten of toch een andere kleur? Bel ons en we passen
                het aan — zolang uw order nog niet is ingepakt.
              </p>
            </div>
            <div>
              <p className="eyebrow text-muted">Afhalen & bezorgen</p>
              <h3 className="display mt-3 text-2xl">Door heel Nederland.</h3>
              <p className="mt-3 text-[14px] text-ink-soft/85 leading-relaxed">
                Afhalen in elke showroom, of laten bezorgen op een dag die ú
                schikt. Levering tot in de woning is mogelijk.
              </p>
            </div>
            <div id="klacht">
              <p className="eyebrow text-muted">Klacht indienen</p>
              <h3 className="display mt-3 text-2xl">Wij maken het goed.</h3>
              <p className="mt-3 text-[14px] text-ink-soft/85 leading-relaxed">
                Vul het klachtformulier in. Wij komen altijd met een passende
                oplossing.
              </p>
              <div className="mt-5">
                <CtaLink href="#">Naar klachtformulier</CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
