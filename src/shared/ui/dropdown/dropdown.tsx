"use client";

import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectSeparator,
} from "@/components/ui/select";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/** 트리거(닫힌 입력창) 스타일: 이미지의 둥근 박스/테두리/포커스/에러/비활성 반영 */
const triggerVariants = cva(
    "w-full rounded-2xl bg-background text-foreground border transition-shadow " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
    "data-[state=open]:ring-2 data-[state=open]:ring-ring " +
    "placeholder:text-muted-foreground",
    {
        variants: {
            tone: {
                default: "border-border shadow-01",
                error:
                    "border-[var(--destructive)] focus-visible:ring-[var(--destructive)]",
            },
            fieldSize: {
                md: "h-[4.375rem] px-5 b02-r",
                sm: "h-10 px-4 b03-r",
            },
            state: {
                enabled: "",
                disabled:
                    "bg-muted text-muted-foreground border-gray-200 shadow-none cursor-not-allowed",
            },
        },
        defaultVariants: {
            tone: "default",
            fieldSize: "md",
            state: "enabled",
        },
    }
);

export interface DropdownProps
    extends Omit<React.ComponentProps<typeof Select>, "children">,
        VariantProps<typeof triggerVariants> {
    placeholder?: string;
    label?: string;
    items: Array<{
        label?: string;
        options: Array<{ value: string; text: string; disabled?: boolean }>;
    }>;
    errorMessage?: string;
    helperText?: string;
    className?: string;
}

export function Dropdown({
                             placeholder = "dropdown",
                             label,
                             items,
                             tone,
                             fieldSize,
                             state,
                             errorMessage,
                             helperText,
                             className,
                             ...selectProps
                         }: DropdownProps) {
    const id = React.useId();
    const describedBy = errorMessage
        ? `${id}-error`
        : helperText
            ? `${id}-help`
            : undefined;

    return (
        <div className="space-y-2">
            {label ? <div className="b03-m text-foreground">{label}</div> : null}

            <Select {...selectProps} disabled={state === "disabled" || selectProps.disabled}>
                <SelectTrigger
                    id={id}
                    aria-invalid={!!errorMessage}
                    aria-describedby={describedBy}
                    className={cn(triggerVariants({ tone, fieldSize, state }), className)}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent
                    className={cn(
                        "rounded-xl border border-border bg-popover text-popover-foreground shadow-03",
                        "p-1"
                    )}
                    position="popper"
                >
                    {items.map((group, gi) => (
                        <SelectGroup key={gi}>
                            {group.label ? (
                                <SelectLabel className="b03-r text-muted-foreground px-2 py-1">
                                    {group.label}
                                </SelectLabel>
                            ) : null}

                            {group.options.map((opt) => (
                                <SelectItem
                                    key={opt.value}
                                    value={opt.value}
                                    disabled={opt.disabled}
                                    className={cn(
                                        "rounded-lg b03-r",
                                        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
                                        "data-[disabled]:opacity-40 data-[disabled]:pointer-events-none"
                                    )}
                                >
                                    {opt.text}
                                </SelectItem>
                            ))}

                            {gi < items.length - 1 ? <SelectSeparator /> : null}
                        </SelectGroup>
                    ))}
                </SelectContent>
            </Select>

            {errorMessage ? (
                <p id={`${id}-error`} className="c01-m text-[var(--destructive)]">
                    {errorMessage}
                </p>
            ) : helperText ? (
                <p id={`${id}-help`} className="c01-r text-muted-foreground">
                    {helperText}
                </p>
            ) : null}
        </div>
    );
}
