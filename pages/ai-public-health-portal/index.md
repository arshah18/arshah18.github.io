---
title: "Public Health Impact Hub"
layout: default
permalink: /ai-public-health-portal/
nav_order: 6
has_children: true
description: Public health impact hub for collaboration scoping, evidence navigation, leadership, teaching, partnerships, grants, and research translation.
---

# Public Health Impact Hub

{: .lead }
A practical workspace for shaping a role, project, course, grant idea, or partnership into a clear first conversation.

<div class="portal-hero">
  <div>
    <p class="profile-kicker">Study | Collaboration | Grants | Public health practice</p>
    <h2>Turn an idea into a focused public health pathway.</h2>
    <p>The hub helps visitors organize an opportunity, find relevant evidence, and prepare a clear first message. It supports the broader Public Health Impact Collaborative initiative.</p>
  </div>
  <div class="portal-status" aria-label="Portal status">
    <span>Project scoping</span>
    <span>Human follow-up</span>
    <span>No private data</span>
  </div>
</div>

<div class="portal-alert">
  <strong>Use safely:</strong> Do not enter protected health information, identifiable patient details, unpublished confidential data, or private organizational material. Use de-identified summaries only.
</div>

<section class="portal-app" data-portal-app>
  <div class="portal-panel portal-builder">
    <div class="portal-panel-header">
      <p class="profile-kicker">Collaboration Navigator</p>
      <h2>Build a collaboration brief</h2>
      <p>Select the context, and the hub will prepare a practical pathway, evidence links, and an email-ready first message.</p>
    </div>

    <div class="portal-field">
      <label for="portal-role">Primary audience</label>
      <select id="portal-role" data-portal-role>
        <option value="public-health-leadership">Public health leadership</option>
        <option value="faculty-search">Faculty or academic search</option>
        <option value="research-collaboration">Research collaboration</option>
        <option value="industry-partnership">Organization, company, or analytics partnership</option>
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
        <option value="grants-projects">Grant and project development</option>
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
        <label><input type="checkbox" value="innovation-planning" data-portal-capability> Innovation planning</label>
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
      <a class="button secondary" data-portal-email href="mailto:abraufshah@gmail.com">Email brief</a>
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
      <h3>Draft message</h3>
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

## Guided Workflows

<div class="workflow-grid">
  <div class="workflow-item">
    <h3>Public Health Briefing</h3>
    <p>Convert a role, project, or meeting need into a concise public health leadership brief.</p>
    <button class="portal-prompt" type="button" data-prompt="briefing">Copy starter text</button>
  </div>
  <div class="workflow-item">
    <h3>Course Design Studio</h3>
    <p>Turn a competency, audience, and public health topic into learning objectives and assessment ideas.</p>
    <button class="portal-prompt" type="button" data-prompt="course">Copy starter text</button>
  </div>
  <div class="workflow-item">
    <h3>Collaboration Triage</h3>
    <p>Translate a loose opportunity into scope, stakeholders, deliverables, risks, and first questions.</p>
    <button class="portal-prompt" type="button" data-prompt="triage">Copy starter text</button>
  </div>
</div>

## Future Direction

<div class="roadmap-grid">
  <div class="roadmap-item">
    <strong>Founding Phase</strong>
    <span>A focused hub for collaboration ideas, public health project scoping, teaching support, and first conversations.</span>
  </div>
  <div class="roadmap-item">
    <strong>Partnership Phase</strong>
    <span>Clearer partner pathways, project concept notes, grant planning materials, and downloadable collaboration packets.</span>
  </div>
  <div class="roadmap-item">
    <strong>Growth Phase</strong>
    <span>A more complete public health organization platform with secure private follow-up, partner resources, and issue briefs.</span>
  </div>
</div>

<p><a class="button secondary" href="{{ '/ai-public-health-portal/responsible-ai-use/' | relative_url }}">Responsible Use</a></p>

<script src="{{ '/assets/js/portal.js' | relative_url }}?v=20260510-2" defer></script>
