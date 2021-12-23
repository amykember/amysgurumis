#!/bin/bash

set -Heufo pipefail

cd "$(dirname "$0")"

./fix-stuff.sh
zola build
git add .

if [[ -z "$(git status --porcelain)" ]]; then
    printf "\x1b[31;1m" >&2
    echo "==================================================" >&2
    echo "NO CHANGES TO PUBLISH!" >&2
    echo "==================================================" >&2
    printf "\n\x1b[0m" >&2
    exit 1
fi

git commit -m "$1"
git push
