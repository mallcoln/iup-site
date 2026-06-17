"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const EMBED_SRC = "https://www.instagram.com/embed.js";

/**
 * Embeds oficiais de posts/reels do Instagram.
 * O embed.js substitui cada <blockquote> por um iframe dimensionado automaticamente.
 */
export function InstagramVideos({ urls }: { urls: string[] }) {
  useEffect(() => {
    const process = () => window.instgrm?.Embeds?.process();
    const existing = document.getElementById("instagram-embed-js");
    if (existing) {
      process();
      return;
    }
    const s = document.createElement("script");
    s.id = "instagram-embed-js";
    s.async = true;
    s.src = EMBED_SRC;
    s.onload = process;
    document.body.appendChild(s);
  }, [urls]);

  return (
    <div className="grid grid-cols-1 justify-items-center gap-6 min-[700px]:grid-cols-2 min-[1000px]:grid-cols-3">
      {urls.map((url) => (
        <blockquote
          key={url}
          className="instagram-media w-full"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: "#1F1F1F",
            border: 0,
            margin: 0,
            maxWidth: 420,
            width: "100%",
          }}
        />
      ))}
    </div>
  );
}
