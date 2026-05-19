import Link from "next/link";
import Logo from "./Logo";
import { FOOTER_COLS, SOCIAL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone mt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-white/10">
          <div className="md:col-span-4">
            <Logo className="text-bone [&_span]:!text-bone [&_span:last-child]:!text-tan" />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/70">
              Dé vloerenspecialist van Nederland. Houten vloeren, PVC en
              laminaat — ontworpen voor wie kwaliteit waardeert en lang vooruit
              wil.
            </p>
            <form className="mt-8 flex max-w-sm border-b border-white/30 focus-within:border-bone">
              <input
                type="email"
                required
                placeholder="Uw e-mailadres"
                className="flex-1 bg-transparent py-3 text-[14px] placeholder:text-white/50 focus:outline-none"
              />
              <button className="text-[12px] tracking-[0.18em] uppercase px-3 hover:text-tan">
                Aanmelden
              </button>
            </form>
            <p className="mt-3 text-[11px] text-white/50">
              Inspiratie, nieuwe collecties en exclusieve aanbiedingen.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <p className="eyebrow text-white/60 mb-4">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="text-[13.5px] text-white/85 hover:text-bone"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[12px] text-white/55">
            © {new Date().getFullYear()} LAB21 Nederland B.V. — Alle rechten
            voorbehouden.
          </p>
          <div className="flex items-center gap-5">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] tracking-[0.18em] uppercase text-white/70 hover:text-bone"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
