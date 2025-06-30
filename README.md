# Hotel Management SaaS - Frontend (React)

A modern, modular frontend for a multi-tenant hotel management SaaS platform built with React, Bootstrap 5, and jQuery-based plugins.

---

## 🚀 Features

- Modular structure with reusable components
- Multi-tenant support with token-based authentication
- Responsive dashboard & management panels
- Integration with:
  - Bootstrap 5 for layout
  - jQuery plugins (Select2, Toastr, SweetAlert2)
  - Chart.js for analytics

---

## 📁 Folder Structure

See the detailed breakdown in `Frontend Setup Guide`, but highlights include:

```
/src
  /components     # Reusable UI components
  /pages          # Route-based pages
  /services       # Axios APIs
  /layouts        # Shared layouts (header, sidebar)
  /styles         # SCSS/CSS
```

---

## 🛠 Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/vireta/hotel-saas-frontend.git
   cd hotel-saas-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create `.env`:
   ```env
   REACT_APP_API_BASE_URL=https://api.vireta.com/
   REACT_APP_TOKEN_KEY=auth_token
   ```

4. Run dev server:
   ```bash
   npm start
   ```

---

## 🔑 Authentication

- JWT token-based auth
- Token stored in `localStorage`
- Axios interceptors attach token to headers automatically

---

## 🔧 Scripts

| Command         | Description                  |
|----------------|------------------------------|
| `npm start`     | Start dev server             |
| `npm run build` | Build production bundle      |
| `npm run lint`  | Lint JS/JSX files            |

---

## 🧪 Testing

Basic unit tests can be written using Jest + React Testing Library (optional).

---

## 📋 Git Branch Strategy

- `main` – Production
- `dev` – Staging/Integration
- `feature/*` – New features
- `bugfix/*` – Fixes

---

## 🤝 Contributing

1. Fork this repo
2. Create a feature branch
3. Commit with clear messages (`feat:`, `fix:` etc.)
4. Create a PR to `dev` branch

---

## 📞 Contact

For help, contact: [frontend@vireta.com](mailto:frontend@vireta.com)

---

## 📅 Last Updated

June 15, 2025
