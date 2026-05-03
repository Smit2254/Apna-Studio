# Apna Studio — Photography Portfolio Website

A modern, animated photography portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 🚀 Quick Start (Development)

### Prerequisites
- Node.js 18+ installed ([nodejs.org](https://nodejs.org))

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

---

## ✏️ How to Update Content (No Coding Needed!)

**All website content lives in one file:**

```
src/data/content.js
```

Open it in any text editor (Notepad, VS Code, etc.) and change:

| What to change | Where |
|---|---|
| Studio name, phone, email | `siteConfig` at top |
| Social media links | `siteConfig.social` |
| Hero slideshow images | `heroSlides` array |
| About section text & stats | `about` object |
| Services / prices | `services` array |
| Gallery photos | `galleryImages` array |
| Client testimonials | `testimonials` array |

### Adding a new gallery photo

Find the `galleryImages` array and add a new entry:

```js
{ id: 13, category: "Weddings", src: "https://your-image-url.com/photo.jpg", alt: "Description" },
```

**Categories must be one of:** `Weddings`, `Pre-Wedding`, `Portraits`, `Events`

### Changing the color scheme

Open `tailwind.config.js`. The `gold` and `rose` colors drive the brand. Change the hex values to your preferred palette.

---

## 📋 Google Sheets Contact Form Setup

1. Create a new **Google Sheet** with columns: `Name | Email | Phone | Message | Date`
2. Go to **Extensions → Apps Script**
3. Paste this code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.name,
    data.email,
    data.phone,
    data.message,
    data.submittedAt
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Deploy → New Deployment → Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the deployment URL
6. Paste it in `src/data/content.js`:

```js
formEndpoint: "https://script.google.com/macros/s/YOUR_ID/exec",
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended — Free)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Done! Your site will be live at `yourproject.vercel.app`.

### Option 2: Netlify (Free)

```bash
npm run build
```

Drag and drop the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

### Option 3: GitHub Pages

```bash
npm run build
# Then push the `dist/` folder to a GitHub repo
# Enable GitHub Pages in repo Settings → Pages
```

---

## 📁 Project Structure

```
apna-studio/
├── index.html                 # SEO meta tags here
├── src/
│   ├── data/
│   │   └── content.js         # ← EDIT THIS for all content
│   ├── pages/
│   │   ├── Home.jsx           # Landing page (hero, about, services, testimonials)
│   │   ├── Gallery.jsx        # Photo grid with filters + lightbox
│   │   └── Contact.jsx        # Contact form
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageWrapper.jsx    # Page transition wrapper
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx                # Router setup
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles + Tailwind
├── tailwind.config.js         # Colors & fonts
├── vite.config.js
└── package.json
```

---

## 🎨 Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Dev server + build tool |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| React Router | Page routing |
| Lucide React | Icons |

---

## 📸 Replacing Placeholder Images

Currently uses free Unsplash images. To use your own photos:

1. Upload images to a hosting service (Cloudinary, Google Drive public link, your own server)
2. Get the direct image URL (ending in `.jpg` / `.webp` / `.png`)
3. Replace the `src` values in `galleryImages` inside `content.js`

**Recommended image sizes:**
- Hero slides: 1600×900px
- Gallery: 800×600px
- About: 900×1100px

---

## ⚡ Performance Tips

- Use `.webp` format for images (smaller file size, faster loading)
- Compress images at [squoosh.app](https://squoosh.app) before uploading
- The site already uses lazy loading for gallery images

---

## 🆘 Need Help?

Contact your developer or refer to:
- [Vite Docs](https://vitejs.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
