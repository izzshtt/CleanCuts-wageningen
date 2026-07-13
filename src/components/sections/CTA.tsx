import { ArrowUpRight } from 'lucide-react';
import { useInView, scaleIn, fadeUp } from '../hooks/useInView';

const BOOKING_URL =
  'https://knipklok.nl/kapperszaak/cleancutswageningen/afspraak?shopname=cleancutswageningen&r=1';

export default function CTA() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      ref={ref}
      id="afspraak"
      style={{
        background: '#1a1a1a',
        color: '#fff',
        padding: 'clamp(72px, 10vw, 104px) clamp(20px, 5vw, 56px)',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          margin: '0 0 30px',
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontWeight: 500,
          fontSize: 'clamp(36px, 5vw, 62px)',
          letterSpacing: '-1px',
          ...fadeUp(inView, 0),
        }}
      >
        Klaar voor een nieuwe look?
      </h2>

      <div style={scaleIn(inView, 160)}>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            background: '#f4f4f4',
            color: '#111111',
            fontWeight: 600,
            fontSize: '18px',
            padding: '18px 34px',
            borderRadius: '44px',
            fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
          }}
        >
          Maak een afspraak
          <span
            style={{
              display: 'inline-flex',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: '#111111',
              color: '#f4f4f4',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowUpRight size={17} strokeWidth={2} />
          </span>
        </a>
      </div>
    </section>
  );
}
