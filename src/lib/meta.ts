// Configuração do Meta Pixel + Conversions API.
// O Pixel ID NÃO é secreto (vai no JS do navegador) → NEXT_PUBLIC_*.
// O token da CAPI É secreto → apenas server-side (sem NEXT_PUBLIC_), nunca no client.

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

// Evento disparado quando alguém clica num CTA de WhatsApp.
// "Lead" é o evento padrão importável como conversão no Google/Meta Ads.
export const META_LEAD_EVENT = "Lead";

export function metaEnabled(): boolean {
  return META_PIXEL_ID.length > 0;
}

export const GRAPH_API_VERSION = "v21.0";
