import type { Metadata } from "next";
import { VideoGallery } from "@/components/video-gallery";
import { CtaBlock } from "@/components/cta-block";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Produções audiovisuais da IUP: clipes, institucionais, cobertura de eventos e captação aérea no Rio de Janeiro.",
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
          Uma seleção de produções reais — clipes, institucionais, cobertura de
          eventos e captação aérea. Clique para assistir.
        </p>
      </section>

      <div className="container-x">
        <div className="divider" />
      </div>

      {/* Galeria de vídeos */}
      <section className="container-x section-y">
        <VideoGallery items={videos} />
      </section>

      {/* CTA */}
      <CtaBlock
        eyebrow="Cases sob medida"
        title={
          <>
            Posso enviar
            <br />
            mais cases por DM.
          </>
        }
        description="Se você quer ver referências específicas do seu segmento — saúde, estética, profissionais liberais ou comércio — me chama no WhatsApp."
        ctaLabel="Ver mais cases"
        ctaMessage="Olá! Vi o portfólio e queria ver mais cases."
      />
    </>
  );
}
