"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/data/faq";

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  // Múltiplas perguntas podem ficar abertas ao mesmo tempo (§5)
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = !!open[i];
        const btnId = `${baseId}-faq-btn-${i}`;
        const panelId = `${baseId}-faq-panel-${i}`;
        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpen((prev) => ({ ...prev, [i]: !prev[i] }))
                }
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-[clamp(18px,2vw,24px)] uppercase leading-tight text-paper">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-paper transition-all duration-300",
                    isOpen && "rotate-45 border-mustard text-mustard"
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              aria-hidden={!isOpen}
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[70ch] pb-7 text-base leading-relaxed text-paper-dim">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
