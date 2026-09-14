import { ADRESA, GOOGLE_MAPS, TELEFON, TELEFON_LINK } from '@/data/menu';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-forest-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-12 sm:px-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="La Mirage Bistro"
            className="h-12 w-12 rounded-full object-contain"
            width={48}
            height={48}
            loading="lazy"
          />
          <div>
            <p className="font-display text-lg font-bold text-cream">La Mirage Bistro</p>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Autentic · Proaspăt · Delicios</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-cream/60 md:items-end">
          <a href={TELEFON_LINK} className="font-semibold text-cream transition-colors hover:text-gold">
            Comenzi: {TELEFON}
          </a>
          <a
            href={GOOGLE_MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            {ADRESA}
          </a>
          <a
            href="/assets/meniu-la-mirage-bistro.pdf"
            className="underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold"
          >
            Meniul în format PDF
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 pb-24 text-center text-xs text-cream/40 md:pb-5">
        © {year} La Mirage Bistro · Toate drepturile rezervate · Poftă bună!
      </div>
    </footer>
  );
}
