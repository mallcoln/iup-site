import Image from "next/image";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function LpBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/[0.78] backdrop-blur-xl">
      <div className="container-x flex h-[64px] items-center justify-between">
        <Image
          src="/logo-amarela.png"
          alt="IUP"
          width={107}
          height={32}
          priority
          className="h-8 w-auto"
        />
        <a
          href={`tel:+${CONTACT.whatsappNumber}`}
          className="hidden items-center gap-2 font-sans text-sm font-semibold text-paper transition-colors hover:text-mustard min-[600px]:inline-flex"
        >
          <Phone className="h-4 w-4 text-mustard" />
          {CONTACT.whatsappDisplay}
        </a>
      </div>
    </header>
  );
}
