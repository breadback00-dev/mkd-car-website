# Website Specification – Used Car Dealer

## Objective
Build a modern, clean, fast-loading website for a single-location used car dealer in Bristol.

Primary outcomes:
- Phone calls
- Inquiry submissions
- Trust through clarity

---

## Required Pages

### Home
- Hero with phone CTA
- Featured vehicles
- Why Buy From Us
- Visit Us section with map
- Final CTA

### Inventory
- Grid layout
- Reusable vehicle cards
- No complex filtering (v1)

### Individual Car Page
- Image gallery
- Price prominent
- Mileage
- Description
- Phone CTA above fold
- Inquiry form
- Location reminder

### Contact
- Phone number
- Contact form
- Full address
- Embedded map

---

## Data Structure

Each vehicle:
- id
- year
- make
- model
- price
- mileage
- images[]
- description
- featured (boolean)

---

## Constraints
Must:
- Follow design system
- Keep layout clean
- Keep address highly visible

Must Not:
- Add CMS
- Add unnecessary libraries
- Overcomplicate routing
