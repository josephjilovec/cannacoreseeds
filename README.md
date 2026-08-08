# CannaCore Seeds × JJ Stash

A Next.js/Vercel redesign that unifies **CannaCore Seeds** (genetics/storefront) with **JJ Stash** (editorial publication on Beehiiv).

## Brand architecture

- **CannaCore Seeds** remains the parent commercial/genetics brand and `cannacoreseeds.com` domain.
- **JJ Stash** is presented as *a CannaCore publication* covering genetics, plant science, cultivation, history, and culture.
- Beehiiv remains the canonical publishing/archive platform at `https://jjstash.beehiiv.com/`.
- The website surfaces selected JJ Stash articles and links to the full Beehiiv archive and author page.

## Routes

- `/` — integrated brand homepage
- `/genetics` — genetics catalog, pack selection, cart and manual-payment order notice
- `/stash` — editorial landing page and Beehiiv integration
- `/about` — brand architecture and positioning
- `/contact` — FormSubmit-powered contact form

## Email / order handling

No API key is required. Forms use FormSubmit AJAX and route messages to `realjjemail@gmail.com`.

The genetics checkout preserves the manual payment methods found in the prior `main2` implementation and sends an order notice via FormSubmit.

## Development

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Vercel

Use Vercel defaults:

- Framework: **Next.js**
- Root Directory: `./`
- Build Command: Default
- Output Directory: Default
- Install Command: Default

Do not set `dist` as the output directory.

## GitHub branch recommendation

The existing `main2` branch contains the substantive Next.js storefront. The current `main` branch is essentially documentation only. Before replacing anything, preserve both branches as backups, then publish this project to the branch you want Vercel to use as Production (recommended: `main`).
