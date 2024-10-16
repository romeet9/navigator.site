import React, { useContext } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import ArrowRight from '/public/images/icons/arrow-right.svg';
import { AccordionContext } from './accordion';

interface AccordionLikeButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const AccordionLikeButton: React.FC<AccordionLikeButtonProps> = ({ href, className, children }) => {
  const { hoveredItem, setHoveredItem } = useContext(AccordionContext);
  const buttonId = 'view-all';

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-between w-full py-[0.375rem]",
        "b_mono text-primary-color",
        "transition-all duration-400 ease-in-out",
        hoveredItem && hoveredItem !== buttonId ? "opacity-[0.42]" : "opacity-100",
        className
      )}
      onMouseEnter={() => setHoveredItem(buttonId)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <span>{children}</span>
      <ArrowRight className="w-3 h-3 text-primary-color transition-colors duration-400 ease-in-out" />
    </Link>
  );
};

export default AccordionLikeButton;
