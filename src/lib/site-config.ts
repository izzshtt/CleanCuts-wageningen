// Eén bron van waarheid voor site-brede SEO/metadata-waarden.
// Domein nog niet 100% definitief bevestigd door de klant — als dat
// verandert, alleen SITE_URL hieronder aanpassen.
export const SITE_URL = 'https://cleancuts.nl';

export const BUSINESS = {
  name: 'Clean Cuts Wageningen',
  telephone: '+31615618319',
  email: 'info@cleancuts.nl',
  address: {
    streetAddress: 'Lawickse Allee 3c',
    postalCode: '6701 AN',
    addressLocality: 'Wageningen',
    addressCountry: 'NL',
  },
  priceRange: '€7,50 - €35,00',
  areaServed: ['Wageningen', 'Arnhem', 'Heteren', 'Elst', 'Bennekom', 'Ede', 'Zetten', 'Heteren', 'Renkum', 'Oosterbeek', 'Nijmegen', 'Rhenen', 'Veenendaal'],
  sameAs: [
    'https://www.tiktok.com/@cleancutswageningen?_r=1&_t=ZG-981gdS4Y7lo',
    'https://www.tiktok.com/@gijsthebarberdutch?_r=1&_t=ZG-981gbiFWGHJ',
    'https://www.tiktok.com/@cleancuts_wageningen',
  ],
  openingHours: [
    { days: ['Monday'], opens: '12:00', closes: '18:00' },
    { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '09:30', closes: '19:00' },
    { days: ['Friday'], opens: '09:30', closes: '20:00' },
    { days: ['Saturday'], opens: '09:00', closes: '17:00' },
  ],
} as const;
