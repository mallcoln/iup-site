import Image from "next/image";
import { clientes } from "@/data/clientes";

export function ClientLogos() {
  // Lista duplicada para o loop contínuo e sem emendas do marquee
  const loop = [...clientes, ...clientes];

  return (
    <section
      aria-label="Marcas que confiam na IUP"
      className="border-y border-line bg-ink-2/40"
    >
      <div className="py-[clamp(64px,9vw,112px)]">
        <p className="container-x eyebrow mb-[clamp(40px,5vw,64px)] text-center">
          Marcas que confiam na IUP
        </p>

        <div
          className="marquee-mask relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <ul className="marquee-track gap-9 px-4">
          {loop.map((c, i) => (
            <li key={`${c.name}-${i}`} className="shrink-0">
              <div className="group flex h-20 w-20 items-center justify-center rounded-full border border-line bg-ink/60 transition-colors duration-300 hover:border-mustard/50 min-[640px]:h-24 min-[640px]:w-24">
                <Image
                  src={c.logo}
                  alt={c.name}
                  title={c.name}
                  width={96}
                  height={96}
                  className="h-[72%] w-[72%] object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
