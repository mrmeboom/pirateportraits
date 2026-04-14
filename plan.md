# Fitzroy Pirate Portraits — Build Plan

## Overview

A single-page portrait gallery website for an internal team. Each team member has a still image and a short animated video. On hover, the still crossfades into the video. The page is organised by department, with a special spotlight for the office manager (Floortje).

Hosted on GitHub, deployed via Vercel. No framework, no build step — plain HTML, CSS, and vanilla JS.

---

## Stack

- **HTML/CSS/JS** — no framework, no bundler
- **Fonts** — Stardom (custom, self-hosted) + Cormorant Garamond (Google Fonts)
- **Hosting** — GitHub repo → Vercel (static deploy)
- **No dependencies**

---

## Folder Structure

```
fitzroy/
├── index.html
├── style.css
├── data.js
├── assets/
│   ├── fonts/
│   │   ├── Stardom-Regular.woff2       ← add your font files here
│   │   └── Stardom-Regular.woff        ← fallback
│   ├── images/
│   │   ├── floortje.jpg                ← 540×720 still portraits
│   │   ├── jur.jpg
│   │   └── ... (one per person)
│   └── videos/
│       ├── floortje.mp4                ← 5s animated portraits
│       ├── jur.mp4
│       └── ... (one per person)
└── plan.md
```

**File naming convention:** all lowercase first name, no spaces or special characters.
- `floortje.jpg` / `floortje.mp4`
- `orfee.jpg` / `orfee.mp4`
- Exception for duplicates: use `firstname_lastname_initial.jpg` if needed (there are none in current roster).

---

## Design System

### Colours
```css
--bg:       #3b2922;   /* page background */
--ink:      #aa7a3c;   /* all text, borders, accents */
--ink-dim:  rgba(170, 122, 60, 0.50);  /* secondary text, roles */
--ink-faint:rgba(170, 122, 60, 0.18);  /* divider lines, ghost text */
--card-bg:  rgba(0, 0, 0, 0.22);       /* portrait placeholder bg */
```

### Typography
```css
/* Display — titles, hero, department ghost text */
font-family: 'Stardom', 'Cormorant Garamond', Georgia, serif;

/* Body — names, roles, dividers, all UI text */
font-family: 'Cormorant Garamond', Georgia, serif;
```

**Font weights in use:**
- `300` italic — subtitle, roles, eyebrow labels
- `400` — person names
- `600` italic — Floortje's name, section display text

### Font setup (Stardom)
```css
@font-face {
  font-family: 'Stardom';
  src: url('./assets/fonts/Stardom-Regular.woff2') format('woff2'),
       url('./assets/fonts/Stardom-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

Apply Stardom to:
- `.hero .h-fitzroy` (the big "FITZROY" title)
- `.hero .h-pirate` ("Pirate Portraits" subtitle)
- `.dept .ghost` (large background watermark text per department)
- `.queen .q-name` (Floortje's name)

Everything else stays in Cormorant Garamond.

---

## Page Structure

```
<header>          Hero — Fitzroy / Pirate Portraits / tagline
<main>
  <section>       Floortje spotlight (centred, solo portrait)
  <section>       Divider — "the court"
  <section>       Management (3 people)
  <section>       Strategy (3 people)
  <section>       Project Management (5 people)
  <section>       Design (4 people)
  <section>       Creative (8 people)
  <section>       Divider — "gone but not forgotten"
  <section>       Pirates of the Past (3 people, faded)
<footer>
```

---

## Portrait Card Component

Each portrait card contains:
1. A `<img>` still (loads immediately, visible by default)
2. A `<video>` (muted, loop, preload="none", hidden by default)
3. On hover: still fades out (opacity 0), video fades in (opacity 1) and begins playing
4. On mouse leave: video fades out, still fades back in, video pauses + resets to 0

```html
<div class="portrait-card" data-name="floortje">
  <div class="portrait-media">
    <img src="./assets/images/floortje.jpg" alt="Floortje" class="still" />
    <video
      src="./assets/videos/floortje.mp4"
      class="anim"
      muted
      loop
      playsinline
      preload="none"
    ></video>
  </div>
  <div class="portrait-label">
    <span class="name">Floortje</span>
    <span class="role">Sovereign of the Seven Tides</span>
  </div>
</div>
```

**CSS for the crossfade:**
```css
.portrait-media {
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  background: var(--card-bg);
}

.portrait-media img,
.portrait-media video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}

.portrait-media video {
  opacity: 0;
}

.portrait-card:hover .portrait-media video {
  opacity: 1;
}

.portrait-card:hover .portrait-media img {
  opacity: 0;
}
```

**JS for video play/pause:**
```js
document.querySelectorAll('.portrait-card').forEach(card => {
  const video = card.querySelector('video');
  if (!video) return;

  card.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});
```

---

## Layout

The page content sits in a centred container:
```css
.wrap {
  max-width: 580px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

Portrait grids are always 3 columns:
```css
.portrait-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  row-gap: 20px;
}
```

No staggering or offset between cards — all portraits sit flush on the same baseline.

---

## Department Sections

Each department section has:
- A ghost watermark (large, very faint text behind the section heading)
- A section heading with a `✦` ornament and a ruled line
- A portrait grid

**Pirates of the Past** is a special case:
- Faded treatment: `opacity: 0.45` on cards, dimmer text
- Ghost watermark says "Legends"
- Preceded by its own divider: "gone but not forgotten"

---

## Floortje Spotlight

Floortje is centred above all departments with:
- Eyebrow: "✦ Her Royal Majesty ✦"
- Large italic name
- Uppercase spaced title beneath
- Portrait card at 200px wide, centred

She is **not** part of the 3-column grid.

---

## Generated from data.js

The page should be generated dynamically from `data.js` so the roster can be edited without touching HTML. See `data.js` for the full roster.

Render logic:
1. Loop through `roster` array
2. The first entry (Floortje, `spotlight: true`) renders as the queen section
3. All other departments render as standard grid sections
4. The `past: true` flag on the last department applies the faded class

---

## Deployment

1. Push to GitHub (public or private repo)
2. Import repo in Vercel
3. No build command needed — static output directory is `/` (root)
4. Custom domain optional

---

## Performance Notes

- Images are 540×720 — fine to ship as-is, but consider running through `squoosh` or `imageoptim` before launch
- Videos are a few MB each — `preload="none"` ensures they only load on hover
- Cormorant Garamond loads from Google Fonts CDN; Stardom is self-hosted with `font-display: swap`
- No JS framework = fast first paint

---

## What Windsurf needs to do

1. Create the folder structure above
2. Implement `index.html` driven by `data.js`
3. Implement `style.css` using the design system above
4. Wire up the hover video interaction with the JS snippet above
5. Add `@font-face` for Stardom (font files will be dropped into `assets/fonts/` manually)
6. Swap all Playfair Display / Cormorant Garamond display usages to `'Stardom'` once font is confirmed
7. Test that videos play/pause correctly on hover and reset on leave
