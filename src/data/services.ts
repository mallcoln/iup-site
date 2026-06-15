export type AvulsoItem = { name: string; description: string; price: string };
export type PlanItem = {
  name: string;
  price: string;
  priceLabel: string;
  features: string[];
  featured?: boolean;
  ctaMessage: string;
};

export const diarias: AvulsoItem[] = [
  {
    name: "Diária IUP",
    description:
      "4h de captação · até 8 vídeos curtos editados · 15 fotos tratadas · entrega em 10 dias úteis.",
    price: "R$ 1.800",
  },
  {
    name: "Diária Premium",
    description:
      "8h de captação · 2 câmeras · drone incluso · até 15 vídeos · 30 fotos · entrega em 15 dias.",
    price: "R$ 3.200",
  },
];

export const planos: PlanItem[] = [
  {
    name: "Continuidade",
    price: "R$ 1.800",
    priceLabel: "/mês",
    features: [
      "1 diária por mês",
      "Até 10 vídeos editados",
      "15 fotos tratadas",
      "Calendário trimestral",
      "Reunião mensal de alinhamento",
      "Após 90 dias: R$ 2.400/mês",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Continuidade.",
  },
  {
    name: "Crescimento",
    price: "R$ 3.400",
    priceLabel: "/mês",
    featured: true,
    features: [
      "2 diárias por mês",
      "Até 20 vídeos editados",
      "30 fotos tratadas",
      "Roteirização incluída",
      "Voo de drone mensal",
      "Relatório mensal",
      "Após 90 dias: R$ 4.400/mês",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Crescimento.",
  },
  {
    name: "Total",
    price: "R$ 5.500",
    priceLabel: "/mês",
    features: [
      "2 diárias por mês",
      "Até 30 vídeos editados",
      "Brand piece trimestral",
      "Estratégia editorial integrada",
      "Equipe ampliada em set",
      "Valor sob revisão a partir do 4º mês",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Total.",
  },
];

export const eventos: AvulsoItem[] = [
  {
    name: "Pequeno",
    description: "Evento de até 4 horas · captação concentrada.",
    price: "R$ 2.000",
  },
  {
    name: "Médio",
    description: "Evento de até 8 horas · meio dia completo.",
    price: "R$ 3.500",
  },
  {
    name: "Grande",
    description: "Dia inteiro ou múltiplas frentes simultâneas.",
    price: "R$ 6.000",
  },
];

export const addons: AvulsoItem[] = [
  {
    name: "Voo de drone",
    description: "Até 30 minutos de captação aérea.",
    price: "R$ 600",
  },
  {
    name: "Podcast filmado",
    description: "1 hora de gravação · edição padrão inclusa.",
    price: "R$ 1.500",
  },
  {
    name: "Live broadcast",
    description: "Transmissão ao vivo de até 3 horas.",
    price: "R$ 2.500",
  },
];
