# MARINA Jekyll theme starter

A one-page Jekyll starter based on the supplied dataset landing-page design. It uses Tailwind CSS 3 and daisyUI 4. Editors manage homepage content from the clearly commented front matter in `index.md`, while site-wide header, navigation, and footer settings live in `_data/site.yml`.

## Run locally

Requirements: Ruby 3+, Bundler, and Node 18+.

```bash
bundle install
npm install
npm run dev
```

Open `http://127.0.0.1:4000` or `http://localhost:4000`.

## Production build

```bash
npm run build
```

The generated site will be in `_site/`.

## Editing content

- `index.md` — the single content-editing file for the homepage
- `_data/site.yml` — site-wide branding, navigation, header CTA, and footer organization
- `_layouts/home.html` — protected page structure and Liquid templates
- `tailwind.config.js` — brand colors and the daisyUI theme
- `assets/css/tailwind.css` — reusable Tailwind component classes
- `_includes/header.html` and `_includes/footer.html` — shared chrome
- `assets/js/navigation.js` — reveals the separate fixed navigation after the hero tiles scroll away

Keep URLs beginning with `#` in quotation marks, for example `url: "#overview"`. For button styles, use only `primary` or `outline`.
