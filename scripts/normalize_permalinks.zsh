#!/usr/bin/env zsh
set -euo pipefail

# helper: set or replace permalink in front-matter
fix_permalink() {
  local file="$1" new="$2"
  perl -0777 -pi -e '
    # only operate if file has front matter
    if ($ARGV eq q{'$file'}) {
      if (/^---\s*\n.*?\n---\s*$/s) {
        if (/^permalink:/m) {
          s/^permalink:.*$/permalink: '"$new"'/m;
        } else {
          s/^---\s*\n/---\npermalink: '"$new"'\n/s;
        }
      } else {
        $_ = "---\npermalink: '"$new"'\n---\n" . $_;
      }
    }
  ' "$file"
}

# About children
fix_permalink pages/about/biography.md /about/biography/
fix_permalink pages/about/experience.md /about/experience/

# Academic Portfolio (section index already ok)
fix_permalink pages/academic-portfolio/leadership.md /academic-portfolio/leadership/
fix_permalink pages/academic-portfolio/people-and-principles.md /academic-portfolio/people-and-principles/
fix_permalink pages/academic-portfolio/presentations-papers.md /academic-portfolio/presentations-papers/
fix_permalink pages/academic-portfolio/service.md /academic-portfolio/service/
fix_permalink pages/academic-portfolio/teaching-philosophy.md /academic-portfolio/teaching-philosophy/
fix_permalink pages/academic-portfolio/coursework.md /academic-portfolio/coursework/
fix_permalink pages/academic-portfolio/coursework/cph-705.md /academic-portfolio/coursework/cph-705/

# Contact
fix_permalink pages/contact/index.md /contact/
fix_permalink pages/contact/email.md /contact/email/

# Public Health Focus
fix_permalink pages/public-health-focus/index.md /public-health-focus/
fix_permalink pages/public-health-focus/mph-competencies.md /public-health-focus/mph-competencies/
fix_permalink pages/public-health-focus/practice-interests.md /public-health-focus/practice-interests/
fix_permalink pages/public-health-focus/research-interests.md /public-health-focus/research-interests/
fix_permalink pages/public-health-focus/translation-to-practice.md /public-health-focus/translation-to-practice/

# Rename visible title for the DEI page we already moved
perl -0777 -pi -e 's/^title:\s*.*$/title: "People \& Principles"/m' \
  pages/academic-portfolio/people-and-principles.md

# Fix any markdown links that still point at /pages/... (strip /pages)
perl -0777 -pi -e 's#\]\(/pages/([^)]+)\)#](/$1)#g' index.md pages/**/*.md

# If the on-site sitemap page is still listing old labels/links, fix label
perl -0777 -pi -e 's/Diversity, Equity \& Inclusion/People \& Principles/g' pages/**/*.md pages/**/*.html
