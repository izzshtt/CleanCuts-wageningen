'use client';

import { useInView, fadeUp, fadeIn } from '../../hooks/useInView';

const OG_LOGO =
  'https://primary.jwwb.nl/public/m/y/z/temp-pwwkhjkqflqfcxgkbrvr/image-high.png';

export default function Footer() {
  const { ref, inView } = useInView(0.05);

  return (
    <footer
      ref={ref}
      id="footer"
      style={{ background: '#111111', color: '#cfcfcf', padding: 'clamp(56px, 8vw, 72px) clamp(20px, 5vw, 56px) 48px' }}
    >
      {/* Top grid */}
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gap: '40px',
          paddingBottom: '48px',
        }}
      >
        <div style={fadeUp(inView, 0)}>
          <img
            src={OG_LOGO}
            alt="Clean Cuts Wageningen"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '10px',
              display: 'block',
              marginBottom: '18px',
              objectFit: 'cover',
            }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#fff',
              marginBottom: '10px',
            }}
          >
            CLEAN CUTS
          </div>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              lineHeight: 1.6,
              maxWidth: '300px',
              color: '#a4a4a4',
              fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
            }}
          >
            Herenkapper in Wageningen. Gespecialiseerd in knippen, trimmen en scheren, met koffie en
            gastvrijheid.
          </p>
        </div>

        <div style={fadeUp(inView, 100)}>
          <div
            style={{
              font: "600 11px 'Space Grotesk', system-ui",
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#7d7d7d',
              marginBottom: '16px',
            }}
          >
            Contact
          </div>
          <div
            style={{
              fontSize: '14.5px',
              lineHeight: 1.9,
              color: '#cfcfcf',
              fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
            }}
          >
            <a
              href="https://maps.google.com/maps?q=Lawickse+Allee+3%2C+Wageningen"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}
            >
              Lawickse Allee 3c<br />6701 AN Wageningen
            </a>
            <a href="tel:0615618319" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
              06 15618319
            </a>
            <a href="mailto:info@cleancuts.nl" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
              info@cleancuts.nl
            </a>
          </div>
        </div>

        <div style={fadeUp(inView, 200)}>
          <div
            style={{
              font: "600 11px 'Space Grotesk', system-ui",
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#7d7d7d',
              marginBottom: '16px',
            }}
          >
            Openingstijden
          </div>
          <div
            style={{
              fontSize: '13.5px',
              lineHeight: 1.85,
              color: '#cfcfcf',
              fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
            }}
          >
            Ma 12:00–18:00 · Di–Do 09:30–19:00<br />
            Vr 09:30–20:00 · Za 09:00–17:00<br />
            Zo gesloten
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '26px',
          fontSize: '12.5px',
          color: '#7d7d7d',
          flexWrap: 'wrap',
          gap: '12px',
          fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
          ...fadeIn(inView, 300),
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' }}>
          <span>© 2026 Clean Cuts Wageningen</span>
          <a
            href="https://instagram.com/cleancuts_wageningen"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <svg
              width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
        </div>
        <span
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            letterSpacing: '2px',
            color: '#7d7d7d',
          }}
        >
          CLEAN CUTS
        </span>
      </div>
    </footer>
  );
}
