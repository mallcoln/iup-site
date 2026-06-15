import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/section-head";
import { ServiceCard } from "@/components/service-card";
import { ClientLogos } from "@/components/client-logos";
import { CtaBlock } from "@/components/cta-block";
import { buttonVariants } from "@/components/ui/button";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { CONTACT } from "@/lib/constants";
import { VideoGallery } from "@/components/video-gallery";
import { videos } from "@/data/videos";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "IUP — Produtora de Conteúdo Audiovisual no Rio de Janeiro" },
  description:
    "Captação, edição e direção para quem trata o próprio negócio com seriedade. Diárias, retainers e cobertura de eventos no Rio de Janeiro.",
};

const SERVICES = [
  {
    num: "01",
    title: "Diárias de produção",
    description:
      "Captação concentrada em meio período ou dia completo, com entrega de vídeos curtos editados e fotos tratadas. Ideal para quem precisa abastecer o feed e o reels com material de qualidade.",
    bullets: [
      "Até 8 a 15 vídeos editados",
      "15 a 30 fotos tratadas",
      "Drone incluso na versão Premium",
    ],
  },
  {
    num: "02",
    title: "Retainers mensais",
    description:
      "Parceria contínua para quem entendeu que conteúdo é construção, não evento isolado. Roteirização, calendário trimestral, reuniões mensais.",
    bullets: [
      "1 a 2 diárias por mês",
      "10 a 30 vídeos editados",
      "Escalada automática nos meses 3 e 6",
    ],
  },
  {
    num: "03",
    title: "Cobertura de eventos",
    description:
      "Aftermovie, reels recap e fotografia para eventos pequenos, médios ou de dia inteiro. Drone quando aplicável, equipe dimensionada por porte.",
    bullets: [
      "Até 4h, 8h ou dia inteiro",
      "Aftermovie + reels + 100 fotos",
      "Drone incluso",
    ],
  },
  {
    num: "04",
    title: "Projetos especiais",
    description:
      "Brand films, vídeos institucionais, manifestos e peças de lançamento. Orçamento sob medida, conforme escopo e ambição.",
    bullets: [
      "Pré-produção e roteirização",
      "Direção de arte e fotografia",
      "Pós-produção dedicada",
    ],
  },
];

const BASTIDORES = [
  { src: "/fotos/locacao-2.jpg", alt: "Locação à beira-mar com olhar de cinema" },
  { src: "/fotos/evento-palco.jpg", alt: "Cobertura de evento — apresentação no palco" },
  { src: "/fotos/evento-estadio.jpg", alt: "Cobertura de evento em estádio" },
  { src: "/fotos/evento-danca.jpg", alt: "Cobertura de evento — performance de dança" },
  { src: "/fotos/retrato-2.jpg", alt: "Retrato editorial produzido pela IUP" },
  { src: "/fotos/locacao-1.jpg", alt: "Locação à beira-mar trabalhada pela IUP" },
  { src: "/fotos/bastidores-2.jpg", alt: "Câmera em mãos durante captação da IUP" },
  { src: "/fotos/retrato-1.jpg", alt: "Retrato editorial produzido pela IUP" },
];

const PROCESSO = [
  {
    num: "01",
    title: "Conversa",
    description:
      "Reunião de onboarding direto com o fundador. Entendemos o nicho, o objetivo e a régua.",
  },
  {
    num: "02",
    title: "Roteiro",
    description:
      "Roteirização e planejamento de captação. Você aprova antes da câmera ligar.",
  },
  {
    num: "03",
    title: "Set",
    description:
      "Diária de gravação no nosso estúdio, no seu espaço ou em locação. Equipe e equipamento próprios.",
  },
  {
    num: "04",
    title: "Entrega",
    description:
      "Edição, finalização e entrega dentro de prazo combinado. Material organizado e pronto pra publicar.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        {/* Vídeo de fundo (drone, mudo, em loop) */}
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/drone-iup.jpg"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src="/videos/drone-hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay escuro para legibilidade do texto */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-ink/70"
        />
        {/* Glow radial mustard */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-mustard/[0.12] blur-[140px]"
        />
        {/* Grid lines sutis */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
          }}
        />

        <div className="container-x relative w-full py-[clamp(80px,12vw,140px)]">
          <p className="eyebrow mb-7">Produtora audiovisual · Rio de Janeiro</p>
          <h1 className="max-w-[18ch] text-[clamp(56px,11vw,180px)] leading-[0.9]">
            O seu conteúdo merece o{" "}
            <em className="not-italic text-mustard">
              nível do que você entrega.
            </em>
          </h1>
          <p className="lead mt-8 max-w-[64ch]">
            Captação, edição e direção para quem trata o próprio negócio com
            seriedade. Filmes, reels, eventos e marca pessoal — produzidos com a
            estrutura de uma produtora, com a leveza de quem entende o seu
            mercado.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={buildWhatsappLink(
                "Olá! Quero conversar sobre um projeto com a IUP."
              )}
              target="_blank"
              rel="noopener"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              Começar um projeto
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/portfolio"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
            >
              Ver portfólio
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-paper-mute">
            <span>2026 · Rio de Janeiro</span>
            <span className="hidden h-1 w-1 rounded-full bg-paper-mute min-[520px]:block" />
            <span>{CONTACT.instagramHandle}</span>
          </div>
        </div>
      </section>

      {/* ===== CLIENTES ===== */}
      <ClientLogos />

      {/* ===== INTRO ===== */}
      <section className="container-x section-y-tight">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-10 min-[860px]:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">A IUP</p>
            <h2 className="text-[clamp(34px,5vw,64px)]">
              Produtora.
              <br />
              Não agência.
            </h2>
            <p className="lead mt-6">
              A gente é uma equipe técnica com equipamento próprio, set montado e
              processo afiado. Você entra pela porta da produção — e descobre, no
              caminho, que também tem estratégia, tráfego e social media nos
              bastidores, vendidos só pra quem já é parceiro.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-line min-[860px]:aspect-[4/5]">
            <Image
              src="/fotos/bastidores-3.jpg"
              alt="Operador da IUP capturando com câmera em set"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent"
            />
          </div>
        </div>
      </section>

      <div className="container-x">
        <div className="divider" />
      </div>

      {/* ===== SERVIÇOS ===== */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="O que entregamos"
          title="Serviços"
          description="Três frentes principais. Tudo o mais entra como upsell pra parceiros recorrentes."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 min-[760px]:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </section>

      <div className="container-x">
        <div className="divider" />
      </div>

      {/* ===== PORTFÓLIO PREVIEW ===== */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Trabalhos"
          title="Portfólio"
          description="Uma amostra das produções da casa — clipes, institucionais e eventos."
          ctaLabel="Ver todos os projetos"
          ctaHref="/portfolio"
        />
        <div className="mt-14">
          <VideoGallery items={videos.slice(0, 3)} />
        </div>
      </section>

      <div className="container-x">
        <div className="divider" />
      </div>

      {/* ===== PROCESSO ===== */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Como funciona"
          title="Processo"
          description="Quatro etapas claras. Sem etapas escondidas, sem retrabalho infinito."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 min-[900px]:grid-cols-4">
          {PROCESSO.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </section>

      <div className="container-x">
        <div className="divider" />
      </div>

      {/* ===== BASTIDORES ===== */}
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Nos bastidores"
          title={
            <>
              A produção
              <br />
              em movimento.
            </>
          }
          description="Equipe própria em set, eventos cobertos de ponta a ponta e locações trabalhadas com olhar de cinema."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 min-[900px]:grid-cols-4">
          {BASTIDORES.map((b) => (
            <div
              key={b.src}
              className="relative aspect-[4/5] overflow-hidden border border-line"
            >
              <Image
                src={b.src}
                alt={b.alt}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="container-x">
        <div className="divider" />
      </div>

      {/* ===== CTA FINAL ===== */}
      <CtaBlock
        eyebrow="Próximo passo"
        title="Vamos conversar?"
        description="Conte um pouco sobre seu projeto. Respondemos em horário comercial, direto pelo WhatsApp — sem formulários intermináveis."
        ctaLabel="Começar um projeto"
        ctaMessage="Olá! Quero conversar sobre um projeto com a IUP."
      />
    </>
  );
}
