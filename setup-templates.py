#!/usr/bin/env python3
"""INOS/SSOT Setup - Part 4: Templates & Remaining Files"""

from pathlib import Path

ROOT = Path(".")

FILES = {
    "specs/technology-stack.md": """# Technology Stack — Sovereign Edition

**Principle:** Maximum sovereignty, zero US dependency.

---

## Infrastructure

| Component | Technology | Origin |
|-----------|------------|--------|
| Cloud | OVHcloud + Hetzner | FR/DE |
| IaC | OpenTofu | Community |
| Containers | Podman + K8s | Community |

---

## Data

| Component | Technology | Origin |
|-----------|------------|--------|
| Graph DB | Memgraph | Slovenia |
| Event Stream | Kafka (self-hosted) | Apache |
| Ledger | PostgreSQL | Community |

---

## AI/ML

| Component | Technology | Origin |
|-----------|------------|--------|
| LLM | Mistral 7B | France |
| Hosting | Ollama + vLLM | Community |
| Vector DB | Qdrant | UK/Estonia |

---

## Frontend

| Component | Technology | Origin |
|-----------|------------|--------|
| Framework | Vue.js + Nuxt | France |
| Maps | MapLibre + OSM | Community |
""",

    "decisions/ADR-001-graph-database.md": """# ADR-001: Graph Database Selection

**Status:** Accepted
**Date:** 2026-01-15

---

## Decision

**Selected:** Memgraph (Slovenia)

---

## Alternatives

| Option | Verdict |
|--------|---------|
| Memgraph | ✅ Selected (European) |
| Neo4j | ❌ Rejected (US company) |
| JanusGraph | ⚠️ Backup |

---

## Review Date

2027-01-15
""",

    "templates/advisor-outreach-email.md": """# Advisor Outreach Template

---

## Subject
Advisory Opportunity — Verified Truth Infrastructure
---

## Email

Dear [Name],
I'm building INOS/SSOT — open infrastructure for verified supply chains,
starting with hemp ($17B, 57 jurisdictions).
This is critical public infrastructure — EU/UN grant eligible,
Foundation + OpCo structure, Solarpunk 2045 mission.
Your work in [their area] aligns with our vision.
Time: 2-4 hours/month
Compensation: Advisor equity (0.25-0.5%) + mission
Open to a 30-minute call?
Documentation: https://github.com/inos-ssot/inos-ssot-hempin-docs
Respectfully,
[Your name]
Founder, INOS/SSOT


""",

    "templates/grant-application-tracker.md": """# Grant Application Tracker

---

## Active Applications

| Grant | Amount | Deadline | Status |
|-------|--------|----------|--------|
| EIC Pathfinder | €100K | | Drafting |
| Climate-KIC | €150K | | Research |
| National Grant | €50K | | Not started |

---

## Pipeline

| Grant | Amount | Priority |
|-------|--------|----------|
| Horizon Europe Cluster 4 | €3M | High |
| Digital Europe | €2M | High |
| UNDP Climate | €1M | High |
| EIB Innovation Loan | €2M | Medium |

---

## Targets (Year 1)

- Applications: 20
- Success rate: 25%
- Total secured: €8.5M
""",

    "templates/pitch-deck-outline.md": """# Pitch Deck (10 Slides)

1. **Title** — INOS/SSOT/HEMPIN
2. **Problem** — Coordination failure
3. **Solution** — SSOT graph
4. **Why Now** — Regulatory + AI timing
5. **Market** — $17B hemp → $8T traceability
6. **Business Model** — 5 revenue streams
7. **Competition** — Our moat
8. **Roadmap** — 3-year plan
9. **Team & Ask** — €5M seed
10. **Vision** — Solarpunk 2045
""",

    "feedback/open-questions.md": """# Open Questions

---

## High Priority

### Q1: Legal Structure Jurisdiction

**Options:**
- A. Switzerland
- B. Netherlands
- C. Estonia

**Decision By:** 2026-03-31

---

### Q2: First Grant Priority

**Options:**
- A. EIC Pathfinder (€100K)
- B. Climate-KIC (€150K)
- C. National grant (€50K)

**Decision By:** 2026-02-28

---

### Q3: Ledger Implementation

**Options:**
- A. PostgreSQL (Year 1)
- B. Hyperledger (from start)
- C. Hybrid

**Decision By:** 2026-03-31
""",

    ".gitignore": """# Rendered diagrams
architecture/**/*.svg
rendered/

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Logs
*.log

# Environment
.env
.env.local

# Python
__pycache__/
*.pyc
""",

    "CONTINUATION-GUIDE.md": """# INOS/SSOT Continuation Guide

---

## Project Summary

- **Name:** INOS/SSOT/HEMPIN
- **Mission:** Solarpunk 2045 infrastructure
- **Beachhead:** Hemp industry
- **Architecture:** Graph + Events + AI + Sovereign

---

## Key Decisions

1. Hybrid implementation (human + AI)
2. Sovereign stack (no US tech)
3. Own hardware (colocation FR+DE)
4. Foundation + OpCo structure
5. 57% grant funding target
6. Multi-industry from Day 1
7. Regeneration Fund (30%)

---

## Current Status

- **Phase:** Zero Budget Bootstrap
- **Funding:** €0
- **Team:** 1 founder + AI
- **Next:** Week 1 tasks (landing page, advisors)

---

## For AI Assistants

- Reference archived docs first
- Maintain decision consistency
- Priority: Mission over speed
""",

    ".github/workflows/render-diagrams.yml": """name: Render Diagrams

on:
  push:
    paths:
      - 'architecture/**/*.d2'

jobs:
  render:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install D2
        run: curl -fsSL https://d2lang.com/install.sh | sh -s --
      - name: Render
        run: find architecture -name "*.d2" -exec d2 {} {}.svg \\;
      - uses: actions/upload-artifact@v4
        with:
          name: rendered-diagrams
          path: architecture/**/*.svg
""",
}

print("📋 Creating templates and remaining files...")

for filepath, content in FILES.items():
    path = ROOT / filepath
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip())
    print(f"  ✓ {filepath}")

print("\n" + "=" * 60)
print("✅ ALL PARTS COMPLETE!")
print("=" * 60)
print("\nNext steps:")
print("  1. git add .")
print("  2. git commit -m 'Initial repository structure'")
print("  3. git push origin main")
print("  4. Install D2: curl -fsSL https://d2lang.com/install.sh | sh -s --")
print("\n🌱 Solarpunk 2045")
print("")