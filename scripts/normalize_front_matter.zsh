#!/usr/bin/env zsh
set -euo pipefail

# Map desired nav order by "section root" (first path segment under pages).
# Lower numbers appear earlier in the sidebar.
typeset -A ORDER
ORDER[about]=1
ORDER[public-health-focus]=2
ORDER[academic-portfolio]=3
ORDER[contact]=98
ORDER[surveys]=99

# Friendly titles for section indexes
typeset -A SECTION_TITLE
SECTION_TITLE[about]="About"
SECTION_TITLE[public-health-focus]="Public Health Focus"
SECTION_TITLE[academic-portfolio]="Academic Portfolio"
SECTION_TITLE[contact]="Contact"
SECTION_TITLE[surveys]="Survey Hub"

# Converts "presentations-papers.md" -> "Presentations & Papers", "mph-competencies" -> "MPH Competencies"
function nice_title() {
  local base="$1"
  base="${base:r}"               # strip .md/.html
  base="${base//-/ }"            # dashes -> spaces
  base="${(C)base}"              # title case
  base="${base//And/&}"          # cosmetic: "And" -> "&" for some filenames
  echo "$base"
}

# Build a permalink from path like pages/foo/bar.md -> /foo/bar/
function permalink_for() {
  local f="$1"
  local seg="${f#pages/}"        # drop leading pages/
  seg="${seg#./}"                # drop leading ./ if present
  seg="${seg%index.md}"          # keep trailing slash for index.md
  seg="${seg%.md}"               # drop .md
  seg="${seg%.html}"             # drop .html
  echo "/${seg}/" | sed 's|//\+|/|g'
}

# Section root (between pages/ and next slash) -> e.g., pages/about/biography.md => "about"
function section_root() {
  local f="$1"
  local s="${f#pages/}"
  echo "${s%%/*}"
}

# Detect front matter
function has_front_matter() {
  local f="$1"
  IFS= read -r first < "$f" || true
  [[ "$first" == '---' ]]
}

# Ensure a header exists; if not, add one.
function ensure_header() {
  local f="$1"
  local sec="$(section_root "$f")"
  local title=""
  local permalink=""
  local nav_order=""
  local layout="page"

  # Title defaults:
  if [[ "$f" == "index.md" ]]; then
    title="Home"
    permalink="/"
    layout="home"
    nav_order="1"
  else
    local base="$(basename "$f")"
    # Section index pages (…/index.md)
    if [[ "$base" == "index.md" ]]; then
      title="${SECTION_TITLE[$sec]:-$(nice_title "$sec")}"
    else
      title="$(nice_title "$base")"
    fi
    permalink="$(permalink_for "$f")"
    nav_order="${ORDER[$sec]:-50}"
  fi

  # Create missing header
  if ! has_front_matter "$f"; then
    tmp="$(mktemp)"
    {
      echo "---"
      echo "title: \"$title\""
      echo "layout: $layout"
      echo "permalink: $permalink"
      echo "nav_order: $nav_order"
      echo "---"
      echo
      cat "$f"
    } > "$tmp"
    mv "$tmp" "$f"
  fi
}

# Normalize specific titles/permalinks for known pages
function specialize_known_pages() {
  local f="$1"
  local base="$(basename "$f")"
  local dir="$(dirname "$f")"

  # Pairs of "path pattern" → "title override"
  case "$f" in
    pages/academic-portfolio/presentations-papers.md)
      gsed -i '1,/^---$/!b; s/^title:.*$/title: "Presentations & Papers"/' "$f" 2>/dev/null || \
      perl -0777 -pe 'BEGIN{$x=1} s/title:\s*.*/title: "Presentations & Papers"/ if $.==1' "$f" >/dev/null 2>&1 || true
      ;;
    pages/academic-portfolio/teaching-philosophy.md|pages/teaching-philosophy.md)
      # prefer /academic-portfolio/teaching-philosophy/
      ;;
  esac
}

# Make section index files if needed (turn readme.md into index.md or create an index)
function ensure_section_index() {
  local sec="$1"
  local idx="pages/$sec/index.md"
  if [[ ! -f "$idx" ]]; then
    local title="${SECTION_TITLE[$sec]:-$(nice_title "$sec")}"
    cat > "$idx" <<EOF
---
title: "$title"
layout: page
permalink: /$sec/
nav_order: ${ORDER[$sec]:-50}
---

# $title

{%- assign kids = site.pages | where_exp: "p", "p.path contains '/$sec/'" | sort: "url" -%}
<ul>
{%- for p in kids -%}
  {%- if p.url != "/$sec/" and p.url contains "/$sec/" and p.title -%}
  <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {%- endif -%}
{%- endfor -%}
</ul>
EOF
    git add "$idx"
  fi
}

# 1) Ensure section indexes
for sec in about public-health-focus academic-portfolio contact surveys; do
  ensure_section_index "$sec"
done

# 2) Process all content files
FILES=("${(@f)$(git ls-files '*.md' '*.html' 'index.md' 2>/dev/null)}")
for f in "${FILES[@]}"; do
  # Skip non-content roots
  [[ "$f" == _site/* || "$f" == _includes/* || "$f" == _layouts/* || "$f" == _sass/* ]] && continue
  ensure_header "$f"
  specialize_known_pages "$f"
done

echo "Front matter normalized."
