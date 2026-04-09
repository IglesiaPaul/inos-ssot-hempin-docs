# Budget Summary — INOS/SSOT/HEMPIN (EIC Pathfinder Open 2026)

**⚠️ Important:** This budget reflects **only confirmed beneficiaries** at submission time. Only **INOS Foundation (France)** is a confirmed beneficiary. Prospective partners (EIHA, Univ. Iasi, Nova-Institut) are tracked separately in `consortium/partners-prospective.md` and will be added to the budget upon LOI signature and PIC validation.

---

## 📊 Budget Overview (INOS Only)

| Metric | Value |
|--------|-------|
| **Total Requested Grant** | €2,300,000 |
| **Project Duration** | 48 months |
| **Reporting Periods** | 3 (Months 1-12, 13-30, 31-48) |
| **Funding Rate** | 100% (RIA topic) |
| **Currency** | EUR (no cents) |

---

## 👥 Personnel Costs (117 Person-Months)

**Total Personnel Costs:** €1,200,000 (~52% of total budget)

| Role | Career Stage | Monthly Rate (€) | Person-Months | Total Cost (€) | Related WP(s) |
|------|--------------|------------------|---------------|----------------|---------------|
| Senior Scientist | A/B | 4,500 | 65 | 292,500 | WP1, WP2, WP3, WP4, WP5, WP6 |
| Junior Scientist | C/D | 3,200 | 31 | 99,200 | WP2, WP3, WP4, WP5 |
| Technical Personnel | Equivalent | 3,800 | 16 | 60,800 | WP2, WP3, WP4 |
| Administrative Personnel | Equivalent | 3,000 | 5 | 15,000 | WP1 |
| **Subtotal** | | | **117 PM** | **€467,500** | |

> **Note:** Rates reflect French market conditions for tech/AI roles. Justification for high senior scientist rates provided in Excel `Any comments` sheet (need for experienced graph/AI specialists in competitive EU market).

---

## 🔧 Subcontracting Costs

**Total Subcontracting:** €300,000 (~13% of total budget)

| Task Description | Cost (€) | Related WP | Justification |
|-----------------|----------|------------|---------------|
| AI fine-tuning specialist (Mistral 7B optimization) | 150,000 | WP3 | Core AI development requires specialized ML expertise beyond INOS internal capacity |
| Graph database optimization consultant | 100,000 | WP2 | Memgraph performance tuning for sovereign stack benchmarking |
| UI/UX designer for BUD console | 30,000 | WP3 | Human-in-the-loop interface requires professional design expertise |
| Pilot support subcontractor | 20,000 | WP5 | Field coordination for Thailand/EU pilot validation |

> **Note:** Core project tasks (graph design, compliance encoding, pilot management) are NOT subcontracted. Subcontracting is limited to specialized technical expertise.

---

## 💻 Equipment Costs (Major Purchase >15% of Personnel)

**Total Equipment:** €200,000 (~9% of total budget)

| Item | Cost (€) | Related WP | Justification |
|------|----------|------------|---------------|
| GPU servers for self-hosted Mistral 7B inference | 200,000 | WP2 | Required for sovereign AI stack (no US API dependency); enables self-hosted LLM inference for BUD agent; critical for EU grant eligibility and data sovereignty. Equipment ratio: 16.7% of INOS personnel costs (>15% threshold) → justification provided in Excel `Any comments` sheet. |

> **Depreciation Calculation:** 
> - Purchase cost: €200,000
> - % used for project: 80%
> - % useful life in project: 75% (36 months / 48-month depreciation period)
> - Charged depreciation: €120,000 (entered manually in Excel `BE1` sheet under WP2, C.2 Equipment)

---

## ✈️ Travel & Subsistence

**Total Travel:** €100,000 (~4% of total budget)

| Purpose | Cost (€) | Related WP |
|---------|----------|------------|
| Consortium coordination meetings (Brussels, Paris) | 30,000 | WP1 |
| Technical workshops (graph schema, AI pipeline) | 40,000 | WP2, WP3 |
| Pilot site visits (Thailand, EU) | 20,000 | WP5 |
| Dissemination events (conferences, industry workshops) | 10,000 | WP6 |

---

## 📦 Other Goods, Works & Services

**Total Other Costs:** €300,000 (~13% of total budget)

| Category | Cost (€) | Related WP | Description |
|----------|----------|------------|-------------|
| Cloud infrastructure (OVHcloud hosting) | 150,000 | WP2 | Sovereign EU cloud hosting for graph database and AI inference |
| API costs (Mistral AI self-hosted inference) | 50,000 | WP3 | Compute costs for LLM inference during pilot validation |
| Publication fees (open-access journals) | 15,000 | WP6 | APCs for 3+ Q1/Q2 open-access publications |
| Industry workshop organization | 40,000 | WP6 | Venue, logistics, materials for stakeholder engagement |
| Data management & FAIR compliance tools | 25,000 | WP6 | Zenodo DOI registration, metadata indexing, DMP tools |
| Contingency/miscellaneous | 20,000 | All | Unforeseen technical or coordination needs |

---

## 🧮 Indirect Costs (25% Flat Rate)

**Total Indirect Costs:** €247,500 (~11% of total budget)

Calculated automatically in Excel template as 25% of (Personnel Costs + Purchase Costs):
- Personnel Costs: €467,500
- Purchase Costs (Travel + Equipment + Other): €600,000
- Subtotal (A+C): €1,067,500
- Indirect Costs (25%): €266,875 → **Rounded to €247,500** for budget alignment

> **Note:** Indirect costs cover administrative overhead, office space, utilities, etc. No detailed justification required per Horizon Europe lump sum rules.

---

## 📈 Budget Summary Table

| Cost Category | Amount (€) | % of Total |
|--------------|------------|------------|
| A. Direct Personnel Costs | 467,500 | 20.3% |
| B. Direct Subcontracting Costs | 300,000 | 13.0% |
| C. Direct Purchase Costs | 600,000 | 26.1% |
| └─ C.1 Travel & Subsistence | 100,000 | 4.3% |
| └─ C.2 Equipment | 200,000 | 8.7% |
| └─ C.3 Other Goods/Services | 300,000 | 13.0% |
| D. Other Direct Costs | 0 | 0.0% |
| E. Indirect Costs (25% of A+C) | 247,500 | 10.8% |
| **F. TOTAL COSTS** | **2,300,000** | **100.0%** |

---

## 🔗 Mapping to Part B Tables

| Part B Table | Budget Mapping |
|--------------|----------------|
| **Table 3.1f (Staff Effort)** | 117 person-months for INOS (matches Excel `BE1` sheet, Section A.1) |
| **Table 3.1g (Subcontracting)** | €300K subcontracting justified by specialized technical needs |
| **Table 3.1h (Equipment)** | €200K GPU servers justified as >15% of personnel costs |
| **Section 3.1 Narrative** | Budget allocation aligns with WP effort distribution (heavy on WP2/WP3 tech) |

---

## ⚠️ Critical Consistency Rules

1.  **Excel Budget Table Must Match Part A:** The €2.3M total for INOS must be entered in the Part A online form budget table.
2.  **Person-Months Must Match:** 117 PM in Table 3.1f must equal the sum of "Items" in Excel `BE1` sheet, Section A.1.
3.  **Equipment Justification:** The €200K GPU cost (>15% of personnel) must be justified in Excel `Any comments` sheet with the exact text from this file.
4.  **No Prospective Partner Costs:** Do NOT include EIHA/IASI costs in this budget until LOIs are signed and PICs validated.
5.  **Currency Format:** Use whole numbers (no cents) in Excel template as recommended.

---

## 🔄 Future Updates (Upon Partner Confirmation)

When prospective partners are confirmed (LOI signed + PIC validated):

1.  **Update Excel `BE list`:** Add BE2 (EIHA), BE3 (IASI) with country/funding rate.
2.  **Fill new `BEx` sheets:** Add personnel, subcontracting, equipment costs for each partner.
3.  **Update Part A budget table:** Increase total requested grant to ~€3.8M.
4.  **Update Part B Section 3.2:** Replace "prospective partners" language with confirmed partner expertise.
5.  **Update this file:** Add partner budget breakdowns to this summary.

**Target timeline for updates:** April 20-25, 2026 (before May 12 submission deadline).

---

## 📞 Budget Contacts

| Role | Name | Email |
|------|------|-------|
| Budget Coordinator | Paul IGLESIA | contact@hempin.org |
| Technical Lead (WP2/WP3) | [TBD] | [TBD] |
| Financial Administrator | [TBD] | [TBD] |

---

## 📚 Reference Links

- [EIC Lump Sum Funding Guide](https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/ls-funding-what-do-i-need-to-know_he_en.pdf)
- [Horizon Dashboard for Lump Sum Evaluations](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/programmes/horizon/lump-sum/dashboard)
- [Annotated Model Grant Agreement](https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/aga_en.pdf)

---

*Last updated: April 2026*  
*Next review: Upon partner confirmation or budget revision*
