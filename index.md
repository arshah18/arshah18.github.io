---
layout: default
title: Home
nav_order: 1
permalink: /
---

<div class="hero-minimal">
  <div class="profile-hero">
    <img src="{{ site.baseurl }}/assets/portrait.jpg" 
         alt="Rauf Shah" 
         class="profile-avatar"
         onerror="this.onerror=null;this.src='{{ site.baseurl }}/assets/headshot.jpg';">
    <div class="hero-content">
      <h1>Rauf Shah, PhD</h1>
      <p class="expertise-tag">Health Data Scientist • Public Health Informatics</p>
      <p class="hero-mission">Translating complex clinical-genomic data into actionable public health insights through scalable informatics pipelines.</p>
    </div>
  </div>
</div>

## Core Expertise
{: .no_toc }

<div class="expertise-grid">
  <div class="expertise-card">
    <div class="expertise-icon">🧬</div>
    <h3>Clinical Genomics</h3>
    <p>FHIR/HAPI pipelines integrating EHR, pathology, and genomic data</p>
  </div>
  <div class="expertise-card">
    <div class="expertise-icon">📊</div>
    <h3>Cancer Surveillance</h3>
    <p>Population-level lymphoma dashboards and equity monitoring</p>
  </div>
  <div class="expertise-card">
    <div class="expertise-icon">⚡</div>
    <h3>Health Informatics</h3>
    <p>Reproducible data flows with role-based governance (Keycloak)</p>
  </div>
</div>

## Quick Access
{: .no_toc }

<div class="nav-cards">
  <a href="{{ site.baseurl }}/pages/about/" class="nav-card">
    <span class="nav-icon">👤</span>
    <strong>Background</strong>
    <span>Education & experience</span>
  </a>
  <a href="{{ site.baseurl }}/pages/academic-portfolio/" class="nav-card">
    <span class="nav-icon">📚</span>
    <strong>Research</strong>
    <span>Publications & projects</span>
  </a>
  <a href="{{ site.baseurl }}/pages/public-health-focus/" class="nav-card">
    <span class="nav-icon">🏥</span>
    <strong>Health Focus</strong>
    <span>Cancer & epidemiology</span>
  </a>
  <a href="{{ site.baseurl }}/assets/rauf-shah-cv.pdf" class="nav-card">
    <span class="nav-icon">📄</span>
    <strong>Curriculum Vitae</strong>
    <span>Download PDF</span>
  </a>
</div>

## AI Research Assistant Preview
{: .no_toc }

<div class="ai-teaser">
  <div class="ai-header">
    <span class="ai-badge">COMING SOON</span>
    <h3>Interactive Research Explorer</h3>
  </div>
  <p>Ask questions about my work in natural language and get intelligent responses about publications, methodologies, and findings.</p>
  <div class="ai-features">
    <span>🔍 Semantic search</span>
    <span>📈 Data visualization</span>
    <span>🤖 AI-powered Q&A</span>
  </div>
</div>

<style>
.hero-minimal {
  margin: 1rem 0 2rem 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eaeaea;
}

.profile-hero {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #2c5aa0;
}

.hero-content h1 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.8rem;
}

.expertise-tag {
  color: #2c5aa0;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.hero-mission {
  color: #555;
  line-height: 1.5;
  margin: 0;
  max-width: 600px;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.expertise-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.expertise-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.expertise-card h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #2c3e50;
}

.expertise-card p {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
  margin: 0;
}

.nav-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.nav-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  text-align: center;
}

.nav-card:hover {
  border-color: #2c5aa0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-decoration: none;
}

.nav-icon {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

.nav-card strong {
  display: block;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.nav-card span {
  font-size: 0.8rem;
  color: #666;
}

.ai-teaser {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.ai-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.ai-badge {
  background: rgba(255,255,255,0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.ai-teaser h3 {
  margin: 0;
  color: white;
}

.ai-teaser p {
  margin: 0 0 1rem 0;
  opacity: 0.9;
}

.ai-features {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.ai-features span {
  background: rgba(255,255,255,0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

/* Tighter sidebar adjustments */
@media (min-width: 768px) {
  .side-bar {
    width: 240px !important;
  }
  .main {
    margin-left: 240px !important;
  }
}

@media (max-width: 768px) {
  .profile-hero {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .expertise-grid,
  .nav-cards {
    grid-template-columns: 1fr;
  }
  
  .ai-features {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>