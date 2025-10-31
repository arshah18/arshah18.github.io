---
layout: home
title: Home
nav_order: 1
permalink: /
---

<!-- Modern Academic Homepage -->

<div class="hero-section">
  <div class="profile-header">
    <img src="{{ site.baseurl }}/assets/portrait.jpg" 
         alt="Rauf Shah" 
         class="profile-image"
         onerror="this.onerror=null;this.src='{{ site.baseurl }}/assets/headshot.jpg';">
    <div class="profile-text">
      <h1>Rauf Shah</h1>
      <p class="tagline">Health Data Scientist • Public Health Researcher</p>
      <p class="brief-intro">I build data systems that connect clinical care with public health to improve cancer outcomes.</p>
    </div>
  </div>

  <!-- Quick Access Cards -->
  <div class="quick-access">
    <a href="{{ site.baseurl }}/pages/about/" class="card">
      <h3>👋 About Me</h3>
      <p>My background & journey</p>
    </a>
    
    <a href="{{ site.baseurl }}/pages/academic-portfolio/" class="card">
      <h3>🎓 Research</h3>
      <p>Projects & publications</p>
    </a>
    
    <a href="{{ site.baseurl }}/pages/public-health-focus/" class="card">
      <h3>🏥 Health Focus</h3>
      <p>Cancer & epidemiology work</p>
    </a>
    
    <a href="{{ site.baseurl }}/assets/rauf-shah-cv.pdf" class="card">
      <h3>📄 CV</h3>
      <p>Download my resume</p>
    </a>
  </div>
</div>

<!-- What I Do - Simplified -->
<div class="focus-areas">
  <h2>What I Work On</h2>
  <div class="focus-grid">
    <div class="focus-item">
      <h3>🔬 Cancer Data</h3>
      <p>Building dashboards that track lymphoma and other cancers across populations</p>
    </div>
    <div class="focus-item">
      <h3>💻 Data Systems</h3>
      <p>Creating pipelines that connect hospital records with public health data</p>
    </div>
    <div class="focus-item">
      <h3>🏛️ Health Policy</h3>
      <p>Translating data into insights for healthcare decisions</p>
    </div>
  </div>
</div>

<!-- AI Research Assistant Preview -->
<div class="ai-preview">
  <h2>Ask About My Research 🤖</h2>
  <p>Soon: Chat with an AI assistant to learn about my work in public health informatics</p>
  <small>Coming feature - Interactive research explorer</small>
</div>

<style>
.hero-section {
  text-align: center;
  padding: 2rem 0;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #f0f0f0;
}

.profile-text h1 {
  margin: 0;
  color: #2c3e50;
}

.tagline {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin: 0.5rem 0;
}

.brief-intro {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 500px;
}

.quick-access {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: #3498db;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.focus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.focus-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.ai-preview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
  text-align: center;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
  
  .quick-access {
    grid-template-columns: 1fr 1fr;
  }
}
</style>