#!/usr/bin/env python3
"""INOS/SSOT Setup - Part 2: Core Files"""

from pathlib import Path

ROOT = Path(".")

FILES = {
    "README.md": """# INOS/SSOT/HEMPIN

> **Verified Truth Infrastructure for Planetary Regeneration**

**Mission:** Enable humanity to reach Solarpunk civilization by 2045.

**Status:** Pre-Seed / Bootstrap Phase
**Founded:** 2026
**License:** Proprietary (Core), Open Source (Modules)

---

## 🎯 Quick Start

| Role | Start Here |
|------|------------|
| **New Contributor** | [Vision & Mission](STRATEGY.md) |
| **Engineer** | [Architecture](architecture/README.md) |
| **Partner/Investor** | [Pitch Deck](templates/pitch-deck-outline.md) |
| **Grant Officer** | [Grant Strategy](templates/grant-application-tracker.md) |

---

## 📚 Documentation Structure
inos-ssot-hempin-docs/
├── README.md
├── STRATEGY.md
├── ROADMAP.md
├── architecture/
├── specs/
├── runbooks/
├── decisions/
├── feedback/
├── diagrams/
└── templates/


---

## 🌍 Solarpunk 2045 Vision

We are building the **operating system for planetary regeneration**.

- ✅ Verified supply chains
- ✅ Sovereign infrastructure
- ✅ Regenerative economics
- ✅ Open governance

---

## 📞 Contact

- **Email:** contact@inos-ssot.org
- **GitHub:** github.com/inos-ssot

---

## 📄 License

Proprietary - All Rights Reserved
""",

    "STRATEGY.md": """# INOS/SSOT/HEMPIN Strategy

> **The Single Source of Truth for the Global Hemp Industry**

**Version:** 1.0
**Status:** Draft

---

## 🎯 The Problem

- 57 jurisdictions with incompatible regulations
- No shared schema for entity identity
- No cross-border provenance standard
- No machine-readable compliance layer
- No verified counterparty graph

**Result:** $17B market cannot trade efficiently.

---

## 🏗️ The Solution

### SSOT (Single Source of Truth)
Multi-dimensional knowledge graph:
- Entity layer
- Relationship layer
- Compliance layer
- Value layer

### INOS (Operating System)
Microservices + Event Sourcing + Graph Database

### HEMPIN (First Deployment)
Application layer for hemp industry

---

## 🌍 Solarpunk 2045 Mission

Critical infrastructure for planetary regeneration:
- Verified supply chains for all industries
- Sovereign technology (no US dependency)
- Regenerative finance (NADA token)
- Open governance (Foundation + OpCo)

---

## 💰 Funding Strategy

| Source | Target % | 5-Year Target |
|--------|----------|---------------|
| Grants (EU, UN) | 57% | €240M |
| Private Capital | 22% | €92M |
| Revenue | 21% | €88M |
""",

    "ROADMAP.md": """# INOS/SSOT/HEMPIN Roadmap

**Version:** 1.0

---

## Phase 0: Bootstrap (Months 1-6)

**Goal:** Secure first €50K-100K

- [ ] GitHub organization + documentation
- [ ] Advisory board (5 members)
- [ ] 10+ grant applications
- [ ] Basic technical prototype
- [ ] First association LOI (Thailand)

---

## Phase 1: MVP (Months 7-12)

**Goal:** €500K-1M, working MVP

- [ ] Legal entity (Foundation + OpCo)
- [ ] First 3-5 team members
- [ ] Deploy basic SSOT graph
- [ ] 500 entities (Thailand pilot)
- [ ] Apply for €2M+ EU grants

---

## Phase 2: Expansion (Year 2)

**Goal:** 5 countries, €5M-10M

- [ ] 4 new jurisdictions
- [ ] Hemp Swap launch
- [ ] Compliance Engine
- [ ] 5,000+ verified entities
- [ ] Series A (€2M-5M)

---

## Phase 3: Scale (Year 3)

**Goal:** 15+ countries, €10M+ revenue

- [ ] Global infrastructure
- [ ] NADA token launch
- [ ] Multi-industry expansion
- [ ] 50,000+ verified entities
- [ ] Path to profitability

---

## Phase 4: Solarpunk (Years 5-20)

**Goal:** Planetary regeneration

- [ ] 100+ countries
- [ ] All major industries
- [ ] €1B+ Regeneration Fund
- [ ] 10M+ verified entities
""",
}

print("📄 Creating core files...")
for filepath, content in FILES.items():
    path = ROOT / filepath
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip())
    print(f"  ✓ {filepath}")

print("\n✅ Part 2 Complete! Run setup-architecture-files.py next.")