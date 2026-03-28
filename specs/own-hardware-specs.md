# Own Hardware Specifications

> **"Sovereignty requires ownership. You cannot be sovereign on rented infrastructure."**

**Version:** 1.0  
**Last Updated:** 2026-01  
**Deployment:** Colocation (France + Germany)

---

## Executive Summary

This document specifies the complete hardware infrastructure for INOS/SSOT, from bootstrap (cloud-only) to full scale (own hardware in colocation). Owning hardware ensures:

| Benefit | Description |
|---------|-------------|
| ✅ **Data Sovereignty** | Physical control of servers, no US Cloud Act |
| ✅ **Cost Control** | CapEx vs. OpEx, predictable long-term costs |
| ✅ **Performance** | Dedicated resources, no noisy neighbors |
| ✅ **Customization** | Hardware tailored to workload (GPU for AI) |
| ✅ **Mission Alignment** | Infrastructure reflects Solarpunk values |

---

## Deployment Strategy

### Phase 0: Bootstrap (Months 1-6)

| Approach | Cost | Why |
|----------|------|-----|
| **Cloud-Only (OVHcloud)** | €500-2K/month | No CapEx, focus on grants |
| **No Own Hardware** | €0 | Wait for funding |

### Phase 1: MVP (Months 7-12)

| Approach | Cost | Why |
|----------|------|-----|
| **Colocation (1 rack)** | €60K CapEx + €5K/month | First hardware deployment |
| **Location:** Data4 (France) | | Sovereign, GDPR compliant |

### Phase 2: Expansion (Year 2)

| Approach | Cost | Why |
|----------|------|-----|
| **Colocation (2 racks)** | €120K CapEx + €10K/month | Redundancy, France + Germany |
| **Location:** Data4 + Hetzner | | Geographic diversity |

### Phase 3: Scale (Year 3+)

| Approach | Cost | Why |
|----------|------|-----|
| **Colocation (4-6 racks)** | €250K+ CapEx + €20K+/month | Full production infrastructure |
| **Location:** FR + DE + NL | | Multi-region redundancy |

---

## Hardware Specifications (Per Datacenter)

### Compute Servers

| Component | Specification | Quantity | Unit Cost (€) | Total (€) |
|-----------|---------------|----------|---------------|-----------|
| **Chassis** | Dell PowerEdge R750 / Supermicro 2U | 4 | 8,000 | 32,000 |
| **CPU** | AMD EPYC 7543 (32 core, 2.8GHz) | 4 | 3,500 | 14,000 |
| **RAM** | 512 GB DDR4 ECC (16x32GB) | 4 | 2,000 | 8,000 |
| **Boot Drive** | 480GB SSD Enterprise | 8 | 100 | 800 |
| **Storage (Hot)** | 4TB NVMe SSD Enterprise | 16 | 400 | 6,400 |
| **Storage (Cold)** | 16TB HDD Enterprise | 8 | 300 | 2,400 |
| **RAID Controller** | Hardware RAID, battery-backed | 4 | 500 | 2,000 |
| **Network** | Dual 10GbE SFP+ | 4 | Included | 0 |
| **PSU** | Redundant 1000W Platinum | 8 | Included | 0 |
| **Rails/Kit** | Rack mounting kit | 4 | 200 | 800 |
| **SUBTOTAL** | | | | **€66,400** |

### GPU Servers (AI Workloads)

| Component | Specification | Quantity | Unit Cost (€) | Total (€) |
|-----------|---------------|----------|---------------|-----------|
| **Chassis** | Supermicro 4U GPU-Optimized | 2 | 12,000 | 24,000 |
| **CPU** | AMD EPYC 7543 (32 core) | 2 | 3,500 | 7,000 |
| **RAM** | 512 GB DDR4 ECC | 2 | 2,000 | 4,000 |
| **GPU** | NVIDIA A100 40GB | 4 | 15,000 | 60,000 |
| **GPU Alternative** | NVIDIA RTX 6000 Ada | 4 | 10,000 | 40,000 |
| **Storage** | 2TB NVMe SSD | 2 | 300 | 600 |
| **Network** | Dual 25GbE SFP28 | 2 | 500 | 1,000 |
| **PSU** | Redundant 2000W Titanium | 4 | 500 | 2,000 |
| **Cooling** | Enhanced airflow, liquid option | 2 | 1,000 | 2,000 |
| **SUBTOTAL** | | | | **€100,600** |

### Network Infrastructure

| Component | Specification | Quantity | Unit Cost (€) | Total (€) |
|-----------|---------------|----------|---------------|-----------|
| **Top-of-Rack Switch** | 10GbE Managed, 48-port | 2 | 2,000 | 4,000 |
| **Core Switch** | 25/100GbE, Layer 3 | 2 | 5,000 | 10,000 |
| **Firewall** | pfSense/OPNsense appliance | 2 | 1,500 | 3,000 |
| **Router** | BGP-capable, dual WAN | 2 | 2,000 | 4,000 |
| **SFP+ Modules** | 10GbE SR/LR | 20 | 100 | 2,000 |
| **SFP28 Modules** | 25GbE SR | 10 | 150 | 1,500 |
| **Cables** | DAC, Fiber (various lengths) | 50 | 50 | 2,500 |
| **Patch Panels** | 10GbE fiber/copper | 4 | 300 | 1,200 |
| **SUBTOTAL** | | | | **€28,200** |

### Power & Cooling

| Component | Specification | Quantity | Unit Cost (€) | Total (€) |
|-----------|---------------|----------|---------------|-----------|
| **UPS** | APC Smart-UPS 3000VA | 4 | 3,000 | 12,000 |
| **UPS Battery** | Extended battery module | 4 | 1,500 | 6,000 |
| **PDU** | Smart PDU, per-outlet monitoring | 8 | 500 | 4,000 |
| **Cooling** | In-row cooling (if needed) | 2 | 5,000 | 10,000 |
| **Temperature Sensors** | IoT monitoring | 10 | 100 | 1,000 |
| **SUBTOTAL** | | | | **€33,000** |

### Rack & Physical

| Component | Specification | Quantity | Unit Cost (€) | Total (€) |
|-----------|---------------|----------|---------------|-----------|
| **Server Rack** | 42U, 800mm wide, ventilated | 4 | 1,500 | 6,000 |
| **Cable Management** | Vertical/horizontal organizers | 20 | 50 | 1,000 |
| **Blanking Panels** | 1U/2U assorted | 20 | 20 | 400 |
| **Shelves** | Fixed/ventilated | 4 | 100 | 400 |
| **Labeling** | Cable labels, rack diagram | 1 | 500 | 500 |
| **SUBTOTAL** | | | | **€8,300** |

### Backup & Disaster Recovery

| Component | Specification | Quantity | Unit Cost (€) | Total (€) |
|-----------|---------------|----------|---------------|-----------|
| **Backup Server** | Same as compute server | 1 | 8,000 | 8,000 |
| **Tape Drive** | LTO-9, 18TB native | 1 | 5,000 | 5,000 |
| **Tape Cartridges** | LTO-9, 18TB | 10 | 200 | 2,000 |
| **Offsite Replication** | Second datacenter | 1 | Included | 0 |
| **SUBTOTAL** | | | | **€15,000** |

---

## Total Capital Expenditure (Per Datacenter)

| Category | Amount (€) |
|----------|------------|
| Compute Servers | €66,400 |
| GPU Servers | €100,600 |
| Network Infrastructure | €28,200 |
| Power & Cooling | €33,000 |
| Rack & Physical | €8,300 |
| Backup & DR | €15,000 |
| **SUBTOTAL (Per DC)** | **€251,500** |

### Two Datacenter Deployment (France + Germany)

| Category | Amount (€) |
|----------|------------|
| Datacenter 1 (France) | €251,500 |
| Datacenter 2 (Germany) | €251,500 |
| **TOTAL HARDWARE** | **€503,000** |

### One-Time Setup Costs

| Item | Amount (€) |
|------|------------|
| Rack Installation (per rack) | €5,000 × 4 = €20,000 |
| Network Setup (BGP, fiber) | €15,000 |
| Security Deposit (refundable) | €20,000 |
| Initial Power/Network Setup | €10,000 |
| **TOTAL SETUP** | **€65,000** |

### Grand Total (Year 1 CapEx)

| Category | Amount (€) |
|----------|------------|
| Hardware (2 DCs) | €503,000 |
| Setup Costs | €65,000 |
| Contingency (10%) | €56,800 |
| **TOTAL YEAR 1 CAPEX** | **€624,800** |

---

## Colocation Specifications

### Datacenter Requirements

| Requirement | Specification | Priority |
|-------------|---------------|----------|
| **Tier Rating** | Tier III+ minimum | 🔴 High |
| **Location** | EU (France + Germany) | 🔴 High |
| **Power Density** | 5-10kW per rack | 🔴 High |
| **Network** | Carrier-neutral, multiple ISPs | 🔴 High |
| **Security** | 24/7 guards, biometric, CCTV | 🔴 High |
| **Compliance** | ISO 27001, SOC 2, GDPR | 🔴 High |
| **Connectivity** | BGP peering, DDoS protection | 🟡 Medium |
| **Remote Hands** | 24/7 available | 🟡 Medium |
| **Expansion** | Additional racks available | 🟡 Medium |

### Recommended Providers

| Provider | Location | Tier | Price/Rack/Month | Notes |
|----------|----------|------|------------------|-------|
| **Data4** | 🇫🇷 France (multiple) | Tier III | €2,500-4,000 | Best EU sovereignty |
| **Hetzner** | 🇩🇪 Germany | Tier III | €1,500-3,000 | Best price |
| **Equinix** | 🇫🇷 Paris, 🇩🇪 Frankfurt | Tier IV | €4,000-6,000 | Premium, global |
| **Digital Realty** | 🇫🇷 Paris, 🇩🇪 Munich | Tier III+ | €3,000-5,000 | Enterprise |
| **Interxion** | 🇳🇱 Amsterdam, 🇫🇷 Marseille | Tier III | €2,500-4,000 | Good connectivity |

**Selected:** Data4 (Primary, France) + Hetzner (Secondary, Germany)

---

## Operational Expenditure (Monthly)

### Colocation Costs (Per Rack)

| Item | Cost (€) | Notes |
|------|----------|-------|
| **Rack Space** | 2,000-4,000 | 42U, full rack |
| **Power (5kW)** | 1,000-2,000 | @ €0.15-0.20/kWh |
| **Network (1Gbps)** | 500-1,000 | Dedicated, BGP |
| **Remote Hands** | 200-500 | As needed |
| **Insurance** | 100-200 | Hardware insurance |
| **TOTAL (Per Rack)** | **€3,800-7,700** | |

### Two Datacenter, 4 Racks Total

| Item | Monthly (€) | Annual (€) |
|------|-------------|------------|
| Rack Space (4 racks) | 12,000 | 144,000 |
| Power (20kW total) | 4,000 | 48,000 |
| Network (2x 1Gbps) | 2,000 | 24,000 |
| Remote Hands | 800 | 9,600 |
| Insurance | 600 | 7,200 |
| **TOTAL** | **€19,400** | **€232,800** |

---

## Power & Cooling Calculations

### Power Consumption (Per Datacenter)

| Component | Quantity | Power Each | Total Power |
|-----------|----------|------------|-------------|
| Compute Servers | 4 | 500W | 2,000W |
| GPU Servers | 2 | 1,500W | 3,000W |
| Network Switches | 4 | 200W | 800W |
| Firewall/Router | 4 | 100W | 400W |
| UPS (Loss) | 4 | 200W | 800W |
| Cooling (30% overhead) | — | — | 2,100W |
| **TOTAL (Per DC)** | | | **~9,100W** |

### Two Datacenter Total

| Metric | Value |
|--------|-------|
| Total Power | ~18,200W (18.2kW) |
| Monthly kWh | 13,104 kWh |
| Monthly Cost (@ €0.15/kWh) | €1,966 |
| Annual Cost | €23,592 |

**Note:** Colocation providers often charge per kW, not per kWh. Budget €4,000-6,000/month for 20kW across 2 DCs.

---

## Network Architecture

### Per Datacenter


┌─────────────────────────────────────────────────────────────┐
│ DATACENTER NETWORK │
├─────────────────────────────────────────────────────────────┤
│ │
│ ┌─────────────┐ ┌─────────────┐ │
│ │ ISP #1 │ │ ISP #2 │ │
│ │ (10Gbps) │ │ (10Gbps) │ │
│ └──────┬──────┘ └──────┬──────┘ │
│ │ │ │
│ └───────────┬───────────┘ │
│ │ │
│ ┌──────┴──────┐ │
│ │ BGP │ │
│ │ Router │ │
│ └──────┬──────┘ │
│ │ │
│ ┌──────┴──────┐ │
│ │ Firewall │ │
│ │ (pfSense) │ │
│ └──────┬──────┘ │
│ │ │
│ ┌───────────┼───────────┐ │
│ │ │ │ │
│ ┌──────┴──────┐ ┌──┴──┐ ┌─────┴─────┐ │
│ │ Core Switch │ │ Mgmt│ │ ToR Switch│ │
│ │ (100GbE) │ │Switch│ │ (10GbE) │ │
│ └──────┬──────┘ └─────┘ └─────┬─────┘ │
│ │ │ │
│ ┌──────┴──────────────────────┴──────┐ │
│ │ │ │
│ │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│ │ │Compute│ │Compute│ │ GPU │ │ GPU │ │
│ │ │Server│ │Server│ │Server│ │Server│ │
│ │ └──────┘ └──────┘ └──────┘ └──────┘ │
│ │ │ │
│ └────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────┘


### BGP Configuration

| Setting | Value |
|---------|-------|
| **ASN** | Private (64512-65534) or Public |
| **Peering** | Multiple upstreams |
| **Prefix** | /24 minimum (256 IPs) |
| **Redundancy** | Dual router, dual ISP |
| **DDoS Protection** | Provider-level + local |

---

## Hardware Lifecycle Management

### Replacement Schedule

| Component | Lifespan | Replacement Year | Cost (€) |
|-----------|----------|------------------|----------|
| **Servers** | 5 years | Year 5 | €66,400 |
| **GPUs** | 4 years | Year 4 | €100,600 |
| **Storage** | 4 years | Year 4 | €8,800 |
| **Network** | 7 years | Year 7 | €28,200 |
| **UPS/Battery** | 5 years | Year 5 | €18,000 |
| **Rack/Cooling** | 10 years | Year 10 | €14,300 |

### Maintenance Schedule

| Task | Frequency | Time Required |
|------|-----------|---------------|
| **Hardware Inspection** | Monthly | 2 hours |
| **Firmware Updates** | Quarterly | 4 hours |
| **Cable Audit** | Semi-annual | 4 hours |
| **Full Backup Test** | Quarterly | 8 hours |
| **DR Drill** | Annual | 16 hours |
| **Security Audit** | Annual | 40 hours |

---

## Disaster Recovery

### Replication Strategy

| Data Type | Replication | RPO | RTO |
|-----------|-------------|-----|-----|
| **Graph Database** | Synchronous (within DC) | 0 | <1 min |
| **Graph Database** | Asynchronous (cross-DC) | <5 min | <15 min |
| **Event Stream (Kafka)** | MirrorMaker 2 | <1 min | <5 min |
| **Object Storage (Ceph)** | Multi-site replication | <5 min | <15 min |
| **Backups (Tape)** | Daily to tape, offsite weekly | 24 hours | <4 hours |

### Failover Procedure

┌─────────────────────────────────────────────────────────────┐
│ FAILOVER PROCEDURE │
├─────────────────────────────────────────────────────────────┤
│ │
│ Step 1: Detection (Automated) │
│ ├── Health check failure │
│ ├── Alert to on-call │
│ └── Automatic ticket creation │
│ │
│ Step 2: Assessment (5-15 minutes) │
│ ├── Determine scope (single server vs. full DC) │
│ ├── Notify stakeholders │
│ └── Activate incident response │
│ │
│ Step 3: Failover (15-60 minutes) │
│ ├── DNS update (if full DC) │
│ ├── Database promotion (secondary → primary) │
│ ├── Traffic redirect to healthy DC │
│ └── Verify functionality │
│ │
│ Step 4: Recovery (1-24 hours) │
│ ├── Repair/replace failed hardware │
│ ├── Resync data │
│ ├── Failback (if appropriate) │
│ └── Post-incident review │
│ │
└─────────────────────────────────────────────────────────────┘


---

## Security Considerations

### Physical Security

| Control | Implementation |
|---------|----------------|
| **Access Control** | Biometric + badge + PIN |
| **Surveillance** | 24/7 CCTV, 90-day retention |
| **Guards** | 24/7 on-site security |
| **Visitor Policy** | Pre-approved, escorted |
| **Hardware Tampering** | Seals, inventory audits |

### Network Security

| Control | Implementation |
|---------|----------------|
| **Firewall** | pfSense/OPNsense, rule-based |
| **IDS/IPS** | Suricata, real-time monitoring |
| **DDoS Protection** | Provider-level + local |
| **Encryption** | TLS 1.3, IPsec for cross-DC |
| **Segmentation** | VLANs per service tier |

### Hardware Security

| Control | Implementation |
|---------|----------------|
| **Secure Boot** | Enabled on all servers |
| **TPM** | Hardware security modules |
| **Firmware Signing** | Verify before updates |
| **Decommissioning** | Secure erase, physical destruction |

---

## Environmental Considerations

### Power Efficiency

| Metric | Target | Measurement |
|--------|--------|-------------|
| **PUE (Power Usage Effectiveness)** | <1.5 | Total facility power / IT power |
| **Carbon Intensity** | <100g CO2/kWh | Provider renewable energy % |
| **Heat Reuse** | Explore partnerships | Datacenter heating nearby buildings |

### Hardware Disposal

| Component | Disposal Method | Certification |
|-----------|-----------------|---------------|
| **Servers** | Certified e-waste recycler | R2, e-Stewards |
| **Storage** | Physical destruction + certificate | NAID |
| **Batteries** | Certified battery recycler | Local regulations |
| **Cables/Metal** | Recycle | Standard recycling |

---

## Budget Summary

### Year 1 (Initial Deployment)

| Category | Amount (€) |
|----------|------------|
| Hardware (2 DCs) | €503,000 |
| Setup Costs | €65,000 |
| Colocation (Year 1) | €232,800 |
| Contingency (10%) | €80,080 |
| **TOTAL YEAR 1** | **€880,880** |

### Year 2-3 (Operational)

| Category | Annual (€) |
|----------|------------|
| Colocation | €232,800 |
| Maintenance | €20,000 |
| Insurance | €7,200 |
| Network | €24,000 |
| Power | €48,000 |
| **TOTAL ANNUAL OPEX** | **€332,000** |

### 5-Year Total Cost of Ownership

| Year | CapEx (€) | OpEx (€) | Total (€) |
|------|-----------|----------|-----------|
| Year 1 | €624,800 | €232,800 | €857,600 |
| Year 2 | €0 | €332,000 | €332,000 |
| Year 3 | €0 | €332,000 | €332,000 |
| Year 4 | €109,400 (GPU/Storage) | €332,000 | €441,400 |
| Year 5 | €84,400 (Servers/UPS) | €332,000 | €416,400 |
| **TOTAL** | **€818,600** | **€1,560,800** | **€2,379,400** |

---

## Procurement Timeline

| Month | Action | Owner |
|-------|--------|-------|
| Month 1 | RFP to colocation providers | Founder |
| Month 2 | Select providers, sign contracts | Founder + Legal |
| Month 3 | Order hardware (long lead items) | Founder |
| Month 4 | Hardware delivery, staging | DevOps |
| Month 5 | Rack & stack, network setup | DevOps |
| Month 6 | Testing, failover drills | DevOps + Security |
| Month 7 | Production deployment | All teams |

---

## 🔗 Related Documents

- [Technology Stack](specs/technology-stack.md)
- [Cost Breakdown](strategy/cost-breakdown.md)
- [Risk Mitigation](strategy/risk-mitigation.md)
- [Disaster Recovery Plan](runbooks/disaster-recovery.md)
