"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { VideoItem } from "@/data/videos";

export function VideoGallery({ items }: { items: VideoItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="columns-1 gap-4 min-[640px]:columns-2 min-[1000px]:columns-3 [&>*]:mb-4">
      {items.map((v) => {
        const isActive = active === v.id;
        const aspect =
          v.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video";

        return (
          <div
            key={v.id}
            className="group relative w-full break-inside-avoid overflow-hidden border border-line bg-ink-2"
          >
            <div className={`relative w-full ${aspect}`}>
              {isActive ? (
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
                    className="absolute inset-0 h-full w-full bg-black object-contain"
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
                  onClick={() => setActive(v.id)}
                  aria-label={`Reproduzir: ${v.title}`}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={v.poster}
                    alt={v.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    unoptimized={v.type === "youtube"}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  {/* botão play */}
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-mustard text-ink transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 translate-x-0.5 fill-ink" />
                  </span>
                  {/* legenda */}
                  <span className="absolute bottom-0 left-0 w-full p-5 text-left">
                    <span className="block font-sans text-[0.7rem] uppercase tracking-[0.2em] text-mustard">
                      {v.category}
                    </span>
                    <span className="mt-1 block font-display text-xl uppercase leading-none text-paper">
                      {v.title}
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
