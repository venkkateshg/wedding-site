# Wedding App — Design Spec
Date: 2026-06-16

## Goal
Convert the static prototype (`Prototype/Wedding Site.dc.html`) into a React + Vite + Tailwind app that is **fully reusable for any couple** by editing a single JSON config (content/theme/events) and swapping images — no code changes required. Must build cleanly to either Azure Static Web Apps or GitHub Pages.

## Tech Stack
- React 18 (function components + hooks)
- Vite (build tool, dev server)
- Tailwind CSS v3 for layout/spacing/typography/responsive utilities
- No backend — pure static SPA, single page with anchor-link nav (matches prototype: `#hero #story #couple #events #info #rsvp`)
- No router library needed (single page, in-page anchors only)

## Config & Content
All couple-specific content lives in **`src/config/wedding.config.json`**. Images live in `src/assets/` and are referenced from the JSON by a key resolved in a small `assets.js` map (Vite needs static `import` for bundled images, so JSON stores logical keys like `"bride"`, `"groom"`, `"couple"`, and `assets.js` maps key → `import.meta` resolved path).

### JSON schema (shape, not final values)
```json
{
  "couple": {
    "brideName": "Noodhana", "brideNickname": "Noona",
    "groomName": "Venkkatesh", "groomNickname": "Venkkat",
    "brideBio": "...", "groomBio": "...",
    "brideImageKey": "bride", "groomImageKey": "groom", "coupleImageKey": "couple"
  },
  "wedding": {
    "dateTimeUtc": "2026-08-31T00:30:00Z",
    "displayDate": "31st August · 2026",
    "primaryVenue": "Sree Kailash Mahal · Chennai"
  },
  "theme": {
    "colorBg": "#FBF5EE", "colorAccent": "#C4787E", "colorText": "#2C1A12",
    "colorMuted": "#8B6355", "colorBorder": "#EAD8C8",
    "fontDisplay": "'Great Vibes', cursive",
    "fontSerif": "'Cormorant Garamond', serif",
    "fontSans": "'DM Sans', sans-serif"
  },
  "story": {
    "heading": "How it began",
    "chapters": [ { "label": "Chapter One", "title": "The Beginning", "body": "..." } ]
  },
  "locations": [
    {
      "name": "Chennai",
      "events": [
        { "title": "Reception", "date": "30th August", "year": "2026", "time": "6:00 PM onwards", "venue": "Sree Kailash Mahal, Chennai", "mapUrl": "https://maps.app.goo.gl/..." }
      ]
    }
  ],
  "infoCards": {
    "dressCode": { "enabled": true, "title": "Dress Code", "body": "..." },
    "giftRegistry": {
      "enabled": true,
      "title": "Gift Registry",
      "intro": "Your presence is the greatest gift...",
      "items": [
        { "label": "Amazon Registry", "url": "https://...", "note": "" },
        { "label": "Bank Transfer", "url": "", "note": "Account details on request" }
      ]
    },
    "travelStay": {
      "enabled": true,
      "title": "Travel & Stay",
      "hotels": [
        { "name": "Hotel ABC", "address": "...", "link": "https://...", "note": "10 min from venue" }
      ]
    },
    "songDedications": { "enabled": true, "title": "Song Dedications", "body": "..." }
  },
  "rsvp": {
    "deadlineText": "Kindly respond by 15th August 2026.",
    "googleForm": {
      "actionUrl": "https://docs.google.com/forms/d/e/FORM_ID/formResponse",
      "entryIds": { "name": "entry.111", "email": "entry.222", "attending": "entry.333", "guests": "entry.444", "dietary": "entry.555", "song": "entry.666" }
    }
  },
  "footer": { "tagline": "Made with love ♥" }
}
```
`infoCards` is a fixed-key object (not an array) — one entry per card type (`dressCode`, `giftRegistry`, `travelStay`, `songDedications`). Each has an `enabled` flag; disabled cards are skipped entirely at render (no DOM, no grid gap). Icons per card type are a small fixed set of inline SVG components shipped in code — icons are visual assets, not content, so they stay code-side; adding a brand-new card type is a (rare) code change, but toggling/configuring existing ones is JSON-only.

## Component Breakdown
- `App.jsx` — loads config, wraps everything in `ThemeProvider`
- `ThemeProvider` — on mount, sets CSS custom properties (`--color-accent` etc, `--font-display` etc) on `document.documentElement` from `config.theme`. Tailwind classes elsewhere use arbitrary values referencing these vars, e.g. `text-[var(--color-accent)]`. This is the single mechanism for couple-specific palette/fonts — no Tailwind config regeneration needed.
- `Layout` — Nav + Footer wrapper, renders children (sections) between them
- `Nav` — anchor links, scroll-aware background (replicates prototype's `navScrolled` state via a `useScrollY` hook)
- `Hero` — names, date, venue, `useCountdown` hook output
- `useCountdown(targetIso)` — hook, returns `{days,hours,mins,secs}`, ticks every second, cleans up on unmount
- `OurStory` — couple portrait image + dynamic chapters timeline (`config.story.chapters.map`)
- `Couple` — bride card + groom card (now both have real photos, no placeholder state needed)
- `Events` — dynamic `config.locations.map(location => location.events.map(...))`, generic card renderer, no hardcoded city names
- `InfoCards` — grid renderer that iterates the 4 fixed card-type keys in `config.infoCards`, skips any with `enabled:false`, renders `DressCodeCard` (plain title+body) / `GiftRegistryCard` (intro + items list of label/url/note) / `TravelStayCard` (hotels list) / `SongDedicationsCard` (plain title+body) as small sub-components
- `RsvpForm` — controlled form (name/email/attending/guests/dietary/song), client-side validation (name required, email format) matching prototype's `handleSubmit` logic, on valid submit: fire `fetch(actionUrl, {method:'POST', mode:'no-cors', body: URLSearchParams(mapped entryIds)})` then optimistically show success state regardless of response (Google Forms doesn't allow reading cross-origin response; no-cors fetch is fire-and-forget). Show success/thank-you panel exactly like prototype's `rsvpSubmitted` branch.
- `Footer` — names, date/venue, tagline

Each component imports `config` directly (or via a tiny `useConfig()` context hook) and reads only its own slice — no prop-drilling the entire JSON tree through every layer.

## Styling Approach
Tailwind utility classes for all layout, spacing, flex/grid, responsive breakpoints, and structural CSS (replacing prototype's inline `style={{display:flex,...}}`). Couple-specific values (colors, fonts) come from CSS vars set by `ThemeProvider`, referenced via Tailwind's arbitrary-value syntax. Animations (`fadeUp`, `secTick`, `bounce`) ported as Tailwind `@layer utilities` keyframes in `index.css`, applied via class names.

## Deployment
Two GitHub Actions workflows, both present from day one, inactive until the user wires up the relevant secret/setting:
- `.github/workflows/deploy-azure.yml` — builds with `base=/`, deploys to Azure Static Web Apps using `Azure/static-web-apps-deploy@v1`, requires `AZURE_STATIC_WEB_APPS_API_TOKEN` repo secret.
- `.github/workflows/deploy-gh-pages.yml` — builds with `base=/<repo-name>/` (read from `github.event.repository.name` at build time via env var `VITE_BASE_PATH`), publishes via `actions/upload-pages-artifact` + `actions/deploy-pages`.
- `vite.config.js` reads `base: process.env.VITE_BASE_PATH || '/'` so local dev and Azure both default to root.
- Root `README.md` documents: how to edit `wedding.config.json`, how to swap images in `src/assets`, how to fill in the Google Form action URL + entry IDs, and how to enable each deploy target.

## Error Handling / Edge Cases
- Countdown past target date → all fields show `00` (matches prototype)
- RSVP validation errors shown inline (matches prototype's `rsvpError` state)
- Missing/malformed config values are not defensively handled — config is a build-time, trusted file edited by the site owner, not user input

## Out of Scope
- No backend/database for RSVP storage (Google Forms is the storage)
- No CMS or admin UI — config is hand-edited JSON
- No multi-language support
- No automated visual regression tests (manual run-and-screenshot verification only)

## Implementation Note
User asked to implement using "ruflo agent swarms" — the actual coding work will be parallelized across subagents per component (Hero, Story, Couple, Events, InfoCards, RsvpForm, Nav/Footer/Layout, config+theme plumbing, deploy workflows) once the implementation plan is written, since each component is independently boundaried per this design.
