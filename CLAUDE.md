# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JTC is a frontend-only React web application. There is no backend — all content is static. The `backend/` folder exists but is not used.

## Dev Commands

```powershell
cd frontend
npm run dev      # Vite dev server on port 3000 with HMR
npm run build    # production build to frontend/dist
npm run preview  # preview the production build locally
```

## Architecture

Single React app built with Vite. Routing is handled client-side with `react-router-dom`.

**Routes:**

| Path | Component |
|------|-----------|
| `/` | Holding page (`App.jsx` → `HoldingPage`) |
| `/who-we-are` | `src/pages/WhoWeAre.jsx` |
| `/services` | `src/pages/Services.jsx` |
| `/testimonials` | `src/pages/Testimonials.jsx` |
| `/contact-us` | `src/pages/ContactUs.jsx` |

**Styling** uses plain CSS (`App.css`, `index.css`) — no framework. Dark theme with a radial gradient background and a `background-clip: text` gradient heading on the holding page.

**Navigation** is in `src/TopNav.jsx` (nav items array) and `src/Logo.jsx` (links to `/`).

## Deployment

Build output is `frontend/dist/` — deploy this folder to any static host (IONOS, Vercel, Netlify, etc.). Ensure the host is configured to redirect all routes to `index.html` to support React Router.
