'use client';

import { useInView, slideLeft, slideRight } from '../../hooks/useInView';

export default function About() {
  const { ref, inView } = useInView(0.12);

  return (
    <section
      ref={ref}
      id="over-ons"
      className="about-grid"
      style={{ display: 'grid', gap: 0, background: '#ededed' }}
    >
      {/* Image — slides in from left */}
      <div
        style={{
          width: '100%',
          height: 'clamp(320px, 45vw, 560px)',
          overflow: 'hidden',
          ...slideLeft(inView, 0),
        }}
      >
        <img
          src="/image.webp"
          alt="Clean Cuts Wageningen — de zaak"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </div>

      {/* Text — slides in from right */}
      <div
        style={{
          padding: 'clamp(48px, 7vw, 84px) clamp(24px, 5vw, 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          ...slideRight(inView, 120),
        }}
      >
        <div
          style={{
            font: "600 11px 'Space Grotesk', system-ui",
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#6b6b6b',
            marginBottom: '18px',
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
          Over ons
        </div>

        <h2
          style={{
            margin: '0 0 22px',
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 42px)',
            letterSpacing: '-0.5px',
            color: '#181818',
          }}
        >
          Dé herenkapper van Wageningen
        </h2>

        <p
          style={{
            margin: '0 0 16px',
            fontSize: '16px',
            lineHeight: 1.65,
            color: '#4a4a4a',
            fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
          }}
        >
          Clean Cuts is hét adres voor jou. Onze kapsalon is volledig gespecialiseerd in het
          knippen, trimmen en scheren van mannen in Wageningen. We staan dagelijks voor je klaar om
          je een stijlvol en verzorgd kapsel te geven.
        </p>

        <p
          style={{
            margin: 0,
            fontSize: '16px',
            lineHeight: 1.65,
            color: '#4a4a4a',
            fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
          }}
        >
          Een afspraak maken bij dé barbierszaak van Wageningen doe je eenvoudig online via onze
          website.
        </p>
      </div>
    </section>
  );
}
