import { useCallback } from 'react';

interface StaggerConfig {
  baseDelay?: number;
  staggerDelay?: number;
  duration?: number;
  y?: number;
}

export const useStaggerAnimation = ({
  baseDelay = 0.1,
  staggerDelay = 0.1,
  duration = 0.9,
  y = 3
}: StaggerConfig = {}) => {
  const getTransition = useCallback((index: number = 0) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration,
      delay: baseDelay + (index * staggerDelay),
      ease: [0.34, 1.56, 0.64, 1],
      opacity: { duration: duration - 0.2, delay: baseDelay + (index * staggerDelay) },
      y: { duration, ease: [0.34, 1.56, 0.64, 1], delay: baseDelay + (index * staggerDelay) },
    }
  }), [baseDelay, staggerDelay, duration, y]);

  return { getTransition };
};