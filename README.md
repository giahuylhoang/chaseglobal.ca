# Chase Global Landing Implementation

## Routes
- `/` unified landing
- `/immigration` immigration landing
- `/education` education landing

## Section Mapping
- **Hero**: inspired from source headlines and CTA language
- **Trust Strip**: review-style credibility and counters
- **Services**: direct service vocabulary from source pages
- **Testimonials**: curated trust statements from immigration review tone
- **Partners/Certifications**: local logos and credibility badges
- **Country Brands**: destination/country emphasis with flag and region tiles
- **Final CTA**: appointment and free assessment conversion blocks

## Component Handoff
- Shared sections: `components/sections.tsx`
- Shared content tokens: `lib/content.ts`
- Theme system: `app/globals.css`
- Route pages:
  - `app/page.tsx`
  - `app/immigration/page.tsx`
  - `app/education/page.tsx`
