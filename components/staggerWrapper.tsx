import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerWrapperProps {
  children: ReactNode;
  skipAnimation?: boolean;
  index?: number;
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: any;
  className?: string;
}

export const StaggerWrapper = ({ 
  children, 
  skipAnimation = false,
  initial, 
  animate, 
  transition,
  className = '' 
}: StaggerWrapperProps) => {
  if (skipAnimation) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};