import { Check } from "lucide-react";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { buttonVariants } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";

type LpOfferProps = {
  name: string;
  description: string;
  bullets: string[];
  price: string;
  ctaMessage: string;
};

export function LpOffer({
  name,
  description,
  bullets,
  price,
  ctaMessage,
}: LpOfferProps) {
  return (
    <div className="grid grid-cols-1 gap-8 border border-line bg-ink-2 p-[clamp(24px,3.5vw,44px)] min-[860px]:grid-cols-[1.4fr_1fr] min-[860px]:items-center">
      {/* Descrição (esquerda) */}
      <div>
        <h3 className="text-[clamp(24px,3vw,34px)]">{name}</h3>
        <p className="mt-3 text-base leading-relaxed text-paper-dim">
          {description}
        </p>
        <ul className="mt-6 grid gap-2.5 min-[520px]:grid-cols-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-sm text-paper-dim"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-mustard" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Preço + CTA (direita) */}
      <div className="flex flex-col items-start gap-5 border-t border-line pt-7 min-[860px]:items-end min-[860px]:border-l min-[860px]:border-t-0 min-[860px]:pl-8 min-[860px]:pt-0 min-[860px]:text-right">
        <div>
          <span className="block font-display text-[clamp(40px,5vw,56px)] font-bold leading-none text-mustard">
            {price}
          </span>
        </div>
        <a
          href={buildWhatsappLink(ctaMessage)}
          target="_blank"
          rel="noopener"
          className={cn(buttonVariants({ variant: "whatsapp" }), "w-full min-[860px]:w-auto")}
        >
          <WhatsappIcon className="h-4 w-4" />
          Agendar agora
        </a>
      </div>
    </div>
  );
}
