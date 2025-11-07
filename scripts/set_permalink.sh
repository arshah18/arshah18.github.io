#!/usr/bin/env bash
# Usage: scripts/set_permalink.sh <file> </desired/permalink/>
set -euo pipefail
f="$1"; p="$2"
tmp="$(mktemp)"
awk -v P="$p" '
BEGIN{FS=OFS=""}
function emit_header(){print "---"; header_emitted=1}
{
  if(NR==1 && $0 !~ /^---\s*$/){
    # No front matter: create it
    print "---"
    print "permalink: " P
    print "---"
    print $0
    next
  }
  if(NR==1 && $0 ~ /^---\s*$/){ in_yaml=1; emit_header(); next }
  if(in_yaml){
    if($0 ~ /^---\s*$/){
      if(!seen){ print "permalink: " P }
      print "---"; in_yaml=0; next
    }
    if($0 ~ /^permalink:\s*/){
      print "permalink: " P; seen=1; next
    }
    print $0; next
  }
  print $0
}
END{
  if(!header_emitted){ print "---"; print "permalink: " P; print "---" }
}
' "$f" > "$tmp" && mv "$tmp" "$f"
