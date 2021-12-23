#!/bin/bash

set -eufo pipefail

cd "$(dirname "$0")"

./fix-stuff.sh

slug="rename-me-please"
file="content/posts/$(date +"%Y-%m-%d")-$slug.md"

cat <<EOS > "$file"
+++
title = "Rename Me Please"

# Don't change the line below, run "Fix Stuff" in VS Code. Refer to README.md.
path = "/$(date +"%Y/%m/%d")/$slug"
+++

This is the first paragraph.

<!-- more -->

This is the second paragraph. Don't delete the "more" comment above. It controls what shows up in the summary before clicking into a post. You should usually just have one paragraph in the summary.

This is the third paragraph.
EOS

open -a "Visual Studio Code" "$file"
