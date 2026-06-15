import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="container-x py-[clamp(80px,16vw,200px)] text-center">
        <p className="eyebrow mb-7">404</p>
        <h1 className="text-[clamp(56px,14vw,200px)] leading-[0.9]">
          Não encontrei.
        </h1>
        <p className="lead mx-auto mt-8">
          A página que você procurou pode ter mudado de endereço ou nunca
          existiu. Volte para o início e vamos te levar para o lugar certo.
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-10")}
        >
          Voltar para o início
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
