'use client';

import { useInView, fadeUp, fadeIn } from '../../hooks/useInView';
import { TestimonialCard, type Testimonial } from '@/components/ui/testimonial';

const reviews: Testimonial[] = [
  {
    id: 1,
    name: 'Enrique Asín García',
    meta: '2 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjXsOQ9ch2xM33mm8lili9sRmhk6tcjC1ycus47CxlsNfOkZbgIT=w96-h96-p-rp-mo-br100',
    review:
      'Ik was al een tijd op zoek naar een goede barbershop in de buurt! Vandaag geknipt bij Clean Cuts door Achmad en ik kon niet tevredener zijn. Ik had een idee in gedachten en het resultaat kon niet beter. De zaak is ruim en cool, en de barbers zijn vriendelijk, professioneel en vakkundig. Ik kom zeker terug!',
  },
  {
    id: 2,
    name: 'Sancho Huizenga',
    meta: '4 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocJxU17riqrBQg2VkQlea9ykmmwQgqolUadruLUUBc6UOTJNKg=w96-h96-p-rp-mo-ba12-br100',
    review:
      'Echt blij met mijn knipbeurt bij Ahmet, en vooral met zijn oog voor detail. Bedankt!',
  },
  {
    id: 3,
    name: 'Zakhar Starosyla',
    meta: 'een maand geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocI_nA2h9Wsmdod4dDFtKF5oM7mID7w1SkQ57jAPhyHD_2z9OXU=w96-h96-p-rp-mo-br100',
    review:
      'Gijs heeft mijn haar perfect geknipt. Had niet verwacht dat het zo goed zou worden!',
  },
  {
    id: 4,
    name: 'Nicholas Scullion',
    meta: '10 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjXiCQQ15i1_ukK534vDWvIpySn5Gqq_9busZM_Pog9r3uvF-ZDv=w96-h96-p-rp-mo-ba12-br100',
    review: 'Hele goede barber. Strak, precies en een eerlijke prijs.',
  },
  {
    id: 5,
    name: 'Li',
    meta: 'een maand geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocLLp8c9nc3HkbG2U3YWQpUx9uh0rA0R-SIeTwDWbNTv6yMNgDk=w96-h96-p-rp-mo-br100',
    review: 'Leander is een topbarber. Aanrader.',
  },
  {
    id: 6,
    name: 'Tevreden klant',
    meta: 'In de zaak · Wageningen',
    rating: 5,
    review: 'Strakke fade en alle tijd genomen. Echt vakmanschap.',
  },
  {
    id: 7,
    name: 'Thijs Peperkamp',
    meta: '4 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocKTTYwI1OGrlIf8XQffCAwDrLaf_aabxNod550NJ2cKZRhVzA=w72-h72-p-rp-mo-br100',
    review: 'Al 3 jaar lang word ik elke keer top geknipt. Super aardige jongens ook. Top zaak! 5 sterren',
  },
  {
    id: 8,
    name: 'Jan Smans',
    meta: '3 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocLDpmCrikHwKS3sfoblROD7K6Y7jY90RWw5U1YyR_FU0HldkA=w72-h72-p-rp-mo-br100',
    review: 'Mooie en nette zaak waar een cleancut prioriteit nummer 1 is. Leuk en hecht team die allemaal voor het perfecte kapsel gaan. Kom zelf al een paar jaar bij cleancuts/Gijs en heb geen klachten gehad.',
  },
  {
    id: 9,
    name: 'Kevin la Maitre',
    meta: '3 maanden geleden',
    rating: 5,
    review: 'Al jaren vaste klant bij Gijs, altijd een gezellige sfeer en elke keer weer een top kapsel.',
  },
  {
    id: 10,
    name: 'Zafi Plomp',
    meta: '8 maanden geleden',
    rating: 5,
    review: 'Heel netjes geknipt, super aardige kapper',
  },
  {
    id: 11,
    name: 'Jan Druif',
    meta: '10 maanden geleden',
    rating: 5,
    review: 'De sfeer hier is top, en er zijn altijd leuke gesprekken. Ik zou het zeker aanbevelen, dankzij CleanCuts zijn mijn wenkbrauwen weer helemaal fris!',
  },
  {
    id: 12,
    name: 'Michael Van schaik',
    meta: '9 maanden geleden',
    rating: 5,
    review: 'Een hele prettige kapperszaak altijd heel vriendelijk en altijd bereid om een praatje te maken. Heel erg fijn om in de stoel te zitten en geknipt hier te worden!',
  },
  {
    id: 13,
    name: 'Robin Vdw',
    meta: '3 maanden geleden',
    rating: 5,
    review: 'Toppers die je elke dag fris zetten!',
  },
  {
    id: 14,
    name: 'Jasper',
    meta: '5 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjVJ19R3lD9aa9Z1aZVUBCz9jlt1Um6-FfYRKvpv3gjvlA1lhCOb=w72-h72-p-rp-mo-br100',
    review: 'Altijd goede service en fijn personeel.',
  },
  {
    id: 15,
    name: 'Muhammad Usman Iqbal',
    meta: '4 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjXP5qLkLuqbk8Xm1INpNYKBMhdCKStimAj1ZU0Edp15JU-7V5OM=w144-h144-p-rp-mo-br100',
    review: 'Friendly staff, Had very good experience.',
  },
  {
    id: 16,
    name: 'Thomas van den Elsen',
    meta: '10 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocK0JxOPxXPB0omyyyWHHNXav4YUc3ORzq3B2xvD_QGi2NILjg=w72-h72-p-rp-mo-br100',
    review: 'Beste en gezelligste kapper van Wageningen om je goed te laten zetten!! Zeker een aanrader!',
  },
  {
    id: 17,
    name: 'Max Wulfen',
    meta: '11 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocLsio9iWvmdac-HnPUSjoi19VKntOAO-jtvTST8WMsUOxjUYg=w72-h72-p-rp-mo-br100',
    review: 'Beste kapper van Wageningen en omstreken knip al 6 jaar bij hem nog nooit ontevreden weg gegaan',
  },
  {
    id: 18,
    name: 'Daan Verkuijl',
    meta: '3 weken geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocJdkU7FBoDkGIF91P-_BisCTITYKaMp4b2j7xKHM4r8VWdHGQ=w72-h72-p-rp-mo-br100',
    review: 'Beste kapper van Wageningen!',
  },
  {
    id: 19,
    name: 'Elias Martinez',
    meta: '4 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocKOiG5GDgQ-pb65gBEm3X-VD_Jpq2iFVvjZyq4JvVU-ofBX8vI=w144-h144-p-rp-mo-br100',
    review: 'Beste Barber altijd Friss',
  },
  {
    id: 20,
    name: 'Dikkyoshi21',
    meta: '7 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjWe02r4EuQn3EjH9dD3Jnnactgvkysdjd6zWUEgAyFZjciZkKM=w72-h72-p-rp-mo-br100',
    review: 'Beste kappersbeurt ooit!!!',
  },
  {
    id: 21,
    name: 'Jantje Ruisch',
    meta: '11 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocI1XAHer1jWTy3rYSIzL2aka4_Fa9v_iSSSpMBdbRZmbrU0bw=w72-h72-p-rp-mo-br100',
    review: 'Vakwerk en super sfeer! Geweldig mooie zaak en klantvriendelijkheid ligt hoog!!',
  },
  {
    id: 22,
    name: 'Joeri Houvast',
    meta: '11 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocL6w9L8T1xY7UvM3ye1Ea8Ax7a4YG5K0o1IMu9t7eF79zoiQZc=w72-h72-p-rp-mo-br100',
    review: 'Gastvrij, lekker koud drinken, strak geknipt en lekker kunnen praten.',
  },
  {
    id: 23,
    name: 'Mika van Ernst',
    meta: 'een jaar geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjWDc_zX9MCkKEJUc7nGKSedE7sSiutKLEvEGHQlk9iEImc0dDe-=w72-h72-p-rp-mo-br100',
    review: 'Top service, altijd bereikbaar en vriendelijk, Gijs zet je altijd goed 👍',
  },
  {
    id: 24,
    name: 'Maxim GM',
    meta: '10 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocKGTcwmYq072NZNwUm6osg0HSQELtxl_oAbkzIHLERfpcgN8g=w72-h72-p-rp-mo-br100',
    review: 'Vriendelijke en correcte kappers in een mooie ruime zaak 👌',
  },
  {
    id: 25,
    name: 'Robin van den Oever',
    meta: '9 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjUz6ZPK2Z_UG47KuRBg9ofSDOUXTuvW-KapGLoVQjOPBMMKKqBv=w72-h72-p-rp-mo-br100',
    review: 'Geknipt door Micha, goed resultaat en een goeie kerel!',
  },
  {
    id: 26,
    name: 'Daan Rolloos',
    meta: '10 maanden geleden',
    rating: 5,
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocI-FYtQvy7iehAuoRMExFksmXlTfkay2NSunQcVvfkEXlbIpA=w72-h72-p-rp-mo-br100',
    review: 'Fantastisch geholpen door Gijs',
  },
];

const half = Math.ceil(reviews.length / 2);
const rowA = reviews.slice(0, half);
const rowB = reviews.slice(half);

type MarqueeRowProps = { items: Testimonial[]; direction: 'right' | 'left'; prefix: string };

function MarqueeRow({ items, direction, prefix }: MarqueeRowProps) {
  return (
    <div className="group overflow-hidden [--gap:1.5rem]">
      <div className={`flex items-stretch [gap:var(--gap)] animate-marquee-${direction} group-hover:[animation-play-state:paused]`}>
        <div className="flex items-stretch [gap:var(--gap)]">
          {items.map((t) => (
            <TestimonialCard key={`${prefix}-${t.id}`} testimonial={t} />
          ))}
        </div>
        <div className="flex items-stretch [gap:var(--gap)]" aria-hidden="true">
          {items.map((t) => (
            <TestimonialCard key={`${prefix}-dup-${t.id}`} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref}
      id="reviews"
      style={{ padding: 'clamp(64px, 9vw, 96px) clamp(20px, 5vw, 56px)', background: '#f4f4f4' }}
    >
      <div className="flex flex-col items-center text-center">
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
            ...fadeIn(inView, 0),
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
          Reviews
        </div>

        <h2
          className="font-outfit"
          style={{
            margin: '0 0 12px',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 42px)',
            letterSpacing: '-0.5px',
            color: '#181818',
            ...fadeUp(inView, 80),
          }}
        >
          Wat klanten zeggen
        </h2>

        <p
          className="text-gray-500"
          style={{
            margin: '0 0 64px',
            maxWidth: '560px',
            fontSize: '15px',
            lineHeight: 1.6,
            ...fadeIn(inView, 140),
          }}
        >
          Meer dan 60+ tevreden klanten in Wageningen: gemiddeld 4,9 sterren.
          Tevreden? Laat ook een review achter.
        </p>
      </div>

      <div style={{ ...fadeUp(inView, 200) }} className="flex flex-col gap-6">
        <MarqueeRow items={rowA} direction="right" prefix="a" />
        <MarqueeRow items={rowB} direction="left" prefix="b" />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '52px',
          ...fadeUp(inView, 320),
        }}
      >
        <a
          href="https://www.google.com/maps/place/Cleancutswageningen/@51.9687699,5.661981,17z/data=!4m8!3m7!1s0x47c7ab0b6a839c85:0x8c53e37565f8082!8m2!3d51.9687699!4d5.6645559!9m1!1b1!16s%2Fg%2F11x5snl183?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="google-review-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 28px',
            background: '#ffffff',
            border: '1.5px solid #e0e0e0',
            borderRadius: '12px',
            fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
            fontSize: '15px',
            fontWeight: 500,
            color: '#1a1a1a',
            textDecoration: 'none',
            transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
          }}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, {
              transform: 'translateY(-3px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
              borderColor: '#c8c8c8',
            });
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, {
              transform: 'translateY(0)',
              boxShadow: 'none',
              borderColor: '#e0e0e0',
            });
          }}
        >
          {/* Google G logo */}
          <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.1 33.9 29.6 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
            <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 6 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.7 7.4 6.3 14.7z"/>
            <path fill="#FBBC05" d="M24 46c5.5 0 10.5-1.8 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.5 0-10.2-3.5-11.9-8.4l-7 5.4C8.5 41.8 15.7 46 24 46z"/>
            <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.3-2.4 4.3-4.3 5.7l6.7 5.5C42.1 36.2 45 30.6 45 24c0-1.3-.2-2.7-.5-4z"/>
          </svg>
          <span>
            <span style={{ display: 'block', fontSize: '11px', color: '#888', lineHeight: 1, marginBottom: '2px', fontWeight: 400 }}>
              Tevreden?
            </span>
            Laat een review achter op Google
          </span>
          {/* Arrow */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: 0.4, marginLeft: '2px' }}>
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
