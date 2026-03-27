# Engineer Onboarding Guide

> **Welcome to INOS/SSOT/HEMPIN**

**Target Audience:** New engineering hires  
**Duration:** 2 weeks

---

## 📅 Week 1: Foundation

| Day | Focus | Resources |
|-----|-------|-----------|
| **1** | System Overview | [Strategy](../../STRATEGY.md), [Architecture](../../architecture/overview.d2) |
| **2** | SSOT Graph Model | [Graph Structure](../../architecture/ssot-layers.d2) |
| **3** | Event Flow | [Event Flow](../../architecture/event-flow.d2) |
| **4** | BUD AI Pipeline | [BUD Pipeline](../../architecture/bud-pipeline.d2) |
| **5** | Activation Protocol | [Activation](../../architecture/activation-protocol.d2) |

---

## 📅 Week 2-4: Specialization

### Backend Engineers
- [ ] Set up Neo4j local instance
- [ ] Write Cypher queries for all 4 layers
- [ ] Implement one microservice endpoint

### ML Engineers
- [ ] Set up BUD LLM local environment
- [ ] Fine-tune on sample hemp data
- [ ] Implement confidence scoring module

### Frontend Engineers
- [ ] Set up HEMPIN local dev environment
- [ ] Build one mini-app component
- [ ] Integrate with GraphQL API

### DevOps Engineers
- [ ] Set up Kafka local cluster
- [ ] Configure GitHub Actions workflows
- [ ] Deploy staging environment

---

## 📋 Onboarding Checklist

```markdown
- [ ] Repository access granted
- [ ] Development environment set up
- [ ] Documentation reviewed (Week 1)
- [ ] First commit merged
- [ ] Onboarding quiz passed (>80%)
- [ ] Mentor assigned

## 🧠 Onboarding Quiz
Q1: What are the four layers of SSOT?
<details>
<summary>Answer</summary>
Entity, Relationship, Compliance, Value
</details>

Q2: What event streaming technology do we use?
<details>
<summary>Answer</summary>
Apache Kafka
</details>

Q3: What is the confidence threshold for BUD?
<details>
<summary>Answer</summary>
0.85
</details>

Q4: Which country is the Year 1 pilot?
<details>
<summary>Answer</summary>
Thailand
</details>
```