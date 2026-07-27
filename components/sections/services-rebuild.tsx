import { growthPillars } from '@/lib/growth-data';

export function ServicesRebuild() {
  return (
    <section className="experience-section">
      <p className="section-kicker">STRATEGIC PILLARS</p>
      <h2>Not services. Growth systems engineered to compound.</h2>
      <div className="pillar-grid">
        {growthPillars.map((pillar, index) => (
          <article className="pillar-card" key={pillar.title}>
            <span>0{index + 1}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
