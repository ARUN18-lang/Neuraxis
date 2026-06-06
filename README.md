# ZenX — Startup Landing Page

A light, premium, **editorial** landing page for **ZenX**, an engineering-first technology studio.

Built as a modern **React + Vite + Tailwind CSS v4 + Framer Motion** app — component-based, with smooth scroll-reveal and hover animations.

**Design:** warm paper/cream background, near-black ink, a bold ember-orange accent, **Fraunces** (high-contrast serif) for headlines + **Plus Jakarta Sans** for body. Lots of whitespace, hairline rules, and an editorial numbered services list.

## Tech stack

- **Vite** — fast dev server + build
- **React 18** — component architecture
- **Tailwind CSS v4** — styling (via `@tailwindcss/vite`)
- **Motion** (Framer Motion) — entrance, stagger, and hover animations

## Features

- **Splash / intro screen** — full-screen wordmark with a live 0→100% counter, then slides up to reveal the site (scroll locked while shown; near-instant with reduced-motion)
- **Hero** with staggered entrance, big serif headline, soft accent wash + editorial stat row
- **Marquee** — seamless infinite scrolling keywords (inverted ink ticker)
- **Services** — editorial numbered list with hairline dividers + hover reveal
- **Why ZenX** — 3-column highlight section with large serif numerals
- **Team** — 3 profile cards (Janath J, Arun M, Pari)
- **Contact** — Email / Call / WhatsApp channels + form (Name, Email, **Phone number**, Message) via **Web3Forms** (emails you directly, no database) with a `mailto:` fallback
- **Footer** + pulsing WhatsApp floating button
- Sticky blur navbar, animated mobile menu, fully responsive
- SEO + Open Graph + Twitter meta tags, respects `prefers-reduced-motion`

## Run locally

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## 🔧 Before going live — fill in your contact details

All contact info lives in one place: **`src/data/site.js`**. Replace the placeholders:

| Field          | Placeholder        | Replace with                                        |
| -------------- | ------------------ | --------------------------------------------------- |
| `email`        | `your@email.com`   | your real email                                     |
| `phoneDisplay` | `+91 XXXXX XXXXX`  | display phone number                                |
| `phoneLink`    | `+91XXXXXXXXXX`    | phone for the `tel:` link (digits + country code)   |
| `whatsapp`     | `91XXXXXXXXXX`     | WhatsApp number (digits only, incl. country code)   |

Team members, services, and marquee keywords also live in `src/data/site.js`.

> Note: the contact form's **Phone number** field is for the *visitor* to enter their number — that comes through in the inquiry. The placeholders above are *your* company's contact details.

## 📬 Contact form (Web3Forms — no database)

Submissions are emailed straight to your inbox via [Web3Forms](https://web3forms.com) (free tier).
No server, no database, no backend to maintain.

### Setup (~2 minutes)

1. Sign up at [web3forms.com](https://web3forms.com) and create a form.
2. Copy your **access key**.
3. Add it to `.env`:

```bash
cp .env.example .env
```

```
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

4. Restart the dev server (`npm run dev`).

When deploying (Vercel, Netlify, etc.), add the same env var in your host's dashboard.

Until the key is set, the form falls back to opening the visitor's mail app (`mailto:`).

## Deploy (free)

```bash
npx vercel --prod          # Vercel
```

**Netlify:** drag the `dist/` folder onto https://app.netlify.com/drop
**GitHub Pages:** push to a repo and serve the `dist/` build.

---

© ZenX. Built with precision. Shipped with speed.
