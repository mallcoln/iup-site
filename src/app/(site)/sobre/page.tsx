import type { Metadata } from "next";
import Image from "next/image";
import { SectionHead } from "@/components/section-head";
import { ServiceCard } from "@/components/service-card";
import { CtaBlock } from "@/components/cta-block";

export const metadata: Metadata = {
  title: "Sobre a IUP",
  description:
    "Uma produtora de conteúdo audiovisual no Rio de Janeiro. Time técnico com equipamento próprio, processo definido e identidade.",
};

const NICHOS = [
  {
    num: "01",
    title: "Saúde clínica",
    description:
      "Médicos especialistas, dentistas, nutricionistas, fisioterapeutas e psicólogos posicionados. A dor central é autoridade no nicho.",
  },
  {
    num: "02",
    title: "Estética & bem-estar",
    description:
      "Clínicas de estética, harmonização, dermatologia estética, spas. Aqui o conteúdo visual é literalmente o produto.",
  },
  {
    num: "03",
    title: "Profissionais liberais",
    description:
      "Personal trainers premium, coaches, consultores, advogados de carteira fechada, mentores, estúdios premium. Vivem de marca pessoal.",
  },
  {
    num: "04",
    title: "Comércio",
    description:
      "Lojas físicas com presença online em moda, decoração, joias, calçados, restaurantes médios. Critério: porte real, faturamento consistente.",
  },
];

const PRINCIPIOS = [
  {
    num: "01",
    title: "Funcional, não decorativo",
    description:
      "Cada peça produzida tem um lugar no calendário e uma função na estratégia. Sem floreio.",
  },
  {
    num: "02",
    title: "Verdade antes de hype",
    description:
      "Posicionamento honesto. A IUP é uma produtora. Não vende o que não pode entregar.",
  },
  {
    num: "03",
    title: "Processo acima de heroísmo",
    description:
      "Calendário, rito semanal, entrega no prazo. O brilho está na consistência, não no improviso.",
  },
  {
    num: "04",
    title: "Parceria de longo prazo",
    description:
      "Recorrência se constrói com transparência. Por isso retainers têm escalada explícita e revisão clara.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero compacto */}
      <section className="container-x section-y">
        <p className="eyebrow mb-7">Sobre a IUP</p>
        <h1 className="max-w-[16ch] text-[clamp(48px,9vw,140px)] leading-[0.9]">
          Um conteúdo
          <br />
          que reflete o
          <br />
          <em className="not-italic text-mustard">nível da entrega.</em>
        </h1>
      </section>

      <div className="container-x">
        <div className="divider" />
      </div>

      {/* O que somos */}
      <section className="container-x section-y">
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 min-[860px]:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">O que somos</p>
            <h2 className="text-[clamp(34px,5vw,64px)]">
              Uma produtora
              <br />
              com identidade.
            </h2>
            <div className="relative mt-8 hidden aspect-[5/4] overflow-hidden border border-line min-[860px]:block">
              <Image
                src="/fotos/evento-2.jpg"
                alt="Cobertura de evento produzida pela IUP"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-paper-dim min-[860px]:text-lg">
            <p>
              A IUP é uma produtora de conteúdo audiovisual no Rio de Janeiro.
              Trabalhamos com profissionais e marcas que precisam que sua
              presença digital reflita o nível do que entregam offline.
            </p>
            <p>
              Não somos uma agência genérica. Somos um time técnico — câmera,
              edição, direção e estratégia editorial — com sala de produção
              montada, equipamento próprio e processo definido para que cada
              diária renda o máximo possível de material.
            </p>
            <p>
              Por dentro da operação existem também braços de tráfego, social
              media e landing pages, mas eles são oferecidos apenas a quem já é
              parceiro recorrente. Na vitrine, só produção.
            </p>
          </div>
        </div>
      </section>

      <div className="container-x">
        <div className="divider" />
      </div>

      {/* Para quem trabalhamos */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Para quem trabalhamos"
          title={
            <>
              Quatro nichos
              <br />
              prioritários.
            </>
          }
          description="Setenta por cento do nosso esforço comercial está em três frentes, porque o conteúdo dessas verticais responde melhor à linguagem audiovisual."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 min-[760px]:grid-cols-2">
          {NICHOS.map((n) => (
            <ServiceCard key={n.num} {...n} />
          ))}
        </div>
      </section>

      <div className="container-x">
        <div className="divider" />
      </div>

      {/* Princípios */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="O que nos move"
          title="Princípios."
          description="Coisas que a gente diz pra si todo dia para não esquecer."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 min-[900px]:grid-cols-4">
          {PRINCIPIOS.map((p) => (
            <ServiceCard key={p.num} {...p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaBlock
        eyebrow="Vamos nos conhecer"
        title={
          <>
            Faz sentido
            <br />
            conversarmos?
          </>
        }
        description="Se o seu negócio se encaixa em um dos nichos acima — e mesmo que não, tem espaço para a gente conversar. Manda mensagem."
        ctaLabel="Conversar com a IUP"
        ctaMessage="Olá! Li sobre a IUP e quero conversar."
      />
    </>
  );
}
