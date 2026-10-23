# Changelog

All notable changes to the TIP Lab website are recorded here, newest first.

## 2026-10-22

### Added
- **Publications page** (`src/app/publications/page.tsx`): Added two new 2026 publications at the top of the 2026 list, each linking to its DOI:
  - Mulenga D, et al. *Surveillance of Athletes' Health in Resource-Constrained African Sports Contexts: Why Context Matters and Time to Catch Up.* Int J Sports Phys Ther. 2026. doi: 10.26603/001c.171307.
  - Owoeye OBA, et al. *Exploring a systems-based, multifactorial framework for load tolerance and injury risk in women's soccer: A prospective study.* J Sci Med Sport. 2026. doi: 10.1016/j.jsams.2026.09.008.
  - A third requested paper (Tao M, et al., *The Effect of Neuromuscular Exercise Interventions on Athletic Performance Across Different Levels*, IJSPP) was already listed under 2026, so it was not added again.

### Changed
- **Community Testing page** (`src/app/community-testing/page.tsx`): Changed the payment note from "Only cash or checks are accepted for payment." to "Only checks (preferred) or cash are accepted for payment."
- **Publications page** (`src/app/publications/page.tsx`): In the existing 2026 Tao M, et al. (IJSPP) entry, changed the author name "Oluwatoyosi B. A. Owoeye" to "Owoeye OBA" to match the citation provided.

### Removed
- **Community Testing page** (`src/app/community-testing/page.tsx`): Removed the "Lower Extremity Strength and Balance Testing" service (description of isometric dynamometry and Biodex Biosway testing, and its full rate table: SLU $40/$30, Non-SLU $60/$40, Funded Research $60/$80). The DEXA scan service is now the only listed testing service.
- **Support Us page** (`src/app/donate/page.tsx`): Removed all Dink for a Difference content, keeping the intro text and the Donate section (donation link, QR code, thank-you note) unchanged:
  - "Upcoming Event" section: event date, time, venue, description, ticket prices, "Register Now" link, and the event flyer.
  - "Become a Sponsor" section: sponsorship tiers, sponsor and event contacts (Kathryn Dortch, Theodore Yemm), and the sponsorship flyer.
  - The jump-link bar (Upcoming Event / Become a Sponsor / Donate), since only "Donate" would have been left.
  - Unused code left over from those sections (`ticketPrices` list, `LightboxImage` import).
  - The flyer images in `public/images/events/` were kept on disk but are no longer used anywhere on the site.
- **Home page:** Removed the "Dink for a Difference — Sept 11, 2026 / View Event →" announcement banner above the main heading (`src/app/page.tsx`). The event itself is still listed on the Donate page (`src/app/donate/page.tsx`).
