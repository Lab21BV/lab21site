import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="LAB21 — naar homepagina"
      className={`inline-flex items-baseline gap-[2px] ${className}`}
    >
      <span className="display text-[22px] md:text-[26px] font-medium tracking-[-0.04em] leading-none">
        LAB
      </span>
      <span className="display text-[22px] md:text-[26px] font-medium tracking-[-0.04em] leading-none text-tan">
        21
      </span>
    </Link>
  );
}
