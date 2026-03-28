# ADR-002: Sovereign Technology Stack

> "Sovereignty is not optional. It is foundational."

**Status:** Accepted  
**Date:** 2026-01-15  
**Author:** Founder  
**Review Date:** 2027-01-15 (Annual)

---

## Context

INOS/SSOT/HEMPIN requires technology infrastructure that ensures:
- Data sovereignty (EU jurisdiction, GDPR compliant)
- No US Cloud Act exposure (US government cannot access data)
- Mission alignment (Solarpunk values, open source)
- Long-term viability (survives company failures)
- Cost control (no vendor lock-in pricing)

The technology stack decision affects every aspect of the system: infrastructure, data, application, AI, and blockchain layers.

---

## Decision

**Selected:** Fully Sovereign Stack (No US Technology Dependency)

**Key Principles:**
1. EU-based cloud providers (OVHcloud, Hetzner)
2. Community-governed open source (Apache, CNCF, Linux Foundation)
3. Self-hosted where possible (no API dependency on US companies)
4. European alternatives preferred (Memgraph, Mistral, Vue.js)
5. Open source licenses (Apache 2.0, MIT, GPL)

---

## Technology Choices

### Infrastructure Layer

| Component | Selected | Alternative | Rationale |
|-----------|----------|-------------|-----------|
| Cloud Provider | OVHcloud + Hetzner | AWS, GCP, Azure | EU-based, no Cloud Act, GDPR native |
| IaC | OpenTofu | Terraform | Linux Foundation (not HashiCorp US) |
| Containers | Podman + Kubernetes | Docker, AWS EKS | Community-governed, no US company |
| CI/CD | Woodpecker CI | GitHub Actions | Self-hosted, no US dependency |
| Code Repo | Forgejo (production) | GitHub | Self-hosted, MIT license |

### Data Layer

| Component | Selected | Alternative | Rationale |
|-----------|----------|-------------|-----------|
| Graph Database | Memgraph | Neo4j | Slovenia (EU), not US |
| Event Stream | Apache Kafka (self-hosted) | Confluent Cloud | Apache Foundation, self-hosted |
| Object Storage | Ceph (self-hosted) | AWS S3 | Community-governed, self-hosted |
| Relational DB | PostgreSQL | MySQL (Oracle) | Community-governed, not Oracle US |

### Application Layer

| Component | Selected | Alternative | Rationale |
|-----------|----------|-------------|-----------|
| Language | Python + Rust | Go (Google) | PSF international, Rust Foundation |
| API | FastAPI + GraphQL Mesh | Apollo (US) | Community, not US company |
| Auth | Zitadel | Auth0 (US) | Switzerland, not US |
| Validation | Pydantic | Joi (US) | Community, not US |

### AI/ML Layer

| Component | Selected | Alternative | Rationale |
|-----------|----------|-------------|-----------|
| LLM | Mistral 7B (self-hosted) | Llama (Meta US), GPT (OpenAI US) | France, open weights, self-host |
| Hosting | Ollama + vLLM | OpenAI API | Self-hosted, no US API |
| Orchestration | Haystack | LangChain (US) | Germany, not US |
| Vector DB | Qdrant | Pinecone (US) | UK/Estonia, not US |
| Embeddings | Sentence Transformers | OpenAI Embeddings | Germany, not US |

### Frontend Layer

| Component | Selected | Alternative | Rationale |
|-----------|----------|-------------|-----------|
| Framework | Vue.js + Nuxt | React (Meta US), Next.js (Vercel US) | France/Community, not US |
| Maps | MapLibre + OSM | Mapbox (US), Google Maps (US) | Community, not US |
| Diagrams | Mermaid + PlantUML | D2 (Terrastruct US) | Community/France, not US |

### Blockchain Layer

| Component | Selected | Alternative | Rationale |
|-----------|----------|-------------|-----------|
| Blockchain | Hyperledger Fabric | Ethereum, Corda (US) | Linux Foundation, not US company |
| Ledger (Year 1-2) | PostgreSQL | US blockchain services | Community, self-hosted |

### Security Layer

| Component | Selected | Alternative | Rationale |
|-----------|----------|-------------|-----------|
| SSL/TLS | ZeroSSL | Let's Encrypt (US) | Austria, not US |
| Monitoring | Prometheus + Grafana | Datadog (US) | Switzerland/Community, not US |
| SIEM | Wazuh | US security tools | Spain, not US |
| Secrets | HashiCorp Vault (self-hosted) | AWS Secrets (US) | Self-hosted, BSL allows it |

---

## Alternatives Considered

### Option A: US Cloud + Open Source (Rejected)

**Description:** Use AWS/GCP for infrastructure, open source for application layer.

**Pros:**
- Faster setup (managed services)
- Lower initial ops complexity
- Well-documented

**Cons:**
- US Cloud Act exposure (critical risk)
- GDPR compliance complexity
- Vendor lock-in pricing
- Mission misalignment

**Verdict:** Rejected. Sovereignty is non-negotiable.

---

### Option B: Hybrid (Some US, Some EU) (Rejected)

**Description:** Use EU cloud, but US AI APIs (OpenAI, Anthropic) and some US tools.

**Pros:**
- Best-in-class AI (GPT-4, Claude)
- Faster AI development
- Lower AI infrastructure cost

**Cons:**
- API dependency (can be cut off)
- Data leaves EU jurisdiction
- Mission misalignment
- Long-term cost (API fees scale)

**Verdict:** Rejected. AI sovereignty is critical. Self-host Mistral.

---

### Option C: Full Sovereign (Selected)

**Description:** No US technology dependency. EU cloud, community open source, self-hosted AI.

**Pros:**
- Full data sovereignty
- No Cloud Act exposure
- Mission aligned
- Long-term cost control
- Grant eligibility (EU programs prefer sovereign)

**Cons:**
- Higher initial complexity
- More ops overhead
- Some tools less mature than US alternatives
- GPU hardware still US (NVIDIA, no alternative)

**Verdict:** Selected. Best alignment with mission and long-term viability.

---

## Consequences

### Positive

| Consequence | Impact |
|-------------|--------|
| **Data Sovereignty** | All data in EU jurisdiction, GDPR native |
| **Grant Eligibility** | EU programs prefer sovereign infrastructure |
| **Mission Alignment** | Technology reflects Solarpunk values |
| **Long-term Viability** | Open source survives company failures |
| **Cost Control** | No vendor lock-in pricing |
| **Community Trust** | Transparent, auditable stack |

### Negative

| Consequence | Impact | Mitigation |
|-------------|--------|------------|
| **Higher Initial Complexity** | More setup time | Document thoroughly, hire experienced DevOps |
| **More Ops Overhead** | Ongoing maintenance | Automate, monitor, budget for ops team |
| **Some Tools Less Mature** | Potential gaps | Contribute to community, build internally if needed |
| **GPU Hardware (NVIDIA)** | US company, no alternative | Self-host, optimize models, support open GPU initiatives |
| **Smaller Ecosystems** | Less documentation, community | Invest in training, contribute back |

### Neutral

| Consequence | Impact |
|-------------|--------|
| **Development Speed** | Similar long-term, slower initial |
| **Talent Pool** | Different skills required, not smaller |
| **Performance** | Comparable to US alternatives |

---

## Compliance

This decision aligns with:
- **Strategy** (STRATEGY.md) - Sovereign stack requirement
- **Solarpunk Mandate** (strategy/solarpunk-mandate.md) - Technology sovereignty principle
- **Funding Strategy** (strategy/funding-strategy.md) - EU grant eligibility
- **Technology Stack** (specs/technology-stack.md) - Detailed specifications

---

## GPU Hardware Reality Check

**Issue:** No sovereign high-performance GPU options exist currently.

| GPU | Origin | Sovereignty |
|-----|--------|-------------|
| NVIDIA A100/H100 | US | US company |
| AMD MI250 | US | US company |
| Intel Gaudi | US | US company |
| Huawei Ascend | China | Non-US, but other concerns |

**Decision:** Use NVIDIA out of necessity while:
1. Self-hosting (no API dependency)
2. Optimizing models to run on fewer GPUs
3. Supporting open GPU initiatives (long-term)
4. Monitoring alternatives (annual review)

**Review Date:** 2027-01-15 (assess new options)

---

## Implementation Plan

| Phase | Timeline | Actions |
|-------|----------|---------|
| Phase 1 | Months 1-3 | Setup OVHcloud, Hetzner accounts |
| Phase 2 | Months 3-6 | Deploy Kubernetes, Podman, Forgejo |
| Phase 3 | Months 6-9 | Deploy Memgraph, Kafka, PostgreSQL |
| Phase 4 | Months 9-12 | Deploy Mistral (self-hosted), Qdrant |
| Phase 5 | Year 2 | Migrate GitHub to Forgejo (production) |
| Phase 6 | Year 2 | Migrate GitHub Actions to Woodpecker CI |

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| US Technology Dependency | 0% (except GPU) | Vendor audit |
| Data Residency | 100% EU | Infrastructure audit |
| Open Source % | 90%+ | License audit |
| Self-Hosted % | 80%+ | Infrastructure audit |
| Grant Eligibility | 100% EU programs | Application success rate |
| Sovereignty Score | 9.5/10 | Internal assessment |

---

## Risks & Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| GPU supply chain issues | Medium | High | Cloud overflow, optimize models |
| EU cloud provider failure | Low | High | Multi-provider (OVH + Hetzner) |
| Open source project abandonment | Low | Medium | Fork and maintain internally |
| Regulatory changes (EU AI Act) | Medium | Medium | Compliance monitoring, legal review |
| Talent shortage (sovereign stack skills) | Medium | Medium | Training, documentation, community |

---

## Review Cadence

| Review | Frequency | Owner |
|--------|-----------|-------|
| Technology Audit | Annual | CTO/Technical Lead |
| Sovereignty Assessment | Annual | Founder |
| GPU Alternative Review | Annual | AI/ML Lead |
| Grant Eligibility Review | Per Application | Grants Specialist |
| Full ADR Review | Annual (2027-01-15) | Board |

---

## Related Documents

- Technology Stack (specs/technology-stack.md)
- Own Hardware Specs (specs/own-hardware-specs.md)
- Solarpunk Mandate (strategy/solarpunk-mandate.md)
- ADR-001: Graph Database Selection (decisions/ADR-001-graph-database.md)
