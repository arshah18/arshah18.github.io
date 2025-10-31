---
layout: default
title: Home
nav_order: 1
permalink: /
---

# Rauf Shah
{: .no_toc }

<hr>

<div class="profile-header">
  <img src="{{ site.baseurl }}/assets/portrait.jpg" 
       alt="Rauf Shah" 
       class="profile-image"
       onerror="this.onerror=null;this.src='{{ site.baseurl }}/assets/headshot.jpg';">
  <div class="profile-info">
    <p class="lead"><strong>Health Data Scientist • Public Health Researcher</strong></p>
    <p>I build data systems that connect clinical care with public health to improve cancer outcomes.</p>
  </div>
</div>

## Quick Access
{: .no_toc }

<div class="quick-links">
  <a href="{{ site.baseurl }}/pages/about/" class="btn btn-primary">About Me</a>
  <a href="{{ site.baseurl }}/pages/academic-portfolio/" class="btn btn-outline">Research</a>
  <a href="{{ site.baseurl }}/pages/public-health-focus/" class="btn btn-outline">Health Focus</a>
  <a href="{{ site.baseurl }}/assets/rauf-shah-cv.pdf" class="btn btn-outline">Download CV</a>
</div>

## What I Work On
{: .no_toc }

<div class="work-areas">
  <div class="work-item">
    <h4>🔬 Cancer Data</h4>
    <p>Building dashboards that track lymphoma and other cancers across populations</p>
  </div>
  <div class="work-item">
    <h4>💻 Data Systems</h4>
    <p>Creating pipelines that connect hospital records with public health data</p>
  </div>
  <div class="work-item">
    <h4>🏛️ Health Policy</h4>
    <p>Translating data into insights for healthcare decisions</p>
  </div>
</div>

<div class="feature-preview">
  <h3>Ask About My Research 🤖</h3>
  <p>Coming soon: Chat with an AI assistant to learn about my work</p>
</div>

<style>
.profile-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #dcdcdc;
}

.profile-info .lead {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--body-text);
}

.quick-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.work-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.work-item {
  padding: 1.5rem;
  background: var(--sidebar-bg);
  border-radius: 8px;
  border-left: 4px solid var(--link-color);
}

.work-item h4 {
  margin: 0 0 0.5rem 0;
}

.feature-preview {
  background: var(--link-color);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  text-align: center;
}

.feature-preview h3 {
  color: white;
  margin: 0 0 0.5rem 0;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
  
  .quick-links {
    justify-content: center;
  }
  
  .work-areas {
    grid-template-columns: 1fr;
  }
}
</style>