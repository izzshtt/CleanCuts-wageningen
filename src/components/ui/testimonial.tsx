import { Star } from 'lucide-react';

export type Testimonial = {
  id: string | number;
  name: string;
  meta?: string;
  image?: string;
  rating: number;
  review: string;
};

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.06)] max-w-xs w-full transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3">
        {testimonial.image ? (
          <img
            className="w-12 h-12 rounded-full object-cover object-top"
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            aria-hidden="true"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1a1a1a] text-[#c9a24b] font-space text-sm font-semibold"
          >
            {initials(testimonial.name)}
          </div>
        )}
        <div className="min-w-0">
          <p className="font-outfit text-lg leading-tight text-[#111] truncate">
            {testimonial.name}
          </p>
          {testimonial.meta && (
            <p className="text-gray-500 text-sm">{testimonial.meta}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1 mt-4" aria-label={`${testimonial.rating} van 5 sterren`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="w-4 h-4 text-yellow-400"
            strokeWidth={1.5}
            fill={testimonial.rating > index ? 'currentColor' : 'none'}
          />
        ))}
      </div>

      <p className="text-gray-600 mt-4 leading-relaxed">"{testimonial.review}"</p>
    </div>
  );
}

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-6">
      {items.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>
  );
}
