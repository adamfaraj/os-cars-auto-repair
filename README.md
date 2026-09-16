# Os-car's Auto Repair

Marketing homepage for Os-car's Auto Repair, an auto repair shop and official NC inspection station in Durham, NC.

## Stack

Static HTML/CSS/JS, built with [Vite](https://vitejs.dev) (no framework — just bundling, asset hashing, and a dev server).

## Project structure

```
src/            source files (Vite root)
  index.html
  css/styles.css
  js/main.js
public/         static assets copied as-is to the site root (logo, favicons)
dist/           production build output (generated, not committed)
```

## Local development

```
npm install
npm run dev       # local dev server with live reload
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Deployment (AWS Amplify)

This repo deploys to AWS Amplify Hosting via `amplify.yml` at the project root:

- Build command: `npm run build`
- Publish directory: `dist`

Connect the repo in the Amplify console and it will pick up `amplify.yml` automatically — no extra configuration needed.

## Updating the booking link

The "Book Us on Kuruma" button URL is set in one place: the `KURUMA_URL` constant at the top of `src/js/main.js`. It currently points to `https://kurumaworks.com/mechanics/nc/durham/os-cars-auto-repair`; update it there if the shop id/URL ever changes.
