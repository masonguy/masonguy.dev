# Mason Rudolph

Personal site for GitHub Pages. Two scrolling pages, Ride and Work, in Vue 3 and TypeScript.

## Edit the copy

- Ride totals, blurbs, results, and photo captions: `src/content/riding.ts`
- Work entries: `src/content/work.ts`

Original photos stay in `photos/originals/`. The site serves the smaller copies in `src/assets/photos/`.

## Scripts

```sh
npm install
npm run dev
npm run build
```

## GitHub Pages

The production branch is `master`, also the repository's default branch. `.github/workflows/pages.yml` builds and deploys on pushes to `master`, or manually through **Actions → Deploy GitHub Pages → Run workflow** with `master` selected.

In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**, not **Deploy from a branch**. The workflow publishes the built `dist` artifact, not the repository's source HTML. `actions/configure-pages` reads the Pages settings; it does not enable Pages or switch the publishing source automatically.

The intended public address is **https://masonguy.dev/**. Configure it in **Settings → Pages → Custom domain**. A `CNAME` file is not required for this custom Actions workflow and does not replace the Pages setting or DNS configuration.

At the DNS provider, point the apex (`@`) to GitHub Pages using these `A` records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Remove conflicting apex records. If using `AAAA` records, ensure they also point to GitHub Pages; stale IPv6 records can cause intermittent failures. For an optional `www` alias, use a `CNAME` to `masonguy.github.io`, not to the repository path. Follow GitHub's [custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) and [domain-verification guidance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

Wait for the Pages DNS check and certificate provisioning to succeed, then enable **Enforce HTTPS**. These settings and DNS records must be changed by someone with access to the repository settings and DNS provider.

Without a custom domain configured in Pages, the fallback address is **https://masonguy.github.io/masonguy.dev/**. The workflow passes the Pages `base_path` to Vite through `PAGES_BASE_PATH`, using `/masonguy.dev/` for that project URL and `/` for the custom domain. Local builds default to `/`. The router uses Vite's base, and the favicon is base-aware. After changing the Pages custom domain, rerun the workflow to rebuild with the corresponding base.

### Troubleshooting and verification

- On October 15, 2026, [workflow run 38823480955](https://github.com/masonguy/masonguy.dev/actions/runs/38823480955) built and uploaded successfully, but `deploy` failed with a Pages API **404 Not Found**. This was a deployment failure, not a build failure or pending environment approval.
- A subsequent [built-in Pages run](https://github.com/masonguy/masonguy.dev/actions/runs/38823628444) succeeded. That is evidence of a competing branch-publishing path, not proof that this Vite workflow or its built assets were deployed. Confirm the source is **GitHub Actions** before rerunning.
- If deployment waits for approval instead, inspect **Settings → Environments → github-pages** for required reviewers and deployment branch rules; allow the intended `master` deployments.
- After merging changes to `master`, check that both `build` and `deploy` succeed in **Deploy GitHub Pages**, then open the deployment URL. In browser developer tools, verify JavaScript, CSS, fonts, images, and the favicon return successfully with no module/MIME errors.
- Open `/work` directly (or `/masonguy.dev/work` at the project URL), refresh it, and navigate back home. The build supplies `404.html` for Vue history-route fallback; a direct deep link can render the app while retaining an HTTP 404 status.

To check both URL layouts locally:

```sh
npm run build
npm run preview
# Stop preview before building the other layout.
PAGES_BASE_PATH=/masonguy.dev npm run build
PAGES_BASE_PATH=/masonguy.dev npm run preview
```

Open `/` for the first build and `/masonguy.dev/` for the second. Local preview checks do not verify GitHub's DNS, HTTPS certificate, deployment permissions, or Pages 404 handling.
