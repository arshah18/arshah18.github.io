---
layout: default
title: Surveys
nav_order: 10
has_children: true
permalink: /surveys/
---

# Public Health Training: Survey Hub

Use this hub to route participants to the correct survey or display QR codes on slides.

- 👉 **Immediate Post-Session**
  - **QR / Router:** [Open]({{ "/surveys/immediate/" | relative_url }})
  - **Hosted HTML Form:** [Open]({{ "/surveys/forms/immediate/" | relative_url }})

- 👉 **Six-Month Follow-Up**
  - **QR / Router:** (coming soon)
  - **Hosted HTML Form:** (coming soon)

---

## Pro tip: quick link override (no file edits)
Append a `?url=` query parameter to prefill the destination form link.

**Examples**
- Immediate:  
  `{{ site.url }}{{ site.baseurl }}/surveys/immediate/?url=https%3A%2F%2Fforms.gle%2FREPLACE_IMMEDIATE`
- Six-month:  
  `{{ site.url }}{{ site.baseurl }}/surveys/six-month/?url=https%3A%2F%2Fforms.gle%2FREPLACE_SIX_MONTH`
