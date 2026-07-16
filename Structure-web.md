# Aarkax Website Structure

## Direction

Aarkax should feel like a premium enterprise technology company for data engineering, AI systems, cloud data platforms, automation, and analytics. The site can use the high-performance energy of enterprise compute websites as inspiration, but it must keep Aarkax's own brand, content, colors, typography, and visual system.

The recommended visual direction is a dark enterprise technology UI with precise data-grid details, cloud nodes, AI pipeline diagrams, abstract compute patterns, glowing connector lines, and restrained motion.

## Brand Positioning

**Brand:** Aarkax

**Core message:** Build AI-ready data systems that scale.

**One-line description:** Aarkax helps enterprises convert scattered data into reliable platforms, automated dashboards, and intelligent AI workflows.

**Personality:** Futuristic, enterprise, technical, premium, reliable, intelligent.

## Primary Navigation

```txt
Logo
Services
Solutions
Case Studies
Insights
Company
Contact
Book a Strategy Call
```

For smaller screens:

```txt
Logo
Menu
Book a Call
```

## Homepage Layout

### 1. Header

**Purpose:** Establish trust, expose major service paths, and keep the primary conversion action visible.

**Elements:**
- Aarkax logo
- Services
- Solutions
- Case Studies
- Insights
- Company
- Contact
- Primary CTA: Book a Strategy Call

**Behavior:**
- Transparent over the hero at page top.
- Switches to deep navy surface after scroll.
- Mobile menu opens as a full-screen dark panel with large tap targets.

### 2. Hero

**Headline:**

> Build AI-ready data systems that scale.

**Subheadline:**

> Aarkax helps enterprises convert scattered data into reliable platforms, automated dashboards, and intelligent AI workflows.

**CTAs:**
- Start a Project
- Explore Solutions

**Visual:**
- Full-width dark hero.
- Interactive abstract cloud-data-AI background.
- Visual language should include flowing data lines, connected cloud nodes, AI pipeline blocks, and subtle particle motion.
- Keep the hero professional and inspectable, not cartoon-like or overloaded.

**Supporting proof strip:**

```txt
Cloud Data Platforms
Data Engineering
AI Systems
Automation
Analytics
```

### 3. Services

**Section headline:**

> Data, cloud, and AI systems built for enterprise execution.

**Cards:**
- Cloud Data Platforms
- Data Engineering
- AI & ML Systems
- Automation Workflows
- Analytics Dashboards
- Data Quality & Governance

**Card content model:**

```txt
Service title
Short outcome-focused description
3 technical capabilities
Explore service CTA
```

### 4. Solutions

**Section headline:**

> Solutions for teams that depend on trusted data.

**Cards:**
- Operations
- Finance
- Sales
- Enterprise AI
- Data Teams

**Card content model:**

```txt
Business function
Pain point
Aarkax solution
Expected outcome
```

### 5. Proof

**Purpose:** Show reliability, business outcomes, and implementation maturity.

**Elements:**
- Metrics
- Outcomes
- Case study cards
- Reliability statements

**Suggested metrics:**

```txt
99.9% pipeline reliability target
50%+ reporting time reduction
30% cloud cost optimization opportunity
5-stage architecture delivery process
```

Use real numbers once client or internal proof points are available.

### 6. Process

**Section headline:**

> From scattered systems to AI-ready infrastructure.

**Steps:**

```txt
01 Discover
Map data sources, teams, reporting gaps, and business goals.

02 Design
Define the target cloud, data, dashboard, and automation architecture.

03 Build
Develop pipelines, models, APIs, dashboards, and workflow automation.

04 Automate
Reduce manual reporting and operational dependency through reliable systems.

05 Optimize
Improve cost, performance, data quality, monitoring, and AI readiness.
```

### 7. Technical Depth

**Section headline:**

> Architecture-first delivery for systems that keep working.

**Elements:**
- Architecture-first delivery
- Modular pipelines
- API-ready systems
- Monitoring and observability
- Data quality checks
- Governance and access control

**Visual:**
- Dark technical band with a pipeline architecture diagram.
- Use code-like labels, system status pills, node diagrams, and subtle animated connector lines.

### 8. Insights Preview

**Purpose:** Give the brand an expert voice and create future SEO structure.

**Cards:**
- Data platform strategy
- AI readiness
- Automation playbooks
- Analytics architecture

### 9. Final CTA

**Headline:**

> Ready to make your data AI-ready?

**Body:**

> Talk to Aarkax about building reliable data platforms, automated intelligence systems, and AI workflows for your business.

**Button:**

> Talk to Aarkax

## Website Pages

```txt
/
/services
/services/cloud-data-platforms
/services/data-engineering
/services/ai-ml-systems
/services/automation-workflows
/services/analytics-dashboards
/services/data-quality-governance
/solutions
/solutions/operations
/solutions/finance
/solutions/sales
/solutions/enterprise-ai
/solutions/data-teams
/case-studies
/case-studies/[slug]
/insights
/insights/[slug]
/company
/contact
```

## Component List

### Global Components

```txt
SiteHeader
MobileMenu
SiteFooter
LogoMark
PrimaryButton
SecondaryButton
TextLink
SectionHeader
MetricRow
StatusPill
```

### Homepage Components

```txt
HeroDataNetwork
ServiceCard
SolutionCard
ProofMetric
CaseStudyPreviewCard
ProcessTimeline
TechnicalArchitecturePanel
InsightCard
FinalCtaBand
```

### Visual Components

```txt
DataGridBackground
CloudNodeMap
PipelineDiagram
ComputePattern
GlowConnector
ParticleField
```

## Color Palette

Use the existing Aarkax brand color family, adapted to a darker enterprise UI.

```css
:root {
  --aarkax-navy: #06172A;
  --aarkax-teal: #08473D;
  --aarkax-orange: #E89610;
  --aarkax-white: #FFFFFF;
  --aarkax-off-white: #F8F5EE;

  --aarkax-bg-deep: #030914;
  --aarkax-bg-panel: #07192B;
  --aarkax-bg-panel-soft: #0B2238;
  --aarkax-line: rgba(255, 255, 255, 0.12);
  --aarkax-line-strong: rgba(232, 150, 16, 0.55);
  --aarkax-text: #F8F5EE;
  --aarkax-muted: #A9B6C7;
  --aarkax-teal-glow: rgba(8, 71, 61, 0.75);
  --aarkax-orange-glow: rgba(232, 150, 16, 0.36);
}
```

**Usage:**
- Deep navy / near-black for page background and hero.
- Teal for infrastructure diagrams, data nodes, technical tags, and dark panel accents.
- Orange for primary CTAs, active states, important metrics, and glow highlights.
- Off-white for readable body text on dark surfaces.
- White for logo-safe spaces, form surfaces, and occasional contrast.

## Typography Direction

**Recommended font stack:**

```css
font-family: "Inter", "Söhne", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

**Mono font stack:**

```css
font-family: "JetBrains Mono", "IBM Plex Mono", ui-monospace, Menlo, monospace;
```

**Rules:**
- Use bold, mixed-case hero typography.
- Avoid large all-caps headlines.
- Use mono labels for technical tags, metrics, architecture annotations, and system states.
- Keep body text clean, readable, and high contrast.

**Suggested scale:**

```txt
Hero headline: 64-80px desktop, 42-52px tablet, 36-42px mobile
Section headline: 44-56px desktop, 34-42px tablet, 28-34px mobile
Card title: 20-24px
Body: 16-18px
Caption / mono labels: 12-14px
```

## Animation Notes

Animations should feel technical and restrained.

```txt
Header: subtle background transition on scroll
Hero: slow data flow lines, particle drift, node pulse
Cards: hover glow, 2-4px lift, border highlight
Buttons: orange glow on hover, clear focus ring
Technical diagrams: slow connector movement and status pulse
Page transitions: minimal fade/slide, no heavy motion
```

Avoid overloaded animations, spinning 3D objects, cartoon graphics, and generic SaaS blob backgrounds.

## Responsive Behavior

### Mobile First

```txt
320-767px:
- Single-column layout
- Compact header
- Full-screen mobile nav
- Hero visual behind text or below CTA
- Cards stack vertically
- Metrics become 2-up or 1-up depending on width
- CTA buttons stack full-width
```

### Tablet

```txt
768-1023px:
- 2-column service and solution cards
- Hero keeps text primary and visual secondary
- Process steps can use alternating rows
- Technical diagrams simplify labels
```

### Desktop

```txt
1024px+:
- 12-column grid
- Hero text left, interactive data visual right/full-bleed
- Services use 3-up grid
- Solutions use 5-card flexible grid or 3+2 layout
- Proof and technical sections can use split layouts
```

## Accessibility Requirements

```txt
Use high contrast text on dark backgrounds.
Maintain visible focus states for links, buttons, and form fields.
Keep CTA labels clear and action-oriented.
Do not rely on color alone to communicate status.
Respect prefers-reduced-motion.
Use semantic headings and landmarks.
Add descriptive alt text for diagrams and images.
```

## Image And Asset Folder Structure

Website image folders are created under:

```txt
/public/images/
```

Recommended structure:

```txt
public/images/
  brand/
    aarkax_primary_logo_horizontal.svg
    aarkax_primary_symbol.svg
    favicon.ico
    apple-touch-icon.png
  backgrounds/
    hero-data-network.webp
    cloud-ai-grid.webp
    technical-depth-pattern.webp
  diagrams/
    ai-ready-data-platform.svg
    cloud-data-pipeline.svg
    monitoring-observability.svg
  services/
    cloud-data-platforms.webp
    data-engineering.webp
    ai-ml-systems.webp
    automation-workflows.webp
    analytics-dashboards.webp
    governance.webp
  solutions/
    operations.webp
    finance.webp
    sales.webp
    enterprise-ai.webp
    data-teams.webp
  case-studies/
    case-study-placeholder.webp
  icons/
    service-icons.svg
  social/
    aarkax_open_graph_1200x630.png
```

Original source logo assets remain in:

```txt
/home/ishan/Documents/Aarkax/aarkax_logo_assets/
```

Use the source folder for master assets and export optimized web copies into `public/images/brand/`.

## Implementation Notes

```txt
Use the brand logo assets from public/images/brand.
Use SVG for diagrams and icons where possible.
Use WebP or AVIF for generated abstract backgrounds.
Keep background visuals dark, technical, and brand-colored.
Avoid generic office stock photos.
Avoid copying Tenstorrent layout, text, color, image treatment, or exact page composition.
```
