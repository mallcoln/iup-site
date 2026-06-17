import Image from "next/image";
import { SectionHead } from "@/components/section-head";
import { acervo } from "@/data/acervo";

export function Acervo() {
  return (
    <section className="container-x section-y">
      <SectionHead
        eyebrow="Já passaram pela nossa lente"
        title={
          <>
            Gente que confia
            <br />
            no nosso olhar.
          </>
        }
        description="De figuras conhecidas a grandes produções, moda e marca pessoal — um recorte de quem já esteve na frente das nossas câmeras."
      />

      <ul className="mt-14 grid grid-cols-2 gap-3 min-[700px]:grid-cols-3 min-[1000px]:grid-cols-4">
        {acervo.map((a) => (
          <li
            key={a.src}
            className="group relative aspect-square overflow-hidden border border-line"
          >
            <Image
              src={a.src}
              alt={a.nome ? a.nome : a.tag}
              fill
              sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
            />
            <span className="absolute bottom-0 left-0 w-full p-4">
              <span className="block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-mustard">
                {a.tag}
              </span>
              {a.nome ? (
                <span className="mt-1 block font-display text-lg uppercase leading-none text-paper">
                  {a.nome}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
