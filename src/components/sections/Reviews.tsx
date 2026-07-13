import { useInView, fadeUp, fadeIn } from '../hooks/useInView';
import Testimonials, { type Testimonial } from './ui/testimonial';

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
];

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
          03 · Reviews
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
          Echte Google-reviews van klanten in Wageningen — gemiddeld 5,0 sterren.
          Tevreden? Laat ook een review achter.
        </p>
      </div>

      <div style={{ ...fadeUp(inView, 200) }}>
        <Testimonials items={reviews} />
      </div>
    </section>
  );
}
