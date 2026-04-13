# ADR-001: Graph Database Selection

**Status:** Accepted  
**Date:** 2026-01-15  
**Author:** Architecture Team

---

## Context

We need a database that can:
- Store entity-relationship data across 4 layers
- Support complex graph traversals in milliseconds
- Handle event-sourced data model
- Scale to 50,000+ entities across 15+ countries

---

## Decision

**Selected:** Memgraph (Slovenia-based, EU sovereign)

---

## Alternatives Considered

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **Memgraph** | EU-based (Slovenia), in-memory performance, Cypher support, Apache 2.0 | Smaller community than Neo4j | ✅ Selected |
| **Neo4j** | Mature, large community, enterprise support | US-based (Cloud Act risk), licensing cost at scale | ❌ Rejected |
| **Amazon Neptune** | Managed, AWS integration | US Cloud Act exposure, less mature graph features | ❌ Rejected |
| **JanusGraph** | Open source, scalable | Complex operations, no commercial support | ❌ Rejected |

---

## Consequences

### Positive
- **EU Data Sovereignty:** All data remains in EU jurisdiction (Slovenia)
- **No US Cloud Act Exposure:** Critical for grant eligibility and GDPR compliance
- **In-Memory Performance:** Real-time compliance queries (<500ms latency)
- **Cypher Query Language:** Industry standard, easy hiring
- **Apache 2.0 License:** Commercial-friendly, no vendor lock-in

### Negative
- **Smaller Community:** Less documentation than Neo4j
- **Mitigation:** Active participation in Memgraph community, internal documentation

---

## Review Date

2027-01-15 (Annual review)
