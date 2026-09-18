# 鮨 白波 / SHIRANAMI

A fictional Edomae sushi restaurant site inspired by the quiet, photography-led layout of high-end Japanese restaurant sites (e.g. Sushi Kanesaka). Original copy and branding — not an official or copied site.

Repo: https://github.com/choihead1031/shiranami-sushi

## Stack

- Vite
- Static HTML / CSS / JS
- Ready for Netlify

## Local

```bash
git clone https://github.com/choihead1031/shiranami-sushi.git
cd shiranami-sushi
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Netlify

1. Log in at https://www.netlify.com
2. Add new site → Import from Git → GitHub → `choihead1031/shiranami-sushi`
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

`netlify.toml` already sets those values. Every push to `main` rebuilds the live site.
