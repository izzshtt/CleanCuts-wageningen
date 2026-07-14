'use client';

import { useInView, fadeUp, fadeIn } from '../../hooks/useInView';

type TeamMember = { name: string; role: string; image: string };

// Rollen per persoon te bevestigen bij de klant.
// Foto's plaatsen in public/team/ als gijs.jpg, micha.jpg, etc. (WebP <150KB)
const TEAM: TeamMember[] = [
  { name: 'Gijs',    role: 'Eigenaar & Barber', image: '/team/gijs.webp' },
  { name: 'Iannes',  role: 'Barber',   image: '/team/iannes.webp' },
  { name: 'Jermain', role: 'Barber',   image: '/team/jermain.webp' },
  { name: 'Leander', role: 'Barber',   image: '/team/leander.webp' },
  { name: 'Mariska', role: 'Barber',   image: '/team/mariska.webp' },
  { name: 'Micha',   role: 'Barber',   image: '/team/micha.webp' },
  { name: 'Achmad',  role: 'Barber',   image: '/team/achmad.webp' },
];

function Avatar({ member, delay, inView }: { member: TeamMember; delay: number; inView: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        ...fadeUp(inView, delay),
      }}
    >
      <div
        className="team-avatar"
        style={{
          width: '100%',
          aspectRatio: '1 / 1',
          borderRadius: '50%',
          overflow: 'hidden',
          background: '#e0e0e0',
          flexShrink: 0,
          position: 'relative',
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = 'none';
            const parent = img.parentElement;
            if (parent && !parent.querySelector('.team-initials')) {
              const el = document.createElement('div');
              el.className = 'team-initials';
              el.textContent = member.name[0];
              el.style.cssText =
                'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:\'Outfit\',system-ui,sans-serif;font-size:clamp(28px,4vw,38px);font-weight:500;color:#6b6b6b;';
              parent.appendChild(el);
            }
          }}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: '15px',
            color: '#181818',
            lineHeight: 1.3,
          }}
        >
          {member.name}
        </div>
        <div
          style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: '#8a8a8a',
            marginTop: '4px',
          }}
        >
          {member.role}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      ref={ref}
      id="team"
      style={{
        padding: 'clamp(64px, 9vw, 96px) clamp(20px, 5vw, 56px)',
        background: '#f4f4f4',
      }}
    >
      {/* Header */}
      <div style={fadeIn(inView, 0)}>
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
          Team
        </div>
        <h2
          style={{
            margin: '0 0 48px',
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 42px)',
            letterSpacing: '-0.5px',
            color: '#181818',
          }}
        >
          De mensen achter de schaar
        </h2>
      </div>

      {/* Grid */}
      <div className="team-grid">
        {TEAM.map((member, i) => (
          <Avatar key={member.name} member={member} delay={i * 60} inView={inView} />
        ))}
      </div>
    </section>
  );
}
