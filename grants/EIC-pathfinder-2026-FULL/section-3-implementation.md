# 3. Quality and efficiency of the implementation

## 3.1 Work plan and allocation of resources

**Overall Structure of the Work Plan**

The INOS/SSOT/HEMPIN project is structured into 6 Work Packages (WPs) over 48 months, designed to achieve proof-of-principle (TRL 4) by Month 48. The work plan follows an agile research methodology, with iterative development cycles (6-month sprints) and regular validation checkpoints (Milestones M1-M9).

- **WP1 (Management & Coordination):** Ensures project governance, ethical compliance, and consortium management (Months 1-48).
- **WP2 (SSOT Graph Architecture & Sovereign Infra):** Designs the graph schema and benchmarks the sovereign EU stack (Months 1-36).
- **WP3 (BUD AI Agent Development):** Builds the NL2G pipeline with confidence scoring (Months 6-42).
- **WP4 (Compliance Engine & Regulatory Encoding):** Encodes 5 jurisdictions as machine-readable constraints (Months 6-48).
- **WP5 (Pilot Deployment & Validation):** Validates the system with 500+ entities in Thailand and EU test environments (Months 12-48).
- **WP6 (Dissemination, Ethics & Open Science):** Manages publications, open-source releases, and stakeholder engagement (Months 1-48).

**Timing and Inter-Relations**

The project follows a logical dependency chain:
- **WP2 (Architecture)** starts first (Month 1) to provide the schema foundation for WP3 (AI) and WP4 (Compliance).
- **WP3 (AI)** and **WP4 (Compliance)** run in parallel (Months 6-42), feeding into **WP5 (Pilots)** which starts at Month 12 once initial validation is complete.
- **WP6 (Dissemination)** runs throughout to ensure open science practices are integrated from the start.
- **WP1 (Management)** oversees all WPs, with reporting periods aligned to Horizon Europe standards (RP1: Months 1-12, RP2: Months 13-30, RP3: Months 31-48).

A Gantt chart (not shown here due to format constraints) would illustrate these overlaps, with WP2/WP3/WP4 forming the technical core, WP5 validating outputs, and WP6 ensuring impact.

---

### Table 3.1a: List of Work Packages

| Work package No | Work package Title | Lead Participant No | Lead Participant Short Name | Name & surname of Work package leader | Gender of Work package leader | Start Month | End Month |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| WP1 | Project Management & Coordination | 1 | INOS | Paul IGLESIA | M | 1 | 48 |
| WP2 | SSOT Graph Architecture & Sovereign Infra | 1 | INOS | [TBD - Technical Lead] | [TBD] | 1 | 36 |
| WP3 | BUD AI Agent Development (NL2G) | 1 | INOS | [TBD - AI Lead] | [TBD] | 6 | 42 |
| WP4 | Compliance Engine & Regulatory Encoding | 1 | INOS | [TBD - Compliance Lead] | [TBD] | 6 | 48 |
| WP5 | Pilot Deployment & Validation | 1 | INOS | [TBD - Pilot Lead] | [TBD] | 12 | 48 |
| WP6 | Dissemination, Ethics & Open Science | 1 | INOS | [TBD - Comms Lead] | [TBD] | 1 | 48 |

---

### Table 3.1b: Work Package Description

**WP1: Project Management & Coordination**
*Objectives:* Ensure governance, ethical compliance, and reporting.
*Description:* Task 1.1: Consortium coordination (monthly calls, reporting). Task 1.2: Ethical compliance (GDPR, AI Act alignment). Task 1.3: Risk management (update risk register quarterly). Task 1.4: Financial management (budget tracking). Lead: INOS (Paul Iglesia). Effort: 12 PM.

**WP2: SSOT Graph Architecture & Sovereign Infra**
*Objectives:* Design graph schema; benchmark sovereign stack.
*Description:* Task 2.1: SSOT schema design (Entity/Relationship/Compliance/Value layers). Task 2.2: Sovereign stack deployment (OVHcloud, Memgraph, Mistral). Task 2.3: Performance benchmarking (latency, throughput). Task 2.4: Security audit (GDPR, data sovereignty). Lead: INOS. Effort: 40 PM.

**WP3: BUD AI Agent Development (NL2G)**
*Objectives:* Build NL2G pipeline with confidence scoring >0.85.
*Description:* Task 3.1: Ontology refinement for AI training. Task 3.2: LLM fine-tuning (Mistral 7B). Task 3.3: Confidence scoring implementation. Task 3.4: Human-in-loop console development. Lead: INOS. Effort: 40 PM.

**WP4: Compliance Engine & Regulatory Encoding**
*Objectives:* Encode 5 jurisdictions as graph constraints.
*Description:* Task 4.1: Regulatory ontology mapping (TH, FR, DE, NL, AU). Task 4.2: Graph constraint encoding (SHACL/Cypher). Task 4.3: Validation against test cases. Task 4.4: Iterative expansion plan. Lead: INOS. Effort: 10 PM.

**WP5: Pilot Deployment & Validation**
*Objectives:* Validate with 500+ entities in Thailand + EU.
*Description:* Task 5.1: Pilot site setup (Thailand via TiHTA LOI). Task 5.2: User onboarding (BUD Agent). Task 5.3: Transaction validation (Compliance Engine). Task 5.4: Feedback collection and iteration. Lead: INOS. Effort: 10 PM.

**WP6: Dissemination, Ethics & Open Science**
*Objectives:* 3+ publications; open-source schema; stakeholder engagement.
*Description:* Task 6.1: Open-access publications (Q1/Q2 journals). Task 6.2: GitHub repo maintenance (MIT license). Task 6.3: Industry workshops (Cannatec, EIHA). Task 6.4: Policy briefings (EU DG AGRI/CONNECT). Lead: INOS. Effort: 5 PM.

---

### Table 3.1c: List of Deliverables

| Number | Deliverable name | Short description | Work package number | Short name of lead participant | Type | Dissemination level | Delivery date (in months) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1.1 | Project Handbook | Management procedures, communication plan | 1 | INOS | R | PU | 3 |
| 2.1 | SSOT Graph Schema v1 | Entity/Relationship/Compliance/Value layer specs | 2 | INOS | R | PU | 12 |
| 2.2 | Sovereign Stack Benchmark Report | Performance metrics (latency, throughput) | 2 | INOS | R | PU | 18 |
| 3.1 | BUD Pipeline v1 | NL2G pipeline code + documentation | 3 | INOS | OTHER | PU | 18 |
| 3.2 | Confidence Scoring Model | Technical report on scoring methodology | 3 | INOS | R | PU | 24 |
| 4.1 | Regulatory Ontology (5 jurisdictions) | Machine-readable rules for TH, FR, DE, NL, AU | 4 | INOS | DATA | PU | 24 |
| 5.1 | Thailand Pilot Report | Results from TiHTA pilot (500 entities) | 5 | INOS | R | PU | 30 |
| 5.2 | EU Pilot Report | Results from EU test environment | 5 | INOS | R | PU | 36 |
| 6.1 | Open Source Repo | GitHub repository with code + docs | 6 | INOS | DEC | PU | 6 |
| 6.2 | Publications (3+) | Peer-reviewed papers on graph AI, compliance, sovereignty | 6 | INOS | R | PU | 36 |
| 6.3 | Data Management Plan (DMP) | FAIR data management strategy | 6 | INOS | DMP | PU | 6 |

---

### Table 3.1d: List of Milestones

| Milestone number | Milestone name | Related work package(s) | Due date (in month) | Means of verification |
| :--- | :--- | :--- | :--- | :--- |
| M1 | Consortium Agreement Signed | 1 | 1 | Signed document uploaded to portal |
| M2 | SSOT Graph Schema v1 Finalized | 2 | 12 | Schema document + peer review report |
| M3 | BUD AI Agent Alpha (Confidence >0.85) | 3 | 18 | Test report with accuracy metrics |
| M4 | Compliance Engine Live (5 Jurisdictions) | 4 | 24 | Working prototype + validation report |
| M5 | Thailand Pilot Launch | 5 | 24 | Pilot launch report + participant list |
| M6 | EU Pilot Launch | 5 | 30 | Pilot launch report + participant list |
| M7 | Sovereign Stack Audit Complete | 2 | 36 | Third-party audit report |
| M8 | Proof of Principle Achieved (TRL 4) | 5 | 42 | Technical validation report |
| M9 | Final Project Review & Exploitation Plan | 1 | 48 | Final report + exploitation roadmap |

---

### Table 3.1e: Critical Risks for Implementation

| Description of risk (indicate level of (i) likelihood, and (ii) severity: Low/Medium/High) | Work package(s) involved | Proposed risk-mitigation measures |
| :--- | :--- | :--- |
| AI extraction accuracy <85% (Likelihood: Medium, Severity: High) | 3 | Human-in-the-loop console; fallback to manual verification; continuous fine-tuning on hemp ontology |
| Regulatory encoding too complex (Likelihood: High, Severity: Medium) | 4 | Start with 5 jurisdictions; expand iteratively; prospective association partners provide regulatory monitoring |
| Sovereign stack performance issues (Likelihood: Low, Severity: Critical) | 2 | Benchmark vs. US alternatives; optimize queries; backup providers identified (Hetzner) |
| Pilot adoption friction (Likelihood: Medium, Severity: Medium) | 5 | Conversational AI interface (low friction); pilot incentives via prospective partners; free tier for smallholders |
| Graph database doesn't scale (Likelihood: Low, Severity: High) | 2 | Memgraph benchmarking; sharding strategy; load testing with pilot data |

---

### Table 3.1f: Summary of Staff Effort

| WP / Participant | 1 (INOS) | Total Person-Months per WP |
| :--- | :--- | :--- |
| **WP1** | **12** | 12 |
| **WP2** | **40** | 40 |
| **WP3** | **40** | 40 |
| **WP4** | **10** | 10 |
| **WP5** | **10** | 10 |
| **WP6** | **5** | 5 |
| **Total PM per Participant** | **117 PM** | **117 PM** |

---

### Table 3.1g: 'Subcontracting costs' items

| Participant Number/Short Name | Cost (€) | Description of tasks and justification |
| :--- | :--- | :--- |
| 1 / INOS | 300,000 | AI fine-tuning specialist (Mistral 7B optimization); Graph database optimization consultant; UI/UX designer for BUD console. Core tasks (graph design, compliance encoding, pilot management) are NOT subcontracted. |

---

### Table 3.1h: 'Purchase costs' items (major equipment costs)

| Participant Number/Short Name | Cost (€) | Justification |
| :--- | :--- | :--- |
| 1 / INOS | 200,000 | GPU servers for self-hosted Mistral 7B inference. Personnel costs: €1,200,000. Equipment ratio: 16.7% (>15% threshold). Required for sovereign AI stack (no US API dependency); enables self-hosted LLM inference for BUD agent; critical for EU grant eligibility and data sovereignty. Justification also provided in Excel Budget Table 'Any comments' sheet. |

---

## 3.2 Quality of the consortium

**Expertise of Consortium Members**

The coordinator, **INOS Foundation (France)**, brings core expertise in computer science, AI, and supply chain verification. Paul Iglesia (Founder) has prior experience as a chef de projet logiciel, with validated skills in product management, technical coordination, and stakeholder engagement (evidenced by the Thailand LOI with TiHTA and 20+ files of technical documentation on GitHub). INOS has the capacity to lead WP1 (Management), WP2 (Architecture), and WP3 (AI), covering the technical core of the project.

To fill interdisciplinary gaps (regulatory science, agronomy, dissemination), the project is in **advanced discussions with prospective partners** including leading EU industry associations (e.g., EIHA, InterChanvre) and research institutions (e.g., University of Life Sciences Iasi, Nova-Institut). These partners will contribute domain expertise for WP4 (Compliance), WP5 (Pilots), and WP6 (Dissemination) upon LOI signature. Their involvement ensures the project has access to regulatory monitoring, agronomic validation, and industry networks without requiring confirmed budget allocation at submission (LOIs pending). This structure maintains flexibility while demonstrating broad consortium interest.

**Access to Critical Infrastructure**

INOS has secured access to critical infrastructure for the project:
- **Sovereign Cloud Infrastructure:** OVHcloud (France) for hosting, ensuring data sovereignty and GDPR compliance.
- **Graph Database:** Memgraph (Slovenia) for high-performance graph storage and querying.
- **AI Infrastructure:** Self-hosted Mistral 7B models on GPU servers (€200K equipment budget), enabling sovereign AI inference without US API dependency.
- **Pilot Sites:** Thailand pilot via TiHTA LOI (500+ entities); EU pilot sites via prospective association partners (farmers, processors).

This infrastructure ensures the project can validate the sovereign stack (WP2), AI pipeline (WP3), and pilot model (WP5) without dependency on external US-based platforms.

**Other Countries and International Organisations**

All confirmed beneficiaries (INOS) are established in EU Member States (France), ensuring automatic eligibility for EU funding. Prospective partners include entities from Belgium (EIHA), Romania (Univ. Iasi), and Germany (Nova-Institut), all EU Member States or Associated Countries. The Thailand partner (TiHTA) participates as an associated partner (no EU funding requested), providing international validation without complicating funding eligibility. This composition aligns with EIC Pathfinder requirements (3+ entities from 3+ countries upon full consortium finalization).

**Gender Balance and Diversity**

INOS commits to gender-balanced hiring for technical roles (target 40% women in WP2/WP3 technical teams). Prospective partners are selected with attention to gender diversity in leadership roles. The project integrates gender analysis in research content (AI bias mitigation, user research stratification) as described in Section 1.3.

**Conclusion**

The consortium combines INOS's technical expertise with prospective partners' domain knowledge, ensuring all necessary capacities are available for project success. The sovereign infrastructure setup ensures data sovereignty and EU strategic alignment. The flexible consortium structure allows finalization upon LOI signature without compromising submission compliance.
