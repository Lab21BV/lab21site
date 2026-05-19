export default function PromoBar() {
  return (
    <div className="bg-ink text-bone text-[11px] tracking-[0.18em] uppercase">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-9 flex items-center justify-between">
        <span className="hidden md:block">Gratis stalenservice aan huis</span>
        <div className="flex items-center gap-6">
          <span>12 showrooms in Nederland</span>
          <span className="hidden md:block">Persoonlijk advies van vloerexperts</span>
        </div>
        <span className="hidden md:block">Trustpilot · 9,2 / 10</span>
      </div>
    </div>
  );
}
