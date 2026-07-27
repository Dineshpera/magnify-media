import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer, Nav, Providers } from '@/components/site';
import { Cursor } from '@/components/effects/cursor';
import { Preloader } from '@/components/effects/preloader';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://magnifymedia.example'),
  title: { default: 'Magnify Media — AI-Powered Growth Engineering Company', template: '%s · Magnify Media' },
  description: 'Magnify Media engineers AI-powered growth systems that combine brand, content, data, automation and revenue performance.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Magnify Media', description: 'AI-powered growth engineering for category leaders.', type: 'website', url: '/' },
  twitter: { card: 'summary_large_image', title: 'Magnify Media', description: 'AI-powered growth engineering for category leaders.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Magnify Media',
    description: 'AI-powered growth engineering company.',
    url: 'https://magnifymedia.example',
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${mono.variable}`}>
      <body>
        <Providers>
          <Preloader />
          <Cursor />
          <Nav />
          {children}
          <Footer />
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
