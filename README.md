# Smart DT Guide

A mobile-first web app that guides Politeknik Malaysia students through the five
phases of Design Thinking — from **Empathise** to **Test** — built for the
CAMP21: Synergising Literacies 2026 programme.

Students register a team, work through each phase with structured templates,
and track their progress toward a final pitch. The app is fully static
(HTML/CSS/JS + `localStorage`), so it runs anywhere GitHub Pages can serve it —
no server, no build step.

---

## Status

Early build, in active development, page by page. Live pages so far:

| Page | File | Purpose |
|------|------|---------|
| Style guide | `index.html` | Living reference for the design system (colors, type, components) |
| Welcome | `welcome.html` | Landing screen — logo, tagline, phase preview, Get started |
| Register | `registration.html` | Create a team account (name, email, reg no, class, project, team) |
| Sign in | `login.html` | Return to a saved account |

Planned next: dashboard, phase journey screens (T-templates), progress, profile.

---

## Design system

The whole app is built from **one stylesheet**: [`css/smartdt-guide.css`](css/smartdt-guide.css).

Every page links it and composes from its components — there are no per-page
copies of shared styles, so a change made once updates everywhere. Open
`index.html` to see every token and component rendered live.

**Theme:** dark, vibrant tech. **Type:** Poppins throughout.

Core color tokens:

| Token | Hex | Role |
|-------|-----|------|
| `--orange` | `#F5811F` | Brand ("Smart"), primary CTA |
| `--teal` | `#12C7CE` | Brand ("DT"), links, success |
| `--yellow` | `#FBB80A` | Brand ("Guide"), highlights |
| `--electric` | `#3A7BFF` | Primary actions |
| `--purple` | `#6B47F5` | Secondary, gradients |
| `--pink` | `#E24CC4` | Accent, alerts |
| `--ink` | `#0C0F1A` | App background |

**Rule of thumb:** never hardcode a color, radius, or shadow in a page — use the
`var(--token)` values. New pages link Poppins, then `smartdt-guide.css`, and
build inside `.app` → `.header` + `.page` + `.bottom-nav`.

---

## Project structure

```
smart-dt-guide/
├── index.html            # design-system style guide
├── welcome.html          # landing screen
├── registration.html     # create account
├── login.html            # sign in
├── css/
│   └── smartdt-guide.css # master design system (single source of truth)
└── assets/
    ├── brand/            # logo.png, logo-full.png
    ├── img/              # welcome-hero.png
    └── icons/            # phase-*.png (empathise, define, ideate, prototype, test)
```

---

## Data & storage

The app stores everything in the browser via `localStorage`. Account fields
(shared key names for compatibility):

`df_student_name`, `df_email`, `df_reg_no`, `df_class`, `df_project_name`,
`df_team`, `df_registered`

There is no backend and no real authentication — sign-in matches the details
saved on the same device. This is intentional for a pilot/event tool. Data lives
only on the device unless a sync layer (e.g. Google Sheets) is added later.

---

## Running locally

It's a static site — just open `welcome.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000/welcome.html
```

---

## Deploying on GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source → Deploy from a branch.**
3. Branch: `main`, folder: `/ (root)` → **Save.**
4. After it builds, the app is live at
   `https://<username>.github.io/smart-dt-guide/welcome.html`.

> "Deploy from a branch" is recommended over GitHub Actions for this project —
> it's a plain static site with no build step, so the simpler pipeline is more
> reliable.

---

## Credits

Created and developed by **Julie Marlina binti Hasan**, Politeknik Port Dickson,
for CAMP21: Synergising Literacies 2026.

© 2026 Smart DT Guide.
