'use client';

import Link from 'next/link';
import { type MouseEvent, type ReactNode, useRef } from 'react';

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function MagneticButton({ href, children, variant = 'primary' }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(event: MouseEvent<HTMLAnchorElement>) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  }

  return (
    <Link ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={`magnetic-button ${variant}`}>
      <span>{children}</span>
    </Link>
  );
}
