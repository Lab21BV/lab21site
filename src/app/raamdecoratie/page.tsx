import { Container, CtaLink } from "@/components/ui";
import CategoryHero from "@/components/CategoryHero";

export const metadata = {
  title: "Raamdecoratie — LAB21",
  description:
    "Gordijnen, jaloezieën, plissé en rolgordijnen op maat. Bij LAB21 stemmen we uw raamdecoratie af op uw vloer en interieur.",
};

const SOORTEN = [
  { t: "Gordijnen", d: "Stoffen met karakter — verduisterend of transparant." },
  { t: "Jaloezieën", d: "Hout, aluminium of bamboe, op maat gemaakt." },
  { t: "Plissé", d: "Strak en bedienbaar van boven en onder." },
  { t: "Rolgordijnen", d: "Eenvoudig, modern en sterk." },
];

export default function Raamdecoratie() {
  return (
    <>
      <CategoryHero
        eyebrow="Raamdecoratie"
        title="Het sluitstuk van uw interieur."
        intro="Een vloer komt pas tot zijn recht als het licht klopt. Onze adviseurs meten op, helpen met stofkeuze en monteren bij u thuis."
        image="https://images.unsplash.com/photo-1505692433770-36f19f51681d?auto=format&fit=crop&w=1900&q=75"
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {SOORTEN.map((s) => (
              <div key={s.t} className="bg-bone p-7 md:p-8">
                <p className="display text-[20px] leading-tight">{s.t}</p>
                <p className="mt-3 text-[14px] text-muted leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <CtaLink href="/adviesgesprek" variant="solid">
              Plan een adviesgesprek
            </CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
