## Overview

Aarkax's marketing surface is an **ivory canvas** (`{colors.canvas}` — #f7f4ec) holding **navy display type** (`{colors.ink}` — #0b1220) in confident, editorial-weight headlines. Visual energy comes from **clean information architecture, data-forward technical diagrams, and large mixed-case typography** — not from photography or decoration. The system reads as a "European-precise data consultancy": calm, premium, readable, with a quiet technical confidence underneath.

The **amber accent** (`{colors.amber}` — #d68a1a) is the brand's signature recognition marker. It appears sparingly — on primary CTAs, hover indicators, key data points, numbered process steps, and the Aarkax wordmark dot. It is never a background fill for full bands and never used as a surface tone. **Accent green** (`{colors.green-deep}` — #073632) carries the "systems / data / operations" voice — code blocks, infrastructure diagrams, dark-mode case-study callouts, and technical-spec backdrops.

Type voice runs **Söhne** (or Inter as the open-source substitute) in two cuts: Halbfett (600) for display + nav labels, and Buch (400) for body + secondary copy. Display sizes use weight 600 in **mixed case** (sentence case, not UPPERCASE) — this is the deliberate departure from heritage "industrial" voices and the closer match to Tenstorrent's editorial-engineering register. The contrast between confident-but-not-loud display and a slightly cooler body voice is the system's signature.

**Key Characteristics:**
- Ivory canvas (`{colors.canvas}` — #f7f4ec) with navy ink (`{colors.ink}` — #0b1220) as the default page floor. The system inverts to a **navy canvas** (`{colors.canvas-deep}` — #0b1220) only on case-study heroes, technical-detail bands, and the footer — never on standard editorial body.
- Display headlines in **mixed case** at weight 600 (Söhne Halbfett / Inter SemiBold). All-caps appears only on small letterspaced labels (eyebrows, tags, button text under 14px).
- Amber (`{colors.amber}`) used as: primary CTA fill, link-underline accent on hover, dot-glyph in the wordmark, numbered process markers, and the "active" indicator on tabs. **Never as a section background**.
- Accent green (`{colors.green-deep}`) used on: code block surfaces, infrastructure diagram strokes, "system status" pills, and the dark-mode case-study technical band. Pairs with amber as the secondary brand tension.
- Cards default to white surfaces (`{colors.surface}` — #ffffff) on ivory, separated by 1px hairlines (`{colors.hairline}` — #e6e2d6) rather than shadows. Subtle, not flat.
- Border radius is mostly small: `{rounded.sm}` (4px) for cards, inputs, badges; `{rounded.md}` (8px) for callout panels; `{rounded.full}` for circular icon buttons and amber dot accents. **No 0px sharp-rectangle aesthetic** — Aarkax reads softer-edged than BMW or motorsport brands.
- Spacing is editorial: `{spacing.section}` (120px) between major bands at desktop; `{spacing.xxl}` (64px) inside hero sections; `{spacing.xl}` (40px) inside content cards.

## Colors

### Brand & Accent
- **Ink / Navy** (`{colors.ink}` — #0b1220): Primary brand authority color. All h1/h2/h3 display, primary body emphasis, navigation labels, and the wordmark itself render in navy on ivory. On dark surfaces, it inverts to ivory.
- **Amber** (`{colors.amber}` — #d68a1a): Signature recognition color. The brand's only true "voltage." Used as primary-CTA fill, dot-accent in the Aarkax wordmark (the "x." stop is amber), numbered process markers, active-tab indicators, hover underlines, and selected-state borders on cards.
- **Amber Hover** (`{colors.amber-hover}` — #b87411): Pressed / active state for amber CTAs. One step deeper, slightly more burnt.
- **Green Deep** (`{colors.green-deep}` — #073632): Technical / operations / data accent. Used as the background for code-block surfaces, the dark technical band on case-study templates, infrastructure-diagram stroke color, and "system" pill backgrounds.
- **Green Tint** (`{colors.green-tint}` — #e8efed): A 6%-opacity ivory-tinted version of the deep green, used as a soft callout background on operations-focused sections.

### Surface
- **Canvas** (`{colors.canvas}` — #f7f4ec): The default page floor across editorial marketing surfaces. Warm ivory — calmer than pure white, more premium than gray.
- **Canvas Deep** (`{colors.canvas-deep}` — #0b1220): The inverted floor used on case-study heroes, the "How We Work" technical band, the footer, and any data-engineering deep-dive section. Same hex as `{colors.ink}` — surface and ink are the same color, the system simply flips which side speaks.
- **Surface** (`{colors.surface}` — #ffffff): Pure white, used for content cards and panels sitting on the ivory canvas. The brightness lift gives editorial cards a clean "paper" feel against the warmer canvas.
- **Surface Soft** (`{colors.surface-soft}` — #efeadb): A barely-darker-than-canvas ivory used for nested cards, table-row alternates, and footer-adjacent strips on the light surface.
- **Surface Deep** (`{colors.surface-deep}` — #111827): One step lighter than canvas-deep — used for cards and nested panels on dark sections.
- **Code Surface** (`{colors.code-surface}` — #073632): Same hex as `{colors.green-deep}` — the dedicated background for code samples, terminal-style demos, and architecture diagram canvases. Type inside renders in `{colors.green-mono}`.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #e6e2d6): The 1px divider tone on the ivory canvas. Used between body sections, around card outlines, between table rows. The system uses hairlines instead of shadows — depth is implied by the line, not the lift.
- **Hairline Strong** (`{colors.hairline-strong}` — #d0ccbf): Heavier 1.5px tone for emphasized dividers (between hero and first content band, around primary cards on hover).
- **Hairline Dark** (`{colors.hairline-dark}` — #1f2937): The dark-canvas equivalent — 1px dividers on the navy surface.

### Text
- **Ink** (`{colors.ink}` — #0b1220): All headline and primary text on the ivory canvas.
- **Body** (`{colors.body}` — #374151): Default running-text color — a warm dark gray rather than pure navy. Easier on the eye for paragraph reading; reserves the full navy for headlines.
- **Muted** (`{colors.muted}` — #6b7280): Secondary metadata, captions, breadcrumbs, footer links.
- **On Dark** (`{colors.on-dark}` — #f7f4ec): Same hex as `{colors.canvas}` — the system uses its ivory canvas color as the text color on dark surfaces. Display and body on `{colors.canvas-deep}` both render in this tone.
- **On Dark Muted** (`{colors.on-dark-muted}` — #9ca3af): Secondary text on dark surfaces.

### Semantic
- **Success** (`{colors.success}` — #0fa336): Success states on form submissions and "pipeline healthy" status pills.
- **Warning** (`{colors.warning}` — #f4b400): Used sparingly on data-quality warnings or schema-drift indicators.
- **Danger** (`{colors.danger}` — #dc2626): Used only on form validation errors and "pipeline failed" indicators.

## Typography

### Font Family
**Söhne** is the recommended display + body face — a humanist grotesque from Klim Type Foundry that carries the editorial-engineering register Aarkax wants. The fallback stack is `"Söhne", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. For technical content (code blocks, terminal demos, infrastructure-spec values), the system uses **JetBrains Mono** with `"JetBrains Mono", "IBM Plex Mono", ui-monospace, Menlo, monospace` as the fallback chain.

The split is a deliberate weight-pair:
- Halbfett (600) for headlines, navigation labels, button text, eyebrow labels — the "stated" voice
- Buch (400) for body paragraphs, descriptive copy, secondary metadata — the "explained" voice
- Kräftig (500) for emphasized body and lead paragraphs — used sparingly

The system avoids weight 700 entirely — Söhne Halbfett at 600 carries enough display weight without tipping into the marketing-bombastic register that 700 brings. This is the deliberate departure from heritage-bold systems.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 600 | 1.05 | -0.02em | Hero h1 ("Build reliable data, cloud, and AI systems.") |
| `{typography.display-lg}` | 56px | 600 | 1.08 | -0.02em | Section heads ("What Aarkax builds.") |
| `{typography.display-md}` | 40px | 600 | 1.15 | -0.015em | Sub-section heads, case-study titles |
| `{typography.display-sm}` | 32px | 600 | 1.2 | -0.01em | CTA-band heads, service titles |
| `{typography.title-lg}` | 24px | 600 | 1.3 | -0.005em | Card titles in 3-up grids |
| `{typography.title-md}` | 20px | 500 | 1.4 | 0 | Card sub-titles, lead paragraphs |
| `{typography.title-sm}` | 18px | 500 | 1.45 | 0 | Spec callouts, intro paragraphs |
| `{typography.eyebrow}` | 13px | 600 | 1.3 | 0.08em | UPPERCASE category labels above section titles |
| `{typography.label-uppercase}` | 12px | 600 | 1.3 | 0.1em | Active-state tab labels, tag pills |
| `{typography.body-lg}` | 18px | 400 | 1.6 | 0 | Lead paragraphs, hero subhead |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Footer body, captions, fine print |
| `{typography.caption}` | 12px | 400 | 1.5 | 0.01em | Photo captions, metadata lines, dates |
| `{typography.button}` | 15px | 600 | 1.0 | 0 | Primary button labels — sentence-case, not uppercase |
| `{typography.button-sm}` | 13px | 600 | 1.0 | 0.02em | Small button / pill labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |
| `{typography.mono-md}` | 14px | 400 | 1.6 | 0 | Code blocks, JetBrains Mono |
| `{typography.mono-sm}` | 12px | 400 | 1.55 | 0 | Inline code, terminal annotations |

### Principles
The system runs on **negative tracking on display** (-0.02em on the largest sizes) — Söhne (and Inter) naturally sit slightly too loose at hero scale, and pulling the letters in 2% creates the "engineered" tightness without making the type feel cramped. Body type stays at 0 tracking; only the small letterspaced labels (eyebrow, label-uppercase) carry positive tracking.

**Mixed case is the default for display.** UPPERCASE appears only on small ≤13px labels — eyebrow tags, button text under 14px, and tab indicators. Big UPPERCASE headlines would push the system into the heritage / motorsport register and break the "consultancy" voice.

The display→body weight contrast is **600 → 400**, never 700 → 300. This narrower gap reads as confident-professional rather than editorial-dramatic; Aarkax is selling reliability, not voltage.

### Note on Font Substitutes
If Söhne is unavailable (it's a licensed face from Klim), **Inter** (variable) at 600/400 is the closest open-source substitute. Adjust display headline tracking to -0.015em rather than -0.02em — Inter is slightly tighter natively than Söhne. **GT America** or **Neue Haas Grotesk** are paid alternatives; **General Sans** (Fontshare) is a good free alternative with a slightly warmer tone.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 40px · `{spacing.xxl}` 64px · `{spacing.section}` 120px.
- **Section padding (vertical):** `{spacing.section}` (120px) between major editorial bands at desktop; collapses to 80px at tablet and 64px at mobile.
- **Hero band:** `{spacing.section}` (120px) top, `{spacing.xxl}` (64px) bottom — the hero sits closer to the band below it than to the nav above.
- **Card internal padding:** `{spacing.xl}` (40px) for content and service cards; `{spacing.lg}` (24px) for smaller blog/article cards; `{spacing.xxl}` (64px) for hero-anchor case-study cards.
- **Gutters:** `{spacing.lg}` (24px) between cards in 3-up grids; `{spacing.md}` (16px) between cards in 4-up grids; `{spacing.lg}` (24px) inside footer columns.

### Grid & Container
- **Max content width:** 1280px centered on standard marketing pages. Wider at 1440px on case-study deep-dives where infrastructure diagrams need room.
- **Editorial body:** 12-column grid with 24px gutters.
- **Hero text column:** Constrains to columns 1–8 of the 12-col grid — hero headlines never fill the full container width; the right 4 columns carry a supporting diagram or stay as breathing room.
- **Card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Services / industries 4-up:** 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Footer:** 5-column link list at desktop (Company / Services / Solutions / Legal / Social), 2-up at tablet, 1-up at mobile.

### Whitespace Philosophy
Aarkax pages breathe. The ivory canvas is a feature, not a backdrop — large blocks of empty ivory between bands create the "calm premium" feel. Where chrome would normally fill space (BMW puts photography there), Aarkax leaves the canvas alone or anchors with a small mono-text annotation or numbered marker. The empty ivory **is** the design — never fill it with decorative gradients, patterns, or atmospheric backdrops.

The exception is the **dark band rhythm**: roughly every 3-4 ivory bands gets followed by a `{colors.canvas-deep}` band (case study, technical deep-dive, "How We Work" process). This alternation gives the page editorial pacing.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, footer |
| Hairline | 1px `{colors.hairline}` border | Section dividers, card outlines on ivory, table rows |
| Card | `{colors.surface}` (white) over ivory, no shadow | Default service / solution / blog cards |
| Card lifted | `{colors.surface}` + 1.5px `{colors.hairline-strong}` border, no shadow | Featured case-study cards, primary callouts |
| Inverted band | `{colors.canvas-deep}` full-width band | Case-study deep-dives, process band, footer |
| Code surface | `{colors.code-surface}` (deep green) with `{colors.green-mono}` mono type | Code blocks, terminal demos, schema samples |

The system uses **no drop shadows**. Depth comes from: (1) the hairline-vs-no-hairline distinction, (2) the white-on-ivory brightness lift, and (3) the dark-band rhythm against ivory bands. This is a deliberate departure from SaaS-default elevation systems — drop shadows would read as consumer-app, and Aarkax sells enterprise-engineered.

### Decorative Depth
- **Amber dot accent** (`{component.amber-dot}`): A 8px circular amber marker used after the Aarkax wordmark ("Aarkax."), at the start of numbered process steps, and as the active-tab indicator. The dot is the system's only true "decorative" element.
- **Numbered process markers**: Large display-md (40px) numerals rendered in `{colors.amber}` next to process steps. "01", "02", "03" — the numerals are the visual anchor for each step.
- **Infrastructure diagrams**: Schematic stroke diagrams using `{colors.green-deep}` lines and `{colors.amber}` callout markers, rendered on white or ivory surfaces. These are the closest the system comes to "illustration" — and they should read as **technical schematics**, never decorative graphics.
- **No photography of stock business scenes.** When photography appears (founder portraits, occasional team shots), it stays editorial: 4:5 portrait, desaturated, no smiling-stock-photo energy. Most pages have no photography at all.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Almost no use — reserved for full-bleed dividers and the M-stripe-equivalent amber-line accent |
| `{rounded.xs}` | 2px | Code-block inline tags, mono-style metadata pills |
| `{rounded.sm}` | 4px | Default for cards, inputs, buttons, badges — the dominant radius |
| `{rounded.md}` | 8px | Callout panels, featured case-study cards, dark process band |
| `{rounded.lg}` | 12px | Large hero-anchor cards (rare) |
| `{rounded.full}` | 9999px / 50% | Tag pills, status indicators, amber-dot accents, circular icon buttons, carousel arrows |

The radius hierarchy is **"sm by default, full for pills/icons, md for emphasis."** This is the deliberate softening relative to motorsport / industrial brand systems — Aarkax reads as a modern consultancy, not a manufacturing brand. The 4px radius is small enough to stay "engineered" but warm enough to avoid the sharp-rectangle "tech-startup-2015" aesthetic.

### Diagram Geometry
Infrastructure diagrams use strokes at 1.5px weight in `{colors.green-deep}`. Nodes render as `{rounded.sm}` (4px) rectangles in white or deep green. Connecting lines stay orthogonal (90° angles only — no diagonals) — schematic precision. Amber markers (`{colors.amber}`) flag key decision points and outputs in the diagram.

## Components

### Top Navigation

**`top-nav`** — Ivory nav bar pinned to the top of every page. 72px tall, `{colors.canvas}` background, 1px `{colors.hairline}` bottom border on scroll. Carries the **Aarkax wordmark** at left (navy "Aarkax" + amber-dot stop), primary horizontal menu (Services, Solutions, Industries, Case Studies, About, Blog), and a right-side cluster with a primary `{component.button-primary}` CTA ("Book a Call"). Menu items render in `{typography.nav-link}` with sentence-case labels and a 2px amber underline on hover.

**`top-nav-scrolled`** — After 80px of scroll, the nav adds a `{colors.surface}` (white) background and a 1px `{colors.hairline}` shadow-substitute bottom border. The wordmark stays navy; menu items stay navy.

**`mobile-nav`** — Below 768px, menu collapses to a hamburger that opens as a full-screen ivory overlay. The Aarkax wordmark stays in the top-left; menu items stack vertically with `{spacing.lg}` (24px) between them.

### Buttons

**`button-primary`** — The signature primary CTA. Background `{colors.amber}`, text `{colors.ink}` (navy), rounded `{rounded.sm}` (4px), padding 14px × 28px, height 48px. Type `{typography.button}` — sentence-case 15px / 600 / 0 tracking. **Sentence-case, not uppercase** — the distinguishing call against motorsport / industrial systems.

**`button-primary-dark`** — Used on the ivory canvas where amber would clash with nearby amber accents (e.g., next to a numbered process marker). Background `{colors.ink}` (navy), text `{colors.on-dark}` (ivory), same dimensions and radius. The "second primary" — used sparingly.

**`button-secondary`** — Background transparent, 1.5px `{colors.ink}` border, text `{colors.ink}`. Same dimensions as primary. Used as the second CTA next to a primary amber button (e.g., "Book a call" + "View services").

**`button-on-dark`** — Used on `{colors.canvas-deep}` surfaces. Background `{colors.amber}`, text `{colors.ink}` — same as `{component.button-primary}` (amber on navy reads strongly).

**`button-on-dark-secondary`** — On dark surfaces. Background transparent, 1.5px `{colors.on-dark}` (ivory) border, text `{colors.on-dark}`.

**`button-text`** — Inline text button with an amber underline. Type `{typography.button}` weight, navy text, 2px `{colors.amber}` underline. Used for "Read more →" links and inline CTAs inside paragraphs. The chevron → glyph renders 4px after the label.

**`button-icon`** — Circular icon buttons (carousel controls, share, close). 44 × 44px, background `{colors.surface}` with 1px `{colors.hairline}` border, navy icon centered, rounded `{rounded.full}`.

**`carousel-arrow`** — Specific 44 × 44 circular arrow used in case-study and blog carousels. Same shape as `{component.button-icon}` with a chevron glyph in navy.

### Cards & Containers

**`hero-band`** — Full-width ivory band with the hero h1 left-aligned, constrained to columns 1–8 of the 12-col grid. H1 in `{typography.display-xl}` (72px / 600 / -0.02em), subhead in `{typography.body-lg}` (18px / 400), and a CTA cluster ({primary + secondary buttons}) below with `{spacing.xl}` (40px) of separation. Right 4 columns may carry a `{component.infrastructure-diagram}` or stay as breathing room. No card frame — the hero IS the band.

**`service-card`** — Used in the "What Aarkax builds" 3-up grid on the homepage and Services page. Background `{colors.surface}` (white) over ivory, 1px `{colors.hairline}` border, rounded `{rounded.sm}` (4px), padding `{spacing.xl}` (40px). Top: a 32×32 outlined icon in `{colors.ink}`. Middle: title in `{typography.title-lg}` (24px / 600). Below: a short description in `{typography.body-md}`. Bottom: a `{component.button-text}` ("Explore →"). On hover, the border thickens to 1.5px and shifts to `{colors.hairline-strong}`.

**`service-card-featured`** — A bigger variant used for the top 2 services. Same as `{component.service-card}` but with rounded `{rounded.md}` (8px) and a 1.5px `{colors.amber}` left-border accent.

**`case-study-card`** — Used in the case-studies grid. Background `{colors.surface}` (white) on ivory, rounded `{rounded.md}` (8px), padding `{spacing.xl}` (40px). Top: a small eyebrow tag in `{typography.eyebrow}` (e.g., "FINANCE • DATA ENGINEERING"). Middle: title in `{typography.display-sm}` (32px / 600). Below: a 3-up metrics row showing key results (e.g., "98% — Pipeline reliability"). Bottom: a `{component.button-text}` ("Read the case study →"). The metrics row uses `{typography.display-md}` (40px / 600) for the number and `{typography.body-sm}` for the label.

**`case-study-card-dark`** — A featured case-study variant rendered as a full-width dark band. Background `{colors.canvas-deep}`, text `{colors.on-dark}`. Same content structure but with the eyebrow in `{colors.amber}` and the body in `{colors.on-dark-muted}`.

**`blog-card`** — A more text-forward card variant for the blog overview page. Background `{colors.canvas}` (no white surface — sits directly on ivory) with a 1px `{colors.hairline}` top border, no other borders. Padding `{spacing.lg}` (24px) vertical, 0 horizontal. Carries a small category label in `{typography.eyebrow}`, a headline in `{typography.title-lg}`, a body excerpt in `{typography.body-md}` (2 lines truncated), and a small metadata line ("8 min read · Jan 2026") in `{typography.caption}` / `{colors.muted}`.

**`metric-cell`** — Large metric callout cells used inside case-study cards and on the "Why Aarkax" band. Background transparent, no border. Top: value in `{typography.display-md}` (40px / 600 / `{colors.amber}` or `{colors.ink}`). Below: label in `{typography.body-sm}` / `{colors.body}`. Used in 3-up or 4-up grids. The values render in amber on featured case studies; in navy on default metric grids.

**`process-step`** — Numbered process step used in the "How We Work" band. Background `{colors.canvas-deep}`, padding `{spacing.xl}` (40px). Left: large numeral in `{typography.display-md}` (40px / 600 / `{colors.amber}`) — "01", "02", etc. Right: step title in `{typography.title-lg}` (24px / 600 / `{colors.on-dark}`), description in `{typography.body-md}` / `{colors.on-dark-muted}`. Steps stack vertically with a 1px `{colors.hairline-dark}` divider between them.

**`industry-card`** — A simpler card variant used in the Industries 4-up grid. Background `{colors.surface}` (white) on ivory, 1px `{colors.hairline}` border, rounded `{rounded.sm}` (4px), padding `{spacing.lg}` (24px). A 24×24 outlined industry icon at top, an industry name in `{typography.title-md}` (20px / 500). Compact — these are navigation cards, not feature cards.

**`code-block`** — Inline or block code samples used in blog posts and technical case studies. Background `{colors.code-surface}` (deep green #073632), text `{colors.on-dark}` in `{typography.mono-md}`, rounded `{rounded.sm}` (4px), padding `{spacing.lg}` (24px). A small mono label in the top-right corner gives the language ("python" / "yaml" / "sql") in `{typography.caption}` / `{colors.on-dark-muted}`.

**`pricing-card`** *(if pricing surface exists)* — Background `{colors.surface}` (white), 1.5px `{colors.hairline-strong}` border, rounded `{rounded.md}` (8px), padding `{spacing.xxl}` (64px). The "recommended" tier swaps to a `{colors.amber}` border and adds a small "Most popular" pill in amber above the price.

### Inputs & Forms

**`text-input`** — Standard text input on ivory surfaces. Background `{colors.surface}` (white), text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.sm}` (4px), padding 12px × 16px, height 48px. 1px `{colors.hairline-strong}` border. Focus state thickens the border to 1.5px and shifts to `{colors.amber}`. Placeholder text in `{colors.muted}`.

**`text-input-dark`** — Same input on dark canvas. Background `{colors.surface-deep}`, text `{colors.on-dark}`, 1px `{colors.hairline-dark}` border.

**`textarea`** — Same styling as `{component.text-input}` with min-height 120px.

**`select`** — Same styling as `{component.text-input}` with a chevron-down glyph at the right in `{colors.muted}`.

**`form-card`** — Wraps the contact form on the Contact page. Background `{colors.surface}` (white), rounded `{rounded.md}` (8px), padding `{spacing.xxl}` (64px), 1px `{colors.hairline}` border. Fields stack vertically with `{spacing.lg}` (24px) between them.

### Signature Components

**`amber-dot`** — The 8px amber circle that punctuates the Aarkax wordmark, marks active states, and anchors numbered process labels. Rendered as `rounded.full`, `{colors.amber}` fill, no border. The system's most distinctive non-typographic element.

**`amber-rule`** — A 2px-thick `{colors.amber}` horizontal rule used as a section-divider accent and as the active-state underline on category tabs. Length is 48px when used as a heading underline, full-width when used as a section divider.

**`category-tab`** + **`category-tab-active`** — Tab selectors used on the Blog, Case Studies, and Industries pages. Tabs render as text-only labels in `{typography.label-uppercase}` (12px / 600 / 0.1em). Active state changes text color from `{colors.muted}` to `{colors.ink}` and adds a 2px `{colors.amber}` underline (`{component.amber-rule}`) below the label. No background fill, no rounded corners on the tab itself.

**`status-pill`** — Small pills used for tagging case studies and articles. Background `{colors.green-tint}` (soft green tint) with `{colors.green-deep}` text, or `{colors.canvas-deep}` with `{colors.on-dark}` text on dark surfaces. Rounded `{rounded.full}`, padding 4px × 12px, type `{typography.button-sm}` (13px / 600 / 0.02em). Used for "Data Engineering" / "AI Automation" category tags.

**`cta-band`** — A pre-footer CTA band. Background `{colors.canvas-deep}` (navy), centered text alignment. H2 in `{typography.display-lg}` (56px / 600 / `{colors.on-dark}`), supporting copy in `{typography.body-lg}` / `{colors.on-dark-muted}`, and a `{component.button-on-dark}` (amber on navy) below. Vertical padding `{spacing.section}` (120px). The CTA inherits gravity from the dark inversion against the ivory above and below.

**`stat-band`** — A horizontal band used to surface key Aarkax credentials. Background `{colors.canvas}` (ivory) or `{colors.canvas-deep}` (navy). Carries 3 or 4 `{component.metric-cell}` instances in a row, dividing the band into equal columns with `{colors.hairline}` vertical rules between them.

**`infrastructure-diagram`** — Schematic SVG diagrams used inline in case studies and on the hero band. Strokes in `{colors.green-deep}` at 1.5px, nodes as `{rounded.sm}` rectangles in white with `{colors.ink}` text, and amber markers (`{colors.amber}` filled circles or arrows) flagging key decision points. Lines stay orthogonal — only 90° angles. Treated as technical schematics, never as decorative illustration.

### Footer

**`footer`** — Navy footer that closes every page. Background `{colors.canvas-deep}`, text `{colors.on-dark-muted}`. 5-column link list at desktop covering Company / Services / Solutions / Legal / Social. Vertical padding 80px. Top of footer carries the Aarkax wordmark in `{typography.display-md}` (40px / 600 / `{colors.on-dark}`) with the amber dot. Bottom row carries the copyright disclaimer in `{typography.caption}` and a region/language selector. The footer never inverts to ivory — it stays navy as the page's editorial close.

## Do's and Don'ts

### Do
- Anchor every page with strong typography. Aarkax's voltage is its headlines, not photography or color.
- Use mixed-case display headlines in `{typography.display-xl}` or `{typography.display-lg}`. UPPERCASE display reads as off-brand (heritage / motorsport / industrial — not Aarkax).
- Pair Halbfett (600) display with Buch (400) body. Avoid 700/300 — the narrower contrast reads as professional, not editorial-bombastic.
- Reserve amber for moments of intent: primary CTAs, numbered markers, active states, wordmark dot, hover accents. Never as a background fill.
- Use `{rounded.sm}` (4px) by default. Reserve `{rounded.full}` for pills, status indicators, and circular icon buttons.
- Letter-space small labels (eyebrow, label-uppercase) at 0.08–0.1em. Letter-space hero display at -0.02em (negative).
- Use `{spacing.section}` (120px) between major editorial bands on desktop for grid-aligned vertical rhythm.
- Use hairlines (`{colors.hairline}`), not shadows, to separate cards from the canvas.
- Alternate ivory and navy bands across long pages — roughly 3-4 ivory bands per navy inversion creates editorial pacing.

### Don't
- Don't introduce a brand color outside the navy / amber / green palette. Bright purples, neons, or gradient pairs will break the consultancy voice immediately.
- Don't bold body type to 600. Body stays at 400 — bumping to 500 is reserved for `{typography.title-md}` only.
- Don't use UPPERCASE on display headlines. Save UPPERCASE for ≤13px labels.
- Don't use the amber as a section background. The amber is a 5% surface across the system — pushing it to 20% or higher reads as "energy drink brand" instead of "data consultancy."
- Don't add drop shadows. Depth comes from hairlines and ivory/navy band rhythm.
- Don't use sharp 0px corners as a system default. The 4px default radius is non-negotiable for cards, buttons, inputs.
- Don't put stock photography of "smiling business people in front of laptops" anywhere. If photography appears, it's editorial portrait or technical infrastructure — nothing else.
- Don't repeat the same surface mode in 4+ consecutive bands. Ivory → ivory → ivory → ivory reads as flat. Break with a navy band by band 4.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales 72→40px; service/case-study grids 1-up; footer 5 cols → 1; section padding 120→64px |
| Tablet | 768–1024px | Top nav stays horizontal but tightens; 2-up card grids; 4-up industry grid → 2-up; section padding 120→80px |
| Desktop | 1024–1440px | Full top-nav; 3-up service grids; 4-up industry grids; full 120px section padding |
| Wide | > 1440px | Same as desktop with more breathing room; max content 1280px (or 1440px on case-study deep-dives) |

### Touch Targets
- `{component.button-primary}` renders at 48px height — meets WCAG AAA.
- `{component.button-icon}` and `{component.carousel-arrow}` are 44 × 44 — meets WCAG AA minimum.
- `{component.text-input}` height is 48px.
- Category tabs render as text-only labels with 12px vertical padding; effective tap area meets 44px with surrounding spacing.

### Collapsing Strategy
- Top nav collapses to a hamburger sheet at < 768px; the menu opens as a full-screen ivory overlay with the Aarkax wordmark at the top.
- Hero text column collapses from 8/12 cols to 12/12 cols at mobile; any supporting diagram on the right stacks below the hero text rather than disappearing.
- Card grids reduce columns rather than scaling cards down; cards retain their `{spacing.xl}` (40px) internal padding except at mobile where it collapses to `{spacing.lg}` (24px).
- `{component.process-step}` numbered markers stack vertically at all breakpoints; the number-to-content ratio shifts from horizontal at desktop to vertical at mobile.
- The footer 5-col grid collapses to 2-up at tablet and 1-up at mobile; the Aarkax wordmark stays at the top of the footer at all breakpoints.

### Image Behavior
- Editorial portraits crop at 4:5 across all breakpoints; the system never letterboxes.
- Infrastructure diagrams render as inline SVG with `viewBox` scaling — they reflow at narrow widths by stacking the diagram below the hero text rather than scaling to illegible size.
- The Aarkax wordmark scales proportionally with viewport width; the amber dot scales with it.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key (`{component.service-card}`, `{component.process-step}`).
2. New components default to `{rounded.sm}` (4px). Only use `{rounded.full}` for pills, dots, and circular icon buttons; `{rounded.md}` (8px) for emphasis cards.
3. Variants (`-active`, `-disabled`, `-dark`, `-featured`) live as separate entries in `components:`.
4. Use `{token.refs}` everywhere — never inline hex.
5. Never document hover states inline with the component spec. Default and Active/Pressed only.
6. Display headlines stay mixed-case 600; body stays sentence-case 400. Never blur the contrast by introducing 700 display or 500 body.
7. Amber is brand-identity-only — never extend it to system tokens for "secondary action" or fill it as a band background. Green-deep is technical-only — never use it for primary CTAs.
8. When in doubt about emphasis: stronger typography hierarchy before stronger color. Push to `{typography.display-lg}` before reaching for amber.
9. Dark band rhythm: insert a `{colors.canvas-deep}` band roughly every 3-4 ivory bands on long pages. Never run 5+ ivory bands in a row.

## Known Gaps

- The exact Söhne weight names (Halbfett 600, Buch 400, Kräftig 500) are referenced from Klim Type Foundry's published documentation; if licensing Söhne is out of scope, Inter (variable) at the same weight values is the recommended open-source substitute with -0.015em tracking adjustment on display.
- Animation and transition timings (card hover lift, button press states, carousel transitions, scroll-triggered fades) are not in scope here — recommend a 200ms ease-out default for hover states and a 400ms ease-out for scroll-triggered reveals.
- The configurator / interactive demo surfaces (architecture-builder tools, ROI calculators, schema explorers) are not documented — these would warrant a separate component-set extension covering picker grids, slider inputs, real-time data visualization patterns, and stateful diagram interactions.
- Form validation states beyond `{component.text-input}` defaults (error border, success border, inline error messages) are not extracted in detail — only the focus state is specified above.
- Dark-mode case-study templates beyond the hero band, process band, and footer are not fully specified — a full dark-mode editorial template (body type, table styling, blockquotes) would need a dedicated long-form case-study page to document.
- The blog post template (in-article typography rhythm, pull-quote styling, inline image treatment, table-of-contents sidebar) is not specified beyond the blog-card overview; the long-read article template would extend this spec.
- Aarkax wordmark glyph specification (exact letterforms, kerning between "Aarkax" and the amber dot, sizes across breakpoints) is referenced conceptually but not specified at the SVG / path level — the wordmark file would be the canonical source.
- Iconography style (24×24 stroke icons referenced for industry cards and service cards) is referenced as "outlined" but the stroke weight, corner-join style, and icon set (Lucide, Heroicons outline, custom) are not specified.
