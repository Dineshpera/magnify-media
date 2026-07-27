const nodes = [
  ['BRAND', 'Positioning, identity, authority, and category memory.'],
  ['CONTENT', 'Editorial intelligence, creative systems, and distribution velocity.'],
  ['DATA', 'Signal capture, attribution, experimentation, and forecasting.'],
  ['REVENUE', 'Conversion journeys, lifecycle automation, and compounding pipeline.'],
];

export function GrowthOS() {
  return (
    <section className="experience-section growth-os-section">
      <p className="section-kicker">MAGNIFY GROWTH OS™</p>
      <h2>One operating system for brand, content, data and revenue.</h2>
      <div className="growth-os">
        <div className="os-core">GROWTH<br />OS</div>
        {nodes.map(([title, body]) => <button className={`os-node ${title.toLowerCase()}`} key={title}><strong>{title}</strong><span>{body}</span></button>)}
      </div>
    </section>
  );
}
