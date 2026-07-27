import ThreeHero from '@/components/three-hero';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, LineChart, Radar, Sparkles } from 'lucide-react';
import { Magnetic, Reveal } from '@/components/motion';
import { services, work } from '@/lib/data';

function Section({ title, kicker, children, className = '' }: { title: string; kicker: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`section container ${className}`}>
      <Reveal>
        <p className="eyebrow">{kicker}</p>
        <h2 className="h2">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

const commandMetrics = ['Signal quality 94%', 'Creative velocity 3.8×', 'Pipeline lift +214%', 'CAC efficiency −38%'];

export default function Home() {
  return (
    <main>
      <section className="container hero-section">
        <div className="orb hero-orb" />
        <Reveal>
          <p className="eyebrow">AI-native growth systems for category leaders</p>
          <h1 className="h1">Make your brand impossible to ignore.</h1>
          <p className="hero-copy muted">
            Magnify Media builds cinematic brand worlds, conversion-grade websites, and AI-powered demand engines for teams that need presence and performance.
          </p>
          <div className="button-row">
            <Magnetic><Link className="btn primary" href="/contact">Book a growth sprint <ArrowRight size={18} /></Link></Magnetic>
            <Link className="btn glass" href="/case-studies">Explore proof</Link>
          </div>
        </Reveal>
        <div className="glass hero-visual" aria-label="Interactive Magnify Media growth orb"><ThreeHero /></div>
      </section>

      <Section kicker="Growth Engine" title="Brand, AI, and data working as one operating system.">
        <div className="growth-system glass card">
          {[['01', 'Brand gravity', 'A sharp story system that makes your category position instantly legible.'], ['02', 'AI content intelligence', 'Research, briefs, variants, and distribution loops accelerated without losing taste.'], ['03', 'Revenue telemetry', 'Dashboards that connect creative decisions to pipeline, CAC, and retention.']].map(([n, t, d]) => (
            <div className="growth-node" key={n}><span>{n}</span><h3>{t}</h3><p className="muted">{d}</p></div>
          ))}
        </div>
      </Section>

      <Section kicker="Services" title="Strategic capabilities designed around attention, trust, and revenue.">
        <div className="grid-auto premium-cards">{services.slice(0, 5).map(([slug, name, desc, Icon]) => <Link className="glass card service-card" href={`/services/${slug}`} key={slug}><Icon /><h3>{name}</h3><p className="muted">{desc}</p></Link>)}</div>
      </Section>

      <Section kicker="AI Command Center" title="A premium dashboard experience for the decisions that compound growth.">
        <div className="command-center glass card">
          <div><p className="eyebrow">Live intelligence layer</p><h3>From market signal to published asset to revenue impact.</h3><p className="muted">Campaign planning, content scoring, funnel diagnostics, and executive reporting in one calm interface.</p></div>
          <div className="metric-stack">{commandMetrics.map((metric) => <div key={metric}><Sparkles size={16} />{metric}</div>)}</div>
          <div className="radar-panel"><Radar /><BrainCircuit /><LineChart /></div>
        </div>
      </Section>

      <Section kicker="Case Studies" title="Story-driven work with strategy, execution, and measurable outcomes.">
        <div className="grid-auto">{work.map((item) => <Link className="glass card case-card" href={`/case-studies/${item.slug}`} key={item.slug}><p className="eyebrow">{item.cat}</p><h3>{item.title}</h3><p><strong>Problem:</strong> {item.problem}</p><p><strong>Strategy:</strong> {item.strategy}</p><p><strong>Execution:</strong> {item.execution}</p><p className="result">{item.metric}</p></Link>)}</div>
      </Section>

      <section className="container section final-cta">
        <div className="glass card">
          <p className="eyebrow">Final CTA</p>
          <h2 className="h2">Build the brand engine your market remembers.</h2>
          <p className="muted">Bring us the ambition. We will turn it into a premium digital experience and a measurable growth system.</p>
          <Link className="btn primary" href="/contact">Start the conversation <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
