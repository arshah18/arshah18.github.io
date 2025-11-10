---
title: "Contact"
layout: default
permalink: /contact/
nav_order: 98
description: How to get in touch for collaborations, accreditation work, speaking, or mentoring.
---

# Contact

{: .lead }
Best way to reach me for collaborations, accreditation/quality projects, speaking, or mentoring.

<div class="contact-methods">
  <div class="contact-card">
    <h3>Email (fastest)</h3>
    <p>I typically reply within 24-48 hours on weekdays.</p>
    <p>
      <a class="button primary" href="mailto:abrshah@unmc.edu?subject=Inquiry%20from%20website%20-%20%5BTopic%5D&body=Hello%20Dr.%20Shah%2C%0A%0AProject%20overview%3A%20%0AData%20context%3A%20%0ATimeline%2Fdeadline%3A%20%0AKey%20question%3A%20%0A%0AThanks%2C%0A">Email abrshah@unmc.edu</a>
      <a class="button secondary" href="{{ "/contact/email/" | relative_url }}">Email guidance & tips</a>
    </p>
  </div>

  <div class="contact-card">
    <h3>LinkedIn</h3>
    <p>Professional networking and quick introductions.</p>
    <p><a class="button secondary" href="https://www.linkedin.com/in/rauf-s-a4634528/" target="_blank" rel="noopener">View profile</a></p>
  </div>

  <div class="contact-card">
    <h3>Publications</h3>
    <p>Research profile and citation record.</p>
    <p><a class="button secondary" href="https://scholar.google.com/citations?user=Aje0C8AAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a></p>
  </div>
</div>

---

### Notes
- Please **avoid patient-specific/urgent clinical queries**; use the appropriate clinical channels.
- If your message involves data, a brief note on **data type/approvals** helps me route it correctly.

---

## Also in this section
{%- assign kids = site.pages | where_exp: "p", "p.path contains '/contact/'" | sort: "url" -%}
<ul>
{%- for p in kids -%}
  {%- if p.url != "/contact/" and p.url contains "/contact/" and p.title -%}
  <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {%- endif -%}
{%- endfor -%}
</ul>
