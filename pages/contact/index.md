---
title: "Contact"
layout: page
permalink: /contact/
nav_order: 98
---

# Contact

{%- assign kids = site.pages | where_exp: "p", "p.path contains '/contact/'" | sort: "url" -%}
<ul>
{%- for p in kids -%}
  {%- if p.url != "/contact/" and p.url contains "/contact/" and p.title -%}
  <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {%- endif -%}
{%- endfor -%}
</ul>
