import { AIConsole } from '@/components/experience/ai-console';

export function AICommandCenter() {
  return (
    <section className="experience-section command-center">
      <div>
        <p className="section-kicker">AI COMMAND CENTER</p>
        <h2>Real-time intelligence for creative, media and revenue decisions.</h2>
        <p>Every campaign becomes a learning system: audience signals, creative resonance, conversion quality and growth impact synthesized into a single executive view.</p>
      </div>
      <AIConsole />
    </section>
  );
}
