# Mason Rudolph

Personal site for GitHub Pages. Two scrolling pages, Ride and Work, in Vue 3 and TypeScript.

## Edit the copy

- Ride totals, blurbs, results, and photo captions: `src/content/riding.ts`
- Work entries: `src/content/work.ts`
- Contact email: `src/content/site.ts`

Original photos stay in `photos/originals/`. The site serves the smaller copies in `src/assets/photos/`.

## Scripts

```sh
npm install
npm run dev
npm run build
```

GitHub Pages deploys from `.github/workflows/pages.yml` on pushes to `master`. In the repo settings, set Pages to deploy from GitHub Actions. The custom domain file is not in the repo until you want `masonguy.dev` pointed here again.
