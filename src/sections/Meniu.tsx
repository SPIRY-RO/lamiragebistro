import { useMemo, useState } from 'react';
import { CATEGORII, PIZZE, TELEFON_LINK, type Category } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

export default function Meniu() {
  const ref = useReveal<HTMLElement>();
  const [cat, setCat] = useState<Category>('toate');

  const list = useMemo(
    () => (cat === 'toate' ? PIZZE : PIZZE.filter((p) => p.tags.includes(cat))),
    [cat]
  );

  return (
    <section id="meniu" ref={ref} className="relative overflow-hidden bg-forest-deep">
      {/* decorative glow */}
      <div aria-hidden className="pointer-events-none absolute -right-52 -top-40 h-[34rem] w-[34rem] rounded-full bg-forest blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-52 -left-40 h-[28rem] w-[28rem] rounded-full bg-moss/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Meniul nostru
            </p>
            <h2
              className="reveal font-display mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-6xl"
              style={{ ['--reveal-delay' as string]: '80ms' }}
            >
              Pizza coaptă
              <br />
              <em className="font-semibold italic text-gold">pe vatră</em>
            </h2>
          </div>
          <p
            className="reveal max-w-xs text-sm leading-relaxed text-cream/60"
            style={{ ['--reveal-delay' as string]: '160ms' }}
          >
            Toate pizzele sunt disponibile pe blat de 32 cm sau 40 cm. Prețurile includ
            topping-urile listate.
          </p>
        </div>

        {/* Filters */}
        <div
          className="reveal mt-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ ['--reveal-delay' as string]: '220ms' }}
          role="tablist"
          aria-label="Filtrează pizza după categorie"
        >
          {CATEGORII.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={cat === c.id}
              onClick={() => setCat(c.id)}
              className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                cat === c.id
                  ? 'border-gold bg-gold text-forest-deep shadow-lg shadow-gold/25'
                  : 'border-cream/20 bg-transparent text-cream/70 hover:border-gold/60 hover:text-cream'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <article
              key={p.nr}
              className="group reveal relative flex flex-col rounded-3xl border border-cream/10 bg-forest/40 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-forest/60 hover:shadow-2xl hover:shadow-black/30"
              style={{ ['--reveal-delay' as string]: `${(i % 6) * 60}ms` }}
            >
              {p.popular && (
                <span className="absolute -top-3 right-5 rounded-full bg-brick px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cream shadow-lg">
                  Populară
                </span>
              )}
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm font-bold text-gold">{String(p.nr).padStart(2, '0')}</span>
                <h3 className="font-display text-xl font-bold leading-snug text-cream">{p.name}</h3>
              </div>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-cream/60">{p.desc}</p>
              <div className="mt-5 flex items-end">
                <div className="text-cream">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/40">32 cm</span>
                  <span className="font-display text-2xl font-extrabold">{p.p32} lei</span>
                </div>
                <span className="price-line" aria-hidden />
                <div className="text-right text-cream">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/40">40 cm</span>
                  <span className="font-display text-2xl font-extrabold text-gold">{p.p40} lei</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="reveal mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-gold/30 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 p-8 text-center sm:flex-row sm:text-left"
          style={{ ['--reveal-delay' as string]: '120ms' }}
        >
          <div>
            <p className="font-display text-2xl font-bold text-cream">Nu te poți hotărî?</p>
            <p className="mt-1 text-sm text-cream/60">
              Sună-ne și îți recomandăm noi pizza potrivită. Livrăm și la domiciliu.
            </p>
          </div>
          <a
            href={TELEFON_LINK}
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gold px-7 py-4 text-base font-bold text-forest-deep shadow-xl shadow-gold/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Comandă telefonic
          </a>
        </div>
      </div>
    </section>
  );
}
