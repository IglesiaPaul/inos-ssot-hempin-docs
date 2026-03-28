# Blockchain Integration — NADA Ledger

> "Trust, but verify. Verify on-chain."

**Version:** 1.0  
**Last Updated:** 2026-01  
**Approach:** Hybrid (PostgreSQL Year 1-2 → Hyperledger Year 3+)

---

## Executive Summary

The NADA ledger serves as the immutable record of all value flows within the INOS/SSOT ecosystem. We use a hybrid approach:

| Phase | Technology | Why | Timeline |
|-------|------------|-----|----------|
| Year 1-2 | PostgreSQL Event-Sourced Ledger | Faster to implement, lower cost, sufficient for pilot | Months 1-24 |
| Year 3+ | Hyperledger Fabric | Multi-party consensus, enterprise features, token launch | Months 24+ |

This approach balances speed-to-market with long-term scalability and decentralization.

---

## Why Hybrid Approach?

### Full Blockchain from Day 1 (Rejected)

**Pros:** Maximum decentralization, Multi-party consensus from start, Token launch ready, Marketing appeal

**Cons:** 6-12 months additional development, €500K-1M additional cost, Complexity distracts from core value prop, Regulatory uncertainty (MiCA, etc.)

### PostgreSQL Only (Rejected)

**Pros:** Fast implementation, Low cost, Simple operations, Full control

**Cons:** Single point of control, Less trustless, Harder to tokenize later, Grant perception (less innovative)

### Hybrid Approach (Selected)

**Pros:** Fast MVP (PostgreSQL), Lower initial cost, Path to decentralization, Token-ready by Year 3, Grants can fund both phases

**Cons:** Migration complexity later, Two systems to maintain temporarily

---

## NADA Token Economics

### Token Overview

| Property | Value |
|----------|-------|
| Name | NADA (Network for Agricultural Data & Accountability) |
| Symbol | NADA |
| Type | Utility + Governance |
| Total Supply | 1,000,000,000 (1 billion) |
| Circulating at Launch | 200,000,000 (20%) |
| Blockchain | Hyperledger Fabric (Year 3+) |
| Initial Ledger | PostgreSQL (Year 1-2) |

### Token Distribution

| Allocation | Percentage | Tokens | Vesting |
|------------|------------|--------|---------|
| Ecosystem & Rewards | 40% | 400M | 10 years (emission) |
| Team & Founders | 20% | 200M | 4 years (1 year cliff) |
| Investors | 15% | 150M | 3-5 years |
| Regeneration Fund | 15% | 150M | Immediate (for deployment) |
| Advisors & Partners | 5% | 50M | 2-4 years |
| Treasury | 5% | 50M | Community governance |
| TOTAL | 100% | 1,000M | |

### Token Utility

| Use Case | Description | Token Flow |
|----------|-------------|------------|
| Transaction Fees | Paid in NADA on Hemp Swap | 70% burned, 30% to Regeneration Fund |
| Staking | Stake for verification tier, earn rewards | Rewards from emission pool |
| Governance | Vote on fund allocation, protocol changes | No token movement |
| Access | Premium features require NADA hold | No token movement |
| Payments | Pay for subscriptions, APIs | To treasury |

### Regeneration Fund Mechanics

**Funding Sources:**
- 30% of all transaction fees
- 10% of platform revenue
- 15% of total NADA supply (150M tokens)
- Grant co-funding (EU, UN, foundations)
- Corporate/individual donations

**Allocation (Governed by DAO + Foundation Board):**
- 30% — Environmental Cleanup
- 25% — R&D for Regenerative Technologies
- 20% — Community Grants (Global South)
- 15% — Infrastructure Deployment
- 10% — Operations & Governance

**Accountability:**
- Quarterly public reports
- Third-party impact audits
- On-chain tracking of all disbursements
- Community veto rights (>51% vote)

---

## Phase 1: PostgreSQL Event-Sourced Ledger (Year 1-2)

### Schema Design

**Accounts Table:**
- account_id: UUID PRIMARY KEY
- entity_id: UUID REFERENCES entities(id)
- address: VARCHAR(64) UNIQUE NOT NULL
- balance: DECIMAL(20, 8) DEFAULT 0
- staked: DECIMAL(20, 8) DEFAULT 0
- locked: DECIMAL(20, 8) DEFAULT 0
- verification_tier: INTEGER DEFAULT 1
- created_at: TIMESTAMPTZ DEFAULT NOW()
- updated_at: TIMESTAMPTZ DEFAULT NOW()

**Transactions Table (Append-Only):**
- tx_id: UUID PRIMARY KEY
- tx_hash: BYTEA UNIQUE NOT NULL
- from_account: UUID REFERENCES nada_accounts(account_id)
- to_account: UUID REFERENCES nada_accounts(account_id)
- amount: DECIMAL(20, 8) NOT NULL
- tx_type: VARCHAR(50) NOT NULL (transfer, stake, unstake, fee, reward, mint, burn, regeneration)
- metadata: JSONB
- signature: BYTEA NOT NULL
- block_height: BIGINT
- block_hash: BYTEA
- created_at: TIMESTAMPTZ DEFAULT NOW()

**Stakes Table:**
- stake_id: UUID PRIMARY KEY
- account_id: UUID REFERENCES nada_accounts(account_id)
- amount: DECIMAL(20, 8) NOT NULL
- lock_until: TIMESTAMPTZ
- reward_rate: DECIMAL(5, 4) DEFAULT 0.05
- status: VARCHAR(20) DEFAULT active (active, unlocking, claimed, slashed)
- created_at: TIMESTAMPTZ DEFAULT NOW()

**Blocks Table (Merkle Tree):**
- block_height: BIGINT PRIMARY KEY
- block_hash: BYTEA NOT NULL
- previous_hash: BYTEA
- merkle_root: BYTEA NOT NULL
- timestamp: TIMESTAMPTZ DEFAULT NOW()
- validator_signature: BYTEA
- transaction_count: INTEGER

**Regeneration Fund Table:**
- fund_id: UUID PRIMARY KEY
- source_tx_id: UUID REFERENCES nada_transactions(tx_id)
- amount: DECIMAL(20, 8) NOT NULL
- category: VARCHAR(50) NOT NULL
- recipient: VARCHAR(255)
- status: VARCHAR(20) DEFAULT pending
- approved_by: UUID
- created_at: TIMESTAMPTZ DEFAULT NOW()

**Append-Only Enforcement:**
- Trigger prevents UPDATE or DELETE on nada_transactions table
- All transactions are immutable once created

**Indexes for Performance:**
- idx_accounts_entity ON nada_accounts(entity_id)
- idx_transactions_from ON nada_transactions(from_account)
- idx_transactions_to ON nada_transactions(to_account)
- idx_transactions_type ON nada_transactions(tx_type)
- idx_stakes_account ON nada_stakes(account_id)

### Cryptographic Signatures

| Component | Technology | Origin |
|-----------|------------|--------|
| Signature Algorithm | Ed25519 | Community |
| Hash Function | SHA-256 | Community |
| Library | libsodium | Community |
| Key Storage | HashiCorp Vault | Community (self-hosted) |

### API Endpoints (PostgreSQL Phase)

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/v1/nada/accounts | GET | List all accounts |
| /api/v1/nada/accounts/:id | GET | Get account details |
| /api/v1/nada/accounts/:id/balance | GET | Get account balance |
| /api/v1/nada/transactions | GET | List transactions |
| /api/v1/nada/transactions/:id | GET | Get transaction details |
| /api/v1/nada/transactions | POST | Create transaction (signed) |
| /api/v1/nada/stakes | POST | Create stake |
| /api/v1/nada/stakes/:id/unstake | POST | Unstake tokens |
| /api/v1/nada/blocks/:height | GET | Get block details |
| /api/v1/nada/verify/:tx_id | GET | Verify transaction proof |

---

## Phase 2: Hyperledger Fabric (Year 3+)

### Network Architecture

**Orderer Nodes (3):**
- Orderer Node 1 (France)
- Orderer Node 2 (Germany)
- Orderer Node 3 (Netherlands)

**Channel:** NADA (single channel for all transactions)

**Peer Nodes:**
- Peer Node (INOS) - Org 1
- Peer Node (Association) - Org 2
- Peer Node (Auditor) - Org 3

**Smart Contracts (Chaincode):**
- nada_transfer.go
- nada_stake.go
- nada_governance.go
- nada_compliance.go

### Organization Structure

| Organization | Role | Nodes | Jurisdiction |
|--------------|------|-------|--------------|
| INOS Foundation | Network founder, primary validator | 2 Peer, 1 Orderer | Switzerland |
| Hemp Association #1 | Validator, industry representative | 1 Peer | Thailand |
| Hemp Association #2 | Validator, industry representative | 1 Peer | Germany |
| Independent Auditor | Compliance verification | 1 Peer | Netherlands |
| Regeneration Fund DAO | Fund governance | 1 Peer | Decentralized |

### Chaincode Functions

**Init:** Initialize total supply (1 billion tokens), circulating supply (200M), regeneration fund (150M)

**Invoke Functions:**
- transfer(from, to, amount) - Transfer tokens between accounts
- stake(amount, lock_until) - Stake tokens for rewards
- unstake(stake_id) - Unstake tokens
- getBalance(address) - Query account balance
- getRegenerationFund() - Query fund balance

**Transaction Structure:**
- txID: string
- from: string
- to: string
- amount: uint64
- txType: string
- timestamp: int64

### Migration Plan (PostgreSQL → Hyperledger)

| Phase | Timeline | Actions |
|-------|----------|---------|
| Preparation | Month 18-21 | Design Fabric network, select partners, legal review |
| Development | Month 21-24 | Write chaincode, set up test network, audit |
| Testing | Month 24-27 | Testnet launch, security audit, partner onboarding |
| Migration | Month 27-30 | Snapshot PostgreSQL state, migrate to Fabric, verify |
| Cutover | Month 30 | Switch production to Fabric, PostgreSQL read-only |
| Decommission | Month 33 | Archive PostgreSQL, full Fabric operation |

### Migration Data Mapping

| PostgreSQL Table | Hyperledger Equivalent |
|------------------|----------------------|
| nada_accounts | Chaincode state (account_* keys) |
| nada_transactions | Chaincode state (tx_* keys) + Fabric blocks |
| nada_stakes | Chaincode state (stake_* keys) |
| nada_blocks | Fabric blocks (native) |
| regeneration_fund | Chaincode state (fund_* keys) |

---

## Security Considerations

### Key Management

| Component | Storage | Backup |
|-----------|---------|--------|
| User Keys | Client-side (wallet) | User responsibility |
| Hot Wallet | HashiCorp Vault | Multi-sig, geo-distributed |
| Cold Storage | Hardware Security Module | Offline, multi-sig |
| Recovery | Shamir's Secret Sharing | 3-of-5 threshold |

### Smart Contract Security

| Control | Implementation |
|---------|----------------|
| Code Audit | Third-party audit before deployment |
| Formal Verification | Mathematical proof of correctness |
| Bug Bounty | €50K-500K for critical vulnerabilities |
| Upgrade Mechanism | Multi-sig governance for upgrades |
| Circuit Breaker | Emergency pause function |

### Regulatory Compliance

| Regulation | Compliance Approach |
|------------|---------------------|
| MiCA (EU) | Utility token classification, no security features |
| AML/KYC | Verification tier linked to account limits |
| GDPR | No PII on-chain, off-chain identity linkage |
| Tax Reporting | Transaction export for tax authorities |

---

## Integration with SSOT Graph

### Data Flow

**SSOT Graph (Memgraph) ↔ NADA Ledger:**

- Entity Node (verification) ↔ Account (balance) - Sync
- Trade Edge (value, terms) ↔ Transaction (settlement) - Trigger
- Trust Score (graph metric) ↔ Stake/Rewards (incentives) - Updates

**Sync Mechanism:** Event-driven (Kafka)
**Consistency:** Eventual (seconds)

### Event Triggers

| Graph Event | Ledger Action |
|-------------|---------------|
| Entity verified | Create account, airdrop verification bonus |
| Trade completed | Execute settlement transaction |
| Verification tier increased | Unlock staking rewards |
| Compliance violation | Slash stake, reduce balance |
| Regeneration project approved | Disburse fund tokens |

---

## Governance

### Decision-Making Structure

| Decision Type | Authority | Threshold |
|---------------|-----------|-----------|
| Protocol Upgrades | DAO + Foundation Board | 67% DAO + Board approval |
| Fund Allocation | Regeneration Fund DAO | 51% token holder vote |
| Emergency Actions | Foundation Board | 3-of-5 multi-sig |
| Parameter Changes | DAO | 51% token holder vote |
| Partner Onboarding | Foundation Board | Simple majority |

### DAO Structure

| Component | Description |
|-----------|-------------|
| Token | 1 NADA = 1 vote |
| Quorum | 10% of circulating supply |
| Voting Period | 7 days |
| Execution Delay | 2 days (security) |
| Delegation | Allowed |

---

## Budget Summary

### Phase 1: PostgreSQL (Year 1-2)

| Category | Amount (€) |
|----------|------------|
| Development | €150,000 |
| Security Audit | €50,000 |
| Infrastructure | €20,000 |
| Legal/Compliance | €80,000 |
| **TOTAL** | **€300,000** |

### Phase 2: Hyperledger (Year 3+)

| Category | Amount (€) |
|----------|------------|
| Network Setup | €200,000 |
| Chaincode Development | €300,000 |
| Security Audit | €150,000 |
| Partner Onboarding | €100,000 |
| Migration | €150,000 |
| Legal/Compliance (MiCA) | €200,000 |
| **TOTAL** | **€1,100,000** |

### 5-Year Total

| Phase | Amount (€) |
|-------|------------|
| Phase 1 (PostgreSQL) | €300,000 |
| Phase 2 (Hyperledger) | €1,100,000 |
| Operations (5 years) | €500,000 |
| **TOTAL** | **€1,900,000** |

---

## Related Documents

- Technology Stack (specs/technology-stack.md)
- Own Hardware Specs (specs/own-hardware-specs.md)
- Funding Strategy (strategy/funding-strategy.md)
- Regeneration Fund Charter (specs/regeneration-fund-charter.md)
