import Link from "next/link";
import Image from "next/image";
import { CONTACT, NAV_LINKS, SITE } from "@/lib/constants";
import { buildWhatsappLink } from "@/lib/whatsapp";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-x grid grid-cols-1 gap-12 py-[clamp(48px,7vw,88px)] min-[520px]:grid-cols-2 min-[900px]:grid-cols-4">
        {/* Coluna 1 — brand */}
        <div className="min-[520px]:col-span-2 min-[900px]:col-span-1">
          <Image
            src="/logo-amarela.png"
            alt="IUP"
            width={160}
            height={48}
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-paper-dim">
            Produtora de conteúdo audiovisual no Rio de Janeiro. Diárias,
            retainers mensais e cobertura de eventos para quem trata o próprio
            negócio com seriedade.
          </p>
        </div>

        {/* Coluna 2 — navegação */}
        <div>
          <h3 className="eyebrow mb-5">Navegação</h3>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper-dim transition-colors hover:text-mustard"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3 — contato */}
        <div>
          <h3 className="eyebrow mb-5">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={buildWhatsappLink()}
                target="_blank"
                rel="noopener"
                className="text-paper-dim transition-colors hover:text-mustard"
              >
                WhatsApp · {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-paper-dim transition-colors hover:text-mustard"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener"
                className="text-paper-dim transition-colors hover:text-mustard"
              >
                {CONTACT.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4 — endereço */}
        <div>
          <h3 className="eyebrow mb-5">Endereço</h3>
          <p className="text-sm text-paper-dim">
            {CONTACT.city}
            <br />
            Brasil
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x py-6">
          <p className="text-xs text-paper-mute">
            © {year} {SITE.name} Marketing LTDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
