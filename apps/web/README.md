# Kuroiwa Farm website

## Development

Run commands from the repository root:

- `pnpm --filter simple-homepage dev`
- `pnpm lint`
- `pnpm test`
- `pnpm build`

## Pages and content

The homepage lives in `src/HomePage.tsx`. The shared header and footer live in
`src/Layout.tsx`. The 16 remaining pages live in `src/pages/`, with their URL,
title, description and hero photographs defined in `src/pageMetadata.json`.

The page text, recruitment conditions, photographs and image disclaimers were
copied from the corresponding pages at <https://kuroiwafarm.co.jp/> on
2026-10-21. Photographs are loaded from their existing official URLs. Original
section IDs are preserved. The previous `/privacy-policy/` link also resolves
to the official `/privacy/` content.

`src/subpages.css` applies the homepage palette and typography to the copied
content. The `source-` class prefix separates page content from the shared layout.
No WordPress scripts, analytics code or inline HTML execution are copied.

The Vite build writes an `index.html` for each page, including its title and
meta description, so direct navigation works on ordinary static hosting.
Deploy the entire `apps/web/dist/` directory with its directory structure intact.

## Contact and application forms

Forms use native browser validation and POST directly to the existing official
Contact Form 7 page. Original field names, hidden form IDs, required fields,
options and constraints are preserved. After submission, the browser navigates
to the official site, where its existing validation, spam checks, email delivery
and result display run. This app does not implement a new mail service or display
an unverified local success message.

The original application form uses `job-type` as the name of both the job and
employment-type selectors. This has been preserved for compatibility with its
existing backend configuration; coordinate any change with the WordPress form
and email settings.

No real contact message or application was sent during implementation. Verify
actual email delivery and the result display with the site operator before
publishing. Changing the official form configuration may require updating the
copied fields in `src/pages/`.
