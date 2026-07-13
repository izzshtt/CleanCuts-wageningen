import { useInView, fadeUp, fadeIn } from '../hooks/useInView';

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

export default function Intro() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      style={{
        padding: 'clamp(56px, 8vw, 80px) clamp(20px, 5vw, 56px) clamp(64px, 9vw, 96px)',
        maxWidth: '980px',
        background: '#f4f4f4',
      }}
    >
      <div style={fadeIn(inView, 0)}>
        <EyebrowLabel>Welkom bij Clean Cuts</EyebrowLabel>
      </div>
      <p
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
      </p>
    </section>
  );
}
