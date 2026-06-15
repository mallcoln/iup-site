import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { CtaBlock } from "@/components/cta-block";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Trabalhos da IUP organizados por segmento: saúde, estética, profissionais liberais, comércio, eventos e casamentos.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-x section-y">
        <p className="eyebrow mb-7">Portfólio</p>
        <h1 className="text-[clamp(48px,9vw,140px)] leading-[0.9]">
          O acervo
          <br />
          <em className="not-italic text-mustard">da casa.</em>
        </h1>
        <p className="lead mt-8">
          Trabalhos organizados por segmento. Use os filtros para encontrar
          referências mais próximas do seu mercado.
        </p>
      </section>

      <div className="container-x">
        <div className="divider" />
      </div>

      {/* Grid filtrável */}
      <section className="container-x section-y">
        <PortfolioGrid items={portfolio} />
        <p className="mt-10 max-w-[70ch] text-xs leading-relaxed text-paper-mute">
          Acervo em organização. Os blocos acima são placeholders — em breve,
          cases reais por segmento.
        </p>
      </section>

      {/* CTA */}
      <CtaBlock
        eyebrow="Cases sob medida"
        title={
          <>
            Posso enviar
            <br />
            cases por DM.
          </>
        }
        description="Se você quer ver referências específicas do seu segmento — saúde, estética, profissionais liberais ou comércio — me chama no WhatsApp."
        ctaLabel="Ver mais cases"
        ctaMessage="Olá! Vi o portfólio e queria ver mais cases."
      />
    </>
  );
}
