# Event-Sourced Architecture

## Principles
- No data is ever updated
- Every action is an immutable event
- Fully auditable with provable consistency

## Event Store
- Technology: Apache Kafka (self-hosted)
- Pattern: CQRS (Command Query Responsibility Segregation)
- Capability: Full event replay for state reconstruction

## Event Types
1. `EntityVerified` — New entity added to graph
2. `TradeExecuted` — Transaction completed on Hemp Swap
3. `ComplianceUpdated` — Regulatory constraint changed
4. `ValueTransferred` — Economic flow (including 30% to Regeneration Fund)
