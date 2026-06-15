import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a IUP pelo WhatsApp, e-mail ou Instagram. Produtora de conteúdo audiovisual no Rio de Janeiro.",
};

const CANAIS = [
  {
    label: "WhatsApp · resposta em horário comercial",
    value: CONTACT.whatsappDisplay,
    href: buildWhatsappLink(
      "Olá! Vim pelo site da IUP e gostaria de conversar."
    ),
    external: true,
  },
  {
    label: "E-mail",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    external: false,
  },
  {
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
    external: true,
  },
  {
    label: "Localização",
    value: CONTACT.city,
    href: null,
    external: false,
  },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-x section-y">
        <p className="eyebrow mb-7">Contato</p>
        <h1 className="text-[clamp(48px,9vw,140px)] leading-[0.9]">
          Vamos
          <br />
          <em className="not-italic text-mustard">conversar?</em>
        </h1>
        <p className="lead mt-8">
          A forma mais rápida de falar com a gente é o WhatsApp. Mas se preferir,
          também respondemos por e-mail e DM no Instagram.
        </p>
      </section>

      <div className="container-x">
        <div className="divider" />
      </div>

      {/* Canais + atalho */}
      <section className="container-x section-y">
        <div className="grid grid-cols-1 gap-12 min-[860px]:grid-cols-2">
          {/* Esquerda — canais */}
          <div>
            <h2 className="text-[clamp(30px,4vw,48px)]">Canais oficiais.</h2>
            <div className="mt-10 space-y-8">
              {CANAIS.map((c) => (
                <div key={c.label}>
                  <p className="eyebrow mb-2">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener" : undefined}
                      className="font-display text-[clamp(24px,3.2vw,38px)] uppercase leading-none text-paper transition-colors hover:text-mustard"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-display text-[clamp(24px,3.2vw,38px)] uppercase leading-none text-paper">
                      {c.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Direita — card atalho */}
          <div className="flex flex-col border border-line bg-ink-2 p-[clamp(28px,4vw,48px)]">
            <p className="eyebrow mb-5">Atalho rápido</p>
            <h3 className="text-[clamp(28px,3.4vw,42px)]">
              Quer ir
              <br />
              direto ao ponto?
            </h3>
            <p className="mt-5 text-base leading-relaxed text-paper-dim">
              Clica no botão abaixo e a gente já abre uma conversa no WhatsApp
              com a mensagem inicial pronta — só ajustar e enviar.
            </p>
            <a
              href={buildWhatsappLink(
                "Olá! Vim pelo site da IUP e gostaria de conversar sobre um projeto."
              )}
              target="_blank"
              rel="noopener"
              className={cn(
                buttonVariants({ variant: "whatsapp", size: "lg" }),
                "mt-8 w-full"
              )}
            >
              <WhatsappIcon className="h-5 w-5" />
              Abrir conversa no WhatsApp
            </a>
            <div className="my-8 divider" />
            <p className="text-xs leading-relaxed text-paper-mute">
              Atendimento de segunda a sexta, 9h–18h. Mensagens fora do horário
              são respondidas no próximo dia útil.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
