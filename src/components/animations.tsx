'use client';

export { AnimatedSection as FadeIn, StaggerContainer, StaggerItem, CountUp } from '@/components/layout/AnimatedSection';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

export function ScaleIn({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
