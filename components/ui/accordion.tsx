"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"
import ChevronDown from '/public/images/icons/chevron-down.svg'
import { useHoverEffect } from '@/hooks/useHoverEffect';
import { HoverEffectWrapper } from '../hoverEffectWrapper';

interface AccordionContextProps {
  hoveredItem: string | null;
  handleMouseEnter: (id: string) => void;
  handleMouseLeave: () => void;
  selectedContent: string | null;
  setSelectedContent: (value: string | null) => void;
  selectedYear: string | null;
  setSelectedYear: (value: string | null) => void;
}

const AccordionContext = React.createContext<AccordionContextProps>({
  hoveredItem: null,
  handleMouseEnter: () => {},
  handleMouseLeave: () => {},
  selectedContent: '2024-005', // Default to Linkedin Brand Kit
  setSelectedContent: () => {},
  selectedYear: null,
  setSelectedYear: () => {},
});

type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  type: 'single' | 'multiple';
  defaultSelectedContent?: string;
  collapsible?: boolean;
};

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, ...props }, ref) => {
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect();
  const [selectedContent, setSelectedContent] = React.useState<string | null>('2024-005');
  const [selectedYear, setSelectedYear] = React.useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ 
      hoveredItem, 
      handleMouseEnter, 
      handleMouseLeave, 
      selectedContent, 
      setSelectedContent,
      selectedYear,
      setSelectedYear
    }}>
      <AccordionPrimitive.Root
        ref={ref}
        className={className}
        {...props}
      />
    </AccordionContext.Provider>
  );
});
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = React.useContext(AccordionContext);
  
  return (
    <HoverEffectWrapper
      id={props.value as string}
      hoveredItem={hoveredItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("b_mono text-secondary-color", className)}
    >
      <AccordionPrimitive.Item
        ref={ref}
        className={cn("data-[state=open]:pb-[0.375rem]")}
        {...props}
      />
    </HoverEffectWrapper>
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { setSelectedYear } = React.useContext(AccordionContext);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "b_mono flex flex-1 items-center justify-between py-0 transition-all duration-500 ease-in-out",
          "[&[data-state=open]>div>svg]:rotate-180",
          className
        )}
        onClick={() => setSelectedYear(children as string)}
        {...props}
      >
        {children}
        <div className="b_mono flex items-center justify-center shrink-0 transition-transform duration-500 ease-in-out">
          <ChevronDown className="w-3 h-3 text-secondary-color" /> 
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    contentId: string;
  }
>(({ className, children, contentId, ...props }, ref) => {
  const { selectedContent, setSelectedContent } = React.useContext(AccordionContext);
  const isSelected = selectedContent === contentId;

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div 
        className={cn(
          "pb-[0.35rem] pt-[0.4rem] px-[0.75rem] rounded-[0.375rem] cursor-pointer transition-all duration-500 ease-in-out",
          isSelected ? "bg-select text-primary-color" : "hover:text-primary-color",
        )}
        onClick={() => setSelectedContent(contentId)}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionContext }
