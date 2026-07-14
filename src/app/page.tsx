import Nav from '@/components/layout/Nav';
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Brand from '@/components/sections/Brand';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      {/* Gradient bridge: hero dark bottom -> page white */}
      <div style={{ height: '120px', background: 'linear-gradient(180deg, #14120f 0%, #f4f4f4 100%)', marginTop: '-2px' }} />
      <Intro />
      <Services />
      <About />
      <Team />
      <Brand />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
