---
title: Sitemap
layout: page
permalink: /sitemap/
nav_order: 100
---

# Sitemap
{% assign pages_all = site.pages | sort: "url" %}
<ul>
{% for p in pages_all %}
  {% unless p.url contains "/assets/" or p.url == "/404.html" or p.layout == "redirect" %}
    <li><a href="{{ p.url | relative_url }}">{{ p.title | default: p.path }}</a> <code>{{ p.url }}</code></li>
  {% endunless %}
{% endfor %}
</ul>
