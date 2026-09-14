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
