import Link from 'next/link';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Algemene voorwaarden | Clean Cuts Wageningen',
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '36px' }}>
    <h2
      style={{
        fontFamily: "'Outfit', system-ui, sans-serif",
        fontWeight: 500,
        fontSize: '18px',
        color: '#181818',
        marginBottom: '10px',
        letterSpacing: '-0.2px',
      }}
    >
      {title}
    </h2>
    <div style={{ fontSize: '15px', lineHeight: 1.75, color: '#4a4a4a' }}>{children}</div>
  </div>
);

export default function AlgemeneVoorwaarden() {
  return (
    <div
      style={{
        background: '#f4f4f4',
        minHeight: '100vh',
        fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
        color: '#111111',
      }}
    >
      <Nav />
      <main
        style={{
          padding: 'clamp(140px, 14vw, 180px) clamp(20px, 5vw, 56px) clamp(64px, 9vw, 96px)',
          maxWidth: '760px',
          margin: '0 auto',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '44px',
            padding: '10px 18px',
            marginBottom: '28px',
            borderRadius: '999px',
            background: '#111111',
            color: '#f4f4f4',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.2px',
            boxShadow: '0 10px 24px rgba(17, 17, 17, 0.12)',
          }}
        >
          Terug naar home
        </Link>

        <h1
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(30px, 3.5vw, 46px)',
            letterSpacing: '-0.5px',
            color: '#181818',
            marginBottom: '8px',
          }}
        >
          Algemene voorwaarden
        </h1>
        <p style={{ fontSize: '13.5px', color: '#8a8a8a', marginBottom: '48px' }}>
          Clean Cuts Wageningen · Lawickse Allee 3c, 6701 AN Wageningen · Laatste update: juli 2026
        </p>

        <Section title="1. Algemeen">
          <p>
            Deze algemene voorwaarden zijn van toepassing op alle diensten die worden aangeboden door
            Clean Cuts Wageningen, gevestigd aan de Lawickse Allee 3c te Wageningen. Door gebruik te
            maken van onze diensten, gaat u akkoord met deze voorwaarden.
          </p>
        </Section>

        <Section title="2. Afspraken">
          <p>
            Afspraken kunnen worden gemaakt via onze website of telefonisch. Wij verzoeken u om bij
            verhindering minimaal <strong>24 uur van tevoren</strong> af te zeggen of uw afspraak te
            verzetten. Bij het niet nakomen of te laat afzeggen van een afspraak behouden wij ons het
            recht voor kosten in rekening te brengen.
          </p>
        </Section>

        <Section title="3. Prijzen">
          <p>
            Alle vermelde prijzen zijn inclusief btw. De genoemde prijzen gelden als vanafprijs;
            afhankelijk van de behandeling, haarlengte of gewenste stijl kunnen de definitieve kosten
            hoger uitvallen. De barber informeert u hier voorafgaand aan de behandeling over.
          </p>
        </Section>

        <Section title="4. Betaling">
          <p>
            Betaling dient direct na afloop van de behandeling te geschieden. Wij accepteren
            contant geld en betaling via pin. Betaling vooraf via iDEAL is mogelijk bij afspraken
            die online worden geboekt.
          </p>
        </Section>

        <Section title="5. Aansprakelijkheid">
          <p>
            Clean Cuts Wageningen spant zich in om de diensten naar beste inzicht en vermogen uit te
            voeren. Wij zijn niet aansprakelijk voor schade die het gevolg is van onjuiste of
            onvolledige informatie die door de klant is verstrekt. Bij klachten over de uitvoering
            van de behandeling verzoeken wij u dit zo spoedig mogelijk, en uiterlijk binnen
            48 uur, aan ons te melden.
          </p>
        </Section>

        <Section title="6. Privacy">
          <p>
            Persoonsgegevens die u verstrekt bij het maken van een afspraak worden uitsluitend
            gebruikt voor de uitvoering van onze diensten en worden niet gedeeld met derden. Meer
            informatie vindt u in ons privacybeleid.
          </p>
        </Section>

        <Section title="7. Klachten">
          <p>
            Heeft u een klacht over onze dienstverlening? Neem dan contact met ons op via{' '}
            <a href="mailto:info@cleancuts.nl" style={{ color: '#111', textDecoration: 'underline' }}>
              info@cleancuts.nl
            </a>{' '}
            of bel ons op{' '}
            <a href="tel:0615618319" style={{ color: '#111', textDecoration: 'underline' }}>
              06 15618319
            </a>
            . Wij streven ernaar uw klacht binnen 5 werkdagen te behandelen.
          </p>
        </Section>

        <Section title="8. Wijzigingen">
          <p>
            Clean Cuts Wageningen behoudt zich het recht voor deze voorwaarden te wijzigen. De
            meest actuele versie is altijd te vinden op deze pagina.
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
