---
title: "AI Public Health Portal"
layout: default
permalink: /ai-public-health-portal/
nav_order: 5
has_children: true
description: Interactive AI-ready public health portal for collaboration scoping, evidence navigation, public health leadership, teaching, industry partnerships, and research translation.
---

# AI Public Health Portal

{: .lead }
An interactive entry point for public health leaders, faculty search committees, collaborators, industry partners, and students who want to understand where my experience can translate into practical work.

<div class="portal-hero">
  <div>
    <p class="profile-kicker">Study | Collaboration | Industry | Public health practice</p>
    <h2>Find the best pathway for a role, project, course, or partnership.</h2>
    <p>This portal uses structured logic and prompt-ready templates in the browser. It does not send data to a server, store responses, or request sensitive information. A secure backend can be added later for real AI model calls.</p>
  </div>
  <div class="portal-status" aria-label="Portal status">
    <span>Static-safe now</span>
    <span>Backend-ready later</span>
    <span>No PHI/PII collection</span>
  </div>
</div>

<div class="portal-alert">
  <strong>Use safely:</strong> Do not enter protected health information, identifiable patient details, unpublished confidential data, or private organizational material. Use de-identified summaries only.
</div>

<section class="portal-app" data-portal-app>
  <div class="portal-panel portal-builder">
    <div class="portal-panel-header">
      <p class="profile-kicker">Collaboration Navigator</p>
      <h2>Build a smart-fit brief</h2>
      <p>Select the context, and the portal will generate a practical pathway, evidence links, and an email-ready collaboration brief.</p>
    </div>

    <div class="portal-field">
      <label for="portal-role">Primary audience</label>
      <select id="portal-role" data-portal-role>
        <option value="public-health-leadership">Public health leadership</option>
        <option value="faculty-search">Faculty or academic search</option>
        <option value="research-collaboration">Research collaboration</option>
        <option value="industry-partnership">Industry or analytics partnership</option>
        <option value="student-learner">Student or learner</option>
      </select>
    </div>

    <div class="portal-field">
      <label for="portal-topic">Main topic</label>
      <select id="portal-topic" data-portal-topic>
        <option value="cancer-surveillance">Cancer surveillance and registry quality</option>
        <option value="epidemiology">Epidemiology and population health</option>
        <option value="bioinformatics">Bioinformatics and translational analytics</option>
        <option value="teaching">Teaching, curriculum, and workforce training</option>
        <option value="data-systems">Data systems, governance, and reporting</option>
      </select>
    </div>

    <fieldset class="portal-field">
      <legend>Capabilities needed</legend>
      <div class="portal-check-grid">
        <label><input type="checkbox" value="strategy" data-portal-capability checked> Strategy</label>
        <label><input type="checkbox" value="analysis" data-portal-capability checked> Analysis</label>
        <label><input type="checkbox" value="training" data-portal-capability> Training</label>
        <label><input type="checkbox" value="documentation" data-portal-capability> Documentation</label>
        <label><input type="checkbox" value="translation" data-portal-capability checked> Translation</label>
        <label><input type="checkbox" value="ai-readiness" data-portal-capability> AI readiness</label>
      </div>
    </fieldset>

    <div class="portal-field">
      <label for="portal-stage">Opportunity stage</label>
      <input id="portal-stage" type="range" min="1" max="4" value="2" data-portal-stage>
      <div class="portal-range-labels" aria-hidden="true">
        <span>Idea</span>
        <span>Scoping</span>
        <span>Active</span>
        <span>Scale</span>
      </div>
    </div>

    <div class="portal-field">
      <label for="portal-context">Optional context</label>
      <textarea id="portal-context" data-portal-context rows="5" placeholder="Example: We are exploring a faculty role, public health analytics collaboration, cancer surveillance training module, or data quality improvement project."></textarea>
    </div>

    <div class="portal-actions">
      <button class="button primary" type="button" data-portal-copy>Copy brief</button>
      <a class="button secondary" data-portal-email href="mailto:abrshah@unmc.edu">Email brief</a>
    </div>
  </div>

  <div class="portal-panel portal-output" aria-live="polite">
    <div class="portal-panel-header">
      <p class="profile-kicker">Recommended Pathway</p>
      <h2 data-portal-output-title>Public health leadership pathway</h2>
    </div>
    <div class="portal-score" data-portal-score>High strategic fit</div>
    <div class="portal-output-grid">
      <div>
        <h3>Best next steps</h3>
        <ol data-portal-steps></ol>
      </div>
      <div>
        <h3>Evidence to review</h3>
        <ul data-portal-links></ul>
      </div>
    </div>
    <div class="portal-brief">
      <h3>Generated brief</h3>
      <pre data-portal-brief></pre>
    </div>
  </div>
</section>

## Evidence Explorer

<p class="section-lede">Search across selected site evidence by role, practice area, and type of contribution. This gives visitors a faster path than browsing the whole site.</p>

<section class="portal-evidence" data-evidence-app>
  <div class="portal-search-row">
    <label class="sr-only" for="portal-evidence-search">Search evidence</label>
    <input id="portal-evidence-search" type="search" data-evidence-search placeholder="Search teaching, cancer surveillance, leadership, publications, data quality...">
    <div class="portal-filter-group" aria-label="Evidence filters">
      <button type="button" class="portal-filter is-active" data-evidence-filter="all">All</button>
      <button type="button" class="portal-filter" data-evidence-filter="leadership">Leadership</button>
      <button type="button" class="portal-filter" data-evidence-filter="teaching">Teaching</button>
      <button type="button" class="portal-filter" data-evidence-filter="research">Research</button>
      <button type="button" class="portal-filter" data-evidence-filter="practice">Practice</button>
    </div>
  </div>
  <div class="portal-evidence-grid" data-evidence-results></div>
</section>

## AI-Ready Workflows

<div class="workflow-grid">
  <div class="workflow-item">
    <h3>Public Health Briefing</h3>
    <p>Convert a role, project, or meeting need into a concise public health leadership brief.</p>
    <button class="portal-prompt" type="button" data-prompt="briefing">Copy prompt</button>
  </div>
  <div class="workflow-item">
    <h3>Course Design Studio</h3>
    <p>Turn a competency, audience, and public health topic into learning objectives and assessment ideas.</p>
    <button class="portal-prompt" type="button" data-prompt="course">Copy prompt</button>
  </div>
  <div class="workflow-item">
    <h3>Collaboration Triage</h3>
    <p>Translate a loose opportunity into scope, stakeholders, deliverables, risks, and first questions.</p>
    <button class="portal-prompt" type="button" data-prompt="triage">Copy prompt</button>
  </div>
</div>

## Build Roadmap

<div class="roadmap-grid">
  <div class="roadmap-item">
    <strong>Now</strong>
    <span>Static interactive portal, evidence explorer, collaboration brief builder, prompt-ready workflows.</span>
  </div>
  <div class="roadmap-item">
    <strong>Next</strong>
    <span>React island for richer state, analytics-free usage signals, downloadable collaboration packets, enhanced CV evidence cards.</span>
  </div>
  <div class="roadmap-item">
    <strong>Backend</strong>
    <span>Secure Python/FastAPI or serverless AI layer with API keys kept off the client, rate limits, logging, and safe-use guardrails.</span>
  </div>
</div>

<p><a class="button secondary" href="{{ '/ai-public-health-portal/secure-ai-architecture/' | relative_url }}">View Secure AI Architecture</a></p>

<script src="{{ '/assets/js/portal.js' | relative_url }}?v=20260510-1" defer></script>
