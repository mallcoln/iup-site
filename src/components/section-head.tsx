import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
};

export function SectionHead({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: SectionHeadProps) {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-6 min-[760px]:grid-cols-2 min-[760px]:items-end">
      <div>
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h2 className="text-[clamp(34px,5vw,64px)]">{title}</h2>
      </div>

      {(description || ctaLabel) && (
        <div className="min-[760px]:pb-2">
          {description && <p className="lead">{description}</p>}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-btn text-mustard transition-colors hover:text-paper"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
