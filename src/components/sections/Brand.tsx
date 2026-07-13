import { useInView, fadeUp, fadeIn } from '../hooks/useInView';

export default function Brand() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      ref={ref}
      style={{
        background: '#111111',
        color: '#f4f4f4',
        padding: 'clamp(72px, 11vw, 110px) clamp(20px, 5vw, 56px)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          font: "600 11px 'Space Grotesk', system-ui",
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color: 'rgba(245,245,245,.5)',
          marginBottom: '34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          ...fadeIn(inView, 0),
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '24px',
            height: '2px',
            background: 'rgba(245,245,245,.5)',
            opacity: 0.55,
          }}
        />
        Waar wij voor staan
      </div>

      <p
        style={{
          margin: '0 auto',
          maxWidth: '920px',
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontWeight: 400,
          fontSize: 'clamp(20px, 2.5vw, 33px)',
          lineHeight: 1.5,
          letterSpacing: '-0.2px',
          ...fadeUp(inView, 120),
        }}
      >
        <strong style={{ fontWeight: 600 }}>'Clean'</strong> staat voor fris, verzorgd en verfijnd,
        terwijl <strong style={{ fontWeight: 600 }}>'Cuts'</strong> niet alleen verwijst naar een
        perfecte knipbeurt, maar ook symbool staat voor precisie en vakmanschap.
      </p>
    </section>
  );
}
