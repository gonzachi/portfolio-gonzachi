---
name: Precision Wealth
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#3c4a3d'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#6c7b6c'
  outline-variant: '#bbcbb9'
  surface-tint: '#006d32'
  primary: '#006d32'
  on-primary: '#ffffff'
  primary-container: '#00d166'
  on-primary-container: '#005324'
  inverse-primary: '#30e375'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5c5f61'
  on-tertiary: '#ffffff'
  tertiary-container: '#b3b6b8'
  on-tertiary-container: '#444749'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#64ff92'
  primary-fixed-dim: '#30e375'
  on-primary-fixed: '#00210b'
  on-primary-fixed-variant: '#005224'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1140px
  gutter: 24px
  margin-x: 32px
  section-gap: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered for the modern fintech landscape, specifically targeting retail investors who value transparency and clarity. The brand personality is **professional yet approachable**, aiming to evoke a sense of **financial confidence, stability, and intelligence**.

The visual style is **Corporate Modern with a "Soft-Tech" edge**. It utilizes high-quality whitespace and a logical information hierarchy to make complex data digestible. Key characteristics include:
- **Clarity over Clutter:** Every element has a functional purpose, following a structured "container-based" approach.
- **Data-Forward:** Charts and metrics are the primary visual heroes, treated with clean lines and subtle gradients.
- **Trust-Building:** Use of soft borders and gentle shadows to differentiate between educational content and actionable financial data.

## Colors

The palette is rooted in a high-contrast foundation to ensure financial data remains the focal point.

- **Primary (Vibrant Green):** Reserved for positive growth indicators, primary actions (CTAs), and highlighting the "optimal" path. It signifies health and progress.
- **Secondary (Deep Carbon):** Used for primary headings and heavy text to provide a grounded, authoritative feel.
- **Tertiary (Soft Slate):** Applied to container backgrounds and section dividers to create subtle depth without visual noise.
- **Status Colors:** Use standard semantic reds and ambers for risk or negative trends, but prioritize the primary green for the "success" state typical of an optimized portfolio.

## Typography

This design system uses **Hanken Grotesk** across all levels to maintain a sharp, contemporary, and highly legible appearance. 

- **Weight Strategy:** Use Bold (700) for section headers and core metrics. Use Medium (500) for sub-labels and secondary buttons. Regular (400) is strictly for descriptive body copy.
- **Hierarchy:** Large display sizes are used for the primary portfolio name and main call-to-action sections. 
- **Data Display:** Numerical data (percentages, currency) should use the same font but with tabular lining figures if available to ensure alignment in lists.

## Layout & Spacing

The layout follows a **Fixed-Width Centered Grid** for desktop to ensure readability of data-heavy charts, transitioning to a fluid single-column for mobile.

- **Grid System:** A 12-column grid is used. 
    - Full-width hero elements span 12 columns.
    - Information splits typically follow a 4/8 or 1/3 (side list / detail view) ratio.
    - Metric cards are often laid out in 3-column (4-span) or 2-column (6-span) configurations.
- **Sectioning:** Distinct vertical sections are separated by significant whitespace (80px) or subtle background color shifts.
- **Padding:** Containers use a consistent 32px internal padding to maintain "breathing room" around data visualizations.

## Elevation & Depth

This design system utilizes **Tonal Layering** and **Ghost Outlines** rather than heavy shadows to indicate depth.

- **Level 0 (Base):** White (#FFFFFF) or very light grey (#F5F7F9) for the main canvas.
- **Level 1 (Cards):** Containers are defined by a 1px solid border (#E5E7EB) rather than a shadow. This keeps the interface feeling "flat" and professional.
- **Level 2 (Active/Hover):** A very soft, diffused ambient shadow (0px 4px 20px rgba(0,0,0,0.05)) can be used on interactive cards or the primary CTA button to indicate lift.
- **Depth through Color:** Background fills for secondary information sections use the Tertiary color to create a nested visual effect.

## Shapes

The shape language is **Rounded**, balancing the mechanical nature of financial data with a friendly, modern feel.

- **Core Elements:** Buttons, input fields, and standard cards use a 0.5rem (8px) radius.
- **Large Containers:** Section-level wrappers or large data visualizations may use up to 1rem (16px) to soften the overall layout.
- **Badges/Chips:** Use a fully "pill-shaped" radius to distinguish them from interactive buttons or cards.

## Components

### Buttons
- **Primary:** Solid Primary Green with White text. Bold weight. High-contrast and center-aligned.
- **Secondary:** Transparent background with a 1px border or subtle grey fill.

### Cards & Containers
- All cards must have a 1px border. 
- Use "Header" areas within cards (differentiated by a thin line or background tint) to separate labels from the main content.

### Data Visualizations
- **Charts:** Use a 2px stroke width for lines. Area charts should use a subtle vertical gradient (Primary Color to Transparent).
- **Metric Highlights:** Large bold font for the value, with a smaller, grey label-sm above it.

### Input Fields & Controls
- **Toggle/Tabs:** Use a "Segmented Control" style with a grey background track and a white "floating" active state.
- **Checkboxes:** Square with the standard roundedness (2px) and a primary green fill when checked.

### Lists
- Portfolio breakdowns should use horizontal rows with 16px vertical padding, separated by a thin 1px divider. The left side of the row should contain the "percentage weight" in a bold badge.