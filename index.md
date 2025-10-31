---
layout: home
title: Home
nav_order: 1
permalink: /
---

<div class="home-hero">
  <div class="profile-container">
    <img src="{{ site.baseurl }}/assets/portrait.jpg" 
         alt="Rauf Shah" 
         class="profile-image"
         onerror="this.onerror=null;this.src='{{ site.baseurl }}/assets/headshot.jpg';">
    <div class="profile-content">
      <h1 class="home-title">Rauf Shah</h1>
      <p class="home-subtitle">Health Data Scientist • Public Health Researcher</p>
      <p class="home-description">I build data systems that connect clinical care with public health to improve cancer outcomes.</p>
    </div>
  </div>
</div>

## Quick Links

<div class="home-links">
  <a href="{{ site.baseurl }}/pages/about/" class="home-link-card">
    <strong>👋 About Me</strong>
    <span>My background & journey</span>
  </a>
  
  <a href="{{ site.baseurl }}/pages/academic-portfolio/" class="home-link-card">
    <strong>🎓 Research</strong>
    <span>Projects & publications</span>
  </a>
  
  <a href="{{ site.baseurl }}/pages/public-health-focus/" class="home-link-card">
    <strong>🏥 Health Focus</strong>
    <span>Cancer & epidemiology work</span>
  </a>
  
  <a href="{{ site.baseurl }}/assets/rauf-shah-cv.pdf" class="home-link-card">
    <strong>📄 CV</strong>
    <span>Download my resume</span>
  </a>
</div>

## What I Work On

<div class="work-grid">
  <div class="work-item">
    <h3>🔬 Cancer Data</h3>
    <p>Building dashboards that track lymphoma and other cancers across populations</p>
  </div>
  <div class="work-item">
    <h3>💻 Data Systems</h3>
    <p>Creating pipelines that connect hospital records with public health data</p>
  </div>
  <div class="work-item">
    <h3>🏛️ Health Policy</h3>
    <p>Translating data into insights for healthcare decisions</p>
  </div>
</div>

<div class="ai-notice">
  <h3>Ask About My Research 🤖</h3>
  <p>Soon: Chat with an AI assistant to learn about my work in public health informatics</p>
  <small>Coming feature - Interactive research explorer</small>
</div>

<style>
.home-hero {
  margin: 2rem 0;
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--sidebar-bg);
}

.home-title {
  margin: 0;
  color: var(--body-text);
}

.home-subtitle {
  font-size: 1.1rem;
  color: var(--body-text);
  margin: 0.5rem 0;
  font-weight: 500;
}

.home-description {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  color: var(--body-text);
}

.home-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.home-link-card {
  background: var(--sidebar-bg);
  padding: 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--border);
  transition: all 0.2s ease;
  display: block;
}

.home-link-card:hover {
  background: var(--hover-bg);
  border-color: var(--link-color);
  text-decoration: none;
}

.home-link-card strong {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--link-color);
}

.home-link-card span {
  font-size: 0.9rem;
  color: var(--body-text);
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.work-item {
  background: var(--code-bg);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--link-color);
}

.work-item h3 {
  margin: 0 0 0.5rem 0;
  color: var(--body-text);
}

.work-item p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.ai-notice {
  background: linear-gradient(135deg, var(--link-color) 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  text-align: center;
}

.ai-notice h3 {
  margin: 0 0 0.5rem 0;
  color: white;
}

.ai-notice p {
  margin: 0 0 0.5rem 0;
  opacity: 0.9;
}

.ai-notice small {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .home-links {
    grid-template-columns: 1fr;
  }
  
  .work-grid {
    grid-template-columns: 1fr;
  }
}
</style>