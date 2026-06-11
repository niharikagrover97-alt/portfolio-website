# Niharika Grover — UX Research & Design Portfolio

A breathable, editorial personal portfolio for a UX researcher & designer with a fine art background. White + light sage + light beige palette, Fraunces serif + Inter sans typography. Plain HTML/CSS/JS — no build step, no dependencies.

## Structure

| File | Purpose |
|---|---|
| `index.html` | Homepage: hero, case studies, why me, methods, about teaser, contact |
| `about.html` | About page with bio, facts, and resume download button |
| `case-study-checkout.html` | Case study 1 — usability testing (placeholder) |
| `case-study-diary.html` | Case study 2 — diary study (placeholder) |
| `case-study-foundational.html` | Case study 3 — mixed-methods foundational research (placeholder) |
| `styles.css` | All styling (colors, typography, layout) |
| `script.js` | Scroll-reveal animation + case-study scrollspy navigation |

## Replacing placeholder content

Search for `TODO` comments in the HTML files — every piece of placeholder content is marked. Key spots:

- **Hero statement and bio** in `index.html` and `about.html`
- **Resume**: drop your PDF at `assets/resume.pdf` (the About page button links to it)
- **Case studies**: each page follows a research-report structure (background → research questions → methodology → insights → impact → reflections). Swap in your real projects.
- **Images**: gray SVG placeholders are used everywhere an image belongs. Replace them with `<img>` tags pointing to files in an `assets/` folder.
- **Links**: LinkedIn and resume links in the footer.

## Changing the look

All colors and fonts are CSS variables at the top of `styles.css` (`:root`). Change `--accent` for a different accent color, or swap the Google Fonts link in each HTML file to change typography.

## Previewing locally

Open `index.html` in a browser, or run a simple server:

```bash
python3 -m http.server 8000
```

## Deploying

Works as-is on GitHub Pages, Vercel, Netlify, or any static host.
