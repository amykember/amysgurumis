#!/bin/bash

set -eufo pipefail

set_path() {
    if grep -q '^path = ".*"$' "$2"; then
        sed -i '' "s|^path = ".*"\$|path = \"$1\"|" "$2"
    fi
}

set_weight() {
    if grep -q '^weight = .*$' "$2"; then
        sed -i '' "s|^weight = .*\$|weight = $1|" "$2"
    fi
}

cd "$(dirname "$0")"

while read -r f; do
    base=$(basename "$f")
    weight=${base:0:1}
    slug=${base:2:1000}
    slug=${slug%.md}
    set_path "/$slug" "$f"
    set_weight "$weight" "$f"
done < <(find content/pages -type f -name '[0-9]-*.md')

while read -r f; do
    base=$(basename "$f")
    date=${base:0:10}
    date=${date//-/\/}
    slug=${base:11:1000}
    slug=${slug%.md}
    set_path "/$date/$slug" "$f"
done < <(find content/posts -type f -name '20[0-9][0-9]-*.md')
