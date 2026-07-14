'use client';

import { useInView, fadeUp } from '../../hooks/useInView';
import { BOOKING_URL } from '@/lib/site-config';

const services = [
  {
    num: '01',
    title: 'Knippen',
    duration: '60 min',
    desc: 'Knippen en stylen volledig op jouw wens.',
    price: 'v.a. € 20,00',
    popular: false,
  },
  {
    num: '02',
    title: 'Knippen + Baard',
    duration: '60 min',
    desc: 'De complete beurt: kapsel en baard strak afgewerkt.',
    price: 'v.a. € 25,00',
    popular: true,
  },
  {
    num: '03',
    title: 'Baard',
    duration: '30 min',
    desc: 'Baard modelleren, trimmen en bijwerken.',
    price: 'v.a. € 7,50',
    popular: false,
  },
  {
    num: '04',
    title: 'Tondeuse 1 standje',
    duration: '20 min',
    desc: 'Over de gehele hoofd 1 standje, zonder overloop.',
    price: 'v.a. € 15,00',
    popular: false,
  },
  {
    num: '05',
    title: 'All in behandeling',
    duration: '60 min',
    desc: 'Knippen, baard bijwerken en haar wassen.',
    price: 'v.a. € 25,00',
    popular: false,
  },
  {
    num: '06',
    title: 'Knippen wassen',
    duration: '60 min',
    desc: 'Haar wassen en knippen, strak en fris.',
    price: 'v.a. € 22,50',
    popular: false,
  },
];

export default function Services() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref}
      id="diensten"
      style={{ padding: '8px clamp(20px, 5vw, 56px) clamp(64px, 9vw, 96px)', background: '#f4f4f4' }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '16px',
          ...fadeUp(inView, 0),
        }}
      >
        <div>
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
              }}
            />
            Diensten
          </div>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(30px, 3.5vw, 46px)',
              letterSpacing: '-0.5px',
              color: '#181818',
            }}
          >
            Knippen, trimmen &amp; scheren
          </h2>
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#111111',
            borderBottom: '1.5px solid #111111',
            paddingBottom: '3px',
            fontWeight: 600,
            fontSize: '15px',
            fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Alle diensten &amp; prijzen →
        </a>
      </div>

      {/* Cards grid — staggered */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '18px',
        }}
      >
        {services.map((s, i) => (
          <div
            key={s.num}
            className="service-card"
            style={{
              background: s.popular ? '#111111' : '#fff',
              border: 'none',
              borderRadius: '14px',
              padding: '26px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              minHeight: '230px',
              color: s.popular ? '#f4f4f4' : undefined,
              cursor: 'default',
              ...fadeUp(inView, 100 + i * 80),
            }}
          >
            <div
              style={{
                font: "600 11px 'Space Grotesk', system-ui",
                letterSpacing: '2px',
                color: s.popular ? 'rgba(245,245,245,.55)' : '#b3b3b3',
              }}
            >
              {s.num}
              {s.popular ? ' · Populair' : ''}
            </div>
            <div style={{ marginTop: 'auto' }}>
              <div
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontSize: '24px',
                  color: s.popular ? '#f4f4f4' : '#181818',
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  font: "500 12px 'Hanken Grotesk', system-ui",
                  color: s.popular ? 'rgba(245,245,245,.45)' : '#b3b3b3',
                  marginTop: '3px',
                }}
              >
                {s.duration}
              </div>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: '13.5px',
                lineHeight: 1.5,
                color: s.popular ? 'rgba(245,245,245,.7)' : '#6e6e6e',
                fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
              }}
            >
              {s.desc}
            </p>
            <div
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: '22px',
                color: s.popular ? '#f4f4f4' : '#111111',
              }}
            >
              {s.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
