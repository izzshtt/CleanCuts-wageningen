'use client';

import { useInView, fadeUp, slideLeft } from '../../hooks/useInView';
import { FaqPro, type FaqProItem } from '@/components/ui/faq-pro';

const faqs: FaqProItem[] = [
  {
    id: 'afspraak-maken',
    question: 'Hoe kan ik een afspraak maken?',
    answer:
      'Je plant eenvoudig online een afspraak in via onze website, onder "Afspraak maken". In een paar klikken kies je je barber en een tijd die jou uitkomt.',
  },
  {
    id: 'openingstijden',
    question: 'Wat zijn de openingstijden?',
    answer:
      'Vrijdag 09:30–20:00 · zaterdag 09:00–17:00 · zondag gesloten · maandag 12:00–18:00 · dinsdag tot en met donderdag 09:30–19:00.',
  },
  {
    id: 'zonder-afspraak',
    question: 'Kan ik ook zonder afspraak langskomen?',
    answer:
      'Een afspraak heeft de voorkeur, zo hoef je niet te wachten. Loop je toch binnen? Dan helpen we je graag als er ruimte is.',
  },
  {
    id: 'reviews',
    question: 'Wat zeggen klanten over ons?',
    answer:
      'Onze klanten waarderen de strakke afwerking, de tijd die we nemen en de gastvrije sfeer met een kopje koffie. Hierboven lees je een paar van hun reviews.',
  },
];

export default function FAQ() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref}
      id="faq"
      style={{ padding: 'clamp(64px, 9vw, 96px) clamp(20px, 5vw, 56px)', background: '#f4f4f4' }}
    >
      <div
        className="faq-grid"
        style={{
          display: 'grid',
          alignItems: 'start',
        }}
      >
        {/* Left — slides in from left */}
        <div style={slideLeft(inView, 0)}>
          <div
            style={{
              font: "600 11px 'Space Grotesk', system-ui",
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#6b6b6b',
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '24px',
                height: '2px',
                background: '#8a8a8a',
                opacity: 0.55,
                flexShrink: 0,
              }}
            />
            04 · FAQ
          </div>
          <h2
            style={{
              margin: '0 0 18px',
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(28px, 3vw, 42px)',
              letterSpacing: '-0.5px',
              color: '#181818',
            }}
          >
            Veelgestelde vragen
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#6e6e6e',
              maxWidth: '320px',
              fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
            }}
          >
            Staat je vraag er niet bij? Bel ons gerust op{' '}
            <a
              href="tel:0615618319"
              style={{
                color: '#111111',
                textDecoration: 'none',
                borderBottom: '1px solid #111111',
              }}
            >
              06 15618319
            </a>
            .
          </p>
        </div>

        {/* Right — new FaqPro accordion, staggered fade up */}
        <div style={fadeUp(inView, 60)}>
          <FaqPro className="mx-0 max-w-none" defaultOpenFirst items={faqs} />
        </div>
      </div>
    </section>
  );
}
