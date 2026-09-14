import { useReveal } from '@/hooks/useReveal';
import { GOOGLE_MAPS } from '@/data/menu';

export default function Poveste() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="poveste" ref={ref} className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center md:gap-16 md:py-28">
        <div className="reveal order-2 md:order-1">
          <div className="grain relative overflow-hidden rounded-[2.5rem] rounded-bl-[8rem] shadow-2xl shadow-forest/20 ring-1 ring-forest/10">
            <img
              src="/assets/interior.jpg"
              alt="Interiorul cald și primitor al bistroului La Mirage, cu lumină caldă și perete verde"
              className="aspect-[4/3] w-full object-cover"
              width={1536}
              height={1024}
              loading="lazy"
            />
          </div>
          <div className="grain relative -mt-16 ml-auto w-2/3 overflow-hidden rounded-[2rem] shadow-xl shadow-forest/25 ring-4 ring-cream sm:-mt-20">
            <img
              src="/assets/cheese-pull.jpg"
              alt="Felie de pizza cu mozzarella întinsă, proaspătă"
              className="aspect-[3/2] w-full object-cover"
              width={1536}
              height={1024}
              loading="lazy"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p
            className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-brick"
            style={{ ['--reveal-delay' as string]: '0ms' }}
          >
            Povestea noastră
          </p>
          <h2
            className="reveal font-display mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-forest-deep sm:text-5xl"
            style={{ ['--reveal-delay' as string]: '80ms' }}
          >
            O bucătărie mică,
            <br />
            cu <em className="font-semibold italic text-gold">inimă mare</em>
          </h2>
          <div
            className="reveal mt-6 space-y-4 text-base leading-relaxed text-forest/80 sm:text-lg"
            style={{ ['--reveal-delay' as string]: '160ms' }}
          >
            <p>
              La Mirage Bistro a pornit de la o idee simplă: pizza adevărată nu are nevoie de artificii —
              are nevoie de aluat dospit cum trebuie, sos de roșii copt încet și ingrediente pe care le-am
              mânca noi înșine.
            </p>
            <p>
              Fiecare blat se întinde manual, fiecare pizza intră pe vatră și iese rumenit, cu marginile
              pufoase și crusta cu pete de leopard. De la clasica Margherita până la Fantezie cu
              prosciutto crudo și mozzarella de bivoliță, totul se face la comandă, proaspăt, fără compromisuri.
            </p>
          </div>

          <div
            className="reveal mt-8 grid grid-cols-3 gap-4"
            style={{ ['--reveal-delay' as string]: '240ms' }}
          >
            {[
              { n: '22', label: 'sortimente de pizza' },
              { n: '32–40', label: 'cm diametru blat' },
              { n: '100%', label: 'proaspăt, la comandă' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-gold/25 bg-cream-deep/50 px-4 py-5 text-center"
              >
                <p className="font-display text-3xl font-extrabold text-forest">{s.n}</p>
                <p className="mt-1 text-xs font-medium leading-snug text-forest/70">{s.label}</p>
              </div>
            ))}
          </div>

          <a
            href={GOOGLE_MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold"
            style={{ ['--reveal-delay' as string]: '300ms' }}
          >
            Găsește-ne pe hartă
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
