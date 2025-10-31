---
layout: default
title: Home
nav_order: 1
permalink: /
---

# Rauf Shah

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

<div class="quick-links">
  <a href="{{ site.baseurl }}/pages/about/" class="home-btn primary">About Me</a>
  <a href="{{ site.baseurl }}/pages/academic-portfolio/" class="home-btn">Research</a>
  <a href="{{ site.baseurl }}/pages/public-health-focus/" class="home-btn">Health Focus</a>
  <a href="{{ site.baseurl }}/assets/rauf-shah-cv.pdf" class="home-btn">Download CV</a>
</div>

## What I Work On

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
  padding: 1rem 0;
  border-bottom: 1px solid #eaeaea;
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
  color: #2c3e50;
  font-weight: 600;
}

.profile-info p {
  color: #555;
  line-height: 1.5;
  margin: 0;
}

.quick-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.home-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 6px;
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  transition: all 0.2s ease;
}

.home-btn:hover {
  background: #e9ecef;
  border-color: #6c757d;
  text-decoration: none;
  color: #495057;
}

.home-btn.primary {
  background: #007bff;
  border-color: #007bff;
  color: white;
}

.home-btn.primary:hover {
  background: #0056b3;
  border-color: #0056b3;
  color: white;
}

.work-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.work-item {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #007bff;
  color: #333;
}

.work-item h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.work-item p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #555;
}

.feature-preview {
  background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
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

.feature-preview p {
  margin: 0;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .quick-links {
    justify-content: center;
  }
  
  .work-areas {
    grid-template-columns: 1fr;
  }
  
  .home-btn {
    flex: 1;
    text-align: center;
    min-width: 140px;
  }
}
</style>