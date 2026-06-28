<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack and structure

- Next.js 16 (App Router), React 19, TypeScript strict.
- Tailwind CSS v4 configured via `@tailwindcss/postcss` in `postcss.config.mjs`; theme tokens and custom animation utilities live in `src/app/globals.css`.
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
- Pushing to `main` triggers a GitHub Pages deploy from the `out/` folder.

## Data gotchas

- `src/components/OpenSource.tsx` hardcodes the `OSS_CONTRIBUTIONS` array.
- The `status` and `date` fields must match the actual PR state on GitHub. Verify with `gh api /repos/<owner>/<repo>/pulls/<number>` before updating.
- Valid statuses used in the UI: `"open"`, `"merged"`.
