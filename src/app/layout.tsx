import type { Metadata } from 'next';
import { Outfit, Hanken_Grotesk, Space_Grotesk } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site-config';
import { Analytics } from '@vercel/analytics/next';

const outfit = Outfit({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-outfit',
});

const hanken = Hanken_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-hanken',
});

const space = Space_Grotesk({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Clean Cuts Wageningen | Herenkapper voor de Moderne Man',
    template: '%s | Clean Cuts Wageningen',
  },
  description:
    'Herenkapper in Wageningen voor knippen, baard trimmen en scheren. Ook goed bereikbaar vanuit Ede, Bennekom, Renkum, Arnhem en omgeving. Boek eenvoudig een afspraak online.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: '/cleancuts-logo.webp',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Clean Cuts Wageningen | Herenkapper voor de Moderne Man',
    description:
      'Herenkapper in Wageningen voor knippen, baard trimmen en scheren. Boek eenvoudig een afspraak online.',
    url: SITE_URL,
    siteName: 'Clean Cuts Wageningen',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Clean Cuts Wageningen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean Cuts Wageningen | Herenkapper voor de Moderne Man',
    description:
      'Herenkapper in Wageningen voor knippen, baard trimmen en scheren. Boek eenvoudig een afspraak online.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#111111',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${outfit.variable} ${hanken.variable} ${space.variable}`}>
        <Analytics />
        <JsonLd />
        <div
          style={{
            background: '#f4f4f4',
            overflow: 'hidden',
            fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
            color: '#111111',
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
