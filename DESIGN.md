# OrniMetrics — Design System

**Subject:** OrniMetrics, an edge-AI smart bird feeder that identifies visitors in real time and dispenses species-specific portions (keeping squirrels out). Patent pending, by Baichen Yu.
**Audience:** birders, conservation-minded consumers, press, and technical/education buyers.
**Job of the site:** make a premium product feel real and credible, show it working (video + 3D), and explain the tech — no checkout (marketing only).

## Aesthetic direction

**Apple-clean base + Bold editorial moments.** Clean, airy, whitespace-led sections are the connective tissue; full-bleed near-black "editorial" bands punctuate at high-impact beats. The contrast is the point — bold bands hit harder because everything around them is calm.

**Pacing:** never two bold bands back-to-back. Rhythm:
`Nav → Hero(Apple) → Bold statement → Problem(Apple) → How it works(Apple) → Technology(Apple) → Triple-model architecture(feature) → Video film → Parts 3D → App(Apple) → Impact stats(Bold numerals) → Research/Patent → Roadmap → Subscriptions → FAQ → Source → Newsletter → Footer`

## Color

Semantic tokens follow shadcn names so components inherit them. **Brand accent (amber "ember") = shadcn `--primary` + `--ring`.** shadcn's own `--accent` stays a neutral hover surface. Bold bands use a fixed near-black regardless of theme.

| Token | Light | Dark | Use |
|---|---|---|---|
| background | `#FFFFFF` | `#0A0A0B` | page |
| foreground | `#1D1D1F` | `#F4F4F6` | primary text |
| card | `#FBFBFD` | `#141417` | raised surfaces |
| muted | `#F5F5F7` | `#1D1D21` | quiet fills |
| muted-foreground | `#6E6E73` | `#9A9AA0` | secondary text |
| border | `#E6E6EA` | `#2A2A2F` | hairlines |
| **primary (ember)** | `#C2540C` | `#FF7A33` | buttons, key accents |
| primary-foreground | `#FFFFFF` | `#1A0E06` | text on primary |
| ember-bright *(custom)* | `#E2620E` | `#FF8A4C` | large/decorative accent only |
| ink-900 *(custom, bold bands)* | `#0A0A0B` | `#0A0A0B` | editorial band bg |

**Contrast:** white on `#C2540C` ≈ 5:1 (AA). `ember-bright #E2620E` is for **large text ≥ 24px / decoration only** (≈3.9:1). Small accent text on light → use `#A5440A`. Verify all in the a11y pass.

## Type (self-hosted via `next/font/google`)

| Role | Family | Notes |
|---|---|---|
| Sans / display | **Geist** | UI + headlines. Weights 400–600 for Apple calm; 700–800 for bold bands. Tight tracking on large sizes. |
| Mono / labels | **Geist Mono** | eyebrows, data readouts, spec tables. Uppercase + `0.14–0.16em` tracking for eyebrows. |
| Editorial accent | **Fraunces** *(italic)* | one accent word inside bold headlines + pull-quotes. Never for body. |

Scale (fluid): display-xl hero `clamp(2.75rem,7vw,6.5rem)/600/-0.045em` · bold-band `clamp(3.25rem,12vw,10.5rem)/800/-0.05em/uppercase` · h2 `clamp(2rem,4.6vw,3.375rem)/600/-0.035em` · h3 `1.1875rem/600` · body-lg `1.1875rem` · body `1rem` · eyebrow `0.75rem mono`. Digits use `tabular-nums`.

## Form

Radius: cards `20px`, controls/pills `980px`, small `12px`. Generous section padding (`clamp(72px,10vw,120px)`). Elevation via soft, low-opacity shadows (Apple), not borders, on the light base.

## Motion

- **Entrance:** fade + 16px rise, `.7–.9s cubic-bezier(.2,.7,.2,1)`, once, IntersectionObserver, staggered by ~80ms. (CSS + a tiny `useReveal` hook — no heavy motion lib for v1.)
- **Hover:** subtle scale/translate `.3s`; magnetic on primary CTAs.
- **Marquee:** species ticker, `30s` linear.
- **Counters:** count-up on first view.
- **`prefers-reduced-motion`:** disable transforms/animations everywhere.

## Media (YouTube)

| ID | Title | Role |
|---|---|---|
| `KBCVFSuUY1U` | Coolest Project submission (1:47, public) | hero film |
| `DaaiMkBa01E` | Game Gala (2:00) | secondary |
| `6kyETM3tRLI` | Concept video (0:59) | vision spot |
| _pending_ | Congressional App ×2 (Oct 2025), Intro (Jun 2025) | app / intro |

## Stack

Next.js 16 (App Router, **static export** → `out/`), React 19, Tailwind v4 (`@theme inline`), shadcn/ui, `next-themes`, lucide-react. Deploys as a **Render Static Site**. No domain/contact yet → CTAs point to GitHub / YouTube / Google Site.

_Content that's still stale in code until research lands: hardware BOM + the **triple-model architecture** (being pulled from the GitHub repos + HuggingFace)._
