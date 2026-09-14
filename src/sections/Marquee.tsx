const ITEMS = [
  'Livrare la domiciliu',
  'Aluat dospit încet',
  '22 de sortimente de pizza',
  'Focaccia artizanală',
  'Sosuri făcute în casă',
  'Ingrediente proaspete',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-gold/25 bg-forest py-4" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-10">
        {[...row, ...row].map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-lg font-semibold italic tracking-wide text-cream/90">
              {item}
            </span>
            <svg className="h-3.5 w-3.5 text-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
