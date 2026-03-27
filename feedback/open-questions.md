# Open Questions & Design Decisions Pending

> **Contribute your thoughts via GitHub Issues or PR comments**

---

## 🔴 High Priority

### Q1: NADA Token Design
**Question:** Should NADA start as centralized ledger or permissioned blockchain?

**Options:**
- A. Centralized (faster, simpler)
- B. Permissioned blockchain (Hyperledger Fabric)
- C. L2 solution (Polygon CDK)

**Decision By:** 2026-03-31

---

### Q2: Data Residency
**Question:** How do we handle GDPR and local data sovereignty across 57 jurisdictions?

**Options:**
- A. Regional sharding with global index
- B. Full data replication per region
- C. Edge computing approach

**Decision By:** 2026-06-30

---

### Q3: BUD Model Selection
**Question:** Fine-tune open-source LLM or use API-based solution?

**Options:**
- A. Fine-tune Llama-3-8B (cost control, data privacy)
- B. GPT-4 API (faster development)
- C. Hybrid approach

**Decision By:** 2026-02-28

---

## ✅ Resolved Questions

| Question | Decision | Date |
|----------|----------|------|
| Graph Database | Neo4j Enterprise | 2026-01-15 |
| Event Streaming | Apache Kafka | 2026-01-15 |
| API Standard | GraphQL | 2026-01-15 |