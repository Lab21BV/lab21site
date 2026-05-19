import Image from "next/image";
import { Container, CtaLink } from "./ui";

export default function CategoryHero({
  eyebrow,
  title,
  intro,
  image,
  cta,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative">
      <div className="relative h-[58vh] min-h-[440px] max-h-[680px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        <Container className="relative h-full flex items-end pb-12 md:pb-20">
          <div className="max-w-xl text-bone">
            <p className="eyebrow opacity-90">{eyebrow}</p>
            <h1 className="display mt-3 text-4xl md:text-5xl leading-[1.05]">
              {title}
            </h1>
            <p className="mt-5 text-[15.5px] leading-relaxed opacity-90 max-w-md">
              {intro}
            </p>
            {cta && (
              <div className="mt-7">
                <CtaLink href={cta.href} variant="solid">
                  {cta.label}
                </CtaLink>
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}
