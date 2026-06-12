# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JTC is a holding-page web application. It consists of a React frontend (Vite) and a Node.js/Express backend running as two separate processes.

## Dev Commands

**Backend** (port 3001):
```powershell
cd backend
npm start        # production
npm run dev      # nodemon watch mode
```

**Frontend** (port 3000):
```powershell
cd frontend
npm run dev      # Vite dev server with HMR
npm run build    # production build to frontend/dist
npm run preview  # preview the production build
```

Both must run simultaneously for full functionality. The Vite dev server proxies all `/api/*` requests to the backend on port 3001.

## Architecture

The frontend and backend are completely separate Node projects (`frontend/package.json`, `backend/package.json`) with no shared code or monorepo tooling.

**Data flow:** `App.jsx` fetches `GET /api/hello` on mount → Express returns `{ message: "JTC" }` → displayed as the page heading. The fetch has a silent catch that falls back to the static string "JTC", so the UI works even if the backend is down.

**API routes** are all defined directly in `backend/server.js`. There is no router layer yet.

**Styling** uses plain CSS files (`App.css`, `index.css`) — no CSS framework or preprocessor. The holding page uses a dark radial gradient background with a CSS `background-clip: text` gradient heading.

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT`   | `3001`  | Backend listening port |
