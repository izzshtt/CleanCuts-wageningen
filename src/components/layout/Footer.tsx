'use client';

import type { CSSProperties, MouseEvent } from 'react';
import { useInView, fadeUp, fadeIn } from '../../hooks/useInView';

const OG_LOGO = '/cleancuts-logo.webp';

const LINK_BASE: CSSProperties = {
  color: '#d4d4d4',
  textDecoration: 'none',
  transition: 'color 0.18s ease, opacity 0.18s ease',
};

const LINK_HOVER: CSSProperties = { color: '#ffffff' };

function onEnter(e: MouseEvent<HTMLAnchorElement>) {
  Object.assign(e.currentTarget.style, LINK_HOVER);
}

function onLeave(e: MouseEvent<HTMLAnchorElement>, extra?: CSSProperties) {
  Object.assign(e.currentTarget.style, { ...LINK_BASE, ...extra });
}

const SOCIAL_LINK_EXTRA: CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '6px' };

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
              borderRadius: '16px',
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
              href="https://maps.google.com/maps?q=Lawickse+Allee+3c%2C+Wageningen"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...LINK_BASE, display: 'block' }}
              onMouseEnter={onEnter}
              onMouseLeave={(e) => onLeave(e)}
            >
              Lawickse Allee 3c<br />6701 AN Wageningen
            </a>
            <a
              href="tel:0615618319"
              style={{ ...LINK_BASE, display: 'block' }}
              onMouseEnter={onEnter}
              onMouseLeave={(e) => onLeave(e)}
            >
              06 15618319
            </a>
            <a
              href="mailto:info@cleancuts.nl"
              style={{ ...LINK_BASE, display: 'block' }}
              onMouseEnter={onEnter}
              onMouseLeave={(e) => onLeave(e)}
            >
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
        className="footer-bottom"
        style={{
          paddingTop: '26px',
          fontSize: '12.5px',
          color: '#7d7d7d',
          fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
          ...fadeIn(inView, 300),
        }}
      >
        <div className="footer-bottom-left" style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' }}>
          <span>© 2026 Clean Cuts Wageningen</span>
          <a
            href="https://www.instagram.com/cleancuts_wageningen"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...LINK_BASE, ...SOCIAL_LINK_EXTRA }}
            onMouseEnter={onEnter}
            onMouseLeave={(e) => onLeave(e, SOCIAL_LINK_EXTRA)}
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
          <a
            href="https://www.tiktok.com/@cleancutswageningen?_r=1&_t=ZG-981gdS4Y7lo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...LINK_BASE, ...SOCIAL_LINK_EXTRA }}
            onMouseEnter={onEnter}
            onMouseLeave={(e) => onLeave(e, SOCIAL_LINK_EXTRA)}
          >
            <svg
              width="15" height="15" viewBox="0 0 24 24" fill="currentColor"
            >
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
            TikTok
          </a>
        </div>
        <a
          href="https://altevo.nl/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-bottom-designed"
          style={{ ...LINK_BASE }}
          onMouseEnter={onEnter}
          onMouseLeave={(e) => onLeave(e)}
        >
          Designed by Altevo
        </a>
        <div className="footer-bottom-right" style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' }}>
          <a
            href="/algemene-voorwaarden"
            style={LINK_BASE}
            onMouseEnter={onEnter}
            onMouseLeave={(e) => onLeave(e)}
          >
            Algemene voorwaarden
          </a>
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
      </div>
    </footer>
  );
}
