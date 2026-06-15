import type { Metadata } from "next";
import { SectionHead } from "@/components/section-head";
import { PriceRow } from "@/components/price-row";
import { PlanCard } from "@/components/plan-card";
import { Faq } from "@/components/faq";
import { CtaBlock } from "@/components/cta-block";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { diarias, planos, eventos, addons } from "@/data/services";
import { faqServicos } from "@/data/faq";

export const metadata: Metadata = {
  title: "Serviços e investimento",
  description:
    "Diárias avulsas, retainers mensais e projetos especiais. Cobertura de eventos e add-ons. Investimento transparente.",
};

function Divider() {
  return (
    <div className="container-x">
      <div className="divider" />
    </div>
  );
}

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-x section-y">
        <p className="eyebrow mb-7">Serviços e investimento</p>
        <h1 className="text-[clamp(48px,9vw,140px)] leading-[0.9]">
          O catálogo
          <br />
          <em className="not-italic text-mustard">da casa.</em>
        </h1>
        <p className="lead mt-8">
          Três níveis: produções avulsas, retainers mensais e projetos
          especiais. Tudo combinável conforme o momento do seu negócio.
        </p>
      </section>

      <Divider />

      {/* Nível 01 — Diárias avulsas */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Nível 01"
          title="Diárias avulsas"
          description="Para quem precisa abastecer o conteúdo sem ainda assumir compromisso mensal. Captação em meio período ou dia completo, com entrega em até 10 a 15 dias úteis."
        />
        <div className="mt-12 border-t border-line">
          {diarias.map((item) => (
            <PriceRow key={item.name} item={item} />
          ))}
        </div>
      </section>

      <Divider />

      {/* Nível 02 — Retainers mensais */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Nível 02"
          title={
            <>
              Retainers
              <br />
              mensais.
            </>
          }
          description="Parceria contínua com escalada automática. Contrato mínimo de 6 meses, com revisão nos meses 3 e 6 — quando o valor sobe para o patamar de continuidade."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3">
          {planos.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="mt-8 max-w-[70ch] text-xs leading-relaxed text-paper-mute">
          * Contratos mínimos de 6 meses. Revisão automática nos meses 3 e 6
          conforme entregas e satisfação. A partir do 6º mês, possibilidade de
          migração para componente variável (percentual sobre vendas
          atribuíveis).
        </p>
      </section>

      <Divider />

      {/* Eventos */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Eventos"
          title={
            <>
              Cobertura
              <br />
              completa.
            </>
          }
          description="Aftermovie, reels recap e fotografia editorial. Drone incluído quando aplicável. Equipe dimensionada por porte."
        />
        <div className="mt-12 border-t border-line">
          {eventos.map((item) => (
            <PriceRow key={item.name} item={item} />
          ))}
        </div>
        <p className="mt-8 max-w-[70ch] text-xs leading-relaxed text-paper-mute">
          Entrega padrão: 1 aftermovie de até 3 minutos · 1 reels recap · 100
          fotos editadas. Drone incluído quando aplicável.
        </p>
      </section>

      <Divider />

      {/* Nível 03 — Projetos especiais */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Nível 03"
          title={
            <>
              Projetos
              <br />
              especiais.
            </>
          }
          description="Brand films, vídeos institucionais, manifestos e peças de lançamento. Orçamento sob medida, conforme escopo e ambição."
        />
        <div className="mt-12 border border-line bg-ink-2 p-[clamp(28px,4vw,48px)]">
          <p className="text-[clamp(18px,2vw,24px)] leading-relaxed text-paper">
            Investimentos a partir de{" "}
            <strong className="text-mustard">R$ 7.500</strong> · projetos médios
            entre <strong className="text-mustard">R$ 12.000</strong> e{" "}
            <strong className="text-mustard">R$ 20.000</strong> · grandes a
            partir de <strong className="text-mustard">R$ 25.000</strong>.
          </p>
          <a
            href={buildWhatsappLink(
              "Olá! Quero conversar sobre um projeto especial."
            )}
            target="_blank"
            rel="noopener"
            className={cn(buttonVariants({ variant: "primary" }), "mt-8")}
          >
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Divider />

      {/* Add-ons */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Extras"
          title="Add-ons."
          description="Complementos que podem entrar em qualquer pacote, conforme a necessidade."
        />
        <div className="mt-12 border-t border-line">
          {addons.map((item) => (
            <PriceRow key={item.name} item={item} />
          ))}
        </div>
      </section>

      <Divider />

      {/* FAQ */}
      <section className="container-x section-y">
        <SectionHead eyebrow="Dúvidas" title="Perguntas frequentes." />
        <div className="mt-12">
          <Faq items={faqServicos} />
        </div>
      </section>

      {/* CTA */}
      <CtaBlock
        eyebrow="Próximo passo"
        title={
          <>
            Conta mais sobre
            <br />
            o que você precisa.
          </>
        }
        description="Manda mensagem com o porte do seu negócio e o que você imagina como entrega. Em 24 horas você tem uma proposta na mão."
        ctaLabel="Quero uma proposta"
        ctaMessage="Olá! Quero uma proposta da IUP."
      />
    </>
  );
}
