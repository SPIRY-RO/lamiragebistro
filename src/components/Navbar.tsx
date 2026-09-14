import { useEffect, useState } from 'react';
import { TELEFON, TELEFON_LINK } from '@/data/menu';

const LINKS = [
  { href: '#poveste', label: 'Povestea' },
  { href: '#meniu', label: 'Meniu' },
  { href: '#focaccia', label: 'Focaccia' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 shadow-[0_1px_0_hsl(var(--gold)/0.35),0_12px_32px_-16px_rgba(22,48,31,0.35)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="La Mirage Bistro — acasă">
          <img
            src="/assets/logo.png"
            alt="La Mirage Bistro"
            className="h-11 w-11 rounded-full object-contain sm:h-13 sm:w-13"
            width={52}
            height={52}
          />
          <span className="font-display text-lg font-bold leading-tight tracking-tight text-forest-deep sm:text-xl">
            La Mirage
            <span className="block text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
              Bistro · Pizzerie
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-forest-deep/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={TELEFON_LINK}
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream shadow-lg shadow-forest/25 transition-all hover:-translate-y-0.5 hover:bg-forest-deep"
          >
            Comandă · {TELEFON}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={open}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-forest/20 bg-cream/80 backdrop-blur md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded bg-forest-deep transition-all duration-300 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span className={`h-0.5 w-5 rounded bg-forest-deep transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-5 rounded bg-forest-deep transition-all duration-300 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 top-16 z-40 flex flex-col bg-cream px-6 pt-8 transition-opacity duration-500 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className={`border-b border-forest/10 py-5 font-display text-3xl font-bold text-forest-deep transition-all duration-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
          >
            {l.label}
          </a>
        ))}
        <a
          href={TELEFON_LINK}
          onClick={() => setOpen(false)}
          className={`mt-8 flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-base font-semibold text-cream transition-all duration-500 ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: open ? '380ms' : '0ms' }}
        >
          Comandă acum · {TELEFON}
        </a>
      </div>
    </header>
  );
}
