"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { ICPS, type IcpSlug, type PortfolioItem } from "@/data/portfolio";

type PortfolioGridProps = {
  items: PortfolioItem[];
};

type Filter = IcpSlug | "todos";

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const [filter, setFilter] = useState<Filter>("todos");

  const filtered = useMemo(
    () => (filter === "todos" ? items : items.filter((i) => i.icp === filter)),
    [items, filter]
  );

  const labelFor = (slug: IcpSlug) =>
    ICPS.find((icp) => icp.slug === slug)?.label ?? slug;

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap gap-2.5">
        <FilterPill
          active={filter === "todos"}
          onClick={() => setFilter("todos")}
        >
          Todos
        </FilterPill>
        {ICPS.map((icp) => (
          <FilterPill
            key={icp.slug}
            active={filter === icp.slug}
            onClick={() => setFilter(icp.slug)}
          >
            {icp.label}
          </FilterPill>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 min-[900px]:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="group relative aspect-[4/5] overflow-hidden border border-line bg-gradient-to-br from-ink-3 to-ink-2"
          >
            {/* Placeholder (sem imagens reais ainda) */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <span className="text-center text-xs uppercase tracking-[0.2em] text-paper-mute">
                {item.title}
              </span>
            </div>

            {/* Overlay no hover */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="eyebrow mb-2">{labelFor(item.icp)}</span>
              <span className="font-display text-lg uppercase leading-tight text-paper">
                {item.title}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 font-sans text-xs font-semibold uppercase tracking-btn transition-colors",
        active
          ? "border-mustard bg-mustard text-ink"
          : "border-line-strong text-paper-dim hover:border-mustard hover:text-mustard"
      )}
    >
      {children}
    </button>
  );
}
