import Link from "next/link";
import Image from "next/image";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1600px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-muted">{children}</p>;
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="display mt-3 text-3xl md:text-[44px] leading-[1.05] text-ink">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-[15.5px] md:text-[16.5px] leading-relaxed text-ink-soft/85 max-w-2xl">
          {intro}
        </p>
      )}
    </div>
  );
}

export function CtaLink({
  href,
  children,
  variant = "underline",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "underline" | "solid" | "outline";
}) {
  if (variant === "solid")
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3 text-[13px] tracking-[0.16em] uppercase hover:bg-clay transition-colors"
      >
        {children}
      </Link>
    );
  if (variant === "outline")
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-2 border border-ink/70 text-ink px-6 py-3 text-[13px] tracking-[0.16em] uppercase hover:bg-ink hover:text-bone transition-colors"
      >
        {children}
      </Link>
    );
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[13px] tracking-[0.16em] uppercase"
    >
      <span className="border-b border-ink pb-1 group-hover:border-clay group-hover:text-clay transition-colors">
        {children}
      </span>
      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

export function CategoryCard({
  href,
  image,
  eyebrow,
  title,
  caption,
  ratio = "portrait",
}: {
  href: string;
  image: string;
  eyebrow?: string;
  title: string;
  caption?: string;
  ratio?: "portrait" | "square" | "landscape";
}) {
  const aspect =
    ratio === "portrait"
      ? "aspect-[4/5]"
      : ratio === "square"
      ? "aspect-square"
      : "aspect-[3/2]";
  return (
    <Link href={href} className="group block">
      <div className={`relative ${aspect} overflow-hidden bg-cream`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5">
        {eyebrow && <p className="eyebrow text-muted mb-1.5">{eyebrow}</p>}
        <h3 className="display text-[20px] md:text-[22px] leading-tight text-ink">
          {title}
        </h3>
        {caption && (
          <p className="mt-2 text-[14px] text-muted leading-relaxed">
            {caption}
          </p>
        )}
      </div>
    </Link>
  );
}

export function ProductChip({
  label,
  meta,
  image,
  href,
}: {
  label: string;
  meta?: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-square overflow-hidden bg-cream">
        <Image
          src={image}
          alt={label}
          fill
          sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <p className="mt-3 text-[14px] text-ink">{label}</p>
      {meta && <p className="text-[12.5px] text-muted">{meta}</p>}
    </Link>
  );
}
