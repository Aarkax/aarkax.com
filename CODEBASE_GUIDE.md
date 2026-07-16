# Aarkax Website Codebase Guide

This document explains how the Aarkax website is structured, what each important file does, and where to make manual changes.

## 1. Project Overview

This is a Next.js App Router website built with:

```txt
Next.js
React
TypeScript
Tailwind CSS
shadcn-style local UI components
Framer Motion
Three.js
Sanity CMS schema preparation
Vercel-ready build setup
```

The current design direction is a premium enterprise technology website:

```txt
Ivory page background
Floating rounded navigation
Navy technical panels
Amber CTA buttons
Green data/system accents
Rounded cards
Subtle grid patterns
Three.js hero network visual
```

## 2. How To Run

From the project root:

```bash
cd /home/ishan/Documents/aarkax.com
npm install
npm run dev
```

Production check:

```bash
npm run typecheck
npm run lint
npm run build
```

If you see a runtime error like `Cannot find module './833.js'`, clear the generated Next cache:

```bash
rm -rf .next
npm run build
npm run dev
```

## 3. Top-Level Structure

```txt
app/                  Next.js routes and global layout
components/           Reusable UI and page sections
components/ui/        shadcn-style primitives
components/three/     Three.js visual code
lib/                  Shared constants, data, utilities
public/images/        Logo and image assets
schemas/              Sanity CMS schema files
sanity/               Sanity client/image helper files
tailwind.config.ts    Brand colors, fonts, shadows, background tokens
app/globals.css       Global CSS, body background, helper classes
```

## 4. Route Files

Next.js App Router uses the `app/` folder. Every `page.tsx` creates a URL route.

### `app/layout.tsx`

This is the root HTML wrapper for the whole website.

It does three things:

```txt
1. Imports global CSS from app/globals.css.
2. Defines SEO metadata: title, description, Open Graph image, favicon.
3. Wraps every page in <html lang="en"><body>{children}</body></html>.
```

Important exports:

```ts
export const metadata
```

Controls browser title, SEO description, social preview image, and icons.

```ts
export const dynamic = "force-dynamic";
```

Forces routes to render dynamically. This was added because static generation was failing silently in the Next build worker. The website still builds and deploys normally.

Change site URL here or in `.env.local`:

```txt
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### `app/page.tsx`

This is the homepage.

Page order:

```txt
Header
Hero
Services section
Solutions section
Technical depth section
Case study previews
Delivery process
Metrics/proof
Insights preview
Final CTA
Footer
```

The homepage imports data from:

```ts
import {
  caseStudies,
  insights,
  processSteps,
  proofMetrics,
  serviceItems,
  solutionItems
} from "@/lib/site-data";
```

If you want to change card content, usually edit `lib/site-data.ts`, not `app/page.tsx`.

### `app/services/page.tsx`

Creates `/services`.

Uses:

```txt
PageShell
ServiceCard
serviceItems
```

Purpose: service overview page shell with all service cards.

### `app/solutions/page.tsx`

Creates `/solutions`.

Uses:

```txt
PageShell
SolutionCard
solutionItems
```

Purpose: business-focused solution overview page.

### `app/case-studies/page.tsx`

Creates `/case-studies`.

Uses:

```txt
PageShell
CaseStudyCard
caseStudies
```

Purpose: case study listing shell. Current content is realistic placeholder content.

### `app/insights/page.tsx`

Creates `/insights`.

Purpose: blog/insights listing shell. Later this can pull posts from Sanity.

### `app/company/page.tsx`

Creates `/company`.

Purpose: company overview page shell with three positioning cards.

### `app/contact/page.tsx`

Creates `/contact`.

Purpose: contact/strategy-call page shell with:

```txt
What to include card
Contact form UI
```

The form is currently visual only. It does not submit anywhere yet.

## 5. Styling System

### `tailwind.config.ts`

This file defines the brand tokens used in Tailwind classes.

Brand colors:

```ts
navy: "#0B1220"
amber: "#D68A1A"
green: "#073632"
ivory: "#F7F4EC"
ink: "#111827"
```

Usage examples:

```txt
bg-ivory       Ivory background
text-navy      Navy text
bg-navy        Navy section
bg-amber       Amber CTA
text-green     Green technical accent
border-navy/10 Soft navy border
```

Custom shadows:

```txt
shadow-soft    Larger premium section/card shadow
shadow-card    Smaller card shadow
shadow-amber   Amber CTA glow
```

Custom backgrounds:

```txt
bg-dot-grid         Light dotted background pattern
bg-technical-grid   Technical grid for dark panels
```

### `app/globals.css`

Global CSS for the whole website.

Important parts:

```css
body
```

Sets the ivory background and subtle radial color glow.

```css
.page-shell
```

Adds the dotted grid background to page areas.

```css
.container-padded
```

Main content width helper. Most sections use this so the website aligns consistently.

If you want wider/narrower layout, edit:

```css
width: min(100% - 2rem, 1280px);
```

## 6. Shared Data

### `lib/site-data.ts`

This is the main content file. Most manual content edits happen here.

Exports:

```ts
navItems
serviceItems
solutionItems
caseStudies
processSteps
proofMetrics
insights
architectureLayers
technicalCapabilities
footerLinks
```

#### `NavItem`

Type for navigation links:

```ts
type NavItem = {
  label: string;
  href: string;
};
```

#### `CardItem`

Type used by service and solution cards:

```ts
type CardItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  points?: string[];
  eyebrow?: string;
  metric?: string;
};
```

Fields:

```txt
title        Card heading
description  Card body text
href         Link target
icon         Lucide icon component
points       Bullet points for service cards
metric       Pill label for solution cards
```

#### How to add a new service

Edit `serviceItems`:

```ts
{
  title: "New Service",
  description: "Short description.",
  href: "/services#new-service",
  icon: CloudCog,
  points: ["Point one", "Point two", "Point three"]
}
```

If you use a new icon, import it from `lucide-react` at the top.

#### How to add a new solution

Edit `solutionItems`:

```ts
{
  title: "New Solution",
  description: "Short description.",
  href: "/solutions#new-solution",
  icon: Gauge,
  metric: "Short metric label"
}
```

#### How to edit metrics

Edit `proofMetrics`:

```ts
{ value: "40%", label: "faster reporting cycles", note: "Representative metric" }
```

If you get real client results, replace these sample values.

### `lib/constants.ts`

Holds site-level constants:

```ts
siteConfig
megaMenuGroups
```

`siteConfig` includes:

```txt
name
url
description
email
```

`megaMenuGroups` controls what appears in the desktop mega menu for Services and Solutions.

### `lib/utils.ts`

Contains one helper:

```ts
export function cn(...inputs: ClassValue[])
```

This merges Tailwind class strings safely using:

```txt
clsx
tailwind-merge
```

Use it when you want conditional class names.

## 7. Components

### `components/Header.tsx`

Main floating navigation bar.

It is a client component because it uses React state:

```ts
const [activeMenu, setActiveMenu] = useState<"Services" | "Solutions" | null>(null);
const [mobileOpen, setMobileOpen] = useState(false);
```

What it does:

```txt
Shows Aarkax logo
Shows desktop nav links
Shows Book a Strategy Call button
Opens MegaMenu on Services/Solutions hover
Opens MobileNav on hamburger click
```

Important interactions:

```ts
onMouseEnter={() => setActiveMenu(...)}
```

Opens mega menu for Services/Solutions.

```ts
onMouseLeave={() => setActiveMenu(null)}
```

Closes mega menu when mouse leaves the nav container.

Manual edits:

```txt
Logo path: /images/brand/aarkax_primary_logo_horizontal.svg
Nav items: lib/site-data.ts
CTA text: Header.tsx
Mega menu content: lib/constants.ts
```

### `components/MegaMenu.tsx`

Desktop hover mega menu.

Props:

```ts
{ active: "Services" | "Solutions" | null }
```

What it does:

```txt
Finds active menu group from megaMenuGroups
Shows a navy intro panel
Shows 4 linked cards
Animates open/close with Framer Motion
```

If `active` is `null`, it returns nothing:

```ts
if (!group) return null;
```

### `components/MobileNav.tsx`

Full-screen mobile menu.

Props:

```ts
open: boolean
onClose: () => void
```

What it does:

```txt
If open is false, returns null
If open is true, renders navy full-screen overlay
Lists nav links vertically
Has close button
Has Book a Strategy Call button
```

Manual edits:

```txt
Mobile menu links: lib/site-data.ts
CTA text: MobileNav.tsx
```

### `components/Hero.tsx`

Homepage hero section.

It is a client component because it uses Framer Motion animations and the Three.js visual.

Main parts:

```txt
AnimatedGrid background
Hero badge
Hero headline
Hero paragraph
Start a Project CTA
Explore Solutions CTA
Navy visual panel
Three.js DataNetwork
Trust strip pills
```

Local constant:

```ts
const trustStrip = ["Data Engineering", "AI Systems", "Cloud Platforms", "Automation", "Analytics"];
```

Change these labels directly in `Hero.tsx`.

CTA links:

```txt
Start a Project -> /contact
Explore Solutions -> /solutions
```

### `components/AnimatedGrid.tsx`

Small visual helper for dotted background.

Props:

```ts
{ className?: string }
```

It renders an absolute-positioned dotted grid overlay.

Uses:

```txt
bg-dot-grid from tailwind.config.ts
cn() from lib/utils.ts
```

### `components/three/data-network.tsx`

Three.js animated network used inside the hero visual panel.

It is a client component because Three.js needs browser APIs.

Main function:

```ts
export function DataNetwork()
```

Important internal objects:

```txt
mountRef      DOM node where canvas is mounted
scene         Three.js scene
camera        Perspective camera
renderer      WebGL renderer
group         Parent object for nodes, lines, and grid
points        Random generated node positions
nodeGeometry  Small sphere geometry
nodeMaterial  Amber node material
greenLine     Green transparent line material
grid          Technical background grid
```

Lifecycle:

```txt
1. useEffect runs after browser render.
2. Creates scene/camera/renderer.
3. Appends renderer canvas to the div.
4. Generates random nodes.
5. Connects nearby nodes with lines.
6. Adds grid helper.
7. Starts animation loop.
8. On unmount, cancels animation, removes resize listener, disposes renderer.
```

Change visual density:

```ts
for (let i = 0; i < 52; i += 1)
```

Increase `52` for more nodes, decrease for better performance.

Change connection distance:

```ts
if (points[i].distanceTo(points[j]) < 1.45)
```

Higher value means more connecting lines.

### `components/ServiceCard.tsx`

Reusable service card.

Props:

```ts
service: CardItem
index?: number
```

What it renders:

```txt
Icon
Title
Description
Bullet points
Explore service link
```

It is a server component. This is intentional. Do not add `"use client"` unless you also stop passing icon components from server pages.

### `components/SolutionCard.tsx`

Reusable solution card.

Props:

```ts
solution: CardItem
index?: number
```

What it renders:

```txt
Icon
Metric pill
Title
Description
View solution link
```

Like `ServiceCard`, this is a server component to avoid server/client serialization issues with Lucide icons.

### `components/CaseStudyCard.tsx`

Reusable case study preview card.

Props:

```ts
title
industry
problem
outcome
href
```

What it renders:

```txt
Industry label
Case study title
Problem paragraph
Outcome paragraph
View case study link
```

### `components/TechnicalArchitecture.tsx`

Dark navy technical architecture section content.

It is a client component because it uses Framer Motion scroll reveal.

Data comes from:

```ts
architectureLayers
technicalCapabilities
```

What it renders:

```txt
Left side: technical capability cards
Right side: layered architecture map
```

Layer labels:

```txt
Sources
Ingestion
Processing
Quality
Analytics
AI Systems
```

Change those in `lib/site-data.ts`.

### `components/SectionHeader.tsx`

Reusable section heading.

Props:

```ts
eyebrow?: string
title: string
description?: string
align?: "left" | "center"
className?: string
```

What it renders:

```txt
Optional small amber eyebrow
Large navy heading
Optional description paragraph
```

Use this whenever adding a new section.

### `components/CTASection.tsx`

Final CTA block.

What it renders:

```txt
Navy rounded section
Amber glow
Headline
Description
Talk to Aarkax button
View Services button
```

Manual edits:

```txt
CTA copy: CTASection.tsx
CTA links: /contact and /services
```

### `components/Footer.tsx`

Full website footer.

Uses:

```txt
Logo from public/images/brand
footerLinks from lib/site-data.ts
siteConfig.email from lib/constants.ts
```

What it renders:

```txt
Aarkax logo
Company description
Newsletter email input
Subscribe button
Footer link groups
Copyright
Social placeholder links
```

Newsletter form is currently visual only. It does not submit.

### `components/PageShell.tsx`

Shared shell for inner pages.

Props:

```ts
eyebrow
title
description
children
```

What it renders:

```txt
Header
Page intro section
Page children content
CTASection
Footer
```

Used by:

```txt
/services
/solutions
/case-studies
/insights
/company
/contact
```

### `components/ui/button.tsx`

Local shadcn-style button primitive.

Main export:

```ts
Button
buttonVariants
```

Uses `class-variance-authority` to define variants:

```txt
primary    Amber button
navy       Navy button
secondary  Light bordered button
ghost      Text-style button
```

Sizes:

```txt
sm
default
lg
```

Example:

```tsx
<Button variant="primary" size="lg">Start</Button>
```

### `components/ui/card.tsx`

Local shadcn-style card primitives:

```txt
Card
CardHeader
CardTitle
CardContent
```

These keep card styling consistent.

### `components/ui/badge.tsx`

Small green technical badge.

Used in hero.

## 8. Sanity CMS Files

### `sanity.config.ts`

Sanity Studio config.

Uses:

```ts
schemaTypes from "@/schemas"
```

Reads env variables:

```txt
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
```

### `schemas/`

Future CMS document schemas:

```txt
author.ts      Author profile
service.ts     Service page/content model
caseStudy.ts   Case study model
post.ts        Insight/blog post model
index.ts       Exports all schemas
```

Current website still uses static placeholder data from `lib/site-data.ts`. Sanity is prepared but not connected to page rendering yet.

### `sanity/lib/client.ts`

Creates Sanity client:

```ts
export const sanityClient = createClient(...)
```

Use this later to query Sanity content.

### `sanity/lib/image.ts`

Creates helper:

```ts
export function urlFor(source)
```

Use this later to build Sanity image URLs.

## 9. Assets

Website assets live in:

```txt
public/images/
```

Important folders:

```txt
public/images/brand/          Logo, favicon, app icons
public/images/hero/           Future hero assets
public/images/case-studies/   Future case study images
public/images/icons/          Future icons
public/images/backgrounds/    Future backgrounds
public/images/social/         Open Graph image
```

Logo used by header/footer:

```txt
public/images/brand/aarkax_primary_logo_horizontal.svg
```

Original master logo assets:

```txt
/home/ishan/Documents/Aarkax/aarkax_logo_assets/
```

## 10. Common Manual Changes

### Change Homepage Headline

Edit:

```txt
components/Hero.tsx
```

Find:

```tsx
Build AI-ready data systems that scale.
```

### Change Navigation Links

Edit:

```txt
lib/site-data.ts
```

Find:

```ts
export const navItems
```

### Change Service Cards

Edit:

```txt
lib/site-data.ts
```

Find:

```ts
export const serviceItems
```

### Change Solution Cards

Edit:

```txt
lib/site-data.ts
```

Find:

```ts
export const solutionItems
```

### Change Footer Links

Edit:

```txt
lib/site-data.ts
```

Find:

```ts
export const footerLinks
```

### Change Brand Colors

Edit:

```txt
tailwind.config.ts
```

Find:

```ts
navy
amber
green
ivory
ink
```

Also check:

```txt
app/globals.css
```

because body background gradients use hardcoded rgba values.

### Change Width Of All Sections

Edit:

```txt
app/globals.css
```

Find:

```css
.container-padded
```

### Add A New Page

Create:

```txt
app/new-page/page.tsx
```

Example:

```tsx
import { PageShell } from "@/components/PageShell";

export default function NewPage() {
  return (
    <PageShell eyebrow="New" title="Page title" description="Page description.">
      <section className="pb-20">
        <div className="container-padded">Content here</div>
      </section>
    </PageShell>
  );
}
```

Then add it to `navItems` if needed.

## 11. Important Technical Notes

### Server vs Client Components

Files with this line are client components:

```ts
"use client";
```

Client components can use:

```txt
useState
useEffect
Framer Motion browser interactions
Three.js
DOM APIs
```

Server components should not pass functions/classes into client components.

This is why `ServiceCard` and `SolutionCard` are server components: they receive Lucide icon components from `lib/site-data.ts`.

### Why `dynamic = "force-dynamic"` Exists

In `app/layout.tsx`:

```ts
export const dynamic = "force-dynamic";
```

This avoids a silent static-generation worker crash during `next build`. The site still builds and runs normally on Vercel, but routes are server-rendered on demand.

### Why Clearing `.next` Fixes Missing Chunk Errors

`.next/` is generated output. Sometimes after changing components or running build/dev at the same time, Next can reference an old chunk file that no longer exists.

Fix:

```bash
rm -rf .next
npm run build
npm run dev
```

Do not manually edit `.next`.

## 12. Quality Checklist Before Publishing

Run:

```bash
npm run typecheck
npm run lint
npm run build
```

Then manually check:

```txt
/
/services
/solutions
/case-studies
/insights
/company
/contact
```

Check:

```txt
No runtime errors
No horizontal scrolling on mobile
Navbar works
Mobile menu opens/closes
Hero visual loads
Cards align correctly
CTA buttons are visible
Footer links and newsletter area are visible
Logo renders correctly
```

