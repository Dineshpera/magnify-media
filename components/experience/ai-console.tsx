'use client';

import { motion } from 'framer-motion';
import { commandMetrics } from '@/lib/growth-data';

export function AIConsole() {
  return (
    <div className="ai-console">
      <div className="console-topline"><span>MAGNIFY AI ENGINE</span><span>LIVE PERFORMANCE</span></div>
      <div className="console-grid">
        {commandMetrics.map((metric, index) => (
          <motion.div className="console-metric" key={metric.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <em>{metric.delta}</em>
          </motion.div>
        ))}
      </div>
      <div className="signal-chart">{Array.from({ length: 28 }, (_, index) => <i key={index} style={{ height: `${22 + Math.sin(index * 0.7) * 18 + index * 1.2}%` }} />)}</div>
    </div>
  );
}
