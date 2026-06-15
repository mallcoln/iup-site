type ServiceCardProps = {
  num: string;
  title: string;
  description: string;
  bullets?: string[];
};

export function ServiceCard({
  num,
  title,
  description,
  bullets,
}: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col border border-line bg-ink p-[clamp(28px,4vw,48px)] transition-colors duration-300 hover:bg-ink-2">
      <span className="font-display text-5xl font-bold leading-none text-mustard">
        {num}
      </span>
      <h3 className="mt-6 text-[clamp(22px,2.4vw,30px)]">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-paper-dim">
        {description}
      </p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-sm text-paper-dim"
            >
              <span className="mt-2 block h-px w-3 shrink-0 bg-mustard" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
