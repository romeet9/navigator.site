import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import ArrowRight from '/public/images/icons/arrow-right.svg';

interface AccordionLikeButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const AccordionLikeButton: React.FC<AccordionLikeButtonProps> = ({ href, className, children }) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-between w-full py-[0.375rem]",
        "b_mono text-primary-color hover:underline",
        "transition-all duration-200",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="w-3 h-3 text-primary-color transition-colors duration-200" />
    </Link>
  );
};

export default AccordionLikeButton;