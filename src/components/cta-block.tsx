import type { ReactNode } from "react";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { buttonVariants } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";

type CtaBlockProps = {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  ctaLabel: string;
  ctaMessage: string;
};

export function CtaBlock({
  eyebrow = "Próximo passo",
  title,
  description,
  ctaLabel,
  ctaMessage,
}: CtaBlockProps) {
  return (
    <div className="container-x section-y-tight">
      <div className="relative overflow-hidden border border-line bg-ink-2 px-[clamp(28px,5vw,80px)] py-[clamp(60px,9vw,120px)] text-center">
        {/* Glow radial mustard sutil */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mustard/[0.10] blur-[120px]"
        />
        <div className="relative mx-auto max-w-[760px]">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h2 className="text-[clamp(36px,6vw,72px)]">{title}</h2>
          <p className="lead mx-auto mt-6 text-balance">{description}</p>
          <a
            href={buildWhatsappLink(ctaMessage)}
            target="_blank"
            rel="noopener"
            className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "mt-10")}
          >
            <WhatsappIcon className="h-5 w-5" />
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
