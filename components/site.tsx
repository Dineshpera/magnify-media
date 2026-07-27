'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { ArrowUpRight, Moon, Sun } from 'lucide-react';
import { ThemeProvider, useTheme } from 'next-themes';
import { MagneticButton } from '@/components/ui/magnetic-button';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>{children}</ThemeProvider>;
}

export function Nav() {
  const links = ['Services', 'Case Studies', 'Pricing', 'Blog', 'Contact'];
  return (
    <header className="site-nav glass">
      <Link href="/" className="site-brand">MAGNIFY MEDIA</Link>
      <nav className="site-links" aria-label="Primary navigation">
        {links.map((link) => <Link key={link} href={`/${link.toLowerCase().replaceAll(' ', '-')}`}>{link}</Link>)}
        <ThemeToggle />
        <MagneticButton href="/contact">Start <ArrowUpRight size={14} /></MagneticButton>
      </nav>
    </header>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return <button type="button" aria-label="Toggle theme" className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button>;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-panel glass">
        <p className="section-kicker">MAGNIFY MEDIA</p>
        <h2 className="h2">Growth intelligence for brands building tomorrow.</h2>
        <div className="grid-auto">
          <p className="muted">AI-powered growth engineering across brand, content, media, automation and revenue analytics.</p>
          <p className="muted">Services · Industries · Careers · Search</p>
          <p className="muted">Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
