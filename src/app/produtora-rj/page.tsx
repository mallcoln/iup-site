import Link from "next/link";
import Image from "next/image";
import { SectionHead } from "@/components/section-head";
import { ServiceCard } from "@/components/service-card";
import { LpBar } from "@/components/lp-bar";
import { LpOffer } from "@/components/lp-offer";
import { Faq } from "@/components/faq";
import { CtaBlock } from "@/components/cta-block";
import { Credibility } from "@/components/credibility";
import { Depoimentos } from "@/components/depoimentos";
import { InstagramVideos } from "@/components/instagram-videos";
import { VideoShowcase } from "@/components/video-showcase";
import { buttonVariants } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { faqLp } from "@/data/faq";
import { videos } from "@/data/videos";

const videoById = (id: string) => videos.find((v) => v.id === id)!;

const DEPO_VIDEOS = [
  "https://www.instagram.com/p/DVbLJPsDgxP/",
  "https://www.instagram.com/p/DSWG4ngiWUt/",
  "https://www.instagram.com/p/DMa_TXvJdPu/",
];

const LP_FOTOS = [
  { src: "/fotos/evento-palco.jpg", alt: "Cobertura de evento — apresentação no palco" },
  { src: "/fotos/evento-estadio.jpg", alt: "Cobertura de evento em estádio" },
  { src: "/fotos/evento-danca.jpg", alt: "Cobertura de evento — performance" },
  { src: "/fotos/locacao-1.jpg", alt: "Locação à beira-mar trabalhada pela IUP" },
];

const TRUST = [
  { value: "7+", label: "Anos no mercado" },
  { value: "100+", label: "Projetos entregues" },
  { value: "10d", label: "Prazo médio" },
  { value: "RJ", label: "Equipe local" },
];

const DIARIAS = [
  {
    name: "Diária IUP",
    description:
      "Solução enxuta para quem precisa começar com qualidade sem ainda assumir compromisso mensal.",
    bullets: [
      "4 horas de captação",
      "Até 8 vídeos curtos editados",
      "15 fotos editadas e tratadas",
      "Entrega em 10 dias úteis",
    ],
    price: "R$ 1.800",
    ctaMessage: "Olá! Tenho interesse na Diária IUP.",
  },
  {
    name: "Diária Premium",
    description:
      "Mais tempo em set, mais material, mais possibilidades. Inclui drone e segunda câmera.",
    bullets: [
      "8 horas de captação",
      "2 câmeras + voo de drone",
      "Até 15 vídeos editados",
      "30 fotos editadas e tratadas",
      "Entrega em 15 dias úteis",
    ],
    price: "R$ 3.200",
    ctaMessage: "Olá! Tenho interesse na Diária Premium.",
  },
];

const EVENTOS = [
  {
    name: "Pequeno",
    description:
      "Eventos de até 4 horas — workshops, launches íntimos, comemorações empresariais.",
    bullets: [
      "Até 4 horas de cobertura",
      "Aftermovie de até 3 minutos",
      "Reels recap",
      "100 fotos editadas",
    ],
    price: "R$ 2.000",
    ctaMessage: "Olá! Tenho um evento pequeno e quero cobertura.",
  },
  {
    name: "Médio",
    description:
      "Eventos de até 8 horas — congressos, conferências, talks com público.",
    bullets: [
      "Até 8 horas de cobertura",
      "Aftermovie + reels recap",
      "100 fotos editadas",
      "Drone incluso (quando aplicável)",
    ],
    price: "R$ 3.500",
    ctaMessage: "Olá! Tenho um evento médio e quero cobertura.",
  },
  {
    name: "Grande",
    description:
      "Dia inteiro ou múltiplas frentes simultâneas — festivais, shows, conferências de grande porte.",
    bullets: [
      "Dia inteiro ou múltiplas frentes",
      "Equipe ampliada em set",
      "Aftermovie + reels + 100 fotos",
      "Drone incluso",
    ],
    price: "R$ 6.000",
    ctaMessage: "Olá! Tenho um evento grande e quero cobertura.",
  },
];

const DIFERENCIAL = [
  {
    num: "01",
    title: "Estrutura completa",
    description:
      "Câmeras profissionais, drone, áudio, iluminação e sala de produção próprios. Nada terceirizado no básico.",
  },
  {
    num: "02",
    title: "Equipe técnica",
    description:
      "Editor sênior, social media e logger. Não é uma pessoa só com um celular.",
  },
  {
    num: "03",
    title: "Prazo cumprido",
    description:
      "Entrega em 10 a 22 dias conforme o pacote. Sem 'deixa pra próxima semana' infinito.",
  },
  {
    num: "04",
    title: "Estratégia inclusa",
    description:
      "Você não recebe só o material bruto. Recebe pensado para o que funciona no seu nicho.",
  },
];

function Divider() {
  return (
    <div className="container-x">
      <div className="divider" />
    </div>
  );
}

export default function ProdutoraRjPage() {
  const year = 2026;

  return (
    <>
      <LpBar />

      {/* Hero centralizado */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-mustard/[0.12] blur-[140px]"
        />
        <div className="container-x relative py-[clamp(64px,11vw,128px)] text-center">
          <p className="eyebrow mb-7">Produtora audiovisual · Rio de Janeiro</p>
          <h1 className="mx-auto max-w-[15ch] text-[clamp(48px,8vw,96px)] leading-[0.92]">
            Vídeos que{" "}
            <em className="not-italic text-mustard">vendem por você.</em>
          </h1>
          <p className="mx-auto mt-8 max-w-[60ch] text-[clamp(17px,1.6vw,21px)] leading-relaxed text-paper-dim">
            Diárias de produção e cobertura de eventos com a estrutura de uma
            produtora completa — câmeras, drone, equipe técnica e edição
            inclusa.{" "}
            <strong className="text-paper">Atendemos todo o Rio de Janeiro.</strong>
          </p>
          <a
            href={buildWhatsappLink(
              "Olá! Vim pela campanha do Google e quero um orçamento."
            )}
            target="_blank"
            rel="noopener"
            className={cn(
              buttonVariants({ variant: "whatsapp", size: "lg" }),
              "mt-10"
            )}
          >
            <WhatsappIcon className="h-5 w-5" />
            Quero um orçamento
          </a>

          {/* Trust signals */}
          <div className="mx-auto mt-12 flex max-w-[680px] flex-wrap items-center justify-center gap-x-10 gap-y-6 border-t border-line pt-8">
            {TRUST.map((t) => (
              <div key={t.label} className="text-center">
                <div className="font-display text-[clamp(32px,4vw,48px)] font-bold leading-none text-mustard">
                  {t.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-paper-mute">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faixa de fotos do trabalho */}
      <section className="container-x pb-[clamp(24px,4vw,56px)]">
        <div className="grid grid-cols-2 gap-3 min-[900px]:grid-cols-4">
          {LP_FOTOS.map((f) => (
            <div
              key={f.src}
              className="relative aspect-[4/5] overflow-hidden border border-line"
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Diárias */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Diárias de produção"
          title={
            <>
              Conteúdo
              <br />
              de uma vez só.
            </>
          }
          description="Em meio período ou dia completo, captamos vídeos e fotos suficientes para abastecer seu feed por semanas. Entrega editada em até 15 dias úteis."
        />
        <div className="mt-14 space-y-5">
          {DIARIAS.map((o) => (
            <LpOffer key={o.name} {...o} />
          ))}
        </div>
      </section>

      <Divider />

      {/* Eventos */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Cobertura de eventos"
          title={
            <>
              Eternizamos
              <br />
              o seu evento.
            </>
          }
          description="Aftermovie cinematográfico, reels recap e fotografia editorial. Drone incluído quando aplicável. Equipe dimensionada por porte do evento."
        />
        <div className="mt-14 space-y-5">
          {EVENTOS.map((o) => (
            <LpOffer key={o.name} {...o} />
          ))}
        </div>
      </section>

      <Divider />

      {/* Por que a IUP */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Por que a IUP"
          title="O diferencial."
          description="Quatro pontos que separam a IUP de uma equipe freelance qualquer."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 min-[900px]:grid-cols-4">
          {DIFERENCIAL.map((d) => (
            <ServiceCard key={d.num} {...d} />
          ))}
        </div>
      </section>

      <Divider />

      {/* Nosso trabalho (vídeos) */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Nosso trabalho"
          title={
            <>
              Veja a IUP
              <br />
              em movimento.
            </>
          }
          description="Clipes, institucionais, eventos e captação aérea — produções reais. Clique para assistir."
        />
        <div className="mt-14">
          <VideoShowcase
            left={[
              videoById("jp-marcal"),
              videoById("sergio-bolao"),
              videoById("enel"),
            ]}
            feature={videoById("rock-festival")}
            secondary={videoById("drone")}
          />
        </div>
      </section>

      <Divider />

      {/* Credibilidade */}
      <Credibility />

      <Divider />

      {/* Depoimentos em vídeo */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Depoimentos em vídeo"
          title={
            <>
              Ouça de quem
              <br />
              já viveu.
            </>
          }
          description="Clientes contando, na frente da câmera, como foi trabalhar com a IUP."
        />
        <div className="mt-14">
          <InstagramVideos urls={DEPO_VIDEOS} />
        </div>
      </section>

      <Divider />

      {/* Depoimentos */}
      <Depoimentos />

      <Divider />

      {/* FAQ */}
      <section className="container-x section-y">
        <SectionHead eyebrow="Dúvidas" title="Perguntas frequentes." />
        <div className="mt-12">
          <Faq items={faqLp} />
        </div>
      </section>

      {/* CTA */}
      <CtaBlock
        eyebrow="Fale agora"
        title={
          <>
            Manda mensagem.
            <br />
            Respondemos rápido.
          </>
        }
        description="Em horário comercial, retorno em até 30 minutos. Fora do horário, no próximo dia útil pela manhã."
        ctaLabel="Falar no WhatsApp"
        ctaMessage="Olá! Vim pela campanha do Google e quero conversar com a IUP."
      />

      {/* Footer minimalista */}
      <footer className="border-t border-line">
        <div className="container-x py-8 text-center">
          <p className="text-xs text-paper-mute">
            © {year} IUP Marketing LTDA · Rio de Janeiro · RJ ·{" "}
            <Link href="/" className="transition-colors hover:text-mustard">
              agenciaiup.com.br
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
