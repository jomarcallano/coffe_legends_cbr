# Coffee Legend — Landing Page

A professional landing page for Coffee Legend built with **React + Vite + Tailwind CSS**.

---

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling via `@tailwindcss/vite`
- **Lucide React** — icons

---

## Local Development

### Requirements

- Node.js **18 or higher**
- npm 9 or higher

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. This is what you upload to your server.

To preview the production build locally before uploading:

```bash
npm run preview
```

---

## Deploying to Virtualmin (Static Hosting)

### Step 1 — Build the project

On your local machine:

```bash
npm run build
```

This generates the `dist/` folder containing:
```
dist/
├── index.html
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    ├── Logo-[hash].png
    └── coverphoto-[hash].png
```

---

### Step 2 — Log in to Virtualmin

1. Open your Virtualmin control panel (e.g. `https://yourdomain.com:10000`)
2. Log in with your admin credentials
3. Select the **Virtual Server** (domain) you want to deploy to from the left sidebar

---

### Step 3 — Upload via File Manager

1. In Virtualmin, go to **File Manager** under your virtual server
2. Navigate to the `public_html` directory (this is the web root)
3. **Delete** any existing files in `public_html` (or back them up first)
4. Upload the **contents** of your local `dist/` folder — not the folder itself
   - Upload `index.html` directly into `public_html/`
   - Upload the entire `assets/` folder into `public_html/`

> **Tip:** You can also use FTP/SFTP. Connect with your Virtualmin credentials, navigate to `public_html/`, and transfer the contents of `dist/`.

---

### Step 4 — Verify Apache / Nginx is configured

The site uses only anchor-based navigation (`#menu`, `#location`) — no client-side routing — so no special server configuration is needed. The default `index.html` setup works out of the box.

If your virtual server shows a directory listing or a default page instead of the site, make sure:

- Apache: `DirectoryIndex index.html` is set (usually default)
- Nginx: `index index.html` is in your server block (usually default)

---

### Step 5 — Visit your domain

Open your domain in a browser. The Coffee Legend landing page should be live.

---

## Project Structure

```
src/
├── assets/
│   ├── Logo.png          # Brand logo (used in navbar + footer)
│   └── coverphoto.png    # Hero section cover photo
├── components/
│   ├── Navbar.jsx        # Fixed top navigation
│   ├── Hero.jsx          # Hero section with CTAs
│   ├── MarqueeStrip.jsx  # Scrolling brand ticker
│   ├── MenuSection.jsx   # Filterable product menu
│   ├── FindUs.jsx        # Location, hours, and map
│   └── Footer.jsx        # Dark footer with links and socials
├── App.jsx               # Root component, page layout
├── index.css             # Tailwind import + global styles
└── main.jsx              # React entry point
```

---

## Updating Content

| What to change | File |
|---|---|
| Menu items and prices | `src/components/MenuSection.jsx` — edit the `menuItems` array |
| Opening hours | `src/components/FindUs.jsx` — edit the `hours` array |
| Store address | `src/components/FindUs.jsx` — update the address text |
| Navbar links | `src/components/Navbar.jsx` — edit the `navLinks` array |
| Footer links | `src/components/Footer.jsx` — edit the `footerLinks` object |
| Brand ticker text | `src/components/MarqueeStrip.jsx` — edit the `items` array |

After any change, run `npm run build` again and re-upload the `dist/` folder.
