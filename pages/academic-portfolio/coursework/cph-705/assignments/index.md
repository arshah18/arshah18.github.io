---
layout: default
title: CPH 705 — Assignments Hub
parent: CPH 705
grand_parent: Academic Portfolio
nav_order: 99
permalink: /academic-portfolio/coursework/cph-705/assignments/
---

# CPH 705 — Assignments Hub

Below are assignments and notes that are **hidden from the sidebar** but collected here for easy access.

<ul>
{% assign items = site.pages | where: "category", "cph705-assignments" | sort: "title" %}
{% for p in items %}
  <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
{% endfor %}
</ul>
