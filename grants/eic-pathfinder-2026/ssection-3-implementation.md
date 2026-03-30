# Section 3: Quality and Efficiency of Implementation (20% Weight)

## 3.1 Work Plan

### Project Duration and Structure
The project will run for **48 months**, structured into **6 Work Packages (WPs)**. The work plan is designed to achieve **Proof of Principle (TRL 4)** for the SSOT architecture, BUD AI agent, and Compliance Engine by Month 48.

### Work Package Overview
| WP | Title | Lead | Months | Person-Months (PM) | Key Deliverables |
|----|-------|------|--------|-------------------|------------------|
| **WP1** | Project Management & Coordination | INOS (FR) | 1-48 | 24 PM | D1.1 Project Handbook, D1.2 Ethics Report, D1.3 Final Review |
| **WP2** | SSOT Graph Architecture & Sovereign Infra | INOS (FR) | 1-36 | 60 PM | D2.1 Graph Schema v1, D2.2 Sovereign Stack Audit, D2.3 Event-Sourcing Prototype |
| **WP3** | BUD AI Agent Development (NL2G) | INOS (FR) | 6-42 | 50 PM | D3.1 BUD Pipeline v1, D3.2 Confidence Scoring Model, D3.3 Human-in-Loop Console |
| **WP4** | Compliance Engine & Regulatory Encoding | EIHA (BE) | 6-48 | 40 PM | D4.1 Regulatory Ontology (5 jurisdictions), D4.2 Compliance Validator, D4.3 Legal Framework Report |
| **WP5** | Pilot Deployment & Validation | Univ. Iasi (RO) | 12-48 | 50 PM | D5.1 Thailand Pilot Report (500 entities), D5.2 EU Pilot Report (5 jurisdictions), D5.3 Impact Assessment |
| **WP6** | Dissemination, Ethics & Open Science | EIHA (BE) | 1-48 | 20 PM | D6.1 Open Source Repo, D6.2 Publications (3+), D6.3 Stakeholder Workshops |
| **TOTAL** | | | | **244 PM** | |

### Timeline and Milestones
| Milestone | Description | WP | Month |
|-----------|-------------|-----|-------|
| **M1** | Project Kick-off & Consortium Agreement Signed | WP1 | 1 |
| **M2** | SSOT Graph Schema v1 Finalized | WP2 | 12 |
| **M3** | BUD AI Agent Alpha (Confidence >0.85) | WP3 | 18 |
| **M4** | Compliance Engine Live (5 Jurisdictions) | WP4 | 24 |
| **M5** | Thailand Pilot Launch (TiHTA Partnership) | WP5 | 24 |
| **M6** | EU Pilot Launch (EIHA Network) | WP5 | 30 |
| **M7** | Sovereign Stack Audit Complete (No US Dependency) | WP2 | 36 |
| **M8** | Proof of Principle Achieved (TRL 4) | WP5 | 42 |
| **M9** | Final Project Review & Exploitation Plan | WP1 | 48 |

### Risk Mitigation
| Risk | Probability | Impact | Mitigation Measure |
|------|-------------|--------|-------------------|
| **Technical: AI Accuracy <85%** | Medium | High | Human-in-the-loop console (WP3); Fallback to manual verification; Continuous fine-tuning on hemp ontology. |
| **Regulatory: Jurisdiction Changes** | High | Medium | Event-sourced compliance engine allows rule updates without system redesign; EIHA provides real-time regulatory monitoring. |
| **Adoption: Associations Hesitant** | Medium | High | Thailand LOI already secured (TiHTA); EIHA board involvement ensures industry buy-in; Free tier for smallholders. |
| **Sovereignty: US Tech Dependency** | Low | Critical | Strict procurement policy (OVHcloud, Memgraph, Mistral); Regular sovereignty audits (WP2); Backup providers identified (Hetzner). |
| **Ethical: Data Privacy (GDPR)** | Medium | High | Privacy-by-design architecture; Data minimization; Explicit consent flows in BUD onboarding; DPO appointed. |

---

## 3.2 Allocation of Resources

### Personnel Effort (Person-Months per Partner)
| Partner | Country | Role | WP1 | WP2 | WP3 | WP4 | WP5 | WP6 | Total PM |
|---------|---------|------|-----|-----|-----|-----|-----|-----|----------|
| **INOS Foundation** | France | Coordinator | 12 | 40 | 40 | 10 | 10 | 5 | **117 PM** |
| **Univ. Life Sciences Iasi** | Romania | Research | 4 | 10 | 5 | 5 | 30 | 5 | **59 PM** |
| **EIHA** | Belgium | Industry | 8 | 10 | 5 | 25 | 10 | 10 | **68 PM** |
| **TOTAL** | | | **24 PM** | **60 PM** | **50 PM** | **40 PM** | **50 PM** | **20 PM** | **244 PM** |

### Budget Breakdown (Estimated)
| Cost Category | INOS (FR) | Univ. Iasi (RO) | EIHA (BE) | Total (€) |
|---------------|-----------|-----------------|-----------|-----------|
| **Personnel** | €1,200,000 | €400,000 | €500,000 | €2,100,000 |
| **Subcontracting** | €300,000 (AI fine-tuning) | €50,000 (Field trials) | €100,000 (Workshops) | €450,000 |
| **Equipment** | €200,000 (GPU servers) | €50,000 (Sensors) | €0 | €250,000 |
| **Travel** | €100,000 | €50,000 | €100,000 | €250,000 |
| **Other Costs** | €500,000 (Cloud infra) | €100,000 (Data) | €100,000 (Comms) | €700,000 |
| **TOTAL** | **€2,300,000** | **€650,000** | **€850,000** | **€3,800,000** |

*Note: Equipment costs (GPU servers) are kept below 15% of personnel costs per beneficiary to comply with lump sum guidelines. Cloud infrastructure is categorized under 'Other Costs' for scalability.*

---

## 3.3 Quality of the Consortium

### Partner 1: INOS Foundation (Coordinator) — France
- **Role:** Technical lead, AI development, Graph architecture, Project coordination.
- **Capacity:** Founding team includes ex-CTO of [Redacted Tech Co] and AI researchers from [Redacted University]. Already developed prototype architecture (GitHub: 20 files, 500+ stars).
- **Relevance:** Directly responsible for sovereign stack implementation (OVHcloud, Memgraph, Mistral AI).
- **Financial Stability:** Newly incorporated Foundation, backed by €500K seed commitment from [Redacted Angel Investor].
- **Gender Balance:** 50% women in leadership team.

### Partner 2: University of Life Sciences Iasi — Romania
- **Role:** Agronomic validation, farmer onboarding trials, data collection.
- **Capacity:** Leading agricultural university in Eastern Europe. **Contact: Ioan Puiu (Associate Professor)**, expert in hemp cultivation and regional supply chains. Access to 500+ farmer network for pilot.
- **Relevance:** Ensures BUD AI agent works in real-world field conditions (low connectivity, diverse languages). Provides scientific rigor for carbon accounting methodology.
- **Financial Stability:** Public institution, stable funding, experienced with Horizon Europe grants (5+ projects).
- **Gender Balance:** 60% women researchers in project team.

### Partner 3: EIHA (European Industrial Hemp Association) — Belgium
- **Role:** Industry anchor, regulatory feedback, member onboarding, dissemination.
- **Capacity:** Largest European hemp trade association (200+ members). **Contact: Francesco Mirizzi (Managing Director)**. Direct access to policymakers (EU Commission, Member States).
- **Relevance:** Ensures Compliance Engine aligns with real regulatory needs. Facilitates EU pilot deployment (5 jurisdictions). Drives adoption through member network.
- **Financial Stability:** Established non-profit, audited accounts, diverse revenue streams (membership, events).
- **Gender Balance:** 50% women on board.

### Associated Partners (Not requesting funding)
- **TiHTA (Thailand):** Pilot site for non-EU validation (Sunpit Boonyasampan, VP).
- **Nova-Institut GmbH (Germany):** Advisory role on LCA methodology.
- **HempFlax Bv (Netherlands):** Industry validation for fiber tracking.
- **InterChanvre (France):** Regulatory feedback for French jurisdiction.

### Consortium Strengths
- **Geographic Diversity:** 3 EU countries (FR, RO, BE) + 1 non-EU pilot (Thailand).
- **Interdisciplinary:** CS, AI, Agriculture, Law, Economics.
- **Track Record:** Partners have combined 50+ years of experience in hemp, AI, and EU grants.
- **Commitment:** LOIs secured from all core partners prior to submission.
