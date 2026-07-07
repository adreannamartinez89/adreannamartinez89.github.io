# adreannamartinez89.github.io

Personal portfolio site — React + Vite, fully responsive, showcasing both software engineering and graphic design work. Deploys automatically to [adreannamartinez89.github.io](https://adreannamartinez89.github.io) via GitHub Pages.

## Sections

- **Hero** — name, title, and a short professional summary
- **Skills** — grouped by programming, frameworks/tools, and design
- **Selected work** — cards linking to [taskflow](https://github.com/adreannamartinez89/taskflow) and [brand-identity-toolkit](https://github.com/adreannamartinez89/brand-identity-toolkit)
- **Experience** — work history, education, and certifications
- **Contact** — email + GitHub

## Before publishing

Replace the placeholder email in `src/components/Contact.jsx` (`CONTACT_EMAIL`) with a real one.

## Getting started

```bash
npm install
npm run dev
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the Vite site and publishes it via GitHub Pages. In the repo settings, set **Pages → Source** to "GitHub Actions" once the first workflow run completes.
