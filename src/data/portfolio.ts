export type IcpSlug =
  | "saude"
  | "estetica"
  | "liberais"
  | "comercio"
  | "eventos"
  | "casamentos";

export const ICPS: { slug: IcpSlug; label: string }[] = [
  { slug: "saude", label: "Saúde Clínica" },
  { slug: "estetica", label: "Estética & Bem-estar" },
  { slug: "liberais", label: "Profissionais Liberais" },
  { slug: "comercio", label: "Comércio" },
  { slug: "eventos", label: "Eventos" },
  { slug: "casamentos", label: "Casamentos" },
];

export type PortfolioItem = {
  id: string;
  title: string;
  icp: IcpSlug;
  image?: string;
};

// Placeholders enquanto não há cases reais
export const portfolio: PortfolioItem[] = [
  { id: "p1", title: "Dr. Exemplo · Clínica Médica", icp: "saude" },
  { id: "p2", title: "Dra. Exemplo · Reels", icp: "saude" },
  { id: "p3", title: "Studio · Harmonização", icp: "estetica" },
  { id: "p4", title: "Clínica · Antes & Depois", icp: "estetica" },
  { id: "p5", title: "Personal · Marca pessoal", icp: "liberais" },
  { id: "p6", title: "Coach · Conteúdo", icp: "liberais" },
  { id: "p7", title: "Loja Exemplo · Lookbook", icp: "comercio" },
  { id: "p8", title: "Evento Corporativo · 2026", icp: "eventos" },
  { id: "p9", title: "Casal Exemplo · Wedding film", icp: "casamentos" },
];
