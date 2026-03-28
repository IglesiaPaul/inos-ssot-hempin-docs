# Open Questions & Design Decisions Pending

> "Document what you dont know. Decide with intention."

**Version:** 1.0  
**Last Updated:** 2026-01  
**Review Cadence:** Weekly (founder), Quarterly (board)

---

## Overview

This document tracks all unresolved design decisions, open questions, and pending research for INOS/SSOT/HEMPIN. Each question has an owner, deadline, and status.

**Status Options:**
- Open (new question)
- Research (gathering information)
- Decision Pending (ready to decide)
- Decided (decision made, awaiting implementation)
- Closed (resolved)

---

## High Priority (Decide Within 30 Days)

### Q1: Legal Structure Jurisdiction

**Question:** Where should we incorporate the Foundation and OpCo?

**Options:**
- A. Switzerland (Foundation-friendly, neutral, expensive)
- B. Netherlands (Stichting structure, EU access, moderate cost)
- C. Estonia (E-residency, digital-first, less established for foundations)

**Decision Criteria:**
- Grant eligibility (EU programs prefer EU entities)
- Tax efficiency (Foundation tax status)
- Legal precedent (foundation law maturity)
- Operational ease (banking, administration)
- Cost (setup + annual)

**Owner:** Founder + Legal Advisor
**Deadline:** 2026-03-31
**Status:** Open
**Related:** strategy/funding-strategy.md, strategy/solarpunk-mandate.md

---

### Q2: First Grant Priority

**Question:** Which grant should we apply for first?

**Options:**
- A. EIC Pathfinder Open (€100K, feasibility study, 25% success rate)
- B. Climate-KIC (€150K, climate focus, 30% success rate)
- C. National grant (€50K, faster decision, 35% success rate)

**Decision Criteria:**
- Time to decision (need cash flow)
- Success probability (early win important)
- Strategic value (signals to other funders)
- Effort required (limited founder time)

**Owner:** Founder + Grants Advisor
**Deadline:** 2026-02-28
**Status:** Open
**Related:** strategy/funding-strategy.md, templates/grant-application-tracker.md

---

### Q3: Blockchain vs PostgreSQL for NADA (Year 1)

**Question:** What ledger implementation for Year 1?

**Options:**
- A. PostgreSQL event-sourced (simpler, faster, cheaper)
- B. Hyperledger Fabric from start (more complex, blockchain-ready)
- C. Hybrid (PostgreSQL Year 1, migrate Year 3)

**Decision Criteria:**
- Development time (MVP timeline)
- Cost (development + operations)
- Grant perception (blockchain may help)
- Migration risk (if hybrid)
- Regulatory clarity (MiCA compliance)

**Owner:** Founder + Technical Advisor
**Deadline:** 2026-03-31
**Status:** Open (leaning toward C: Hybrid)
**Related:** specs/blockchain-integration.md

---

### Q4: First Association Partnership

**Question:** Which hemp association for first LOI?

**Options:**
- A. TIHTA (Thailand) - Already identified, English-friendly
- B. EIHA (Europe) - EU grants alignment, more complex
- C. NAHA (North America) - Large market, US sovereignty concerns

**Decision Criteria:**
- Ease of partnership (relationship existing)
- Market size (entity onboarding potential)
- Regulatory environment (export complexity)
- Sovereign alignment (non-US preferred)

**Owner:** Founder
**Deadline:** 2026-03-31
**Status:** Open (leaning toward A: TIHTA)
**Related:** strategy/roadmap.md, strategy/pivot-strategies.md

---

### Q5: Founder Compensation

**Question:** What is appropriate founder draw during bootstrap?

**Options:**
- A. Zero (pure equity, maximum runway)
- B. Minimal (€2K-4K/month, basic living)
- C. Market (€6K-10K/month, reduces personal stress)

**Decision Criteria:**
- Runway impact (months of operation)
- Personal sustainability (burnout risk)
- Investor perception (commitment signal)
- Grant allowability (some grants cover founder salary)

**Owner:** Founder
**Deadline:** 2026-02-15
**Status:** Open
**Related:** strategy/team-structures.md, strategy/cost-breakdown.md

---

## Medium Priority (Decide Within 90 Days)

### Q6: AI Model Selection for BUD

**Question:** Which LLM for BUD onboarding agent?

**Options:**
- A. Mistral 7B (France, good balance, self-host)
- B. Mixtral 8x7B (France, better performance, more resources)
- C. Falcon 40B (UAE, open weights, larger)

**Decision Criteria:**
- Performance (extraction accuracy)
- Resource requirements (GPU cost)
- Sovereignty (non-US origin)
- License (commercial use allowed)

**Owner:** Founder + AI Advisor
**Deadline:** 2026-04-30
**Status:** Open (leaning toward A: Mistral 7B)
**Related:** specs/ai-agents-architecture.md, specs/technology-stack.md

---

### Q7: Colocation Provider Selection

**Question:** Which datacenter for first colocation?

**Options:**
- A. Data4 (France) - Best sovereignty, higher cost
- B. Hetzner (Germany) - Best price, good sovereignty
- C. Equinix (Multiple) - Premium, global, expensive

**Decision Criteria:**
- Cost (monthly + setup)
- Sovereignty (EU jurisdiction)
- Connectivity (network quality)
- Expansion (additional racks available)

**Owner:** Founder + DevOps Advisor
**Deadline:** 2026-06-30
**Status:** Open (leaning toward A+B: Data4 primary, Hetzner backup)
**Related:** specs/own-hardware-specs.md, specs/technology-stack.md

---

### Q8: Equity Allocation for Advisors

**Question:** What is standard advisor equity grant?

**Options:**
- A. 0.25% (conservative, preserves cap table)
- B. 0.5% (market standard for early advisors)
- C. Tiered (0.25-0.5% based on contribution)

**Decision Criteria:**
- Market standard (competitive for talent)
- Cap table impact (investor dilution)
- Contribution level (time + value)
- Vesting structure (retention)

**Owner:** Founder + Legal Advisor
**Deadline:** 2026-04-30
**Status:** Open (leaning toward C: Tiered)
**Related:** strategy/team-structures.md, templates/advisor-outreach-email.md

---

### Q9: Grant Writer Hiring

**Question:** When to hire first grants specialist?

**Options:**
- A. Month 1 (founder focuses on strategy)
- B. Month 4 (after first grant wins)
- C. Month 6 (when pipeline justifies FTE)

**Decision Criteria:**
- Cost (salary vs. founder time)
- Expertise (professional vs. learning)
- Pipeline (enough applications to justify)
- Cash flow (can we afford it)

**Owner:** Founder
**Deadline:** 2026-05-31
**Status:** Open (leaning toward B: Month 4)
**Related:** strategy/team-structures.md, strategy/funding-strategy.md

---

### Q10: Token Regulatory Classification

**Question:** How will NADA token be classified under MiCA?

**Options:**
- A. Utility Token (most likely, least regulation)
- B. Asset-Referenced Token (if backed by assets)
- C. E-Money Token (if used for payments)

**Decision Criteria:**
- Regulatory clarity (legal opinion needed)
- Compliance cost (licensing requirements)
- Functionality (what token actually does)
- Geographic scope (EU vs. global)

**Owner:** Founder + Legal Advisor
**Deadline:** 2026-06-30
**Status:** Open (leaning toward A: Utility Token)
**Related:** specs/blockchain-integration.md, strategy/solarpunk-mandate.md

---

## Low Priority (Decide Within 180 Days)

### Q11: Branding and Naming

**Question:** Do we keep INOS/SSOT/HEMPIN or simplify?

**Options:**
- A. Keep all three (technically accurate, complex)
- B. Simplify to one name (easier marketing, less precise)
- C. Consumer brand + technical names (best of both)

**Decision Criteria:**
- Clarity (easy to understand)
- Precision (accurately describes system)
- Marketing (memorable, searchable)
- Flexibility (works for multi-industry)

**Owner:** Founder + Marketing Advisor
**Deadline:** 2026-07-31
**Status:** Open
**Related:** STRATEGY.md, templates/pitch-deck-outline.md

---

### Q12: Office vs. Remote

**Question:** What is team work arrangement?

**Options:**
- A. Remote-first (global talent, lower cost)
- B. Hybrid (office hub + remote flexibility)
- C. Office-first (collaboration, higher cost)

**Decision Criteria:**
- Talent access (global vs. local)
- Cost (office lease vs. remote stipend)
- Collaboration (in-person value)
- Mission alignment (Solarpunk values)

**Owner:** Founder
**Deadline:** 2026-07-31
**Status:** Open (leaning toward A: Remote-first)
**Related:** strategy/team-structures.md, strategy/cost-breakdown.md

---

### Q13: Open Source Strategy

**Question:** What components should be open source?

**Options:**
- A. Core infrastructure open, extensions commercial
- B. Everything open (maximum community, less revenue)
- C. Everything closed (maximum control, less community)

**Decision Criteria:**
- Community building (contribution potential)
- Revenue protection (competitive moat)
- Grant requirements (some require open source)
- Security (community audit vs. controlled)

**Owner:** Founder + Technical Advisor
**Deadline:** 2026-07-31
**Status:** Open (leaning toward A: Open Core)
**Related:** strategy/solarpunk-mandate.md, specs/technology-stack.md

---

### Q14: Board Composition

**Question:** What is initial board structure?

**Options:**
- A. Founder-only (fast decisions, less oversight)
- B. Founder + 2 independents (balanced, slower)
- C. Founder + investors + independents (standard, complex)

**Decision Criteria:**
- Decision speed (founder control)
- Oversight (investor protection)
- Expertise (board member value)
- Mission lock (preventing drift)

**Owner:** Founder + Legal Advisor
**Deadline:** 2026-07-31
**Status:** Open (leaning toward B: Founder + 2 independents)
**Related:** strategy/solarpunk-mandate.md, strategy/team-structures.md

---

### Q15: Exit Strategy

**Question:** What is the long-term exit or sustainability model?

**Options:**
- A. IPO (public markets, liquidity, scrutiny)
- B. Acquisition (strategic buyer, mission risk)
- C. Perpetual (self-sustaining, no exit)

**Decision Criteria:**
- Mission alignment (exit cannot compromise mission)
- Investor returns (liquidity expectations)
- Team incentives (equity value)
- Legacy (long-term impact)

**Owner:** Founder + Board
**Deadline:** 2026-12-31
**Status:** Open (leaning toward C: Perpetual with liquidity events)
**Related:** strategy/solarpunk-mandate.md, strategy/pivot-strategies.md

---

## Decision Log (Closed Questions)

| Question | Decision | Date | Owner | Related |
|----------|----------|------|-------|---------|
| Implementation Scenario | Hybrid (Scenario B) | 2026-01 | Founder | strategy/scenarios-comparison.md |
| Technology Sovereignty | No US dependency | 2026-01 | Founder | specs/technology-stack.md |
| Infrastructure | Own hardware in colocation | 2026-01 | Founder | specs/own-hardware-specs.md |
| Funding Mix | 57% grants, 22% VC, 21% revenue | 2026-01 | Founder | strategy/funding-strategy.md |
| Graph Database | Memgraph (Slovenia) | 2026-01 | Founder | specs/technology-stack.md |
| AI/LLM | Mistral 7B (self-hosted) | 2026-01 | Founder | specs/ai-agents-architecture.md |
| Frontend | Vue.js + Nuxt (France) | 2026-01 | Founder | specs/technology-stack.md |
| Auth | Zitadel (Switzerland) | 2026-01 | Founder | specs/technology-stack.md |
| Monitoring | Prometheus + Grafana | 2026-01 | Founder | specs/technology-stack.md |
| Blockchain | Hybrid (PostgreSQL → Hyperledger) | 2026-01 | Founder | specs/blockchain-integration.md |

---

## How to Use This Document

### For Founder

- Review weekly (15 minutes)
- Update status as decisions are made
- Move closed questions to Decision Log
- Add new questions as they arise

### For Advisors

- Review monthly (30 minutes)
- Provide input on open questions in your expertise area
- Help research options where helpful
- Participate in decision discussions

### For Board

- Review quarterly (60 minutes)
- Approve high-priority decisions
- Ensure mission alignment
- Document rationale for major decisions

---

## Decision-Making Framework

When facing any decision, use this framework:

**Step 1: Define the Question**
- What exactly are we deciding?
- Why does this matter?
- What happens if we dont decide?

**Step 2: Gather Options**
- What are all possible options?
- What are the trade-offs?
- What information do we need?

**Step 3: Evaluate Criteria**
- What criteria matter most?
- How do we weight each criterion?
- What is the minimum acceptable outcome?

**Step 4: Make Decision**
- Who has decision authority?
- What is the deadline?
- Document the decision and rationale

**Step 5: Communicate**
- Who needs to know?
- How do we communicate?
- What is the implementation plan?

**Step 6: Review**
- When do we review the decision?
- What metrics indicate success?
- What is the rollback plan if wrong?

---

## Related Documents

- Strategy (STRATEGY.md)
- Roadmap (ROADMAP.md)
- Pivot Strategies (strategy/pivot-strategies.md)
- Advisor Tracker (feedback/advisor-tracker.md)
