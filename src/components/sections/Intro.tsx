'use client';

import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { useInView, fadeUp, fadeIn } from '../../hooks/useInView';

const REEL_URL = 'https://www.instagram.com/reel/DafJ4wHsy55/';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function EyebrowLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        font: "600 11px 'Space Grotesk', system-ui",
        letterSpacing: '4px',
        textTransform: 'uppercase',
        color: '#6b6b6b',
        marginBottom: '26px',
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
          flexShrink: 0,
        }}
      />
      {children}
    </div>
  );
}

function InstagramEmbed() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, [loaded]);

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        aria-label="Bekijk video op Instagram"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          aspectRatio: '9 / 16',
          borderRadius: '18px',
          background: '#181818',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          boxShadow: '0 16px 40px -14px rgba(0,0,0,0.3)',
        }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,.92)',
            flexShrink: 0,
          }}
        >
          <Play size={18} color="#181818" fill="#181818" style={{ marginLeft: '2px' }} />
        </span>
      </button>
    );
  }

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={REEL_URL}
      data-instgrm-version="14"
      style={{ margin: 0, width: '100%' }}
    />
  );
}

export default function Intro() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: 'clamp(56px, 8vw, 80px) clamp(20px, 5vw, 56px) clamp(64px, 9vw, 96px)',
        maxWidth: '980px',
        background: '#f4f4f4',
      }}
    >
      <div style={fadeIn(inView, 0)}>
        <EyebrowLabel>Welkom bij Clean Cuts</EyebrowLabel>
      </div>
      <h2
        style={{
          margin: 0,
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontWeight: 400,
          fontSize: 'clamp(22px, 2.5vw, 34px)',
          lineHeight: 1.32,
          letterSpacing: '-0.3px',
          color: '#181818',
          ...fadeUp(inView, 120),
        }}
      >
        Bij Clean Cuts bieden we méér dan alleen een knipbeurt. Kom langs in onze moderne, gastvrije
        zaak, waar altijd iets interessants te lezen is en een kopje koffie klaarstaat terwijl je
        wacht.
      </h2>

      <div className="intro-reel" style={fadeUp(inView, 180)}>
        <InstagramEmbed />
      </div>
    </section>
  );
}
