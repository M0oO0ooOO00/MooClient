"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Team, baseBallTeamItems } from "@/entities/team/team";

type Item = { value: Team; label: string };
const ITEM_HEIGHT = 56;

type Props = {
  value?: Team | null;
  onChange?: (next: Team) => void;
  items?: Item[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

export default function TeamDropdown({
  value,
  onChange,
  items = baseBallTeamItems,
  placeholder = "팀 선택",
  className,
  disabled,
}: Props) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState<Team | null>(value ?? null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const selectedLabel = useMemo(() => {
    const v = value ?? internal;
    return v ? (items.find((i) => i.value === v)?.label ?? "") : "";
  }, [value, internal, items]);

  useEffect(() => {
    const onClickAway = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, []);

  const select = (t: Team) => {
    setInternal(t);
    onChange?.(t);
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
        className={clsx(
          "w-48 h-14 px-5 py-4 relative inline-flex flex-col justify-start items-start gap-2.5",
          "rounded-2xl border border-zinc-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <div className="absolute left-0 top-0 w-48 h-14 bg-neutral-50 rounded-2xl border border-zinc-200" />

        <div className="w-full inline-flex justify-between items-center">
          <div
            className={clsx(
              "text-neutral-400 text-lg font-normal font-['Pretendard'] leading-relaxed",
              selectedLabel && "text-black"
            )}
          >
            {selectedLabel || placeholder}
          </div>

          <div
            className={clsx(
              "w-6 h-6 relative overflow-hidden transition-transform",
              open && "rotate-180"
            )}
          >
            <Image
              src="/arrow-bottom.svg"
              alt="화살표 아이콘"
              width={24}
              height={24}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
        </div>
      </button>
      {open && (
        <div
          role="listbox"
          ref={listRef}
          style={{ height: Math.max(ITEM_HEIGHT * items.length, ITEM_HEIGHT) }}
          className={clsx(
            "absolute left-0 top-full mt-5 z-50 w-48",
            "inline-flex flex-col justify-start items-start",
            "rounded-2xl shadow-[var(--shadow-03,_0_4px_32px_0_rgb(0_0_0/_0.05),_4px_0_32px_0_rgb(0_0_0/_0.05))]"
          )}
        >
          {items.map((item, i) => {
            const first = i === 0;
            const last = i === items.length - 1;
            const isSelected = (value ?? internal) === item.value;

            return (
              <button
                key={item.value}
                role="option"
                onClick={() => select(item.value)}
                aria-selected={isSelected}
                className={clsx(
                  "relative w-48 h-14 px-5 py-4 text-left",
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
                <div className="relative z-10 w-48 inline-flex justify-between items-center">
                  <div className="text-lg leading-relaxed font-normal font-['Pretendard'] text-neutral-400">
                    {item.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
