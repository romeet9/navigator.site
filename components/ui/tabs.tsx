"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-[0.375rem] bg-fill p-[0.3125rem] shadow-inset-tertiary",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-[0.25rem] px-[0.875rem] pt-[0.34rem] pb-[0.285rem] transition-all b_mono text-secondary-color hover:text-primary-color focus-visible:outline-none data-[state=active]:bg-select data-[state=active]:text-primary-color",
      "data-[state=active]:shadow-[0px_9px_3px_0px_rgba(153,153,153,0%),0px_6px_2px_0px_rgba(153,153,153,1%),0px_3px_2px_0px_rgba(153,153,153,3%),0px_2px_2px_0px_rgba(153,153,153,5%),0px_0px_1px_0px_rgba(153,153,153,5%)]",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export { Tabs, TabsList, TabsTrigger }
