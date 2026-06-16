import { Star, ShieldCheck, Scale, Clock } from "lucide-react";

function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-mustard text-mustard" />
      ))}
    </span>
  );
}

type Item = {
  icon: React.ReactNode;
  value: string;
  label: string;
  top?: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    icon: <Star className="h-5 w-5" />,
    top: <Stars />,
    value: "5,0",
    label: "25 avaliações no Google",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    value: "0",
    label: "reclamações no Reclame Aqui",
  },
  {
    icon: <Scale className="h-5 w-5" />,
    value: "0",
    label: "processos em quase 7 anos",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    value: "10 dias",
    label: "prazo médio de entrega",
  },
];

export function Credibility() {
  return (
    <section
      aria-label="Indicadores de confiança da IUP"
      className="border-y border-line bg-ink-2/40"
    >
      <div className="container-x py-[clamp(48px,7vw,88px)]">
        <p className="eyebrow mb-[clamp(32px,4vw,52px)] text-center">
          Por que confiar na IUP
        </p>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-12 min-[900px]:grid-cols-4">
          {ITEMS.map((item, i) => (
            <li
              key={i}
              className="flex flex-col items-center text-center min-[900px]:border-l min-[900px]:border-line min-[900px]:first:border-l-0"
            >
              <span className="mb-4 text-mustard">{item.top ?? item.icon}</span>
              <span className="font-display text-[clamp(40px,5vw,60px)] font-bold leading-none text-paper">
                {item.value}
              </span>
              <span className="mt-3 max-w-[22ch] text-sm leading-snug text-paper-dim">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
