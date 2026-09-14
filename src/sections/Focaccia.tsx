import { FOCACCE, SOSURI } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

export default function Focaccia() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="focaccia" ref={ref} className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16 md:py-28">
        <div>
          <p className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-brick">
            Pe lângă pizza
          </p>
          <h2
            className="reveal font-display mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-forest-deep sm:text-5xl"
            style={{ ['--reveal-delay' as string]: '80ms' }}
          >
            Focaccia caldă &amp;
            <br />
            <em className="font-semibold italic text-gold">sosuri de casă</em>
          </h2>
          <p
            className="reveal mt-6 max-w-md text-base leading-relaxed text-forest/80"
            style={{ ['--reveal-delay' as string]: '160ms' }}
          >
            Focaccia coaptă pe vatră, cu ulei de măsline aromat — simplă, cu usturoi sau cu parmezan.
            Perfectă lângă orice pizza sau de cerut separat, cu sosul preferat.
          </p>

          <ul className="mt-8 space-y-3">
            {FOCACCE.map((f, i) => (
              <li
                key={f.nr}
                className="reveal flex items-center justify-between gap-4 rounded-2xl border border-forest/10 bg-cream-deep/40 px-5 py-4 transition-colors hover:border-gold/40"
                style={{ ['--reveal-delay' as string]: `${200 + i * 70}ms` }}
              >
                <div>
                  <p className="font-display text-lg font-bold text-forest-deep">{f.name}</p>
                  <p className="text-sm text-forest/60">{f.desc}</p>
                </div>
                <span className="font-display shrink-0 text-xl font-extrabold text-forest">
                  {f.price} lei
                </span>
              </li>
            ))}
          </ul>

          <div
            className="reveal mt-8 rounded-2xl bg-forest p-6"
            style={{ ['--reveal-delay' as string]: '300ms' }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold">Sosuri · 50 g</p>
            <div className="mt-3 grid grid-cols-1 gap-y-2.5 min-[420px]:grid-cols-2 min-[420px]:gap-x-6">
              {SOSURI.map((s) => (
                <div key={s.nr} className="flex items-baseline gap-2 whitespace-nowrap text-cream">
                  <span className="text-sm font-medium">{s.name}</span>
                  <span className="price-line !border-cream/25" aria-hidden />
                  <span className="font-display text-base font-bold text-gold">{s.price} lei</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal relative" style={{ ['--reveal-delay' as string]: '160ms' }}>
          <div className="grain relative overflow-hidden rounded-[2.5rem] rounded-tl-[8rem] shadow-2xl shadow-forest/25 ring-1 ring-forest/10">
            <img
              src="/assets/focaccia.jpg"
              alt="Focaccia artizanală cu rozmarin, ulei de măsline și sare grunjoasă"
              className="aspect-square w-full object-cover"
              width={1024}
              height={1024}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/35 via-transparent to-transparent" />
          </div>
          <figure className="absolute -bottom-8 -left-4 max-w-56 -rotate-3 rounded-2xl bg-cream p-4 shadow-xl ring-1 ring-forest/10 sm:-left-8">
            <svg className="animate-steam absolute -top-5 right-6 h-6 w-6 text-brick/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M8 3c0 2-2 3-2 5s2 3 2 5M14 3c0 2-2 3-2 5s2 3 2 5" />
            </svg>
            <blockquote className="font-display text-base font-semibold italic leading-snug text-forest-deep">
              „Se simte că e făcută în casă, nu la bandă."
            </blockquote>
            <figcaption className="mt-2 text-xs font-medium text-forest/60">— oaspeții noștri</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
