import { caseStories } from '@/lib/growth-data';

export function CaseStudyStory() {
  return (
    <section className="case-story-section">
      <p className="section-kicker">CINEMATIC CASE STUDIES</p>
      <h2>Proof systems for ambitious categories.</h2>
      {caseStories.map((story) => (
        <article className="case-story" key={story.name}>
          <div><span>{story.name}</span><h3>{story.result}</h3></div>
          <dl>
            <dt>Challenge</dt><dd>{story.challenge}</dd>
            <dt>Strategy</dt><dd>{story.strategy}</dd>
            <dt>Execution</dt><dd>{story.execution}</dd>
          </dl>
          <ul>{story.stats.map((stat) => <li key={stat}>{stat}</li>)}</ul>
        </article>
      ))}
    </section>
  );
}
