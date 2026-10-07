# TASKS.md — Agency Website Project

## Status: ✅ COMPLETED (Production Ready)

## Milestone 1 — Foundation ✅
- [x] Read PRD.md and DESIGN.md
- [x] Inspect existing project structure
- [x] Install dependencies (`lucide-react`, `clsx`, `tailwind-merge`)
- [x] Design system CSS (`globals.css` with dark/light themes, typography, utilities)
- [x] Root layout with comprehensive metadata and Inter font
- [x] Path alias `@/*` configured in `tsconfig.json`

## Milestone 2 — Data Layer ✅
- [x] `lib/constants.ts` — site constants, navigation, contact, social links
- [x] `lib/utils.ts` — `cn()` styling utility
- [x] `data/services.ts` — 6 comprehensive service definitions with features & deliverables
- [x] `data/projects.ts` — 3 full case studies (FoodFlow, BuildTrack, StorePro)
- [x] `data/pricing.ts` — 3 transparent pricing tiers with feature comparisons
- [x] `data/faqs.ts` — 7 categorized FAQs
- [x] `data/process.ts` — 5-step transparent workflow
- [x] `data/technologies.ts` — categorized tech stack (Frontend, Backend, Database, Cloud & DevOps, Mobile)

## Milestone 3 — Core Components ✅
- [x] `components/navbar/Navbar.tsx` — sticky, mobile overlay menu, dark mode toggle (`useSyncExternalStore`)
- [x] `components/footer/Footer.tsx` — multi-column navigation, social channels, copyright
- [x] `components/hero/Hero.tsx` — badge, responsive headline, primary & secondary CTAs, live metric cards
- [x] `components/services/Services.tsx` — 6 service cards grid with feature pills and detail links
- [x] `components/portfolio/Portfolio.tsx` — interactive case study cards with tags and metrics
- [x] `components/why-us/WhyUs.tsx` — 4 value pillars with stats highlight banner
- [x] `components/process/Process.tsx` — step-by-step roadmap with timeline indicators
- [x] `components/tech-stack/TechStack.tsx` — category tabs and technologies grid
- [x] `components/pricing/Pricing.tsx` — 3 pricing tiers with popular highlight and WhatsApp CTA
- [x] `components/faq/FAQ.tsx` — accessible accordion with animated toggles
- [x] `components/cta/CTA.tsx` — full-width high-converting banner
- [x] `components/contact/ContactForm.tsx` — validated client form with loading and success states

## Milestone 4 — Pages ✅
- [x] `app/page.tsx` — Home page assembling all core sections
- [x] `app/services/page.tsx` — Full services directory with deep-dive breakdowns
- [x] `app/services/[service]/page.tsx` — Dynamic SSG service detail pages with `generateStaticParams`
- [x] `app/portfolio/page.tsx` — Portfolio listing with category filters
- [x] `app/portfolio/[slug]/page.tsx` — Dynamic SSG case study pages with `generateStaticParams`
- [x] `app/about/page.tsx` — About company, core mission, vision, and principles
- [x] `app/process/page.tsx` — Dedicated development process workflow page
- [x] `app/pricing/page.tsx` — Dedicated pricing and FAQs page
- [x] `app/contact/page.tsx` — Contact page with form and direct channels (WhatsApp, Email)
- [x] `app/not-found.tsx` — Custom branded 404 page

## Milestone 5 — SEO & Assets ✅
- [x] `app/sitemap.ts` — Dynamic sitemap generator covering all 22 static and SSG routes
- [x] `app/robots.ts` — Crawler instructions with sitemap reference
- [x] `app/opengraph-image.tsx` — Dynamic Open Graph social sharing image
- [x] Comprehensive meta titles, descriptions, OpenGraph, and Twitter tags on all pages

## Milestone 6 — QA & Verification ✅
- [x] ESLint check (`pnpm lint`) — 0 errors, 0 warnings
- [x] TypeScript check (`tsc`) — 0 type errors
- [x] Production build (`next build`) — 22 routes generated statically (SSG/Static)
- [x] Accessibility (ARIA labels, keyboard-friendly accordion, skip links, semantic HTML5)
- [x] Mobile responsiveness (fluid typography, responsive flex/grid layouts, mobile drawer)

## Milestone 7 — Optimization & Delivery ✅
- [x] Dark / Light mode toggle persistence with zero hydration mismatch
- [x] Server and Client component boundary optimization
- [x] Clean architecture with zero unused dependencies
