---
layout: default
title: RCA NLP Notes (hidden)
parent: CPH 705
grand_parent: Academic Portfolio
nav_exclude: true
sitemap: false
permalink: /academic-portfolio/coursework/cph-705/hidden/rca-nlp-notes/
---

# Rapid Case Ascertainment (RCA) — NLP Prototype Notes

_These are working notes for a lightweight RCA pipeline that flags probable reportable cancers from pathology text. The page is hidden from the sidebar and sitemap but can be linked from coursework pages._

---

## 1) Problem & Objective

**Goal:** reduce reporting lag by surfacing _likely_ reportable cases within days of pathology sign-out.  
**Scope:** pathology synoptic/diagnostic text → rules/NLP flags → reviewer queue.

**Not a replacement** for full abstraction—this is triage to accelerate case finding.

---

## 2) Minimal Signal Set (first pass)

- **Topography/Morphology cues:** site (breast, colon, lung), histology terms (adenocarcinoma, lymphoma, SCC).
- **Behavior:** malignant/primary vs in-situ vs benign indicators.
- **Staging fragments:** “pT”, “pN”, “pM”, “Stage I–IV”, “AJCC”.
- **Specimen context:** biopsy vs resection; **exclude** consults when no new diagnosis.

> Start with a curated lexicon from ICD-O-3 site/histology names (non-copyright summaries) and a small hand-built synonym list.

---

## 3) Rule Sketch (deterministic baseline)

- **Positive rule (P1):** `malignan*|carcinoma|lymphoma|sarcoma` AND a **site cue** (e.g., breast|colon|lung|prostate)  
- **Primary hint (P2):** presence of “primary” OR absence of “metastatic from …”  
- **Exclusions (E):** “negative for malignancy”, “benign”, “no evidence of”, “metastatic from [other site]” w/o primary context

**Flag case if:** `(P1 AND P2) AND NOT E`

> Keep rules transparent so registrars can tune them.

---

## 4) NLP Enhancements (incremental)

- **Sectioning:** split Synoptic vs Narrative; prioritize Synoptic blocks.
- **Negation/uncertainty:** simple patterns (`no evidence of`, `cannot rule out`) to drop false positives.
- **Terminology mapping:** light mapping of histology variants → canonical tokens (e.g., “adeno ca” → adenocarcinoma).
- **De-duplication:** key on MRN + specimen date + site; collapse repeat hits.

---

## 5) Reviewer Queue (human-in-the-loop)

Columns:
- MRN (hashed if needed), specimen date, facility
- Site cue, histology cue, confidence (rule count), text snippet (first 200–300 chars)
- Buttons: **Confirm**, **Dismiss**, **Route to Abstractor**

> Capture reviewer actions to refine rules.

---

## 6) Micro-quality checks

- **Precision sample:** 50 flagged reports → % truly reportable  
- **Recall proxy:** compare to cases captured later in registry for overlapping period  
- **Lag metric:** median days from report sign-out → reviewer confirmation

Targets for pilot:
- Precision ≥ 0.85, Recall proxy ≥ 0.75, Median lag ≤ 5 days

---

## 7) Privacy & Governance (pilot)

- Process **on secured host**; log access; retain **minimum necessary** text.
- If exporting examples, **remove identifiers** and mask rare descriptors.
- DUA/IRB as appropriate; document data flow.

---

## 8) Tiny roadmap

1. **Week 1–2:** rule baseline + reviewer queue mock  
2. **Week 3–4:** negation + de-dup + metrics dashboard  
3. **Week 5–6:** precision/recall read-out → rule tuning → go/no-go

---

## 9) Links & Anchors

- ICD-O-3 (site/histology) **look-up habit** for rule vocabulary
- NAACCR edits (for downstream consistency)
- SEER Summary Stage vs AJCC notes (context for staging cues)

---

## Footnote

This page is intentionally hidden (`nav_exclude: true`, `sitemap: false`).  
Link to it from the CPH 705 parent page or from the **Modular Analysis** page when needed.
