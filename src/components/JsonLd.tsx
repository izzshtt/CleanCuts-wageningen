import { BUSINESS, SITE_URL } from '@/lib/site-config';

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: BUSINESS.name,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS.address,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'Place', name })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '60',
    },
    sameAs: BUSINESS.sameAs,
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
