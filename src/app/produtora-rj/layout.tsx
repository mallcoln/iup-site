import type { Metadata } from "next";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: {
    absolute: "Produtora Audiovisual no Rio de Janeiro — Diárias e Eventos | IUP",
  },
  description:
    "Diárias de produção e cobertura de eventos com estrutura completa. Câmeras, drone, equipe e edição inclusa. Atendemos todo o Rio de Janeiro.",
  robots: { index: false, follow: false },
};

export default function LpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex-1">{children}</main>
      <FloatingWhatsapp />
    </>
  );
}
