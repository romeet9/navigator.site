"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"
import ChevronDown from '/public/images/icons/chevron-down.svg'

const AccordionContext = React.createContext<{
  selectedContent: string | null;
  setSelectedContent: (value: string | null) => void;
  openItem: string | undefined;
  setOpenItem: (value: string | undefined) => void;
}>({ 
  selectedContent: null, 
  setSelectedContent: () => {},
  openItem: undefined,
  setOpenItem: () => {}
});

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    defaultSelectedContent?: string;
    defaultOpenItem?: string;
  }
>(({ className, defaultSelectedContent, defaultOpenItem, ...props }, ref) => {
  const [selectedContent, setSelectedContent] = React.useState<string | null>(defaultSelectedContent || null);
  const [openItem, setOpenItem] = React.useState<string | undefined>(defaultOpenItem);

  return (
    <AccordionContext.Provider value={{ selectedContent, setSelectedContent, openItem, setOpenItem }}>
      <AccordionPrimitive.Root
        ref={ref}
        className={cn(className)}
        value={openItem}
        onValueChange={setOpenItem}
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
       className)}
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
        "flex flex-1 items-center justify-between py-[0.375rem] transition-all group",
        "text-secondary-color hover:text-primary-color",
        "data-[state=open]:underline data-[state=open]:text-primary-color hover:data-[state=open]:no-underline",
        "[&[data-state=open]>div>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <span className="transition-all duration-200 data-[state=open]:underline data-[state=open]:text-primary-color">
        {children}
      </span>
      <div className="flex items-center justify-center shrink-0 transition-transform duration-200">
        <ChevronDown className="w-3 h-3 text-secondary-color group-hover:text-primary-color transition-colors duration-200 group-data-[state=open]:text-primary-color" /> 
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    contentId: string;
  }
>(({ className, children, contentId, ...props }, ref) => {
  const { selectedContent, setSelectedContent, setOpenItem } = React.useContext(AccordionContext);
  const isSelected = selectedContent === contentId;

  const handleClick = () => {
    setSelectedContent(isSelected ? null : contentId);
    setOpenItem(props.value as string);
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

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
