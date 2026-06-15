import { NextResponse } from "next/server";
import { GRAPH_API_VERSION, META_PIXEL_ID } from "@/lib/meta";

// Sempre dinâmico (faz request externo a cada evento)
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const ACCESS_TOKEN = process.env.META_CAPI_TOKEN ?? "";

function readCookie(cookieHeader: string, name: string): string | undefined {
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export async function POST(req: Request) {
  // Sem credenciais configuradas → no-op silencioso (não quebra nada)
  if (!META_PIXEL_ID || !ACCESS_TOKEN) {
    return new NextResponse(null, { status: 204 });
  }

  let payload: { eventId?: string; eventName?: string; sourceUrl?: string } = {};
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const eventName = payload.eventName || "Lead";
  const eventId = payload.eventId;
  const sourceUrl = payload.sourceUrl;

  const cookieHeader = req.headers.get("cookie") ?? "";
  const fbp = readCookie(cookieHeader, "_fbp");
  const fbc = readCookie(cookieHeader, "_fbc");
  const userAgent = req.headers.get("user-agent") ?? undefined;
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    undefined;

  const event = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: "website",
    event_source_url: sourceUrl,
    user_data: {
      client_user_agent: userAgent,
      client_ip_address: ip,
      ...(fbp ? { fbp } : {}),
      ...(fbc ? { fbc } : {}),
    },
  };

  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${META_PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [event] }),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error("[meta-capi] graph error", res.status, detail);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[meta-capi] fetch failed", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
