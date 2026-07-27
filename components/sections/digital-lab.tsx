import { NeuralNetwork } from '@/components/experience/neural-network';
import { labSignals } from '@/lib/growth-data';

export function DigitalLab() {
  return (
    <section className="experience-section digital-lab">
      <p className="section-kicker">DIGITAL LAB</p>
      <h2>Where strategy, taste and automation become market advantage.</h2>
      <div className="lab-orbit">
        {labSignals.map((signal) => <span key={signal}>{signal}</span>)}
      </div>
      <div className="neural-lab">
        <NeuralNetwork />
      </div>
    </section>
  );
}
