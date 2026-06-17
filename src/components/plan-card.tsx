import { Check } from "lucide-react";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PlanItem } from "@/data/services";

type PlanCardProps = {
  plan: PlanItem;
};

export function PlanCard({ plan }: PlanCardProps) {
  const { name, price, priceLabel, features, featured, ctaMessage } = plan;

  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden border bg-ink-2 p-[clamp(28px,3.5vw,44px)]",
        featured ? "border-mustard" : "border-line"
      )}
    >
      {featured && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-mustard/[0.12] to-transparent"
          />
          <span className="relative mb-5 inline-flex w-fit items-center rounded-full border border-mustard/40 bg-mustard/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-btn text-mustard">
            Mais escolhido
          </span>
        </>
      )}

      <h3 className="relative text-[clamp(24px,2.6vw,32px)]">{name}</h3>

      <span className="relative mt-4 block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-paper-mute">
        A partir de
      </span>
      <div className="relative mt-1 flex items-baseline gap-1.5">
        <span
          className={cn(
            "font-display text-[clamp(40px,5vw,56px)] font-bold leading-none",
            featured ? "text-mustard" : "text-paper"
          )}
        >
          {price}
        </span>
        <span className="font-sans text-sm text-paper-mute">{priceLabel}</span>
      </div>

      <ul className="relative mt-8 flex-1 space-y-3 border-t border-line pt-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-paper-dim">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-mustard" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={buildWhatsappLink(ctaMessage)}
        target="_blank"
        rel="noopener"
        className={cn(
          buttonVariants({ variant: featured ? "primary" : "ghost" }),
          "relative mt-8 w-full"
        )}
      >
        Tenho interesse
      </a>
    </div>
  );
}
