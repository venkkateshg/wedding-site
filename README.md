# Wedding App — Noona & Venkkat

A fully reusable React + Vite + Tailwind wedding website. Change one JSON file to make it yours.

## Customising for your wedding

### 1. Edit content

Open `src/config/wedding.config.json` and fill in:

- `couple` — names, nicknames, bios, image keys
- `wedding` — ISO date/time (UTC), display date, venue
- `theme` — colors and font families (CSS var names stay the same)
- `story` — heading and chapters array
- `locations` — array of locations, each with an events array
- `infoCards` — set `enabled: false` to hide any card; fill in body/items/hotels
- `rsvp` — deadline text, Google Form action URL and entry IDs
- `footer` — tagline

### 2. Swap images

Replace the three files in `Assets/`:

| File | Used for |
|------|----------|
| `Bride Picture.jpeg` | Bride photo (couple section + story) |
| `Groom Picture.jpeg` | Groom photo (couple section) |
| `Couple Picture Portrait.jpeg` | Couple portrait (story section) |

Keep the same filenames, or update the filename in `src/assets.js` to match.

### 3. Wire up the RSVP form (Google Forms)

1. Create a Google Form with fields: Name, Email, Attending, Guests, Dietary, Song
2. Get the form's submission URL:
   - Open the form → ⋮ → Get pre-filled link → fill dummy values → Get link
   - The URL base (before `?`) is your `actionUrl`
3. Extract `entry.XXXXXXX` IDs from the pre-filled URL's query params
4. Paste into `src/config/wedding.config.json` → `rsvp.googleForm`

If `actionUrl` is left empty, the form still shows the success state after submit (no data sent).

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Deployment

Two GitHub Actions workflows are included. Only one needs to be active at a time.

### Option A — Azure Static Web Apps

1. Create an Azure Static Web Apps resource in the Azure Portal
2. Copy the deployment token
3. Add it as a GitHub repo secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`
4. Push to `main` — the `deploy-azure.yml` workflow fires automatically

### Option B — GitHub Pages

1. Go to repo Settings → Pages → Source → **GitHub Actions**
2. Push to `main` — the `deploy-gh-pages.yml` workflow fires automatically
3. Your site will be at `https://<username>.github.io/<repo-name>/`

The `VITE_BASE_PATH` env var is set automatically by each workflow (`/` for Azure, `/<repo-name>/` for Pages).
