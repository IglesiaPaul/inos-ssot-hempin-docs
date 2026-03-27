#!/usr/bin/env python3
"""INOS/SSOT Setup - Part 3: Architecture Files"""

from pathlib import Path

ROOT = Path(".")

ARCH_README = """# Architecture Documentation

Diagrams use **D2 Language**. Render locally.

---

## Diagram Index

| Diagram | File |
|---------|------|
| System Overview | overview.d2 |
| SSOT Layers | ssot-layers.d2 |
| Event Flow | event-flow.d2 |
| BUD Pipeline | bud-pipeline.d2 |
| Activation Protocol | activation-protocol.d2 |
| Roadmap | roadmap.d2 |

---

## Render Diagrams

```bash
curl -fsSL https://d2lang.com/install.sh | sh -s --
d2 architecture/overview.d2 overview.svg
"""
OVERVIEW_D2 = """# INOS/SSOT/HEMPIN System Architecture
direction: right
HEMPIN: {
style: { fill: "#10B981" }
HempCommons: { icon: globe }
HempSwap: { icon: swap }
HempGlobe: { icon: map }
BUD: { icon: ai, label: "BUD AI Agent" }
}
INOS: {
style: { fill: "#3B82F6" }
IdentityService: { icon: user }
ComplianceEngine: { icon: shield }
ValuationService: { icon: dollar }
IntegrationAdapter: { icon: gears }
APIGateway: { icon: network }
}
SSOT: {
style: { fill: "#7C3AED" }
EntityLayer
RelationshipLayer
ComplianceLayer
ValueLayer
}
EventStore: {
Kafka: { icon: lightning }
style: { fill: "#F59E0B" }
}
HEMPIN -> INOS: "API Calls"
INOS -> SSOT: "Read/Write"
INOS -> EventStore: "Append Events"
EventStore -> SSOT: "Rebuild State"
"""
SSOT_LAYERS_D2 = """# SSOT Four-Layer Knowledge Graph
direction: top
Layer1: {
label: "Layer 1: Entity Layer"
style: { fill: "#DBEAFE" }
Organization: { icon: building }
Professional: { icon: user }
Product: { icon: package }
Location: { icon: map-pin }
}
Layer2: {
label: "Layer 2: Relationship Layer"
style: { fill: "#D1FAE5" }
TradeEdge: "trade_edge"
CertEdge: "cert_edge"
}
Layer3: {
label: "Layer 3: Compliance Layer"
style: { fill: "#FEF3C7" }
Regulation: { icon: document }
Jurisdiction: { icon: flag }
}
Layer4: {
label: "Layer 4: Value Layer"
style: { fill: "#EDE9FE" }
NADA_Token: { icon: coin }
Transaction: "Transaction"
}
Layer1 -> Layer2 -> Layer3 -> Layer4: ""
Layer4 -> Layer1: "Value reweights Trust"
"""
EVENT_FLOW_D2 = """# Event-Sourced Data Flow
direction: right
DataSources: {
label: "Data Sources"
FarmerOnboarding: "Farmer via BUD"
TradeExecution: "Hemp Swap"
CertificateUpload: "Labs"
ERPIntegration: "ERP APIs"
}
EventStream: {
label: "Immutable Events"
style: { fill: "#7C3AED" }
Kafka: { label: "Apache Kafka" }
}
GraphDatabase: {
label: "Graph Database"
style: { fill: "#065F46" }
AppendOnlyLog: "Append-Only Log"
AuditTrail: "Audit Trail"
}
DataConsumers: {
label: "Data Consumers"
AnalyticsEngine: { icon: chart-bar }
BUD_AI: { icon: ai }
ComplianceOracle: { icon: shield }
}
DataSources -> EventStream.Kafka: ""
EventStream.Kafka -> GraphDatabase: ""
GraphDatabase -> DataConsumers: ""
"""
BUD_PIPELINE_D2 = """# BUD AI Pipeline
direction: right
UserInput: {
VoiceConversation: { icon: microphone }
TextChat: { icon: chat }
FieldTablet: { icon: tablet }
}
BUD_Pipeline: {
SpeechToText: "Speech-to-Text"
LLM_Extraction: "LLM Extraction"
SchemaValidation: "Schema Validation"
ConfidenceScoring: "Confidence (0.85)"
}
GraphOutput: {
NodeCreation: "Node Creation"
EdgeCreation: "Edge Creation"
EventGeneration: "Event to Kafka"
}
UserInput -> BUD_Pipeline.SpeechToText: ""
BUD_Pipeline.SpeechToText -> BUD_Pipeline.LLM_Extraction: ""
BUD_Pipeline.LLM_Extraction -> BUD_Pipeline.SchemaValidation: ""
BUD_Pipeline.SchemaValidation -> BUD_Pipeline.ConfidenceScoring: ""
BUD_Pipeline.ConfidenceScoring -> GraphOutput.NodeCreation: "if >= 0.85"
"""

print("🏗️ Creating architecture files...")
# Architecture README
path = ROOT / "architecture" / "README.md"
with open(path, "w", encoding="utf-8") as f:
    f.write(ARCH_README.strip())
print("  ✓ architecture/README.md")
# D2 Diagrams
diagrams = {
    "overview.d2": OVERVIEW_D2,
    "ssot-layers.d2": SSOT_LAYERS_D2,
    "event-flow.d2": EVENT_FLOW_D2,
    "bud-pipeline.d2": BUD_PIPELINE_D2,
}
for filename, content in diagrams.items():
    path = ROOT / "architecture" / filename
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip())
    print(f"  ✓ architecture/{filename}")
print("\n✅ Part 3 Complete! Run setup-templates.py next.")