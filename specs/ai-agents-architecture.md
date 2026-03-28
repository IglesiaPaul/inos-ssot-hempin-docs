# AI Agents Architecture

> "AI does the work. Humans set the direction."

**Version:** 1.0  
**Last Updated:** 2026-01  
**Approach:** Hybrid (Human + AI Collaboration)

---

## Executive Summary

This document specifies the AI agent architecture for INOS/SSOT, covering both the BUD onboarding agent and the AI coding agent swarm for development. We use a hybrid approach where AI handles repetitive tasks while humans maintain oversight on critical decisions.

| Agent Type | Purpose | Autonomy Level | Human Oversight |
|------------|---------|----------------|-----------------|
| BUD Onboarding Agent | Entity verification via conversation | Medium | High (low confidence review) |
| Coding Agents | Code generation, testing, review | High | Medium (critical paths only) |
| DevOps Agents | Deployment, monitoring, healing | High | Low (exception handling) |
| Security Agents | Vulnerability scanning, patching | Medium | High (security-critical) |
| Grants Agents | Opportunity scanning, application drafting | Medium | High (submission approval) |

---

## BUD Onboarding Agent

### Purpose

BUD (Business Understanding & Discovery) is the AI agent that converts natural language conversations into verified graph data. It is the primary onboarding mechanism for farmers, processors, and associations.

### Input Methods

| Method | Description | Technology |
|--------|-------------|------------|
| Voice Conversation | Real-time speech-to-text | Whisper v3.2 (self-hosted) |
| Text Chat | Web-based chat interface | WebSockets + JSON |
| Field Tablet | Offline-capable PWA | Sync when online |
| Phone IVR | Voice calls for low-connectivity | Twilio alternative (EU) |
| WhatsApp/Telegram | Messaging app integration | Self-hosted gateway |

### Processing Pipeline

**Step 1: Speech-to-Text (if voice)**
- Technology: Whisper v3.2 (self-hosted)
- Latency: <2 seconds
- Accuracy: >95% for supported languages

**Step 2: LLM Entity Extraction**
- Technology: Mistral 7B / Mixtral 8x7B (self-hosted)
- Function: Extract entities from conversation
- Output: Structured JSON (entity type, attributes, confidence)

**Step 3: Schema Validation**
- Technology: Pydantic + AgriGraph v2.1 schema
- Function: Validate extracted entities against graph schema
- Output: Validated entity structure or error

**Step 4: Confidence Scoring**
- Technology: Softmax confidence per entity
- Threshold: 0.85 (85% confidence)
- Below threshold: Trigger clarification loop

**Step 5: Clarification Loop (if needed)**
- Technology: Multi-turn dialog engine
- Function: Ask clarifying questions
- Context: Retain conversation history

**Step 6: Graph Database Output**
- Node Creation/Update: Neo4j/Memgraph upsert via Cypher
- Edge Creation: Relationship inference (farms, grows, located_in)
- Event Generation: Avro-encoded event to Kafka topic

### Confidence Thresholds

| Confidence Level | Action | Human Review |
|------------------|--------|--------------|
| >0.95 (95%) | Auto-approve | No |
| 0.85-0.95 (85-95%) | Auto-approve | Random audit (10%) |
| 0.70-0.85 (70-85%) | Clarification loop | If loop fails |
| <0.70 (70%) | Human review | Yes (mandatory) |

### Supported Languages (Phase 1)

| Language | Priority | Model Fine-tuning |
|----------|----------|-------------------|
| English | High | Base model |
| Thai | High | Fine-tuned (Thailand pilot) |
| French | Medium | Base model |
| German | Medium | Base model |
| Spanish | Medium | Base model |
| Portuguese | Low | Future phase |
| Mandarin | Low | Future phase |

### Example Conversation Flow

**Farmer says:** "I farm 50 hectares in Chiang Mai"

**BUD extracts:**
- area: 50
- unit: hectares
- crop: hemp
- location: Chiang Mai
- confidence: 0.92

**Graph Output:**
- Organization Node: Farmer_7829
- Location Node: Chiang Mai
- Relationship: farms (Organization → Location)
- Event: EntityVerified → Kafka

### Human-in-the-Loop Console

**Purpose:** Review low-confidence extractions and edge cases

**Features:**
- Queue of items needing review
- Side-by-side conversation + extracted data
- Approve, reject, or edit buttons
- Feedback loop to improve model
- Escalation to senior reviewer

**SLA:**
- Standard review: <24 hours
- Urgent (trade-related): <4 hours
- Batch review (non-urgent): <72 hours

---

## AI Coding Agent Swarm

### Overview

For software development, we deploy a swarm of AI agents that handle different aspects of the development lifecycle. Humans focus on architecture, critical paths, and final approval.

### Agent Types

| Agent | Instances | Purpose | Autonomy |
|-------|-----------|---------|----------|
| Architecture Agent | 1 | System design, ADRs | Low (human approval required) |
| Coding Agents | 20 | Code generation | High (auto-commit to PR) |
| Testing Agents | 10 | Test generation & execution | High (auto-run tests) |
| Code Review Agents | 10 | AI code review | Medium (flag issues) |
| DevOps Agents | 5 | Deployment, monitoring | High (auto-deploy non-prod) |
| Security Agents | 3 | Vulnerability scanning | Medium (auto-patch low-risk) |
| Documentation Agents | 5 | Auto-generate docs | High (auto-commit) |
| Bug Hunter Agents | 5 | Automated bug finding | Medium (report only) |
| Deployment Agents | 5 | CI/CD automation | High (auto-deploy) |
| **TOTAL** | **~64 instances** | | |

### Agent Orchestration

**Technology:** Haystack (Germany) or LlamaIndex (Switzerland)

**Coordination:**
- Central orchestrator assigns tasks
- Agents communicate via message queue
- Conflict resolution (when agents disagree)
- Priority queue (urgent tasks first)

**Memory:**
- Vector database (Qdrant) for context
- Conversation history retention
- Project-wide knowledge base
- Codebase embeddings

### Development Workflow

**Step 1: Task Definition**
- Human defines high-level task
- Architecture Agent breaks into subtasks
- Subtasks assigned to coding agents

**Step 2: Code Generation**
- Coding agents generate code in parallel
- Each agent handles one module/function
- Code committed to feature branch

**Step 3: Testing**
- Testing agents generate unit tests
- Integration tests auto-run
- Coverage threshold: >90%

**Step 4: Code Review**
- Review agents scan for issues
- Security agents check vulnerabilities
- Style/lint agents ensure consistency

**Step 5: Human Review**
- Critical paths: Human review required
- Non-critical: Auto-merge if tests pass
- Random audit: 20% of auto-merged code

**Step 6: Deployment**
- DevOps agents deploy to staging
- Automated smoke tests
- Production deployment (human approval)

### Code Quality Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| AI Code Percentage | 60% by Year 2, 80% by Year 3 | Git blame analysis |
| Test Coverage | >90% | Coverage tool |
| Bug Rate | <0.5 bugs per 1000 lines | QA tracking |
| Security Vulnerabilities | 0 critical, <5 high per year | Security scans |
| Code Review Coverage | 100% critical, 20% random audit | Review logs |
| Deployment Frequency | Daily (staging), Weekly (prod) | DevOps metrics |

---

## AI Infrastructure

### GPU Requirements

| Phase | GPU Type | Quantity | Purpose | Monthly Cost (€) |
|-------|----------|----------|---------|------------------|
| Phase 1 (Months 1-6) | RTX 6000 Ada | 2 | BUD agent, development | €3,000 |
| Phase 2 (Months 7-12) | A100 40GB | 4 | BUD + coding agents | €12,000 |
| Phase 3 (Year 2) | A100 40GB | 8 | Production AI | €24,000 |
| Phase 4 (Year 3+) | H100 80GB | 8-16 | Full agent swarm | €50,000+ |

### Model Hosting

| Component | Technology | Origin | Self-Hosted |
|-----------|------------|--------|-------------|
| LLM Serving | Ollama + vLLM | Community | Yes |
| Vector Database | Qdrant | UK/Estonia | Yes |
| Embedding Model | Sentence Transformers | Germany | Yes |
| Orchestrator | Haystack | Germany | Yes |
| Monitoring | Grafana + Prometheus | Switzerland/Community | Yes |

### Model Selection

| Use Case | Primary Model | Fallback Model |
|----------|---------------|----------------|
| BUD Conversation | Mistral 7B | Falcon 40B |
| Code Generation | Mixtral 8x7B | Qwen 72B |
| Code Review | Mistral 7B | Mixtral 8x7B |
| Documentation | Mistral 7B | BLOOM |
| Grants Writing | Mixtral 8x7B | Mistral 7B |
| Translation | NLLB (Meta, self-hosted) | M2M100 |

---

## AI Agents for Grant Writing

### Purpose

Dedicated AI agents to identify, draft, and manage grant applications. This is critical for achieving the 57% grant funding target.

### Agent Types

| Agent | Purpose | Output |
|-------|---------|--------|
| Opportunity Scanner | Monitor 500+ funding sources | Daily opportunity list |
| Eligibility Assessor | Evaluate fit for each grant | Success probability score |
| Proposal Drafter | Draft technical narratives | First draft of application |
| Budget Builder | Auto-fill budget templates | Budget justification |
| Compliance Checker | Verify against requirements | Compliance checklist |
| Deadline Tracker | Track all deadlines | Calendar alerts |
| Reporter | Auto-generate progress reports | Grant compliance reports |

### Workflow

**Step 1: Opportunity Scanning**
- Scan 500+ funding source APIs daily
- NLP matching against project profile
- Alert system for new opportunities

**Step 2: Eligibility Assessment**
- Auto-evaluate fit criteria
- Success probability scoring
- Resource requirement estimation

**Step 3: Proposal Drafting**
- Draft generation from project data
- Budget template auto-fill
- Compliance checklist generation

**Step 4: Human Review**
- Grants specialist reviews draft
- Add mission-specific content
- Final approval before submission

**Step 5: Submission & Tracking**
- Submit via grant portal
- Track confirmation
- Monitor decision timeline

**Step 6: Reporting (if awarded)**
- Auto-generate progress reports
- Financial tracking against budget
- Impact metric collection

### Success Metrics

| Metric | Target |
|--------|--------|
| Opportunities Identified | 500+ per year |
| Applications Submitted | 20+ per year |
| Success Rate | 25%+ |
| Total Grants Won | €8.5M Year 1, €240M over 5 years |
| Cost per €1 Grant | €0.15 or less |
| Time per Application | <40 hours (AI-assisted) |

---

## Security & Ethics

### AI Security Considerations

| Risk | Mitigation |
|------|------------|
| Model Poisoning | Verify model weights, checksum validation |
| Prompt Injection | Input sanitization, output validation |
| Data Leakage | No PII to models, self-hosted only |
| Model Theft | Access controls, rate limiting |
| Adversarial Attacks | Robust training, anomaly detection |

### Ethical Guidelines

| Principle | Implementation |
|-----------|----------------|
| Transparency | Disclose AI use to users |
| Accountability | Human review for critical decisions |
| Fairness | Bias testing, diverse training data |
| Privacy | No PII stored in model memory |
| Sovereignty | Self-hosted, no US API dependency |

### Human Oversight Requirements

| Decision Type | AI Autonomy | Human Review |
|---------------|-------------|--------------|
| Entity Verification (high confidence) | Auto-approve | Random audit |
| Entity Verification (low confidence) | Flag for review | Mandatory |
| Code Deployment (production) | Prepare deployment | Mandatory approval |
| Code Deployment (staging) | Auto-deploy | Exception review |
| Security Patch (critical) | Recommend patch | Mandatory approval |
| Security Patch (low-risk) | Auto-patch | Post-hoc review |
| Grant Submission | Draft application | Mandatory approval |
| Fund Disbursement | Recommend allocation | Mandatory approval |

---

## Integration with SSOT Graph

### Data Flow

**AI Agents → SSOT Graph:**
- BUD extracts entities → Graph nodes
- Coding agents → Version control (Forgejo/GitHub)
- Grants agents → Grant tracking database
- All agents → Event log (Kafka)

**SSOT Graph → AI Agents:**
- Entity data → Context for BUD
- Codebase → Embeddings for coding agents
- Grant history → Training data for grants agents

### Event Triggers

| Graph Event | AI Agent Action |
|-------------|-----------------|
| New entity onboarded | BUD creates nodes, triggers verification |
| Trade completed | Valuation agent updates pricing |
| Compliance violation | Security agent flags, creates ticket |
| Grant deadline approaching | Grants agent alerts, prepares draft |
| Code merged | DevOps agent triggers deployment |

---

## Budget Summary

### AI Infrastructure (5-Year)

| Category | Year 1 (€) | Year 2 (€) | Year 3 (€) | Year 4-5 (€) | Total (€) |
|----------|------------|------------|------------|--------------|-----------|
| GPU Hardware | €60,000 | €120,000 | €200,000 | €200,000 | €580,000 |
| GPU Cloud (overflow) | €20,000 | €50,000 | €100,000 | €150,000 | €320,000 |
| Software/Tools | €30,000 | €50,000 | €80,000 | €100,000 | €260,000 |
| Model Training | €50,000 | €100,000 | €150,000 | €200,000 | €500,000 |
| Operations | €40,000 | €80,000 | €120,000 | €200,000 | €440,000 |
| **TOTAL** | **€200,000** | **€400,000** | **€650,000** | **€850,000** | **€2,100,000** |

### AI Team (5-Year)

| Role | Count | Annual Cost (€) | 5-Year Total (€) |
|------|-------|-----------------|------------------|
| AI/ML Lead | 1 | €144,000 | €720,000 |
| ML Engineers | 2 | €240,000 | €1,200,000 |
| AI Training Specialist | 1 | €120,000 | €600,000 |
| **TOTAL** | **4** | **€504,000/yr** | **€2,520,000** |

### 5-Year Total AI Investment

| Category | Amount (€) |
|----------|------------|
| Infrastructure | €2,100,000 |
| Team | €2,520,000 |
| Contingency (15%) | €693,000 |
| **TOTAL** | **€5,313,000** |

---

## Implementation Timeline

| Phase | Timeline | Milestones |
|-------|----------|------------|
| Phase 1 | Months 1-3 | BUD agent prototype, grants scanner |
| Phase 2 | Months 4-6 | BUD production, coding agents (5 instances) |
| Phase 3 | Months 7-12 | Full coding swarm, DevOps agents |
| Phase 4 | Year 2 | Security agents, grants writing agents |
| Phase 5 | Year 3 | Full autonomy (80% AI code) |

---

## Risk Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| AI generates buggy code | Medium | High | Human review, test coverage |
| Model becomes unavailable | Low | High | Multiple model fallbacks |
| GPU supply chain issues | Medium | Medium | Cloud overflow, optimize models |
| Regulatory changes (AI Act) | Medium | Medium | Compliance monitoring, legal review |
| AI bias in verification | Low | High | Bias testing, diverse data |
| Cost overrun | Medium | Medium | Budget caps, optimize inference |

---

## Related Documents

- Technology Stack (specs/technology-stack.md)
- Own Hardware Specs (specs/own-hardware-specs.md)
- Team Structures (strategy/team-structures.md)
- Grant Strategy (strategy/funding-strategy.md)
