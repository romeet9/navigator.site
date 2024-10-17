import React from 'react';
import { cn } from "@/lib/utils";

interface HoverEffectWrapperProps {
  id: string;
  hoveredItem: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
  className?: string;
  children: React.ReactNode;
}

export const HoverEffectWrapper: React.FC<HoverEffectWrapperProps> = ({
  id,
  hoveredItem,
  onMouseEnter,
  onMouseLeave,
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "transition-opacity duration-500 ease-in-out",
        hoveredItem && hoveredItem !== id ? "opacity-[0.28]" : "opacity-100",
        className
      )}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};