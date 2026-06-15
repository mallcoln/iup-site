"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { VideoItem } from "@/data/videos";

function Tile({ v, className }: { v: VideoItem; className?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden border border-line bg-ink-2 ${className ?? ""}`}
    >
      {playing ? (
        v.type === "youtube" ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full bg-black object-cover"
            src={v.src}
            poster={v.poster}
            controls
            autoPlay
            playsInline
          />
        )
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Reproduzir: ${v.title}`}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={v.poster}
            alt={v.title}
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            unoptimized={v.type === "youtube"}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-mustard text-ink transition-transform duration-300 group-hover:scale-110">
            <Play className="h-5 w-5 translate-x-0.5 fill-ink" />
          </span>
          <span className="absolute bottom-0 left-0 w-full p-4 text-left">
            <span className="block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-mustard">
              {v.category}
            </span>
            <span className="mt-1 block font-display text-base uppercase leading-none text-paper">
              {v.title}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

const ROW_CLASS = [
  "min-[760px]:row-start-1",
  "min-[760px]:row-start-2",
  "min-[760px]:row-start-3",
];

/**
 * Layout de destaque: 3 vídeos empilhados na coluna esquerda,
 * o "feature" (vertical) ocupando 2 linhas à direita, e o "secondary"
 * no canto inferior direito.
 */
export function VideoShowcase({
  left,
  feature,
  secondary,
}: {
  left: VideoItem[];
  feature: VideoItem;
  secondary: VideoItem;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 min-[760px]:grid-cols-2 min-[760px]:grid-rows-3">
      {left.slice(0, 3).map((v, i) => (
        <Tile
          key={v.id}
          v={v}
          className={`aspect-video min-[760px]:col-start-1 ${ROW_CLASS[i]}`}
        />
      ))}

      <Tile
        v={feature}
        className="aspect-[4/5] min-[760px]:col-start-2 min-[760px]:row-start-1 min-[760px]:row-span-2 min-[760px]:aspect-auto"
      />

      <Tile
        v={secondary}
        className="aspect-video min-[760px]:col-start-2 min-[760px]:row-start-3"
      />
    </div>
  );
}
