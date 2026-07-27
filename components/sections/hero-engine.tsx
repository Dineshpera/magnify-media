import { GrowthCore3D } from '@/components/experience/growth-core-3d';
import { MagneticButton } from '@/components/ui/magnetic-button';

export function HeroEngine() {
  return (
    <section className="hero-engine">
      <div className="hero-copy">
        <p className="section-kicker">MAGNIFY GROWTH ENGINE™</p>
        <h1>WE ENGINEER DIGITAL GROWTH FOR THE AI ERA.</h1>
        <p>Magnify Media combines AI, creativity and performance systems to build brands that dominate.</p>
        <div className="hero-actions">
          <MagneticButton href="/contact">START YOUR GROWTH JOURNEY</MagneticButton>
          <MagneticButton href="/case-studies" variant="secondary">EXPLORE OUR WORK</MagneticButton>
        </div>
      </div>
      <GrowthCore3D />
    </section>
  );
}
