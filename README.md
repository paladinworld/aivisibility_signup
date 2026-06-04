# Netic — AI Visibility Sign-up Page

A standalone Next.js (App Router) project containing **only** the public sign-up / intake
page for Netic's AI Visibility Tracker. Extracted from the main app so it can be reviewed,
restyled, or wired to a backend independently.

## What's here

```
app/
  page.tsx       # the entire sign-up page (client component): form + brand hero
  styles.ts      # all CSS for the page (exported as a string, injected via <style>)
  layout.tsx     # minimal root layout
  globals.css    # tiny reset (box-sizing + body margin)
public/
  netic/netic-wordmark-green.svg   # logo used on the form
```

The page is fully self-contained — its only dependencies are `react`/`next`. No shared UI
library, no API calls.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Structure of `app/page.tsx`

- `Signup()` — the form. Two branches driven by "Are you a current Netic client?":
  - **Yes** → name + email
  - **Not yet** → name + company + email + revenue + industry
  - Plus an optional **Primary service area (city)** field shown for both.
  - Submit currently routes to a front-end confirmation screen — **there is no backend
    yet**. Wire `submit()` to your API / CRM to persist leads.
- `Hero()` — the right-hand brand panel (headline, CTA, illustrative bento cards + gauge).
- `Gauge()` — the semicircular visibility gauge (SVG). Band colors follow the rating scale:
  red `<20%`, amber `20–30%`, green `30%+`.

## Notes for engineering

- **Persistence is a TODO.** `submit()` in `app/page.tsx` validates and shows a confirmation
  but does not POST anywhere. Hook it up to wherever leads should land (Supabase, HubSpot, etc.).
  Fields available: first/last name, company email, company name, revenue, industry,
  primary service area, and `isClient` (current client vs new).
- Styling lives entirely in `app/styles.ts` as a template string (CSS custom properties at the
  top under `:root`). Easy to theme without a CSS framework.
- Copy is inline in `app/page.tsx`.
