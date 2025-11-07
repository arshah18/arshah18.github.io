#!/usr/bin/env zsh
set -euo pipefail

FILES=("${(@f)$(git ls-files '*.md' '*.html' 'index.md')}")

# 1) Markdown: normalize /assets/images/... and wrap with relative_url
perl -0777 -pi -e 's#\]\((?:/)?assets/images/([^)"]+\.(?:png|jpe?g|gif|svg|webp))\)#]({{ "/assets/images/$1" | relative_url }})#g' $FILES

# 2) Markdown: legacy /assets/headshot|portrait → /assets/images/... with relative_url
perl -0777 -pi -e 's#\]\((?:/)?assets/((?:headshot|portrait)\.jpe?g)\)#]({{ "/assets/images/$1" | relative_url }})#g' $FILES

# 3) HTML <img>: already under /assets/images → wrap with relative_url
perl -0777 -pi -e 's#(<img[^>]*\bsrc=)(["'\''])(?:/)?assets/images/([^"'\''>]+)\2#$1$2{{ "/assets/images/$3" | relative_url }}$2#g' $FILES

# 4) HTML <img>: legacy /assets/headshot|portrait → /assets/images/... with relative_url
perl -0777 -pi -e 's#(<img[^>]*\bsrc=)(["'\''])(?:/)?assets/((?:headshot|portrait)\.jpe?g)\2#$1$2{{ "/assets/images/$3" | relative_url }}$2#g' $FILES
