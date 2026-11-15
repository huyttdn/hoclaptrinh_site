# Northline — React website template

A clean, responsive marketing site template built with React, React Router,
TypeScript, and Tailwind CSS. It is a static-only front end: no server, API, or
database is required at runtime.

The design is a professional foundation for product, service, and agency landing
pages. All copy and structured content live in one data file, so the template is
easy to rebrand.

## What's included

- Homepage with hero, client strip, services, "Why choose us", stats, about
  preview, testimonial carousel, and call to action
- Services page with detailed offerings, process, and engagement models
- About page with story, values, team, and studio stats
- Contact page with a validated form, contact details, and FAQ
- Responsive header with accessible mobile navigation
- Aesthetic footer with navigation, contact details, and newsletter signup
- Custom 404 page and route error boundary
- SEO metadata, `robots.txt`, sitemap, web manifest, and SVG favicon
- Full static pre-rendering at build time

## Stack

- React 19 with core hooks (`useState`, `useEffect`, `useId`)
- React Router 8 in framework mode
- TypeScript
- Tailwind CSS 4
- Vitest, Testing Library, and jsdom

## Getting started

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:5173`.

## Scripts

| Command             | Description                                        |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Start the dev server with HMR                      |
| `npm run build`     | Build the static site into `build/client`          |
| `npm run start`     | Preview the production static build                |
| `npm run typecheck` | Generate route types and run TypeScript checks     |
| `npm test`          | Run the test suite once                            |
| `npm run test:watch`| Run tests in watch mode                            |

## Static rendering

`react-router.config.ts` uses `ssr: false` with a `prerender` list for `/`,
`/services`, `/about`, and `/contact`. The build produces complete HTML files
plus client navigation data in `build/client`.

Unknown paths hydrate through `__spa-fallback.html`. A Netlify-style
`public/_redirects` file and an `nginx.conf` are included for static hosting.
Run `npm run build && npm run start` to preview the production output locally
with the included zero-dependency static server.

## Customizing the template

- **Content and navigation:** `app/data/site.ts` — brand details, services,
  testimonials, team, stats, FAQ, and form options.
- **Design tokens:** `app/app.css` — fonts, paper/ink colors, brand palette,
  focus styles, and animations.
- **Routes:** `app/routes.ts` and the files in `app/routes/`.
- **Shared components:** `app/components/`.
- **Global shell:** `app/root.tsx`.
- **Domain:** update the placeholder `northline.studio` URLs in `public/robots.txt`
  and `public/sitemap.xml`.

## Contact form

The contact form validates on the client. With no endpoint configured it runs in
local demo mode and does not transmit the message.

To deliver submissions, set `VITE_CONTACT_ENDPOINT` to a form service or your own
endpoint:

```bash
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```

The form sends a JSON `POST` with `name`, `email`, `company`, `projectType`,
`budget`, and `message`. See `.env.example`.

## Testing and quality checks

```bash
npm run typecheck
npm test
npm run build
npm audit
```

The tests cover contact form validation and success states, mobile navigation,
testimonial switching, and the main homepage sections.

## Deployment

### Static host

- Build command: `npm run build`
- Publish directory: `build/client`
- SPA fallback: `__spa-fallback.html`

Serve pre-rendered files first, then fall back to the SPA file for unknown
routes. The included `public/_redirects` works on Netlify and similar hosts.

### Docker

```bash
docker build -t northline-template .
docker run -p 8080:80 northline-template
```

The image builds the static site and serves it with Nginx, including gzip,
security headers, immutable asset caching, and the SPA fallback.

## Project structure

```text
app/
├── components/        Shared UI, header, footer, forms, icons
├── data/site.ts       All editable site content
├── lib/seo.ts         Page metadata helper
├── routes/            Home, services, about, contact, 404
├── test/              Vitest setup
├── app.css            Tailwind theme and global styles
├── root.tsx           Document shell, header, footer, error boundary
└── routes.ts          Route configuration
public/                Static assets and hosting config
scripts/serve.mjs      Local preview server for the static build
```
