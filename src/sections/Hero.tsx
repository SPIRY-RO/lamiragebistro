import { useReveal } from '@/hooks/useReveal';
import { TELEFON, TELEFON_LINK, ADRESA } from '@/data/menu';

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-cream">
      {/* subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-gold-soft blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-14 md:pb-24 md:pt-36">
        {/* Left: copy */}
        <div className="relative z-10">
          <p
            className="reveal inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-forest"
            style={{ ['--reveal-delay' as string]: '0ms' }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brick" />
            Pizzerie · București
          </p>

          <h1
            className="reveal font-display mt-6 text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-forest-deep sm:text-6xl lg:text-7xl"
            style={{ ['--reveal-delay' as string]: '80ms' }}
          >
            Autentic.
            <br />
            Proaspăt.{' '}
            <em className="font-semibold italic text-gold">Delicios.</em>
          </h1>

          <p
            className="reveal mt-6 max-w-md text-base leading-relaxed text-forest/80 sm:text-lg"
            style={{ ['--reveal-delay' as string]: '160ms' }}
          >
            Pizza coaptă pe vatră, cu aluat dospit încet și ingrediente alese pe sprânceană.
            22 de sortimente, focaccia caldă și livrare la domiciliu în zonă.
          </p>

          <div
            className="reveal mt-9 flex flex-wrap items-center gap-4"
            style={{ ['--reveal-delay' as string]: '240ms' }}
          >
            <a
              href={TELEFON_LINK}
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-base font-semibold text-cream shadow-xl shadow-forest/30 transition-all hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-2xl hover:shadow-forest/40"
            >
              <svg className="h-5 w-5 transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Comandă · {TELEFON}
            </a>
            <a
              href="#meniu"
              className="inline-flex items-center gap-2 rounded-full border-2 border-forest/25 px-7 py-[14px] text-base font-semibold text-forest-deep transition-all hover:border-gold hover:text-gold"
            >
              Vezi meniul
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>

          <div
            className="reveal mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-forest/70"
            style={{ ['--reveal-delay' as string]: '320ms' }}
          >
            <span className="inline-flex items-center gap-2">
              <svg className="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              {ADRESA}
            </span>
            <span className="inline-flex items-center gap-2">
              <svg className="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" />
              </svg>
              Livrare la domiciliu
            </span>
          </div>
        </div>

        {/* Right: imagery */}
        <div className="reveal relative" style={{ ['--reveal-delay' as string]: '200ms' }}>
          <div className="grain relative overflow-hidden rounded-[2.5rem] rounded-tr-[8rem] shadow-2xl shadow-forest/30 ring-1 ring-forest/10">
            <img
              src="/assets/hero-pizza.jpg"
              alt="Pizza rustică La Mirage Bistro, proaspăt scoasă din cuptor, cu busuioc și mozzarella"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
              width={1024}
              height={1280}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 via-transparent to-transparent" />
            {/* Floating card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-cream/95 px-5 py-4 shadow-xl backdrop-blur sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-64">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brick">Cea mai dorită</p>
              <p className="font-display mt-1 text-xl font-bold text-forest-deep">Pizza Fantezie</p>
              <p className="mt-0.5 text-sm text-forest/70">Prosciutto crudo · rucola · 50 lei / 70 lei</p>
            </div>
          </div>

          {/* Rotating badge */}
          <div className="animate-float-soft absolute -top-6 -right-2 hidden h-28 w-28 items-center justify-center rounded-full bg-brick text-center shadow-xl sm:flex">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]" aria-hidden>
              <defs>
                <path id="badge-circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
              </defs>
              <text className="fill-cream text-[10.5px] font-semibold uppercase" style={{ letterSpacing: '2.5px' }}>
                <textPath href="#badge-circle">făcută cu suflet · coaptă pe vatră ·</textPath>
              </text>
            </svg>
            <svg className="h-8 w-8 text-cream" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8 8 0 0 1 7.75 6H14.6A3.5 3.5 0 0 0 12 7.5a3.5 3.5 0 0 0-2.6 2.5H4.25A8 8 0 0 1 12 4zm-4.5 8h9A4.5 4.5 0 0 1 12 16.5 4.5 4.5 0 0 1 7.5 12zM12 22a8 8 0 0 1-7.75-6h5.15a3.5 3.5 0 0 0 2.6 2.5 3.5 3.5 0 0 0 2.6-2.5h5.15A8 8 0 0 1 12 22z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
