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

**Selected:** Neo4j Enterprise 5.21+

---

## Alternatives Considered

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **Neo4j** | Native graph, mature, enterprise support | Cost at scale | ✅ Selected |
| **Amazon Neptune** | Managed, AWS integration | Less mature graph features | ⚠️ Backup |
| **JanusGraph** | Open source, scalable | Complex operations | ❌ Rejected |

---

## Consequences

### Positive
- Native Cypher query language
- Graph Data Science Library for analytics
- Enterprise support available

### Negative
- Licensing cost at scale
- Vendor lock-in

---

## Review Date

2027-01-15 (Annual review)