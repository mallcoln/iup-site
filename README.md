# IUP — Site & Landing Page

Site institucional + landing page de Google Ads da **IUP**, produtora de conteúdo
audiovisual no Rio de Janeiro. Todos os CTAs convertem para o WhatsApp.

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v3** + tokens custom (dark + mustard)
- Fontes: **Big Shoulders** (display) + **Outfit** (body) via `next/font/google`
- Ícones: **lucide-react** (+ ícone WhatsApp custom)
- Botão no estilo **shadcn/ui** (`class-variance-authority`)
- Deploy: **Vercel** (região `gru1` / São Paulo)

> Node ≥ 20. O projeto usa **npm** (o briefing previa pnpm, mas pnpm não estava
> disponível no ambiente; o fallback para npm é autorizado).

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
npm run lint     # ESLint
```

## Rotas

| Rota             | Descrição                                              |
|------------------|--------------------------------------------------------|
| `/`              | Home — reposicionamento "Produtora. Não agência."      |
| `/sobre`         | Sobre, nichos prioritários, princípios                 |
| `/servicos`      | Diárias, retainers, eventos, projetos especiais, FAQ   |
| `/portfolio`     | Grid filtrável por segmento (placeholders por ora)     |
| `/contato`       | Canais oficiais + atalho WhatsApp                      |
| `/produtora-rj`  | **Landing Page Google Ads** — sem menu, `noindex`      |

A LP `/produtora-rj` tem layout próprio (sem Header/Footer global) e é
`noindex,nofollow` — bloqueada também em `robots.txt`. As rotas institucionais
vivem no route group `(site)`, que aplica Header/Footer/FAB.

## Estrutura

```
src/
├── app/
│   ├── layout.tsx              # root: fontes, metadata global, <html>/<body>
│   ├── globals.css             # Tailwind + tokens + utilitários
│   ├── not-found.tsx           # 404
│   ├── robots.ts, sitemap.ts   # SEO (LP excluída)
│   ├── (site)/                 # site institucional (Header/Footer/FAB)
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Home
│   │   ├── sobre/ servicos/ portfolio/ contato/
│   └── produtora-rj/           # LP (layout próprio, noindex)
├── components/                 # Header, Footer, cards, FAQ, grid, LP, etc.
├── data/                       # services, portfolio, faq (tipados)
└── lib/                        # constants, whatsapp(), cn()
```

## Conteúdo

- **Logos** reais em `public/` (`logo-amarela`, `-off-white`, `-preta`, `-cinza`).
- **Portfólio**: placeholders por segmento até existirem cases reais. Trocar os
  blocos por `next/image` em `src/data/portfolio.ts` (campo `image`) e ajustar
  `PortfolioGrid`.
- **og-image.jpg** e ícones gerados a partir da logo amarela sobre fundo `#181818`.

## Deploy na Vercel

1. Subir o repositório no GitHub.
2. Importar em https://vercel.com/new (preset **Next.js**, auto-detect).
3. `vercel.json` já define build/install (npm), região `gru1` e security headers.
4. Domínio: adicionar `agenciaiup.com.br` e `www.` em Settings → Domains.
5. Pós-deploy: instalar **Google Tag Manager** em `layout.tsx` e criar conversão
   "WhatsApp Click" (clique em `href*="wa.me"`) para importar no Google Ads.
6. Apontar a campanha de Google Ads para `/produtora-rj`.

Nenhuma variável de ambiente é necessária na v1 (constantes em
`src/lib/constants.ts`).
