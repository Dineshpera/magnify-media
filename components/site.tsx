'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { ArrowUpRight, Moon, Sun } from 'lucide-react';
import { ThemeProvider, useTheme } from 'next-themes';
import { Magnetic } from './motion';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });
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

  return <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>{children}</ThemeProvider>;
}

export function Nav() {
  const links = ['Services', 'Portfolio', 'Case Studies', 'Pricing', 'Blog', 'Contact'];
  return (
    <header className="container site-header">
      <nav className="glass nav-shell">
        <Link href="/" className="brand-mark">Magnify Media</Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link} href={`/${link.toLowerCase().replaceAll(' ', '-')}`} className="btn nav-link">{link}</Link>
          ))}
          <ThemeToggle />
          <Magnetic><Link href="/contact" className="btn primary nav-cta">Start <ArrowUpRight size={16} /></Link></Magnetic>
        </div>
      </nav>
    </header>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return <button aria-label="Toggle theme" className="btn nav-link" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button>;
}

export function Footer() {
  return (
    <footer className="section">
      <div className="container glass card">
        <div className="grid-auto">
          <div><h2 className="h2">Let’s magnify what matters.</h2><p className="muted">Premium strategy, creative, media, and engineering for ambitious brands.</p></div>
          <div><b>Explore</b><p className="muted">Services · Industries · Careers · Search</p></div>
          <div><b>Legal</b><p className="muted">Privacy · Terms</p></div>
        </div>
      </div>
    </footer>
  );
}
