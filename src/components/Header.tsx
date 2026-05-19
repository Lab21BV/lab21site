"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "./Logo";
import { NAV } from "@/lib/site";

function IconBtn({
  label,
  children,
  href,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const cls =
    "inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-cream transition-colors";
  if (href)
    return (
      <Link href={href} aria-label={label} className={cls}>
        {children}
      </Link>
    );
  return (
    <button aria-label={label} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

const ICONS = {
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  ),
  user: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  ),
  heart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" />
    </svg>
  ),
  bag: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8a3 3 0 1 1 6 0" />
    </svg>
  ),
  menu: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
};

export default function Header() {
  const [hover, setHover] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const active = NAV.find((n) => n.label === hover);

  return (
    <header
      className="sticky top-0 z-40 bg-bone/95 backdrop-blur border-b border-line/70"
      onMouseLeave={() => setHover(null)}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHover(item.label)}
                onFocus={() => setHover(item.label)}
                className="text-[13.5px] tracking-wide hover:text-clay transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <IconBtn label="Zoeken">{ICONS.search}</IconBtn>
          <IconBtn label="Mijn LAB21" href="#">
            {ICONS.user}
          </IconBtn>
          <IconBtn label="Verlanglijst" href="#">
            {ICONS.heart}
          </IconBtn>
          <IconBtn label="Winkelmand" href="#">
            {ICONS.bag}
          </IconBtn>
          <button
            aria-label="Menu"
            onClick={() => setMobile((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-cream"
          >
            {mobile ? ICONS.close : ICONS.menu}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      {active && active.columns.length > 0 && (
        <div
          className="hidden lg:block absolute left-0 right-0 bg-bone border-b border-line/70 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]"
          onMouseEnter={() => setHover(active.label)}
          onMouseLeave={() => setHover(null)}
        >
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-10 grid grid-cols-12 gap-10">
            <div className="col-span-9 grid grid-cols-3 gap-10">
              {active.columns.map((col) => (
                <div key={col.heading}>
                  <p className="eyebrow text-muted mb-4">{col.heading}</p>
                  <ul className="space-y-2.5">
                    {col.items.map((it) => (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          className="text-[14px] hover:text-clay transition-colors"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {active.feature && (
              <Link
                href={active.feature.href}
                className="col-span-3 group block relative aspect-[4/5] overflow-hidden bg-cream"
              >
                <Image
                  src={active.feature.image}
                  alt={active.feature.title}
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-bone">
                  <p className="eyebrow mb-1 opacity-90">Uitgelicht</p>
                  <p className="text-[15px] leading-snug">{active.feature.title}</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobile && (
        <div className="lg:hidden border-t border-line/70 bg-bone">
          <nav className="px-6 py-4 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobile(false)}
                className="py-3 border-b border-line/60 text-[15px] flex items-center justify-between"
              >
                {item.label}
                <span className="text-muted">→</span>
              </Link>
            ))}
            <Link
              href="/over-lab21"
              onClick={() => setMobile(false)}
              className="py-3 text-[15px]"
            >
              Over LAB21
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobile(false)}
              className="py-3 text-[15px]"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
