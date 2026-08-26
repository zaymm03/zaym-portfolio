# zaym-portfolio

Personal portfolio site — Next.js 14 (App Router) + Tailwind CSS, styled as a
terminal/boot-log environment.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/layout.tsx` — root layout, fonts, metadata
- `app/page.tsx` — assembles all sections
- `components/` — one file per section (Hero, About, Projects, Experience,
  Skills, Contact) plus `Nav` and `Footer`
- `public/resume.pdf` — replace this with your latest resume any time; the
  hero's "./resume.pdf" button links straight to it

## Editing content

All copy lives directly inside the component files as plain arrays/JSX —
no CMS, no data fetching. To update a project, job, or skill, open the
matching file in `components/` and edit the array at the top.

## Deploy to Vercel (recommended)

1. Push this folder to a new GitHub repo (e.g. `zaymm03/portfolio`)
2. Go to https://vercel.com, sign in with GitHub
3. "Add New... Project" → import the repo → keep all defaults → Deploy
4. You get a live `*.vercel.app` URL immediately; add a custom domain later
   from the Vercel project settings if you buy one

Every push to `main` auto-redeploys.

## Notes

- Fonts (JetBrains Mono, Inter) are bundled locally via `@fontsource` — no
  external font requests at runtime, so nothing breaks if Google Fonts is
  ever slow or blocked.
- Swap `public/resume.pdf` whenever your resume updates — no code change
  needed.
