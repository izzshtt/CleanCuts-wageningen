import Nav from './components/Nav';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import About from './components/About';
import Brand from './components/Brand';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#f4f4f4', overflow: 'hidden', fontFamily: "'Hanken Grotesk', system-ui, sans-serif", color: '#111111' }}>
      <Nav />
      <Hero />
      {/* Gradient bridge: hero dark bottom → page white */}
      <div style={{ height: '120px', background: 'linear-gradient(180deg, #14120f 0%, #f4f4f4 100%)', marginTop: '-2px' }} />
      <Intro />
      <Services />
      <About />
      <Brand />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
