/home/milan/coach-site/AGENTS.md

# Project: Milan Endurance Coaching Website (Next.js + SCSS, plain JS)

## Goal

Build a fast, minimal, high-trust coaching website that converts IG visitors into an intro call.
No testimonials required. No pretending. Scientific, calm tone.

## Tech Constraints (must follow)

- Next.js (plain JavaScript, NO TypeScript)
- Styling: SCSS only (no Tailwind, no styled-components, no UI libs)
- Keep dependencies minimal (avoid adding libraries unless truly necessary)
- Mobile-first, responsive
- Accessible basics (semantic HTML, readable contrast, keyboard focus)

## Output

Deliver a working Next.js project with:

- Home page with sections from SPEC.md
- Resources page (simple list/cards)
- Contact page or Contact section + route
- Reusable layout + header + footer
- SCSS structure with variables (colors, spacing, typography)
- Optimized hero image handling (desktop + mobile crops)

## Pages / Routes

- / (Home)
- /resources
- /contact

## Design Direction

- Clean, modern, lots of white space
- One primary accent color (blue recommended)
- Calm “sports science” feel
- Hero image with subtle dark overlay so white text is readable

## Content Rules

- Use copy from SPEC.md
- Do not invent fake testimonials or client results
- Keep triathlon included but not leading (run/bike slightly leading)
- Add "Continuous Development" mention (INSCYD + ongoing study) in a confident, non-apologetic way

## Image Assets

Use these files as hero images (place in /public):

- hero_desktop.(webp/png) (you will provide)
- hero_mobile_1080x1350.webp
- hero_mobile_1080x1920.webp

## Build Steps

1. Create Next.js app (JS) and configure SCSS
2. Implement layout + navigation
3. Build Home sections in order from SPEC.md
4. Build Resources page
5. Build Contact page with:
   - CTA button (Calendly link placeholder or mailto)
   - Simple form (optional) or just contact buttons
6. Make sure pages pass basic Lighthouse-level checks (fast, responsive)

## Deliverables Checklist

- [ ] Runs with `npm run dev`
- [ ] SCSS works and is organized
- [ ] Mobile layout looks great
- [ ] Clear CTA present above fold + bottom
- [ ] No unnecessary packages added

## i18n Routing (must follow)

Use Next.js App Router with locale segment:

- app/[locale]/page.js (Home)
- app/[locale]/resources/page.js
- app/[locale]/contact/page.js

Implement translations using simple JSON dictionaries:

- /src/i18n/en.json
- /src/i18n/sr.json (Latin)

Add a tiny helper:

- /src/i18n/t.js to read strings by key.

## Contact Form (no backend required v1)

Implement form submission using:

- mailto fallback (pre-filled subject/body), OR
- a simple "copy email" + instructions, OR
- optional API route if you prefer (but keep minimal).
  Must include timezone field and preferred contact method.

## CTA

All "Book intro call" buttons link to a Calendly URL placeholder:

- const CALENDLY_URL = "https://calendly.com/YOUR_HANDLE/intro-call";
