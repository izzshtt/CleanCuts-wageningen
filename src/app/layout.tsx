import type { Metadata } from 'next';
import { Outfit, Hanken_Grotesk, Space_Grotesk } from 'next/font/google';
import './globals.css';

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
  title: 'Clean Cuts Wageningen | Kapper voor de Moderne Man',
  description: 'Kapperszaak in Wageningen. Boek eenvoudig een afspraak online.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${outfit.variable} ${hanken.variable} ${space.variable}`}>
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
