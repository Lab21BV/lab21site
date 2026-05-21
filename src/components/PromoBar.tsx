import Link from "next/link";

export default function PromoBar() {
  return (
    <div className="bg-ink text-bone text-[11.5px] tracking-[0.18em] uppercase">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-11 flex items-center justify-between gap-6">
        <span className="hidden md:block opacity-80">
          12 showrooms in Nederland
        </span>
        <span className="text-center font-medium">
          Tweede Pinksterdag geopend
        </span>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/over-lab21" className="hover:text-tan transition-colors">
            Over ons
          </Link>
          <Link
            href="/over-lab21#werken-bij"
            className="hover:text-tan transition-colors"
          >
            Vacatures
          </Link>
          <Link href="/showrooms" className="hover:text-tan transition-colors">
            Showrooms
          </Link>
        </nav>
      </div>
    </div>
  );
}
