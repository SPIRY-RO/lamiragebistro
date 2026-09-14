import { ADRESA, GOOGLE_MAPS, TELEFON, TELEFON_LINK } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-forest-deep">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-forest blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contact</p>
          <h2
            className="reveal font-display mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-6xl"
            style={{ ['--reveal-delay' as string]: '80ms' }}
          >
            Ți-am făcut
            <em className="font-semibold italic text-gold"> poftă?</em>
          </h2>
          <p
            className="reveal mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/60"
            style={{ ['--reveal-delay' as string]: '160ms' }}
          >
            Sună și comanda pleacă imediat spre tine. Livrăm la domiciliu în zona
            Bulevardul Timișoara și împrejurimi.
          </p>

          <div
            className="reveal mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ ['--reveal-delay' as string]: '240ms' }}
          >
            <a
              href={TELEFON_LINK}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-lg font-bold text-forest-deep shadow-xl shadow-gold/20 transition-all hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {TELEFON}
            </a>
            <a
              href={GOOGLE_MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-cream/25 px-8 py-[14px] text-base font-semibold text-cream transition-all hover:border-gold hover:text-gold sm:w-auto"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              {ADRESA}
            </a>
          </div>
        </div>

        <div
          className="reveal mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3"
          style={{ ['--reveal-delay' as string]: '300ms' }}
        >
          {[
            {
              title: 'Suni',
              text: 'Ne spui ce poftești și confirmăm comanda pe loc.',
              icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z',
            },
            {
              title: 'Coacem',
              text: 'Aluat proaspăt, ingrediente alese, vatră incinsă.',
              icon: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z',
            },
            {
              title: 'Livrăm',
              text: 'Pizza ajunge caldă la ușa ta, în cutie specială.',
              icon: 'M6 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM16 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM1 9h8.5a3.5 3.5 0 0 0 0-7H1M9 9l4-7h3a4 4 0 0 1 4 4v6h-2',
            },
          ].map((s, i) => (
            <div
              key={s.title}
              className="rounded-3xl border border-cream/10 bg-forest/40 p-6 text-center backdrop-blur-sm"
              style={{ ['--reveal-delay' as string]: `${360 + i * 80}ms` }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                <svg className="h-6 w-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={s.icon} />
                </svg>
              </div>
              <p className="font-display mt-4 text-xl font-bold text-cream">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-cream/60">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
