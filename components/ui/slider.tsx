"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center h-fit",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="bg-neutral-600 relative h-[3px] grow rounded-full group flex items-center">
        <SliderPrimitive.Range className="absolute bg-white special h-full rounded-full" />
        <SliderPrimitive.Thumb className="hidden group-hover:block h-2 w-2 rounded-full border-2 border-white bg-white ring-offset-color transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white" />
      </SliderPrimitive.Track>
    </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
