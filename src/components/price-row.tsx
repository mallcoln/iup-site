import type { AvulsoItem } from "@/data/services";

type PriceRowProps = {
  item: AvulsoItem;
};

export function PriceRow({ item }: PriceRowProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-line py-7 min-[760px]:flex-row min-[760px]:items-center min-[760px]:justify-between min-[760px]:gap-10">
      <div className="min-[760px]:max-w-[62ch]">
        <h3 className="text-[clamp(20px,2.2vw,26px)]">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-paper-dim">
          {item.description}
        </p>
      </div>
      <div className="shrink-0 min-[760px]:text-right">
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-paper-mute">
          A partir de
        </span>
        <span className="mt-1 block font-display text-[clamp(28px,3.2vw,38px)] font-bold leading-none text-mustard">
          {item.price}
        </span>
      </div>
    </div>
  );
}
