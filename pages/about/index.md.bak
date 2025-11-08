---
title: "About"
layout: page
permalink: /about/
nav_order: 1
---

> *Currently serving as an **elected member** of the **College of Public Health Curriculum Committee** (since Oct 2025).*


# About

{%- assign kids = site.pages | where_exp: "p", "p.path contains '/about/'" | sort: "url" -%}
<ul>
{%- for p in kids -%}
  {%- if p.url != "/about/" and p.url contains "/about/" and p.title -%}
  <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {%- endif -%}
{%- endfor -%}
</ul>
