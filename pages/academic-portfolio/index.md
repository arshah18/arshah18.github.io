---
title: "Academic Portfolio"
layout: page
permalink: /academic-portfolio/
nav_order: 3
---

# Academic Portfolio

{%- assign kids = site.pages | where_exp: "p", "p.path contains '/academic-portfolio/'" | sort: "url" -%}
<ul>
{%- for p in kids -%}
  {%- if p.url != "/academic-portfolio/" and p.url contains "/academic-portfolio/" and p.title -%}
  <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {%- endif -%}
{%- endfor -%}
</ul>
