"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"
import ChevronDown from '/public/images/icons/chevron-down.svg'

interface AccordionContextProps {
  selectedContent: string | null;
  setSelectedContent: (value: string | null) => void;
}

const AccordionContext = React.createContext<AccordionContextProps>({
  selectedContent: null, 
  setSelectedContent: () => {},
});

type AccordionSingleProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  type: 'single';
  defaultSelectedContent?: string;
  collapsible?: boolean;
};

type AccordionMultipleProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  type: 'multiple';
  defaultSelectedContent?: string;
};

type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, defaultSelectedContent, ...props }, ref) => {
  const [selectedContent, setSelectedContent] = React.useState<string | null>(defaultSelectedContent || null);

  return (
    <AccordionContext.Provider value={{ selectedContent, setSelectedContent }}>
      <AccordionPrimitive.Root
        ref={ref}
        className={cn(className)}
        {...props}
      />
    </AccordionContext.Provider>
  );
});
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "b_mono text-secondary-color",
      "data-[state=open]:pb-[0.375rem]",
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-[0.375rem] transition-all",
        "text-primary-color hover:text-primary-color hover:underline",
        "data-[state=open]:underline hover:data-[state=open]:no-underline",
        "[&[data-state=open]>div>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <span className="transition-all duration-200 data-[state=open]:underline data-[state=open]:text-primary-color">
        {children}
      </span>
      <div className="flex items-center justify-center shrink-0 transition-transform duration-200">
        <ChevronDown className="w-3 h-3 text-primary-color transition-colors duration-200" /> 
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    contentId: string;
  }
>(({ className, children, contentId, ...props }, ref) => {
  const { selectedContent, setSelectedContent } = React.useContext(AccordionContext);
  const isSelected = selectedContent === contentId;

  const handleClick = () => {
    setSelectedContent(contentId);
  };

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "rounded-[0.25rem] overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div 
        className={cn(
          "pb-[0.375rem] pt-[0.375rem] px-[0.75rem] cursor-pointer",
          "transition-all duration-200",
          isSelected ? "bg-select text-primary-color" : "hover:text-primary-color"
        )}
        onClick={handleClick}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
})

AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
