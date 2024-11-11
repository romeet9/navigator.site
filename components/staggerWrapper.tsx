import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerWrapperProps {
  children: ReactNode;
  index?: number;
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: any;
  className?: string;
}

export const StaggerWrapper = ({ 
  children, 
  initial, 
  animate, 
  transition,
  className = '' 
}: StaggerWrapperProps) => {
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