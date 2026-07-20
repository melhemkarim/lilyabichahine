# Portfolio — Next.js + Tailwind

A modern, warm, "artist's case file" take on the reference site
(lilyabichahine.carrd.co): each project is treated as an exhibit in a
dossier — mono case-numbers, a wax-seal accent, manila-folder warmth — with
scroll-triggered motion throughout (Framer Motion).

## Structure

Kept intentionally simple — one file per page, no scattered component folders:

```
app/
  layout.tsx          → fonts, nav, footer (shared chrome)
  globals.css         → Tailwind + base styles
  page.tsx            → Home (hero, intro, project index, CTA)
  about/page.tsx       → About / CV
  contact/page.tsx     → Contact form
  work/[slug]/page.tsx → Individual project page (dossier layout, gallery, video embed)
  api/contact/route.ts → Sends form submissions to your email
lib/
  data.ts             → ALL content lives here: site info, bio, and every
                         project (title, date, category, description,
                         credits, image paths, embeds). Edit this file to
                         change any text on the site.
public/images/        → Where your photos go — see public/images/README.md
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Everything text-based — your name, tagline, bio, and every project's title,
date, category, description, and credits — lives in `lib/data.ts`. Open it
and edit the plain objects; no need to touch the page files unless you want
to change layout or styling.

Categories are just strings, so use whatever taxonomy fits (Teaching,
Workshop, Discussion, Performance, Installation...) — there's no fixed list.

## Adding photos

See `public/images/README.md`. Short version: drop files into the matching
folder under `public/images/`, using the exact names already referenced in
`lib/data.ts`. Until then, those spots show a soft warm placeholder instead
of a broken image, so the site stays presentable.

## Setting up the contact form

The form posts to `app/api/contact/route.ts`, which emails submissions via
SMTP (works with Gmail, Outlook, Zoho, your host's mailbox, SendGrid, etc.).

1. Copy `.env.example` to `.env.local`.
2. Fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and
   `CONTACT_TO_EMAIL`.
   - For Gmail: turn on 2-Step Verification, then create an
     [App Password](https://myaccount.google.com/apppasswords) — use that
     as `SMTP_PASS`, your Gmail address as `SMTP_USER`, host
     `smtp.gmail.com`, port `587`.
3. Restart the dev server. Submissions will arrive at `CONTACT_TO_EMAIL`,
   with reply-to set to the visitor's own address.

When deploying (e.g. Vercel), add the same variables in the project's
Environment Variables settings.

## Deploying

Push to a Git repo and import it on [Vercel](https://vercel.com) (this is a
plain Next.js app — no special config needed), or run `npm run build &&
npm start` on any Node host.

## Design notes

- **Palette** — manila-folder tan background, near-black ink, an oxblood
  "wax seal" red as the primary accent, and an aged-brass secondary accent
  for labels/dividers. Deliberately not the generic cream-and-terracotta
  combo you'll see everywhere.
- **Type** — Fraunces (display, italic serif with character) for titles,
  Newsreader (serif) for body copy, IBM Plex Mono for labels, categories,
  and case numbers — reinforcing the "legal case file" idea that ties
  together the lawyer/artist duality in the source content.
- **Signature element** — projects are numbered and framed as "exhibits" in
  a dossier, rather than a generic grid of project cards.
- **Motion** — scroll-triggered reveals (staggered index rows, fade-up
  sections), a subtle hero seal rotation, and hover underlines. Respects
  `prefers-reduced-motion`.
