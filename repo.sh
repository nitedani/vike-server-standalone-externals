#!/bin/bash

# Get files with their last modification dates
git ls-files "*.ts" "*.tsx" "*.json" "*.yaml" "*.yml" "*.sh" "*.bat" "*.go" |
grep -v -E 'package-lock.json|yarn.lock|pnpm-lock.yaml|npm-shrinkwrap.json' |
while IFS= read -r file; do
  # Get timestamp of last modification
  timestamp=$(git log -1 --format="%at" -- "$file")
  current_time=$(date +%s)
  # Calculate months difference (approximately)
  months_diff=$(( (current_time - timestamp) / (30 * 24 * 60 * 60) ))
  
  if [ "$months_diff" -lt 2 ]; then
    echo -e "\n### FILE: $file ###"
    echo -e "// Last modified: $(git log -1 --format="%ad" -- "$file")\n"
    cat "$file"
    echo -e "\n"
  fi
done > repo_contents.txt