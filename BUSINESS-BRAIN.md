# BUSINESS BRAIN — CAPLEX EQUITY ECOSYSTEM

> Generated: 2026-03-26
> Source: Full workspace analysis of caplex-site codebase
> Status: Draft — Agent section requires additional input

---

## 1. COMPANIES OVERVIEW

Vertically integrated real estate investment platform — six companies covering every phase of a deal's lifecycle.

### Active / Live

| Company | Phase | What It Does | Website | Revenue Stream |
|---|---|---|---|---|
| **Caplex Equity LLC** | ACQUIRE | Investment-focused brokerage. Deal sourcing, underwriting, client relationships. | cap-lex.com | Buyer agent commissions, sourcing fees, advisory |
| **AMP Live Group LLC** | IMPROVE | Full-service renovation & remodeling. Alexa runs on-site weekly. | amplivegroupllc.com | Construction margins, project management fees |
| **Bloxx Property Management** | OPERATE | Full-service PM built for investors, by investors. | bloxxpm.com | PM percentage (8-10% of gross rent) |

### Planned / Coming Soon

| Company | Phase | What It Will Do | Revenue Stream |
|---|---|---|---|
| **Apex Acquisitions** | ACQUIRE | Off-market & wholesale deal sourcing before MLS | Wholesale assignment fees, sourcing fees |
| **Furnish4Stay** | FURNISH | STR & furnished rental setup — full furnishing and design | Furnishing packages, design fees |
| **Fixory** | MAINTAIN | Ongoing maintenance, repairs, turnovers | Service fees, maintenance contracts |

### Consolidated Revenue Streams

1. Buyer agent commissions (2.5-3% on acquisitions)
2. Sourcing/wholesale fees (Apex, when live)
3. Construction margins (AMP Live)
4. Project management fees
5. Property management % (Bloxx — recurring monthly)
6. Furnishing packages (Furnish4Stay, when live)
7. Maintenance service fees (Fixory, when live)

**Key insight:** A single BRRRR deal can generate commission + construction margin + PM fees + maintenance fees = 4-5 revenue events from one client relationship.

---

## 2. TEAM & ROLES

### Confirmed

| Person | Role | Responsibilities | Company |
|---|---|---|---|
| **Nir Sheinbein** | Co-Founder, Agent & Investor | Deal sourcing, underwriting, financial modeling, client relationships, investor communications, marketing, content strategy, website development, AI/automation strategy | Caplex Equity |
| **Alexa Peer** | Co-Founder, Construction & Development | On-site execution, contractor meetings, inspections, renovation planning, interior design, STR staging, zoning negotiations, budget control | AMP Live Group |

### Credentials

- Nir Sheinbein — TX Real Estate License #795672
- Brokerage: Texas Ally Real Estate Group LLC (Broker License #9001961)
- Contact: nir@cap-lex.com | +1-858-539-5219
- Address: 18484 Preston Rd, Ste 102 #574, Dallas, TX 75252

### [NEEDS INPUT] — Likely Additional Team

- Bloxx PM staff (leasing agents, maintenance coordinators)
- AMP Live Group crew (contractors, trades, project leads)
- Virtual assistants / admin (transaction coordination)
- Bookkeeper / accountant (6 entities)
- Marketing / social media (YouTube editing, social)

### Role Analysis

**Nir is overloaded.** He is simultaneously: dealmaker, financial analyst, marketing/content creator, website developer, automation strategist, and business architect.

**Alexa is focused and effective.** Clear lane: on-site execution, construction, design.

**The gap:** No ops person between Nir (strategy/deals) and Alexa (construction). Nobody handling: lead intake/CRM, transaction coordination, PM oversight, cross-company communication, investor reporting.

---

## 3. PROCESSES

### Leasing / Client Acquisition Process

**Documented 4-step workflow:**
1. **Call** — Goals, budget, timeline, financing
2. **Deal Flow** — Send options with full underwriting
3. **Close** — Inspections, negotiations, lender coordination
4. **Execute** — Scope, budget, timeline oversight

### Maintenance Process

[NEEDS INPUT] — Fixory is "coming soon." Current process likely ad-hoc through Bloxx PM.

Questions:
- Who receives tenant maintenance requests?
- How are vendors dispatched?
- Approval threshold for owner spend?
- Ticketing/tracking system?

[ASSUMPTION] — Maintenance handled through Bloxx PM with no dedicated system, causing slow responses and pulling Nir/Alexa into operational fires.

### Lead Generation Process

**Inbound channels (confirmed):**
- cap-lex.com → Google Calendar booking (15-min call)
- YouTube (40+ videos) → website funnel
- WhatsApp direct messaging
- Blog/SEO content (20+ articles)
- Referrals from existing clients
- International investor networks (Israel, Mexico, Canada)

**[NEEDS INPUT]:**
- Is there a CRM?
- How are leads tracked after first contact?
- Conversion rate from call → deal?
- Paid advertising?
- How does Trello fit into lead tracking?

[ASSUMPTION] — Lead tracking is manual. Nir manages relationships via memory, texts, and possibly Trello.

### Owner Communication Process

[NEEDS INPUT]:
- How do investors receive updates?
- Reporting cadence?
- Tools used?
- Rehab progress update process?

[ASSUMPTION] — Communication is direct (calls, texts, WhatsApp) with no systematized reporting.

---

## 4. TOOLS & SYSTEMS

### Confirmed

| Tool | Purpose |
|---|---|
| React + Vite | Website framework |
| Tailwind CSS | Website styling |
| Netlify | Hosting & deployment |
| Google Calendar | Appointment scheduling |
| YouTube | Video content (40+ videos) |
| WhatsApp | Client communication |
| Google Drive | File storage (photos, docs) |
| Trello | Project/task management |
| GitHub | Code hosting |
| Claude Code | AI development |
| Zillow | Property research |
| HAR.com | MLS/property data |
| Airbnb | STR listings & research |

### [NEEDS INPUT]

- CRM system?
- Accounting software? (6 entities)
- Property management software? (Bloxx)
- Construction management tool? (AMP Live)
- Lease management / e-signing?
- Deal analysis tools?

---

## 5. AGENTS

**No agents exist in this codebase.** The agents (Dean, Buny, Mage, Rest, Fury) live elsewhere.

| Agent | Purpose | Platform | Inputs | Outputs | Connections |
|---|---|---|---|---|---|
| **Dean** | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] |
| **Buny** | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] |
| **Mage** | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] |
| **Rest** | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] |
| **Fury** | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] | [NEEDS INPUT] |

**To complete:** Point me to wherever these agents live — different repos, n8n workflows, GPT assistants, etc.

---

## 6. BIGGEST PROBLEMS

### Operational Bottlenecks

1. **Nir is a single point of failure.** Every function flows through one person. No documented processes anyone else can follow.

2. **No CRM = leaking leads.** 300+ transactions and international clients managed via text/WhatsApp/memory. Every missed follow-up is $10-30K lost.

3. **Three companies are "Coming Soon" with no visible progress.** Apex, Furnish4Stay, Fixory are on the website with no infrastructure. Brand promise with no delivery.

4. **Everything in one 2,505-line React file.** All business logic, content, routing, components in App.jsx. Updates painful, collaboration impossible.

5. **No systematized owner reporting.** International investors need structured updates. Manual fielding of "how's my property?" calls doesn't scale.

6. **Construction-to-PM handoff is informal.** No visible checklist or system for AMP Live → Bloxx handoff.

### Where Money Is Being Lost

1. **No off-market sourcing (Apex not live).** MLS deals have compressed margins. Off-market is where real profit lives.

2. **Furnishing revenue going to third parties.** STR deals getting furnished by others = revenue designed for Furnish4Stay going elsewhere.

3. **Maintenance margin not captured.** Without Fixory, maintenance on Bloxx properties dispatched to outside vendors at their markup.

4. **Lead follow-up gaps.** No automated sequences = warm leads cooling off. One lost $500K deal = $15K+ commission gone.

5. **No investor pipeline nurturing.** Repeat investors exist (Michael B. — 3 deals, Matt O. — since 2019) but no system to proactively re-engage.

### Inefficiencies

1. **Manual content management.** New case study = editing 2,500-line JSX file + redeploy.
2. **No analytics.** No Google Analytics, Hotjar, or tracking. No idea which pages convert.
3. **Duplicate admin across 6 entities.** Six sets of books, emails, brands.
4. **Chaotic media management.** Inconsistent photo naming, no DAM system.

---

## 7. OPPORTUNITIES

### Immediate Automation

1. **CRM + Lead Pipeline** — Auto-capture leads, drip sequences, pipeline stages. Impact: 15-25% conversion increase.
2. **Investor Reporting** — Automated monthly reports. Impact: Save 5-10 hours/month.
3. **Content Management System** — Headless CMS for non-technical updates. Impact: 10x faster publishing.
4. **Maintenance Ticketing** — Automated dispatch + owner notifications. Impact: Faster response, less manual coordination.
5. **Deal Analysis Automation** — Auto-pull comps, tax data, insurance estimates. Impact: Evaluate 3x more deals.

### AI Replacement Opportunities

1. **Lead Qualification Agent** — AI responds to initial inquiries, qualifies, books calls. Saves 5-10 hours/week.
2. **Deal Screening Agent** — Monitors MLS feeds, runs initial underwriting, surfaces matching deals.
3. **Content Generation** — Auto-generate blog posts, case studies, social posts from deal data.
4. **Tenant Communication Bot** — Handle routine tenant inquiries, escalate exceptions. Reduce PM load 30-40%.
5. **Owner Update Agent** — Generate monthly owner reports from PM data.
6. **Construction Progress Tracker** — Process job site photos into progress reports with timeline tracking.

### Target Agent Architecture

Every phase of the platform should have AI support:
- **Acquire** → Deal screening + lead qualification
- **Improve** → Construction tracking + budget monitoring
- **Furnish** → STR setup checklists + purchasing automation
- **Maintain** → Ticket routing + vendor dispatch
- **Operate** → Tenant communication + owner reporting

---

## SCORECARD

| Area | Grade | Priority |
|---|---|---|
| Deal Sourcing & Underwriting | **B+** | Automate screening to scale |
| Construction & Execution | **A-** | Add project tracking |
| Property Management | **C+** | PM software + automation |
| Lead Generation | **C** | CRM is #1 priority |
| Client Communication | **C+** | Automate reporting |
| Technology / Website | **B-** | Refactor, add CMS |
| Agent Infrastructure | **INCOMPLETE** | Need full agent audit |
| Platform Ecosystem | **B-** | Launch Fixory next (easiest revenue) |
| Revenue Capture | **C+** | Each unlaunched company = leaked money |
| Documentation / SOPs | **D** | Critical for scaling past 2 people |

---

**Bottom line:** Strategy is excellent. Infrastructure is the bottleneck. The business runs on Nir's brain, not on systems. Every dollar spent on CRM, automation, and AI agents returns 10x by freeing Nir to do what only Nir can do: close deals and build relationships.
