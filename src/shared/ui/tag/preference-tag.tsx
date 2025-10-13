"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";

const tagVariants = cva(
  "inline-flex items-center gap-3 rounded-[100px] px-4 py-2 whitespace-nowrap w-auto select-none transition-colors outline outline-1 outline-offset-[-1px]",
  {
    variants: {
      state: {
        default: "bg-neutral-100 outline-zinc-400 text-zinc-500",
        selected: "bg-green-50 outline-main-green text-main-green",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      state: "default",
      size: "md",
    },
  }
);

export interface PreferenceTagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  text: string;
  selected?: boolean;
  iconSrc?: string;
}

export const PreferenceTag = React.forwardRef<HTMLDivElement, PreferenceTagProps>(
  ({ className, text, selected = false, size, state, iconSrc, ...props }, ref) => {
    const s = selected ? "selected" : (state ?? "default");

    return (
      <div ref={ref} className={cn(tagVariants({ state: s, size }), className)} {...props}>
        {iconSrc && <Image src={iconSrc} alt="" className="h-5 w-5 shrink-0" />}
        <span className="font-normal">{text}</span>
      </div>
    );
  }
);
PreferenceTag.displayName = "PreferenceTag";
