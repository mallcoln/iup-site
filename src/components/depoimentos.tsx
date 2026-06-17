import { Heart } from "lucide-react";
import { SectionHead } from "@/components/section-head";
import { depoimentos } from "@/data/depoimentos";
import { CONTACT } from "@/lib/constants";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Depoimentos() {
  return (
    <section className="container-x section-y">
      <SectionHead
        eyebrow="Depoimentos"
        title={
          <>
            Quem trabalha com a
            <br />
            gente, recomenda.
          </>
        }
        description="Comentários reais de clientes no nosso Instagram — sem roteiro, sem filtro."
        ctaLabel="Ver no Instagram"
        ctaHref={CONTACT.instagram}
      />

      <ul className="mt-14 columns-1 gap-5 min-[700px]:columns-2 [&>li]:mb-5">
        {depoimentos.map((d) => (
          <li
            key={d.handle}
            className="break-inside-avoid rounded-lg border border-line bg-ink-2 p-7 transition-colors duration-300 hover:border-mustard/40 min-[700px]:p-9"
          >
            <span
              aria-hidden
              className="block font-display text-5xl leading-[0.6] text-mustard"
            >
              &ldquo;
            </span>

            <p className="mt-3 text-[clamp(17px,1.5vw,21px)] font-medium leading-relaxed text-paper">
              {d.text}
            </p>

            <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-3 font-display text-base font-bold uppercase text-mustard ring-1 ring-mustard/30">
                {d.handle.charAt(0)}
              </span>
              <span className="flex items-center gap-1.5 font-sans text-sm font-semibold text-paper-dim">
                @{d.handle}
                <InstagramGlyph className="h-3.5 w-3.5 text-paper-mute" />
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-paper-mute">
                <Heart className="h-4 w-4 fill-[#ed4956] text-[#ed4956]" />
                <span className="text-xs">{d.likes}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
