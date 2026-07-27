'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="preloader" exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div initial={{ opacity: 0, letterSpacing: '0.2em' }} animate={{ opacity: 1, letterSpacing: '0.52em' }} className="preloader-logo">MAGNIFY<br />MEDIA</motion.div>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.25, duration: 0.9 }} className="preloader-line" />
          <p>Initializing Growth Intelligence...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
