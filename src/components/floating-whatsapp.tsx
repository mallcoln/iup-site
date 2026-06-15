import { buildWhatsappLink } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/whatsapp-icon";

export function FloatingWhatsapp() {
  return (
    <a
      href={buildWhatsappLink(
        "Olá! Vim pelo site da IUP e quero conversar."
      )}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-[1.08]"
    >
      <WhatsappIcon className="h-8 w-8" />
    </a>
  );
}
