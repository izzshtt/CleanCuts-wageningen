'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { BOOKING_URL } from '@/lib/site-config';


const REVIEW_AVATARS = [
  'https://lh3.googleusercontent.com/a-/ALV-UjXsOQ9ch2xM33mm8lili9sRmhk6tcjC1ycus47CxlsNfOkZbgIT=w96-h96-p-rp-mo-br100',
  'https://lh3.googleusercontent.com/a/ACg8ocJxU17riqrBQg2VkQlea9ykmmwQgqolUadruLUUBc6UOTJNKg=w96-h96-p-rp-mo-ba12-br100',
  'https://lh3.googleusercontent.com/a/ACg8ocI_nA2h9Wsmdod4dDFtKF5oM7mID7w1SkQ57jAPhyHD_2z9OXU=w96-h96-p-rp-mo-br100',
];

type HeadlineLine = { delay: number; children: ReactNode };

const HEADLINE_LINES: HeadlineLine[] = [
  { delay: 0.3, children: 'Gastvrijheid' },
  {
    delay: 0.48,
    children: (
      <>
        <span style={{ fontWeight: 300 }}>voor de</span> Moderne
      </>
    ),
  },
  { delay: 0.56, children: 'Man' },
];

const TICK_STYLE: CSSProperties = {
  width: 'clamp(14px, 1.6vw, 22px)',
  height: '2px',
  background: '#fff',
  flexShrink: 0,
  display: 'inline-block',
};

const enter = (name: string, delay: number, duration = 0.75): CSSProperties => ({
  animation: `${name} ${duration}s cubic-bezier(0.22,0.68,0,1.2) ${delay}s both`,
});

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mql = window.matchMedia('(max-width: 680px)');

    const setSource = () => {
      const wanted = mql.matches ? '/hero-mobile.mp4' : '/hero.mp4';
      if (video.getAttribute('src') === wanted) return;
      video.poster = mql.matches ? '/hero-poster-mobile.jpg' : '/hero-poster.jpg';
      video.src = wanted;
      video.load();
      video.play().catch(() => {});
    };

    setSource();
    mql.addEventListener('change', setSource);
    return () => mql.removeEventListener('change', setSource);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100svh',
        overflow: 'hidden',
        background: '#161616',
      }}
    >
      {/* Background video — subtle fade-in, image poster as fallback */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-label="Clean Cuts Wageningen"
        className="hero-video"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ...enter('heroFadeIn', 0, 1.2),
        }}
      />

      {/* Gradient overlay */}
      <div
        className="hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, transparent 0%, transparent 90%, rgba(20,18,15,0.9) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Headline block */}
      <div
        className="hero-headline-block"
        style={{
          position: 'absolute',
          left: 'clamp(20px, 3.9vw, 56px)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          gap: 'clamp(16px, 2vw, 28px)',
        }}
      >
        {/* Decorative vertical line — grows from top */}
        <div
          style={{
            width: '2px',
            background: 'rgba(255,255,255,.5)',
            transformOrigin: 'top',
            flexShrink: 0,
            ...enter('heroLineGrow', 0.2, 0.9),
          }}
        />

        {/* H1 — three lines, each with its own tick mark */}
        <h1
          className="hero-headline"
          style={{
            margin: 0,
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 600,
            color: '#fff',
            fontSize: 'clamp(40px, 5.55vw, 80px)',
            lineHeight: 0.98,
            letterSpacing: '-1.5px',
          }}
        >
          {HEADLINE_LINES.map(({ delay, children }) => (
            <div
              key={delay}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(12px, 1.5vw, 20px)',
                ...enter('heroFadeUp', delay),
              }}
            >
              <span style={TICK_STYLE} />
              <span style={{ display: 'block' }}>{children}</span>
            </div>
          ))}

          {/* Buttons */}
          <div
            className="hero-cta-row"
            style={{
              display: 'flex',
              gap: 'clamp(10px, 1vw, 14px)',
              marginTop: 'clamp(24px, 2.6vw, 38px)',
              flexWrap: 'wrap',
              ...enter('heroFadeUp', 0.66),
            }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: '#f4f4f4',
                color: '#111111',
                fontWeight: 600,
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                padding: 'clamp(12px, 1.1vw, 16px) clamp(18px, 1.8vw, 26px)',
                borderRadius: '40px',
                fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
              }}
            >
              Maak een afspraak
              <span
                style={{
                  display: 'inline-flex',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: '#111111',
                  color: '#f4f4f4',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowUpRight size={15} strokeWidth={2} />
              </span>
            </a>
            <a
              href="#diensten"
              className="pill-btn"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#fff',
                border: '1px solid rgba(255,255,255,.5)',
                fontWeight: 500,
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                padding: 'clamp(12px, 1.1vw, 16px) clamp(18px, 1.8vw, 26px)',
                borderRadius: '40px',
                fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
              }}
            >
              Bekijk diensten <ArrowDown size={15} strokeWidth={2} />
            </a>
          </div>
        </h1>
      </div>

      {/* Floating review card — slides in from right */}
      <div
        className="glass-card hero-review-card"
        style={{
          position: 'absolute',
          right: 'clamp(20px, 3.9vw, 56px)',
          bottom: 'clamp(80px, 8.3vw, 120px)',
          width: 'clamp(230px, 20.8vw, 300px)',
          borderRadius: '18px',
          padding: 'clamp(16px, 1.5vw, 22px)',
          ...enter('heroSlideRight', 0.55, 0.85),
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <div style={{ display: 'flex' }}>
            {REVIEW_AVATARS.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                referrerPolicy="no-referrer"
                style={{
                  display: 'block',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  background: '#3a3a3a',
                  border: '2px solid rgba(255,255,255,.85)',
                  marginLeft: i > 0 ? '-12px' : '0',
                }}
              />
            ))}
          </div>
          <div
            style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: '26px', color: '#fff' }}
          >
            4,9
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.7)' }}> /5</span>
          </div>
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,.86)',
            fontSize: '13.5px',
            lineHeight: 1.5,
            fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
          }}
        >
          "Ik zie er weer fris en verzorgd uit! Bedankt Gijs!" Honderden tevreden klanten in
          Wageningen.
        </div>
      </div>

      {/* Spinning scroll badge */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 'clamp(24px, 2.8vw, 40px)',
          transform: 'translateX(-50%)',
        }}
      >
        <div
          style={{
            width: 'clamp(74px, 7.2vw, 104px)',
            height: 'clamp(74px, 7.2vw, 104px)',
            ...enter('heroFadeIn', 1.0, 0.8),
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 116 116"
            style={{ animation: 'ccspin 16s linear infinite' }}
          >
            <defs>
              <path
                id="scroll-circle"
                d="M58,58 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
              />
            </defs>
            <text
              style={{
                font: "600 9.5px 'Space Grotesk', system-ui",
                letterSpacing: '3px',
                fill: 'rgba(255,255,255,.85)',
                textTransform: 'uppercase',
              }}
            >
              <textPath href="#scroll-circle">
                Scroll&nbsp;·&nbsp;Maak een afspraak&nbsp;·&nbsp;
              </textPath>
            </text>
          </svg>
          <span
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            <ArrowDown size={18} strokeWidth={2} />
          </span>
        </div>
      </div>
    </section>
  );
}
