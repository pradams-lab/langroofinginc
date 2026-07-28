# Lang Roofing Portal

Create a modern, premium, and structurally heavy website for "Lang Roofing Inc.", a premier roofing contractor established in 1974 specializing in massive commercial, public/municipal, and high-end residential roofing projects across Southern California. 

The site must completely avoid generic "AI software/SaaS web templates" (no floating, disconnected blocks, no cartoonish rounded buttons, no neon gradients). Instead, utilize hard geometry, crisp structural layout lines, and editorial typography that feels like a high-end architectural or industrial engineering portfolio.

---

### 1. DESIGN & BRANDING SYSTEM
- **Color Palette:**
  - Primary: Deep Navy Blue (`#0B2545`) for dominant structural elements, dark background sections, and primary headers.
  - Accent: High-contrast Crimson Red (`#D90429`) used strictly and surgically for high-priority Call-To-Actions (CTAs) and focus indicators.
  - Base Backgrounds: Clean, crisp White (`#FFFFFF`) layered with technical Slate Gray (`#F8F9FA` and `#E2E8F0`) for structural grid lines and section dividers.
- **Typography:**
  - Headers: Sharp, authoritative, high-contrast serif typeface (e.g., Playfair Display or Merriweather) to project heritage, trust, and premium craftsmanship.
  - Body & UI: Clean, geometric sans-serif (e.g., Plus Jakarta Sans or Roboto) with meticulous line-height and letter-spacing for technical readability.
- **Visual Style:** Use sharp corners with minimal radius (max 4px/`rounded-md`). Avoid blurry, large box shadows; instead, use thin, crisp borders to define cards and sections, mimicking a blueprint or technical drawing layout.

---

### 2. ARCHITECTURE & SECTION BREAKDOWN

#### A. Navigation Bar
- Minimalist, clean, and sticky layout with a solid background upon scroll.
- Left side: Clean typography logo "LANG ROOFING INC." paired with a subtle subtitle indicator "EST. 1974".
- Center: Navigation paths: Commercial | Public Properties | Residential | Case Studies.
- Right side: A prominent Crimson Red CTA button: "Request Enterprise Quote".

#### B. Hero Section (Dynamic & Heavyweight)
- **Background:** An automatic, elegant fading carousel background showing high-resolution industrial, commercial, and multi-family roofing projects. Apply a smooth dark navy blue linear gradient overlay shifting from dark on the left (for text contrast) to clear on the right.
- **Content Block (Left-Aligned):**
  - Small uppercase technical tag: `▲ SINCE 1974 // SOUTHERN CALIFORNIA`
  - Main Headline: "Protecting Southern California’s Infrastructure For Over 50 Years."
  - Subheadline: "Bespoke roofing solutions for commercial complexes, municipal facilities, industrial parks, and premium HOAs. Built to endure, backed by five decades of master workmanship."
  - CTAs: Primary Crimson Red button "Request Enterprise Quote" placed side-by-side with a secondary white-bordered button "View Industrial Portfolio".

#### C. The Core Infrastructure Trust Bar (Immediately Below Hero)
- A sharp, 3-column architectural row separated by thin vertical slate-gray dividing lines.
- **Column 1:** **50+ Years** of Unmatched Field Workmanship
- **Column 2:** **Fully Bonded & Insured** // California State Licensed
- **Column 3:** **Title 24 Compliant** Cool Roof Membrane Certified

#### D. The Three Pillars of Service (Interactive Grid Section)
- An asymmetric 3-card structural layout. Each card should feature a clean, technical layout icon, uppercase numerical markers (e.g., `01 // COMMERCIAL`), and a smooth top-border color transition to Crimson Red on hover.
- **Card 1: Commercial & Industrial Properties**
  - Core services listed in clean bullet formats: Refineries, Industrial Complexes, Storage Facilities, Hotels, Business Centers, Strip Malls, HVAC Ducting Platforms, Turbine Install & Repairs.
- **Card 2: Public & Municipal Properties**
  - Core services listed: Government Owned Buildings, Educational Facilities, Religious Facilities, Hospitals / Clinics, Libraries, City Halls, Parks & Recreation.
- **Card 3: Multi-Family & Residential Infrastructure**
  - Core services listed: Homeowner Associations (HOAs), Condominiums, Apartment Complexes, Townhome Developments, Single Family Estates.

#### E. Technical Specialties & Roof Drains List Section
- A clean, 2-column layout displaying deep mechanical roofing capabilities.
- **Column 1 (Roofing Specialties):** Roof Replacements, Restorations, Emergency Repairs, Maintenance and Repairs, Custom Sheet Metal Work (Gutters to Coping), Title 24 Compliant "Cool Roof" Membranes & Coatings, Roof Insulation.
- **Column 2 (Roof Drains & Systems):** Additions of New Drains, Replacements of Existing Drains, Overflow Systems, Collector Boxes, Downspouts, Scuppers.

#### F. Interactive Before/After Case Study Component
- Instead of standard image galleries, build an interactive split-screen Before/After slider component. 
- Features a crisp, vertical drag handle that allows potential clients to slide between a damaged/worn commercial flat roof ("Before") and a pristine, newly finished Title 24 compliant membrane installation completed by Lang Roofing Inc. ("After").
- Include filter tabs at the top of this section: All Projects | Commercial Flat Roofs | Tile & Shingle Repairs | Custom Sheet Metal.

#### G. High-Conversion Multi-Step Enterprise Quote Engine
- Replace lengthy forms with a beautifully padded, high-end lead generation asset.
- Collects: Contact Name, Business Email, Direct Phone, Project Address (Street, City, Zip Code), and Property Type Selection (Dropdown: Commercial, Public, Residential HOA).
- Includes a dedicated file upload drag-and-drop zone labeled: "Attach Existing Roof Layouts, Blueprints, or Damage Photos (Optional)".
- Call to action submit button: Large, solid Crimson Red button centered at the bottom reading "Submit Request for Proposal".

#### H. Footer Block
- Clean, dark navy background.
- Left side: Full contact directory: Phone: (562) 923-8728 | Email: Customerservice@langroofinginc.com.
- Center: Operating Hours panel: Mon - Fri: 08:00 am – 05:00 pm | Sat & Sun: Closed.
- Right side: Clean, minimalist Email Subscription box for maintenance reminders and a clean copyright string: "Copyright © 2026 LangRoofingInc.com - All Rights Reserved. Powered by Sprix."
- Footer bottom: Minimalist social link icons for Instagram and Yelp.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://langroofinginc.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e5df5bbf-b557-4624-9e19-db8da1861724).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
