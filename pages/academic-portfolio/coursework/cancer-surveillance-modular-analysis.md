---
layout: default
title: Modular Topic/Instructional Analysis — Cancer Surveillance
parent: Coursework
grand_parent: Academic Portfolio
nav_order: 2
permalink: /academic-portfolio/coursework/cancer-surveillance-modular-analysis/
author: Rauf Shah
---

# Modular Topic/Instructional Analysis — Cancer Surveillance
_Author: Rauf Shah_

> A structured, “Excel-ready” breakdown for teaching/learning core cancer surveillance concepts and practice.

---

## Modules 1-2 - Definition & Purpose
One-liner aims + why it matters; anchors content.

**Excel-ready (CSV):**
```csv
Topic,Original Detail,Enriched Instructional Detail
1. Definition,"Systematic cancer data tracking. Population-based registries; standard codes. Outputs: burden, stage, survival, and trends.","Emphasize completeness and timeliness. Train on ICD-O-3 (site, morphology) and AJCC (TNM→stage group)."
2. Purpose,"Define burden & distribution. Track trends & disparities. Support programs, policy, research.","Use concrete disparity examples (late-stage share by race/rurality). Link to policy (targeted screening/navigation)."

---

## Module 3 - Types of Surveillance
Menu of approaches; when/why to use each.

**Excel-ready (CSV):**
```csv
Type,Original Detail (Pros/Cons),Enriched Instructional Detail (Practicalities)
a. Passive,"Facilities/providers submit reportable cancers to the registry.","Challenge: variable staff priorities/training. Mitigation: standardized forms + ongoing training."
b. Active,"Registry staff proactively identify/verify cases (visits, queries).","Action: on-site abstractors; deep EHR queries to complete fields and verify codes."
c. Sentinel,"Selected sites provide high-quality, timely data.","Use case: rare cancers or exposure-linked patterns where speed/depth matter most."
d. Syndromic,"Early signals from ED, labs, pharmacy, EHR.","Signals: chemo dispensing volume; lab markers (e.g., neutropenia) for early toxicity/patterns."
e. Rapid Case Ascertainment (RCA),"Pathology-driven rapid reporting.","Workflow: e-path feeds + NLP filters to flag reportable cases within days."

---

## Module 4 - Case Definitions & Classification
What’s reportable, how to date, stage, and handle primaries.

**Excel-ready (CSV):**
```csv
Classification Element,Original Detail,Enriched Instructional Detail (Coding/Application)
a. Reportable Cancers,"Site (Topography); Morphology (Histology).","Use ICD-O-3: Topography (e.g., C50.9) and Morphology (e.g., 8000/3). Practice code look-ups."
b. Status,"Suspected; Probable; Confirmed.","Confirmed usually requires histology; Probable may rely on imaging/clinical data in research."
c. Primary vs recurrent,"—","Multiple primaries rules (new site/histology or temporally distinct). Critical for incidence accuracy."
d. Diagnosis date rules,"—","Use first definitive diagnosis (often pathology date) as anchor for incidence/survival."
e. Stage,"AJCC TNM; SEER Summary Stage.","TNM needs tumor size, nodes, mets; follow algorithm. SEER Summary Stage aggregates for population analysis."
f. Key biomarkers,"Molecular; Genetic.","Examples: ER/PR/HER2 (breast); KRAS/NRAS/BRAF (CRC). Abstract from molecular reports."

---

## Modules 6-7 - Core Parameters & Evaluation Indicators
What you measure (burden) vs how good your data are (quality).

**Excel-ready (CSV):**
```csv
Metric Type,Original Detail,Enriched Instructional Detail (Interpretation & Calculation)
6.a. Incidence Rate,"(per 100,000, age-adjusted).","Use 2000 U.S. Standard Population; allows fair comparisons."
6.b. Mortality Rate,"—","Cancer deaths ÷ population (per 100,000)."
6.c. Stage at Diagnosis,"—","Earlier (localized) stage share indicates screening impact."
6.d. Survival Metrics,"Overall; Relative Survival.","Relative survival = observed ÷ expected survival (matched general population)."
6.e. Reporting Lag,"—","Diagnosis → case closure time; core timeliness measure."
6.f. Case Capture %,"—","Target >95% in high-quality registries; validates completeness."
6.g. Missingness,"—","Track missing stage/race-ethnicity; mitigates bias in disparity work."
6.h. Coding Accuracy,"—","Re-abstraction agreement vs gold standard; aim ≥98% for core fields."
6.i. Deduplication Rate,"—","High rates imply matching/casefinding inefficiency."
7.a. Timeliness,"—","Measured via Reporting Lag."
7.b. Completeness,"—","Measured via Case Capture % (validate with external sources)."
7.c. Consistency/Validity,"Edit Checks.","NAACCR Edits enforce site-morph/date/value logic."
7.d. Equity Metrics,"Race/Ethnicity completeness; Geographic variation.","Address unknown race/ethnicity via linkage or careful imputation."

---

## Module 8 - Workflow
End-to-end steps; where QC and consent fit.

**Excel-ready (CSV):**
Workflow Step,Original Detail,Enriched Instructional Detail (Tool/Technique)
a. Case Finding,"Identify; match/dedup.","Deterministic keys (MRN, SSN) + probabilistic matching (name, DOB)."
b. Eligibility Screening,"Residency; date range; reportable site/morph.","Apply jurisdiction rules; ensure in-scope period and reportable histologies."
c. Approach & Consent,"Permissions; refusals.","For research linkage; IRB-approved process; track opt-outs."
d. Abstraction & Coding,"ICD-O-3; behavior; grade; stage; first-course treatment.","First-course treatment = initial therapy window (e.g., ≤4 months) or until progression."
e. Quality Checks,"Automated edits; re-abstraction audits.","Target complex sites or lower-accuracy abstractors; route findings to training/system fixes."
f. Publish & Visualize,"Indicators; dashboards.","Tools: Tableau, R Shiny, or registry platform read-only dashboards."
g. Monitor & Improve,"Feedback; periodic reviews.","Regular data quality reports to facilities; track corrective actions."

---

## Module 9 - Data Quality Framework
Dimensions, checks, and audits to build trust.

**Excel-ready (CSV):**
Topic,Original Detail,Enriched Instructional Detail (Context & Importance)
Goal,"—","Fitness-for-use (incidence, policy); builds trust."
Dimensions,"Completeness; Accuracy; Timeliness; Consistency; Uniqueness.","Consistency example: treatment date cannot precede diagnosis date."
Checks,"Not-null; Controlled vocabularies; Code edits; Cross-record concordance.","Use SNOMED CT/LOINC to harmonize across systems where applicable."
Audits,"Re-abstraction; Discrepancy review; Corrective action.","Implement targeted training or system fixes from root-cause analysis."

---

## Modules 10-12 - Security, Policy & Public Reporting
Privacy, legal authority, and safe public outputs.

**Excel-ready (CSV):**
Topic,Original Detail,Enriched Instructional Detail (Context & Application)
10. Security,"Minimum necessary; RBAC; audit logs; secure transport/storage.","Use encrypted channels (VPN, SFTP) for identified data transfers."
11. Policy & Compliance,"HIPAA; State laws; DUAs; IRB; De-identification.","Cancer is mandatorily reportable; state public-health authority enables reporting despite some HIPAA limits."
11.a. DUAs,"—","Legally binding terms for use/protection/destruction of non-public data."
12. Public Reporting,"Aggregates; small-cell suppression.","Suppress subgroup cells below thresholds (e.g., <5 or <10) to prevent re-identification."

---

## Module 13 - Tools & Standards
Coding specs, interoperability, and core analytic methods.

**Excel-ready (CSV):**
Standard/Tool,Original Detail,Enriched Instructional Detail (Use Case)
a. Coding & Data Structure,"ICD-O-3; AJCC; NAACCR; SEER Edits.","NAACCR Volume II = definitive data dictionary/spec for submissions—teach where/how to look up a field."
b. Systems & Interoperability,"Registry platforms (SEER*DMS); EHR; HL7/FHIR.","FHIR supports granular, secure exchange of Condition/Observation elements."
c. Analytics & Methods,"Age-standardization; Joinpoint; Survival (KM, Relative).","Joinpoint identifies significant trend changes (inflection points) in rates."

---

## Module 14 - Deliverables & Micro-Checks
What learners submit; quick ways to verify understanding.

**Excel-ready (CSV):**
Deliverable,Format,Linked Micro-Check
Objective,"1 sentence (population/time).","MCQ: choose correct outcome/measure for a prompt."
Workflow,"6–8 nodes + QC touchpoint.","Mark where QC/edit checks occur."
Mini-table,"Source → Field → QC → Safeguard (≥3 rows).","Pick best source for field X."
Privacy list,"≥2 safeguards.","Identify fields to remove for de-ID in a scenario."
