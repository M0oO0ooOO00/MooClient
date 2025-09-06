"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * BGM 태그 컴포넌트
 * - 선택/비선택 상태 지원
 * - 음악 아이콘과 텍스트 포함
 * - 215x45 크기
 */

// BGM 아이콘 컴포넌트
const BgmIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M7.07031 15.7139V5.49958C7.07031 5.06564 7.42209 4.71387 7.85603 4.71387H15.7132C16.1471 4.71387 16.4989 5.06564 16.4989 5.49958V15.7139"
      stroke="currentColor"
      strokeWidth="1.57143"
      strokeLinecap="square"
    />
    <rect x="7.07031" y="7.07129" width="9.42857" height="3.14286" fill="currentColor" />
    <ellipse
      cx="5.44934"
      cy="16.8886"
      rx="2.48293"
      ry="1.96429"
      transform="rotate(-26.0971 5.44934 16.8886)"
      fill="currentColor"
    />
    <ellipse
      cx="14.879"
      cy="16.9989"
      rx="2.48293"
      ry="1.96429"
      transform="rotate(-26.0971 14.879 16.9989)"
      fill="currentColor"
    />
  </svg>
);

const bgmTagVariants = cva(
  "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-300 text-gray-600 hover:border-gray-400",
        selected: "bg-green-100 border-green-400 text-green-600",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-[45px] w-[215px] text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BgmTagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bgmTagVariants> {
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

export const BgmTag = React.forwardRef<HTMLDivElement, BgmTagProps>(
  ({ className, variant, size, text, selected = false, onClick, ...props }, ref) => {
    const currentVariant = selected ? "selected" : variant;

    return (
      <div
        ref={ref}
        className={cn(bgmTagVariants({ variant: currentVariant, size }), className)}
        onClick={onClick}
        {...props}
      >
        <BgmIcon className="w-5 h-5 flex-shrink-0" />
        <span className="b03-r truncate">{text}</span>
      </div>
    );
  }
);

BgmTag.displayName = "BgmTag";
