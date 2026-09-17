# BLAK MEYD — Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/blak-meyd/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.
>
> ⚠️ DO NOT use any colours from the auto-generated suggestions (navy/blue). Use ONLY the palette below.

---

**Project:** Blak Meyd
**Category:** Luxury Bespoke Fashion Atelier (Ghanaian)
**Stack:** Next.js 15 · Tailwind CSS v4 · Framer Motion · GSAP · Supabase · Paystack
**Updated:** 2026-09-14

---

## Brand Colour Palette

| Role | Name | Hex | Tailwind Token | Usage |
|------|------|-----|----------------|-------|
| Background | Ivory | `#FBF9F4` | `--color-ivory` | Primary background, cards, surfaces |
| Foreground | Ink | `#15150F` | `--color-ink` | All body text, headings |
| Brand / Hero | Emerald | `#0E3B2E` | `--color-emerald` | CTAs, nav bg, section accents |
| Accent / CTA | Gold | `#B98A2E` | `--color-gold` | Buttons, highlights, decorative lines, hover states |
| Subtle Tint | Emerald Tint | `#E4ECE7` | `--color-emerald-tint` | Dividers, hover surfaces, soft backgrounds |

### Colour Usage Rules
- **Never** use Navy (#1E3A8A), Blue (#3B82F6), or any cool-toned blue family colours.
- Background is always **Ivory** (`#FBF9F4`) — not pure white (`#FFFFFF`).
- Body text is **Ink** (`#15150F`) — not black, not slate.
- Gold (`#B98A2E`) is the **only** accent/CTA colour.
- Emerald (`#0E3B2E`) is used for hero sections, filled nav, and major structural sections.
- Emerald Tint (`#E4ECE7`) is used for subtle dividers and hover backgrounds.

---

## Typography

| Role | Font | Weights | Source |
|------|------|---------|--------|
| Headings | **Fraunces** | 400, 500, 600, 700, 900 | Google Fonts |
| Body / UI | **General Sans** | 300, 400, 500, 600 | Fontshare (self-hosted) |

### Font Rules
- Fraunces is an **italic-first** optical sizing serif — use it for all H1–H3, hero copy, pull quotes.
- General Sans covers all body text, labels, buttons, nav items.
- **No Playfair Display, no Inter, no Montserrat, no Cormorant** — these were auto-suggested and are not this brand's fonts.

### Type Scale
| Level | Size | Weight | Font | Tracking |
|-------|------|--------|------|----------|
| Hero | 72–96px | 700–900 | Fraunces | -0.03em |
| H1 | 48–64px | 600–700 | Fraunces | -0.02em |
| H2 | 32–40px | 500–600 | Fraunces | -0.01em |
| H3 | 24–28px | 500 | Fraunces | 0 |
| Body Large | 18px | 400 | General Sans | 0 |
| Body | 16px | 400 | General Sans | 0 |
| Small / Label | 13–14px | 500 | General Sans | 0.02em |
| Micro | 11–12px | 500 | General Sans | 0.04em (uppercase) |

---

## Animation System

| Layer | Tool | Use Case |
|-------|------|----------|
| Page transitions | **Framer Motion** | Route-level fade/slide |
| Scroll effects | **GSAP + ScrollTrigger** | Parallax, reveal, pin, scrub |
| Micro-interactions | **Framer Motion** | Hover, tap, focus states |
| SVG animation | **GSAP** | Logo reveals, decorative paths |

### Animation Timing
- **Easing:** `cubic-bezier(0.25, 0.1, 0.25, 1)` for most transitions
- **Fast UI:** 150–200ms (hover states, dropdowns)
- **Medium:** 300–400ms (page element reveals, modals)
- **Slow / editorial:** 600–900ms (hero text reveals, full-bleed image fades)
- **Parallax scrub:** 0 duration, driven by scroll progress

### Rules
- All scroll animations MUST respect `prefers-reduced-motion` — use `useReducedMotion()` from Framer Motion
- Never scroll-jack — use GSAP `ScrollTrigger` with natural scroll only
- Stagger reveals: 0.08–0.12s between child elements
- Hero text: letter-by-letter or line-by-line reveal at 600–900ms

---

## Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight gaps, inline |
| `--space-sm` | 8px | Icon gaps |
| `--space-md` | 16px | Standard padding |
| `--space-lg` | 24px | Section padding |
| `--space-xl` | 32px | Large gaps |
| `--space-2xl` | 48px | Section margins |
| `--space-3xl` | 64px | Hero padding |
| `--space-4xl` | 96px | Full-bleed section vertical padding |

---

## Shadows & Effects

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 3px rgba(21,21,15,0.06)` | Subtle lift |
| `--shadow-md` | `0 4px 12px rgba(21,21,15,0.10)` | Cards |
| `--shadow-lg` | `0 12px 32px rgba(21,21,15,0.12)` | Modals, drawers |
| `--shadow-gold` | `0 4px 20px rgba(185,138,46,0.25)` | Gold CTA hover glow |
| `--shadow-emerald` | `0 4px 20px rgba(14,59,46,0.20)` | Emerald element glow |

### Glass / Frosted effects
- Use `backdrop-filter: blur(12px)` with `bg-ivory/80` for glassmorphism surfaces
- Always ensure text contrast ≥ 4.5:1 over glass backgrounds
- Ink text on ivory/glass: approved
- White text on Emerald: approved
- Gold text on Ink: approved

---

## Business Logic Constants

| Item | Value |
|------|-------|
| Consultation fee — Standard | GHS 200 |
| Consultation fee — Bridal | GHS 800 |
| Consultation fee policy | Non-refundable · Deducted from garment cost if proceeding |
| Express order threshold | < 14 working days |
| Express order surcharge | +50–100% of garment cost |
| Express payment | Full payment required upfront before production |
| WhatsApp number | +233 55 988 3589 |
| WhatsApp link | https://wa.me/233559883589 |
| Currency | GHS (Ghana Cedis) |
| Payment provider | Paystack (cards + MTN/Vodafone/AirtelTigo Mobile Money) |

---

## Component Specs

### Primary Button (Gold CTA)
```css
background: #B98A2E;
color: #FBF9F4;
padding: 14px 28px;
border-radius: 2px; /* intentionally sharp — editorial feel */
font: 500 13px/1 'General Sans';
letter-spacing: 0.08em;
text-transform: uppercase;
transition: all 200ms ease;
cursor: pointer;

:hover {
  background: #0E3B2E;
  box-shadow: 0 4px 20px rgba(185,138,46,0.25);
}
```

### Secondary Button (Outline)
```css
background: transparent;
color: #0E3B2E;
border: 1px solid #0E3B2E;
padding: 13px 27px;
border-radius: 2px;
font: 500 13px/1 'General Sans';
letter-spacing: 0.08em;
text-transform: uppercase;
transition: all 200ms ease;
cursor: pointer;

:hover {
  background: #0E3B2E;
  color: #FBF9F4;
}
```

### Cards
```css
background: #FBF9F4;
border: 1px solid #E4ECE7;
border-radius: 4px;
padding: 24px;
transition: all 200ms ease;
cursor: pointer;

:hover {
  border-color: #B98A2E;
  box-shadow: 0 12px 32px rgba(21,21,15,0.12);
}
```

### Inputs
```css
padding: 14px 16px;
border: 1px solid #E4ECE7;
border-radius: 2px;
background: #FBF9F4;
font: 400 16px 'General Sans';
color: #15150F;
transition: border-color 200ms ease;

:focus {
  border-color: #B98A2E;
  outline: none;
  box-shadow: 0 0 0 3px rgba(185,138,46,0.15);
}
```

---

## Anti-Patterns (Do NOT Use)

- ❌ Navy, Blue, or any cool blue tones
- ❌ Pure white (`#FFFFFF`) as background — use Ivory
- ❌ Playful/bright colours
- ❌ Rounded corners > 8px on structural elements (buttons/inputs should be sharp — 2px)
- ❌ Emojis as icons — use Lucide React SVGs only
- ❌ Layout-shifting hover transforms (scale on card grid)
- ❌ Missing cursor:pointer on interactive elements
- ❌ Scroll-jacking (GSAP ScrollTrigger only, natural scroll)
- ❌ Auto-playing video with sound
- ❌ Playfair Display, Inter, Montserrat (not brand fonts)

---

## Pre-Delivery Checklist

- [ ] Colours match brand palette (Ivory/Ink/Emerald/Gold only)
- [ ] Fraunces headings, General Sans body — no other fonts
- [ ] No emojis as icons (Lucide React SVGs)
- [ ] `cursor-pointer` on all interactive elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Text contrast 4.5:1 minimum against backgrounds
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected in all animations
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
- [ ] No content hidden behind fixed navbar
- [ ] Paystack integration tested in GHS
- [ ] WhatsApp link functional (wa.me/233559883589)
