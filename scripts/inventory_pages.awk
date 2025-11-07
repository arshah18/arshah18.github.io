BEGIN {
  FS=": ";
  inFront=0; title=""; permalink=""; nav_order=""; layout="";
}
function emit(file) {
  gsub("\"","",title); gsub("\"","",permalink); gsub("\"","",nav_order); gsub("\"","",layout);
  if (title=="" && file=="index.md") title="Home";
  printf("%s,%s,%s,%s,%s\n", file, title, permalink, nav_order, layout);
}
# Process each file independently
FNR==1 { title=""; permalink=""; nav_order=""; layout=""; inFront=0 }
# Detect front matter
/^---\s*$/ {
  inFront = !inFront;
  next
}
inFront==1 {
  if ($1=="title") title=$2;
  else if ($1=="permalink") permalink=$2;
  else if ($1=="nav_order") nav_order=$2;
  else if ($1=="layout") layout=$2;
}
# End of file -> emit
ENDFILE { emit(FILENAME) }
