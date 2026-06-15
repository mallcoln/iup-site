import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Outfit } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "IUP — Produtora Audiovisual no Rio de Janeiro",
    template: "%s | IUP",
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: "IUP",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "IUP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IUP",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#181818",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-ink text-paper">
        {children}
      </body>
    </html>
  );
}
