# Technology Stack — Sovereign Edition

> **"Technology is not a feature of the solution. It is the precondition for the solution to exist at the scale the problem demands."**

**Version:** 1.0  
**Last Updated:** 2026-01  
**Principle:** Maximum sovereignty, zero US dependency, open source first

---

## Executive Summary

INOS/SSOT will be built on a fully sovereign technology stack with no dependency on US companies, cloud providers, or proprietary systems. This ensures:

| Benefit | Description |
|---------|-------------|
| ✅ **Data Sovereignty** | All data stored in EU jurisdictions, GDPR compliant |
| ✅ **No Cloud Act Exposure** | US government cannot access data via CLOUD Act |
| ✅ **Mission Alignment** | Technology choices reflect Solarpunk values |
| ✅ **Long-term Viability** | Open source = survives company failures |
| ✅ **Cost Control** | Self-hosted = no vendor lock-in pricing |

---

## Stack Overview
┌─────────────────────────────────────────────────────────────┐
│ TECHNOLOGY STACK │
├─────────────────────────────────────────────────────────────┤
│ │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ PRESENTATION LAYER │ │
│ │ Vue.js + Nuxt (France) 🇫🇷 │ │
│ │ MapLibre GL + OpenStreetMap (Community) 🌍 │ │
│ │ PlantUML / Mermaid (France/Community) 🇫🇷🌍 │ │
│ └─────────────────────────────────────────────────────┘ │
│ ↑ │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ API LAYER │ │
│ │ FastAPI (Python, Community) 🌍 │ │
│ │ GraphQL Mesh (Community) 🌍 │ │
│ │ Kong Gateway (Community) 🌍 │ │
│ └─────────────────────────────────────────────────────┘ │
│ ↑ │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ APPLICATION LAYER │ │
│ │ Python 3.11+ (PSF International) 🌍 │ │
│ │ Rust (Rust Foundation, Community) 🌍 │ │
│ │ Haystack (Germany) 🇩🇪 │ │
│ └─────────────────────────────────────────────────────┘ │
│ ↑ │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ DATA LAYER │ │
│ │ Memgraph (Slovenia) 🇸🇮 │ │
│ │ Apache Kafka (Self-hosted) 🌍 │ │
│ │ PostgreSQL (Community) 🌍 │ │
│ │ Ceph Storage (Community) 🌍 │ │
│ └─────────────────────────────────────────────────────┘ │
│ ↑ │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ INFRASTRUCTURE LAYER │ │
│ │ OVHcloud + Hetzner (France/Germany) 🇫🇷🇩🇪 │ │
│ │ Kubernetes (CNCF, Community) 🌍 │ │
│ │ Podman (Community) 🌍 │ │
│ │ OpenTofu (Linux Foundation) 🌍 │ │
│ └─────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────┘


---

## Infrastructure Layer

### Cloud Providers

| Provider | Origin | Services | Monthly Cost | Sovereignty |
|----------|--------|----------|--------------|-------------|
| **OVHcloud** | 🇫🇷 France | Compute, Storage, Network | €5K-20K | ✅✅✅ Maximum |
| **Hetzner** | 🇩🇪 Germany | Bare Metal, Cloud, Storage | €3K-15K | ✅✅✅ Maximum |
| **Scaleway** | 🇫🇷 France | Compute, Kubernetes, AI | €5K-20K | ✅✅✅ Maximum |
| **T-Systems** | 🇩🇪 Germany | Sovereign Cloud, Enterprise | €10K-50K | ✅✅✅ Maximum |

**Selected:** OVHcloud (Primary) + Hetzner (Secondary/Backup)

### Why Not AWS/GCP/Azure?

| Concern | US Cloud | Sovereign Alternative |
|---------|----------|----------------------|
| **CLOUD Act** | ✅ Applies (US govt access) | ❌ Does not apply |
| **Data Residency** | ⚠️ Complex (can be moved to US) | ✅ Guaranteed EU |
| **GDPR Compliance** | ⚠️ Requires additional measures | ✅ Native |
| **Vendor Lock-in** | ✅ High (proprietary APIs) | ❌ Low (open standards) |
| **Pricing** | ⚠️ Unpredictable (can change) | ✅ Transparent |
| **Mission Alignment** | ❌ Profit-maximizing US corps | ✅ European values |

### Container & Orchestration

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Container Runtime** | Podman | 🌍 Community | Apache 2.0 | Docker (US Inc.) |
| **Orchestration** | Kubernetes (K3s) | 🌍 CNCF | Apache 2.0 | AWS EKS, Google GKE |
| **Service Mesh** | Linkerd | 🌍 CNCF | Apache 2.0 | Istio (US) |
| **Package Manager** | Helm | 🌍 CNCF | Apache 2.0 | N/A |

### Infrastructure as Code

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **IaC** | OpenTofu | 🌍 Linux Foundation | MPL 2.0 | Terraform (HashiCorp US) |
| **Config Management** | Ansible | 🌍 Community | GPL 3.0 | Chef/Puppet (US) |
| **CI/CD** | Woodpecker CI | 🌍 Community | Apache 2.0 | GitHub Actions (US) |
| **Code Repository** | Forgejo (Self-hosted) | 🌍 Community | MIT | GitHub (Microsoft US) |

---

## Data Layer

### Graph Database

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Primary** | Memgraph | 🇸🇮 Slovenia | Business Source | Neo4j (US) |
| **Backup** | ArangoDB | 🇩🇪 Germany | Apache 2.0 | Neo4j (US) |
| **Open Source** | JanusGraph | 🌍 Apache | Apache 2.0 | Neo4j (US) |
| **PostgreSQL Extension** | AgensGraph | 🇰🇷 Korea | PostgreSQL License | Neo4j (US) |

**Selected:** Memgraph (Primary)

### Why Memgraph?

| Factor | Memgraph | Neo4j |
|--------|----------|-------|
| **Headquarters** | Slovenia (EU) | USA |
| **CLOUD Act Exposure** | ❌ No | ✅ Yes |
| **Cypher Compatibility** | ✅ 95%+ | ✅ 100% |
| **Performance** | ✅ Faster (C++ backend) | ⚠️ Good (Java backend) |
| **Enterprise Support** | ✅ Available | ✅ Available |
| **Community Size** | ⚠️ Smaller | ✅ Larger |
| **Pricing** | ✅ Transparent | ⚠️ Enterprise tiers |

### Event Streaming

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Primary** | Apache Kafka (Self-hosted) | 🌍 Apache | Apache 2.0 | Confluent (US) |
| **Alternative** | Apache Pulsar | 🌍 Apache | Apache 2.0 | Confluent (US) |
| **Cloud Managed** | Avoid | — | — | Confluent Cloud (US) |

**Selected:** Apache Kafka (Self-hosted on OVHcloud)

### Relational Database

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Primary** | PostgreSQL 16 | 🌍 Community | PostgreSQL License | MySQL (Oracle US) |
| **Use Case** | NADA Ledger, User Data | — | — | — |
| **Extensions** | TimescaleDB, PostGIS | 🌍 Community | Apache 2.0 | — |

### Object Storage

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Primary** | Ceph (Self-hosted) | 🌍 Community | LGPL | AWS S3 (US) |
| **Alternative** | MinIO | 🇺🇸 US | AGPL | AWS S3 (US) |
| **Selected** | Ceph | 🌍 Community | LGPL | AWS S3 (US) |

---

## Application Layer

### Programming Languages

| Language | Origin | License | Use Case | Alternative to |
|----------|--------|---------|----------|----------------|
| **Python 3.11+** | 🌍 PSF (International) | PSF License | Backend, AI, Data | Go (Google US) |
| **Rust** | 🌍 Rust Foundation | MIT/Apache | Performance-critical | Go (Google US) |
| **Elixir** | 🇵🇱 Poland (main company) | MIT | Fault-tolerant services | Node.js (OpenJS has US ties) |

**Selected:** Python (Primary) + Rust (Performance-critical)

### API Framework

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **REST API** | FastAPI | 🌍 Community | MIT | Express (US ecosystem) |
| **GraphQL** | GraphQL Mesh | 🌍 Community | MIT | Apollo (US) |
| **API Gateway** | Kong | 🌍 Community | Apache 2.0 | AWS API Gateway (US) |
| **Authentication** | Keycloak / Zitadel | 🌍 / 🇨🇭 | Apache 2.0 | Auth0 (US) |

### Data Validation

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Python** | Pydantic | 🌍 Community | MIT | Marshmallow (US) |
| **TypeScript** | Zod | 🌍 Community | MIT | Joi (US) |
| **ORM** | SQLAlchemy | 🌍 Community | MIT | Prisma (US) |

---

## AI/ML Layer

### Large Language Models

| Model | Origin | License | Use Case | Alternative to |
|-------|--------|---------|----------|----------------|
| **Mistral 7B** | 🇫🇷 France (Mistral AI) | Apache 2.0 | Code, conversation | Llama (Meta US) |
| **Mixtral 8x7B** | 🇫🇷 France (Mistral AI) | Apache 2.0 | Complex reasoning | GPT-4 (OpenAI US) |
| **Falcon 40B** | 🇦🇪 UAE (TII) | Apache 2.0 | Fallback option | Llama (Meta US) |
| **BLOOM** | 🇫🇷 France (BigScience) | Open RAIL | Research, multilingual | GPT (US) |
| **Qwen** | 🇨🇳 China (Alibaba) | Apache 2.0 | Asian language support | GPT (US) |

**Selected:** Mistral 7B/Mixtral (Primary) + Falcon (Fallback)

### Model Hosting

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Local Serving** | Ollama | 🌍 Community | MIT | OpenAI API (US) |
| **Production Serving** | vLLM | 🌍 Community | Apache 2.0 | US inference services |
| **Orchestration** | Haystack | 🇩🇪 Germany | Apache 2.0 | LangChain (US) |
| **Alternative** | LlamaIndex | 🇨🇭 Switzerland | MIT | LangChain (US) |

**Selected:** Ollama + vLLM (Self-hosted on OVHcloud GPU instances)

### Vector Database

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Primary** | Qdrant | 🇬🇧 UK / 🇪🇪 Estonia | Apache 2.0 | Pinecone (US) |
| **Alternative** | Weaviate | 🇳🇱 Netherlands | BSD 3-Clause | Pinecone (US) |
| **Neo4j Integration** | Neo4j Vector Index | 🇸🇮 Slovenia | BSL | Separate vector DB |

**Selected:** Qdrant (Self-hosted)

### Embedding Models

| Model | Origin | License | Use Case |
|-------|--------|---------|----------|
| **Sentence Transformers** | 🇩🇪 Germany | Apache 2.0 | Text embeddings |
| **BGE (BAAI)** | 🇨🇳 China | MIT | Multilingual embeddings |
| **E5 (Microsoft)** | 🇺🇸 US | MIT | Avoid (US origin) |

**Selected:** Sentence Transformers (Germany)

---

## Frontend Layer

### UI Framework

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Primary** | Vue.js 3 | 🇨🇳 China / 🌍 Community | MIT | React (Meta US) |
| **Framework** | Nuxt | 🇫🇷 France | MIT | Next.js (Vercel US) |
| **State Management** | Pinia | 🌍 Community | MIT | Redux (US) |
| **Styling** | UnoCSS | 🇨🇳 China | MIT | Tailwind (US) |
| **Alternative** | Bootstrap | 🌍 Community | MIT | Tailwind (US) |

**Selected:** Vue.js 3 + Nuxt (France)

### Maps & Geospatial

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Map Library** | MapLibre GL | 🌍 Community | BSD 3-Clause | Mapbox GL (US) |
| **Map Data** | OpenStreetMap | 🇬🇧 UK (OSM Foundation) | ODbL | Google Maps (US) |
| **Alternative** | Leaflet | 🇺🇦 Ukraine | BSD 2-Clause | Google Maps (US) |
| **3D Globe** | Cesium | 🇺🇸 US | Apache 2.0 | Avoid (US) |

**Selected:** MapLibre GL + OpenStreetMap

### Diagrams & Documentation

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Diagrams** | Mermaid | 🌍 Community | MIT | D2 (Terrastruct US) |
| **Alternative** | PlantUML | 🇫🇷 France | GPL | D2 (US) |
| **Documentation** | GitBook (Self-hosted option) | 🇺🇸 US | — | Consider alternatives |
| **Alternative** | MkDocs | 🌍 Community | BSD | GitBook (US) |

**Selected:** Mermaid + PlantUML (for diagrams), MkDocs (for docs)

---

## Security Layer

### Authentication & Authorization

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Primary** | Zitadel | 🇨🇭 Switzerland | Apache 2.0 | Auth0 (US) |
| **Alternative** | Keycloak | 🌍 Community (Red Hat) | Apache 2.0 | Auth0 (US) |
| **Alternative** | Ory | 🇩🇪 Germany | Apache 2.0 | Auth0 (US) |

**Selected:** Zitadel (Switzerland) — Swiss privacy laws

### Secrets Management

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Primary** | HashiCorp Vault (Self-hosted) | 🌍 Community | BSL | AWS Secrets (US) |
| **Alternative** | Doppler | 🇺🇸 US | — | Avoid (US) |

**Selected:** HashiCorp Vault (Self-hosted, BSL allows self-host)

### Security Monitoring

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **SIEM** | Wazuh | 🇪🇸 Spain | GPL 2.0 | US security tools |
| **Vulnerability Scan** | OpenVAS | 🌍 Community | GPL 2.0 | US tools |
| **Code Analysis** | Semgrep | 🌍 Community | LGPL | US tools |

### SSL/TLS

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Primary** | ZeroSSL | 🇦🇹 Austria | — | Let's Encrypt (US) |
| **Alternative** | Self-signed | — | — | — |

**Selected:** ZeroSSL (Austria)

---

## Monitoring & Observability

### Metrics & Dashboards

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Metrics** | Prometheus | 🌍 CNCF | Apache 2.0 | Datadog (US) |
| **Dashboards** | Grafana (OSS) | 🇨🇭 Switzerland | AGPL | Datadog (US) |
| **Time-Series DB** | VictoriaMetrics | 🇬🇧 UK | Apache 2.0 | InfluxDB (US) |

### Logs & Tracing

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Logs** | Loki | 🇨🇭 Switzerland | AGPL | ELK (US companies) |
| **Tracing** | Tempo | 🇨🇭 Switzerland | AGPL | Jaeger (US ecosystem) |
| **Search** | OpenSearch | 🌍 Community | Apache 2.0 | Elasticsearch (US company) |

### Alerting

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Alerts** | Alertmanager | 🌍 Community | Apache 2.0 | PagerDuty (US) |
| **On-Call** | Self-hosted (no US dependency) | — | — | PagerDuty (US) |

---

## Development Tools

### IDE & Editor

| Tool | Origin | License | Alternative to |
|------|--------|---------|----------------|
| **Cursor** | 🇺🇸 US | Commercial | VS Code (Microsoft US) |
| **VSCodium** | 🌍 Community | MIT | VS Code (Microsoft US) |
| **Neovim** | 🌍 Community | Apache 2.0 | — |
| **IntelliJ** | 🇨🇿 Czech Republic | Commercial | — |

**Note:** Cursor is US-based but we use it for convenience. Consider VSCodium for full sovereignty.

### Version Control

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Repository** | Forgejo (Self-hosted) | 🌍 Community | MIT | GitHub (Microsoft US) |
| **Current** | GitHub | 🇺🇸 US | — | Forgejo (for production) |
| **Git Server** | Gitea | 🌍 Community | MIT | GitHub (US) |

**Selected:** GitHub (Current, for visibility) → Forgejo (Production, for sovereignty)

### CI/CD

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Primary** | Woodpecker CI | 🌍 Community | Apache 2.0 | GitHub Actions (US) |
| **Current** | GitHub Actions | 🇺🇸 US | — | Woodpecker CI |
| **Alternative** | Jenkins | 🌍 Community | MIT | — |

**Selected:** GitHub Actions (Current) → Woodpecker CI (Production)

---

## Blockchain Layer (NADA Ledger)

### Year 1-2: PostgreSQL Event Ledger

| Component | Technology | Origin | License |
|-----------|------------|--------|---------|
| **Database** | PostgreSQL 16 | 🌍 Community | PostgreSQL License |
| **Event Sourcing** | Custom (Python) | — | MIT |
| **Cryptographic Signatures** | libsodium | 🌍 Community | ISC |

### Year 3+: Hyperledger Fabric

| Component | Technology | Origin | License | Alternative to |
|-----------|------------|--------|---------|----------------|
| **Blockchain** | Hyperledger Fabric | 🌍 Linux Foundation | Apache 2.0 | Ethereum (US foundation) |
| **Alternative** | Hyperledger Besu | 🌍 Linux Foundation | Apache 2.0 | Geth (US) |
| **Alternative** | Corda | 🇺🇸 US (R3) | Apache 2.0 | Avoid (US company) |
| **Alternative** | Substrate/Polkadot | 🇨🇭 Web3 Foundation | GPL 3.0 | Consider (European) |

**Selected:** Hyperledger Fabric (Linux Foundation, community-governed)

---

## Hardware Specifications

### Server Infrastructure (Per Datacenter)

| Component | Specification | Quantity | Unit Cost (€) | Total (€) |
|-----------|---------------|----------|---------------|-----------|
| **Compute Servers** | Dell PowerEdge R750 / Supermicro 2U | 4 | 8,000 | 32,000 |
| **CPU** | AMD EPYC 7543 (32 core) | 4 | 3,500 | 14,000 |
| **RAM** | 512 GB DDR4 ECC | 4 | 2,000 | 8,000 |
| **Storage (Hot)** | 4TB NVMe SSD Enterprise | 16 | 400 | 6,400 |
| **Storage (Cold)** | 16TB HDD Enterprise | 8 | 300 | 2,400 |
| **GPU (AI)** | NVIDIA A100 40GB / RTX 6000 Ada | 2 | 15,000 | 30,000 |
| **Network Switch** | 10GbE Managed Switch | 2 | 2,000 | 4,000 |
| **UPS** | APC Smart-UPS 3000VA | 2 | 3,000 | 6,000 |
| **Rack** | 42U Server Rack | 2 | 1,500 | 3,000 |
| **Backup Server** | Same as compute | 1 | 8,000 | 8,000 |
| **TOTAL** | | | | **€113,800** |

### GPU Considerations

| GPU | Origin | Cost (€) | Performance | Sovereignty |
|-----|--------|----------|-------------|-------------|
| **NVIDIA A100** | 🇺🇸 US | 15,000 | Excellent | ⚠️ US company |
| **NVIDIA H100** | 🇺🇸 US | 30,000 | Best | ⚠️ US company |
| **AMD MI250** | 🇺🇸 US | 10,000 | Very Good | ⚠️ US company |
| **Intel Gaudi** | 🇺🇸 US | 8,000 | Good | ⚠️ US company |
| **Huawei Ascend** | 🇨🇳 China | 12,000 | Very Good | ✅ Non-US |

**Reality Check:** No truly sovereign high-performance GPU options exist currently. We use NVIDIA out of necessity while monitoring alternatives.

**Mitigation:** Self-host (no API dependency), optimize models to run on fewer GPUs, support open GPU initiatives.

---

## Sovereignty Scorecard

| Layer | Technology | Sovereignty Score | Notes |
|-------|------------|-------------------|-------|
| **Cloud** | OVHcloud + Hetzner | ✅✅✅ 10/10 | EU-based, full control |
| **Containers** | Podman + K8s | ✅✅✅ 10/10 | Community-governed |
| **Graph DB** | Memgraph | ✅✅✅ 10/10 | Slovenia (EU) |
| **Event Stream** | Kafka (self-hosted) | ✅✅✅ 10/10 | Apache Foundation |
| **Languages** | Python + Rust | ✅✅✅ 10/10 | Community-governed |
| **AI/LLM** | Mistral (self-hosted) | ✅✅✅ 10/10 | France |
| **Frontend** | Vue.js + Nuxt | ✅✅✅ 10/10 | France/Community |
| **Maps** | MapLibre + OSM | ✅✅✅ 10/10 | Community |
| **Auth** | Zitadel | ✅✅✅ 10/10 | Switzerland |
| **Monitoring** | Prometheus + Grafana | ✅✅✅ 10/10 | Switzerland/Community |
| **Blockchain** | Hyperledger Fabric | ✅✅✅ 10/10 | Linux Foundation |
| **GPU Hardware** | NVIDIA | ⚠️ 5/10 | US company (no alternative) |
| **Overall** | | ✅✅✅ 9.5/10 | Best achievable today |

---

## Migration Path (US → Sovereign)

| Component | Current | Target | Timeline |
|-----------|---------|--------|----------|
| **Code Repository** | GitHub | Forgejo (self-hosted) | Year 2 |
| **CI/CD** | GitHub Actions | Woodpecker CI | Year 2 |
| **Documentation** | GitBook | MkDocs (self-hosted) | Year 2 |
| **IDE** | Cursor | VSCodium / Neovim | Year 1 |
| **Cloud** | — | OVHcloud + Hetzner | Year 1 |
| **Auth** | — | Zitadel | Year 1 |
| **LLM API** | — | Mistral (self-hosted) | Year 1 |

---

## Vendor Risk Assessment

| Vendor | Risk Level | Mitigation |
|--------|------------|------------|
| **OVHcloud** | Low | EU-based, add Hetzner backup |
| **Hetzner** | Low | EU-based, add OVHcloud backup |
| **Memgraph** | Low | EU-based, ArangoDB backup |
| **NVIDIA** | Medium | No alternative, self-host, optimize |
| **Mistral AI** | Low | France, open weights, self-host |
| **PostgreSQL** | None | Community-governed |
| **Kubernetes** | None | CNCF (Linux Foundation) |
| **Apache Kafka** | None | Apache Foundation |

---

## 🔗 Related Documents

- [Own Hardware Specs](specs/own-hardware-specs.md)
- [AI Agents Architecture](specs/ai-agents-architecture.md)
- [Blockchain Integration](specs/blockchain-integration.md)
- [Sovereign Stack Decision](decisions/ADR-002-sovereign-stack.md)
