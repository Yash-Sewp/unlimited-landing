# Insurance Landing Page — Red Accent Design (matches provided layout)

## Strict Layout Requirements (for generator)
- Produce a complete, responsive HTML page using TailwindCSS v2 utilities (via CDN). Do not include a custom <style> block.
- Header must render first. Insert the hero banner immediately after the header. After the hero, render sections in this order: Why Choose, How It Works, What’s Covered, Why Trust Us, FAQs, Final CTA, Footer.
- Header: brand text "The" in black and "Unlimited" in red; right-aligned nav: Benefits, How it works, Cover, FAQs; right CTA button: Get a Quote.
- Hero (full-bleed) requirements:
  - <section> classes: `relative bg-cover bg-center min-h-screen` and inline `style="background-image:url('./bg.webp')"`.
  - Inner layout: `.inner-container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-12`.
  - Left: headline "UNMUTE the" with the word “what‑ifs.” on a new line in red `text-red-600`.
  - Left subheading: “Life happens. We keep it simple: cover that pays out quickly, without the fine print.”
  - CTAs: primary "Get a Quick Quote" (red), secondary "See What’s Covered" (white with red border).
  - Right: a card titled "Get Your Quick Quote" with fields: Full name, Age, Smoker? (Yes/No), Cover amount (R50 000 / R100 000 / R200 000), Email; submit button: "Next / Get Quote"; small fine‑print text below. Give the form `id="quote-form"` and the section anchor `id="quote"` on the card container.
- Benefits section id must be `benefits`. How It Works section id must be `how`.
- Use `.page-container` and `.inner-container` wrappers; never add `mx-auto`, `max-w-screen-md`, `max-w-md`, or `pt-20` to `.page-container`.
- Prefer text colors: slate for copy, red-600/700 for CTAs. Keep surfaces white or very light gray.

## Header
- Brand at far-left. The word "Unlimited" is slightly red: "The" in black, "Unlimited" in red
- Right-aligned nav: Benefits, How it works, Cover, FAQs.
- Primary CTA at far-right: **Get a Quote**.

## Hero (image left, form right)
- Background image across the hero using placeholder: `./bg.webp` - Full background image - End to end of screen
- Left half content:
  - Headline (two-line): first line in black: **UNMUTE the**; second line in red: **what‑ifs.**
  - Subheading: **Life happens. We keep it simple: cover that pays out quickly, without the fine print.**
  - CTAs: Primary — **Get a Quick Quote**; Secondary — **See What’s Covered**
- Right column card: **Get Your Quick Quote** form with fields:
  1) Full name (input)
  2) Age (input)
  3) Smoker? (select Yes/No)
  4) Cover amount (select)
  5) Email (input)
  - Button row: **Next** and **Get Quote**
  - Small fine‑print line under the form.

## Why Choose Section
- Heading: **Why Choose The Unlimited?**
- One‑line subheading about making insurance work for you.
- Four feature cards (icons top, title, one‑line copy):
  - Fast claims, no nonsense
  - Price match promise
  - Leading partners
  - Straight talk

## How It Works
- Heading: **How It Works** with the word “Works” highlighted in red.
- Three numbered tiles (01, 02, 03):
  - Tell us about you
  - See your options fast
  - Get covered today

## What’s Covered?
- Heading: **What’s Covered?** with “Covered” highlighted in red.
- Subheading: choose the protection that fits your life.
- Six cards:
  - Life cover
  - Accidental death
  - Funeral benefit
  - Disability option
  - Premium freeze
  - Add family

## Why Trust Us?
- Short reassurance subheading.
- Six benefit tiles:
  - Price match guarantee
  - No‑obligation quotes
  - All leading insurers
  - Independent & impartial
  - Expert advice
  - Save the hassle

## Frequently Asked Questions
- Accordion list with short answers:
  - How fast is a payout?
  - What if you make a mistake?
  - Do I have to take every option?
  - What’s the fine print like?
  - Can I change my mind?
  - How do I know you’re legit?

## Final CTA Banner
- Full‑width red band with headline: **Ready to UNLOCK peace of mind?**
- Supporting line inviting users to join thousands of South Africans.
- Centered primary button: **Get a Quote**.

## Footer
- Dark footer with brand at left, copyright in center, and links at right:
  - Privacy Policy
  - Terms & Conditions

## Visual/Theme Notes
- Clean white surfaces with very light gray section breaks; red/orange accent for CTAs and highlights.
- Rounded cards with soft shadows; subtle icon glow in red.
- Generous spacing; large, bold headings; uppercase CTAs.
- Rounded CTAs, similar to the cards
- Primary button - red background, white text. Secondary - white background red text with red border

## Tailwind Style Guide (generator hints)
- Use Tailwind v2 utilities plus the custom `page-container` wrapper.
- Colors/accents:
  - Primary red: `bg-red-600 hover:bg-red-700 text-white`
  - Emphasis red text: `text-red-600`
  - Base text: `text-slate-900`; body copy: `text-slate-600`
- Header/nav:
  - Wrapper: `border-b-2 border-red-500 bg-white`
  - Inside: `div.page-container flex items-center justify-between h-16` (do not add `mx-auto`, `max-w-screen-md`, or `pt-20` to `page-container`)
  - Nav links: `hidden md:flex items-center gap-8 text-slate-600 hover:text-slate-900`
  - CTA: `inline-flex items-center rounded-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 font-semibold`
- Hero:
  - Section: `relative bg-cover bg-center min-h-screen` using the placeholder image as background
  - Layout: `grid grid-cols-1 lg:grid-cols-2 gap-8 page-container py-12`
  - Headline pattern:
    - Wrapper: `font-extrabold leading-tight text-slate-900`
    - Red line: place “what‑ifs.” in a block `span` with `text-red-600 block`
  - Form card: `card bg-white shadow-md rounded-lg p-6 w-full max-w-sm ml-auto`
- Buttons:
  - Primary: `bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5`
  - Secondary: `bg-white text-red-600 border border-red-600 font-semibold px-5 py-2.5`
- Sections and grids:
  - Section wrapper: `py-12`
  - Feature/benefit grids: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
  - Cards: `card rounded-xl shadow-md p-6`
- Footer:
  - Wrapper: `bg-slate-900 text-slate-300 py-12`
  - Links: `text-slate-300 hover:text-white`