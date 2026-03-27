#!/usr/bin/env python3
"""INOS/SSOT Setup - Part 1: Create Folders"""

import os
from pathlib import Path

ROOT = Path(".")

FOLDERS = [
    "architecture",
    "specs",
    "specs/api-specs",
    "specs/compliance-rules",
    "runbooks",
    "runbooks/deployment",
    "runbooks/onboarding",
    "runbooks/incident-response",
    "decisions",
    "feedback",
    "feedback/team-notes",
    "diagrams",
    "templates",
    "conversation-logs",
    ".github",
    ".github/workflows",
]

print("📁 Creating folders...")
for folder in FOLDERS:
    path = ROOT / folder
    path.mkdir(parents=True, exist_ok=True)
    print(f"  ✓ {folder}/")

print("\n✅ Part 1 Complete! Run setup-core-files.py next.")