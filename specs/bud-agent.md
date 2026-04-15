# BUD Agent Technical Specifications

## Confidence Threshold
- Auto-approval: **>0.85**
- Human review: **<0.85**

## Technologies
- ASR: Whisper v3.2 fine-tuned
- LLM: Mistral 7B (self-hosted)
- Graph: Memgraph 5.21
- Schema: AgriGraph v2.1

## API Endpoints
- Entity ingestion: `POST /v1/entity/ingest`
- Confidence check: `GET /v1/entity/confidence/{id}`

## Event Topics
- Kafka topic: `agri-graph-events-v1`
- Event types: `EntityVerified`, `TradeExecuted`, `ComplianceUpdated`, `ValueTransferred`
