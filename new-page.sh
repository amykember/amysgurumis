#!/bin/bash

set -eufo pipefail

cd "$(dirname "$0")"

./fix-stuff.sh

weight=$(ls content/pages | grep '^[0-9]-' | sort | tail -n1 | cut -c 1)
((weight++))
slug="rename-me-please"
file="content/pages/$weight-$slug.md"

cat <<EOS > "$file"
+++
title = "Rename Me Please"

# Don't change the lines below, run "Fix Stuff" in VS Code. Refer to README.md.
path = "/$(date +"%Y/%m/%d")/$slug"
weight = $weight
+++

This is the first paragraph.

This is the second paragraph.

This is the third paragraph.
EOS

open -a "Visual Studio Code" "$file"
