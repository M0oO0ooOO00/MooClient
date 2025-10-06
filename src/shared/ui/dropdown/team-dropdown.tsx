"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { baseBallTeamItems } from "@/entities/team/team";

type Item = { value: string | number; label: string };

type Props = {
  value?: string | number | null;
  onChange?: (next: string | number) => void;
  items?: Item[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  minWidth?: number;
  maxWidth?: number;
};

export default function TeamDropdown({
  value,
  onChange,
  items = baseBallTeamItems as unknown as Item[],
  placeholder = "팀 선택",
  className,
  disabled,
  minWidth = 192,
  maxWidth = 384,
}: Props) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState<string | number | null>(value ?? null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [triggerWidth, setTriggerWidth] = useState<number>(minWidth);

  const selectedLabel = useMemo(() => {
    const v = value ?? internal;
    return v !== null && v !== undefined ? (items.find((i) => i.value === v)?.label ?? "") : "";
  }, [value, internal, items]);

  useEffect(() => {
    const onClickAway = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, []);

  useLayoutEffect(() => {
    if (!btnRef.current) return;
    const measure = () => {
      const el = btnRef.current!;
      const w = Math.max(minWidth, Math.min(el.scrollWidth, maxWidth));
      setTriggerWidth(w);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(btnRef.current);
    return () => ro.disconnect();
  }, [selectedLabel, placeholder, minWidth, maxWidth]);

  const select = (val: string | number) => {
    setInternal(val);
    onChange?.(val);
    setOpen(false);
    btnRef.current?.focus();
  };

  return (
    <div ref={rootRef} className={clsx("relative inline-block", className)}>
      <button
        ref={btnRef}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => !disabled && setOpen((v) => !v)}
        style={{ width: triggerWidth }}
        className={clsx(
          "h-14 px-5 relative inline-flex items-center justify-between",
          "rounded-2xl border border-zinc-200 bg-neutral-50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <span
          className={clsx(
            "text-lg leading-relaxed font-normal font-['Pretendard'] whitespace-nowrap",
            selectedLabel ? "text-black" : "text-neutral-400"
          )}
        >
          {selectedLabel || placeholder}
        </span>
        <span className="relative h-6 w-6 overflow-hidden" aria-hidden>
          <Image
            src="/icons/arrow-bottom.svg"
            alt=""
            width={24}
            height={24}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          ref={listRef}
          style={{ width: triggerWidth }}
          className={clsx(
            "absolute left-0 top-full mt-5 z-50",
            "inline-flex flex-col items-stretch",
            "rounded-2xl bg-white shadow-[var(--shadow-03,_0_4px_32px_0_rgb(0_0_0/_0.05),_4px_0_32px_0_rgb(0_0_0/_0.05))]"
          )}
        >
          <div className="max-h-72 overflow-auto rounded-2xl">
            {items.map((item, i) => {
              const first = i === 0;
              const last = i === items.length - 1;
              const isSelected = (value ?? internal) === item.value;
              return (
                <button
                  key={String(item.value)}
                  role="option"
                  onClick={() => select(item.value)}
                  aria-selected={isSelected}
                  className={clsx(
                    "relative h-14 px-5 text-left w-full",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                  )}
                >
                  <div
                    className={clsx(
                      "pointer-events-none absolute inset-0 border-zinc-200",
                      first && "rounded-t-2xl border border-b-0",
                      last && "rounded-b-2xl border border-t-0",
                      !first && !last && "border-l border-r",
                      isSelected ? "bg-neutral-50" : "bg-white"
                    )}
                  />
                  <div className="relative z-10 inline-flex w-full items-center justify-between">
                    <span className="text-lg leading-relaxed font-normal font-['Pretendard'] text-neutral-400 whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
