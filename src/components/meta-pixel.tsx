"use client";

import Script from "next/script";
import { useEffect } from "react";
import { META_PIXEL_ID, META_LEAD_EVENT } from "@/lib/meta";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Meta Pixel (client) + disparo de evento de Lead nos cliques de WhatsApp,
 * com event_id compartilhado para deduplicação com a Conversions API (server).
 *
 * Não renderiza nada se NEXT_PUBLIC_META_PIXEL_ID não estiver definido —
 * então é seguro deixar montado mesmo sem o Pixel configurado ainda.
 */
export function MetaPixel() {
  useEffect(() => {
    if (!META_PIXEL_ID) return;

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(
        'a[href*="wa.me"], a[href*="api.whatsapp.com"]'
      );
      if (!target) return;

      // event_id único, usado no Pixel e na CAPI para deduplicar
      const eventId =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.round(performance.now())}`;

      const sourceUrl = window.location.href;

      // 1) Pixel (browser)
      window.fbq?.("track", META_LEAD_EVENT, {}, { eventID: eventId });

      // 2) Conversions API (server) — mesmo event_id para dedup
      try {
        const body = JSON.stringify({
          eventId,
          eventName: META_LEAD_EVENT,
          sourceUrl,
        });
        if (navigator.sendBeacon) {
          navigator.sendBeacon(
            "/api/meta-capi",
            new Blob([body], { type: "application/json" })
          );
        } else {
          void fetch("/api/meta-capi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body,
            keepalive: true,
          });
        }
      } catch {
        // silencioso — não bloquear a navegação pro WhatsApp
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!META_PIXEL_ID) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
