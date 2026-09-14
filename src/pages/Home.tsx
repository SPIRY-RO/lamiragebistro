import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCall from '@/components/StickyCall';
import Hero from '@/sections/Hero';
import Marquee from '@/sections/Marquee';
import Poveste from '@/sections/Poveste';
import Meniu from '@/sections/Meniu';
import Focaccia from '@/sections/Focaccia';
import Contact from '@/sections/Contact';

export default function Home() {
  // QR-code visitors land on /#meniu — the browser tries to jump before React
  // renders, so re-scroll once the menu section exists.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
        // re-trigger reveals inside the target section
        el.querySelectorAll('.reveal:not(.is-visible)').forEach((n) => n.classList.add('is-visible'));
      } else if (attempts < 20) {
        attempts += 1;
        setTimeout(tryScroll, 100);
      }
    };
    const t = setTimeout(tryScroll, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Poveste />
        <Meniu />
        <Focaccia />
        <Contact />
      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
