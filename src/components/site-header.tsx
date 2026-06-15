"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HEADER_CTA = buildWhatsappLink(
  "Olá! Vim pelo site e quero conversar com a IUP."
);

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Trava o scroll do body quando o overlay mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/[0.78] backdrop-blur-xl">
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="IUP — página inicial" className="shrink-0">
          <Image
            src="/logo-amarela.png"
            alt="IUP"
            width={120}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 min-[900px]:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-active={isActive(link.href)}
              className={cn(
                "nav-underline font-sans text-sm tracking-wide transition-colors",
                isActive(link.href)
                  ? "text-paper"
                  : "text-paper-dim hover:text-paper"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={HEADER_CTA}
          target="_blank"
          rel="noopener"
          className={cn(buttonVariants({ variant: "primary" }), "hidden min-[900px]:inline-flex")}
        >
          Fale conosco
        </a>

        {/* Botão mobile */}
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="text-paper min-[900px]:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Overlay mobile full-screen */}
      {open && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-ink min-[900px]:hidden">
          <div className="container-x flex h-[72px] items-center justify-between border-b border-line">
            <Image
              src="/logo-amarela.png"
              alt="IUP"
              width={120}
              height={36}
              className="h-9 w-auto"
            />
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="text-paper"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav className="container-x flex flex-1 flex-col justify-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl uppercase leading-none text-paper transition-colors hover:text-mustard"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={HEADER_CTA}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8 self-start")}
            >
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
