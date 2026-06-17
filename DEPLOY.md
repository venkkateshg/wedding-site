# Deployment Guide

## Option A — GitHub Pages

### Prerequisites
- GitHub account
- Repository pushed to GitHub

### Steps

1. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repo on GitHub
   - Click **Settings** → **Pages** (left sidebar)
   - Under "Build and deployment", set Source to **GitHub Actions**
   - Click Save

3. **Push to `main` to trigger deploy**
   ```bash
   git push origin main
   ```

4. **Check the workflow**
   - Go to your repo → **Actions** tab
   - Watch the "Deploy to GitHub Pages" workflow run
   - Once green, your site is live

5. **Find your URL**
   - Settings → Pages → your URL will be shown:
     `https://<your-username>.github.io/<repo-name>/`

> The `VITE_BASE_PATH` is set automatically to `/<repo-name>/` by the workflow — no manual config needed.

---

## Option B — Azure Static Web Apps

### Prerequisites
- Azure account (free tier works)
- GitHub repository (Azure pulls from it)

### Steps

1. **Push your code to GitHub** (same as step 1 above)

2. **Create an Azure Static Web App**
   - Go to [portal.azure.com](https://portal.azure.com)
   - Search for **Static Web Apps** → **Create**
   - Fill in:
     - **Subscription** / **Resource Group** — create new or use existing
     - **Name** — e.g. `noona-venkkat-wedding`
     - **Region** — pick closest to you
     - **Plan type** — Free
   - Under "Deployment details":
     - **Source** → GitHub
     - Click **Sign in with GitHub** and authorize
     - Select your **Organization**, **Repository**, and **Branch** (`main`)
   - Under "Build details":
     - **Build Presets** → Custom
     - **App location** → `/`
     - **Output location** → `dist`
   - Click **Review + Create** → **Create**

3. **Copy the deployment token**
   - Once created, go to the resource
   - Click **Manage deployment token** (Overview page)
   - Copy the token

4. **Add the token to GitHub secrets**
   - Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: paste the token
   - Click **Add secret**

5. **Trigger a deploy**
   - Push any commit to `main`:
     ```bash
     git commit --allow-empty -m "trigger deploy"
     git push origin main
     ```
   - Go to GitHub **Actions** → watch "Deploy to Azure Static Web Apps" run

6. **Find your URL**
   - Back in Azure portal → your Static Web App → **Overview**
   - URL is shown, e.g. `https://gentle-rock-12345.azurestaticapps.net`

> The `VITE_BASE_PATH` is set to `/` for Azure — no manual config needed.

---

## Switching between the two

Both workflows watch the `main` branch. If you want only one active:
- Delete or rename the other workflow file in `.github/workflows/`
- Or add a `[skip azure]` / `[skip pages]` convention via an `if:` condition

## Custom domain (both platforms)

- **GitHub Pages**: Settings → Pages → Custom domain → enter your domain → add a CNAME record at your DNS provider pointing to `<username>.github.io`
- **Azure**: Static Web App → Custom domains → Add → follow the DNS verification steps
