<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack and structure

- Next.js 16 (App Router), React 19, TypeScript strict.
- Styling is plain CSS in `src/app/globals.css`: design tokens are custom properties on `:root`, and components use the semantic class names defined there (`.wrap`, `.block`, `.card`, …). `@tailwindcss/postcss` is still in `postcss.config.mjs`, but `globals.css` does not `@import "tailwindcss"`, so Tailwind utility classes do nothing.
- Fonts (Inter, Space Grotesk, JetBrains Mono) are self-hosted from `@fontsource-variable/*`, imported in `layout.tsx`. Don't switch back to `next/font/google`: it downloads fonts at build time, and that download broke a Cloudflare build.
- Every component is a static server component; there are no client components.
- Path alias `@/*` maps to `./src/*`.
- Entry page: `src/app/page.tsx`; layout/metadata: `src/app/layout.tsx`.
- README is boilerplate from `create-next-app`; trust the config files below over it.

## Commands

- `npm run dev` — dev server on `http://localhost:3000`.
- `npm run lint` — ESLint via `eslint.config.mjs` (flat config with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`).
- `npm run build` — typecheck + static export to `out/`.
- `next start` does **not** serve the static export; test production output by serving `out/` with any static file server.

## Deployment

- `next.config.ts` sets `output: 'export'` and `trailingSlash: true`; the deployable site is `out/`.
- **The live site is Cloudflare Pages**, not GitHub Pages. Cloudflare's Git integration builds every push to `main` with `npx next build`, publishes `out/`, and serves it at `parthtec.dev`. There is no workflow file in this repo. Check build results in the Cloudflare dashboard's build log. A failed Cloudflare build leaves the previous deployment live.
- GitHub Pages is also enabled (legacy mode, `main` branch, repo root), so a `pages-build-deployment` run appears on every push. It has no build step: it publishes the raw repo with the README as the home page at `ppatel1604.github.io/parthtec`. It is not the site, and a green run there says nothing about the real deploy.
- Pages are cached at the edge and in browsers. To check a deploy, fetch with a cache-busting query (`https://parthtec.dev/?v=<timestamp>`) or open the deployment's own `*.parthtec.pages.dev` URL.
- `public/Resume.pdf` is exported from the résumé document and must match the site's content and contact details.
- The contact address is `parth@parthtec.dev`, forwarded by Cloudflare Email Routing.

## Data gotchas

- `src/components/OpenSource.tsx` hardcodes the `OSS_CONTRIBUTIONS` array.
- The `status` and `date` fields must match the actual PR state on GitHub. Verify with `gh api /repos/<owner>/<repo>/pulls/<number>` before updating.
- Valid statuses used in the UI: `"open"`, `"merged"`. Entries with `docs: true` are listed in a footnote instead of the main list.

## Content rules

- Don't publish the employer's infrastructure details: no cluster counts, per-environment layouts, production cloud splits, or FedRAMP by name. Describe scale as "roughly 80% Azure / 20% AWS, dev through regulated production", and keep the hub-and-spoke diagram illustrative (`aks-n`, `eks-n`).
