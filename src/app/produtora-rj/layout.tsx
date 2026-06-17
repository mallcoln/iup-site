import type { Metadata } from "next";
import Script from "next/script";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";

// Container do Google Tag Manager — exclusivo da Landing Page de Google Ads
const GTM_ID = "GTM-P5LQ45S8";

export const metadata: Metadata = {
  title: {
    absolute: "Produtora Audiovisual no Rio de Janeiro — Diárias e Eventos | IUP",
  },
  description:
    "Diárias de produção e cobertura de eventos com estrutura completa. Câmeras, drone, equipe e edição inclusa. Atendemos todo o Rio de Janeiro.",
  robots: { index: false, follow: false },
};

export default function LpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-lp" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <main className="flex-1">{children}</main>
      <FloatingWhatsapp />
    </>
  );
}
